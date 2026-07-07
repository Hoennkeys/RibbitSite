import React, { useState } from 'react';

export interface NavbarProps {
  onCtaClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCtaClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCta = () => {
    if (onCtaClick) onCtaClick();
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 card-glass border-b border-white/5 px-6 py-4 flex items-center justify-between">
      {/* Logotipo */}
      <div className="flex items-center gap-2">
        <span className="text-2xl" role="img" aria-label="Sapo">🐸</span>
        <span className="font-title font-extrabold text-xl tracking-tight text-white">Ribbit</span>
      </div>

      {/* Navegação Desktop */}
      <nav 
        className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300"
        role="navigation"
        aria-label="Menu principal de navegação"
      >
        <a href="#hero" className="hover:text-primary transition-colors" aria-label="Ir para o início (Home)">Home</a>
        <a href="#app-screens" className="hover:text-primary transition-colors" aria-label="Ir para a galeria de telas do aplicativo">Interface</a>
        <a href="#features" className="hover:text-primary transition-colors" aria-label="Ir para a seção de funcionalidades">Funcionalidades</a>
        <a href="#about" className="hover:text-primary transition-colors" aria-label="Ir para a seção sobre o projeto">Sobre</a>
      </nav>

      {/* Botão CTA Desktop */}
      <div className="hidden md:block">
        <button 
          onClick={handleCta} 
          className="btn-neon text-xs px-4 py-2 font-bold"
          aria-label="Baixar o aplicativo móvel Ribbit"
        >
          Baixar Ribbit App 🐸
        </button>
      </div>

      {/* Botão Hambúrguer Mobile */}
      <button
        className="block md:hidden text-white focus:outline-none p-1"
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Menu Mobile Suspenso */}
      {isMenuOpen && (
        <div className="absolute top-[72px] left-0 w-full bg-[#030712]/95 border-b border-white/5 backdrop-blur-2xl flex flex-col p-6 gap-4 md:hidden transition-all duration-300">
          <nav 
            className="flex flex-col gap-4 text-base font-medium text-slate-300"
            role="navigation"
            aria-label="Menu principal de navegação mobile"
          >
            <a 
              href="#hero" 
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-primary transition-colors py-2"
              aria-label="Ir para o início"
            >
              Home
            </a>
            <a 
              href="#app-screens" 
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-primary transition-colors py-2"
              aria-label="Ir para a galeria de telas"
            >
              Interface
            </a>
            <a 
              href="#features" 
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-primary transition-colors py-2"
              aria-label="Ir para a seção de funcionalidades"
            >
              Funcionalidades
            </a>
            <a 
              href="#about" 
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-primary transition-colors py-2"
              aria-label="Ir para a seção sobre o projeto"
            >
              Sobre
            </a>
          </nav>
          <div className="h-px bg-white/5 my-2" />
          <button 
            onClick={handleCta} 
            className="btn-neon text-sm w-full py-3 font-bold"
            aria-label="Baixar o aplicativo móvel Ribbit"
          >
            Baixar Ribbit App 🐸
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
