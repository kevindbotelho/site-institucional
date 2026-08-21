# Status atual — Site institucional

> Fonte de verdade compartilhada sobre o estado atual do site. Atualizado em 2026-08-20.

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
- Lume & Pata e Brisa de Tecido possuem temas locais e CSS isolado. A refatoração visual local do Lume está concluída e aprovada; a Brisa ainda não possui um Design System próprio formalizado.
- O próximo ciclo ativo é a reconstrução dobra a dobra da Brisa, começando pela revalidação da referência OpenDesign, pela fundação visual, pelo cabeçalho e pela hero.
- A orientação aprovada é refatorar o visual existente sobre primitivas compartilhadas e temas próprios, preservando conteúdo, rotas, imagens, responsividade e comportamento já construídos.
- **Lume & Pata** usa o Savory Plate como referência principal de composição e interação, com OpenDesign como referência secundária de profundidade editorial. A Home da Zucco e o Lumen são apenas régua de qualidade e não podem fornecer ao Lume cabeçalho, tipografia, CTA, silhueta de hero ou linguagem de movimento.
- **Brisa de Tecido** usará o OpenDesign como referência estrutural e tipográfica, sem adotar sua paleta pastel: permanecem como base o verde profundo, eucalipto, verde ácido e papel/linho do projeto atual.
- O método anterior de contrato textual seguido por passada completa foi invalidado pela revisão. O novo método exige três alvos visuais concretos, escolha de Kevin, implementação e aprovação de uma dobra por vez. Ele foi formalizado na skill global `$design-fold-workshop`, nas instruções do repositório e no playbook do Freela Ops. O roteiro desta refatoração vive em `plano-refatoracao-projetos.md`; `PROMPT-PROXIMA-TASK.md` contém sempre a próxima instrução pronta para abrir uma nova conversa.
- O contrato original do **Lume & Pata** permanece como registro histórico em `src/app/projetos/lume-e-pata/CONTRATO-VISUAL.md`. A fonte de verdade criativa atual é `src/app/projetos/lume-e-pata/DIRECAO-CRIATIVA-L02R.md`.
- A reconstrução local do **Lume & Pata** foi concluída dobra a dobra e aprovada como experiência completa por Kevin em 2026-08-20. L-02R1 a L-02R4 permanecem congeladas; em L-02R5, a direção B — Volta pra casa — terminou simplificada para um palco integralmente sálvia, portal fotográfico assimétrico, CTA coral e footer editorial, sem fundo interno próprio e sem fio/pata. A rota passou por QA local em 390, 768, 1024 e desktop, além de console, lint, build e HTTP 200. A refatoração ainda não foi publicada; a produção continua na versão anterior e a publicação foi adiada para o alinhamento final P-01, depois da Brisa.

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

- Iniciar B-01R1 na Brisa de Tecido: revalidar OpenDesign contra a identidade atual e produzir três direções visuais A/B/C para fundação, cabeçalho e hero antes de qualquer código.
- Criar na Brisa de Tecido as saídas diretas e distintas para a Home da Zucco e para `/projetos`; o Lume & Pata já possui ambas.
- Quando houver um terceiro trabalho publicável ou um projeto autoral pronto, migrar `/projetos` para destaques seguidos de grade compacta, com no máximo dois agrupamentos: Projetos para negócios e Projetos autorais.
- Escolher, comprar e conectar o domínio principal, quando aprovado.
- Publicar futuros cases reais somente após existirem trabalhos contratados autorizados para apresentação.
- A rota `/servicos` permanece fora do escopo até nova decisão comercial.
- A versão pública continua no estado anterior à refatoração do Lume; a publicação das experiências refatoradas foi adiada para P-01.

## Contrato de sincronização

- Este arquivo informa ao Freela Ops o que o site institucional realmente possui agora.
- `../freela-ops/handoffs/portfolio.md` informa a este projeto quais mudanças comerciais foram aprovadas.
- O Freela Ops não deve manter uma cópia paralela deste status.
- Nenhum dado de lead ou cliente pode entrar neste documento.
