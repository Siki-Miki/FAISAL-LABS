import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiArrowUpRight } from 'react-icons/fi';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: t('projects.items.shield.title'),
      description: t('projects.items.shield.description'),
      image: '/assets/project-shield.jpg',
      tags: ['AI', 'Cybersecurity', 'React'],
      color: '#388BFF',
    },
    {
      title: t('projects.items.nexus.title'),
      description: t('projects.items.nexus.description'),
      image: '/assets/project-nexus.jpg',
      tags: ['Cloud', 'Zero-Trust', 'Node.js'],
      color: '#60A5FA',
    },
    {
      title: t('projects.items.cortex.title'),
      description: t('projects.items.cortex.description'),
      image: '/assets/project-cortex.jpg',
      tags: ['Analytics', 'ML', 'Python'],
      color: '#A9D2FF',
    },
  ];

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="container-main">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-[0.3em] text-[#388BFF] mb-4"
          >
            {t('projects.label')}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
            style={{ letterSpacing: '-1.5px' }}
          >
            {t('projects.title')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-[#A9D2FF]"
          >
            {t('projects.subtitle')}
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative glass-card rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-[#16355A] to-[#0B141D] group-hover:scale-105 transition-transform duration-700"
                />
                <div
                  className="absolute inset-0 opacity-60"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${project.color}20 0%, transparent 60%)`,
                  }}
                />
                {/* Abstract pattern overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full border border-[#388BFF]/30 animate-pulse" />
                  <div className="absolute w-16 h-16 rounded-full border border-[#A9D2FF]/20" />
                  <div className="absolute w-8 h-8 rounded-full bg-[#388BFF]/10" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B141D] via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-[#388BFF]/10 text-[#A9D2FF] border border-[#388BFF]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-[#388BFF] transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-sm text-[#A9D2FF] leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex items-center gap-2 text-[#388BFF] group-hover:gap-3 transition-all duration-300">
                  <span className="text-sm font-medium">{t('projects.viewProject')}</span>
                  <FiArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
