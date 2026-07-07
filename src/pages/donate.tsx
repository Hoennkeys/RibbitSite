import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from '../context/LanguageContext';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const DonateContent: React.FC = () => {
  const { t } = useLanguage();
  const [selectedTier, setSelectedTier] = useState<number>(1);
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleDonateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReturnHome = () => {
    window.location.hash = '';
  };

  return (
    <div className="min-h-screen bg-background text-highlight font-body flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Formulário de Apoio */}
        <section className="pt-44 pb-24 px-6 max-w-4xl mx-auto relative z-10">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#c22026]/5 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse" />

          <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl">
            <h1 className="font-title font-extrabold text-3xl text-white mb-3 text-left">
              {t('donate.title')}
            </h1>
            <p className="font-body text-slate-400 text-sm md:text-base mb-8 text-left leading-relaxed">
              {t('donate.subtitle')}
            </p>

            {isSubmitted ? (
              <div className="text-left animate-fade-in py-10 max-w-lg">
                <span className="text-5xl block mb-4 select-none animate-bounce" role="img" aria-label="Sucesso">💚</span>
                <h3 className="font-title font-bold text-2xl text-primary mb-3">
                  Agradecemos imensamente o seu apoio!
                </h3>
                <p className="font-body text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                  {paymentMethod === 'pix' 
                    ? 'Sua chave PIX simulada foi gerada. O processamento acadêmico enviará os relatórios de uso dos recursos para o seu e-mail cadastrado.'
                    : 'A transação do cartão foi processada no ambiente de testes. Seu apoio ajuda a impulsionar a conservação ambiental brasileira.'}
                </p>
                <button
                  onClick={handleReturnHome}
                  className="bg-primary hover:bg-primary-hover text-slate-950 font-title font-black text-xs uppercase tracking-wider px-6 py-3 rounded-lg transition-all cursor-pointer"
                >
                  Voltar para o Início
                </button>
              </div>
            ) : (
              <form onSubmit={handleDonateSubmit} className="flex flex-col gap-8 text-left">
                
                {/* 1. Seleção de Tiers/Planos */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Tier 1 */}
                  <div 
                    onClick={() => setSelectedTier(1)}
                    className={`border rounded-xl p-5 cursor-pointer transition-all flex flex-col justify-between ${
                      selectedTier === 1 
                        ? 'border-primary bg-primary/5 shadow-[0_0_15px_rgba(34,197,94,0.15)]' 
                        : 'border-white/10 hover:border-white/20 bg-slate-950/40'
                    }`}
                  >
                    <div>
                      <h4 className="font-title font-bold text-lg text-white mb-2">{t('donate.tier1_title')}</h4>
                      <p className="text-[11px] text-slate-400 leading-relaxed mb-4">{t('donate.tier1_desc')}</p>
                    </div>
                    <span className="font-title font-black text-xl text-primary mt-2">R$ 15<span className="text-xs font-normal text-slate-400">/mês</span></span>
                  </div>

                  {/* Tier 2 */}
                  <div 
                    onClick={() => setSelectedTier(2)}
                    className={`border rounded-xl p-5 cursor-pointer transition-all flex flex-col justify-between ${
                      selectedTier === 2 
                        ? 'border-primary bg-primary/5 shadow-[0_0_15px_rgba(34,197,94,0.15)]' 
                        : 'border-white/10 hover:border-white/20 bg-slate-950/40'
                    }`}
                  >
                    <div>
                      <h4 className="font-title font-bold text-lg text-white mb-2">{t('donate.tier2_title')}</h4>
                      <p className="text-[11px] text-slate-400 leading-relaxed mb-4">{t('donate.tier2_desc')}</p>
                    </div>
                    <span className="font-title font-black text-xl text-primary mt-2">R$ 50<span className="text-xs font-normal text-slate-400">/mês</span></span>
                  </div>

                  {/* Tier 3 */}
                  <div 
                    onClick={() => setSelectedTier(3)}
                    className={`border rounded-xl p-5 cursor-pointer transition-all flex flex-col justify-between ${
                      selectedTier === 3 
                        ? 'border-primary bg-primary/5 shadow-[0_0_15px_rgba(34,197,94,0.15)]' 
                        : 'border-white/10 hover:border-white/20 bg-slate-950/40'
                    }`}
                  >
                    <div>
                      <h4 className="font-title font-bold text-lg text-white mb-2">{t('donate.tier3_title')}</h4>
                      <p className="text-[11px] text-slate-400 leading-relaxed mb-4">{t('donate.tier3_desc')}</p>
                    </div>
                    <span className="font-title font-black text-xl text-primary mt-2">R$ 150<span className="text-xs font-normal text-slate-400">/mês</span></span>
                  </div>
                </div>

                {/* 2. Seleção de Forma de Pagamento */}
                <div className="flex flex-col gap-3">
                  <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                    {t('donate.method')}
                  </span>
                  
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('pix')}
                      className={`flex-1 py-3.5 px-4 rounded-lg font-title font-bold text-xs uppercase tracking-wider border cursor-pointer transition-all ${
                        paymentMethod === 'pix' 
                          ? 'bg-slate-900 border-primary text-primary' 
                          : 'bg-slate-950 border-white/5 text-slate-400 hover:border-white/10'
                      }`}
                    >
                      📱 {t('donate.pix')}
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`flex-1 py-3.5 px-4 rounded-lg font-title font-bold text-xs uppercase tracking-wider border cursor-pointer transition-all ${
                        paymentMethod === 'card' 
                          ? 'bg-slate-900 border-primary text-primary' 
                          : 'bg-slate-950 border-white/5 text-slate-400 hover:border-white/10'
                      }`}
                    >
                      💳 {t('donate.card')}
                    </button>
                  </div>
                </div>

                {/* 3. Inputs Específicos do Método */}
                {paymentMethod === 'pix' ? (
                  <div className="bg-slate-950/60 border border-white/5 rounded-xl p-5 flex flex-col sm:flex-row items-center gap-6 animate-fade-in">
                    {/* Mockup QR Code */}
                    <div className="w-28 h-28 bg-white p-2 rounded-lg flex items-center justify-center select-none shrink-0 shadow-lg">
                      <div className="w-full h-full border-[3px] border-slate-950 flex flex-col items-center justify-center p-1">
                        <span className="text-[10px] font-extrabold text-slate-950 leading-none tracking-tighter">QR CODE</span>
                        <span className="text-xs mt-1">🐸</span>
                        <span className="text-[7px] font-bold text-slate-600 mt-1">RIBBIT PIX</span>
                      </div>
                    </div>
                    
                    {/* Instruções */}
                    <div className="flex-1 flex flex-col gap-2">
                      <span className="text-xs font-bold text-white uppercase tracking-wider">Copia e Cola</span>
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        Copie o código PIX simulado abaixo para transferir o valor correspondente ao tier selecionado.
                      </p>
                      <input 
                        type="text" 
                        readOnly 
                        value="00020101021226870014br.gov.bcb.pix0125ribbit-science-donations-code" 
                        className="bg-slate-900 border border-white/10 rounded px-3 py-2 text-[10px] text-slate-400 select-all outline-none"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in bg-slate-950/40 p-5 rounded-xl border border-white/5">
                    {/* Número do Cartão */}
                    <div className="flex flex-col gap-1.5 sm:col-span-2">
                      <label className="text-[10px] font-bold uppercase text-slate-500 tracking-wider">Número do Cartão</label>
                      <input 
                        type="text" 
                        placeholder="•••• •••• •••• ••••" 
                        className="bg-slate-950 border border-white/10 rounded-lg px-4 py-2.5 text-white text-xs outline-none"
                      />
                    </div>
                    {/* Data de Vencimento */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold uppercase text-slate-500 tracking-wider">Validade</label>
                      <input 
                        type="text" 
                        placeholder="MM/AA" 
                        className="bg-slate-950 border border-white/10 rounded-lg px-4 py-2.5 text-white text-xs outline-none"
                      />
                    </div>
                    {/* Código de Segurança */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold uppercase text-slate-500 tracking-wider">CVC</label>
                      <input 
                        type="text" 
                        placeholder="•••" 
                        className="bg-slate-950 border border-white/10 rounded-lg px-4 py-2.5 text-white text-xs outline-none"
                      />
                    </div>
                  </div>
                )}

                {/* Botão de Confirmação */}
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-hover text-slate-950 font-title font-black text-sm uppercase tracking-wider py-4 rounded-lg shadow-[0_0_15px_rgba(34,197,94,0.2)] hover:shadow-[0_0_25px_rgba(34,197,94,0.4)] transition-all cursor-pointer"
                >
                  {t('donate.btn')}
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

export const Donate: React.FC = () => {
  return (
    <LanguageProvider>
      <DonateContent />
    </LanguageProvider>
  );
};

export default Donate;
