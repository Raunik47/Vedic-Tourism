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
import BoatingGallery from '../components/attractions/BoatingGallery';
import { images } from '../assets';

const attractions = [
  {
    id: 1,
    title: "Kashi Vishwanath Temple",
    icon: "🕉️",
    image: images.varanasi,
    significance: "One of the 12 Jyotirlingas of Lord Shiva.",
    highlight: "The main temple of Varanasi; gold-plated spire and sacred Ganga nearby.",
    experience: "Attend the Mangala Aarti or Rudrabhishek ritual."
  },
  {
    id: 2,
    title: "Dashashwamedh Ghat",
    icon: "🌊",
    image: images.varanasi,
    significance: "The most spectacular and busiest ghat of Varanasi.",
    highlight: "Famous for the Ganga Aarti performed every evening with lamps, chants, and music.",
    experience: "Take a boat ride during sunrise or attend evening Aarti."
  },
  {
    id: 3,
    title: "Assi Ghat",
    icon: "🕯️",
    image: images.assiGhat,
    significance: "Located where the Ganga meets the Assi River.",
    highlight: "Morning yoga sessions and peaceful environment.",
    experience: "Visit early morning for sunrise views and local breakfast nearby."
  },
  {
    id: 4,
    title: "Manikarnika Ghat",
    icon: "🌅",
    image: images.manikarnikaGhat,
    significance: "The main cremation ghat, symbolizing the Hindu belief in moksha (liberation).",
    experience: "Spiritual insight into life and death rituals."
  },
  {
    id: 5,
    title: "Sarnath",
    icon: "🏯",
    image: images.sarnath,
    significance: "Where Lord Buddha gave his first sermon after enlightenment.",
    highlight: "Dhamek Stupa, Archaeological Museum, and Ashoka Pillar.",
    location: "Around 10 km from Varanasi."
  }
];


// ........for up`coming events

const events = [
  {
    id: 1,
    title: "Dev Deepawali",
    date: "November 27, 2025",
    image: images.devDeepawali,
    description: "Witness the magical evening when all 88 ghats are illuminated with over a million earthen lamps. Special Ganga Aarti and cultural performances.",
    location: "All Ghats of Varanasi",
    time: "5:00 PM onwards"
  },
  {
    id: 2,
    title: "Maha Shivaratri",
    date: "February 26, 2026",
    image: images.shivaratri,
    description: "Grand celebration at Kashi Vishwanath Temple with special pujas, abhishekams, and all-night vigil.",
    location: "Kashi Vishwanath Temple",
    time: "All Day Event"
  }
];

const boatingImages = [
  {
    id: 1,
    url: images.varanasi,
    title: "Sunrise Boat Ride",
    description: "Experience the magical morning on the Ganges"
  },
  {
    id: 2,
    url: images.manikarnikaGhat,
    title: "Evening Boat Ride",
    description: "Witness the mesmerizing Ganga Aarti from the river"
  }
];

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
              <img
                src={images.varanasi}
                alt="Varanasi Ghats"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 flex items-center justify-center text-white text-center">
                <div className="max-w-4xl px-6">
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
          {/* Add more slides */}
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
              >
                <AttractionCard attraction={attraction} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Boating Experience Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Magical <span className="text-orange-600">Boat Rides</span>
            </h2>
            <p className="text-xl text-gray-600">
              Experience the ghats from a different perspective
            </p>
          </motion.div>

          <BoatingGallery images={boatingImages} />
        </div>
      </section>

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