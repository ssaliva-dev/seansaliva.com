import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ImageGallery({ images }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const showNext = () => {
    setSelectedIndex((current) =>
      current !== null && current < images.length - 1 ? current + 1 : current
    );
  };

  const showPrevious = () => {
    setSelectedIndex((current) => (current !== null && current > 0 ? current - 1 : current));
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className="columns-1 gap-6 md:columns-2 lg:columns-3">
        {images.map((image, index) => (
          <motion.button
            key={image.url || index}
            type="button"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group mb-6 w-full break-inside-avoid overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900/80 text-left shadow-xl shadow-black/20 transition-transform duration-300 hover:-translate-y-1"
            onClick={() => openLightbox(index)}
            aria-label={image.title ? `Open ${image.title}` : `Open gallery image ${index + 1}`}
          >
            <div className="relative overflow-hidden">
              <img
                src={image.url}
                alt={image.title || `Gallery image ${index + 1}`}
                loading="lazy"
                decoding="async"
                className="block w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
            {image.title && (
              <div className="border-t border-slate-700/60 px-4 py-3">
                <h3 className="text-sm font-medium tracking-wide text-white/90">
                  {image.title}
                </h3>
              </div>
            )}
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white hover:text-slate-900 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            {selectedIndex > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showPrevious();
                }}
                className="absolute left-4 p-2 rounded-full bg-white/10 text-white hover:bg-white hover:text-slate-900 transition-colors z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Next Button */}
            {selectedIndex < images.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                className="absolute right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white hover:text-slate-900 transition-colors z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Image */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-7xl max-h-[90vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selectedIndex].url}
                alt={images[selectedIndex].title || `Gallery image ${selectedIndex + 1}`}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
              {images[selectedIndex].title && (
                <p className="text-white text-center mt-4 text-lg">
                  {images[selectedIndex].title}
                </p>
              )}
            </motion.div>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
              {selectedIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
