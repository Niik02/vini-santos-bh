import React from 'react';
import { IMAGES } from '../constants';
import { ImageWithFallback } from './ImageWithFallback';
import { ArrowDown, Heart, Eye, ShieldAlert, Award } from 'lucide-react';

interface AboutSectionProps {
  onScrollToProposals: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onScrollToProposals }) => {
  return (
    <section id="quem-e-vini-santos" className="py-20 md:py-28 bg-white border-b border-neutral-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Photo & Profile Card */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-neutral-900 rounded-2xl p-3 sm:p-4 border-2 border-amber-400 shadow-xl">
              <div className="aspect-[4/5] w-full rounded-xl overflow-hidden bg-neutral-800 flex items-center justify-center">
                <ImageWithFallback
                  src={IMAGES.viniSantos}
                  alt="Fotografia oficial de Vini Santos"
                  className="w-full h-full object-cover object-top"
                  fallbackText="Vini Santos - Belo Horizonte"
                />
              </div>

              <div className="pt-4 pb-2 px-2 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-amber-400 tracking-tight">
                      VINI SANTOS
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300 font-medium">
                      Cuidador e defensor de uma BH eficiente e humana
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center text-neutral-950 font-bold shrink-0">
                    BH
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-neutral-800 grid grid-cols-2 gap-2 text-[11px] text-neutral-300">
                  <div className="flex items-center gap-1.5">
                    <Heart className="w-3.5 h-3.5 text-amber-400" /> Cuidado social
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-amber-400" /> Fiscalização
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldAlert className="w-3.5 h-3.5 text-amber-400" /> Integridade
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-amber-400" /> Educação
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 p-4 bg-amber-50 rounded-xl border border-amber-200">
              <p className="text-xs text-neutral-700 leading-relaxed font-medium">
                Vini acredita que uma cidade de verdade é construída a partir do olhar atento para quem vive nela e da responsabilidade irrestrita com os recursos públicos.
              </p>
            </div>
          </div>

          {/* Biographical and Vision Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-600">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span>Biografia Institucional</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-950 tracking-tight">
              Quem é Vini Santos
            </h2>

            {/* Verbatim Paragraphs from user specification */}
            <div className="space-y-4 text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
              <p>
                Vini Santos é cuidador de pessoas com paralisia cerebral e alguém que acredita que Belo Horizonte pode oferecer uma qualidade de vida muito melhor aos seus moradores.
              </p>

              <p>
                Sua inquietação vem de observar uma cidade que, para muitas pessoas, tem perdido parte do orgulho e do prazer de viver nela. Problemas de limpeza urbana, conservação dos espaços públicos e falta de respostas eficientes do poder público afetam a rotina da população.
              </p>

              <p>
                A situação das pessoas em situação de rua também exige atenção. Não basta ignorar o problema. É necessário desenvolver políticas públicas eficientes, com acolhimento, acompanhamento e caminhos reais para a dignidade e a autonomia.
              </p>

              <p>
                Outro ponto fundamental é a transparência na utilização do dinheiro público. Obras, contratos e investimentos precisam ser acompanhados pela população, com informações acessíveis, fiscalização e prestação de contas.
              </p>

              <div className="bg-neutral-50 p-4 rounded-lg border-l-4 border-neutral-900 text-sm text-neutral-800">
                <span className="font-bold text-neutral-950 block mb-1">Fiscalização Responsável:</span>
                Há questionamentos sobre prejuízos em obras públicas que ultrapassariam R$ 35 milhões. Esse tema exige esclarecimento, transparência e apuração responsável. A referência deve ser acompanhada de uma fonte verificável antes de ser apresentada como fato comprovado.
              </div>

              <p>
                Vini acredita que a cidade precisa de propostas sérias, planejamento e responsabilidade com os recursos que pertencem à população.
              </p>

              <p>
                Por isso, apresenta seis propostas voltadas à educação, à segurança escolar, à integridade dos contratos públicos, ao cuidado com a cidade e à responsabilidade nos gastos públicos.
              </p>

              <p>
                O objetivo é contribuir para uma Belo Horizonte mais bem cuidada, transparente e eficiente, na qual as decisões públicas sejam orientadas pelas necessidades reais de quem vive aqui.
              </p>
            </div>

            {/* Highlighted Quote Callout */}
            <div className="bg-amber-400 text-neutral-950 rounded-xl p-6 sm:p-7 shadow-sm border border-amber-500/30">
              <span className="text-3xl font-serif leading-none select-none text-neutral-900 block mb-1">“</span>
              <p className="text-xl sm:text-2xl font-black tracking-tight leading-snug">
                Belo Horizonte precisa voltar a ser motivo de orgulho para quem vive aqui.
              </p>
            </div>

            {/* Button directing to Proposals */}
            <div className="pt-4">
              <button
                type="button"
                onClick={onScrollToProposals}
                className="inline-flex items-center justify-center gap-2.5 bg-neutral-950 hover:bg-neutral-800 active:bg-black text-white font-bold text-sm sm:text-base px-7 py-4 rounded-md shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <span>CONHEÇA MINHAS PROPOSTAS</span>
                <ArrowDown className="w-4 h-4 text-amber-400 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
