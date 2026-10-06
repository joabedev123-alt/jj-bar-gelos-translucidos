# Curso Gelos Translúcidos — JJ Bar e Barista Academy

Landing page reconstruída em React + TypeScript + Tailwind CSS v4 (Vite) a partir do arquivo
`Curso Gelos Translúcidos  JJ Bar e Barista Academy.webarchive` (preview original feito no Lovable).

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera dist/
npm run preview  # serve o build
```

## Estrutura

```
src/
  styles.css            tokens de cor (oklch), fontes e utilitários do original
  data/content.ts       todos os textos, preços, FAQ e lista de imagens
  assets/images/        imagens extraídas do webarchive (arquivos idênticos)
  components/
    layout/             Header (navbar fixa + menu mobile), Footer, MobileCtaBar
    sections/           Hero, PainPoints, Gallery, Curriculum, About,
                        Instructor, Testimonials, Faq, Offer, FinalCta
    ui/                 CourseButton, SectionHeading, Accordion (Radix), Picture
    icons/              InstagramIcon
  hooks/                useActiveSection (destaque da seção ativa na navbar)
```

## Imagens

Os arquivos em `src/assets/images/` são os originais e servem de fonte. No build, o
[vite-imagetools](https://github.com/JonasKruckenberg/imagetools) gera versões WebP/JPEG
redimensionadas a partir das queries de import (ex.: `?w=640;960&format=webp;jpg&as=picture`),
e o componente `Picture` entrega via `srcset`/`sizes` só a resolução que cada tela precisa.

## Mobile

- Testado de 320px a 430px: sem rolagem horizontal, alvos de toque ≥ 44px e texto ≥ 12px.
- Barra de CTA fixa (só em celular) aparece após o hero e some na oferta e no rodapé.
- `viewport-fit=cover` + `env(safe-area-inset-bottom)` para iPhones com notch.

Fontes: Bebas Neue (títulos) e Montserrat (texto), via Google Fonts.
