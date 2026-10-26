import { historyImages } from '../../data/content'
import { Picture } from '../ui/Picture'
import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  return (
    <section id="sobre" className="py-16 sm:py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Uma trajetória de verdade">Quem somos nós</SectionHeading>
        <div className="grid gap-10 lg:grid-cols-2">
          <p className="text-lg leading-8 text-foreground/75">
            A <strong className="text-foreground">JJ Bar e Barista Store &amp; Academy</strong> é uma escola
            especializada em bartenders, baristas e empreendedores. Nasceu da experiência em cafeterias, bares e
            restaurantes e se especializou em eventos, acumulando mais de{' '}
            <strong className="text-primary">7 mil contratos</strong> no Brasil e no exterior, incluindo grandes
            ocasiões como a Copa do Mundo, além de formar milhares de alunos no segmento de alimentos e bebidas.
          </p>
          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="border-l-2 border-primary p-4 sm:p-5">
              <span className="font-display text-4xl text-primary sm:text-5xl">7 mil+</span>
              <p className="text-xs uppercase text-muted-foreground">contratos</p>
            </div>
            <div className="border-l-2 border-primary p-4 sm:p-5">
              <span className="font-display text-4xl text-primary sm:text-5xl">Brasil</span>
              <p className="text-xs uppercase text-muted-foreground">e exterior</p>
            </div>
          </div>
        </div>
        <div className="mt-10 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-1 no-scrollbar sm:mx-[calc(50%-50vw)] sm:mt-14 sm:grid sm:w-[min(1440px,calc(100vw-2rem))] sm:grid-cols-3 sm:gap-5 sm:overflow-visible sm:pb-0">
          {historyImages.map((picture, i) => (
            <div key={picture.img.src} className="aspect-square w-[68%] shrink-0 snap-start overflow-hidden bg-card sm:aspect-[4/3] sm:w-auto sm:shrink">
              <Picture
                picture={picture}
                sizes="(min-width: 1504px) 470px, (min-width: 640px) 33vw, 68vw"
                alt={`História da JJ Bar e Barista ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 sm:hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
