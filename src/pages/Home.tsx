import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { containerVariants, itemVariants, stats } from '../constants';

const Home = () => {


  return (
    <div id="home" className="min-h-screen text-slate-800 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl mx-auto flex flex-col items-center text-center space-y-8 md:space-y-10"
      >
        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-blue-600 sm:text-blue-500 md:text-blue-700 lg:text-blue-800"
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
          <motion.a
            href="/#portfolio"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="button-primary px-7 md:text-lg"
          >
            <span>View our Work</span>
            <ArrowRight className="w-5 h-5" />
          </motion.a>
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