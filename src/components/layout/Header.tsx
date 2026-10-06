import { ArrowRight, Menu, X } from 'lucide-react'
import { useEffect, useState, type MouseEvent } from 'react'
import { navLinks } from '../../data/content'
import { useActiveSection } from '../../hooks/useActiveSection'

// Inclui "oferta" para que nenhum link fique ativo enquanto o usuário está na oferta.
const sectionIds = [...navLinks.map((link) => link.href.slice(1)), 'inicio', 'oferta']

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Trava a rolagem da página e permite fechar com Esc enquanto o menu mobile está aberto.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth >= 1024 && setOpen(false)
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const solid = scrolled || open

  // No mobile a rolagem está travada enquanto o menu está aberto; fecha primeiro e só depois rola até a seção.
  const goTo = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setOpen(false)
    document.body.style.overflow = ''
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    history.pushState(null, '', href)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solid
          ? 'border-border bg-background/95 backdrop-blur-md'
          : 'border-foreground/10 bg-background/40 backdrop-blur-sm'
      }`}
    >
      <div className="section-shell flex h-20 items-center justify-between gap-6">
        <a
          href="#inicio"
          onClick={() => setOpen(false)}
          className="max-w-48 py-1.5 text-sm font-extrabold uppercase leading-tight text-foreground sm:max-w-none"
        >
          JJ Bar e Barista <span className="text-primary">Store &amp; Academy</span>
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {navLinks.map(({ href, label }) => {
              const isActive = active === href.slice(1)
              return (
                <li key={href}>
                  <a
                    href={href}
                    aria-current={isActive ? 'location' : undefined}
                    className={`relative py-2 text-xs font-semibold uppercase tracking-wide transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-primary after:transition-transform after:duration-300 hover:text-primary ${
                      isActive ? 'text-primary after:scale-x-100' : 'text-foreground/80 after:scale-x-0'
                    }`}
                  >
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#oferta"
            className="hidden h-10 items-center gap-2 rounded-sm bg-primary px-5 text-xs font-bold uppercase tracking-wide text-primary-foreground shadow-gold transition-colors hover:bg-primary-bright sm:inline-flex"
          >
            Garanta sua vaga <ArrowRight className="size-4" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            className="grid size-11 place-items-center border border-border text-foreground transition-colors hover:border-primary hover:text-primary lg:hidden"
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        id="menu-mobile"
        className={`overflow-hidden border-border bg-background transition-[max-height,opacity,visibility] duration-300 lg:hidden ${
          open ? 'visible max-h-[calc(100dvh-5rem)] border-t opacity-100' : 'invisible max-h-0 opacity-0'
        }`}
      >
        <nav aria-label="Navegação mobile" className="section-shell flex max-h-[calc(100dvh-5rem)] flex-col overflow-y-auto py-6">
          <ul>
            {navLinks.map(({ href, label }, i) => {
              const isActive = active === href.slice(1)
              return (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => goTo(e, href)}
                    aria-current={isActive ? 'location' : undefined}
                    className={`flex items-center gap-4 border-b border-border py-4 transition-colors hover:text-primary ${
                      isActive ? 'text-primary' : 'text-foreground'
                    }`}
                  >
                    <span className="font-display text-2xl text-primary/70">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-sm font-semibold uppercase tracking-wide">{label}</span>
                  </a>
                </li>
              )
            })}
          </ul>
          <a
            href="#oferta"
            onClick={(e) => goTo(e, '#oferta')}
            className="mt-6 inline-flex h-14 items-center justify-center gap-2 rounded-sm bg-primary px-7 text-sm font-bold uppercase tracking-wide text-primary-foreground shadow-gold transition-colors hover:bg-primary-bright"
          >
            Garanta sua vaga <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  )
}
