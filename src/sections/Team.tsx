import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Team: React.FC = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const members = [
    {
      name: t('team.founder.name'),
      role: t('team.founder.role'),
      bio: t('team.founder.bio'),
      image: '/assets/faisal-avatar.jpg',
      socials: {
        github: '#',
        linkedin: '#',
        twitter: '#',
      },
    },
  ];

  return (
    <section id="team" className="section-padding relative" ref={ref}>
      <div className="container-main">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-[0.3em] text-primary mb-4"
          >
            {t('team.label')}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
            style={{ letterSpacing: '-1.5px' }}
          >
            {t('team.title')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.1, delay: 0.4 }}
            className="text-lg text-primary leading-relaxed"
          >
            {t('team.subtitle')}
          </motion.p>
        </div>

        {/* Team Grid - Centered for single member */}
        <div className="flex justify-center">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5}}
              whileHover={{ y: -5 }}
              className="glass-card rounded-2xl overflow-hidden max-w-md w-full group"
            >
              {/* Avatar Area */}
              <div className="relative h-64 bg-gradient-to-br from-[#16355A] to-[#0B141D] flex items-center justify-center overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(56,139,255,0.15) 0%, transparent 60%)',
                  }}
                />
                {/* Abstract avatar representation */}
                <div className="relative">
                  <div className="w-28 h-28 rounded-full border-2 border-[#388BFF]/40 flex items-center justify-center
                                  bg-gradient-to-br from-[#388BFF]/20 to-transparent">
                    <span className="text-4xl font-bold text-[#388BFF]">F</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-[#388BFF] flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-[#388BFF]/40" />
                <div className="absolute top-8 right-8 w-3 h-3 rounded-full bg-[#A9D2FF]/20" />
                <div className="absolute bottom-6 left-8 w-2 h-2 rounded-full bg-[#388BFF]/30" />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary text-sm font-medium mb-4">{member.role}</p>
                <p className="text-sm text-text leading-relaxed mb-6">{member.bio}</p>

                {/* Social Links */}
                <div className="flex justify-center gap-4">
                  <motion.a
                    href={member.socials.github}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-[#388BFF]/10 flex items-center justify-center
                               hover:bg-[#388BFF]/30 transition-colors duration-300"
                    aria-label="GitHub"
                  >
                    <FiGithub className="w-5 h-5 text-text" />
                  </motion.a>
                  <motion.a
                    href={member.socials.linkedin}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-[#388BFF]/10 flex items-center justify-center
                               hover:bg-[#388BFF]/30 transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <FiLinkedin className="w-5 h-5 text-text" />
                  </motion.a>
                  <motion.a
                    href={member.socials.twitter}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-[#388BFF]/10 flex items-center justify-center
                               hover:bg-[#388BFF]/30 transition-colors duration-300"
                    aria-label="Twitter"
                  >
                    <FiTwitter className="w-5 h-5 text-text" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
