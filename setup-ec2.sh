#!/bin/bash
set -e

echo "=========================================================="
echo "    Shah Ghouse Authentic Cuisine - EC2 Auto-Setup        "
echo "=========================================================="

# 1. Update system packages
echo "📦 Updating package lists..."
sudo apt-get update -y

# 2. Install Nginx and Git
echo "🌐 Installing Nginx and Git..."
sudo apt-get install -y nginx git curl

# 3. Setup web directory
WEB_DIR="/var/www/shahghouse"
echo "📂 Setting up web directory at $WEB_DIR..."

sudo git config --global --add safe.directory "$WEB_DIR" || true
git config --global --add safe.directory "$WEB_DIR" || true

if [ ! -d "$WEB_DIR/.git" ]; then
    sudo rm -rf "$WEB_DIR"
    sudo git clone https://github.com/saboorhussain128-rgb/Shahghouse.git "$WEB_DIR"
else
    cd "$WEB_DIR"
    sudo git fetch --all
    sudo git reset --hard origin/main
fi

# 4. Set ownership and permissions
echo "🔒 Configuring permissions..."
sudo chown -R www-data:www-data "$WEB_DIR"
sudo chmod -R 755 "$WEB_DIR"

# Allow ubuntu user to manage web directory without password issues in CI/CD
sudo usermod -a -G www-data ubuntu || true

# 5. Configure Nginx Server Block
echo "⚙️ Configuring Nginx server block..."
cat << 'EOF' | sudo tee /etc/nginx/sites-available/shahghouse
server {
    listen 80 default_server;
    listen [::]:80 default_server;

    root /var/www/shahghouse;
    index index.html;

    server_name _;

    location / {
        try_files $uri $uri/ /index.html =404;
    }

    # Static media and cache optimization
    location ~* \.(css|js|png|jpg|jpeg|gif|svg|ico|webp)$ {
        expires 7d;
        add_header Cache-Control "public, no-transform";
    }

    # Gzip Compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied any;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml;
}
EOF

# 6. Enable site configuration & remove default page
sudo rm -f /etc/nginx/sites-enabled/default
sudo ln -sf /etc/nginx/sites-available/shahghouse /etc/nginx/sites-enabled/

# 7. Test configuration and restart Nginx
echo "🔄 Verifying and starting Nginx service..."
sudo nginx -t
sudo systemctl restart nginx
sudo systemctl enable nginx

# 8. Get Public IP
PUBLIC_IP=$(curl -s -m 5 https://api.ipify.org || curl -s -m 5 http://checkip.amazonaws.com || echo "your-ec2-ip")

echo "=========================================================="
echo "🎉 SUCCESS! Shah Ghouse is LIVE on AWS EC2!"
echo "👉 Open in your browser: http://$PUBLIC_IP"
echo "=========================================================="
