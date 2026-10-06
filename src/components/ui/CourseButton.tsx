import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'

// Equivalente ao <Button variant="gold" size="course"> do projeto original.
const courseButtonClass =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow-gold hover:bg-primary-bright h-14 rounded-sm px-7 text-sm font-bold uppercase tracking-wide sm:px-10 max-w-full max-[359px]:h-auto max-[359px]:min-h-14 max-[359px]:whitespace-normal max-[359px]:px-5 max-[359px]:py-3 max-[359px]:text-center'

type CourseButtonProps = {
  href: string
  children: ReactNode
  className?: string
}

export function CourseButton({ href, children, className = '' }: CourseButtonProps) {
  return (
    <a href={href} className={`${className} ${courseButtonClass}`}>
      {children} <ArrowRight aria-hidden="true" />
    </a>
  )
}

/**
 * CTA "Aprenda gelos translúcidos". No original este botão carrega também as classes base
 * `rounded-md text-sm font-medium`; pela ordem do CSS gerado, `font-medium` prevalece sobre
 * `font-bold`, então o texto renderiza em peso 500 — mantido aqui para fidelidade visual.
 */
export function CourseCta() {
  return (
    <CourseButton href="#oferta" className="rounded-md text-sm font-medium">
      Aprenda gelos translúcidos
    </CourseButton>
  )
}
