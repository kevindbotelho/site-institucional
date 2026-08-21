# Design QA — L-02R1 Lume & Pata — opção A

## Alvo e evidências finais

- Fonte visual durável: `docs/design/lume-e-pata/references/l02r1-opcao-a-reference.png`.
- As capturas intermediárias e comparações normalizadas usadas durante o gate foram removidas da raiz depois da aprovação; continuam recuperáveis pelo histórico do Git.
- Rota: `http://localhost:3001/projetos/lume-e-pata`
- Estado: carregamento inicial, tema claro, sem interação persistente.

## Normalização

- Board original: 1490 × 1058 px, densidade 1×, contendo desktop e mobile.
- Desktop: recorte de 1133 × 1058 px comparado com viewport CSS 1133 × 1058. A área útil do webview foi normalizada para o mesmo tamanho antes da comparação.
- Mobile: painel de 326 × 989 px normalizado para 390 × 1180 e comparado com viewport CSS 390 × 1180.
- A barra de contexto Zucco permanece no mobile por requisito funcional. Na comparação, seus 41 px normalizados foram descontados para alinhar a composição da Lume ao mockup, que omite a barra.

## Comparação visual final

- Silhueta: portal fotográfico assimétrico, círculo solar, painel sobreposto, paisagem sálvia e trilho lateral correspondem à direção escolhida.
- Cabeçalho: a linha inferior indevida foi removida; marca, navegação e WhatsApp recuperaram a leveza da referência.
- Tipografia: Onest Variable conduz marca, navegação, título e interface; Fraunces Variable fica restrita ao gesto expressivo de “feliz.”. Escala, peso, altura de linha e quebras foram calibrados separadamente para desktop e mobile.
- Fotografia: o recorte usa máscara orgânica contínua, sem o arco geométrico da implementação anterior. O posicionamento do cachorro foi calibrado por breakpoint.
- WhatsApp: os dois CTAs usam o glifo oficial da biblioteca Simple Icons via React Icons, sem desenho aproximado.
- Painel: superfície translúcida em camadas, reflexo, borda luminosa e sombra substituem a simples redução de opacidade. O símbolo da casa com pata e a trilha foram extraídos da própria referência aprovada.
- Microconteúdo: os três sinais usam pontos somente como separadores entre textos; a trilha inferior curva também usa o asset da referência, em vez de uma linha reta improvisada.
- Fio de cuidado: o trecho sálvia termina no mesmo ponto em que a paisagem começa sob a linha; o trecho seguinte usa creme para manter contraste, sem ponta residual sobre a superfície escura.
- CTA: “Conversar sobre um cuidado” foi substituído por “Conversar no WhatsApp”, mantendo o mesmo destino e eliminando ambiguidade.
- Mobile: marca → título → apoio → CTA → serviços → fotografia → painel preserva a intenção do alvo e não apresenta overflow horizontal.

## Histórico de correções

1. A revisão de Kevin reabriu a fidelidade: máscara geométrica, ícone de WhatsApp incorreto, linha no cabeçalho, pesos tipográficos excessivos, vidro opaco, símbolos aproximados e marcadores tratados como lista.
2. A implementação substituiu esses elementos por máscara orgânica responsiva, ícones de biblioteca, tipografia recalibrada, painel em camadas e microassets reais extraídos do alvo aprovado.
3. A comparação lado a lado revelou fotografia, painel e paisagem cerca de 80–90 px abaixo do alvo no desktop; posição, altura e ritmo vertical foram corrigidos.
4. No mobile, título, CTA, fotografia e painel foram compactados e reposicionados até a composição normalizada coincidir com o ritmo da referência.
5. Kevin aprovou o conjunto visual e pediu dois últimos ajustes: frase do CTA e troca de cor da linha exatamente na interseção com a paisagem.
6. O CTA foi simplificado e o ponto de troca do fio foi calibrado contra a curva renderizada. O render final não apresenta diferenças P0, P1 ou P2.

## Testes técnicos e de interação

- Um único `main` e um único `h1` na rota.
- “Conhecer os serviços” navega para `#cuidados`; o destino recebeu foco e ficou visível após o clique.
- Quatro links de WhatsApp permanecem presentes com a mensagem configurada.
- Todos os assets da hero carregaram com dimensões naturais válidas.
- Sem erro de console e sem overflow horizontal na primeira dobra.
- Foco visível, movimento reduzido e prioridade da imagem principal preservados.
- ESLint restrito a `src/app/projetos/lume-e-pata/page.tsx` passou sem erros.
- Build de produção passou com todas as rotas estáticas.

## Findings finais

- P3 aceitável: o asset fotográfico de produção preserva a direção aprovada, mas possui pequena diferença de crop e textura em relação à fotografia incorporada no mock raster.
- P3 aceitável: intensidade de blur pode variar por navegador; a superfície continua legível e mantém profundidade com as camadas de cor, borda, reflexo e sombra.
- Desvio intencional: a barra de retorno Zucco continua visível no mobile por requisito funcional.
- Decisão de projeto: o fio de cuidado poderá atravessar as próximas dobras, mas cada trecho será desenhado e aprovado no checkpoint da própria dobra; nenhum layout ainda reprovado foi antecipado nesta alteração.

## Resultado

final result: passed

Gate visual: aprovado explicitamente por Kevin em 2026-08-13.

---

# Design QA — L-02R2 Lume & Pata — direção B

## Estado da implementação

- Direção escolhida por Kevin: **B — Mosaico de rotinas**, com a faixa editorial “Rotina leve, pet feliz sempre.” vinda da direção A.
- Escopo implementado: somente a continuidade após a hero e `#cuidados`; a faixa editorial fecha a seção depois do mosaico.
- Interação: leitura integral no fluxo normal de rolagem; não há carrossel, setas, indicadores, drag, seleção obrigatória ou instrução de uso.
- Conteúdo: os três cuidados reais permanecem presentes e simultaneamente legíveis; nenhum serviço, preço, marca ou prova foi acrescentado.
- Assets: as três ilustrações lineares e os fios pontilhados desktop/mobile foram extraídos da própria referência aprovada e tratados como PNGs transparentes. A pata do encerramento reutiliza o ícone já adotado na rota.

## Comparação visual

- Captura final aprovada sem o traço: `docs/design/lume-e-pata/references/l02r2-opcao-b-approved.png`, viewport CSS 1133 × 1058, densidade 1× e estado estático após os reveals.
- Capturas intermediárias, comparações normalizadas e recortes temporários foram removidos da raiz depois do gate e permanecem recuperáveis pelo histórico do Git.

Uma primeira passada desta implementação foi reprovada por Kevin por sobreposição entre os cards 02 e 03, apoio editorial mal posicionado, ilustrações aproximadas e encerramento visualmente separado. A correção atual mede a referência no mesmo viewport: o apoio termina antes do card 01, os três cards recuperam proporções e posições relativas sem colisão, e números, sublinhados, ilustrações e fios usam os elementos da composição aprovada. No mobile, os três conteúdos aparecem em sequência contínua e sem dependência de ação. O encerramento agora é composto pelas três camadas pedidas — fundo verde, círculo sálvia visto pelo topo e onda creme — dentro da mesma dobra.

Na revisão focal seguinte, Kevin pediu quatro correções: fim claro para o fio esquerdo, remoção da faixa verde sobre o card 03, remoção do arco solto junto ao título e círculo sálvia mais redondo, atravessando a onda creme. O render atual elimina o arco e a faixa, aproxima o fio do card e o encerra com ponto creme junto ao canto inferior; a faixa final agora permite a sobreposição real do círculo entre o fundo verde e o creme, sem comprometer a leitura no mobile.

Kevin aprovou explicitamente o conjunto e identificou somente um traço residual atrás da pata, causado pelo asset `lume-portal-closing-trail.png`. O asset foi removido do encerramento; a captura final preservada confirma a superfície creme limpa, sem deslocamento da pata, do título, do círculo maior ou da onda.

## Validação técnica e responsiva

- ESLint restrito a `src/app/projetos/lume-e-pata/page.tsx`: passou sem erros.
- Build de produção: passou, com todas as rotas estáticas geradas.
- `git diff --check`: passou sem erros.
- 390, 768, 1024 e 1133 px: sem overflow horizontal; os três cuidados permanecem integralmente legíveis.
- Console: nenhum erro ou aviso.
- Movimento reduzido: todos os reveals aparecem com opacidade final e transição de `0s`.
- Semântica: um único `h1`; conteúdo, rota, âncora e configuração central de WhatsApp preservados.

## Findings finais

- Nenhuma diferença P0, P1 ou P2 permanece.
- As aproximações de biblioteca foram removidas; os ícones e fios visíveis agora vêm da referência escolhida.
- Desvio intencional: a hero aprovada permanece intacta; apenas a saída visual dela e a dobra em escopo foram trabalhadas.

## Resultado

final result: passed

Gate visual: **aprovado explicitamente por Kevin em 2026-08-13; acabamento residual removido e conferido na mesma data**.

---

# Design QA — L-02R3 Lume & Pata — opção B

## Alvo e estado

- Fonte visual: `docs/design/lume-e-pata/references/l02r3-opcao-b-reference.png` (1.968.312 bytes).
- Recorte de foco enviado por Kevin: massa orgânica sálvia à esquerda da fotografia, com “Atenção em cada etapa” e contador integrados à superfície.
- Captura da primeira correção rejeitada por Kevin: `C:\Users\kevin\AppData\Local\Temp\codex-clipboard-953baabf-677c-4328-bbf8-9b724dd30f2e.png`, 622 × 782 px.
- Recorte da referência usado na segunda correção: `C:\Users\kevin\AppData\Local\Temp\codex-clipboard-0bc4d09a-0faa-40b8-ab8b-b15c2cb42502.png`, 561 × 530 px.
- Implementação: `http://localhost:3001/projetos/lume-e-pata#nosso-jeito`.
- Screenshot browser-rendered da implementação: indisponível.
- Viewports requeridos: 390, 768, 1024 e desktop; não capturados.
- Estado esperado: palco sticky com passos `01/03`, `02/03` e `03/03`, além da variante de movimento reduzido.
- Normalização e comparação lado a lado: não executadas porque a conexão do navegador interno falhou antes de abrir a rota.

## Evidência técnica disponível

- ESLint restrito a `src/app/projetos/lume-e-pata/page.tsx` e `src/app/projetos/lume-e-pata/WayStory.tsx`: passou sem erros.
- Build de produção: passou; a rota foi gerada estaticamente.
- A rota local respondeu HTTP 200 e entregou os três textos de etapa no HTML.
- O asset `lume-e-pata-nosso-jeito.png` respondeu HTTP 200 com 2.162.777 bytes.
- `git diff --check`: sem erros de whitespace; apenas avisos existentes de normalização LF/CRLF.
- Refinamento de 2026-08-18: o painel retangular do contador foi substituído por uma superfície sálvia orgânica atrás da fotografia; a máscara irregular, o motion e os estados 1–2–3 foram preservados. ESLint, build e HTTP 200 passaram novamente.
- Segunda correção de 2026-08-18: a grade ampliou a coluna visual, reduziu o espaço entre colunas e o padding vertical, levou o conjunto em direção à borda esquerda, aumentou a fotografia para 80% da largura visual e tornou as duas máscaras mais assimétricas. ESLint, build e HTTP 200 passaram novamente.
- Verificação browser-rendered de overflow, console, foco, toque, scroll, crop e movimento reduzido: não executada.

## Findings

- [P1] Comparação visual obrigatória indisponível.
  Local: dobra Nosso jeito, todos os viewports e estados.
  Evidência: a fonte visual foi aberta e preservada, mas não existe captura browser-rendered da implementação; o navegador interno falhou durante a conexão.
  Impacto: não é possível confirmar fidelidade de composição, tipografia, spacing, cores, crop, estados ou saída da dobra sem inferir a partir do código.
  Fix: restabelecer a conexão visual ou obter autorização de Kevin para usar o Playwright diretamente; depois capturar os quatro viewports, os três passos e movimento reduzido e comparar no mesmo quadro.

## Superfícies de fidelidade

- Fontes e tipografia: não verificadas visualmente.
- Espaçamento e ritmo de layout: não verificados visualmente.
- Cores e tokens: não verificados visualmente.
- Qualidade e fidelidade da imagem: asset real confirmado por HTTP, mas crop e nitidez não verificados visualmente.
- Copy e conteúdo: os três textos esperados estão presentes no HTML.
- Interações e acessibilidade: semântica, rótulos e fallback estão implementados no código; comportamento real ainda não foi testado no navegador.
- Comparação focada: não executada pelo mesmo bloqueio; seria necessária para contador, hierarquia do passo e crop fotográfico.

## Histórico de comparação

1. Fonte visual preservada e implementação técnica concluída.
2. Tentativa de conexão ao navegador interno falhou antes da captura; nenhuma comparação visual válida foi produzida.
3. Kevin inspecionou a prévia local, aprovou o motion e identificou falta de cor e densidade na composição fotográfica em comparação com a referência.
4. O contador deixou de ser um card isolado e foi incorporado a uma massa sálvia assimétrica que sustenta a fotografia. O refinamento preserva o comportamento sticky e ainda aguarda captura automatizada normalizada.
5. Kevin rejeitou essa primeira correção: na captura de 622 × 782 px, o conjunto continuava centralizado e pequeno, com vazio excessivo acima e abaixo; a fotografia começava tarde demais à esquerda e as máscaras pareciam uniformes.
6. A segunda correção foi feita diretamente pelas proporções da referência de 561 × 530 px: o conjunto agora ocupa mais da coluna, a fotografia avança para a esquerda e as superfícies têm silhuetas mais irregulares. A captura pós-correção segue indisponível pela falha do navegador controlado, então o resultado permanece bloqueado até revisão de Kevin.
7. Kevin rejeitou também essa passada e esclareceu a diferença decisiva: na referência, a superfície sálvia ultrapassa o limite do viewport e é cortada por ele, produzindo uma aresta vertical; a implementação ainda apenas tangenciava a borda com uma curva e parecia flutuar.
8. A correção atual desloca a superfície sálvia 24% para fora do conjunto e mantém o palco com `overflow: clip`, formando o recorte vertical na borda do viewport. O padding interno compensa o deslocamento para preservar a posição do rótulo e do contador; as duas máscaras também receberam raios mais assimétricos. A captura pós-correção ainda depende da revisão visual de Kevin.

## Resultado

final result: blocked

Bloqueador técnico: ausência de captura browser-rendered e de comparação normalizada no mesmo viewport. A decisão de produto posterior está registrada abaixo.

Decisão posterior do gate: Kevin aprovou explicitamente o avanço para L-02R4 em 2026-08-18. Essa decisão encerra o checkpoint de produto e congela a implementação atual, mas não altera o resultado técnico acima: a QA automatizada continua `blocked` e não deve ser apresentada como `passed`.

---

# Design QA — L-02R4 Lume & Pata — opção A

## Alvo e implementação

- Direção escolhida: A — Prateleira editorial.
- Referência da primeira direção: removida do working tree após ser substituída pelo refinamento A.2; permanece recuperável pelo histórico do Git.
- Implementação: `src/app/projetos/lume-e-pata/EssentialsShelf.tsx` e bloco de Essenciais em `project.module.css`.
- Comparação consolidada: `C:\Users\kevin\.codex\visualizations\2026\08\18\01a01729-1f91-7ad3-8d6d-615d86c457db\l02r4-comparison-reference-render.png`.
- Capturas renderizadas: 390, 768, 1024 e 1440 px no mesmo código de produção local.

## Verificações

- Copy obrigatória, CTA e quatro categorias preservados; nenhuma alegação comercial nova foi adicionada.
- Hover alterou a pré-visualização para passeio; clique fixou higiene; seta direita moveu o foco e a seleção para descanso; toque selecionou descanso no mobile.
- Em movimento reduzido, duração da animação da seta e da transição da imagem resultou em `0s`.
- Ausência de overflow horizontal em 390, 768, 1024 e 1440 px.
- Console sem erro de aplicação; somente a requisição externa de Google Fonts foi bloqueada pelo ambiente automatizado.
- ESLint restrito aos TSX alterados, `git diff --check` e build de produção concluídos sem erro.
- CTA final, Nosso jeito e demais dobras aprovadas não foram redesenhados.

## Comparação visual

- A hierarquia, a prateleira, o fio, a cápsula ativa, o CTA e a ordem mobile correspondem à direção escolhida.
- A fotografia genérica do alvo foi deliberadamente substituída por quatro cenas específicas por solicitação de Kevin.
- Nenhuma diferença P0, P1 ou P2 foi identificada na revisão automatizada e visual local.

## Resultado

final result: passed

Gate visual desta versão: **substituída pelo refinamento A.2; a decisão final do checkpoint está registrada abaixo**.

---

# Design QA — L-02R4 Lume & Pata — refinamento A.2

## Alvo e evidências

- Direção escolhida: A.2 — Trilho de momentos.
- Fonte visual de verdade: `docs/design/lume-e-pata/references/l02r4-opcao-a2-reference.png`.
- Refinamento tipográfico escolhido: híbrido entre A e B; a prancha intermediária foi removida após a decisão e a especificação final permanece registrada neste documento e na direção criativa.
- Fonte original da referência: `C:\Users\kevin\.codex\visualizations\2026\08\18\01a01729-1f91-7ad3-8d6d-615d86c457db\l02r4-a2-trilho-de-momentos.png` — 1536 × 1024 px, densidade 1.
- Implementação desktop: `C:\Users\kevin\.codex\visualizations\2026\08\18\01a01729-1f91-7ad3-8d6d-615d86c457db\l02r4-a2-implementation-desktop.png` — viewport 1440 × 1500 CSS px, recorte da dobra 1425 × 1283 px, densidade 1, estado alimentação `01 / 04`.
- Implementação mobile: `C:\Users\kevin\.codex\visualizations\2026\08\18\01a01729-1f91-7ad3-8d6d-615d86c457db\l02r4-a2-implementation-mobile-passeio.png` — viewport 390 × 844 CSS px, recorte da dobra 375 × 1161 px, densidade 1, estado passeio `02 / 04`.
- Comparação consolidada no mesmo input: `C:\Users\kevin\.codex\visualizations\2026\08\18\01a01729-1f91-7ad3-8d6d-615d86c457db\l02r4-a2-qa-comparison.png`.
- Evidências atualizadas do híbrido: `C:\Users\kevin\.codex\visualizations\2026\08\18\01a01729-1f91-7ad3-8d6d-615d86c457db\l02r4-hybrid-desktop-alimentacao.jpg` e `l02r4-hybrid-desktop-passeio.jpg`, ambas renderizadas no Chrome após o build de produção.
- A referência é uma prancha de apresentação que combina desktop, mobile e sequência de motion, não uma captura de viewport único. A comparação consolidada preserva a proporção de cada artefato e os apresenta juntos; não foi aplicado overlay de pixels porque os estados e enquadramentos de origem são deliberadamente diferentes.

## Comparação visual final

- **Tipografia:** Fraunces mantém a hierarquia editorial e o itálico coral de “rotina.”; Onest preserva a leitura do apoio, CTA, contadores e legenda. Peso, quebra e contraste correspondem à intenção do alvo nos dois tamanhos.
- **Espaçamento e ritmo:** intro, CTA, trilho e saída curva mantêm respiro equivalente à prancha. O card ativo domina a largura, os vizinhos aparecem nas laterais corretas e a faixa branca inferior permanece legível sem reduzir excessivamente a fotografia.
- **Cores e tokens:** creme, coral e sálvia usam os tokens existentes do Lume. A faixa branca agora traz filete coral e legenda contextual sálvia, sem cápsula; a categoria ativa usa sálvia e sublinhado coral, enquanto as inativas permanecem neutras.
- **Imagens e assets:** as quatro fotografias locais correspondem a alimentação, passeio, higiene e descanso, com crop nítido e sem placeholders. A cena genérica da prancha foi substituída pelas cenas específicas já pedidas por Kevin.
- **Copy e conteúdo:** eyebrow, título, apoio, CTA, quatro categorias e contadores foram preservados sem preço, estoque ou promessa comercial. A faixa do card passou a usar “Para alimentar”, “Para passear”, “Para cuidar” e “Para descansar”, evitando a repetição literal dos nomes da navegação inferior.
- **Affordance e estados:** no primeiro item existe apenas a seta direita; nos intermediários, duas; no último, somente a esquerda. A seleção persiste. A legenda desktop destaca o item ativo; o mobile mostra `02 / 04 • passeio` e quatro marcadores.
- Não foi necessário um segundo recorte focado além da captura mobile: os detalhes de rodapé, setas, contador, estado ativo e peeks laterais já estão legíveis nessa evidência.

## Histórico de comparação e correções

1. Primeiro passe — `blocked`:
   - [P2] O mobile mantinha os quatro nomes sob o card, enquanto o alvo aprovado usa estado central `02 / 04 • passeio` e quatro marcadores.
   - [P2] A cápsula do card ativo estava clara demais em relação ao sálvia sólido do alvo.
2. Correções:
   - o controle mobile passou a ter seta esquerda, estado central persistente e seta direita; a legenda mobile virou um conjunto de quatro marcadores;
   - a cápsula do card ativo passou a usar sálvia sólido com texto branco.
3. Segundo passe — evidências atualizadas nas capturas desktop/mobile e em `l02r4-a2-qa-comparison.png`: nenhum P0, P1 ou P2 permanece acionável.
4. Refino tipográfico híbrido — evidências desktop atualizadas após novo build:
   - removida a cápsula e aplicado o tratamento editorial A, com versal sálvia e filete coral;
   - conteúdo interno separado semanticamente da navegação inferior;
   - nomes inferiores convertidos para Title Case e sublinhado coral movido para baixo do item ativo;
   - a captura mobile anterior continua sendo a referência geométrica porque controles, peeks, contador e marcadores não mudaram; as regras móveis novas apenas reduzem o filete e o corpo da legenda contextual para caber na mesma faixa.

## Verificações funcionais e técnicas

- Setas: alimentação → passeio confirmou estado persistente, duas setas e legenda sincronizada.
- Híbrido tipográfico: alimentação → passeio confirmou “Para alimentar” → “Para passear”, `01 / 04` → `02 / 04` e “Alimentação” → “Passeio” no mesmo estado; `End` e `Home` confirmaram “Para descansar” e o retorno a “Para alimentar”.
- Teclado: `ArrowRight`, `Home` e `End` levaram respectivamente a higiene, alimentação e descanso; os limites mostram somente a seta possível.
- Breakpoints: 390, 768, 1024 e 1440 px sem overflow horizontal.
- Movimento reduzido: card, seta e legenda reportaram `transition-duration: 0s` com `prefers-reduced-motion: reduce`.
- Ações de toque usam os mesmos botões de 48 px; o gesto lateral é opcional e está implementado por eventos de ponteiro, sem substituir os controles primários.
- Regiões e botões têm nomes acessíveis; o estado ativo usa `aria-current`, o anúncio usa `aria-live` e cards inativos ficam fora da interação.
- Console de produção sem erro de aplicação ou overlay; a rota respondeu HTTP 200 e renderizou em `http://localhost:3001/projetos/lume-e-pata` durante a QA atualizada.
- ESLint restrito, `git diff --check`, parse do inventário JSON e build de produção concluíram sem erro.

## Resultado

final result: passed

Gate visual: **aprovado explicitamente por Kevin em 2026-08-20; L-02R4 congelada e L-02R5 aberta**.

---

# Design QA — L-02R5 Lume & Pata — opção B

## Alvo e implementação

- Direção escolhida: B — Volta pra casa.
- Fonte visual: painel B de `docs/design/lume-e-pata/references/l02r5-opcoes-abc.png`.
- Implementação: encerramento em `page.tsx`, regras L-02R5 no fim de `project.module.css` e asset `public/images/projects/lume-e-pata-cta-portal.png`.
- Evidência desktop temporária: `tmp/codex/qa/l02r5-implementation-desktop.png`, viewport solicitado de 1440 × 900 px.
- Evidência mobile temporária: `tmp/codex/qa/l02r5-implementation-mobile.png`, viewport solicitado de 390 × 844 px.

## Comparação visual

- A transição recebe a curva creme de Essenciais e desemboca em um palco integralmente sálvia, sem painel, faixa ou retângulo interno de outra cor.
- Headline, eyebrow e apoio preservam a hierarquia editorial do painel B; `sentido` permanece em Fraunces itálica sem introduzir nova mensagem comercial.
- O portal fotográfico usa uma cena própria de cachorro caramelo em cama sálvia, com enquadramento responsivo e recorte deliberadamente desequilibrado: a curva esquerda é maior que a direita. A fotografia repousa diretamente sobre o campo verde contínuo nos dois breakpoints.
- O fio pontilhado e sua pata final foram removidos integralmente do JSX e do CSS por decisão de simplificação de Kevin.
- O footer virou um trilho editorial claro com marca local e saídas explícitas para Home da Zucco e `/projetos`.
- A e C não foram misturadas. L-02R1 a L-02R4 não foram redesenhadas.

## Histórico de correções

1. Primeiro passe: composição correta, mas copy herdava centralização do CTA anterior e o palco estava alto demais, sobretudo no mobile.
2. Correção P2: copy e apoio passaram a alinhar à esquerda; escala tipográfica, altura do palco e altura do portal foram reduzidas contra o painel B.
3. Primeira correção focal mobile: a pata final foi deslocada para não colidir com o ícone do WhatsApp.
4. Revisão de Kevin: a moldura branca lateral e o retângulo creme isolado foram removidos; o portal ganhou geometria menos regular e o fio foi ancorado no botão.
5. Correção responsiva final: a curva foi simplificada, a pata recebeu contorno pontilhado mais legível e, no mobile, o conjunto passou para a área sálvia acima do CTA, sem sobrepor a foto do cachorro.
6. Revisão final browser-rendered: nenhum P0, P1 ou P2 permanece acionável antes do gate de Kevin.
7. Segunda revisão focal de Kevin: a interpretação orgânica da superfície creme ainda estava incorreta. O pseudo-elemento curvo foi eliminado e substituído por um corte reto 60/40 da própria seção; somente a máscara da fotografia conserva assimetria.
8. Terceira revisão focal de Kevin: o corte 60/40 ainda produzia uma junção quebrada e deixava visível o retângulo do palco. A divisão foi abandonada; a dobra agora usa uma única superfície verde, o palco é transparente e fio/pata foram removidos do código.

## Verificações funcionais e técnicas

- Viewports solicitados de 390, 768, 1024 e 1440 px: nenhum overflow horizontal, um único `h1`, asset carregado e ausência de overlay de erro.
- CTA de WhatsApp mantém a URL central existente; footer expõe `href="/"` e `href="/projetos"` com rótulos explícitos.
- Alvos mobile medidos com pelo menos 44 px de altura; o CTA possui 52,8 px.
- Foco de teclado no CTA: outline coral sólido de 3 px com offset de 4 px.
- Movimento reduzido emulado no navegador: portal com `clip-path: none`, opacidade `1`, transform `none` e duração `0s`; conteúdo já nasce revelado.
- Movimento normal: portal abre e assenta em 980 ms por CSS, disparado pelo `ScrollRevealController` existente.
- Console sem erro de aplicação. O modo de desenvolvimento emitiu somente o aviso heurístico do Next Image ao saltar sinteticamente para o fim da página e transformar a imagem lazy do CTA em LCP; o asset carregou com dimensões naturais válidas.
- ESLint restrito, parse do inventário JSON e `git diff --check`: passaram.
- Build de produção: passou após encerrar a prévia de desenvolvimento usada para a comparação.

## Resultado

final result: passed

Gate visual: **aprovado explicitamente por Kevin em 2026-08-20 após a simplificação final. A experiência local completa do Lume & Pata está encerrada; a publicação foi adiada para P-01**.
