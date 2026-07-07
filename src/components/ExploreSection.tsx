import React from 'react';

export const ExploreSection: React.FC = () => {
  const handleExploreClick = () => {
    alert('Acesso ao catálogo geográfico e mapas interativos de biomas em desenvolvimento.');
  };

  return (
    <section 
      id="download" 
      className="w-full bg-white text-slate-900 pb-28 pt-12 px-6 md:px-12 flex justify-center border-b border-slate-200"
      aria-label="Funcionalidade Explorar e Assistente"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Lado Esquerdo - Copy e Informações (Estilo Merlin) */}
        <div className="flex-1 flex flex-col items-start text-left max-w-xl">
          <h2 className="font-title font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight mb-6">
            Explore Espécies por Região e Bioma
          </h2>
          
          <p className="font-body text-slate-700 text-base md:text-lg leading-relaxed mb-6">
            O catálogo do <strong className="text-slate-900">Explorar</strong> permite que você descubra os anfíbios nativos de cada região do Brasil. Filtre os registros por biomas como Mata Atlântica, Cerrado ou Amazônia e consulte mapas de dispersão geográfica para entender exatamente a origem de cada espécie.
          </p>
          
          <p className="font-body text-slate-500 text-sm md:text-base leading-relaxed mb-8">
            Dúvidas na identificação? O <strong className="text-slate-900">Assistente Guiado</strong> faz perguntas morfológicas rápidas sobre o bioma, comportamento e tipo de canto, cruzando dados geográficos locais para listar as espécies com maior probabilidade de ocorrência na sua área.
          </p>
          
          <button 
            onClick={handleExploreClick}
            className="border-2 border-slate-800 hover:border-primary text-slate-800 hover:text-primary hover:bg-slate-50 transition-all duration-200 font-title font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-md"
            aria-label="Acessar o mapa de biomas brasileiros"
          >
            Explorar Biomas
          </button>
        </div>

        {/* Lado Direito - Tríptico: Celular Explorar + Sapo Azul + Celular Assistente (Estilo Merlin) */}
        <div className="flex-1 w-full flex items-center justify-center gap-4 md:gap-6">
          
          {/* Celular Explorar (Esquerda) */}
          <div className="flex-1 max-w-[130px] md:max-w-[165px] aspect-[360/740] rounded-[20px] overflow-hidden border border-slate-200 shadow-lg bg-slate-950 relative">
            <img 
              src="/assets/screens/explore.svg" 
              alt="Interface do catálogo de exploração do app Ribbit" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Sapo Azul Dendrobates Cutout (Centro) */}
          <div className="flex-1 max-w-[110px] md:max-w-[140px] aspect-square flex items-center justify-center select-none">
            <img 
              src="/assets/frog-explore-cutout.png" 
              alt="Ilustração isolada do sapo ponta-de-flecha azul brasileiro" 
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>

          {/* Celular Assistente (Direita) */}
          <div className="flex-1 max-w-[130px] md:max-w-[165px] aspect-[360/740] rounded-[20px] overflow-hidden border border-slate-200 shadow-lg bg-slate-950 relative">
            <img 
              src="/assets/screens/wizard.svg" 
              alt="Interface do assistente passo a passo do app Ribbit" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default ExploreSection;
