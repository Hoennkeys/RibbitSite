import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export interface HeroProps {
  onCtaClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const { t } = useLanguage();

  const headline = t('hero.headline') || '';
  const parts = headline.split('|');
  const part1 = parts[0]?.trim() || '';
  const part2 = parts[1]?.trim() || '';

  const handleScrollToScreens = () => {
    const section = document.getElementById('app-screens');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="hero-bg min-h-screen md:h-screen w-full flex flex-col md:flex-row items-center justify-between gap-12 max-w-7xl mx-auto px-6 md:px-12 pt-40 pb-20 md:py-0 overflow-hidden"
      aria-label="Apresentação do Ribbit"
    >
      {/* Elemento de Glow de Fundo (Ambient Light Backdrop) */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Lado Esquerdo - Conteúdo de Texto e CTAs (Copy Único) */}
      <div className="flex-1 flex flex-col items-start text-left max-w-2xl relative z-10">
        
        {/* Headline Único */}
        <h1 className="font-title font-extrabold text-4xl md:text-6xl tracking-tight leading-tight text-white mb-6">
          {part1} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            {part2}
          </span>
        </h1>
        
        {/* Subheadline */}
        <p className="font-body text-slate-300 text-lg md:text-xl leading-relaxed mb-8">
          {t('hero.subheadline')}
        </p>
        
        {/* Botoes CTA */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button 
            onClick={onCtaClick}
            className="bg-primary hover:bg-primary-hover text-slate-950 font-title font-black text-sm uppercase tracking-wider px-8 py-4 rounded-lg shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:shadow-[0_0_25px_rgba(34,197,94,0.5)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer select-none text-center"
            aria-label="Baixar o aplicativo Ribbit"
          >
            {t('hero.cta')}
          </button>
          
          <button 
            onClick={handleScrollToScreens}
            className="border-2 border-white/20 hover:border-primary text-white hover:text-primary transition-all font-title font-bold text-xs uppercase tracking-wider px-6 py-4 rounded-lg cursor-pointer select-none text-center"
            aria-label="Visualizar capturas de tela do app"
          >
            {t('hero.secondary')}
          </button>
        </div>

      </div>

      {/* Lado Direito - Mockup de Celular Realista sem Textos Duplicados */}
      <div className="flex-1 relative flex items-center justify-center select-none w-full max-w-[420px] md:max-w-none md:h-full py-10 md:py-0">
        {/* Anel de Neon em Background por trás do Celular */}
        <div className="absolute w-[280px] h-[480px] md:w-[320px] md:h-[540px] rounded-[55px] border border-primary/20 bg-primary/5 blur-sm pointer-events-none -z-10 animate-pulse" />
        
        {/* Mockup de Celular Limpo com viewBox Ajustado */}
        <div className="relative w-full max-w-[280px] md:max-w-[340px] aspect-[480/560] drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]">
          <img 
            src="/assets/hero-fallback.svg" 
            alt="Ilustração do aplicativo Ribbit rodando em um smartphone exibindo o mapa e biomas" 
            className="w-full h-full object-contain"
            width="340"
            height="396"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>

    </section>
  );
};

export default Hero;
