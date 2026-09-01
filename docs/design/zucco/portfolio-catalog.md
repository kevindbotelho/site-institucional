# Catálogo de projetos da Zucco

Regra aprovada por Kevin em 2026-08-31 para a página `/projetos`. Este documento é a referência para adicionar novos itens sem redesenhar a página ou redefinir os cards a cada vez.

## Hierarquia pública

1. **Projetos em destaque** — seleção editorial manual dos trabalhos que devem aparecer primeiro. Não é um tipo de projeto: um item de qualquer categoria pode ser destacado.
2. **Projetos para negócios** — experiências digitais desenvolvidas para contextos de negócio, com autorização apropriada quando forem trabalhos contratados.
3. **Produtos digitais** — ferramentas, aplicativos e experiências digitais próprias. Evitar o termo técnico “web app” na interface pública.

Uma nova categoria só entra quando houver pelo menos um projeto verdadeiro para ela. Não renderizar trilhos vazios, cards de preenchimento, promessas de projetos futuros ou rótulos que façam os trabalhos autorais parecerem cases contratados.

## Contrato de cada card

Todo novo projeto precisa fornecer:

- uma foto ou imagem de capa relacionada ao projeto;
- o tipo em uma etiqueta curta, como “Site institucional”, “Landing page” ou “Produto digital”;
- nome do projeto;
- resumo curto, em uma frase;
- rota de destino e texto alternativo descritivo.

O card sempre é uma capa integral, com uma única borda externa limpa, título e resumo sobre gradiente de contraste e seta horizontal. Não usar moldura interna, duplas bordas ou uma seta diagonal.

## Interação e escala

- Cada categoria usa uma faixa horizontal navegável por rolagem, touch, teclado e botões quando necessário.
- Em celular, revelar parte do próximo card para explicar o gesto lateral.
- O hover é leve: pequena inclinação, aproximação controlada da imagem e deslocamento horizontal da seta.
- “Projetos em destaque” é a única faixa obrigatória na primeira versão; as demais surgem com conteúdo real.

## Destaque tipográfico reutilizável

O título da página pode alternar somente a última expressão por uma janela tipográfica vertical lenta. O componente compartilhado `src/components/motion/RotatingWord.tsx` mantém cada palavra por 3 s e só inicia a entrada depois que a saída termina; duas palavras nunca ficam visíveis no mesmo quadro. A duração e o deslocamento padrão são os mesmos nas duas experiências: 560 ms e 108%. Em textos com gradiente, o recorte de cor deve ser aplicado diretamente à palavra animada, e não a um contêiner externo; o fade também deve ser removido para o deslocamento continuar legível durante a composição do gradiente. Ele deve ser aplicado apenas quando as alternativas preservarem o sentido da frase e não criarem promessa comercial não comprovada. Em movimento reduzido, fica estático na primeira alternativa.
