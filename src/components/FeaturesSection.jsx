// src/components/FeaturesSection.jsx
import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    icon: "🕉️",
    title: "Authentic Spiritual Experiences",
    description:
      "Participate in sacred rituals led by trusted priests for a truly divine journey."
  },
  {
    icon: "🏛️",
    title: "Sacred Accommodations",
    description:
      "Stay close to holy shrines in peaceful, eco-friendly stays serving sattvic meals."
  },
  {
    icon: "👨‍🏫",
    title: "Expert Spiritual Guides",
    description:
      "Guides deeply rooted in scriptures and traditions enrich every step of your Yatra."
  },
  {
    icon: "🛡️",
    title: "Safety & Comfort",
    description:
      "Curated itineraries with 24×7 assistance, ensuring peace, comfort, and care."
  }
];

export default function FeaturesSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-amber-50 via-white to-amber-100">
      {/* ✨ Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-orange-200/40 rounded-full blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-amber-300/30 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-[Cinzel] bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent drop-shadow-md">
            Why Choose <span className="text-orange-600">Vedic Yatra?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Embark on a soulful journey where devotion meets comfort — curated to
            elevate your spiritual experience.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative bg-white/60 backdrop-blur-md border border-orange-100 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-100/30 to-orange-50/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col items-center text-center">
                <motion.div
                  className="text-6xl mb-5 bg-gradient-to-r from-orange-500 to-amber-400 text-transparent bg-clip-text drop-shadow-lg"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-serif">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
