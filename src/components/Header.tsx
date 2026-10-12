import React, { useState, useEffect } from 'react';
import { GOOGLE_FORMS_URL, IMAGES } from '../constants';
import { ImageWithFallback } from './ImageWithFallback';
import { Menu, X, ExternalLink, Send } from 'lucide-react';

interface HeaderProps {
  onSelectCategory?: (categoryFilter: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onSelectCategory }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Início', href: '#inicio', category: 'all' },
    { label: 'Educação', href: '#propostas', category: 'Educação' },
    { label: 'Integridade Pública', href: '#propostas', category: 'Integridade pública' },
    { label: 'Cuidado com a Cidade', href: '#propostas', category: 'Zeladoria urbana e inclusão produtiva' },
    { label: 'Gasto Responsável', href: '#propostas', category: 'Gestão pública e orçamento' },
    { label: 'Quem é Vini Santos', href: '#quem-e-vini-santos', category: null },
  ];

  const handleNavClick = (href: string, category: string | null) => {
    setIsMobileMenuOpen(false);
    if (category && onSelectCategory) {
      onSelectCategory(category);
    }
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? 'shadow-xs border-b border-neutral-200/90' : 'border-b border-neutral-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2">
          {/* Logo & Brand - Single-line harmonious layout on mobile and desktop */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#inicio', 'all');
            }}
            className="flex items-center gap-2 sm:gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-md p-1 min-w-0 shrink"
            aria-label="Vini Santos - Início"
          >
            <div className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center bg-white rounded border border-neutral-200 overflow-hidden shrink-0">
              <ImageWithFallback
                src={IMAGES.logoBh}
                alt="Logo Belo Horizonte"
                className="w-full h-full object-contain p-0.5"
                fallbackText="BH"
              />
            </div>
            <div className="flex flex-col justify-center min-w-0">
              <span className="font-extrabold text-sm sm:text-base md:text-lg tracking-tight text-neutral-950 group-hover:text-neutral-700 transition-colors whitespace-nowrap leading-tight">
                VINI SANTOS
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-neutral-500 uppercase tracking-wider whitespace-nowrap leading-none mt-0.5">
                Belo Horizonte
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1.5" aria-label="Navegação principal">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href, item.category);
                }}
                className="px-3 py-2 text-sm font-semibold text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100/70 rounded-md transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            <a
              href={GOOGLE_FORMS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-neutral-950 font-extrabold text-xs sm:text-sm px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-md border border-amber-500/30 shadow-xs hover:shadow transition-all whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950"
              aria-label="Enviar demanda do seu bairro via Google Forms (abre em nova aba)"
            >
              <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
              <span className="tracking-wide uppercase text-[11px] sm:text-xs md:text-sm">ENVIAR DEMANDA</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60 hidden md:inline" />
            </a>

            {/* Mobile hamburger button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-1.5 sm:p-2 text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 shrink-0"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="xl:hidden border-t border-neutral-200 bg-white shadow-xl animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href, item.category);
                }}
                className="flex items-center justify-between px-3 py-3 rounded-md text-base font-medium text-neutral-800 hover:bg-neutral-100 hover:text-neutral-950"
              >
                <span>{item.label}</span>
                <span className="text-xs text-neutral-400">Ir</span>
              </a>
            ))}

            <div className="pt-3 mt-2 border-t border-neutral-100">
              <a
                href={GOOGLE_FORMS_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold py-3 rounded-md border border-amber-500/40 shadow-xs"
              >
                <Send className="w-4 h-4 stroke-[2.5]" />
                <span className="tracking-wider uppercase text-sm">ENVIAR DEMANDA DO SEU BAIRRO</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
