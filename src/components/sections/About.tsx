import { historyImages } from '../../data/content'
import { Picture } from '../ui/Picture'
import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  return (
    <section id="sobre" className="py-24">
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
            <div className="border-l-2 border-primary p-5">
              <span className="font-display text-5xl text-primary">7 mil+</span>
              <p className="text-xs uppercase text-muted-foreground">contratos</p>
            </div>
            <div className="border-l-2 border-primary p-5">
              <span className="font-display text-5xl text-primary">Brasil</span>
              <p className="text-xs uppercase text-muted-foreground">e exterior</p>
            </div>
          </div>
        </div>
        <div className="mx-[calc(50%-50vw)] mt-14 grid w-[min(1440px,calc(100vw-2rem))] grid-cols-3 gap-2 sm:gap-5">
          {historyImages.map((picture, i) => (
            <div key={picture.img.src} className="aspect-[1/1] overflow-hidden bg-card sm:aspect-[4/3]">
              <Picture
                picture={picture}
                sizes="(min-width: 1504px) 470px, 33vw"
                alt={`História da JJ Bar e Barista ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
