# Peça Certa — Landing Page

Site da landing page do marketplace que conecta quem procura autopeças
com lojas que têm a peça. Feito em Next.js 14 (App Router) + Tailwind CSS,
pronto para deploy na Vercel.

## Destaque técnico: vídeo cinematic controlado pelo scroll

A seção inicial (Hero + Problema + Solução) usa um único vídeo de fundo
que **avança conforme você rola a página** (em vez de dar play sozinho).
Os textos aparecem e somem em sincronia com o scroll.

Isso está implementado em `components/CinematicIntro.tsx`.

### Como adicionar o vídeo gerado no Veo3

1. Exporte o vídeo do Veo3 em MP4, ideal 1920x1080, 24–30fps, ~20–30s.
2. Renomeie o arquivo para `hero.mp4`.
3. Coloque em: `public/videos/hero.mp4`.
4. Pronto — o site já aponta para esse caminho automaticamente.

Enquanto o arquivo não existir, o site mostra um fundo com gradiente
suave no lugar do vídeo (não quebra o layout).

> Dica: se o vídeo tiver ~24s e a seção tiver 5 telas de altura (500vh),
> cada scroll "recua/avança" o vídeo proporcionalmente. Se quiser a
> sincronia mais rápida ou mais lenta, ajuste `h-[500vh]` em
> `CinematicIntro.tsx` (mais vh = scroll mais lento/longo).

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Deploy na Vercel

Opção 1 — pelo site:
1. Suba esta pasta para um repositório no GitHub.
2. Entre em https://vercel.com/new e importe o repositório.
3. Framework é detectado automaticamente como Next.js. Clique em Deploy.

Opção 2 — pela CLI:
```bash
npm i -g vercel
vercel
```

## Estrutura

```
app/
  layout.tsx        → fontes e metadata
  page.tsx           → monta as seções na ordem
  globals.css         → estilos globais e tokens visuais
components/
  CinematicIntro.tsx  → Hero + Problema + Solução (vídeo scroll-scrubbed)
  HowItWorks.tsx      → 3 passos
  Benefits.tsx        → grade de benefícios
  Audiences.tsx       → para quem procura x para quem vende
  FAQ.tsx             → perguntas frequentes (accordion)
  FinalCTA.tsx        → chamada final
  Footer.tsx          → rodapé
public/videos/
  hero.mp4            → (adicionar) vídeo de fundo gerado no Veo3
  poster.svg          → imagem de fallback antes do vídeo carregar
```

## Identidade visual

- Cores: fundo escuro quente (óleo/asfalto), laranja de segurança como
  destaque principal, amber (farol) como destaque secundário, cinza
  aço para textos de apoio.
- Tipografia: Oswald (títulos, condensada, estilo placa/sinalização),
  IBM Plex Sans (corpo do texto) e IBM Plex Mono (rótulos técnicos,
  como os números dos 3 passos).
