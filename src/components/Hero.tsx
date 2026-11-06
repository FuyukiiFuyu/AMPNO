import React from 'react';
import { Users, Star, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';
import { AmpnoLogo } from './AmpnoLogo';

// WhatsApp icon component
const WhatsAppIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 18.15c-1.49 0-2.95-.4-4.23-1.16l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.37c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.01 4.54-3.68 8.23-8.19 8.23zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.59.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.12-.22-.19-.47-.31z" />
  </svg>
);

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-white overflow-hidden py-14 sm:py-20 lg:py-24 border-b border-slate-200">
      {/* Decorative colored glow orbs */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-100/70 rounded-full blur-3xl -z-10 pointer-events-none transform translate-x-1/4 translate-y-1/4"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-100/70 rounded-full blur-3xl -z-10 pointer-events-none transform -translate-x-1/4 -translate-y-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider border border-emerald-200 shadow-2xs">
              <Users className="w-4 h-4 text-emerald-600" />
              <span>Comunidade Unida &bull; Parque Novo Oratório</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Associação dos Moradores do{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-900">
                Parque Novo Oratório
              </span>
            </h1>

            <p className="text-xl sm:text-2xl font-bold text-emerald-700 italic">
              &ldquo;A Associação é para todos&rdquo;
            </p>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Trabalhando em conjunto para o desenvolvimento, bem-estar e união dos moradores do nosso bairro em Santo André. Participe, sugira e fortaleça a nossa comunidade!
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <a
                href="https://wa.me/5511989341315?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20diretoria%20da%20AMPNO!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="w-5 h-5 text-white" />
                <span>Fale pelo WhatsApp</span>
              </a>

              <a
                href="https://g.page/r/CUt-ofS2xnW-EAE/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold px-6 py-3.5 rounded-xl shadow-xs hover:shadow transition transform hover:-translate-y-0.5"
              >
                <Star className="w-5 h-5 text-amber-500 fill-amber-400" />
                <span>Deixar Avaliação Google</span>
              </a>
            </div>

            {/* Quick Badges / Neighborhood Facts */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/60">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-medium text-slate-700">Espaço Comunitário</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/60">
                <HeartHandshake className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-medium text-slate-700">Apoio aos Moradores</span>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/60">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 animate-ping"></span>
                <span className="text-xs font-medium text-slate-700">Santo André - SP</span>
              </div>
            </div>
          </div>

          {/* Emblem / Card Highlight */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative p-6 sm:p-8 bg-gradient-to-b from-white to-slate-50/90 rounded-3xl shadow-xl border border-slate-100 max-w-sm w-full text-center flex flex-col items-center">
              {/* Highlight badge top */}
              <div className="absolute -top-3.5 px-4 py-1 bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-800 text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-md border border-emerald-400/30 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                Portal Oficial
              </div>

              {/* Circular Portal Emblem Presentation */}
              <div className="relative my-4 flex items-center justify-center">
                {/* Outer decorative halo */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-400/40 via-emerald-500/30 to-emerald-700/40 blur-md transform scale-105"></div>
                
                {/* Circular image container */}
                <div className="relative p-1.5 rounded-full bg-gradient-to-tr from-amber-400 via-emerald-600 to-emerald-800 shadow-xl">
                  <img
                    src="/assets/aistudio/logo_pno_1eb88bc8.jpg"
                    alt="Emblema Oficial AMPNO - Parque Novo Oratório"
                    className="w-48 h-48 sm:w-52 sm:h-52 rounded-full object-cover aspect-square border-4 border-white shadow-inner select-none transition-transform duration-300 hover:scale-102"
                  />
                </div>
              </div>

              <h3 className="font-extrabold text-slate-900 text-xl tracking-tight mt-1">
                AMPNO
              </h3>
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-700 mt-1">
                União &bull; Trabalho &bull; Comunidade
              </p>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Rua Jerusalém, 100 - Parque Novo Oratório<br />
                Santo André - SP | CEP: 09260-140
              </p>

              <div className="w-full mt-6 pt-5 border-t border-slate-200/70 flex items-center justify-between text-xs text-slate-600">
                <a
                  href="#sugestoes"
                  className="font-medium text-emerald-700 hover:text-emerald-800 flex items-center gap-1 group"
                >
                  Envie sua ideia
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a
                  href="#redes"
                  className="font-medium text-slate-600 hover:text-slate-900"
                >
                  Ver redes sociais
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
