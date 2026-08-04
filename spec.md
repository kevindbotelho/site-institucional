# Site institucional — Spec de produto

## Visão Geral

Este projeto é um site institucional voltado a apresentar e vender soluções digitais acessíveis para pequenas e médias empresas. O site deve mostrar, de forma clara e confiável, como problemas cotidianos de presença digital e operação podem ser resolvidos com sites, captação de contatos, automações, dashboards e mini-sistemas.

O objetivo principal é transformar visitas originadas de prospecção manual — sobretudo pelo WhatsApp — em conversas comerciais. A comunicação deve vender o resultado para o negócio, e não a tecnologia de IA usada para construir as soluções.

## Usuários-Alvo

- Donos e gestores de pequenas e médias empresas que chegam ao site por indicação ou contato direto.
- Negócios que ainda não têm site, têm presença digital insuficiente ou executam processos operacionais de forma manual.
- Perfis iniciais prioritários: negócios locais e prestadores de serviço com decisão ágil e baixa carga regulatória, como pet shops, imobiliárias pequenas, contabilidades, comércio local e outros serviços. Evitar inicialmente segmentos com comunicação fortemente regulada e organizações grandes ou complexas.

## Funcionalidades do MVP

### 1. Página inicial de conversão

O visitante entende, logo na chegada, quem é Kevin, que tipo de problema ele resolve e como iniciar uma conversa.

**Critérios de aceite:**

- Apresenta uma proposta de valor clara e voltada a resultados de negócio.
- Resume serviços, projetos e trajetória profissional sem exigir que o visitante abra outra página.
- Possui chamadas para ação visíveis que levam ao WhatsApp.
- Direciona o visitante às páginas detalhadas de serviços e projetos; o item Sobre leva à seção correspondente na própria Home.

### 2. Página de serviços

O visitante pode entender as soluções oferecidas e para que tipo de necessidade cada uma serve.

**Serviços iniciais, em ordem de prioridade comercial:**

- Landing pages.
- Sites institucionais.
- Dashboards e visualização de dados.
- Automações com planilhas e dados, quando forem pertinentes.

Captação de contatos pode direcionar o visitante para atendimento humano pelo WhatsApp. Chatbots de IA e automações oficiais de WhatsApp não fazem parte da oferta inicial. Mini-sistemas internos podem ser avaliados sob demanda, mas não são a oferta prioritária de entrada.

**Critérios de aceite:**

- Cada serviço explica o problema que resolve e exemplos de entregas.
- A página orienta o visitante a pedir um diagnóstico ou conversar pelo WhatsApp.

### 3. Página de projetos

O visitante pode ver provas visuais de capacidade de execução, separadas entre soluções voltadas a negócios e projetos autorais.

**Critérios de aceite:**

- Separa claramente "Soluções para negócios" de "Projetos autorais".
- Inclui soluções para nichos comerciais apresentadas como possibilidades, sem atribuir clientes, marcas ou resultados reais.
- Inclui os projetos autorais: Fin Planner, Transcribe Hub e Academy AI (em desenvolvimento).
- Cada projeto pode direcionar para uma versão navegável, quando ela existir.

### 4. Seção sobre na Home

O visitante entende, sem sair da Home, por que a experiência de Kevin em dados, automação e construção de aplicações é relevante para o negócio.

**Critérios de aceite:**

- Apresenta o profissional com linguagem simples e humana.
- Conecta experiência com dados e automação aos serviços oferecidos.
- Pode ser acessada pelo item Sobre da navegação.
- Não exige uma página `/sobre`; o caminho para contato é apresentado na CTA final seguinte.

### 5. Contato direto

O visitante consegue iniciar uma conversa comercial sem fricção.

**Critérios de aceite:**

- Todos os principais caminhos de conversão levam ao WhatsApp informado pelo proprietário.
- O e-mail profissional é exibido como canal alternativo.
- A mensagem inicial do WhatsApp pode ser pré-preenchida com um pedido de orçamento ou diagnóstico.

## Fluxos do Usuário

### Visitante vindo de uma prospecção pelo WhatsApp

Recebe o link do site, abre a página inicial, entende rapidamente a proposta e escolhe entre explorar serviços/projetos ou iniciar uma conversa no WhatsApp.

### Visitante interessado em um serviço

Entra pela página inicial ou diretamente pela página de serviços, identifica uma necessidade parecida com a do seu negócio e chama Kevin pelo WhatsApp para entender o escopo.

### Visitante que quer avaliar qualidade visual

Entra pela página de projetos, navega por soluções para negócios e projetos autorais e, ao encontrar uma referência relevante, inicia contato.

## Fora do Escopo do MVP

- Login, área do cliente ou painel administrativo.
- Orçamento automático, pagamento online ou contratação sem conversa prévia.
- CRM próprio, integração oficial com WhatsApp ou automações complexas no próprio site.
- Catálogo de estilos navegáveis e interativos. Essa é uma evolução futura do projeto.
- Apresentar soluções conceituais como cases de clientes reais.

## Regras de Negócio

- O WhatsApp é o canal de contato prioritário; o e-mail é secundário.
- O foco da mensagem é o resultado entregue ao negócio, não a IA como produto.
- As soluções apresentadas não devem sugerir clientes, resultados ou trabalhos contratados quando isso não existir.
- A página inicial é a principal página de conversão e precisa conter um resumo útil de todo o site, com links para aprofundamento. Sua estrutura textual de referência está em `conteudo-home.md`.
- A navegação inicial terá: Início, Serviços, Projetos e Sobre. A seção Estilos será adicionada apenas quando houver referências suficientes para formar um catálogo útil.
- A marca definida é **Zucco**, com **Design e Tecnologia** como descritor institucional aprovado para metadados e peças de marca; o conteúdo e a configuração continuam preparados para permitir uma evolução futura sem alteração estrutural.

## Perguntas em Aberto

Nenhuma para o escopo de produto do MVP. A escolha e compra do domínio principal permanecem como decisão de publicação.
