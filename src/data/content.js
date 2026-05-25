// ─── Static Data ───────────────────────────────────────────────────────────
// All portfolio content lives here.
// Layout sections import only what they need.

export const NAV_LINKS = ["Sobre", "Experiência", "Pesquisa", "Habilidades", "Contato"];

export const HERO = {
  name: "Davi Galdino",
  location: "Anápolis, GO — 23 anos",
  headline: ["Engenheiro de Software", "Full-stack & Pesquisador"],
  bio: "Estudante de Ciência da Computação no IFG. Desenvolvedor de arquiteturas escaláveis, ecossistema Python/Django.",
  tags: ["Full-stack", "DevOps", "Product Owner", "IA & LLMs"],
  contact: "https://wa.me/556293794033",
  email: "contato@daviga.dev.br",
  github: "https://github.com/davi-ga",
  linkedin: "https://www.linkedin.com/in/davi-ga",
};

export const EXPERIENCE_ITEMS = [
  {
    period: "2026 — atual",
    role: "Desenvolvedor Full-stack & Product Owner",
    org: "Frequência Escolar",
    type: "Produto",
    desc: "Gestão de equipe multidisciplinar, desenvolvedor Fullstack e integrações de hardware IoT via MQTT e WebSockets.",
  },
  {
    period: "Nov 2023 — atual",
    role: "Desenvolvedor Backend & DevOps",
    org: "Otimize Solutions",
    type: "Empresa",
    desc: "Desenvolvimento de aplicações web, DevOps e integração de modelos de IA em fluxos de produção.",
  },
  {
    period: "Abr 2023 — Nov 2023",
    role: "Full-Stack Developer & Social Media",
    org: "NIAJus",
    type: "Empresa",
    desc: "Desenvolvimento full-stack e gestão estratégica de presença digital.",
  },
];

export const RESEARCH_ITEMS = [
  {
    period: "2024 — atual",
    role: "Pesquisador Principal ",
    org: "Intituto Federal de Goiás - Campus Anápolis",
    type: "Acadêmico",
    desc: "Otimização preditiva de compiladores JIT em ambientes Serverless. Uso de modelos de IA para redução de latência de cold-start e melhoria de throughput em funções de curta duração.",
  },
  {
    period: "2023 — 2024",
    role: "Pesquisador",
    org: "Intituto Federal de Goiás - Campus Anápolis",
    type: "Acadêmico",
    desc: "Quantificação e mitigação de viés racial em modelos de Machine Learning aplicados a documentos do sistema judiciário brasileiro. Metodologias de fairness e auditoria algorítmica.",
  },
  {
    period: "2023 — 2024",
    role: "Pesquisador Desenvolvedor Full-stack",
    org: "Universidade de Brasília",
    type: "Acadêmico",
    desc: "Projeto ALEI_1a (FAPDF) — Desenvolvimento full-stack de plataforma de IA para o Judiciário, com aplicação na Justiça Federal. Construção de interfaces e APIs para análise e processamento automatizado de documentos jurídicos.",
  },
];

export const RESEARCH_TAGS = [
  "JIT Compilation",
  "Serverless Performance",
  "LLM Integration",
  "Fairness em ML",
  "Auditoria Algorítmica",
  "FullStack",
  "Judiciário",
];

export const STACK_CATEGORIES = [
  { label: "Backend", items: ["Python", "Django", "DRF", "TypeScript", "NestJS"] },
  { label: "Infraestrutura", items: ["Docker", "CI/CD", "PostgreSQL", "Nginx", "MQTT/WebSockets"] },
  { label: "Frontend", items: ["React", "Tailwind CSS", "ChakraUI"] },
  { label: "Core", items: ["Integração de LLMs", "JIT Compilers", "Liderança Técnica", "RESTful APIs", ""] },

];

export const ABOUT_STATS = [
  { value: "3+", label: "Anos de experiência" },
  { value: "10+", label: "Projetos Entregues" },
  { value: "2+", label: "Pesquisas Científicas" },
];

export const CONTACT_LINKS = [
  { label: "Email", value: "contato@daviga.dev.br", href: "mailto:contato@daviga.dev.br" },
  { label: "LinkedIn", value: "/in/davi-ga", href: "https://linkedin.com/in/davi-ga", target: "_blank" },
  { label: "GitHub", value: "github.com/davi-ga", href: "https://github.com/davi-ga", target: "_blank" },
  { label: "Currículo", value: "curriculo.pdf", href: "/curriculo.pdf", target: "_blank" },
];
