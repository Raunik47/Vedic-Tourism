import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { usePackageDetails } from "../hooks/usePackageDetails";
import { Link, useNavigate } from "react-router-dom";

export default function PackageDetail() {
  const { id } = useParams();
  const { packageData: pkg, isLoading, error } = usePackageDetails(id);

  if (isLoading) {
    return (
      <div className="pt-16 min-h-screen bg-gradient-to-b from-amber-50 to-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-16 min-h-screen bg-gradient-to-b from-amber-50 to-white flex items-center justify-center">
        <div className="text-red-500 text-center">
          <h2 className="text-2xl font-bold mb-2">Error</h2>
          <p>{error.message}</p>
        </div>
      </div>
    );
  }

  if (!pkg) {
    return (
      <div className="pt-16 min-h-screen bg-gradient-to-b from-amber-50 to-white flex items-center justify-center">
        <div className="text-gray-600 text-center">
          <h2 className="text-2xl font-bold mb-2">Package Not Found</h2>
          <p>The package you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  // ✅ Place the enhanced JSX here
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-center text-white px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 font-[Cinzel] drop-shadow-[0_3px_6px_rgba(0,0,0,0.4)]">
              {pkg.name}
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto text-gray-100 leading-relaxed">
              {pkg.description}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 font-serif text-gray-900">
                Overview
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                {pkg.detailedDescription}
              </p>

              {/* Highlights */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-4 text-orange-600 font-serif">
                  Highlights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {pkg.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-3 bg-orange-50 p-3 rounded-xl hover:bg-orange-100 transition-all"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm">
                        ✓
                      </span>
                      <span className="text-gray-800 font-medium">
                        {highlight}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Booking Sidebar */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="sticky top-24 backdrop-blur-md bg-white/80 border border-orange-100 rounded-2xl shadow-lg p-6">
              <div className="mb-6">
                <div className="flex items-baseline justify-between">
                  <span className="text-3xl font-bold text-orange-600">
                    {pkg.price}
                  </span>
                  <span className="text-gray-400 line-through">
                    {pkg.originalPrice}
                  </span>
                </div>
                <span className="text-green-600 text-sm font-semibold">
                  Save {pkg.discount}
                </span>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2 font-serif">
                  Package Includes:
                </h4>
                <ul className="space-y-2">
                  {pkg.includes.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center text-gray-700"
                    >
                      <span className="w-5 h-5 rounded-full bg-orange-500 text-white flex items-center justify-center mr-2 text-sm">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

             <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
  <Link
    to="/booking"
    state={{ packageName: pkg.name }}
    className="block w-full"
  >
    <button
      className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-4 rounded-xl font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-300"
    >
      Book Now
    </button>
  </Link>
</motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
