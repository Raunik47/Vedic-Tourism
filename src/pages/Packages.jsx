import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { singlePackages, comboPackages } from "../data/packages";

export default function PackagesPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-amber-50 to-white">

      
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 font-[Cinzel]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          ✨ Our <span className="text-orange-600">Spiritual Packages</span>
        </motion.h1>

        {/* 🌸 Single Place Section */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-orange-700 font-serif border-l-4 border-orange-500 pl-3">
            Single Place Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {singlePackages.map((pkg) => (
              <motion.div
                key={pkg.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
                whileHover={{ scale: 1.05, y: -8 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative h-56 w-full overflow-hidden bg-gray-200">
                  <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold text-orange-600">
                    {pkg.duration}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{pkg.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow leading-relaxed">{pkg.description}</p>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <span className="text-2xl font-bold text-orange-600">{pkg.price}</span>
                    <Link
                      to={`/package/${pkg.id}`}
                      className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-lg hover:from-orange-600 hover:to-amber-600 hover:shadow-xl transition-all duration-300"
                    >
                      Explore
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 🕉️ Combo Packages Section */}
        <motion.div variants={fadeUp} initial="hidden" animate="show">
          <h2 className="text-3xl font-bold mb-8 text-orange-700 font-serif border-l-4 border-orange-500 pl-3">
            Combo Packages (3+ Destinations)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {comboPackages.map((pkg) => (
              <motion.div
                key={pkg.id}
                className="bg-gradient-to-br from-orange-50 via-white to-amber-50 border-2 border-orange-100 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
                whileHover={{ scale: 1.04, y: -8 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="relative h-64 w-full overflow-hidden bg-gray-200">
                  <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-sm font-bold text-orange-600 flex items-center gap-2">
                    ⭐ {pkg.duration}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{pkg.name}</h3>
                  <p className="text-gray-700 text-sm mb-6 flex-grow leading-relaxed">{pkg.description}</p>
                  <div className="flex justify-between items-center pt-6 border-t-2 border-orange-100">
                    <span className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">{pkg.price}</span>
                    <Link
                      to={`/package/${pkg.id}`}
                      className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-lg hover:from-orange-600 hover:to-amber-600 hover:shadow-xl transition-all duration-300"
                    >
                      Explore
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
