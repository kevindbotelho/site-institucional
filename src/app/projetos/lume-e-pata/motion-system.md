# Lume & Pata — sistema de motion do projeto

> Sistema local de movimento da experiência. As referências legadas permanecem somente leitura; decisões entram aqui somente depois da escolha explícita de Kevin.

## Perfil atual

- Perfil predominante: `balanced`.
- A hero usa uma entrada coreografada curta para copy, fotografia e painel.
- As dobras usam reveal por interseção; Cuidados essenciais acrescenta elevação discreta em dispositivos com hover.
- Fotografias editoriais ampliam levemente em hover.
- Em Nosso jeito, a direção B escolhida usa um palco sticky: fotografia, título e contexto permanecem fixos enquanto o scroll troca somente o passo ativo e o contador.
- Em Essenciais do dia a dia, a direção A escolhida usa uma prateleira editorial interativa: hover pré-visualiza, clique ou foco fixa a categoria e toque seleciona no mobile.
- Nenhuma interação esconde conteúdo essencial da árvore semântica.

## Tokens observados

- Easing principal: `cubic-bezier(0.16, 1, 0.3, 1)`.
- Entrada da hero: 700–900 ms, com delays de 80–420 ms.
- Reveal de seção: 650 ms, `translateY(1rem)`, `blur(4px)` e opacidade.
- Stagger existente em Cuidados essenciais: 80 ms entre itens no desktop; removido abaixo de 768 px.
- Hover de card: 220 ms e deslocamento máximo de `0.28rem`.
- Hover de fotografia: escala máxima de `1.03`.
- Troca de passo de Nosso jeito: 320–440 ms, com opacidade, deslocamento vertical de `1.4rem` e blur de `4px`; o scroll total ocupa 300–320 svh conforme o breakpoint.
- Troca fotográfica de Essenciais: 680–850 ms, com `clip-path` horizontal, escala máxima de `1.035` e feixe de luz de 780 ms; a seta ativa usa um ciclo de 1300 ms.

## Comportamentos e limites

- `ScrollRevealController` usa `IntersectionObserver` com `threshold: 0.1` e margem inferior de `-10%`.
- Em `prefers-reduced-motion: reduce`, animações, transições e scroll suave são removidos; os reveals ficam imediatamente no estado final.
- Se `IntersectionObserver` não existir, todo o conteúdo é revelado imediatamente.
- O scroll divide o percurso de Nosso jeito em três intervalos equivalentes e atualiza `01/03`, `02/03` e `03/03`.
- Os botões 1–2–3 oferecem seleção explícita por teclado e toque e deslocam a página até o intervalo correspondente.
- Em `prefers-reduced-motion: reduce`, o sticky é removido e os três passos aparecem simultaneamente no fluxo, sem transições ou scroll programático.
- Em Essenciais, todas as quatro categorias permanecem visíveis; hover é apenas pré-visualização e a última escolha por clique ou foco persiste quando o ponteiro sai. Setas, Home e End também selecionam e movem foco.
- Em `prefers-reduced-motion: reduce`, troca de foto, feixe, seta e deslocamentos ficam instantâneos, mantendo a fotografia selecionada e todos os controles disponíveis.

## Motores atuais

- CSS para keyframes, transições e hovers.
- React/DOM nativo em `ScrollRevealController.tsx` apenas para observar entrada no viewport e aplicar delays.
- React/DOM nativo em `WayStory.tsx` para medir progresso de scroll com `requestAnimationFrame`, alternar o passo ativo e oferecer os seletores acessíveis.
- React/DOM nativo em `EssentialsShelf.tsx` para coordenar hover, seleção persistente, toque e teclado; CSS executa toda a transição visual.
- Nenhuma dependência de Motion, GSAP ou Three.js está ativa nesta rota.

## Decisões aprovadas por dobra

- `L-02R1`: entrada sequenciada de copy, portal fotográfico e painel de atendimento; estado final completo em movimento reduzido.
- `L-02R2`: reveal dos elementos no fluxo e elevação sutil dos cards somente em dispositivos com hover; conteúdo permanece estático e completo sem interação.
- `L-02R3`: direção B — Palco em três tempos — escolhida e aprovada explicitamente por Kevin para avanço em 2026-08-18; a ressalva de QA automatizada permanece em `design-qa.md`.
- `L-02R4`: direção A — Prateleira editorial — escolhida por Kevin em 2026-08-18, implementada e validada tecnicamente; aguarda aprovação visual explícita no gate.
