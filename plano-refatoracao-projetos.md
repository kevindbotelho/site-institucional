# Plano de execução — refatoração dos projetos navegáveis

> Fonte operacional para retomar o trabalho em novas tasks sem depender do histórico da conversa. O prompt pronto para copiar fica sempre em `PROMPT-PROXIMA-TASK.md`.

## Objetivo

Elevar os dois projetos atuais do portfólio — **Lume & Pata** e **Brisa de Tecido** — usando referências visuais explícitas, alvos visuais concretos e aprovação progressiva. A estrutura técnica válida é preservada, mas composição, componentes e movimento podem ser reconstruídos quando a revisão demonstrar que a direção não atingiu o nível esperado.

Os projetos continuam exercendo papéis diferentes:

- **Lume & Pata:** site institucional simples, acolhedor e com maior profundidade editorial.
- **Brisa de Tecido:** landing page de serviço local, orientada a entendimento da oferta e conversão para WhatsApp.

## Estado de partida

- As duas rotas já existem, são navegáveis e estão publicadas.
- Conteúdo, semântica, CTAs, links de WhatsApp, responsividade e parte dos assets podem ser preservados.
- Os temas publicados repetem parte da mesma fórmula de cabeçalho, hero dividido, cards, CTA e rodapé.
- O primeiro L-02 do Lume foi implementado localmente, passou pela validação técnica e foi reprovado no gate visual por ser genérico, superficial e próximo demais da Home da Zucco.
- `/projetos` permanece com a composição atual enquanto as duas experiências são refinadas.

## Direções aprovadas

### Lume & Pata

- Referência principal de composição e interação: `ds_temporarios/savory-plate.aura.build/` e a cópia-fonte em `C:\Projetos\design systems\savory-plate.aura.build\`.
- Referência secundária de profundidade editorial: `C:\Projetos\design systems\open-design.ai\`.
- Usar do Savory Plate a composição multicamada, o encontro entre texto e fotografia, glass cards funcionais, variedade de proporções, marquee e interações táteis quando servirem à narrativa.
- Usar do OpenDesign a ideia de cada dobra como uma prancha/história própria, além de anotações, linhas, numeração, sticky narrative e assimetria controlada.
- A Home da Zucco e o Lumen são apenas régua de qualidade; não copiar cabeçalho, tipografia, CTA, silhueta de hero ou coreografia de entrada.
- Playfair Display e Plus Jakarta Sans deixaram de ser decisões aprovadas. A nova direção deve explorar uma identidade tipográfica própria, preferencialmente sans-forward, antes de codificar.
- Preservar o coral, creme, tinta e verde suave já associados ao Lume, ajustando contraste quando necessário.
- Preservar o tom próximo, acolhedor e de negócio de bairro. Evitar que a marca pareça uma boutique cara.
- Não reutilizar textos, marca, imagens, depoimentos, estrelas, métricas, integrações ou código externo do material de referência.

### Brisa de Tecido

- Referência estrutural principal: `ds_temporarios/open-design.ai/`.
- Usar do OpenDesign principalmente: grid editorial, hierarquia, mistura controlada de fontes, linhas, cards, etapas numeradas, accordion e scroll reveal leve.
- **Não adotar a paleta pastel/artística da referência.** A identidade da Brisa permanece prática, tátil e mais robusta.
- Paleta de partida preservada do projeto atual:
  - verde profundo: `#17221f`;
  - verde profundo secundário: `#21302c`;
  - eucalipto: `#567b6d`;
  - verde ácido: `#c8f06b`;
  - papel/linho: `#f2f0e8`.
- O verde ácido deve ser acento, não fundo dominante. O papel claro mantém o tema luminoso; os verdes escuros dão peso, praticidade e contraste.
- Echelon pode inspirar composição e movimento pontual, mas não sua paleta dourada ou linguagem de luxo.
- Agent Human Academy fica fora desta rodada.

## Método de trabalho

O fluxo passa a ser **visual-target-first e dobra a dobra**:

1. Auditar a dobra atual e os padrões relevantes das referências.
2. Definir história, função comercial, composição e comportamento antes do código.
3. Produzir exatamente três opções visuais concretas e recomendar uma.
4. Aguardar Kevin escolher ou rejeitar as opções; ele não precisa projetar a solução.
5. Implementar somente a direção escolhida e somente a dobra em escopo.
6. Validar desktop, mobile, interação, teclado e movimento reduzido.
7. Avançar apenas depois da aprovação visual daquela dobra.
8. Fazer acabamento global, QA e publicação somente após todas as dobras estarem coerentes.

O processo detalhado, a auditoria e os critérios criativos do Lume vivem em `src/app/projetos/lume-e-pata/DIRECAO-CRIATIVA-L02R.md`.

### Regras operacionais

- Trabalhar primeiro no Lume & Pata; iniciar a Brisa somente após o Lume estar aprovado.
- Uma única pessoa ou agente edita a rota ativa. Subagentes podem apoiar pesquisa, inventário de assets e QA, sem editar simultaneamente os mesmos arquivos.
- Cada task executa somente um checkpoint identificado neste documento. Checkpoints de dobra podem ocupar vários turnos: exploração, escolha de Kevin, implementação e revisão.
- Ao concluir um checkpoint, atualizar este arquivo, `tasks.md` e, quando o estado público ou material mudar, `status-projeto.md`.
- Toda task concluída deve substituir `PROMPT-PROXIMA-TASK.md` pelo prompt exato do próximo checkpoint e também reproduzi-lo na resposta final.
- Todo novo prompt deve manter a lista-base de documentos permanentes e acrescentar os arquivos específicos produzidos ou necessários para o checkpoint seguinte.
- Referências em `ds_temporarios/` são especificações visuais, não dependências de produção.
- Novos assets devem ser escolhidos ou gerados somente depois de a composição que os receberá estar aprovada.
- Nenhuma publicação de produção acontece no meio de uma passada estrutural.

## Checkpoints

### E-00 — estratégia e referências

Estado: **concluído**.

Resultado:

- Savory Plate selecionado para Lume & Pata.
- OpenDesign selecionado como referência estrutural para Brisa de Tecido.
- Paleta atual da Brisa preservada como identidade cromática.
- Método híbrido e sequência dos projetos definidos.

### L-01 — contrato visual e mapa completo do Lume

Estado: **concluído e aprovado por Kevin em 2026-08-11**.

Escopo:

- Extrair e adaptar tokens de cor, tipografia, escala, espaçamento, raios, sombras, botões e movimento.
- Definir o cabeçalho próprio do Lume e preservar a moldura superior da Zucco.
- Mapear todas as dobras e a função comercial de cada uma.
- Definir a composição do hero bento.
- Identificar assets existentes que permanecem e slots que exigirão novas imagens.
- Registrar decisões antes de alterar a página.

Saída esperada:

- contrato visual documentado;
- mapa da página inteira;
- proposta visual detalhada para a primeira dobra;
- inventário de assets;
- nenhuma refatoração ampla ainda.

Resultado do checkpoint:

- contrato visual, tokens, componentes, fotografia e movimento consolidados;
- página inteira mapeada com função comercial por dobra;
- hero bento especificado para desktop, tablet e mobile;
- asset atual inventariado e dois novos slots fotográficos mínimos identificados;
- rota e código de produção preservados sem refatoração estrutural.

Gate: Kevin aprova a fundação e o mapa, ou solicita ajustes objetivos.

Gate concluído: Kevin registrou a aprovação explícita na conversa do checkpoint L-02 em 2026-08-11.

### L-02 — passada estrutural completa do Lume

Estado: **implementado tecnicamente e reprovado no gate visual por Kevin em 2026-08-11; substituído pelo ciclo L-02R**.

Escopo:

- Implementar a fundação aprovada.
- Refatorar cabeçalho, hero, serviços, “Nosso jeito”, dobra adicional de profundidade, CTA e footer.
- Preservar conteúdo válido, CTAs e comportamento.
- Criar ou inserir apenas os assets já aprovados no L-01.
- Entregar a página inteira navegável em desktop e mobile.

Resultado do checkpoint:

- tokens locais e a estrutura completa aprovada foram implementados somente em `/projetos/lume-e-pata`;
- a foto anterior permanece exclusivamente em `LUME-H01`; `LUME-W01` e `LUME-D01` foram criados e inseridos nos únicos slots novos aprovados;
- moldura da Zucco, cabeçalho local, hero bento, Cuidados essenciais, Nosso jeito, Essenciais do dia a dia, CTA final e footer foram entregues responsivos;
- rota, metadados, único `h1`, conteúdo válido e mensagem do WhatsApp foram preservados;
- foi necessário trocar `next/font` por importação CSS limitada ao módulo da rota, com fallbacks locais, porque o build offline não podia baixar as fontes; nenhuma fundação visual aprovada foi alterada;
- desktop e mobile foram revisados visualmente; navegação, âncoras, WhatsApp, foco, alvos de toque, contraste, movimento reduzido, imagens, overflow e console foram conferidos;
- ESLint restrito aos arquivos envolvidos e build de produção concluíram sem erros; o lint global continua contaminado por bundles de referência preexistentes em `ds_temporarios/`;
- nenhuma publicação foi realizada.

Lista histórica de acabamento, invalidada pela reprovação estrutural:

1. **P1 — primeira dobra e ritmo responsivo:** revisar com Kevin os enquadramentos em 390, 768, 1024 e desktop; ajustar apenas proporções, quebras e respiros apontados na revisão, com atenção ao peso da foto no mobile e à entrada do painel de sinais no desktop.
2. **P1 — CTA final:** conferir as quebras do título e a relação entre texto e botão nos mesmos breakpoints, reduzindo linhas ou espaço somente se a revisão apontar desequilíbrio.
3. **P2 — transições entre dobras:** calibrar em lote os espaços entre Cuidados essenciais, Nosso jeito, Essenciais do dia a dia e CTA final conforme a leitura dobra a dobra, preservando a escala aprovada.
4. **P2 — crops intermediários e movimento:** confirmar pontos focais de `LUME-H01`, `LUME-W01` e `LUME-D01` em tablet e desktop estreito e ajustar apenas `object-position`; revisar a sutileza dos reveals e hovers sem acrescentar animações.
5. **P3 — acabamento técnico após a aparência ser aprovada:** otimizar o peso de `LUME-W01` e `LUME-D01`, avaliar fontes auto-hospedadas para eliminar a dependência remota e remover regras CSS antigas que ficaram sem uso, sem mudança visual deliberada.

Gate: **reprovado**. O resultado não alcançou identidade própria, profundidade, variedade de composição ou movimento suficientes. Não executar essa lista como L-03.

### L-02R1 — fundação, cabeçalho e hero do Lume

Estado: **concluído e aprovado por Kevin em 2026-08-13**. Kevin inicialmente escolheu a opção C — **Percurso de cuidado** — e, antes do gate final, substituiu essa escolha pela opção A — **Portal de acolhimento**, por ser mais limpa e tornar o WhatsApp mais evidente. A implementação recebeu o refinamento de fidelidade solicitado, a QA comparativa final passou sem diferenças P0–P2 e o gate visual foi encerrado explicitamente.

Escopo:

- Auditar a primeira dobra atual contra Savory Plate, OpenDesign e a Home usada apenas como régua de qualidade.
- Criar exatamente três opções visuais concretas para a fundação, o cabeçalho local e o hero.
- Parar e aguardar Kevin escolher uma opção ou rejeitar o conjunto.
- Depois da escolha, implementar somente a direção aprovada para a fundação, o cabeçalho e o hero.
- Preservar temporariamente as demais dobras, mesmo que ainda estejam visualmente reprovadas.

Gate: Kevin aprova a direção escolhida e a implementação da primeira dobra.

### L-02R2 — Cuidados essenciais

Estado: **concluído e aprovado explicitamente por Kevin em 2026-08-13**.

Escopo: a grade genérica foi substituída por um mosaico de leitura contínua. A faixa “Rotina leve, pet feliz sempre.” encerra a própria dobra depois dos cards, em uma transição de três camadas; os três cuidados ficam visíveis no fluxo de rolagem, sem carrossel, setas, indicadores ou seleção obrigatória. Depois da reprovação da primeira passada de fidelidade, cards, fios e ilustrações foram refeitos a partir das medidas e dos elementos exatos da direção aprovada. A correção foi comparada com as referências em 390, 768, 1024 e 1133 px, sem diferenças P0–P2.

Gate: **aprovado**. A última correção removeu o asset pontilhado residual atrás da pata no encerramento, sem alterar a composição aprovada.

### L-02R3 — Nosso jeito

Estado: **concluído por aprovação explícita de Kevin para avanço em 2026-08-18**.

Escopo: opção B — Palco em três tempos — implementada como narrativa sticky. Fotografia, título e contexto permanecem fixos; scroll, teclado ou toque alternam o passo em destaque e o contador `01/03` → `02/03` → `03/03`. Em movimento reduzido, os três passos aparecem no fluxo estático.

Gate: **aprovado por Kevin para avanço**. A comparação browser-rendered automatizada permaneceu bloqueada e continua documentada como dívida de QA; por decisão explícita de Kevin, a dobra atual fica preservada e `L-02R4` foi aberto.

### L-02R4 — Essenciais do dia a dia

Estado: **concluído por aprovação explícita de Kevin em 2026-08-20**.

Escopo implementado: cabeçalho editorial, fio pontilhado e CTA de WhatsApp preservados; o antigo palco por hover foi substituído por um trilho espacial com quatro cards fotográficos. Setas, teclado e gesto lateral movem o card na direção física correspondente, a escolha persiste até nova ação e os vizinhos permanecem parcialmente visíveis. A faixa branca usa uma ação contextual distinta da categoria; abaixo, a categoria ativa em Title Case recebe sálvia, escala e sublinhado coral sincronizados. No mobile, contador, nome ativo e quatro marcadores acompanham o card. Movimento reduzido remove deslocamentos e transições.

Gate: QA técnica e comparação visual concluídas em 390, 768, 1024 e 1440 px. Dois desvios P2 do primeiro passe mobile foram corrigidos e a comparação final não mantém diferenças P0–P2. Kevin aprovou explicitamente o resultado e abriu L-02R5; a dobra permanece congelada.

### L-02R5 — CTA, footer e costura global

Estado: **concluído e aprovado explicitamente por Kevin em 2026-08-20**.

Escopo final: palco integralmente sálvia e sem fundo interno próprio, portal fotográfico assimétrico, CTA coral de WhatsApp e footer editorial com saídas para a Home da Zucco e `/projetos`. A divisão creme e o fio encerrado em pata foram removidos na simplificação aprovada. A abertura do portal usa CSS e o observador local existente; movimento reduzido entrega o estado final já aberto.

Gate: comparação visual e QA browser-rendered concluídas em 390, 768, 1024 e desktop. Kevin aprovou o resultado final e considerou a experiência completa do Lume & Pata encerrada.

### L-03 — acabamento dirigido do Lume

Estado: **concluído por absorção nas revisões dobra a dobra e na correção final de L-02R5**.

Escopo:

- Corrigir em lote as observações da revisão.
- Ajustar ritmo, tipografia, crops, movimento, contraste e estados interativos.
- Não reabrir decisões aprovadas sem evidência de problema.

Gate: experiência completa aprovada por Kevin em 2026-08-20.

### L-04 — QA e publicação do Lume

Estado: **concluído no escopo local; publicação adiada para P-01**.

Escopo:

- Validar desktop e mobile, navegação, WhatsApp, acessibilidade, movimento reduzido, console, lint e build.
- Não publicar neste checkpoint; preservar a produção atual.
- Publicar as experiências refatoradas somente no alinhamento final P-01.

### B-01R1 — revalidação da fundação, cabeçalho e hero da Brisa

Estado: **concluído e aprovado explicitamente por Kevin em 2026-08-27**.

Escopo:

- Revalidar OpenDesign como referência estrutural contra a Brisa atual, sem alterar os arquivos legados.
- Preservar a identidade verde/linho como ponto de partida, mas reabrir composição, tipografia, grid, posição dos elementos, efeitos e motion da fundação, do cabeçalho e da hero.
- Produzir exatamente três alvos visuais A/B/C concretos e estruturalmente distintos, com desktop, mobile e assinatura de motion.
- Recomendar uma direção e parar antes do código para Kevin escolher.
- Garantir linguagem visual prática, tátil e robusta, não artística, arquitetônica, luxuosa ou derivada do Lume/Zucco.

Gate: Kevin escolhe uma direção para fundação, cabeçalho e hero.

### B-01R2 — O serviço da Brisa

Estado: **direção A — Ateliê de tramas — implementada localmente e aprovada explicitamente por Kevin em 2026-08-28**.

Escopo:

- Trabalhar somente a dobra atual “O serviço”, sempre com três alvos A/B/C antes do código.
- A primeira rodada é registro rejeitado: as pranchas esquemáticas, com tipografia aproximada e sem direção de arte final não podem ser implementadas. A nova rodada precisa apresentar qualidade visual final julgável, sem depender de “polimento” posterior.
- Comunicar que a higienização varia conforme tipo de peça, tecido, dimensões e condição atual.
- A direção escolhida usa seleção por peça: sofás, poltronas, cadeiras e puffs; a peça ativa se expande e revela o texto, enquanto as demais recuam em contraste.
- Priorizar clareza da oferta, conversão para WhatsApp, variedade estrutural e uma assinatura de motion orientada ao clique, não a uma nova hero com scrollytelling.

Gate: concluído.

### B-02 — Como funciona

Estado: **concluído e aprovado explicitamente por Kevin em 2026-08-28. B-02R1 A — Rastro do cuidado — preserva a estrutura limpa de A e assets próprios orientados pela direção B, sem fita métrica/números em imagem. O título concluiu como continuidade tipográfica, sem conector gráfico.**

Escopo:

- Trabalhar somente a dobra `#como-funciona`, preservando B-01R1 e B-01R2 integralmente.
- Comunicar a sequência real: mostrar o estofado; alinhar os detalhes; receber o serviço no local.
- Não inventar preço, prazo, garantia, produto químico, certificação, resultado, métrica, cliente ou promessa técnica.
- Criar exatamente três direções visuais finalizadas, desktop e mobile, antes de escrever código.
- Priorizar continuidade com a matéria e o ritmo editorial de B-01R2 sem repetir a interação de faixas nem abrir uma nova hero.

Gate: concluído.

### B-03 — Fechamento final da Brisa — antes/depois

Estado: **concluído e aprovado explicitamente por Kevin em 2026-08-28.**

Escopo:

- Trabalhar somente a última dobra existente depois de `#duvidas`, sem alterar B-01R1, B-01R2 ou B-02R1.
- A antiga proposta `#duvidas` — “Antes de chamar” — foi interrompida antes de implementação, pois repetia “Fotos → Medidas → Bairro”, já explicado em B-01R2 e B-02R1.
- Encerrar a experiência com uma prova visual honesta de antes/depois e uma única saída para WhatsApp, a partir de `public/images/projects/brisa-before-sofa.png` e `brisa-after-sofa.jpg`.
- Explorar exatamente três direções visuais A/B/C concretas, com desktop, mobile e assinatura de motion, antes de código.
- Não inventar preço, prazo, garantia, produto, certificação, resultado, métrica, cliente ou promessa técnica. Não transformar a dobra em uma nova hero nem repetir a seleção de peças ou os três cards de B-02. O comparador arrastável antes/depois é uma hipótese a ser julgada nas opções, não uma decisão implementável antecipadamente; a diferença de crop entre os dois assets precisa ser tratada com honestidade.

Resultado: direção A revisada — “A diferença mora no toque” — implementada como um único comparador vertical. O registro limpo foi recriado a partir do sujo de alta resolução para manter a mesma geometria; o CTA final usa o padrão WhatsApp com resposta de motion. Nenhuma publicação foi feita.

### B-04 — QA e publicação da Brisa

Estado: **pendente**.

Escopo:

- Validar desktop e mobile, navegação, WhatsApp, acessibilidade, movimento reduzido, console, lint e build.
- Publicar preview ou produção conforme a instrução do checkpoint.
- Atualizar documentação e URL publicada.

### P-01 — alinhamento final do portfólio

Estado: **em revisão visual local**. A direção A — Faixas de projetos — foi escolhida por Kevin e aplicada somente aos cards de `/projetos`; a primeira faixa já é horizontal e escalável, sem conteúdos fictícios para preencher categorias futuras. Ainda falta o gate visual, a QA conjunta e a publicação.

Escopo:

- Manter a Home inalterada neste checkpoint e aplicar a apresentação escalável aprovada apenas aos dois cards de `/projetos`.
- Validar transições entre Zucco, `/projetos` e as duas experiências.
- Manter `/projetos` otimizada para dois destaques até existir um terceiro trabalho publicável.
- Rodar QA integral e publicar o conjunto final.

## Critérios fixos de aceite

- Os dois projetos devem parecer marcas e experiências diferentes, não o mesmo template com novas cores.
- A barra de contexto da Zucco pode ser compartilhada; cabeçalho, hero, botões, cards, footer e motion de marca devem ser próprios.
- Nenhum projeto pode sugerir cliente, contrato, case, depoimento, métrica, prêmio ou resultado inexistente.
- Não adicionar formulário, backend, pagamento, agendamento, CRM ou automação oficial de WhatsApp.
- Um `h1` por rota, navegação por teclado, foco visível, contraste adequado e `prefers-reduced-motion` são obrigatórios.
- Sem overflow horizontal e sem erro de console nos viewports aprovados.

## Protocolo de retomada em nova task

Kevin não precisa montar nem adaptar o prompt manualmente. O arquivo `PROMPT-PROXIMA-TASK.md` é um ponteiro móvel e contém sempre a próxima instrução pronta para copiar.

Todo prompt futuro deve preservar esta base:

```text
Continue a refatoração dos projetos do portfólio no checkpoint [ID].

Leia primeiro, por completo:
1. AGENTS.md
2. contexto-projeto.md
3. status-projeto.md
4. tasks.md
5. spec.md
6. direcao-visual.md
7. plan.md
8. plano-refatoracao-projetos.md
9. PROMPT-PROXIMA-TASK.md
10. os documentos e o código específicos do checkpoint

Execute somente o checkpoint [ID]. Preserve decisões já aprovadas e não amplie o escopo. Valide em proporção ao risco, atualize a documentação necessária e, no final, substitua PROMPT-PROXIMA-TASK.md pelo próximo prompt completo e cole o mesmo prompt na resposta final.
```

O prompt inicial do checkpoint L-01 já está em `PROMPT-PROXIMA-TASK.md`.
