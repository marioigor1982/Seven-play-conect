
import React from 'react';
import { INSTAGRAM_URL, EMAIL_ADDRESS } from '../constants';
import { InstagramIcon, EmailIcon, PhoneIcon } from './icons';

const Footer: React.FC = () => {
    const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.442111059103!2d-46.85218708502102!3d-23.62423598465192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cfab42000f073d%3A0x6080352528104277!2sEstr.%20Dona%20Maria%20Jos%C3%A9%20Ferraz%20Prado%2C%202595%20-%20Ch%C3%A1caras%20Bartira%2C%20Embu%20das%20Artes%20-%20SP%2C%2006845-176%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1678886400000!5m2!1spt-BR!2sus";

  return (
    <footer className="bg-[#999999] border-t border-gray-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1: Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Seven Play Connect</h3>
            <p className="text-white">Estr. Dona Maria José Ferraz Prado, 2595 - Chácaras Bartira, Embu das Artes - SP, 06845-176</p>
            <p className="text-white">CNPJ: 30.892.606/0001-40</p>
            <div className="flex items-center gap-3">
              <PhoneIcon className="h-5 w-5 text-white"/>
              <a href="tel:+551142441739" className="text-white">(11) 4244-1739</a>
            </div>
          </div>

          {/* Column 2: Map */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Nossa Localização</h3>
            <div className="overflow-hidden rounded-lg shadow-lg border border-gray-800">
              <iframe
                src={mapSrc}
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Endereço da Seven Play Connect"
              ></iframe>
            </div>
          </div>
          
          {/* Column 3: Social */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Siga-nos</h3>
            <div className="flex space-x-5">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-[#6A00B8] transition-colors duration-300">
                <InstagramIcon className="h-8 w-8"/>
              </a>
              <a href={`mailto:${EMAIL_ADDRESS}`} aria-label="E-mail" className="text-white hover:text-[#6A00B8] transition-colors duration-300">
                <EmailIcon className="h-8 w-8"/>
              </a>
            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-white">&copy; {new Date().getFullYear()} Seven Play Connect. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
