# Constitution — Site institucional

## Princípios Fundamentais

Este site institucional existe para gerar conversas comerciais, portanto clareza, confiança e conversão têm prioridade sobre efeitos visuais ou complexidade técnica. Cada página deve explicar uma necessidade de negócio, demonstrar uma solução e oferecer um caminho direto para o WhatsApp.

O projeto começa pequeno, mas deve permitir adicionar projetos, serviços e estilos sem reescrever a estrutura. A identidade visual pode evoluir, porém textos honestos, boa performance em celular e acessibilidade básica não são negociáveis.

## Stack Definida

| Camada | Escolha | Motivo |
|---|---|---|
| Framework | Next.js (App Router) | Rotas organizadas, boa performance e publicação simples. |
| Linguagem | TypeScript estrito | Ajuda a evitar erros ao evoluir o site. |
| Estilos | Tailwind CSS | Permite construir e ajustar cada seção com rapidez e consistência. |
| Componentes | React + componentes próprios | Evita dependências visuais desnecessárias e mantém a identidade customizável. |
| Conteúdo | Dados locais tipados | Serviços e projetos serão fáceis de editar sem banco de dados. |
| Hospedagem | Vercel | Publicação simples, domínio próprio e suporte nativo ao Next.js. |
| Contato | Link `wa.me` e e-mail `mailto:` | Atende o MVP sem backend ou integrações externas. |

## Convenções de Código

- Usar TypeScript com modo estrito; não usar `any`.
- Componentes em PascalCase; funções e utilitários em camelCase.
- Páginas vivem em `src/app`; componentes reutilizáveis em `src/components`; conteúdo tipado em `src/content`; tipos compartilhados em `src/types`.
- Usar Tailwind CSS para estilos. Não usar estilos inline salvo quando um valor realmente precisar ser dinâmico.
- Usar componentes de servidor por padrão. Marcar componentes como cliente somente quando houver interação que exija isso.
- Todo link de contato deve usar uma única fonte de configuração, para que telefone e e-mail possam ser trocados facilmente no futuro.
- Cards de soluções devem usar categorias editoriais úteis e nunca sugerir clientes, trabalhos contratados ou resultados reais quando isso não existir.
- Projetos autorais em desenvolvimento não devem ser apresentados como produtos já disponíveis ou plenamente concluídos.
- Experiências profissionais devem reforçar credibilidade sem revelar dados, fluxos, resultados, nomes internos ou outros detalhes confidenciais de empregadores.
- Todo layout deve ser planejado primeiro para telas pequenas e então expandido para desktop.

## Gates de Implementação

Antes de escrever código para uma funcionalidade, verificar:

### Gate de Simplicidade

- [ ] A solução usa o menor número de arquivos e dependências possível?
- [ ] Existe uma abstração sem ao menos três usos reais?
- [ ] A necessidade poderia ser atendida com conteúdo local, sem backend?

### Gate de Arquitetura

- [ ] O arquivo está no local definido por estas convenções?
- [ ] O conteúdo editável está separado da apresentação quando isso facilitar futuras atualizações?
- [ ] A nova seção mantém os caminhos de contato claros?

### Gate de Conversão e Confiança

- [ ] A seção deixa claro qual problema resolve ou qual resultado entrega?
- [ ] O texto evita promessas vagas e jargão técnico desnecessário?
- [ ] Os cards evitam sugerir clientes, trabalhos contratados ou resultados reais quando isso não existir?
- [ ] O resultado está bom em celular antes de ser considerado concluído?

### Gate Anti-Invenção

- [ ] A funcionalidade foi pedida ou deriva diretamente da `spec.md`?
- [ ] Não está sendo adicionada uma integração, login, banco de dados ou animação apenas por aparência?

## O Que Nunca Fazer

- Nunca divulgar projeto conceitual como trabalho de cliente real.
- Nunca exigir formulário, cadastro ou barreira antes de o visitante poder chamar no WhatsApp.
- Nunca colocar número de telefone ou e-mail duplicados de forma manual em múltiplos componentes.
- Nunca adicionar backend, banco de dados ou autenticação sem uma necessidade real aprovada.
- Nunca sacrificar legibilidade, carregamento rápido ou uso em celular por efeitos decorativos.
