# B-01R2 A — Ateliê de tramas — Brief de fidelidade operacional

## Fonte e escopo

- Direção escolhida explicitamente por Kevin em 2026-08-28: [A — Ateliê de tramas v2](b01r2-nova-direcao-a-ateliê-de-tramas-v2.png).
- Escopo único: seção `#servico` em `src/app/projetos/brisa-de-tecido/page.tsx` e estilos locais correspondentes.
- Preservar integralmente a hero B-01R1 A.2, cabeçalho, seções posteriores, rota e contato centralizado.

## Assets declarados

| Elemento | Fonte | Regra |
| --- | --- | --- |
| Fundos ativos têxteis | `public/images/projects/brisa-service-textile-selector.png`, `brisa-service-armchair.png`, `brisa-service-chair.png` e `brisa-service-pouf.png` | Cada peça possui seu próprio recorte fotográfico. Todos são usados somente nesta dobra como matéria editorial vertical e não devem virar fotos de catálogo. |
| Prancha | `b01r2-nova-direcao-a-ateliê-de-tramas-v2.png` | Direção de composição, contraste, escala e estados. Não é asset da aplicação. |
| Tipografia e ícones | Onest/Fraunces e bibliotecas já presentes | Onest sustenta informações e rótulos; Fraunces concentra a explicação ativa; ícones vêm de biblioteca existente. |

## Alvos isolados

### Desktop — 1440 × 900, Sofás ativo

- Seção em papel/linho com título grande à esquerda e selector de quatro faixas à direita.
- `01 Sofás` ocupa a maior parte do palco, revela o recorte têxtil e a cópia obrigatória; `02–04` permanecem visíveis com seus próprios recortes em baixa opacidade, escuros e de baixo contraste, sem desaparecer.
- Uma linha ácido discreta nasce da leitura ativa. Não criar grid de cards, caixa translúcida ou hero secundária.
- O apoio "Fotos · medidas · bairro" prepara o contato sem preço, prazo ou promessa adicional.

### Mobile — 390 × 844, Sofás ativo

- Cabeçalho do conteúdo e título precedem uma faixa fotográfica ativa alta; as outras peças surgem como trilho vertical compacto à direita/abaixo.
- A seleção ativa mantém cópia legível e toque mínimo de 44 px. O CTA contextual pode aparecer apenas no fim do módulo, sem competir com a hero.

## Estados e motion

- Entrada: título e quatro faixas assentam em sequência breve; o asset ativo entra sem parallax.
- Interação: clique, toque ou teclado selecionam uma única peça; a nova faixa expande e eleva sua foto à opacidade total, enquanto a anterior recolhe e baixa sua imagem, atualizando `aria-pressed`.
- Scroll: a seção não cria narrativa sticky; apenas revela uma vez ao entrar no viewport.
- Movimento reduzido: nenhum deslocamento; a peça selecionada continua aberta e os controles permanecem operáveis.

## Gate

P0–P2 incluem: conteúdo obrigatório ausente, peça não selecionável por teclado, múltiplas peças ativas, contraste insuficiente, asset/crop incompatível, alvo de toque menor que 44 px ou composição que volte a uma lista genérica. Capturar desktop e mobile com Sofás ativo e também verificar Poltronas ativa antes de pedir aprovação de Kevin.
