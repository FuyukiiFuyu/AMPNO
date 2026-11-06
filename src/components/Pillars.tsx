import React, { useState } from 'react';
import { Megaphone, Users2, Handshake, CheckCircle2, ChevronRight, Sparkles, Building2, ShieldAlert } from 'lucide-react';

export const Pillars: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pilares' | 'acoes'>('pilares');

  const pillars = [
    {
      icon: Megaphone,
      color: 'emerald',
      title: 'Voz Ativa',
      description:
        'Canal direto entre os moradores e as melhorias necessárias na infraestrutura, zeladoria e segurança do bairro junto aos órgãos públicos.',
      badge: 'Representatividade',
      details: [
        'Reuniões comunitárias periódicas',
        'Ofícios e solicitações à Prefeitura e Câmara',
        'Acompanhamento de demandas de iluminação e asfalto',
      ],
    },
    {
      icon: Users2,
      color: 'amber',
      title: 'Comunidade Unida',
      description:
        'Eventos culturais, apoio social, esportes e integração para todas as famílias residentes no Parque Novo Oratório.',
      badge: 'Integração',
      details: [
        'Ações solidárias e datas comemorativas',
        'Espaço de convivência para crianças e idosos',
        'Fortalecimento dos laços de vizinhança',
      ],
    },
    {
      icon: Handshake,
      color: 'sky',
      title: 'Parcerias Locais',
      description:
        'Valorização do comércio local e apoio de patrocinadores comprometidos com o crescimento e prosperidade da nossa região.',
      badge: 'Economia do Bairro',
      details: [
        'Divulgação de comerciantes do Parque Novo Oratório',
        'Parcerias com prestadores de serviços locais',
        'Apoio mútuo para geração de oportunidades',
      ],
    },
  ];

  const communityActions = [
    {
      title: 'Zeladoria & Limpeza Urbana',
      desc: 'Fiscalização de pontos de descarte irregular e solicitação de serviços de capinação e poda.',
      icon: Sparkles,
    },
    {
      title: 'Iluminação & Vias Públicas',
      desc: 'Mapeamento de lâmpadas apagadas, buracos em vias e sinalização de trânsito para os pedestres.',
      icon: Building2,
    },
    {
      title: 'Segurança & Vizinhos Alerta',
      desc: 'Canal de comunicação entre moradores e articulação com a Guarda Civil Municipal e Polícia Militar.',
      icon: ShieldAlert,
    },
  ];

  return (
    <section id="sobre" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-wider bg-emerald-100/70 px-3 py-1 rounded-full">
            Missão & Atuação
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Nosso Compromisso
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Construindo melhorias contínuas para o Parque Novo Oratório através da participação cidadã, transparência e trabalho conjunto.
          </p>

          {/* Tab Selector */}
          <div className="mt-6 inline-flex p-1 bg-slate-200/80 rounded-xl text-sm font-semibold text-slate-600">
            <button
              onClick={() => setActiveTab('pilares')}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeTab === 'pilares'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'hover:text-slate-900'
              }`}
            >
              Pilares Fundamentais
            </button>
            <button
              onClick={() => setActiveTab('acoes')}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeTab === 'acoes'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'hover:text-slate-900'
              }`}
            >
              Frentes de Trabalho
            </button>
          </div>
        </div>

        {/* Pillars Grid */}
        {activeTab === 'pilares' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-white p-8 rounded-2xl shadow-xs hover:shadow-md transition-all border border-slate-200/80 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-transform group-hover:scale-110 ${
                          pillar.color === 'emerald'
                            ? 'bg-emerald-100 text-emerald-700'
                            : pillar.color === 'amber'
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-sky-100 text-sky-700'
                        }`}
                      >
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                        {pillar.badge}
                      </span>
                    </div>

                    <h3 className="font-bold text-slate-900 text-xl mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {pillar.description}
                    </p>

                    <div className="space-y-2 pt-4 border-t border-slate-100">
                      {pillar.details.map((item, idx) => (
                        <div key={idx} className="flex items-start text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-2 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4">
                    <a
                      href="#sugestoes"
                      className="inline-flex items-center text-xs font-semibold text-emerald-700 hover:text-emerald-800 group-hover:translate-x-1 transition-all"
                    >
                      Contribua com esta frente
                      <ChevronRight className="w-3.5 h-3.5 ml-1" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Frentes de Trabalho Grid */}
        {activeTab === 'acoes' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-200">
            {communityActions.map((action, i) => {
              const ActionIcon = action.icon;
              return (
                <div
                  key={i}
                  className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs hover:border-emerald-300 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                    <ActionIcon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-lg mb-2">
                    {action.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {action.desc}
                  </p>
                  <a
                    href="#sugestoes"
                    className="text-xs font-semibold text-emerald-700 hover:underline"
                  >
                    Reportar ocorrência &rarr;
                  </a>
                </div>
              );
            })}
          </div>
        )}

        {/* Community Banner Callout */}
        <div className="mt-12 bg-gradient-to-r from-emerald-800 to-teal-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold">
              Você mora no Parque Novo Oratório?
            </h4>
            <p className="text-emerald-200 text-sm max-w-xl">
              Sua presença e ideias fazem toda a diferença para o nosso bairro. Junte-se a nós nas reuniões e acompanhe tudo pelas redes!
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href="#redes"
              className="bg-white text-emerald-900 font-semibold px-5 py-2.5 rounded-xl text-xs sm:text-sm shadow-sm hover:bg-emerald-50 transition"
            >
              Ver Nossas Redes
            </a>
            <a
              href="#sugestoes"
              className="bg-emerald-700 hover:bg-emerald-600 text-white font-semibold px-5 py-2.5 rounded-xl text-xs sm:text-sm border border-emerald-500/40 transition"
            >
              Enviar Sugestão
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
