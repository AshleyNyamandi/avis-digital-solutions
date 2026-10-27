import { motion } from 'motion/react';
import { cardVariants, containerVariants, projects } from '../constants';

const Portfolio = () => {


  return (
    <section id="portfolio" className="section-shell bg-slate-50">
      <div className="section-content">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-header max-w-3xl mx-auto"
        >
          <span className="section-eyebrow">
            Our Work
          </span>
          <h2 className="section-title">
            Our Portfolio
          </h2>
          <p className="section-description">
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
                className="group relative surface-card overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Image Container */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
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