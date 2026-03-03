import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Zap, Code2, Award, Heart } from 'lucide-react';

const techStack = [
  { name: 'React', color: '#61DAFB' },
  { name: 'Next.js', color: '#ffffff' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Tailwind', color: '#06B6D4' },
  { name: 'Node.js', color: '#339933' },
  { name: 'PostgreSQL', color: '#4169E1' },
  { name: 'Supabase', color: '#3ECF8E' },
  { name: 'Vite', color: '#646CFF' },
];

const values = [
  {
    icon: <Code2 size={24} />,
    title: 'Código Limpio',
    description: 'Desarrollo robusto, escalable y mantenible con las mejores prácticas.',
  },
  {
    icon: <Zap size={24} />,
    title: 'Rendimiento',
    description: 'Optimización al máximo para experiencias ultra rápidas.',
  },
  {
    icon: <Heart size={24} />,
    title: 'Pasión',
    description: 'Amamos lo que hacemos y se refleja en cada proyecto.',
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 -left-48 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge mb-4">
            <Users size={14} />
            Sobre Nosotros
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4">
            ¿Quiénes <span className="gradient-text">somos</span>?
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Text Content */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              Somos un equipo de desarrolladores apasionados en <span className="text-white font-semibold">Paraguay</span>,
              especializados en crear experiencias digitales de clase mundial. Nuestra misión es clara:
            </p>
            <blockquote className="relative pl-6 border-l-2 border-primary/50">
              <p className="text-xl font-semibold gradient-text-cyan italic">
                "Forjamos soluciones tecnológicas que impulsan tu productividad"
              </p>
            </blockquote>
            <p className="text-gray-400 leading-relaxed">
              Creemos en el poder del código bien escrito para transformar negocios. Cada línea de código
              que escribimos está pensada para generar impacto, cada diseño para cautivar, y cada solución
              para escalar con tu negocio.
            </p>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              {values.map((val, i) => (
                <motion.div
                  key={i}
                  className="glass-card rounded-xl p-5 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-primary mb-3 flex justify-center">{val.icon}</div>
                  <h4 className="text-sm font-bold text-white mb-1">{val.title}</h4>
                  <p className="text-xs text-gray-500">{val.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Tech Stack Visual */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative w-full max-w-md">
              {/* Central circle */}
              <div className="relative mx-auto w-48 h-48 rounded-full border border-primary/20 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full border border-secondary/20 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <Target size={32} className="text-primary" />
                  </div>
                </div>
                {/* Animated ring */}
                <div className="absolute inset-0 rounded-full border border-primary/10 animate-spin-slow"
                  style={{ borderTopColor: 'rgba(0, 255, 208, 0.3)' }} />
              </div>

              {/* Tech Stack Grid */}
              <div className="grid grid-cols-4 gap-3 mt-8">
                {techStack.map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    className="tech-icon"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold font-mono"
                      style={{
                        backgroundColor: `${tech.color}15`,
                        color: tech.color,
                        border: `1px solid ${tech.color}30`,
                      }}
                    >
                      {tech.name.substring(0, 2).toUpperCase()}
                    </div>
                    <span className="text-[10px] text-gray-400 font-medium">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;