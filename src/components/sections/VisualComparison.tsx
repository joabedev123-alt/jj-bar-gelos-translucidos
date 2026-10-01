import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { ICE_COMPARISON } from '../../lib/constants'

export default function VisualComparison() {
  return (
    <section id="o-curso" className="relative bg-white py-16 sm:py-24 lg:py-28 border-y border-[#C6A15B]/15">
      <Container>
        <SectionHeading
          eyebrow="O DETALHE QUE MUDA TUDO"
          title="VOCÊ PODE TER UM ÓTIMO DRINK. MAS UM GELO COMUM PODE MUDAR COMPLETAMENTE A APRESENTAÇÃO."
          subtitle="A percepção de valor de um cocktail começa nos olhos. Entenda o contraste imediato entre o gelo convencional e o clear ice."
        />

        {/* Imagem de Comparação Central */}
        <Reveal delay={0.15} className="mt-10 sm:mt-14">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-[#C6A15B]/30 bg-[#FAF8F3] p-3 shadow-xl">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
              <img
                src="/images/ice_comparison.jpg"
                alt="Comparação lado a lado: Gelo comum esbranquiçado versus Gelo translúcido cristalino"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 rounded-lg bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm sm:top-4 sm:left-4 sm:text-sm">
                Gelo Comum
              </div>
              <div className="absolute top-3 right-3 rounded-lg bg-[#D4AF37]/90 px-3 py-1 text-xs font-bold text-[#111111] backdrop-blur-sm sm:top-4 sm:right-4 sm:text-sm shadow-sm">
                Clear Ice Cristalino
              </div>
            </div>
          </div>
        </Reveal>

        {/* Cards de Comparativo */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 lg:gap-8">
          {/* Card Gelo Comum */}
          <Reveal delay={0.2} className="h-full">
            <div className="flex h-full flex-col rounded-3xl border border-[#DCE8EC] bg-[#FAF8F3]/60 p-6 sm:p-8 transition-all hover:border-[#C6A15B]/30">
              <div className="flex items-center justify-between border-b border-[#E8E1D5] pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-200 text-gray-700">
                    <i className="bi bi-x-circle text-lg" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#333333]">
                    {ICE_COMPARISON.common.title}
                  </h3>
                </div>
                <span className="rounded-full bg-gray-200/80 px-3 py-1 text-[11px] font-semibold uppercase text-gray-700">
                  {ICE_COMPARISON.common.badge}
                </span>
              </div>

              <ul className="mt-6 space-y-3.5 text-sm sm:text-base text-[#555555]">
                {ICE_COMPARISON.common.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <i className="bi bi-dash-circle text-gray-400 mt-0.5 shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Card Gelo Translúcido */}
          <Reveal delay={0.26} className="h-full">
            <div className="flex h-full flex-col rounded-3xl border-2 border-[#C6A15B]/50 bg-gradient-to-br from-white to-[#FAF8F3] p-6 shadow-soft sm:p-8 relative overflow-hidden">
              <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#E7D5A7]/30 blur-2xl" />
              
              <div className="flex items-center justify-between border-b border-[#C6A15B]/30 pb-4 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-gradient text-[#111111] shadow-sm">
                    <i className="bi bi-check2-circle text-xl" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#111111]">
                    {ICE_COMPARISON.clear.title}
                  </h3>
                </div>
                <span className="rounded-full bg-[#FAF8F3] border border-[#C6A15B]/40 px-3 py-1 text-[11px] font-bold uppercase text-[#9C7B3C] shadow-sm">
                  {ICE_COMPARISON.clear.badge}
                </span>
              </div>

              <ul className="mt-6 space-y-3.5 text-sm sm:text-base text-[#111111] relative z-10 font-medium">
                {ICE_COMPARISON.clear.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <i className="bi bi-gem text-[#9C7B3C] mt-0.5 shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
