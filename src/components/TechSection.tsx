import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const TechSection: React.FC = () => {
  const { t } = useLanguage();

  const handleMoreClick = () => {
    alert('Mais informações detalhadas sobre a tecnologia Sound ID e algoritmos bioacústicos serão disponibilizadas em breve.');
  };

  return (
    <section 
      id="features" 
      className="w-full bg-white text-slate-900 py-24 px-6 md:px-12 flex justify-center border-t border-b border-slate-200"
      aria-label="Funcionalidade Sound ID"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Lado Esquerdo - Copy e Informações (Estilo Merlin) */}
        <div className="flex-1 flex flex-col items-start text-left max-w-xl">
          <span className="text-primary text-[11px] font-bold tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full border border-primary/20 mb-5 select-none">
            {t('tech.tag')}
          </span>
          <h2 className="font-title font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight mb-6">
            {t('tech.title')}
          </h2>
          
          <p className="font-body text-slate-700 text-base md:text-lg leading-relaxed mb-6">
            {t('tech.desc1')}
          </p>
          
          <p className="font-body text-slate-500 text-sm md:text-base leading-relaxed mb-8">
            {t('tech.desc2')}
          </p>
          
          <button 
            onClick={handleMoreClick}
            className="border-2 border-slate-800 hover:border-primary text-slate-800 hover:text-primary hover:bg-slate-50 transition-all duration-200 font-title font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-md cursor-pointer"
            aria-label="Saber mais sobre o funcionamento do Sound ID"
          >
            {t('tech.btn')}
          </button>
        </div>

        {/* Lado Direito - Ilustração do Sapo e Mockup do Telefone Lado a Lado (Estilo Merlin) */}
        <div className="flex-1 w-full flex items-center justify-center gap-6 md:gap-10">
          
          {/* Imagem do Sapo Cutout (Esquerda do Celular) */}
          <div className="flex-1 max-w-[180px] md:max-w-[220px] aspect-square flex items-center justify-center select-none">
            <img 
              src="/assets/frog-cutout.png" 
              alt="Ilustração isolada do sapo verde arborícola brasileiro" 
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>

          {/* Celular Mockup do App (Direita do Sapo) */}
          <div className="flex-1 max-w-[165px] md:max-w-[200px] aspect-[360/740] rounded-[24px] overflow-hidden border border-slate-200 shadow-xl bg-slate-950 relative">
            <img 
              src="/assets/screens/soundid.svg" 
              alt="Interface gráfica do Sound ID exibindo espectrograma e match de espécies no app Ribbit" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default TechSection;
