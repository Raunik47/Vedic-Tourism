import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add form submission logic here
    setTimeout(() => {
      setIsSubmitting(false);
      // Add success message handling
    }, 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in <span className="text-orange-600">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our spiritual journeys? We're here to help you plan your sacred adventure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                {/* Email */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">Email Us</h3>
                  <a 
                    href="mailto:info@vedicyatra.com"
                    className="text-orange-600 hover:text-orange-700 transition-colors duration-300"
                  >
                    info@vedicyatra.com
                  </a>
                </div>

                {/* Phone */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">Call Us</h3>
                  <a 
                    href="tel:+91-1234567890"
                    className="text-orange-600 hover:text-orange-700 transition-colors duration-300"
                  >
                    +91-1234567890
                  </a>
                </div>

                {/* Address */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">Visit Us</h3>
                  <address className="not-italic text-gray-600">
                    123 Spiritual Way,<br />
                    New Delhi, India 110001
                  </address>
                </div>

                {/* Hours */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">Business Hours</h3>
                  <p className="text-gray-600">
                    Monday - Saturday<br />
                    9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-300"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-300"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-300"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-300"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-300"
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300 disabled:bg-orange-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-gray-200 rounded-2xl h-[400px] overflow-hidden">
            {/* Add your map component here */}
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <span className="text-gray-600">Map will be displayed here</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}