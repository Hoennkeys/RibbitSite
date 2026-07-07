import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface ScreenItem {
  src: string;
}

const SCREENS_DATA: ScreenItem[] = [
  { src: '/assets/screens/dashboard.svg' },
  { src: '/assets/screens/soundid.svg' },
  { src: '/assets/screens/explore.svg' },
  { src: '/assets/screens/wizard.svg' },
  { src: '/assets/screens/chat.svg' },
];

export const ScreensCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayTimer = useRef<any>(null);
  const touchStartX = useRef<number | null>(null);
  const dragStartX = useRef<number | null>(null);

  const { t } = useLanguage();

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
    setActiveIndex((prev) => (prev === 0 ? SCREENS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === SCREENS_DATA.length - 1 ? 0 : prev + 1));
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

  // Suporte a Arrastar com Mouse (Desktop Mouse Swipe)
  const handleMouseDown = (e: React.MouseEvent) => {
    dragStartX.current = e.clientX;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (dragStartX.current === null) return;
    const dragEndX = e.clientX;
    const diff = dragStartX.current - dragEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext(); // Arrastou para a esquerda -> próximo
      } else {
        handlePrev(); // Arrastou para a direita -> anterior
      }
    }
    dragStartX.current = null;
  };

  const handleMouseLeaveViewport = () => {
    dragStartX.current = null;
  };

  // Helper para buscar título e descrição traduzidos do slide atual
  const getActiveTitle = () => {
    return t(`carousel.slides.${activeIndex}.title`) || '';
  };

  const getActiveDescription = () => {
    return t(`carousel.slides.${activeIndex}.description`) || '';
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
      {/* 1. Cabeçalho de Introdução da Seção */}
      <div className="text-center max-w-2xl mb-12 relative z-10">
        <span className="text-primary text-[11px] font-bold tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full border border-primary/20 select-none">
          {t('carousel.tag')}
        </span>
        <h2 className="font-title font-bold text-3xl md:text-4xl text-white tracking-tight mt-6 mb-4">
          {t('carousel.title')}
        </h2>
        <p className="font-body text-slate-400 text-sm md:text-base">
          {t('carousel.subtitle')}
        </p>
      </div>

      {/* 2. Área do Visualizador de Celulares (Centralizado Horizontalmente) */}
      <div className="relative w-full flex items-center justify-center py-6 z-10">
        {/* Glow de ambientação no fundo */}
        <div className="absolute w-[350px] h-[350px] bg-primary/5 rounded-full blur-[110px] pointer-events-none -z-10" />

        {/* Seta Esquerda (Desktop) */}
        <button
          onClick={handlePrev}
          className="absolute left-2 lg:left-28 z-30 w-11 h-11 rounded-full border border-slate-800 bg-slate-900/60 hover:bg-slate-900/90 text-white hidden md:flex items-center justify-center transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer select-none"
          aria-label="Tela anterior"
        >
          <span className="text-xl leading-none">‹</span>
        </button>

        {/* Viewport dos Celulares (Centralizado) */}
        <div 
          className="w-full max-w-[270px] md:max-w-[300px] aspect-[360/740] relative flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeaveViewport}
        >
          {SCREENS_DATA.map((screen, idx) => {
            let offset = idx - activeIndex;
            
            // Ajuste circular do index do slide
            if (offset < -2) offset += SCREENS_DATA.length;
            if (offset > 2) offset -= SCREENS_DATA.length;

            const isVisible = Math.abs(offset) <= 1;

            if (!isVisible) return null;

            return (
              <div
                key={idx}
                className="absolute w-full h-full transition-all duration-500 ease-out select-none"
                style={{
                  transform: `translateX(${offset * 115}%) scale(${idx === activeIndex ? 1 : 0.82})`,
                  opacity: idx === activeIndex ? 1 : 0.25,
                  zIndex: idx === activeIndex ? 20 : 10,
                  pointerEvents: idx === activeIndex ? 'auto' : 'none',
                }}
              >
                <div className="w-full h-full rounded-[35px] shadow-2xl overflow-hidden bg-slate-950 border border-white/5 select-none">
                  <img
                    src={screen.src}
                    alt={`Screenshot da tela de ${t(`carousel.slides.${idx}.title`)}`}
                    className="w-full h-full object-cover pointer-events-none select-none"
                    width="300"
                    height="620"
                    loading="lazy"
                    draggable="false"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Seta Direita (Desktop) */}
        <button
          onClick={handleNext}
          className="absolute right-2 lg:right-28 z-30 w-11 h-11 rounded-full border border-slate-800 bg-slate-900/60 hover:bg-slate-900/90 text-white hidden md:flex items-center justify-center transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer select-none"
          aria-label="Próxima tela"
        >
          <span className="text-xl leading-none">›</span>
        </button>
      </div>

      {/* 3. Descrição da Tela Ativa (Renderizada Abaixo do Carrossel para evitar overlaps) */}
      <div className="text-center max-w-md mt-10 px-6 z-10 transition-all duration-300">
        <div className="mb-2 select-none">
          <span className="text-slate-500 font-title font-bold text-[11px] tracking-widest uppercase">
            TELA {activeIndex + 1} DE {SCREENS_DATA.length}
          </span>
        </div>
        <h3 className="font-title font-bold text-2xl text-white tracking-tight mb-3">
          {getActiveTitle()}
        </h3>
        <p className="font-body text-slate-400 leading-relaxed text-sm md:text-base min-h-[50px] max-w-sm mx-auto">
          {getActiveDescription()}
        </p>
      </div>

      {/* 4. Indicadores de Bolinhas (Paginação) */}
      <div className="flex items-center gap-2.5 mt-8 z-10">
        {SCREENS_DATA.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
              idx === activeIndex ? 'bg-primary w-5' : 'bg-slate-700'
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
