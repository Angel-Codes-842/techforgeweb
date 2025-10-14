import React from 'react';
import { motion } from 'framer-motion';
import { HardDrive, Gamepad2, Code, Rocket } from 'lucide-react';

const services = [
  {
    icon: <HardDrive size={48} className="text-primary" />,
    title: "Reparación de Notebooks y PCs",
    description: "Soluciones rápidas y efectivas para cualquier problema de hardware o software."
  },
  {
    icon: <Gamepad2 size={48} className="text-primary" />,
    title: "Ensamblaje de PC Gamer/Profesional",
    description: "Construimos la máquina de tus sueños, optimizada para máximo rendimiento."
  },
  {
    icon: <Code size={48} className="text-primary" />,
    title: "Desarrollo Web y Soluciones Digitales",
    description: "Creamos sitios web modernos y aplicaciones a medida para tu negocio."
  },
  {
    icon: <Rocket size={48} className="text-primary" />,
    title: "Mantenimiento y Optimización",
    description: "Aseguramos que tus sistemas operen con la máxima eficiencia y seguridad."
  }
];

const Services = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">¿Qué hacemos?</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-charcoal/60 p-8 rounded-xl border border-transparent hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_0_1.5rem_-0.5rem_#00ffd0]"
              variants={cardVariants}
            >
              <div className="mb-6 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">{service.title}</h3>
              <p className="text-light-gray text-center">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;