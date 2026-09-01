# Lume & Pata — sistema de motion do projeto

> Sistema local de movimento da experiência. As referências legadas permanecem somente leitura; decisões entram aqui somente depois da escolha explícita de Kevin.

## Perfil atual

- Perfil predominante: `balanced`.
- A hero usa uma entrada coreografada curta para copy, fotografia e painel.
- A palavra de fechamento da promessa da hero usa uma roleta tipográfica lenta: cada qualificador permanece por 3 s e sai por completo antes da entrada do próximo, sem deslocar a composição.
- As dobras usam reveal por interseção; Cuidados essenciais acrescenta elevação discreta em dispositivos com hover.
- Fotografias editoriais ampliam levemente em hover.
- Em Nosso jeito, a direção B escolhida usa um palco sticky: fotografia, título e contexto permanecem fixos enquanto o scroll troca somente o passo ativo e o contador.
- Em Essenciais do dia a dia, o refinamento A.2 escolhido usa um trilho espacial persistente: setas, teclado ou gesto lateral deslocam os cards para o lado correspondente, sem autoplay e sem retorno ao estado anterior quando o ponteiro sai.
- No encerramento L-02R5, a opção B — Volta pra casa — abre o portal fotográfico suavemente entre as superfícies sálvia e creme, assenta a composição e conclui o fio em pata. O CTA coral atravessa a emenda no mobile; o footer editorial fecha a experiência com saídas explícitas.
- Nenhuma interação esconde conteúdo essencial da árvore semântica.

## Tokens observados

- Easing principal: `cubic-bezier(0.16, 1, 0.3, 1)`.
- Entrada da hero: 700–900 ms, com delays de 80–420 ms.
- Reveal de seção: 650 ms, `translateY(1rem)`, `blur(4px)` e opacidade.
- Stagger existente em Cuidados essenciais: 80 ms entre itens no desktop; removido abaixo de 768 px.
- Hover de card: 220 ms e deslocamento máximo de `0.28rem`.
- Hover de fotografia: escala máxima de `1.03`.
- Troca de passo de Nosso jeito: 320–440 ms, com opacidade, deslocamento vertical de `1.4rem` e blur de `4px`; o scroll total ocupa 300–320 svh conforme o breakpoint.
- Troca de card em Essenciais: 740 ms, com deslocamento horizontal, escala até `0.935`, rotação máxima de `0.45deg` e contraposição discreta da fotografia; a legenda acompanha o estado em 280–420 ms.
- Abertura do portal de encerramento: 980 ms no easing principal, com `clip-path`, deslocamento de `2.5rem`, escala de `0.94`, blur de `5px` e assentamento para o estado final.
- Roleta tipográfica da hero: 560 ms para a saída e 560 ms para a entrada, com permanência de 3 s entre palavras e o easing principal.

## Comportamentos e limites

- `ScrollRevealController` usa `IntersectionObserver` com `threshold: 0.1` e margem inferior de `-10%`.
- Em `prefers-reduced-motion: reduce`, animações, transições e scroll suave são removidos; os reveals ficam imediatamente no estado final.
- Em `prefers-reduced-motion: reduce`, a roleta tipográfica permanece estática na primeira palavra, sem temporizador nem transição.
- Se `IntersectionObserver` não existir, todo o conteúdo é revelado imediatamente.
- O scroll divide o percurso de Nosso jeito em três intervalos equivalentes e atualiza `01/03`, `02/03` e `03/03`.
- Os botões 1–2–3 oferecem seleção explícita por teclado e toque e deslocam a página até o intervalo correspondente.
- Em `prefers-reduced-motion: reduce`, o sticky é removido e os três passos aparecem simultaneamente no fluxo, sem transições ou scroll programático.
- Em Essenciais, a escolha persiste até nova ação explícita por seta, teclado ou gesto lateral. A faixa do card usa uma legenda contextual — “Para alimentar”, “Para passear”, “Para cuidar” ou “Para descansar” — enquanto a navegação inferior mantém os nomes das quatro categorias e destaca a ativa.
- Em `prefers-reduced-motion: reduce`, troca de card, fotografia, seta e legenda ficam instantâneas, mantendo o estado selecionado e todos os controles disponíveis.
- Em L-02R5, o mesmo observador de interseção dispara a abertura do portal. Em movimento reduzido, o portal nasce aberto, sem clip, blur, deslocamento ou transição.

## Motores atuais

- CSS para keyframes, transições e hovers.
- React/DOM nativo em `ScrollRevealController.tsx` apenas para observar entrada no viewport e aplicar delays.
- React/DOM nativo em `WayStory.tsx` para medir progresso de scroll com `requestAnimationFrame`, alternar o passo ativo e oferecer os seletores acessíveis.
- React/DOM nativo em `EssentialsShelf.tsx` para coordenar seleção persistente, toque e teclado; CSS executa o deslocamento dos cards e a sincronização visual da legenda.
- React/DOM nativo em `RotatingWord.tsx` para alternar qualificadores tipográficos em um intervalo legível; CSS local move somente a palavra que entra e a que sai.
- CSS + `ScrollRevealController.tsx` para a abertura do portal e o assentamento do encerramento; nenhuma dependência adicional foi necessária.
- Nenhuma dependência de Motion, GSAP ou Three.js está ativa nesta rota.

## Decisões aprovadas por dobra

- `L-02R1`: entrada sequenciada de copy, portal fotográfico e painel de atendimento; estado final completo em movimento reduzido.
- `L-02R2`: reveal dos elementos no fluxo e elevação sutil dos cards somente em dispositivos com hover; conteúdo permanece estático e completo sem interação.
- `L-02R3`: direção B — Palco em três tempos — escolhida e aprovada explicitamente por Kevin para avanço em 2026-08-18; a ressalva de QA automatizada permanece em `design-qa.md`.
- `L-02R4`: refinamento A.2 — Trilho de momentos — aprovado explicitamente por Kevin em 2026-08-20; o refinamento tipográfico híbrido usa o tratamento A na faixa do card, conteúdo contextual distinto e navegação inferior A sincronizada. A dobra está congelada.
- `L-02R5`: opção B — Volta pra casa — escolhida explicitamente por Kevin em 2026-08-20 e implementada com CSS + observador local. A QA browser-rendered passou em 390, 768, 1024 e 1440 px; o gate continua aberto até a aprovação visual explícita de Kevin.
