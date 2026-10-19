import React from 'react';
import { GOOGLE_FORMS_URL } from '../constants';
import { Send, ArrowUp, ExternalLink } from 'lucide-react';

interface FinalCtaSectionProps {
  onScrollToProposals: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onScrollToProposals }) => {
  return (
    <section className="py-20 md:py-24 bg-neutral-900 text-white border-b border-neutral-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4 text-white">
          Belo Horizonte é de todos nós.
        </h2>

        {/* Text */}
        <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
          Conheça as ideias, participe e envie os problemas que precisam de atenção na nossa cidade.
        </p>

        {/* Two Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onScrollToProposals}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-neutral-100 text-neutral-950 font-extrabold text-sm sm:text-base px-7 py-4 rounded-md transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <span>VER AS SETE IDEIAS</span>
            <ArrowUp className="w-4 h-4 stroke-[2.5]" />
          </button>

          <a
            href={GOOGLE_FORMS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-black text-sm sm:text-base px-8 py-4 rounded-md shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <Send className="w-4 h-4 stroke-[2.5]" />
            <span className="tracking-wide uppercase">ENVIAR MINHA DEMANDA</span>
            <ExternalLink className="w-4 h-4 opacity-70" />
          </a>
        </div>
      </div>
    </section>
  );
};
