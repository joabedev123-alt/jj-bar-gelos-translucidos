import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'

export default function WhyCloudyIce() {
  return (
    <section id="o-metodo" className="relative bg-white py-16 sm:py-24 lg:py-28 border-y border-[#C6A15B]/15">
      <Container>
        <SectionHeading
          eyebrow="CIÊNCIA &amp; PROCESSO"
          title="POR QUE O GELO COMUM FICA ESBRANQUIÇADO?"
          subtitle="Entenda a física por trás do congelamento tradicional e o segredo do controle direcional."
        />

        {/* Diagrama Didático e Elegante */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Gráfico Visual de Congelamento Tradicional vs Direcional */}
          <Reveal className="h-full">
            <div className="flex h-full flex-col justify-between rounded-3xl border border-[#C6A15B]/30 bg-[#FAF8F3] p-6 sm:p-8 shadow-sm">
              <h3 className="font-display text-lg font-bold text-[#111111] mb-4 flex items-center gap-2">
                <i className="bi bi-diagram-3 text-[#9C7B3C]" aria-hidden="true" />
                A Dinâmica das Bolhas de Ar no Freezer
              </h3>

              <div className="space-y-4 my-auto">
                <div className="rounded-2xl border border-dashed border-[#C6A15B]/40 bg-white p-4">
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#777777] mb-2">
                    <span>1. Congelamento de Fora para Dentro</span>
                    <span className="text-rose-600">Freezer Comum</span>
                  </div>
                  <p className="text-xs text-[#555555] leading-relaxed">
                    A água congela de todas as direções simultaneamente pelas bordas, empurrando o ar e os gases dissolvidos para o centro, onde ficam aprisionados e formam a névoa esbranquiçada.
                  </p>
                </div>

                <div className="rounded-2xl border-2 border-[#C6A15B] bg-gradient-to-r from-white to-[#F7EBCB]/40 p-4 shadow-sm">
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#9C7B3C] mb-2">
                    <span>2. Congelamento Direcional Controlado</span>
                    <span className="text-[#9C7B3C]">Método Clear Ice</span>
                  </div>
                  <p className="text-xs font-medium text-[#111111] leading-relaxed">
                    Isolamos as laterais e o fundo, forçando a água a congelar apenas de cima para baixo. O ar é gradualmente empurrado para a base descartável, gerando um bloco 100% puro e transparente.
                  </p>
                </div>
              </div>

              {/* Destaque */}
              <div className="mt-6 rounded-2xl bg-gold-gradient p-4 text-center shadow-gold">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#111111]">
                  O PRINCÍPIO ESTÁ EM CONTROLAR MELHOR O PROCESSO DE CONGELAMENTO.
                </span>
              </div>
            </div>
          </Reveal>

          {/* Explicação Textual */}
          <Reveal delay={0.15} className="flex flex-col justify-center space-y-5 text-base sm:text-lg leading-relaxed text-[#444444]">
            <p>
              Durante o congelamento convencional, o <strong className="text-[#111111]">ar</strong> e outros elementos presentes na água podem ficar presos dentro do gelo.
            </p>
            <p>
              Isso cria o aspecto branco ou nebuloso que normalmente vemos nos cubos produzidos em freezers tradicionais.
            </p>
            <p>
              Quando você domina a técnica correta de direcionamento térmico e desmolde, você elimina completamente as impurezas visuais e cria blocos cristalinos dignos dos melhores bares do mundo.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3 rounded-2xl bg-[#FAF8F3] p-4 border border-[#C6A15B]/20">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FAF8F3] text-[#9C7B3C] shadow-sm">
                  <i className="bi bi-droplet-half text-base" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-[#111111]">Água &amp; Temperatura</h4>
                  <p className="text-xs text-[#666666] mt-0.5">Equilíbrio exato para evitar fraturas.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl bg-[#FAF8F3] p-4 border border-[#C6A15B]/20">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FAF8F3] text-[#9C7B3C] shadow-sm">
                  <i className="bi bi-arrows-expand text-base" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-[#111111]">Isolamento Térmico</h4>
                  <p className="text-xs text-[#666666] mt-0.5">Controle direcional de cristalização.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
