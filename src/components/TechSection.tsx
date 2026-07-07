import React from 'react';

export const TechSection: React.FC = () => {
  return (
    <section id="features" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
      {/* 
        Contêiner Principal:
        - Mobile: flex flex-col (texto em cima, imagem abaixo)
        - Desktop: bloco relativo com a imagem de fundo absoluta (texto em overlay à esquerda)
      */}
      <div className="relative w-full rounded-[24px] overflow-hidden border border-white/10 shadow-2xl bg-slate-950 flex flex-col md:block min-h-[460px] md:min-h-[500px]">
        
        {/* 1. Imagem de Fundo Futurista (Mockup Holograma) */}
        <div className="w-full h-[280px] md:h-full md:absolute md:inset-0 -z-10 order-2 md:order-none">
          <img 
            src="/assets/hologram-frog.png" 
            alt="Análise morfológica de anfíbio projetada de um tablet no bioma da Mata Atlântica" 
            className="w-full h-full object-cover object-center"
          />
          {/* Overlay gradiente lateral esquerdo para máxima legibilidade do texto em desktop */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent hidden md:block" />
          {/* Overlay escuro sutil para mobile */}
          <div className="absolute inset-0 bg-slate-950/30 md:hidden" />
        </div>

        {/* 2. Conteúdo de Texto e Indicadores (Overlay sobreposto no Desktop / Acima no Mobile) */}
        <div className="relative z-10 w-full md:max-w-xl p-8 md:p-16 flex flex-col justify-center items-start text-left md:h-full min-h-[300px] order-1 md:order-none">
          <span className="text-primary text-[11px] font-bold tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full border border-primary/20 mb-5 select-none">
            Tecnologia Bioacústica
          </span>
          
          <h2 className="font-title font-extrabold text-3xl md:text-4xl text-white tracking-tight leading-tight mb-4">
            Tecnologia Integrada ao Campo
          </h2>
          
          <p className="font-body text-slate-300 text-sm md:text-base leading-relaxed mb-6">
            Descubra as ferramentas integradas que dão suporte para pesquisadores e entusiastas em suas explorações. Nosso modelo bioacústico avançado processa e identifica a bioacústica e morfologia de anfíbios brasileiros em tempo real, mesmo em locais isolados sem conexão de rede.
          </p>

          {/* Mini-badges de recursos em campo */}
          <div className="flex flex-wrap gap-2.5">
            <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-sm border border-white/5 rounded-lg px-3 py-1.5 select-none">
              <span className="text-primary text-sm">🎙️</span>
              <span className="text-[11px] text-slate-200 font-bold">Sound ID Offline</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-sm border border-white/5 rounded-lg px-3 py-1.5 select-none">
              <span className="text-primary text-sm">🧙</span>
              <span className="text-[11px] text-slate-200 font-bold">Guia Morfológico</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-sm border border-white/5 rounded-lg px-3 py-1.5 select-none">
              <span className="text-primary text-sm">📊</span>
              <span className="text-[11px] text-slate-200 font-bold">Aprovação em Campo</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechSection;
