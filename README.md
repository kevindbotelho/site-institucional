# Site institucional

Site institucional para apresentar soluções digitais voltadas a pequenos negócios e facilitar o início de conversas comerciais.

## Tecnologias

- Next.js
- React
- TypeScript
- Tailwind CSS

## Desenvolvimento local

Requisitos:

- Node.js 20 ou superior
- npm

Instale as dependências:

```bash
npm install
```

Copie as variáveis de exemplo e preencha os valores locais:

```bash
cp .env.example .env.local
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O site estará disponível em `http://localhost:3000`.

## Variáveis de ambiente

As configurações públicas de contato, marca e URL ficam em `.env.local`. Esse arquivo não é versionado. A estrutura esperada está documentada em `.env.example`.

## Validação

```bash
npm run lint
npm run build
```

## Publicação

O projeto está publicado na Vercel:

- `https://site-institucional-plum.vercel.app`

A marca e o domínio principal ainda serão definidos.

## Licença

Este projeto é distribuído sob a licença MIT. Consulte `LICENSE`.
