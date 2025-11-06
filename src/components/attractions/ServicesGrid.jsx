import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const servicesList = [
  {
    id: 1,
    title: "Temple Tours",
    icon: "🕉️",
    description: "Guided visits to sacred temples with expert explanations of rituals and traditions",
    features: ["Expert spiritual guides", "Traditional ritual participation", "Sacred history insights"]
  },
  {
    id: 2,
    title: "Ganga Aarti Experience",
    icon: "🪔",
    description: "VIP arrangements for the divine Ganga Aarti ceremony with special seating",
    features: ["Premium viewing location", "Traditional prasad", "Cultural explanation"]
  },
  {
    id: 3,
    title: "Spiritual Retreats",
    icon: "🧘",
    description: "Immersive spiritual experiences including meditation and yoga sessions",
    features: ["Meditation sessions", "Yoga classes", "Spiritual discussions"]
  },
  {
    id: 4,
    title: "Sacred Boat Tours",
    icon: "🚣",
    description: "Morning and evening boat rides along the sacred Ganges with cultural commentary",
    features: ["Sunrise/Sunset tours", "Cultural storytelling", "Photography opportunities"]
  }
];

export default function ServicesGrid() {
  return (
    <div className="relative">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        pagination={{ clickable: true }}
        navigation
        className="pb-12"
      >
        {servicesList.map((service) => (
          <SwiperSlide key={service.id}>
            <motion.div
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ y: -8 }}
            >
              <div className="p-8">
                <div className="text-6xl mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-orange-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  className="w-full mt-8 bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}