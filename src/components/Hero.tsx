import React from 'react';
import { GOOGLE_FORMS_URL, IMAGES } from '../constants';
import { ImageWithFallback } from './ImageWithFallback';
import { ArrowDown, ExternalLink, Send, Landmark, ShieldCheck, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreProposals: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProposals }) => {
  return (
    <section id="inicio" className="pt-28 pb-16 md:pt-36 md:pb-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Small identification kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 border border-amber-300 text-neutral-900 text-xs font-bold tracking-wider uppercase rounded-md w-fit mb-5">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              MINHAS PROPOSTAS PARA BELO HORIZONTE
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-neutral-950 tracking-tight leading-[1.15] mb-6">
              Uma cidade melhor começa com{' '}
              <span className="relative inline-block whitespace-nowrap">
                <span className="relative z-10 text-neutral-950">propostas sérias</span>
                <span
                  className="absolute left-0 bottom-1.5 w-full h-3.5 bg-amber-300 -z-0 opacity-80"
                  aria-hidden="true"
                ></span>
              </span>
              .
            </h1>

            {/* Presentation copy verbatim from prompt */}
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed mb-4">
              Belo Horizonte precisa de mais eficiência na gestão pública, transparência na utilização dos recursos e soluções concretas para os problemas que afetam a vida da população.
            </p>
            <p className="text-base sm:text-lg text-neutral-800 font-medium leading-relaxed mb-8">
              Conheça seis propostas voltadas à educação, à segurança escolar, à integridade dos contratos públicos, ao cuidado com a cidade e à responsabilidade com o dinheiro público.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                type="button"
                onClick={onExploreProposals}
                className="inline-flex items-center justify-center gap-2.5 bg-neutral-950 hover:bg-neutral-800 active:bg-black text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-md shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <span>CONHEÇA AS 6 PROPOSTAS</span>
                <ArrowDown className="w-4 h-4 text-amber-400 stroke-[2.5]" />
              </button>

              <a
                href={GOOGLE_FORMS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-neutral-950 font-bold text-sm sm:text-base px-6 py-3.5 rounded-md border border-amber-500/40 shadow-xs transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950"
              >
                <Send className="w-4 h-4 stroke-[2.5]" />
                <span>ENVIE A DEMANDA DO SEU BAIRRO</span>
                <ExternalLink className="w-4 h-4 opacity-70" />
              </a>
            </div>

            {/* Key Commitment Pillars strip */}
            <div className="grid grid-cols-3 gap-3 pt-8 mt-8 border-t border-neutral-100 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-neutral-800 font-semibold">
                <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Fiscalização real</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-800 font-semibold">
                <Landmark className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Transparência</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-800 font-semibold">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Compromisso BH</span>
              </div>
            </div>
          </div>

          {/* Right Column: Vini Santos Official Photo in Circular Format */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center py-4">
            <div className="relative">
              {/* Outer decorative ring in yellow */}
              <div
                className="absolute -inset-2.5 rounded-full bg-amber-400/30"
                aria-hidden="true"
              />

              {/* Circular Photo Frame */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-amber-400 bg-neutral-950 shadow-2xl flex items-center justify-center">
                <ImageWithFallback
                  src={IMAGES.viniSantos}
                  alt="Fotografia oficial de Vini Santos"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  fallbackText="Vini Santos"
                />
              </div>

              {/* Official badge positioned at the base of the circle */}
              <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 bg-neutral-950 text-white border-2 border-amber-400 px-5 py-1.5 rounded-full shadow-lg flex items-center gap-2 whitespace-nowrap z-10">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shrink-0"></span>
                <span className="text-xs sm:text-sm font-black tracking-wide uppercase">
                  VINI SANTOS
                </span>
                <span className="text-[11px] text-amber-400 font-bold uppercase">
                  BH
                </span>
              </div>
            </div>

            {/* Institutional label underneath */}
            <div className="mt-8 text-center max-w-xs">
              <p className="text-xs sm:text-sm font-semibold text-neutral-800">
                Compromisso com propostas sérias para Belo Horizonte
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
