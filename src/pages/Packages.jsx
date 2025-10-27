import React from 'react';
import { motion } from 'framer-motion';
import PackageCard from '../components/packages/PackageCard';
import { usePackages } from '../hooks/usePackages';

export default function Packages() {
  const { packages, isLoading, error } = usePackages();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Sacred <span className="text-orange-600">Journey Packages</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our carefully curated selection of spiritual journeys, each designed to provide 
            a deep connection with India's sacred heritage.
          </p>
        </motion.div>

        {/* Filters Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Add filters here */}
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <PackageCard package={pkg} />
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Add pagination here */}
        </motion.div>
      </div>
    </div>
  );
}