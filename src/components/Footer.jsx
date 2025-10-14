import React from 'react';
import { Instagram, Github, Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {
  const socialLinks = {
    instagram: 'https://www.instagram.com/tech.fsol/',
    github: 'https://github.com/Angel-Codes-842',
    linkedin: 'https://www.linkedin.com/in/angel-g%C3%B3mez-b72836209/',
    whatsapp: 'https://wa.me/595975628945'
  };

  return (
    <footer className="bg-black border-t border-primary/20 mt-20">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <a href="#home" className="text-2xl font-bold text-white">
            Tech<span className="text-primary">Forge</span>
          </a>

          {/* Copyright */}
          <p className="text-sm text-light-gray">
            &copy; 2025 TechForge Solutions. Todos los derechos reservados.
          </p>

          {/* Social Links */}
          <div className="flex gap-6">
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-light-gray hover:text-primary transition-colors duration-300">
              <Instagram size={24} />
            </a>
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-light-gray hover:text-primary transition-colors duration-300">
              <Github size={24} />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-light-gray hover:text-primary transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="text-light-gray hover:text-primary transition-colors duration-300">
              <MessageCircle size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;