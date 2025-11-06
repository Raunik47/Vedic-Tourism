import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const poojaList = [
  {
    id: 1,
    name: "Aarti",
    description: "Morning and evening Aarti with holy chants",
    price: 251,
    time: "6:00 AM & 7:00 PM",
    includes: ["Temple priest services", "Aarti thali", "Prasad", "Priority entry"]
  },
  {
    id: 2,
    name: "Rudrabhishek",
    description: "Offering sacred water and flowers to Lord Shiva",
    price: 501,
    time: "7:30 AM - 9:30 AM",
    includes: ["Special puja materials", "Priest assistance", "Sacred thread", "Prasad box"]
  },
  {
    id: 3,
    name: "Sugam Darshan",
    description: "Quick entry for devotees to seek blessings",
    price: 150,
    time: "5:00 AM - 9:00 PM",
    includes: ["Priority queue access", "Temple guide", "Locker facility"]
  },
  {
    id: 4,
    name: "Mahadev Pooja",
    description: "Special prayer ritual performed by temple priests",
    price: 1001,
    time: "8:00 AM - 10:00 AM",
    includes: ["Complete puja kit", "Vedic chanting", "Flower offerings", "Special prasad"]
  }
];

function PoojaAccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className="mb-6 relative">
      {/* Decorative Border */}
      <div className="absolute inset-0 border-2 border-orange-100 opacity-50 rounded-lg"></div>
      
      <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 relative">
        <button
          className="w-full p-6 flex items-center justify-between hover:bg-orange-50/50 transition-colors duration-300 rounded-lg focus:outline-none group"
          onClick={onToggle}
        >
          <div className="flex items-center gap-6">
            {/* Decorative Circle */}
            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
              <div className="text-3xl transform group-hover:scale-110 transition-transform duration-300">🕉️</div>
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-serif text-gray-900">{item.name}</h3>
              <div className="flex items-center gap-2 text-orange-700">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="font-medium">{item.time}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right">
              <span className="block text-sm text-gray-500">Starting from</span>
              <span className="text-2xl font-bold text-orange-600">₹{item.price}</span>
            </div>
            <div className={`w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center transform transition-transform duration-300 ${
              isOpen ? 'rotate-180 bg-orange-200' : ''
            }`}>
              <svg
                className="w-5 h-5 text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="p-8 pt-0 border-t border-orange-100">
                {/* Description with Decorative Elements */}
                <div className="relative p-6 bg-orange-50/50 rounded-lg mb-6">
                  <div className="absolute top-0 right-0 w-12 h-12 opacity-10">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0NSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=" alt="" />
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">{item.description}</p>
                </div>

                {/* Inclusions */}
                <div className="mb-8">
                  <h4 className="text-lg font-serif text-orange-800 mb-4">Sacred Offerings Include:</h4>
                  <ul className="grid grid-cols-2 gap-4">
                    {item.includes.map((inclusion, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mr-3 shrink-0">
                          <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {inclusion}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Book Now Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-lg font-serif text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Book Sacred Ceremony
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function DarshanPooja() {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 relative bg-[#FDF7E4]">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Om Symbol Watermark */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
          <svg width="400" height="400" viewBox="0 0 100 100" className="text-orange-900">
            <path d="M50,0 C22.4,0 0,22.4 0,50 s22.4,50 50,50 s50-22.4 50-50 S77.6,0 50,0 M50,90 C27.9,90 10,72.1 10,50 S27.9,10 50,10 s40,17.9 40,40 S72.1,90 50,90" />
            <path d="M41.5,29.6 c-2.1,1.2-3.8,2.9-5,5 c-1.2,2.1-1.8,4.4-1.8,6.9 c0,2.5 0.6,4.8 1.8,6.9 c1.2,2.1 2.9,3.8 5,5" />
            <path d="M58.5,29.6 c2.1,1.2 3.8,2.9 5,5 c1.2,2.1 1.8,4.4 1.8,6.9 c0,2.5-0.6,4.8-1.8,6.9 c-1.2,2.1-2.9,3.8-5,5" />
            <path d="M50,10 c-22.1,0-40,17.9-40,40 s17.9,40 40,40 s40-17.9 40-40 S72.1,10 50,10" />
          </svg>
        </div>
        
        {/* Mandala Corners */}
        <div className="absolute top-0 left-0 w-40 h-40 opacity-10 transform -translate-x-1/2 -translate-y-1/2">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0NSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIzNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIyNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=" alt="" className="w-full h-full" />
        </div>
        <div className="absolute top-0 right-0 w-40 h-40 opacity-10 transform translate-x-1/2 -translate-y-1/2 rotate-90">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0NSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIzNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIyNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=" alt="" className="w-full h-full" />
        </div>
      </div>

      {/* Content Container with Sacred Border */}
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="absolute inset-0 border-2 border-orange-200 opacity-50 m-4 rounded-lg"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          {/* Decorative Divider */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
            <div className="mx-4 text-4xl">🕉️</div>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
            श्री दर्शन और <span className="text-orange-600">पूजा</span>
          </h2>
          <h3 className="text-2xl md:text-3xl text-gray-800 mb-4">
            Darshan & Pooja
          </h3>
          <p className="text-xl text-gray-700">
            Experience divine blessings through sacred rituals at Vishwanath Temple
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {poojaList.map((item) => (
            <PoojaAccordionItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => toggleAccordion(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}