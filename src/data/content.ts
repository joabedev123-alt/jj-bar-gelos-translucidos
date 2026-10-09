import galeriaFormatos from '../assets/images/galeria-formatos.jpg?w=640;960;1280;1920&format=webp;jpg&as=picture'
import galeriaFloresEventos from '../assets/images/galeria-flores-eventos.jpg?w=640;960;1280;1920&format=webp;jpg&as=picture'
import galeriaTecnicas from '../assets/images/galeria-tecnicas.jpg?w=640;960;1376&format=webp;jpg&as=picture'
import historia1 from '../assets/images/historia-1.jpg?w=320;480;640;960&format=webp;jpg&as=picture'
import historia2 from '../assets/images/historia-2.png?w=320;480;640;960&format=webp;jpg&as=picture'
import historia3 from '../assets/images/historia-3.jpg?w=320;480;640;960&format=webp;jpg&as=picture'
import historia4 from '../assets/images/historia-4.jpg?w=320;480;640;960&format=webp;jpg&as=picture'
import historia5 from '../assets/images/historia-5.jpg?w=320;480;640;960&format=webp;jpg&as=picture'
import historia6 from '../assets/images/historia-6.jpg?w=320;480;640;960&format=webp;jpg&as=picture'
import historia7 from '../assets/images/historia-7.jpg?w=320;480;640;960&format=webp;jpg&as=picture'
import historia8 from '../assets/images/historia-8.jpg?w=320;480;640;960&format=webp;jpg&as=picture'
import historia9 from '../assets/images/historia-9.jpg?w=320;480;640;960&format=webp;jpg&as=picture'

export const painPoints = [
  'Quer criar uma nova fonte de renda com um produto premium?',
  'Seu bar ou restaurante precisa entregar uma experiência que o cliente fotografa e compartilha?',
  'Já pensou em atender eventos, casamentos e empresas com gelos personalizados?',
  'Quer dominar cortes, formatos e aplicações que valorizam qualquer drink?',
  'Está pronto para transformar água, técnica e criatividade em um negócio escalável?',
]

export type GalleryItem = {
  image: ImagePicture
  title: string
  subtitle: string
  /** Cada imagem é uma colagem de 3 fotos; a posição escolhe o recorte exibido. */
  position: 'object-left' | 'object-center' | 'object-right'
}

export const gallery: GalleryItem[] = [
  { image: galeriaFormatos, title: 'Diamante', subtitle: 'Cortes de alto impacto', position: 'object-left' },
  { image: galeriaFormatos, title: 'Esfera', subtitle: 'Elegância e menor diluição', position: 'object-center' },
  { image: galeriaFormatos, title: 'Cubo', subtitle: 'Precisão em cada drink', position: 'object-right' },
  { image: galeriaFloresEventos, title: 'Orquídea no gelo', subtitle: 'Peças marcantes para eventos', position: 'object-left' },
  { image: galeriaFloresEventos, title: 'Coquetéis de festa', subtitle: 'Detalhes que encantam', position: 'object-center' },
  { image: galeriaFloresEventos, title: 'Drinks com gelos translúcidos', subtitle: 'Criações autorais', position: 'object-right' },
  { image: galeriaTecnicas, title: 'Copos de shot', subtitle: 'Experiências memoráveis', position: 'object-left' },
  { image: galeriaTecnicas, title: 'Comum × translúcido', subtitle: 'A diferença é visível', position: 'object-center' },
  { image: galeriaTecnicas, title: 'Corte profissional', subtitle: 'Técnica na prática', position: 'object-right' },
]

export const curriculum = [
  'Fundamentos sobre gelos translúcidos',
  'Tipos de gelo e aplicações',
  'Estrutura de um drink',
  'Equipamentos necessários',
  'Processos de produção',
  'Cortes e modelagem',
  'Processos criativos',
  'Empreendendo com gelos translúcidos',
  'Criações autorais',
  'Precificação',
  'Escala e crescimento',
  'Mão na massa: aulas práticas de preparo e cortes',
]

export const historyImages = [
  historia1,
  historia2,
  historia3,
  historia4,
  historia5,
  historia6,
  historia7,
  historia8,
  historia9,
]

export const testimonials = [
  {
    name: 'Marina Alves',
    text: 'O curso abriu meus olhos para um produto premium. Comecei atendendo pequenos eventos e hoje o gelo já representa uma nova fonte de receita.',
  },
  {
    name: 'Rafael Costa',
    text: 'Aprendi a acertar a transparência, o corte e a apresentação. Meus drinks ganharam outro padrão e os clientes perceberam a diferença.',
  },
  {
    name: 'Camila Rocha',
    text: 'A parte de precificação e vendas fez toda a diferença. Saí com clareza para estruturar minha produção e apresentar meu serviço.',
  },
]

export const studentReviews = [
  {
    initials: 'MO',
    name: 'Monique',
    role: 'Noiva e Empresária',
    text: 'Vocês arrasaram no meu casamento, sério, foi inesquecível, já quero fazer os cursos de vocês pra me tornar uma Bartender. Ou será uma empreendedora, pode? Hahaha. Oremos, ansiosa para começar.',
  },
  {
    initials: 'GU',
    name: 'Guilherme',
    role: 'Bartender',
    text: 'Fiz o curso presencial com o Felipe, com o Bob e o Ensei, valeu galera, primeiro curso da minha carreira e já foi uma atitude positiva na minha vida colocando em prática todos os aprendizados. Obrigado mestres!!!',
  },
  {
    initials: 'VI',
    name: 'Vitor',
    role: 'Empresário de Eventos e Cafeteria',
    text: 'Trabalhei na JJ depois montei meu próprio negócio. A JJ foi uma escola pra mim, cada evento, cada aprendizado, levo isso pra minha vida, além de valores, aprendi a ser um empreendedor na prática mesmo.',
  },
]

export const faqs: [question: string, answer: string][] = [
  [
    'Preciso ter experiência como bartender?',
    'Não. O curso começa pelos fundamentos e avança até produção, cortes, aplicações e comercialização.',
  ],
  [
    'O curso ensina a transformar a técnica em renda?',
    'Sim. Você aprenderá precificação, formas de atender eventos e empresas, escala e caminhos para estruturar seu próprio negócio.',
  ],
  [
    'Vou aprender formatos diferentes?',
    'Sim. A formação aborda cubos, esferas, diamantes, blocos decorativos, shots de gelo e processos criativos.',
  ],
  [
    'As aulas são práticas?',
    'Sim. O conteúdo inclui mão na massa com as técnicas de preparo, produção, corte e modelagem.',
  ],
  [
    'Quais equipamentos são necessários?',
    'Você conhecerá os equipamentos, materiais e processos adequados para iniciar e evoluir sua produção com segurança.',
  ],
  [
    'Como acesso após a compra?',
    'Após a confirmação, você recebe as instruções de acesso ao curso e pode começar sua jornada.',
  ],
]

export const offerItems: [label: string, price: string][] = [
  ['Fundamentos sobre gelos translúcidos', 'R$ 97'],
  ['Aplicações de gelo translúcido', 'R$ 147'],
  ['Produção de gelos translúcidos e corte', 'R$ 497'],
  ['Escala e empreendedorismo', 'R$ 997'],
]

export const offerTotal = 'R$ 1.738,00'

export const bonuses = [
  {
    label: 'Bônus 01',
    title: '3 ideias para começar a faturar',
    description: 'Assinaturas, eventos, empresas e fornecimento para bares.',
  },
  {
    label: 'Bônus 02',
    title: 'Como transformar gelos em franquia',
    description: 'Visão estratégica para estruturar e expandir a operação.',
  },
]

export const offerPerks = ['Conteúdo completo', 'Aulas práticas', '2 bônus exclusivos']

export const instagramAccounts = [
  { name: 'Felipe Martins', handle: 'felipejjbarebarista' },
  { name: 'JJ Store & Academy', handle: 'jjbarebaristastore_academy' },
  { name: 'JJ Bar & Barista', handle: 'jjbarebarista' },
  { name: 'JJ Bar Eventos', handle: 'jjbar_eventos' },
].map((account) => ({ ...account, url: `https://www.instagram.com/${account.handle}/` }))

export const contacts = {
  // Perfil principal da escola (JJ Store & Academy).
  instagram: instagramAccounts[1].url,
  whatsapp: 'https://wa.me/5500000000000',
}

export type NavLink = { href: `#${string}`; label: string }

export const navLinks: NavLink[] = [
  { href: '#conteudo', label: 'O curso' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#sobre', label: 'Quem somos' },
  { href: '#instrutor', label: 'Instrutor' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#faq', label: 'Dúvidas' },
]

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: 'O curso',
    links: [
      { href: '#conteudo', label: 'O que você vai aprender' },
      { href: '#galeria', label: 'Possibilidades reais' },
      { href: '#oferta', label: 'Oferta e bônus' },
      { href: '#faq', label: 'Perguntas frequentes' },
    ],
  },
  {
    title: 'Academy',
    links: [
      { href: '#sobre', label: 'Quem somos nós' },
      { href: '#instrutor', label: 'Felipe Martins' },
      { href: '#depoimentos', label: 'Depoimentos' },
    ],
  },
]
