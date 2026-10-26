import { gallery } from '../../data/content'
import { Picture } from '../ui/Picture'
import { SectionHeading } from '../ui/SectionHeading'

export function Gallery() {
  return (
    <section id="galeria" className="py-16 sm:py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Possibilidades reais">O gelo vira o protagonista</SectionHeading>
        <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-1 no-scrollbar sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
          {gallery.map((item) => (
            <figure key={item.title} className="group relative aspect-[4/3] w-[82%] shrink-0 snap-start overflow-hidden bg-card sm:w-auto sm:shrink">
              <Picture
                picture={item.image}
                sizes="(min-width: 1180px) 380px, (min-width: 1024px) 31vw, (min-width: 640px) 48vw, 82vw"
                alt={item.title}
                width={1920}
                height={1024}
                loading="lazy"
                className={`h-full w-full object-cover transition duration-500 sm:group-hover:scale-105 ${item.position}`}
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
