import React, { useState } from 'react';
import { X, Menu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Inicio' },
    { href: '#services', label: 'Servicios' },
    { href: '#about', label: 'Sobre Nosotros' },
    { href: '#contact', label: 'Contacto' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal/50 backdrop-blur-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-white">
          Tech<span className="text-primary">Forge</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-light-gray hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-charcoal">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-light-gray hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;