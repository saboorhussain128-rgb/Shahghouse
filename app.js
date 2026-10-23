/**
 * ===================================================================
 * SHAH GHOUSE HOTEL & RESTAURANT - OFFICIAL ENGINE (app.js)
 * Hyderabad's Legendary Dum Biryani, Haleem & Nizami Cuisine Since 1984
 * Instagram: @shahghouseofficial
 * Roles: Owner (Full menu & feature manager) & Manager (Inventory & orders)
 * ===================================================================
 */

// Initial Seed Data for Shah Ghouse Restaurant Menu
const RESTAURANT_DATA = {
  hero: {
    tag: "HYDERABAD'S CULINARY HERITAGE • SINCE 1984",
    title: "World Famous Hyderabadi Dum Biryani & Nizami Flavors",
    subtitle: "Experience four decades of authentic Mughlai perfection. From slow-cooked Zafrani Mutton Biryani and Desi Ghee Haleem to smoky Pathar Ka Gosht and freshly brewed Irani Chai.",
    announcement: "🔥 Outlets Open 11:30 AM to 2:00 AM | Takeaway, Dine-in & WhatsApp Delivery Active across Hyderabad!"
  },
  settings: {
    whatsapp: "+919849012345",
    phone: "040-23561234",
    email: "orders@shahghouseofficial.com",
    instagram: "https://www.instagram.com/shahghouseofficial",
    timing: "11:30 AM – 02:00 AM (Midnight)",
    outlets: [
      { name: "Tolichowki (Flagship)", address: "Beside RTA Office, Tolichowki, Hyderabad", phone: "040-64617789" },
      { name: "Gachibowli", address: "Opp. Bio-Diversity Park, Telecom Nagar, Gachibowli", phone: "040-29803456" },
      { name: "Lakdikapul", address: "Main Road, Opp. Telephone Bhavan, Lakdikapul", phone: "040-23238990" },
      { name: "Shahalibanda", address: "Syed Ali Chabootra, Old City, Hyderabad", phone: "040-24521234" },
      { name: "Charminar", address: "Near Historic Charminar, Old City, Hyderabad", phone: "040-24567890" }
    ]
  },
  features: [
    {
      id: "feat-1",
      icon: "👑",
      title: "Authentic Dum Cooking",
      badge: "TRADITION",
      desc: "Slow-cooked in sealed copper handis over burning charcoal embers, sealing in the royal saffron, pure ghee, and tender meat juices."
    },
    {
      id: "feat-2",
      icon: "🍲",
      title: "Legendary Mutton Haleem",
      badge: "RAMZAN SPECIAL",
      desc: "Pounded continuously for 12 hours with broken wheat, pure meat, shahi spices, desi ghee, roasted cashews, and fried onions."
    },
    {
      id: "feat-3",
      icon: "🔥",
      title: "Authentic Pathar Ka Gosht",
      badge: "NIZAMI HERITAGE",
      desc: "Prime tender mutton cuts marinated overnight and cooked over a heated granite stone slab for an unforgettable melt-in-mouth texture."
    },
    {
      id: "feat-4",
      icon: "☕",
      title: "Royal Irani Chai & Osmania",
      badge: "CULTURE",
      desc: "Thick khowa-rich dum tea paired with crisp butter-rich Osmania biscuits, served round the clock."
    }
  ],
  categories: [
    { id: "all", name: "All Specialties" },
    { id: "biryani", name: "Dum Biryani & Mandi" },
    { id: "haleem", name: "Haleem & Soups" },
    { id: "kebabs", name: "Starters & Kebabs" },
    { id: "curries", name: "Nizami Curries" },
    { id: "breads", name: "Tandoori Breads" },
    { id: "irani-chai", name: "Irani Chai & Bakery" },
    { id: "desserts", name: "Royal Desserts" }
  ],
  menu: [
    // BIRYANI & MANDI
    {
      id: "dish-1",
      name: "Special Mutton Dum Biryani",
      category: "biryani",
      type: "nonveg",
      price: "₹380",
      portion: "Full (Serves 1-2)",
      status: "in",
      special: true,
      desc: "Fragrant long-grain aged basmati rice layered with succulent spiced mutton, pure saffron, and desi ghee, served with Mirchi Ka Salan & Dahi Ki Chutney.",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "dish-2",
      name: "Hyderabadi Chicken Dum Biryani",
      category: "biryani",
      type: "nonveg",
      price: "₹280",
      portion: "Full Portion",
      status: "in",
      special: false,
      desc: "Classic Hyderabadi chicken dum biryani infused with fresh mint, coriander, brown fried onions, and whole aromatic spices.",
      image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "dish-3",
      name: "Zafrani Mutton Dum Biryani (Jumbo Pack)",
      category: "biryani",
      type: "nonveg",
      price: "₹890",
      portion: "Jumbo (Serves 4-5)",
      status: "in",
      special: true,
      desc: "Family feast portion with extra tender mutton pieces, royal Kashmiri saffron infusion, and boiled eggs.",
      image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "dish-4",
      name: "Arabian Mutton Mandi",
      category: "biryani",
      type: "nonveg",
      price: "₹650",
      portion: "Platter (Serves 2)",
      status: "in",
      special: true,
      desc: "Smoky pit-cooked mutton shank served atop aromatic dry-fruit spiced mandi rice with fiery tomato salsa.",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80"
    },

    // HALEEM & SOUPS
    {
      id: "dish-5",
      name: "Shah Ghouse Special Mutton Haleem",
      category: "haleem",
      type: "nonveg",
      price: "₹290",
      portion: "1 Bowl (Single)",
      status: "in",
      special: true,
      desc: "The undisputed signature of Hyderabad. Pounded tender mutton, lentils, and cracked wheat slow-cooked with pure ghee, garnished with cashews and lemon.",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "dish-6",
      name: "Hyderabadi Mutton Marag",
      category: "haleem",
      type: "nonveg",
      price: "₹240",
      portion: "Soup Bowl",
      status: "in",
      special: false,
      desc: "A rich, velvety bone soup simmered with tender mutton chops, pistachio-almond paste, and whole black peppercorns.",
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=700&q=80"
    },

    // KEBABS & STARTERS
    {
      id: "dish-7",
      name: "Pathar Ka Gosht (Signature Stone Kebab)",
      category: "kebabs",
      type: "nonveg",
      price: "₹390",
      portion: "8 Pieces",
      status: "in",
      special: true,
      desc: "Thinly sliced mutton fillets marinated in raw papaya and exotic shahi spices, seared over heated natural granite stone.",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "dish-8",
      name: "Authentic Hyderabadi Chicken 65",
      category: "kebabs",
      type: "nonveg",
      price: "₹290",
      portion: "Full Plate",
      status: "in",
      special: false,
      desc: "Crispy chicken cubes tossed with curry leaves, crushed garlic, slit green chillies, and yogurt-based tangy sauce.",
      image: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "dish-9",
      name: "Chicken Majestic",
      category: "kebabs",
      type: "nonveg",
      price: "₹310",
      portion: "Full Plate",
      status: "in",
      special: false,
      desc: "Tender fried chicken strips coated with curd, mint paste, and aromatic spices in a dry Nizami preparation.",
      image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "dish-10",
      name: "Tandoori Tangdi Kebab",
      category: "kebabs",
      type: "nonveg",
      price: "₹320",
      portion: "4 Pieces",
      status: "in",
      special: false,
      desc: "Juicy chicken drumsticks marinated in spiced yogurt and roasted in a traditional clay tandoor oven.",
      image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "dish-11",
      name: "Paneer Tikka Shashlik",
      category: "kebabs",
      type: "veg",
      price: "₹260",
      portion: "6 Large Chunks",
      status: "in",
      special: false,
      desc: "Fresh cottage cheese cubes marinated in tandoori masala and grilled on skewers with bell peppers and onions.",
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=700&q=80"
    },

    // NIZAMI CURRIES
    {
      id: "dish-12",
      name: "Mutton Rogan Josh",
      category: "curries",
      type: "nonveg",
      price: "₹360",
      portion: "Curry Bowl",
      status: "in",
      special: false,
      desc: "Slow-cooked Kashmiri mutton curry rich in alkanet root, fennel, ginger, and aromatic spices in silky gravy.",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "dish-13",
      name: "Royal Dum Ka Murgh",
      category: "curries",
      type: "nonveg",
      price: "₹320",
      portion: "Curry Bowl",
      status: "in",
      special: true,
      desc: "Whole chicken pieces cooked in a sealed pot with almond-cashew paste, poppy seeds, and saffron cream.",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "dish-14",
      name: "Paneer Butter Masala",
      category: "curries",
      type: "veg",
      price: "₹240",
      portion: "Curry Bowl",
      status: "in",
      special: false,
      desc: "Soft cottage cheese in a mildly sweet and rich tomato-butter gravy with kasuri methi.",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=80"
    },

    // TANDOORI BREADS
    {
      id: "dish-15",
      name: "Rumali Roti / Butter Naan Basket",
      category: "breads",
      type: "veg",
      price: "₹60",
      portion: "Fresh from Tandoor",
      status: "in",
      special: false,
      desc: "Thin-as-handkerchief Rumali roti or fluffy tandoor-baked Butter Naan brushed with melted butter.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80"
    },

    // IRANI CHAI & BAKERY
    {
      id: "dish-16",
      name: "Special Hyderabadi Irani Chai & Osmania Platter",
      category: "irani-chai",
      type: "veg",
      price: "₹80",
      portion: "Chai + 4 Biscuits",
      status: "in",
      special: true,
      desc: "Thick caramelized dum tea paired with authentic sweet-and-salty Osmania biscuits. The pride of Hyderabad cafes.",
      image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=700&q=80"
    },

    // DESSERTS
    {
      id: "dish-17",
      name: "Qubani Ka Meetha (with Fresh Malai)",
      category: "desserts",
      type: "veg",
      price: "₹160",
      portion: "Dessert Bowl",
      status: "in",
      special: true,
      desc: "Slow-stewed dried apricots flavored with rose water and topped with apricot kernels and dollops of fresh clotted cream.",
      image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "dish-18",
      name: "Hyderabadi Double Ka Meetha",
      category: "desserts",
      type: "veg",
      price: "₹140",
      portion: "Dessert Bowl",
      status: "in",
      special: false,
      desc: "Golden fried bread soaked in saffron-infused rabri, garnished with pistachios, silver leaf, and roasted almonds.",
      image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=700&q=80"
    }
  ],
  orders: [
    {
      id: "ord-1",
      date: "2026-10-23",
      customer: "Mohammed Farhan",
      phone: "+91 98480 54321",
      dish: "Special Mutton Dum Biryani (Full) + Haleem",
      type: "Table Dine-in (Tolichowki Branch)",
      status: "Serving"
    }
  ]
};

// Application State
let appData = null;
let currentUser = null; // { role: 'owner' | 'manager', username: '...' }

// Load or Seed Data
function initData() {
  const saved = localStorage.getItem('shahghouse_restaurant_data_v2');
  if (saved) {
    try {
      appData = JSON.parse(saved);
    } catch (e) {
      console.error("Failed to parse saved data, resetting to defaults", e);
      appData = JSON.parse(JSON.stringify(RESTAURANT_DATA));
    }
  } else {
    appData = JSON.parse(JSON.stringify(RESTAURANT_DATA));
    saveData();
  }

  // Check saved session
  const savedUser = localStorage.getItem('shahghouse_session_user');
  if (savedUser) {
    try {
      currentUser = JSON.parse(savedUser);
    } catch (e) {
      currentUser = null;
    }
  }
}

function saveData() {
  localStorage.setItem('shahghouse_restaurant_data_v2', JSON.stringify(appData));
}

// Show Toast
function showToast(message, icon = "✅") {
  const toast = document.getElementById('toastNotice');
  const toastMsg = document.getElementById('toastMsg');
  const toastIcon = document.getElementById('toastIcon');
  if (!toast) return;

  toastMsg.textContent = message;
  toastIcon.textContent = icon;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

// Render Public Website Elements
function renderPublicSite() {
  // Update Hero & Announcement
  const heroTag = document.getElementById('heroTag');
  const heroTitle = document.getElementById('heroTitle');
  const heroSubtitle = document.getElementById('heroSubtitle');
  const topAnnouncement = document.getElementById('topAnnouncement');

  if (heroTag) heroTag.textContent = appData.hero.tag;
  if (heroTitle) heroTitle.textContent = appData.hero.title;
  if (heroSubtitle) heroSubtitle.textContent = appData.hero.subtitle;
  if (topAnnouncement) topAnnouncement.textContent = appData.hero.announcement;

  // Render Features (dynamically added by Owner)
  renderFeaturesList();

  // Render Category Filter Buttons
  renderCategoryPills();

  // Render Menu Products
  renderMenuList('all');

  // Update Header UI depending on login state
  updateHeaderAuthUI();
}

// Render Features
function renderFeaturesList() {
  const container = document.getElementById('featuresGrid');
  if (!container) return;

  container.innerHTML = appData.features.map(f => `
    <div class="feature-card" id="card-${f.id}">
      <span class="feature-badge">${escapeHtml(f.badge || 'SPECIAL')}</span>
      <div class="feature-icon-box">${f.icon || '🍲'}</div>
      <h3 class="feature-title">${escapeHtml(f.title)}</h3>
      <p class="feature-desc">${escapeHtml(f.desc)}</p>
    </div>
  `).join('');
}

// Render Category Filter Pills
function renderCategoryPills() {
  const container = document.getElementById('categoryFilters');
  if (!container) return;

  container.innerHTML = appData.categories.map((cat, idx) => `
    <button class="filter-btn ${idx === 0 ? 'active' : ''}" data-filter="${cat.id}">
      ${escapeHtml(cat.name)}
    </button>
  `).join('');

  // Re-bind click events
  setupFilters();
}

// Render Restaurant Menu Items
function renderMenuList(filter = 'all') {
  const container = document.getElementById('productsGrid');
  if (!container) return;

  const filtered = filter === 'all' 
    ? appData.menu 
    : appData.menu.filter(p => p.category === filter);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 50px; color: var(--text-muted);">
        <span style="font-size: 2.5rem;">🍽️</span>
        <p style="font-size: 1.2rem; margin-top: 10px;">No dishes currently listed under this category.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(dish => {
    const isVeg = dish.type === 'veg';
    const vegBadge = isVeg 
      ? `<span class="diet-tag veg-tag" title="Vegetarian"><span class="diet-dot"></span> Veg</span>`
      : `<span class="diet-tag nonveg-tag" title="Non-Vegetarian"><span class="diet-dot"></span> Non-Veg</span>`;

    const chefBadge = dish.special ? `<span class="chef-special-badge">⭐ Chef's Signature</span>` : '';
    const cleanPhone = (appData.settings.whatsapp || "919849012345").replace(/[^0-9]/g, '');
    const waText = encodeURIComponent(`Hello Shah Ghouse, I would like to order: ${dish.name} (${dish.price}) from your menu.`);
    const waLink = `https://wa.me/${cleanPhone}?text=${waText}`;

    return `
      <div class="product-card" id="dish-card-${dish.id}">
        <div class="product-img-wrap">
          <img src="${dish.image}" alt="${escapeHtml(dish.name)}" class="product-img" onerror="this.src='https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=700&q=80'">
          ${chefBadge}
          <span class="product-count-badge">${dish.price}</span>
        </div>
        <div class="product-body">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
            ${vegBadge}
            <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600;">${escapeHtml(dish.portion || 'Full')}</span>
          </div>
          <h3 class="product-name">${escapeHtml(dish.name)}</h3>
          <p class="product-desc">${escapeHtml(dish.desc)}</p>
          <div class="product-actions">
            <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn-inquire">
              <span>💬</span> Order on WhatsApp
            </a>
            <button class="btn-outline" style="padding: 7px 12px; font-size: 0.8rem;" onclick="openTableBookingModal('${escapeHtml(dish.name)}')">
              Book Table
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Update Header depending on User Login State
function updateHeaderAuthUI() {
  const staffBtn = document.getElementById('staffNavBtn');
  const loginNavBtn = document.getElementById('loginNavBtn');
  const logoutBtn = document.getElementById('logoutBtn');

  if (currentUser) {
    if (staffBtn) {
      staffBtn.style.display = 'inline-flex';
      const roleText = currentUser.role === 'owner' ? 'Owner Portal' : 'Manager Portal';
      staffBtn.innerHTML = `
        <span class="staff-badge-pulse"></span>
        <span style="font-size: 1.15rem;">👔</span>
        <span>${roleText}</span>
        <span class="role-badge">${currentUser.role}</span>
      `;
    }
    if (loginNavBtn) loginNavBtn.style.display = 'none';
    if (logoutBtn) logoutBtn.style.display = 'inline-block';
  } else {
    if (staffBtn) staffBtn.style.display = 'none';
    if (loginNavBtn) loginNavBtn.style.display = 'inline-flex';
    if (logoutBtn) logoutBtn.style.display = 'none';
  }
}

// ===================================================================
// AUTHENTICATION LOGIC (Owner & Manager)
// ===================================================================
function setupAuth() {
  const loginForm = document.getElementById('loginForm');
  const loginNavBtn = document.getElementById('loginNavBtn');
  const closeLoginBtn = document.getElementById('closeLoginModal');
  const logoutBtn = document.getElementById('logoutBtn');

  if (loginNavBtn) {
    loginNavBtn.addEventListener('click', () => openModal('loginModal'));
  }

  if (closeLoginBtn) {
    closeLoginBtn.addEventListener('click', () => closeModal('loginModal'));
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      currentUser = null;
      localStorage.removeItem('shahghouse_session_user');
      updateHeaderAuthUI();
      closeModal('adminModal');
      showToast("Logged out successfully.", "👋");
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const userField = document.getElementById('loginUsername').value.trim();

      if (userField.toLowerCase() === 'owner@shahghouse') {
        currentUser = {
          role: 'owner',
          username: 'owner@shahghouse',
          title: 'Owner & Managing Director'
        };
        localStorage.setItem('shahghouse_session_user', JSON.stringify(currentUser));
        closeModal('loginModal');
        updateHeaderAuthUI();
        showToast("Welcome Owner! Full restaurant administration unlocked.", "👑");
        openStaffDashboard();
        return;
      }

      if (userField.toLowerCase() === 'manager@shahghouse') {
        currentUser = {
          role: 'manager',
          username: 'manager@shahghouse',
          title: 'Restaurant Operations Manager'
        };
        localStorage.setItem('shahghouse_session_user', JSON.stringify(currentUser));
        closeModal('loginModal');
        updateHeaderAuthUI();
        showToast("Welcome Manager! Menu & orders access granted.", "📋");
        openStaffDashboard();
        return;
      }

      alert("Invalid credentials. Please use:\n- owner@shahghouse\n- manager@shahghouse");
    });
  }

  window.fillDemoCreds = function(role) {
    const userInp = document.getElementById('loginUsername');
    const passInp = document.getElementById('loginPassword');
    if (role === 'owner') {
      userInp.value = 'owner@shahghouse';
      passInp.value = 'owner@shahghouse';
    } else {
      userInp.value = 'manager@shahghouse';
      passInp.value = 'manager@shahghouse';
    }
  };
}

// ===================================================================
// STAFF MANAGEMENT / ADMIN DASHBOARD
// ===================================================================
function setupStaffDashboard() {
  const staffBtn = document.getElementById('staffNavBtn');
  const closeAdminBtn = document.getElementById('closeAdminModal');

  if (staffBtn) {
    staffBtn.addEventListener('click', () => {
      if (!currentUser) {
        openModal('loginModal');
      } else {
        openStaffDashboard();
      }
    });
  }

  if (closeAdminBtn) {
    closeAdminBtn.addEventListener('click', () => closeModal('adminModal'));
  }

  // Tabs
  const tabs = document.querySelectorAll('.admin-tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.admin-tab-panel').forEach(p => p.classList.remove('active'));
      
      tab.classList.add('active');
      const targetId = tab.getAttribute('data-target');
      const panel = document.getElementById(targetId);
      if (panel) panel.classList.add('active');
    });
  });

  populateAdminForms();
}

function openStaffDashboard() {
  if (!currentUser) return;

  const adminGreeting = document.getElementById('adminGreeting');
  const adminRoleDisplay = document.getElementById('adminRoleDisplay');
  const ownerOnlyTab = document.getElementById('tabFeaturesBtn');

  if (adminGreeting) {
    adminGreeting.textContent = currentUser.role === 'owner' ? "Owner Portal: Full Management Hub" : "Manager Portal: Kitchen & Orders";
  }
  if (adminRoleDisplay) {
    adminRoleDisplay.textContent = `Logged in as: ${currentUser.username} (${currentUser.role.toUpperCase()})`;
  }

  if (currentUser.role !== 'owner') {
    if (ownerOnlyTab) ownerOnlyTab.style.display = 'none';
  } else {
    if (ownerOnlyTab) ownerOnlyTab.style.display = 'inline-block';
  }

  populateAdminForms();
  openModal('adminModal');
}

function populateAdminForms() {
  const inputHeroTitle = document.getElementById('inputHeroTitle');
  const inputHeroSubtitle = document.getElementById('inputHeroSubtitle');
  const inputAnnouncement = document.getElementById('inputAnnouncement');
  const inputWhatsapp = document.getElementById('inputWhatsapp');
  const inputInstagram = document.getElementById('inputInstagram');

  if (inputHeroTitle) inputHeroTitle.value = appData.hero.title;
  if (inputHeroSubtitle) inputHeroSubtitle.value = appData.hero.subtitle;
  if (inputAnnouncement) inputAnnouncement.value = appData.hero.announcement;
  if (inputWhatsapp) inputWhatsapp.value = appData.settings.whatsapp;
  if (inputInstagram) inputInstagram.value = appData.settings.instagram;

  renderAdminFeaturesList();
  renderAdminMenuList();
  renderAdminOrdersList();

  const jsonExportArea = document.getElementById('jsonExportArea');
  if (jsonExportArea) {
    jsonExportArea.value = JSON.stringify(appData, null, 2);
  }
}

// Render Features in Admin
function renderAdminFeaturesList() {
  const container = document.getElementById('adminFeaturesList');
  if (!container) return;

  container.innerHTML = appData.features.map(f => `
    <div class="admin-item-row">
      <div class="item-row-left">
        <span style="font-size: 1.4rem;">${f.icon || '🍲'}</span>
        <div>
          <strong style="color: var(--dark-maroon);">${escapeHtml(f.title)}</strong>
          <span style="font-size: 0.75rem; background: #fef3c7; color: #92400e; padding: 2px 6px; border-radius: 4px; margin-left: 6px;">${escapeHtml(f.badge || 'FEATURE')}</span>
          <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 2px;">${escapeHtml(f.desc)}</p>
        </div>
      </div>
      <div class="item-row-actions">
        ${currentUser && currentUser.role === 'owner' ? `
          <button class="btn-danger" onclick="deleteFeature('${f.id}')">Delete</button>
        ` : `<span style="font-size: 0.75rem; color: #9ca3af;">Owner only</span>`}
      </div>
    </div>
  `).join('');
}

// Render Menu items in Admin
function renderAdminMenuList() {
  const container = document.getElementById('adminMenuList');
  if (!container) return;

  container.innerHTML = appData.menu.map(d => `
    <div class="admin-item-row">
      <div class="item-row-left">
        <img src="${d.image}" style="width: 44px; height: 44px; object-fit: cover; border-radius: 6px; border: 1px solid #ddd;">
        <div>
          <strong style="color: var(--dark-maroon);">${escapeHtml(d.name)}</strong>
          <span style="font-size: 0.75rem; color: #166534; background: #dcfce7; padding: 2px 6px; border-radius: 4px; margin-left: 6px; font-weight: 700;">${d.price}</span>
          <span style="font-size: 0.72rem; color: #6b7280; margin-left: 6px;">Category: ${escapeHtml(d.category)}</span>
          <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 2px;">Portion: ${escapeHtml(d.portion || 'Full')} | Status: ${d.status === 'in' ? 'Available' : 'Sold Out'}</p>
        </div>
      </div>
      <div class="item-row-actions">
        <button class="btn-danger" onclick="deleteDish('${d.id}')">Delete</button>
      </div>
    </div>
  `).join('');
}

// Render Orders in Admin
function renderAdminOrdersList() {
  const container = document.getElementById('adminOrdersList');
  if (!container) return;

  if (appData.orders.length === 0) {
    container.innerHTML = `<p style="color: var(--text-muted); font-size: 0.88rem;">No table bookings or orders yet.</p>`;
    return;
  }

  container.innerHTML = appData.orders.map(ord => `
    <div class="admin-item-row">
      <div>
        <strong>${escapeHtml(ord.customer)}</strong> (${escapeHtml(ord.phone)})
        <p style="font-size: 0.8rem; color: var(--text-muted);">Dish/Request: <strong>${escapeHtml(ord.dish)}</strong> | ${escapeHtml(ord.type)}</p>
      </div>
      <div>
        <span style="font-size: 0.75rem; background: #dcfce7; color: #15803d; padding: 4px 8px; border-radius: 12px; font-weight: 700;">${ord.status || 'Active'}</span>
      </div>
    </div>
  `).join('');
}

// Owner Feature Addition Handler
window.addNewFeature = function() {
  if (!currentUser || currentUser.role !== 'owner') {
    alert("Only the Owner has permission to add new restaurant features/specials.");
    return;
  }

  const titleInp = document.getElementById('newFeatureTitle');
  const badgeInp = document.getElementById('newFeatureBadge');
  const iconInp = document.getElementById('newFeatureIcon');
  const descInp = document.getElementById('newFeatureDesc');

  const title = titleInp.value.trim();
  const desc = descInp.value.trim();
  const badge = badgeInp.value.trim() || "SPECIAL";
  const icon = iconInp.value.trim() || "🍲";

  if (!title || !desc) {
    alert("Please provide both a Title and Description for the new restaurant highlight.");
    return;
  }

  const newFeat = {
    id: "feat-" + Date.now(),
    icon: icon,
    title: title,
    badge: badge,
    desc: desc
  };

  appData.features.push(newFeat);
  saveData();
  renderPublicSite();
  renderAdminFeaturesList();

  titleInp.value = '';
  badgeInp.value = '';
  descInp.value = '';

  showToast(`Special "${title}" added and live on the website!`, "🎉");
};

// Delete Feature Handler
window.deleteFeature = function(id) {
  if (!currentUser || currentUser.role !== 'owner') {
    alert("Only the Owner can delete restaurant features.");
    return;
  }
  if (confirm("Remove this feature from the live restaurant website?")) {
    appData.features = appData.features.filter(f => f.id !== id);
    saveData();
    renderPublicSite();
    renderAdminFeaturesList();
    showToast("Feature removed from website.", "🗑️");
  }
};

// Add Dish Handler (Owner & Manager)
window.addNewDish = function() {
  if (!currentUser) return;

  const name = document.getElementById('newDishName').value.trim();
  const category = document.getElementById('newDishCategory').value;
  const price = document.getElementById('newDishPrice').value.trim();
  const type = document.getElementById('newDishType').value;
  const portion = document.getElementById('newDishPortion').value.trim() || "Full";
  const image = document.getElementById('newDishImage').value.trim() || "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=700&q=80";
  const desc = document.getElementById('newDishDesc').value.trim();

  if (!name || !price || !desc) {
    alert("Please fill in Dish Name, Price, and Description.");
    return;
  }

  const newDish = {
    id: "dish-" + Date.now(),
    name: name,
    category: category,
    price: price.startsWith('₹') ? price : `₹${price}`,
    type: type,
    portion: portion,
    status: "in",
    special: false,
    desc: desc,
    image: image
  };

  appData.menu.unshift(newDish);
  saveData();
  renderPublicSite();
  renderAdminMenuList();

  document.getElementById('newDishName').value = '';
  document.getElementById('newDishPrice').value = '';
  document.getElementById('newDishDesc').value = '';

  showToast(`Dish "${name}" added to menu and live!`, "🍽️");
};

// Delete Dish Handler
window.deleteDish = function(id) {
  if (!currentUser) return;
  if (confirm("Delete this dish from the public restaurant menu?")) {
    appData.menu = appData.menu.filter(d => d.id !== id);
    saveData();
    renderPublicSite();
    renderAdminMenuList();
    showToast("Dish removed from menu.", "🗑️");
  }
};

// Save Site Settings & Hero Handler
window.saveSiteSettings = function() {
  if (!currentUser) return;

  const title = document.getElementById('inputHeroTitle').value.trim();
  const subtitle = document.getElementById('inputHeroSubtitle').value.trim();
  const announcement = document.getElementById('inputAnnouncement').value.trim();
  const whatsapp = document.getElementById('inputWhatsapp').value.trim();
  const instagram = document.getElementById('inputInstagram').value.trim();

  if (title) appData.hero.title = title;
  if (subtitle) appData.hero.subtitle = subtitle;
  if (announcement) appData.hero.announcement = announcement;
  if (whatsapp) appData.settings.whatsapp = whatsapp;
  if (instagram) appData.settings.instagram = instagram;

  saveData();
  renderPublicSite();
  showToast("Restaurant settings & banners updated live!", "✨");
};

// Reset to Default Seed Data
window.resetToDefault = function() {
  if (confirm("Reset menu data back to official Shah Ghouse restaurant defaults?")) {
    appData = JSON.parse(JSON.stringify(RESTAURANT_DATA));
    saveData();
    renderPublicSite();
    populateAdminForms();
    showToast("Website reset to authentic restaurant defaults.", "🔄");
  }
};

// Table Booking / Inquiry Modal
window.openTableBookingModal = function(dishName = '') {
  const bookingModal = document.getElementById('bookingModal');
  const bookDish = document.getElementById('bookDish');
  if (bookDish && dishName) {
    bookDish.value = dishName;
  }
  openModal('bookingModal');
};

function setupBookingForm() {
  const form = document.getElementById('bookingForm');
  const closeBtn = document.getElementById('closeBookingModal');

  if (closeBtn) {
    closeBtn.addEventListener('click', () => closeModal('bookingModal'));
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('bookName').value.trim();
      const phone = document.getElementById('bookPhone').value.trim();
      const outlet = document.getElementById('bookOutlet').value;
      const guests = document.getElementById('bookGuests').value;
      const dish = document.getElementById('bookDish').value.trim() || 'General Dining';

      const newOrder = {
        id: "ord-" + Date.now(),
        date: new Date().toISOString().split('T')[0],
        customer: name,
        phone: phone,
        dish: dish,
        type: `Table for ${guests} at ${outlet}`,
        status: "Confirmed"
      };

      appData.orders.unshift(newOrder);
      saveData();
      closeModal('bookingModal');
      showToast("Table booking request sent! Branch manager notified.", "🎉");

      const cleanPhone = (appData.settings.whatsapp || "919849012345").replace(/[^0-9]/g, '');
      const msg = encodeURIComponent(`Shah Ghouse Reservation Request:\nName: ${name}\nPhone: ${phone}\nBranch: ${outlet}\nGuests: ${guests}\nPre-order Dish: ${dish}`);
      window.open(`https://wa.me/${cleanPhone}?text=${msg}`, '_blank');
    });
  }
}

// Filter Tab Click Handlers
function setupFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      renderMenuList(cat);
    });
  });
}

// Modal Helpers
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add('active');
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove('active');
}

// Utility: Escape HTML for safe rendering
function escapeHtml(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Copy JSON
window.copyJsonData = function() {
  const area = document.getElementById('jsonExportArea');
  if (area) {
    area.select();
    navigator.clipboard.writeText(area.value);
    showToast("JSON restaurant data copied to clipboard!", "📋");
  }
};

// Initialize Everything on DOM Load
document.addEventListener('DOMContentLoaded', () => {
  initData();
  renderPublicSite();
  setupAuth();
  setupStaffDashboard();
  setupBookingForm();

  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  });
});
