# 👑 Shahghouse Yarns & Textiles

Official web platform for **Shahghouse Yarns & Textiles**, inspired by the royal heritage aesthetic of the official brand ([@shahghouseofficial](https://www.instagram.com/shahghouseofficial)).

---

## 🚀 Live Demo & Hosting
* **Target Repository:** [https://github.com/saboorhussain128-rgb/Shahghouse](https://github.com/saboorhussain128-rgb/Shahghouse)
* **GitHub Pages URL:** `https://saboorhussain128-rgb.github.io/Shahghouse/`

---

## 📂 Project Structure
```text
Shahghouse/
│
├── index.html        # Complete website structure, Hero, Catalog, Staff Gate & Admin Modals
├── style.css         # Royal Maroon & Burnished Gold responsive styling system
├── app.js            # Client-side engine, Auth (Owner/Manager), dynamic state & LocalStorage
├── logo.svg          # High-definition scalable vector logo with royal crown & spindle
├── image.png         # Brand image & logo asset
└── README.md         # Documentation & deployment guide
```

---

## 🔐 Staff Portal Login Credentials

Click **"Staff Login"** in the top header or use the 1-click helper buttons on the login screen:

| Role | Username / Email | Default Password | Permissions |
| :--- | :--- | :--- | :--- |
| **Owner** | `owner@shahghouse` | `owner@shahghouse` | **Full Administrative Access**: Add new website features, edit hero banners, manage yarn catalog, delete/edit items, manage inquiries, export JSON |
| **Manager** | `manager@shahghouse` | `manager@shahghouse` | **Operations Access**: Add/update yarn stock and catalog, view incoming customer quotations |

---

## 👔 The Staff Icon Workflow

1. **Login:** Enter the site using the Owner or Manager credentials.
2. **Staff Icon in Header:** Once authenticated, a dedicated **Staff Icon** (`👔 Staff Portal: Owner` or `👔 Staff Portal: Manager`) with a live green indicator pulse appears in the top navigation bar.
3. **Open Management Dashboard:** Click the Staff Icon to open the Management Dashboard.
4. **Add New Features (Owner Exclusive):**
   * Go to the **"👑 Add New Features"** tab.
   * Enter a **Feature Title**, **Category Badge**, **Icon/Emoji**, and **Description**.
   * Click **"Add Feature & Update Live Website"**.
   * The new feature appears **immediately** in the "The Shahghouse Advantage" section on the live site!
5. **Manage Catalog & Save:** Add new yarn counts, update stock, or modify the hero banner. All changes are saved instantly to local storage and update the live page without needing a page refresh.

---

## 📤 How to Push to GitHub & Enable GitHub Pages

Open your terminal or command prompt inside this folder (`c:\Users\Lenovo\Desktop\Shahghouse`) and run:

```bash
# 1. Initialize git repository
git init

# 2. Add all files
git add .

# 3. Commit your files
git commit -m "feat: Initial commit for Shahghouse Yarns website with Owner/Manager portal"

# 4. Set branch to main
git branch -M main

# 5. Add your GitHub remote repository
git remote add origin https://github.com/saboorhussain128-rgb/Shahghouse.git

# 6. Push to GitHub
git push -u origin main
```

### 🌐 Enable GitHub Pages in 2 Clicks:
1. Go to your repository on GitHub: `https://github.com/saboorhussain128-rgb/Shahghouse`
2. Navigate to **Settings** &rarr; **Pages** (on the left sidebar).
3. Under **Branch**, select `main` and folder `/(root)`.
4. Click **Save**.
5. Your website will be live in ~60 seconds at:
   **`https://saboorhussain128-rgb.github.io/Shahghouse/`**
