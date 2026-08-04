# Tarefas — Site institucional

> Derivado de: `spec.md` (funcionalidades MVP) + `plan.md` (arquitetura)
>
> Atualizar este arquivo ao concluir cada tarefa.

## Setup Técnico

- [x] Inicializar o projeto Next.js com TypeScript, Tailwind CSS, ESLint, App Router e diretório `src`.
- [x] Confirmar que o alias de importação `@/*` aponta para `src/*`.
- [x] Copiar `.env.example` para `.env.local` e preencher as configurações públicas iniciais.
- [x] Configurar metadados básicos do site e remover o conteúdo padrão do framework.
- [x] Aplicar o símbolo da Zucco em placa clara no favicon e no ícone de dispositivos.
- [x] Criar a configuração central de contato com WhatsApp e e-mail.
- [x] Validar o setup executando lint e build de produção sem erros.

## Estrutura compartilhada

Contexto: estabelecer os elementos que serão usados por todas as páginas do site institucional.

- [ ] Criar tipos para serviços, projetos e contato.
- [ ] Criar dados locais iniciais para os serviços e projetos definidos na spec.
- [ ] Criar utilitário para gerar links de WhatsApp com mensagem pré-preenchida.
- [x] Criar cabeçalho com navegação para Início, Serviços, Projetos e Sobre.
- [x] Manter o cabeçalho visível com comportamento sticky durante a navegação da Home.
- [x] Direcionar temporariamente Serviços, Projetos e Sobre para suas seções da Home, com foco e movimento acessíveis.
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
- [ ] Validar que a página comunica o que é oferecido sem depender das páginas internas.

## Página de serviços

Contexto: detalhar sites, captação de contatos, automações, dashboards e mini-sistemas.

- [ ] Definir a narrativa e a ordem das dobras da página de serviços.
- [ ] Criar apresentação dos serviços com problema, público e possíveis entregas.
- [ ] Criar explicação simples do processo: conversa, escopo, construção e entrega.
- [ ] Adicionar CTA contextual para WhatsApp.
- [ ] Validar que cada serviço pode ser entendido sem jargão técnico e que o CTA funciona.

## Página de projetos

Contexto: provar capacidade de execução, separando projetos autorais de soluções voltadas a negócios.

- [ ] Definir a narrativa e a ordem das dobras da página de projetos.
- [ ] Criar seção de soluções para negócios com categorias editoriais próprias.
- [ ] Criar seção para projetos autorais: planner financeiro, resumidor de áudios e plataforma de estudos com IA.
- [ ] Adicionar links para versões navegáveis apenas nos projetos que já estiverem publicados.
- [ ] Adicionar CTA para o visitante solicitar uma solução semelhante.
- [ ] Validar que nenhum card sugere um case de cliente real quando isso não existir.

## Seção sobre na Home

Contexto: explicar a experiência de Kevin em dados, automação e construção de soluções sem criar uma página dedicada.

- [x] Definir conteúdo e narrativa da trajetória profissional.
- [x] Criar apresentação humana e objetiva, conectada às necessidades de pequenas empresas.
- [x] Manter Sobre como âncora da Home, sem rota `/sobre`.
- [x] Validar que a seção fortalece credibilidade sem exagerar experiência ou resultados.

## Publicação e domínio

- [x] Criar repositório remoto público e publicar o código-fonte higienizado no GitHub.
- [x] Criar o projeto `site-institucional` e publicar a versão de produção na Vercel.
- [ ] Revisar o site publicado em celular e desktop, incluindo todos os CTAs.
- [x] Escolher o nome da marca: Zucco.
- [x] Aprovar **Design e Tecnologia** como descritor institucional, mantendo a assinatura compacta do site sem essa linha.
- [ ] Escolher entre `zuccoweb.com` e `zuccoweb.com.br`, verificar a disponibilidade e comprar o domínio principal.
- [ ] Conectar o domínio principal à Vercel.
- [ ] Configurar domínio de e-mail profissional, se desejado.

## Backlog

- [ ] Criar página `/estilos` com um catálogo de direções visuais.
- [ ] Criar demonstrações navegáveis de estilos para nichos de negócio.
- [ ] Publicar demonstrações no subdomínio `estilos.seudominio.com`.
- [ ] Adicionar cases reais conforme clientes forem atendidos.
- [ ] Adicionar formulário de diagnóstico se o WhatsApp deixar de ser suficiente.
- [ ] Avaliar plano de manutenção recorrente para clientes.
