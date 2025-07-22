
import React from 'react';
import { Plan } from '../types';
import { WhatsAppIcon } from './icons';
import { WHATSAPP_PHONE_NUMBER } from '../constants';

interface PlanCardProps {
  plan: Plan;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan }: PlanCardProps) => {
  const { whatsappMessage, isFeatured } = plan;
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE_NUMBER}&text=${encodeURIComponent(whatsappMessage)}`;

  const cardClasses = `
    rounded-xl shadow-lg p-4 flex flex-col relative
    transition-all duration-300 transform hover:-translate-y-1
    border-2
    ${isFeatured 
      ? 'bg-[#6A00B8] text-white border-[#F88840] scale-100' 
      : 'bg-gray-800 text-white border-transparent'
    }
  `;
  
  const buttonClasses = `
    w-full flex items-center justify-center gap-2 mt-auto py-2 px-4 
    rounded-lg font-bold text-center transition-colors duration-300
    text-base
    ${isFeatured
      ? 'bg-white text-[#6A00B8] hover:bg-gray-200'
      : 'bg-[#F88840] text-white hover:bg-[#F88840]/80'
    }
  `;

  const checkIconClass = isFeatured ? 'text-white h-4 w-4' : 'text-[#F88840] h-4 w-4';

  return (
    <div className={cardClasses}>
      {isFeatured && (
        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-[#F88840] text-white px-3 py-0.5 rounded-full text-xs font-bold shadow-lg">
            MAIS POPULAR
        </div>
      )}
      <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
      <div className="flex items-baseline mb-4">
        <span className="text-3xl font-extrabold">{plan.speed}</span>
        <span className="ml-2 text-base font-semibold">MB</span>
      </div>
      <div className="flex items-baseline mb-4">
        <span className="text-lg font-semibold">R$</span>
        <span className="text-2xl font-bold ml-1">{plan.price}</span>
        <span className="ml-2">/mês</span>
      </div>
      <ul className="space-y-2 mb-6 flex-grow">
        {plan.details.map((detail: string, index: number) => (
          <li key={index} className="flex items-center">
            <svg className={`${checkIconClass} mr-2`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span className="text-sm">{detail}</span>
          </li>
        ))}
      </ul>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses}
      >
        <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-[#25D366] shadow-md mr-2">
          <WhatsAppIcon className="h-4 w-4 text-white" />
        </span>
        Contrate Já!
      </a>
    </div>
  );
};

export default PlanCard;
