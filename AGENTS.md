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
