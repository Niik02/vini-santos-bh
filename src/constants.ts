export const GOOGLE_FORMS_URL = 'https://forms.gle/DLHfM3ZYU5BMvVVc9';
export const INSTAGRAM_URL = 'https://www.instagram.com/vinisantosbh/';

export const IMAGES = {
  pampulha: 'https://i.postimg.cc/7hDWvdFF/e2187093-4a5f-4bd6-b57a-20a45012e57c.webp',
  logoBh: 'https://i.postimg.cc/KYP7Xjmv/10-propostas-para-bh.png',
  viniSantos: 'https://i.postimg.cc/J0DGLYjZ/Design-sem-nome.png',
};

export interface Proposal {
  id: string;
  number: string;
  category: 'Educação' | 'Educação e segurança escolar' | 'Integridade pública' | 'Zeladoria urbana e inclusão produtiva' | 'Gestão pública e orçamento';
  navSection: 'educacao' | 'integridade' | 'cuidado' | 'gasto';
  title: string;
  summary: string;
  highlightQuote?: string;
  pdfPages: string;
  problem: string;
  solution: string;
  howItWorks: string[];
  visualFlow?: {
    label: string;
    steps: string[];
  };
  pillars?: {
    title: string;
    description: string;
  }[];
  safeguards: string[];
  objective: string;
}

export const PROPOSALS: Proposal[] = [
  {
    id: 'metodo-fonico',
    number: '01',
    category: 'Educação',
    navSection: 'educacao',
    title: 'MÉTODO FÔNICO NO ENSINO INFANTIL',
    summary:
      'Fortalecer a alfabetização por meio do ensino sistemático da relação entre os sons da fala e as letras, com formação de professores, materiais adequados e acompanhamento dos resultados.',
    highlightQuote: 'Uma base sólida na alfabetização é o primeiro passo para o sucesso educacional de todas as crianças.',
    pdfPages: 'Páginas 3 e 4 do PDF oficial',
    problem:
      'Milhares de crianças em Belo Horizonte concluem as primeiras etapas escolares com defasagens graves na alfabetização, sem dominar com segurança a relação direta entre o som emitido na fala e os grafemas escritos. A ausência de um método estruturado e uniforme compromete todo o ciclo educacional posterior.',
    solution:
      'Implantação orientada do método fônico nas escolas municipais de educação infantil e nos anos iniciais do ensino fundamental, combinando ciência pedagógica, materiais estruturados e suporte integral aos professores.',
    howItWorks: [
      'Ensino progressivo e explícito das relações entre fonemas (sons) e grafemas (letras), respeitando cada estágio do desenvolvimento.',
      'Formação continuada e específica para os professores e coordenadores pedagógicos da rede municipal de ensino.',
      'Utilização e fornecimento de materiais pedagógicos adequados, estruturados e testados para suporte diário em sala de aula.',
      'Avaliação periódica e diagnóstica da aprendizagem para monitorar o ritmo das turmas e ajustar o planejamento.',
      'Identificação precoce de dificuldades individuais de aprendizagem para intervenção pedagógica preventiva.',
      'Preservação essencial e harmônica do letramento, da literatura infantil, da compreensão textual e do uso social da escrita.',
    ],
    safeguards: [
      'A metodologia fônica não exclui o contato com livros, contação de histórias e produções de texto enriquecedoras.',
      'Respeito rigoroso às particularidades cognitivas de cada estudante, inclusive crianças com necessidades educacionais especiais.',
      'Acompanhamento contínuo sem caráter punitivo aos educadores, valorizando sua autonomia pedagógica.',
    ],
    objective:
      'Oferecer um processo de alfabetização estruturado e acompanhado, garantindo que toda criança de Belo Horizonte aprenda a ler e escrever na idade certa, com autonomia e prazer pela leitura.',
  },
  {
    id: 'cameras-salas-de-aula',
    number: '02',
    category: 'Educação e segurança escolar',
    navSection: 'educacao',
    title: 'CÂMERAS NAS SALAS DE AULA',
    summary:
      'Criar um programa municipal de videomonitoramento das salas de aula para contribuir com a proteção dos estudantes e profissionais da educação e auxiliar na apuração de ocorrências.',
    highlightQuote: 'Mais transparência para proteger quem ensina e quem aprende.',
    pdfPages: 'Páginas 5, 6 e 7 do PDF oficial',
    problem:
      'O aumento de conflitos, situações de vulnerabilidade e incidentes em unidades escolares gera insegurança para famílias, alunos e professores. Muitas vezes, a falta de registros confiáveis dificulta a apuração justa de ocorrências e a prevenção de episódios graves.',
    solution:
      'Criação de um programa municipal de videomonitoramento interno focado em prevenção e transparência, regido por rigorosos protocolos de segurança de dados e garantias constitucionais de privacidade.',
    howItWorks: [
      'Instalação planejada de câmeras de segurança nas salas de aula da rede pública municipal de Belo Horizonte.',
      'Proibição expressa e absoluta de captação ou gravação de áudio, preservando a fala e a didática diária.',
      'Proibição categórica de instalação de câmeras em banheiros, vestiários e quaisquer ambientes íntimos da escola.',
      'Armazenamento seguro, criptografado e inviolável de todas as gravações realizadas.',
      'Acesso estrito, restrito e controlado às imagens, condicionado a requerimentos fundamentados e autorização expressa.',
      'Registro eletrônico e auditoria contínua de todos os acessos efetuados aos arquivos (trilha de logs auditável).',
      'Regras claras e transparentes para utilização pontual das imagens em apurações administrativas ou judiciais.',
      'Respeito absoluto à Lei Geral de Proteção de Dados (LGPD) e às normas do Estatuto da Criança e do Adolescente (ECA).',
    ],
    safeguards: [
      'As gravações não serão abertas para visualização pública indiscriminada ou transmissão em tempo real desregulada.',
      'Nenhum dispositivo captará áudio em hipótese alguma.',
      'Garantia de sigilo, proteção da imagem dos menores e responsabilização civil e penal por qualquer vazamento indevido.',
    ],
    objective:
      'Contribuir para um ambiente escolar mais seguro, acolhedor e transparente, respeitando a privacidade e os direitos de todos os envolvidos na comunidade escolar.',
  },
  {
    id: 'escola-nota-10',
    number: '03',
    category: 'Educação',
    navSection: 'educacao',
    title: 'PROGRAMA ESCOLA NOTA 10',
    summary:
      'Reconhecer financeiramente as equipes escolares que apresentarem avanços concretos na aprendizagem dos estudantes, considerando a evolução dos resultados e a realidade de cada escola.',
    highlightQuote: 'Quem trabalha para melhorar a educação também merece ser reconhecido.',
    pdfPages: 'Páginas 7, 8 e 9 do PDF oficial',
    problem:
      'Falta de incentivos sistêmicos e reconhecimento objetivo para os profissionais da educação básica que, mesmo em contextos desafiadores, se dedicam diariamente e conquistam avanços reais no aprendizado dos alunos belo-horizontinos.',
    solution:
      'Implementação do Programa Escola Nota 10, que premia coletivamente as equipes escolares a partir da medição justa do avanço pedagógico relativo e da redução de defasagens históricas.',
    howItWorks: [
      'Definição de metas anuais claras e amplamente debatidas com a comunidade escolar no início do ano letivo.',
      'Utilização de indicadores oficiais e auditáveis de aprendizagem (avaliações diagnósticas, Prova Brasil e avaliações municipais).',
      'Avaliação da evolução em relação aos resultados anteriores da própria escola, medindo o progresso e o esforço real da unidade.',
      'Foco prioritário em Alfabetização, Língua Portuguesa e Matemática nos anos fundamentais.',
      'Acompanhamento da evolução do IDEB municipal e metas específicas de redução da defasagem de aprendizagem.',
      'Ponderação e consideração obrigatória das diferentes realidades socioeconômicas e estruturais de cada unidade de ensino.',
      'Premiação e bonificação financeira coletiva para a equipe escolar conforme regulamentação legal e dotação específica.',
      'Transparência total dos critérios de cálculo, notas obtidas e valores distribuídos em portal de dados abertos.',
      'Apoio técnico intensivo e planos de melhoria pedagógica direcionados com prioridade para as escolas com maiores dificuldades.',
    ],
    safeguards: [
      'A avaliação não gera punição ou corte de recursos nas escolas com piores índices, mas sim aporte de apoio técnico e acompanhamento.',
      'A premiação é coletiva, estimulando a cooperação entre professores, coordenação e servidores da escola.',
      'Critérios impessoais e protegidos contra manipulações políticas.',
    ],
    objective:
      'Incentivar a melhoria contínua da qualidade do ensino municipal e reconhecer de forma justa e concreta o esforço conjunto dos profissionais da educação.',
  },
  {
    id: 'lei-antimafia',
    number: '04',
    category: 'Integridade pública',
    navSection: 'integridade',
    title: 'LEI ANTIMÁFIA EM CONTRATOS PÚBLICOS',
    summary:
      'Fortalecer os mecanismos municipais de prevenção e monitoramento para reduzir o risco de utilização de contratos públicos em benefício do crime organizado.',
    highlightQuote: 'Dinheiro público não pode financiar organizações criminosas.',
    pdfPages: 'Páginas 10 e 11 do PDF oficial',
    problem:
      'Riscos crescentes de infiltração de organizações criminosas e empresas de fachada em licitações e contratos do município, drenando verbas que deveriam ir para a saúde, educação e infraestrutura da capital mineira.',
    solution:
      'Criação de um sistema municipal robusto de governança e integridade, unindo cruzamento de dados com órgãos de controle e regras firmes de conformidade corporativa.',
    visualFlow: {
      label: 'Ciclo de Integridade Contratual',
      steps: [
        'AVALIAR ANTES',
        'MONITORAR DURANTE',
        'RESPONSABILIZAR QUANDO COMPROVADO',
      ],
    },
    howItWorks: [
      'Avaliação prévia e criteriosa de integridade, histórico e risco antes da celebração de qualquer contrato relevante com o município.',
      'Análise detalhada da cadeia societária, sócios, administradores, controladores e identificação transparente de beneficiários finais.',
      'Consulta sistemática a bases de dados oficiais de controle, fiscalização e antecedentes econômico-fiscais.',
      'Monitoramento dinâmico e contínuo durante toda a execução dos contratos e ordens de serviço.',
      'Reavaliação imediata de conformidade diante de fatos novos, indícios de irregularidade ou alterações societárias relevantes.',
      'Classificação técnica de risco das contratações para direcionar auditorias e fiscalizações in loco.',
      'Aplicação de medidas administrativas e contratuais cabíveis estritamente fundamentadas na legislação.',
    ],
    safeguards: [
      'Suspeitas ou denúncias isoladas não devem gerar impedimento automático ou quebra arbitrária de contratos.',
      'Todas as decisões e penalidades devem respeitar rigorosamente o devido processo legal, o contraditório e a ampla defesa.',
      'A iniciativa municipal atua na esfera administrativa de compliance e NÃO substitui as atribuições constitucionais da Polícia, do Ministério Público ou do Poder Judiciário.',
    ],
    objective:
      'Blindar os cofres de Belo Horizonte contra fraudes e assegurar que cada centavo contratado sirva única e exclusivamente ao benefício da população de Belo Horizonte.',
  },
  {
    id: 'bh-em-acao',
    number: '05',
    category: 'Zeladoria urbana e inclusão produtiva',
    navSection: 'cuidado',
    title: 'PROGRAMA BH EM AÇÃO',
    summary:
      'Criar frentes temporárias e remuneradas de trabalho para pessoas em situação de vulnerabilidade que estejam aptas e queiram participar, contribuindo para a conservação dos espaços públicos e a reinserção profissional.',
    highlightQuote: 'Cuidar melhor da cidade também significa criar oportunidades para quem precisa.',
    pdfPages: 'Página 12 do PDF oficial',
    problem:
      'Praças, calçadas e canteiros centrais degradados convivendo com cidadãos em extrema vulnerabilidade social e sem alternativas de sustento ou portas abertas para ingressar no mercado de trabalho.',
    solution:
      'Programa municipal integrado de frentes temporárias de trabalho na zeladoria urbana com remuneração justa, treinamento técnico e ponte direta para o mercado formal.',
    visualFlow: {
      label: 'Trilha de Cidadania e Reinserção',
      steps: [
        'PROTEÇÃO',
        'CAPACITAÇÃO',
        'TRABALHO',
        'EXPERIÊNCIA',
        'EMPREGO',
        'AUTONOMIA',
      ],
    },
    howItWorks: [
      'Processo seletivo aberto com critérios públicos, transparentes e objetivos para os interessados.',
      'Treinamento prévio e fornecimento completo de Equipamentos de Proteção Individual (EPIs) de qualidade.',
      'Equipes de zeladoria organizadas por regionais administrativas e bairros de Belo Horizonte.',
      'Limpeza de vias públicas, manutenção de praças e conservação contínua dos espaços de convivência.',
      'Capina manual, jardinagem básica e recolhimento de pequenos resíduos descartados irregularmente.',
      'Supervisão diária com controle biométrico ou eletrônico de frequência e dedicação.',
      'Remuneração temporária e bolsa-auxílio garantidas durante todo o período de atuação.',
      'Capacitação profissional e encaminhamento permanente para postos de emprego através do SINE e rede de parceiros.',
      'Fiscalização constante e prestação periódica de contas dos custos e áreas restauradas.',
    ],
    safeguards: [
      'Cumprimento rigoroso de todas as normas de segurança do trabalho e medicina ocupacional.',
      'O programa não substitui servidores públicos concursados, concursos públicos ou contratos regulares de prestação de serviços da SLU e Prefeitura.',
      'Participação voluntária voltada exclusivamente para pessoas aptas e dispostas a participar das atividades.',
    ],
    objective:
      'Melhorar visivelmente o cuidado diário com os bairros de BH e oferecer uma trilha digna de transformação social, experiência profissional e autonomia econômica para quem mais necessita.',
  },
  {
    id: 'gasto-responsavel',
    number: '06',
    category: 'Gestão pública e orçamento',
    navSection: 'gasto',
    title: 'GASTO RESPONSÁVEL',
    summary:
      'Estabelecer critérios para grandes despesas públicas com shows e eventos, considerando a situação financeira do município e as necessidades essenciais da população.',
    highlightQuote: 'Cultura sim. Eventos sim. Grandes shows sim. Mas com responsabilidade. Primeiro garantir o essencial, depois ampliar o extra.',
    pdfPages: 'Página 13 do PDF oficial',
    problem:
      'Contratações milionárias de artistas e estruturas de grandes eventos enquanto unidades de saúde enfrentam falta de insumos básicos e escolas públicas demandam reformas urgentes.',
    solution:
      'Instituição de diretrizes e regras claras de responsabilidade fiscal para gastos discricionários em shows e eventos, garantindo que o básico esteja sempre assegurado.',
    pillars: [
      {
        title: '1. TETO',
        description:
          'Definição de limites orçamentários razoáveis para grandes despesas discricionárias com contratações de shows e eventos comemorativos.',
      },
      {
        title: '2. PRIORIDADE',
        description:
          'Análise especial de conveniência e oportunidade quando metas essenciais de saúde (como filas de atendimento e consultas) e educação estiverem em situação crítica e persistente.',
      },
      {
        title: '3. TRANSPARÊNCIA',
        description:
          'Divulgação prévia e integral dos cachês artísticos, custos de montagem/produção, custo total estimado, fonte dos recursos, público esperado e retorno financeiro projetado para o comércio local.',
      },
    ],
    howItWorks: [
      'Análise criteriosa da situação financeira e do equilíbrio orçamentário do município antes de empenhar grandes valores.',
      'Consideração técnica do atingimento das metas essenciais de atendimento da saúde pública e educação básica.',
      'Divulgação obrigatória de todos os custos previstos antes da contratação ou realização dos eventos.',
      'Exigência de justificativa técnica e econômica minuciosa para qualquer despesa que ultrapasse os parâmetros de teto estabelecidos.',
      'Comparação pública entre os custos inicialmente previstos e os gastos efetivamente realizados ao término do evento.',
      'Avaliação técnica do impacto econômico no turismo, na hotelaria e no comércio da capital quando viável.',
    ],
    safeguards: [
      'A iniciativa NÃO pretende acabar com shows públicos ou inviabilizar festividades populares tradicionais.',
      'NÃO visa extinguir políticas públicas culturais de fomento a artistas locais ou patrimônio cultural.',
      'NÃO tem como objetivo proibir festivais ou cancelar automaticamente eventos em virtude do descumprimento isolado ou temporário de uma meta.',
      'Trata-se de uma ferramenta de bom senso, planejamento e respeito com os recursos dos contribuintes.',
    ],
    objective:
      'Garantir que os recursos do contribuinte de Belo Horizonte atendam com prioridade absoluta à saúde, à segurança e à educação, promovendo eventos culturais de forma planejada e sem excessos fiscais.',
  },
];
