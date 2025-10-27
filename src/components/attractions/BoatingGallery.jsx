import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function BoatingGallery({ images }) {
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
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <motion.div
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
              whileHover={{ y: -8 }}
            >
              <div className="relative h-64">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.description}</p>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}