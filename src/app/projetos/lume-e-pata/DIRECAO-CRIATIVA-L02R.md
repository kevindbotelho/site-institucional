# Lume & Pata — redirecionamento criativo e processo dobra a dobra

> Fonte de verdade criativa a partir da reprovação visual do primeiro L-02 em 2026-08-11. Este documento substitui as decisões de composição, tipografia, componentes e movimento do contrato L-01 que entrarem em conflito com ele. O conteúdo válido, as regras comerciais, a acessibilidade, a rota e os contatos continuam preservados.

## 1. Estado e decisão

O primeiro L-02 foi concluído tecnicamente, mas reprovado por Kevin no gate visual. A página ficou funcional e responsiva, porém genérica, superficial e próxima demais da gramática da Home da Zucco.

Decisão:

- não avançar para L-03;
- não apagar a rota, o conteúdo, os assets, a semântica ou as integrações válidas;
- reabrir o L-02 como **L-02R**, uma reconstrução visual progressiva, dobra a dobra;
- substituir amplamente CSS, composição e componentes quando necessário;
- aprovar um alvo visual concreto antes de implementar cada dobra;
- preservar a versão atual apenas como baseline reprovada e matéria-prima técnica.

Nenhuma versão do L-02R será publicada antes do QA e da autorização do checkpoint de publicação.

## 2. O que falhou no processo anterior

O problema não foi Kevin deixar de especificar cada detalhe. A direção criativa deveria ter sido proposta pelo trabalho de design, não transferida ao revisor.

Falhas objetivas:

1. **Contrato textual sem alvo visual.** Tokens, raios e regras foram aprovados sem três composições concretas para comparação.
2. **Passada ampla cedo demais.** Todas as dobras foram implementadas antes de a primeira dobra provar a identidade.
3. **Referência subutilizada.** O Savory Plate foi reduzido a bento, serif, cards e hover; sua sobreposição entre texto e mídia, densidade, glass cards, marquee e baralho interativo ficaram de fora.
4. **Movimento excessivamente restringido.** O contrato proibiu marquee, swipe, drag, parallax e física antes de avaliar onde esses padrões poderiam servir à narrativa do Lume.
5. **Sem teste de diferenciação.** A página não foi comparada pela silhueta com a Home da Zucco antes da implementação completa.
6. **Critérios técnicos mais fortes que os criativos.** Responsividade, foco, build e WhatsApp ficaram objetivos; personalidade, surpresa, densidade e memorabilidade não tinham testes equivalentes.
7. **Aprovação de documento confundida com aprovação visual.** Um mapa escrito não demonstrou como tipografia, fotografia, ritmo e movimento funcionariam juntos.

## 3. Auditoria das referências

### Savory Plate — referência principal de composição e interação

O que torna a referência forte:

- hero com uma cena fotográfica dominante e dois módulos complementares, não apenas uma foto ao lado de texto;
- texto editorial inserido na mídia, contraste de escala e uma palavra de assinatura;
- card translúcido com informação útil, fotografia e profundidade;
- variedade de proporções dentro de uma mesma família visual;
- marquee como transição e ritmo;
- baralho arrastável com física e estado claro;
- interface interessante mesmo em screenshot estático.

O que pode ser traduzido para o Lume:

- hero multicamada com fotografia, proposta, sinais de atendimento e microconteúdo;
- card translúcido funcional sobre imagem, sem esconder informação essencial;
- trilho contínuo para cuidados ou rotina;
- pilha arrastável ou deslizável aplicada a cuidados, etapas ou essenciais — nunca a depoimentos fictícios;
- alternância entre fotografia ampla, detalhe e texto curto.

### OpenDesign — referência secundária de profundidade editorial

O que torna a referência forte:

- hero tratado como uma prancha completa, com tipografia, arte, anotações e índice;
- composição assimétrica que continua coerente;
- detalhes editoriais criam profundidade sem exigir muitas seções;
- cada dobra possui uma regra própria de leitura;
- marquee, sticky narratives, linhas e numeração conectam a página.

O que pode ser traduzido para o Lume:

- anotações e pequenos sinais de cuidado em linguagem de bairro, sem estética arquitetônica;
- sequência de atendimento tratada como narrativa ativa;
- mudanças claras de composição entre dobras;
- uso de linhas, etiquetas e numeração como orientação, não decoração gratuita.

### Lumen e Home da Zucco — régua de qualidade, não fonte visual

A Home comprova o nível esperado de acabamento, fotografia, blur, coreografia e responsividade. Ela não deve fornecer ao Lume:

- a mesma estrutura de cabeçalho;
- o mesmo posicionamento de CTA;
- a mesma dupla tipográfica;
- a mesma entrada com blur;
- os mesmos cards translúcidos azuis ou a mesma linguagem de brilho;
- a mesma silhueta de hero dividido.

O Lume precisa parecer uma marca independente antes mesmo de o visitante ler o texto.

### Catálogos de movimento

`animation-clean` e `animations-gemini` ampliam o repertório de máscara, blur, sequência tipográfica, sticky state e transição. São fontes de mecânica, não de identidade cromática ou layout.

## 4. Tese criativa revisada

### Ideia central

**Rotina com afeto, em movimento.**

Lume & Pata deve parecer um pequeno negócio de bairro atento, vivo e contemporâneo. Não é clínica, pet shop de luxo nem template fofo. A experiência mistura fotografia calorosa, tipografia expressiva sem herdar a Home da Zucco, módulos táteis e movimento que representa aproximação, cuidado e rotina.

### Sensação desejada

- próxima, não infantil;
- artística, não luxuosa;
- expressiva, não barulhenta;
- tátil, não plástica;
- contemporânea, não tecnológica;
- única, sem perder clareza comercial.

### Regras de identidade

- coral, creme, tinta e sálvia continuam como território cromático, mas podem ganhar novos valores e combinações após teste visual;
- Playfair Display e Plus Jakarta Sans deixam de ser decisões aprovadas; a exploração deve testar tipografias próprias do Lume e evitar Manrope + DM Sans da Zucco;
- a direção será preferencialmente **sans-forward**, podendo usar itálico ou uma segunda voz expressiva apenas se melhorar a composição;
- a barra de contexto da Zucco permanece, mas o cabeçalho local terá silhueta e comportamento próprios;
- nenhuma dobra pode repetir automaticamente “título + parágrafo + três cards” ou “texto à esquerda + foto à direita”;
- cada dobra deve ter um gesto visual e um comportamento característico, mantendo tokens e ritmo comuns;
- movimento deve participar da explicação, não apenas fazer elementos subirem ao entrar na tela.

## 5. História e gesto de cada dobra

### 5.1 Fundação, cabeçalho e hero — primeiro encontro

História: em poucos segundos, apresentar um lugar acolhedor, a proposta e a facilidade de conversar.

Direção a explorar:

- foto principal menor e melhor enquadrada dentro de uma composição com 2–4 módulos;
- texto com contraste real de escala, peso ou postura, sem repetir a tipografia da Zucco;
- uma palavra de assinatura pode continuar, mas não deve ser o único gesto memorável;
- card translúcido com sinais do atendimento ou próximo passo;
- elementos fotográficos/textuais sobrepostos com leitura protegida;
- entrada coreografada: texto, mídia e card constroem a cena em sequência;
- cabeçalho local compacto, assimétrico ou integrado à composição, sem copiar a distribuição da Home.

### 5.2 Cuidados essenciais — cardápio de cuidados

História: mostrar rapidamente o que a Lume resolve sem parecer uma grade genérica de serviços.

Direção a explorar:

- trilho editorial, cards de proporções diferentes ou composição que avance horizontalmente;
- imagem, detalhe ou textura associados aos cuidados somente após a composição ser aprovada;
- hover/foco pode revelar apoio, deslocar camadas ou expandir o item;
- no toque, a mesma informação deve aparecer por seleção explícita ou scroll;
- o conjunto parado já deve ter hierarquia e ritmo.

### 5.3 Nosso jeito — cuidado em três momentos

História: transformar os passos 1–2–3 em uma experiência acompanhável.

Direção a explorar:

- narrativa sticky ou palco visual que muda conforme cada passo fica ativo;
- número, título, texto e fotografia reagem como um único estado;
- hover e foco podem antecipar estados no desktop; scroll ou toque conduz no mobile;
- todos os textos permanecem acessíveis sem depender da animação;
- `LUME-W01` pode permanecer, ser recortado ou ser substituído somente após a direção aprovada demonstrar a necessidade.

### 5.4 Essenciais do dia a dia — rotina viva

História: ampliar a percepção do pet shop sem simular catálogo ou estoque.

Direção a explorar:

- prateleira editorial, colagem, marquee ou pilha deslizável;
- categorias simples de rotina podem circular ou ser exploradas por toque/arraste;
- sem preços, marcas, disponibilidade ou promessas de entrega;
- `LUME-D01` é matéria-prima, não obrigação de manter o split atual.

### 5.5 CTA e footer — despedida com assinatura

História: fechar a visita com calor e um próximo passo claro.

Direção a explorar:

- transição visual própria que recapitule cor, marca e movimento;
- CTA não deve repetir o painel arredondado central da versão reprovada;
- footer local deve parecer parte da Lume, mantendo caminho claro para a Zucco e `/projetos`;
- movimento final pode aproximar marca, texto e ação, sem prender o visitante.

## 6. Linguagem de movimento

O novo sistema pode usar, quando fizer sentido:

- revelação por máscara;
- construção tipográfica por linha ou palavra;
- parallax leve e limitado a camadas decorativas/fotográficas;
- marquee pausável;
- trilho ou pilha arrastável com alternativa por botões, teclado e toque;
- sticky storytelling;
- transição de estado entre passos;
- deslocamento de camadas e mudança de crop;
- microinterações específicas por dobra.

Regras:

- o layout estático deve continuar forte;
- nenhuma informação essencial depende de hover, drag ou animação;
- controles recebem nome, foco e alternativa de teclado;
- autoplay contínuo precisa ser decorativo, pausável quando aplicável e removido em `prefers-reduced-motion`;
- movimento reduzido apresenta o estado final imediatamente;
- não usar efeitos apenas para preencher silêncio visual.

### Fio de cuidado — motivo contínuo do projeto

A linha fina inaugurada na lateral esquerda da hero passa a ser um motivo recorrente do Lume & Pata: o **fio de cuidado**. Ela pode acompanhar a página até o encerramento, conectando visualmente as dobras, desde que cada trecho seja desenhado junto da composição aprovada daquela dobra.

Regras do motivo:

- trocar de cor exatamente ao cruzar superfícies claras e escuras, mantendo contraste sem criar uma ponta residual da cor anterior;
- poder curvar, interromper, contornar um módulo ou reaparecer quando isso servir à narrativa da dobra;
- não virar uma régua reta automática sobre conteúdo, texto, fotografia ou controles;
- não depender de animação para funcionar; movimento futuro pode percorrer o fio, mas o estado estático precisa permanecer completo;
- no mobile, usar somente quando a composição da dobra comportar o gesto sem reduzir espaço de leitura ou toque;
- o trecho de cada nova dobra será decidido no respectivo checkpoint A/B/C; não antecipar o desenho das seções ainda reprovadas.

## 7. Processo de trabalho revisado

Cada dobra será uma task própria e seguirá o mesmo ciclo:

1. reler o contexto persistente e as referências específicas;
2. capturar a dobra atual e os padrões relevantes das referências;
3. definir função comercial, história, composição e comportamento antes do código;
4. produzir **exatamente três opções visuais concretas** para a dobra;
5. apresentar as três opções com diferenças explícitas e uma recomendação;
6. parar e aguardar Kevin escolher uma opção ou rejeitar o conjunto;
7. implementar somente a opção escolhida e somente a dobra em escopo;
8. validar desktop, mobile, movimento, teclado e movimento reduzido;
9. manter a prévia aberta para revisão;
10. atualizar documentos e preparar o prompt da dobra seguinte apenas depois da aprovação.

Kevin não precisa desenhar a solução nem listar todos os detalhes. Para conduzir o trabalho, basta responder com uma destas formas:

- “A”, “B” ou “C”;
- “gostei desta, mas quero mais/menos [sensação]”;
- “nenhuma; está genérico”;
- observações espontâneas enquanto navega.

A responsabilidade de transformar essa reação em decisões de design é do processo criativo.

## 8. Checkpoints do L-02R

| Checkpoint | Escopo único | Gate |
|---|---|---|
| `L-02R1` | Fundação visual, cabeçalho local e hero | Kevin escolhe uma das três direções e aprova a implementação da primeira dobra |
| `L-02R2` | Cuidados essenciais | Aprovação da composição e interação da dobra |
| `L-02R3` | Nosso jeito | Aprovação da narrativa interativa 1–2–3 |
| `L-02R4` | Essenciais do dia a dia | Aprovação da profundidade e exploração da rotina |
| `L-02R5` | CTA, footer e costura global de movimento | Aprovação visual da página completa |
| `L-03` | Acabamento global após todas as dobras aprovadas | Aprovação final da experiência |
| `L-04` | QA e publicação autorizada | Publicação e documentação do estado público |

## 9. Critérios criativos de aceite

Uma dobra só avança quando:

- sua silhueta não parece uma adaptação direta da Home da Zucco;
- existe uma ideia visual reconhecível além de cor, raio e sombra;
- existe um gesto de movimento ligado à história daquela dobra;
- a composição continua interessante em screenshot parado;
- tipografia, fotografia e interface parecem pertencer à mesma marca;
- a dobra não repete a estrutura da anterior sem uma razão funcional;
- o próximo passo comercial continua claro;
- desktop e mobile possuem composições intencionais, não apenas empilhamento;
- teclado, foco, contraste, toque e movimento reduzido continuam válidos;
- Kevin consegue aprovar, rejeitar ou direcionar sem precisar projetar a solução.

## 10. Fontes de referência para o L-02R

Primárias:

- `C:\Projetos\design systems\savory-plate.aura.build\design-system.html`
- `C:\Projetos\design systems\savory-plate.aura.build\STACK.md`
- `C:\Projetos\design systems\open-design.ai\design-system.html`
- `C:\Projetos\design systems\open-design.ai\STACK.md`

Régua e repertório:

- `C:\Projetos\design systems\lumen-lp-system\index.html`
- `C:\Projetos\design systems\lumen-lp-system\README.md`
- `C:\Projetos\design systems\animation-clean\design-system.html`
- `C:\Projetos\design systems\animations-gemini\index.html`
- `C:\Projetos\design systems\Extract HTML Design System.md`

As referências são fontes de padrões e qualidade. Não copiar marca, conteúdo, imagens, depoimentos, métricas, integrações ou código externo.

## 11. Próximo passo

Revisar a implementação local da opção A — Prateleira editorial — de `L-02R4`. Manter L-02R5 fechado até aprovação visual explícita de Kevin.

## 12. L-02R1 — opção escolhida e implementação

Kevin escolheu inicialmente, em 2026-08-11, a opção C — **Percurso de cuidado**. Antes do gate final, em 2026-08-12, substituiu a escolha pela opção A — **Portal de acolhimento**, por considerar a composição mais limpa e o WhatsApp mais claro. A referência atual está preservada em `public/images/projects/lume-l02r1-opcao-a-reference.png`; a referência C permanece arquivada como histórico.

Decisões implementadas:

- moldura escura e fina de retorno à Zucco, separada da identidade local;
- marca local limpa, navegação central e CTA de WhatsApp explícito no desktop; marca compacta, botão de WhatsApp e menu no mobile;
- Onest Variable como voz sans-forward e Fraunces Variable somente no itálico expressivo de “feliz.”;
- título em quatro linhas, fotografia em portal orgânico à direita e fundo editorial creme/sálvia;
- painel translúcido “Atendimento próximo, do começo ao fim” com três sinais objetivos do atendimento;
- transformação mobile com título primeiro, CTA explícito, fotografia e painel sobreposto;
- entrada própria para copy, máscara fotográfica e painel, com estado final íntegro em movimento reduzido;
- glifo oficial do WhatsApp e patas vindos de React Icons; símbolo da casa com pata e trilhas extraídos da própria referência aprovada, sem desenhos artesanais aproximados;
- máscara orgânica responsiva, painel de vidro em camadas e microconteúdo com pontos usados somente como separadores.
- primeiro trecho do fio de cuidado corrigido para trocar do sálvia para o creme exatamente na interseção com a paisagem inferior;
- CTA principal simplificado para “Conversar no WhatsApp”, preservando intenção, URL e mensagem configurada.

Assets atuais de referência e QA:

- `public/images/projects/lume-l02r1-opcao-a-reference.png` — board escolhido com desktop e mobile;
- `l02r1-option-a-line-adjustment-final.png` e `l02r1-option-a-line-adjustment-mobile.png` — evidências renderizadas aprovadas após os ajustes do fio e do CTA;
- `l02r1-option-a-comparison-desktop-adjusted.png` e `l02r1-option-a-comparison-mobile-adjusted.png` — comparações normalizadas finais aprovadas;
- `l02r1-option-a-comparison-card-final.png` e `l02r1-option-a-comparison-card-mobile-final.png` — comparações focadas do painel;
- `public/images/projects/lume-portal-house-paw.png`, `lume-portal-card-trail.png` e `lume-portal-closing-trail.png` — microassets transparentes extraídos da referência escolhida;
- assets `lume-l02r1-opcao-c-reference.png` e `lume-l02r1-route-*.png` — registro histórico da direção substituída.

Restrições preservadas:

- Cuidados essenciais, Nosso jeito, Essenciais do dia a dia, CTA final e footer não foram redesenhados;
- rota, conteúdo comercial, mensagem de WhatsApp, único `h1`, foco visível e movimento reduzido foram mantidos;
- nenhuma publicação foi realizada.

Estado: refinamento de fidelidade e QA final concluídos em 2026-08-13, sem diferenças P0–P2; implementação aprovada explicitamente por Kevin na mesma data. `L-02R1` está concluído e `L-02R2` é o próximo checkpoint aberto.

## 13. L-02R2 — direção escolhida e implementação em revisão

Kevin escolheu a direção B — **Mosaico de rotinas** — em 2026-08-13 e pediu que a faixa editorial da direção A fosse incorporada como encerramento da própria dobra. A decisão central é de leitura contínua: os três cuidados devem aparecer no fluxo natural da página, sem carrossel, setas, indicadores, seleção obrigatória ou instrução de uso.

Decisões implementadas localmente:

- a hero desemboca diretamente em Cuidados essenciais; “Rotina leve, pet feliz sempre.”, o apoio sobre banho e itens do dia a dia e a pata em círculo sálvia encerram a seção sobre uma onda creme; o círculo sálvia maior atravessa a onda e permanece visível em tom sobre tom sobre o fundo verde, sem trilha residual atrás da pata;
- o título e o apoio ficam à esquerda, com “encontrar.” em Fraunces coral, e a grade uniforme dá lugar ao mosaico assimétrico da direção escolhida;
- o card 01 é horizontal e creme, o 02 é vertical e coral e o 03 é horizontal e grafite, com sobreposições equivalentes à referência e sem a faixa verde ornamental sobre o card 03;
- banheira com espuma, tesoura com régua e sacola com pata usam recortes transparentes da própria referência aprovada, preservando desenho, escala e molduras em arco;
- banho, tosa e essenciais permanecem simultaneamente legíveis em desktop e mobile; o mobile reorganiza as peças com larguras e alinhamentos próprios, sem ocultar conteúdo;
- o fio de cuidado usa composições desktop e mobile extraídas da referência escolhida, sem cruzar texto ou ilustrações; no desktop, ele acompanha o canto do card 01 e termina com um ponto creme de biblioteca, enquanto o arco residual junto ao título foi removido;
- hover é somente um deslocamento visual discreto de cards não interativos; o fluxo não depende dele e movimento reduzido preserva o estado estático.

Restrições preservadas:

- hero, cabeçalho local, barra da Zucco e todos os checkpoints posteriores permanecem sem alteração deliberada;
- cinco assets locais de fidelidade foram criados a partir da referência aprovada: três ilustrações lineares e dois fios pontilhados responsivos; nenhum conteúdo comercial foi ampliado;
- a implementação permanece local; nenhum deploy foi realizado.

Após Kevin reprovar a primeira passada de fidelidade, a composição foi refeita com medidas do alvo visual. QA comparativa concluída em 390, 768, 1024 e 1133 px, sem diferenças P0–P2. Evidências principais: `l02r2-user-adjustments-comparison.png`, `l02r2-user-adjustments-final-desktop.png`, `l02r2-user-adjustments-mobile-bottom.png` e `l02r2-approved-final.png`. Kevin aprovou explicitamente o conjunto em 2026-08-13 e pediu apenas a remoção do traço residual atrás da pata; a captura `l02r2-approved-final.png` confirma o acabamento limpo. `L-02R2` está concluído e `L-02R3` é o próximo checkpoint aberto.

## 14. L-02R3 — direção escolhida e checkpoint encerrado para avanço

Kevin escolheu em 2026-08-18 a opção 2/B — **Palco em três tempos** — e definiu sua assinatura de movimento: ao rolar, a dobra permanece como um palco estático e troca somente o passo narrativo e o contador `01/03` → `02/03` → `03/03`. A referência escolhida está preservada em `public/images/projects/lume-l02r3-opcao-b-reference.png`.

Decisões implementadas localmente:

- fotografia real, título “O ritmo do pet vem primeiro.” e texto de contexto permanecem no palco sticky durante o percurso;
- somente um passo recebe destaque visual por vez, com número ampliado, título e apoio; os demais continuam presentes no DOM;
- a etiqueta sobre a fotografia atualiza o contador em sincronia com o passo ativo;
- após a primeira revisão no navegador, o contador deixou de ser um card isolado e passou a integrar uma massa orgânica sálvia atrás da fotografia; Kevin rejeitou a escala ainda contida dessa primeira correção e, depois, esclareceu que a superfície sálvia não deveria apenas tocar a borda com uma curva: ela precisa ultrapassar o viewport e ser cortada por ele, formando uma parede vertical reta à esquerda. A passada atual aplica esse corte, amplia o conjunto e acentua a assimetria das duas máscaras;
- três seletores nomeados oferecem alternativa por teclado e toque e levam ao intervalo correspondente da rolagem;
- em movimento reduzido, o sticky e as transições são removidos e os três passos aparecem completos no fluxo;
- no mobile, o palco se reorganiza em uma coluna sem substituir a fotografia nem reduzir os alvos de toque;
- a saída de Cuidados essenciais e a entrada de Essenciais do dia a dia foram preservadas; nenhuma dobra aprovada ou posterior foi redesenhada.

Kevin aprovou a qualidade do motion na primeira revisão e pediu mais densidade visual na composição fotográfica. As duas primeiras correções não reproduziram o recorte esquerdo da referência e foram rejeitadas. Na última passada de 2026-08-18, a massa sálvia começa 24% antes do limite do conjunto e é recortada pelo viewport, criando o trecho vertical pedido; o conteúdo interno recebe compensação equivalente para permanecer alinhado e visível. A fotografia ocupa 80% da largura visual e usa uma máscara menos oval. ESLint restrito, build de produção e resposta HTTP 200 passaram novamente. A captura browser-rendered automatizada permaneceu bloqueada; a decisão posterior de Kevin abaixo encerrou o gate de produto e avançou o ponteiro para L-02R4.

Decisão final do gate: em 2026-08-18, Kevin declarou explicitamente L-02R3 aprovado para avanço e pediu a próxima dobra. A aprovação encerra o checkpoint por decisão do revisor, embora `design-qa.md` mantenha `final result: blocked` pela ausência de captura automatizada normalizada. A implementação atual de Nosso jeito passa a ser preservada em L-02R4 e não deve ser refinada por oportunidade.

## 15. L-02R4 — direção escolhida e implementação em revisão

Kevin escolheu em 2026-08-18 a opção A — **Prateleira editorial** — e pediu que sua composição fosse preservada, substituindo a fotografia única por quatro cenas relacionadas às categorias. A referência escolhida está preservada em `public/images/projects/lume-l02r4-opcao-a-reference.png`.

Decisões implementadas localmente:

- título editorial com “rotina.” em Fraunces coral, apoio, CTA sólido de WhatsApp e entrada pelo fio pontilhado da referência;
- uma prateleira horizontal reúne alimentação, passeio, higiene e descanso sem simular catálogo ou cards de produto;
- no desktop, hover pré-visualiza a categoria; clique ou foco fixa a seleção e a última escolha persiste quando o ponteiro sai;
- no mobile, a fotografia antecede quatro botões sempre visíveis e toque seleciona a categoria;
- setas direcionais, Home e End oferecem navegação por teclado, sem depender de hover ou arraste;
- a categoria ativa recebe cápsula sálvia, ponto sincronizado e seta em respiração curta; a fotografia entra por `clip-path`, escala suave e feixe quente;
- em movimento reduzido, seta, feixe, transição e deslocamentos são removidos e a troca permanece instantânea;
- quatro fotografias locais coerentes foram criadas para alimentação, passeio, higiene e descanso, sem preços, marcas, estoque, promoções ou promessas comerciais;
- a saída curva entrega a composição ao CTA existente sem redesenhá-lo; L-02R1, L-02R2 e L-02R3 permaneceram intocados.

ESLint restrito, build de produção, HTTP 200, overflow, console, hover, clique, foco, teclado, toque e movimento reduzido foram conferidos. A comparação usa `l02r4-comparison-reference-render.png` e capturas em 390, 768, 1024 e 1440 px. Estado: implementação pronta para revisão visual; gate ainda não aprovado por Kevin.
