// src/components/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";
import video from "../assets/cover-video.mov";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-10">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Video Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>

        {/* Additional Pattern Overlay */}
        {/* <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}
        ></div> */}
      </div>

      {/* Animated Orbs - Adjusted for dark background */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-20 h-20 bg-amber-400 rounded-full blur-xl opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-orange-500 rounded-full blur-xl opacity-15"
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-16 h-16 bg-yellow-300 rounded-full blur-lg opacity-10"
        animate={{
          scale: [1, 1.4, 1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Main Content */}
      <div className="relative text-center px-6 max-w-4xl mx-auto z-10">
        {/* Badge - Updated for dark background */}
        <motion.div
          className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="w-2 h-2 bg-amber-400 rounded-full mr-2 animate-pulse"></span>
          <span className="text-white text-sm font-medium uppercase tracking-wider">
            Spiritual Journeys Await
          </span>
        </motion.div>

        {/* Main Heading - Updated for video background */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="bg-gradient-to-r from-amber-200 via-orange-200 to-yellow-200 bg-clip-text text-transparent drop-shadow-2xl">
            Vedic
          </span>
          <span className="bg-gradient-to-r from-yellow-200 via-amber-200 to-orange-200 bg-clip-text text-transparent ml-2 md:ml-4 drop-shadow-2xl">
            Yatra
          </span>
        </motion.h1>

        {/* Subheading - Updated for better readability on video */}
        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-white mb-8 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Embark on sacred journeys through India's most spiritual destinations.
          <br className="hidden md:block" />
          Discover inner peace and divine connections.
        </motion.p>

        {/* CTA Buttons - Enhanced for dark background */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="group relative bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-amber-600 hover:to-orange-600 shadow-2xl hover:shadow-amber-500/25 backdrop-blur-sm"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(245, 158, 11, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center">
              Begin Your Journey
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
          </motion.button>

          <motion.button
            className="group border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 backdrop-blur-sm hover:border-white/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center">
              Explore Destinations
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </motion.button>
        </motion.div>

        {/* Stats - Updated for dark background */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { number: "50+", label: "Sacred Sites" },
            { number: "10K+", label: "Pilgrims Served" },
            { number: "15+", label: "Years Experience" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center backdrop-blur-sm bg-white/5 rounded-2xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.1)"
              }}
            >
              <div className="text-2xl md:text-3xl font-bold text-amber-300 mb-1 drop-shadow-lg">{stat.number}</div>
              <div className="text-sm text-gray-200 uppercase tracking-wider font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

     
    </section>
  );
}