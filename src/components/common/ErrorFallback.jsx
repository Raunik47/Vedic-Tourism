import React from 'react';
import { motion } from 'framer-motion';

export default function ErrorFallback({ error }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center p-8 bg-white rounded-2xl shadow-xl max-w-md mx-4"
      >
        <div className="w-24 h-24 mx-auto mb-6">
          <svg 
            className="w-full h-full text-orange-500" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Oops! Something went wrong</h2>
        <p className="text-gray-600 mb-6">{error?.message || "An unexpected error occurred"}</p>
        <button
          onClick={() => window.location.reload()}
          className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors duration-300"
        >
          Refresh Page
        </button>
      </motion.div>
    </div>
  );
}