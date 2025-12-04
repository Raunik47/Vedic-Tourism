import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import AttractionCard from '../components/attractions/AttractionCard';
import EventCard from '../components/attractions/EventCard';
import DarshanPooja from '../components/attractions/DarshanPooja';
import { attractions, events } from '../data';


export default function TopAttractions() {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Carousel */}
      <div className="relative h-[70vh]">
        <Swiper
          modules={[Pagination, Navigation, Autoplay, EffectFade]}
          effect="fade"
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 5000 }}
          className="h-full"
        >
          <SwiperSlide>
            <div className="relative h-full">
              {/* Background image */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dht3z7n3m/image/upload/v1762976685/about_us_background_f2unm0.jpg"
                  className="absolute inset-0 w-screen h-full object-cover"
                  style={{ objectPosition: '80% 30%' }}
                  alt="Varanasi background"
                />
              </div>

              {/* Dark overlay to keep content readable */}
              <div className="absolute inset-0 bg-black/30 z-10" />

              <div className="absolute inset-0 flex items-center justify-center text-white text-center z-20">
                <div className="max-w-4xl px-6 pt-12">
                  <h1 className="text-5xl md:text-7xl font-bold mb-4">
                    Discover Varanasi
                  </h1>
                  <p className="text-xl md:text-2xl">
                    Experience the spiritual heart of India
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Top Attractions Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Top Attractions in <span className="text-orange-600">Varanasi</span>
            </h2>
            <p className="text-xl text-gray-600">
              Explore the most sacred and historically significant sites
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((attraction, index) => (
              <motion.div
                key={attraction.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full"
              >
                <AttractionCard attraction={attraction} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Darshan & Pooja Section */}
      <DarshanPooja />

      {/* Upcoming Events Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Upcoming <span className="text-orange-600">Events</span>
            </h2>
            <p className="text-xl text-gray-600">
              Don't miss these spectacular celebrations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <EventCard event={event} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
