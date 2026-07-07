import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { ScreensCarousel } from '../components/ScreensCarousel';
import { FeatureCard } from '../components/FeatureCard';

// Ícones SVG inline para os cards de recursos
const soundIdIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" /></svg>`;
const wizardIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 21l8.982-8.995m-8.982 3.9 3-3m0 0 5.182-5.185m-5.182 5.186 1.125-3.375L17.25 3z" /></svg>`;
const xpIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.504-1.125-1.125-1.125h-6.75a1.125 1.125 0 0 0-1.125 1.125v3.375m9 0h-9m9 0a3 3 0 0 0 3-3V9.75a3 3 0 0 0-3-3h-9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3z" /></svg>`;

export default function Home() {
  const handleCtaClick = () => {
    alert('Redirecionando para download do Ribbit App (iOS / Android)...');
  };

  return (
    <div className="min-h-screen bg-background text-highlight font-body">
      {/* Navbar Component */}
      <Navbar onCtaClick={handleCtaClick} />

      {/* Hero Component */}
      <Hero onCtaClick={handleCtaClick} />

      {/* ScreensCarousel Component */}
      <ScreensCarousel />

      {/* Seção de Recursos Bento Grid */}
      <section id="features" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-title font-bold text-3xl md:text-4xl text-white tracking-tight mb-4">
            Tecnologia Integrada ao Campo
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Descubra as principais ferramentas integradas que dão suporte para pesquisadores e entusiastas em suas explorações.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            title="Sound ID (Identificação)"
            description="Grave 6 segundos do coaxar e visualize o espectrograma sonoro em tempo real. Nosso motor bioacústico sugere espécies com precisão instantânea."
            iconSvg={soundIdIcon}
            animationDelay={0.1}
          />
          <FeatureCard
            title="Assistente Wizard"
            description="Identifique anfíbios respondendo a 3 perguntas morfológicas rápidas sobre o bioma, tipo de habitat e as características do canto em modo offline."
            iconSvg={wizardIcon}
            animationDelay={0.2}
          />
          <FeatureCard
            title="Sistema de XP"
            description="Ganhe 50 XP por envio e 100 XP por aprovação científica. Suba de nível e conquiste patentes oficiais na comunidade herpetológica brasileira."
            iconSvg={xpIcon}
            animationDelay={0.3}
          />
        </div>
      </section>
    </div>
  );
}
