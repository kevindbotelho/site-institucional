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

Plano detalhado, checkpoints e prompts de retomada: `plano-refatoracao-projetos.md`.

- [x] Revisar as duas experiências com Kevin e escolher as referências visuais da refatoração.
- [x] Definir a estratégia híbrida: fundação curta, passada estrutural completa, acabamento dirigido e QA por projeto.
- [ ] Executar L-01: contrato visual e mapa completo do Lume & Pata a partir do Savory Plate.
- [ ] Executar L-02: passada estrutural completa do Lume & Pata.
- [ ] Executar L-03: acabamento dirigido do Lume & Pata.
- [ ] Executar L-04: QA e publicação do Lume & Pata.
- [ ] Executar B-01: contrato visual e mapa completo da Brisa usando a estrutura do OpenDesign e preservando sua paleta verde/linho.
- [ ] Executar B-02: passada estrutural completa da Brisa de Tecido.
- [ ] Executar B-03: acabamento dirigido da Brisa de Tecido.
- [ ] Executar B-04: QA e publicação da Brisa de Tecido.
- [ ] Executar P-01: alinhar Home e `/projetos` aos novos visuais, validar o conjunto e publicar.
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
