import React from "react";
import { FaWhatsapp, FaPhoneAlt, FaInstagram } from "react-icons/fa";

export default function FloatingActionButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      <a
        href="https://wa.me/7970942680"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-green-500 shadow-lg flex items-center justify-center text-white text-lg transform transition-transform hover:scale-105"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="w-5 h-5" />
      </a>

      <a
        href="tel:7549393809"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-blue-500 shadow-lg flex items-center justify-center text-white text-lg transform transition-transform hover:scale-105"
        aria-label="Call"
      >
        <FaPhoneAlt className="w-4 h-4" />
      </a>

      <a
        href="https://www.instagram.com/your_profile_here"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-lg flex items-center justify-center text-white text-lg transform transition-transform hover:scale-105"
        aria-label="Instagram"
      >
        <FaInstagram className="w-5 h-5" />
      </a>
    </div>
  );
}
