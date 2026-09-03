# Prompt da próxima task — publicação e handoff

> Este é o único arquivo que Kevin precisa abrir para iniciar a próxima task. Copie o bloco abaixo inteiro e cole em uma conversa nova.

## Checkpoint atual

`Publicar o fechamento aprovado do portfólio e sincronizar o Freela Ops`

A direção **A — Faixas de projetos**, a Brisa de Tecido e a Lume & Pata estão implementadas, aprovadas e validadas localmente. Não abrir uma nova rodada A/B/C sem pedido de Kevin.

## Prompt para copiar

```text
Continue somente o fechamento de publicação do site institucional já aprovado localmente.

Estado real: Kevin aprovou o fechamento visual completo em 2026-09-03. P-01 e B-04 passaram pela validação local: entrada uniforme de `/projetos` em Home/Lume/Brisa/refresh, hero da Brisa funcionando após navegação client-side, comparador e seletor funcionais, desktop e 390 × 844 sem overflow ou imagens quebradas, semântica e movimento reduzido conferidos. A produção continua na versão anterior. Não reabra opções A/B/C, não crie categorias ou projetos fictícios e não altere o escopo visual aprovado.

Leia integralmente antes de agir:

1. AGENTS.md
2. contexto-projeto.md
3. status-projeto.md
4. tasks.md
5. plano-refatoracao-projetos.md
6. design-qa.md
7. src/app/projetos/page.tsx
8. src/app/projetos/page.module.css
9. src/app/globals.css
10. src/content/projects.ts
11. docs/design/zucco/portfolio-catalog.md

OBJETIVO

- Confirmar que lint, build e `git diff --check` continuam passando no estado exato a publicar.
- Publicar exatamente o estado aprovado, sem alterações visuais adicionais.
- Antes de qualquer push ou publicação, confirmar explicitamente com Kevin o destino e a versão.

Depois da publicação, verificar as quatro rotas públicas em desktop e mobile e registrar somente o resultado necessário no handoff do Freela Ops.
```

## Regra de manutenção

Este arquivo aponta para o gate de publicação. P-01 e B-04 estão aprovados e validados localmente.
