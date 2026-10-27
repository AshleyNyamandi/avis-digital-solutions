import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { cardVariants, containerVariants, projects } from '../constants';

const Portfolio = () => {


  return (
    <section id="portfolio" className="min-h-screen bg-slate-50 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full space-y-12 sm:space-y-16">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 max-w-3xl mx-auto"
        >
          <span className="text-sm uppercase tracking-widest text-blue-600 font-semibold">
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Our Portfolio
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-2">
            Years of experience across diverse technologies, delivering exceptional results for businesses of all sizes.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="group relative bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Image Container */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="p-3 bg-white/90 text-blue-600 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <ExternalLink className="w-5 h-5" />
                    </span>
                  </div>
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-blue-700 text-xs font-semibold px-3 py-1 rounded-full border border-blue-100 shadow-sm flex items-center gap-1.5">
                    <IconComponent className="w-3.5 h-3.5" />
                    {project.category}
                  </span>
                </div>

                {/* Content Footer */}
                <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Portfolio;