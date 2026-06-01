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
  title: "SV LOTES",
  subtitle: "Gestão Inteligente para Loteadoras e Imobiliárias",
  description:
    "O SV LOTES é uma plataforma desenvolvida pela SV Topografia & Projetos para modernizar a gestão de loteamentos e empreendimentos imobiliários.",
  descriptionExtended:
    "O sistema integra mapa GIS, clientes, contratos, vendas, financeiro, relatórios, recebimentos e controle operacional em uma única plataforma.",
  highlight:
    "Sistema atualmente utilizado pela Meneses Imobiliária para gestão completa de loteamentos, contratos, clientes e controle financeiro.",
  mainImage: {
    src: "/images/svlotes/01.png",
    alt: "Mapa GIS Interativo — SV LOTES",
    label: "Mapa GIS Interativo",
  },
  badges: [
    "Mapa GIS Integrado",
    "Gestão de Contratos",
    "Controle Financeiro",
    "Cadastro de Clientes",
    "Controle de Vendas",
    "Relatórios Gerenciais",
    "Gestão de Recebimentos",
    "Multiempresa",
  ],
  gallery: [
    {
      id: 2,
      src: "/images/svlotes/02.png",
      title: "Dashboard Gerencial",
      description:
        "Acompanhamento em tempo real de vendas, estoque, recebimentos, indicadores financeiros e desempenho do empreendimento.",
    },
    {
      id: 3,
      src: "/images/svlotes/03.png",
      title: "Gestão de Contratos",
      description:
        "Controle completo de contratos, documentos, clientes, histórico de negociações e processos comerciais.",
    },
    {
      id: 4,
      src: "/images/svlotes/04.png",
      title: "Controle Financeiro",
      description:
        "Gestão de parcelas, recebimentos, inadimplência, fluxo de caixa e relatórios financeiros.",
    },
    {
      id: 5,
      src: "/images/svlotes/05.png",
      title: "Central Administrativa",
      description:
        "Painel operacional para gerenciamento integrado de clientes, contratos, vendas e movimentações do sistema.",
    },
    {
      id: 6,
      src: "/images/svlotes/06.png",
      title: "Consulta Inteligente de Lotes",
      description:
        "Visualização detalhada das informações do lote, incluindo área, dimensões, confrontações, status comercial e valores.",
    },
    {
      id: 7,
      src: "/images/svlotes/07.png",
      title: "Venda Assistida",
      description:
        "Processo simplificado de cadastro de clientes e geração automática de vendas, contratos e parcelas financeiras.",
    },
  ],
  links: {
    site: "https://www.svlotes.com.br",
    login: "https://www.svlotes.com.br/login",
  },
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

export const TECHNOLOGY = {
  label: "Tecnologia",
  title: "Nossa Tecnologia e Equipamentos",
  description:
    "Equipamentos de última geração para garantir precisão, produtividade e confiabilidade em todos os projetos.",
  items: [
    {
      id: "matrice-350-rtk",
      title: "DJI Matrice 350 RTK + LiDAR",
      description:
        "Aerolevantamentos de alta precisão, geração de nuvem de pontos, modelos digitais de terreno, inspeções e levantamentos de grandes áreas.",
      image: "/images/equipment/01-matrice-350-rtk.png",
      icon: "ScanLine",
    },
    {
      id: "phantom-4-pro-rtk",
      title: "DJI Phantom 4 Pro RTK",
      description:
        "Captura de imagens aéreas georreferenciadas para ortomosaicos, monitoramento de obras e levantamentos topográficos.",
      image: "/images/equipment/02-phantom-4-pro-rtk.png",
      icon: "Plane",
    },
    {
      id: "gnss-rtk",
      title: "GNSS RTK",
      description:
        "Levantamentos georreferenciados, locações, cadastro técnico, georreferenciamento rural e controle de obras.",
      image: "/images/equipment/03-gnss-rtk.png",
      icon: "Satellite",
    },
    {
      id: "estacao-total-topcon",
      title: "Estação Total Topcon",
      description:
        "Equipamento de alta precisão utilizado para levantamentos planialtimétricos, locação e acompanhamento de obras.",
      image: "/images/equipment/04-estacao-total-topcon.png",
      icon: "Crosshair",
    },
    {
      id: "civil-3d-geoprocessamento",
      title: "Civil 3D e Geoprocessamento",
      description:
        "Desenvolvimento de projetos, modelagem de superfícies, cálculos volumétricos, loteamentos e infraestrutura.",
      image: "/images/equipment/05-civil-3d-geoprocessamento.jpg",
      icon: "Monitor",
    },
    {
      id: "estrutura-campo",
      title: "Estrutura Operacional Própria",
      description:
        "Equipe técnica especializada, veículos próprios, equipamentos RTK, drones e estrutura completa para execução de levantamentos, georreferenciamento, aerolevantamentos e projetos em toda a região.",
      image: "/images/equipment/06-veiculo-operacional.png",
      icon: "Truck",
    },
  ],
  badges: [
    "Tecnologia RTK",
    "Aerolevantamento",
    "LiDAR",
    "Georreferenciamento",
    "Topografia de Precisão",
    "Processamento e Projetos",
  ],
} as const;

export const PORTFOLIO_CATEGORIES = [
  { id: "todos", label: "Todos" },
  { id: "topografia", label: "Topografia" },
  { id: "georreferenciamento", label: "Georreferenciamento" },
  { id: "aerolevantamento", label: "Aerolevantamento" },
  { id: "lidar", label: "LiDAR" },
  { id: "loteamentos", label: "Loteamentos" },
  { id: "infraestrutura", label: "Infraestrutura" },
  { id: "rodovias", label: "Rodovias" },
  { id: "geoprocessamento", label: "Geoprocessamento" },
  { id: "drones", label: "Drones" },
] as const;

export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Levantamento Topográfico",
    category: "topografia" as const,
    categoryLabel: "Topografia",
    description:
      "Levantamentos planialtimétricos com GNSS RTK, estação total e apoio técnico em campo.",
    image: "/images/portfolio/01-levantamento-topografico.jpg",
  },
  {
    id: 2,
    title: "Terraplenagem e Infraestrutura",
    category: "infraestrutura" as const,
    categoryLabel: "Infraestrutura",
    description:
      "Controle topográfico e acompanhamento técnico de obras de terraplenagem e infraestrutura.",
    image: "/images/portfolio/02-terraplenagem-infraestrutura.jpg",
  },
  {
    id: 3,
    title: "Georreferenciamento de Imóveis",
    category: "georreferenciamento" as const,
    categoryLabel: "Georreferenciamento",
    description:
      "Levantamentos georreferenciados para imóveis rurais e urbanos, com precisão e documentação técnica.",
    image: "/images/portfolio/03-georreferenciamento.jpg",
  },
  {
    id: 4,
    title: "Locação e Controle de Obras",
    category: "topografia" as const,
    categoryLabel: "Topografia",
    description:
      "Locação de pontos, eixos, greides e acompanhamento geométrico de obras civis.",
    image: "/images/portfolio/04-locacao-controle-obras.jpg",
  },
  {
    id: 5,
    title: "LiDAR e Modelagem 3D",
    category: "lidar" as const,
    categoryLabel: "LiDAR",
    description:
      "Geração de nuvem de pontos, modelos digitais de terreno e análises altimétricas avançadas.",
    image: "/images/portfolio/05-lidar-modelagem-3d.png",
  },
  {
    id: 6,
    title: "Vila das Chácaras",
    category: "loteamentos" as const,
    categoryLabel: "Loteamentos",
    description:
      "Projeto de loteamento e planejamento urbanístico com áreas, acessos e implantação técnica.",
    image: "/images/portfolio/06-vila-das-chacaras.png",
  },
  {
    id: 7,
    title: "Parque das Nações",
    category: "loteamentos" as const,
    categoryLabel: "Loteamentos",
    description:
      "Projeto de loteamento com organização de quadras, lotes, vias e infraestrutura urbana.",
    image: "/images/portfolio/07-parque-das-nacoes.jpg",
  },
  {
    id: 8,
    title: "Viaduto de Parauapebas",
    category: "infraestrutura" as const,
    categoryLabel: "Infraestrutura",
    description:
      "Apoio técnico e levantamento topográfico para estudo e intervenção em infraestrutura urbana.",
    image: "/images/portfolio/08-viaduto-parauapebas.jpg",
  },
  {
    id: 9,
    title: "Projeto Rodoviário",
    category: "rodovias" as const,
    categoryLabel: "Rodovias",
    description:
      "Levantamento, acompanhamento e apoio técnico para projetos rodoviários e infraestrutura viária.",
    image: "/images/portfolio/09-projeto-rodoviario.jpg",
  },
  {
    id: 10,
    title: "Aerolevantamento com Drone",
    category: "aerolevantamento" as const,
    categoryLabel: "Aerolevantamento",
    description:
      "Captura de imagens aéreas, ortomosaicos e produtos cartográficos para planejamento e medição.",
    image: "/images/portfolio/10-aerolevantamento-drone.png",
  },
  {
    id: 11,
    title: "Mapeamento e Geoprocessamento",
    category: "geoprocessamento" as const,
    categoryLabel: "Geoprocessamento",
    description:
      "Processamento de dados geoespaciais, mapas temáticos, curvas de nível e análises territoriais.",
    image: "/images/portfolio/11-geoprocessamento.png",
  },
  {
    id: 12,
    title: "Monitoramento com Drone RTK",
    category: "drones" as const,
    categoryLabel: "Drones",
    description:
      "Monitoramento de obras, áreas rurais, loteamentos e empreendimentos com imagens aéreas de alta precisão.",
    image: "/images/portfolio/12-monitoramento-drone-rtk.jpg",
  },
] as const;

export function getWhatsAppUrl(message?: string) {
  const text = encodeURIComponent(
    message ?? "Olá! Gostaria de solicitar um orçamento."
  );
  return `${COMPANY.whatsappUrl}?text=${text}`;
}
