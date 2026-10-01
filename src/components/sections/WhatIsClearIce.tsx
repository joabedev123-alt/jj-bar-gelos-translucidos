import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import { APPLICATIONS } from '../../lib/constants'

export default function WhatIsClearIce() {
  return (
    <section className="relative bg-[#FAF8F3] py-16 sm:py-24 lg:py-28 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Lado da Imagem Macro */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <Reveal>
              <div className="relative mx-auto max-w-md lg:max-w-none overflow-hidden rounded-3xl border border-[#C6A15B]/30 bg-white p-2.5 shadow-xl">
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <img
                    src="/images/macro_clear_ice.jpg"
                    alt="Macro detalhe de um cubo de gelo cristalino e translúcido lapidado"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/40 bg-white/90 p-3 backdrop-blur-md">
                    <p className="text-xs font-semibold text-[#111111]">
                      <span className="text-[#9C7B3C] font-bold">Pureza Óptica:</span> Transparência que permite a passagem limpa da luz pelo cocktail.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Lado do Conteúdo */}
          <div className="flex flex-col items-start lg:col-span-6 order-1 lg:order-2">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#C6A15B]/40 bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#9C7B3C] shadow-sm">
                <i className="bi bi-info-circle" aria-hidden="true" />
                CONCEITO &amp; DEFINIÇÃO
              </span>
            </Reveal>

            <Reveal delay={0.08} className="mt-4">
              <h2 className="font-display text-2xl font-bold uppercase leading-tight text-[#111111] min-[375px]:text-3xl sm:text-4xl">
                AFINAL, O QUE É <span className="text-gradient-gold">GELO TRANSLÚCIDO?</span>
              </h2>
            </Reveal>

            <Reveal delay={0.14} className="mt-5 space-y-4 text-base leading-relaxed text-[#444444] sm:text-lg">
              <p>
                <strong className="text-[#111111] font-semibold">Clear ice</strong> é o gelo produzido com técnicas que reduzem significativamente a aparência esbranquiçada e o acúmulo visual de bolhas no interior do gelo.
              </p>
              <p>
                O resultado é um gelo muito mais limpo, transparente e sofisticado, que se comporta como uma verdadeira lente ótica dentro do copo, valorizando as cores e nuances da bebida.
              </p>
            </Reveal>

            <Reveal delay={0.2} className="mt-6 w-full">
              <div className="rounded-2xl border border-[#C6A15B]/20 bg-white p-5 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#9C7B3C] mb-3">
                  Ele é utilizado especialmente em:
                </h3>
                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                  {APPLICATIONS.slice(0, 6).map((app, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 rounded-lg bg-[#FAF8F3] px-3 py-2 text-xs font-semibold text-[#222222]"
                    >
                      <i className={`bi ${app.icon} text-[#9C7B3C] text-sm`} aria-hidden="true" />
                      <span className="truncate">{app.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
