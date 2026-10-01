import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import CtaButton from '../ui/CtaButton'
import { CHECKOUT_URL, PRECO_GELOS, PRECO_ANTERIOR_GELOS } from '../../lib/constants'

export default function PricingSection() {
  const hasAnchorPrice = Boolean(PRECO_ANTERIOR_GELOS)

  return (
    <section className="relative bg-white py-16 sm:py-24 lg:py-28 border-y border-[#C6A15B]/15 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.07]"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#C6A15B]/40 bg-[#FAF8F3] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#9C7B3C] shadow-sm">
              <i className="bi bi-tag-fill text-[11px]" aria-hidden="true" />
              INVESTIMENTO &amp; ACESSO
            </span>
          </Reveal>

          <Reveal delay={0.08} className="mt-4">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase text-[#111111]">
              INSCREVA-SE NO <span className="text-gradient-gold">CURSO DE GELOS TRANSLÚCIDOS</span>
            </h2>
          </Reveal>

          <Reveal delay={0.14} className="mt-8">
            <div className="relative overflow-hidden rounded-3xl border-2 border-[#C6A15B] bg-gradient-to-b from-white via-[#FAF8F3] to-[#F7EBCB]/40 p-6 sm:p-10 shadow-2xl">
              {/* Badge de Oferta */}
              <div className="inline-flex items-center gap-1.5 rounded-full bg-gold-gradient px-4 py-1 text-xs font-extrabold uppercase tracking-wider text-[#111111] shadow-sm mb-6">
                <i className="bi bi-lightning-charge-fill" aria-hidden="true" />
                CONDIÇÃO ESPECIAL DE LANÇAMENTO
              </div>

              {/* Preços com Ancoragem */}
              <div className="space-y-1">
                {hasAnchorPrice && (
                  <p className="text-sm font-semibold uppercase tracking-wider text-[#777777]">
                    De <span className="line-through">{PRECO_ANTERIOR_GELOS}</span> por apenas:
                  </p>
                )}
                <div className="flex items-center justify-center gap-2">
                  <span className="font-display text-4xl sm:text-6xl font-black text-[#111111] tracking-tight">
                    {PRECO_GELOS}
                  </span>
                </div>
                <p className="text-xs text-[#666666] pt-1">
                  Acesso completo e imediato às aulas gravadas e materiais
                </p>
              </div>

              {/* Benefícios Inclusos */}
              <div className="my-8 divide-y divide-[#C6A15B]/20 border-y border-[#C6A15B]/20 py-4 text-left text-sm text-[#333333]">
                <div className="flex items-center gap-3 py-2.5">
                  <i className="bi bi-check2-circle text-lg text-[#9C7B3C]" aria-hidden="true" />
                  <span className="font-medium">10 módulos práticos e passo a passo</span>
                </div>
                <div className="flex items-center gap-3 py-2.5">
                  <i className="bi bi-check2-circle text-lg text-[#9C7B3C]" aria-hidden="true" />
                  <span className="font-medium">Método de congelamento direcional e desmolde seguro</span>
                </div>
                <div className="flex items-center gap-3 py-2.5">
                  <i className="bi bi-check2-circle text-lg text-[#9C7B3C]" aria-hidden="true" />
                  <span className="font-medium">Técnicas de corte, formatos (cubo, esfera, spear) e conservação</span>
                </div>
                <div className="flex items-center gap-3 py-2.5">
                  <i className="bi bi-check2-circle text-lg text-[#9C7B3C]" aria-hidden="true" />
                  <span className="font-medium">Certificado de participação JJ Bar &amp; Barista Academy</span>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col items-center gap-3">
                <CtaButton
                  href={CHECKOUT_URL}
                  size="lg"
                  className="w-full"
                  icon="bi-arrow-right-circle-fill"
                >
                  QUERO APRENDER CLEAR ICE
                </CtaButton>
                <span className="text-xs text-[#777777] flex items-center gap-1.5">
                  <i className="bi bi-lock-fill text-[#9C7B3C]" aria-hidden="true" />
                  Compra realizada através do checkout oficial.
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
