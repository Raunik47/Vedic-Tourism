// src/components/FeaturesSection.jsx
import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    icon: "🕉️",
    title: "Authentic Spiritual Experiences",
    description: "Genuine rituals and ceremonies conducted by experienced priests"
  },
  {
    icon: "🏛️",
    title: "Sacred Accommodations",
    description: "Comfortable stays near temples with pure vegetarian meals"
  },
  {
    icon: "👨‍🏫",
    title: "Expert Spiritual Guides",
    description: "Knowledgeable guides well-versed in scriptures and traditions"
  },
  {
    icon: "🛡️",
    title: "Safety & Comfort",
    description: "Well-planned itineraries with medical support and emergency services with "
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-orange-600">Vedic Yatra</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience spirituality like never before with our carefully curated pilgrimages
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}