import React, { useState } from 'react';
import { Star, Menu, X, Phone, MessageSquare, ExternalLink } from 'lucide-react';
import { AmpnoLogo } from './AmpnoLogo';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Redes Sociais', href: '#redes' },
    { label: 'Apoiadores', href: '#patrocinadores' },
    { label: 'Sugestões', href: '#sugestoes' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-xs sticky top-0 z-50 border-b border-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo & Brand */}
        <a href="#" className="flex items-center space-x-3 group">
          <AmpnoLogo size="md" className="group-hover:scale-105 transition-transform" />
          <div>
            <span className="block font-bold text-slate-900 text-lg sm:text-xl leading-tight group-hover:text-emerald-700 transition-colors">
              AMPNO
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Associação de Moradores
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-7 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-emerald-700 relative py-1 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-emerald-600 hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions & Google Review Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://g.page/r/CUt-ofS2xnW-EAE/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-sm hover:shadow transition transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Star className="w-4 h-4 fill-white text-white" />
            <span>Avaliar no Google</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="https://g.page/r/CUt-ofS2xnW-EAE/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center p-2 rounded-full bg-amber-500 text-white text-xs font-semibold"
            title="Avaliar no Google"
          >
            <Star className="w-4 h-4 fill-white text-white" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition focus:outline-none focus:ring-2 focus:ring-emerald-500"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 shadow-lg animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 transition"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="https://g.page/r/CUt-ofS2xnW-EAE/review"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-medium py-2.5 px-4 rounded-xl text-sm transition"
              >
                <Star className="w-4 h-4 fill-white" />
                Avaliar no Google
                <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
              </a>
              <a
                href="https://wa.me/5511989341315"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 px-4 rounded-xl text-sm transition"
              >
                <Phone className="w-4 h-4" />
                WhatsApp: (11) 98934-1315
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
