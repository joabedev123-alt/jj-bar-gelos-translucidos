import type { ReactNode } from 'react'
import Reveal from './Reveal'

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}: {
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
  align?: 'center' | 'left'
  light?: boolean
}) {
  const alignClass = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start'

  return (
    <div className={`flex w-full max-w-3xl flex-col gap-3 sm:gap-4 ${alignClass}`}>
      {eyebrow && (
        <Reveal>
          <span className="inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-[#C6A15B]/40 bg-[#FAF8F3] px-3.5 py-1.5 text-center text-[11px] font-semibold uppercase leading-relaxed tracking-[0.16em] text-[#9C7B3C] shadow-sm sm:px-4 sm:text-xs sm:tracking-[0.2em]">
            <i className="bi bi-gem text-[10px]" aria-hidden="true" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.06}>
        <h2
          className={`break-words font-display text-[1.75rem] font-bold uppercase leading-[1.14] min-[375px]:text-3xl sm:text-4xl lg:text-5xl ${
            light ? 'text-[#111111]' : 'text-[#111111]'
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.12}>
          <div className="text-[15px] leading-relaxed text-[#444444] sm:text-lg">
            {subtitle}
          </div>
        </Reveal>
      )}
    </div>
  )
}
