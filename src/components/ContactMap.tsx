import React, { useState } from 'react';
import { MapPin, Mail, Phone, ExternalLink, Copy, Check, Navigation } from 'lucide-react';

export const ContactMap: React.FC = () => {
  const [copiedAddress, setCopiedAddress] = useState(false);

  const addressText = 'Rua Jerusalém 100, Santo André, SP - CEP 09260-140';

  const copyAddress = () => {
    navigator.clipboard.writeText(addressText);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  return (
    <section id="contato" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-wider bg-emerald-100/70 px-3 py-1 rounded-full">
            Localização & Atendimento
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Onde Estamos & Contato
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Venha nos visitar em nossa sede ou entre em contato pelos canais oficiais de comunicação.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-white p-7 sm:p-9 rounded-3xl shadow-xs border border-slate-200 space-y-6">
            <h3 className="font-extrabold text-slate-900 text-xl tracking-tight pb-2 border-b border-slate-100">
              Informações Oficiais
            </h3>

            {/* Endereço */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 text-base">Endereço</h4>
                  <button
                    onClick={copyAddress}
                    className="text-xs text-slate-500 hover:text-emerald-700 inline-flex items-center gap-1 transition"
                    title="Copiar endereço"
                  >
                    {copiedAddress ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-medium">Copiado</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                  Rua Jerusalém 100, Parque Novo Oratório<br />
                  Santo André - SP<br />
                  <span className="font-mono text-xs text-slate-500">CEP: 09260-140</span>
                </p>
                <div className="mt-2.5 flex items-center gap-2">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Rua+Jerusal%C3%A9m+100+Santo+Andr%C3%A9+SP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-800"
                  >
                    <Navigation className="w-3 h-3" />
                    Abrir no Maps / Waze
                  </a>
                </div>
              </div>
            </div>

            {/* E-mail */}
            <div className="flex items-start space-x-4 pt-2">
              <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center shrink-0 mt-0.5">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-900 text-base">E-mail Institucional</h4>
                <a
                  href="mailto:associacaopno@gmail.com"
                  className="text-slate-600 hover:text-emerald-700 text-sm mt-1 block font-medium transition"
                >
                  associacaopno@gmail.com
                </a>
                <span className="text-[11px] text-slate-400">Atendimento a dúvidas, parcerias e ofícios</span>
              </div>
            </div>

            {/* WhatsApp / Telefone */}
            <div className="flex items-start space-x-4 pt-2">
              <div className="w-12 h-12 bg-sky-100 text-sky-700 rounded-2xl flex items-center justify-center shrink-0 mt-0.5">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-900 text-base">WhatsApp / Telefone</h4>
                <a
                  href="https://wa.me/5511989341315"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-800 hover:text-emerald-700 font-semibold text-base mt-1 block transition"
                >
                  (11) 98934-1315
                </a>
                <span className="text-[11px] text-emerald-700 font-medium">
                  Atendimento direto via mensagem de texto
                </span>
              </div>
            </div>

            {/* Direct Google Review Action */}
            <div className="pt-4 border-t border-slate-100">
              <a
                href="https://g.page/r/CUt-ofS2xnW-EAE/review"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 px-4 rounded-xl text-xs sm:text-sm transition"
              >
                <span>Avaliar a AMPNO no Google</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>
          </div>

          {/* Interactive Google Maps Embed */}
          <div className="lg:col-span-7 flex flex-col h-full space-y-3">
            <div className="h-[380px] sm:h-[440px] w-full rounded-3xl overflow-hidden shadow-sm border border-slate-200 relative bg-slate-100">
              <iframe
                title="Localização da AMPNO no Google Maps"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                src="https://maps.google.com/maps?q=Rua%20Jerusal%C3%A9m%20100,%20Santo%20Andr%C3%A9,%20SP&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full"
              ></iframe>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 px-2">
              <span>Rua Jerusalém 100 - Santo André / SP</span>
              <a
                href="https://maps.google.com/maps?q=Rua%20Jerusal%C3%A9m%20100,%20Santo%20Andr%C3%A9,%20SP"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 font-medium hover:underline inline-flex items-center gap-1"
              >
                Expandir mapa completo
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
