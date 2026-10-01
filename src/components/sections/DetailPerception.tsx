import Container from '../ui/Container'
import Reveal from '../ui/Reveal'

export default function DetailPerception() {
  return (
    <section className="relative bg-gradient-to-b from-[#F7EBCB]/40 via-[#FAF8F3] to-[#F7EBCB]/30 py-16 sm:py-24 lg:py-28 border-y border-[#C6A15B]/25 overflow-hidden">
      <Container>
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Lado da Imagem */}
            <div className="lg:col-span-5">
              <Reveal>
                <div className="relative mx-auto max-w-sm lg:max-w-none overflow-hidden rounded-3xl border-2 border-[#C6A15B]/50 bg-white p-2.5 shadow-2xl">
                  <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                    <img
                      src="/images/ice_sphere_whisky.jpg"
                      alt="Esfera de gelo cristalina em copo de whisky lapidado"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Lado da Mensagem */}
            <div className="flex flex-col items-start lg:col-span-7">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#C6A15B]/40 bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#9C7B3C] shadow-sm">
                  <i className="bi bi-eye" aria-hidden="true" />
                  PERCEPÇÃO &amp; VALOR
                </span>
              </Reveal>

              <Reveal delay={0.08} className="mt-4">
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase leading-[1.18] text-[#111111]">
                  O CLIENTE PODE NÃO SABER COMO O GELO FOI FEITO.{' '}
                  <span className="text-gradient-gold">
                    MAS ELE PERCEBE QUANDO EXISTE CUIDADO NOS DETALHES.
                  </span>
                </h2>
              </Reveal>

              <Reveal delay={0.16} className="mt-5 space-y-3.5 text-base sm:text-lg leading-relaxed text-[#444444]">
                <p>
                  Apresentação também comunica qualidade.
                </p>
                <p>
                  E pequenos detalhes podem mudar completamente a percepção de uma experiência gastronômica e sensorial.
                </p>
              </Reveal>

              <Reveal delay={0.22} className="mt-6 flex items-center gap-3 rounded-2xl border border-[#C6A15B]/30 bg-white p-4 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold-gradient text-[#111111]">
                  <i className="bi bi-stars text-lg" aria-hidden="true" />
                </div>
                <p className="text-xs sm:text-sm font-medium text-[#222222]">
                  O gelo translúcido transforma um drink comum em uma peça de arte e valoriza sua assinatura como profissional.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
