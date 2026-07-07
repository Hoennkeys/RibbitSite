import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer 
      className="w-full bg-slate-950 text-slate-400 border-t border-white/5"
      role="contentinfo"
    >
      {/* Área Principal do Rodapé (Grid de Links e Informações) */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        
        {/* Coluna 1: Logo e Descrição do Projeto */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-2 select-none">
            <span className="text-3xl" role="img" aria-label="Logo de Sapo">🐸</span>
            <span className="font-title font-extrabold text-xl tracking-tight text-white">Ribbit</span>
          </div>
          <p className="font-body text-xs text-slate-500 leading-relaxed text-left">
            {t('footer.desc')}
          </p>
          {/* Mockup de Redes Sociais */}
          <div className="flex items-center gap-4 mt-2 text-slate-500">
            <a href="#twitter" className="hover:text-primary transition-colors text-sm" aria-label="Twitter">𝕏</a>
            <a href="#instagram" className="hover:text-primary transition-colors text-sm" aria-label="Instagram">📸</a>
            <a href="#github" className="hover:text-primary transition-colors text-sm" aria-label="GitHub">💻</a>
            <a href="#youtube" className="hover:text-primary transition-colors text-sm" aria-label="YouTube">🎥</a>
          </div>
        </div>

        {/* Coluna 2: Navegação Institucional */}
        <div className="flex flex-col items-start text-left gap-3">
          <span className="font-title text-xs font-bold text-white uppercase tracking-wider">{t('footer.col1')}</span>
          <nav className="flex flex-col gap-2.5 text-xs font-medium">
            <a href="#hero" className="hover:text-primary transition-colors" aria-label="Ir para o topo da página">{t('navbar.home')}</a>
            <a href="#app-screens" className="hover:text-primary transition-colors" aria-label="Ver galeria de telas do aplicativo">{t('navbar.soundid')}</a>
            <a href="#features" className="hover:text-primary transition-colors" aria-label="Ir para a seção de ferramentas e biomas">{t('navbar.resources')}</a>
            <a href="#about" className="hover:text-primary transition-colors" aria-label="Ver a seção de comunidade científica">{t('navbar.story')}</a>
          </nav>
        </div>

        {/* Coluna 3: Banco de Dados Científico */}
        <div className="flex flex-col items-start text-left gap-3">
          <span className="font-title text-xs font-bold text-white uppercase tracking-wider">{t('footer.col2')}</span>
          <nav className="flex flex-col gap-2.5 text-xs font-medium text-slate-500">
            <a href="#database" className="hover:text-primary transition-colors" aria-label="Acessar base de dados pública">HerpetoLab API</a>
            <a href="#biomes" className="hover:text-primary transition-colors" aria-label="Ver estudos sobre biomas nacionais">Estudos de Biomas</a>
            <a href="#publications" className="hover:text-primary transition-colors" aria-label="Ver publicações acadêmicas">Publicações</a>
            <a href="#curator" className="hover:text-primary transition-colors" aria-label="Saber mais sobre o processo de curadoria acadêmica">Processo de Validação</a>
          </nav>
        </div>

        {/* Coluna 4: Download & Lojas */}
        <div className="flex flex-col items-start text-left gap-4">
          <span className="font-title text-xs font-bold text-white uppercase tracking-wider">{t('footer.col3')}</span>
          <p className="font-body text-xs text-slate-500 leading-relaxed">
            Instale o Ribbit no seu smartphone para gravar cantos de anfíbios mesmo sem sinal de celular no campo.
          </p>
          <div className="flex flex-col gap-2.5 w-full max-w-[150px]">
            {/* App Store Mockup Badge */}
            <a 
              href="#appstore" 
              className="bg-slate-900 border border-white/10 hover:border-white/20 px-3 py-1.5 rounded flex items-center gap-2 transition-all cursor-pointer"
              onClick={(e) => e.preventDefault()}
              aria-label="Download do Ribbit na Apple App Store"
            >
              <span className="text-lg">🍎</span>
              <div className="flex flex-col text-left leading-none">
                <span className="text-[8px] uppercase text-slate-500 font-bold font-title">Download on the</span>
                <span className="text-xs text-white font-bold font-title">App Store</span>
              </div>
            </a>
            {/* Google Play Mockup Badge */}
            <a 
              href="#googleplay" 
              className="bg-slate-900 border border-white/10 hover:border-white/20 px-3 py-1.5 rounded flex items-center gap-2 transition-all cursor-pointer"
              onClick={(e) => e.preventDefault()}
              aria-label="Download do Ribbit na Google Play Store"
            >
              <span className="text-lg">🤖</span>
              <div className="flex flex-col text-left leading-none">
                <span className="text-[8px] uppercase text-slate-500 font-bold font-title">Get it on</span>
                <span className="text-xs text-white font-bold font-title">Google Play</span>
              </div>
            </a>
          </div>
        </div>

      </div>

      {/* Barra Inferior (Direitos Autorais e Políticas) */}
      <div className="border-t border-white/5 py-8 bg-slate-950/40">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-slate-600 font-medium">
          <div className="text-center md:text-left leading-relaxed">
            <span>© {new Date().getFullYear()} Ribbit Project. Inspirado no Merlin Bird ID. Desenvolvido para catalogação científica.</span>
          </div>
          <div className="flex gap-6 select-none">
            <a href="#terms" className="hover:text-primary transition-colors">{t('footer.terms')}</a>
            <a href="#privacy" className="hover:text-primary transition-colors">{t('footer.privacy')}</a>
            <a href="#security" className="hover:text-primary transition-colors">{t('footer.security')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
