import type { ReactNode } from 'react'

type SectionHeadingProps = {
  eyebrow: string
  children: ReactNode
}

export function SectionHeading({ eyebrow, children }: SectionHeadingProps) {
  return (
    <div className="mb-8 max-w-3xl sm:mb-10">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-primary sm:tracking-[0.24em]">{eyebrow}</p>
      <h2 className="display-title text-[2.35rem] text-foreground min-[380px]:text-4xl sm:text-6xl lg:text-7xl">{children}</h2>
    </div>
  )
}
