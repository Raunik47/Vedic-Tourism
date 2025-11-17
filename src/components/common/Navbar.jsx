import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const navigation = [
  { name: "Home", path: "/" },
  { name: "Packages", path: "/packages" },
  { name: "Attractions", path: "/attractions" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-lg fixed w-full top-0 z-50 border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Brand Section */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.08, rotate: 2 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full blur-sm opacity-60 group-hover:opacity-80 transition duration-300"></div>
              <img
                src="https://res.cloudinary.com/dht3z7n3m/image/upload/v1762975132/Vedic_logo_hjcxc2.jpg"
                alt="Vedic Yatra Logo"
                className="relative w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-white shadow-md"
              />
            </motion.div>
            <motion.span
              className="text-3xl md:text-4xl font-extrabold tracking-wide font-[Playfair_Display] bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent drop-shadow-sm"
              whileHover={{ scale: 1.03 }}
            >
              Vedic Yatra
            </motion.span>
          </Link>

          {/* Navigation (visible on all sizes) */}
          <div className="flex items-center space-x-4 md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`${
                  location.pathname === item.path
                    ? "text-orange-600 font-semibold border-b-2 border-orange-600"
                    : "text-gray-700 hover:text-orange-600"
                } px-3 py-2 text-sm font-medium transition-all duration-300`}
              >
                {item.name}
              </Link>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 md:px-6 py-2 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300"
            >
              Book Now
            </motion.button>
          </div>
          
          {/* removed hamburger toggle - navigation links are visible on mobile now */}
        </div>
      </div>
        {/* Mobile links repeated below to ensure they are easily tappable on small screens */}
        <div className="md:hidden px-4 pb-2 bg-white/90 backdrop-blur-md border-t border-orange-100">
          <div className="flex items-center justify-center gap-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium ${
                  location.pathname === item.path
                    ? "text-orange-600 font-semibold"
                    : "text-gray-700 hover:text-orange-600"
                } px-2 py-2`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
    </nav>
  );
}
