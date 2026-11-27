const PERFIL = {
  nome: "Rodrigo Brunet",
  cargo: "Desenvolvedor Mobile & Web",
  cargos: [
    "Desenvolvedor Mobile & Web",
    "Especialista em Flutter",
    "Apps Android & iOS",
  ],
  foco: "apps Flutter para Android e iOS",
  abertoA: [],
  status: "disponível para novos projetos",
  bio:
    "Há {anos} anos desenvolvo apps em Flutter para produtos financeiros e de varejo, " +
    "em times de grandes empresas. Agora também publico meus próprios apps.",
  sobre: [
    "Sou desenvolvedor mobile com foco em Flutter. Atuei em times de 15 a 25 pessoas em produtos de crédito, conta digital e varejo, do design no Figma até a publicação nas lojas.",
    "Gosto de código bem organizado, testado e fiel ao design. Além dos projetos em equipe, hoje desenvolvo e publico meus próprios aplicativos.",
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
      permissoes: [
      ],
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
