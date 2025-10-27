// src/components/PackagesSection.jsx
import React from "react";
import { motion } from "framer-motion";



import charDhamImage from "../assets/chardham.jpg";
import varanasiImage from "../assets/varanasi.jpg";
import rishikeshImage from "../assets/rishikesh.jpg";
import prayagrajSangamImage from "../assets/golden-temple.webp";


const packages = [
  {
    name: "Char Dham Yatra",
    duration: "12 Days",
    price: "₹45,999",
    originalPrice: "₹52,999",
    image: charDhamImage,
    rating: 4.9,
    reviews: 1247,
    description: "Complete pilgrimage to four sacred shrines in the Himalayas",
    detailedDescription: "Embark on the ultimate spiritual journey to the four abodes of God. This sacred yatra takes you through the majestic Himalayas to Badrinath, Kedarnath, Gangotri, and Yamunotri.",
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
    name: "Varanasi Spiritual Retreat",
    duration: "5 Days", 
    price: "₹22,999",
    originalPrice: "₹27,999",
    image: varanasiImage,
    rating: 4.8,
    reviews: 892,
    description: "Immerse in the spiritual capital of India",
    detailedDescription: "Experience the eternal city of Varanasi with its ancient ghats, sacred Ganga rituals, and profound spiritual energy. Witness life, death, and liberation in one place.",
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
    name: "Rishikesh Yoga Journey", 
    duration: "7 Days",
    price: "₹28,999",
    originalPrice: "₹32,999",
    image: rishikeshImage,
    rating: 4.7,
    reviews: 756,
    description: "Yoga and meditation in the world's yoga capital",
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
  name: "Prayagraj Sangam Pilgrimage",
  duration: "4 Days",
  price: "₹17,499",
  originalPrice: "₹21,999",
  image: prayagrajSangamImage, // import or link to your Prayagraj image
  rating: 4.8,
  reviews: 582,
  description: "Spiritual journey to the Triveni Sangam — where three sacred rivers unite.",
  detailedDescription:
    "Experience the divine confluence of the Ganga, Yamuna, and Saraswati at the holy Triveni Sangam in Prayagraj. Take a sacred dip to purify your soul, witness the Ganga Aarti, and explore the city's ancient ghats, temples, and fort. Perfect blend of faith, culture, and peace.",
  highlights: [
    "Holy Dip at Triveni Sangam",
    "Attend Evening Ganga Aarti",
    "Visit Bade Hanuman Temple",
    "Explore Akshayavat Tree & Allahabad Fort",
    "Anand Bhavan Museum Tour",
    "Spiritual Walk Along the Ghats"
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

export default function PackagesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Popular <span className="text-orange-600">Pilgrimage Packages</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Carefully crafted spiritual journeys for transformative experiences with all amenities included
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {pkg.duration}
                </div>
                <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                  ⭐ {pkg.rating} ({pkg.reviews})
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
                  {pkg.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {pkg.detailedDescription}
                </p>

                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Highlights:</h4>
                  <ul className="text-gray-600 space-y-1 text-xs">
                    {pkg.highlights.slice(0, 3).map((highlight, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 flex-shrink-0"></span>
                        <span className="line-clamp-1">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Includes */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Includes:</h4>
                  <div className="flex flex-wrap gap-1">
                    {pkg.includes.map((item, idx) => (
                      <span
                        key={idx}
                        className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-orange-600">{pkg.price}</span>
                      <span className="text-sm text-gray-500 line-through">{pkg.originalPrice}</span>
                    </div>
                    <span className="text-green-600 text-sm font-semibold">
                      Save ₹{(parseInt(pkg.originalPrice.replace('₹', '').replace(',', '')) - parseInt(pkg.price.replace('₹', '').replace(',', ''))).toLocaleString()}
                    </span>
                  </div>
                  <motion.button
                    className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition-colors duration-300 text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className="border-2 border-orange-500 text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300">
            View All Packages (12+)
          </button>
        </motion.div>
      </div>
    </section>
  );
}