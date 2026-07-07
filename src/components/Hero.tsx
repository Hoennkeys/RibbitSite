/**
 * Componente: Hero
 * Referência do Design System: /design-system/design-system.json -> components[1] (Hero)
 */

import React from 'react';

export interface HeroProps {
  onCtaClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section 
      id="hero" 
      className="relative w-full min-h-screen md:h-screen flex flex-col md:flex-row md:items-center md:justify-center text-center overflow-hidden"
      aria-label="Apresentação do Ribbit"
    >
      {/* 1. Imagem de Fundo de Tela Cheia (100vh / h-screen no desktop) */}
      <div className="absolute inset-0 w-full h-full -z-20 hidden md:block">
        <img 
          src="/assets/hero-fallback.svg" 
          alt="Plano de fundo tecnológico da interface do Ribbit" 
          className="w-full h-full object-cover"
          style={{ width: '100%', height: '100vh' }}
        />
        {/* Overlay de gradiente escuro para contraste e legibilidade ideal do texto */}
        <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-[3px]" />
      </div>

      {/* 2. Conteúdo de Texto e Ações (Centralizado e Sobreposto em Desktop / No Topo em Mobile) */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 pt-40 pb-12 md:py-0 flex flex-col items-center justify-center">
        
        {/* Tag de Ciência Cidadã */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-6 select-none">
          🐸 Ciência Cidadã
        </div>
        
        {/* Headline Único */}
        <h1 className="font-title font-extrabold text-4xl md:text-6xl tracking-tight leading-tight text-white mb-6 max-w-3xl">
          A voz dos anfíbios <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            revelada pela ciência cidadã
          </span>
        </h1>
        
        {/* Subheadline */}
        <p className="font-body text-slate-300 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
          Grave cantos, mapeie biomas brasileiros e ajude cientistas a catalogar a herpetologia do nosso país diretamente pelo seu smartphone.
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12 md:mb-0">
          <button 
            className="btn-neon text-base px-8 py-3.5"
            onClick={onCtaClick}
            aria-label="Baixar o aplicativo móvel Ribbit"
          >
            Baixar Ribbit App 🐸
          </button>
          
          <a 
            href="#features" 
            className="inline-flex items-center justify-center border border-slate-700 bg-slate-900/60 hover:bg-slate-900/95 transition-colors text-white font-medium rounded-md px-8 py-3.5 text-base"
            aria-label="Ir para a seção de funcionalidades do aplicativo"
          >
            Como Funciona
          </a>
        </div>
      </div>

      {/* 3. Imagem Lateral/Inferior Responsiva para Mobile (Posicionada abaixo do texto) */}
      <div className="w-full px-6 pb-16 md:hidden flex justify-center z-10">
        <div className="w-full max-w-sm rounded-[24px] overflow-hidden border border-white/10 shadow-2xl relative">
          <img 
            src="/assets/hero-fallback.svg" 
            alt="Interface do Ribbit com espectrograma bioacústico" 
            className="w-full h-[350px] object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/30" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
