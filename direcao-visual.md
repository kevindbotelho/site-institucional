# Direção visual — Lumen LP System

## Referência oficial

O Lumen LP System é a única referência visual oficial para a interface do site institucional. Ele orienta princípios, linguagem e comportamento; nenhum código, texto, marca, vídeo, métricas ou conteúdo demonstrativo da referência deve ser copiado.

## Princípios de interface

- Tema claro, luminoso e expressivo, com bastante respiro e contraste legível.
- Tipografia Manrope para títulos e DM Sans para textos e elementos de interface.
- Azul elétrico em transição para índigo como cor de assinatura, reservado a destaques e ações prioritárias.
- Superfícies translúcidas, bordas discretas e profundidade suave, sempre responsivas.
- CTAs claros com feixe luminoso sutil e hierarquia visual inequívoca.

## Identidade da marca

- Nome principal: **Zucco**.
- `ZuccoWeb` é uma direção de domínio e não deve substituir o nome principal na assinatura visual.
- **Design e Tecnologia** é o descritor institucional aprovado e pode aparecer nos metadados e nas peças de marca produzidas no Canva.
- A assinatura compacta do cabeçalho e do rodapé usa o símbolo e o wordmark existentes sem o descritor, preenchidos pelo gradiente azul-elétrico para índigo do próprio site.
- Em superfícies onde o gradiente não tiver contraste suficiente, podem ser usadas as versões monocromáticas clara ou escura.
- O favicon e o ícone de dispositivos usam o símbolo em gradiente sobre uma placa branca levemente azulada, garantindo contraste em interfaces claras e escuras.

## Movimento e responsividade

As entradas podem combinar blur leve e deslocamento vertical curto. Toda animação deve ser sutil, funcional e respeitar `prefers-reduced-motion`. A composição será mobile-first, sem overflow horizontal, adaptando espaçamento, densidade e escala tipográfica às telas maiores.

## Sistema visual dos projetos navegáveis

O Lumen LP System orienta a Zucco e a página agregadora `/projetos`; ele não deve fazer com que as demonstrações de nicho pareçam apenas variações da mesma marca.

Lume & Pata e Brisa de Tecido foram construídas com temas locais e CSS isolado, mas ainda não possuem design systems formais. A próxima evolução visual deve ser uma refatoração, não uma reconstrução:

- preservar rotas, conteúdo, estrutura semântica, responsividade, imagens e CTAs já validados;
- criar uma base compartilhada de primitivas técnicas — container, seção, botão, foco, espaçamento, breakpoints e moldura de retorno à Zucco;
- criar para cada projeto um tema próprio com tokens de cor, tipografia, escala, raio, borda, sombra e movimento;
- permitir variações reais de composição, cabeçalho e CTA, evitando que os projetos pareçam uma simples troca de textos e cores;
- não iniciar a refatoração visual antes de uma revisão conjunta das páginas atuais e da aprovação das fundações de cada tema.

A página `/projetos` permanece otimizada para dois destaques na fase atual. Quando o portfólio crescer, ela deve manter poucos destaques grandes e distribuir os demais itens em uma grade mais compacta; a Home continua mostrando somente uma seleção curta.

### Referências aprovadas para a refatoração

- **Lume & Pata:** Savory Plate como referência principal de composição bento, fotografia, tipografia editorial, componentes e movimento. A adaptação preserva o caráter acolhedor, o coral, o creme e a linguagem simples do projeto atual.
- **Brisa de Tecido:** OpenDesign como referência de grid, hierarquia, linhas, cards, etapas, accordion e movimento. Sua paleta pastel não será usada; a identidade permanece baseada em verde profundo, eucalipto, verde ácido e papel/linho.
- **Echelon:** referência secundária para composição ou movimento pontual, sem importar sua linguagem dourada e luxuosa.
- **Agent Human Academy:** fora do ciclo atual por conflito com a preferência por temas claros e com os nichos escolhidos.

As decisões operacionais, checkpoints e prompts de retomada estão em `plano-refatoracao-projetos.md`.
