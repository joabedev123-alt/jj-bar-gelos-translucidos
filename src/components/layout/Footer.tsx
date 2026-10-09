import { ArrowRight, ArrowUp, MessageCircle } from 'lucide-react'
import { contacts, footerColumns, instagramAccounts } from '../../data/content'
import { InstagramIcon } from '../icons/InstagramIcon'

const socialLinkClass =
  'grid size-11 place-items-center border border-border text-foreground transition hover:border-primary hover:text-primary'

const columnTitleClass = 'mb-5 text-xs font-bold uppercase tracking-[0.2em] text-primary'
// No mobile cada link tem 44px de altura de toque; a partir de lg volta ao espaçamento compacto.
const footerLinkClass =
  'inline-flex min-h-11 items-center py-1.5 text-sm leading-snug text-muted-foreground transition-colors hover:text-primary lg:min-h-0 lg:py-0 lg:leading-normal'
const footerListClass = 'lg:space-y-3'

export function Footer() {
  return (
    <footer id="contato" className="border-t border-primary/30 pt-16 pb-8">
      <div className="section-shell grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        {/* Marca */}
        <div className="col-span-2 sm:col-span-1">
          <a href="#inicio" className="inline-block text-xl font-extrabold uppercase leading-tight">
            JJ Bar e Barista
            <br />
            <span className="text-primary">Store &amp; Academy</span>
          </a>
          <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
            Formação profissional para bartenders, baristas e empreendedores que querem transformar técnica em
            oportunidade.
          </p>
          <div className="mt-6 flex gap-3">
            <a href={contacts.instagram} aria-label="Instagram" target="_blank" rel="noreferrer" className={socialLinkClass}>
              <InstagramIcon />
            </a>
            <a href={contacts.whatsapp} aria-label="WhatsApp" target="_blank" rel="noreferrer" className={socialLinkClass}>
              <MessageCircle aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Colunas de navegação */}
        {footerColumns.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <p className={columnTitleClass}>{column.title}</p>
            <ul className={footerListClass}>
              {column.links.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className={footerLinkClass}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        {/* Redes oficiais */}
        <div className="col-span-2 sm:col-span-1">
          <p className={columnTitleClass}>Redes oficiais</p>
          <ul className="lg:space-y-2.5">
            {instagramAccounts.map(({ name, handle, url }) => (
              <li key={handle}>
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex min-h-11 items-center gap-2.5 lg:min-h-0"
                >
                  <InstagramIcon className="size-4 shrink-0 text-primary" />
                  <span className="min-w-0 leading-tight">
                    <span className="block text-sm text-foreground transition-colors group-hover:text-primary">{name}</span>
                    <span className="block truncate text-xs text-muted-foreground">@{handle}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#oferta"
            className="mt-6 inline-flex h-11 items-center gap-2 rounded-sm border border-primary px-5 text-xs font-bold uppercase tracking-wide text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Garanta sua vaga <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="section-shell mt-14 flex flex-col-reverse gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs uppercase text-muted-foreground sm:text-[10px]">© 2026 JJ Bar e Barista Store &amp; Academy</p>
        <a
          href="#inicio"
          className="inline-flex min-h-11 items-center gap-2 self-start text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary sm:self-auto"
        >
          Voltar ao topo <ArrowUp className="size-3.5" aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}
