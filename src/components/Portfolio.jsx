import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Layers, ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: "E-Commerce Platform",
        description: "Tienda online completa con carrito de compras, pagos integrados y panel de administración. Diseño responsivo y optimizado para SEO.",
        tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
        gradient: "from-primary/20 to-secondary/20",
        accentColor: "text-primary",
        category: "web",
    },
    {
        title: "Dashboard Analítico",
        description: "Panel de control interactivo con gráficos en tiempo real, reportes exportables y gestión de usuarios multirrol.",
        tags: ["Next.js", "Supabase", "Chart.js", "Tailwind"],
        gradient: "from-secondary/20 to-accent/20",
        accentColor: "text-secondary",
        category: "web",
    },
    {
        title: "App de Gestión",
        description: "Sistema de gestión empresarial con control de inventario, facturación electrónica y módulo de recursos humanos.",
        tags: ["React", "Firebase", "PWA", "Material UI"],
        gradient: "from-accent/20 to-pink-500/20",
        accentColor: "text-accent",
        category: "app",
    },
    {
        title: "Landing Page Corporativa",
        description: "Sitio web institucional con animaciones premium, formulario de contacto inteligente y optimización de rendimiento.",
        tags: ["Vite", "Framer Motion", "Tailwind CSS"],
        gradient: "from-emerald-400/20 to-primary/20",
        accentColor: "text-emerald-400",
        category: "web",
    },
];

const categories = [
    { key: 'all', label: 'Todos' },
    { key: 'web', label: 'Sitios Web' },
    { key: 'app', label: 'Aplicaciones' },
];

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <section id="portfolio" className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="absolute top-0 left-0 right-0 section-divider" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-badge mb-4">
                        <Layers size={14} />
                        Portfolio
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4">
                        Proyectos que <span className="gradient-text">inspiran</span>
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
                        Cada proyecto es una oportunidad para crear algo extraordinario. Aquí algunos de nuestros trabajos destacados.
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    className="flex justify-center gap-2 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {categories.map(cat => (
                        <button
                            key={cat.key}
                            onClick={() => setActiveCategory(cat.key)}
                            className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${activeCategory === cat.key
                                    ? 'bg-gradient-to-r from-primary to-secondary text-dark-bg'
                                    : 'text-gray-400 hover:text-white bg-white/5 hover:bg-white/10'
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <AnimatePresence mode="wait">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                className="group relative glass-card rounded-2xl overflow-hidden"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                layout
                            >
                                {/* Project Preview Area */}
                                <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                                    {/* Code-like decoration */}
                                    <div className="absolute inset-0 opacity-10 font-mono text-[10px] leading-tight p-4 overflow-hidden text-white">
                                        {`import React from 'react';\nimport { motion } from 'framer-motion';\n\nconst ${project.title.replace(/\s/g, '')} = () => {\n  return (\n    <div className="app">\n      <Header />\n      <Main />\n      <Footer />\n    </div>\n  );\n};\n\nexport default ${project.title.replace(/\s/g, '')};`}
                                    </div>
                                    <div className="relative z-10 flex items-center gap-3">
                                        <div className={`w-16 h-16 rounded-2xl bg-dark-bg/80 backdrop-blur flex items-center justify-center ${project.accentColor}`}>
                                            <Layers size={28} />
                                        </div>
                                    </div>

                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-dark-bg/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                                        <button className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-dark-bg transition-all duration-300">
                                            <ExternalLink size={20} />
                                        </button>
                                        <button className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-dark-bg transition-all duration-300">
                                            <Github size={20} />
                                        </button>
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                        <ArrowUpRight size={18} className="text-gray-500 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-white/5 text-gray-300 border border-white/5"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
