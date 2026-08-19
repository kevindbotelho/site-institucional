# Lume & Pata — contrato visual e mapa da página

> **Estado histórico:** este contrato orientou o primeiro L-02, implementado e reprovado visualmente por Kevin em 2026-08-11. Ele permanece como registro do conteúdo, da semântica, dos limites comerciais, da acessibilidade e do inventário de assets. Suas decisões de composição, tipografia, componentes, quantidade de slots e movimento foram substituídas por `DIRECAO-CRIATIVA-L02R.md`.

## 0. Revisão do contrato após o gate visual

A revisão demonstrou uma inconsistência real entre o objetivo de criar uma experiência própria e as restrições deste contrato. Em especial:

- Playfair Display + Plus Jakarta Sans não produziram uma identidade aprovada;
- a estrutura de cabeçalho repetiu a silhueta da Home da Zucco;
- os cards e splits especificados resultaram em dobras genéricas;
- a proibição prévia de marquee, swipe, drag, parallax e outras interações limitou o repertório antes de uma avaliação visual;
- implementar a página inteira de uma vez impediu que o hero provasse a direção antes das demais dobras.

O L-02 foi reaberto como `L-02R`. A partir de agora, `DIRECAO-CRIATIVA-L02R.md` é a fonte de verdade criativa. Permanecem válidos deste documento apenas os itens que não conflitarem com ela, especialmente rota, conteúdo honesto, WhatsApp, metadados, semântica, acessibilidade e proibição de alegações fictícias ou cópia externa.

## 1. Objetivo e limites

Lume & Pata deve continuar parecendo um pet shop e banho e tosa de bairro: próximo, claro, acolhedor e fácil de contatar. A evolução visual usa o Savory Plate somente como referência de gramática — bento, fotografia dominante, contraste entre serif e sans, superfícies quentes, grandes raios e movimento editorial leve.

Não são transferidos da referência marca, paleta, textos, imagens, depoimentos, estrelas, métricas, integrações, bibliotecas, analytics, interações de arrastar, código ou semântica ligada a gastronomia.

### Não negociáveis

- Manter a rota `/projetos/lume-e-pata` e um único `h1`.
- Manter o conteúdo válido e o tom simples do projeto atual; ajustes de texto só podem eliminar repetição ou acomodar a nova composição.
- Manter o WhatsApp como CTA principal, com o número vindo de `siteConfig` e a mensagem atual gerada por `getWhatsAppUrl`.
- Manter a moldura superior da Zucco e o caminho para `/projetos`.
- Manter navegação por teclado, foco visível, contraste adequado, alvos de toque de pelo menos 44 × 44 px e suporte a `prefers-reduced-motion`.
- Não adicionar formulário, agenda, pagamento, depoimento, avaliação, métrica, prêmio ou alegação de cliente real.
- Não importar código ou assets de `ds_temporarios/savory-plate.aura.build/` para produção.
- Não alterar a Home, `/projetos`, Brisa de Tecido ou a identidade institucional da Zucco neste ciclo.

## 2. Tradução da referência

| Padrão observado no Savory Plate | Tradução aprovada para Lume & Pata | O que fica de fora |
|---|---|---|
| Hero bento com foto dominante e coluna de apoio | Grid 7/5 com foto principal e dois painéis de conteúdo do Lume | Marca, copy, avatar, utensílios e cards da referência |
| Playfair Display + Plus Jakarta Sans + labels mono | Playfair Display nos títulos, Plus Jakarta Sans em leitura/interface e mono apenas em labels curtos | Wordmark gigante e uso decorativo excessivo de mono |
| Fundo quente, superfícies bege, tinta escura e cor de assinatura | Creme, branco quente, sálvia suave, tinta e corais já existentes | Rosa `#e11d48`, preto `#0b0b0b` e slate da referência |
| Raios grandes, bordas leves e sombras baixas | Bento com 24–32 px, cards com 18–24 px e profundidade discreta | Glassmorphism como linguagem dominante e sombras dramáticas |
| Foto com zoom lento no hover e reveal vertical | Escala máxima de 1.03, deslocamento de 12–16 px e entrada curta | Marquee contínuo, swipe deck, física, 3D e parallax |
| Cards editoriais numerados | Serviços e etapas com numeração funcional | Cards de receita, badges de popularidade, estrelas e prova social |

## 3. Princípios da experiência

1. **Acolher antes de impressionar.** A composição pode ser editorial, mas a leitura deve continuar simples e familiar.
2. **Fotografia com função.** Cada imagem explica ambiente, cuidado ou variedade; nenhuma foto existe apenas para preencher grid.
3. **Coral como assinatura, não como ruído.** O coral luminoso chama atenção; o coral escuro sustenta texto e ações acessíveis.
4. **Bento com hierarquia.** O grid organiza proposta, imagem e próximo passo; não deve virar uma coleção de caixas equivalentes.
5. **Sem luxo performático.** Evitar preto dominante, dourado, linguagem de boutique, serif em excesso e efeitos que afastem a ideia de negócio de bairro.

## 4. Tokens visuais

Os nomes abaixo são o contrato semântico para o tema local. A implementação no L-02 pode usar custom properties no CSS Module, desde que preserve papéis e contraste.

### 4.1 Cores

| Token | Valor | Uso |
|---|---:|---|
| `--lume-canvas` | `#FFFAF0` | Fundo principal creme |
| `--lume-surface` | `#FFFFFF` | Cards e painéis de maior contraste |
| `--lume-surface-soft` | `#F7F0E4` | Bento secundário e faixas quentes |
| `--lume-sage-soft` | `#E9EFE4` | Seções de respiro e informação cuidadosa |
| `--lume-sage` | `#6C8065` | Ícones, marcadores e detalhes; não usar como texto pequeno sobre branco |
| `--lume-coral` | `#EA6B56` | Assinatura, palavras em destaque, marca e superfícies pontuais |
| `--lume-coral-deep` | `#AD3F31` | CTA primário, links ativos e texto coral acessível |
| `--lume-sun` | `#F4BF60` | Acento raro em formas ou pequenos detalhes |
| `--lume-ink` | `#2F2B25` | Texto principal e superfícies escuras |
| `--lume-ink-soft` | `#635D53` | Texto secundário sobre fundos claros |
| `--lume-footer` | `#25221E` | Footer e contraste institucional local |
| `--lume-line` | `rgb(47 43 37 / 0.12)` | Bordas sobre superfícies claras |
| `--lume-line-sage` | `rgb(108 128 101 / 0.22)` | Bordas em seções sálvia |

Regras de contraste:

- `#EA6B56` com branco alcança apenas 3,12:1; não usar branco em texto pequeno sobre o coral claro.
- CTA primário usa `#AD3F31` com branco ou creme, combinação acima de 5,7:1.
- Coral claro pode receber texto `#2F2B25` (4,51:1) quando a superfície coral for necessária.
- Tinta sobre creme e sobre sálvia suave supera 12:1 e é a combinação padrão de leitura.
- Estados não podem depender apenas de cor; foco, sublinhado, borda ou deslocamento devem complementar a mudança cromática.

### 4.2 Tipografia

| Papel | Família | Tamanho / line-height | Peso e uso |
|---|---|---|---|
| Display / `h1` | Playfair Display | `clamp(3.25rem, 5.7vw, 5rem)` / 0,96 | 500; itálico somente na palavra de assinatura |
| Título de seção / `h2` | Playfair Display | `clamp(2.5rem, 4.4vw, 4rem)` / 1,02 | 500 |
| Título de card / `h3` | Playfair Display | `clamp(1.35rem, 2vw, 1.65rem)` / 1,15 | 600 |
| Destaque sans | Plus Jakarta Sans | 1,125rem / 1,55 | 600–700 |
| Corpo L | Plus Jakarta Sans | 1,0625rem / 1,7 | 400–500; hero e introduções |
| Corpo M | Plus Jakarta Sans | 1rem / 1,65 | 400–500; leitura corrente |
| Corpo S | Plus Jakarta Sans | 0,875rem / 1,55 | 500; apoio e metadados |
| Eyebrow | `ui-monospace`, SFMono-Regular, Consolas, monospace | 0,6875rem / 1,35 | 700; caixa alta, tracking 0,16 em |
| Botão/nav | Plus Jakarta Sans | 0,8125–0,875rem / 1 | 700; tracking máximo 0,02 em |

Regras:

- A serif cria voz editorial nos títulos; não deve ser usada em parágrafos longos, botões ou navegação.
- Itálico é reservado a uma palavra de calor ou ênfase por título, nunca a frases inteiras.
- Labels monoespaçadas são pontuais e funcionais; no máximo uma por dobra.
- O L-02 deve carregar as fontes no escopo da rota, preferencialmente via `next/font`, sem trocar as fontes globais da Zucco.
- O fallback atual (`Georgia` e `DM Sans`) deve continuar produzindo uma hierarquia legível durante o carregamento.

### 4.3 Escala e espaçamento

- Base: 4 px.
- Escala: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128` px.
- Container: máximo de 80 rem (1280 px), com gutters de 20 px no mobile, 32 px em tablet e 48 px em desktop.
- Gap do bento: 16 px no mobile e tablet; 20 px a partir de 1024 px.
- Padding interno: 20–24 px em cards compactos; 32–48 px em painéis de conteúdo; 48–64 px em painéis de hero no desktop.
- Ritmo vertical de seção: `clamp(5rem, 9vw, 8rem)`; a primeira dobra usa espaçamento menor por estar após duas barras de navegação.
- Largura de leitura: 34–40 rem para parágrafos; títulos podem chegar a 52 rem.
- Breakpoints de composição: 48 rem (tablet) e 64 rem (bento desktop). O conteúdo não depende de um viewport exato para funcionar.

### 4.4 Raios, bordas e sombras

| Token | Valor | Uso |
|---|---:|---|
| `--radius-sm` | 12 px | Tags, pequenos controles e steps |
| `--radius-md` | 18 px | Cards de serviço |
| `--radius-lg` | 24 px | Cards editoriais e imagens internas |
| `--radius-xl` | 32 px | Painéis do hero bento e CTA final |
| `--radius-pill` | 999 px | Botões e chips realmente compactos |
| `--shadow-low` | `0 10px 28px rgb(47 43 37 / 0.08)` | Cards elevados |
| `--shadow-photo` | `0 24px 60px rgb(92 68 43 / 0.16)` | Fotografias principais |
| `--shadow-action` | `0 14px 30px rgb(173 63 49 / 0.20)` | CTA coral escuro |

- Bordas padrão têm 1 px e usam `--lume-line` ou `--lume-line-sage`.
- Não combinar borda forte, sombra forte e fundo contrastante no mesmo card.
- Glass/blur fica restrito ao cabeçalho sticky e, se necessário, a uma pequena legenda sobre fotografia.
- Formas arqueadas podem aparecer em uma única imagem editorial; não são o raio padrão do sistema.

## 5. Componentes

### 5.1 Moldura da Zucco

- Permanece acima da experiência Lume e visualmente separada do tema local.
- Mantém fundo `--lume-ink`, texto creme, label “Site institucional” e link “← Projetos Zucco” para `/projetos`.
- Não fica sticky junto com o cabeçalho do Lume; ao rolar, apenas o cabeçalho local permanece.
- Alterações futuras para adicionar uma saída distinta à Home da Zucco pertencem ao alinhamento do portfólio e não ao L-01.

### 5.2 Cabeçalho Lume

- Fundo creme com 88–92% de opacidade, blur de 16 px e borda inferior leve.
- Altura alvo: 80–88 px no desktop e 64–72 px no mobile.
- Desktop: marca à esquerda, âncoras “Cuidados”, “Nosso jeito” e “Contato” no centro, CTA WhatsApp à direita.
- Mobile: marca à esquerda e CTA textual compacto “WhatsApp” à direita. Não criar menu hambúrguer se as três âncoras não couberem; as âncoras podem ficar fora do cabeçalho mobile porque a página permanece linear.
- O `PawMark` existente e o wordmark “Lume & Pata” continuam como assinatura local.

### 5.3 Botões e links

**Primário**

- Fundo `--lume-coral-deep`, texto branco/creme, altura mínima 52 px, padding horizontal 22–24 px e raio pill.
- Hover: elevar 2 px e ampliar levemente a sombra; não trocar para o coral claro com texto branco.
- Foco: outline de 3 px em `--lume-coral` com offset de 4 px, somado a uma borda escura quando o fundo também for coral.

**Secundário**

- Fundo transparente ou branco quente, texto tinta, borda `--lume-line`, altura mínima 48 px e raio pill.
- Hover: borda coral escuro e fundo `--lume-surface-soft`.

**Link editorial**

- Texto tinta ou coral escuro, peso 700 e sublinhado com offset de 4 px.
- Ícone direcional é opcional. O sistema não depende de setas para comunicar que o elemento é acionável.

### 5.4 Cards

**Card de serviço**

- Superfície creme ou branca sobre seção sálvia, raio 18–24 px, borda sálvia e sem foto.
- Número mono no topo, título serif, descrição sans. Alturas equivalentes em desktop; conteúdo natural no mobile.
- Hover apenas em dispositivos que oferecem hover: `translateY(-3px)`, borda um pouco mais escura e `--shadow-low`.

**Card de etapa**

- Linha superior ou lateral fina, número em placa sálvia e texto sem caixa externa pesada.
- A leitura da sequência deve sobreviver sem animação.

**Painel fotográfico**

- `object-fit: cover`, crop definido por slot, raio 24–32 px e overlay somente quando houver legenda curta.
- Nenhum texto essencial fica exclusivamente sobre uma região imprevisível da imagem.

**Painel CTA**

- Coral escuro ou tinta como fundo, texto creme e botão de contraste inverso.
- O coral claro pode aparecer como marca, forma ou iluminação, não como fundo de parágrafo branco.

### 5.5 Ícones e marca

- Linguagem minimalista: traço arredondado, 1,75–2 px, caixas de 18–22 px; coral escuro ou sálvia conforme o fundo.
- Números editoriais substituem ícones nos serviços e nas etapas; não criar decoração para cada item.
- O `PawMark` atual é a única marca figurativa aprovada e continua restrito a assinatura, hero note e CTA/footer.
- Não importar Solar, Brandico ou SVGs da referência. Se o L-02 realmente precisar de um ícone funcional novo, deve usar uma biblioteca consistente e instalada no projeto; não desenhar aproximações em CSS, caracteres ou SVG artesanal.

## 6. Fotografia

### Direção

- Luz natural quente, ambiente claro e organizado, materiais simples e sensação de cuidado cotidiano.
- Paleta dentro da cena: creme, madeira clara, coral suave e verde sálvia.
- Pets confortáveis, postura natural, sem fantasias, sem estética clínica e sem procedimentos que sugiram contenção ou desconforto.
- Enquadramentos próximos o suficiente para criar afeto, com respiro para crops responsivos.
- Evitar luxo, cenário de spa sofisticado, fundos genéricos de e-commerce, logos de terceiros, texto dentro da imagem e pessoas identificáveis sem necessidade.
- Tratamento uniforme: saturação moderada, sombras macias, temperatura quente e nenhum filtro vintage pesado.

### Slots aprovados

| ID | Dobra | Formato/crop | Estado | Função |
|---|---|---|---|---|
| `LUME-H01` | Hero bento | Crop quase quadrado, alvo 1:1 a 5:6 | **Reusar asset atual** | Apresentar pet e ambiente imediatamente |
| `LUME-W01` | Nosso jeito | Retrato 4:5 ou 5:6 | **Nova imagem necessária após aprovação** | Mostrar atenção no cuidado sem repetir o hero |
| `LUME-D01` | Dobra de profundidade | Paisagem 3:2 ou 4:3 | **Nova imagem necessária após aprovação** | Mostrar essenciais de rotina/pet shop além do banho e tosa |

Não há slot aprovado para avatar, depoimento, estrelas, métricas, galeria, mapa, feed social ou carrossel. As duas novas imagens só podem ser selecionadas ou geradas depois da aprovação deste contrato.

## 7. Movimento e interação

- Curva principal: `cubic-bezier(0.16, 1, 0.3, 1)`.
- Reveal de seção: 600–700 ms, opacidade 0→1, `translateY(16px)`→0 e blur máximo de 4 px.
- Stagger: 70–90 ms entre cards, limitado a três itens.
- Hover de foto: escala máxima 1.03 em 650–750 ms.
- Hover de botão/card: deslocamento máximo de 2–3 px em 180–260 ms.
- Cabeçalho: transição de cor, borda e sombra; nenhuma mudança de layout ao rolar.
- Proibidos: autoplay, marquee, swipe deck, drag, parallax, spring, cursor customizado e efeitos 3D.
- Em `prefers-reduced-motion: reduce`, remover animações, transforms e scroll suave; conteúdo e estados permanecem visíveis imediatamente.

## 8. Mapa completo da página

| Ordem | Dobra/componente | Conteúdo preservado ou previsto | Função comercial | Tratamento visual e asset |
|---:|---|---|---|---|
| 0 | Moldura Zucco | “← Projetos Zucco” + “Site institucional” | Dar contexto de portfólio e saída segura | Barra tinta, compacta; sem asset novo |
| 1 | Cabeçalho Lume | Marca, Cuidados, Nosso jeito, Contato, WhatsApp | Orientar e manter conversão disponível | Header creme sticky; `PawMark` existente |
| 2 | Hero bento | Eyebrow, `h1`, texto de apoio, CTA WhatsApp, link para serviços, três notas e “Um cuidado de cada vez.” | Comunicar nicho, proposta de valor e próximo passo na primeira dobra | `LUME-H01` existente + dois painéis de conteúdo |
| 3 | Cuidados essenciais | Três serviços atuais e introdução | Tornar a oferta escaneável sem jargão | Fundo sálvia suave, três cards numerados; sem nova foto |
| 4 | Nosso jeito | Parágrafo e três etapas atuais | Reduzir incerteza ao explicar o atendimento | Split editorial com `LUME-W01` nova + sequência leve |
| 5 | Essenciais por perto | Aprofundamento da frente “Essenciais do dia a dia”: alimentação, passeio, higiene e descanso, sempre com orientação simples | Mostrar que o negócio ajuda na rotina além do banho e tosa, sem inventar catálogo ou estoque | Painel texto + `LUME-D01` nova; sem métricas e sem cards de produto |
| 6 | CTA final | “Seu pet merece um cuidado…” + apoio + “Chamar a Lume & Pata” | Converter a leitura em conversa no WhatsApp | Painel coral escuro/tinta, PawMark e botão contrastante |
| 7 | Footer Lume | Marca, nicho e link para todos os projetos | Encerrar a experiência e devolver ao portfólio | Fundo tinta; sem wordmark gigante ou asset novo |

### Conteúdo da dobra adicional

A nova dobra de profundidade não deve simular um e-commerce. Ela aprofunda apenas o serviço já citado no código atual:

- Eyebrow sugerida: **Essenciais do dia a dia**.
- Título sugerido: **O que seu pet precisa, mais perto da rotina.**
- Apoio permitido: explicar que a Lume & Pata reúne itens úteis para alimentação, passeio, higiene e descanso e que o tutor pode perguntar pelo WhatsApp.
- CTA permitido: link secundário para o mesmo WhatsApp, sem prometer estoque, preço, entrega ou marca específica.

O texto final pode ser refinado no L-02, mas não pode ampliar a oferta além do que já está declarado no projeto.

## 9. Hero bento detalhado

### Desktop — a partir de 1024 px

- Grid de 12 colunas, duas linhas, gap de 20 px e altura visual alvo entre 620 e 700 px.
- **Painel A — fotografia:** colunas 1–7, linhas 1–2. Usa `LUME-H01`, crop quase quadrado com o cachorro como foco e preserva contexto do espaço. Pode receber uma pequena placa “Um cuidado de cada vez.” no canto inferior, sem cobrir o rosto do pet.
- **Painel B — proposta:** colunas 8–12, linha 1, maior que a linha inferior. Fundo creme/branco, eyebrow, `h1`, texto de apoio, CTA primário e link secundário. É o primeiro conteúdo no DOM.
- **Painel C — sinais de atendimento:** colunas 8–12, linha 2. Fundo sálvia suave, `PawMark` discreto e as três notas atuais: “Conversa antes do cuidado”, “Ambiente tranquilo” e “Contato direto”. Não apresentar essas notas como certificações ou métricas.
- O CTA precisa aparecer sem depender de hover ou rolagem longa em um viewport desktop comum.

### Tablet — 768 a 1023 px

- Grid de duas colunas: proposta ocupa a largura total; foto e sinais de atendimento ficam lado a lado abaixo.
- O `h1` preserva no máximo 4 linhas; o CTA pode quebrar para linha própria.

### Mobile — abaixo de 768 px

- Uma coluna na ordem: proposta, foto, sinais de atendimento.
- Padding de 20–24 px, gap de 12–16 px e raios de 24 px.
- A foto usa aspect ratio entre 4:5 e 1:1; nunca depende de altura absoluta de 25–35 rem.
- CTA primário ocupa a largura disponível quando necessário; link secundário permanece claramente separado.
- O `h1`, CTA e início da foto devem formar a primeira leitura; as três notas podem ficar logo após a imagem.

### Semântica e acessibilidade do hero

- A proposta vem antes da foto no DOM, mesmo quando a foto aparece à esquerda no desktop.
- A imagem mantém alt equivalente ao atual, ajustado somente se o crop mudar o contexto visível.
- A placa sobre a foto é decorativa se repetir texto presente no fluxo; nesse caso, deve ficar fora da árvore acessível.
- Não usar headline embutida na imagem, texto essencial em overlay nem autoplay.

## 10. Inventário do estado atual

### Assets e elementos visuais

| Item | Local/definição | Estado e uso atual | Decisão |
|---|---|---|---|
| Foto principal | `public/images/projects/lume-e-pata-hero.png` | PNG 1536 × 1024, 1.952.059 bytes; usada no hero e novamente em Nosso jeito | Manter apenas em `LUME-H01`; não duplicar em outra dobra |
| `PawMark` | Função local em `page.tsx`, desenhada por cinco spans e CSS | Header, hero note, CTA e footer | Preservar como marca existente neste ciclo; não criar variações decorativas |
| Seta externa | Função local `Arrow`, caractere `↗` | CTAs do header, hero e contato | Não é necessária para compreensão; pode ser removida ou substituída por ícone de biblioteca no L-02 |
| Fontes globais | `globals.css` | DM Sans e Manrope via Google Fonts; Lume usa DM Sans e fallbacks Georgia | Manter global intacto; carregar Playfair/Plus Jakarta apenas na rota no L-02 |

Não existem outros arquivos de imagem, logo, ícone ou ilustração específicos do Lume no repositório.

### Código e dependências relevantes

- `page.tsx` concentra conteúdo, `PawMark`, `Arrow`, navegação e composição.
- `project.module.css` contém o tema local atual, breakpoints em 840/520 px e redução de movimento.
- `siteConfig.contact.whatsappNumber` é a fonte do número; não deve ser copiado para Markdown ou código.
- `getWhatsAppUrl` sanitiza o número e codifica a mensagem atual.
- `layout.tsx` fornece metadados globais e idioma `pt-BR`; a rota possui metadados próprios.
- O projeto não possui biblioteca de ícones instalada.

## 11. Regras de implementação para o L-02

- Implementar a página inteira de uma vez a partir deste contrato, sem reabrir tokens aprovados.
- Preservar os textos atuais por padrão; qualquer copy nova se limita à dobra “Essenciais por perto” definida acima.
- Criar ou selecionar somente `LUME-W01` e `LUME-D01`, após aprovação explícita do contrato; nenhuma outra imagem é necessária.
- Não editar arquivos fora da rota e dos assets específicos do Lume, exceto a documentação obrigatória do checkpoint.
- Não publicar em produção no L-02.
- Entregar desktop e mobile navegáveis para revisão dobra a dobra e consolidar uma única lista de acabamento para L-03.

## 12. Validação do contrato

O L-01 foi confrontado com:

- o design system e o stack documentados do Savory Plate;
- `page.tsx` e `project.module.css` atuais;
- `siteConfig`, `getWhatsAppUrl`, layout e estilos globais usados pela rota;
- o único asset fotográfico existente, inclusive dimensões, enquadramento e uso duplicado;
- as regras de produto, direção visual, acessibilidade e checkpoints do repositório.

Resultado: o contrato preserva a identidade e o fluxo comercial existentes, adapta somente padrões visuais permitidos da referência e identifica duas lacunas fotográficas reais. Nenhuma alteração estrutural ou pública da rota foi feita no L-01.
