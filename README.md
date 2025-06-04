This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

# Visão Geral:
 O projeto level-metric é um projeto de front-end feito com Nextjs. Neste projeto um sensor de nivel de agua conectado a  um microcomputador (Raspberry) envia um sinal que recebido. Com esse sinal é estimado o nivel de agua do recepiente ou sisterna onde o sensor esta instalado. O front-end por sua vez envia solicitações GET para a api do Raspberry que por sua vez envia as informações em JSON para o front e então a informações é apresentada ao o usuario. O front-end desse app foi feito pensando na plataforma mobile, mas é totalmente possivel adaptar para desktop, tablets etc.. 

# Objetivo:
 O projeto é simples e visar atender uma residencia onde o cliente com um simples aparelho de celular possar consumir as informações e ver o nivel da agua da cisterna, caixa d'agua, ou qualquer outro meio de armazenamento de agua, e isso em tempo real de qualquer lugar.
