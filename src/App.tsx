import React, { useState, useEffect } from 'react';
import { Proposal, PROPOSALS } from './constants';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProposalsSection } from './components/ProposalsSection';
import { ProposalDetailModal } from './components/ProposalDetailModal';
import { DemandasSection } from './components/DemandasSection';
import { AboutSection } from './components/AboutSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedProposal, setSelectedProposal] = useState<Proposal | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Handle URL hash on initial load or popstate
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const matchingProposal = PROPOSALS.find(
          (p) => p.id === hash || `proposta-${p.number}` === hash || `ideia-${p.number}` === hash
        );
        if (matchingProposal) {
          setSelectedProposal(matchingProposal);
        }
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleSelectProposal = (proposal: Proposal) => {
    setSelectedProposal(proposal);
  };

  const handleNextProposal = () => {
    if (!selectedProposal) return;
    const currentIndex = PROPOSALS.findIndex((p) => p.id === selectedProposal.id);
    const nextIndex = (currentIndex + 1) % PROPOSALS.length;
    setSelectedProposal(PROPOSALS[nextIndex]);
  };

  const handlePrevProposal = () => {
    if (!selectedProposal) return;
    const currentIndex = PROPOSALS.findIndex((p) => p.id === selectedProposal.id);
    const prevIndex = (currentIndex - 1 + PROPOSALS.length) % PROPOSALS.length;
    setSelectedProposal(PROPOSALS[prevIndex]);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategoryNav = (category: string) => {
    setSelectedCategory(category);
    scrollToSection('propostas');
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col font-sans selection:bg-amber-300 selection:text-neutral-950">
      {/* Fixed Header */}
      <Header onSelectCategory={handleCategoryNav} />

      <main className="flex-1">
        {/* 1. Hero Presentation Section */}
        <Hero onExploreProposals={() => scrollToSection('propostas')} />

        {/* 2. Proposals Section */}
        <ProposalsSection
          onSelectProposal={handleSelectProposal}
          selectedCategory={selectedCategory}
          onFilterChange={setSelectedCategory}
        />

        {/* 3. Highlight Section - Demandas da População */}
        <DemandasSection />

        {/* 4. Biography Section - Quem é Vini Santos */}
        <AboutSection onScrollToProposals={() => scrollToSection('propostas')} />

        {/* 5. Final CTA Section */}
        <FinalCtaSection onScrollToProposals={() => scrollToSection('propostas')} />
      </main>

      {/* 6. Footer */}
      <Footer
        onScrollToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onScrollToProposals={() => scrollToSection('propostas')}
        onScrollToAbout={() => scrollToSection('quem-e-vini-santos')}
      />

      {/* Modal for detailed proposal view */}
      <ProposalDetailModal
        proposal={selectedProposal}
        onClose={() => setSelectedProposal(null)}
        onNext={handleNextProposal}
        onPrev={handlePrevProposal}
        totalProposals={PROPOSALS.length}
      />
    </div>
  );
}
