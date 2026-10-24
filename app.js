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

// Current menu storage key - incrementing forces all client browsers to load latest dishes
const CURRENT_STORAGE_KEY = 'shahghouse_luxury_menu_v10';

// Initialize Data
function initData() {
  // Purge any older cached versions from localStorage
  ['shahghouse_luxury_menu', 'shahghouse_luxury_menu_v2', 'shahghouse_luxury_menu_v3', 
   'shahghouse_luxury_menu_v4', 'shahghouse_luxury_menu_v5', 'shahghouse_luxury_menu_v6', 
   'shahghouse_luxury_menu_v7', 'shahghouse_luxury_menu_v8', 'shahghouse_luxury_menu_v9'].forEach(key => {
    try { localStorage.removeItem(key); } catch(e) {}
  });

  const saved = localStorage.getItem(CURRENT_STORAGE_KEY);
  if (saved) {
    try {
      appData = JSON.parse(saved);
      // Ensure authentic catalog has all dishes; if not, re-sync to RESTAURANT_DATA
      if (!appData || !appData.menu || appData.menu.length < RESTAURANT_DATA.menu.length) {
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
