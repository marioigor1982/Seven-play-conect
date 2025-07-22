
import React, { useState, useEffect, useRef } from 'react';
import { MenuIcon, CloseIcon } from './icons';

interface HeaderProps {
  onScrollToHome: () => void;
  onScrollToAbout: () => void;
  onScrollToPlans: () => void;
  onScrollToContact: () => void;
}

interface NavLinkProps {
    onClick: () => void;
    children: React.ReactNode;
    onComplete?: () => void;
    hoverColor: string;
    textColor?: string; // Added textColor prop
}

const NavLink: React.FC<NavLinkProps> = ({ onClick, children, onComplete, hoverColor, textColor }) => {
    const handleClick = () => {
        onClick();
        if (onComplete) onComplete();
    };
    return (
      <button
        onClick={handleClick}
        className={`px-4 py-2 text-[#999999] transition-colors duration-300 w-full text-left md:w-auto md:text-center font-normal hover:font-bold hover:scale-105 hover:text-[${hoverColor}]`}
        style={{ transition: 'all 0.2s' }}
        style={{ color: textColor }} // Apply text color
      >
        {children}
      </button>
    );
};

const Logo: React.FC<{ onClick: () => void }> = ({ onClick }: { onClick: () => void }) => (
  <button onClick={onClick} className="cursor-pointer focus:outline-none flex items-center gap-2" aria-label="Seven Play Connect Home">
    <img src="/img/LOGO 1.jpg" alt="Logo Seven Play Connect" className="h-20 w-auto" style={{ borderRadius: '50%' }} />
  </button>
);

const Header: React.FC<HeaderProps> = ({ onScrollToHome, onScrollToAbout, onScrollToPlans, onScrollToContact }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const [planosActive, setPlanosActive] = useState(false);
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current) {
        const footer = document.querySelector('footer');
        if (footer) footerRef.current = footer as HTMLElement;
      }
      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect();
        setFooterVisible(rect.top < window.innerHeight && rect.bottom > 0);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detectar se a seção Planos está visível
  useEffect(() => {
    const section = document.getElementById('planos');
    if (!section) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setPlanosActive(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-1 flex justify-between items-center">
        <Logo onClick={() => { onScrollToHome(); closeMenu(); }} />
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center text-lg">
          <NavLink onClick={onScrollToHome} hoverColor="#6A00B8" textColor={planosActive ? '#6A00B8' : undefined}>Home</NavLink>
          <NavLink onClick={onScrollToAbout} hoverColor="#F88840" textColor={planosActive ? '#6A00B8' : undefined}>Sobre</NavLink>
          <NavLink onClick={onScrollToPlans} hoverColor="#6A00B8" textColor={planosActive ? '#6A00B8' : undefined}>Planos</NavLink>
          {!footerVisible && <NavLink onClick={onScrollToContact} hoverColor="#F88840" textColor={planosActive ? '#6A00B8' : undefined}>Contato</NavLink>}
          {/* Botão Central do Assinante */}
          <a
            href="https://sevenplayconnect.sgp.net.br/accounts/central/login"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-4 py-2 rounded-full font-semibold transition-colors duration-200"
            style={{
              backgroundColor: '#6A00B8',
              color: '#fff',
            }}
            onMouseOver={e => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#F88840';
              (e.currentTarget as HTMLAnchorElement).style.color = '#fff';
            }}
            onMouseOut={e => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#6A00B8';
              (e.currentTarget as HTMLAnchorElement).style.color = '#fff';
            }}
            onMouseDown={e => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#999999';
              (e.currentTarget as HTMLAnchorElement).style.color = '#6A00B8';
            }}
            onMouseUp={e => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#F88840';
              (e.currentTarget as HTMLAnchorElement).style.color = '#fff';
            }}
          >
            Central do assinante
          </a>
        </nav>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
             <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu" 
                className="text-[#999999] focus:outline-none focus:text-white"
            >
                {isMenuOpen ? <CloseIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
            </button>
        </div>
      </div>
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-transparent">
            <nav className="flex flex-col items-start p-4 space-y-2">
                <NavLink onClick={onScrollToHome} onComplete={closeMenu} hoverColor="#6A00B8">Home</NavLink>
                <NavLink onClick={onScrollToAbout} onComplete={closeMenu} hoverColor="#F88840">Sobre</NavLink>
                <NavLink onClick={onScrollToPlans} onComplete={closeMenu} hoverColor="#6A00B8">Planos</NavLink>
                {!footerVisible && <NavLink onClick={onScrollToContact} onComplete={closeMenu} hoverColor="#F88840">Contato</NavLink>}
                {/* Botão Central do Assinante (Mobile) */}
                <a
                  href="https://sevenplayconnect.sgp.net.br/accounts/central/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 px-4 py-2 rounded-full font-semibold transition-colors duration-200 w-full text-center"
                  style={{
                    backgroundColor: '#6A00B8',
                    color: '#fff',
                  }}
                  onMouseOver={e => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#F88840';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#fff';
                  }}
                  onMouseOut={e => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#6A00B8';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#fff';
                  }}
                  onMouseDown={e => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#999999';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#6A00B8';
                  }}
                  onMouseUp={e => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#F88840';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#fff';
                  }}
                >
                  Central do assinante
                </a>
            </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
