import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { containerVariants, cardVariants, images } from '../constants';


const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setActiveIndex(index);
  const closeLightbox = () => setActiveIndex(null);

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((i) => (i === null ? null : (i + 1) % images.length));
  };

  return (
    <section
      id="portfolio"
      className="min-h-screen bg-slate-50 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto w-full space-y-12 sm:space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 max-w-3xl mx-auto"
        >
          <span className="text-sm uppercase tracking-widest text-blue-600 font-semibold">
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Gallery
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-2">
            A snapshot of the systems we've designed, installed, and delivered
            across homes and businesses.
          </p>
        </motion.div>

        {/* Masonry Gallery */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 [column-fill:balance]"
        >
          {images.map((src, index) => (
            <motion.button
              key={index}
              variants={cardVariants}
              onClick={() => openLightbox(index)}
              className="group relative block w-full mb-4 sm:mb-6 rounded-2xl overflow-hidden bg-slate-200 break-inside-avoid cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label={`Open image ${index + 1}`}
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-medium tracking-wide px-4 py-2 rounded-full border border-white/40 backdrop-blur-sm">
                  View
                </span>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev */}
            <button
              onClick={showPrev}
              className="absolute left-2 sm:left-6 z-10 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            {/* Image */}
            <motion.img
              key={activeIndex}
              src={images[activeIndex]}
              alt={`Gallery image ${activeIndex + 1}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-full max-h-[85vh] w-auto h-auto rounded-xl shadow-2xl object-contain"
            />

            {/* Next */}
            <button
              onClick={showNext}
              className="absolute right-2 sm:right-6 z-10 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-7 h-7" />
            </button>

            {/* Counter */}
            <span className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium">
              {activeIndex + 1} / {images.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;