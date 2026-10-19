import React, { useEffect } from 'react';
import { Proposal, GOOGLE_FORMS_URL } from '../constants';
import {
  X,
  ArrowLeft,
  ArrowRight,
  Send,
  ExternalLink,
  ShieldAlert,
  CheckCircle2,
  ListChecks,
  Target,
  FileText,
  AlertTriangle,
} from 'lucide-react';

interface ProposalDetailModalProps {
  proposal: Proposal | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  totalProposals: number;
}

export const ProposalDetailModal: React.FC<ProposalDetailModalProps> = ({
  proposal,
  onClose,
  onNext,
  onPrev,
  totalProposals,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    if (proposal) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [proposal, onClose, onNext, onPrev]);

  if (!proposal) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-proposal-title"
    >
      <div className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl border border-neutral-300 overflow-hidden flex flex-col max-h-[92vh] animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Top Header Bar */}
        <div className="flex items-center justify-between px-5 sm:px-8 py-4 bg-white border-b border-neutral-200 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center bg-amber-400 text-neutral-950 font-black text-sm px-2.5 py-1 rounded">
              IDEIA {proposal.number}
            </span>
            <span className="text-xs sm:text-sm font-semibold text-neutral-600 hidden sm:inline">
              {proposal.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-neutral-500 hover:text-neutral-950 hover:bg-neutral-100 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              aria-label="Fechar detalhes da ideia"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body Content (Scrollable) */}
        <div className="overflow-y-auto p-5 sm:p-8 space-y-8 divide-y divide-neutral-200">
          {/* Title & Highlight quote */}
          <div className="space-y-4">
            <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider flex items-center gap-2">
              <span>{proposal.category}</span>
              <span aria-hidden="true">·</span>
              <span className="text-neutral-400">{proposal.pdfPages}</span>
            </div>

            <div>
              <h2 id="modal-proposal-title" className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight">
                {proposal.title}
              </h2>
              {proposal.subtitle && (
                <p className="text-sm sm:text-base font-bold text-neutral-600 mt-1">
                  {proposal.subtitle}
                </p>
              )}
            </div>

            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal bg-neutral-50 p-4 rounded-lg border-l-4 border-amber-400 text-justify text-abnt">
              {proposal.summary}
            </p>

            {proposal.highlightQuote && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 sm:p-5 text-neutral-900 font-bold text-base sm:text-lg flex items-start gap-3">
                <span className="text-amber-500 text-2xl font-serif leading-none select-none">“</span>
                <p className="italic">{proposal.highlightQuote}</p>
              </div>
            )}
          </div>

          {/* Special Visual Flows if present */}
          {proposal.visualFlow && (
            <div className="pt-6">
              <div className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-3">
                {proposal.visualFlow.label}
              </div>
              <div className="bg-neutral-950 text-white rounded-lg p-4 sm:p-6 shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-3 text-center">
                  {proposal.visualFlow.steps.map((step, idx) => (
                    <React.Fragment key={step}>
                      <div className="flex-1 min-w-[130px] bg-neutral-900 border border-neutral-700 rounded-md p-3">
                        <span className="block text-[10px] text-amber-400 font-mono font-bold mb-1">
                          ETAPA {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span className="text-xs sm:text-sm font-extrabold tracking-wide text-neutral-100">
                          {step}
                        </span>
                      </div>
                      {idx < proposal.visualFlow!.steps.length - 1 && (
                        <div className="hidden md:flex text-amber-400 font-bold text-lg select-none">
                          →
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Proposal 06: Three Pillars */}
          {proposal.pillars && (
            <div className="pt-6 space-y-4">
              <div className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
                Os Três Pilares da Ideia
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {proposal.pillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="bg-white border-2 border-neutral-200 rounded-lg p-4 hover:border-amber-400 transition-colors"
                  >
                    <div className="font-extrabold text-base text-neutral-950 mb-2 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                      {pillar.title}
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Problem & Proposed Solution */}
          <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50/50 border border-red-100 rounded-lg p-5">
              <div className="flex items-center gap-2 text-red-900 font-bold text-sm uppercase tracking-wide mb-2.5">
                <AlertTriangle className="w-4 h-4 text-red-600" />
                <span>O Problema que Queremos Enfrentar</span>
              </div>
              <p className="text-sm text-neutral-700 leading-relaxed text-justify text-abnt">
                {proposal.problem}
              </p>
            </div>

            <div className="bg-emerald-50/50 border border-emerald-100 rounded-lg p-5">
              <div className="flex items-center gap-2 text-emerald-950 font-bold text-sm uppercase tracking-wide mb-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>A Solução Planejada</span>
              </div>
              <p className="text-sm text-neutral-700 leading-relaxed text-justify text-abnt">
                {proposal.solution}
              </p>
            </div>
          </div>

          {/* How it works: structured execution list */}
          <div className="pt-6 space-y-4">
            <div className="flex items-center gap-2 text-neutral-950 font-extrabold text-sm sm:text-base tracking-wide uppercase">
              <ListChecks className="w-5 h-5 text-amber-500" />
              <span>Como Esta Ideia Vai Funcionar na Prática</span>
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              {proposal.howItWorks.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-neutral-50/80 hover:bg-neutral-100/80 border border-neutral-200/80 p-3.5 rounded-md transition-colors"
                >
                  <span className="w-6 h-6 rounded-full bg-neutral-950 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-sm text-neutral-800 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Safeguards and conditions (preserving the PDF criteria) */}
          <div className="pt-6 space-y-4">
            <div className="flex items-center gap-2 text-neutral-950 font-extrabold text-sm sm:text-base tracking-wide uppercase">
              <ShieldAlert className="w-5 h-5 text-neutral-800" />
              <span>Garantias, Critérios e Condições da Ideia</span>
            </div>

            <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-5 space-y-3">
              {proposal.safeguards.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-neutral-700">
                  <span className="text-amber-500 font-bold select-none">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Final Objective */}
          <div className="pt-6">
            <div className="bg-neutral-950 text-white rounded-lg p-5 sm:p-6 border border-neutral-800">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-2">
                <Target className="w-4 h-4" />
                <span>Objetivo Final da Ideia</span>
              </div>
              <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-medium text-justify text-abnt">
                {proposal.objective}
              </p>
            </div>
          </div>

          {/* Direct Demand Callout inside Modal */}
          <div className="pt-6">
            <div className="bg-amber-400 rounded-lg p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-950">
              <div>
                <div className="font-extrabold text-base">
                  Quer enviar uma demanda sobre este tema?
                </div>
                <div className="text-xs sm:text-sm text-neutral-800 font-medium">
                  Relate a situação da sua região pelo formulário oficial de Belo Horizonte.
                </div>
              </div>
              <a
                href={GOOGLE_FORMS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-neutral-950 hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-md shrink-0 transition-colors"
              >
                <Send className="w-4 h-4 text-amber-400" />
                <span>ENVIAR MINHA DEMANDA</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Modal Bottom Controls */}
        <div className="p-4 sm:p-5 bg-neutral-100 border-t border-neutral-200 flex items-center justify-between gap-3 sticky bottom-0 z-10">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-neutral-200 text-neutral-800 text-xs sm:text-sm font-bold rounded-md border border-neutral-300 transition-colors"
          >
            <FileText className="w-4 h-4" />
            <span>Voltar para as ideias</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onPrev}
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-white hover:bg-neutral-200 text-neutral-800 text-xs sm:text-sm font-semibold rounded-md border border-neutral-300 transition-colors"
              aria-label="Ideia anterior"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Anterior</span>
            </button>
            <span className="text-xs font-mono font-bold text-neutral-500 px-1">
              {proposal.number}/{String(totalProposals).padStart(2, '0')}
            </span>
            <button
              type="button"
              onClick={onNext}
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-white hover:bg-neutral-200 text-neutral-800 text-xs sm:text-sm font-semibold rounded-md border border-neutral-300 transition-colors"
              aria-label="Próxima ideia"
            >
              <span className="hidden sm:inline">Próxima</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
