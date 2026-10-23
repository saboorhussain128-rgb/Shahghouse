/**
 * ===================================================================
 * SHAH GHOUSE HOTEL & RESTAURANT - LUXURY DIGITAL MENU ENGINE (app.js)
 * Inspired by @shahghouseofficial (Instagram Showcase Edition)
 * Roles: Owner (Full menu & feature manager) & Manager (Catalog administration)
 * ===================================================================
 */

// Initial Seed Data for Shah Ghouse Luxury Menu Showcase
const RESTAURANT_DATA = {
  hero: {
    tag: "HYDERABAD'S ROYAL GASTRONOMY • SINCE 1984",
    title: "The Legendary Flavors of Nizam Culinary Heritage",
    subtitle: "Carrying four decades of authentic Mughlai and Hyderabadi cooking mastery. From slow-simmered handi Dum Biryani and pure ghee Haleem to stone-seared Pathar Ka Gosht and rich Irani Chai.",
    announcement: "✨ Tolichowki • Gachibowli • Lakdikapul • Shahalibanda • Charminar | Open Daily 11:30 AM – 2:00 AM"
  },
  settings: {
    phone: "040-23561234",
    email: "contact@shahghouseofficial.com",
    instagram: "https://www.instagram.com/shahghouseofficial",
    timing: "11:30 AM – 02:00 AM (Midnight)",
    outlets: [
      { name: "Tolichowki (Flagship)", address: "Beside RTA Office, Tolichowki Main Road, Hyderabad", phone: "040-64617789" },
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
      title: "Charcoal Dum Sealed Handis",
      badge: "TRADITION",
      desc: "Slow-cooked in dough-sealed heavy copper degs over charcoal embers, trapping the essence of pure Kashmiri saffron, aged long-grain basmati, and tender meat."
    },
    {
      id: "feat-2",
      icon: "🍲",
      title: "12-Hour Pounded Haleem",
      badge: "RAMZAN LEGEND",
      desc: "Continuously stirred and pounded with wooden ghotnas for 12 hours with cracked wheat, tender meat, shahi garam masala, pure desi ghee, and fried onions."
    },
    {
      id: "feat-3",
      icon: "🔥",
      title: "Natural Granite Stone Kebabs",
      badge: "PATHAR KA GOSHT",
      desc: "Prime cuts marinated overnight in raw papaya and exotic nizami potli spices, grilled directly on a heated natural granite slab."
    },
    {
      id: "feat-4",
      icon: "☕",
      title: "Signature Dum Irani Chai",
      badge: "HYDERABAD CULTURE",
      desc: "Thick, slow-brewed tea decoction blended with condensed milk and khowa, served with authentic crunchy Osmania biscuits."
    }
  ],
  categories: [
    { id: "all", name: "All Specialties" },
    { id: "biryani", name: "Royal Dum Biryani" },
    { id: "mandi", name: "Arabian Mandi" },
    { id: "haleem", name: "Haleem & Soups" },
    { id: "kebabs", name: "Stone Kebabs & Tandoor" },
    { id: "starters", name: "Hyderabadi Starters" },
    { id: "curries", name: "Shahi Nizami Curries" },
    { id: "vegetarian", name: "Vegetarian Delights" },
    { id: "breads", name: "Tandoori Breads" },
    { id: "shawarma", name: "Shawarma & Rolls" },
    { id: "irani-chai", name: "Irani Chai & Bakery" },
    { id: "desserts", name: "Royal Desserts" }
  ],
  menu: [
    // 1. ROYAL DUM BIRYANI
    {
      id: "dish-1",
      name: "Special Mutton Dum Biryani",
      category: "biryani",
      type: "nonveg",
      portion: "Single & Full Handi",
      special: true,
      desc: "The undisputed jewel of Hyderabadi cuisine. Succulent pieces of tender mutton marinated in curd, fried onions, and royal spices, layered with saffron basmati rice.",
      image: "images/mutton-dum-biryani.jpg",
      heritage: "Originated in the royal kitchens of the Asaf Jahi Nizams of Hyderabad, combining Persian slow-cooking techniques with spicy Deccan flavors.",
      ingredients: "Aged Basmati Rice, Prime Tender Mutton, Kashmiri Saffron, Desi Ghee, Mint, Coriander, Brown Fried Onions, Green Cardamom, Shahi Jeera.",
      pairings: "Mirchi Ka Salan (tangy peanut-sesame curry), Dahi Ki Chutney, and Onion Salad."
    },
    {
      id: "dish-2",
      name: "Hyderabadi Chicken Dum Biryani",
      category: "biryani",
      type: "nonveg",
      portion: "Single & Full Handi",
      special: false,
      desc: "Classic chicken dum biryani prepared with aromatic spices, fresh mint, coriander, and slow-steamed under a dough-sealed lid.",
      image: "images/chicken-dum-biryani.jpg",
      heritage: "Cooked in the traditional 'Kachhi' style where raw marinated chicken is slow-steamed simultaneously with par-boiled basmati rice.",
      ingredients: "Farm-Fresh Chicken, Long-Grain Rice, Ghee, Yogurt, Green Chillies, Mace, Nutmeg, Cloves, Fresh Mint.",
      pairings: "Chilled Raita, Spicy Deccan Salan, and fresh lemon wedges."
    },
    {
      id: "dish-3",
      name: "Zafrani Mutton Biryani (Jumbo Family Pack)",
      category: "biryani",
      type: "nonveg",
      portion: "Serves 4 - 5 Guests",
      special: true,
      desc: "Grand celebratory portion prepared with double portions of succulent mutton, infused with royal Zafran (saffron) extract and garnished with boiled eggs.",
      image: "images/zafrani-mutton-biryani.jpg",
      heritage: "A festive Nizami preparation traditionally served during royal banquets, weddings, and Eid celebrations.",
      ingredients: "Select Tender Mutton, Pure Kashmiri Saffron Infusion, Roasted Cashews, Hard-Boiled Eggs, Clarified Butter, Star Anise.",
      pairings: "Large Handi Salan, Dahi Ki Chutney, and Qubani Ka Meetha."
    },

    // 2. ARABIAN MANDI
    {
      id: "dish-4",
      name: "Shah Ghouse Juicy Mutton Mandi",
      category: "mandi",
      type: "nonveg",
      portion: "Mandi Platter (Serves 2-4)",
      special: true,
      desc: "Fragrant spiced rice topped with slow-roasted melt-in-mouth mutton shank, accompanied by spicy Yemeni tomato salsa.",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80",
      heritage: "A traditional Yemeni dish that became a culinary staple among the Chaush community of Barkas in Hyderabad.",
      ingredients: "Mutton Shanks, Mandi Masala (Hawaij), Basmati Rice, Dried Black Lime (Loomi), Roasted Almonds, Golden Raisins.",
      pairings: "Arabian Tomato Chutney, Cucumber Yogurt Salsa, and Clear Soup."
    },
    {
      id: "dish-5",
      name: "Faham Chicken Mandi Platter",
      category: "mandi",
      type: "nonveg",
      portion: "Full Platter",
      special: false,
      desc: "Charcoal-grilled whole spiced chicken served over fragrant dry-fruit rice with authentic Arabic dip.",
      image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=700&q=80",
      heritage: "Combines Arabian pit-roasting with smoky barbecue char, celebrated across Hyderabad's evening dining spots.",
      ingredients: "Charcoal-Grilled Chicken, Cardamom Basmati, Crushed Garlic, Lemon Zest, Golden Fried Cashews.",
      pairings: "Touwm (Garlic Mayonnaise Dip), Spicy Tomato Chutney, and Fresh Salad."
    },

    // 3. HALEEM & SOUPS
    {
      id: "dish-6",
      name: "World-Famous Mutton Haleem",
      category: "haleem",
      type: "nonveg",
      portion: "Bowl / Family Pack",
      special: true,
      desc: "The iconic delicacy of Hyderabad. Tender mutton, broken wheat, lentils, and fragrant spices pounded for hours to a silky, luxurious texture.",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80",
      heritage: "Brought to Hyderabad from the Arab world as 'Harees', elevated by the Nizams into the world-renowned GI-tagged Hyderabadi Haleem.",
      ingredients: "Fine Mutton, Cracked Wheat (Daliya), Chana Dal, Urad Dal, Pure Desi Ghee, Crispy Fried Onions, Roasted Cashews, Mint, Lime.",
      pairings: "Hard-Boiled Egg, Extra Ghee Tadka, Lemon Slices, and Fried Cashews."
    },
    {
      id: "dish-7",
      name: "Hyderabadi Mutton Marag",
      category: "haleem",
      type: "nonveg",
      portion: "Soup Bowl",
      special: false,
      desc: "A rich, velvety bone broth simmered for hours with tender mutton chops, almond-pistachio paste, and freshly ground black pepper.",
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=700&q=80",
      heritage: "The traditional royal wedding starter of Hyderabad, served steaming hot to warm the palate before the grand biryani course.",
      ingredients: "Mutton Ribs & Chops, Bone Marrow Broth, Blanched Almond Paste, Pistachios, Black Peppercorns, Green Cardamom, Ghee.",
      pairings: "Crisp Sheermal Roti, Naan, or enjoyed as a restorative broth."
    },

    // 4. STONE KEBABS & TANDOOR
    {
      id: "dish-8",
      name: "Pathar Ka Gosht (Nizami Stone Kebab)",
      category: "kebabs",
      type: "nonveg",
      portion: "Signature Platter",
      special: true,
      desc: "Thinly beaten mutton fillets marinated overnight in raw papaya and secret potli masala, seared over a red-hot natural granite stone slab.",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=700&q=80",
      heritage: "Legend holds that the 6th Nizam of Hyderabad discovered this delicacy during a royal hunting expedition, where meats were cooked on heated granite stones.",
      ingredients: "Tender Mutton Fillets, Raw Green Papaya, Allspice (Kabab Chini), Shahi Jeera, Roasted Chana Powder, Ghee, Ginger-Garlic.",
      pairings: "Mint Yogurt Chutney, Pickled Onion Rings, and Rumali Roti."
    },
    {
      id: "dish-9",
      name: "Mutton Seekh Kebab",
      category: "kebabs",
      type: "nonveg",
      portion: "Skewer (4 Long Pieces)",
      special: false,
      desc: "Finely minced mutton blended with fragrant spices, skewered and roasted to smoky perfection in our clay tandoor.",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=700&q=80",
      heritage: "A Mughlai masterpiece refined over centuries with delicate aromatics and smoky clay-oven roasting.",
      ingredients: "Minced Mutton, Brown Onions, Coriander Roots, Green Chillies, Garam Masala, Butter Glaze.",
      pairings: "Fresh Mint Chutney, Sliced Lemon, and Garlic Butter Naan."
    },
    {
      id: "dish-10",
      name: "Tandoori Chicken (Half & Full)",
      category: "kebabs",
      type: "nonveg",
      portion: "Half / Full Bird",
      special: false,
      desc: "Whole chicken scored and marinated twice in strained yogurt, Deggi Mirch, and mustard oil, roasted on live charcoal in traditional tandoors.",
      image: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?auto=format&fit=crop&w=700&q=80",
      heritage: "Clay tandoor cooking perfected to create a crispy smoky exterior with juicy, succulent meat within.",
      ingredients: "Whole Chicken, Hung Curd, Kashmiri Chilli, Mustard Oil, Kasuri Methi, Lemon Juice, Chaat Masala.",
      pairings: "Mint Dip, Onion Lachha, and Rumali Roti."
    },

    // 5. HYDERABADI STARTERS
    {
      id: "dish-11",
      name: "Authentic Hyderabadi Chicken 65",
      category: "starters",
      type: "nonveg",
      portion: "Full Plate",
      special: true,
      desc: "The legendary Deccan appetizer. Crispy morsels of chicken tossed in an intoxicating mix of fiery chillies, fresh curry leaves, crushed garlic, and yogurt sauce.",
      image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=700&q=80",
      heritage: "Created in South India in 1965 and perfected in Hyderabad with a signature curd and curry leaf tempering.",
      ingredients: "Boneless Chicken, Fresh Curry Leaves, Slit Green Chillies, Garlic, Red Chilli Paste, Yogurt, Black Pepper.",
      pairings: "Enjoyed as a standalone starter or alongside Steamed Rice and Sambar."
    },
    {
      id: "dish-12",
      name: "Chicken Majestic",
      category: "starters",
      type: "nonveg",
      portion: "Full Plate",
      special: true,
      desc: "Tender fried chicken strips coated in a creamy, velvety sauce infused with fresh mint, green chillies, garlic, and aromatic spices.",
      image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=700&q=80",
      heritage: "A contemporary Hyderabad favorite born in the city's royal dining rooms, praised for its smooth minty undertone.",
      ingredients: "Chicken Strips, Fresh Mint Puree, Garlic, Curd, Crushed Cumin, Green Chillies, Coriander.",
      pairings: "Crisp Onion Salad and Fresh Lime."
    },
    {
      id: "dish-13",
      name: "Apollo Fish",
      category: "starters",
      type: "nonveg",
      portion: "Full Plate",
      special: false,
      desc: "Boneless cubes of tender fish fillets delicately spiced, fried golden, and tossed with yogurt, curry leaves, and ginger.",
      image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=700&q=80",
      heritage: "Named after Hyderabad's historic Apollo Bar, this has become one of the most iconic seafood starters across Telangana.",
      ingredients: "Murrel / Basa Fish Fillets, Cornflour, Egg White, Curry Leaves, Red Chilli Flakes, Ginger, Lime Juice.",
      pairings: "Lemon Slices and Tartar / Mint Dip."
    },

    // 6. SHAHI NIZAMI CURRIES
    {
      id: "dish-14",
      name: "Mutton Rogan Josh",
      category: "curries",
      type: "nonveg",
      portion: "Curry Bowl",
      special: false,
      desc: "Slow-simmered tender mutton pieces cooked in an aromatic gravy infused with Kashmiri chillies, dried ginger, and fennel.",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=700&q=80",
      heritage: "Classic royal Mughlai curry slow-cooked until the oil separates and the meat tenderizes to perfection.",
      ingredients: "Prime Mutton Chops, Ratan Jot (Alkanet), Fennel Powder, Dry Ginger (Sonth), Green Cardamom, Desi Ghee.",
      pairings: "Tandoori Butter Naan, Sheermal, or Jeera Rice."
    },
    {
      id: "dish-15",
      name: "Royal Dum Ka Murgh",
      category: "curries",
      type: "nonveg",
      portion: "Curry Bowl",
      special: true,
      desc: "Whole cuts of chicken cooked on slow steam ('dum') with a rich paste of roasted almonds, cashews, poppy seeds, and saffron cream.",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=700&q=80",
      heritage: "A signature dish of Hyderabadi high society, prepared during grand banquets and family celebrations.",
      ingredients: "Chicken Cuts, Cashew & Almond Paste, Khus Khus (Poppy Seeds), Saffron Cream, Fried Onions, Ghee, Nutmeg.",
      pairings: "Rumali Roti, Garlic Naan, and Bagara Rice."
    },

    // 7. VEGETARIAN DELIGHTS
    {
      id: "dish-16",
      name: "Paneer Butter Masala",
      category: "vegetarian",
      type: "veg",
      portion: "Curry Bowl",
      special: false,
      desc: "Soft cottage cheese cubes simmered in a silky, mildly spiced tomato and cashew nut gravy enriched with butter and fresh cream.",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=80",
      heritage: "The crown jewel of Indian vegetarian dining, loved for its balanced sweet, tangy, and creamy flavor profile.",
      ingredients: "Fresh Malai Paneer, Ripe Plum Tomatoes, Cashew Paste, Amul Butter, Dairy Cream, Kasuri Methi, Honey.",
      pairings: "Butter Tandoori Naan or Steamed Basmati Rice."
    },
    {
      id: "dish-17",
      name: "Paneer Tikka Shashlik",
      category: "vegetarian",
      type: "veg",
      portion: "Tandoor Platter",
      special: false,
      desc: "Thick blocks of fresh cottage cheese, bell peppers, and red onions marinated in spiced mustard-curd and grilled in clay tandoor.",
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=700&q=80",
      heritage: "The ultimate smoky vegetarian barbecue favorite across North India and Hyderabad.",
      ingredients: "Cottage Cheese, Bell Peppers, Onions, Mustard Oil, Ajwain (Carom Seeds), Roasted Gram Flour, Chaat Masala.",
      pairings: "Spicy Mint Chutney and Lemon Slices."
    },

    // 8. TANDOORI BREADS
    {
      id: "dish-18",
      name: "Rumali Roti & Tandoori Butter Naan",
      category: "breads",
      type: "veg",
      portion: "Fresh from Oven",
      special: false,
      desc: "Handcrafted paper-thin handkerchief bread (Rumali) tossed on an inverted tawa, and fluffy leavened Naan baked in live charcoal tandoor.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80",
      heritage: "Traditional accompaniments indispensable to Hyderabadi feasts since the Mughal era.",
      ingredients: "Refined Flour, Milk, Butter, Nigella Seeds (Kalonji), Baked on dome tawa or clay tandoor.",
      pairings: "Mutton Rogan Josh, Dum Ka Murgh, or Paneer Gravies."
    },

    // 9. SHAWARMA & ROLLS
    {
      id: "dish-19",
      name: "Shah Ghouse Special Chicken Shawarma",
      category: "shawarma",
      type: "nonveg",
      portion: "Rumali / Khubus Roll",
      special: true,
      desc: "Spiced chicken sliced thin from our vertical rotisserie, wrapped in soft rumali bread with creamy garlic mayonnaise and pickled gherkins.",
      image: "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=700&q=80",
      heritage: "A middle-eastern classic adopted into Hyderabad's late-night food culture, crafted with extra meat and zero fillers.",
      ingredients: "Slow-Roasted Chicken, Garlic Mayo (Touwm), Pickled Beetroot, Green Chillies, Spiced Rumali Roti.",
      pairings: "Extra Garlic Dip and Pickled Chillies."
    },

    // 10. IRANI CHAI & BAKERY
    {
      id: "dish-20",
      name: "Special Hyderabadi Irani Chai & Osmania",
      category: "irani-chai",
      type: "veg",
      portion: "Chai + 4 Biscuits",
      special: true,
      desc: "Thick, slow-brewed decoction blended with reduced creamy milk and mawa, paired with freshly baked sweet-and-salty Osmania biscuits.",
      image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=700&q=80",
      heritage: "Introduced by Persian immigrants in the early 20th century, becoming the very heartbeat of Hyderabad's street conversations and cafe culture.",
      ingredients: "Assam CTC Tea Leaves, Reduced Full-Cream Milk, Mawa (Khowa), Cardamom, Osmania Butter Biscuits.",
      pairings: "Fine Khari Puff, Tie Biscuits, and fresh discussions."
    },

    // 11. ROYAL DESSERTS
    {
      id: "dish-21",
      name: "Qubani Ka Meetha (with Fresh Malai)",
      category: "desserts",
      type: "veg",
      portion: "Dessert Bowl",
      special: true,
      desc: "Slow-stewed dried apricots infused with fragrant rose water and sugar, garnished with crunchy apricot kernels and scoops of fresh clotted cream.",
      image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=700&q=80",
      heritage: "The premier traditional royal dessert of Hyderabad, without which no Nizami wedding or Dastarkhwan is complete.",
      ingredients: "Dry Apricots (Qubani), Apricot Seeds, Pure Sugar Syrup, Rose Water, Fresh Dairy Clotted Malai.",
      pairings: "Fresh Cream or Vanilla Bean Ice Cream."
    },
    {
      id: "dish-22",
      name: "Hyderabadi Double Ka Meetha",
      category: "desserts",
      type: "veg",
      portion: "Dessert Bowl",
      special: false,
      desc: "Golden fried bread triangles soaked in thick saffron rabri, flavored with cardamom and topped with roasted cashews, pistachios, and silver leaf.",
      image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=700&q=80",
      heritage: "Derived from 'Double Roti' (milk bread), this decadent royal dessert has sweetened celebrations in Hyderabad for generations.",
      ingredients: "Artisanal Bread, Saffron Milk, Rabri, Green Cardamom, Desi Ghee, Pistachios, Chandi Ka Warq.",
      pairings: "Hot Irani Chai or enjoyed warm as a finale."
    }
  ]
};

// Application State
let appData = null;
let currentUser = null; // { role: 'owner' | 'manager', username: '...' }

// Initialize Data
function initData() {
  const saved = localStorage.getItem('shahghouse_luxury_menu_v4');
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
  localStorage.setItem('shahghouse_luxury_menu_v4', JSON.stringify(appData));
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
  const heroTag = document.getElementById('heroTag');
  const heroTitle = document.getElementById('heroTitle');
  const heroSubtitle = document.getElementById('heroSubtitle');
  const topAnnouncement = document.getElementById('topAnnouncement');

  if (heroTag) heroTag.textContent = appData.hero.tag;
  if (heroTitle) heroTitle.textContent = appData.hero.title;
  if (heroSubtitle) heroSubtitle.textContent = appData.hero.subtitle;
  if (topAnnouncement) topAnnouncement.textContent = appData.hero.announcement;

  renderFeaturesList();
  renderCategoryPills();
  renderMenuList('all');
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

// Render Category Filter Tabs
function renderCategoryPills() {
  const container = document.getElementById('categoryFilters');
  if (!container) return;

  container.innerHTML = appData.categories.map((cat, idx) => `
    <button class="filter-btn ${idx === 0 ? 'active' : ''}" data-filter="${cat.id}">
      ${escapeHtml(cat.name)}
    </button>
  `).join('');

  setupFilters();
}

// Render Menu Cards (Prices and WhatsApp removed, added "More Information" icon button)
function renderMenuList(filter = 'all') {
  const container = document.getElementById('productsGrid');
  if (!container) return;

  const filtered = filter === 'all' 
    ? appData.menu 
    : appData.menu.filter(p => p.category === filter);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-secondary);">
        <span style="font-size: 2.8rem;">🍽️</span>
        <p style="font-size: 1.2rem; margin-top: 12px; font-family: 'Cinzel', serif;">No culinary specialties listed under this category.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(dish => {
    const isVeg = dish.type === 'veg';
    const vegBadge = isVeg 
      ? `<span class="diet-tag veg-tag" title="Vegetarian"><span class="diet-dot"></span> Veg</span>`
      : `<span class="diet-tag nonveg-tag" title="Non-Vegetarian"><span class="diet-dot"></span> Non-Veg</span>`;

    const chefBadge = dish.special ? `<span class="chef-special-badge">⭐ Royal Specialty</span>` : '';
    const catObj = appData.categories.find(c => c.id === dish.category);
    const catName = catObj ? catObj.name : dish.category;

    return `
      <div class="product-card" id="dish-card-${dish.id}">
        <div class="product-img-wrap">
          <img src="${dish.image}" alt="${escapeHtml(dish.name)}" class="product-img" onerror="this.src='https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=700&q=80'">
          ${chefBadge}
          <span class="category-pill-tag">${escapeHtml(catName)}</span>
        </div>
        <div class="product-body">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            ${vegBadge}
            <span style="font-size: 0.78rem; color: var(--text-muted); font-weight: 600;">${escapeHtml(dish.portion || 'Signature Serving')}</span>
          </div>
          <h3 class="product-name">${escapeHtml(dish.name)}</h3>
          <p class="product-desc">${escapeHtml(dish.desc)}</p>
          
          <!-- More Information Button as Requested -->
          <button class="btn-more-info" onclick="openDishInfoModal('${dish.id}')">
            <span>ℹ️</span> More Information
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// Open "More Information" Modal for a Dish
window.openDishInfoModal = function(dishId) {
  const dish = appData.menu.find(d => d.id === dishId);
  if (!dish) return;

  const modal = document.getElementById('dishInfoModal');
  const imgEl = document.getElementById('dishModalImg');
  const titleEl = document.getElementById('dishModalTitle');
  const dietEl = document.getElementById('dishModalDiet');
  const catEl = document.getElementById('dishModalCategory');
  const portionEl = document.getElementById('dishModalPortion');
  const descEl = document.getElementById('dishModalDesc');
  const heritageEl = document.getElementById('dishModalHeritage');
  const ingredientsEl = document.getElementById('dishModalIngredients');
  const pairingsEl = document.getElementById('dishModalPairings');

  if (imgEl) imgEl.src = dish.image;
  if (titleEl) titleEl.textContent = dish.name;
  
  if (dietEl) {
    dietEl.innerHTML = dish.type === 'veg' 
      ? `<span class="diet-tag veg-tag"><span class="diet-dot"></span> Vegetarian</span>`
      : `<span class="diet-tag nonveg-tag"><span class="diet-dot"></span> Non-Vegetarian</span>`;
  }

  const catObj = appData.categories.find(c => c.id === dish.category);
  if (catEl) catEl.textContent = catObj ? catObj.name : dish.category;
  if (portionEl) portionEl.textContent = dish.portion || "Standard Serving";
  if (descEl) descEl.textContent = dish.desc;
  if (heritageEl) heritageEl.textContent = dish.heritage || "Crafted following authentic Hyderabadi culinary recipes passed down through royal Nizami kitchens.";
  if (ingredientsEl) ingredientsEl.textContent = dish.ingredients || "Aromatic Shahi Spices, Pure Desi Ghee, Farm-fresh ingredients.";
  if (pairingsEl) pairingsEl.textContent = dish.pairings || "Accompanied with authentic Nizami condiments and fresh breads.";

  openModal('dishInfoModal');
};

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
        showToast("Welcome Owner! Full management hub unlocked.", "👑");
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
        showToast("Welcome Manager! Menu catalog access granted.", "📋");
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
    adminGreeting.textContent = currentUser.role === 'owner' ? "Owner Portal: Full Management Hub" : "Manager Portal: Catalog Operations";
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
  const inputInstagram = document.getElementById('inputInstagram');

  if (inputHeroTitle) inputHeroTitle.value = appData.hero.title;
  if (inputHeroSubtitle) inputHeroSubtitle.value = appData.hero.subtitle;
  if (inputAnnouncement) inputAnnouncement.value = appData.hero.announcement;
  if (inputInstagram) inputInstagram.value = appData.settings.instagram;

  renderAdminFeaturesList();
  renderAdminMenuList();

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
          <strong style="color: #fff;">${escapeHtml(f.title)}</strong>
          <span style="font-size: 0.72rem; background: rgba(212, 175, 55, 0.15); color: var(--gold-champagne); padding: 2px 6px; border-radius: 4px; margin-left: 6px;">${escapeHtml(f.badge || 'SPECIAL')}</span>
          <p style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 2px;">${escapeHtml(f.desc)}</p>
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

// Render Dishes in Admin
function renderAdminMenuList() {
  const container = document.getElementById('adminMenuList');
  if (!container) return;

  container.innerHTML = appData.menu.map(d => `
    <div class="admin-item-row">
      <div class="item-row-left">
        <img src="${d.image}" style="width: 44px; height: 44px; object-fit: cover; border-radius: 6px; border: 1px solid var(--border-subtle);">
        <div>
          <strong style="color: #fff;">${escapeHtml(d.name)}</strong>
          <span style="font-size: 0.72rem; color: var(--gold-champagne); background: rgba(212, 175, 55, 0.12); padding: 2px 6px; border-radius: 4px; margin-left: 6px;">${escapeHtml(d.category)}</span>
          <p style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 2px;">Portion: ${escapeHtml(d.portion || 'Signature')}</p>
        </div>
      </div>
      <div class="item-row-actions">
        <button class="btn-danger" onclick="deleteDish('${d.id}')">Delete</button>
      </div>
    </div>
  `).join('');
}

// Owner Feature Addition Handler
window.addNewFeature = function() {
  if (!currentUser || currentUser.role !== 'owner') {
    alert("Only the Owner has permission to add new highlights.");
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
    alert("Please provide both a Title and Description.");
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

// Delete Feature
window.deleteFeature = function(id) {
  if (!currentUser || currentUser.role !== 'owner') {
    alert("Only the Owner can delete highlights.");
    return;
  }
  if (confirm("Remove this highlight from the live website?")) {
    appData.features = appData.features.filter(f => f.id !== id);
    saveData();
    renderPublicSite();
    renderAdminFeaturesList();
    showToast("Special removed from website.", "🗑️");
  }
};

// Add Dish (No Price Field)
window.addNewDish = function() {
  if (!currentUser) return;

  const name = document.getElementById('newDishName').value.trim();
  const category = document.getElementById('newDishCategory').value;
  const type = document.getElementById('newDishType').value;
  const portion = document.getElementById('newDishPortion').value.trim() || "Signature Serving";
  const image = document.getElementById('newDishImage').value.trim() || "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=700&q=80";
  const desc = document.getElementById('newDishDesc').value.trim();
  const heritage = document.getElementById('newDishHeritage').value.trim();
  const ingredients = document.getElementById('newDishIngredients').value.trim();
  const pairings = document.getElementById('newDishPairings').value.trim();

  if (!name || !desc) {
    alert("Please fill in Dish Name and Description.");
    return;
  }

  const newDish = {
    id: "dish-" + Date.now(),
    name: name,
    category: category,
    type: type,
    portion: portion,
    special: false,
    desc: desc,
    image: image,
    heritage: heritage || "Crafted using traditional slow-cooking Nizami culinary methods.",
    ingredients: ingredients || "Aromatic Shahi Spices, Pure Ghee, and Fresh Herbs.",
    pairings: pairings || "Enjoyed with traditional Hyderabadi accompaniments."
  };

  appData.menu.unshift(newDish);
  saveData();
  renderPublicSite();
  renderAdminMenuList();

  document.getElementById('newDishName').value = '';
  document.getElementById('newDishDesc').value = '';
  document.getElementById('newDishHeritage').value = '';
  document.getElementById('newDishIngredients').value = '';
  document.getElementById('newDishPairings').value = '';

  showToast(`Dish "${name}" added to menu showcase!`, "🍽️");
};

// Delete Dish
window.deleteDish = function(id) {
  if (!currentUser) return;
  if (confirm("Delete this dish from the showcase?")) {
    appData.menu = appData.menu.filter(d => d.id !== id);
    saveData();
    renderPublicSite();
    renderAdminMenuList();
    showToast("Dish removed from menu.", "🗑️");
  }
};

// Save Site Settings & Hero
window.saveSiteSettings = function() {
  if (!currentUser) return;

  const title = document.getElementById('inputHeroTitle').value.trim();
  const subtitle = document.getElementById('inputHeroSubtitle').value.trim();
  const announcement = document.getElementById('inputAnnouncement').value.trim();
  const instagram = document.getElementById('inputInstagram').value.trim();

  if (title) appData.hero.title = title;
  if (subtitle) appData.hero.subtitle = subtitle;
  if (announcement) appData.hero.announcement = announcement;
  if (instagram) appData.settings.instagram = instagram;

  saveData();
  renderPublicSite();
  showToast("Restaurant settings updated live!", "✨");
};

// Reset to Default
window.resetToDefault = function() {
  if (confirm("Reset menu data back to official Shah Ghouse defaults?")) {
    appData = JSON.parse(JSON.stringify(RESTAURANT_DATA));
    saveData();
    renderPublicSite();
    populateAdminForms();
    showToast("Website reset to authentic defaults.", "🔄");
  }
};

// Filter Tabs
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

// Setup Header Navigation Links (Only mark line when clicked, never two at once, no permanent line on startup)
function setupNavLinks() {
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Ensure all links start clean with zero permanent lines
  navLinks.forEach(link => link.classList.remove('active'));

  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
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

function escapeHtml(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

window.copyJsonData = function() {
  const area = document.getElementById('jsonExportArea');
  if (area) {
    area.select();
    navigator.clipboard.writeText(area.value);
    showToast("JSON menu data copied to clipboard!", "📋");
  }
};

// Light / Dark Mode Theme Engine
function setupThemeToggle() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  const toggleIcon = document.getElementById('themeToggleIcon');
  
  // Check persisted theme preference
  const savedTheme = localStorage.getItem('shahghouse_theme') || 'dark';
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    if (toggleIcon) toggleIcon.textContent = '🌙';
  } else {
    document.body.classList.remove('light-mode');
    if (toggleIcon) toggleIcon.textContent = '☀️';
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const isLight = document.body.classList.toggle('light-mode');
      const newTheme = isLight ? 'light' : 'dark';
      localStorage.setItem('shahghouse_theme', newTheme);
      if (toggleIcon) {
        toggleIcon.textContent = isLight ? '🌙' : '☀️';
      }
      showToast(isLight ? "Switched to Royal Light Mode ☀️" : "Switched to Luxury Dark Mode 🌙", isLight ? "☀️" : "🌙");
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initData();
  renderPublicSite();
  setupAuth();
  setupStaffDashboard();
  setupNavLinks();
  setupThemeToggle();

  // Close modals on clicking backdrop
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  });

  // Close Dish Info Modal button
  const closeDishBtn = document.getElementById('closeDishInfoModal');
  if (closeDishBtn) {
    closeDishBtn.addEventListener('click', () => closeModal('dishInfoModal'));
  }
});
