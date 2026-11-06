import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Copy, Check, ExternalLink, Maximize2, X, Star } from 'lucide-react';

// Brand SVG Icons
const InstagramIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const FacebookIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const WhatsAppIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 18.15c-1.49 0-2.95-.4-4.23-1.16l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.37c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.01 4.54-3.68 8.23-8.19 8.23zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.59.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.12-.22-.19-.47-.31z" />
  </svg>
);

interface SocialNetwork {
  id: string;
  name: string;
  handle: string;
  url: string;
  colorName: string;
  iconBg: string;
  iconColor: string;
  btnBg: string;
  btnHover: string;
  icon: React.ComponentType<{ className?: string }>;
  buttonText: string;
  description: string;
}

export const SocialQRCodeSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [zoomedNetwork, setZoomedNetwork] = useState<SocialNetwork | null>(null);

  const networks: SocialNetwork[] = [
    {
      id: 'instagram',
      name: 'Instagram',
      handle: '@ampno.oficial',
      url: 'https://www.instagram.com/ampno.oficial',
      colorName: 'pink',
      iconBg: 'bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 text-white',
      iconColor: 'text-pink-600',
      btnBg: 'bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600',
      btnHover: 'hover:opacity-95',
      icon: InstagramIcon,
      buttonText: 'Seguir no Instagram',
      description: 'Fotos dos eventos, novidades, melhorias no bairro e comunicados em tempo real.',
    },
    {
      id: 'facebook',
      name: 'Facebook',
      handle: '/associacaompno',
      url: 'https://www.facebook.com/associacaompno',
      colorName: 'blue',
      iconBg: 'bg-blue-600 text-white',
      iconColor: 'text-blue-600',
      btnBg: 'bg-blue-600',
      btnHover: 'hover:bg-blue-700',
      icon: FacebookIcon,
      buttonText: 'Curtir Página no Facebook',
      description: 'Publicações detalhadas, transmissões e interação entre todos os vizinhos.',
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      handle: '(11) 98934-1315',
      url: 'https://wa.me/5511989341315',
      colorName: 'emerald',
      iconBg: 'bg-emerald-600 text-white',
      iconColor: 'text-emerald-600',
      btnBg: 'bg-emerald-600',
      btnHover: 'hover:bg-emerald-700',
      icon: WhatsAppIcon,
      buttonText: 'Enviar Mensagem WhatsApp',
      description: 'Atendimento direto, avisos urgentes e canal rápido com a diretoria.',
    },
  ];

  const copyToClipboard = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="redes" className="py-16 sm:py-24 bg-white border-t border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Conectividade &bull; Canais Oficiais
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Acompanhe Nossas Redes Sociais
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Aponte a câmera do seu celular para o QR Code ou clique diretamente nos botões para acessar e nos seguir.
          </p>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {networks.map((net) => {
            const Icon = net.icon;
            const isCopied = copiedId === net.id;

            return (
              <div
                key={net.id}
                className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-8 text-center flex flex-col items-center shadow-xs hover:shadow-md transition-all relative group"
              >
                {/* Header Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform ${net.iconBg}`}
                >
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="font-extrabold text-slate-900 text-xl tracking-tight">
                  {net.name}
                </h3>
                <span className="text-xs font-semibold text-slate-500 mt-0.5 mb-2 font-mono">
                  {net.handle}
                </span>

                <p className="text-xs text-slate-600 mb-5 min-h-[36px] max-w-xs">
                  {net.description}
                </p>

                {/* QR Code Container */}
                <div className="relative bg-white p-3.5 rounded-2xl shadow-sm border border-slate-200/90 mb-5 group-hover:border-slate-300 transition-colors">
                  <QRCodeSVG
                    value={net.url}
                    size={124}
                    level="M"
                    includeMargin={false}
                    className="rounded-lg"
                  />
                  <button
                    onClick={() => setZoomedNetwork(net)}
                    className="absolute bottom-2 right-2 p-1.5 bg-slate-900/80 hover:bg-slate-900 text-white rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Ampliar QR Code"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <span className="text-[11px] text-slate-400 font-medium mb-4 flex items-center gap-1">
                  Aponte a câmera para abrir
                </span>

                {/* Buttons */}
                <div className="w-full space-y-2 mt-auto">
                  <a
                    href={net.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 ${net.btnBg} ${net.btnHover} text-white font-semibold py-3 px-4 rounded-xl text-sm transition shadow-sm hover:shadow`}
                  >
                    <span>{net.buttonText}</span>
                    <ExternalLink className="w-4 h-4 opacity-80" />
                  </a>

                  <button
                    onClick={() => copyToClipboard(net.url, net.id)}
                    className="w-full flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-white rounded-lg border border-transparent hover:border-slate-200 transition"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-semibold">Link copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar link</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Google Reviews Banner */}
        <div className="mt-12 bg-amber-50/70 border border-amber-200 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-sm mx-auto md:mx-0">
              <Star className="w-8 h-8 fill-white" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                Avalie o Parque Novo Oratório no Google
              </h4>
              <p className="text-sm text-slate-600">
                Sua avaliação fortalece o bairro e ajuda a dar visibilidade às nossas causas e melhorias.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <div className="bg-white p-2 rounded-xl border border-amber-200 shadow-2xs hidden lg:block">
              <QRCodeSVG
                value="https://g.page/r/CUt-ofS2xnW-EAE/review"
                size={64}
                level="M"
              />
            </div>
            <a
              href="https://g.page/r/CUt-ofS2xnW-EAE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-xl text-sm shadow-sm transition"
            >
              <Star className="w-4 h-4 fill-white" />
              <span>Deixar Avaliação 5 Estrelas</span>
              <ExternalLink className="w-4 h-4 ml-1 opacity-80" />
            </a>
          </div>
        </div>
      </div>

      {/* Modal for Zoomed QR Code */}
      {zoomedNetwork && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 text-center shadow-2xl relative animate-in zoom-in-95 duration-150">
            <button
              onClick={() => setZoomedNetwork(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-bold text-lg text-slate-900 mt-2">
              QR Code do {zoomedNetwork.name}
            </h3>
            <p className="text-xs text-slate-500 mb-6">{zoomedNetwork.handle}</p>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex justify-center mb-6">
              <QRCodeSVG
                value={zoomedNetwork.url}
                size={220}
                level="Q"
                includeMargin
              />
            </div>

            <p className="text-xs text-slate-600 mb-4">
              Aponte a câmera do celular para abrir diretamente o {zoomedNetwork.name}.
            </p>

            <a
              href={zoomedNetwork.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full inline-flex justify-center items-center gap-2 ${zoomedNetwork.btnBg} text-white font-semibold py-3 rounded-xl text-sm`}
            >
              {zoomedNetwork.buttonText}
            </a>
          </div>
        </div>
      )}
    </section>
  );
};
