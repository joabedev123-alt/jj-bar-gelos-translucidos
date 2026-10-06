import { curriculum } from '../../data/content'
import { SectionHeading } from '../ui/SectionHeading'

export function Curriculum() {
  return (
    <section id="conteudo" className="bg-card py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Formação completa">O que você vai aprender</SectionHeading>
        <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {curriculum.map((topic, i) => (
            <div key={topic} className="flex min-h-28 gap-4 bg-card p-6">
              <span className="font-display text-4xl text-primary/70">{String(i + 1).padStart(2, '0')}</span>
              <p className="pt-2 text-sm font-semibold uppercase leading-relaxed">{topic}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
