import { gallery } from '../../data/content'
import { Picture } from '../ui/Picture'
import { SectionHeading } from '../ui/SectionHeading'

export function Gallery() {
  return (
    <section id="galeria" className="py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Possibilidades reais">O gelo vira o protagonista</SectionHeading>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item) => (
            <figure key={item.title} className="group relative aspect-[4/3] overflow-hidden bg-card">
              {/* Imagem 1,875:1 cobrindo caixa 4:3 → largura renderizada ≈ 1,41× a largura do card. */}
              <Picture
                picture={item.image}
                sizes="(min-width: 1180px) 550px, (min-width: 1024px) 47vw, (min-width: 640px) 70vw, 141vw"
                alt={item.title}
                width={1920}
                height={1024}
                loading="lazy"
                className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${item.position}`}
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/75 to-transparent p-5 pt-16">
                <strong className="block text-sm uppercase text-foreground">{item.title}</strong>
                <span className="text-xs text-primary">{item.subtitle}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
