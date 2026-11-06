import React, { useState } from 'react';

export const LOGO_URL = '/assets/aistudio/logo_pno_1eb88bc8.jpg';

interface AmpnoLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showRing?: boolean;
}

export const AmpnoLogo: React.FC<AmpnoLogoProps> = ({
  className = '',
  size = 'md',
  showRing = true,
}) => {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-24 h-24',
    xl: 'w-44 h-44',
  }[size];

  if (!imageError) {
    return (
      <div
        className={`relative inline-flex items-center justify-center shrink-0 ${sizeClasses} ${
          showRing
            ? 'p-0.5 rounded-full bg-gradient-to-tr from-amber-400 via-emerald-600 to-emerald-800 shadow-sm'
            : ''
        } ${className}`}
      >
        <img
          src={LOGO_URL}
          alt="Logotipo AMPNO - Associação de Moradores Parque Novo Oratório"
          onError={() => setImageError(true)}
          className="w-full h-full rounded-full object-cover aspect-square bg-emerald-950 border border-white/60 shadow-xs select-none"
          loading="eager"
        />
      </div>
    );
  }

  // Graceful SVG fallback in the exact brand colors if image fails
  return (
    <div
      className={`${sizeClasses} relative rounded-full bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-900 flex items-center justify-center text-white shadow-md border-2 border-amber-400 p-1 select-none overflow-hidden ${className}`}
      title="AMPNO - Associação dos Moradores do Parque Novo Oratório"
    >
      <div className="w-full h-full rounded-full border border-amber-300 flex flex-col items-center justify-center relative bg-emerald-800/80">
        <span className="font-black text-amber-300 text-xs tracking-wider">AMPNO</span>
      </div>
    </div>
  );
};
