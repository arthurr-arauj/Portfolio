export const personal = {
  name: 'Arthur Flávio Gonçalves Araújo',
  shortName: 'Arthur Flávio',
  initials: 'AF',
  headline:
    'Estagiário de Suporte Técnico (N1/N3) • Desenvolvedor • Sistemas de Informação — UFU',
  location: 'Uberlândia, MG',
  email: 'arthurflavio06@gmail.com',
  phone: '+55 34 99228-4560',
  linkedin: 'https://www.linkedin.com/in/arthur-fl%C3%A1vio/',
  github: 'https://github.com/arthurr-arauj',
  resume: 'imagens/Currículo.pdf',
  photo: 'imagens/arthur.jpeg',
  favicon: 'imagens/favicon.png',
};

export const heroHighlights = [
  { label: 'Hyperflow', detail: 'Suporte N1/N3' },
  { label: 'ASCII Empresa Júnior', detail: 'Diretoria de Projetos' },
  { label: 'Node.js', detail: 'APIs REST' },
  { label: 'UFU', detail: 'Sistemas de Informação' },
];

export const about = {
  summary: `Profissional em formação em Sistemas de Informação, com atuação como Estagiário de Suporte Técnico (N1/N3) e Desenvolvedor na ASCII Empresa Júnior. Experiência com diagnóstico de incidentes complexos, integrações via APIs REST, fluxos de automação e gerenciamento de chamados. Domínio em lógica de programação, metodologias ágeis de alta performance e construção de soluções para processos corporativos.`,
  traits: `Perfil analítico, resiliente e focado em resultados, com atuação em projetos envolvendo arquitetura backend, processamento de dados e evolução contínua em ecossistemas de atendimento.`,
  quickFacts: [
    { label: 'Localização', value: 'Uberlândia, MG' },
    { label: 'Formação', value: 'Sistemas de Informação — UFU' },
    { label: 'Inglês', value: 'Avançado (trabalho e leitura técnica)' },
    { label: 'Português', value: 'Nativo' },
  ],
};

export const experiences = [
  {
    id: 'hyperflow',
    role: 'Estagiário de Suporte Técnico (N1/N3)',
    company: 'Hyperflow',
    period: '2026 — atual',
    highlight: true,
    bullets: [
      'Atuação na linha de frente da operação, com foco em conversação, integrações e automações.',
      'Organização do fluxo de chamados, documentação de evidências técnicas e investigação de causa-raiz.',
      'Testes e validação de soluções, incluindo consumo de APIs REST via Postman.',
      'Priorização com Kanbanize baseada em SLA, direcionando demandas entre equipes técnicas.',
      'Gestão de chamados críticos com parceiros (Meta/WhatsApp Business) e manutenção de ambientes.',
    ],
  },
  {
    id: 'ascii',
    role: 'Membro Efetivo (Diretoria de Projetos)',
    company: 'ASCII Empresa Júnior (UFU)',
    period: '2025 — atual',
    highlight: false,
    bullets: [
      'Ciclo de vida de desenvolvimento de soluções tecnológicas, transformando necessidades em software.',
      'Arquitetura e desenvolvimento de API para leitura, extração e processamento em lote de planilhas Excel.',
      'Rotinas computacionais no backend para catalogação de colunas e recálculo de fórmulas financeiras.',
      'Trabalho colaborativo em equipes multidisciplinares com foco em escopo, prazos e requisitos.',
    ],
  },
];

export const projects = [
  {
    id: 'chatbot',
    title: 'Chatbot WhatsApp — Automação e APIs',
    description:
      'Assistente virtual interativo com Node.js e Twilio para roteamento de respostas e menus automatizados no WhatsApp.',
    longDescription:
      'Chatbot interativo para WhatsApp desenvolvido com Node.js, Express e API da Twilio. Ao receber mensagens, o bot responde com menu numérico interativo para consulta de produtos, promoções e horários.',
    image: 'imagens/demonstracao-chatbot.gif',
    tags: ['Node.js', 'Express.js', 'Twilio API', 'Dotenv', 'Ngrok'],
    github: 'https://github.com/arthurr-arauj/chatbot-whatsapp-node',
    demo: null,
    category: 'Automação + APIs',
  },
  {
    id: 'focusflow',
    title: 'FocusFlow — Landing Page',
    description:
      'Landing page responsiva e performática para processo seletivo da ASCII, com foco em UI/UX e animações suaves.',
    longDescription:
      'Desenvolvido como desafio técnico Front-End para o processo seletivo da ASCII (Empresa Júnior de Computação da UFU). Interface com foco total em UI/UX, animações suaves e design responsivo.',
    image: 'imagens/print-site.jpg',
    tags: ['React.js', 'Tailwind CSS', 'Vite', 'React Icons', 'Vercel'],
    github: 'https://github.com/arthurr-arauj/focusflow-landing-ascii',
    demo: 'https://focusflow-ascii.vercel.app/',
    category: 'Front-end / UI-UX',
  },
  {
    id: 'revitalize',
    title: 'Revitalize — Portal Institucional',
    description:
      'Portal institucional responsivo para casa de acolhimento de idosos, desenvolvido como projeto de extensão na UFU.',
    longDescription:
      'Projeto de extensão da UFU para ajudar uma casa de acolhimento de idosos a divulgar seu trabalho. Desenvolvimento completo com HTML e CSS, aplicando responsividade e personalização visual.',
    image: 'imagens/logo.png',
    tags: ['HTML', 'CSS', 'Git', 'Responsividade'],
    github: 'https://github.com/centro-revitalize/Revitalize',
    demo: 'https://centro-revitalize.github.io/Revitalize/',
    category: 'Projeto social',
  },
  {
    id: 'clinica',
    title: 'Clínica Veterinária — Sistema em C',
    description:
      'Sistema de gerenciamento para clínica veterinária com structs, CRUDs, ponteiros e persistência em arquivos.',
    longDescription:
      'Sistema acadêmico de gerenciamento para clínica veterinária em C. Aplica conceitos de manipulação de arquivos, structs, CRUDs e ponteiros para gerenciamento eficiente de memória.',
    image: null,
    tags: ['Linguagem C', 'Estruturas de Dados', 'Ponteiros', 'Algoritmos'],
    github: 'https://github.com/arthurr-arauj/sistema-clinica-veterinaria',
    demo: null,
    category: 'Backend / C',
  },
];

export const skills = [
  {
    id: 'apis',
    title: 'APIs e Integrações',
    description: 'Consumo, testes e automação de fluxos entre sistemas.',
    items: ['APIs REST', 'Postman', 'HTTP REST', 'Automação de fluxos', 'Integração de sistemas'],
  },
  {
    id: 'backend',
    title: 'Backend e Programação',
    description: 'Lógica de negócios e rotinas computacionais.',
    items: ['Node.js', 'JavaScript', 'Python', 'C', 'C++'],
  },
  {
    id: 'frontend',
    title: 'Front-end e UI/UX',
    description: 'Interfaces responsivas e componentizadas.',
    items: ['React', 'Tailwind CSS', 'HTML/CSS', 'Design responsivo'],
  },
  {
    id: 'support',
    title: 'Suporte e Processos',
    description: 'Operação técnica e gestão ágil de demandas.',
    items: ['Troubleshooting N1/N3', 'SLA', 'Kanbanize', 'Git/GitHub', 'Gestão de BD'],
  },
];

export const education = [
  {
    degree: 'Bacharelado em Sistemas de Informação',
    institution: 'Universidade Federal de Uberlândia',
    period: '2024 — atualmente',
    detail: 'Previsão de conclusão: Julho/2028',
  },
  {
    degree: 'Engenharia de IA, LLMs e Automações',
    institution: 'Alura',
    period: '2025 — atualmente',
    detail: 'Cursos complementares em inteligência artificial e automações.',
  },
];

export const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#skills', label: 'Skills' },
  { href: '#contato', label: 'Contato' },
];
