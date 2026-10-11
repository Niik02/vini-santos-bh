import React from 'react';
import { Proposal, PROPOSALS } from '../constants';
import {
  ArrowRight,
  GraduationCap,
  Shield,
  Award,
  FileCheck,
  Hammer,
  Scale,
} from 'lucide-react';

interface ProposalsSectionProps {
  onSelectProposal: (proposal: Proposal) => void;
  selectedCategory: string;
  onFilterChange: (category: string) => void;
}

const getCategoryIcon = (proposalId: string) => {
  switch (proposalId) {
    case 'metodo-fonico':
      return <GraduationCap className="w-5 h-5 text-amber-500" />;
    case 'cameras-salas-de-aula':
      return <Shield className="w-5 h-5 text-amber-500" />;
    case 'escola-nota-10':
      return <Award className="w-5 h-5 text-amber-500" />;
    case 'lei-antimafia':
      return <FileCheck className="w-5 h-5 text-amber-500" />;
    case 'bh-em-acao':
      return <Hammer className="w-5 h-5 text-amber-500" />;
    case 'gasto-responsavel':
      return <Scale className="w-5 h-5 text-amber-500" />;
    default:
      return null;
  }
};

export const ProposalsSection: React.FC<ProposalsSectionProps> = ({
  onSelectProposal,
  selectedCategory,
  onFilterChange,
}) => {
  const categories = [
    { label: 'Todas as 6 propostas', value: 'all' },
    { label: 'Educação & Segurança (3)', value: 'Educação' },
    { label: 'Integridade Pública (1)', value: 'Integridade pública' },
    { label: 'Cuidado com a Cidade (1)', value: 'Zeladoria urbana e inclusão produtiva' },
    { label: 'Gasto Responsável (1)', value: 'Gestão pública e orçamento' },
  ];

  const filteredProposals = PROPOSALS.filter((p) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'Educação') {
      return p.category === 'Educação' || p.category === 'Educação e segurança escolar';
    }
    return p.category === selectedCategory;
  });

  return (
    <section id="propostas" className="py-20 md:py-28 bg-neutral-50/60 border-b border-neutral-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-600 mb-3">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            <span>Plano de Ação para BH</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight mb-4">
            Seis propostas para transformar Belo Horizonte
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Conheça as ideias, entenda os problemas que queremos enfrentar e veja como cada proposta pretende funcionar.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 overflow-x-auto" aria-label="Filtrar por eixo temático">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                type="button"
                onClick={() => onFilterChange(cat.value)}
                className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 ${
                  isActive
                    ? 'bg-neutral-950 text-white shadow-xs'
                    : 'bg-white text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 border border-neutral-200'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Proposals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProposals.map((proposal) => (
            <article
              key={proposal.id}
              className="bg-white border-2 border-neutral-200 hover:border-neutral-900 rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 group shadow-2xs hover:shadow-md"
            >
              <div>
                {/* Proposal Number & Category */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-4 border-b border-neutral-100">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-2xl font-black text-neutral-950">
                      {proposal.number}
                    </span>
                    <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                      PROPOSTA
                    </span>
                  </div>
                  <div className="p-2 bg-amber-50 rounded-lg border border-amber-200/60">
                    {getCategoryIcon(proposal.id)}
                  </div>
                </div>

                <div className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-2">
                  {proposal.category}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-extrabold text-neutral-950 leading-snug mb-3.5 group-hover:text-neutral-800 transition-colors">
                  {proposal.title}
                </h3>

                {/* Summary */}
                <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                  {proposal.summary}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-neutral-100 mt-2">
                <button
                  type="button"
                  onClick={() => onSelectProposal(proposal)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-neutral-900 hover:bg-amber-400 group-hover:bg-amber-400 text-white hover:text-neutral-950 group-hover:text-neutral-950 font-bold text-xs sm:text-sm py-3 px-4 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  <span>CONHEÇA A PROPOSTA</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Explanatory note */}
        <div className="mt-12 p-4 bg-white border border-neutral-200 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-neutral-600">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shrink-0"></span>
            <span>
              Todas as 6 propostas detalham problema, solução, funcionamento e garantias de acordo com o plano oficial para BH.
            </span>
          </div>
          <span className="text-neutral-400 shrink-0 font-medium">Documento oficial de Belo Horizonte</span>
        </div>
      </div>
    </section>
  );
};
