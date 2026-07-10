import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { LANGUAGES, LanguageCode } from '../utils/translations';

export interface NavbarProps {
  onCtaClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCtaClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const currentLanguageLabel = LANGUAGES.find((lang) => lang.code === language)?.label || 'Português';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCta = () => {
    if (onCtaClick) onCtaClick();
    setIsMenuOpen(false);
  };

  const handleLangSelect = (code: LanguageCode) => {
    setLanguage(code);
    setIsLangDropdownOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex flex-col shadow-md">
      {/* 1. Barra Utilitária Superior Fina (Estilo Cornell Lab) */}
      <div className="w-full bg-[#8b0f14] text-white text-[11px] py-2 px-6 flex justify-end items-center gap-6 font-bold tracking-wider uppercase">
        <a href="#contact" className="hover:text-primary transition-colors" aria-label="Falar com o laboratório de herpetologia">
          {t('navbar.contact')}
        </a>
        <a 
          href="#donate" 
          className="bg-[#c22026] hover:bg-[#a6151a] text-white px-3 py-1 rounded-sm font-extrabold transition-colors"
          aria-label="Apoiar o projeto científico com doações"
        >
          {t('navbar.support')}
        </a>
        
        {/* Seletor de Idioma Dropdown */}
        <div className="relative">
          <button 
            onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
            className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors bg-transparent border-none text-white font-bold text-[11px] uppercase tracking-wider focus:outline-none"
            aria-label="Selecione o idioma"
            aria-haspopup="listbox"
            aria-expanded={isLangDropdownOpen}
          >
            <span>{currentLanguageLabel}</span>
            <span 
              className="text-[8px] transition-transform duration-200 block" 
              style={{ transform: isLangDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
            >
              ▼
            </span>
          </button>

          {isLangDropdownOpen && (
            <>
              {/* Overlay invisível para fechar o dropdown ao clicar fora */}
              <div 
                className="fixed inset-0 z-40 bg-transparent" 
                onClick={() => setIsLangDropdownOpen(false)}
              />
              
              {/* Lista do Dropdown */}
              <ul 
                className="absolute right-0 mt-2 w-32 bg-slate-900 border border-white/10 rounded shadow-xl py-1 z-50 text-[11px] font-bold text-slate-300 animate-fade-in list-none m-0 uppercase tracking-wider"
                role="listbox"
              >
                {LANGUAGES.map((lang) => (
                  <li key={lang.code} role="option" aria-selected={language === lang.code}>
                    <button
                      onClick={() => handleLangSelect(lang.code)}
                      className="w-full text-left px-4 py-2.5 hover:bg-[#c22026] hover:text-white transition-colors block text-slate-200 font-extrabold"
                    >
                      {lang.label}
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
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
            {t('navbar.home')}
          </a>
          <a 
            href="#about" 
            className="hover:text-primary transition-colors py-2 border-b-[3px] border-transparent hover:border-primary" 
            aria-label="Saber mais sobre a história do Ribbit"
          >
            {t('navbar.story')}
          </a>
          <a 
            href="#app-screens" 
            className="hover:text-primary transition-colors py-2 border-b-[3px] border-transparent hover:border-primary" 
            aria-label="Ver recursos e telas de Sound ID"
          >
            {t('navbar.soundid')}
          </a>
          <a 
            href="#features" 
            className="hover:text-primary transition-colors py-2 border-b-[3px] border-transparent hover:border-primary" 
            aria-label="Ver recursos bioacústicos"
          >
            {t('navbar.resources')}
          </a>
          <button 
            onClick={handleCta} 
            className="hover:text-primary transition-colors py-2 border-b-[3px] border-transparent hover:border-primary font-bold uppercase tracking-wide cursor-pointer"
            aria-label="Baixar o aplicativo móvel Ribbit"
          >
            {t('navbar.download')}
          </button>
          <a 
            href="#admin" 
            className="hover:text-primary transition-colors py-2 border-b-[3px] border-transparent hover:border-emerald-500 text-emerald-600 font-extrabold" 
            aria-label="Acessar o painel administrativo"
          >
            Admin
          </a>
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
                {t('navbar.home')}
              </a>
              <a 
                href="#about" 
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-primary py-2 pl-3 border-l-4 border-transparent hover:border-primary"
                aria-label="Saber mais sobre a história do Ribbit"
              >
                {t('navbar.story')}
              </a>
              <a 
                href="#app-screens" 
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-primary py-2 pl-3 border-l-4 border-transparent hover:border-primary"
                aria-label="Ver telas do Sound ID"
              >
                {t('navbar.soundid')}
              </a>
              <a 
                href="#features" 
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-primary py-2 pl-3 border-l-4 border-transparent hover:border-primary"
                aria-label="Ver recursos do aplicativo"
              >
                {t('navbar.resources')}
              </a>
              <button 
                onClick={handleCta} 
                className="text-left hover:text-primary py-2 pl-3 border-l-4 border-transparent hover:border-primary font-bold uppercase cursor-pointer"
                aria-label="Baixar o aplicativo móvel Ribbit"
              >
                {t('navbar.download')}
              </button>
              <a 
                href="#admin" 
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-primary py-2 pl-3 border-l-4 border-transparent hover:border-primary text-emerald-600 font-extrabold"
                aria-label="Acessar o painel administrativo"
              >
                Admin
              </a>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
