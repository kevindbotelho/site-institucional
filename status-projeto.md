# Status atual — Site institucional

> Fonte de verdade compartilhada sobre o estado atual do site. Atualizado em 2026-07-30.

## Estado geral

- A Home está construída e funciona localmente.
- O código-fonte está versionado publicamente em `https://github.com/kevindbotelho/site-institucional`.
- Ainda não há uma URL pública confirmada neste documento.
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

## Gate atual para o MVP publicável

Antes do primeiro ciclo comercial:

1. revisar a Home completa, seus CTAs, desktop, mobile e console;
2. publicar uma URL utilizável na Vercel;
3. registrar aqui a URL e o resultado da revisão.

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
