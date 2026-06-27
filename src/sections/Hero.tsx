import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  baseAlpha: number;
}

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const mouse = { x: null as number | null, y: null as number | null, radius: 180 };

    // إعداد الجزيئات بأبعاد وعمق متفاوت
    const initParticles = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      const particleCount = Math.min(Math.floor((width * height) / 6000), 160);
      
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const baseAlpha = Math.random() * 0.4 + 0.2;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          radius: Math.random() * 2.5 + 0.6,
          alpha: baseAlpha,
          baseAlpha: baseAlpha,
        });
      }
    };

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      initParticles();
    };

    resizeCanvas();
    setIsLoaded(true);

    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // حلقة الحركة الذكية والموفرة للطاقة
    const animate = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      ctx.clearRect(0, 0, width, height);

      // قراءة لون النص الحالي المتغير ديناميكياً حسب الثيم النشط بالصفحة
      const computedStyle = getComputedStyle(canvas);
      const currentTextColor = computedStyle.getPropertyValue('--color-text').trim();

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // التفاعل الفيزيائي المرن مع الماوس
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            p.x -= (dx / dist) * force * 1.6;
            p.y -= (dy / dist) * force * 1.6;
            p.alpha = Math.min(p.baseAlpha + force * 0.4, 0.85);
          } else {
            p.alpha += (p.baseAlpha - p.alpha) * 0.04;
          }
        } else {
          p.alpha += (p.baseAlpha - p.alpha) * 0.04;
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // رسم النقطة بالاعتماد الكامل على المتغير الحالي وتطبيق الالفا بسلاسة وبدون تعارض متصفحات
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = currentTextColor || '#ffffff';
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section 
      id="hero" 
      className="relative w-full h-screen overflow-hidden bg-transparent text-[var(--color-text)] transition-colors duration-500"
    >
      {/* Background Interactive Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-[1]"
      />

      {/* Subtle overlay shading */}
      <div className="absolute inset-0 z-[2] pointer-events-none bg-gradient-to-b from-transparent to-transparent" />

      {/* Content Layer */}
      <div className="relative z-[3] h-full flex items-center">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-3xl"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-sm md:text-base uppercase tracking-[0.3em] text-[var(--color-primary)] mb-4 md:mb-6 font-semibold"
            >
              FAISAL LABS
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 40 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[var(--color-text)] leading-[1.05] tracking-tight mb-6 md:mb-8 transition-colors duration-500"
            >
              {t('hero.headline')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] max-w-xl mb-8 md:mb-10 leading-relaxed transition-colors duration-500"
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                {t('hero.ctaPrimary')}
              </button>
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-ghost"
              >
                {t('hero.ctaSecondary')}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;