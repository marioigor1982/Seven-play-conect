import React from 'react';

interface HeroProps {
    onScrollToPlans: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollToPlans }: HeroProps) => {
  return (
    <section 
      className="h-screen flex items-center justify-center relative overflow-hidden"
    >
        <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
             <source src="./img/7play_video.mp4" type="video/mp4" />
             Seu navegador não suporta a tag de vídeo.
        </video>

      <div className="absolute inset-0 bg-black/70 z-10"></div>
      <div className="relative text-center z-20 px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 leading-tight">
          A conexão que <span className="animated-gradient">transforma</span> seu mundo.
        </h1>
        <style>{`
          .animated-gradient {
            background: linear-gradient(270deg, #6A00B8, #999999, #F88840, #6A00B8);
            background-size: 600% 600%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
            animation: gradientMove 4s ease-in-out infinite;
          }
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            33% { background-position: 50% 50%; }
            66% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
        <p className="text-lg md:text-xl text-[#999999] max-w-2xl mx-auto mb-8">
          Internet 100% Fibra Óptica com ultravelocidade e estabilidade para você e sua família.
        </p>
        <button
            onClick={onScrollToPlans}
            className="bg-[#F88840] text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-[#F88840]/80 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Conheça os Planos
        </button>
      </div>
    </section>
  );
};

export default Hero;