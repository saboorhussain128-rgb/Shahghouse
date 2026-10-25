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

    // ===================================================================
    // 1. ROYAL DUM BIRYANI (ALL 5 OFFICIAL INSTAGRAM POSTS)
    // ===================================================================
    {
      id: "biryani-1",
      name: "Special Mutton Dum Biryani (50 Years Legacy)",
      category: "biryani",
      type: "nonveg",
      portion: "Handi / Single Serving",
      special: true,
      desc: "Discover the timeless flavor of Shah Ghouse\u2019s iconic Mutton Biryani. Serving the best Hyderabadi biryani for over 50 years with tender slow-cooked mutton and aged saffron basmati.",
      image: "images/biryani-1-mutton.jpg",
      instagram: "https://www.instagram.com/p/C8bxGgCJ4NP/",
      heritage: "Carrying five decades of heritage from the royal kitchens of Hyderabad, slow-steamed under dough-sealed handis.",
      ingredients: "Aged Basmati Rice, Tender Mutton, Kashmiri Saffron, Pure Desi Ghee, Crispy Brown Onions, Shahi Jeera, Green Cardamom.",
      pairings: "Mirchi Ka Salan, Dahi Ki Chutney, and Fresh Sliced Onions."
    },
    {
      id: "biryani-2",
      name: "Hyderabadi Chicken Dum Biryani",
      category: "biryani",
      type: "nonveg",
      portion: "Full Handi",
      special: false,
      desc: "In a world full of rice, be Hyderabadi Biryani! Succulent farm-fresh chicken marinated in fragrant spices and slow-cooked in charcoal dum.",
      image: "images/biryani-2-chicken.jpg",
      instagram: "https://www.instagram.com/p/CzMSLCXPVTP/",
      heritage: "Classic Deccan Kachhi Dum style where raw chicken and aromatic rice cook together in sealed brass cauldrons.",
      ingredients: "Prime Chicken, Long Grain Basmati, Mint, Coriander, Ginger-Garlic, Yogurt, Royal Spices.",
      pairings: "Chilled Raita, Spicy Deccan Salan, and Lemon."
    },
    {
      id: "biryani-3",
      name: "Hyderabae Royal Biryani Vibes",
      category: "biryani",
      type: "nonveg",
      portion: "Special Dastarkhwan Serving",
      special: true,
      desc: "Hyderabae Biryani Vibes \u2014 the pure definition of food love and authentic Hyderabadi taste from Shah Ghouse.",
      image: "images/biryani-3-vibes.jpg",
      instagram: "https://www.instagram.com/p/CvHm5nJvAWH/",
      heritage: "Crafted with extra saffron-infused rice and double marinated succulent meat.",
      ingredients: "Selected Cuts of Meat, Basmati Rice, Desi Ghee, Saffron Strands, Fried Onions, Garam Masala.",
      pairings: "Tangy Mirchi Ka Salan and Fresh Onion Salad."
    },
    {
      id: "biryani-4",
      name: "The Crown Handi Biryani",
      category: "biryani",
      type: "nonveg",
      portion: "Royal Handi Platter",
      special: true,
      desc: "The crown of a perfect meal. Served hot in authentic royal handi with fragrant aromas that fill the room.",
      image: "images/biryani-4-crown.jpg",
      instagram: "https://www.instagram.com/p/CwmWo43R_G1/",
      heritage: "The quintessential royal centerpiece of every Hyderabadi family gathering and festive dastarkhwan.",
      ingredients: "Tender Meat Cuts, Saffron Basmati, Whole Spices, Roasted Cashews, Boiled Egg, Desi Ghee.",
      pairings: "Salad, Dahi Chutney, and Salan."
    },
    {
      id: "biryani-5",
      name: "Authentic Nizam Dum Biryani Feast",
      category: "biryani",
      type: "nonveg",
      portion: "Grand Feast Platter",
      special: true,
      desc: "Get ready to take a flavorful journey to the heart of Hyderabad with authentic Hyderabadi dum biryani with rich spices and fragrant rice.",
      image: "images/biryani-5-nizam.jpg",
      instagram: "https://www.instagram.com/p/CrD8YMXB5NY/",
      heritage: "Prepared using royal Nizami cooking methods preserved unchanged since 1984.",
      ingredients: "Prime Meat, Aged Rice, Shahi Potli Masala, Pure Clarified Butter, Saffron Essence.",
      pairings: "Mirchi Ka Salan, Dahi Ki Chutney, and Qubani Ka Meetha."
    },
    // ===================================================================
    // 2. ARABIAN MANDI (ALL 12 OFFICIAL INSTAGRAM POSTS)
    // ===================================================================
    {
      id: "mandi-1",
      name: "Classic Shah Ghouse Mutton Mandi",
      category: "mandi",
      type: "nonveg",
      portion: "Platter (Serves 2-3)",
      special: false,
      desc: "Mutton Mandi \u2014 the ultimate comfort food for any occasion. Tender mutton over fragrant spiced mandi rice.",
      image: "images/mandi-1-classic-mutton.jpg",
      instagram: "https://www.instagram.com/p/Cr27dbRBe3r/",
      heritage: "Traditional Arabian pit-roasted delicacy brought by Yemenis to Hyderabad.",
      ingredients: "Mutton Shank, Basmati Rice, Hawaij Spices, Dried Lemon (Loomi), Roasted Nuts.",
      pairings: "Arabian Spicy Tomato Chutney and Garlic Mayo."
    },
    {
      id: "mandi-2",
      name: "Shah Ghouse Juicy Mutton Mandi",
      category: "mandi",
      type: "nonveg",
      portion: "Signature Platter (Serves 2-4)",
      special: true,
      desc: "Juicy, tender mutton paired with aromatic rice and a burst of delectable spices. It's a flavor explosion that leaves you craving for more!",
      image: "images/mandi-2-juicy-mutton.jpg",
      instagram: "https://www.instagram.com/p/CtwLb9BhSSA/",
      heritage: "Slow-roasted for hours until the meat effortlessly falls off the bone.",
      ingredients: "Juicy Mutton Shanks, Aromatic Mandi Rice, Golden Fried Cashews, Yemeni Spices, Clarified Butter.",
      pairings: "Spicy Yemeni Salsa, Garlic Touwm, and Clear Soup."
    },
    {
      id: "mandi-3",
      name: "Shah Ghouse Perfection Mutton Mandi",
      category: "mandi",
      type: "nonveg",
      portion: "Platter (Serves 2-3)",
      special: false,
      desc: "Experience perfection on your plate with Shah Ghouse\u2019s Mutton Mandi \u2014 where spice and tenderness unite in culinary harmony.",
      image: "images/mandi-3-perfection-mutton.jpg",
      instagram: "https://www.instagram.com/p/C2WQZypx2Tu/",
      heritage: "Meticulously spiced and steam-roasted to maintain peak moisture and aroma.",
      ingredients: "Prime Mutton, Long Grain Rice, Cardamom, Clove, Black Pepper, Cinnamon, Ghee.",
      pairings: "Arabian Dips and Fresh Salad."
    },
    {
      id: "mandi-4",
      name: "Delectable Mutton Mandi Feast",
      category: "mandi",
      type: "nonveg",
      portion: "Family Feast (Serves 3-4)",
      special: true,
      desc: "Unveiling the delectable Mutton Mandi feast at Shah Ghouse Restaurant! A grand spread of juicy meat and golden spiced rice.",
      image: "images/mandi-4-feast-mutton.jpg",
      instagram: "https://www.instagram.com/p/C6ivZhtp-OI/",
      heritage: "A festive celebration dish served on wide circular platters meant for shared dining.",
      ingredients: "Double Mutton Shanks, Spiced Mandi Rice, Roasted Almonds, Golden Sultanas.",
      pairings: "Tomato Chutney, Cucumber Yogurt Salsa, and Marag Broth."
    },
    {
      id: "mandi-5",
      name: "Signature Arabian Mutton Mandi",
      category: "mandi",
      type: "nonveg",
      portion: "Signature Platter",
      special: false,
      desc: "Authentic Arabian Mutton Mandi seasoned with dry roasted whole spices and golden fried dry fruits.",
      image: "images/mandi-5-signature-mutton.jpg",
      instagram: "https://www.instagram.com/p/C-UjlB7PpAE/",
      heritage: "Barkas style Arabian mandi perfected with Hyderabadi culinary zest.",
      ingredients: "Slow-Cooked Mutton, Mandi Basmati, Dry Lime, Fried Cashews, Ghee.",
      pairings: "Arabic Garlic Dip and Spicy Chutney."
    },
    {
      id: "mandi-6",
      name: "Shah Ghouse Royal Mutton Mandi Platter",
      category: "mandi",
      type: "nonveg",
      portion: "Royal Platter (Serves 3-5)",
      special: true,
      desc: "Shah Ghouse Royal Mutton Mandi Platter. Extra large slow-roasted mutton pieces with caramelized onions and nuts.",
      image: "images/mandi-6-royal-mutton.jpg",
      instagram: "https://www.instagram.com/p/DcvzALnzQjp/",
      heritage: "The ultimate party platter for mutton lovers across Hyderabad.",
      ingredients: "Selected Mutton Cuts, Fragrant Rice, Shahi Nuts, Clarified Butter, Saffron.",
      pairings: "Yemeni Salsa, Touwm, and Mutton Bone Soup."
    },
    {
      id: "mandi-7",
      name: "Smoky Charcoal Chicken Mandi",
      category: "mandi",
      type: "nonveg",
      portion: "Half / Full Bird Platter",
      special: false,
      desc: "Smoky, aromatic and pure happiness on a plate \u2014 our Charcoal Chicken Mandi is roasted to juicy perfection.",
      image: "images/mandi-7-smoky-chicken.jpg",
      instagram: "https://www.instagram.com/p/DcvuzJtzx0f/",
      heritage: "Smoky char combined with subtle cardamom and clove-scented basmati rice.",
      ingredients: "Whole Char-Grilled Chicken, Mandi Rice, Garlic Paste, Arabian Spices, Fried Onions.",
      pairings: "Garlic Mayonnaise Dip (Touwm) and Spicy Tomato Salsa."
    },
    {
      id: "mandi-8",
      name: "Shah Ghouse Faham Chicken Mandi",
      category: "mandi",
      type: "nonveg",
      portion: "Full Platter (Serves 2-3)",
      special: true,
      desc: "Shah Ghouse Faham Chicken Mandi. Grilled over real charcoal embers, seasoned with lemon zest and Arab herbs.",
      image: "images/mandi-8-faham-chicken.jpg",
      instagram: "https://www.instagram.com/p/CuOmHVsvx-r/",
      heritage: "A gulf favorite that has become a sensational evening craving in Hyderabad.",
      ingredients: "Faham Spiced Chicken, Fragrant Basmati, Olive Oil, Roasted Cashews, Raisins.",
      pairings: "Creamy Garlic Touwm and Fiery Arabian Salsa."
    },
    {
      id: "mandi-9",
      name: "Shah Ghouse Mix Mandi (Mutton & Chicken)",
      category: "mandi",
      type: "nonveg",
      portion: "Mixed Feast (Serves 3-4)",
      special: true,
      desc: "Experience the ultimate harmony of flavors with our Mix Mandi, where succulent meat meets juicy chicken.",
      image: "images/mandi-9-mix-mandi.jpg",
      instagram: "https://www.instagram.com/p/C63M2MIAdYG/",
      heritage: "The best of both worlds uniting tender slow-cooked mutton and crispy charcoal chicken.",
      ingredients: "Tender Mutton Shanks, Grilled Chicken, Mandi Rice, Fried Cashews, Saffron Butter.",
      pairings: "Double Dips (Garlic Touwm & Tomato Chutney) and Clear Soup."
    },
    {
      id: "mandi-10",
      name: "Double Flavor Mix Mandi Feast",
      category: "mandi",
      type: "nonveg",
      portion: "Grand Feast (Serves 3-4)",
      special: true,
      desc: "Double the Flavor, Double the Fun \u2014 Mix Chicken & Meat Mandi Feast from Shah Ghouse!",
      image: "images/mandi-10-double-mix.jpg",
      instagram: "https://www.instagram.com/p/Cu6odrhPLob/",
      heritage: "Created for groups who want both juicy mutton and smoky chicken on a single platter.",
      ingredients: "Braised Mutton, Roasted Chicken, Fragrant Basmati, Dry Lime, Golden Almonds.",
      pairings: "Yemeni Salsa, Garlic Cream, and Onion Rings."
    },
    {
      id: "mandi-11",
      name: "Shah Ghouse Grand Mix Mandi Harmony",
      category: "mandi",
      type: "nonveg",
      portion: "Royal Platter (Serves 4-5)",
      special: true,
      desc: "A tantalizing blend of fragrant rice, succulent mutton, and flavorful chicken \u2014 a symphony of tastes in every bite!",
      image: "images/mandi-11-grand-mix.jpg",
      instagram: "https://www.instagram.com/p/C2Rx88pxzbq/",
      heritage: "A grand celebration banquet platter loaded with roasted dry fruits and juicy meats.",
      ingredients: "Selected Mutton Cuts, Half Chicken, Spiced Rice, Fried Cashews, Ghee.",
      pairings: "Arabic Dips, Raita, and Hot Mutton Broth."
    },
    {
      id: "mandi-12",
      name: "All-in-One Arabian Mandi Platter",
      category: "mandi",
      type: "nonveg",
      portion: "All-in-One Feast (Serves 4-6)",
      special: true,
      desc: "Why choose one when the platter can have it all? A little chicken, a little mutton and a whole lot of Mandi goodness.",
      image: "images/mandi-12-all-in-one.jpg",
      instagram: "https://www.instagram.com/p/Dcvwi9azztD/",
      heritage: "Shah Ghouse's signature oversized Mandi platter designed for family feasts.",
      ingredients: "Full Spread Mutton, Chicken Pieces, Saffron Mandi Rice, Roasted Nuts, Fried Onions.",
      pairings: "Complete Set of Arabian Dips, Salsa, and Soup."
    },
    // ===================================================================
    // 3. HALEEM & SOUPS (ALL 8 OFFICIAL INSTAGRAM POSTS)
    // ===================================================================
    {
      id: "haleem-1",
      name: "Shah Ghouse Special Mutton Haleem",
      category: "haleem",
      type: "nonveg",
      portion: "Bowl / Family Pack",
      special: true,
      desc: "Your friend owes you this! World-famous Shah Ghouse Mutton Haleem, pounded for 12 hours with pure desi ghee and tender meat.",
      image: "images/haleem-1-special.jpg",
      instagram: "https://www.instagram.com/p/DVTH2jcEU9N/",
      heritage: "GI-tagged authentic Hyderabadi culinary legend, prepared continuously during Ramzan and special seasons.",
      ingredients: "Prime Mutton, Cracked Wheat, Lentils, Pure Desi Ghee, Crispy Fried Onions, Roasted Cashews.",
      pairings: "Fried Cashews, Fresh Lemon Slice, and Boiled Egg."
    },
    {
      id: "haleem-2",
      name: "Slow-Cooked Desi Ghee Haleem",
      category: "haleem",
      type: "nonveg",
      portion: "Sealed Box / Dine-in Bowl",
      special: true,
      desc: "Pure slow-cooked perfection, sealed with care. Every scoop of Haleem carries tradition, richness and that signature Shah Ghouse taste.",
      image: "images/haleem-2-desi-ghee.jpg",
      instagram: "https://www.instagram.com/reel/DVLrYBuEYbs/",
      heritage: "Pounded with heavy wooden ghotnas until meat fibers melt smoothly into rich wheat broth.",
      ingredients: "Boneless Mutton, Wheat Porridge, Clarified Butter, Rose Petals, Cardamom, Mint.",
      pairings: "Extra Ghee Tadka and Fresh Lime."
    },
    {
      id: "haleem-3",
      name: "Ramzan Shahi Pounded Haleem",
      category: "haleem",
      type: "nonveg",
      portion: "Royal Serving",
      special: true,
      desc: "Will you be my Haleem\u00e8? It's a promise of slow-cooked love. Decadent, rich, and unforgettable.",
      image: "images/haleem-3-ramzan.jpg",
      instagram: "https://www.instagram.com/p/DUdSL6qEe3Y/",
      heritage: "The iconic Ramzan delicacy that draws food lovers from across the country to Shah Ghouse.",
      ingredients: "Mutton, Daliya, Chana Dal, Desi Ghee, Shahi Garam Masala, Crispy Birista.",
      pairings: "Cashew Garnish and Sliced Green Chillies."
    },
    {
      id: "haleem-4",
      name: "Shah Ghouse Eid Season Haleem",
      category: "haleem",
      type: "nonveg",
      portion: "Festival Special Bowl",
      special: true,
      desc: "Shah Ghouse Eid Season Haleem \u2014 the undisputed go-to destination for Haleem lovers across Hyderabad.",
      image: "images/haleem-4-eid-season.jpg",
      instagram: "https://www.instagram.com/reel/C6UohFbg3kp/",
      heritage: "A four-decade tradition celebrated in food blogs and global culinary travel guides.",
      ingredients: "Prime Meat, Cracked Wheat, Pounded Spices, Desi Ghee, Almond Slivers.",
      pairings: "Hard-Boiled Egg and Mint Leaves."
    },
    {
      id: "haleem-5",
      name: "Soulful Hyderabadi Mutton Haleem",
      category: "haleem",
      type: "nonveg",
      portion: "Classic Bowl",
      special: false,
      desc: "Soulful Hyderabadi Mutton Haleem. A symphony of flavors that will tantalize your taste buds with velvety richness.",
      image: "images/haleem-5-soulful.jpg",
      instagram: "https://www.instagram.com/p/C4seK64xo0O/",
      heritage: "Traditional Nizami breakfast and evening nourishment packed with high protein and aroma.",
      ingredients: "Tender Mutton, Wheat, Ghee, Cinnamon, Cloves, Black Cumin, Brown Onions.",
      pairings: "Hot Naan or enjoyed on its own with a squeeze of lime."
    },
    {
      id: "haleem-6",
      name: "Hyderabadi Mutton Marag (Royal Broth)",
      category: "haleem",
      type: "nonveg",
      portion: "Soup Bowl",
      special: false,
      desc: "Hyderabadi Mutton Marag. A velvety, peppery royal bone broth simmered for hours with tender mutton chops and almond paste.",
      image: "images/haleem-6-marag.jpg",
      instagram: "https://www.instagram.com/p/C4_Sc7ty_6W/",
      heritage: "The traditional royal wedding starter of Hyderabad, served steaming hot to warm the palate.",
      ingredients: "Mutton Chops, Bone Broth, Almond-Pistachio Puree, Black Pepper, Green Cardamom, Ghee.",
      pairings: "Crisp Sheermal Roti, Naan, or enjoyed as a hot soup."
    },
    {
      id: "haleem-7",
      name: "Shah Ghouse Nahari Paya with Warm Naan",
      category: "haleem",
      type: "nonveg",
      portion: "Breakfast / Evening Bowl",
      special: true,
      desc: "Pair it with warm naan, tear, dip, and taste the magic. Our Nahari Paya isn\u2019t just food \u2014 it\u2019s Hyderabad in a bowl.",
      image: "images/haleem-7-nahari-naan.jpg",
      instagram: "https://www.instagram.com/p/DPllzBgEUD4/",
      heritage: "Served fresh every morning at Shah Ghouse, slow-cooked overnight over simmering coals.",
      ingredients: "Mutton Trotters (Paya), Bone Marrow, Potli Masala, Ginger, Caramelized Onions, Lemon.",
      pairings: "Warm Tandoori Naan, Sheermal, and Sliced Chillies."
    },
    {
      id: "haleem-8",
      name: "Slow-Simmered Shahi Nahari Paya",
      category: "haleem",
      type: "nonveg",
      portion: "Rich Stew Bowl",
      special: true,
      desc: "Rich, spicy, and soul-soothing \u2014 our Nahari Paya is Hyderabadi comfort in every spoonful. Slow-cooked to perfection with age-old spices.",
      image: "images/haleem-8-shahi-nahari.jpg",
      instagram: "https://www.instagram.com/p/DPlldj-ER7l/",
      heritage: "The legendary breakfast that has fueled Hyderabad for generations.",
      ingredients: "Paya Trotters, Mutton Shanks, Bone Marrow Gravy, Royal Potli Herbs, Lemon.",
      pairings: "Fresh Naan and Lemon Wedges."
    },
    // 4. STONE KEBABS & TANDOOR (OFFICIAL INSTAGRAM SHOWCASE & NIZAMI SPECIALTIES)
    {
      id: "dish-8",
      name: "Pathar Ka Gosht (Nizami Stone Kebab)",
      category: "kebabs",
      type: "nonveg",
      portion: "Signature Stone Platter",
      special: true,
      desc: "Thinly beaten prime mutton fillets marinated overnight in raw papaya and secret nizami potli spices, grilled directly on a heated natural granite slab. Melting tenderness with unmatched royal smoky flavor.",
      image: "images/kebab-1.jpg",
      instagram: "https://www.instagram.com/p/DIV_STpSdM2/",
      heritage: "Legend holds that the 6th Nizam of Hyderabad discovered this delicacy during a royal hunting expedition, where meats were cooked on heated granite stones.",
      ingredients: "Tender Mutton Fillets, Raw Green Papaya, Allspice (Kabab Chini), Shahi Jeera, Roasted Chana Powder, Desi Ghee, Royal Potli Herbs.",
      pairings: "Fresh Mint Yogurt Chutney, Pickled Onion Rings, and Soft Rumali Roti."
    },
    {
      id: "kebab-1",
      name: "Shah Ghouse Charcoal Seekh & Boti Kebab Platter",
      category: "kebabs",
      type: "nonveg",
      portion: "Sizzling Skewer Platter",
      special: true,
      desc: "Juiciest, most flavorful chargrilled kebabs in Hyderabad. Succulent mutton seekh and spicy boti kebabs marinated in authentic spices and grilled fresh over live charcoal embers.",
      image: "images/kebab-1.jpg",
      instagram: "https://www.instagram.com/p/DIV_STpSdM2/",
      heritage: "Every skewer tells a 50-year story of royal Hyderabadi heritage, bold flavors, and charcoal grilling mastery.",
      ingredients: "Finely Minced Mutton, Prime Meat Cubes, Brown Crispy Onions, Mint, Garam Masala, Ginger-Garlic, Pure Ghee Basting.",
      pairings: "Spicy Mint Chutney, Charred Green Chillies, Sliced Lemon, and Rumali Roti."
    },
    {
      id: "kebab-2",
      name: "Shah Ghouse Melt-in-Mouth Chicken Kebab Bites",
      category: "kebabs",
      type: "nonveg",
      portion: "Portion (6-8 Juicy Pieces)",
      special: false,
      desc: "Grilled to golden perfection, these tender, juicy boneless chicken chunks are seasoned with an exquisite royal blend of spices and fresh herbs. Every single bite bursts with irresistible flavor.",
      image: "images/kebab-2.jpg",
      instagram: "https://www.instagram.com/p/DIbbllttlF3/",
      heritage: "Slow-roasted over coals for a signature melt-in-the-mouth texture that has made Shah Ghouse a meat-lover's paradise.",
      ingredients: "Boneless Farm Chicken, Strained Curd, Green Chillies, Kasuri Methi, Lemon Juice, Aromatic Herbs, Butter Glaze.",
      pairings: "Creamy Mint Dip, Pickled Red Onion Rings, and Butter Naan."
    },
    {
      id: "kebab-3",
      name: "Shah Ghouse Royal Tandoori Chicken",
      category: "kebabs",
      type: "nonveg",
      portion: "Half / Full Bird",
      special: true,
      desc: "A burst of authentic flavors that redefine the essence of culinary delight. Whole farm chicken scored and double-marinated in strained curd, Kashmiri deggi mirch, and mustard oil, roasted in clay tandoors.",
      image: "images/kebab-3.jpg",
      instagram: "https://www.instagram.com/p/C14cmK2xM7v/",
      heritage: "Centuries-old clay tandoor technique creating an enticing smoky char outside while keeping the meat juicy and succulent within.",
      ingredients: "Whole Farm Chicken, Hung Curd, Deggi Mirch, Mustard Oil, Kasuri Methi, Lemon, Chaat Masala, Butter Glaze.",
      pairings: "Fresh Mint-Coriander Chutney, Onion Lachha, Lemon Wedges, and Rumali Roti."
    },
    {
      id: "kebab-4",
      name: "Shah Ghouse Flame-Grilled Tangdi Kebab",
      category: "kebabs",
      type: "nonveg",
      portion: "4 Plump Drumsticks",
      special: true,
      desc: "Juicy, plump chicken drumsticks marinated overnight in cashew paste, rich spices, and hung curd, flame-grilled over live fire to lock in tantalizing smoky tenderness.",
      image: "images/kebab-4.jpg",
      instagram: "https://www.instagram.com/p/DK4OEaKSKxM/",
      heritage: "Where tradition meets taste — a celebrated Mughlai delicacy roasted to golden amber perfection on red-hot skewers.",
      ingredients: "Tender Chicken Drumsticks, Cashew-Nut Paste, Shahi Garam Masala, Kashmiri Chilli, Lemon, Pure Desi Ghee.",
      pairings: "Green Mint Chutney, Charred Lemon, and Fluffy Tandoori Naan."
    },
    {
      id: "kebab-5",
      name: "Shah Ghouse Grand Tandoori Feast Platter",
      category: "kebabs",
      type: "nonveg",
      portion: "Grand Royal Feast Platter",
      special: true,
      desc: "A platter so big, even your cravings need backup! An opulent assortment of Shah Ghouse's finest kebabs, seekhs, and smoked tandoori delicacies served sizzling on one grand feast platter.",
      image: "images/kebab-5.jpg",
      instagram: "https://www.instagram.com/p/DRo9lwuEeKa/",
      heritage: "Designed for grand gatherings, festive family celebrations, and true meat connoisseurs of Hyderabad.",
      ingredients: "Assorted Mutton & Chicken Kebabs, Tangdi, Seekh, Potli Masala, Fresh Mint, Lemon, Saffron-infused Ghee.",
      pairings: "Assorted Shahi Chutneys, Pickled Onions, and a Basket of Fresh Tandoori Breads."
    },
    {
      id: "kebab-6",
      name: "Shah Ghouse Signature Smoky Tandoori Delight",
      category: "kebabs",
      type: "nonveg",
      portion: "Chef's Special Serving",
      special: false,
      desc: "Smoky. Juicy. Tandoori done right. Chargrilled to tender perfection with Shah Ghouse's signature Hyderabadi spice kick, sealing in natural juices over live coal embers.",
      image: "images/kebab-6.jpg",
      instagram: "https://www.instagram.com/p/DReuKK1ETzX/",
      heritage: "Authentic coal-pit tandoori craftsmanship perfected over decades by our master ustaads in Hyderabad.",
      ingredients: "Marinated Chicken Cuts, Crushed Peppercorns, Roasted Cumin, Green Cardamom, Mustard Oil, Fresh Mint.",
      pairings: "Velvety Mint Dip, Crisp Onion Rings, and Hot Garlic Naan."
    },
    // 5. HYDERABADI STARTERS (OFFICIAL INSTAGRAM SHOWCASE & NIZAMI APPETIZERS)
    {
      id: "starter-1",
      name: "Shah Ghouse Legendary Chicken 65",
      category: "starters",
      type: "nonveg",
      portion: "Signature Sizzling Plate",
      special: true,
      desc: "The ultimate South Indian & Hyderabadi icon! Crispy on the outside, juicy on the inside, and packed with fiery flavors. Boneless chicken tossed with aromatic spices, fresh curry leaves, and green chillies.",
      image: "images/starter-1.jpg",
      instagram: "https://www.instagram.com/p/DA0Z_vcSCuO/",
      heritage: "Created in 1965 and elevated by Shah Ghouse with a signature spiced curd tempering and crackling curry leaf aroma.",
      ingredients: "Boneless Farm Chicken, Crisp Curry Leaves, Slit Green Chillies, Garlic, Red Chilli Paste, Spiced Curd, Black Pepper.",
      pairings: "Sliced Red Onions, Fresh Lemon Wedges, or paired with Biryani."
    },
    {
      id: "starter-2",
      name: "Shah Ghouse Crispy Prawn Manchurian",
      category: "starters",
      type: "nonveg",
      portion: "Full Platter",
      special: true,
      desc: "Experience the essence of Shah Ghouse’s Prawn Manchurian: A delectable fusion of zesty flavors featuring golden battered prawns tossed with scallions, crushed garlic, and a tangy Indo-Hyderabadi glaze.",
      image: "images/starter-2.jpg",
      instagram: "https://www.instagram.com/p/C3fpQFRh_CO/",
      heritage: "A celebrated Indo-Deccan seafood specialty perfected in our kitchens with a crispy crunch and luscious glaze.",
      ingredients: "Fresh Bay Prawns, Spring Onions, Minced Garlic, Szechuan Chilli, Soya Glaze, White Pepper, Coriander.",
      pairings: "Fresh Lemon, Shredded Cabbage Salad, and Mint Dip."
    },
    {
      id: "starter-3",
      name: "Shah Ghouse Arabian Delights Starter Platter",
      category: "starters",
      type: "nonveg",
      portion: "Grand Appetizer Platter",
      special: true,
      desc: "A feast of Arabian & Hyderabadi delights! Loaded with juicy spiced meats, golden fritters, and sizzling barbecue cuts served alongside traditional dips and crisp accompaniments.",
      image: "images/starter-3.jpg",
      instagram: "https://www.instagram.com/p/C_Lp5VrBWVG/",
      heritage: "An iconic combination platter celebrating the cross-cultural Arabian and Hyderabadi culinary heritage of Old City.",
      ingredients: "Assorted Tender Chicken & Mutton Cuts, Garlic Dip, Toum, Pickled Turnips, Royal Nizami Spices.",
      pairings: "Garlic Toum, Spicy Harissa Sauce, and Warm Khubz / Naan."
    },
    {
      id: "starter-4",
      name: "Shah Ghouse Zesty Chicken Hariyali Starter",
      category: "starters",
      type: "nonveg",
      portion: "Tender Herb Platter",
      special: false,
      desc: "Experience the zesty flavor of Chicken Hariyali! Tender chicken marinated in a vibrant blend of fresh garden mint, coriander leaves, green chillies, and shahi spices, grilled to juicy succulent perfection.",
      image: "images/starter-4.jpg",
      instagram: "https://www.instagram.com/p/DAvuDgvym2z/",
      heritage: "A fresh herbal Mughlai favorite known for its bright green emerald color and soothing mint-coriander aromatic finish.",
      ingredients: "Boneless Chicken Chunks, Fresh Coriander, Garden Mint, Hung Yogurt, Green Chillies, Lemon Juice, Chaat Masala.",
      pairings: "Creamy Mint Chutney, Pickled Onions, and Lime Slices."
    },
    {
      id: "starter-5",
      name: "Shah Ghouse Smoky Nizami Starter Bites",
      category: "starters",
      type: "nonveg",
      portion: "Chef's Special Serving",
      special: false,
      desc: "Smoky. Juicy. Tandoori done right. Prime boneless cuts chargrilled to tender perfection with Shah Ghouse's signature Hyderabadi spice kick, locking in intense flavor over red-hot coals.",
      image: "images/starter-5.jpg",
      instagram: "https://www.instagram.com/p/DReuKK1ETzX/",
      heritage: "Slow-roasted over coal embers by master grill chefs for an unmistakable charcoal smoke flavor.",
      ingredients: "Marinated Chicken, Black Peppercorns, Roasted Cumin, Green Cardamom, Mustard Oil, Fresh Mint.",
      pairings: "Mint Yogurt Dip, Sliced Red Onions, and Garlic Naan."
    },
    {
      id: "dish-12",
      name: "Chicken Majestic (Nizami Royal Starter)",
      category: "starters",
      type: "nonveg",
      portion: "Full Plate",
      special: true,
      desc: "Tender fried chicken strips coated in a velvety sauce infused with fresh mint, green chillies, garlic, and aromatic spices.",
      image: "images/starter-1.jpg",
      heritage: "A contemporary Hyderabad favorite praised for its smooth minty undertone and crispy texture.",
      ingredients: "Chicken Strips, Fresh Mint Puree, Garlic, Curd, Crushed Cumin, Green Chillies, Coriander.",
      pairings: "Crisp Onion Salad and Fresh Lime."
    },
    {
      id: "dish-14",
      name: "Tala Hua Gosht (Hyderabadi Crispy Mutton Fry)",
      category: "starters",
      type: "nonveg",
      portion: "Full Plate",
      special: true,
      desc: "Succulent boneless mutton chunks slow-cooked until fork tender, then flash-fried with cracked black pepper, curry leaves, and green chillies.",
      image: "images/starter-3.jpg",
      heritage: "The crown jewel of Old City Hyderabad. Traditionally savored late into the evening across Charminar and Tolichowki.",
      ingredients: "Tender Mutton Cubes, Fresh Curry Leaves, Coarse Black Pepper, Green Chillies, Ginger-Garlic, Pure Desi Ghee.",
      pairings: "Steaming Khatti Dal, Fragrant Basmati Rice, and Sliced Onions."
    },
    // 6. SHAHI NIZAMI CURRIES (OFFICIAL INSTAGRAM SHOWCASE & ROYAL GRAVIES)
    {
      id: "curry-1",
      name: "Shah Ghouse Signature Matka Mutton Curry",
      category: "curries",
      type: "nonveg",
      portion: "Clay Matka Bowl",
      special: true,
      desc: "Where taste meets royal tradition! Tender mutton cuts simmered slowly in unglazed earthen clay pots (matkas) with stone-ground spices, caramelized onions, and pure desi ghee.",
      image: "images/curry-1.jpg",
      instagram: "https://www.instagram.com/p/Cw2JPstRWW2/",
      heritage: "Slow-cooked inside sealed clay matkas to impart an earthy aroma that modern cookware can never replicate.",
      ingredients: "Prime Mutton Shanks, Earthen Pot Herbs, Brown Onions, Cinnamon, Black Cardamom, Pure Desi Ghee.",
      pairings: "Hot Tandoori Roti, Sheermal, or Steamed Basmati Rice."
    },
    {
      id: "curry-2",
      name: "Shah Ghouse Mutton Roghan Josh",
      category: "curries",
      type: "nonveg",
      portion: "Royal Handi Bowl",
      special: true,
      desc: "Immerse in heritage's warmth! Tender mutton cooked in a deeply flavorful Kashmiri red chilli and ratan jot infusion with yogurt and whole shahi spices. Crafted with love and timeless Nizami culinary mastery.",
      image: "images/curry-2.jpg",
      instagram: "https://www.instagram.com/p/Cz3HrFoRngX/",
      heritage: "A Persian-Mughlai royal curry refined by generations of Hyderabadi bawarchis into a velvety gravy.",
      ingredients: "Tender Mutton Chops, Kashmiri Mirch, Fennel Seeds, Dried Ginger (Sonth), Cloves, Cinnamon, Desi Ghee.",
      pairings: "Tandoori Butter Roti, Garlic Naan, or Jeera Rice."
    },
    {
      id: "curry-3",
      name: "Shah Ghouse Shahi Murgh Musallam (Royal Feast)",
      category: "curries",
      type: "nonveg",
      portion: "Full Royal Platter (Serves 2-3)",
      special: true,
      desc: "Unwrap the luxury of Murgh Musallam – a golden indulgence where spices melt into velvet richness! Whole chicken marinated in saffron, spices, and almond-cashew paste, roasted and served in a rich velvety gravy with boiled eggs.",
      image: "images/curry-3.jpg",
      instagram: "https://www.instagram.com/p/DNS9CqQhTb4/",
      heritage: "Served royal, tastes regal. A historical centerpiece of imperial banquet tables across the Deccan.",
      ingredients: "Whole Farm Chicken, Shahi Masala, Cashew-Almond Gravy, Kashmiri Saffron, Hard-Boiled Eggs, Desi Ghee.",
      pairings: "Butter Garlic Naan, Rumali Roti, and Sheermal."
    },
    {
      id: "curry-4",
      name: "Nawabi Murgh Musallam Deluxe",
      category: "curries",
      type: "nonveg",
      portion: "Grand Feast Platter",
      special: true,
      desc: "Crafted for kings, devoured by foodies! Whole chicken drenched in decadent spices, rich almond-khowa gravy, golden fried onions, and garnished with spiced boiled eggs. A true nawabi masterpiece.",
      image: "images/curry-4.jpg",
      instagram: "https://www.instagram.com/p/DNANAUlSWMz/",
      heritage: "A majestic meal celebrated as the epitome of luxury on a plate in Hyderabad's royal culinary heritage.",
      ingredients: "Whole Tender Chicken, Khowa, Cashew Paste, Royal Potli Herbs, Fried Onions, Farm Eggs, Pure Ghee.",
      pairings: "Fresh Tandoori Naan, Rumali Roti, and Laccha Onions."
    },
    {
      id: "curry-5",
      name: "Shah Ghouse Shahi Butter Chicken",
      category: "curries",
      type: "nonveg",
      portion: "Full Handi Bowl",
      special: false,
      desc: "Indulge in the rich, creamy delight of Shah Ghouse's Butter Chicken! Succulent tandoori-roasted chicken pieces simmered in a velvety makhani gravy of ripe tomatoes, butter, fresh cream, and fragrant kasuri methi.",
      image: "images/curry-5.jpg",
      instagram: "https://www.instagram.com/p/Cy3Gm5lRLy6/",
      heritage: "A taste truly fit for royalty, perfected with an irresistible balance of mild sweetness and smoky char.",
      ingredients: "Tandoori Chicken Chunks, Ripe Tomato Puree, Fresh Dairy Butter, Rich Cream, Kasuri Methi, Honey.",
      pairings: "Garlic Butter Naan, Laccha Paratha, or Fragrant Biryani Rice."
    },
    {
      id: "curry-6",
      name: "Shah Ghouse Velvet Handi Murgh Musallam",
      category: "curries",
      type: "nonveg",
      portion: "Handi Special Serving",
      special: false,
      desc: "A golden indulgence where spices melt into velvet richness. Whole seasoned chicken slow-steamed in copper handis until fork tender, enveloped in a fragrant saffron and poppy-seed reduction.",
      image: "images/curry-6.jpg",
      instagram: "https://www.instagram.com/p/DMxQsvtyWNR/",
      heritage: "Handi slow-steaming technique sealing in natural poultry juices with authentic royal seasonings.",
      ingredients: "Chicken Cuts, Poppy Seed Paste, Saffron, Green Cardamom, Fried Cashews, Desi Ghee.",
      pairings: "Rumali Roti, Tandoori Roti, and Fresh Lime Wedges."
    },
    {
      id: "dish-14-dum",
      name: "Authentic Dum Ka Chicken",
      category: "curries",
      type: "nonveg",
      portion: "Handi Bowl",
      special: true,
      desc: "Chicken slow-cooked on 'dum' (steam sealed) in a rich marinade of roasted poppy seeds, cashews, fried onions, and royal spices.",
      image: "images/curry-1.jpg",
      heritage: "Traditional Hyderabadi celebratory curry cooked entirely by trapped aromatic steam.",
      ingredients: "Chicken Cuts, Cashew Nut Paste, Poppy Seeds (Khus Khus), Roasted Gram Flour, Garam Masala, Pure Ghee.",
      pairings: "Rumali Roti, Sheermal, or Paratha."
    },
    // 7. VEGETARIAN DELIGHTS (OFFICIAL INSTAGRAM SHOWCASE & NIZAMI SHAHI VEG)
    {
      id: "veg-1",
      name: "Shah Ghouse Kadhai Paneer Special",
      category: "vegetarian",
      type: "veg",
      portion: "Handi Bowl",
      special: true,
      desc: "A fiery dance of royal flavors that sets your taste buds ablaze! Succulent malai paneer cubes tossed in high-heat iron kadhai with diced bell peppers, ripe tomatoes, and freshly roasted coriander & red chilli seeds.",
      image: "images/veg-1.jpg",
      instagram: "https://www.instagram.com/p/CurF_v3PQsr/",
      heritage: "Classic North Indian & Hyderabadi kadhai style cooking capturing the smoky essence of freshly pounded spices.",
      ingredients: "Fresh Malai Paneer, Crisp Bell Peppers, Whole Red Chillies, Crushed Coriander Seeds, Onion-Tomato Masala, Kasuri Methi, Pure Butter.",
      pairings: "Tandoori Butter Naan, Garlic Naan, or Jeera Rice."
    },
    {
      id: "veg-2",
      name: "Shah Ghouse Sizzling Paneer 65",
      category: "vegetarian",
      type: "veg",
      portion: "Crispy Sizzling Plate",
      special: true,
      desc: "Sizzle, spice, and everything nice! Indulge in the tantalizing flavors of Paneer 65 — a vegetarian delight bold, crisp, and tossed with fiery green chillies, cracked garlic, and aromatic curry leaves.",
      image: "images/veg-2.jpg",
      instagram: "https://www.instagram.com/p/Cugg1yUPy2C/",
      heritage: "Hyderabad's famous 65 tempering adapted for premium cottage cheese lovers.",
      ingredients: "Diced Cottage Cheese, Curry Leaves, Slit Green Chillies, Spiced Curd, Crushed Pepper, Ginger-Garlic.",
      pairings: "Mint Yogurt Dip, Sliced Red Onions, and Lime."
    },
    {
      id: "veg-3",
      name: "Shah Ghouse Royal Veg Handi & Biryani Feast",
      category: "vegetarian",
      type: "veg",
      portion: "Royal Family Platter",
      special: false,
      desc: "A celebratory weekend feast for vegetarian royalty! Garden-fresh vegetables, cottage cheese, and fragrant basmati layered with royal nizami spices, slow-steamed under dough-sealed handis.",
      image: "images/veg-3.jpg",
      instagram: "https://www.instagram.com/p/CxBAEhAJzcE/",
      heritage: "Nizami banquet recipes adapted for complete vegetarian royal celebrations.",
      ingredients: "Seasonal Farm Vegetables, Paneer, Kashmiri Saffron, Ghee, Crispy Onions, Mint, Whole Spices.",
      pairings: "Mirchi Ka Salan, Mixed Raita, and Tandoori Roti."
    },
    {
      id: "veg-4",
      name: "Shah Ghouse Shahi Paneer Curry Extravaganza",
      category: "vegetarian",
      type: "veg",
      portion: "Velvet Handi Bowl",
      special: true,
      desc: "Unveiling the rich symphony of flavors in every spoonful of our Shah Ghouse Paneer Curry! Tender cottage cheese cubes enveloped in a luxurious cashew-almond and fresh tomato reduction.",
      image: "images/veg-4.jpg",
      instagram: "https://www.instagram.com/reel/C5QRaEJJKjx/",
      heritage: "Centuries-old Shahi gravy preparation enriched with fragrant mawa and cream.",
      ingredients: "Malai Paneer, Cashew-Almond Paste, Mawa, Tomato Coulis, Cardamom, Saffron, Fresh Dairy Cream.",
      pairings: "Butter Naan, Sheermal, or Peas Pulao."
    },
    {
      id: "veg-5",
      name: "Shah Ghouse Indo-Chinese Chilli Paneer",
      category: "vegetarian",
      type: "veg",
      portion: "Full Sizzler Plate",
      special: false,
      desc: "Indulge in the spicy, saucy, and flavorful Chilli Paneer at Shah Ghouse! Golden fried cottage cheese tossed with bell peppers, spring onions, and our signature oriental garlic chilli glaze.",
      image: "images/veg-5.jpg",
      instagram: "https://www.instagram.com/p/C8on6EzJBpj/",
      heritage: "Hyderabad's favorite Indo-Chinese street-style delicacy, loved by all generations.",
      ingredients: "Crisp Fried Paneer, Green & Red Bell Peppers, Spring Onions, Szechuan Chilli, Dark Soy, Minced Garlic.",
      pairings: "Fried Rice, Hakka Noodles, or enjoyed as a starter."
    },
    {
      id: "veg-6",
      name: "Shah Ghouse Hong Kong Veg Starter",
      category: "vegetarian",
      type: "veg",
      portion: "Crunchy Appetizer Platter",
      special: false,
      desc: "Savor the crunch and flavor of our Hong Kong Veg Starter! A perfect blend of wok-tossed crispy vegetables, baby corn, water chestnuts, and zesty Asian-Hyderabadi spices to kickstart your meal.",
      image: "images/veg-6.jpg",
      instagram: "https://www.instagram.com/p/DADLG6MPauK/",
      heritage: "A contemporary crunch-infused appetizer crafted to delight vegetable lovers.",
      ingredients: "Crisp Baby Corn, Broccoli, Water Chestnuts, Bell Peppers, Garlic-Chilli Seasoning, Scallions.",
      pairings: "Sweet Chilli Dip and Shredded Cabbage Salad."
    },
    {
      id: "veg-7",
      name: "Shah Ghouse Creamy Paneer Butter Masala",
      category: "vegetarian",
      type: "veg",
      portion: "Shahi Handi Bowl",
      special: true,
      desc: "Arrey baba, ye toh asli creamy buttery mazza hai! Melt-in-mouth cottage cheese simmered in a velvety tomato-butter makhani gravy, infused with roasted kasuri methi and fresh dairy cream.",
      image: "images/veg-7.jpg",
      instagram: "https://www.instagram.com/p/DEU1CMJyprh/",
      heritage: "The undisputed emperor of North Indian gravies, prepared with pure dairy butter and slow-simmered perfection.",
      ingredients: "Soft Paneer Cubes, Rich Tomato Puree, Amul Butter, Dairy Cream, Kasuri Methi, Cardamom, Honey.",
      pairings: "Garam-Garam Butter Naan, Garlic Naan, or Jeera Rice."
    },
    {
      id: "veg-8",
      name: "Shah Ghouse Crispy Veg Manchurian",
      category: "vegetarian",
      type: "veg",
      portion: "Full Plate (Dry / Gravy)",
      special: false,
      desc: "Crispy, spicy, aur Indo-Chinese ka perfect blend! Golden seasoned vegetable balls flash-fried and tossed in a rich, savory ginger-soy reduction with chopped coriander and chillies.",
      image: "images/veg-8.jpg",
      instagram: "https://www.instagram.com/p/C0_NXr2RSLW/",
      heritage: "The quintessential fusion favorite, marrying Chinese wok techniques with bold Indian spices.",
      ingredients: "Minced Farm Veggies, Ginger-Garlic, Dark Soya, Green Chillies, Spring Onions, White Pepper.",
      pairings: "Fried Rice, Soft Naan, or enjoyed as a hot snack."
    },

    // 8. TANDOORI BREADS (OFFICIAL INSTAGRAM SHOWCASE & FRESH TANDOOR BAKES)
    {
      id: "bread-1",
      name: "Shah Ghouse Traditional Tandoori Roti",
      category: "breads",
      type: "veg",
      portion: "Fresh from Tandoor (Plain / Butter)",
      special: false,
      desc: "Roti: Timeless comfort on a plate! Wholesome stone-ground whole wheat dough hand-stretched and slapped onto blazing clay tandoor walls, roasted to smoky blistered perfection.",
      image: "images/bread-1.jpg",
      instagram: "https://www.instagram.com/p/Cvu56owvXtr/",
      heritage: "The daily staple of the Deccan, baked over live charcoal embers for an authentic rustic char.",
      ingredients: "Stone-Ground Whole Wheat Atta, Water, Sea Salt, Roasted in authentic clay ovens.",
      pairings: "Matka Mutton Curry, Roghan Josh, or Dal Tadka."
    },
    {
      id: "bread-2",
      name: "Shah Ghouse Fluffy Butter Naan",
      category: "breads",
      type: "veg",
      portion: "Jumbo Tandoor Bake",
      special: true,
      desc: "The buttery pillow for your royal curries! Light, pillowy leavened bread baked in blazing tandoors and generously brushed with melted golden dairy butter.",
      image: "images/bread-2.jpg",
      instagram: "https://www.instagram.com/p/Cvu5n_7PoTQ/",
      heritage: "Royal Mughlai bread making tradition with centuries of leavening artistry.",
      ingredients: "Refined Wheat Flour, Fresh Dairy Milk, Butter Glaze, Nigella Seeds (Kalonji), Yogurt.",
      pairings: "Butter Chicken, Murgh Musallam, or Paneer Butter Masala."
    },
    {
      id: "bread-3",
      name: "Shah Ghouse Charred Garlic Naan",
      category: "breads",
      type: "veg",
      portion: "Aromatic Garlic Platter",
      special: false,
      desc: "City escape, culinary bliss! Leavened tandoor bread generously topped with finely minced roasted garlic, fresh cilantro, and brushed with hot butter.",
      image: "images/bread-3.jpg",
      instagram: "https://www.instagram.com/p/DNyMwNPwnb1/",
      heritage: "A fragrant tandoor classic that pairs seamlessly with rich gravies and smoky kebabs.",
      ingredients: "Flour, Freshly Minced Garlic, Coriander, Pure Butter, Kalonji Seeds.",
      pairings: "Mutton Korma, Tangdi Kebab, or Shahi Paneer."
    },

    // 9. SHAWARMA & ROLLS (OFFICIAL INSTAGRAM SHOWCASE & STREET FAVORITES)
    {
      id: "shawarma-1",
      name: "Shah Ghouse Signature Rumali Shawarma",
      category: "shawarma",
      type: "nonveg",
      portion: "Jumbo Rumali Wrap",
      special: true,
      desc: "Hyderabad's beloved late-night obsession! Succulent rotisserie chicken carved hot from our vertical spit, rolled inside a delicate, thin rumali roti with velvety garlic mayo and pickled gherkins. Pure meat, zero cabbage fillers.",
      image: "images/shawarma-1.jpg",
      instagram: "https://www.instagram.com/p/DcbFABxTUtV/",
      heritage: "Adopted into Hyderabad's culinary fabric from the Arabian Gulf, elevated with Shah Ghouse's proprietary meat marinade.",
      ingredients: "Slow-Roasted Spit Chicken, Garlic Toum, Pickled Turnips & Cucumbers, Thin Rumali Roti.",
      pairings: "Extra Garlic Dip, Spicy Peri Peri Dip, and Pickled Green Chillies."
    },
    {
      id: "shawarma-2",
      name: "Shah Ghouse Creamy Malai Chicken Shawarma Wrap",
      category: "shawarma",
      type: "nonveg",
      portion: "Creamy Malai Wrap",
      special: true,
      desc: "Wrapped with creamy Malai Chicken and packed with pure lazeez vibes! Tender chicken marinated in fresh cream, mild spices, and cheese, wrapped tightly in toasted khubz/rumali with rich garlic cream. One bite and hunger doesn't stand a chance.",
      image: "images/shawarma-2.jpg",
      instagram: "https://www.instagram.com/p/DZ7YBh6TujF/",
      heritage: "A luxurious twist on the traditional shawarma, combining Mughlai malai creaminess with Arabian street wraps.",
      ingredients: "Malai-Marinated Tender Chicken, Fresh Cream, Garlic Mayonnaise, Toasted Wrap, Mild Spices.",
      pairings: "French Fries, Spicy Harissa Dip, and Pickles."
    },

    // 10. IRANI CHAI & BAKERY (OFFICIAL INSTAGRAM SHOWCASE & TIMELESS CAFE CULTURE)
    {
      id: "chai-1",
      name: "Shah Ghouse Royal Dum Irani Chai",
      category: "irani-chai",
      type: "veg",
      portion: "Traditional Cutting / Cup",
      special: true,
      desc: "Where time slows down and every sip feels refined! Steaming hot, slow-brewed strong Assam tea decoction blended with reduced creamy milk and mawa. Served with quiet elegance and timeless warmth.",
      image: "images/chai-1.jpg",
      instagram: "https://www.instagram.com/p/DScbzStkbie/",
      heritage: "The living soul of Hyderabad culture since the early 20th century, fueling conversations across generations.",
      ingredients: "Aged Assam CTC Tea, Reduced Full-Cream Milk, Mawa (Khowa), Crushed Cardamom.",
      pairings: "Osmania Biscuits, Tie Biscuits, and Fine Khari."
    },
    {
      id: "chai-2",
      name: "Shah Ghouse Irani Chai with Maska Bun",
      category: "irani-chai",
      type: "veg",
      portion: "Chai + Butter Slathered Bun",
      special: true,
      desc: "Where conversations brew and buns melt! Steaming hot cup of Irani Dum Chai served alongside a freshly baked, ultra-soft bun loaded with chilled, luscious dairy butter.",
      image: "images/chai-2.jpg",
      instagram: "https://www.instagram.com/reel/DQg-nhPkZXq/",
      heritage: "The classic Hyderabadi breakfast and afternoon ritual savored at our bustling cafes daily.",
      ingredients: "Dum Irani Chai, Fresh Bakery Buns, Rich Dairy Butter (Maska), Sugar.",
      pairings: "Best enjoyed dipped directly into hot steaming chai."
    },
    {
      id: "chai-3",
      name: "Shah Ghouse Freshly Baked Dum Ka Roat",
      category: "irani-chai",
      type: "veg",
      portion: "Freshly Baked Slice / Cake",
      special: true,
      desc: "Still warm. Still soft. Still unforgettable! Freshly baked every day, our Dum Ka Roat is a timeless Hyderabadi delicacy — roasted to golden amber perfection with semolina, pure desi ghee, and a generous heart of crunchy almonds and dry fruits.",
      image: "images/chai-3.jpg",
      instagram: "https://www.instagram.com/p/DLmE2sUJL2z/",
      heritage: "Hyderabad's most cherished heritage baked dessert, reliving the taste and nostalgia of royal festivities.",
      ingredients: "Fine Semolina (Sooji), Pure Desi Ghee, Saffron, Khoya, Almonds, Pistachios, Cardamom.",
      pairings: "Hot Irani Chai or enjoyed warm as a comforting dessert."
    },
    {
      id: "chai-4",
      name: "The Iconic Irani Chai & Osmania Biscuit Pair",
      category: "irani-chai",
      type: "veg",
      portion: "Hot Cup + 4 Osmania Biscuits",
      special: true,
      desc: "Steaming traditions, timeless taste! Dive into the legendary pairing of piping-hot Irani Dum Chai and sweet-and-salty Osmania biscuits — your comfort cup awaits at Shah Ghouse.",
      image: "images/chai-4.jpg",
      instagram: "https://www.instagram.com/p/DKtzNXaJVrW/",
      heritage: "Named after the last Nizam of Hyderabad, Mir Osman Ali Khan, who made these melt-in-mouth biscuits world-famous.",
      ingredients: "Flour, Pure Dairy Butter, Salt-Sweet Seasoning, Reduced Cardamom Milk, Tea Decoction.",
      pairings: "The ultimate Hyderabadi pairing that defined street culture."
    },
    {
      id: "chai-5",
      name: "Shah Ghouse Teatime Bliss Chai & Bakery Cookies",
      category: "irani-chai",
      type: "veg",
      portion: "Tea Cup + Assorted Cookie Plate",
      special: false,
      desc: "Cozying up with a warm cup of chai and a plate of traditional Hyderabadi bakery biscuits! An assortment of Tie biscuits, fine khari puffs, and cashew butter cookies.",
      image: "images/chai-5.jpg",
      instagram: "https://www.instagram.com/p/C0tEJsmxSmC/",
      heritage: "Honoring the iconic bakeries of Old City Hyderabad with handcrafted teatime crunchy delights.",
      ingredients: "Assorted Bakery Biscuits, Clarified Butter, Cardamom Tea, Khari Puff.",
      pairings: "Steaming Irani Dum Chai."
    },


    // 11. ROYAL DESSERTS (OFFICIAL INSTAGRAM SHOWCASE & NIZAMI SWEETS)
    {
      id: "dessert-1",
      name: "Shah Ghouse Shahi Badam Ki Kheer",
      category: "desserts",
      type: "veg",
      portion: "Clay Matka Bowl",
      special: true,
      desc: "Indulge in the royal richness of Badam Ki Kheer — a creamy, nutty masterpiece that melts your heart with every single spoonful! Prepared by slow-simmering blanched California almonds with full-cream milk, saffron, and cardamom.",
      image: "images/dessert-1.jpg",
      instagram: "https://www.instagram.com/p/DJrGfVRJqGN/",
      heritage: "The prized royal pudding of the Nizams, renowned for its nourishing almond essence and velvety texture.",
      ingredients: "Blanched Almond Paste, Full Cream Dairy Milk, Saffron Strands, Green Cardamom, Crushed Pistachios, Sugar.",
      pairings: "Enjoyed chilled after a royal Biryani feast."
    },
    {
      id: "dessert-2",
      name: "Shah Ghouse Seasonal Royal Aamras",
      category: "desserts",
      type: "veg",
      portion: "Chilled Dessert Glass / Bowl",
      special: false,
      desc: "Sip, smile, and savor the magic of mangoes with our refreshing Aamras! Thick, sun-ripened Alphonso mango pulp infused with fragrant cardamom and saffron — the sweetest way to celebrate summer in Hyderabad.",
      image: "images/dessert-2.jpg",
      instagram: "https://www.instagram.com/p/DJvmNE8p0SC/",
      heritage: "Traditional Indian seasonal mango feast, served pure without artificial preservatives.",
      ingredients: "Pure Ripe Mango Pulp, Cardamom Powder, Saffron-infused Milk, Chopped Mango Chunks.",
      pairings: "Warm Puris, Naan, or savored as a rich chilled dessert."
    },
    {
      id: "dessert-3",
      name: "Shah Ghouse Zafrani Badam Ki Kheer",
      category: "desserts",
      type: "veg",
      portion: "Royal Dessert Bowl",
      special: true,
      desc: "Discover the magic of tradition with our Zafrani Badam Ki Kheer! Crafted with love, this creamy almond dessert is heavily enriched with Kashmiri saffron, slivered dry fruits, and a gentle sweetness that dissolves on the tongue.",
      image: "images/dessert-3.jpg",
      instagram: "https://www.instagram.com/p/C_x2EmtgOBC/",
      heritage: "A staple at lavish Hyderabadi wedding banquets celebrating century-old sweet traditions.",
      ingredients: "Almond Flour, Reduced Milk, Kashmiri Zafran (Saffron), Cardamom, Silver Leaf, Almond Slivers.",
      pairings: "Fresh Irani Chai or enjoyed chilled."
    },
    {
      id: "dessert-4",
      name: "Shah Ghouse Royal Cream Fruit Salad",
      category: "desserts",
      type: "veg",
      portion: "Loaded Dessert Bowl",
      special: false,
      desc: "Dive into delight with our Cream Fruit Salad! Refreshing, luscious, and loaded with a colorful medley of crisp apples, sweet pomegranates, grapes, and tropical fruits folded into whipped sweet cream.",
      image: "images/dessert-4.jpg",
      instagram: "https://www.instagram.com/p/C_r-9M0tcbS/",
      heritage: "Hyderabad's timeless sweet finish loved by diners of all generations across Charminar and Tolichowki.",
      ingredients: "Seasonal Fresh Fruits, Sweetened Dairy Cream, Vanilla Essence, Glazed Cherries, Honey Drizzle.",
      pairings: "A light, refreshing contrast after rich spicy curries and biryanis."
    },
    {
      id: "dessert-5",
      name: "Shah Ghouse Shahi Eid Sheer Khurma & Kheer",
      category: "desserts",
      type: "veg",
      portion: "Festival Shahi Bowl",
      special: true,
      desc: "Savor the sweetness of tradition with our heavenly Kheer & Sheer Khurma! Creamy, fragrant, and slow-roasted with fine vermicelli, dates (chhuara), pure desi ghee, and dry fruits to celebrate joyous festive occasions.",
      image: "images/dessert-5.jpg",
      instagram: "https://www.instagram.com/p/CuBiLmfJdZO/",
      heritage: "The quintessential celebratory dessert of Hyderabad, representing unity, warmth, and royal hospitality.",
      ingredients: "Roasted Fine Seviyan, Dry Dates, Condensed Milk, Pistachios, Almonds, Chirongi, Pure Desi Ghee.",
      pairings: "Served warm or chilled as the crowning finale of your feast."
    },
    {
      id: "dessert-6",
      name: "Shah Ghouse Arabian Umm Ali",
      category: "desserts",
      type: "veg",
      portion: "Baked Arabian Bowl",
      special: true,
      desc: "Discover the enchantment of Umm Ali — a heavenly Middle Eastern baked dessert that transports your taste buds to blissful realms! Golden flaky pastry layered with sweetened hot milk, toasted coconut, raisins, and roasted nuts.",
      image: "images/dessert-6.jpg",
      instagram: "https://www.instagram.com/p/CteZFdMBsNR/",
      heritage: "An Egyptian & Arabian classic embraced by Hyderabad's cosmopolitan food connoisseurs.",
      ingredients: "Crisp Puff Pastry, Sweet Whole Milk, Heavy Cream, Desiccated Coconut, Golden Sultanas, Pistachios.",
      pairings: "Served warm straight from the oven."
    },
    {
      id: "dish-21",
      name: "Shah Ghouse Qubani Ka Meetha (with Fresh Malai)",
      category: "desserts",
      type: "veg",
      portion: "Traditional Dessert Bowl",
      special: true,
      desc: "Slow-stewed dried apricots infused with fragrant rose water, garnished with crunchy apricot kernels and generous dollops of fresh clotted cream.",
      image: "images/dessert-3.jpg",
      heritage: "The premier traditional royal dessert of Hyderabad, without which no Nizami banquet is complete.",
      ingredients: "Dry Apricots (Qubani), Apricot Kernels, Rose Water, Cane Sugar, Fresh Dairy Clotted Malai.",
      pairings: "Fresh Malai or Vanilla Ice Cream."
    },
    {
      id: "dish-22",
      name: "Hyderabadi Double Ka Meetha",
      category: "desserts",
      type: "veg",
      portion: "Shahi Dessert Bowl",
      special: true,
      desc: "Golden fried bread triangles soaked in thick saffron rabri, flavored with cardamom and topped with roasted cashews, pistachios, and silver leaf.",
      image: "images/dessert-5.jpg",
      heritage: "Decadent royal dessert derived from 'Double Roti' (milk bread), beloved for centuries.",
      ingredients: "Artisanal Bread, Saffron Milk, Rabri, Green Cardamom, Desi Ghee, Pistachios, Chandi Ka Warq.",
      pairings: "Hot Irani Chai or enjoyed warm."
    }
  ]
};

// Application State
let appData = null;
let currentUser = null; // { role: 'owner' | 'manager', username: '...' }
let currentMenuFilter = 'all';
let currentAvailFilter = 'all'; // 'all' | 'live' | 'hidden'

// Current menu storage key - incrementing forces all client browsers to load latest dishes
const CURRENT_STORAGE_KEY = 'shahghouse_luxury_menu_v14';

// Initialize Data
function initData() {
  // Purge any older cached versions from localStorage
  ['shahghouse_luxury_menu', 'shahghouse_luxury_menu_v2', 'shahghouse_luxury_menu_v3', 
   'shahghouse_luxury_menu_v4', 'shahghouse_luxury_menu_v5', 'shahghouse_luxury_menu_v6', 
   'shahghouse_luxury_menu_v7', 'shahghouse_luxury_menu_v8', 'shahghouse_luxury_menu_v9', 
   'shahghouse_luxury_menu_v10', 'shahghouse_luxury_menu_v11', 'shahghouse_luxury_menu_v12', 
   'shahghouse_luxury_menu_v13'].forEach(key => {
    try { localStorage.removeItem(key); } catch(e) {}
  });

  const saved = localStorage.getItem(CURRENT_STORAGE_KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed && Array.isArray(parsed.menu) && Array.isArray(parsed.categories)) {
        appData = parsed;
      } else {
        appData = JSON.parse(JSON.stringify(RESTAURANT_DATA));
        saveData();
      }
    } catch (e) {
      console.error("Failed to parse saved data, resetting to defaults", e);
      appData = JSON.parse(JSON.stringify(RESTAURANT_DATA));
      saveData();
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
  localStorage.setItem(CURRENT_STORAGE_KEY, JSON.stringify(appData));
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

// Setup Public Filter Tabs
function setupFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      currentMenuFilter = cat;
      renderMenuList(cat);
    });
  });
}

// Render Category Filter Tabs
function renderCategoryPills() {
  const container = document.getElementById('categoryFilters');
  if (!container) return;

  container.innerHTML = appData.categories.map((cat, idx) => {
    const isActive = (currentMenuFilter === cat.id) || (currentMenuFilter === 'all' && idx === 0);
    return `
      <button class="filter-btn ${isActive ? 'active' : ''}" data-filter="${cat.id}">
        ${escapeHtml(cat.name)}
      </button>
    `;
  }).join('');

  setupFilters();
}

// Render Menu Cards (Only Selected / Available Dishes are Shown on Website)
function renderMenuList(filter = null) {
  if (filter !== null) currentMenuFilter = filter;
  const container = document.getElementById('productsGrid');
  if (!container) return;

  // Filter only dishes selected / available for today
  const liveDishes = appData.menu.filter(d => d.available !== false);

  const filtered = currentMenuFilter === 'all' 
    ? liveDishes 
    : liveDishes.filter(p => p.category === currentMenuFilter);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-secondary);">
        <span style="font-size: 2.8rem;">🍲</span>
        <p style="font-size: 1.25rem; margin-top: 12px; font-family: 'Cinzel', serif;">No Dishes Available in This Category Today</p>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-top: 6px;">Our royal chefs are preparing fresh batches. Please browse our other active specialties!</p>
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
        <div class="product-img-wrap" onclick="openDishInfoModal('${dish.id}')" title="Click to view full image and culinary details">
          <img src="${dish.image}" alt="${escapeHtml(dish.name)}" class="product-img" onerror="this.onerror=null; this.src='image.png';">
          ${chefBadge}
          <span class="category-pill-tag">${escapeHtml(catName)}</span>
        </div>
        <div class="product-body">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            ${vegBadge}
            <span style="font-size: 0.78rem; color: var(--text-muted); font-weight: 600;">${escapeHtml(dish.portion || 'Signature Serving')}</span>
          </div>
          <h3 class="product-name" onclick="openDishInfoModal('${dish.id}')" style="cursor: pointer;">${escapeHtml(dish.name)}</h3>
          <p class="product-desc">${escapeHtml(dish.desc)}</p>
          
          <div style="margin-top: 14px;">
            <button class="btn-more-info" onclick="openDishInfoModal('${dish.id}')">
              <span>ℹ️</span> More Information
            </button>
          </div>
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
// ===================================================================
// AUTHENTICATION LOGIC (Owner Executive & Manager Operations)
// ===================================================================
let selectedLoginRole = 'owner';

window.selectLoginRole = function(role) {
  selectedLoginRole = role;
  const cardOwner = document.getElementById('roleCardOwner');
  const cardManager = document.getElementById('roleCardManager');
  const userInp = document.getElementById('loginUsername');
  const passInp = document.getElementById('loginPassword');
  const submitBtn = document.getElementById('loginSubmitBtn');
  const userLabel = document.getElementById('loginUsernameLabel');

  if (role === 'owner') {
    if (cardOwner) cardOwner.classList.add('active');
    if (cardManager) cardManager.classList.remove('active');
    if (userInp) userInp.value = 'owner@shahghouse';
    if (passInp) passInp.value = 'owner@shahghouse';
    if (userLabel) userLabel.textContent = "Owner Username / Email";
    if (submitBtn) submitBtn.innerHTML = '<span>🔓</span> Enter Executive Suite';
  } else {
    if (cardOwner) cardOwner.classList.remove('active');
    if (cardManager) cardManager.classList.add('active');
    if (userInp) userInp.value = 'manager@shahghouse';
    if (passInp) passInp.value = 'manager@shahghouse';
    if (userLabel) userLabel.textContent = "Manager Username / Email";
    if (submitBtn) submitBtn.innerHTML = '<span>🔓</span> Enter Manager Operations Hub';
  }
};

window.quickLoginCurrentRole = function() {
  const userInp = document.getElementById('loginUsername');
  const passInp = document.getElementById('loginPassword');
  if (selectedLoginRole === 'owner') {
    if (userInp) userInp.value = 'owner@shahghouse';
    if (passInp) passInp.value = 'owner@shahghouse';
  } else {
    if (userInp) userInp.value = 'manager@shahghouse';
    if (passInp) passInp.value = 'manager@shahghouse';
  }
  const form = document.getElementById('loginForm');
  if (form) form.dispatchEvent(new Event('submit', { cancelable: true }));
};

window.fillDemoCreds = function(role) {
  selectLoginRole(role);
};

window.openLoginGateway = function(role) {
  if (role) selectedLoginRole = role;
  selectLoginRole(selectedLoginRole || 'owner');
  startPortalClock();
  const loginModal = document.getElementById('loginModal');
  if (loginModal) {
    loginModal.classList.add('active');
    loginModal.scrollTop = 0;
  }
  document.body.style.overflow = 'hidden';
};

window.closeLoginGateway = function() {
  const loginModal = document.getElementById('loginModal');
  if (loginModal) loginModal.classList.remove('active');
  const adminModal = document.getElementById('adminModal');
  const adminActive = adminModal && adminModal.classList.contains('active');
  if (!adminActive) {
    document.body.style.overflow = '';
  }
};

function setupAuth() {
  const loginForm = document.getElementById('loginForm');
  const loginNavBtn = document.getElementById('loginNavBtn');
  const closeLoginBtn = document.getElementById('closeLoginModal');
  const logoutBtn = document.getElementById('logoutBtn');

  if (loginNavBtn) {
    loginNavBtn.addEventListener('click', () => {
      openLoginGateway();
    });
  }

  if (closeLoginBtn) {
    closeLoginBtn.addEventListener('click', () => closeLoginGateway());
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      logoutStaff();
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
          title: 'Owner & Managing Director',
          name: 'Al-Haj Mohammed Rabbani'
        };
        localStorage.setItem('shahghouse_session_user', JSON.stringify(currentUser));
        closeLoginGateway();
        updateHeaderAuthUI();
        showToast("Welcome Al-Haj Mohammed Rabbani! Executive Suite unlocked.", "👑");
        openStaffDashboard();
        return;
      }

      if (userField.toLowerCase() === 'manager@shahghouse') {
        currentUser = {
          role: 'manager',
          username: 'manager@shahghouse',
          title: 'Restaurant Operations Manager',
          name: 'Floor & Kitchen Operations Manager'
        };
        localStorage.setItem('shahghouse_session_user', JSON.stringify(currentUser));
        closeLoginGateway();
        updateHeaderAuthUI();
        showToast("Welcome Manager! Operations Hub & Daily Availability connected.", "📋");
        openStaffDashboard();
        return;
      }

      alert("Invalid credentials. Please use:\n- owner@shahghouse\n- manager@shahghouse");
    });
  }
}

// Real-Time Live Clock Engine (Hyderabad IST)
let clockInterval = null;
function startPortalClock() {
  if (clockInterval) clearInterval(clockInterval);

  function updateClock() {
    const clockEl = document.getElementById('livePortalClock');
    const navClockEl = document.getElementById('livePortalClockNav');
    const loginNavClockEl = document.getElementById('liveLoginClockNav');
    const loginClockEl = document.getElementById('loginLiveIST');
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-US', { hour12: true });

    if (clockEl) clockEl.textContent = `${timeStr} IST`;
    if (navClockEl) navClockEl.textContent = `${timeStr} IST`;
    if (loginNavClockEl) loginNavClockEl.textContent = `${timeStr} IST`;
    if (loginClockEl) loginClockEl.textContent = `${timeStr} IST`;
  }

  updateClock();
  clockInterval = setInterval(updateClock, 1000);
}

// Kitchen Station Jump Pills for Manager
window.populateStationPills = function() {
  const container = document.getElementById('managerStationJumpBar');
  if (!container) return;

  const cats = appData.categories;
  container.innerHTML = `
    <span style="font-size: 0.78rem; color: var(--text-muted); align-self: center; margin-right: 4px; font-weight: 700;">Station Quick-Jump:</span>
    ${cats.map((c, i) => {
      const count = c.id === 'all' 
        ? appData.menu.length 
        : appData.menu.filter(d => d.category === c.id).length;
      return `
        <button type="button" class="station-pill-btn ${i === 0 ? 'active' : ''}" data-station="${c.id}" onclick="jumpToStation('${c.id}', this)">
          ${escapeHtml(c.name)} (${count})
        </button>
      `;
    }).join('')}
  `;
};

window.jumpToStation = function(catId, btnEl) {
  document.querySelectorAll('.station-pill-btn').forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');

  const catFilter = document.getElementById('adminCategoryFilter');
  if (catFilter) catFilter.value = catId;
  renderAdminMenuList();
};

function setupStaffDashboard() {
  const staffBtn = document.getElementById('staffNavBtn');
  const closeAdminBtn = document.getElementById('closeAdminModal');

  if (staffBtn) {
    staffBtn.addEventListener('click', () => {
      if (!currentUser) {
        openLoginGateway();
      } else {
        openStaffDashboard();
      }
    });
  }

  if (closeAdminBtn) {
    closeAdminBtn.addEventListener('click', () => closeStaffDashboard());
  }

  const tabs = document.querySelectorAll('.admin-tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-target');
      switchAdminTab(targetId);
    });
  });

  populateCategorySelects();
}

// Open Staff Dashboard (Full-Page Web Application)
window.openStaffDashboard = function() {
  if (!currentUser) return;

  const adminGreeting = document.getElementById('adminGreeting');
  const adminRoleDisplay = document.getElementById('adminRoleDisplay');
  const ownerOnlyTab = document.getElementById('tabFeaturesBtn');
  const ownerCatsTab = document.getElementById('tabCategoriesBtn');
  const ownerShortcuts = document.getElementById('ownerOnlyShortcuts');
  const adminModal = document.getElementById('adminModal');
  const portalDpBadge = document.getElementById('portalDpBadge');
  const portalSecurityBadge = document.getElementById('portalSecurityBadge');
  const portalNavEdition = document.getElementById('portalNavEdition');

  if (currentUser.role === 'owner') {
    if (adminModal) {
      adminModal.classList.add('theme-owner-portal');
      adminModal.classList.remove('theme-manager-hub');
    }
    if (portalNavEdition) portalNavEdition.textContent = "EXECUTIVE SUITE";
    if (adminGreeting) adminGreeting.textContent = "Owner Executive Suite";
    if (adminRoleDisplay) adminRoleDisplay.innerHTML = "Al-Haj Mohammed Rabbani &bull; Managing Director &bull; Estd 1984";
    if (portalDpBadge) portalDpBadge.textContent = "👑";
    if (portalSecurityBadge) {
      portalSecurityBadge.innerHTML = "👑 Sovereign Owner Access";
      portalSecurityBadge.className = "portal-security-badge";
    }
    if (ownerOnlyTab) ownerOnlyTab.style.display = 'inline-block';
    if (ownerCatsTab) ownerCatsTab.style.display = 'inline-block';
    if (ownerShortcuts) ownerShortcuts.style.display = 'flex';
  } else {
    if (adminModal) {
      adminModal.classList.add('theme-manager-hub');
      adminModal.classList.remove('theme-owner-portal');
    }
    if (portalNavEdition) portalNavEdition.textContent = "OPERATIONS HUB";
    if (adminGreeting) adminGreeting.textContent = "Manager Operations Hub";
    if (adminRoleDisplay) adminRoleDisplay.innerHTML = "Restaurant Operations Manager &bull; Floor &amp; Kitchen Dispatch";
    if (portalDpBadge) portalDpBadge.textContent = "📋";
    if (portalSecurityBadge) {
      portalSecurityBadge.innerHTML = "📋 Floor Operations Active";
      portalSecurityBadge.className = "portal-security-badge";
    }
    if (ownerOnlyTab) ownerOnlyTab.style.display = 'none';
    if (ownerCatsTab) ownerCatsTab.style.display = 'none';
    if (ownerShortcuts) ownerShortcuts.style.display = 'none';
  }

  // Start Real-Time Live Clock
  startPortalClock();

  // Populate dynamic category dropdowns, station pills, and lists
  populateCategorySelects();
  populateStationPills();
  populateAdminForms();
  
  // Default to Products tab so owner or manager immediately sees the dishes
  switchAdminTab('tabCatalog');

  if (adminModal) {
    adminModal.classList.add('active');
    adminModal.scrollTop = 0;
  }
  document.body.style.overflow = 'hidden';
};

window.closeStaffDashboard = function() {
  const adminModal = document.getElementById('adminModal');
  if (adminModal) adminModal.classList.remove('active');
  document.body.style.overflow = '';
};

window.logoutStaff = function() {
  currentUser = null;
  localStorage.removeItem('shahghouse_session_user');
  updateHeaderAuthUI();
  closeStaffDashboard();
  showToast("Logged out from Shah Ghouse Portal.", "👋");
};

window.switchAdminTab = function(targetId) {
  const tabs = document.querySelectorAll('.admin-tab-btn');
  const panels = document.querySelectorAll('.admin-tab-panel');

  tabs.forEach(t => {
    if (t.getAttribute('data-target') === targetId) {
      t.classList.add('active');
    } else {
      t.classList.remove('active');
    }
  });

  panels.forEach(p => {
    if (p.id === targetId) {
      p.classList.add('active');
    } else {
      p.classList.remove('active');
    }
  });

  if (targetId === 'tabCatalog') {
    renderAdminMenuList();
  } else if (targetId === 'tabCategories') {
    renderAdminCategoriesList();
  } else if (targetId === 'tabAddDish') {
    populateCategorySelects();
  }
};

// Populate Admin Forms & Fields
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
  renderAdminCategoriesList();
  renderAdminMenuList();

  const jsonExportArea = document.getElementById('jsonExportArea');
  if (jsonExportArea) {
    jsonExportArea.value = JSON.stringify(appData, null, 2);
  }
}

// Populate Category Select Dropdowns Across Portal
window.populateCategorySelects = function() {
  const newSelect = document.getElementById('newDishCategory');
  const editSelect = document.getElementById('editDishCategory');
  const filterSelect = document.getElementById('adminCategoryFilter');

  const nonAllCats = appData.categories.filter(c => c.id !== 'all');

  if (newSelect) {
    const curVal = newSelect.value;
    newSelect.innerHTML = nonAllCats.map(c => `<option value="${c.id}">${escapeHtml(c.name)}</option>`).join('');
    if (curVal && nonAllCats.some(c => c.id === curVal)) newSelect.value = curVal;
  }
  if (editSelect) {
    editSelect.innerHTML = nonAllCats.map(c => `<option value="${c.id}">${escapeHtml(c.name)}</option>`).join('');
  }
  if (filterSelect) {
    const curFilter = filterSelect.value || 'all';
    filterSelect.innerHTML = `
      <option value="all">All Categories (${appData.menu.length})</option>
      ${nonAllCats.map(c => {
        const count = appData.menu.filter(d => d.category === c.id).length;
        return `<option value="${c.id}">${escapeHtml(c.name)} (${count})</option>`;
      }).join('')}
    `;
    if (filterSelect.querySelector(`option[value="${curFilter}"]`)) {
      filterSelect.value = curFilter;
    }
  }
};

// Render All Products in Owner Portal with Search & Filters
// Availability Filter Controller (All / Live / Hidden)
window.setAvailabilityFilter = function(filterVal, btnEl) {
  currentAvailFilter = filterVal;
  document.querySelectorAll('.avail-chip-btn').forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');
  renderAdminMenuList();
};

// Toggle Dish Availability (Select / Deselect)
window.toggleDishAvailability = function(id) {
  if (!currentUser) return;
  const dish = appData.menu.find(d => d.id === id);
  if (!dish) return;

  const currentAvail = (dish.available !== false);
  dish.available = !currentAvail;

  saveData();
  renderPublicSite();
  renderAdminMenuList();

  if (dish.available) {
    showToast(`"${dish.name}" is now SELECTED and VISIBLE on website!`, "✅");
  } else {
    showToast(`"${dish.name}" is now DESELECTED and HIDDEN from website.`, "⭕");
  }
};

// Batch Select / Deselect All Dishes
window.selectAllDishes = function(selectState) {
  if (!currentUser) return;

  if (!selectState) {
    if (!confirm("Are you sure you want to deselect ALL dishes? The public website will temporarily hide all dishes until you select items.")) {
      return;
    }
  }

  appData.menu.forEach(d => {
    d.available = selectState;
  });

  saveData();
  renderPublicSite();
  renderAdminMenuList();

  if (selectState) {
    showToast("All dishes are now SELECTED and visible on website!", "✅");
  } else {
    showToast("All dishes unselected (hidden from website).", "⭕");
  }
};

// Render All Products in Manager Hub / Owner Portal with Select Icons & Filters
window.renderAdminMenuList = function() {
  const container = document.getElementById('adminMenuList');
  if (!container) return;

  // Counts
  const liveCount = appData.menu.filter(d => d.available !== false).length;
  const hiddenCount = appData.menu.filter(d => d.available === false).length;

  const totalDishesEl = document.getElementById('adminStatTotalDishes');
  const totalCatsEl = document.getElementById('adminStatTotalCats');
  const nonVegEl = document.getElementById('adminStatNonVeg');
  const vegEl = document.getElementById('adminStatVeg');
  const liveCountEl = document.getElementById('adminStatLiveCount');
  const hiddenCountEl = document.getElementById('adminStatHiddenCount');

  const nonAllCats = appData.categories.filter(c => c.id !== 'all');
  if (totalDishesEl) totalDishesEl.textContent = appData.menu.length;
  if (totalCatsEl) totalCatsEl.textContent = nonAllCats.length;
  if (nonVegEl) nonVegEl.textContent = appData.menu.filter(d => d.type === 'nonveg').length;
  if (vegEl) vegEl.textContent = appData.menu.filter(d => d.type === 'veg').length;
  if (liveCountEl) liveCountEl.textContent = liveCount;
  if (hiddenCountEl) hiddenCountEl.textContent = hiddenCount;

  // Search & Filters
  const searchInput = document.getElementById('adminSearchInput');
  const searchVal = searchInput ? searchInput.value.trim().toLowerCase() : '';
  const catFilter = document.getElementById('adminCategoryFilter');
  const catVal = catFilter ? catFilter.value : 'all';

  let filtered = appData.menu;

  // 1. Availability filter (All / Live / Hidden)
  if (currentAvailFilter === 'live') {
    filtered = filtered.filter(d => d.available !== false);
  } else if (currentAvailFilter === 'hidden') {
    filtered = filtered.filter(d => d.available === false);
  }

  // 2. Category filter
  if (catVal !== 'all') {
    filtered = filtered.filter(d => d.category === catVal);
  }

  // 3. Search query filter
  if (searchVal) {
    filtered = filtered.filter(d => 
      (d.name && d.name.toLowerCase().includes(searchVal)) ||
      (d.category && d.category.toLowerCase().includes(searchVal)) ||
      (d.id && d.id.toLowerCase().includes(searchVal)) ||
      (d.desc && d.desc.toLowerCase().includes(searchVal)) ||
      (d.ingredients && d.ingredients.toLowerCase().includes(searchVal))
    );
  }

  const countDisplay = document.getElementById('adminDishCountDisplay');
  if (countDisplay) {
    countDisplay.textContent = `Showing ${filtered.length} of ${appData.menu.length} Dishes (${liveCount} Live on Website)`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 20px; color: var(--text-secondary); background: var(--bg-secondary); border-radius: 8px;">
        <span style="font-size: 2.2rem;">🔍</span>
        <h4 style="color: #fff; margin-top: 10px;">No dishes match current filters</h4>
        <p style="font-size: 0.85rem; margin-top: 4px;">Try switching the availability filter or clear your search query.</p>
        <button class="btn-outline" style="margin-top: 12px; font-size: 0.82rem;" onclick="clearAdminSearch()">
          Clear Filters
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(d => {
    const isAvailable = (d.available !== false);
    const catObj = appData.categories.find(c => c.id === d.category);
    const catName = catObj ? catObj.name : d.category;
    const isVeg = d.type === 'veg';

    return `
      <div class="admin-product-item ${isAvailable ? 'item-live' : 'item-hidden'}" id="admin-dish-${d.id}">
        
        <!-- SELECT ICON / AVAILABILITY TOGGLE BUTTON -->
        <button type="button" class="btn-select-dish ${isAvailable ? 'selected' : 'unselected'}" onclick="toggleDishAvailability('${d.id}')" title="${isAvailable ? 'Selected: Currently visible on website. Click to hide.' : 'Not Selected: Hidden from website. Click to make visible.'}">
          <span class="select-check-icon">${isAvailable ? '✅' : '⭕'}</span>
          <span class="select-check-label">${isAvailable ? 'Shown on Site' : 'Hidden'}</span>
        </button>

        <img src="${escapeHtml(d.image)}" class="admin-prod-thumb" alt="${escapeHtml(d.name)}" onerror="this.onerror=null; this.src='image.png';">
        
        <div class="admin-prod-details">
          <div class="admin-prod-title">
            <span>${escapeHtml(d.name)}</span>
            ${isVeg 
              ? '<span class="diet-tag veg-tag" style="font-size:0.68rem; padding: 2px 6px;"><span class="diet-dot"></span> Veg</span>' 
              : '<span class="diet-tag nonveg-tag" style="font-size:0.68rem; padding: 2px 6px;"><span class="diet-dot"></span> Non-Veg</span>'}
            ${d.special ? '<span class="chef-special-badge" style="font-size:0.68rem; padding: 2px 8px;">⭐ Royal Special</span>' : ''}
            ${isAvailable 
              ? '<span class="badge-status-live">● Live on Website</span>' 
              : '<span class="badge-status-hidden">○ Hidden from Website</span>'}
          </div>
          <div class="admin-prod-meta">
            <span style="color: var(--gold-champagne); background: rgba(212, 175, 55, 0.12); padding: 2px 8px; border-radius: 4px; font-weight: 600;">${escapeHtml(catName)}</span>
            <span>• Portion: ${escapeHtml(d.portion || 'Signature Serving')}</span>
            <span>• ID: <code>${escapeHtml(d.id)}</code></span>
          </div>
          <p class="admin-prod-desc-snippet">${escapeHtml(d.desc || '')}</p>
        </div>
        
        <div class="admin-prod-actions">
          <button class="btn-edit" onclick="openEditDishModal('${d.id}')" title="Edit this dish's details">
            <span>✏️</span> Edit
          </button>
          <button class="btn-danger" onclick="deleteDish('${d.id}')" title="Delete this dish from website">
            <span>🗑️</span> Delete
          </button>
        </div>
      </div>
    `;
  }).join('');
};

window.handleAdminSearch = function() {
  renderAdminMenuList();
};

window.handleAdminCategoryFilter = function() {
  renderAdminMenuList();
};

window.clearAdminSearch = function() {
  const searchInput = document.getElementById('adminSearchInput');
  const catFilter = document.getElementById('adminCategoryFilter');
  if (searchInput) searchInput.value = '';
  if (catFilter) catFilter.value = 'all';
  renderAdminMenuList();
};

// ===================================================================
// EDIT DISH MODAL LOGIC
// ===================================================================
window.openEditDishModal = function(id) {
  const dish = appData.menu.find(d => d.id === id);
  if (!dish) {
    alert("Dish not found!");
    return;
  }

  document.getElementById('editDishId').value = dish.id;
  document.getElementById('editDishName').value = dish.name || '';
  
  // Populate editDishCategory select
  const editCatSelect = document.getElementById('editDishCategory');
  if (editCatSelect) {
    const nonAllCats = appData.categories.filter(c => c.id !== 'all');
    editCatSelect.innerHTML = nonAllCats
      .map(c => `<option value="${c.id}" ${c.id === dish.category ? 'selected' : ''}>${escapeHtml(c.name)}</option>`)
      .join('');
    editCatSelect.value = dish.category;
  }

  document.getElementById('editDishType').value = dish.type || 'nonveg';
  document.getElementById('editDishPortion').value = dish.portion || '';
  document.getElementById('editDishSpecial').checked = !!dish.special;
  
  const imgInput = document.getElementById('editDishImage');
  const imgPreview = document.getElementById('editDishImagePreview');
  if (imgInput) imgInput.value = dish.image || '';
  if (imgPreview) imgPreview.src = dish.image || 'image.png';

  document.getElementById('editDishDesc').value = dish.desc || '';
  document.getElementById('editDishHeritage').value = dish.heritage || '';
  document.getElementById('editDishIngredients').value = dish.ingredients || '';
  document.getElementById('editDishPairings').value = dish.pairings || '';

  openModal('editDishModal');
};

window.saveEditedDish = function(e) {
  if (e && e.preventDefault) e.preventDefault();

  const id = document.getElementById('editDishId').value;
  const dish = appData.menu.find(d => d.id === id);
  if (!dish) {
    alert("Dish could not be found to update.");
    return;
  }

  const name = document.getElementById('editDishName').value.trim();
  const category = document.getElementById('editDishCategory').value;
  const type = document.getElementById('editDishType').value;
  const portion = document.getElementById('editDishPortion').value.trim() || "Signature Serving";
  const special = document.getElementById('editDishSpecial').checked;
  const image = document.getElementById('editDishImage').value.trim() || "image.png";
  const desc = document.getElementById('editDishDesc').value.trim();
  const heritage = document.getElementById('editDishHeritage').value.trim();
  const ingredients = document.getElementById('editDishIngredients').value.trim();
  const pairings = document.getElementById('editDishPairings').value.trim();

  if (!name || !desc) {
    alert("Please provide both Dish Name and Overview Description.");
    return;
  }

  dish.name = name;
  dish.category = category;
  dish.type = type;
  dish.portion = portion;
  dish.special = special;
  dish.image = image;
  dish.desc = desc;
  dish.heritage = heritage || "Crafted following authentic Hyderabadi culinary recipes passed down through royal Nizami kitchens.";
  dish.ingredients = ingredients || "Aromatic Shahi Spices, Pure Desi Ghee, Farm-fresh ingredients.";
  dish.pairings = pairings || "Accompanied with authentic Nizami condiments and fresh breads.";

  saveData();
  renderPublicSite();
  renderAdminMenuList();
  closeModal('editDishModal');
  showToast(`Dish "${name}" updated and saved live to website!`, "💾");
};

// ===================================================================
// ADD NEW DISH LOGIC
// ===================================================================
window.addNewDish = function() {
  if (!currentUser) return;

  const name = document.getElementById('newDishName').value.trim();
  const category = document.getElementById('newDishCategory').value;
  const type = document.getElementById('newDishType').value;
  const portion = document.getElementById('newDishPortion').value.trim() || "Signature Serving";
  const special = document.getElementById('newDishSpecial') ? document.getElementById('newDishSpecial').checked : false;
  const image = document.getElementById('newDishImage').value.trim() || "image.png";
  const desc = document.getElementById('newDishDesc').value.trim();
  const heritage = document.getElementById('newDishHeritage').value.trim();
  const ingredients = document.getElementById('newDishIngredients').value.trim();
  const pairings = document.getElementById('newDishPairings').value.trim();

  if (!name || !desc) {
    alert("Please fill in Dish Name and Overview Description.");
    return;
  }

  const newDish = {
    id: "dish-" + Date.now(),
    name: name,
    category: category,
    type: type,
    portion: portion,
    special: special,
    available: true,
    desc: desc,
    image: image,
    heritage: heritage || "Crafted using traditional slow-cooking Nizami culinary methods.",
    ingredients: ingredients || "Aromatic Shahi Spices, Pure Ghee, and Fresh Herbs.",
    pairings: pairings || "Enjoyed with traditional Hyderabadi accompaniments."
  };

  appData.menu.unshift(newDish);
  saveData();
  renderPublicSite();
  populateCategorySelects();
  renderAdminMenuList();

  document.getElementById('newDishName').value = '';
  document.getElementById('newDishDesc').value = '';
  document.getElementById('newDishHeritage').value = '';
  document.getElementById('newDishIngredients').value = '';
  document.getElementById('newDishPairings').value = '';
  document.getElementById('newDishImage').value = '';
  document.getElementById('newDishImagePreview').src = 'image.png';
  if (document.getElementById('newDishSpecial')) document.getElementById('newDishSpecial').checked = false;

  switchAdminTab('tabCatalog');
  showToast(`Dish "${name}" added and live on website!`, "🍽️");
};

// ===================================================================
// DELETE DISH & CONFIRMATION POPUP LOGIC (YES / NO POPUP)
// ===================================================================
let pendingDeleteAction = null; // { type: 'dish' | 'category', id, name }

window.deleteDish = function(id) {
  if (!currentUser) return;
  const dish = appData.menu.find(d => d.id === id);
  if (!dish) return;

  pendingDeleteAction = {
    type: 'dish',
    id: id,
    name: dish.name
  };

  const titleEl = document.getElementById('confirmDeleteTitle');
  const msgEl = document.getElementById('confirmDeleteMsg');
  const imgEl = document.getElementById('confirmItemImg');
  const nameEl = document.getElementById('confirmItemName');
  const catEl = document.getElementById('confirmItemCategory');
  const portionEl = document.getElementById('confirmItemPortion');
  const btnYes = document.getElementById('btnConfirmDeleteYes');
  const btnNo = document.getElementById('btnConfirmDeleteNo');

  if (titleEl) titleEl.textContent = "Delete Dish From Website?";
  if (msgEl) msgEl.textContent = "Are you sure you want to permanently remove this dish from the live menu showcase?";
  if (imgEl) {
    imgEl.src = dish.image || 'image.png';
    imgEl.onerror = function() { this.src = 'image.png'; };
  }
  if (nameEl) nameEl.textContent = dish.name;

  const catObj = appData.categories.find(c => c.id === dish.category);
  if (catEl) catEl.textContent = catObj ? catObj.name : dish.category;
  if (portionEl) portionEl.textContent = dish.portion || "Signature Serving";
  if (btnYes) btnYes.innerHTML = '<span>🗑️</span> Yes, Delete Dish';
  if (btnNo) btnNo.innerHTML = '<span>❌</span> No, Keep Dish';

  openModal('confirmDeleteModal');
};

window.closeConfirmDelete = function() {
  pendingDeleteAction = null;
  closeModal('confirmDeleteModal');
};

window.executeConfirmedDelete = function() {
  if (!pendingDeleteAction) {
    closeConfirmDelete();
    return;
  }

  if (pendingDeleteAction.type === 'dish') {
    const id = pendingDeleteAction.id;
    const name = pendingDeleteAction.name;
    appData.menu = appData.menu.filter(d => d.id !== id);
    saveData();
    renderPublicSite();
    populateCategorySelects();
    renderAdminMenuList();
    showToast(`Dish "${name}" deleted from website.`, "🗑️");
  } else if (pendingDeleteAction.type === 'category') {
    const id = pendingDeleteAction.id;
    const name = pendingDeleteAction.name;
    appData.categories = appData.categories.filter(c => c.id !== id);
    saveData();
    renderCategoryPills();
    populateCategorySelects();
    renderAdminCategoriesList();
    renderAdminMenuList();
    showToast(`Category "${name}" removed from website.`, "🗑️");
  }

  closeConfirmDelete();
};

// ===================================================================
// CATEGORY MANAGEMENT (ADD & DELETE CATEGORIES)
// ===================================================================
window.autoGenerateCatId = function() {
  const name = document.getElementById('newCategoryName').value;
  const idInput = document.getElementById('newCategoryId');
  if (idInput) {
    idInput.value = name.toLowerCase().trim().replace(/[^a-z0-9_-]/g, '-').replace(/-+/g, '-');
  }
};

window.addNewCategory = function() {
  if (!currentUser || currentUser.role !== 'owner') {
    alert("Only the Owner has permission to create new categories.");
    return;
  }

  const nameInput = document.getElementById('newCategoryName');
  const idInput = document.getElementById('newCategoryId');
  const catName = nameInput.value.trim();
  let catId = idInput.value.trim().toLowerCase().replace(/[^a-z0-9_-]/g, '-');

  if (!catName) {
    alert("Please enter a Category Name.");
    return;
  }
  if (!catId) {
    catId = catName.toLowerCase().replace(/[^a-z0-9_-]/g, '-');
  }

  // Check if ID already exists
  if (appData.categories.some(c => c.id === catId)) {
    alert(`A category with ID "${catId}" already exists. Please choose a unique name or slug.`);
    return;
  }

  appData.categories.push({
    id: catId,
    name: catName
  });

  saveData();
  renderCategoryPills();
  populateCategorySelects();
  renderAdminCategoriesList();
  renderAdminMenuList();

  nameInput.value = '';
  idInput.value = '';

  showToast(`New category "${catName}" created and live on website!`, "📂");
};

window.deleteCategory = function(catId) {
  if (!currentUser || currentUser.role !== 'owner') {
    alert("Only the Owner can delete categories.");
    return;
  }

  // Core default categories cannot be removed
  const coreIds = ['all', 'biryani', 'mandi', 'haleem', 'kebabs', 'starters', 'curries', 'vegetarian', 'breads', 'shawarma', 'irani-chai', 'desserts'];
  if (coreIds.includes(catId)) {
    alert("Default heritage menu categories cannot be deleted.");
    return;
  }

  const assignedCount = appData.menu.filter(d => d.category === catId).length;
  if (assignedCount > 0) {
    alert(`Cannot delete category "${catId}" because ${assignedCount} dish(es) are currently assigned to it. Please edit or reassign those dishes first.`);
    return;
  }

  const catObj = appData.categories.find(c => c.id === catId);
  const catName = catObj ? catObj.name : catId;

  pendingDeleteAction = {
    type: 'category',
    id: catId,
    name: catName
  };

  const titleEl = document.getElementById('confirmDeleteTitle');
  const msgEl = document.getElementById('confirmDeleteMsg');
  const imgEl = document.getElementById('confirmItemImg');
  const nameEl = document.getElementById('confirmItemName');
  const catEl = document.getElementById('confirmItemCategory');
  const portionEl = document.getElementById('confirmItemPortion');
  const btnYes = document.getElementById('btnConfirmDeleteYes');
  const btnNo = document.getElementById('btnConfirmDeleteNo');

  if (titleEl) titleEl.textContent = "Delete Menu Category?";
  if (msgEl) msgEl.textContent = `Are you sure you want to remove category "${catName}" from the website?`;
  if (imgEl) imgEl.src = 'logo.svg';
  if (nameEl) nameEl.textContent = catName;
  if (catEl) catEl.textContent = "Custom Category";
  if (portionEl) portionEl.textContent = `Slug: ${catId}`;
  if (btnYes) btnYes.innerHTML = '<span>🗑️</span> Yes, Delete Category';
  if (btnNo) btnNo.innerHTML = '<span>❌</span> No, Keep Category';

  openModal('confirmDeleteModal');
};

window.renderAdminCategoriesList = function() {
  const container = document.getElementById('adminCategoriesList');
  if (!container) return;

  const coreIds = ['all', 'biryani', 'mandi', 'haleem', 'kebabs', 'starters', 'curries', 'vegetarian', 'breads', 'shawarma', 'irani-chai', 'desserts'];

  container.innerHTML = appData.categories.filter(c => c.id !== 'all').map(c => {
    const count = appData.menu.filter(d => d.category === c.id).length;
    const isCore = coreIds.includes(c.id);

    return `
      <div class="admin-category-card ${isCore ? '' : 'custom-cat'}">
        <div>
          <strong style="color: #fff; font-size: 0.95rem;">${escapeHtml(c.name)}</strong>
          <div style="font-size: 0.76rem; color: var(--text-secondary); margin-top: 4px;">
            Slug: <code>${escapeHtml(c.id)}</code> • <span style="color: var(--gold-champagne); font-weight: 600;">${count} dish${count === 1 ? '' : 'es'}</span>
          </div>
        </div>
        <div>
          ${isCore 
            ? '<span style="font-size: 0.72rem; color: var(--text-muted); background: rgba(255,255,255,0.06); padding: 3px 8px; border-radius: 4px;">Core Category</span>' 
            : `<button class="btn-danger" style="font-size: 0.75rem; padding: 4px 8px;" onclick="deleteCategory('${c.id}')" title="Delete category">Delete</button>`}
        </div>
      </div>
    `;
  }).join('');
};

// Image Preview Handlers
window.updateNewImagePreview = function() {
  const val = document.getElementById('newDishImage').value.trim();
  const prev = document.getElementById('newDishImagePreview');
  if (prev) prev.src = val || 'image.png';
};

window.updateEditImagePreview = function() {
  const val = document.getElementById('editDishImage').value.trim();
  const prev = document.getElementById('editDishImagePreview');
  if (prev) prev.src = val || 'image.png';
};

// ===================================================================
// OWNER SPECIALTIES / HIGHLIGHTS LOGIC
// ===================================================================
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

// ===================================================================
// SITE SETTINGS, BACKUP & FACTORY RESTORE
// ===================================================================
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

window.resetToDefault = function() {
  if (confirm("Reset banner text and timings back to defaults?")) {
    appData.hero = JSON.parse(JSON.stringify(RESTAURANT_DATA.hero));
    appData.settings = JSON.parse(JSON.stringify(RESTAURANT_DATA.settings));
    saveData();
    renderPublicSite();
    populateAdminForms();
    showToast("Site settings reset to defaults.", "🔄");
  }
};

window.restoreDefaultCatalog = function() {
  if (!currentUser || currentUser.role !== 'owner') {
    alert("Only the Owner has permission to restore factory defaults.");
    return;
  }

  if (confirm("Are you sure you want to restore the official factory default catalog with all 66 authentic dishes? Any custom dishes or categories will be reset.")) {
    appData = JSON.parse(JSON.stringify(RESTAURANT_DATA));
    saveData();
    renderPublicSite();
    populateCategorySelects();
    renderAdminMenuList();
    renderAdminCategoriesList();
    renderAdminFeaturesList();
    showToast("Official factory default catalog restored!", "🔄");
  }
};

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

// Modal & Full-Page Helpers
function openModal(id) {
  if (id === 'loginModal') {
    openLoginGateway();
    return;
  }
  if (id === 'adminModal') {
    openStaffDashboard();
    return;
  }
  const modal = document.getElementById(id);
  if (modal) modal.classList.add('active');
}

function closeModal(id) {
  if (id === 'loginModal') {
    closeLoginGateway();
    return;
  }
  if (id === 'adminModal') {
    closeStaffDashboard();
    return;
  }
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
