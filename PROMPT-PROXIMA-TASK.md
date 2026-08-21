# Prompt da próxima task — projetos do portfólio

> Este é o único arquivo que Kevin precisa abrir para iniciar a próxima task. Copie o bloco abaixo inteiro e cole em uma conversa nova. O checkpoint pode ocupar vários turnos. O agente só substitui este arquivo depois do próximo gate aprovado.

## Checkpoint atual

`B-01R1 — Brisa de Tecido — revalidação do Design System, fundação, cabeçalho e hero — gerar A/B/C e aguardar escolha`

## Prompt para copiar

```text
Continue a refatoração dos projetos do portfólio no checkpoint B-01R1 — Brisa de Tecido — revalidação do Design System, fundação, cabeçalho e hero.

O Lume & Pata foi concluído e aprovado por Kevin como experiência visual local em 2026-08-20. Preserve integralmente sua rota, seus arquivos e suas decisões; não faça ajustes de oportunidade no Lume. A refatoração ainda não foi publicada e nenhuma publicação está autorizada nesta task.

O objetivo agora é reconstruir o Brisa de Tecido dobra a dobra, como foi feito no Lume. O site atual é funcional, porém visualmente simples demais. A identidade cromática pode permanecer, mas composição, hierarquia, posições, proporções, tipografia, efeitos, componentes e motion podem ser profundamente refeitos. Nesta task, trabalhe somente na fundação, barra de contexto/cabeçalho e hero; as demais dobras devem permanecer intactas.

ANTES DE PROPOR OU EXECUTAR TRABALHO

Leia integralmente:

1. AGENTS.md
2. contexto-projeto.md
3. status-projeto.md
4. tasks.md
5. spec.md
6. constitution.md
7. plan.md
8. plano-refatoracao-projetos.md
9. PROMPT-PROXIMA-TASK.md
10. src/app/projetos/brisa-de-tecido/page.tsx
11. src/app/projetos/brisa-de-tecido/project.module.css
12. src/content/site.ts
13. src/lib/contact.ts
14. src/app/globals.css
15. ds_temporarios/open-design.ai/STACK.md
16. ds_temporarios/open-design.ai/design-system.html
17. ds_temporarios/echelon.aura.build/STACK.md e design-system.html somente se forem necessários para comparar um comportamento de motion pontual
18. $site-creation-workflow
19. $design-fold-workshop

STACK E LIMITES TÉCNICOS

- Este repositório continua em Next.js 16, React e App Router.
- Não executar $start-project, $start-project-visual, npm create astro, instalar Astro ou migrar o repositório.
- Os arquivos em ds_temporarios são referências legadas somente leitura. Não regenerar, sobrescrever ou executar $extract-site-system neles.
- Não fazer deploy, commit, push ou alterar configuração de produção nesta task.
- Não modificar Home da Zucco, /projetos, Lume & Pata ou dobras posteriores da própria Brisa.

PAPEL E CONTEÚDO DA BRISA

- Brisa de Tecido é uma landing page de serviço local de higienização de estofados em domicílio, orientada a entendimento rápido da oferta e conversão pelo WhatsApp.
- A rota deve continuar sendo /projetos/brisa-de-tecido.
- Preserve conteúdo honesto: não invente cliente, case, depoimento, resultado, métrica, certificação, preço, disponibilidade, garantia, produto químico, prazo ou promessa técnica.
- Preserve a configuração central de contato via siteConfig.contact.whatsappNumber e getWhatsAppUrl; não duplique número ou mensagem manualmente.
- Preserve um único h1, semântica, foco, teclado, toque, movimento reduzido, textos alternativos e navegação funcional.
- A fundação deve prever saídas diretas e distintas para a Home da Zucco e para /projetos, mas só implemente isso depois da escolha visual de Kevin.

DESIGN SYSTEM — REVALIDAÇÃO OBRIGATÓRIA

OpenDesign é a referência estrutural de partida, não uma aparência para copiar. Revalide-a contra a Brisa atual antes das opções:

- identificar o que continua útil: grid editorial, hierarquia, mistura controlada de fontes, linhas, cards, etapas numeradas, accordion e scroll reveal leve;
- identificar o que deve ser rejeitado: paleta pastel/artística, linguagem arquitetônica, luxo, abstração excessiva, marca, textos, imagens, métricas e conteúdo da referência;
- traduzir os princípios úteis para uma identidade prática, tátil, robusta e ligada ao cuidado doméstico;
- usar Echelon somente como apoio eventual para composição ou movimento, nunca sua paleta dourada ou linguagem de luxo;
- não usar Lume & Pata nem a Home da Zucco como silhueta, cabeçalho, hero ou linguagem de motion.

A paleta atual é o ponto de partida a preservar nas três opções:

- verde profundo: #17221f;
- verde profundo secundário: #21302c;
- eucalipto: #567b6d;
- verde ácido: #c8f06b, somente como acento;
- papel/linho: #f2f0e8.

Revalidar não significa congelar a implementação atual. Tipografia, grid, bordas, textura, botões, tratamento fotográfico e movimento devem ser reconsiderados. A conclusão da revalidação deve aparecer concretamente nas opções visuais, não como um contrato textual longo e separado.

ESCOPO EXATO DE B-01R1

1. Auditar a barra de retorno/contexto, o cabeçalho local e a hero atuais no navegador em desktop e mobile.
2. Definir a função comercial da primeira dobra: explicar o serviço, transmitir cuidado técnico e doméstico e levar ao orçamento pelo WhatsApp.
3. Preservar como conteúdo-base da hero:
   - eyebrow “Higienização em domicílio”;
   - promessa “Seu sofá mais leve. Sua sala com outro respiro.”, podendo recalibrar quebras e ênfase sem alterar o sentido;
   - apoio sobre higienização, rotina e orçamento por fotos e medidas;
   - CTA prioritário para pedir orçamento pelo WhatsApp;
   - fotografia local public/images/projects/brisa-de-tecido-hero.png como ativo disponível para as opções;
   - informações rápidas sobre fotos, medidas e bairro, podendo mudar de posição ou forma visual.
4. Explorar efeitos e movimento com mais ambição que a versão atual, mas com propósito, desempenho proporcional e fallback para prefers-reduced-motion.
5. Não redesenhar ainda “O serviço”, “Como funciona”, “Antes de chamar”, CTA final ou footer. Só planeje a saída imediata da hero para a próxima dobra.

GATE OBRIGATÓRIO — PRIMEIRA RESPOSTA DESTA TASK

Produza exatamente três alvos visuais concretos e estruturalmente distintos, A/B/C, antes de qualquer alteração no código da aplicação.

Cada direção deve:

- mostrar desktop e mobile;
- ser uma imagem ou prancha visual suficientemente fiel para julgar composição, tipografia, espaçamento, fotografia, cabeçalho, CTA e transição de saída;
- usar a mesma identidade cromática e o mesmo conteúdo obrigatório, para a escolha avaliar direção e não requisitos diferentes;
- diferir de verdade em arquitetura, hierarquia, relação texto/fotografia, ritmo, tratamento de superfície e interação — não apenas em cores ou bordas;
- trazer uma assinatura de motion concreta: entrada, resposta do CTA/cabeçalho, comportamento de scroll e um único momento memorável;
- explicar em poucas linhas o princípio herdado do OpenDesign e como foi adaptado à Brisa;
- permanecer prática e acessível, sem parecer estúdio de arquitetura, marca de luxo, galeria artística, e-commerce ou cópia do Lume.

Recomende uma das três opções com justificativa objetiva. Preserve a prancha em docs/design/brisa-de-tecido/references/ com nome estável e atualize um README local se for criado.

Depois de apresentar A/B/C, PARE. Aguarde Kevin escolher explicitamente uma direção. Não editar page.tsx, project.module.css, assets de produção, motion-system, status, tasks ou qualquer dobra nesta primeira etapa. Não misturar opções rejeitadas.

SOMENTE DEPOIS DA ESCOLHA EXPLÍCITA

- registre a direção escolhida como fonte de verdade da fundação e hero;
- implemente somente barra de contexto/cabeçalho, hero e sua saída imediata;
- preserve todas as dobras posteriores;
- compare a referência escolhida e o render no mesmo viewport;
- valide 390, 768, 1024 e desktop, console, overflow, um único h1, foco, teclado, toque, CTA, imagens e movimento reduzido;
- pare novamente no gate de aprovação da hero;
- só depois da aprovação substitua PROMPT-PROXIMA-TASK.md pelo checkpoint da próxima dobra da Brisa.

CRITÉRIO DE CONCLUSÃO

B-01R1 só termina quando houver: revalidação concreta do Design System, direção A/B/C escolhida, implementação fiel da opção escolhida, QA visual e técnica proporcional e aprovação explícita de Kevin. Até lá, nenhuma outra dobra da Brisa e nenhuma publicação podem avançar.
```

## Regra de manutenção

Este arquivo é um ponteiro móvel. Ele deve continuar apontando para B-01R1 até exploração, escolha, implementação, QA e gate visual da fundação/cabeçalho/hero estarem concluídos. Somente depois disso substitua-o pelo prompt autocontido da próxima dobra da Brisa.
