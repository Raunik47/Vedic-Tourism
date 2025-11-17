// src/data/packages.js
// Single place packages
export const singlePackages = [
  {
    id: 101,
    name: "Varanasi Spiritual Retreat",
    region: "North",
    duration: "5 Days",
    price: "₹22,999",
    originalPrice: "₹27,999",
    description: "Immerse in the spiritual capital of India",
    image: "https://res.cloudinary.com/dht3z7n3m/image/upload/v1763043001/varanasi_egxm9q.jpg",
    rating: 4.8,
    reviews: 892,
    detailedDescription: "Experience the eternal charm of Varanasi — visit the ghats, attend Ganga Aarti, and explore Kashi Vishwanath Temple.",
    highlights: [
      "Sunrise Boat Ride Ganga",
      "Evening Ganga Aarti",
      "Kashi Vishwanath Darshan",
      "Sarnath Buddhist Tour",
      "Traditional Puja Participation",
      "Spiritual Discourse"
    ],
    includes: ["Hotel Stay", "Vegetarian Meals", "Local Transport", "Guide", "Puja Materials"]
  },
  {
    id: 102,
    name: "Rishikesh Yoga Journey",
    region: "North",
    duration: "7 Days",
    price: "₹28,999",
    originalPrice: "₹32,999",
    description: "Yoga and meditation in the serene Himalayas",
    image: "https://res.cloudinary.com/dht3z7n3m/image/upload/v1763042973/rishikesh_eeemh2.jpg",
    rating: 4.7,
    reviews: 756,
    detailedDescription: "Transform your mind, body, and soul in the serene environment of Rishikesh. Daily yoga sessions, meditation by the Ganges, and adventure activities.",
    highlights: [
      "Daily Yoga & Meditation",
      "Ganga Aarti Participation",
      "Beatles Ashram Visit",
      "White Water Rafting",
      "Ayurvedic Treatments",
      "Nature Walks & Trekking"
    ],
    includes: ["Yoga Resort", "All Meals", "Yoga Classes", "Activities", "Guide"]
  },
  {
    id: 103,
    name: "Prayagraj Sangam Pilgrimage",
    region: "North",
    duration: "4 Days",
    price: "₹17,499",
    originalPrice: "₹21,999",
    description: "Experience the holy confluence at Triveni Sangam",
    image: "https://res.cloudinary.com/dht3z7n3m/image/upload/v1762967161/kumbh-mela-prayag-kumbh-mela-kumbh-mela-sangam-prayagraj-kumbh-mela-prayag-kumbh-mela-kumbh-mela-sangam-prayagraj-ganga-river-340011665_zriptn.webp",
    rating: 4.8,
    reviews: 582,
    detailedDescription: "Spiritual journey to the Triveni Sangam — where three sacred rivers unite. Take a sacred dip to purify your soul.",
    highlights: [
      "Holy Dip at Triveni Sangam",
      "Attend Evening Ganga Aarti",
      "Visit Bade Hanuman Temple",
      "Explore Akshayavat Tree",
      "Anand Bhavan Museum Tour",
      "Spiritual Walk Along Ghats"
    ],
    includes: [
      "Hotel Accommodation",
      "Breakfast & Dinner",
      "AC Transport",
      "Local Guide",
      "Boat Ride at Sangam",
      "Darshan Assistance"
    ]
  }
];

// Combo packages (3+ destinations)
export const comboPackages = [
  {
    id: 201,
    name: "Char Dham Yatra",
    region: "North",
    duration: "12 Days",
    price: "₹45,999",
    originalPrice: "₹52,999",
    description: "A complete Himalayan spiritual journey through 4 sacred shrines",
    image: "https://res.cloudinary.com/dht3z7n3m/image/upload/v1763043313/chardham_jaxkjw.jpg",
    rating: 4.9,
    reviews: 1247,
    detailedDescription: "Embark on the ultimate spiritual journey to the four abodes of God. This sacred yatra takes you through the majestic Himalayas.",
    highlights: [
      "Badrinath Temple Darshan",
      "Kedarnath Helicopter Access",
      "Gangotri Source Visit",
      "Yamunotri Holy Dip",
      "Expert Spiritual Guide",
      "Comfortable Accommodations"
    ],
    includes: ["Accommodation", "Meals", "Transport", "Guide", "Rituals"]
  },
  {
    id: 202,
    name: "Golden Triangle Pilgrimage",
    region: "North",
    duration: "9 Days",
    price: "₹36,499",
    originalPrice: "₹42,999",
    description: "Explore Delhi, Mathura, and Varanasi in one blessed trip",
    image: "https://res.cloudinary.com/dht3z7n3m/image/upload/v1762967161/kumbh-mela-prayag-kumbh-mela-kumbh-mela-sangam-prayagraj-kumbh-mela-prayag-kumbh-mela-kumbh-mela-sangam-prayagraj-ganga-river-340011665_zriptn.webp",
    rating: 4.8,
    reviews: 945,
    detailedDescription: "A sacred cultural circuit covering Delhi, Mathura, and Varanasi — blending spirituality, heritage, and devotion.",
    highlights: [
      "Delhi Spiritual Sites",
      "Mathura Krishna Temple",
      "Varanasi Ganga Aarti",
      "Sarnath Buddhist Complex",
      "Temple Tours",
      "Cultural Experiences"
    ],
    includes: ["Hotel Stay", "All Meals", "AC Transport", "Expert Guide", "Temple Access"]
  }
];

// All packages combined
export const allPackages = [...singlePackages, ...comboPackages];
