import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'Packages', path: '/packages' },
  { name: 'Attractions', path: '/attractions' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <motion.span 
                className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                Vedic Yatra
              </motion.span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`${
                  location.pathname === item.path
                    ? 'text-orange-500 border-b-2 border-orange-500'
                    : 'text-gray-700 hover:text-orange-500'
                } px-3 py-2 text-sm font-medium transition-colors duration-300`}
              >
                {item.name}
              </Link>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-orange-600 transition-colors duration-300"
            >
              Book Now
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-500 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        initial="closed"
        animate={isMobileMenuOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 }
        }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`${
                location.pathname === item.path
                  ? 'bg-orange-50 text-orange-500'
                  : 'text-gray-700 hover:bg-orange-50 hover:text-orange-500'
              } block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <button className="w-full bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-orange-600 transition-colors duration-300">
            Book Now
          </button>
        </div>
      </motion.div>
    </nav>
  );
}