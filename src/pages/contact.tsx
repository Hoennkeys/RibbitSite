import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from '../context/LanguageContext';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const ContactContent: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'taxonomic', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    // Simulação de envio
    setIsSubmitted(true);
  };

  const handleReturnHome = () => {
    window.location.hash = '';
  };

  return (
    <div className="min-h-screen bg-background text-highlight font-body flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Formulário de Contato */}
        <section className="pt-44 pb-24 px-6 max-w-xl mx-auto relative z-10">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />

          <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl">
            <h1 className="font-title font-extrabold text-3xl text-white mb-3 text-left">
              {t('contact.title')}
            </h1>
            <p className="font-body text-slate-400 text-sm md:text-base mb-8 text-left leading-relaxed">
              {t('contact.subtitle')}
            </p>

            {isSubmitted ? (
              <div className="text-left animate-fade-in py-8">
                <span className="text-4xl block mb-4 select-none" role="img" aria-label="Sucesso">🎉</span>
                <h3 className="font-title font-bold text-xl text-primary mb-3">
                  {t('contact.success')}
                </h3>
                <button
                  onClick={handleReturnHome}
                  className="mt-6 bg-primary hover:bg-primary-hover text-slate-950 font-title font-black text-xs uppercase tracking-wider px-6 py-3 rounded-lg transition-all"
                >
                  Voltar para o Início
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
                {/* Campo Nome */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                    {t('contact.name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  />
                </div>

                {/* Campo Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                    {t('contact.email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  />
                </div>

                {/* Campo Assunto */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                    {t('contact.subject')}
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all cursor-pointer font-bold"
                  >
                    <option value="taxonomic">Dúvida herpetológica / Taxonomia</option>
                    <option value="bug">Relatar problema / Bug no App</option>
                    <option value="partnership">Parceria acadêmica / Científica</option>
                    <option value="other">Outros assuntos</option>
                  </select>
                </div>

                {/* Campo Mensagem */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder={t('contact.message')}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                  />
                </div>

                {/* Botão de Envio */}
                <button
                  type="submit"
                  className="mt-4 bg-primary hover:bg-primary-hover text-slate-950 font-title font-black text-sm uppercase tracking-wider py-4 rounded-lg shadow-[0_0_15px_rgba(34,197,94,0.2)] hover:shadow-[0_0_25px_rgba(34,197,94,0.4)] transition-all cursor-pointer"
                >
                  {t('contact.submit')}
                </button>
              </form>
            )}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export const Contact: React.FC = () => {
  return (
    <LanguageProvider>
      <ContactContent />
    </LanguageProvider>
  );
};

export default Contact;
