// src/components/ImageCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade, Parallax } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/parallax";

import img1 from "../assets/img1.avif";
import img2 from "../assets/img2.avif";
import img3 from "../assets/img3.avif";

const images = [
  {
    src: img1,
    alt: "Varanasi Ghat",
    title: "Varanasi Ghat",
    description: "The spiritual heart of India along the sacred Ganges River"
  },
  {
    src: img2,
    alt: "ishikesh Ganga Aarti",
    title: "Rishikesh Ganga Aarti",
    description: "Divine evening ceremony on the banks of Mother Ganga"
  },
  {
    src: img3,
    alt: "Kedarnath Temple",
    title: "Kedarnath Temple",
    description: "Ancient shrine nestled in the majestic Himalayas"
  },
];

export default function ImageCarousel() {
  return (
    <section className="my-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto"> {/* Reduced from max-w-7xl */}
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          speed={800}
          autoplay={{
            delay: 4000, // Slightly faster autoplay
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            renderBullet: function (index, className) {
              return `<span class="${className} !w-2 !h-2 !bg-white/80 !opacity-60 hover:!opacity-100 !transition-all !duration-300"></span>`;
            }
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          parallax={true}
          modules={[Autoplay, Pagination, Navigation, EffectFade, Parallax]}
          className="rounded-2xl shadow-xl relative group" // Reduced shadow and border radius
        >
          {/* Custom Navigation Buttons - Smaller */}
          <div className="swiper-button-next !text-white !w-10 !h-10 !right-4 hover:!scale-110 !transition-transform !duration-300 after:!text-xl after:!font-bold group-hover:opacity-100 opacity-0 transition-opacity duration-300" />
          <div className="swiper-button-prev !text-white !w-10 !h-10 !left-4 hover:!scale-110 !transition-transform !duration-300 after:!text-xl after:!font-bold group-hover:opacity-100 opacity-0 transition-opacity duration-300" />

          {/* Parallax Background */}
          <div
            slot="container-start"
            className="parallax-bg absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl"
            data-swiper-parallax="-20%"
          />

          {images.map((img, index) => (
            <SwiperSlide key={index} className="relative">
              {/* Background Image with Overlay */}
              <div
                className="absolute inset-0 bg-black/30 rounded-2xl" // Reduced overlay opacity
                data-swiper-parallax="-18%"
              />

              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl" // Reduced height significantly
                data-swiper-parallax="-12%"
              />

              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-6 max-w-3xl"> {/* Reduced max-width */}
                  <div
                    className="mb-4" // Reduced margin
                    data-swiper-parallax-y="-80"
                    data-swiper-parallax-duration="600"
                  >
                    <h2
                      className="text-2xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent drop-shadow-lg" // Smaller text
                      data-swiper-parallax-y="-100"
                      data-swiper-parallax-duration="800"
                    >
                      {img.title}
                    </h2>
                    <p
                      className="text-lg md:text-xl text-gray-200 font-light max-w-xl mx-auto leading-relaxed" // Smaller text
                      data-swiper-parallax-y="-80"
                      data-swiper-parallax-duration="1000"
                    >
                      {img.description}
                    </p>
                  </div>

                  {/* CTA Button - Smaller */}
                  <div
                    className="mt-6" // Reduced margin
                    data-swiper-parallax-y="-60"
                    data-swiper-parallax-duration="1200"
                  >
                    <button className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-6 py-3 rounded-full font-semibold text-base hover:bg-white/30 hover:scale-105 transform transition-all duration-300 hover:shadow-lg">
                      Explore More
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Progress Bar - Smaller */}
        <div className="mt-4 max-w-5xl mx-auto"> {/* Reduced margin and max-width */}
          <div className="h-1 bg-gray-200/20 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full swiper-progress-bar"></div>
          </div>
        </div>
      </div>
    </section>
  );
}