import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, ArrowRight, Send, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const whatsappNumber = "595975628945";
  const whatsappMessage = "Hola, estoy interesado en sus servicios de desarrollo web y me gustaría solicitar una cotización.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge mb-4">
              <Send size={14} />
              Contacto
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4">
              ¿Tienes un proyecto en <span className="gradient-text">mente</span>?
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto text-lg">
              Hagamos realidad tu próxima idea. Contáctanos y recibe una cotización sin compromiso.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* WhatsApp Card */}
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card rounded-2xl p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-500"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
              <p className="text-gray-400 text-sm mb-4">
                Respuesta rápida. Envíanos un mensaje directo y te contestamos al instante.
              </p>
              <span className="inline-flex items-center gap-2 text-emerald-400 font-semibold text-sm group-hover:gap-3 transition-all">
                Enviar mensaje <ArrowRight size={16} />
              </span>
            </motion.a>

            {/* Email Card */}
            <motion.a
              href="mailto:hernan17ayala@gmail.com"
              className="group glass-card rounded-2xl p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-500"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <Mail size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-gray-400 text-sm mb-4">
                Para propuestas detalladas o documentación de proyectos. Te respondemos en 24h.
              </p>
              <span className="inline-flex items-center gap-2 text-secondary font-semibold text-sm group-hover:gap-3 transition-all">
                Enviar correo <ArrowRight size={16} />
              </span>
            </motion.a>
          </div>

          {/* Info strip */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 text-gray-400">
              <MapPin size={18} className="text-primary" />
              <span className="text-sm">Paraguay</span>
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <Clock size={18} className="text-primary" />
              <span className="text-sm">Lun - Sáb, 8:00 - 18:00</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;