import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  FiShield,
  FiCpu,
  FiCode,
  FiCloud,
  FiRefreshCw,
  FiTrendingUp,
} from 'react-icons/fi';

const Services: React.FC = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: FiShield,
      title: t('services.cybersecurity.title'),
      description: t('services.cybersecurity.description'),
      gradient: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      icon: FiCpu,
      title: t('services.ai.title'),
      description: t('services.ai.description'),
      gradient: 'from-purple-500/20 to-blue-500/20',
    },
    {
      icon: FiCode,
      title: t('services.software.title'),
      description: t('services.software.description'),
      gradient: 'from-cyan-500/20 to-teal-500/20',
    },
    {
      icon: FiCloud,
      title: t('services.cloud.title'),
      description: t('services.cloud.description'),
      gradient: 'from-sky-500/20 to-blue-500/20',
    },
    {
      icon: FiRefreshCw,
      title: t('services.transformation.title'),
      description: t('services.transformation.description'),
      gradient: 'from-indigo-500/20 to-purple-500/20',
    },
    {
      icon: FiTrendingUp,
      title: t('services.research.title'),
      description: t('services.research.description'),
      gradient: 'from-emerald-500/20 to-cyan-500/20',
    },
  ];

  return (
    <section id="services" className="section-padding relative" ref={ref}>
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(56,139,255,0.15) 0%, transparent 70%)' }}
        />
      </div>

      <div className="container-main relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-[0.3em] text-primary mb-4"
          >
            {t('services.label')}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
            style={{ letterSpacing: '-1.5px' }}
          >
            {t('services.title')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-primary leading-relaxed"
          >
            {t('services.subtitle')}
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative group"
            >
              <div className="glass-card rounded-2xl p-8 h-full overflow-hidden relative">
                {/* Gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 
                              group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative z-10">
                  <div
                    className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6
                                group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300"
                  >
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-sm text-primary leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Corner accent */}
                <div
                  className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'radial-gradient(circle at top right, rgba(56,139,255,0.15) 0%, transparent 70%)',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
