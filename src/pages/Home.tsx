import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { containerVariants, itemVariants, stats } from '../constants';

const backgroundImages = [
  '/images/network.png',
  '/images/wifi-installation.jpeg',
  '/images/security-cameras.jpeg',
];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="home"
      className="relative min-h-screen text-slate-800 flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden py-20"
    >
      {/* Background Carousel */}
      <div className="absolute inset-0 -z-10">
        <AnimatePresence>
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImages[currentImage]})` }}
          />
        </AnimatePresence>

        {/* Dark/light overlay for readability */}
        <div className="absolute inset-0 bg-white/75 backdrop-blur-[2px]" />
      </div>

      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl mx-auto flex flex-col items-center text-center space-y-8 md:space-y-10"
      >
        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-blue-600 sm:text-blue-500 md:text-blue-700 lg:text-blue-800"
        >
          AVIS DIGITAL SOLUTIONS
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="max-w-xl text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-normal"
        >
          Smart security solutions designed to protect what matters most.
        </motion.p>

        {/* Call to Action Button */}
        <motion.div variants={itemVariants}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-base md:text-lg px-7 py-3.5 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
          >
            <a href="#portfolio">View our Work</a>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Statistics Section */}
        <motion.div
          variants={itemVariants}
          className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 pt-8 md:pt-12"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center space-y-2 transition-shadow hover:shadow-md"
              >
                <div className="p-3 bg-blue-50 text-blue-600 rounded-full mb-1">
                  <IconComponent className="w-6 h-6" />
                </div>
                <span className="text-3xl md:text-4xl font-extrabold text-blue-700">
                  {stat.value}
                </span>
                <span className="text-sm md:text-base font-medium text-slate-500">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;