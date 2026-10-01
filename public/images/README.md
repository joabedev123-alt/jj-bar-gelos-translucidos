# Imagens do projeto

Adicione os arquivos abaixo nesta pasta com os nomes exatos indicados.
Enquanto o arquivo não existir, a página exibe um placeholder elegante no
lugar (sem quebrar o layout), então o site pode ir ao ar antes de todo o
material estar pronto.

| Arquivo | Uso |
|---|---|
| `hero-team.jpg` | Foto principal do Hero — Felipe Martins de terno branco com os demais instrutores. Proporção recomendada 4:5 (retrato). |
| `instrutor-felipe.jpg` | Foto do Felipe Martins na seção de instrutores. Proporção 4:5. |
| `instrutor-bob.jpg` | Foto do Bob Flair na seção de instrutores. Proporção 4:5. |
| `instrutor-ensei.jpg` | Foto do Ensei Neto na seção de instrutores. Proporção 4:5. |
| `galeria-01.jpg` a `galeria-08.jpg` | Fotos da galeria (bastidores, treinamentos, turmas, drinks, cafés, eventos, alunos). Proporção 1:1. |
| `og-cover.jpg` | Imagem usada no compartilhamento em redes sociais (Open Graph). Recomendado 1200x630px. |

## Vídeo de vendas

O componente de vídeo fica em `src/components/sections/VideoSales.tsx`.
Para publicar o vídeo, defina a constante `VIDEO_EMBED_URL` no topo do
arquivo com a URL de embed (YouTube, Vimeo, Panda Video, etc).

## Link de checkout

O link da Hotmart é centralizado em `src/lib/constants.ts`, na constante
`CHECKOUT_URL`. Basta substituir o valor `LINK_CHECKOUT_HOTMART` pela URL
real — todos os botões da página são atualizados automaticamente.
