import React from 'react';

export const ChatSection: React.FC = () => {
  const handleCommunityClick = () => {
    alert('Acesso ao fórum e portal acadêmico da comunidade científica em desenvolvimento.');
  };

  return (
    <section 
      id="about" 
      className="w-full bg-white text-slate-900 pb-24 pt-12 px-6 md:px-12 flex justify-center border-b border-slate-200"
      aria-label="Funcionalidade Chat Científico"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row-reverse items-center justify-between gap-12">
        
        {/* Lado Direito - Copy e Informações (Estilo Merlin, alternado) */}
        <div className="flex-1 flex flex-col items-start text-left max-w-xl">
          <h2 className="font-title font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight mb-6">
            Conecte-se com a Comunidade Científica
          </h2>
          
          <p className="font-body text-slate-700 text-base md:text-lg leading-relaxed mb-6">
            O <strong className="text-slate-900">Chat Científico</strong> integrado conecta observadores de campo e pesquisadores em tempo real. Compartilhe suas fotos e gravações de áudio diretamente com biólogos especialistas para obter suporte imediato na classificação taxonômica e validar novos registros.
          </p>
          
          <p className="font-body text-slate-500 text-sm md:text-base leading-relaxed mb-8">
            Participe de grupos de discussão focados nos biomas brasileiros, colabore no mapeamento geográfico de espécies em perigo de extinção e expanda seus conhecimentos sobre a herpetologia nacional.
          </p>
          
          <button 
            onClick={handleCommunityClick}
            className="border-2 border-slate-800 hover:border-primary text-slate-800 hover:text-primary hover:bg-slate-50 transition-all duration-200 font-title font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-md"
            aria-label="Saber mais sobre o chat comunitário e fórum de pesquisa"
          >
            Conhecer a Comunidade
          </button>
        </div>

        {/* Lado Esquerdo - Ilustração do Sapo e Mockup do Telefone Lado a Lado (Estilo Merlin, alternado) */}
        <div className="flex-1 w-full flex items-center justify-center gap-6 md:gap-10">
          
          {/* Celular Mockup do App (Esquerda do Sapo) */}
          <div className="flex-1 max-w-[165px] md:max-w-[200px] aspect-[360/740] rounded-[24px] overflow-hidden border border-slate-200 shadow-xl bg-slate-950 relative order-2 md:order-none">
            <img 
              src="/assets/screens/chat.svg" 
              alt="Interface gráfica de conversação no chat do app Ribbit" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Imagem do Sapo Red-eyed Cutout (Direita do Celular) */}
          <div className="flex-1 max-w-[180px] md:max-w-[220px] aspect-square flex items-center justify-center select-none order-1 md:order-none">
            <img 
              src="/assets/frog-chat-cutout.png" 
              alt="Ilustração isolada do sapo de olhos vermelhos arborícola" 
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default ChatSection;
