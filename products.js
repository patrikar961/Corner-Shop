/* =========================================================
   PRODUCTS.JS — Boutique Corner69
   Produits, catégories, médias, vidéo et avis
   ========================================================= */


/* INFORMATIONS DE LA BOUTIQUE */

const SHOP = {
  name: "Atelier Nova",
  telegram: "https://t.me/+H15PSwqVM1o2ZWZk",
  whatsapp: "",            /* ex. "33612345678" : indicatif pays, sans +, sans espaces */
  currency: "EUR"
};


/* WEBHOOK MAKE (facultatif : laissez vide pour désactiver l'envoi) */

const MAKE_WEBHOOK_URL = "";


/* VIDÉO PRINCIPALE DE LA BOUTIQUE */

const VIDEO = {
  type: "file",            /* "file" | "youtube" | "vimeo" */
  src: "assets/video.mp4",
  fallback: "",
  poster: "",
  title: "Découvrez notre atelier"
};


/* CATÉGORIES
   Les noms doivent correspondre exactement à ceux des produits. */

const CATEGORIES = [
  "🧽 Mousse",
  "Résines",
  "Décoration",
  "Accessoires",
  "Papeterie"
];


/* =========================================================
   PRODUITS
   media  : photos et vidéos de la fiche produit (carrousel)
   variants : nom + prix (price: null = prix du produit)
   ========================================================= */

const PRODUCTS = [

  /* PRODUIT 1 — BLUE LOBSTER */

  {
    id: 1,
    name: "Blue Lobster-Mousse premium 🧽🇲🇦",
    category: "🧽 Mousse",
    price: 50,
    featured: 3,
    poster: "assets/img/moussec.webp",
    cover: "assets/img/moussec.webp",              /* vignette du catalogue : format portrait 3/4 (facultatif) */
    desc: "Très bon produit cultivé dans les montagnes du Rif, sa qualité et son prix réunissent un bon compromis 🤝✅",
    media: [
      {
        type: "video",
        src: "assets/video/moussev.mp4",
        poster: "assets/img/moussec.webp",
        alt: "Vidéo du produit"
      }

      /*
      Pour ajouter une deuxième photo :

      {
        type: "image",
        src: "assets/img/mousse2.jpg",
        alt: "Deuxième photo"
      }
      */
    ],
    variants: [
      { name: "12G", price: 50 },
      { name: "24G", price: 100 }
      { name: "36G", price: 140 }
      { name: "48G", price: 170 }
      { name: "100G", price: 300 }
    ]
  },


  /* PRODUIT 2 — OLIVE */

  {
    id: 2,
    name: "Olive 3x filtré - Underbranded",
    category: "🍫 Choco",
    price: 70,
    featured: 5,
    emoji: "🍫",
    desc: "Olive 3x filtré no farm, prix et qualité au rendez-vous 🤝🇲🇦.",
    media: [],
    variants: [
      { name: "12G", price: 50 },
      { name: "20G", price: 120 }
      { name: "30G", price: 180 }
      { name: "50G", price: 240 }
      { name: "100G", price: 450 }
    ]
  },


  /* PRODUIT 4 — CARNET */

  {
    id: 4,
    name: "Carnet Prisme",
    category: "Papeterie",
    price: 12.90,
    featured: 2,
    emoji: "📓",
    desc: "Papier 120 g, couverture irisée.",
    media: [],
    variants: [
      { name: "A5", price: null },
      { name: "A4", price: 16.90 }
    ]
  },


  /* PRODUIT 5 — BRACELET */

  {
    id: 5,
    name: "Bracelet Lumière",
    category: "Accessoires",
    price: 29,
    featured: 1,
    emoji: "📿",
    desc: "Perles de verre colorées.",
    media: [],
    variants: [
      { name: "Réglable", price: null },
      { name: "Coffret cadeau", price: 34 }
    ]
  },


  /* PRODUIT 6 — AFFICHE */

  {
    id: 6,
    name: "Affiche Cosmos",
    category: "Papeterie",
    price: 24,
    featured: 6,
    emoji: "🖼️",
    desc: "Impression A3 haute qualité.",
    media: [],
    variants: [
      { name: "A4", price: null },
      { name: "A3", price: 32 }
    ]
  }

];


/* =========================================================
   AVIS
   ========================================================= */

const SAMPLE_REVIEWS = [

  {
    name: "Exemple A",
    rating: 5,
    text: "Avis d'exemple — remplacez par un avis authentique.",
    sample: true
  },

  {
    name: "Exemple B",
    rating: 4,
    text: "Avis d'exemple — remplacez par un avis authentique.",
    sample: true
  }

];
