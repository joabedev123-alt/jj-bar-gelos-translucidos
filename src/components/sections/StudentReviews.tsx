import { studentReviews } from '../../data/content'

export function StudentReviews() {
  return (
    <section id="alunos" className="border-y border-border bg-card py-16 sm:py-24">
      <div className="section-shell">
        <div className="mb-8 flex items-center justify-center gap-4 sm:mb-12 sm:gap-6">
          <span className="hidden h-px w-16 bg-primary/60 sm:block" aria-hidden="true" />
          <h2 className="display-title text-center text-[2.35rem] text-foreground min-[380px]:text-4xl sm:text-6xl">
            O que dizem nossos alunos
          </h2>
          <span className="hidden h-px w-16 bg-primary/60 sm:block" aria-hidden="true" />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {studentReviews.map(({ initials, name, role, text }) => (
            <figure key={name} className="flex flex-col border border-border bg-background p-5 sm:p-7">
              {/* O glifo ” fica no topo da caixa da fonte; a margem negativa remove o vazio abaixo dele. */}
              <span className="-mb-5 font-display text-6xl leading-none text-primary" aria-hidden="true">
                ”
              </span>
              <blockquote className="flex-1 text-sm leading-7 text-foreground/75">“{text}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-4 border-t border-border pt-5">
                <span
                  className="grid size-12 shrink-0 place-items-center rounded-full border border-primary bg-surface-raised font-display text-xl text-primary"
                  aria-hidden="true"
                >
                  {initials}
                </span>
                <span className="min-w-0">
                  <strong className="block text-sm">{name}</strong>
                  <span className="block text-xs uppercase tracking-wide text-muted-foreground">{role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
