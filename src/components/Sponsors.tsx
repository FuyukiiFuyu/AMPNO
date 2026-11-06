import React from 'react';
import { Store, ShoppingBag, Utensils, Wrench, PlusCircle, ArrowUpRight } from 'lucide-react';

export const Sponsors: React.FC = () => {
  const sponsors = [
    {
      name: 'Comércio & Serviços',
      category: 'Parceiro da Região',
      desc: 'Espaço reservado para o comércio do Parque Novo Oratório',
      icon: Store,
    },
    {
      name: 'Padarias & Mercados',
      category: 'Alimentação & Varejo',
      desc: 'Espaço reservado para apoio local',
      icon: ShoppingBag,
    },
    {
      name: 'Gastronomia Local',
      category: 'Restaurantes & Lanches',
      desc: 'Espaço reservado para apoio local',
      icon: Utensils,
    },
    {
      name: 'Oficinas & Reparos',
      category: 'Serviços Automotivos & Gerais',
      desc: 'Espaço reservado para apoio local',
      icon: Wrench,
    },
  ];

  return (
    <section id="patrocinadores" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-12">
          <span className="text-amber-700 font-bold text-xs uppercase tracking-wider bg-amber-100/70 px-3 py-1 rounded-full">
            Parcerias & Comércio Local
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Nossos Patrocinadores e Apoiadores
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Empresas e parceiros que apoiam as iniciativas, eventos e o desenvolvimento contínuo da nossa comunidade.
          </p>
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {sponsors.map((sponsor, index) => {
            const Icon = sponsor.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col items-center justify-center text-center h-44 group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-500 group-hover:bg-emerald-50 group-hover:text-emerald-700 flex items-center justify-center mb-3 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wider">
                  {sponsor.category}
                </span>
                <h4 className="font-bold text-slate-800 text-sm mt-1">
                  [Seu Patrocinador {index + 1}]
                </h4>
                <p className="text-[12px] text-slate-500 mt-1 max-w-[200px]">
                  {sponsor.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA to become a sponsor */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs text-left">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <PlusCircle className="w-5 h-5 text-emerald-600" />
              <h4 className="font-bold text-slate-900 text-base sm:text-lg">
                Quer divulgar sua empresa aqui?
              </h4>
            </div>
            <p className="text-sm text-slate-600">
              Apoie as ações comunitárias da AMPNO e fortaleça a presença da sua marca junto a milhares de famílias no bairro.
            </p>
          </div>
          <a
            href="https://wa.me/5511989341315?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20ser%20um%20patrocinador%2Fapoiador%20da%20AMPNO!"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-5 py-3 rounded-xl transition shadow-xs"
          >
            <span>Seja um Apoiador</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
