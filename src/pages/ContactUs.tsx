import { useState, type ChangeEvent, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { contactCards, contactDetails } from '../constants';
import { WhatsAppIcon } from '../components/Icons';

type FormData = { name: string; email: string; subject: string; message: string };
type FormErrors = Partial<Record<keyof FormData, string>>;

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const MAX_MESSAGE_LENGTH = 500;



  // Controlled Input Handler
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.target.name as keyof FormData;
    const { value } = e.target;
    setIsSubmitted(false);

    // Prevent typing beyond character limit for message
    if (name === 'message' && value.length > MAX_MESSAGE_LENGTH) return;

    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
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
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message cannot be empty.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit Handler
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      const body = `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\n${formData.message.trim()}`;
      window.location.href = `mailto:${contactDetails.email}?subject=${encodeURIComponent(formData.subject.trim())}&body=${encodeURIComponent(body)}`;
      setIsSubmitted(true);
    }
  };

  return (
    <section id="contact" className="section-shell bg-slate-50">
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
            Get In Touch
          </span>
          <h2 className="section-title">
            Contact Us
          </h2>
          <p className="section-description">
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
                  className="group surface-card p-6 hover:shadow-md transition-all duration-300 flex items-center gap-5"
                >
                  <div className="p-4 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shrink-0">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                      {card.title}
                    </h3>
                    <a href={card.href} className="contact-detail">
                      {card.detail}
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {card.subDetail}
                    </p>
                  </div>
                </div>
              );
            })}
                <a
                  href={contactDetails.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-green-200 p-6 rounded-2xl border border-green-700 shadow-sm hover:bg-green-300/50 hover:border-green-800 hover:border-2 transition-colors duration-300 flex items-center justify-center gap-5 cursor-pointer"
                >
                  <div>
                    <h3 className="text-sm font-semibold text-black uppercase tracking-wider flex gap-2 items-center">
                        <WhatsAppIcon size={40} />
                      Whatsapp
                    </h3>
                  </div>
                </a>


          </motion.div>

          {/* Right Grid: Controlled Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="surface-card p-8 sm:p-10"
          >
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                role="status"
                className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl flex items-center gap-3 text-sm font-medium"
              >
                <CheckCircle className="w-5 h-5 shrink-0 text-emerald-600" />
                <span>Your email app has been requested. Send the draft there to complete your enquiry. Your message is kept here if no email app opens.</span>
              </motion.div>
            )}

            <p className="text-sm text-slate-600 mb-5">This form opens an email draft. Send it from your email app, or contact us by phone or WhatsApp.</p>
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="form-label mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="form-control"
                />
                {errors.name && (
                  <p id="name-error" className="form-error" role="alert">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="form-label mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="form-control"
                />
                {errors.email && (
                  <p id="email-error" className="form-error" role="alert">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="form-label mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Inquiry about CCTV Installation"
                  className="form-control"
                />
                {errors.subject && (
                  <p id="subject-error" className="form-error" role="alert">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message Field with Dynamic Character Counter */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <span className={`text-xs ${formData.message.length === MAX_MESSAGE_LENGTH ? 'text-red-500 font-semibold' : 'text-slate-400'}`}>
                    {formData.message.length} / {MAX_MESSAGE_LENGTH} characters
                  </span>
                </div>
                <textarea
                  id="message"
                  name="message"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  required
                  rows={4}
                  maxLength={MAX_MESSAGE_LENGTH}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="form-control resize-none"
                />
                {errors.message && (
                  <p id="message-error" className="form-error" role="alert">
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
                className="button-primary w-full justify-center"
              >
                <span>Open Email Draft</span>
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
