import { motion } from 'framer-motion'
import Container from '../ui/Container'
import CtaButton from '../ui/CtaButton'
import Reveal from '../ui/Reveal'
import { CHECKOUT_URL } from '../../lib/constants'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-white via-[#FAF8F3] to-[#FAF8F3] pt-6 pb-16 sm:pt-12 sm:pb-24 lg:pt-16 lg:pb-28">
      {/* Luz ambiente sutil decorativa */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#E7D5A7]/35 via-[#EEF4F7]/40 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          {/* Lado da Copy */}
          <div className="flex flex-col items-start lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#C6A15B]/40 bg-[#FAF8F3] px-3.5 py-1.5 shadow-sm sm:px-4">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#9C7B3C] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#9C7B3C]" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#9C7B3C] sm:text-xs">
                  CURSO DE GELOS TRANSLÚCIDOS
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="mt-4 sm:mt-6">
              <h1 className="font-display text-3xl font-extrabold uppercase leading-[1.12] text-[#111111] min-[400px]:text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem]">
                TRANSFORME GELO EM PARTE DA{' '}
                <span className="text-gradient-gold">EXPERIÊNCIA.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.16} className="mt-4 sm:mt-5">
              <p className="text-base font-semibold uppercase tracking-wide text-[#9C7B3C] sm:text-lg">
                APRENDA A CRIAR GELOS CRISTALINOS, ELEGANTES E PROFISSIONAIS PARA ELEVAR A APRESENTAÇÃO DOS SEUS DRINKS.
              </p>
            </Reveal>

            <Reveal delay={0.22} className="mt-3 sm:mt-4">
              <p className="max-w-xl text-base leading-relaxed text-[#444444] sm:text-lg">
                Descubra os princípios, técnicas e processos por trás do <strong className="font-semibold text-[#111111]">clear ice</strong> e entenda como produzir gelos visualmente limpos, sofisticados e muito mais profissionais.
              </p>
            </Reveal>

            <Reveal delay={0.28} className="mt-8 flex w-full flex-col items-start gap-3 sm:w-auto">
              <CtaButton
                href={CHECKOUT_URL}
                size="lg"
                className="w-full sm:w-auto"
                icon="bi-arrow-right-circle-fill"
              >
                QUERO APRENDER CLEAR ICE
              </CtaButton>
              <span className="flex items-center gap-1.5 text-xs text-[#666666] sm:text-sm">
                <i className="bi bi-shield-check text-[#9C7B3C]" aria-hidden="true" />
                Treinamento online • Acesso após confirmação da inscrição
              </span>
            </Reveal>

            {/* Badges de destaque */}
            <Reveal delay={0.34} className="mt-8 w-full border-t border-[#C6A15B]/20 pt-6 sm:mt-10">
              <div className="grid grid-cols-3 gap-3 sm:gap-6">
                <div className="flex flex-col">
                  <span className="font-display text-lg font-bold text-[#111111] sm:text-2xl">100%</span>
                  <span className="text-xs text-[#666666]">Cristalino &amp; Puro</span>
                </div>
                <div className="flex flex-col border-l border-[#C6A15B]/20 pl-3 sm:pl-6">
                  <span className="font-display text-lg font-bold text-[#111111] sm:text-2xl">10 Módulos</span>
                  <span className="text-xs text-[#666666]">Passo a Passo</span>
                </div>
                <div className="flex flex-col border-l border-[#C6A15B]/20 pl-3 sm:pl-6">
                  <span className="font-display text-lg font-bold text-[#111111] sm:text-2xl">Prático</span>
                  <span className="text-xs text-[#666666]">Do Bloco ao Copo</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Lado da Imagem */}
          <div className="relative lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto max-w-lg lg:max-w-none"
            >
              {/* Moldura dourada e efeito de refração */}
              <div className="relative overflow-hidden rounded-3xl border border-[#C6A15B]/40 bg-white p-2 shadow-2xl">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-[4/3.5] lg:aspect-[4/4.5]">
                  <img
                    src="/images/hero_clear_ice.jpg"
                    alt="Cubo de gelo translúcido e cristalino em copo de whisky Old Fashioned"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="eager"
                  />
                  {/* Overlay gradiente suave */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Badge flutuante sobre a imagem */}
                  <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/30 bg-white/90 p-3.5 backdrop-blur-md shadow-lg sm:bottom-6 sm:left-6 sm:right-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold-gradient text-[#111111] shadow-sm">
                        <i className="bi bi-gem text-lg" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <span className="block text-xs font-bold uppercase tracking-wider text-[#9C7B3C]">
                          Padrão de Excelência
                        </span>
                        <span className="block truncate text-xs font-medium text-[#111111] sm:text-sm">
                          Gelo translúcido lapidado para coquetelaria
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}
