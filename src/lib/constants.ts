export const LOGO = {
  src: "/images/logo-sv-topografia.png",
  alt: "SV Topografia & Projetos LTDA — Do levantamento à execução",
  width: 1536,
  height: 1024,
} as const;

export const COMPANY = {
  name: "SV Topografia & Projetos LTDA",
  shortName: "SV Topografia",
  slogan: "Do levantamento à execução",
  description:
    "Empresa especializada em topografia, georreferenciamento, aerolevantamento com drone, LiDAR, projetos de engenharia e geoprocessamento em Parauapebas e região.",
  phone: "5594991955918",
  phoneDisplay: "(94) 99195-5918",
  whatsappUrl: "https://wa.me/5594991955918",
  email: "gerencia@nortesultopografia.com.br",
  addressLines: [
    "Rua 02, Quadra 123, Lote 05",
    "Nova Carajás",
    "Parauapebas - PA",
  ],
  address: "Rua 02, Quadra 123, Lote 05, Nova Carajás, Parauapebas - PA",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=Rua+02,+Nova+Caraj%C3%A1s,+Parauapebas+-+PA,+68515-000&output=embed",
  social: {
    instagram: "https://instagram.com/svtopografia",
    facebook: "https://facebook.com/svtopografia",
    linkedin: "https://linkedin.com/company/svtopografia",
    youtube: "https://youtube.com/@svtopografia",
  },
} as const;

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "SV LOTES", href: "#sv-lotes" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Contato", href: "#contato" },
  { label: "Blog", href: "/blog" },
] as const;

export const HERO = {
  title: "Topografia, Engenharia e Geotecnologia de Alta Precisão",
  subtitle:
    "Mais de 15 anos entregando soluções em topografia, georreferenciamento, aerolevantamento com drones, loteamentos, infraestrutura e engenharia.",
  institutional:
    "A SV Topografia & Projetos atua desde 2010 oferecendo soluções completas para obras, mineração, loteamentos, georreferenciamento, regularização fundiária e projetos de engenharia em todo o Brasil.",
  stats: [
    { value: "15+", label: "Anos de Experiência" },
    { value: "500+", label: "Projetos Executados" },
    { value: "1000+", label: "Levantamentos Realizados" },
    { value: "100%", label: "Compromisso com Precisão" },
  ],
} as const;

export const EXPERIENCE = {
  title: "Mais de 15 anos transformando projetos em realidade",
  text: "Fundada em 14 de setembro de 2010, a SV Topografia & Projetos consolidou sua atuação em topografia, cartografia, geodésia, georreferenciamento, aerolevantamento com drones, infraestrutura e engenharia.",
  sectors: [
    "Mineração",
    "Rodovias",
    "Loteamentos",
    "Terraplenagem",
    "Regularização Fundiária",
    "Engenharia Civil",
    "Geoprocessamento",
    "Aerolevantamento",
  ],
  timeline: [
    { year: "2010", label: "Fundação da empresa" },
    { year: "2015", label: "Expansão regional" },
    { year: "2020", label: "Implantação de drones RTK" },
    { year: "2025", label: "Desenvolvimento do SV LOTES GIS" },
    { year: "2026", label: "Consolidação da plataforma tecnológica" },
  ],
} as const;

export const SV_LOTES = {
  title: "SV LOTES — Gestão Inteligente para Loteadoras",
  subtitle:
    "Venda lotes pelo mapa, gere contratos, parcelas, carnês, recibos e controle financeiro em uma única plataforma.",
  description:
    "O SV LOTES é uma plataforma desenvolvida pela SV Topografia & Projetos para modernizar a gestão de loteamentos, imobiliárias e incorporadoras. O sistema integra mapa GIS, controle de lotes, vendas, contratos, financeiro, clientes e relatórios em tempo real.",
  features: [
    "Mapa GIS interativo",
    "Controle de lotes disponíveis, reservados, vendidos e quitados",
    "Geração automática de contratos",
    "Controle financeiro de parcelas",
    "Recibos e carnês",
    "Cadastro de clientes e corretores",
    "Dashboard gerencial",
    "Relatórios de vendas e inadimplência",
  ],
  links: {
    site: "https://www.svlotes.com.br",
    login: "https://www.svlotes.com.br/login",
  },
  printCaption:
    "Sistema utilizado para gestão de loteamentos, contratos, vendas e controle financeiro.",
} as const;

export const ABOUT = {
  history:
    "A SV Topografia & Projetos LTDA nasceu da paixão pela precisão e pela engenharia aplicada ao território. Com equipe técnica qualificada e equipamentos de última geração, atuamos em projetos de diferentes portes — de loteamentos residenciais a obras rodoviárias — entregando levantamentos confiáveis e soluções completas do campo ao projeto executivo.",
  mission:
    "Oferecer serviços topográficos e de engenharia com excelência técnica, precisão e agilidade, contribuindo para o desenvolvimento seguro e sustentável de empreendimentos.",
  vision:
    "Ser referência nacional em topografia, geoprocessamento e projetos de infraestrutura, reconhecida pela inovação tecnológica e pela confiança de nossos clientes.",
  values: [
    {
      title: "Precisão",
      description: "Dados confiáveis e levantamentos rigorosamente validados.",
    },
    {
      title: "Inovação",
      description: "Tecnologias como drone, LiDAR e GIS em constante evolução.",
    },
    {
      title: "Compromisso",
      description: "Prazos cumpridos e transparência em cada etapa do projeto.",
    },
    {
      title: "Segurança",
      description: "Procedimentos técnicos alinhados às normas e boas práticas.",
    },
  ],
} as const;

export const SERVICES = [
  {
    id: "levantamento-topografico",
    title: "Levantamento Topográfico",
    description:
      "Levantamentos planimétricos e altimétricos com GPS/GNSS e estações totais para projetos civis, agrícolas e industriais.",
    icon: "Map",
  },
  {
    id: "georreferenciamento",
    title: "Georreferenciamento",
    description:
      "Certificação de imóveis rurais e urbanos conforme normas do INCRA e cartórios, com memorial descritivo e ART.",
    icon: "Globe",
  },
  {
    id: "aerolevantamento-drone",
    title: "Aerolevantamento com Drone",
    description:
      "Mapeamento aéreo de alta resolução para áreas extensas, obras e monitoramento de progresso com agilidade e precisão.",
    icon: "Plane",
  },
  {
    id: "lidar",
    title: "LiDAR",
    description:
      "Nuvem de pontos 3D para modelagem detalhada do terreno, detecção de vegetação e análises volumétricas avançadas.",
    icon: "ScanLine",
  },
  {
    id: "loteamentos",
    title: "Projetos de Loteamentos",
    description:
      "Projeto completo de loteamentos: topografia, infraestrutura, drenagem e documentação para aprovação municipal.",
    icon: "LayoutGrid",
  },
  {
    id: "rodoviarios",
    title: "Projetos Rodoviários",
    description:
      "Traçado, perfil longitudinal, seções transversais e quantitativos para pavimentação e recuperação de vias.",
    icon: "Route",
  },
  {
    id: "terraplenagem",
    title: "Terraplenagem",
    description:
      "Projeto e acompanhamento de movimentação de terra, cálculo de cortes e aterros e controle de níveis em obra.",
    icon: "Mountain",
  },
  {
    id: "volumes",
    title: "Cálculo de Volumes",
    description:
      "Cubagem de materiais, estoques, barragens e áreas de empréstimo com relatórios técnicos detalhados.",
    icon: "Box",
  },
  {
    id: "regularizacao-fundiaria",
    title: "Regularização Fundiária",
    description:
      "Apoio técnico em processos de regularização fundiária urbana e rural, levantamentos e plantas georreferenciadas.",
    icon: "FileCheck",
  },
  {
    id: "gis-geoprocessamento",
    title: "GIS e Geoprocessamento",
    description:
      "Análise espacial, mapas temáticos, bases geográficas e integração de dados para tomada de decisão.",
    icon: "Layers",
  },
] as const;

export const PORTFOLIO_CATEGORIES = [
  { id: "todos", label: "Todos" },
  { id: "obras", label: "Obras Executadas" },
  { id: "loteamentos", label: "Loteamentos" },
  { id: "rodovias", label: "Rodovias" },
  { id: "drones", label: "Drones" },
] as const;

export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Aerolevantamento com Drone RTK",
    category: "drones" as const,
    image: "/images/portfolio/01.jpg",
  },
  {
    id: 2,
    title: "Levantamento Topográfico",
    category: "obras" as const,
    image: "/images/portfolio/02.jpg",
  },
  {
    id: 3,
    title: "Infraestrutura Urbana",
    category: "obras" as const,
    image: "/images/portfolio/03.jpg",
  },
  {
    id: 4,
    title: "Terraplenagem",
    category: "obras" as const,
    image: "/images/portfolio/04.jpg",
  },
  {
    id: 5,
    title: "Projeto de Loteamento",
    category: "loteamentos" as const,
    image: "/images/portfolio/05.jpeg",
  },
  {
    id: 6,
    title: "Georreferenciamento",
    category: "obras" as const,
    image: "/images/portfolio/06.png",
  },
] as const;

export function getWhatsAppUrl(message?: string) {
  const text = encodeURIComponent(
    message ?? "Olá! Gostaria de solicitar um orçamento."
  );
  return `${COMPANY.whatsappUrl}?text=${text}`;
}
