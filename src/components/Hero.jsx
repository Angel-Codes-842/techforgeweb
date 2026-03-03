import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Sparkles } from 'lucide-react';

const codeLines = [
  { indent: 0, text: '<', keyword: 'TechForge', attr: ' solutions', close: '>' },
  { indent: 1, text: '<', keyword: 'Servicio', attr: ' tipo', value: '="Desarrollo Web"', close: '>' },
  { indent: 2, text: '<', keyword: 'Stack', close: '>' },
  { indent: 3, text: 'React · Next.js · Tailwind', type: 'string' },
  { indent: 2, text: '</', keyword: 'Stack', close: '>' },
  { indent: 2, text: '<', keyword: 'Resultado', close: '>' },
  { indent: 3, text: '"Experiencias digitales únicas"', type: 'string' },
  { indent: 2, text: '</', keyword: 'Resultado', close: '>' },
  { indent: 1, text: '</', keyword: 'Servicio', close: '>' },
  { indent: 0, text: '</', keyword: 'TechForge', close: '>' },
];

const CodeAnimation = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines(prev => {
        if (prev >= codeLines.length) return prev;
        return prev + 1;
      });
    }, 300);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="code-block w-full max-w-lg shadow-2xl shadow-black/50">
      <div className="code-block-header">
        <div className="code-dot bg-red-500/80" />
        <div className="code-dot bg-yellow-500/80" />
        <div className="code-dot bg-green-500/80" />
        <span className="ml-3 text-xs text-gray-500 font-mono">proyecto.jsx</span>
      </div>
      <div className="p-5 text-sm leading-relaxed">
        {codeLines.map((line, i) => (
          <motion.div
            key={i}
            className="flex"
            initial={{ opacity: 0, x: -10 }}
            animate={i < visibleLines ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3 }}
            style={{ paddingLeft: `${line.indent * 20}px` }}
          >
            <span className="text-gray-600 w-6 text-right mr-4 select-none text-xs leading-6">
              {i + 1}
            </span>
            {line.type === 'string' ? (
              <span className="text-emerald-400">{line.text}</span>
            ) : (
              <span>
                <span className="text-gray-500">{line.text}</span>
                <span className="text-cyan-400">{line.keyword}</span>
                {line.attr && <span className="text-purple-400">{line.attr}</span>}
                {line.value && <span className="text-amber-300">{line.value}</span>}
                <span className="text-gray-500">{line.close}</span>
              </span>
            )}
          </motion.div>
        ))}
        {visibleLines >= codeLines.length && (
          <motion.div
            className="mt-2 flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-gray-600 w-6 text-right mr-4 select-none text-xs">▸</span>
            <span className="w-2 h-4 bg-primary animate-pulse rounded-sm" />
          </motion.div>
        )}
      </div>
    </div>
  );
};

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            className="flex flex-col gap-6 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <span className="section-badge">
                <Terminal size={14} />
                Desarrollo Web Profesional
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight"
              variants={itemVariants}
            >
              Construimos{' '}
              <span className="gradient-text">experiencias</span>
              <br />
              digitales que{' '}
              <span className="relative inline-block">
                <span className="text-glow">impactan</span>
                <Sparkles className="absolute -top-2 -right-6 w-5 h-5 text-primary animate-pulse" />
              </span>
            </motion.h1>

            <motion.p
              className="text-lg text-gray-400 max-w-lg mx-auto lg:mx-0 text-balance"
              variants={itemVariants}
            >
              Somos especialistas en desarrollo web moderno. Transformamos tus ideas en
              aplicaciones web rápidas, elegantes y escalables con las últimas tecnologías.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <a href="#services" className="btn-primary">
                Ver Servicios
                <ArrowRight size={18} />
              </a>
              <a href="#about" className="btn-outline">
                Sobre Nosotros
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex gap-8 justify-center lg:justify-start mt-4"
              variants={itemVariants}
            >
              {[
                { value: '50+', label: 'Proyectos' },
                { value: '3+', label: 'Años exp.' },
                { value: '100%', label: 'Dedicación' },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-2xl font-bold gradient-text-cyan">{stat.value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Code Animation */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <div className="relative">
              {/* Glow behind code block */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 blur-3xl rounded-3xl scale-110" />
              <CodeAnimation />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-bg to-transparent" />
    </section>
  );
};

export default Hero;