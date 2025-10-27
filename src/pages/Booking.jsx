import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Booking() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    packageType: '',
    startDate: '',
    travelers: 1,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequirements: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add booking submission logic here
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/booking-confirmation');
    }, 2000);
  };

  const nextStep = () => setCurrentStep(prev => prev + 1);
  const prevStep = () => setCurrentStep(prev => prev - 1);

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book Your <span className="text-orange-600">Sacred Journey</span>
          </h1>
          <p className="text-xl text-gray-600">
            Complete your booking in a few simple steps
          </p>
        </motion.div>

        {/* Progress Steps */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex justify-between items-center relative">
            {/* Progress Line */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-200">
              <div
                className="h-full bg-orange-500 transition-all duration-300"
                style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
              />
            </div>

            {/* Steps */}
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full ${
                  step <= currentStep ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-500'
                } transition-colors duration-300`}
              >
                {step}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
            {/* Step 1: Package Selection */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <label htmlFor="packageType" className="block text-sm font-medium text-gray-700 mb-2">
                    Select Package
                  </label>
                  <select
                    id="packageType"
                    name="packageType"
                    value={formData.packageType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Choose a package</option>
                    <option value="char-dham">Char Dham Yatra</option>
                    <option value="varanasi">Varanasi Spiritual Retreat</option>
                    <option value="rishikesh">Rishikesh Yoga Journey</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-2">
                    Start Date
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="travelers" className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Travelers
                  </label>
                  <input
                    type="number"
                    id="travelers"
                    name="travelers"
                    value={formData.travelers}
                    onChange={handleChange}
                    min="1"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Personal Information */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>

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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

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
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>
            )}

            {/* Step 3: Review & Confirm */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Review Your Booking</h3>
                
                <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Package</p>
                      <p className="font-medium">{formData.packageType}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Start Date</p>
                      <p className="font-medium">{formData.startDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Travelers</p>
                      <p className="font-medium">{formData.travelers}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Name</p>
                      <p className="font-medium">{`${formData.firstName} ${formData.lastName}`}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="specialRequirements" className="block text-sm font-medium text-gray-700 mb-2">
                    Special Requirements
                  </label>
                  <textarea
                    id="specialRequirements"
                    name="specialRequirements"
                    value={formData.specialRequirements}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  ></textarea>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {currentStep > 1 && (
                <motion.button
                  type="button"
                  onClick={prevStep}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-2 border-2 border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition-colors duration-300"
                >
                  Previous
                </motion.button>
              )}
              
              {currentStep < 3 ? (
                <motion.button
                  type="button"
                  onClick={nextStep}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="ml-auto px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-300"
                >
                  Next
                </motion.button>
              ) : (
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="ml-auto px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-300 disabled:bg-orange-300"
                >
                  {isSubmitting ? 'Processing...' : 'Confirm Booking'}
                </motion.button>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}