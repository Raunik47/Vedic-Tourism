import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function BookingConfirmation() {
  const location = useLocation();
  const booking = location.state?.booking || null;

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-amber-50 to-white flex items-center justify-center">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-xl text-center">
        <h1 className="text-3xl font-bold text-orange-600 mb-4">Booking Confirmed</h1>
        <p className="text-gray-700 mb-6">Thank you — your booking request has been received.</p>

        {booking ? (
          <div className="text-left bg-gray-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-gray-500">Package</p>
            <p className="font-medium mb-2">{booking.packageType}</p>
            <p className="text-sm text-gray-500">Start Date</p>
            <p className="font-medium mb-2">{booking.startDate || 'Not specified'}</p>
            <p className="text-sm text-gray-500">Travelers</p>
            <p className="font-medium">{booking.travelers}</p>
          </div>
        ) : null}

        <div className="flex justify-center gap-4">
          <Link to="/packages" className="px-6 py-2 bg-orange-500 text-white rounded-full">View Packages</Link>
          <Link to="/" className="px-6 py-2 border border-orange-500 text-orange-600 rounded-full">Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
