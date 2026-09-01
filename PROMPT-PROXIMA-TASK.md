# Prompt da próxima task — P-01

> Este é o único arquivo que Kevin precisa abrir para iniciar a próxima task. Copie o bloco abaixo inteiro e cole em uma conversa nova.

## Checkpoint atual

`P-01 — alinhamento final do portfólio: revisão visual dos cards de /projetos`

A direção já escolhida é **A — Faixas de projetos**. Ela foi implementada localmente e aguarda somente a revisão visual explícita de Kevin; não abrir uma nova rodada A/B/C sem pedido dele.

## Prompt para copiar

```text
Continue somente o checkpoint P-01 — alinhamento final do portfólio, no gate de revisão visual dos cards de `/projetos`.

Estado real: Kevin escolheu e aprovou a direção A — Faixas de projetos. A implementação local atualizou somente a apresentação de `/projetos`: hero e catálogo compartilham um fundo contínuo; a última expressão do título roda lentamente em uma janela tipográfica; “Projetos em destaque” é uma primeira faixa horizontal escalável. Os cards são capas compactas, com imagem integral, etiqueta de tipo, título, resumo e seta horizontal, sem moldura interna. Em celular, o próximo card fica parcialmente visível e a faixa pode ser movida por toque, teclado, arraste por mouse ou controles laterais quando houver conteúdo fora da área visível. O mesmo componente de roleta tipográfica está na hero de Lume & Pata e respeita movimento reduzido. A taxonomia, o contrato de novos itens e o padrão de motion estão em `docs/design/zucco/portfolio-catalog.md`. A Home, a estrutura, os CTAs e a navegação institucionais permanecem fora de escopo e inalterados. Não reabra opções A/B/C, não crie categorias ou projetos fictícios para preencher o catálogo, não altere a Home e não publique, faça commit, push, instale dependências ou mude configurações de produção.

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

- Abrir `http://localhost:3001/projetos` e revisar a implementação no mesmo espírito da prancha A aprovada por Kevin.
- Conferir desktop e mobile: imagem de capa, leitura da etiqueta/título/resumo, moldura, seta, crop, contraste, foco visível, toque, ausência de overflow e movimento reduzido.
- Conferir que os dois destinos continuam corretos: `/projetos/lume-e-pata` e `/projetos/brisa-de-tecido`.
- Corrigir somente diferenças P0, P1 ou P2 objetivamente observáveis nos cards de `/projetos`. Não ampliar escopo.
- Rodar lint restrito aos arquivos alterados, `npm run build`, console e `git diff --check` em proporção à mudança.
- Ao final, parar e pedir a aprovação explícita de Kevin. Enquanto ela não existir, registre o checkpoint como pronto para revisão, não como concluído.

Se Kevin aprovar sem ajustes, a próxima conversa deverá executar B-04 e o fechamento técnico conjunto de P-01, sem publicar automaticamente. A decisão comercial de publicação permanece com Kevin.
```

## Regra de manutenção

Este arquivo aponta para o gate atual de P-01. Só deve ser substituído quando Kevin aprovar os cards ou abrir um ajuste objetivo para eles.
