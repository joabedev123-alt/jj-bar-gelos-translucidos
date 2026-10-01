import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { CHECKOUT_URL } from '../../lib/constants'

type Variant = 'primary' | 'outline' | 'dark'
type Size = 'lg' | 'md' | 'sm'

const variants: Record<Variant, string> = {
  primary:
    'bg-gold-gradient text-[#111111] font-bold shadow-gold hover:brightness-105 hover:shadow-goldLg focus-visible:ring-gold',
  outline:
    'bg-transparent text-[#111111] border border-[#C6A15B]/70 hover:bg-[#D4AF37]/15 focus-visible:ring-gold',
  dark:
    'bg-[#111111] text-[#FFFFFF] border border-[#C6A15B]/40 hover:bg-[#222222] focus-visible:ring-gold',
}

const sizes: Record<Size, string> = {
  lg: 'min-h-12 px-6 py-3.5 text-sm sm:px-8 sm:py-4 sm:text-base md:text-lg font-bold tracking-wide',
  md: 'min-h-11 px-5 py-3 text-sm sm:px-6 sm:text-sm md:text-base font-semibold tracking-wide',
  sm: 'min-h-9 px-4 py-2 text-xs sm:text-sm font-semibold',
}

export default function CtaButton({
  children,
  variant = 'primary',
  size = 'lg',
  className = '',
  icon = 'bi-arrow-right-circle-fill',
  href = CHECKOUT_URL,
}: {
  children: ReactNode
  variant?: Variant
  size?: Size
  className?: string
  icon?: string | null
  href?: string
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15 }}
      className={`group relative inline-flex w-full select-none items-center justify-center gap-2.5 overflow-hidden rounded-full text-center font-sans uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:w-auto sm:gap-3 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <span className="min-w-0 break-words">{children}</span>
      {icon && (
        <i
          className={`bi ${icon} shrink-0 text-lg sm:text-xl transition-transform duration-200 group-hover:translate-x-1`}
          aria-hidden="true"
        />
      )}
    </motion.a>
  )
}
