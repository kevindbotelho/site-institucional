# Status atual — Site institucional

> Fonte de verdade compartilhada sobre o estado atual do site. Atualizado em 2026-10-08.

## Estado geral

- A Home, a página de projetos e dois projetos próprios navegáveis estão construídos e publicados.
- Os textos, títulos das abas, metadados e links de retorno da versão local usam **Asoka**, mantendo o descritor **Design e Tecnologia**. Kevin escolheu a nova logo e autorizou sua aplicação. Cabeçalho e rodapé agora usam o nome completo em grafite, sem degradê; os ícones da aba e do celular usam o símbolo em placa clara. A paleta do site foi preservada. A aplicação foi conferida localmente e Kevin autorizou commit, push e publicação em 08/10/2026. Publicação desta identidade em andamento. O domínio informado no planejamento relacionado é `asoka.com.br`; sua vinculação não foi verificada nesta etapa.
- O código-fonte está versionado publicamente em `https://github.com/kevindbotelho/site-institucional`.
- A produção está disponível em `https://site-institucional-plum.vercel.app`.
- O gate técnico e visual anterior ao início da prospecção está concluído. O início efetivo da operação comercial continua sob decisão do Freela Ops.
- O desenvolvimento local deste repositório usa `http://localhost:3001`; a porta `3000` fica livre para outros projetos.
- Não existe rota `/servicos`; Serviços continua como seção da Home.
- Não existe rota `/sobre`; Sobre continua como seção da Home.

## Rotas e interface pública

- `/`: Home institucional da Asoka na versão local.
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

O CTA final usa WhatsApp como canal principal e e-mail como alternativa. O endereço pode ser copiado diretamente com confirmação visual e acessível. Os contatos são gerados pela configuração central. Localmente, o e-mail foi atualizado em `.env.local` para o endereço comercial informado por Kevin, sem versionar o arquivo. O número completo de WhatsApp foi informado por Kevin e aplicado em `.env.local`, exatamente como recebido. Todos os CTAs locais usam o novo destino, sem repetir o número nos componentes nem versionar o arquivo de ambiente. A saudação institucional das mensagens usa Asoka. Alterações desta etapa não foram commitadas nem publicadas; produção e suas variáveis de contato não foram alteradas.

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

- A Home e `/projetos` seguem a direção da Zucco documentada a partir do Lumen LP System. Em P-01, somente a apresentação de projetos foi atualizada localmente para a direção aprovada A — Faixas de projetos: hero, catálogo e CTA compartilham uma superfície contínua; o título usa a mesma escala da Home e alterna lentamente o destaque final entre expressões compatíveis, com o texto de apoio menor à direita. A primeira faixa, “Projetos em destaque”, é escalável e usa capas integrais com etiqueta de tipo, título, resumo e seta horizontal, sem moldura interna. No celular, o próximo card fica parcialmente visível e a faixa aceita toque, teclado, arraste real por mouse e controles laterais quando houver conteúdo fora da área visível; o arraste nativo de links/imagens é bloqueado para preservar a navegação por clique. O hover aplica apenas uma inclinação tridimensional leve e concentra a resposta de motion na seta. A mesma roleta tipográfica lenta foi aplicada ao destaque da hero de Lume & Pata, respeitando `prefers-reduced-motion`. A taxonomia, o contrato de novos itens e o padrão de motion reutilizável estão em `docs/design/zucco/portfolio-catalog.md`. A Home, a estrutura, os CTAs e a navegação da Zucco permanecem inalterados. Kevin aprovou a implementação em 2026-09-03; ela ainda não foi publicada.
- Lume & Pata e Brisa de Tecido possuem temas locais e CSS isolado. A refatoração visual local do Lume está concluída e aprovada; a Brisa agora possui a fundação visual A.2 e um sistema de motion local documentado.
- Em 2026-09-01, foram corrigidos localmente três problemas objetivos antes do B-04: o topo de `/projetos` passou a usar o reveal sequencial compartilhado; a descrição do seletor de peças da Brisa voltou ao fluxo sem sobrepor número, nome ou linha; e o comparador antes/depois passou a ter escala limitada e centralizada em desktop. Kevin aprovou o resultado visual em 2026-09-03; a publicação continua pendente.
- Ainda em 2026-09-01, a hero da Brisa teve o palco sticky restaurado no bloco CSS efetivo, corrigindo a sincronização entre rolagem, frases e marcadores 01–03; as linhas horizontais decorativas também foram suavizadas. O clique em 03/03 foi validado localmente com a terceira frase visível.
- B-03R1 — “Moldura de ateliê” foi escolhida e implementada localmente em 2026-09-01: a dobra usa fundo verde profundo, título com nome e linha, moldura de papel/linho com detalhe pontilhado, comparador contido com os assets reais e instrução de arraste. A composição foi aprovada por Kevin em 2026-09-03.
- No comparador B-03R1, os rótulos “Antes · sem Brisa” e “Depois · Brisa de Tecido” agora desaparecem gradualmente quando o divisor chega ao extremo oposto, acompanhando a camada que deixou de estar visível; Home e End foram validados localmente.
- Em 2026-09-01, a entrada da rota Brisa passou a reiniciar explicitamente a hero no primeiro momento também após navegação client-side por `/projetos`; o eyebrow do comparador recebeu o ícone de brilho para manter o padrão visual das dobras.
- Em 2026-09-01, o reveal de `/projetos` passou a limpar seu estado anterior e reiniciar no topo em toda montagem, incluindo refresh e retorno por “Projetos Zucco”, para manter uma única animação de entrada.
- Os cards de `/projetos` agora também possuem reveal individual em cascata curta, alinhado ao topo, para que a entrada seja completa após refresh e ao retornar dos projetos Brisa ou Lume.
- O primeiro card recebeu atraso explícito de 80 ms; antes, o valor zero fazia o Lume aparecer imediatamente e quebrava a sequência percebida no refresh. O Brisa segue 90 ms depois.
- A entrada do topo e dos cards de `/projetos` deixou de depender do estado global herdado da rota anterior: agora usa uma animação local determinística de 820 ms, com os mesmos estados de blur, opacidade e deslocamento e os mesmos atrasos em qualquer origem, inclusive F5 e retorno da Brisa.
- B-01R1 da Brisa foi aprovado localmente por Kevin: a barra de contexto integrada, o cabeçalho e a hero A.2 — Centro imersivo — estão congelados. O vídeo original ocupa o fundo, toca uma vez de forma independente e repousa no último quadro; o scroll altera somente as três mensagens e o progresso. B-01R2 — “O serviço” — foi aprovado explicitamente por Kevin em 2026-08-28: a direção A — Ateliê de tramas — usa seleção por peça, foco e teclado, fotos próprias de sofá, poltrona, cadeira e puff, e uma coluna Ficha de atendimento com a guia “Fotos → Medidas → Bairro”. A primeira rodada esquemática A/B/C continua rejeitada e não deve ser reutilizada. B-02R1 — “Como funciona” — foi aprovada explicitamente por Kevin em 2026-08-28: a direção A — Rastro do cuidado — usa três painéis locais para contato, observação/alinhamento e higienização no estofado, com continuidade tipográfica no título e sem linha pontilhada, arco ou símbolo decorativo. B-01R1, B-01R2 e B-02R1 permanecem congelados.
- A orientação aprovada é refatorar o visual existente sobre primitivas compartilhadas e temas próprios, preservando conteúdo, rotas, imagens, responsividade e comportamento já construídos.
- **Lume & Pata** usa o Savory Plate como referência principal de composição e interação, com OpenDesign como referência secundária de profundidade editorial. A Home da Zucco e o Lumen são apenas régua de qualidade e não podem fornecer ao Lume cabeçalho, tipografia, CTA, silhueta de hero ou linguagem de movimento.
- **Brisa de Tecido** usará o OpenDesign como referência estrutural e tipográfica, sem adotar sua paleta pastel: permanecem como base o verde profundo, eucalipto, verde ácido e papel/linho do projeto atual.
- O método anterior de contrato textual seguido por passada completa foi invalidado pela revisão. O novo método exige três alvos visuais concretos, escolha de Kevin, implementação e aprovação de uma dobra por vez. Ele foi formalizado na skill global `$design-fold-workshop`, nas instruções do repositório e no playbook do Freela Ops. O roteiro desta refatoração vive em `plano-refatoracao-projetos.md`; `PROMPT-PROXIMA-TASK.md` contém sempre a próxima instrução pronta para abrir uma nova conversa.
- O contrato original do **Lume & Pata** permanece como registro histórico em `src/app/projetos/lume-e-pata/CONTRATO-VISUAL.md`. A fonte de verdade criativa atual é `src/app/projetos/lume-e-pata/DIRECAO-CRIATIVA-L02R.md`.
- A reconstrução local do **Lume & Pata** foi concluída dobra a dobra e aprovada como experiência completa por Kevin em 2026-08-20. L-02R1 a L-02R4 permanecem congeladas; em L-02R5, a direção B — Volta pra casa — terminou simplificada para um palco integralmente sálvia, portal fotográfico assimétrico, CTA coral e footer editorial, sem fundo interno próprio e sem fio/pata. A rota passou por QA local em 390, 768, 1024 e desktop, além de console, lint, build e HTTP 200. A refatoração ainda não foi publicada; a produção continua na versão anterior e a publicação foi adiada para o alinhamento final P-01, depois da Brisa.

## Validação e publicação

A troca local para Asoka em 08/10/2026 passou no build de produção, na checagem de tipos e no ESLint dos cinco arquivos alterados. No navegador, foram conferidos títulos/metadados, e-mail e confirmação de cópia da Home, página de projetos e links de retorno das duas experiências. Após a confirmação do número, o build foi repetido com sucesso e os 19 links de WhatsApp foram conferidos no navegador nas quatro páginas (Home: 6; projetos: 4; Lume: 4; Brisa: 5), todos com o novo destino. Nenhum link externo foi acionado nem mensagem enviada. A logo escolhida foi aplicada localmente no cabeçalho/rodapé e nos ícones em 08/10/2026. Build e tipos passaram; ESLint dos dois componentes e do novo gerador passou. Cabeçalho e rodapé foram inspecionados em desktop e celular (390px), sem overflow horizontal. Originais preservados em `docs/design/asoka/references/`; assets da Zucco preservados para recuperação e sem uso pela interface atual. O lint geral encontra erros/avisos nas referências antigas de terceiros em `ds_temporarios` e avisos legados do comparador; não é uma validação global aprovada. Nome, e-mail, WhatsApp e logo estão implementados; Kevin autorizou commit, push e publicação em 08/10/2026. Os dois contatos públicos já foram atualizados na Vercel, preservando os ambientes existentes (produção e preview). Publicação em andamento.

O fechamento local conjunto de P-01 e B-04 foi concluído em 2026-09-03:

- Home → Projetos, Lume → Projetos, Brisa → Projetos e refresh de `/projetos` reproduzem a mesma entrada determinística do topo e dos dois cards;
- a hero da Brisa progride entre os três momentos após navegação client-side, sem depender de refresh;
- o seletor de serviço e o comparador antes/depois responderam corretamente, incluindo Home e End no teclado e o desaparecimento contextual dos rótulos;
- `/projetos`, Lume & Pata e Brisa de Tecido foram verificadas em desktop e 390 × 844 sem overflow horizontal, imagens quebradas ou duplicidade de `h1`;
- `prefers-reduced-motion` desliga as animações de entrada de `/projetos`;
- a publicação deste fechamento ainda não foi executada.

A versão publicada foi validada em 2026-08-10:

- `npm run lint` concluído sem erros;
- `npm run build` concluído sem erros, com as quatro rotas geradas estaticamente;
- Home, `/projetos` e os dois projetos revisados em desktop (1440 × 900) e mobile (390 × 844);
- navegação principal, menu mobile, âncoras internas e CTAs conferidos;
- estrutura básica de acessibilidade conferida: idioma, um `main` e um `h1` por rota, textos alternativos, links nomeados, foco em destinos da Home e respeito a movimento reduzido;
- nenhuma imagem quebrada, overflow horizontal ou erro de console encontrado nas rotas revisadas;
- varredura de conteúdo sem alegações de cliente real, case, depoimento, resultado, métrica ou prêmio;
- as quatro URLs públicas respondem com HTTP 200.

O resultado local do L-02 foi validado em 2026-08-11:

- `/projetos/lume-e-pata` revisada em desktop e mobile, incluindo primeira dobra, crops, foco visível e ausência de overflow horizontal;
- navegação por âncoras, saída para `/projetos` e quatro CTAs com a mesma mensagem de WhatsApp conferidos;
- um único `h1`, imagens carregadas, alvos de toque, `prefers-reduced-motion` e console sem erros conferidos;
- ESLint dos arquivos envolvidos e build de produção concluídos sem erros;
- a mudança permanece somente local e não foi publicada.

Resultado do gate visual em 2026-08-11:

- Kevin reprovou a direção visual da versão local;
- a reprovação reabre composição, tipografia, componentes, slots visuais e movimento, preservando conteúdo, rota, semântica, contato e acessibilidade;
- Savory Plate, OpenDesign, Lumen/Home e referências de animação foram comparados com a implementação atual;
- a implementação local atual permanece apenas como baseline técnica durante a reconstrução dobra a dobra.

Resultado local do L-02R1 atualizado em 2026-08-13:

- opção A — Portal de acolhimento — preservada como referência visual e implementada somente na fundação, moldura, cabeçalho e hero; a opção C e seus assets permanecem como registro histórico, sem uso na rota atual;
- Onest Variable e Fraunces Variable mantidos como fontes locais; React Icons fornece o glifo oficial do WhatsApp e as patas da interface;
- a fotografia aprovada foi reutilizada nos slots desktop e mobile; o símbolo da casa com pata e as trilhas desenhadas foram extraídos da própria referência escolhida e preservados como assets transparentes;
- composição comparada com a referência em 1133 × 1058 e 390 × 1180, com normalização de densidade e revisão responsiva da primeira dobra; máscara, cabeçalho, tipografia, CTAs, painel de vidro, separadores e paisagem inferior foram corrigidos a partir dessa comparação;
- único `h1`, mensagem de WhatsApp, âncora de serviços, foco visível, overflow, imagens prioritárias, console e movimento reduzido conferidos;
- ESLint restrito aos arquivos alterados e build de produção concluídos sem erros;
- QA registrada em `design-qa.md` com `final result: passed`;
- a implementação permanece somente local e não foi publicada;
- nenhuma diferença P0, P1 ou P2 permanece na QA comparativa; os desvios P3 documentados se limitam ao crop do asset fotográfico de produção e a variações de blur entre navegadores;
- o CTA principal da hero agora usa “Conversar no WhatsApp”; a linha lateral foi definida como **fio de cuidado**, motivo recorrente que trocará de contraste nas interseções e será desenhado uma dobra por vez;
- Kevin aprovou explicitamente a implementação final em 2026-08-13; L-02R1 está concluído e `PROMPT-PROXIMA-TASK.md` agora aponta para L-02R2 — Cuidados essenciais.

## Pendências

- `#duvidas` (“Antes de chamar”) foi removida em 2026-08-28 por repetir as informações de contato já comunicadas em B-01R2 e B-02R1; o link local correspondente também saiu do cabeçalho. O fechamento B-03 — “A diferença mora no toque” — aprovado explicitamente, passa a seguir diretamente “Como funciona”; B-01R1, B-01R2, B-02R1 e B-03 permanecem congelados.
- A Brisa retorna para `/projetos` pela barra de contexto superior (“Projetos Zucco”) e também mantém a saída de projetos no cabeçalho e no rodapé; a navegação de retorno não aponta mais para a Home da Zucco.
- Quando houver um terceiro trabalho publicável ou um projeto autoral pronto, migrar `/projetos` para destaques seguidos de grade compacta, com no máximo dois agrupamentos: Projetos para negócios e Projetos autorais.
- Escolher, comprar e conectar o domínio principal, quando aprovado.
- Publicar futuros cases reais somente após existirem trabalhos contratados autorizados para apresentação.
- A rota `/servicos` permanece fora do escopo até nova decisão comercial.
- A versão pública continua no estado anterior à refatoração; P-01 e B-04 estão aprovados e validados localmente, faltando somente publicar o fechamento.

## Contrato de sincronização

- Este arquivo informa ao Freela Ops o que o site institucional realmente possui agora.
- `../freela-ops/handoffs/portfolio.md` informa a este projeto quais mudanças comerciais foram aprovadas.
- O Freela Ops não deve manter uma cópia paralela deste status.
- Nenhum dado de lead ou cliente pode entrar neste documento.
