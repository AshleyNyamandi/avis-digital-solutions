import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, Zap } from 'lucide-react';
import { cardVariants, containerVariants } from '../constants';

const AboutUs = () => {


  return (
    <section id="about" className="section-shell">
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
            Who We Are
          </span>
          <h2 className="section-title">
            About Avis Digital Solutions
          </h2>
          <p className="section-description">
            Driven by innovation and commitment to security, we empower homes and enterprises with reliable, intelligent technology solutions.
          </p>
        </motion.div>

        {/* Mission & Vision Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Mission Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="group surface-card feature-card p-8 sm:p-10"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="p-3.5 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Target className="w-7 h-7" />
                </div>
                <span className="text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full uppercase tracking-wider">
                  Our Purpose
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Our Mission
                </h3>
                <p className="text-slate-600 leading-relaxed text-base">
                  To provide state-of-the-art security, networking, and digital technology solutions that protect people, safeguard assets, and optimize communication infrastructure for seamless business operations.
                </p>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-slate-100 flex items-center gap-2 text-sm font-semibold text-slate-500">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              <span>Uncompromised security & dependability</span>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="group surface-card feature-card p-8 sm:p-10"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="p-3.5 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Eye className="w-7 h-7" />
                </div>
                <span className="text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full uppercase tracking-wider">
                  Our Horizon
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Our Vision
                </h3>
                <p className="text-slate-600 leading-relaxed text-base">
                  To become the premier leader in integrated digital security and connectivity solutions, recognized for technical innovation, unmatched customer satisfaction, and continuous innovation.
                </p>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-slate-100 flex items-center gap-2 text-sm font-semibold text-slate-500">
              <Zap className="w-5 h-5 text-blue-600" />
              <span>Pioneering smart digital solutions</span>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutUs;