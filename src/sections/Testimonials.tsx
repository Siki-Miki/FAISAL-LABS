import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiStar } from 'react-icons/fi';

const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO',
      company: 'Nexus Finance',
      content:
        'Faisal Labs transformed our security posture. Their AI-driven threat detection reduced our incident response time by 90%. The team\'s expertise in both cybersecurity and machine learning is truly exceptional.',
      rating: 5,
    },
    {
      name: 'Marcus Weber',
      role: 'Head of Engineering',
      company: 'CloudFirst Systems',
      content:
        'Working with Faisal Labs on our cloud migration was seamless. They delivered a zero-trust architecture that exceeded our compliance requirements while maintaining peak performance.',
      rating: 5,
    },
    {
      name: 'Aisha Patel',
      role: 'CISO',
      company: 'MediCore Health',
      content:
        'In healthcare, security is non-negotiable. Faisal Labs built us a HIPAA-compliant infrastructure with quantum-safe encryption. Their research-first approach gives us confidence in every decision.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="section-padding relative" ref={ref}>
      <div className="container-main">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-[0.3em] text-primary mb-4"
          >
            {t('testimonials.label')}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
            style={{ letterSpacing: '-1.5px' }}
          >
            {t('testimonials.title')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-primary leading-relaxed"
          >
            {t('testimonials.subtitle')}
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5}}
              whileHover={{ y: -5 }}
              className="glass-card rounded-2xl p-6 md:p-8 group"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <FiStar key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-text text-sm leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-primary/10
                                flex items-center justify-center text-sm font-bold text-primary">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-foreground text-sm font-medium">{testimonial.name}</p>
                  <p className="text-primary/60 text-xs">
                    {testimonial.role} · {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
