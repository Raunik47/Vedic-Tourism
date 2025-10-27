import React from 'react';
import { motion } from 'framer-motion';

export default function AttractionCard({ attraction }) {
  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
      whileHover={{ y: -8 }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={attraction.image}
          alt={attraction.title}
          className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-4 left-4 text-4xl">
          {attraction.icon}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {attraction.title}
        </h3>

        {attraction.significance && (
          <div className="mb-3">
            <h4 className="text-sm font-semibold text-gray-700 mb-1">Significance</h4>
            <p className="text-gray-600 text-sm">{attraction.significance}</p>
          </div>
        )}

        {attraction.highlight && (
          <div className="mb-3">
            <h4 className="text-sm font-semibold text-gray-700 mb-1">Highlight</h4>
            <p className="text-gray-600 text-sm">{attraction.highlight}</p>
          </div>
        )}

        {attraction.experience && (
          <div className="mb-3">
            <h4 className="text-sm font-semibold text-gray-700 mb-1">Experience</h4>
            <p className="text-gray-600 text-sm">{attraction.experience}</p>
          </div>
        )}

        {attraction.location && (
          <div className="mt-4 flex items-center text-sm text-gray-500">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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