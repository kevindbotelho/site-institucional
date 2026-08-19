# Design QA — L-02R1 Lume & Pata — opção A

## Alvo e evidências finais

- Fonte visual: `C:\Projetos\ia-projects\site-institucional\public\images\projects\lume-l02r1-opcao-a-reference.png`
- Referência focada enviada por Kevin para a interseção do fio: `C:\Users\kevin\AppData\Local\Temp\codex-clipboard-fe86a2f4-98d6-44db-9fcb-5cfb3c06ae61.png`
- Referência desktop normalizada: `C:\Projetos\ia-projects\site-institucional\l02r1-option-a-reference-desktop.png`
- Referência mobile normalizada: `C:\Projetos\ia-projects\site-institucional\l02r1-option-a-reference-mobile.png`
- Implementação desktop final após o ajuste do fio: `C:\Projetos\ia-projects\site-institucional\l02r1-option-a-line-adjustment-final.png`
- Implementação mobile final após o ajuste do CTA: `C:\Projetos\ia-projects\site-institucional\l02r1-option-a-line-adjustment-mobile.png`
- Comparação desktop final: `C:\Projetos\ia-projects\site-institucional\l02r1-option-a-comparison-desktop-adjusted.png`
- Comparação mobile final: `C:\Projetos\ia-projects\site-institucional\l02r1-option-a-comparison-mobile-adjusted.png`
- Comparações focadas do painel: `C:\Projetos\ia-projects\site-institucional\l02r1-option-a-comparison-card-final.png` e `C:\Projetos\ia-projects\site-institucional\l02r1-option-a-comparison-card-mobile-final.png`
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

- Referência escolhida e correção final desktop no mesmo board: `l02r2-comparison-final.png`.
- Encerramento da direção A e sua aplicação ao final da dobra: `l02r2-final-desktop.png` e `l02r2-closing-mobile.png`.
- Capturas responsivas de apoio: `l02r2-fidelity-mobile.png` e `l02r2-closing-mobile.png`.
- Revisão focal de Kevin: `codex-clipboard-c72d143d-8ec4-4558-ac82-31cd9ac7b676.png`, `codex-clipboard-6aee41aa-52ee-4b35-9f22-5fa36bf70897.png`, `codex-clipboard-ab2f46b8-0ebb-4af4-ad01-a7b844581696.png`, `codex-clipboard-69531344-b9e6-4df3-acca-2e3a3597e707.png` e `codex-clipboard-76dfd3dc-b39c-4897-9eaf-8145fe60bd13.png`.
- Comparação normalizada após a revisão focal: `l02r2-user-adjustments-comparison.png`.
- Implementação após a revisão focal: `l02r2-user-adjustments-final-desktop.png`, `l02r2-user-adjustments-closing-desktop.png`, `l02r2-user-adjustments-mobile-top.png` e `l02r2-user-adjustments-mobile-bottom.png`.
- Referência final do traço residual: `C:\Users\kevin\AppData\Local\Temp\codex-clipboard-9bbf5045-bc74-44e0-9fc8-8496b05a4677.png`.
- Captura final aprovada sem o traço: `l02r2-approved-final.png`, viewport CSS 1133 × 1058, densidade 1× e estado estático após os reveals.

Uma primeira passada desta implementação foi reprovada por Kevin por sobreposição entre os cards 02 e 03, apoio editorial mal posicionado, ilustrações aproximadas e encerramento visualmente separado. A correção atual mede a referência no mesmo viewport: o apoio termina antes do card 01, os três cards recuperam proporções e posições relativas sem colisão, e números, sublinhados, ilustrações e fios usam os elementos da composição aprovada. No mobile, os três conteúdos aparecem em sequência contínua e sem dependência de ação. O encerramento agora é composto pelas três camadas pedidas — fundo verde, círculo sálvia visto pelo topo e onda creme — dentro da mesma dobra.

Na revisão focal seguinte, Kevin pediu quatro correções: fim claro para o fio esquerdo, remoção da faixa verde sobre o card 03, remoção do arco solto junto ao título e círculo sálvia mais redondo, atravessando a onda creme. O render atual elimina o arco e a faixa, aproxima o fio do card e o encerra com ponto creme junto ao canto inferior; a faixa final agora permite a sobreposição real do círculo entre o fundo verde e o creme, sem comprometer a leitura no mobile.

Kevin aprovou explicitamente o conjunto e identificou somente um traço residual atrás da pata, causado pelo asset `lume-portal-closing-trail.png`. O asset foi removido do encerramento; `l02r2-approved-final.png` confirma a superfície creme limpa, sem deslocamento da pata, do título, do círculo maior ou da onda.

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

- Fonte visual: `C:\Projetos\ia-projects\site-institucional\public\images\projects\lume-l02r3-opcao-b-reference.png` (1.968.312 bytes).
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
- Referência preservada: `public/images/projects/lume-l02r4-opcao-a-reference.png`.
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

Gate visual: **aguardando aprovação explícita de Kevin; L-02R5 permanece fechado**.
