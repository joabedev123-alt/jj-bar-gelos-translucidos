import type { ImgHTMLAttributes } from 'react'

type PictureProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet'> & {
  picture: ImagePicture
  /** Largura renderizada da imagem em cada breakpoint, para o navegador escolher o arquivo certo. */
  sizes: string
}

// Formatos modernos vão em <source>; o restante (jpeg/png) é o fallback do <img>.
const modernFormats: Record<string, string> = { avif: 'image/avif', webp: 'image/webp' }

/** <picture> responsivo; `display: contents` mantém o <img> se comportando como filho direto do layout. */
export function Picture({ picture, sizes, alt, ...imgProps }: PictureProps) {
  const formats = Object.keys(picture.sources)
  const preferred = formats.filter((f) => f in modernFormats)
  const fallbackFormat = formats.find((f) => !(f in modernFormats))
  return (
    <picture className="contents">
      {preferred.map((format) => (
        <source key={format} type={modernFormats[format]} srcSet={picture.sources[format]} sizes={sizes} />
      ))}
      <img
        src={picture.img.src}
        srcSet={fallbackFormat ? picture.sources[fallbackFormat] : undefined}
        sizes={sizes}
        alt={alt}
        decoding="async"
        {...imgProps}
      />
    </picture>
  )
}
