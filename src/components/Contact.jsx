import React from 'react';
import { Mail } from 'lucide-react';

const Contact = () => {
  const whatsappNumber = "595975628945"; 
  const whatsappMessage = "Hola, estoy interesado en sus servicios y me gustaría solicitar una cotización.";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contact" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">¿Listo para empezar?</h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Contáctanos para obtener una cotización sin compromiso o para discutir tu próximo proyecto tecnológico.
        </p>
        <div className="mt-8 flex flex-col gap-4 items-center">
            <p className="text-light-gray">Puedes contactarnos por correo electrónico:</p>
            <a 
                href="mailto:hernan17ayala@gmail.com"
                className="bg-secondary text-charcoal font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition duration-300 inline-flex items-center"
            >
                <Mail className="w-6 h-6 mr-3" />
                Aquí
            </a>
            <p className="text-light-gray pt-4">O envíanos un mensaje directo:</p>
            <a 
                href={whatsappUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary text-charcoal font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition duration-300 inline-flex items-center"
            >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.357 1.849 6.081l-1.214 4.439 4.562-1.195z" />
                </svg>
                Enviar mensaje por WhatsApp
            </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;