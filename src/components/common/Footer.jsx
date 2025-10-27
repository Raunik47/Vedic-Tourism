import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Vedic Yatra
            </h3>
            <p className="text-gray-400 mb-6">
              Embark on sacred journeys through India's most spiritual destinations. 
              Discover inner peace and divine connections.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'youtube'].map((social) => (
                <motion.a
                  key={social}
                  href={`https://${social}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="sr-only">{social}</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    {/* Add appropriate social media icons */}
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['About Us', 'Our Packages', 'Testimonials', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link 
                    to="/" 
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Popular Destinations</h4>
            <ul className="space-y-4">
              {[
                'Char Dham Yatra',
                'Varanasi',
                'Rishikesh',
                'Prayagraj',
                'Golden Temple'
              ].map((destination) => (
                <li key={destination}>
                  <Link 
                    to="/" 
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                  >
                    {destination}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <span className="block">Email:</span>
                <a 
                  href="mailto:info@vedicyatra.com" 
                  className="hover:text-orange-400 transition-colors duration-300"
                >
                  info@vedicyatra.com
                </a>
              </li>
              <li>
                <span className="block">Phone:</span>
                <a 
                  href="tel:+91-1234567890" 
                  className="hover:text-orange-400 transition-colors duration-300"
                >
                  +91-1234567890
                </a>
              </li>
              <li>
                <span className="block">Address:</span>
                <address className="not-italic">
                  123 Spiritual Way,<br />
                  New Delhi, India 110001
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Vedic Yatra. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}