# Contexto operacional — Site institucional

> Leia este arquivo no início de qualquer novo trabalho neste repositório. Ele resume o posicionamento já decidido; o estado atual vive em `status-projeto.md`, os detalhes de produto em `spec.md`, o texto da Home em `conteudo-home.md` e a direção visual em `direcao-visual.md`.

## Objetivo

Construir o site institucional para transformar contatos de prospecção manual, principalmente pelo WhatsApp, em conversas com pequenas empresas. A oferta deve ser acessível, objetiva e orientada a resolver problemas práticos — não a vender IA como fim em si.

## Momento atual

- A Home, a página `/projetos` e duas experiências próprias navegáveis estão construídas e publicadas na Vercel.
- O site institucional **Lume & Pata** e a landing page **Brisa de Tecido** formam a primeira fase do portfólio comercial.
- O MVP técnico foi revisado em celular e desktop; o próximo ciclo é uma revisão colaborativa do sistema visual antes de novas expansões.
- A página interna de Serviços permanece como evolução futura; Sobre continua apenas como seção da Home.
- No desenvolvimento local, este projeto usa a porta `3001` para não disputar a porta `3000` com outros projetos.
- O nome da marca foi definido como **Zucco**. O domínio principal ainda não foi escolhido nem comprado; `zuccoweb.com` e `zuccoweb.com.br` são os candidatos atuais.
- **Design e Tecnologia** é o descritor institucional aprovado para metadados e peças de marca. A assinatura compacta usada no cabeçalho e no rodapé permanece sem essa linha.

## Oferta inicial — em ordem de prioridade

1. Landing pages.
2. Sites institucionais simples.
3. Dashboards e visualização de dados.

Automações com planilhas e dados podem ser apresentadas como oferta complementar, sem limitar a comunicação a uma escala específica. Captação de contatos pode levar o visitante ao WhatsApp para atendimento humano; não prometer chatbot de IA ou automação oficial de WhatsApp nesta fase. Mini-sistemas são uma possibilidade sob demanda, não a oferta de entrada.

## Público inicial

Pequenos negócios locais e prestadores de serviço que precisam melhorar presença digital, organizar informações ou simplificar uma operação. Priorizar nichos com menor carga regulatória e ciclos de decisão curtos, como imobiliárias pequenas, pet shops, contabilidades, prestadores de serviço e comércio local. Evitar, no início, segmentos com comunicação fortemente regulada ou clientes grandes e complexos.

## Credenciais que podem orientar a comunicação

Kevin atua com dados, visualização e automações. Em experiências profissionais, trabalhou também com soluções apoiadas por IA e aplicações internas. Isso sustenta a oferta de dashboards, automações e produtos digitais, mas o site não deve revelar informações confidenciais, nomes de projetos internos, dados, APIs ou resultados não autorizados.

## Projetos autorais atuais

- **Fin Planner:** controle financeiro pessoal com importação de faturas CSV, categorização de despesas, histórico e visualização de gastos.
- **Transcribe Hub:** transcrição de áudios em texto, com organização por pastas e subpastas.
- **AI Study Hub / Academy AI:** produto em desenvolvimento para resumir conteúdos e apoiar estudos sobre IA a partir de fontes como vídeos, posts e threads.

Sem links públicos por enquanto. Nunca descrever projetos em desenvolvimento como produtos plenamente disponíveis ou como trabalhos de cliente.

## Conversão e contatos

- CTA prioritário: **"Tirar uma ideia do papel"**.
- Canal principal: WhatsApp.
- Canal alternativo: e-mail.
- LinkedIn: `https://www.linkedin.com/in/kevindbotelho`
- GitHub: `https://github.com/kevindbotelho`
- Números e e-mail devem continuar centralizados em `.env.local`, nunca repetidos manualmente nos componentes.

## Referência visual oficial

O **Lumen LP System** é a única referência visual oficial do site institucional. Ele orienta os princípios de interface; seus códigos, textos, marca, vídeos, métricas e conteúdos demonstrativos não devem ser reutilizados.

As experiências publicadas em `/projetos` possuem direções visuais próprias, mas ainda não foram consolidadas em design systems formais. A evolução deve preservar o conteúdo, as rotas, a responsividade e os assets existentes, refatorando a camada visual em componentes e tokens reutilizáveis em vez de reconstruir as páginas do zero.

## Operação comercial relacionada

A estratégia e o acompanhamento privado da busca por clientes vivem no workspace irmão `../freela-ops`. Somente decisões comerciais aprovadas em `../freela-ops/handoffs/portfolio.md` podem entrar na fila de alterações deste site. Dados de leads ou clientes nunca devem ser armazenados neste repositório.
