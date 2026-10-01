import Container from '../ui/Container'
import { SITE, SOCIAL } from '../../lib/constants'

const socialLinks = [
  { ...SOCIAL.felipe, label: '@felipejjbarebarista' },
  { ...SOCIAL.academy, label: '@jjbarebaristastore_academy' },
  { ...SOCIAL.eventosBarista, label: '@jjbarebarista' },
  { ...SOCIAL.eventosBar, label: '@jjbar_eventos' },
]

export default function Footer() {
  return (
    <footer className="border-t border-[#C6A15B]/25 bg-[#F7F4EC] pb-24 pt-12 text-[#111111] sm:pt-16 lg:pb-16">
      <Container>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
          <div>
            <div className="mb-3 flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C6A15B] font-display text-sm font-bold text-[#9C7B3C]">
                JJ
              </span>
              <span className="font-display text-sm font-semibold text-[#111111]">
                {SITE.name}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-[#555555]">
              Formação e especialização em Gelos Translúcidos, Mixologia, Coquetelaria e Universo de Bar.
            </p>
            <a
              href={`https://${SITE.domain}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block cursor-pointer text-sm font-medium text-[#9C7B3C] transition-colors duration-200 hover:text-[#B9922E]"
            >
              {SITE.domain}
            </a>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#9C7B3C]">
              Institucional
            </h3>
            <ul className="space-y-2.5 text-sm text-[#555555]">
              <li>
                <a href="#top" className="inline-flex min-h-11 cursor-pointer items-center transition-colors duration-200 hover:text-[#9C7B3C]">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#top" className="inline-flex min-h-11 cursor-pointer items-center transition-colors duration-200 hover:text-[#9C7B3C]">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#top" className="inline-flex min-h-11 cursor-pointer items-center transition-colors duration-200 hover:text-[#9C7B3C]">
                  Contato
                </a>
              </li>
              <li>
                <a href="#top" className="inline-flex min-h-11 cursor-pointer items-center transition-colors duration-200 hover:text-[#9C7B3C]">
                  Suporte
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#9C7B3C]">
              Redes Sociais
            </h3>
            <ul className="space-y-2.5 text-sm text-[#555555]">
              {socialLinks.map((social) => (
                <li key={social.handle + social.label}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 cursor-pointer items-center gap-2 transition-colors duration-200 hover:text-[#9C7B3C]"
                  >
                    <i className={`bi ${social.icon || 'bi-instagram'}`} aria-hidden="true" />
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#9C7B3C]">
              JJ Bar &amp; Barista Academy
            </h3>
            <p className="text-sm leading-relaxed text-[#555555]">
              © 2026 JJ Bar &amp; Barista Academy.
              <br />
              Todos os direitos reservados.
            </p>
          </div>
        </div>

        <div className="divider-gold my-10" />

        <p className="text-xs leading-relaxed text-[#777777]">
          Resultados profissionais e de produção variam de acordo com cada aluno, prática, dedicação e materiais utilizados. O treinamento possui finalidade educacional e não representa garantia de ganhos imediatos.
        </p>
      </Container>
    </footer>
  )
}
