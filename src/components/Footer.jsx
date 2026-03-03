import React from 'react';
import { Instagram, Github, Linkedin, MessageCircle, ArrowUp, Code2 } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Instagram size={18} />, href: 'https://www.instagram.com/tech.fsol/', label: 'Instagram' },
    { icon: <Github size={18} />, href: 'https://github.com/Angel-Codes-842', label: 'GitHub' },
    { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/angel-g%C3%B3mez-b72836209/', label: 'LinkedIn' },
    { icon: <MessageCircle size={18} />, href: 'https://wa.me/595975628945', label: 'WhatsApp' },
  ];

  const quickLinks = [
    { href: '#home', label: 'Inicio' },
    { href: '#services', label: 'Servicios' },
    { href: '#about', label: 'Nosotros' },
    { href: '#contact', label: 'Contacto' },
  ];

  return (
    <footer className="relative border-t border-white/5">
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-dark-bg font-mono font-bold text-sm">&lt;/&gt;</span>
              </div>
              <span className="text-xl font-bold text-white">
                Tech<span className="gradient-text">Forge</span>
              </span>
            </a>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Forjamos soluciones tecnológicas que impulsan tu productividad. Especialistas en desarrollo web moderno en Paraguay.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navegación
            </h4>
            <ul className="flex flex-col gap-2">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Conecta con nosotros
            </h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <a
              href="mailto:hernan17ayala@gmail.com"
              className="text-sm text-gray-500 hover:text-primary transition-colors"
            >
              hernan17ayala@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="section-divider mb-8" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} TechForge Solutions. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <Code2 size={14} className="text-primary/50" />
            <span>Hecho con pasión en Paraguay</span>
          </div>
          <a
            href="#home"
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/30 transition-all duration-300"
            aria-label="Volver arriba"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;