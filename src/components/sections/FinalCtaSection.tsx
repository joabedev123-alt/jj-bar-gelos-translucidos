import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import CtaButton from '../ui/CtaButton'
import { CHECKOUT_URL, PRECO_GELOS } from '../../lib/constants'

export default function FinalCtaSection() {
  return (
    <section className="relative bg-gradient-to-b from-white via-[#FAF8F3] to-[#F7EBCB]/30 py-16 sm:py-24 lg:py-28 overflow-hidden">
      <Container>
        <div className="mx-auto max-w-5xl rounded-3xl border-2 border-[#C6A15B]/40 bg-white p-6 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden">
          {/* Brilho decorativo */}
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#E7D5A7]/40 blur-3xl"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12 relative z-10">
            {/* Lado da Imagem */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <Reveal>
                <div className="relative mx-auto max-w-sm lg:max-w-none overflow-hidden rounded-2xl border border-[#C6A15B]/30 bg-[#FAF8F3] p-2 shadow-lg">
                  <div className="aspect-square overflow-hidden rounded-xl">
                    <img
                      src="/images/macro_clear_ice.jpg"
                      alt="Cubo de gelo translúcido lapidado"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Lado da Mensagem & CTA */}
            <div className="flex flex-col items-start lg:col-span-7 order-1 lg:order-2">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#C6A15B]/40 bg-[#FAF8F3] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#9C7B3C] shadow-sm">
                  <i className="bi bi-gem" aria-hidden="true" />
                  INSCRIÇÃO OFICIAL
                </span>
              </Reveal>

              <Reveal delay={0.08} className="mt-4">
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black uppercase leading-tight text-[#111111]">
                  ELEVE A APRESENTAÇÃO DOS SEUS DRINKS.
                </h2>
              </Reveal>

              <Reveal delay={0.14} className="mt-3">
                <p className="text-sm sm:text-base font-semibold uppercase tracking-wider text-[#9C7B3C]">
                  DO GELO COMUM AO CLEAR ICE. APRENDA O PROCESSO.
                </p>
              </Reveal>

              <Reveal delay={0.2} className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
                <div>
                  <span className="block text-xs uppercase text-[#777777]">Investimento único</span>
                  <span className="font-display text-3xl font-extrabold text-[#111111]">{PRECO_GELOS}</span>
                </div>
                <div className="w-full sm:w-auto">
                  <CtaButton
                    href={CHECKOUT_URL}
                    size="lg"
                    className="w-full sm:w-auto"
                    icon="bi-arrow-right-circle-fill"
                  >
                    QUERO APRENDER GELOS TRANSLÚCIDOS
                  </CtaButton>
                </div>
              </Reveal>

              <Reveal delay={0.26} className="mt-4">
                <span className="text-xs text-[#777777] flex items-center gap-1.5">
                  <i className="bi bi-shield-check text-[#9C7B3C]" aria-hidden="true" />
                  Acesso imediato pela plataforma oficial da JJ Bar &amp; Barista Academy.
                </span>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
