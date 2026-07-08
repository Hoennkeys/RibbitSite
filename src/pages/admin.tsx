import React, { useState, useEffect } from 'react';
import supabase from '../utils/supabaseClient';

interface Profile {
  full_name: string | null;
  avatar_url: string | null;
}

interface Species {
  id: string | number;
  nome_popular: string;
  nome_cientifico: string;
  regiao: string;
  descricao: string;
}

interface Observation {
  id: string;
  usuario_id: string;
  especie_id: string | number | null;
  localizacao: string;
  audio_url: string | null;
  sugestao: string | null;
  status_revisao: string;
  created_at: string;
  profiles?: Profile;
}

export const AdminDashboard: React.FC = () => {
  const [observations, setObservations] = useState<Observation[]>([]);
  const [speciesList, setSpeciesList] = useState<Species[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedObs, setSelectedObs] = useState<Observation | null>(null);
  const [selectedSpeciesId, setSelectedSpeciesId] = useState<string | number>('');
  const [actionLoading, setActionLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Audio state
  const [playingAudioId, setPlayingAudioId] = useState<string | null>(null);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    setErrorMessage('');
    try {
      // 1. Fetch pending observations
      const { data: obsData, error: obsErr } = await supabase
        .from('observations')
        .select('*, profiles:usuario_id(full_name, avatar_url)')
        .eq('status_revisao', 'pendente')
        .order('created_at', { ascending: false });

      if (obsErr) throw obsErr;
      setObservations(obsData || []);

      // 2. Fetch species catalog for assignment
      const { data: specData, error: specErr } = await supabase
        .from('species')
        .select('*')
        .order('nome_popular', { ascending: true });

      if (specErr) throw specErr;
      setSpeciesList(specData || []);
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err.message || 'Erro ao carregar dados do Supabase.');
    } finally {
      setLoading(false);
    }
  };

  const handlePlayAudio = (obsId: string, url: string) => {
    if (playingAudioId === obsId) {
      // Pause
      audioElement?.pause();
      setPlayingAudioId(null);
    } else {
      // Stop current
      audioElement?.pause();
      
      // Play new
      const audio = new Audio(url);
      audio.play();
      audio.onended = () => setPlayingAudioId(null);
      setAudioElement(audio);
      setPlayingAudioId(obsId);
    }
  };

  useEffect(() => {
    return () => {
      audioElement?.pause();
    };
  }, [audioElement]);

  const handleApprove = async (isCorrection = false) => {
    if (!selectedObs) return;
    if (!selectedSpeciesId) {
      alert('Por favor, selecione uma espécie correspondente na biblioteca oficial.');
      return;
    }

    setActionLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('observations')
        .update({
          status_revisao: 'aprovado',
          especie_id: selectedSpeciesId
        })
        .eq('id', selectedObs.id);

      if (error) throw error;

      setSuccessMessage(
        isCorrection 
          ? `Registro corrigido e aprovado com sucesso!` 
          : `Registro aprovado com sucesso!`
      );
      
      // Refresh list
      setSelectedObs(null);
      setSelectedSpeciesId('');
      await fetchData();
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err.message || 'Erro ao processar aprovação.');
    } finally {
      setActionLoading(false);
    }
  };

  const handleReject = async () => {
    if (!selectedObs) return;

    if (!confirm('Deseja realmente REJEITAR esta gravação?')) return;

    setActionLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('observations')
        .update({
          status_revisao: 'rejeitado'
        })
        .eq('id', selectedObs.id);

      if (error) throw error;

      setSuccessMessage('Registro rejeitado com sucesso.');
      setSelectedObs(null);
      setSelectedSpeciesId('');
      await fetchData();
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err.message || 'Erro ao processar rejeição.');
    } finally {
      setActionLoading(false);
    }
  };

  const handleSelectObservation = (obs: Observation) => {
    setSelectedObs(obs);
    // Find closest species match based on suggestion text if available
    const suggestion = (obs.sugestao || '').toLowerCase();
    const matchedSpec = speciesList.find(
      s => s.nome_popular.toLowerCase().includes(suggestion) || 
           s.nome_cientifico.toLowerCase().includes(suggestion)
    );
    setSelectedSpeciesId(matchedSpec ? matchedSpec.id : '');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Navbar Interna */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur py-5 px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🎙️</span>
          <div>
            <h1 className="font-extrabold text-lg text-slate-50 tracking-tight">Ribbit Admin</h1>
            <p className="text-xs text-slate-400">Painel de Revisão Científica</p>
          </div>
        </div>
        <a 
          href="#" 
          className="text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-emerald-400 transition-colors border border-slate-700 hover:border-emerald-500/30 rounded-md px-4 py-2 bg-slate-800/40"
        >
          Voltar ao Portal
        </a>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-12 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Submissions List */}
        <section className="lg:col-span-2 flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-slate-200">
              Solicitações Pendentes
              <span className="ml-3 bg-emerald-500/10 text-emerald-400 text-xs px-2.5 py-1 rounded-full border border-emerald-500/20">
                {observations.length}
              </span>
            </h2>
            <button 
              onClick={fetchData}
              className="text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              🔄 Atualizar
            </button>
          </div>

          {successMessage && (
            <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-xl text-sm animate-fade-in">
              {successMessage}
            </div>
          )}

          {errorMessage && (
            <div className="p-4 bg-rose-500/10 border border-rose-500/30 text-rose-400 rounded-xl text-sm">
              {errorMessage}
            </div>
          )}

          {loading ? (
            <div className="flex-1 flex flex-col items-center justify-center py-20 bg-slate-900/40 border border-slate-800/80 rounded-2xl">
              <div className="w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-sm text-slate-400">Carregando submissões do Supabase...</p>
            </div>
          ) : observations.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center py-20 bg-slate-900/20 border border-slate-800 border-dashed rounded-2xl text-center">
              <span className="text-5xl mb-4">🐸</span>
              <h3 className="text-base font-bold text-slate-300">Tudo em ordem!</h3>
              <p className="text-xs text-slate-500 mt-1 max-w-sm px-4">
                Nenhuma gravação de áudio pendente de validação pela administradora no momento.
              </p>
            </div>
          ) : (
            <div className="grid gap-4">
              {observations.map((obs) => {
                const isSelected = selectedObs?.id === obs.id;
                const formattedDate = new Date(obs.created_at).toLocaleString('pt-BR');
                const userFullName = obs.profiles?.full_name || 'Usuário Ribbit';
                const avatar = obs.profiles?.avatar_url || null;

                return (
                  <div 
                    key={obs.id}
                    onClick={() => handleSelectObservation(obs)}
                    className={`p-6 rounded-2xl bg-slate-900/60 border hover:bg-slate-900/80 transition-all duration-200 cursor-pointer flex flex-col md:flex-row gap-5 items-start justify-between ${
                      isSelected 
                        ? 'border-emerald-500/60 shadow-lg shadow-emerald-500/5 bg-slate-900/90' 
                        : 'border-slate-800 bg-slate-900/40'
                    }`}
                  >
                    <div className="flex-1 flex gap-4">
                      {/* Avatar */}
                      <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 font-bold overflow-hidden select-none border border-slate-700 shrink-0">
                        {avatar ? (
                          <img src={avatar} alt={userFullName} className="w-full h-full object-cover" />
                        ) : (
                          userFullName.charAt(0).toUpperCase()
                        )}
                      </div>

                      {/* Details */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-baseline gap-2">
                          <h3 className="font-bold text-slate-200 text-lg">
                            {obs.sugestao ? `Sugestão: "${obs.sugestao}"` : 'Sem sugestão de nome'}
                          </h3>
                        </div>
                        <p className="text-xs text-slate-400 mt-1">
                          Enviado por <span className="text-slate-300 font-semibold">{userFullName}</span> • {formattedDate}
                        </p>
                        <p className="text-sm text-slate-400 mt-3 flex items-center gap-1.5">
                          <span>📍</span> {obs.localizacao || 'Coordenadas Indisponíveis'}
                        </p>
                      </div>
                    </div>

                    {/* Audio Player Button */}
                    {obs.audio_url && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePlayAudio(obs.id, obs.audio_url!);
                        }}
                        className={`px-5 py-3 rounded-xl font-semibold text-xs flex items-center gap-2 border transition-all shrink-0 cursor-pointer ${
                          playingAudioId === obs.id
                            ? 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                            : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20'
                        }`}
                      >
                        {playingAudioId === obs.id ? (
                          <>
                            <span className="animate-pulse">⏸️</span>
                            <span>Pausar Canto</span>
                          </>
                        ) : (
                          <>
                            <span>🔊</span>
                            <span>Ouvir Gravação</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* Right Column: Actions Sidebar */}
        <section className="lg:col-span-1">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sticky top-6 ...theme.shadows.medium">
            <h2 className="text-lg font-bold text-slate-200 mb-6 flex items-center gap-2 border-b border-slate-800 pb-4">
              <span>🛡️</span> Ações de Moderação
            </h2>

            {selectedObs ? (
              <div className="flex flex-col gap-6 animate-fade-in">
                {/* Details of Selected Obs */}
                <div>
                  <label className="text-[10px] font-bold tracking-wider text-slate-500 uppercase">Sugestão Recebida</label>
                  <p className="text-base font-bold text-emerald-400 mt-1">"{selectedObs.sugestao || 'Sem sugestão'}"</p>
                  
                  <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-slate-400 bg-slate-950/60 p-3 rounded-lg border border-slate-800/80">
                    <div>
                      <span className="block text-[10px] text-slate-500">Usuário</span>
                      <span className="font-semibold">{selectedObs.profiles?.full_name || 'Usuário'}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-500">Localização</span>
                      <span className="font-semibold truncate block">{selectedObs.localizacao}</span>
                    </div>
                  </div>
                </div>

                {/* Match Official Species Form */}
                <div className="border-t border-slate-800 pt-5">
                  <label className="block text-xs font-bold text-slate-400 mb-2">
                    Vincular Espécie Oficial
                  </label>
                  <select
                    value={selectedSpeciesId}
                    onChange={(e) => setSelectedSpeciesId(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 text-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500 cursor-pointer"
                  >
                    <option value="">-- Selecione a espécie na biblioteca --</option>
                    {speciesList.map((spec) => (
                      <option key={spec.id} value={spec.id}>
                        {spec.nome_popular} ({spec.nome_cientifico})
                      </option>
                    ))}
                  </select>
                  <p className="text-[10px] text-slate-500 mt-2">
                    Para aprovar ou corrigir, você deve selecionar a espécie oficial correspondente acima.
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-3 mt-4">
                  <button
                    onClick={() => handleApprove(false)}
                    disabled={actionLoading || !selectedSpeciesId}
                    className="w-full bg-emerald-500 hover:bg-emerald-400 disabled:bg-slate-800 disabled:text-slate-600 disabled:cursor-not-allowed text-slate-950 font-bold text-sm py-3 px-4 rounded-xl transition-all shadow-md shadow-emerald-500/10 cursor-pointer"
                  >
                    {actionLoading ? 'Aprovando...' : '✓ Aprovar Registro'}
                  </button>

                  <button
                    onClick={() => handleApprove(true)}
                    disabled={actionLoading || !selectedSpeciesId}
                    className="w-full bg-slate-800 hover:bg-slate-700 disabled:text-slate-600 disabled:cursor-not-allowed border border-slate-700 text-slate-200 font-bold text-sm py-3 px-4 rounded-xl transition-all cursor-pointer"
                  >
                    {actionLoading ? 'Processando...' : '✏️ Corrigir e Aprovar'}
                  </button>

                  <div className="border-t border-slate-800 my-2"></div>

                  <button
                    onClick={handleReject}
                    disabled={actionLoading}
                    className="w-full bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/20 font-bold text-sm py-3 px-4 rounded-xl transition-all cursor-pointer"
                  >
                    ✕ Rejeitar Registro
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-slate-500">
                <span className="text-3xl block mb-3">👈</span>
                <p className="text-xs">Selecione uma solicitação na lista para realizar ações de revisão.</p>
              </div>
            )}

          </div>
        </section>

      </main>
    </div>
  );
};

export default AdminDashboard;
