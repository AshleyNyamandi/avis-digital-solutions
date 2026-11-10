
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
} from 'lucide-react';
import { navLinks, servicesLinks, socialLinks } from '../constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();


  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-white">
                AVIZ <span className="text-blue-500">DIGITAL</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Smart security solutions designed to protect what matters most. Delivering reliable technology across home and business environments.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social, idx) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-2.5 bg-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white rounded-xl transition-colors duration-200"
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-blue-500 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2.5">
              {servicesLinks.map((service, idx) => (
                <li key={idx}>
                  <p
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-blue-500 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                    <span>{service.name}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Direct Contact Details */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Contact Info
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span>Whychford Court, 218 Hebert Chitepo, Harare</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <a href="tel:+263771234567" className="hover:text-blue-400 transition-colors">
                  +263 775 891 327
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <a href="mailto:info@avisdigital.com" className="hover:text-blue-400 transition-colors">
                  avizdigitalsolutions@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Agency Credit */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} Avis Digital Solutions. All rights reserved.</p>
          
          <p className="flex items-center gap-1">
            <span>Designed & Developed by</span>
            <a 
              href="https://www.ashleynymd.co.zw/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
            >
              Ashley
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;