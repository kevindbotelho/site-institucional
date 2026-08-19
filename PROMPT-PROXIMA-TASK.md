# Prompt da próxima task — projetos do portfólio

> Este é o único arquivo que Kevin precisa abrir para iniciar a próxima task. Copie o bloco abaixo inteiro e cole em uma conversa nova. O checkpoint pode ocupar vários turnos. O agente só substitui este arquivo depois do próximo gate aprovado.

## Checkpoint atual

`L-02R4 — Essenciais do dia a dia do Lume & Pata`

## Prompt para copiar

```text
Continue a refatoração dos projetos do portfólio no checkpoint L-02R4 — Essenciais do dia a dia do Lume & Pata.

Os três checkpoints anteriores estão encerrados e devem ser preservados integralmente:

- L-02R1: opção A — Portal de acolhimento — aprovada em 2026-08-13 para fundação, barra da Zucco, cabeçalho local e hero.
- L-02R2: opção B — Mosaico de rotinas — combinada com a faixa “Rotina leve, pet feliz sempre.”, aprovada em 2026-08-13 para Cuidados essenciais.
- L-02R3: opção B — Palco em três tempos — aprovada explicitamente por Kevin para avanço em 2026-08-18. A implementação sticky 1–2–3 atual fica congelada. A QA automatizada permaneceu bloqueada por ausência de captura browser-rendered normalizada; registre essa ressalva sem reabrir ou redesenhar Nosso jeito.

Antes de propor ou executar trabalho, leia integralmente:

1. AGENTS.md
2. contexto-projeto.md
3. status-projeto.md
4. tasks.md
5. spec.md
6. direcao-visual.md
7. plan.md
8. plano-refatoracao-projetos.md
9. PROMPT-PROXIMA-TASK.md
10. design-qa.md
11. src/app/projetos/lume-e-pata/DIRECAO-CRIATIVA-L02R.md
12. src/app/projetos/lume-e-pata/CONTRATO-VISUAL.md
13. src/app/projetos/lume-e-pata/motion-system.md
14. src/app/projetos/lume-e-pata/motion-inventory.json
15. todos os arquivos atuais de src/app/projetos/lume-e-pata/
16. src/components/motion/ScrollRevealController.tsx
17. src/content/site.ts
18. src/lib/contact.ts
19. src/app/layout.tsx
20. src/app/globals.css
21. `$site-creation-workflow`, instalada no escopo global do Codex
22. `$design-fold-workshop`, instalada no escopo global do Codex
23. ds_temporarios/savory-plate.aura.build/STACK.md
24. ds_temporarios/savory-plate.aura.build/design-system.html
25. ds_temporarios/open-design.ai/STACK.md
26. ds_temporarios/open-design.ai/design-system.html
27. C:\Projetos\design systems\lumen-lp-system\README.md
28. C:\Projetos\design systems\lumen-lp-system\index.html
29. public/images/projects/lume-l02r1-opcao-a-reference.png
30. public/images/projects/lume-l02r3-opcao-b-reference.png
31. public/images/projects/lume-e-pata-hero.png
32. public/images/projects/lume-e-pata-nosso-jeito.png
33. public/images/projects/lume-e-pata-essenciais.png
34. l02r2-approved-final.png

Use obrigatoriamente `$site-creation-workflow` como orquestrador e `$design-fold-workshop` para o checkpoint visual. Trabalhe uma dobra por vez. Nesta task, o único checkpoint aberto é Essenciais do dia a dia.

Não execute `$start-project` nem `$start-project-visual`: este projeto já está fundado.

DESIGN SYSTEMS LEGADOS — SOMENTE LEITURA

- `ds_temporarios/savory-plate.aura.build/design-system.html` é a referência principal aprovada do Lume; `ds_temporarios/open-design.ai/design-system.html` é a referência secundária.
- Não regenere, não sobrescreva e não execute `$extract-site-system` nesses Design Systems.
- A ausência de `source-motion-system.md` ou `source-motion-inventory.json` nas referências legadas não é erro e não deve ser preenchida com inferências.
- Motion aprovado e implementado pertence aos artefatos locais da experiência Lume & Pata.
- Não altere visualmente Home da Zucco, `/projetos`, Brisa de Tecido ou qualquer arquivo de `ds_temporarios/`.

PRESERVE INTEGRALMENTE

- Barra de retorno à Zucco, cabeçalho local e hero do Lume.
- Cuidados essenciais, incluindo cards, fios, ícones, círculo sálvia, pata e faixa editorial.
- Nosso jeito atual, incluindo fotografia, superfície sálvia, narrativa sticky, contador e estados 1–2–3.
- CTA final e footer no estado atual; eles pertencem ao checkpoint L-02R5.
- Rota, metadados, único `h1`, âncoras, configuração central de WhatsApp, conteúdo honesto, foco, teclado, toque e movimento reduzido.
- Nenhuma publicação em produção está autorizada.

FUNÇÃO DE ESSENCIAIS DO DIA A DIA

A dobra deve ampliar a percepção da Lume & Pata além de banho e tosa, mostrando ajuda prática para a rotina sem simular catálogo, estoque, e-commerce ou disponibilidade de produtos.

Conteúdo obrigatório:

- Eyebrow: “Essenciais do dia a dia”.
- Título: “O que seu pet precisa, mais perto da rotina.”
- Apoio: “A Lume & Pata reúne itens úteis para alimentação, passeio, higiene e descanso. Se estiver procurando algo para facilitar a rotina, é só perguntar pelo WhatsApp.”
- CTA: “Perguntar pelo WhatsApp”, usando a configuração central já existente.
- Categorias permitidas: alimentação, passeio, higiene e descanso.
- Imagem atual: `public/images/projects/lume-e-pata-essenciais.png`. Ela é matéria-prima e pode ser recortada, mascarada ou reposicionada nas opções; não é obrigação manter o split atual.

Não invente preços, marcas, quantidade de itens, estoque, entrega, prazo, promoção, avaliação, depoimento, cliente, métrica ou qualquer promessa comercial não existente.

FASE 1 — EXPLORAÇÃO VISUAL, SEM CÓDIGO

1. Abra a rota local e capture em desktop e mobile a saída de Nosso jeito, toda a dobra Essenciais do dia a dia atual e a entrada do CTA final.
2. Analise a continuidade: a nova dobra deve receber a saída do palco sticky sem alterar sua composição e deve entregar uma transição coerente ao CTA, sem redesenhá-lo.
3. Produza exatamente três alvos visuais concretos e estruturalmente distintos, A, B e C.
4. Cada alvo deve mostrar desktop e mobile, a fotografia, as quatro categorias permitidas, o CTA de WhatsApp, a entrada e a saída da dobra.
5. Faça as opções divergirem em composição, hierarquia, ritmo, relação entre texto e fotografia e comportamento de exploração. Não apresente três variações cosméticas.
6. Explore caminhos como prateleira editorial, colagem, faixa/marquee controlada ou pilha deslizável, mas escolha estruturas que façam sentido para o conteúdo real. Não use grade genérica de cards iguais.
7. Dê a cada opção uma assinatura de motion concreta: entrada, interação, scroll, gesto de assinatura e estado reduzido.
8. Toda informação essencial deve permanecer acessível sem hover. Interações por arraste, scroll ou seleção precisam de alternativa por botões, teclado e toque.
9. O estado parado deve continuar interessante e compreensível.
10. Recomende uma direção e explique brevemente por que ela aprofunda a rotina sem parecer catálogo ou repetir Cuidados essenciais e Nosso jeito.
11. Apresente as três imagens e pare. Não edite código, não produza assets finais e não escolha por Kevin.

FASE 2 — SOMENTE APÓS A ESCOLHA EXPLÍCITA DE KEVIN

Implemente apenas a opção escolhida e somente:

- a transição imediata de Nosso jeito para Essenciais do dia a dia;
- a composição completa da dobra em desktop e mobile;
- seus estados de hover, foco, teclado, toque, scroll e movimento reduzido;
- a saída imediata para o CTA final, sem redesenhar o CTA.

Depois da escolha:

1. Preserve o alvo escolhido como referência durável.
2. Use a imagem existente quando ela sustentar a direção; só crie ou substitua asset depois de a escolha demonstrar necessidade real.
3. Implemente a tecnologia mais simples adequada ao comportamento aprovado.
4. Compare referência e implementação no mesmo viewport e estado.
5. Corrija diferenças P0, P1 e P2 antes de pedir aprovação.
6. Valide 390, 768, 1024 e desktop; console; overflow; foco; teclado; toque; movimento reduzido; assets; lint restrito; build.
7. Atualize `motion-system.md`, `motion-inventory.json`, `design-qa.md`, `DIRECAO-CRIATIVA-L02R.md`, `plano-refatoracao-projetos.md`, `tasks.md` e `status-projeto.md` conforme o estado real.
8. Mantenha `PROMPT-PROXIMA-TASK.md` em L-02R4 até implementação, QA e aprovação explícita de Kevin. Somente depois disso avance para L-02R5.
9. Não faça deploy.

CRITÉRIO DO GATE

Considere L-02R4 concluído somente quando houver alvo escolhido, implementação funcional, comparação visual válida, validação técnica proporcional e aprovação explícita de Kevin. Até lá, L-02R5 permanece fechado.
```

## Regra de manutenção

Este arquivo é um ponteiro móvel. Ele deve continuar apontando para L-02R4 até exploração, escolha, implementação, QA e gate visual estarem concluídos. Somente depois disso substitua-o pelo prompt autocontido de L-02R5.
