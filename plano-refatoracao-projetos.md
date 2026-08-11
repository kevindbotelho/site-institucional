# Plano de execução — refatoração dos projetos navegáveis

> Fonte operacional para retomar o trabalho em novas tasks sem depender do histórico da conversa. Antes de executar qualquer checkpoint, leia `AGENTS.md`, `contexto-projeto.md`, `status-projeto.md`, `tasks.md`, este arquivo e os documentos de design citados no checkpoint.

## Objetivo

Elevar os dois projetos atuais do portfólio — **Lume & Pata** e **Brisa de Tecido** — usando referências visuais explícitas, sem reconstruir do zero e sem transformar o refinamento em uma sequência longa de microtarefas.

Os projetos continuam exercendo papéis diferentes:

- **Lume & Pata:** site institucional simples, acolhedor e com maior profundidade editorial.
- **Brisa de Tecido:** landing page de serviço local, orientada a entendimento da oferta e conversão para WhatsApp.

## Estado de partida

- As duas rotas já existem, são navegáveis e estão publicadas.
- Conteúdo, semântica, CTAs, links de WhatsApp, responsividade e parte dos assets podem ser preservados.
- Os temas atuais possuem boa base, mas repetem a mesma fórmula de cabeçalho, hero dividido, cards, CTA e rodapé.
- A refatoração visual ainda não foi iniciada.
- `/projetos` permanece com a composição atual enquanto as duas experiências são refinadas.

## Direções aprovadas

### Lume & Pata

- Referência principal: `ds_temporarios/savory-plate.aura.build/`.
- Usar a gramática visual do Savory Plate: composição bento, fotografia dominante, Playfair Display, Plus Jakarta Sans, labels monoespaçadas pontuais, superfícies quentes, grandes raios e movimento editorial leve.
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

O fluxo será **híbrido**:

1. Aprovar uma fundação visual pequena antes de editar.
2. Fazer uma passada estrutural completa em um projeto por vez.
3. Revisar o resultado dobra a dobra, mas agrupar as correções em uma única rodada de acabamento.
4. Fazer QA e publicação somente após o conjunto estar coerente.

Isso reduz o risco de construir uma página inteira na direção errada, mas evita transformar cada card, botão ou subseção em uma task separada.

### Regras operacionais

- Trabalhar primeiro no Lume & Pata; iniciar a Brisa somente após o Lume estar aprovado.
- Uma única pessoa ou agente edita a rota ativa. Subagentes podem apoiar pesquisa, inventário de assets e QA, sem editar simultaneamente os mesmos arquivos.
- Cada task executa somente um checkpoint identificado neste documento.
- Ao concluir um checkpoint, atualizar este arquivo, `tasks.md` e, quando o estado público ou material mudar, `status-projeto.md`.
- Toda task concluída deve entregar o prompt exato para iniciar o próximo checkpoint em uma conversa nova.
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

Estado: **próximo**.

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

Gate: Kevin aprova a fundação e o mapa, ou solicita ajustes objetivos.

### L-02 — passada estrutural completa do Lume

Estado: **pendente**.

Escopo:

- Implementar a fundação aprovada.
- Refatorar cabeçalho, hero, serviços, “Nosso jeito”, dobra adicional de profundidade, CTA e footer.
- Preservar conteúdo válido, CTAs e comportamento.
- Criar ou inserir apenas os assets já aprovados no L-01.
- Entregar a página inteira navegável em desktop e mobile.

Gate: revisão visual dobra a dobra, gerando uma lista única e priorizada de acabamento.

### L-03 — acabamento dirigido do Lume

Estado: **pendente**.

Escopo:

- Corrigir em lote as observações da revisão.
- Ajustar ritmo, tipografia, crops, movimento, contraste e estados interativos.
- Não reabrir decisões aprovadas sem evidência de problema.

Gate: aprovação visual da experiência completa.

### L-04 — QA e publicação do Lume

Estado: **pendente**.

Escopo:

- Validar desktop e mobile, navegação, WhatsApp, acessibilidade, movimento reduzido, console, lint e build.
- Publicar preview ou produção conforme a instrução do checkpoint.
- Atualizar documentação e URL publicada.

### B-01 — contrato visual e mapa completo da Brisa

Estado: **pendente**.

Escopo:

- Traduzir a estrutura do OpenDesign para a paleta verde/linho da Brisa.
- Definir tipografia, grid, bordas, cards, botões, motion e uso limitado de serif.
- Mapear hero, situações de uso, escopo do serviço, processo, informações para orçamento, FAQ, CTA e footer.
- Garantir linguagem visual prática e tátil, não artística, arquitetônica ou luxuosa.

Gate: Kevin aprova a fundação e o mapa.

### B-02 — passada estrutural completa da Brisa

Estado: **pendente**.

Escopo:

- Implementar a página inteira com a fundação aprovada.
- Priorizar clareza da oferta e conversão para WhatsApp.
- Entregar desktop e mobile navegáveis.

Gate: revisão visual dobra a dobra e lista única de acabamento.

### B-03 — acabamento dirigido da Brisa

Estado: **pendente**.

Escopo:

- Corrigir em lote as observações da revisão.
- Refinar hierarquia, contraste, textura, movimento, componentes e CTA.

Gate: aprovação visual da experiência completa.

### B-04 — QA e publicação da Brisa

Estado: **pendente**.

Escopo:

- Validar desktop e mobile, navegação, WhatsApp, acessibilidade, movimento reduzido, console, lint e build.
- Publicar preview ou produção conforme a instrução do checkpoint.
- Atualizar documentação e URL publicada.

### P-01 — alinhamento final do portfólio

Estado: **pendente**.

Escopo:

- Atualizar capas ou apresentação dos dois projetos na Home e em `/projetos`, apenas se os novos visuais exigirem.
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

Use este modelo, substituindo apenas o identificador do checkpoint:

```text
Continue a refatoração dos projetos do portfólio no checkpoint [ID].

Leia primeiro, por completo:
1. AGENTS.md
2. contexto-projeto.md
3. status-projeto.md
4. tasks.md
5. plano-refatoracao-projetos.md
6. direcao-visual.md
7. plan.md
8. os arquivos da referência visual indicada no checkpoint

Execute somente o checkpoint [ID]. Preserve decisões já aprovadas e não amplie o escopo. Valide em proporção ao risco, atualize a documentação necessária e, no final, entregue o prompt exato para abrir a próxima task.
```

## Prompt exato para a próxima task

```text
Continue a refatoração dos projetos do portfólio no checkpoint L-01.

Leia primeiro, por completo:
1. AGENTS.md
2. contexto-projeto.md
3. status-projeto.md
4. tasks.md
5. plano-refatoracao-projetos.md
6. direcao-visual.md
7. plan.md
8. ds_temporarios/savory-plate.aura.build/STACK.md
9. ds_temporarios/savory-plate.aura.build/design-system.html
10. o código e os estilos atuais de /projetos/lume-e-pata

Execute somente o checkpoint L-01. Não faça ainda a refatoração ampla da página. Consolide o contrato visual do Lume & Pata, o mapa completo das dobras, a proposta detalhada do hero bento e o inventário de assets. Preserve conteúdo, rota, CTA de WhatsApp e a moldura superior da Zucco. Não copie marca, conteúdo, integrações ou assets do Savory Plate. No final, atualize a documentação necessária e entregue o prompt exato para o checkpoint L-02.
```
