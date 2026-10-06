import { Award } from 'lucide-react'
import felipeMartins from '../../assets/images/felipe-martins.jpeg?w=480;960;1440&format=webp;jpg&as=picture'
import { Picture } from '../ui/Picture'
import { SectionHeading } from '../ui/SectionHeading'

export function Instructor() {
  return (
    <section id="instrutor" className="border-y border-border bg-card py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div className="relative mx-auto w-full max-w-md">
          <Picture
            picture={felipeMartins}
            sizes="(min-width: 1024px) 448px, min(448px, 100vw - 2rem)"
            alt="Felipe Martins, diretor da JJ Bar e Barista Store & Academy"
            width={768}
            height={1024}
            loading="lazy"
            className="aspect-[3/4] w-full object-cover grayscale-[15%]"
          />
          <div className="absolute -bottom-4 -right-4 border border-primary bg-background p-4">
            <Award className="text-primary" aria-hidden="true" />
            <p className="mt-2 text-xs font-bold uppercase">
              Experiência real
              <br />
              em negócios
            </p>
          </div>
        </div>
        <div>
          <SectionHeading eyebrow="Quem será o seu instrutor">Felipe Martins</SectionHeading>
          <p className="text-lg leading-8 text-foreground/75">
            Diretor da JJ Bar e Barista Store &amp; Academy e dos segmentos de eventos JJ Bar e JJ Barista. Felipe
            também lidera outros negócios desse universo, como o Black Chef, restaurante físico e gastronomia para
            eventos, e a FG Store, que atua no e-commerce.
          </p>
          <p className="mt-5 border-l-2 border-primary pl-5 text-sm leading-7 text-muted-foreground">
            Uma visão que combina técnica, operação, eventos e empreendedorismo para ensinar não apenas a produzir, mas
            também a vender e crescer.
          </p>
        </div>
      </div>
    </section>
  )
}
