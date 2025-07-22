
import React from 'react';
import { INTERNET_PLANS } from '../constants';
import PlanCard from './PlanCard';

const Plans: React.FC = () => {
  return (
    <section id="planos" className="py-20 bg-[#F88840] relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/img/Seven_play.mp4" type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>
      <div className="absolute inset-0 bg-[#F88840]/80 z-10"></div>
      <div className="container mx-auto px-6 relative z-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">Planos de Internet Fibra</h2>
          <p className="text-white mt-2 max-w-2xl mx-auto">
            Escolha a velocidade que mais combina com você. Conexão 100% fibra óptica para garantir a melhor experiência.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 relative pt-4">
          {INTERNET_PLANS.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
