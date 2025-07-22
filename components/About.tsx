import React from 'react';
import { PhoneIcon } from './icons';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-[#6A00B8] relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/img/family_happy.mp4" type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>
      <div className="absolute inset-0 bg-[#6A00B8]/80 z-10"></div>
      <div className="container mx-auto px-6 relative z-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-[#F88840] transition-colors duration-300 hover:text-[#999999] cursor-pointer">Sobre a <span className="text-[#F88840]">Seven Play</span></h2>
          <p className="text-white mt-2">Conectando você ao que importa.</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="w-full max-w-2xl text-center text-lg text-white">
            <p className="mb-4">
              A Seven Play Connect é uma empresa que fornece conexão ultrarrápida para residências e empresas. Oferecemos internet de qualidade 100% fibra óptica com planos de 300 a 1000 mega.
            </p>
            <p className="mb-6">
              Nossos técnicos qualificados podem ajudá-lo a analisar suas necessidades de conexão e a fornecer a melhor solução para sua casa ou negócio.
            </p>
            <div className="p-6 flex flex-col items-center gap-4 mt-6">
                <PhoneIcon className="h-8 w-8 text-[#F88840]"/>
                <p className="font-semibold text-white">Fale com um especialista!</p>
                <a href="tel:+551142441739" className="text-2xl font-bold text-[#F88840] hover:no-underline no-underline">(11) 4244-1739</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;