// src/pages/Home.jsx
import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import FeaturesSection from "../components/FeaturesSection";
import PackagesSection from "../components/PackagesSection";

import ReviewsSection from "../components/ReviewsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
  <HeroSection />
     
      <PackagesSection />
       <FeaturesSection />
     
      <ReviewsSection/>
    </div>
  );
}
