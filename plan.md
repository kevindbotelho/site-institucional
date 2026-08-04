# Plano técnico — Site institucional

## Stack Técnica

O projeto seguirá a stack definida em `constitution.md`: Next.js com TypeScript, Tailwind CSS, conteúdo local tipado e publicação na Vercel.

## Arquitetura Geral

O site será uma aplicação web estática com páginas públicas. O conteúdo de serviços, projetos e informações de contato ficará em arquivos locais tipados. As páginas consomem esse conteúdo e o apresentam em seções próprias, sem banco de dados ou servidor de aplicação.

Fluxo principal:

```text
Visitante → Página inicial ou página interna → CTA → WhatsApp / E-mail
```

O domínio principal hospedará o site institucional e todas as rotas iniciais:

```text
seudominio.com/             Página inicial
seudominio.com/servicos     Serviços
seudominio.com/projetos     Projetos
```

O item Sobre da navegação aponta para `/#sobre`, a seção de credibilidade já presente na Home.

Em uma evolução futura, os estilos demonstrativos poderão ganhar um subdomínio, por exemplo `estilos.seudominio.com`. Isso usa o mesmo domínio comprado: é uma configuração de DNS e hospedagem, não a compra de um segundo domínio.

## Estrutura de Pastas

```text
src/
├── app/                 Rotas e layouts do site
│   ├── page.tsx         Página inicial
│   ├── servicos/        Página de serviços
│   └── projetos/        Página de projetos
├── components/          Componentes visuais reutilizáveis
│   ├── layout/          Cabeçalho, rodapé e navegação
│   ├── sections/        Blocos de página reutilizáveis
│   └── ui/              Elementos pequenos, como botões e links
├── content/             Dados editáveis de serviços, projetos e contato
├── lib/                 Utilitários simples, como gerador de links de contato
└── types/               Tipos compartilhados do conteúdo

public/
└── images/              Imagens e mídias estáticas próprias
```

## Decisões Técnicas

### Next.js com Home de conversão e páginas de aprofundamento

**Decisão:** concentrar a narrativa completa na Home e usar rotas próprias apenas para serviços e projetos.

**Por quê:** serviços e projetos precisam de profundidade própria; a apresentação profissional já cumpre seu papel de credibilidade dentro da Home e não justifica uma página separada.

**Alternativa descartada:** manter todo o conteúdo apenas em uma página longa. Isso limitaria a profundidade necessária para serviços e projetos.

### Conteúdo local tipado

**Decisão:** guardar serviços, projetos e contato em arquivos locais, separados da interface.

**Por quê:** o conteúdo inicial é pequeno e muda sob controle do proprietário; assim, adicionar projetos ou alterar contato será simples e seguro.

**Alternativa descartada:** CMS ou banco de dados. Não justificam a complexidade do MVP.

### WhatsApp sem integração oficial

**Decisão:** abrir uma conversa por link direto com mensagem sugerida.

**Por quê:** é o canal prioritário do negócio e não requer servidor, conta empresarial ou custo adicional.

**Alternativa descartada:** API oficial do WhatsApp. É desnecessária para um site institucional de apresentação.

### Vercel e domínio próprio

**Decisão:** publicar na Vercel e conectar o domínio principal depois que a extensão for escolhida e o endereço for comprado.

**Por quê:** oferece publicação e HTTPS com pouca configuração, além de facilitar a criação de subdomínios no futuro.

**Alternativa descartada:** hospedagem tradicional. É possível, mas traz mais configuração para o mesmo resultado neste caso.

## Integrações Externas

| Serviço | Finalidade | Forma de integração | Variáveis necessárias |
|---|---|---|---|
| WhatsApp | Iniciar conversa comercial | Link `https://wa.me/` com mensagem codificada | `NEXT_PUBLIC_WHATSAPP_NUMBER` |
| E-mail | Canal alternativo de contato | Link `mailto:` | Nenhuma no MVP |
| Vercel | Hospedagem e domínio | Integração de deploy | `NEXT_PUBLIC_SITE_URL` |

## Modelo de Dados

### Configuração de contato

- `whatsappNumber`: número internacionalizado para links.
- `email`: e-mail de contato.
- `defaultMessage`: mensagem inicial sugerida no WhatsApp.

### Serviço

- `slug`: identificador único.
- `title`: nome do serviço.
- `summary`: explicação curta do resultado.
- `deliverables`: lista de entregas possíveis.
- `audience`: para quem o serviço faz sentido.

### Projeto

- `slug`: identificador único.
- `title`: nome do projeto.
- `category`: solução para negócios ou projeto autoral.
- `disclosure`: etiqueta editorial exibida no card; na Home, comunica a categoria da solução sem rotulá-la como exemplo ou demonstração.
- `problem`: problema resolvido.
- `solution`: solução construída.
- `link`: endereço do projeto ou de uma versão navegável, quando existir.
- `image`: imagem de apresentação, quando existir.

## Variáveis de Ambiente

As variáveis abaixo são públicas por definição e existem para que marca, domínio e contato sejam trocados sem alterar os componentes. Elas devem ser copiadas de `.env.example` para `.env.local` ao iniciar o projeto.

| Variável | Descrição | Valor inicial |
|---|---|---|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número do WhatsApp com código do país, sem `+` nem espaços. | Número profissional definido pelo proprietário |
| `NEXT_PUBLIC_CONTACT_EMAIL` | E-mail exibido como canal alternativo de contato. | E-mail profissional definido pelo proprietário |
| `NEXT_PUBLIC_BRAND_NAME` | Nome exibido na navegação, metadados e textos institucionais. | `Zucco` |
| `NEXT_PUBLIC_SITE_URL` | URL pública usada em metadados e links absolutos. | `http://localhost:3000` durante o desenvolvimento |
