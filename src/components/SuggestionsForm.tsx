import React, { useState } from 'react';
import { Send, CheckCircle2, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';

interface SuggestionItem {
  id: string;
  name: string;
  contact: string;
  category: string;
  message: string;
  date: string;
}

export const SuggestionsForm: React.FC = () => {
  const [nome, setNome] = useState('');
  const [contato, setContato] = useState('');
  const [categoria, setCategoria] = useState('Melhoria Geral');
  const [mensagem, setMensagem] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [lastSubmitted, setLastSubmitted] = useState<SuggestionItem | null>(null);

  const categories = [
    'Melhoria Geral',
    'Iluminação Pública & Buracos',
    'Limpeza, Coleta & Praças',
    'Segurança & Trânsito',
    'Eventos & Atividades Comunitárias',
    'Elogio à Associação',
    'Outro Assunto',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mensagem.trim()) return;

    const newItem: SuggestionItem = {
      id: Date.now().toString(),
      name: nome.trim() || 'Morador(a) Anônimo(a)',
      contact: contato.trim() || 'Não informado',
      category: categoria,
      message: mensagem.trim(),
      date: new Date().toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    // Save to localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('ampno_sugestoes') || '[]');
      existing.unshift(newItem);
      localStorage.setItem('ampno_sugestoes', JSON.stringify(existing.slice(0, 20)));
    } catch {
      // localStorage may fail in restricted sandbox, gracefully ignore
    }

    setLastSubmitted(newItem);
    setSubmitted(true);
    setNome('');
    setContato('');
    setMensagem('');

    setTimeout(() => {
      // Keep state available for WhatsApp forwarding option
    }, 100);
  };

  const getWhatsAppForwardUrl = (item: SuggestionItem) => {
    const text = `*Nova Sugestão / Ouvidoria AMPNO*\n\n*Nome:* ${item.name}\n*Contato:* ${item.contact}\n*Categoria:* ${item.category}\n*Data:* ${item.date}\n\n*Mensagem:*\n${item.message}`;
    return `https://wa.me/5511989341315?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="sugestoes" className="py-16 sm:py-24 bg-white border-t border-slate-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          {/* Subtle decorative glow */}
          <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-emerald-500 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
          <div className="absolute -left-10 -top-10 w-60 h-60 bg-amber-500 rounded-full blur-3xl opacity-15 pointer-events-none"></div>

          <div className="relative z-10">
            {/* Header */}
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 bg-emerald-950/80 text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-500/30 mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                Ouvidoria Comunitária
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                Caixa de Sugestões e Ouvidoria
              </h2>
              <p className="text-slate-300 mt-2 text-sm sm:text-base leading-relaxed">
                Tem alguma sugestão, reclamação, solicitação de melhoria ou elogio para o Parque Novo Oratório? Envie sua mensagem diretamente para a diretoria da associação.
              </p>
            </div>

            {submitted && lastSubmitted ? (
              <div className="bg-emerald-900/60 border border-emerald-500/50 rounded-2xl p-6 sm:p-8 text-center animate-in fade-in zoom-in-95 duration-200 space-y-4">
                <div className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Obrigado! Sua mensagem foi registrada com sucesso.
                </h3>
                <p className="text-sm text-emerald-100 max-w-lg mx-auto">
                  A diretoria da AMPNO agradece a sua colaboração ativa para o desenvolvimento do Parque Novo Oratório.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={getWhatsAppForwardUrl(lastSubmitted)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-md transition"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Enviar também no WhatsApp da Diretoria
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-slate-300 hover:text-white underline py-2"
                  >
                    Enviar outra sugestão
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Seu Nome (Opcional)
                    </label>
                    <input
                      type="text"
                      id="nomeSugestao"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                      placeholder="Ex: Maria Aparecida"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      E-mail ou Telefone / WhatsApp (Opcional)
                    </label>
                    <input
                      type="text"
                      id="contatoSugestao"
                      value={contato}
                      onChange={(e) => setContato(e.target.value)}
                      className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                      placeholder="Ex: (11) 98888-7777"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Categoria do Assunto
                  </label>
                  <select
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                    className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat} className="bg-slate-900 text-white">
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Sua Mensagem / Sugestão / Ocorrência <span className="text-emerald-400">*</span>
                  </label>
                  <textarea
                    id="textoSugestao"
                    rows={4}
                    required
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                    placeholder="Escreva detalhadamente sua ideia, reclamação sobre iluminação, limpeza, segurança ou melhoria para o bairro..."
                  ></textarea>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-xs text-slate-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    Sua mensagem é confidencial e direcionada à equipe gestora.
                  </span>
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3.5 px-8 rounded-xl transition shadow-md hover:shadow-lg active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Sugestão</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
