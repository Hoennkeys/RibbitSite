import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { ScreensCarousel } from '../components/ScreensCarousel';
import { TechSection } from '../components/TechSection';

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

      {/* Seção de Tecnologia Integrada ao Campo (Holograma + Overlay) */}
      <TechSection />
    </div>
  );
}
