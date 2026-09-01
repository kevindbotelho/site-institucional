# Tarefas — Site institucional

> Derivado de: `spec.md` (funcionalidades MVP) + `plan.md` (arquitetura)
>
> Atualizar este arquivo ao concluir cada tarefa.

## Setup Técnico

- [x] Inicializar o projeto Next.js com TypeScript, Tailwind CSS, ESLint, App Router e diretório `src`.
- [x] Confirmar que o alias de importação `@/*` aponta para `src/*`.
- [x] Reservar a porta local `3001` para este projeto e alinhar `NEXT_PUBLIC_SITE_URL` no ambiente de desenvolvimento.
- [x] Copiar `.env.example` para `.env.local` e preencher as configurações públicas iniciais.
- [x] Configurar metadados básicos do site e remover o conteúdo padrão do framework.
- [x] Aplicar o símbolo da Zucco em placa clara no favicon e no ícone de dispositivos.
- [x] Criar versões quadradas e opacas do símbolo para a foto de perfil do WhatsApp.
- [x] Criar a configuração central de contato com WhatsApp e e-mail.
- [x] Validar o setup executando lint e build de produção sem erros.

## Estrutura compartilhada

Contexto: estabelecer os elementos que serão usados por todas as páginas do site institucional.

- [ ] Criar tipos para serviços, projetos e contato.
- [ ] Criar dados locais iniciais para os serviços e projetos definidos na spec.
- [x] Criar utilitário para gerar links de WhatsApp com mensagem pré-preenchida.
- [x] Criar cabeçalho com navegação para Início, Serviços, Projetos e Sobre.
- [x] Manter o cabeçalho visível com comportamento sticky durante a navegação da Home.
- [x] Direcionar Serviços e Sobre para suas seções da Home e Projetos para `/projetos`, com foco e movimento acessíveis.
- [x] Adicionar ao cabeçalho um indicador discreto do progresso de leitura da Home.
- [x] Criar rodapé com contatos e links de navegação.
- [ ] Criar componente de CTA reutilizável para WhatsApp e e-mail.
- [x] Validar, em celular e desktop, que a navegação e todos os links de contato funcionam.

## Página inicial de conversão

Contexto: é a principal página de entrada e deve resumir a proposta, os serviços, projetos e trajetória antes de conduzir ao contato.

- [x] Definir a estratégia textual, a hierarquia da Home e o CTA prioritário em `conteudo-home.md`.
- [x] Definir conteúdo e hierarquia visual da primeira dobra: proposta de valor, contexto e CTA prioritário.
- [x] Construir a primeira dobra com foco em leitura e conversão no celular.
- [x] Criar resumo dos serviços na Home.
- [x] Criar prévia de projetos na Home.
- [x] Criar breve apresentação profissional como seção da Home.
- [x] Criar CTA de encerramento para iniciar uma conversa no WhatsApp.
- [x] Apresentar automações sem limitar a oferta a uma escala específica e usar categorias editoriais próprias nos cards de projetos.
- [x] Validar que a página comunica o que é oferecido sem depender das páginas internas.

## Página de serviços

Contexto: detalhar sites, captação de contatos, automações, dashboards e mini-sistemas.

- [ ] Definir a narrativa e a ordem das dobras da página de serviços.
- [ ] Criar apresentação dos serviços com problema, público e possíveis entregas.
- [ ] Criar explicação simples do processo: conversa, escopo, construção e entrega.
- [ ] Adicionar CTA contextual para WhatsApp.
- [ ] Validar que cada serviço pode ser entendido sem jargão técnico e que o CTA funciona.

## Página de projetos

Contexto: provar capacidade de execução com exatamente dois projetos próprios, apresentados pelo nicho, problema e solução construída, sem sugerir clientes ou resultados reais.

- [x] Definir a narrativa e a ordem das dobras da página de projetos.
- [x] Criar `/projetos` com os dois trabalhos e destinos navegáveis.
- [x] Criar o site institucional **Lume & Pata**, voltado a pet shop e banho e tosa.
- [x] Criar a landing page **Brisa de Tecido**, voltada à conversão para WhatsApp de um serviço local de limpeza de estofados.
- [x] Integrar os dois trabalhos à Home, ao item Projetos da navegação e ao link "Ver soluções e projetos".
- [x] Adicionar CTA para o visitante solicitar uma solução semelhante.
- [x] Validar que nenhum conteúdo sugere cliente, trabalho contratado, case, depoimento, resultado ou métrica inexistente.

### Próximo ciclo de design

Plano detalhado e checkpoints: `plano-refatoracao-projetos.md`. Prompt sempre pronto para a próxima conversa: `PROMPT-PROXIMA-TASK.md`.

- [x] Revisar as duas experiências com Kevin e escolher as referências visuais da refatoração.
- [x] Definir a estratégia híbrida: fundação curta, passada estrutural completa, acabamento dirigido e QA por projeto.
- [x] Executar L-01: documentar contrato visual e mapa completo do Lume & Pata a partir do Savory Plate.
- [x] Aprovar com Kevin o contrato e o mapa do Lume & Pata antes de iniciar L-02.
- [x] Executar a primeira versão do L-02: passada estrutural completa do Lume & Pata.
- [x] Revisar visualmente a primeira versão do L-02 com Kevin — resultado reprovado por ser genérico, superficial e próximo demais da Home da Zucco.
- [x] Auditar o processo, Savory Plate, OpenDesign e a régua visual da Zucco; documentar o redirecionamento criativo em `src/app/projetos/lume-e-pata/DIRECAO-CRIATIVA-L02R.md`.
- [x] Aprovar L-02R1: Kevin substituiu a direção C pela opção A — Portal de acolhimento —, aprovou o refinamento final em 2026-08-13 e encerrou o gate da fundação, cabeçalho local e hero.
- [x] Aprovar L-02R2: direção B — Mosaico de rotinas — correção de fidelidade, encerramento em três camadas e remoção do traço residual aprovados explicitamente por Kevin em 2026-08-13.
- [x] Encerrar L-02R3: opção B — Palco em três tempos — implementada e aprovada explicitamente por Kevin para avanço em 2026-08-18; a captura comparativa automatizada permaneceu bloqueada e está registrada como ressalva em `design-qa.md`.
- [x] Encerrar L-02R4: refinamento A.2 — Trilho de momentos — escolhido, implementado, validado e aprovado explicitamente por Kevin em 2026-08-20.
- [x] Encerrar L-02R5: opção B — Volta pra casa — refinada até a simplificação final com palco integralmente sálvia, portal fotográfico, CTA coral e footer editorial; aprovada explicitamente por Kevin em 2026-08-20.
- [x] Encerrar L-03: o acabamento dirigido foi absorvido pelas revisões dobra a dobra e pela correção final de L-02R5; Kevin considerou a experiência completa do Lume & Pata finalizada em 2026-08-20.
- [x] Encerrar L-04 no escopo local: QA responsiva, console, acessibilidade proporcional, lint e build passaram; a publicação da refatoração foi deliberadamente adiada para o alinhamento final P-01.
- [x] Encerrar B-01R1: a implementação A.1 foi reprovada; a direção A.2 — Centro imersivo — foi escolhida, implementada, validada localmente e aprovada explicitamente por Kevin em 2026-08-27 para fundação, cabeçalho e hero.
- [x] Encerrar B-01R2: direção A — Ateliê de tramas — implementada e aprovada explicitamente por Kevin em 2026-08-28 para a dobra “O serviço”, incluindo Ficha de atendimento, seleção por peça, fotos próprias e acessibilidade proporcional. A primeira rodada esquemática continua rejeitada e não deve ser reutilizada.
- [x] Encerrar B-02R1: direção A — Rastro do cuidado — refinada, validada localmente e aprovada explicitamente por Kevin em 2026-08-28. A continuidade “do contato ao local” é exclusivamente tipográfica; os conectores gráficos reprovados não devem voltar.
- [x] Encerrar B-03: direção A revisada — “A diferença mora no toque” — aprovada explicitamente por Kevin em 2026-08-28. O fechamento usa um comparador único antes/depois, com os dois assets de alta resolução derivados da mesma geometria; `#duvidas` não foi redesenhada e será decidido como próximo checkpoint de conteúdo.
- [x] Remover `#duvidas` — “Antes de chamar” — e seu link local após a decisão de produto: o conteúdo repetia as orientações já presentes em “O serviço” e “Como funciona”.
- [ ] Executar B-04: QA final da Brisa; publicação das duas experiências permanece coordenada com P-01.
- [ ] Executar P-01: a direção A — Faixas de projetos — está implementada localmente somente nos cards de `/projetos`, como uma primeira faixa horizontal escalável de capas integrais; falta aprovação visual de Kevin, validação final conjunta e publicação.
- [ ] Manter primitivas técnicas compartilhadas sem compartilhar a identidade visual de cabeçalhos, botões, cards, CTAs e footers.
- [ ] Adicionar em cada demonstração caminhos diretos e distintos para a Home da Zucco e para `/projetos`.

### Evolução condicionada ao crescimento do portfólio

- [ ] Quando existir um terceiro trabalho publicável ou um projeto autoral pronto, substituir a listagem atual por destaques maiores seguidos de uma grade compacta e escalável.
- [ ] Organizar o portfólio futuro em no máximo dois agrupamentos: Projetos para negócios e Projetos autorais.
- [ ] Manter trabalhos próprios de demonstração e futuros trabalhos reais autorizados no mesmo agrupamento de negócios, identificando a natureza de cada item com precisão quando isso se tornar necessário.
- [ ] Adicionar Fin Planner, Transcribe Hub e Academy AI somente quando houver material público fiel ao estado real de cada produto.
- [ ] Manter a Home limitada a uma seleção curta de projetos em destaque.

## Seção sobre na Home

Contexto: explicar a experiência de Kevin em dados, automação e construção de soluções sem criar uma página dedicada.

- [x] Definir conteúdo e narrativa da trajetória profissional.
- [x] Criar apresentação humana e objetiva, conectada às necessidades de pequenas empresas.
- [x] Manter Sobre como âncora da Home, sem rota `/sobre`.
- [x] Validar que a seção fortalece credibilidade sem exagerar experiência ou resultados.

## Publicação e domínio

- [x] Criar repositório remoto público e publicar o código-fonte higienizado no GitHub.
- [x] Criar o projeto `site-institucional` e publicar a versão de produção na Vercel.
- [x] Revisar o site publicado em celular e desktop, incluindo todos os CTAs.
- [x] Escolher o nome da marca: Zucco.
- [x] Aprovar **Design e Tecnologia** como descritor institucional, mantendo a assinatura compacta do site sem essa linha.
- [x] Remover a configuração antiga de marca da Vercel e fixar `Zucco` como fonte de verdade do site.
- [ ] Escolher entre `zuccoweb.com` e `zuccoweb.com.br`, verificar a disponibilidade e comprar o domínio principal.
- [ ] Conectar o domínio principal à Vercel.
- [ ] Configurar domínio de e-mail profissional, se desejado.

## Backlog condicionado a evidência

- [ ] Reavaliar a necessidade de `/estilos` somente se surgir demanda por um catálogo separado; não criar essa terceira estrutura de portfólio na fase atual.
- [ ] Adicionar cases reais conforme clientes forem atendidos.
- [ ] Adicionar formulário de diagnóstico se o WhatsApp deixar de ser suficiente.
- [ ] Avaliar plano de manutenção recorrente para clientes.
