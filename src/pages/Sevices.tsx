import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';
import { Link } from 'react-router';
import { cardVariants, containerVariants, services } from '../constants';

const Services = () => {

  return (
    <section id="services" className="section-shell">
      <div className="section-content">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-eyebrow">
            What We Do
          </span>
          <h2 className="section-title">
            Our Services
          </h2>
          
          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 pt-3">
            {["Security", "Connectivity", "Technology"].map((item, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Services Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group surface-card feature-card p-6 sm:p-8"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider bg-slate-50 px-2.5 py-1 rounded-md">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {service.label}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <Link 
                    to={`/services/${service.slug}`}
                    className="pt-6 mt-6 border-t border-slate-50 flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-700 cursor-pointer">
                  <span>Learn details</span>
                  <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;