import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { contactCards } from '../constants';
import { Link } from 'react-router';
import {FacebookIcon, InstagramIcon, TikTokIcon, WhatsAppIcon} from '../components/Icons';
import { Helmet } from 'react-helmet-async';

const ContactUs = () => {

  <Helmet>
    <title>Contact Us</title>
    <meta name='description' content='Contact avis data solution.' />
  </Helmet>
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  type FormErrors = Partial<Record<keyof typeof formData, string | null>>;
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const MAX_MESSAGE_LENGTH = 500;



  // Controlled Input Handler
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget;
    if (name !== 'name' && name !== 'email' && name !== 'subject' && name !== 'message') return;
    
    // Prevent typing beyond character limit for message
    if (name === 'message' && value.length > MAX_MESSAGE_LENGTH) return;

    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  // Validation Logic
  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message cannot be empty.';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit Handler
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      // Reset form after submission
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-slate-50 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
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
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Contact Us
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-2">
            Have a question or ready to secure your property? Reach out to us directly or send a message below.
          </p>
        </motion.div>

        {/* Responsive Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Grid: Contact Information Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            {contactCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={index}
                  className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-5"
                >
                  <div className="p-4 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shrink-0">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                      {card.title}
                    </h3>
                    <p className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {card.detail}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {card.subDetail}
                    </p>
                  </div>
                </div>
              );
            })}
                <Link
                to=""
                  className="group bg-green-200 p-6 rounded-2xl border border-green-700 shadow-sm hover:bg-green-300/50 hover:border-green-800 hover:border-2 transition-colors duration-300 flex items-center justify-center gap-5 cursor-pointer"
                >
                  <div>
                    <h3 className="text-sm font-semibold text-black uppercase tracking-wider flex gap-2 items-center">
                        <WhatsAppIcon size={40} />
                      Whatsapp
                    </h3>
                  </div>
                </Link>   

                <div
                    className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
                >
                    <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                      Follow us
                    </h3>                    
                    <div
                    className="flex items-center gap-5 justify-center"
                    >
                        <a 
                            href="/"
                            className='p-2 border-0 border-amber-50 hover:border hover:border-light-blue rounded-sm transition-all duration-200 ease-in'
                        >
                            <InstagramIcon size={40} />
                        </a>  
                        <a
                            href="/"
                            className='p-2 border-0 border-amber-50 hover:border hover:border-light-blue rounded-sm transition-all duration-200 ease-in'
                        >
                            <FacebookIcon size={40} />
                        </a>   
                        <a
                            href="/"
                            className='p-2 border-0 border-amber-50 hover:border hover:border-light-blue rounded-sm transition-all duration-200 ease-in'
                        >
                            <TikTokIcon size={40} />
                        </a>               
                 </div>                         
                </div>

          </motion.div>

          {/* Right Grid: Controlled Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-100 shadow-sm"
          >
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl flex items-center gap-3 text-sm font-medium"
              >
                <CheckCircle className="w-5 h-5 shrink-0 text-emerald-600" />
                <span>Thank you! Your message has been sent successfully. We will get back to you shortly.</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.name ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:border-blue-600 focus:ring-blue-600'
                  } text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-opacity-20 transition-colors`}
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:border-blue-600 focus:ring-blue-600'
                  } text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-opacity-20 transition-colors`}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Inquiry about CCTV Installation"
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.subject ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:border-blue-600 focus:ring-blue-600'
                  } text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-opacity-20 transition-colors`}
                />
                {errors.subject && (
                  <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message Field with Dynamic Character Counter */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                    Message
                  </label>
                  <span className={`text-xs ${formData.message.length === MAX_MESSAGE_LENGTH ? 'text-red-500 font-semibold' : 'text-slate-400'}`}>
                    {formData.message.length} / {MAX_MESSAGE_LENGTH} characters
                  </span>
                </div>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.message ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:border-blue-600 focus:ring-blue-600'
                  } text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-opacity-20 transition-colors resize-none`}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-base py-3.5 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
