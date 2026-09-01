# B-01R1 — direções para fundação, cabeçalho e hero

Estado: Kevin aprovou explicitamente a direção A.2 — Centro imersivo — para B-01R1 em 2026-08-27 e A — Ateliê de tramas — para B-01R2 em 2026-08-28. A hero, a barra de contexto, o cabeçalho local e “O serviço” estão congelados. B-02 A — Fio de chegada — foi implementada localmente e aguarda aprovação visual explícita.

## Base comum

- função: explicar higienização de estofados em domicílio, transmitir cuidado técnico e doméstico e levar ao orçamento pelo WhatsApp;
- conteúdo e fotografia: preservados conforme o checkpoint B-01R1;
- paleta: `#17221f`, `#21302c`, `#567b6d`, `#c8f06b` apenas como acento e `#f2f0e8`;
- OpenDesign: grid editorial, linhas funcionais, tipografia combinada com controle, anotações e reveal leve foram traduzidos para uma linguagem tátil e prática;
- rejeitado da referência: paleta pastel, linguagem arquitetônica, luxo, abstração, marca, textos, imagens e métricas;
- fora do escopo: dobras posteriores, Lume & Pata, Home, `/projetos` e publicação.

## Direções

### A — Etiqueta de cuidado

Arquivo: `b01r1-direcao-a-etiqueta-de-cuidado.png`

Prancha clara e assimétrica, com a foto tratada como amostra de tecido e uma etiqueta costurada como assinatura. Motion: linhas e título assentam em sequência; CTA responde com pressão tátil; a etiqueta conduz a saída; a costura abre a fotografia.

### A.1 — Etiqueta em movimento

Arquivo: `b01r1-direcao-a1-etiqueta-em-movimento.png`

Revisão da direção A com uma hero em **scrollytelling**: o palco permanece fixo durante um trecho de rolagem, o vídeo ocupa o lado direito e avança de acordo com o scroll, enquanto a mensagem em itálico muda no lado esquerdo. O arquivo real está em `/videos/projects/brisa-de-tecido-cleaning-scroll.mp4`.

#### Sequência proposta

1. `Seu sofá mais leve.` + `Sua sala com outro respiro.` — sofá inteiro;
2. `Seu sofá mais leve.` + `Sua rotina com mais leveza.` — traço luminoso percorre o tecido;
3. `Seu sofá mais leve.` + `Cuidado que aparece nos detalhes.` — desmontagem e remontagem.

#### Plano de interação

- desktop: palco sticky de aproximadamente uma viewport, distribuído em cerca de 43% para texto e 57% para vídeo, dentro de um trilho de rolagem de aproximadamente três viewports;
- texto: título principal permanece estável; somente a frase serifada troca com transição curta e discreta;
- vídeo: sem controles visíveis, mudo, inline e com progresso ligado ao scroll; a posição exata de cada capítulo deve ser calibrada contra os quadros reais do MP4;
- mobile: composição empilhada, com texto e vídeo no primeiro viewport e progressão em três etapas, evitando uma rolagem excessivamente longa;
- acessibilidade: com `prefers-reduced-motion`, usar quadro estático e apresentar as três mensagens em fluxo normal, sem palco fixo;
- desempenho: o MP4 original tem cerca de 14,3 MB e deve ser otimizado para entrega web antes de considerar a implementação concluída.

Estado posterior: a referência permanece como registro do percurso, mas a implementação foi reprovada por transformar o vídeo em quadros descontínuos durante rolagens rápidas, manter um retângulo branco deslocado e adicionar uma etiqueta visual sem função suficiente.

### A.2 — Centro imersivo

Arquivo: `b01r1-direcao-a2-centro-imersivo.png`

Direção escolhida explicitamente por Kevin em 2026-08-26. O vídeo original ocupa toda a hero como superfície contínua, recebe um véu verde com blur leve para contraste e toca uma única vez, sem loop e sem relação com a velocidade do scroll. O conteúdo usa centro óptico e mantém o CTA diretamente sobre a imagem, sem card, moldura branca ou etiqueta.

#### Sequência aprovada

1. `Seu sofá mais leve.` + `Sua sala com outro respiro.`;
2. `Seu sofá mais leve.` + `Renovar é cuidar do que te acolhe.`;
3. `Seu sofá mais leve.` + `Mais leveza, todo dia.`.

#### Plano de interação

- o vídeo começa automaticamente, mudo e inline, toca uma vez e repousa no último quadro;
- o scroll controla somente a frase serifada e o progresso 01–03;
- o cabeçalho, o CTA principal e o trilho de progresso seguem a referência A.2;
- desktop e mobile usam crops próprios do mesmo vídeo horizontal;
- com `prefers-reduced-motion`, o vídeo é pausado e as três mensagens permanecem disponíveis em fluxo normal.

#### Refinamento de fidelidade — 2026-08-27

- o bloco de leitura passou a ocupar um centro óptico mais frontal, com tratamento de contraste difuso sobre o vídeo;
- “Higienização em domicílio” foi centralizada sobre a coluna editorial e sua linha foi encurtada; título e frase agora são separados por duas linhas e um losango ácido;
- os números foram removidos das frases e permanecem apenas no trilho de navegação 01–03;
- o CTA ganhou ícone do WhatsApp em escala editorial, mais largura e uma seta que atravessa o fim da linha ao receber hover ou foco.

#### Ajuste de contraste e proporção — 2026-08-27

- não há superfície, card, borda ou `backdrop-filter` localizado atrás da copy: o contraste é uma sombra difusa sem limite visível, combinada ao véu verde da hero;
- título, frase dinâmica e CTA compartilham um único trilho editorial. As frases podem quebrar linha, mas nunca ultrapassam as laterais reservadas ao título;
- a sequência, o vídeo full-bleed e o controle de texto pelo scroll foram preservados.

#### Ajuste de composição — 2026-08-27

- a coluna mantém três comprimentos intencionais: selo curto, separador intermediário e CTA na largura total da leitura; título e frase compartilham o mesmo início à esquerda;
- ao recarregar a página, a hero retorna ao topo e ao momento 01, sem restaurar o estado 03 de uma rolagem anterior.

#### Refinamento de fidelidade — 2026-08-27

- o bloco de leitura passou a ocupar um centro óptico mais frontal, com tratamento de contraste difuso sobre o vídeo;
- “Higienização em domicílio” foi centralizada sobre a coluna editorial e sua linha foi encurtada; título e frase agora são separados por duas linhas e um losango ácido;
- os números foram removidos das frases e permanecem apenas no trilho de navegação 01–03;
- o CTA ganhou ícone do WhatsApp em escala editorial, mais largura e uma seta que atravessa o fim da linha ao receber hover ou foco.

### B — Janela de respiro

Arquivo: `b01r1-direcao-b-janela-de-respiro.png`

Fotografia contínua em escala de ambiente, atravessada por uma faixa verde que ancora a mensagem sem repetir o hero dividido atual. Motion: faixa entra e fixa o texto; CTA percorre uma linha curta; a foto recebe parallax mínimo; uma passagem de luz percorre o tecido uma única vez.

### C — Mapa do tecido

Arquivo: `b01r1-direcao-c-mapa-do-tecido.png`

Grade de inspeção calorosa, com a fotografia distribuída em três janelas alinhadas aos módulos do sofá e navegação em coluna utilitária. Motion: janelas revelam em sequência; a linha de medida conduz o CTA; os recortes se alinham durante o scroll; a trama muda de foco uma única vez.

## Recomendação atual

Direção A.2 — Centro imersivo. A referência está preservada como registro do checkpoint B-01R1, aprovado explicitamente por Kevin em 2026-08-27; a próxima decisão visual pertence à dobra B-01R2.

## B-01R2 — O serviço — primeira rodada rejeitada

Os arquivos `b01r2-direcao-a-faixas-de-leitura.svg`, `b01r2-direcao-b-caderno-de-avaliacao.svg` e `b01r2-direcao-c-mapa-de-contato.svg` foram rejeitados explicitamente por Kevin em 2026-08-27. Eles são preservados somente como evidência do que não implementar: pranchas esquemáticas com tipografia aproximada, pouca densidade, sem direção de arte final e sem motion visualmente julgável.

A próxima rodada de B-01R2 recomeça do zero no visual. A ideia de seleção por peça da antiga opção A pode voltar apenas como hipótese de interação; nenhum layout, tipografia ou superfície da rodada rejeitada é fonte de verdade.
