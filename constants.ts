import { Plan } from './types';

export const WHATSAPP_PHONE_NUMBER = '551142441739';
const WHATSAPP_BASE_URL = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE_NUMBER}&text=`;

const FLOATING_BUTTON_MESSAGE = `Confira nossos planos e escolha o que mais combina com você:

📶 300 MB – R$ 79,90/mês
⚡ 400 MB – R$ 99,90/mês
🚀 500 MB – R$ 119,90/mês

💬 Fale com a gente e ative já o seu plano!
🌐 Conecte-se com qualidade. Conecte-se com a Seven Play Connect.`;

export const FLOATING_WHATSAPP_URL = `${WHATSAPP_BASE_URL}${encodeURIComponent(FLOATING_BUTTON_MESSAGE)}`;
export const INSTAGRAM_URL = "https://www.instagram.com/7playconnect";
export const EMAIL_ADDRESS = "contato@7playconnect.com";

const WHATSAPP_MESSAGE_300 = `🟢 Plano Essencial – 300 MB
💰 R$ 79,90/mês

Ideal para quem quer navegar com qualidade!
🔗 Conecte-se com estabilidade.
🌐 Seven Play Connect: internet que acompanha seu dia!`;

const WHATSAPP_MESSAGE_400 = `🔵 Plano Avançado – 400 MB
💰 R$ 99,90/mês

Mais velocidade para sua rotina!
⚡ Navegue com desempenho superior.
🌐 Seven Play Connect: a internet que não te deixa na mão!`;

const WHATSAPP_MESSAGE_500 = `🔴 Plano Ultra – 500 MB
💰 R$ 119,90/mês

O máximo em performance!
🚀 Ultra velocidade. Ultra estabilidade.
🌐 Seven Play Connect: potência total na sua conexão!`;

export const INTERNET_PLANS: Plan[] = [
  {
    id: 1,
    name: "Plano Essencial",
    speed: "300",
    price: "79,90",
    details: ["Ideal para redes sociais", "Streaming em HD", "Home office e estudos"],
    whatsappMessage: WHATSAPP_MESSAGE_300,
  },
  {
    id: 2,
    name: "Plano Avançado",
    speed: "400",
    price: "99,90",
    details: ["Streaming em Full HD", "Jogos online sem lag", "Múltiplos dispositivos conectados"],
    whatsappMessage: WHATSAPP_MESSAGE_400,
    isFeatured: true,
  },
  {
    id: 3,
    name: "Plano Ultra",
    speed: "500",
    price: "119,90",
    details: ["Downloads e uploads instantâneos", "Performance máxima para gamers", "Casa 100% conectada"],
    whatsappMessage: WHATSAPP_MESSAGE_500,
  },
];
