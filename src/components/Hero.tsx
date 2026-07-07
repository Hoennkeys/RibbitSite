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
      className="hero-bg min-h-screen md:h-screen w-full flex flex-col md:flex-row items-center justify-between gap-12 max-w-7xl mx-auto px-6 md:px-12 pt-40 pb-20 md:py-0 overflow-hidden"
      aria-label="Apresentação do Ribbit"
    >
      {/* Elemento de Glow de Fundo (Ambient Light Backdrop) */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Lado Esquerdo - Conteúdo de Texto e CTAs (Copy Único) */}
      <div className="flex-1 flex flex-col items-start text-left max-w-2xl relative z-10">
        
        {/* Tag de Ciência Cidadã */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-6 select-none">
          🐸 Ciência Cidadã
        </div>
        
        {/* Headline Único */}
        <h1 className="font-title font-extrabold text-4xl md:text-6xl tracking-tight leading-tight text-white mb-6">
          A voz dos anfíbios <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            revelada pela ciência cidadã
          </span>
        </h1>
        
        {/* Subheadline */}
        <p className="font-body text-slate-300 text-lg md:text-xl leading-relaxed mb-8">
          Grave cantos, mapeie biomas brasileiros e ajude cientistas a catalogar a herpetologia do nosso país diretamente pelo seu smartphone.
        </p>
        
        {/* Botoes CTA */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button 
            className="btn-neon text-base px-8 py-3.5"
            onClick={onCtaClick}
            aria-label="Baixar o aplicativo móvel Ribbit"
          >
            Baixar Ribbit App 🐸
          </button>
          
          <a 
            href="#features" 
            className="inline-flex items-center justify-center border border-slate-700 bg-slate-900/40 hover:bg-slate-900/80 transition-colors text-white font-medium rounded-md px-8 py-3.5 text-base"
            aria-label="Ir para a seção de funcionalidades do aplicativo"
          >
            Como Funciona
          </a>
        </div>
      </div>

      {/* Lado Direito - Mockup de Celular Fictício (Elemento Visual Principal) */}
      <div className="flex-1 w-full max-w-md md:max-w-xl relative z-10 flex items-center justify-center">
        {/* Glow adicional atrás do celular */}
        <div className="absolute w-[300px] h-[300px] bg-accent/10 rounded-full blur-[90px] -z-10" />
        
        <img 
          src="/assets/hero-fallback.svg" 
          alt="Mockup gráfico do aplicativo Ribbit exibindo espectrograma bioacústico e ficha do Sapo-cururu" 
          className="w-full h-auto max-h-[55vh] md:max-h-[65vh] drop-shadow-2xl object-contain"
          style={{ animation: 'float 6s ease-in-out infinite' }}
        />
      </div>
      
      {/* Estilos inline para animação leve de flutuação */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
