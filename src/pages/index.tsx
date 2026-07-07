import { LanguageProvider } from '../context/LanguageContext';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { ScreensCarousel } from '../components/ScreensCarousel';
import { TechSection } from '../components/TechSection';
import { ChatSection } from '../components/ChatSection';
import { ExploreSection } from '../components/ExploreSection';
import { Footer } from '../components/Footer';

export default function Home() {
  const handleCtaClick = () => {
    alert('Redirecionando para download do Ribbit App (iOS / Android)...');
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-highlight font-body flex flex-col justify-between">
        <div>
          {/* Navbar Component */}
          <Navbar onCtaClick={handleCtaClick} />

          {/* Hero Component */}
          <Hero onCtaClick={handleCtaClick} />

          {/* ScreensCarousel Component */}
          <ScreensCarousel />

          {/* Seção de Tecnologia Integrada ao Campo (Sound ID + Sapo + Celular) */}
          <TechSection />

          {/* Seção do Chat Científico (Comunidade + Sapo Red-eyed + Celular) */}
          <ChatSection />

          {/* Seção de Explorar e Assistente (Catálogo Regional + Sapo Azul + Tríptico de Celulares) */}
          <ExploreSection />
        </div>

        {/* Footer Component */}
        <Footer />
      </div>
    </LanguageProvider>
  );
}
