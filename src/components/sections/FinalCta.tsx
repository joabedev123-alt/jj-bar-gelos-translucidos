import { Play } from 'lucide-react'
import { CourseCta } from '../ui/CourseButton'

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-card py-24">
      <div className="section-shell relative z-10 text-center">
        <Play className="mx-auto mb-7 size-10 text-primary" aria-hidden="true" />
        <h2 className="display-title mx-auto max-w-4xl text-5xl sm:text-7xl">
          Pare de servir apenas gelo. Comece a entregar valor.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground">
          O mercado de experiências busca diferenciação. Domine uma técnica que transforma drinks, eventos e a percepção
          de cada cliente.
        </p>
        <div className="mt-8">
          <CourseCta />
        </div>
      </div>
    </section>
  )
}
