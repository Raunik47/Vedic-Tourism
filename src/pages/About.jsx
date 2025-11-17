// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="font-[Poppins] min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-100 text-gray-800">
      
      {/* ✅ Hero Section - Our Sacred Mission */}
      <section className="relative h-[90vh] overflow-hidden">
        <img
          src="https://res.cloudinary.com/dht3z7n3m/image/upload/v1762976685/about_us_background_f2unm0.jpg"
          alt="Temple at sunrise"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.55]"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent"></div>

        {/* Text content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-[Playfair Display] text-5xl md:text-7xl text-white font-bold mb-6 leading-tight drop-shadow-lg"
          >
            Our Sacred Mission
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-lg md:text-2xl text-gray-200 max-w-3xl leading-relaxed drop-shadow-md"
          >
            Connecting souls to India’s divine heritage through mindful and soulful journeys.
          </motion.p>
        </div>
      </section>

      {/* ✅ Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">

       {/* 🌿 Our Story Section (Modern & Classy Design) */}
<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="relative py-24 px-6 md:px-16 overflow-hidden"
>

  {/* ✨ Static Background Image with overlay */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-fixed"
    style={{
      backgroundImage: `url('https://res.cloudinary.com/dht3z7n3m/image/upload/v1736453210/vedic_story_bg.jpg')`,
      filter: 'brightness(0.6)',
    }}
  ></div>

  {/* 🌸 Overlay gradient for readability */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white"></div>

  {/* 🌼 Content */}
  <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
    
    {/* Text Side */}
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="space-y-6 text-gray-900 bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl"
    >
      <h2 className="text-4xl md:text-5xl font-[Playfair Display] font-bold text-orange-600 mb-6">
        Our Story
      </h2>

      <p className="text-lg md:text-xl leading-relaxed font-[Poppins] text-gray-800">
        Founded in 2010, <span className="font-semibold text-orange-700">Vedic Yatra</span> emerged
        from a profound devotion to share the spiritual essence of India’s sacred heritage with the world.
        What began as a small journey of faith has now become a movement reconnecting thousands with
        their inner peace and spiritual roots.
      </p>

      <p className="text-lg md:text-xl leading-relaxed font-[Poppins] text-gray-800">
        Over the years, our mission expanded — not just to guide pilgrims, but to craft soulful experiences
        that heal, inspire, and awaken the divine within.
      </p>
    </motion.div>

    {/* Image Side */}
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="relative flex justify-center"
    >
      <img
        src="https://res.cloudinary.com/dht3z7n3m/image/upload/v1762975132/Vedic_logo_hjcxc2.jpg"
        alt="Vedic Yatra Founders"
        className="rounded-2xl shadow-2xl w-[90%] md:w-[75%] border-4 border-white"
      />
      {/* Decorative element */}
      <div className="absolute -z-10 top-6 left-6 w-[90%] h-[90%] border-4 border-orange-300 rounded-2xl"></div>
    </motion.div>

  </div>
</motion.section>


        {/* ✅ Core Values */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-[Playfair Display] text-gray-900 text-center mb-14">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Authenticity",
                description:
                  "We preserve and present the true essence of India’s spiritual traditions with integrity.",
                icon: "🕉️",
              },
              {
                title: "Respect",
                description:
                  "We honor every culture, site, and ritual with humility and devotion.",
                icon: "🙏",
              },
              {
                title: "Service",
                description:
                  "Every journey is guided by care, compassion, and attention to every sacred detail.",
                icon: "💝",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="p-8 text-center bg-white/70 backdrop-blur-lg rounded-3xl shadow-md hover:shadow-2xl border border-amber-100"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

       {/* 🌟 Team Section (Horizontal Layout like Our Story) */}
<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="relative py-24 px-6 md:px-16 overflow-hidden"
>
  {/* ✨ Background (optional static image) */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-fixed"
    style={{
      backgroundImage: `url('https://res.cloudinary.com/dht3z7n3m/image/upload/v1736453210/vedic_story_bg.jpg')`,
      filter: 'brightness(0.7)',
    }}
  ></div>

  {/* Subtle overlay for readability */}
  <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>

  {/* 💫 Title */}
  <div className="relative text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-[Playfair Display] font-bold text-gray-900">
      Meet Our Team
    </h2>
    <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
  </div>

  {/* 👥 Team Members */}
  <div className="relative flex flex-col space-y-24 max-w-6xl mx-auto z-10">
    {[
      {
        name: "Brajesh Singh",
        role: "Founder & Spiritual Guide",
        image: "https://res.cloudinary.com/dht3z7n3m/image/upload/v1762981953/founder_civqx4.jpg",
        direction: "normal",
      },
      {
        name: "Raunik Singh",
        role: "Head of Operations",
        image: "https://res.cloudinary.com/dht3z7n3m/image/upload/v1762982318/headss_ymdkuk.jpg",
        direction: "reverse",
      },
     
      {
        name: "Priyanshu  Singh",
        role: "Head of Operations",
        image: "https://res.cloudinary.com/dht3z7n3m/image/upload/v1762982318/headss_ymdkuk.jpg",
        direction: "normal",
      },
    ].map((member, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
        className={`flex flex-col md:flex-row ${
          member.direction === "reverse" ? "md:flex-row-reverse" : ""
        } items-center gap-12 md:gap-16`}
      >
        {/* Left Side — Text */}
        <div className="md:w-1/2 space-y-4 text-center md:text-left bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-lg">
          <h3 className="text-3xl font-[Playfair Display] font-bold text-orange-700">
            {member.name}
          </h3>
          <p className="text-lg font-[Poppins] text-gray-700 tracking-wide">
            {member.role}
          </p>
          <p className="text-md font-[Poppins] text-gray-600 leading-relaxed">
            {member.name.split(" ")[0]} has been an integral part of Vedic Yatra’s
            vision, ensuring every traveler’s journey is guided with compassion,
            devotion, and attention to detail.
          </p>
        </div>

        {/* Right Side — Image */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="md:w-1/2 flex justify-center relative"
        >
          <img
  src={member.image}
  alt={member.name}
  className="rounded-3xl shadow-2xl w-[65%] md:w-[45%] object-cover border-4 border-white"
/>

          {/* Decorative Frame */}
          <div className="absolute -z-10 top-5 left-5 w-[85%] md:w-[70%] h-full border-4 border-orange-300 rounded-3xl"></div>
        </motion.div>
      </motion.div>
    ))}
  </div>
</motion.section>

      </div>
    </div>
  );
}
