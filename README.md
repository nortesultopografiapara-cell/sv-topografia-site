# SV Topografia & Projetos LTDA — Site Institucional

Site institucional da **SV Topografia & Projetos LTDA**, desenvolvido com Next.js 15, TypeScript e Tailwind CSS.

## Tecnologias

- [Next.js 15](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) — animações
- [Lucide React](https://lucide.dev/) — ícones

## Estrutura

```
src/
├── app/              # Rotas e layout (App Router)
│   ├── blog/         # Página placeholder para futuro blog
│   ├── layout.tsx    # Layout global + SEO
│   ├── page.tsx      # Página principal (single-page)
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── layout/       # Header, Footer, Logo, WhatsApp
│   ├── sections/     # Hero, Sobre, Serviços, Portfólio, Contato
│   └── ui/           # Button, SectionTitle, AnimatedSection
├── lib/              # Constantes e utilitários
└── types/            # Tipos TypeScript
```

## Seções do site

1. **Home** — Banner com drone/topografia, logo, CTAs WhatsApp e orçamento
2. **Sobre** — História, missão, visão e valores
3. **Serviços** — 10 serviços especializados
4. **Portfólio** — Galeria filtrável por categoria
5. **Contato** — Formulário, WhatsApp, e-mail e Google Maps
6. **Rodapé** — Logo, links, redes sociais e direitos reservados

## Identidade visual

| Cor            | Hex       |
|----------------|-----------|
| Azul escuro    | `#0A1628` |
| Azul petróleo  | `#1B3A4B` |
| Ciano          | `#00D4FF` |
| Branco         | `#FFFFFF` |

## Como executar

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Servidor de produção
npm start
```

Acesse [http://localhost:3000](http://localhost:3000).

## Personalização

Edite os dados da empresa em `src/lib/constants.ts`:

- Telefone e WhatsApp
- E-mail e endereço
- URL do Google Maps
- Links das redes sociais
- Textos institucionais

Configure a URL do site em `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://seudominio.com.br
```

## Blog (futuro)

A rota `/blog` está preparada como placeholder. Para integrar um CMS ou MDX:

1. Adicione posts em `src/app/blog/[slug]/page.tsx`
2. Ou integre Sanity, Contentful, Strapi, etc.

## Deploy

Recomendado: [Vercel](https://vercel.com) ou qualquer host compatível com Node.js.

```bash
npm run build
```

## Licença

Projeto proprietário — SV Topografia & Projetos LTDA. Todos os direitos reservados.
