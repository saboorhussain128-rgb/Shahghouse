/**
 * ===================================================================
 * SHAH GHOUSE HOTEL & RESTAURANT - LOCAL WEB SERVER (server.js)
 * Serves the Shah Ghouse luxury web application on http://localhost:3000
 * ===================================================================
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 3000;
const ROOT_DIR = path.resolve(__dirname);

// Supported Content Types
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.mp4': 'video/mp4',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.txt': 'text/plain; charset=utf-8'
};

const server = http.createServer((req, res) => {
  // CORS & Security headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // Parse path using modern WHATWG URL API (no deprecation warnings)
  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost:3000'}`);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  // If root requested, serve index.html
  if (pathname === '/' || pathname === '') {
    pathname = '/index.html';
  }

  // Sanitize path against directory traversal
  let safePath = path.normalize(path.join(ROOT_DIR, pathname));
  if (!safePath.startsWith(ROOT_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('403 Forbidden');
    return;
  }

  // Check if directory
  if (fs.existsSync(safePath) && fs.statSync(safePath).isDirectory()) {
    safePath = path.join(safePath, 'index.html');
  }

  fs.stat(safePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Fallback: If file not found, check if index.html can be served
      const indexPath = path.join(ROOT_DIR, 'index.html');
      if (fs.existsSync(indexPath)) {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        fs.createReadStream(indexPath).pipe(res);
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('404 Not Found');
      }
      return;
    }

    const ext = path.extname(safePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Content-Length': stats.size,
      'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=86400'
    });

    fs.createReadStream(safePath).pipe(res);
  });
});

function startServer(port = PORT) {
  if (!server.listening) {
    server.listen(port, () => {
      console.log('==========================================================');
      console.log('🍗 SHAH GHOUSE AUTHENTIC CUISINE - LOCAL WEB SERVER');
      console.log('==========================================================');
      console.log(`🚀 Website is LIVE at:    http://localhost:${port}`);
      console.log(`🌐 Network address:       http://127.0.0.1:${port}`);
      console.log('✨ Press Ctrl+C anytime to stop the server.');
      console.log('==========================================================');
    });
  }
  return server;
}

if (require.main === module) {
  startServer();
}

module.exports = { server, startServer };
