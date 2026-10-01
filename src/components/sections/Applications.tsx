import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { APPLICATIONS } from '../../lib/constants'

export default function Applications() {
  return (
    <section id="aplicacoes" className="relative bg-[#FAF8F3] py-16 sm:py-24 lg:py-28 overflow-hidden">
      <Container>
        <SectionHeading
          eyebrow="MERCADO &amp; AMBIENTES"
          title="ONDE VOCÊ PODE UTILIZAR GELOS TRANSLÚCIDOS?"
          subtitle="O domínio do clear ice amplia as oportunidades profissionais e agrega valor imediato a diferentes setores da gastronomia."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 sm:gap-6">
          {APPLICATIONS.map((app, idx) => (
            <Reveal key={app.title} delay={0.04 * idx} className="h-full">
              <div className="flex h-full items-center gap-4 rounded-2xl border border-[#C6A15B]/20 bg-white p-5 shadow-sm transition-all duration-200 hover:border-[#C6A15B] hover:shadow-soft ice-refraction-card">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-gradient text-[#111111] shadow-sm">
                  <i className={`bi ${app.icon} text-lg`} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-sm sm:text-base font-bold uppercase text-[#111111]">
                    {app.title}
                  </h3>
                  <span className="text-xs text-[#777777]">Apresentação de alto padrão</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
