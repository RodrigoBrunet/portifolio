/* ==========================================================================
   DADOS DO PORTFÓLIO
   --------------------------------------------------------------------------
   Este é o ÚNICO arquivo que você precisa editar para atualizar o site.
   - PERFIL:        suas informações pessoais.
   - EXPERIENCIAS:  sua trajetória (empresas/clientes onde atuou).
   - PARTICIPACOES: projetos de que você participou (em equipe, para clientes).
   - MEUS_APPS:     seus apps autorais. Um app com o bloco "privacidade" ganha
                    automaticamente a página  privacidade.html?app=<id>
                    (use esse link no Google Play Console).
   Para adicionar um item, copie um bloco { ... } da lista e altere.
   ========================================================================== */

const PERFIL = {
  nome: "Rodrigo Brunet",
  cargo: "Desenvolvedor Mobile & Web",
  // Textos que se alternam no efeito de digitação do topo (opcional).
  cargos: [
    "Desenvolvedor Mobile & Web",
    "Especialista em Flutter",
    "Apps Android & iOS",
  ],
  // Aparecem no terminal "dev.config.js" do topo.
  foco: "apps Flutter para Android e iOS",
  abertoA: [], // ex.: ["CLT", "PJ", "freelance"] (vazio = linha escondida)
  // Selo verde "disponível" no topo. Deixe "" para esconder.
  status: "disponível para novos projetos",
  // {anos} é trocado automaticamente pelos anos de experiência (calculados pela trajetória).
  bio:
    "Há {anos} anos desenvolvo apps em Flutter para produtos financeiros e de varejo, " +
    "em times de grandes empresas. Agora também publico meus próprios apps.",
  sobre: [
    "Sou desenvolvedor mobile com foco em Flutter. Atuei em times de 15 a 25 pessoas em produtos de crédito, conta digital e varejo, do design no Figma até a publicação nas lojas.",
    "Gosto de código bem organizado, testado e fiel ao design. Além dos projetos em equipe, hoje desenvolvo e publico meus próprios aplicativos.",
  ],
  foto: "", // ex.: "assets/img/perfil.jpg"  (vazio = mostra as iniciais)
  localizacao: "Brasil",
  email: "contato@seudominio.com",
  whatsapp: "", // ex.: "5511999999999" (somente números, com DDI e DDD)
  redes: [
    { tipo: "github", url: "https://github.com/RodrigoBrunet" },
    {
      tipo: "linkedin",
      url: "https://www.linkedin.com/in/rodrigo-brunet-b66bb5168/",
    },
    // { tipo: "instagram", url: "https://instagram.com/seuusuario" },
    // { tipo: "playstore", url: "https://play.google.com/store/apps/dev?id=SEU_ID" },
  ],
  // Linha de ícones no topo (4 a 6 itens). Com ícone: Flutter, Dart, Android, iOS, Angular, Java.
  // Outros nomes aparecem só como texto.
  stack: [], // ex.: ["Flutter", "Android", "iOS", "Angular", "Java"]
  // Seção "Sobre mim" (coluna "stack"). Nomes com ícone em ICONES_TEC ganham o ícone.
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

/* --------------------------------------------------------------------------
   TRAJETÓRIA: da mais recente para a mais antiga.
   Sem nomes de empresas: descreva o CONTEXTO (setor, tipo de produto, porte)
   e as EXPERIÊNCIAS que você construiu ali.
   Datas no formato "AAAA-MM". Deixe fim: "" se for a fase atual.
   As datas são opcionais, mas são usadas para calcular os anos de experiência.
   -------------------------------------------------------------------------- */
const EXPERIENCIAS = [
  {
    cargo: "Desenvolvedor Mobile Sênior",
    contexto: "Setor financeiro · produtos de crédito em app bancário",
    inicio: "2024-04",
    fim: "",
    resumo:
      "Jornadas de Crédito do Trabalhador e Antecipação do FGTS em Flutter, dentro dos apps nativos do banco.",
    // Números em destaque no cartão (2 ou 3 funcionam melhor).
    destaques: [
      { valor: "18", rotulo: "pessoas no time" },
      { valor: "2", rotulo: "produtos de crédito" },
      { valor: "Android + iOS", rotulo: "plataformas" },
    ],
    // Aparecem ao clicar em "ver detalhes". Frases curtas!
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

/* --------------------------------------------------------------------------
   PROJETOS QUE PARTICIPEI: trabalhos em equipe, para empresas ou clientes.
   selos (opcional): "Em equipe", "Freelance", "Confidencial"...
   Sem nenhum projeto real, a seção some do site e do menu automaticamente.
   -------------------------------------------------------------------------- */
const PARTICIPACOES = [
  {
    modelo: true, // exemplo: não aparece no site. Apague esta linha ao preencher com um projeto real.
    titulo: "Página / Site do Projeto",
    empresa: "", // opcional: nome ou descrição genérica (ex.: "Cliente do setor de saúde")
    categoria: "Web", // ex.: Web, Mobile, Sistema...
    ano: 2025,
    resumo: "Contexto: o que é o projeto e para quem foi feito.",
    papel: "O que VOCÊ fez: telas, integrações, arquitetura, liderança...",
    resultado: "", // opcional: impacto/resultado (ex.: "+30% de conversão")
    selos: ["Em equipe"],
    imagem: "", // ex.: "assets/img/projeto.png" (vazio = capa gerada automaticamente)
    tecnologias: ["HTML", "CSS", "JavaScript"],
    links: {
      site: "https://exemplo.com",
      playStore: "",
      appStore: "",
      github: "",
    },
  },
];

/* --------------------------------------------------------------------------
   MEUS APPS: seus apps autorais.
   status: "publicado" | "desenvolvimento" | "em-breve"
   id: usado na URL da política (sem espaços/acentos)
   -------------------------------------------------------------------------- */
const MEUS_APPS = [
  {
    id: "meu-app-1",
    titulo: "Meu App 1",
    status: "publicado",
    ano: 2026,
    resumo:
      "Breve descrição do aplicativo: qual problema resolve e para quem foi feito.",
    imagem: "", // ex.: "assets/img/meu-app-1.png"
    tecnologias: ["Flutter", "Firebase"],
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.exemplo.app1",
      appStore: "",
      site: "",
    },
    privacidade: {
      atualizadoEm: "2026-11-26",
      // desenvolvedor: "",        // opcional; padrão = PERFIL.nome
      // emailContato: "",         // opcional; padrão = PERFIL.email
      coletaDados: true, // false = app não coleta nenhum dado pessoal
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
        // { nome: "Google AdMob", url: "https://support.google.com/admob/answer/6128543" },
      ],
      permissoes: [
        // "Câmera: usada apenas para ler QR Codes",
      ],
      retencao:
        "Os dados são mantidos enquanto a conta estiver ativa e excluídos em até 30 dias após o pedido de exclusão.",
      // Seção "Exclusão de conta e dados" (link: privacidade.html?app=<id>#exclusao)
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
