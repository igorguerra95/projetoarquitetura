import heroPavilionImg from '../assets/images/hero_pavilion_architecture_1795091103955.jpg';
import residenciaConcretoImg from '../assets/images/portfolio_residencia_concreto_1795091104385.jpg';
import edificioCorporativoImg from '../assets/images/portfolio_edificio_corporativo_1795091104330.jpg';
import galeriaInterioresImg from '../assets/images/portfolio_galeria_interiores_1795091104206.jpg';
import pavilhaoCulturalImg from '../assets/images/portfolio_pavilhao_cultural_1795091103976.jpg';
import atelierMaquetesImg from '../assets/images/sobre_atelier_maquetes_1795091104232.jpg';

export type ProjectCategory = 'Todos' | 'Residencial' | 'Comercial' | 'Interiores';

export interface ArchitecturalProject {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, 'Todos'>;
  year: string;
  area: string;
  location: string;
  structure: string;
  materials: string;
  summary: string;
  narrative: string;
  image: string;
  alt: string;
  aspectClass: string;
  gridSpanClass: string;
}

export interface StudioMetric {
  value: number;
  suffix: string;
  label: string;
  detail: string;
}

export interface CreativeStage {
  step: string;
  title: string;
  description: string;
  deliverable: string;
}

export const HERO_PROJECT: ArchitecturalProject = {
  id: 'pavilhao-horizonte',
  title: 'Pavilhão Horizonte',
  category: 'Residencial',
  year: '2025',
  area: '640 m²',
  location: 'Serra da Mantiqueira, MG',
  structure: 'Concreto protendido e vigas metálicas em aço grafite',
  materials: 'Concreto aparente ripado, aço patinado, vidro laminado e freijó',
  summary:
    'Residência em dois volumes deslocados que dialogam com a topografia serrana por meio de grandes vãos livres e lâmina d’água contínua.',
  narrative:
    'Projetado para dissolver a fronteira entre abrigo e paisagem, o Pavilhão Horizonte organiza o programa íntimo em um volume superior em balanço, enquanto a ala social se abre integralmente ao espelho d’água e à luz vespertina.',
  image: heroPavilionImg,
  alt: 'Pavilhão Horizonte: residência modernista brasileira em concreto aparente, esquadrias grafite e espelho d’água ao entardecer.',
  aspectClass: 'aspect-[4/3]',
  gridSpanClass: 'lg:col-span-7',
};

export const PORTFOLIO_PROJECTS: ArchitecturalProject[] = [
  HERO_PROJECT,
  {
    id: 'edificio-vertice-grafite',
    title: 'Edifício Vértice Grafite',
    category: 'Comercial',
    year: '2024',
    area: '2.850 m²',
    location: 'Jardim Paulista, SP',
    structure: 'Núcleo rígido em concreto e lajes nervuradas moduladas',
    materials: 'Brises em alumínio anodizado grafite, pele de vidro e basalto',
    summary:
      'Sede corporativa boutique com fachada cinética em brises verticais que filtram a insolação oeste sem comprometer a transparência urbana.',
    narrative:
      'O térreo com pé-direito duplo atua como extensão gentil da calçada, estabelecendo um átrio luminoso revestido em madeira natural que contrasta com o rigor monocromático da envoltória externa.',
    image: edificioCorporativoImg,
    alt: 'Edifício Vértice Grafite: fachada comercial contemporânea com brises metálicos escuros e átrio envidraçado iluminado ao anoitecer.',
    aspectClass: 'aspect-[4/3]',
    gridSpanClass: 'lg:col-span-5',
  },
  {
    id: 'residencia-penhasco-atlantico',
    title: 'Residência Penhasco Atlântico',
    category: 'Residencial',
    year: '2024',
    area: '520 m²',
    location: 'São Sebastião, SP',
    structure: 'Balanço estrutural engastado na encosta rochosa',
    materials: 'Concreto bruto, muxarabis de cumaru e ardósia escovada',
    summary:
      'Volume monolítico suspenso sobre a mata atlântica com venezianas pivotantes de madeira certificada para ventilação cruzada permanente.',
    narrative:
      'A implantação respeitou o caimento natural do terreno em pedra, minimizando movimentações de terra e criando um terraço em borda infinita alinhado à linha do mar.',
    image: residenciaConcretoImg,
    alt: 'Residência Penhasco Atlântico: casa em concreto armado em balanço com brises de madeira escura voltada para o oceano.',
    aspectClass: 'aspect-[4/3]',
    gridSpanClass: 'lg:col-span-5',
  },
  {
    id: 'galeria-monolito-jardins',
    title: 'Galeria Monólito Jardins',
    category: 'Interiores',
    year: '2025',
    area: '310 m²',
    location: 'Jardins, SP',
    structure: 'Laje nervurada aparente preservada com iluminação técnica embutida',
    materials: 'Pedra sabão escovada, carvalho ebanizado, calcário e linho cru',
    summary:
      'Arquitetura de interiores concebida como galeria habitável, onde a laje caixão perdido e o bloco monolítico da lareira ordenam a permanência.',
    narrative:
      'Cada peça de marcenaria foi desenhada sob medida em carvalho escurecido, mantendo linhas contínuas que valorizam o desenho da luz natural ao longo do dia.',
    image: galeriaInterioresImg,
    alt: 'Galeria Monólito Jardins: sala minimalista com teto em laje nervurada de concreto, lareira em pedra escura e luz natural oblíqua.',
    aspectClass: 'aspect-[4/3]',
    gridSpanClass: 'lg:col-span-7',
  },
  {
    id: 'centro-cultural-colunata',
    title: 'Centro Cultural Colunata',
    category: 'Comercial',
    year: '2023',
    area: '1.940 m²',
    location: 'Lourdes, BH',
    structure: 'Pórticos sequenciais em concreto armado de grande altura',
    materials: 'Concreto arquitetônico liso, granito levigado e aço escovado',
    summary:
      'Pavilhão expositivo estruturado ao redor de um pátio central descoberto que transforma a luz zenital em elemento arquitetônico primário.',
    narrative:
      'A cadência dos pilares em altura tripla cria um ritmo contemplativo de sombra e claridade, oferecendo flexibilidade museográfica para instalações de grande escala.',
    image: pavilhaoCulturalImg,
    alt: 'Centro Cultural Colunata: pátio interno monumental em concreto aparente com colunata vertical e enquadramento geométrico do céu.',
    aspectClass: 'aspect-[3/4]',
    gridSpanClass: 'lg:col-span-6',
  },
];

export const ATELIER_IMAGE = {
  src: atelierMaquetesImg,
  alt: 'Bancada de trabalho do estúdio Projeto de Arquitetura com maquetes físicas em madeira balsa, pranchas técnicas e paquímetro sob luz natural.',
};

export const STUDIO_METRICS: StudioMetric[] = [
  {
    value: 48,
    suffix: '+',
    label: 'Obras concluídas',
    detail: 'Residências, sedes e espaços autorais entregues',
  },
  {
    value: 18,
    suffix: '',
    label: 'Anos de prática',
    detail: 'Atuação contínua em arquitetura e design estrutural',
  },
  {
    value: 32400,
    suffix: ' m²',
    label: 'Área projetada',
    detail: 'Rigor técnico em escalas residenciais e corporativas',
  },
  {
    value: 14,
    suffix: '',
    label: 'Reconhecimentos',
    detail: 'Premiações e publicações especializadas no país',
  },
];

export const CREATIVE_PROCESS: CreativeStage[] = [
  {
    step: '01',
    title: 'Leitura do Sítio e Programa',
    description:
      'Mapeamento topográfico, estudo de insolação, ventos dominantes, condicionantes legais e escuta aprofundada sobre os ritos cotidianos de uso.',
    deliverable: 'Estudo de Viabilidade e Diagnóstico Espacial',
  },
  {
    step: '02',
    title: 'Partido Arquitetônico e Maquete',
    description:
      'Investigação volumétrica por meio de croquis, modelos físicos em escala e simulações luminotécnicas para validar proporções e fluidez.',
    deliverable: 'Estudo Preliminar e Anteprojeto Volumétrico',
  },
  {
    step: '03',
    title: 'Executivo e Compatibilização',
    description:
      'Detalhamento construtivo milimétrico em BIM, especificação de materiais nobres e coordenação integral com estrutura, fundações e instalações.',
    deliverable: 'Caderno Executivo Completo e Memorial Descritivo',
  },
  {
    step: '04',
    title: 'Direção Estética de Obra',
    description:
      'Acompanhamento técnico rigoroso nas etapas críticas de concretagem, serralheria, caixilharia e marcenaria fina até a entrega das chaves.',
    deliverable: 'Vistorias Periódicas e Curadoria de Acabamentos',
  },
];
