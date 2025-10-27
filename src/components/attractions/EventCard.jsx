import React from 'react';
import { motion } from 'framer-motion';

export default function EventCard({ event }) {
  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
      whileHover={{ y: -8 }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <div className="text-white">
            <p className="text-sm font-medium">{event.date}</p>
            <h3 className="text-xl font-bold">{event.title}</h3>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-gray-600 mb-4">{event.description}</p>
        
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-500">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {event.location}
          </div>
          
          <div className="flex items-center text-sm text-gray-500">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {event.time}
          </div>
        </div>

        <motion.button
          className="w-full mt-6 bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
}