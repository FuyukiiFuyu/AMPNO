import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Pillars } from './components/Pillars';
import { SocialQRCodeSection } from './components/SocialQRCodeSection';
import { Sponsors } from './components/Sponsors';
import { SuggestionsForm } from './components/SuggestionsForm';
import { ContactMap } from './components/ContactMap';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-emerald-500 selection:text-white">
      {/* Cabeçalho / Navbar */}
      <Header />

      {/* Conteúdo Principal */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Sobre / Impacto e Compromisso */}
        <Pillars />

        {/* Redes Sociais e QR Codes */}
        <SocialQRCodeSection />

        {/* Patrocinadores e Apoiadores Locais */}
        <Sponsors />

        {/* Caixa de Sugestões e Ouvidoria */}
        <SuggestionsForm />

        {/* Onde Estamos e Contato */}
        <ContactMap />
      </main>

      {/* Rodapé */}
      <Footer />

      {/* Botão Flutuante do WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
