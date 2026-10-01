import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { TARGET_AUDIENCE } from '../../lib/constants'

export default function TargetAudience() {
  return (
    <section className="relative bg-[#FAF8F3] py-16 sm:py-24 lg:py-28 overflow-hidden">
      <Container>
        <SectionHeading
          eyebrow="PÚBLICO-ALVO"
          title="ESSE TREINAMENTO É PARA QUEM QUER ELEVAR O NÍVEL DA APRESENTAÇÃO."
          subtitle="Do profissional que vive da coquetelaria ao entusiasta que busca excelência estética no seu home bar."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {TARGET_AUDIENCE.map((audience, idx) => (
            <Reveal key={audience.title} delay={0.05 * idx} className="h-full">
              <div className="flex h-full flex-col justify-between rounded-2xl border border-[#C6A15B]/25 bg-white p-6 shadow-sm transition-all duration-200 hover:border-[#C6A15B] hover:shadow-soft ice-refraction-card">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-gradient text-[#111111] shadow-sm mb-4">
                    <i className={`bi ${audience.icon} text-lg`} aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-base sm:text-lg font-bold uppercase text-[#111111]">
                    {audience.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#555555]">
                    {audience.description}
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
