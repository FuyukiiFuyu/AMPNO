import React from 'react';
import { AmpnoLogo } from './AmpnoLogo';
import { ArrowUp, Heart, Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 pt-12 pb-8 text-sm text-slate-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-100">
          {/* Brand & Slogan */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <AmpnoLogo size="md" />
              <div>
                <span className="block font-bold text-slate-900 text-lg leading-tight">
                  AMPNO
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Associação dos Moradores do Parque Novo Oratório
                </span>
              </div>
            </div>
            <p className="text-emerald-700 font-semibold italic text-sm">
              &ldquo;A Associação é para todos&rdquo;
            </p>
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              Trabalhando com união, transparência e voluntariado pelo progresso, segurança e infraestrutura do Parque Novo Oratório e bem-estar de todas as famílias.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
              Navegação
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#sobre" className="hover:text-emerald-700 transition">
                  Sobre & Compromisso
                </a>
              </li>
              <li>
                <a href="#redes" className="hover:text-emerald-700 transition">
                  Redes Sociais & QR Codes
                </a>
              </li>
              <li>
                <a href="#patrocinadores" className="hover:text-emerald-700 transition">
                  Apoiadores & Comércio
                </a>
              </li>
              <li>
                <a href="#sugestoes" className="hover:text-emerald-700 transition">
                  Caixa de Sugestões & Ouvidoria
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-emerald-700 transition">
                  Onde Estamos & Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contacts */}
          <div className="md:col-span-4 space-y-3">
            <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
              Canais Oficiais
            </h5>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Rua Jerusalém 100, Santo André, SP</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <a href="mailto:associacaopno@gmail.com" className="hover:text-emerald-700">
                  associacaopno@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <a href="https://wa.me/5511989341315" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 font-semibold text-slate-700">
                  (11) 98934-1315
                </a>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.instagram.com/ampno.oficial"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-100 hover:bg-pink-100 hover:text-pink-600 transition text-xs font-semibold"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/associacaompno"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-100 hover:bg-blue-100 hover:text-blue-600 transition text-xs font-semibold"
              >
                Facebook
              </a>
              <a
                href="https://g.page/r/CUt-ofS2xnW-EAE/review"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-100 hover:bg-amber-100 hover:text-amber-600 transition text-xs font-semibold"
              >
                Avaliar Google
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            &copy; 2026 Associação dos Moradores do Parque Novo Oratório - AMPNO. Todos os direitos reservados.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-500 hover:text-emerald-700 font-medium py-1 px-3 rounded-lg hover:bg-slate-100 transition"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
