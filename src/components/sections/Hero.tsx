import heroImage from '../../assets/images/hero-gelo-rosa.jpg?w=1440;1920&format=webp;jpg&as=picture'
import { Picture } from '../ui/Picture'
import { CourseCta } from '../ui/CourseButton'

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[760px] overflow-hidden pt-20 sm:min-h-[820px]">
      {/* A imagem cobre a seção (min-h 760/820px, proporção 1,875), então nunca fica mais estreita que ~1540px. */}
      <Picture
        picture={heroImage}
        sizes="max(100vw, 1540px)"
        alt="Bartender preparando um bloco de gelo translúcido com uma rosa"
        width={1920}
        height={1024}
        className="absolute inset-0 h-full w-full object-cover object-[68%_center]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--background)_0%,color-mix(in_oklab,var(--background)_92%,transparent)_36%,color-mix(in_oklab,var(--background)_20%,transparent)_72%)]" />
      <div className="section-shell relative z-10 flex min-h-[680px] items-center py-16 sm:min-h-[740px]">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Curso completo • Do zero ao negócio
          </p>
          <h1 className="display-title text-6xl text-primary min-[360px]:text-7xl sm:text-8xl lg:text-[8.8rem]">
            Gelos
            <br />
            translúcidos
          </h1>
          <p className="mt-6 max-w-lg text-base font-medium uppercase leading-relaxed text-foreground/90 sm:text-xl">
            Eleve seu gelo a outro nível com formato, pureza e sofisticação.
          </p>
          <div className="mt-8">
            <CourseCta />
          </div>
        </div>
      </div>
    </section>
  )
}
