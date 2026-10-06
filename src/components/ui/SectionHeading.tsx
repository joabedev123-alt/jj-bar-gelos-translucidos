import type { ReactNode } from 'react'

type SectionHeadingProps = {
  eyebrow: string
  children: ReactNode
}

export function SectionHeading({ eyebrow, children }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-primary">{eyebrow}</p>
      <h2 className="display-title text-4xl text-foreground sm:text-6xl lg:text-7xl">{children}</h2>
    </div>
  )
}
