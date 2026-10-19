import React from 'react';
import { GOOGLE_FORMS_URL, INSTAGRAM_URL, IMAGES } from '../constants';
import { ImageWithFallback } from './ImageWithFallback';
import { Instagram, Send, ExternalLink, ChevronUp } from 'lucide-react';

interface FooterProps {
  onScrollToTop: () => void;
  onScrollToProposals: () => void;
  onScrollToAbout: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onScrollToTop,
  onScrollToProposals,
  onScrollToAbout,
}) => {
  return (
    <footer className="bg-neutral-950 text-white border-t border-neutral-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          {/* Brand & Mission Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded p-1 flex items-center justify-center shrink-0">
                <ImageWithFallback
                  src={IMAGES.logoBh}
                  alt="Logo de Belo Horizonte"
                  className="w-full h-full object-contain"
                  fallbackText="BH"
                />
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight block">
                  VINI SANTOS
                </span>
                <span className="text-xs text-amber-400 font-bold tracking-wider uppercase">
                  Belo Horizonte · MG
                </span>
              </div>
            </div>

            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              Ideias para Belo Horizonte: iniciativas fundamentadas em fiscalização, transparência e cuidado com quem mais precisa.
            </p>

            <div className="pt-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-300 hover:text-amber-400 transition-colors group"
                aria-label="Perfil do Instagram de Vini Santos (@vinisantosbh) - abre em nova aba"
              >
                <div className="p-2 bg-neutral-900 border border-neutral-800 group-hover:border-amber-400 rounded-md transition-colors">
                  <Instagram className="w-4 h-4 text-amber-400" />
                </div>
                <span>@vinisantosbh</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={onScrollToTop}
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onScrollToProposals}
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Ideias para Belo Horizonte
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onScrollToAbout}
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Quem é Vini Santos
                </button>
              </li>
            </ul>
          </div>

          {/* Citizen Engagement & Demand */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Participe
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Ajude a mapear as demandas da sua rua e do seu bairro diretamente para a nossa equipe.
            </p>

            <div>
              <a
                href={GOOGLE_FORMS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-extrabold text-xs px-4 py-2.5 rounded-md transition-all shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>ENVIAR DEMANDA DO SEU BAIRRO</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Final Quote & Copyright Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <p className="text-sm sm:text-base font-bold text-amber-400">
              “Transparência, responsabilidade e compromisso com Belo Horizonte.”
            </p>
            <p className="text-xs text-neutral-500 mt-1">
              Conteúdo elaborado com base no documento institucional oficial de Vini Santos.
            </p>
          </div>

          <button
            type="button"
            onClick={onScrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 px-3 py-1.5 rounded transition-colors"
            aria-label="Voltar ao topo da página"
          >
            <span>Voltar ao topo</span>
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
