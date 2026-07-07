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
    <div className="fixed top-0 left-0 w-full z-50 flex flex-col shadow-md">
      {/* 1. Barra Utilitária Superior Fina (Estilo Cornell Lab) */}
      <div className="w-full bg-[#8b0f14] text-white text-[11px] py-2 px-6 flex justify-end items-center gap-6 font-bold tracking-wider uppercase">
        <a href="#contact" className="hover:text-primary transition-colors" aria-label="Falar com o laboratório de herpetologia">CONTATO</a>
        <a 
          href="#donate" 
          className="bg-[#c22026] hover:bg-[#a6151a] text-white px-3 py-1 rounded-sm font-extrabold transition-colors"
          onClick={(e) => {
            e.preventDefault();
            alert('Agradecemos seu interesse! O sistema de doações para a pesquisa herpetológica estará disponível em breve.');
          }}
          aria-label="Apoiar o projeto científico com doações"
        >
          APOIAR
        </a>
        <div className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors" aria-label="Selecione o idioma">
          <span>Português</span>
          <span className="text-[8px]">▼</span>
        </div>
      </div>

      {/* 2. Barra de Navegação Principal Branca (Estilo Merlin Header) */}
      <header className="w-full bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
        
        {/* Bloco do Logotipo (Apenas Ribbit com o sapo) */}
        <div className="flex items-center gap-2 select-none">
          <span className="text-3xl" role="img" aria-label="Ícone de Sapo">🐸</span>
          <span className="font-title text-2xl font-black tracking-tight text-slate-900 leading-none">Ribbit</span>
        </div>

        {/* Links de Navegação Desktop */}
        <nav 
          className="hidden md:flex items-center gap-8 text-[15px] font-bold text-slate-700 h-10"
          role="navigation"
          aria-label="Menu principal de navegação"
        >
          <a 
            href="#hero" 
            className="hover:text-primary transition-colors py-2 border-b-[3px] border-transparent hover:border-primary" 
            aria-label="Ir para a página inicial"
          >
            Home
          </a>
          <a 
            href="#about" 
            className="hover:text-primary transition-colors py-2 border-b-[3px] border-transparent hover:border-primary" 
            aria-label="Saber mais sobre a história do Ribbit"
          >
            A História
          </a>
          <a 
            href="#app-screens" 
            className="hover:text-primary transition-colors py-2 border-b-[3px] border-transparent hover:border-primary" 
            aria-label="Ver recursos e telas de Sound ID"
          >
            Sound ID
          </a>
          <a 
            href="#features" 
            className="hover:text-primary transition-colors py-2 border-b-[3px] border-transparent hover:border-primary" 
            aria-label="Ver recursos bioacústicos"
          >
            Recursos
          </a>
          <button 
            onClick={handleCta} 
            className="hover:text-primary transition-colors py-2 border-b-[3px] border-transparent hover:border-primary font-bold uppercase tracking-wide"
            aria-label="Baixar o aplicativo móvel Ribbit"
          >
            Download
          </button>
        </nav>

        {/* Botão de Menu Hambúrguer Mobile */}
        <button
          className="block md:hidden text-slate-800 focus:outline-none p-1"
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

        {/* Dropdown de Navegação Mobile (Fundo Branco) */}
        {isMenuOpen && (
          <div className="absolute top-[112px] left-0 w-full bg-white border-b border-slate-200 shadow-md flex flex-col p-6 gap-4 md:hidden z-40 animate-fade-in">
            <nav 
              className="flex flex-col gap-4 text-base font-bold text-slate-700"
              role="navigation"
              aria-label="Menu de navegação móvel"
            >
              <a 
                href="#hero" 
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-primary py-2 pl-3 border-l-4 border-transparent hover:border-primary"
                aria-label="Ir para o início"
              >
                Home
              </a>
              <a 
                href="#about" 
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-primary py-2 pl-3 border-l-4 border-transparent hover:border-primary"
                aria-label="Saber mais sobre a história do Ribbit"
              >
                A História
              </a>
              <a 
                href="#app-screens" 
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-primary py-2 pl-3 border-l-4 border-transparent hover:border-primary"
                aria-label="Ver telas do Sound ID"
              >
                Sound ID
              </a>
              <a 
                href="#features" 
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-primary py-2 pl-3 border-l-4 border-transparent hover:border-primary"
                aria-label="Ver recursos do aplicativo"
              >
                Recursos
              </a>
              <button 
                onClick={handleCta} 
                className="text-left hover:text-primary py-2 pl-3 border-l-4 border-transparent hover:border-primary font-bold uppercase"
                aria-label="Baixar o aplicativo móvel Ribbit"
              >
                Download
              </button>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
