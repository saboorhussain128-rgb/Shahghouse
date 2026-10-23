/**
 * ===================================================================
 * SHAHGHOUSE YARNS & TEXTILES - CLIENT APPLICATION ENGINE (app.js)
 * Architecture: Option 3 (Fast Prototype + Dynamic State & LocalStorage)
 * Roles: Owner (Full admin/feature addition) & Manager (Catalog management)
 * ===================================================================
 */

// Initial Seed Data for Shahghouse Yarn
const INITIAL_DATA = {
  hero: {
    tag: "HYDERABAD HERITAGE • SINCE 1984",
    title: "Crown of Quality in Premium Yarns & Textiles",
    subtitle: "From the historic legacy of Hyderabad comes unmatched spinning excellence. Supplying high-CSP combed cotton, ring spun, compact, and luxury blended yarns to global garment makers.",
    announcement: "✨ Accepting Global Wholesale & Export Orders for 2026-2027 Season | Connect with our Mills"
  },
  settings: {
    whatsapp: "+919876543210",
    email: "contact@shahghouseyarn.com",
    instagram: "https://www.instagram.com/shahghouseofficial",
    address: "Shahghouse Textiles & Yarn Mill Division, Hyderabad, Telangana, India"
  },
  features: [
    {
      id: "feat-1",
      icon: "👑",
      title: "Royal Spun Precision",
      badge: "TECHNOLOGY",
      desc: "Engineered on modern Murata & Rieter ring frames with automated doffing to eliminate thin-thick places and achieve flawless uniformity."
    },
    {
      id: "feat-2",
      icon: "🔬",
      title: "Uster Tested & Certified",
      badge: "LAB ACCREDITED",
      desc: "Every yarn cone is batch-tested for CSP value, hairiness index, and tensile strength to meet stringent international export specifications."
    },
    {
      id: "feat-3",
      icon: "🌐",
      title: "Global Supply Chain",
      badge: "EXPORTS",
      desc: "Direct bulk container dispatch across domestic weaving clusters (Bhiwandi, Surat, Tirupur, Ichalkaranji) and exports to UAE & EU."
    },
    {
      id: "feat-4",
      icon: "🌱",
      title: "Sustainable & OEKO-TEX",
      badge: "ECO FRIENDLY",
      desc: "Responsibly sourced Shankar-6 cotton with low water consumption processing and eco-compliant cone dyeing."
    }
  ],
  products: [
    {
      id: "prod-1",
      name: "30s Combed Cotton Cone",
      count: "30s Ne Combed",
      category: "combed",
      composition: "100% Shankar-6 Cotton",
      stock: "in",
      moq: "500 Kg (1 Bale)",
      desc: "Premium combed ring-spun cotton yarn designed for ultra-fine hosiery, premium t-shirts, and warp knitting with superior hand-feel.",
      image: "https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "prod-2",
      name: "40s Compact Ring Spun Yarn",
      count: "40s Ne Compact",
      category: "combed",
      composition: "100% Long Staple Cotton",
      stock: "in",
      moq: "1000 Kg",
      desc: "Zero-hairiness compact spun yarn offering exceptional lustrous sheen and high weaving efficiency on air-jet looms.",
      image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "prod-3",
      name: "20s Carded Open End Yarn",
      count: "20s OE",
      category: "carded",
      composition: "100% Pure Cotton",
      stock: "in",
      moq: "1000 Kg",
      desc: "Heavy-duty tensile yarn engineered for denim weft, workwear fabric, canvas, and heavy terry towels.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "prod-4",
      name: "30/1 Melange Charcoal Yarn",
      count: "30/1 Melange",
      category: "melange",
      composition: "60% Cotton / 40% Poly",
      stock: "order",
      moq: "800 Kg",
      desc: "Exquisite heathered grey melange blend with consistent fiber tint for designer polo shirts and fleece wear.",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "prod-5",
      name: "Micro-Modal & Cotton Blend",
      count: "50s Micro-Modal",
      category: "luxury",
      composition: "50% Modal / 50% Supima",
      stock: "order",
      moq: "300 Kg",
      desc: "Supreme softness with silky drape, tailored for high-end luxury lingerie, baby garments, and couture textiles.",
      image: "https://images.unsplash.com/photo-1528458876861-544fd1761a91?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "prod-6",
      name: "100% Polyester Filament Cone",
      count: "150D / 48F DTY",
      category: "synthetic",
      composition: "Virgin High-Tenacity Poly",
      stock: "in",
      moq: "500 Kg",
      desc: "High-speed computerized embroidery and stitching yarn with UV resistance and vibrant non-bleeding color fastness.",
      image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=600&q=80"
    }
  ],
  inquiries: [
    {
      id: "inq-1",
      date: "2026-10-23",
      name: "Deccan Weaving Mills",
      phone: "+91 94401 23456",
      product: "40s Compact Ring Spun Yarn",
      quantity: "5,000 Kg",
      status: "Reviewing"
    }
  ]
};

// Application State
let appData = null;
let currentUser = null; // { role: 'owner' | 'manager', username: '...' }

// Load Data from LocalStorage or default
function initData() {
  const saved = localStorage.getItem('shahghouse_yarn_data');
  if (saved) {
    try {
      appData = JSON.parse(saved);
    } catch (e) {
      console.error("Failed to parse saved data, resetting to defaults", e);
      appData = JSON.parse(JSON.stringify(INITIAL_DATA));
    }
  } else {
    appData = JSON.parse(JSON.stringify(INITIAL_DATA));
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
  localStorage.setItem('shahghouse_yarn_data', JSON.stringify(appData));
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

  // Render Products
  renderProductsList('all');

  // Update Header UI depending on login state
  updateHeaderAuthUI();
}

// Render Dynamic Features
function renderFeaturesList() {
  const container = document.getElementById('featuresGrid');
  if (!container) return;

  container.innerHTML = appData.features.map(f => `
    <div class="feature-card" id="card-${f.id}">
      <span class="feature-badge">${escapeHtml(f.badge || 'FEATURE')}</span>
      <div class="feature-icon-box">${f.icon || '🧵'}</div>
      <h3 class="feature-title">${escapeHtml(f.title)}</h3>
      <p class="feature-desc">${escapeHtml(f.desc)}</p>
    </div>
  `).join('');
}

// Render Products with Category Filter
function renderProductsList(filter = 'all') {
  const container = document.getElementById('productsGrid');
  if (!container) return;

  const filtered = filter === 'all' 
    ? appData.products 
    : appData.products.filter(p => p.category === filter);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
        <p style="font-size: 1.2rem;">No yarn products found in this category.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(p => {
    const stockClass = p.stock === 'in' ? 'stock-in' : 'stock-order';
    const stockLabel = p.stock === 'in' ? 'In Stock (Ready)' : 'Made to Order';
    const cleanPhone = (appData.settings.whatsapp || "919876543210").replace(/[^0-9]/g, '');
    const waText = encodeURIComponent(`Hello Shahghouse Textiles, I would like to inquire about wholesale rates for: ${p.name} (${p.count}).`);
    const waLink = `https://wa.me/${cleanPhone}?text=${waText}`;

    return `
      <div class="product-card" id="prod-card-${p.id}">
        <div class="product-img-wrap">
          <img src="${p.image}" alt="${escapeHtml(p.name)}" class="product-img" onerror="this.src='https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=600&q=80'">
          <span class="product-stock-tag ${stockClass}">${stockLabel}</span>
          <span class="product-count-badge">${escapeHtml(p.count)}</span>
        </div>
        <div class="product-body">
          <span class="product-category">${escapeHtml(p.category)}</span>
          <h3 class="product-name">${escapeHtml(p.name)}</h3>
          <p class="product-desc">${escapeHtml(p.desc)}</p>
          <div class="product-spec-row">
            <span><strong>Fiber:</strong> ${escapeHtml(p.composition || 'Cotton')}</span>
            <span><strong>MOQ:</strong> ${escapeHtml(p.moq || '500 Kg')}</span>
          </div>
          <div class="product-actions">
            <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn-inquire">
              <span>💬</span> Inquire WhatsApp
            </a>
            <button class="btn-outline" style="padding: 7px 12px; font-size: 0.8rem;" onclick="openQuoteModal('${escapeHtml(p.name)}')">
              Quote
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
  const userRoleBadge = document.getElementById('userRoleBadge');
  const logoutBtn = document.getElementById('logoutBtn');

  if (currentUser) {
    // Logged in as Owner or Manager
    if (staffBtn) {
      staffBtn.style.display = 'inline-flex';
      const roleText = currentUser.role === 'owner' ? 'Owner Portal' : 'Manager Portal';
      staffBtn.innerHTML = `
        <span class="staff-badge-pulse"></span>
        <span style="font-size: 1.1rem;">👔</span>
        <span>${roleText}</span>
        <span class="role-badge">${currentUser.role}</span>
      `;
    }
    if (loginNavBtn) loginNavBtn.style.display = 'none';
    if (logoutBtn) logoutBtn.style.display = 'inline-block';
  } else {
    // Guest visitor
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
  const loginModal = document.getElementById('loginModal');
  const loginNavBtn = document.getElementById('loginNavBtn');
  const closeLoginBtn = document.getElementById('closeLoginModal');
  const logoutBtn = document.getElementById('logoutBtn');

  if (loginNavBtn) {
    loginNavBtn.addEventListener('click', () => {
      openModal('loginModal');
    });
  }

  if (closeLoginBtn) {
    closeLoginBtn.addEventListener('click', () => {
      closeModal('loginModal');
    });
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
      const passField = document.getElementById('loginPassword').value.trim();

      // Check Owner Credentials
      if (userField.toLowerCase() === 'owner@shahghouse') {
        currentUser = {
          role: 'owner',
          username: 'owner@shahghouse',
          title: 'Owner & Chief Administrator'
        };
        localStorage.setItem('shahghouse_session_user', JSON.stringify(currentUser));
        closeModal('loginModal');
        updateHeaderAuthUI();
        showToast("Welcome Owner! Full administrative access granted.", "👑");
        openStaffDashboard();
        return;
      }

      // Check Manager Credentials
      if (userField.toLowerCase() === 'manager@shahghouse') {
        currentUser = {
          role: 'manager',
          username: 'manager@shahghouse',
          title: 'Operations & Mill Manager'
        };
        localStorage.setItem('shahghouse_session_user', JSON.stringify(currentUser));
        closeModal('loginModal');
        updateHeaderAuthUI();
        showToast("Welcome Manager! Catalog & operational access granted.", "📋");
        openStaffDashboard();
        return;
      }

      alert("Invalid credentials. Please use:\n- owner@shahghouse\n- manager@shahghouse");
    });
  }

  // Pre-fill credential chip helper buttons
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
    closeAdminBtn.addEventListener('click', () => {
      closeModal('adminModal');
    });
  }

  // Tab switching
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

  // Populate Admin Forms
  populateAdminForms();
}

function openStaffDashboard() {
  if (!currentUser) return;

  const adminGreeting = document.getElementById('adminGreeting');
  const adminRoleDisplay = document.getElementById('adminRoleDisplay');
  const ownerOnlyTab = document.getElementById('tabFeaturesBtn');
  const ownerOnlyHeroTab = document.getElementById('tabHeroBtn');

  if (adminGreeting) {
    adminGreeting.textContent = currentUser.role === 'owner' ? "Owner Portal: Full Management" : "Manager Portal: Operations";
  }
  if (adminRoleDisplay) {
    adminRoleDisplay.textContent = `Logged in as: ${currentUser.username} (${currentUser.role.toUpperCase()})`;
  }

  // Role permissions UI
  if (currentUser.role !== 'owner') {
    // Hide feature addition if not owner
    if (ownerOnlyTab) ownerOnlyTab.style.display = 'none';
  } else {
    if (ownerOnlyTab) ownerOnlyTab.style.display = 'inline-block';
  }

  populateAdminForms();
  openModal('adminModal');
}

function populateAdminForms() {
  // Populate Hero customizer
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

  // Render Features list inside admin panel
  renderAdminFeaturesList();

  // Render Products list inside admin panel
  renderAdminProductsList();

  // Render Inquiries table inside admin panel
  renderAdminInquiriesList();

  // Populate JSON export
  const jsonExportArea = document.getElementById('jsonExportArea');
  if (jsonExportArea) {
    jsonExportArea.value = JSON.stringify(appData, null, 2);
  }
}

// Render Features inside Admin
function renderAdminFeaturesList() {
  const container = document.getElementById('adminFeaturesList');
  if (!container) return;

  container.innerHTML = appData.features.map(f => `
    <div class="admin-item-row">
      <div class="item-row-left">
        <span style="font-size: 1.4rem;">${f.icon || '🧵'}</span>
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

// Render Products inside Admin
function renderAdminProductsList() {
  const container = document.getElementById('adminProductsList');
  if (!container) return;

  container.innerHTML = appData.products.map(p => `
    <div class="admin-item-row">
      <div class="item-row-left">
        <img src="${p.image}" style="width: 44px; height: 44px; object-fit: cover; border-radius: 6px; border: 1px solid #ddd;">
        <div>
          <strong style="color: var(--dark-maroon);">${escapeHtml(p.name)}</strong>
          <span style="font-size: 0.75rem; color: #1e40af; background: #dbeafe; padding: 2px 6px; border-radius: 4px; margin-left: 6px;">${escapeHtml(p.count)}</span>
          <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 2px;">MOQ: ${escapeHtml(p.moq || '500kg')} | Status: ${p.stock === 'in' ? 'In Stock' : 'On Order'}</p>
        </div>
      </div>
      <div class="item-row-actions">
        <button class="btn-danger" onclick="deleteProduct('${p.id}')">Delete</button>
      </div>
    </div>
  `).join('');
}

// Render Inquiries inside Admin
function renderAdminInquiriesList() {
  const container = document.getElementById('adminInquiriesList');
  if (!container) return;

  if (appData.inquiries.length === 0) {
    container.innerHTML = `<p style="color: var(--text-muted); font-size: 0.88rem;">No customer inquiries received yet.</p>`;
    return;
  }

  container.innerHTML = appData.inquiries.map(inq => `
    <div class="admin-item-row">
      <div>
        <strong>${escapeHtml(inq.name)}</strong> (${escapeHtml(inq.phone)})
        <p style="font-size: 0.8rem; color: var(--text-muted);">Product: <strong>${escapeHtml(inq.product)}</strong> | Qty: ${escapeHtml(inq.quantity)}</p>
      </div>
      <div>
        <span style="font-size: 0.75rem; background: #dcfce7; color: #15803d; padding: 4px 8px; border-radius: 12px; font-weight: 700;">${inq.status || 'Active'}</span>
      </div>
    </div>
  `).join('');
}

// Owner Feature Addition Handler
window.addNewFeature = function() {
  if (!currentUser || currentUser.role !== 'owner') {
    alert("Only the Owner has permission to add new website features.");
    return;
  }

  const titleInp = document.getElementById('newFeatureTitle');
  const badgeInp = document.getElementById('newFeatureBadge');
  const iconInp = document.getElementById('newFeatureIcon');
  const descInp = document.getElementById('newFeatureDesc');

  const title = titleInp.value.trim();
  const desc = descInp.value.trim();
  const badge = badgeInp.value.trim() || "PREMIUM";
  const icon = iconInp.value.trim() || "✨";

  if (!title || !desc) {
    alert("Please provide both a Title and Description for the new feature.");
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

  // Clear inputs
  titleInp.value = '';
  badgeInp.value = '';
  descInp.value = '';

  showToast(`New Feature "${title}" added and live on the website!`, "🎉");
};

// Delete Feature Handler
window.deleteFeature = function(id) {
  if (!currentUser || currentUser.role !== 'owner') {
    alert("Only the Owner can delete features.");
    return;
  }
  if (confirm("Are you sure you want to remove this feature from the live website?")) {
    appData.features = appData.features.filter(f => f.id !== id);
    saveData();
    renderPublicSite();
    renderAdminFeaturesList();
    showToast("Feature removed from website.", "🗑️");
  }
};

// Add Product Handler (Owner & Manager)
window.addNewProduct = function() {
  if (!currentUser) return;

  const name = document.getElementById('newProdName').value.trim();
  const count = document.getElementById('newProdCount').value.trim();
  const category = document.getElementById('newProdCategory').value;
  const moq = document.getElementById('newProdMoq').value.trim() || "500 Kg";
  const stock = document.getElementById('newProdStock').value;
  const image = document.getElementById('newProdImage').value.trim() || "https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=600&q=80";
  const desc = document.getElementById('newProdDesc').value.trim();

  if (!name || !count || !desc) {
    alert("Please fill in Product Name, Yarn Count, and Description.");
    return;
  }

  const newProd = {
    id: "prod-" + Date.now(),
    name: name,
    count: count,
    category: category,
    composition: "Export Quality Spun",
    stock: stock,
    moq: moq,
    desc: desc,
    image: image
  };

  appData.products.unshift(newProd);
  saveData();
  renderPublicSite();
  renderAdminProductsList();

  // Reset form
  document.getElementById('newProdName').value = '';
  document.getElementById('newProdCount').value = '';
  document.getElementById('newProdDesc').value = '';

  showToast(`Yarn "${name}" added to catalog and live!`, "📦");
};

// Delete Product Handler
window.deleteProduct = function(id) {
  if (!currentUser) return;
  if (confirm("Delete this yarn product from the public catalog?")) {
    appData.products = appData.products.filter(p => p.id !== id);
    saveData();
    renderPublicSite();
    renderAdminProductsList();
    showToast("Product deleted from catalog.", "🗑️");
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
  showToast("Website Settings & Banner updated live!", "✨");
};

// Reset to Default Seed Data
window.resetToDefault = function() {
  if (confirm("Reset website data back to official initial defaults? Any custom added features will be reset.")) {
    appData = JSON.parse(JSON.stringify(INITIAL_DATA));
    saveData();
    renderPublicSite();
    populateAdminForms();
    showToast("Website reset to initial default data.", "🔄");
  }
};

// ===================================================================
// QUOTATION MODAL & WHATSAPP GENERATION
// ===================================================================
window.openQuoteModal = function(productName = '') {
  const quoteModal = document.getElementById('quoteModal');
  const quoteProduct = document.getElementById('quoteProduct');
  if (quoteProduct && productName) {
    quoteProduct.value = productName;
  }
  openModal('quoteModal');
};

function setupQuoteForm() {
  const form = document.getElementById('quoteForm');
  const closeBtn = document.getElementById('closeQuoteModal');

  if (closeBtn) {
    closeBtn.addEventListener('click', () => closeModal('quoteModal'));
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('quoteName').value.trim();
      const phone = document.getElementById('quotePhone').value.trim();
      const product = document.getElementById('quoteProduct').value.trim();
      const qty = document.getElementById('quoteQty').value.trim();

      const newInq = {
        id: "inq-" + Date.now(),
        date: new Date().toISOString().split('T')[0],
        name: name,
        phone: phone,
        product: product,
        quantity: qty,
        status: "New Lead"
      };

      appData.inquiries.unshift(newInq);
      saveData();
      closeModal('quoteModal');
      showToast("Quotation request submitted! Our manager will respond.", "📩");

      // Optional direct WhatsApp redirect
      const cleanPhone = (appData.settings.whatsapp || "919876543210").replace(/[^0-9]/g, '');
      const msg = encodeURIComponent(`Shahghouse Wholesale Quote Request:\nClient: ${name}\nPhone: ${phone}\nProduct: ${product}\nQuantity: ${qty}`);
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
      renderProductsList(cat);
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

// Copy JSON to clipboard
window.copyJsonData = function() {
  const area = document.getElementById('jsonExportArea');
  if (area) {
    area.select();
    navigator.clipboard.writeText(area.value);
    showToast("JSON configuration copied to clipboard!", "📋");
  }
};

// Canvas Helper: Export Logo as PNG
window.downloadLogoPng = function() {
  const canvas = document.createElement('canvas');
  canvas.width = 1000;
  canvas.height = 280;
  const ctx = canvas.getContext('2d');
  
  const img = new Image();
  img.onload = function() {
    ctx.drawImage(img, 0, 0, 1000, 280);
    const link = document.createElement('a');
    link.download = 'image.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
    showToast("image.png downloaded successfully!", "🖼️");
  };
  img.src = 'logo.svg';
};

// Initialize Everything on DOM Load
document.addEventListener('DOMContentLoaded', () => {
  initData();
  renderPublicSite();
  setupAuth();
  setupStaffDashboard();
  setupQuoteForm();
  setupFilters();

  // Close modals on clicking backdrop
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  });
});
