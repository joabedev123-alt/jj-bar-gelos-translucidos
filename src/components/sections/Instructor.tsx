import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { SOCIAL } from '../../lib/constants'

export default function Instructor() {
  return (
    <section className="relative bg-white py-16 sm:py-24 lg:py-28 border-y border-[#C6A15B]/15">
      <Container>
        <SectionHeading
          eyebrow="INSTRUTOR"
          title="APRENDA COM QUEM VIVE O UNIVERSO DO BAR."
          subtitle="Formação prática e direta ao ponto, desenvolvida por quem atua na formação e no serviço de coquetelaria."
        />

        <div className="mt-12 mx-auto max-w-4xl overflow-hidden rounded-3xl border border-[#C6A15B]/30 bg-[#FAF8F3] p-6 sm:p-10 shadow-soft">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-10">
            {/* Foto Real */}
            <div className="md:col-span-5">
              <Reveal>
                <div className="relative mx-auto max-w-xs overflow-hidden rounded-2xl border-2 border-[#C6A15B]/40 bg-white p-2 shadow-md">
                  <div className="aspect-[3/4] overflow-hidden rounded-xl">
                    <img
                      src="/images/felipe martins.jpeg"
                      alt="Felipe Martins - JJ Bar & Barista Academy"
                      className="h-full w-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Biografia */}
            <div className="flex flex-col items-start md:col-span-7">
              <Reveal delay={0.1}>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#9C7B3C]">
                  JJ Bar &amp; Barista Academy
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-[#111111] mt-1">
                  FELIPE MARTINS
                </h3>
              </Reveal>

              <Reveal delay={0.16} className="mt-4 space-y-3.5 text-sm sm:text-base leading-relaxed text-[#444444]">
                <p>
                  Felipe Martins atua no universo de bar, café, eventos e formação profissional através da JJ Bar &amp; Barista Academy.
                </p>
                <p>
                  Neste treinamento, o conhecimento prático é aplicado ao processo de produção e utilização de gelos translúcidos dentro da coquetelaria.
                </p>
              </Reveal>

              <Reveal delay={0.22} className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={SOCIAL.felipe.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#C6A15B]/50 bg-white px-4 py-2 text-xs font-semibold text-[#111111] shadow-sm transition-all hover:bg-[#FAF8F3] hover:text-[#9C7B3C]"
                >
                  <i className="bi bi-instagram text-[#9C7B3C]" aria-hidden="true" />
                  {SOCIAL.felipe.handle}
                </a>
                <a
                  href={SOCIAL.academy.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#C6A15B]/50 bg-white px-4 py-2 text-xs font-semibold text-[#111111] shadow-sm transition-all hover:bg-[#FAF8F3] hover:text-[#9C7B3C]"
                >
                  <i className="bi bi-instagram text-[#9C7B3C]" aria-hidden="true" />
                  {SOCIAL.academy.handle}
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
