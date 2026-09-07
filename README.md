# Central Combate Fire

Landing page institucional e comercial da Central Combate Fire, empresa de
prevenção, proteção e combate a incêndios com atendimento em Salvador, Região
Metropolitana e cidades próximas. O objetivo principal da página é apresentar
os serviços e trabalhos realizados e direcionar solicitações de orçamento para
o WhatsApp.

## Tecnologias

- Next.js 16 com App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide React
- ESLint
- npm

## Instalação

Requisitos: Node.js compatível com Next.js 16 e npm.

```bash
npm install
```

Copie `.env.example` para `.env.local` e informe a URL pública somente quando
o domínio estiver definido:

```env
NEXT_PUBLIC_SITE_URL=https://www.dominio-oficial.com.br
```

Em desenvolvimento local, essa variável pode permanecer vazia.

## Desenvolvimento

```bash
npm run dev
```

A aplicação ficará disponível em `http://localhost:3000`.

## Verificações

```bash
npm run lint
npx tsc --noEmit
```

## Build de produção

```bash
npm run build
npm run start
```

`npm run build` valida a compilação e gera a versão otimizada. `npm run start`
executa localmente o build já gerado.

## Onde alterar o conteúdo

- Textos, telefone, WhatsApp, navegação, serviços, galeria, processo, clientes
  e diferenciais: `src/content/site.ts`.
- Textos específicos das seções: `src/components/sections/landing-sections.tsx`.
- Metadados, SEO e imagem social Open Graph: `src/app/layout.tsx`.
- URL pública usada por canonical, sitemap e robots: `.env.local`, por meio de
  `NEXT_PUBLIC_SITE_URL`.

## Onde alterar imagens

- Marca e logotipo: `public/images/marca`.
- Fotografias de serviços: `public/images/servicos`.
- Fotografias de projetos: `public/images/projetos`.
- A associação entre fotografias, legendas e textos alternativos fica em
  `src/content/site.ts`.

As imagens usadas diretamente no Hero, cabeçalho e rodapé são definidas nos
respectivos componentes em `src/components`.

## Estrutura principal

- `src/app`: layout, página, estilos e arquivos de SEO técnico.
- `src/components/layout`: cabeçalho, rodapé e botão flutuante.
- `src/components/sections`: seções da landing page.
- `src/content`: conteúdo reutilizável e contatos.
- `src/lib`: configuração compartilhada da URL pública.
- `docs`: briefing, conteúdo, direção visual e mapa de imagens.
- `referencias`: materiais originais fornecidos pela empresa. Não alterar nem
  excluir esses arquivos.

## Contatos publicados

- WhatsApp e telefone principal: +55 71 98856-4957.
- Região atendida: Salvador, Região Metropolitana e cidades próximas.

Os e-mails encontrados no material de referência ainda dependem de confirmação
da empresa e, por isso, não estão publicados na landing page.
