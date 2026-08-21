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

No desenvolvimento local, este repositório usa `http://localhost:3001`. A porta `3000` permanece disponível para outros projetos executados em paralelo.

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

### Fronteira entre o Next.js atual e futuros projetos Astro

**Decisão:** manter toda a Zucco e suas rotas internas, incluindo novas demonstrações hospedadas neste mesmo projeto, em Next.js. Sites institucionais, landing pages e portfólios futuros que sejam produtos independentes devem usar Astro por padrão em um projeto separado e podem ser ligados ao portfólio por URL quando aprovados.

**Por quê:** uma rota interna precisa compartilhar o runtime, o roteamento e o processo de build do aplicativo que a hospeda. Misturar um segundo framework dentro deste repositório aumentaria a complexidade sem benefício proporcional. Em projetos independentes e predominantemente estáticos, Astro passa a ser a escolha inicial por entregar uma base orientada a conteúdo e permitir interatividade isolada quando necessária.

**Migração futura:** concluir Lume & Pata, Brisa de Tecido e o ciclo visual da Zucco não cria automaticamente uma tarefa de reescrita. Uma eventual migração para Astro só será avaliada como projeto separado depois que a versão Next estiver concluída e publicada e depois de Astro ter sido validado em ao menos um site independente. Se aprovada, a reconstrução ocorrerá em paralelo, fora deste repositório em uso, com troca apenas após paridade visual, funcional, acessível e de publicação.

**Alternativa descartada:** instalar Astro neste projeto ou converter páginas isoladas no próprio repositório Next. Isso criaria dois modelos de roteamento e build para uma entrega que hoje funciona como uma única aplicação.

### Conteúdo local tipado

**Decisão:** guardar serviços, projetos e contato em arquivos locais, separados da interface.

**Por quê:** o conteúdo inicial é pequeno e muda sob controle do proprietário; assim, adicionar projetos ou alterar contato será simples e seguro.

**Alternativa descartada:** CMS ou banco de dados. Não justificam a complexidade do MVP.

### Evolução do portfólio em duas fases

**Decisão:** manter os dois trabalhos atuais como destaques enquanto forem os únicos itens publicados. Quando houver um terceiro trabalho publicável ou um projeto autoral pronto, reorganizar `/projetos` em destaques maiores seguidos de uma grade compacta.

**Agrupamentos futuros:** no máximo dois — Projetos para negócios e Projetos autorais. Trabalhos próprios de demonstração e futuros trabalhos reais autorizados compartilham o agrupamento de negócios; a natureza de cada item é informada com precisão no próprio conteúdo quando necessário.

**Por quê:** evita criar catálogos separados para exemplos, clientes e produtos pessoais, preserva a clareza comercial e permite crescimento sem repetir cards muito grandes.

### Design systems das demonstrações

**Decisão revisada após o gate do L-02:** preservar a implementação técnica e comercial válida, mas permitir reconstrução ampla da camada visual quando a comparação demonstrar falta de identidade. Nenhuma passada completa começa sem um alvo visual concreto aprovado.

**Base compartilhada:** primitivas técnicas de container, seção, botão, foco, espaçamento, breakpoints e moldura de retorno à Zucco.

**Temas próprios:** cada demonstração define seus tokens de cor, tipografia, escala, raio, sombra e movimento, além de variar composição, cabeçalho, CTA, footer e narrativa de interação. O compartilhamento técnico não deve ser perceptível como identidade visual comum.

**Referências aprovadas:** Lume & Pata parte do Savory Plate para composição e interação e usa OpenDesign como apoio de profundidade editorial; Home/Lumen são somente régua de qualidade. Brisa de Tecido usa a estrutura editorial do OpenDesign, mas preserva a paleta verde profundo, eucalipto, verde ácido e papel/linho já construída para o serviço local.

**Execução:** cada dobra começa com auditoria e exatamente três opções visuais; Kevin escolhe ou rejeita; somente a opção escolhida é implementada e validada. Após todas as dobras aprovadas, o projeto recebe acabamento global e QA. O acompanhamento granular vive em `plano-refatoracao-projetos.md`; o arquivo móvel `PROMPT-PROXIMA-TASK.md` contém sempre o próximo prompt completo e autocontido.

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

As variáveis abaixo são públicas por definição e existem para que domínio e contato sejam trocados sem alterar os componentes. Elas devem ser copiadas de `.env.example` para `.env.local` ao iniciar o projeto. O nome da marca permanece definido no código para evitar divergências entre ambientes.

| Variável | Descrição | Valor inicial |
|---|---|---|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número do WhatsApp com código do país, sem `+` nem espaços. | Número profissional definido pelo proprietário |
| `NEXT_PUBLIC_CONTACT_EMAIL` | E-mail exibido como canal alternativo de contato. | E-mail profissional definido pelo proprietário |
| `NEXT_PUBLIC_SITE_URL` | URL pública usada em metadados e links absolutos. | `http://localhost:3001` durante o desenvolvimento |

## Estado de execução visual atual

- L-02R1 a L-02R5 do Lume & Pata estão aprovados e congelados; Kevin considerou a experiência visual local completa em 2026-08-20.
- O acabamento e a QA local do Lume foram absorvidos pelo fluxo dobra a dobra; a refatoração ainda não foi publicada e o deploy foi adiado para P-01.
- B-01R1 é o próximo checkpoint aberto: revalidar OpenDesign contra a identidade verde/linho da Brisa e gerar A/B/C para fundação, cabeçalho e hero antes do código.
