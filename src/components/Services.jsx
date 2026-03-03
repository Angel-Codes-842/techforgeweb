import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Smartphone, Database, Palette, Rocket, Server, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: <Globe size={28} />,
    title: "Desarrollo Web",
    description: "Sitios web y aplicaciones modernas con React, Next.js y tecnologías de vanguardia. Rendimiento y diseño excepcional.",
    gradient: "from-primary to-secondary",
    featured: true,
  },
  {
    icon: <Smartphone size={28} />,
    title: "Apps Responsivas",
    description: "Aplicaciones web progresivas (PWA) que funcionan perfectamente en cualquier dispositivo y resolución.",
    gradient: "from-secondary to-accent",
    featured: false,
  },
  {
    icon: <Palette size={28} />,
    title: "UI/UX Design",
    description: "Interfaces intuitivas y atractivas que cautivan a tus usuarios y mejoran la conversión de tu negocio.",
    gradient: "from-accent to-pink-500",
    featured: false,
  },
  {
    icon: <Database size={28} />,
    title: "Backend & APIs",
    description: "Arquitecturas robustas con Node.js, bases de datos optimizadas y APIs RESTful escalables.",
    gradient: "from-primary to-emerald-400",
    featured: false,
  },
  {
    icon: <Server size={28} />,
    title: "Reparación de PCs",
    description: "Diagnóstico y reparación profesional de notebooks y PCs. Soluciones rápidas en hardware y software.",
    gradient: "from-amber-400 to-orange-500",
    featured: false,
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Mantenimiento",
    description: "Optimización, seguridad y mantenimiento preventivo para que tus sistemas operen al máximo rendimiento.",
    gradient: "from-secondary to-cyan-300",
    featured: false,
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-50" />
      <div className="absolute top-0 left-0 right-0 section-divider" />

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
            <Code2 size={14} />
            Servicios
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4">
            Lo que <span className="gradient-text">hacemos mejor</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Especializados en desarrollo web, ofrecemos soluciones tecnológicas integrales que llevan tu negocio al siguiente nivel.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`group relative glass-card rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 ${service.featured
                  ? 'md:col-span-2 lg:col-span-1 ring-1 ring-primary/20'
                  : ''
                }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Featured badge */}
              {service.featured && (
                <div className="absolute -top-3 left-6">
                  <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-gradient-to-r from-primary to-secondary text-dark-bg rounded-full">
                    Especialidad
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-[1px] mb-6`}>
                <div className="w-full h-full rounded-xl bg-dark-bg flex items-center justify-center text-white group-hover:bg-transparent group-hover:text-dark-bg transition-all duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text-cyan transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Hover glow effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;