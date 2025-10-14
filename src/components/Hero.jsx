import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/imagen-hero.jpg';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="home" className="relative container mx-auto px-6 py-32 min-h-screen flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Column: Text Content */}
        <motion.div
          className="flex flex-col gap-6 text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="text-primary font-semibold tracking-wider"
            variants={itemVariants}
          >
            SOLUCIONES TECNOLÓGICAS
          </motion.p>
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
            variants={itemVariants}
          >
            IMPULSAMOS TU PRODUCTIVIDAD TECNOLÓGICA
          </motion.h1>
          <motion.p
            className="text-light-gray text-lg"
            variants={itemVariants}
          >
            Desde reparaciones expertas hasta desarrollo de software a medida, forjamos las herramientas que necesitas para triunfar.
          </motion.p>
          <motion.div variants={itemVariants}>
            <a
              href="#services"
              className="inline-block mt-4 px-8 py-3 border border-primary text-primary font-semibold rounded-lg transition-colors duration-300 hover:bg-primary hover:text-charcoal"
            >
              Conocer más
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Image Placeholder */}
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-secondary/10 rounded-2xl shadow-[0_0_3rem_-1rem_#00b4ff]"></div>
            <img src={heroImage} alt="Tecnología y desarrollo" className="absolute inset-0 w-full h-full object-cover rounded-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;