// ─────────────────────────────────────────────────────────────────────────────
// Ribbit — Web Admin Dashboard (Vite + React + TailwindCSS)
// Location: C:\Ribbit\RibbitSite\src\pages\admin.tsx
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState, useEffect } from 'react';
import supabase from '../utils/supabaseClient';

interface Profile {
  full_name: string | null;
  avatar_url: string | null;
}

interface Species {
  id: string;
  nome_popular: string;
  nome_cientifico: string;
  tipo: string;
  som_tipo: string;
  regiao: string;
  habitat: string;
  descricao: string;
  fatos_curiosos: string;
  imagem_url: string | null;
  created_at?: string;
}

interface Observation {
  id: string;
  usuario_id: string;
  especie_id: string | null;
  localizacao: string;
  audio_url: string | null;
  sugestao: string | null;
  status_revisao: string;
  created_at: string;
  profiles?: Profile;
}

interface AuditLog {
  id: string;
  species_id: string;
  usuario_id: string;
  acao: string;
  detalhes: string;
  created_at: string;
  profiles?: Profile;
}

export const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'moderation' | 'library' | 'history'>('moderation');
  
  const [observations, setObservations] = useState<Observation[]>([]);
  const [speciesList, setSpeciesList] = useState<Species[]>([]);
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>([]);
  
  const [loading, setLoading] = useState(true);
  const [loadingLogs, setLoadingLogs] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);
  const [savingForm, setSavingForm] = useState(false);

  const [selectedObs, setSelectedObs] = useState<Observation | null>(null);
  const [selectedSpeciesId, setSelectedSpeciesId] = useState<string>('');
  
  // Species Sidebar Registration/Edit states
  const [editSpeciesId, setEditSpeciesId] = useState<string | null>(null);
  const [formNomePopular, setFormNomePopular] = useState('');
  const [formNomeCientifico, setFormNomeCientifico] = useState('');
  const [formTipo, setFormTipo] = useState('Sapo');
  const [formSomTipo, setFormSomTipo] = useState('grave');
  const [formRegiao, setFormRegiao] = useState('');
  const [formHabitat, setFormHabitat] = useState('');
  const [formDescricao, setFormDescricao] = useState('');
  const [formFatosCuriosos, setFormFatosCuriosos] = useState('');
  const [formImagemUrl, setFormImagemUrl] = useState('');

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Audio player state
  const [playingAudioId, setPlayingAudioId] = useState<string | null>(null);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    fetchData();
    return () => {
      audioElement?.pause();
    };
  }, [audioElement]);

  const fetchData = async () => {
    setLoading(true);
    setErrorMessage('');
    try {
      // 1. Fetch pending observations
      const { data: obsData, error: obsErr } = await supabase
        .from('observations')
        .select('*')
        .eq('status_revisao', 'pendente')
        .order('created_at', { ascending: false });

      if (obsErr) throw obsErr;

      let finalObs = obsData || [];
      if (finalObs.length > 0) {
        const userIds = Array.from(new Set(finalObs.map(o => o.usuario_id).filter(Boolean)));
        if (userIds.length > 0) {
          const { data: profilesData, error: profErr } = await supabase
            .from('profiles')
            .select('id, full_name, avatar_url')
            .in('id', userIds);
          
          if (!profErr && profilesData) {
            finalObs = finalObs.map(o => ({
              ...o,
              profiles: profilesData.find(p => p.id === o.usuario_id) || undefined
            }));
          }
        }
      }
      setObservations(finalObs);

      // 2. Fetch species catalog
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

  const fetchAuditLogs = async () => {
    setLoadingLogs(true);
    setErrorMessage('');
    try {
      const { data, error } = await supabase
        .from('species_history')
        .select('*, profiles:usuario_id(full_name, avatar_url)')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setAuditLogs(data || []);
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err.message || 'Erro ao carregar logs de auditoria.');
    } finally {
      setLoadingLogs(false);
    }
  };

  const handlePlayAudio = (obsId: string, url: string) => {
    if (playingAudioId === obsId) {
      audioElement?.pause();
      setPlayingAudioId(null);
    } else {
      audioElement?.pause();
      const audio = new Audio(url);
      audio.play();
      audio.onended = () => setPlayingAudioId(null);
      setAudioElement(audio);
      setPlayingAudioId(obsId);
    }
  };

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
    const suggestion = (obs.sugestao || '').toLowerCase();
    const matchedSpec = speciesList.find(
      s => s.nome_popular.toLowerCase().includes(suggestion) || 
           s.nome_cientifico.toLowerCase().includes(suggestion)
    );
    setSelectedSpeciesId(matchedSpec ? matchedSpec.id : '');
  };

  const handleSaveSpecies = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formNomePopular || !formNomeCientifico || !formRegiao || !formHabitat || !formDescricao) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    
    setSavingForm(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        throw new Error('Você precisa estar autenticado como administrador para realizar esta ação.');
      }

      const speciesPayload = {
        nome_popular: formNomePopular,
        nome_cientifico: formNomeCientifico,
        tipo: formTipo,
        som_tipo: formSomTipo,
        regiao: formRegiao,
        habitat: formHabitat,
        descricao: formDescricao,
        fatos_curiosos: formFatosCuriosos,
        imagem_url: formImagemUrl || null
      };

      let targetId = editSpeciesId;

      if (editSpeciesId) {
        // UPDATE
        const { error } = await supabase
          .from('species')
          .update(speciesPayload)
          .eq('id', editSpeciesId);
        
        if (error) throw error;

        // Log to history
        await supabase
          .from('species_history')
          .insert({
            species_id: editSpeciesId,
            usuario_id: user.id,
            acao: 'UPDATE',
            detalhes: `Espécie atualizada: ${formNomePopular} (${formNomeCientifico})`
          });

        setSuccessMessage(`Espécie "${formNomePopular}" atualizada com sucesso!`);
      } else {
        // INSERT
        const { data, error } = await supabase
          .from('species')
          .insert(speciesPayload)
          .select('id')
          .single();
        
        if (error) throw error;
        targetId = data.id;

        // Log to history
        await supabase
          .from('species_history')
          .insert({
            species_id: targetId,
            usuario_id: user.id,
            acao: 'CREATE',
            detalhes: `Espécie cadastrada: ${formNomePopular} (${formNomeCientifico})`
          });

        setSuccessMessage(`Espécie "${formNomePopular}" cadastrada com sucesso!`);
      }

      handleResetForm();
      await fetchData();
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err.message || 'Erro ao salvar espécie.');
    } finally {
      setSavingForm(false);
    }
  };

  const handleDeleteSpecies = async (species: Species) => {
    if (!confirm(`Deseja realmente REMOVER a espécie "${species.nome_popular}" do catálogo?`)) return;

    setActionLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('Acesso restrito.');

      const { error } = await supabase
        .from('species')
        .delete()
        .eq('id', species.id);

      if (error) throw error;

      setSuccessMessage(`Espécie "${species.nome_popular}" removida com sucesso.`);
      await fetchData();
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err.message || 'Erro ao remover espécie.');
    } finally {
      setActionLoading(false);
    }
  };

  const handleResetForm = () => {
    setEditSpeciesId(null);
    setFormNomePopular('');
    setFormNomeCientifico('');
    setFormTipo('Sapo');
    setFormSomTipo('grave');
    setFormRegiao('');
    setFormHabitat('');
    setFormDescricao('');
    setFormFatosCuriosos('');
    setFormImagemUrl('');
  };

  const handleEditSpeciesClick = (spec: Species) => {
    setEditSpeciesId(spec.id);
    setFormNomePopular(spec.nome_popular);
    setFormNomeCientifico(spec.nome_cientifico);
    setFormTipo(spec.tipo || 'Sapo');
    setFormSomTipo(spec.som_tipo || 'grave');
    setFormRegiao(spec.regiao);
    setFormHabitat(spec.habitat || '');
    setFormDescricao(spec.descricao);
    setFormFatosCuriosos(spec.fatos_curiosos || '');
    setFormImagemUrl(spec.imagem_url || '');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Header Panel */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur py-5 px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🐸</span>
          <div>
            <h1 className="font-extrabold text-lg text-slate-50 tracking-tight">Ribbit Admin</h1>
            <p className="text-xs text-slate-400">Painel de Gestão Herpetológica</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 font-semibold select-none">
            Modo Cientista
          </span>
        </div>
      </header>

      {/* Tab Selector Nav Header */}
      <nav className="bg-slate-900 border-b border-slate-850 px-6 md:px-12 flex gap-6">
        <button
          onClick={() => { setActiveTab('moderation'); setSuccessMessage(''); setErrorMessage(''); }}
          className={`py-4 font-bold text-sm border-b-2 transition-all cursor-pointer ${
            activeTab === 'moderation' ? 'border-emerald-500 text-emerald-400' : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          🎙️ Moderador de Gravações
        </button>
        <button
          onClick={() => { setActiveTab('library'); setSuccessMessage(''); setErrorMessage(''); handleResetForm(); }}
          className={`py-4 font-bold text-sm border-b-2 transition-all cursor-pointer ${
            activeTab === 'library' ? 'border-emerald-500 text-emerald-400' : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          📚 Catálogo de Espécies
        </button>
        <button
          onClick={() => { setActiveTab('history'); setSuccessMessage(''); setErrorMessage(''); fetchAuditLogs(); }}
          className={`py-4 font-bold text-sm border-b-2 transition-all cursor-pointer ${
            activeTab === 'history' ? 'border-emerald-500 text-emerald-400' : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          📋 Logs de Auditoria
        </button>
      </nav>

      {/* Central Notification Area */}
      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 pt-6">
        {successMessage && (
          <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-xl text-sm animate-fade-in">
            ✅ {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="p-4 bg-rose-500/10 border border-rose-500/30 text-rose-400 rounded-xl text-sm">
            ❌ {errorMessage}
          </div>
        )}
      </div>

      {/* Main Panel Content Container */}
      <main className="flex-1 p-6 md:p-12 max-w-7xl w-full mx-auto">

        {/* TAB 1: SUBMISSIONS MODERATION */}
        {activeTab === 'moderation' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Submissions list */}
            <div className="lg:col-span-2 flex flex-col gap-6">
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
                    Nenhuma gravação de áudio pendente de validação científica no momento.
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
                        className={`p-6 rounded-2xl border hover:bg-slate-900/80 transition-all duration-205 cursor-pointer flex flex-col md:flex-row gap-5 items-start justify-between ${
                          isSelected 
                            ? 'border-emerald-500/60 shadow-lg shadow-emerald-500/5 bg-slate-900/90' 
                            : 'border-slate-800 bg-slate-900/40'
                        }`}
                      >
                        <div className="flex-1 flex gap-4">
                          <div className="w-11 h-11 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 font-bold overflow-hidden select-none border border-slate-700 shrink-0">
                            {avatar ? (
                              <img src={avatar} alt={userFullName} className="w-full h-full object-cover" />
                            ) : (
                              userFullName.charAt(0).toUpperCase()
                            )}
                          </div>

                          <div className="flex-1">
                            <h3 className="font-bold text-slate-200 text-lg">
                              {obs.sugestao ? `Sugestão: "${obs.sugestao}"` : 'Sem sugestão de nome'}
                            </h3>
                            <p className="text-xs text-slate-400 mt-1">
                              Enviado por <span className="text-slate-300 font-semibold">{userFullName}</span> • {formattedDate}
                            </p>
                            <p className="text-sm text-slate-400 mt-3 flex items-center gap-1.5">
                              <span>📍</span> {obs.localizacao || 'Coordenadas Indisponíveis'}
                            </p>
                          </div>
                        </div>

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
            </div>

            {/* Sidebar moderation panel */}
            <div className="lg:col-span-1">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sticky top-6">
                <h2 className="text-lg font-bold text-slate-200 mb-6 flex items-center gap-2 border-b border-slate-800 pb-4">
                  <span>🛡️</span> Ações de Moderação
                </h2>

                {selectedObs ? (
                  <div className="flex flex-col gap-6">
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

                    <div className="border-t border-slate-800 pt-5">
                      <label className="block text-xs font-bold text-slate-400 mb-2">
                        Vincular Espécie Oficial
                      </label>
                      <select
                        value={selectedSpeciesId}
                        onChange={(e) => setSelectedSpeciesId(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-850 text-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500 cursor-pointer"
                      >
                        <option value="">-- Selecione a espécie catalogada --</option>
                        {speciesList.map((spec) => (
                          <option key={spec.id} value={spec.id}>
                            {spec.nome_popular} ({spec.nome_cientifico})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="flex flex-col gap-3 mt-4">
                      <button
                        onClick={() => handleApprove(false)}
                        disabled={actionLoading || !selectedSpeciesId}
                        className="w-full bg-emerald-500 hover:bg-emerald-400 disabled:bg-slate-800 disabled:text-slate-650 disabled:cursor-not-allowed text-slate-950 font-bold text-sm py-3 px-4 rounded-xl transition-all shadow-md cursor-pointer"
                      >
                        {actionLoading ? 'Processando...' : '✓ Aprovar Registro'}
                      </button>

                      <button
                        onClick={() => handleApprove(true)}
                        disabled={actionLoading || !selectedSpeciesId}
                        className="w-full bg-slate-800 hover:bg-slate-700 disabled:bg-slate-850 disabled:text-slate-600 border border-slate-700 text-slate-200 font-bold text-sm py-3 px-4 rounded-xl transition-all cursor-pointer"
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
                    <p className="text-xs">Selecione uma solicitação na lista para realizar ações de moderação.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: SPECIES CATALOG MANAGEMENT */}
        {activeTab === 'library' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left list catalog */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-slate-200">Espécies no Catálogo ({speciesList.length})</h2>
                <button
                  onClick={handleResetForm}
                  className="text-xs bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 text-emerald-400 px-3 py-1.5 rounded-lg transition-colors font-bold cursor-pointer"
                >
                  ➕ Novo Cadastro
                </button>
              </div>

              {loading ? (
                <div className="py-20 flex justify-center bg-slate-900/40 rounded-2xl border border-slate-800">
                  <div className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
              ) : speciesList.length === 0 ? (
                <div className="py-20 bg-slate-900/20 border border-slate-800 border-dashed rounded-2xl text-center text-slate-550">
                  Nenhuma espécie catalogada no banco de dados.
                </div>
              ) : (
                <div className="grid gap-4">
                  {speciesList.map((spec) => {
                    const tagBg = spec.tipo === 'Sapo' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' : spec.tipo === 'Rã' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20';

                    return (
                      <div
                        key={spec.id}
                        className="p-5 rounded-2xl bg-slate-900/40 border border-slate-850 flex gap-4 justify-between items-start"
                      >
                        <div className="flex gap-4">
                          {spec.imagem_url ? (
                            <img src={spec.imagem_url} alt={spec.nome_popular} className="w-16 h-16 rounded-xl object-cover border border-slate-850 shrink-0 bg-slate-950" />
                          ) : (
                            <div className="w-16 h-16 rounded-xl bg-slate-950 flex items-center justify-center text-2xl border border-slate-850 shrink-0">
                              🐸
                            </div>
                          )}
                          <div>
                            <div className="flex items-center gap-2.5 flex-wrap">
                              <h3 className="font-bold text-slate-200 text-lg">{spec.nome_popular}</h3>
                              <span className={`text-[10px] px-2 py-0.5 rounded-md font-bold uppercase tracking-wide ${tagBg}`}>
                                {spec.tipo || 'Sapo'}
                              </span>
                            </div>
                            <p className="text-xs text-slate-400 italic font-medium mt-0.5">{spec.nome_cientifico}</p>
                            <p className="text-xs text-slate-400 mt-2">
                              🗺️ <span className="font-semibold text-slate-350">{spec.regiao}</span> • 📍 <span className="text-slate-350">{spec.habitat}</span> • 🔊 Canto: <span className="text-purple-400 font-bold">{spec.som_tipo}</span>
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEditSpeciesClick(spec)}
                            className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-bold transition-all border border-slate-750 cursor-pointer"
                          >
                            ✏️ Editar
                          </button>
                          <button
                            onClick={() => handleDeleteSpecies(spec)}
                            className="p-2 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 rounded-lg text-xs font-bold transition-all border border-rose-500/20 cursor-pointer"
                          >
                            🗑️ Excluir
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Sidebar registration form */}
            <div className="lg:col-span-1">
              <form
                onSubmit={handleSaveSpecies}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sticky top-6"
              >
                <h2 className="text-lg font-bold text-slate-250 mb-6 flex items-center gap-2 border-b border-slate-800 pb-4">
                  <span>{editSpeciesId ? '✏️ Editar Espécie' : '📝 Cadastrar Espécie'}</span>
                </h2>

                <div className="flex flex-col gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 mb-1">Nome Popular *</label>
                    <input
                      type="text"
                      placeholder="Ex: Sapo-cururu"
                      value={formNomePopular}
                      onChange={(e) => setFormNomePopular(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-850 text-slate-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-400 mb-1">Nome Científico *</label>
                    <input
                      type="text"
                      placeholder="Ex: Rhinella marina"
                      value={formNomeCientifico}
                      onChange={(e) => setFormNomeCientifico(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-850 text-slate-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 mb-1">Tipo *</label>
                      <select
                        value={formTipo}
                        onChange={(e) => setFormTipo(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-850 text-slate-100 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-emerald-500 cursor-pointer"
                      >
                        <option value="Sapo">Sapo</option>
                        <option value="Rã">Rã</option>
                        <option value="Perereca">Perereca</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-400 mb-1">Som Canto *</label>
                      <select
                        value={formSomTipo}
                        onChange={(e) => setFormSomTipo(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-850 text-slate-100 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-emerald-500 cursor-pointer"
                      >
                        <option value="grave">Grave</option>
                        <option value="metálico">Metálico</option>
                        <option value="estalado">Estalado</option>
                        <option value="grilo">Grilo</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-400 mb-1">Região Geográfica *</label>
                    <input
                      type="text"
                      placeholder="Ex: Todo o Brasil, Mata Atlântica"
                      value={formRegiao}
                      onChange={(e) => setFormRegiao(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-850 text-slate-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-400 mb-1">Habitat Principal *</label>
                    <input
                      type="text"
                      placeholder="Ex: Florestas tropicais, áreas urbanas"
                      value={formHabitat}
                      onChange={(e) => setFormHabitat(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-850 text-slate-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-400 mb-1">Descrição Biológica *</label>
                    <textarea
                      placeholder="Características da espécie..."
                      value={formDescricao}
                      onChange={(e) => setFormDescricao(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-850 text-slate-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500 h-20 resize-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-400 mb-1">Fatos Curiosos</label>
                    <textarea
                      placeholder="Fatos e curiosidades herpetológicas..."
                      value={formFatosCuriosos}
                      onChange={(e) => setFormFatosCuriosos(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-850 text-slate-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500 h-16 resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-400 mb-1">URL da Imagem Ilustrativa</label>
                    <input
                      type="url"
                      placeholder="https://unsplash.com/..."
                      value={formImagemUrl}
                      onChange={(e) => setFormImagemUrl(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-850 text-slate-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div className="flex gap-3 mt-2">
                    <button
                      type="submit"
                      disabled={savingForm}
                      className="flex-1 bg-emerald-500 hover:bg-emerald-400 disabled:bg-slate-800 disabled:text-slate-600 text-slate-950 font-bold text-sm py-2.5 px-4 rounded-xl transition-all cursor-pointer text-center"
                    >
                      {savingForm ? 'Salvando...' : 'Salvar'}
                    </button>
                    {editSpeciesId && (
                      <button
                        type="button"
                        onClick={handleResetForm}
                        className="bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-sm py-2.5 px-4 rounded-xl transition-all border border-slate-700 cursor-pointer"
                      >
                        Cancelar
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* TAB 3: AUDIT HISTORY TRAILS */}
        {activeTab === 'history' && (
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-slate-200">Histórico de Alterações (Audit Logs)</h2>
              <button 
                onClick={fetchAuditLogs}
                className="text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
              >
                🔄 Atualizar Logs
              </button>
            </div>

            {loadingLogs ? (
              <div className="py-20 flex justify-center bg-slate-900/40 rounded-2xl border border-slate-800">
                <div className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : auditLogs.length === 0 ? (
              <div className="py-20 bg-slate-900/20 border border-slate-800 border-dashed rounded-2xl text-center text-slate-500">
                Nenhum histórico de auditoria registrado ainda.
              </div>
            ) : (
              <div className="bg-slate-900 border border-slate-850 rounded-2xl overflow-hidden shadow-xl">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-950 text-slate-400 text-[10px] font-bold tracking-wider uppercase border-b border-slate-800">
                      <th className="py-4 px-6">Data / Hora</th>
                      <th className="py-4 px-6">Ação</th>
                      <th className="py-4 px-6">Pesquisador</th>
                      <th className="py-4 px-6">Detalhes do Registro</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80">
                    {auditLogs.map((log) => {
                      const logDate = new Date(log.created_at).toLocaleString('pt-BR');
                      const isCreate = log.acao === 'CREATE';
                      const badgeBg = isCreate ? 'bg-emerald-500/10 text-emerald-450 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20';

                      return (
                        <tr key={log.id} className="hover:bg-slate-850/40 transition-colors">
                          <td className="py-4 px-6 text-sm text-slate-300 font-medium whitespace-nowrap">{logDate}</td>
                          <td className="py-4 px-6 whitespace-nowrap">
                            <span className={`text-[10px] px-2.5 py-1 rounded-md font-bold uppercase tracking-wider ${badgeBg}`}>
                              {log.acao}
                            </span>
                          </td>
                          <td className="py-4 px-6 text-sm">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[10px] font-bold text-slate-350 overflow-hidden">
                                {log.profiles?.avatar_url ? (
                                  <img src={log.profiles.avatar_url} alt="" className="w-full h-full object-cover" />
                                ) : (
                                  (log.profiles?.full_name || 'U').charAt(0).toUpperCase()
                                )}
                              </div>
                              <span className="font-semibold text-slate-200">{log.profiles?.full_name || 'Administrador'}</span>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-sm text-slate-400 leading-relaxed max-w-md">{log.detalhes}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

      </main>
    </div>
  );
};

export default AdminDashboard;
