import React from 'react';
import { motion } from 'framer-motion';

export default function AttractionCard({ attraction }) {
  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
      whileHover={{ y: -8 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image Container with Gradient Overlay */}
      <div className="relative h-64 overflow-hidden group">
        <motion.img
          src={attraction.image}
          alt={attraction.title}
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
        
        {/* Title and Icon Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
          <div className="flex items-center gap-3">
            <span className="text-4xl filter drop-shadow-lg">
              {attraction.icon}
            </span>
            <h3 className="text-2xl font-bold text-white tracking-wide drop-shadow-lg">
              {attraction.title}
            </h3>
          </div>
        </div>
      </div>

      {/* Content with Improved Layout */}
      <div className="p-6 space-y-4">
        {attraction.significance && (
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-orange-600 uppercase tracking-wider">Significance</h4>
            <p className="text-gray-600 text-sm leading-relaxed">{attraction.significance}</p>
          </div>
        )}

        {attraction.highlight && (
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-orange-600 uppercase tracking-wider">Highlight</h4>
            <p className="text-gray-600 text-sm leading-relaxed">{attraction.highlight}</p>
          </div>
        )}

        {attraction.experience && (
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-orange-600 uppercase tracking-wider">Experience</h4>
            <p className="text-gray-600 text-sm leading-relaxed">{attraction.experience}</p>
          </div>
        )}

        {attraction.location && (
          <div className="pt-4 flex items-center text-sm text-gray-500 border-t border-gray-100">
            <svg className="w-4 h-4 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {attraction.location}
          </div>
        )}
      </div>
    </motion.div>
  );
}