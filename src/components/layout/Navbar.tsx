import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Container from '../ui/Container'
import CtaButton from '../ui/CtaButton'
import { NAV_LINKS, CHECKOUT_URL } from '../../lib/constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-[#C6A15B]/20 bg-white/95 backdrop-blur-md shadow-sm'
          : 'border-b border-transparent bg-white/85 backdrop-blur-sm'
      }`}
    >
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <a href="#top" className="flex items-center gap-2.5 cursor-pointer">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C6A15B] font-display text-sm font-bold text-[#9C7B3C] sm:h-10 sm:w-10">
            JJ
          </span>
          <span className="font-display text-sm font-semibold leading-tight text-[#111111] sm:text-base">
            JJ Bar &amp; Barista
            <span className="block text-[10px] font-sans font-normal uppercase tracking-[0.2em] text-[#9C7B3C]">
              Academy
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 xl:gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="cursor-pointer text-sm font-medium text-[#111111]/80 transition-colors duration-200 hover:text-[#9C7B3C]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CtaButton href={CHECKOUT_URL} size="md" icon={null}>
            QUERO APRENDER
          </CtaButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#C6A15B]/40 text-[#111111] lg:hidden"
        >
          <i className={`bi ${open ? 'bi-x-lg' : 'bi-list'} text-xl`} aria-hidden="true" />
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="max-h-[calc(100dvh-4rem)] overflow-x-hidden overflow-y-auto overscroll-contain border-t border-[#C6A15B]/20 bg-[#FAF8F3] lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="cursor-pointer rounded-lg px-3 py-3 text-base font-medium text-[#111111] transition-colors duration-200 hover:bg-[#D4AF37]/10 hover:text-[#9C7B3C]"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2">
                <CtaButton href={CHECKOUT_URL} size="md" icon={null} className="w-full">
                  QUERO APRENDER
                </CtaButton>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
