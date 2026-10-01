import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'

const galleryItems = [
  {
    image: '/images/bartender_cutting_ice.jpg',
    title: 'Corte Artesanal',
    category: 'Técnica & Manuseio',
  },
  {
    image: '/images/hero_clear_ice.jpg',
    title: 'Cubo Imponente',
    category: 'Old Fashioned & Whisky',
  },
  {
    image: '/images/macro_clear_ice.jpg',
    title: 'Pureza Óptica',
    category: 'Macro & Lapidação',
  },
  {
    image: '/images/ice_spear_highball.jpg',
    title: 'Collins Spear',
    category: 'Highball & Efervescência',
  },
  {
    image: '/images/Drinks.jpeg',
    title: 'Coquetelaria de Autor',
    category: 'Criações Exclusivas',
  },
  {
    image: '/images/ice_shapes_display.jpg',
    title: 'Esculturas de Gelo',
    category: 'Formatos Variados',
  },
  {
    image: '/images/Eventos.jpeg',
    title: 'Eventos & Banquetes',
    category: 'Serviço em Escala',
  },
  {
    image: '/images/Bastidores.jpeg',
    title: 'Bastidores & Treinamento',
    category: 'JJ Bar & Barista',
  },
]

export default function PhotoGallery() {
  return (
    <section className="relative bg-white py-16 sm:py-24 lg:py-28 border-y border-[#C6A15B]/15">
      <Container>
        <SectionHeading
          eyebrow="GALERIA &amp; BASTIDORES"
          title="CLEAR ICE NA PRÁTICA."
          subtitle="Acompanhe a aplicação real da técnica em copos, eventos, estações de trabalho e experiências exclusivas."
        />

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {galleryItems.map((item, idx) => (
            <Reveal key={idx} delay={0.04 * idx} className="h-full">
              <div className="group relative h-48 sm:h-60 lg:h-64 overflow-hidden rounded-2xl border border-[#C6A15B]/25 bg-[#FAF8F3] shadow-sm transition-all duration-300 hover:border-[#C6A15B] hover:shadow-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-90 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-[#E7D5A7]">
                    {item.category}
                  </span>
                  <h3 className="font-display text-xs sm:text-sm font-bold text-white truncate">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
