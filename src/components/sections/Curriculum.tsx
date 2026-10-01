import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { MODULES } from '../../lib/constants'

export default function Curriculum() {
  return (
    <section id="conteudo" className="relative bg-[#FAF8F3] py-16 sm:py-24 lg:py-28 overflow-hidden">
      <Container>
        <SectionHeading
          eyebrow="GRADE COMPLETA"
          title="DO BLOCO AO COPO. TUDO O QUE VOCÊ PRECISA ENTENDER SOBRE GELOS TRANSLÚCIDOS."
          subtitle="Um cronograma estruturado, prático e didático desenvolvido para você dominar cada etapa com consistência e segurança."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 gap-y-5 lg:gap-6">
          {MODULES.map((module, idx) => (
            <Reveal key={module.number} delay={0.04 * idx} className="h-full">
              <div className="flex h-full items-start gap-4 rounded-2xl border border-[#C6A15B]/25 bg-white p-5 sm:p-6 shadow-sm transition-all duration-200 hover:border-[#C6A15B] hover:shadow-soft ice-refraction-card">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-gradient font-display text-sm font-bold text-[#111111] shadow-sm">
                  {module.number}
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-base sm:text-lg font-bold uppercase text-[#111111]">
                    {module.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm leading-relaxed text-[#555555]">
                    {module.description}
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
