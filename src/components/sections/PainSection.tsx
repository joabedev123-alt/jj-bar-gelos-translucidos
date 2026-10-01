import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { PAIN_QUESTIONS } from '../../lib/constants'

export default function PainSection() {
  return (
    <section className="relative bg-white py-16 sm:py-24 lg:py-28 border-y border-[#C6A15B]/15">
      <Container>
        <SectionHeading
          eyebrow="CONSCIÊNCIA &amp; PADRÃO"
          title="O SEU GELO ESTÁ NO MESMO NÍVEL DO SEU DRINK?"
          subtitle="Identifique pontos cegos na apresentação do seu bar que podem estar diminuindo a percepção de valor dos seus clientes."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {PAIN_QUESTIONS.map((question, idx) => (
            <Reveal key={idx} delay={0.06 * idx} className="h-full">
              <div className="flex h-full items-start gap-4 rounded-2xl border border-[#DCE8EC] bg-[#FAF8F3] p-5 sm:p-6 transition-all duration-200 hover:border-[#C6A15B]/60 hover:shadow-soft">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FAF8F3] border border-[#C6A15B]/40 text-[#9C7B3C] shadow-sm">
                  <i className="bi bi-question-lg text-sm font-bold" aria-hidden="true" />
                </span>
                <p className="text-sm sm:text-base font-medium leading-relaxed text-[#222222]">
                  {question}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bloco de Fechamento */}
        <Reveal delay={0.2} className="mt-12">
          <div className="mx-auto max-w-3xl rounded-3xl border-2 border-[#C6A15B]/40 bg-gradient-to-br from-white via-[#FAF8F3] to-[#F7EBCB]/30 p-6 sm:p-10 text-center shadow-soft">
            <i className="bi bi-quote text-3xl text-[#9C7B3C]" aria-hidden="true" />
            <p className="font-display text-lg sm:text-2xl font-bold uppercase leading-snug text-[#111111]">
              Um cocktail premium não é composto apenas pela bebida.
              <br />
              <span className="text-gradient-gold">Cada detalhe participa da experiência. Inclusive o gelo.</span>
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
