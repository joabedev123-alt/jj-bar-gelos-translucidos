import { Check } from 'lucide-react'
import { bonuses, offerItems, offerPerks, offerTotal } from '../../data/content'
import { CourseButton } from '../ui/CourseButton'

export function Offer() {
  return (
    <section id="oferta" className="py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-4xl border border-primary/60 bg-card p-6 shadow-gold sm:p-12">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Oferta especial</p>
            <h2 className="display-title mt-3 text-4xl sm:text-6xl">Você vai decidir agora ou deixar para depois?</h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground">
              A chance de rentabilizar com gelos translúcidos, valorizar seu negócio ou abrir sua própria empresa
              começa com conhecimento e prática.
            </p>
          </div>

          <div className="my-10 space-y-3">
            {offerItems.map(([label, price]) => (
              <div key={label} className="flex items-center justify-between gap-5 border-b border-border py-3 text-sm">
                <span className="text-foreground/80">{label}</span>
                <del className="shrink-0 text-muted-foreground">{price}</del>
              </div>
            ))}
            <div className="flex justify-between pt-2 font-bold">
              <span>Valor total</span>
              <del className="text-muted-foreground">{offerTotal}</del>
            </div>
          </div>

          <div className="border-y border-primary/30 py-8 text-center">
            <p className="text-sm font-bold uppercase text-primary">Hoje você não vai gastar tudo isso</p>
            <p className="mt-2 text-sm text-muted-foreground">Curso completo por apenas</p>
            <div className="my-3 font-display text-7xl text-primary sm:text-8xl">
              R$ 197<span className="text-3xl">,00</span>
            </div>
            <p className="text-xs text-muted-foreground">Pagamento único</p>
          </div>

          <div className="my-8 grid gap-3 sm:grid-cols-2">
            {bonuses.map((bonus) => (
              <div key={bonus.label} className="bg-surface-raised p-5">
                <span className="text-xs font-bold uppercase text-primary">{bonus.label}</span>
                <p className="mt-2 text-sm font-semibold">{bonus.title}</p>
                <p className="mt-2 text-xs leading-6 text-muted-foreground">{bonus.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <CourseButton href="#contato">Quero aprender agora</CourseButton>
            <div className="mt-5 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
              {offerPerks.map((perk) => (
                <span key={perk} className="flex items-center gap-1">
                  <Check className="size-3 text-primary" aria-hidden="true" />
                  {perk}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
