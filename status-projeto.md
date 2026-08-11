# Status atual — Site institucional

> Fonte de verdade compartilhada sobre o estado atual do site. Atualizado em 2026-08-10.

## Estado geral

- A Home, a página de projetos e dois projetos próprios navegáveis estão construídos e publicados.
- A marca institucional permanece **Zucco**, com logo em gradiente azul-elétrico para índigo e o descritor **Design e Tecnologia**. O domínio principal ainda não foi escolhido nem comprado.
- O código-fonte está versionado publicamente em `https://github.com/kevindbotelho/site-institucional`.
- A produção está disponível em `https://site-institucional-plum.vercel.app`.
- O gate técnico e visual anterior ao início da prospecção está concluído. O início efetivo da operação comercial continua sob decisão do Freela Ops.
- O desenvolvimento local deste repositório usa `http://localhost:3001`; a porta `3000` fica livre para outros projetos.
- Não existe rota `/servicos`; Serviços continua como seção da Home.
- Não existe rota `/sobre`; Sobre continua como seção da Home.

## Rotas e interface pública

- `/`: Home institucional da Zucco.
- `/projetos`: visão geral dos dois trabalhos, apresentados pelo nicho, problema e solução construída, com CTA para conversar sobre uma solução semelhante.
- `/projetos/lume-e-pata`: site institucional simples para o nicho de pet shop e banho e tosa, com direção visual editorial, acolhedora e própria.
- `/projetos/brisa-de-tecido`: landing page para limpeza de estofados, focada em uma oferta local e conversão para WhatsApp, com direção visual distinta do primeiro projeto.

URLs públicas:

- `https://site-institucional-plum.vercel.app/`
- `https://site-institucional-plum.vercel.app/projetos`
- `https://site-institucional-plum.vercel.app/projetos/lume-e-pata`
- `https://site-institucional-plum.vercel.app/projetos/brisa-de-tecido`

As marcas **Lume & Pata** e **Brisa de Tecido**, seus textos e seus assets foram criados para estes trabalhos. O site não atribui os projetos a clientes, contratos ou cases e não apresenta depoimentos, resultados, métricas, prêmios ou outros sinais de mercado inventados.

A composição atual de `/projetos` é a primeira fase do portfólio e foi deliberadamente otimizada para dois destaques. Ela não é considerada a listagem definitiva para um catálogo maior.

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

A seção de Serviços apresenta automações com planilhas e dados sem limitar a oferta a uma escala específica. A seção de Projetos apresenta somente os dois trabalhos publicados — Lume & Pata e Brisa de Tecido — e cada card leva à experiência correspondente.

## Navegação e links

- O cabeçalho permanece visível durante a rolagem com comportamento sticky.
- Início aponta para `/` e retorna ao começo da Home.
- Serviços aponta para `/#servicos`.
- Projetos aponta para `/projetos` no cabeçalho e no rodapé.
- Sobre aponta para `/#sobre`.
- Os links "Ver projetos" do Hero e "Ver soluções e projetos" levam a `/projetos`.
- O menu mobile fecha depois da escolha de um destino.
- Os projetos possuem navegação interna contextual e CTAs de WhatsApp, sem formulário, backend, pagamento, agendamento ou automação oficial de WhatsApp.

## Estrutura compartilhada

- Cabeçalho e rodapé existentes.
- Configuração central de WhatsApp e e-mail existente.
- Utilitários de links de contato existentes e usados nos CTAs principais.
- O e-mail do rodapé pode abrir o cliente configurado por `mailto:` ou ser copiado por uma ação dedicada.

## Estado do sistema visual

- A Home e `/projetos` seguem a direção da Zucco documentada a partir do Lumen LP System.
- Lume & Pata e Brisa de Tecido possuem temas locais e CSS isolado, mas ainda não possuem design systems formais.
- As duas experiências reutilizam alguns padrões de estrutura — especialmente cabeçalho, botões e CTAs — e serão revistas antes da próxima mudança visual.
- A orientação aprovada é refatorar o visual existente sobre primitivas compartilhadas e temas próprios, preservando conteúdo, rotas, imagens, responsividade e comportamento já construídos.
- **Lume & Pata** usará o Savory Plate como referência principal de composição, tipografia, componentes e movimento, adaptado à identidade acolhedora e à paleta atual.
- **Brisa de Tecido** usará o OpenDesign como referência estrutural e tipográfica, sem adotar sua paleta pastel: permanecem como base o verde profundo, eucalipto, verde ácido e papel/linho do projeto atual.
- O método aprovado é híbrido: contrato visual curto, passada estrutural completa, revisão dobra a dobra com correções agrupadas e QA final. O roteiro e os prompts de retomada vivem em `plano-refatoracao-projetos.md`.
- Nenhuma alteração visual dessas referências foi implementada ainda. O próximo checkpoint é **L-01 — contrato visual e mapa completo do Lume & Pata**.

## Validação e publicação

A versão publicada foi validada em 2026-08-10:

- `npm run lint` concluído sem erros;
- `npm run build` concluído sem erros, com as quatro rotas geradas estaticamente;
- Home, `/projetos` e os dois projetos revisados em desktop (1440 × 900) e mobile (390 × 844);
- navegação principal, menu mobile, âncoras internas e CTAs conferidos;
- estrutura básica de acessibilidade conferida: idioma, um `main` e um `h1` por rota, textos alternativos, links nomeados, foco em destinos da Home e respeito a movimento reduzido;
- nenhuma imagem quebrada, overflow horizontal ou erro de console encontrado nas rotas revisadas;
- varredura de conteúdo sem alegações de cliente real, case, depoimento, resultado, métrica ou prêmio;
- as quatro URLs públicas respondem com HTTP 200.

## Pendências

- Executar os checkpoints de `plano-refatoracao-projetos.md`, começando por L-01.
- Criar saídas diretas das demonstrações para a Home da Zucco e para `/projetos`.
- Quando houver um terceiro trabalho publicável ou um projeto autoral pronto, migrar `/projetos` para destaques seguidos de grade compacta, com no máximo dois agrupamentos: Projetos para negócios e Projetos autorais.
- Escolher, comprar e conectar o domínio principal, quando aprovado.
- Publicar futuros cases reais somente após existirem trabalhos contratados autorizados para apresentação.
- A rota `/servicos` permanece fora do escopo até nova decisão comercial.
- As alterações desta entrega estão publicadas na Vercel a partir do workspace local; commit e push para a `main` não fizeram parte desta tarefa.

## Contrato de sincronização

- Este arquivo informa ao Freela Ops o que o site institucional realmente possui agora.
- `../freela-ops/handoffs/portfolio.md` informa a este projeto quais mudanças comerciais foram aprovadas.
- O Freela Ops não deve manter uma cópia paralela deste status.
- Nenhum dado de lead ou cliente pode entrar neste documento.
