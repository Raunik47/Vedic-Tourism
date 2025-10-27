import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function PackageCard({ package: pkg }) {
  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
      whileHover={{ y: -8 }}
    >
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-110"
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
          {pkg.description}
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
          <Link to={`/package/${pkg.id}`}>
            <motion.button
              className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition-colors duration-300 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Details
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}