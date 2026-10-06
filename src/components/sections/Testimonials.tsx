import { Quote, Star } from 'lucide-react'
import { testimonials } from '../../data/content'
import { SectionHeading } from '../ui/SectionHeading'

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Resultados que inspiram">Quem aprende, transforma</SectionHeading>
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map(({ name, text }) => (
            <article key={name} className="border border-border bg-card p-7">
              <Quote className="mb-6 text-primary" aria-hidden="true" />
              <p className="min-h-32 text-sm leading-7 text-foreground/75">“{text}”</p>
              <div className="mt-5 flex items-center justify-between border-t border-border pt-5">
                <strong className="text-sm">{name}</strong>
                <span className="flex text-primary">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} className="size-3 fill-current" aria-hidden="true" />
                  ))}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
