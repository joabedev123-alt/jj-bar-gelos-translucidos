import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { PROCESS_STEPS } from '../../lib/constants'

export default function ProcessFlow() {
  return (
    <section className="relative bg-[#FAF8F3] py-16 sm:py-24 lg:py-28 overflow-hidden">
      <Container>
        <SectionHeading
          eyebrow="DA ÁGUA AO GELO CRISTALINO"
          title="ENTENDA O PROCESSO POR TRÁS DO CLEAR ICE."
          subtitle="Do preparo inicial ao armazenamento correto no bar: cada etapa possui técnica e método específicos."
        />

        {/* Imagem do Bartender Cortando o Bloco */}
        <Reveal delay={0.12} className="mt-10 sm:mt-12">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-[#C6A15B]/30 bg-white p-2.5 shadow-xl">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
              <img
                src="/images/bartender_cutting_ice.jpg"
                alt="Bartender cortando artesanalmente um bloco de gelo translúcido e cristalino"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/30 bg-white/90 p-3.5 backdrop-blur-md">
                <span className="text-xs font-bold uppercase tracking-wider text-[#9C7B3C] block">
                  Manipulação &amp; Corte Artesanal
                </span>
                <span className="text-xs sm:text-sm font-medium text-[#111111]">
                  Técnicas de segurança e ferramentas adequadas para transformar grandes blocos em cubos e spears impecáveis.
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Fluxo de Etapas (01 a 07) */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6">
          {PROCESS_STEPS.map((step, idx) => (
            <Reveal
              key={step.number}
              delay={0.06 * idx}
              className={`h-full ${idx === 6 ? 'sm:col-span-2 md:col-span-3 lg:col-span-1' : ''}`}
            >
              <div className="flex h-full flex-col justify-between rounded-2xl border border-[#C6A15B]/20 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#C6A15B] hover:shadow-md ice-refraction-card">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl font-black text-[#C6A15B]">
                      {step.number}
                    </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FAF8F3] text-[#9C7B3C]">
                      <i className={`bi ${step.icon} text-lg`} aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="mt-3 font-display text-base font-bold uppercase text-[#111111]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#555555]">
                    {step.description}
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
