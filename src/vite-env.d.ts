/// <reference types="vite/client" />

/** Saída do vite-imagetools com `as=picture`. */
type ImagePicture = {
  sources: Record<string, string>
  img: { src: string; w: number; h: number }
}

declare module '*as=picture' {
  const picture: ImagePicture
  export default picture
}
