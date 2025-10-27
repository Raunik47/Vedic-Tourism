// src/App.jsx
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import LoadingSpinner from "./components/common/LoadingSpinner";
import ErrorFallback from "./components/common/ErrorFallback";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

// Lazy load pages for better performance
const Home = React.lazy(() => import("./pages/Home"));
const Packages = React.lazy(() => import("./pages/Packages"));
const PackageDetail = React.lazy(() => import("./pages/PackageDetail"));
const Booking = React.lazy(() => import("./pages/Booking"));
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));
const TopAttractions = React.lazy(() => import("./pages/TopAttractions"));

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/packages" element={<Packages />} />
                <Route path="/package/:id" element={<PackageDetail />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/attractions" element={<TopAttractions />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
