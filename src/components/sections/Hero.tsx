import heroImage from '../../assets/images/hero-gelo-rosa.jpg?w=640;960;1280;1920&format=webp;jpg&as=picture'
import { Picture } from '../ui/Picture'
import { CourseCta } from '../ui/CourseButton'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pt-[var(--header-offset)] sm:min-h-[820px] sm:justify-center"
    >
      <Picture
        picture={heroImage}
        sizes="100vw"
        alt="Bartender preparando um bloco de gelo translúcido com uma rosa"
        width={1920}
        height={1024}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-[62%_22%] sm:object-[68%_center]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--background)_6%,color-mix(in_oklab,var(--background)_90%,transparent)_38%,color-mix(in_oklab,var(--background)_35%,transparent)_72%,transparent)] sm:bg-[linear-gradient(90deg,var(--background)_0%,color-mix(in_oklab,var(--background)_92%,transparent)_36%,color-mix(in_oklab,var(--background)_20%,transparent)_72%)]" />
      <div className="section-shell relative z-10 pt-8 pb-[max(2.5rem,env(safe-area-inset-bottom))] sm:flex sm:min-h-[740px] sm:items-center sm:py-16">
        <div className="max-w-2xl">
          <p className="mb-4 max-w-[16rem] text-xs font-semibold uppercase tracking-[0.14em] text-balance text-primary sm:max-w-none sm:tracking-[0.22em]">
            Curso completo • Do zero ao negócio
          </p>
          <h1 className="display-title text-[3.35rem] text-primary min-[380px]:text-6xl sm:text-8xl lg:text-[8.8rem]">
            Gelos
            <br />
            translúcidos
          </h1>
          <p className="mt-5 max-w-lg text-base font-medium uppercase leading-relaxed text-balance text-foreground/90 sm:mt-6 sm:text-xl">
            Eleve seu gelo a outro nível com formato, pureza e sofisticação.
          </p>
          <div className="mt-7 sm:mt-8">
            <CourseCta />
          </div>
        </div>
      </div>
    </section>
  )
}
