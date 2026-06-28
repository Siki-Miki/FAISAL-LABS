import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Technologies: React.FC = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const techs = [
    { name: 'React', category: 'Frontend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Python', category: 'AI/ML' },
    { name: 'TensorFlow', category: 'AI/ML' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Kubernetes', category: 'DevOps' },
    { name: 'Rust', category: 'Systems' },
    { name: 'Go', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Redis', category: 'Database' },
    { name: 'GraphQL', category: 'API' },
    { name: 'WebGL', category: 'Graphics' },
    { name: 'Three.js', category: 'Graphics' },
    { name: 'Tailwind CSS', category: 'Frontend' },
  ];

  return (
    <section id="technologies" className="section-padding relative" ref={ref}>
      <div className="container-main">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-[0.3em] text-primary mb-4"
          >
            {t('technologies.label')}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
            style={{ letterSpacing: '-1.5px' }}
          >
            {t('technologies.title')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-primary leading-relaxed"
          >
            {t('technologies.subtitle')}
          </motion.p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {techs.map((tech) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5}}
              whileHover={{ scale: 1.05, y: -3 }}
              className="glass-card rounded-xl p-4 text-center group cursor-default"
            >
              <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                {tech.name}
              </p>
              <p className="text-xs text-primary/100 mt-1">{tech.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
