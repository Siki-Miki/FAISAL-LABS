import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiMail, FiMapPin, FiSend, FiCheck } from 'react-icons/fi';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-[#388BFF] mb-4">
              {t('contact.label')}
            </p>

            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
              style={{ letterSpacing: '-1.5px' }}
            >
              {t('contact.title')}
            </h2>

            <p className="text-lg text-[#A9D2FF] mb-10 max-w-md">
              {t('contact.subtitle')}
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-bg-primary/10 flex items-center justify-center">
                  <FiMail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-[#A9D2FF]/60 uppercase tracking-wider mb-1">
                    Email
                  </p>
                  <p className="text-foreground font-medium">{t('contact.info.email')}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-bg-primary/10 flex items-center justify-center">
                  <FiMapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs bg-primary/60 uppercase tracking-wider mb-1">
                    Location
                  </p>
                  <p className="text-foreground font-medium">{t('contact.info.location')}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 md:p-8 space-y-5">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                    <FiCheck className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {t('contact.form.success')}
                  </h3>
                </motion.div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-[#A9D2FF] mb-2">
                        {t('contact.form.name')}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-[#388BFF]/20
                                   text-foreground placeholder-[#A9D2FF]/40 focus:outline-none focus:border-[#388BFF]/50
                                   focus:ring-1 focus:ring-[#388BFF]/30 transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#A9D2FF] mb-2">
                        {t('contact.form.email')}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-[#388BFF]/20
                                   text-foreground placeholder-[#A9D2FF]/40 focus:outline-none focus:border-[#388BFF]/50
                                   focus:ring-1 focus:ring-[#388BFF]/30 transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-[#A9D2FF] mb-2">
                      {t('contact.form.subject')}
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-[#388BFF]/20
                                 text-foreground placeholder-[#A9D2FF]/40 focus:outline-none focus:border-[#388BFF]/50
                                 focus:ring-1 focus:ring-[#388BFF]/30 transition-all duration-300"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-[#A9D2FF] mb-2">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-[#388BFF]/20
                                 text-foreground placeholder-[#A9D2FF]/40 focus:outline-none focus:border-[#388BFF]/50
                                 focus:ring-1 focus:ring-[#388BFF]/30 transition-all duration-300 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary flex items-center justify-center gap-2"
                  >
                    <FiSend className="w-4 h-4" />
                    {t('contact.form.submit')}
                  </motion.button>
                </>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
