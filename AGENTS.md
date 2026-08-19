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

Não trate as três opções como variações cosméticas e não comprima exploração, escolha, implementação e QA em uma única passada. Quando o pedido envolver um site inteiro, divida-o em checkpoints de dobra e concentre a energia no primeiro checkpoint aberto.

### Design Systems legados e motion

- Os arquivos em `ds_temporarios/*/design-system.html` são Design Systems legados aprovados e referências somente leitura.
- Não regenerar, sobrescrever ou executar `$extract-site-system` nesses arquivos. Essa skill fica reservada para novas referências que ainda possuam `index.html` original e assets.
- A ausência de `source-motion-system.md` ou `source-motion-inventory.json` não invalida um Design System legado e não deve ser preenchida com inferências inventadas.
- Criar os artefatos de motion do projeto ao lado da experiência correspondente, não dentro do Design System legado. Para Lume & Pata, usar `src/app/projetos/lume-e-pata/motion-system.md`, `motion-inventory.json` e `components-motion/` conforme existirem decisões ou componentes reais.
- Preservar integralmente dobras já aprovadas. Motion novo entra nas opções A/B/C da dobra aberta e só é implementado depois da escolha explícita.

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
