import React from 'react';
import { GOOGLE_FORMS_URL } from '../constants';
import { Send, ExternalLink, MapPin, MessageSquareWarning, Users } from 'lucide-react';

export const DemandasSection: React.FC = () => {
  return (
    <section id="enviar-demanda" className="py-20 md:py-28 bg-amber-400 text-neutral-950 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge / Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-neutral-950 text-amber-300 text-xs font-black uppercase tracking-wider rounded-md mb-6 shadow-xs">
          <MessageSquareWarning className="w-4 h-4 text-amber-400" />
          <span>Participação Popular</span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6 text-neutral-950">
          Sua voz sobre BH
        </h2>

        {/* Main Text */}
        <p className="text-lg sm:text-xl md:text-2xl text-neutral-900 font-medium leading-relaxed max-w-3xl mx-auto mb-6">
          Tem algum problema no seu bairro que precisa ser resolvido? Envie sua demanda e ajude a mostrar o que precisa mudar na nossa cidade.
        </p>

        {/* Complementary Phrase */}
        <div className="inline-block bg-neutral-950/10 px-4 py-2 rounded-lg text-base sm:text-lg font-bold text-neutral-950 italic mb-10">
          “Uma cidade melhor também se constrói ouvindo quem vive nela.”
        </div>

        {/* Large Button */}
        <div>
          <a
            href={GOOGLE_FORMS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-neutral-950 hover:bg-neutral-800 active:bg-black text-white text-base sm:text-lg md:text-xl font-black px-8 sm:px-12 py-4 sm:py-5 rounded-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-neutral-900"
            aria-label="Enviar minha demanda para Vini Santos pelo formulário oficial (abre em nova aba)"
          >
            <Send className="w-6 h-6 text-amber-400 stroke-[2.5]" />
            <span className="tracking-wide uppercase">Enviar minha demanda</span>
            <ExternalLink className="w-5 h-5 text-neutral-300" />
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-semibold text-neutral-800">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4" /> Todas as 9 regionais de BH
          </span>
          <span className="hidden sm:inline" aria-hidden="true">·</span>
          <span className="flex items-center gap-1.5">
            <Users className="w-4 h-4" /> Direto para a equipe de Vini Santos
          </span>
          <span className="hidden sm:inline" aria-hidden="true">·</span>
          <span>Formulário seguro no Google Forms</span>
        </div>
      </div>
    </section>
  );
};
