const PERFIL = {
  nome: "Rodrigo Brunet",
  cargo: "Desenvolvedor Mobile & Web",
  titulo: "Tiro seu app ou sistema web do papel e coloco no ar.",
  tituloDestaque: "coloco no ar",
  cargos: [
    "Apps Android & iOS em Flutter",
    "Sistemas web sob medida",
    "Desenvolvedor Mobile & Web",
  ],
  foco: "apps Flutter e sistemas web",
  abertoA: ["freelance"],
  status: "aceitando projetos freelance",
  bio:
    "Há {anos} anos desenvolvo apps e sistemas web para empresas dos setores financeiro, varejo, saúde e transportes. " +
    "Agora atendo projetos freelance, da primeira conversa à publicação.",
  sobre: [
    "Desenvolvo apps em Flutter e sistemas web. Atuei em times de 15 a 25 pessoas em produtos de crédito, conta digital, varejo, saúde e transportes, do design no Figma até a publicação.",
    "Nos projetos freelance, você fala direto comigo, sem intermediários: quem conversa com você é quem escreve o código. Gosto de código organizado, testado e fiel ao design.",
  ],
  foto: "",
  localizacao: "Brasil",
  email: "contato@seudominio.com",
  whatsapp: "",
  redes: [
    { tipo: "github", url: "https://github.com/RodrigoBrunet" },
    {
      tipo: "linkedin",
      url: "https://www.linkedin.com/in/rodrigo-brunet-b66bb5168/",
    },
  ],
  stack: [],
  habilidades: [
    "Flutter",
    "Dart",
    "Android",
    "iOS",
    "Kotlin",
    "Swift",
    "Angular",
    "Java",
    "JavaScript",
    "Node.js",
    "Firebase",
  ],
};

const SERVICOS = [
  {
    icone: "celular",
    titulo: "App do zero",
    texto:
      "Apps para Android e iOS em Flutter, com uma única base de código: mais rápido de lançar e mais barato de manter.",
  },
  {
    icone: "monitor",
    titulo: "Sistema web sob medida",
    texto:
      "Painéis administrativos, sistemas de gestão e portais, do banco de dados às telas, feitos para o seu processo.",
  },
  {
    icone: "publicar",
    titulo: "Publicação nas lojas",
    texto:
      "Conta de desenvolvedor, política de privacidade, formulário de dados do Google Play e envio para revisão da App Store.",
  },
  {
    icone: "api",
    titulo: "Integrações e APIs",
    texto:
      "Login, pagamentos, notificações, mapas e conexão com o sistema que a sua empresa já usa.",
  },
  {
    icone: "camadas",
    titulo: "Flutter em app nativo",
    texto:
      "Novas funcionalidades em Flutter dentro de apps Android e iOS que já existem, sem reescrever do zero.",
  },
  {
    icone: "ferramenta",
    titulo: "Evolução e manutenção",
    texto:
      "Novas telas, correções e melhoria de desempenho em apps e sistemas que já estão em uso.",
  },
];

const PROCESSO = [
  {
    titulo: "Conversa",
    texto:
      "Você conta a ideia ou o problema. Eu faço perguntas e sugiro o caminho mais simples.",
  },
  {
    titulo: "Proposta",
    texto:
      "Escopo, prazo e valor por escrito, antes de qualquer linha de código.",
  },
  {
    titulo: "Entregas em ciclos",
    texto:
      "Versões frequentes para você testar no celular ou no navegador e dar retorno durante o projeto.",
  },
  {
    titulo: "Publicação",
    texto: "Coloco o app nas lojas ou o sistema no ar, com tudo configurado.",
  },
  {
    titulo: "Suporte",
    texto:
      "Acompanho os primeiros dias após o lançamento e combinamos a manutenção, se você precisar.",
  },
];

const EXPERIENCIAS = [
  {
    cargo: "Desenvolvedor Mobile Sênior",
    contexto: "Setor financeiro · produtos de crédito em app bancário",
    inicio: "2024-04",
    fim: "",
    resumo:
      "Jornadas de Crédito do Trabalhador e Antecipação do FGTS em Flutter, dentro dos apps nativos do banco.",
    destaques: [
      { valor: "18", rotulo: "pessoas no time" },
      { valor: "2", rotulo: "produtos de crédito" },
      { valor: "Android + iOS", rotulo: "plataformas" },
    ],
    experiencias: [
      "Flutter embarcado nos apps nativos (add-to-app)",
      "Ponte com Android e iOS via Method Channel",
      "Arquitetura MVP (Model-View-Presenter)",
      "Telas fiéis ao Figma, com o design system do banco",
      "Integração com BFF e APIs REST",
      "Testes unitários e de integração",
      "Eventos e métricas no Google Analytics",
      "Monitoramento de falhas no Crashlytics",
      "Code review no time (5 front, 7 back e 3 funcionais)",
    ],
    tecnologias: [
      "Flutter",
      "Dart",
      "Kotlin",
      "Swift",
      "Method Channel",
      "BFF",
      "Testes automatizados",
      "Google Analytics",
      "Crashlytics",
      "Figma",
    ],
  },
  {
    cargo: "Engenheiro de Software Sênior",
    contexto: "Consultoria de software · clientes de varejo e crédito",
    inicio: "2023-01",
    fim: "2024-03",
    resumo:
      "Um app de varejo e um app de crédito em Flutter, rodando em Android, iOS e Web.",
    destaques: [
      { valor: "25", rotulo: "pessoas no time" },
      { valor: "2", rotulo: "apps (varejo e crédito)" },
      { valor: "Android + iOS + Web", rotulo: "plataformas" },
    ],
    experiencias: [
      "Apps multiplataforma em Flutter (mobile e Web)",
      "Arquitetura MVP (Model-View-Presenter)",
      "Telas fiéis ao Figma, com design system",
      "Telas web em Angular e TypeScript",
      "Integração com APIs REST",
      "Testes unitários",
    ],
    tecnologias: [
      "Flutter",
      "Dart",
      "Angular",
      "TypeScript",
      "HTML",
      "CSS",
      "Figma",
    ],
  },
  {
    cargo: "Desenvolvedor de Software Sênior",
    contexto: "Setor imobiliário · conta digital e crédito imobiliário",
    inicio: "2021-04",
    fim: "2023-01",
    resumo:
      "Super app bancário com acompanhamento do financiamento imobiliário, em Flutter.",
    destaques: [
      { valor: "15", rotulo: "pessoas no time" },
      { valor: "2", rotulo: "produtos (conta e crédito)" },
      { valor: "Android + iOS", rotulo: "plataformas" },
    ],
    experiencias: [
      "Desenvolvimento do super app em Flutter",
      "Arquitetura MVC (Model-View-Controller)",
      "Telas fiéis ao Figma, com design system",
      "Integração com APIs REST",
      "Testes unitários",
      "Publicação na Google Play e na App Store",
    ],
    tecnologias: ["Flutter", "Dart", "Figma"],
  },
  {
    cargo: "Desenvolvedor de Sistemas",
    contexto: "Setor de saúde · sistema hospitalar",
    inicio: "2019-10",
    fim: "2020-05",
    resumo:
      "Sistema web de triagem e atendimento de pacientes, do banco de dados às telas.",
    destaques: [
      { valor: "10", rotulo: "pessoas no time" },
      { valor: "1", rotulo: "sistema de atendimento" },
      { valor: "Web", rotulo: "plataforma" },
    ],
    experiencias: [
      "Desenvolvimento full stack (front-end e back-end)",
      "Arquitetura MVC (Model-View-Controller)",
      "Telas em JSF com componentes PrimeFaces",
      "Desenvolvimento de APIs REST em Java",
      "Persistência com JPA/Hibernate e PostgreSQL",
      "Versionamento com Git",
    ],
    tecnologias: [
      "Java",
      "JSF",
      "PrimeFaces",
      "PostgreSQL",
      "JPA",
      "Hibernate",
      "Git",
    ],
  },
  {
    cargo: "Analista de Sistemas",
    contexto: "Setor de transportes · sistema ERP",
    inicio: "2018-09",
    fim: "2019-09",
    resumo:
      "ERP web para gestão de frota: consumo de combustível, manutenção e contas a pagar e a receber.",
    destaques: [
      { valor: "3", rotulo: "pessoas no time" },
      { valor: "1", rotulo: "sistema ERP" },
      { valor: "Web", rotulo: "plataforma" },
    ],
    experiencias: [
      "Desenvolvimento full stack (front-end e back-end)",
      "Back-end em Java com Spring Boot",
      "Arquitetura MVC (Model-View-Controller)",
      "Telas em Thymeleaf",
      "Desenvolvimento de APIs REST",
      "Módulos financeiro, de frota e de manutenção",
      "Versionamento com Git",
    ],
    tecnologias: ["Java", "Spring Boot", "Thymeleaf", "PostgreSQL", "Git"],
  },
];

const CASOS = [
  {
    titulo: "Crédito dentro do app do banco",
    contexto: "Setor financeiro · app bancário de grande porte",
    inicio: "2024-04",
    fim: "",
    desafio:
      "Lançar as jornadas de Crédito do Trabalhador e Antecipação do FGTS dentro dos apps nativos Android e iOS",
    solucao: [
      "Flutter embarcado nos apps nativos (add-to-app)",
      "Ponte com Android e iOS via Method Channel",
      "Arquitetura MVP e telas com o design system do banco",
      "Utilização da ferramenta Figma",
      "Integração com BFF e APIs REST",
      "Versionamento de códgio github",
      "Testes unitários e de integração",
      "code review",
      "Métricas no Google Analytics e falhas no Crashlytics",
    ],
    resultado: "",
  },
  {
    titulo: "Duas plataformas",
    contexto:
      "Consultoria de software · alocado em projetos de uma startup e de um banco",
    inicio: "2023-01",
    fim: "2024-03",
    desafio:
      "Na startup o desafio foi entregar um app multiplataforma em Flutter, para o banco o desafio foi entregar uma jornada de cadastro para portabilidade e refinanciamento em web",
    solucao: [
      "App multiplataforma em Flutter e Web em Angular",
      "Arquitetura MVP",
      "Telas fiéis ao Figma, com design system",
      "Telas web em Angular e TypeScript",
      "Integração com APIs REST",
      "Testes unitários",
      "Code review",
    ],
    resultado: "",
  },
  {
    titulo: "Componentes do design system",
    contexto: "Setor financeiro · app bancário de grande porte",
    inicio: "2022-05",
    fim: "2023-01",
    desafio: "Implementar e manter componentes do design system do banco",
    solucao: [
      "Desenvolvimento dos componentes em Flutter",
      "Fiéis ao Figma, com design system",
      "Testes unitários",
      "Testes de widget",
      "Atendimento a todos os times de desenvolvimento do banco",
    ],
    resultado: "",
  },
  {
    titulo: "Super app: conta digital e financiamento",
    contexto: "Setor imobiliário · conta digital e crédito imobiliário",
    inicio: "2020-05",
    fim: "2022-03",
    desafio:
      "Reunir a conta digital e o acompanhamento do financiamento imobiliário em um só app, do design à publicação nas lojas.",
    solucao: [
      "Desenvolvimento do super app em Flutter",
      "Arquitetura MVC",
      "Telas fiéis ao Figma, com design system",
      "Integração com APIs REST",
      "Testes unitários",
      "Publicação na Google Play e na App Store",
    ],
    resultado: "",
  },
  {
    titulo: "Antes do mobile: sistemas web em Java",
    contexto: "Saúde e transportes · sistemas de gestão",
    inicio: "2018-09",
    fim: "2020-05",
    desafio:
      "Construir sistemas de gestão de ponta a ponta: triagem e atendimento de pacientes em um hospital e um ERP de frota em uma transportadora.",
    solucao: [
      "Desenvolvimento full stack (front-end e back-end)",
      "Java com JSF/PrimeFaces e Spring Boot com Thymeleaf",
      "APIs REST e persistência com JPA/Hibernate e PostgreSQL",
      "Módulos de triagem, financeiro, frota e manutenção",
    ],
    resultado: "",
  },
];

const PARTICIPACOES = [
  {
    modelo: true,
    titulo: "Página / Site do Projeto",
    empresa: "",
    categoria: "Web",
    ano: 2025,
    resumo: "Contexto: o que é o projeto e para quem foi feito.",
    papel: "O que VOCÊ fez: telas, integrações, arquitetura, liderança...",
    resultado: "",
    selos: ["Em equipe"],
    imagem: "",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    links: {
      site: "https://exemplo.com",
      playStore: "",
      appStore: "",
      github: "",
    },
  },
];

const MEUS_APPS = [
  {
    id: "meu-app-1",
    titulo: "Meu App 1",
    status: "publicado",
    ano: 2026,
    resumo:
      "Breve descrição do aplicativo: qual problema resolve e para quem foi feito.",
    imagem: "",
    tecnologias: ["Flutter", "Firebase"],
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.exemplo.app1",
      appStore: "",
      site: "",
    },
    privacidade: {
      atualizadoEm: "2026-11-26",
      coletaDados: true,
      dadosColetados: [
        "Endereço de e-mail (para criação de conta)",
        "Dados de uso e diagnóstico (falhas e desempenho)",
      ],
      finalidades: [
        "Permitir o login e o funcionamento das funcionalidades do app",
        "Melhorar a estabilidade e o desempenho",
      ],
      servicosTerceiros: [
        {
          nome: "Google Play Services",
          url: "https://policies.google.com/privacy",
        },
        {
          nome: "Firebase (Google)",
          url: "https://firebase.google.com/support/privacy",
        },
      ],
      permissoes: [],
      retencao:
        "Os dados são mantidos enquanto a conta estiver ativa e excluídos em até 30 dias após o pedido de exclusão.",
      exclusao:
        "Para solicitar a exclusão da sua conta e dos dados associados, envie um e-mail para o endereço de contato informando o e-mail cadastrado. Você também pode excluir a conta diretamente no app em Configurações > Conta > Excluir conta.",
    },
  },
  {
    id: "meu-app-2",
    titulo: "Meu App 2",
    status: "desenvolvimento",
    ano: 2026,
    resumo: "Breve descrição do segundo aplicativo.",
    imagem: "",
    tecnologias: ["Kotlin"],
    links: {},
    privacidade: {
      atualizadoEm: "2026-11-26",
      coletaDados: false,
      servicosTerceiros: [],
    },
  },
];
