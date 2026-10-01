import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { COCKTAIL_CARDS } from '../../lib/constants'

export default function CocktailsDesign() {
  return (
    <section className="relative bg-[#FAF8F3] py-16 sm:py-24 lg:py-28 overflow-hidden">
      <Container>
        <SectionHeading
          eyebrow="ESTÉTICA &amp; EXPERIÊNCIA"
          title="QUANDO O GELO TAMBÉM FAZ PARTE DO DESIGN DO DRINK."
          subtitle="O clear ice pode ser utilizado como parte da construção estética de uma bebida, aumentando a percepção de cuidado e apresentação."
        />

        <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Grid de Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {COCKTAIL_CARDS.map((card, idx) => (
              <Reveal key={card.title} delay={0.05 * idx} className="h-full">
                <div className="flex h-full flex-col justify-between rounded-2xl border border-[#C6A15B]/25 bg-white p-5 shadow-sm transition-all duration-200 hover:border-[#C6A15B] hover:shadow-soft ice-refraction-card">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold-gradient text-[#111111] shadow-sm">
                        <i className={`bi ${card.icon} text-base`} aria-hidden="true" />
                      </div>
                      <h3 className="font-display text-base font-bold uppercase text-[#111111]">
                        {card.title}
                      </h3>
                    </div>
                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#555555]">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Imagem de Destaque */}
          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="relative mx-auto max-w-md lg:max-w-none overflow-hidden rounded-3xl border border-[#C6A15B]/40 bg-white p-2.5 shadow-xl">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <img
                    src="/images/cocktail_old_fashioned.jpg"
                    alt="Old Fashioned elegante com grande cubo de gelo translúcido lapidado"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/30 bg-white/90 p-3.5 backdrop-blur-md">
                    <span className="text-xs font-bold uppercase text-[#9C7B3C] block">
                      Harmonia Visual
                    </span>
                    <span className="text-xs font-medium text-[#111111]">
                      Transparência e reflexos que elevam o status de qualquer coquetel clássico ou autoral.
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
