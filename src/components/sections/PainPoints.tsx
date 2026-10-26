import { painPoints } from '../../data/content'
import { CourseCta } from '../ui/CourseButton'

export function PainPoints() {
  return (
    <section className="border-y border-border bg-card py-16 sm:py-20">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-12">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-primary sm:tracking-[0.24em]">
            Uma oportunidade em suas mãos
          </p>
          <h2 className="display-title text-[2.35rem] text-foreground min-[380px]:text-4xl sm:text-6xl lg:text-7xl">
            Você está deixando dinheiro derreter?
          </h2>
        </div>
        <div className="space-y-3">
          {painPoints.map((text, i) => (
            <div key={text} className="flex gap-3 border-b border-border py-4 sm:gap-4">
              <span className="font-display text-3xl text-primary">0{i + 1}</span>
              <p className="text-base font-medium leading-relaxed text-foreground/85">{text}</p>
            </div>
          ))}
          <div className="pt-5">
            <CourseCta />
          </div>
        </div>
      </div>
    </section>
  )
}
