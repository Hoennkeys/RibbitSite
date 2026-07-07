import React, { useState, useEffect, useRef } from 'react';

interface ScreenItem {
  title: string;
  description: string;
  src: string;
}

const SCREENS: ScreenItem[] = [
  {
    title: 'Painel Inicial',
    description: 'Acompanhe as últimas descobertas de anfíbios e notícias científicas da comunidade.',
    src: '/assets/screens/dashboard.svg',
  },
  {
    title: 'Sound ID',
    description: 'Grave o canto e compare a assinatura bioacústica do anfíbio em tempo real.',
    src: '/assets/screens/soundid.svg',
  },
  {
    title: 'Explorar Regiões',
    description: 'Consulte o catálogo de espécies organizado por biomas brasileiros.',
    src: '/assets/screens/explore.svg',
  },
  {
    title: 'Assistente Geográfico',
    description: 'Identifique anfíbios por morfologia e habitat através de filtragem offline.',
    src: '/assets/screens/wizard.svg',
  },
  {
    title: 'Chat Científico',
    description: 'Conecte-se com biólogos e herpetólogos para tirar dúvidas taxonômicas.',
    src: '/assets/screens/chat.svg',
  },
];

export const ScreensCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayTimer = useRef<any>(null);
  const touchStartX = useRef<number | null>(null);

  // Lógica de Autoplay
  useEffect(() => {
    if (!isPaused) {
      autoplayTimer.current = setInterval(() => {
        handleNext();
      }, 4000);
    }
    return () => {
      if (autoplayTimer.current) clearInterval(autoplayTimer.current);
    };
  }, [activeIndex, isPaused]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? SCREENS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === SCREENS.length - 1 ? 0 : prev + 1));
  };

  // Suporte a Swipe de Toque (Mobile Touch Gesture)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext(); // Swipe para a esquerda
      } else {
        handlePrev(); // Swipe para a direita
      }
    }
    touchStartX.current = null;
  };

  return (
    <section 
      id="app-screens"
      className="py-24 px-6 md:px-12 bg-slate-950 flex flex-col items-center overflow-hidden"
      role="region"
      aria-label="Galeria de telas do aplicativo móvel Ribbit"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="text-center max-w-2xl mb-16 relative z-10">
        <span className="text-primary text-xs font-bold tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
          Galeria do App
        </span>
        <h2 className="font-title font-bold text-3xl md:text-4xl text-white tracking-tight mt-6 mb-4">
          Conheça a interface do Ribbit
        </h2>
        <p className="font-body text-slate-400 text-base md:text-lg">
          Explore as principais telas desenvolvidas sob a estética minimalista do Apple Design System.
        </p>
      </div>

      {/* Contêiner de Layout */}
      <div className="relative w-full max-w-5xl flex flex-col md:flex-row items-center gap-12 z-10">
        {/* Glow de ambientação no fundo do carrossel */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none -z-10" />

        {/* Lado Esquerdo - Descrição das Telas que mudam de acordo com o index */}
        <div className="flex-1 text-center md:text-left max-w-md">
          <div className="hidden md:block mb-8">
            <span className="text-slate-500 font-title font-bold text-sm tracking-wider">
              TELA {activeIndex + 1} DE {SCREENS.length}
            </span>
          </div>

          <h3 className="font-title font-bold text-2xl text-white tracking-tight mb-4 transition-all duration-300">
            {SCREENS[activeIndex].title}
          </h3>
          
          <p className="font-body text-slate-400 leading-relaxed text-base min-h-[80px]">
            {SCREENS[activeIndex].description}
          </p>

          {/* Setas de Controle em Desktop */}
          <div className="hidden md:flex items-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-slate-700 bg-slate-900/40 hover:bg-slate-900/80 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Tela anterior"
            >
              <span className="text-xl">‹</span>
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-slate-700 bg-slate-900/40 hover:bg-slate-900/80 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Próxima tela"
            >
              <span className="text-xl">›</span>
            </button>
          </div>
        </div>

        {/* Lado Direito - O Viewport das Screenshots com Efeito de Swipe e 3D */}
        <div 
          className="w-full max-w-[280px] md:max-w-[320px] aspect-[360/740] relative flex items-center justify-center cursor-grab active:cursor-grabbing"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {SCREENS.map((screen, idx) => {
            // Calcular offset e opacidade para posicionamento tridimensional suave
            let offset = idx - activeIndex;
            
            // Tratamento de loop circular nos extremos
            if (offset < -2) offset += SCREENS.length;
            if (offset > 2) offset -= SCREENS.length;

            const isVisible = Math.abs(offset) <= 1;

            if (!isVisible) return null;

            return (
              <div
                key={idx}
                className="absolute w-full h-full transition-all duration-500 ease-out select-none"
                style={{
                  transform: `translateX(${offset * 105}%) scale(${idx === activeIndex ? 1 : 0.85})`,
                  opacity: idx === activeIndex ? 1 : 0.35,
                  zIndex: idx === activeIndex ? 20 : 10,
                  pointerEvents: idx === activeIndex ? 'auto' : 'none',
                }}
              >
                <div className="w-full h-full rounded-[35px] shadow-2xl overflow-hidden bg-slate-950 border border-white/5">
                  <img
                    src={screen.src}
                    alt={`Screenshot da tela ${screen.title} do Ribbit`}
                    className="w-full h-full object-cover"
                    width="320"
                    height="660"
                    loading="lazy"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Indicadores de Página (Pontos de Slide) */}
      <div className="flex items-center gap-3 mt-12">
        {SCREENS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              idx === activeIndex ? 'bg-primary w-6' : 'bg-slate-700'
            }`}
            aria-label={`Ir para a tela ${idx + 1}`}
            aria-current={idx === activeIndex ? 'true' : 'false'}
          />
        ))}
      </div>
    </section>
  );
};

export default ScreensCarousel;
