import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/src/assets/about-hero.jpg"
            alt="Temple at sunrise"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto px-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Sacred Mission
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Connecting Souls to India's spiritual heritage through mindful journeys
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Our Story */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Our Story
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Founded in 2010, Vedic Yatra emerged from a profound desire to share the transformative power of India's spiritual heritage with seekers from around the world. Our journey began with a simple idea: to create meaningful connections between travelers and the sacred sites that have drawn pilgrims for millennia.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Over the years, we've grown from a small team of passionate individuals into a trusted name in spiritual tourism, all while maintaining our core values of authenticity, respect, and devotion.
              </p>
            </div>
            <div className="relative">
              <img
                src="/src/assets/about-story.jpg"
                alt="Founders at a temple"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </motion.section>

        {/* Our Values */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Authenticity",
                description: "We preserve and present the true essence of India's spiritual traditions.",
                icon: "🕉️"
              },
              {
                title: "Respect",
                description: "We honor the sacred nature of every site and tradition we encounter.",
                icon: "🙏"
              },
              {
                title: "Service",
                description: "We serve our pilgrims with dedication and complete attention to detail.",
                icon: "💝"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <span className="text-4xl mb-4 block">{value.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Arun Sharma",
                role: "Founder & Spiritual Guide",
                image: "/src/assets/team-1.jpg"
              },
              {
                name: "Priya Patel",
                role: "Head of Operations",
                image: "/src/assets/team-2.jpg"
              },
              {
                name: "Raj Kumar",
                role: "Senior Tour Coordinator",
                image: "/src/assets/team-3.jpg"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}