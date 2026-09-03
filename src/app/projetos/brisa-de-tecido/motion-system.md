# Brisa de Tecido — sistema de motion do projeto

> Sistema local de movimento da experiência. O Design System legado OpenDesign permanece somente leitura; este arquivo registra apenas decisões reais da Brisa.

## Perfil atual

- Perfil predominante: `immersive` na hero, com contenção editorial no restante da página.
- A hero B-01R1 usa a direção aprovada A.2 — Centro imersivo.
- O título, o CTA, o palco e a reprodução do vídeo permanecem independentes do scroll; a rolagem altera somente a frase serifada e o progresso 01–03.
- Nenhuma dependência adicional de animação foi instalada.

## Comportamento aprovado

- O palco full-bleed ocupa aproximadamente três viewports de rolagem e permanece sticky sob o cabeçalho local integrado ao vídeo.
- O MP4 de 10 segundos começa automaticamente, mudo e inline, toca uma única vez sem loop e repousa no último quadro. Seu `currentTime` não depende do scroll.
- Os três intervalos ativam, em sequência: “Sua sala com outro respiro.”, “Renovar é cuidar do que te acolhe.” e “Mais leveza, todo dia.”
- Os marcadores 01/03, 02/03 e 03/03 são botões rotulados e permitem navegar diretamente para cada intervalo.
- O CTA de WhatsApp mantém uma seta de saída: em hover ou foco, ela avança, some brevemente e retorna pela esquerda, sem interferir com a leitura.
- No mobile, o vídeo mantém um crop focal vertical; texto, CTA e indicador ficam sobre a imagem e preservam a mesma progressão.

## B-01R2 — Ateliê de tramas

- A seleção de peças de `#servico` usa quatro faixas: todas mostram seu recorte têxtil em baixa opacidade; a escolha ativa amplia sua faixa, eleva a foto e revela a orientação curta.
- Clique, touch, Enter/Espaço e setas do teclado alteram a mesma seleção. Home e End levam à primeira e à última faixa, mantendo o foco no item ativo.
- A transição usa somente `flex`, opacidade, filtro e transformação curta; não há scroll programático nem dependência adicional.

## B-02 — Rastro do cuidado

- As três etapas de `#como-funciona` são uma sequência em fluxo: registro do estofado, observação da peça e higienização no local, com marcadores 01–03 de silhuetas distintas.
- O título deixa “do contato ao local” como uma única sequência serifada contínua; o percurso é comunicado pela cópia e pela mudança de matéria tipográfica, sem ornamento gráfico concorrente.
- A entrada acontece uma única vez em cascata curta 01 → 02 → 03. Não há sticky, scroll programático, seleção, carrossel ou segundo CTA competitivo.
- Em dispositivos com hover, cada estação sobe discretamente e ganha profundidade sem alterar seu conteúdo. A saída contextual “Enviar pelo WhatsApp” mantém sua seta curta em hover ou foco.
- Em movimento reduzido, as três estações aparecem diretamente no estado final e a seta não se move.

## B-03R1 — Moldura de ateliê

- O divisor do comparador antes/depois permanece operável por ponteiro, toque e teclado; o rótulo de cada lado acompanha a presença da respectiva imagem.
- Quando o divisor deixa uma camada praticamente fora de cena (até 14% para “Antes” ou a partir de 86% para “Depois”), o rótulo correspondente desaparece com um recuo curto de 180 ms.
- Com movimento reduzido, essa transição é removida, mas a visibilidade contextual dos rótulos e a operação do slider permanecem disponíveis.

## Tokens

- Troca de frase: 360 ms de opacidade e 520 ms de deslocamento, com `cubic-bezier(0.16, 1, 0.3, 1)`.
- Resposta de CTA e marcador: 180 ms.
- Travessia da seta do CTA: 620 ms, `cubic-bezier(0.16, 1, 0.3, 1)`.
- Abertura/recuo das faixas de serviço: 620 ms, `cubic-bezier(0.16, 1, 0.3, 1)`; texto ativo entra em 240 ms.
- Assentamento das estações B-02: 620 ms, `cubic-bezier(0.16, 1, 0.3, 1)`, com 110 ms de cascata; elevação de hover e feedback da saída: 180–260 ms.
- Scroll listener passivo e atualização agrupada em um único frame.
- Vídeo mudo, inline, sem controles e com `preload="metadata"`.

## Movimento reduzido

- `prefers-reduced-motion: reduce` remove o palco sticky e o scroll programático.
- O vídeo permanece em um quadro estático do próprio MP4.
- As três mensagens aparecem simultaneamente em fluxo normal e os seletores de progresso são ocultados.
- Conteúdo, CTA e saídas de navegação permanecem disponíveis.
- Em `#servico`, não há interpolação de faixa, filtro ou texto: a peça selecionada é mostrada diretamente e todas as quatro escolhas continuam operáveis.
- Em `#como-funciona`, o fio e as três estações já estão no estado final; a saída para WhatsApp permanece operável.

## Motor e custo

- React/DOM nativo para medir o progresso e sincronizar apenas mensagem/estado.
- CSS para transições, sticky, responsividade e feedback.
- Sem Motion, GSAP ou Three.js.
- O MP4 original tem cerca de 14,3 MB; `preload="metadata"` reduz a transferência inicial, mas uma futura otimização do arquivo continua recomendada antes de P-01.
