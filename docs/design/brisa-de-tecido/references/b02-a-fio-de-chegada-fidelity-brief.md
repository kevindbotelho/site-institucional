# B-02 A — Fio de chegada — Brief de fidelidade operacional

## Fonte e escopo

- Direção escolhida explicitamente por Kevin em 2026-08-28: [A — Fio de chegada](b02-direcao-a-fio-de-chegada.png).
- Escopo único: seção `#como-funciona` em `src/app/projetos/brisa-de-tecido/page.tsx` e estilos locais correspondentes em `project.module.css`.
- Preservar integralmente B-01R1 A.2 (barra, cabeçalho e hero) e B-01R2 A — Ateliê de tramas, além de todas as dobras posteriores, rota e contato centralizado.

## Conteúdo invariável

1. **01 — Mostre o estofado:** Envie fotos, medidas aproximadas e bairro pelo WhatsApp.
2. **02 — Alinhe os detalhes:** A peça é avaliada e as condições do atendimento são combinadas.
3. **03 — Receba o serviço:** A higienização acontece no local conforme o que foi alinhado.

O convite final é uma saída subordinada, após o passo 03: “Enviar pelo WhatsApp”. Não incluir preços, prazos, garantias, produtos, certificações, métricas, resultados, clientes nem promessas técnicas.

## Assets reais

| Uso | Asset | Tratamento |
| --- | --- | --- |
| Passo 01 | `public/images/projects/brisa-service-textile-selector.png` | Foto vertical de sofá; crop próximo, sem tratamento de catálogo. |
| Passo 02 | sem imagem adicional | Ficha eucalipto com os apoios “Peça” e “Condições do atendimento”; não apresentar como nova seleção. |
| Passo 03 | `public/images/projects/brisa-service-pouf.png` | Foto vertical de puff, escurecida pelo campo verde profundo. |

Nenhum novo asset é necessário nesta direção. A linha de costura é desenho CSS simples e funcional; não simula um ícone ou ilustração externa.

## Alvos isolados

### Desktop — 1440 × 900

- Fundo contínuo de papel/linho `#f2f0e8`; o cabeçalho editorial abre com ícone de percurso, “Como funciona” e uma linha funcional, no padrão das dobras aprovadas.
- Um fio eucalipto tracejado atravessa horizontalmente o conjunto e conecta três estações com marcadores 01–03. Ele organiza a sequência, não vira ornamento solto.
- 01 começa com foto têxtil alta e bloco de texto em papel; 02 usa uma ficha eucalipto central, legível, que separa “Peça” de “Condições do atendimento”; 03 fecha em painel `#17221f`, com o recorte de puff ao lado da copy.
- A saída de WhatsApp fica no limite inferior de 03, em texto pequeno com sublinhado ácido, sem virar outro CTA principal.

### Mobile — 390 × 844

- Cabeçalho e título permanecem em fluxo. O fio passa a ser eixo vertical à esquerda dos três marcos.
- 01, 02 e 03 formam uma sequência empilhada; a foto de 01, ficha de 02 e encerramento escuro de 03 conservam suas matérias e contrastes próprios.
- Todo o conteúdo é legível sem interação obrigatória. O link contextual aparece somente após 03 e possui alvo de toque mínimo de 44 px.

## Motion e acessibilidade

- **Entrada:** título, fio e três estações revelam em cascata curta ao entrar no viewport, na ordem 01 → 02 → 03.
- **Feedback:** em dispositivos com hover, cada estação sobe discretamente e ganha sombra ao receber o ponteiro; não se torna selecionável nem muda conteúdo. Hover e foco no link final avançam a seta e reforçam o sublinhado.
- **Scroll:** um reveal único, sem sticky, scroll programático, seleção, carrossel ou repetição do seletor de B-01R2.
- **Movimento reduzido:** nenhum desenho de linha, deslocamento ou fade; os três passos e a saída final já aparecem no estado final.

## Gate

Validar o alvo em 390, 768, 1024 e 1440 px: textos completos, ordem 01–03, contraste, sem overflow, um único `h1`, foco visível, alvo do link >= 44 px no mobile, conteúdo íntegro com movimento reduzido e hero/serviço sem alterações.
