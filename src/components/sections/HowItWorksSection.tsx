import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import CtaButton from '../ui/CtaButton'
import { HOW_IT_WORKS, CHECKOUT_URL } from '../../lib/constants'

export default function HowItWorksSection() {
  return (
    <section className="relative bg-[#FAF8F3] py-16 sm:py-24 lg:py-28 overflow-hidden">
      <Container>
        <SectionHeading
          eyebrow="PASSO A PASSO"
          title="SE VOCÊ JÁ CUIDA DO DRINK, POR QUE NÃO CUIDAR TAMBÉM DO GELO?"
          subtitle="Aprenda o processo por trás dos gelos translúcidos e comece a transformar esse elemento em parte da experiência visual dos seus cocktails."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HOW_IT_WORKS.map((step, idx) => (
            <Reveal key={step.number} delay={0.06 * idx} className="h-full">
              <div className="flex h-full flex-col justify-between rounded-2xl border border-[#C6A15B]/25 bg-white p-6 shadow-sm transition-all duration-200 hover:border-[#C6A15B] hover:shadow-soft ice-refraction-card">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-3xl font-black text-[#C6A15B]">
                      {step.number}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FAF8F3] text-[#9C7B3C]">
                      <i className={`bi ${step.icon} text-lg`} aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold uppercase text-[#111111]">
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

        <Reveal delay={0.3} className="mt-12 text-center">
          <CtaButton
            href={CHECKOUT_URL}
            size="lg"
            className="w-full sm:w-auto"
            icon="bi-arrow-right-circle-fill"
          >
            QUERO COMEÇAR AGORA
          </CtaButton>
        </Reveal>
      </Container>
    </section>
  )
}
