# Status atual — Site institucional

> Fonte de verdade compartilhada sobre o estado atual do site. Atualizado em 2026-08-01.

## Estado geral

- A Home está construída e funciona localmente.
- O código-fonte está versionado publicamente em `https://github.com/kevindbotelho/site-institucional`.
- A versão de produção está publicada em `https://site-institucional-plum.vercel.app`.
- O deploy de produção está conectado à branch `main` do GitHub.
- O MVP ainda não está liberado para iniciar a prospecção.
- Não existem páginas internas de Serviços, Projetos ou Sobre.
- Sobre continuará apenas como seção da Home.

## Home existente

A ordem atual das seções é:

1. Hero.
2. Contexto.
3. Serviços.
4. Processo de trabalho.
5. Projetos.
6. Sobre.
7. CTA final.

O CTA final usa WhatsApp como canal principal e e-mail como alternativa. O endereço pode ser copiado diretamente com confirmação visual e acessível. Os contatos são gerados pela configuração central.

A seção de Serviços apresenta automações com planilhas e dados sem limitar a oferta a uma escala específica. Na seção de Projetos, os cards usam categorias editoriais próprias — Presença digital, Visão operacional, Fluxos conectados e Conversão — sem rotulá-los como exemplos ou demonstrações e sem atribuir clientes ou resultados reais. Os cards de Site institucional e Landing page usam imagens distintas.

## Navegação e links

- O cabeçalho permanece visível durante a rolagem com comportamento sticky.
- Uma barra fina na base do cabeçalho indica o progresso de leitura da Home, do início ao fim da página, e é ocultada quando o visitante prefere movimento reduzido.
- Início aponta para `/` e retorna ao começo da Home.
- Serviços aponta temporariamente para `/#servicos`.
- Projetos aponta temporariamente para `/#projetos`.
- Sobre aponta para `/#sobre`.
- Os links "Ver projetos" do Hero e "Ver soluções e projetos" também levam a `/#projetos`.
- A navegação entre seções usa rolagem suave, mantém uma margem abaixo do cabeçalho e move o foco para o destino.
- Com `prefers-reduced-motion`, a mudança de seção acontece sem rolagem animada.
- O menu mobile fecha depois da escolha de uma seção.
- Os fragmentos identificam seções da Home e não representam as futuras rotas `/servicos` ou `/projetos`.
- O rodapé repete a navegação interna e oferece LinkedIn, GitHub, WhatsApp e e-mail.

## Estrutura compartilhada

- Cabeçalho existente.
- Configuração central de WhatsApp e e-mail existente.
- Utilitários de links de contato existentes e usados nos CTAs principais.
- Rodapé existente, integrado ao fundo contínuo da Home após o CTA final.
- O e-mail do rodapé pode abrir o cliente configurado por `mailto:` ou ser copiado por uma ação dedicada.

## Gate atual para liberar o MVP

O deploy publicado foi validado em 2026-07-30 com:

- resposta HTTP 200;
- headline e links de WhatsApp e e-mail presentes;
- assets principais referenciados corretamente;
- nenhuma referência a `localhost` no HTML;
- nenhum erro de runtime registrado pela Vercel após a publicação.

Antes do primeiro ciclo comercial, ainda é necessário revisar visualmente a Home completa, seus CTAs, desktop, mobile e console.

## Páginas futuras

- `/projetos`: construir primeiro se as conversas comerciais indicarem necessidade recorrente de provas ou demonstrações.
- `/servicos`: construir primeiro se houver confusão recorrente sobre escopo e entregas.
- `/sobre`: não está planejada.

Essas decisões pertencem à operação comercial e devem chegar aprovadas por `../freela-ops/handoffs/portfolio.md`.

## Contrato de sincronização

- Este arquivo informa ao Freela Ops o que o site institucional realmente possui agora.
- `../freela-ops/handoffs/portfolio.md` informa a este projeto quais mudanças comerciais foram aprovadas.
- O Freela Ops não deve manter uma cópia paralela deste status.
- Nenhum dado de lead ou cliente pode entrar neste documento.
