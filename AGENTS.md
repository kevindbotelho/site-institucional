# Instruções para agentes — Site institucional

## Leitura obrigatória

Antes de propor ou executar trabalho neste projeto:

1. Leia `contexto-projeto.md`.
2. Leia `status-projeto.md`.
3. Consulte `tasks.md` e os documentos de produto ou design relacionados à tarefa.

## Fonte de verdade do estado atual

`status-projeto.md` descreve o estado atual do site para pessoas e para outros workspaces, especialmente `../freela-ops`.

Atualize `status-projeto.md` na mesma tarefa sempre que uma alteração mudar:

- páginas, rotas ou seções existentes;
- ordem ou função das dobras da Home;
- navegação, âncoras ou destinos de links;
- CTAs, canais de contato ou mensagem comercial apresentada;
- oferta, posicionamento ou provas exibidas;
- estado de publicação e URL pública;
- conclusão ou reabertura de um marco relevante;
- resultado de uma validação que altere o que pode ser considerado pronto.

Não transforme o arquivo em changelog. Refatorações internas e ajustes visuais pequenos que não mudam o estado útil para outro projeto não exigem uma nova entrada. Em caso de dúvida, atualize a descrição atual em vez de adicionar histórico.

`tasks.md` continua sendo o backlog detalhado. `status-projeto.md` deve responder apenas: o que existe agora, o que ainda não existe, o que está bloqueando o próximo marco e qual é a interface pública disponível.

## Framework deste repositório

- Este projeto permanece em **Next.js 16 com React e App Router**. Não executar `npm create astro@latest`, instalar `astro` nem adicionar configuração do Astro dentro deste repositório.
- Toda nova página, rota ou demonstração hospedada sob este mesmo projeto deve usar a stack existente em Next.js.
- Um futuro site institucional, landing page ou portfólio independente pode nascer em Astro num projeto irmão e ser ligado a `/projetos` quando essa inclusão for comercialmente aprovada.
- Migrar a Zucco para Astro não faz parte do ciclo atual e não acontece automaticamente depois de Lume & Pata e Brisa de Tecido. Essa hipótese só pode ser aberta como tarefa separada, com aprovação explícita, depois da conclusão e publicação da refatoração visual atual e após Astro ter sido validado em ao menos um projeto independente.
- Se essa migração vier a ser aprovada, construir em um repositório ou diretório irmão, preservar a versão Next funcionando e fazer a troca apenas depois de paridade visual, funcional e técnica; nunca converter este repositório em uso no próprio lugar.

## Método de construção visual

Este repositório já foi fundado. Não execute `$start-project` nem `$start-project-visual` novamente para recomeçar ou reescrever `spec.md`, `constitution.md`, `plan.md` ou `tasks.md`. A skill visual permanece disponível apenas como referência para novos projetos.

Ao criar ou refatorar páginas, telas ou dobras visuais:

1. use `$site-creation-workflow` como orquestrador de Design System, motion e qualidade;
2. use `$design-fold-workshop` para trabalhar **uma dobra por vez**;
3. deixe a IA diagnosticar e propor motion; Kevin escolhe a direção A/B/C, não cada detalhe técnico da animação.

Fluxo obrigatório por dobra:

1. entenda a função, o conteúdo, o design system e as restrições da dobra;
2. gere exatamente três alvos visuais concretos e distintos, A/B/C, antes do código;
3. aguarde Kevin escolher explicitamente uma direção;
4. implemente somente a opção escolhida e somente a dobra em escopo;
5. compare a referência e a captura renderizada no mesmo viewport, corrija diferenças relevantes e pare no gate de aprovação;
6. avance apenas depois da aprovação explícita de Kevin.

### Qualidade do alvo criativo

- A prancha A/B/C é uma proposta de direção de arte para o site final, não wireframe, diagrama de arquitetura, documentação de componentes nem versão propositalmente crua que “ficará bonita depois”. A opção escolhida deve poder ser implementada visualmente muito próxima do que Kevin julgou.
- Cada opção deve já expressar a tipografia, densidade, contraste, escala, matéria, ícones, composição e motion da experiência. Não apresentar `Arial`, `Georgia`, texto genérico, SVG esquemático, boxes vazios, ilustração improvisada ou estética de site antigo como substituto de uma prancha visual de verdade.
- A exploração pode propor um asset novo ou uma transformação visual que ainda não exista no repositório quando isso fortalecer a direção. Em cada opção, declarar em uma linha se o asset é existente, será criado depois da escolha ou é somente referência de intenção; a ausência de asset local nunca justifica rebaixar a direção para um layout genérico.
- Depois da escolha, a IA deve criar ou adaptar o asset previsto, quando isso estiver no escopo e não exigir custo, licença fechada ou uma decisão comercial. Se houver esse impedimento, deve avisar Kevin antes de substituir silenciosamente a composição por uma versão mais fraca.
- Motion precisa ser visível e julgável na prancha por frames, estados ou anotação concreta. Não prometer que uma animação futura transformará uma composição fraca em uma experiência forte.

Não trate as três opções como variações cosméticas e não comprima exploração, escolha, implementação e QA em uma única passada. Quando o pedido envolver um site inteiro, divida-o em checkpoints de dobra e concentre a energia no primeiro checkpoint aberto.

### Design Systems legados e motion

- Os arquivos em `ds_temporarios/*/design-system.html` são Design Systems legados aprovados e referências somente leitura.
- Não regenerar, sobrescrever ou executar `$extract-site-system` nesses arquivos. Essa skill fica reservada para novas referências que ainda possuam `index.html` original e assets.
- A ausência de `source-motion-system.md` ou `source-motion-inventory.json` não invalida um Design System legado e não deve ser preenchida com inferências inventadas.
- Criar os artefatos de motion do projeto ao lado da experiência correspondente, não dentro do Design System legado. Para Lume & Pata, usar `src/app/projetos/lume-e-pata/motion-system.md`, `motion-inventory.json` e `components-motion/` conforme existirem decisões ou componentes reais.
- Preservar integralmente dobras já aprovadas. Motion novo entra nas opções A/B/C da dobra aberta e só é implementado depois da escolha explícita.

### Organização de artefatos

- Reserve a raiz para documentos canônicos de controle e handoff (`AGENTS.md`, `README.md`, `contexto-projeto.md`, `status-projeto.md`, `tasks.md`, `spec.md`, `plan.md`, `constitution.md`, `PROMPT-PROXIMA-TASK.md` e documentos equivalentes já referenciados pelo fluxo) e para arquivos de configuração.
- Guarde pranchas A/B/C, canvases e referências visuais duráveis em `docs/design/<experiencia>/references/`. Depois da escolha, preserve a direção escolhida e remova explorações rejeitadas ou intermediárias que não tenham valor de auditoria.
- Mantenha em `public/` somente imagens realmente consumidas pela aplicação. Não use `public/`, a raiz do projeto ou pastas de código como depósito de capturas de discussão.
- Guarde screenshots e comparações temporárias de QA em `tmp/codex/qa/` e logs de servidores locais em `tmp/codex/logs/`. `tmp/` é material local ignorado pelo Git e não deve ser fonte de verdade documental.
- Nunca crie logs `.codex-*.log`, canvases ou PNGs de QA na raiz. Antes de remover material antigo, inventarie os alvos exatos, confirme que a referência escolhida está preservada e informe o que é ou não recuperável.

## Relação com o Freela Ops

- Decisões comerciais aprovadas chegam por `../freela-ops/handoffs/portfolio.md`.
- O estado técnico e público do site sai deste projeto por `status-projeto.md`.
- Não duplique dados de leads ou clientes neste repositório.
- Nunca copie dados privados do Excel do Freela Ops para código, Markdown, prompts ou commits.

## Encerramento de uma tarefa

Antes de concluir:

1. valide a alteração em proporção ao risco;
2. atualize `tasks.md` quando uma tarefa tiver mudado de estado;
3. atualize `status-projeto.md` quando a mudança for material pelos critérios acima;
4. registre no handoff do Freela Ops somente o resultado necessário, sem dados pessoais.
