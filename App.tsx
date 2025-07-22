import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Plans from './components/Plans';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import GoogleReviews from './components/GoogleReviews';

const App: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const plansRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#111] text-[#999999] font-sans">
      <Header
        onScrollToHome={scrollToTop}
        onScrollToAbout={() => scrollTo(aboutRef)}
        onScrollToPlans={() => scrollTo(plansRef)}
        onScrollToContact={() => scrollTo(contactRef)}
      />
      <main>
        <div ref={homeRef}>
          <Hero onScrollToPlans={() => scrollTo(plansRef)} />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={plansRef}>
          <Plans />
        </div>
        <div ref={contactRef}>
          <Footer />
        </div>
      </main>
      <FloatingWhatsApp />
    </div>
  );
};

export default App;