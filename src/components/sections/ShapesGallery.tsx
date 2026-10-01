import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { ICE_SHAPES } from '../../lib/constants'

export default function ShapesGallery() {
  return (
    <section className="relative bg-white py-16 sm:py-24 lg:py-28 border-y border-[#C6A15B]/15">
      <Container>
        <SectionHeading
          eyebrow="GEOMETRIA &amp; LAPIDAÇÃO"
          title="UM BLOCO. DIFERENTES POSSIBILIDADES."
          subtitle="Do clássico cubo imponente às esferas e spears verticais: conheça os cortes que transformam qualquer coquetel."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ICE_SHAPES.map((shape, idx) => (
            <Reveal
              key={shape.title}
              delay={0.06 * idx}
              className={`h-full ${idx === 3 ? 'sm:col-span-1 lg:col-span-1' : ''} ${
                idx === 4 ? 'sm:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#C6A15B]/30 bg-[#FAF8F3] p-3 shadow-sm transition-all duration-300 hover:border-[#C6A15B] hover:shadow-xl">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                  <img
                    src={shape.image}
                    alt={shape.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#9C7B3C] backdrop-blur-sm shadow-sm">
                    {shape.tag}
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  <h3 className="font-display text-lg font-bold uppercase text-[#111111] group-hover:text-[#9C7B3C] transition-colors">
                    {shape.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#555555]">
                    {shape.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
