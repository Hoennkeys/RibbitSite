import React from 'react';
import { motion } from 'framer-motion';

export interface FeatureCardProps {
  title: string;
  description: string;
  iconSvg: string; // Contém a string SVG inline (ex.: <svg>...</svg>)
  animationDelay: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  iconSvg,
  animationDelay,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        delay: animationDelay,
      }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="card-glass relative flex flex-col p-6 overflow-hidden border border-slate-50/8 bg-slate-900/65 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-primary/10 hover:shadow-2xl"
    >
      {/* Layer de Brilho Interno (Glow Aura) */}
      <div className="absolute -right-10 -top-10 w-24 h-24 rounded-full bg-primary/10 blur-xl pointer-events-none" />

      {/* Contêiner do Ícone */}
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-950/60 border border-slate-50/8 text-primary mb-5">
        <div 
          className="w-6 h-6 flex items-center justify-center fill-current stroke-current"
          dangerouslySetInnerHTML={{ __html: iconSvg }} 
        />
      </div>

      {/* Textos */}
      <h3 className="font-title text-lg font-bold text-slate-50 mb-2 tracking-tight">
        {title}
      </h3>
      <p className="font-body text-sm text-slate-400 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

/* =============================================================================
   Snippet de Uso Exemplo (Componente Principal / Página)
   =============================================================================
   
   import React from 'react';
   import { FeatureCard } from './FeatureCard';

   const soundIdIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" /></svg>`;
   const wizardIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 21l8.982-8.995m-8.982 3.9 3-3m0 0 5.182-5.185m-5.182 5.186 1.125-3.375L17.25 3z" /></svg>`;
   const xpIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.504-1.125-1.125-1.125h-6.75a1.125 1.125 0 0 0-1.125 1.125v3.375m9 0h-9m9 0a3 3 0 0 0 3-3V9.75a3 3 0 0 0-3-3h-9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3z" /></svg>`;

   export default function App() {
     return (
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10 bg-slate-950">
         <FeatureCard
           title="Sound ID (Identificação Acústica)"
           description="Grave 6 segundos do coaxar do anfíbio para renderizar o espectrograma sonoro. Nosso motor bioacústico cruza a frequência com a base nacional em tempo real."
           iconSvg={soundIdIcon}
           animationDelay={0.1}
         />
         <FeatureCard
           title="Assistente Wizard"
           description="Identifique anfíbios respondendo a 3 perguntas dinâmicas sobre o bioma atual, tipo de habitat e as características acústicas do canto, funcionando 100% offline."
           iconSvg={wizardIcon}
           animationDelay={0.2}
         />
         <FeatureCard
           title="Gamificação de Campo (XP System)"
           description="Acumule 50 XP por som enviado e 100 XP extras a cada validação científica. Evolua seu nível e ganhe prestígio e patentes na comunidade herpetológica."
           iconSvg={xpIcon}
           animationDelay={0.3}
         />
       </div>
     );
   }
*/
