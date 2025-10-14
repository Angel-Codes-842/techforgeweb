import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brush } from 'lucide-react';
import aboutImage from '../assets/imagen-about.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Column: Image Placeholder */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-80 h-96 md:w-96 md:h-[450px] bg-charcoal/50 rounded-2xl p-4">
              <img src={aboutImage} alt="Nuestro equipo" className="w-full h-full object-cover rounded-xl" />
            </div>
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">¿Quiénes somos?</h2>
            <p className="text-lg text-light-gray">
              Somos un equipo de apasionados por la tecnología en Paraguay, dedicados a ofrecer soluciones informáticas de primer nivel. Nuestra misión es clara:
              <span className="block mt-3 text-xl font-semibold text-primary italic">
                “Forjamos soluciones tecnológicas que impulsan tu productividad”.
              </span>
            </p>
            <p className="text-lg text-light-gray">
              Creemos en el poder de la tecnología para transformar ideas en realidad, y nos comprometemos a entregar resultados que superen tus expectativas.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div className="bg-charcoal/60 p-6 rounded-xl flex items-center gap-4">
                <Code size={36} className="text-secondary" />
                <div>
                  <h4 className="font-bold text-white text-lg">Código Limpio</h4>
                  <p className="text-sm text-light-gray">Desarrollo robusto y escalable.</p>
                </div>
              </div>
              <div className="bg-charcoal/60 p-6 rounded-xl flex items-center gap-4">
                <Brush size={36} className="text-secondary" />
                <div>
                  <h4 className="font-bold text-white text-lg">Diseño Moderno</h4>
                  <p className="text-sm text-light-gray">Interfaces intuitivas y atractivas.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;