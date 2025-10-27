// src/components/ReviewsSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

// Import client images
import client1 from "../assets/client1.jpg";
import client2 from "../assets/client2.jpg";
import client3 from "../assets/client3.jpg";
 

const reviews = [
  {
    name: "Rajesh & Priya Sharma",
    location: "Mumbai",
    rating: 5,
    image: client1,
    package: "Char Dham Yatra",
    review: "The Char Dham Yatra was a life-changing experience. The spiritual guides were incredibly knowledgeable, and every detail was perfectly arranged. We felt divine energy throughout the journey.",
    highlights: ["Expert Guides", "Comfortable Stay", "Spiritual Atmosphere"]
  },
  {
    name: "Dr. Arvind Patel",
    location: "Delhi",
    rating: 5,
    image: client2,
    package: "Varanasi Retreat",
    review: "As a doctor, I was skeptical about spiritual tours, but Vedic Yatra changed my perspective. The Ganga Aarti experience brought tears to my eyes. Truly transformative!",
    highlights: ["Ganga Aarti", "Cultural Immersion", "Well-organized"]
  },
  {
    name: "Sunita & Family",
    location: "Bangalore",
    rating: 5,
    image: client3,
    package: "Family Pilgrimage",
    review: "Traveling with our elderly parents was worry-free. The team took excellent care of everyone's needs. Our children learned so much about our culture and traditions.",
    highlights: ["Family-friendly", "Elderly Care", "Educational"]
  },

];

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${
            index < rating ? "text-amber-500 fill-amber-500" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

export default function ReviewsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-orange-500/10 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Quote className="w-4 h-4 text-orange-600 mr-2" />
            <span className="text-orange-700 text-sm font-semibold uppercase tracking-wider">
              Heartfelt Testimonials
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Stories from Our <span className="text-orange-600">Beloved Clients</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how Vedic Yatra has transformed spiritual journeys for thousands of pilgrims
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="p-6">
                {/* Quote Icon */}
                <div className="text-orange-500/20 mb-4">
                  <Quote className="w-8 h-8" />
                </div>

                {/* Review Text */}
                <p className="text-gray-700 leading-relaxed mb-6 line-clamp-4">
                  "{review.review}"
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-orange-200"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{review.name}</h4>
                    <p className="text-sm text-gray-600">{review.location}</p>
                  </div>
                </div>

                {/* Package & Rating */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                    {review.package}
                  </span>
                  <StarRating rating={review.rating} />
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {review.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats & CTA */}
        <motion.div
          className="mt-16 bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">10,000+</div>
              <div className="text-gray-600">Pilgrims Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-gray-600">Sacred Destinations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-gray-600">Would Recommend</div>
            </div>
          </div>

          <div className="text-center mt-8">
            <motion.button
              className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read More Reviews
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}