import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { checkoutUrl } from '../../data/content'

// Equivalente ao <Button variant="gold" size="course"> do projeto original.
const courseButtonClass =
  'inline-flex w-full max-w-full items-center justify-center gap-2 whitespace-normal cursor-pointer text-center transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow-gold hover:bg-primary-bright h-auto min-h-14 rounded-sm px-5 py-3 text-sm font-bold uppercase tracking-wide sm:w-auto sm:whitespace-nowrap sm:px-10 sm:py-0'

type CourseButtonProps = {
  href: string
  children: ReactNode
  className?: string
}

export function CourseButton({ href, children, className = '' }: CourseButtonProps) {
  const external = href.startsWith('http')
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`${className} ${courseButtonClass}`}
    >
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
    <CourseButton href={checkoutUrl} className="rounded-md text-sm font-medium">
      Aprenda gelos translúcidos
    </CourseButton>
  )
}
