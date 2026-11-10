import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck, Wifi, Camera } from 'lucide-react';
import { useEffect, useState } from 'react';
import { containerVariants, itemVariants } from '../constants';

const backgroundImages = [
  '/images/network.png',
  '/images/wifi-installation.jpeg',
  '/images/security-cameras.jpeg',
];

const highlights = [
  {
    icon: ShieldCheck,
    title: 'Reliable Protection',
    description: 'Round-the-clock security systems built to keep your property safe.',
  },
  {
    icon: Wifi,
    title: 'Seamless Connectivity',
    description: 'Fast, stable networks and WiFi installations with zero downtime.',
  },
  {
    icon: Camera,
    title: 'Smart Surveillance',
    description: 'Modern camera systems you can monitor from anywhere, anytime.',
  },
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
          AVIZ DIGITAL SOLUTIONS
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="max-w-2xl text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-normal"
        >
          Delivering the security and connectivity your home or business needs to
          stay protected day and night.
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

        {/* Highlight Info Section (replaces stats cards) */}
        <motion.div
          variants={itemVariants}
          className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 pt-8 md:pt-12"
        >
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="flex flex-col items-center text-center space-y-3 px-2"
              >
                <div className="p-3 bg-blue-600/10 text-blue-700 rounded-full">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-slate-800">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;