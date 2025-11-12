import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AttractionCard({ attraction }) {
  const src = attraction.image;
  const isVideo = typeof src === 'string' && /\.(mp4|webm|ogg)(\?.*)?$/.test(src) || (typeof src === 'string' && src.includes('/video/'));
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const longDescription = attraction.longDescription || attraction.details || attraction.significance || attraction.experience || attraction.highlight || 'No additional details available.';

  return (
    <>
      <motion.article
        className="h-full flex flex-col bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl border border-transparent hover:border-orange-100 overflow-hidden"
        whileHover={{ translateY: -6 }}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        {/* Media */}
        <div className="relative h-64 w-full bg-gray-100">
          {isVideo ? (
            <video
              src={src}
              className="absolute inset-0 w-full h-full object-cover object-center"
              autoPlay
              muted
              loop
              playsInline
              aria-hidden="true"
            />
          ) : (
            <img
              src={src}
              alt={attraction.title}
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute left-4 bottom-4 z-20">
            <div className="flex items-center gap-3">
              <div className="text-3xl bg-white/20 rounded-full p-2">{attraction.icon}</div>
              <h3 className="text-white text-lg md:text-xl font-semibold drop-shadow">{attraction.title}</h3>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="p-5 flex flex-col gap-4 flex-grow">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-orange-600 font-medium">{attraction.significance ? 'Significance' : ''}</p>
              <h4 className="text-lg font-semibold text-gray-900 mt-1">{attraction.highlight || attraction.title}</h4>
            </div>
            <div className="text-right">
              {attraction.location && <p className="text-sm text-gray-500">{attraction.location}</p>}
            </div>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed flex-grow">{attraction.significance || attraction.experience || attraction.highlight}</p>

          <div className="flex items-center gap-3">
            <button onClick={() => setOpen(true)} className="px-4 py-2 bg-white text-orange-600 rounded-lg font-semibold shadow hover:scale-105 transition">Learn more</button>
            <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold shadow hover:shadow-lg transition">Book</button>
          </div>
        </div>
      </motion.article>

      {/* Modal / Drawer for Learn more */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <motion.div
            className="relative bg-white rounded-xl shadow-2xl w-11/12 max-w-3xl mx-auto overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 h-48 md:h-auto bg-gray-100">
                {isVideo ? (
                  <video src={src} className="w-full h-full object-cover" autoPlay muted loop playsInline />
                ) : (
                  <img src={src} alt={attraction.title} className="w-full h-full object-cover" />
                )}
              </div>
              <div className="p-6 md:w-1/2">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-bold">{attraction.title}</h2>
                    {attraction.location && <p className="text-sm text-gray-500 mt-1">{attraction.location}</p>}
                  </div>
                  <button onClick={() => setOpen(false)} aria-label="Close" className="text-gray-400 hover:text-gray-700">✕</button>
                </div>

                <div className="mt-4 space-y-3 text-gray-700 text-sm">
                  <p>{longDescription}</p>
                  {attraction.history && (
                    <div>
                      <h4 className="font-semibold">History</h4>
                      <p className="text-sm text-gray-600">{attraction.history}</p>
                    </div>
                  )}
                  {attraction.tips && (
                    <div>
                      <h4 className="font-semibold">Visitor tips</h4>
                      <p className="text-sm text-gray-600">{attraction.tips}</p>
                    </div>
                  )}
                </div>

                <div className="mt-6 flex gap-3">
                  <a href="#" className="px-4 py-2 bg-orange-600 text-white rounded-lg">Book now</a>
                  <button onClick={() => setOpen(false)} className="px-4 py-2 border rounded-lg">Close</button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}