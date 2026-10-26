import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { checkoutUrl } from '../../data/content'

/**
 * Barra de CTA fixa no rodapé da tela, apenas em celulares (< sm).
 * Aparece depois que o hero sai da tela e some enquanto a oferta ou o rodapé estão visíveis,
 * para não competir com o CTA principal nem cobrir o conteúdo final.
 */
export function MobileCtaBar() {
  const [pastHero, setPastHero] = useState(false)
  const [blocked, setBlocked] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('inicio')
    const targets = ['oferta', 'contato'].map((id) => document.getElementById(id)).filter((el): el is HTMLElement => !!el)
    const visible = new Set<Element>()

    const heroObserver = new IntersectionObserver(([entry]) => setPastHero(!entry.isIntersecting))
    const blockObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.add(entry.target)
        else visible.delete(entry.target)
      }
      setBlocked(visible.size > 0)
    })

    if (hero) heroObserver.observe(hero)
    targets.forEach((el) => blockObserver.observe(el))
    return () => {
      heroObserver.disconnect()
      blockObserver.disconnect()
    }
  }, [])

  const show = pastHero && !blocked

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-primary/30 bg-background/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md transition-[translate,opacity,visibility] duration-300 sm:hidden ${
        show ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-full opacity-0'
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="min-w-0 flex-1 leading-tight">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground max-[359px]:hidden">
            Curso completo
          </p>
          <p className="whitespace-nowrap font-display text-2xl text-primary">
            R$ 197<span className="text-base">,00</span>
          </p>
        </div>
        <a
          href={checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 shrink-0 items-center gap-1.5 rounded-sm bg-primary px-3.5 text-[11px] font-bold uppercase tracking-wide text-primary-foreground shadow-gold transition-colors hover:bg-primary-bright min-[380px]:gap-2 min-[380px]:px-5 min-[380px]:text-xs"
        >
          Garanta sua vaga <ArrowRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  )
}
