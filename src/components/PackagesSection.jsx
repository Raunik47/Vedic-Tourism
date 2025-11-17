// src/components/PackagesSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { singlePackages } from "../data";

export default function PackagesSection() {
  const navigate = useNavigate();
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Popular <span className="text-orange-600">Pilgrimage Packages</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Carefully crafted spiritual journeys for transformative experiences with all amenities included
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8">
          {singlePackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group flex flex-col h-full border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
            >
              {/* Image Section */}
              <div className="relative overflow-hidden h-44 md:h-48">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3 right-3 bg-orange-500 text-white px-2.5 py-1 rounded-full text-xs md:text-sm font-medium shadow-sm">
                  {pkg.duration}
                </div>
                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white px-2 py-0.5 rounded-full text-xs">
                  ⭐ {pkg.rating} ({pkg.reviews})
                </div>
              </div>

              {/* Content Section */}
              <div className="p-4 md:p-5 flex flex-col flex-grow">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 truncate">
                  {pkg.name}
                </h3>

                <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed">
                  {pkg.detailedDescription}
                </p>

                {/* Highlights */}
                <div className="mb-3">
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm">Highlights</h4>
                  <ul className="text-gray-600 space-y-0.5 text-xs">
                    {pkg.highlights.slice(0, 2).map((highlight, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                        <span className="truncate">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Includes */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm">Includes</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {pkg.includes.slice(0, 3).map((item, idx) => (
                      <span
                        key={idx}
                        className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full text-[11px] font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="mt-auto flex items-center justify-between pt-3 border-t border-gray-100">
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-lg md:text-xl font-bold text-orange-600">{pkg.price}</span>
                      <span className="text-xs md:text-sm text-gray-400 line-through">
                        {pkg.originalPrice}
                      </span>
                    </div>
                    <span className="text-green-600 text-xs font-medium">
                      Save ₹
                      {(
                        parseInt(pkg.originalPrice.replace("₹", "").replace(",", "")) -
                        parseInt(pkg.price.replace("₹", "").replace(",", ""))
                      ).toLocaleString()}
                    </span>
                  </div>

                  <motion.button
                    onClick={() => navigate('/booking', { state: { packageName: pkg.name } })}
                    className="bg-orange-500 text-white px-4 md:px-5 py-1.5 md:py-2 rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 text-xs md:text-sm shadow-sm"
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
          className="text-center mt-10 md:mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
         <Link to="/packages">
  <button className="border-2 border-orange-500 text-orange-600 px-6 md:px-10 py-2.5 md:py-3 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 text-sm md:text-base">
    View All Packages (12+)
  </button>
</Link>

        </motion.div>
      </div>
    </section>
  );
}
