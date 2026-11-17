---
title: Suportes, espessura de parede, esvaziamento e reparo
summary: Veja onde uma impressão precisa de suportes e quanto deles, encontre paredes finas demais para imprimir, esvazie uma peça até uma espessura de parede com furos de drenagem e repare uma malha com cada correção listada.
keywords: impressão 3D, suportes, visualização de suportes, balanço, suportes em árvore, suportes em coluna, espessura de parede, paredes finas, fina demais, bico, esvaziar, esvaziamento, casca, furo de drenagem, resina, reparar, corrigir malha, não variedade, faces invertidas, furos, pequenas cascas, autointerseção, sobreposição, unir
from: 286bde26
---

Quatro ferramentas para preparar um modelo para uma impressora 3D. Abra {{ui:Export}} › {{ui:Check for 3D printing (STL or 3MF)…}}; na linha **Ferramentas de impressão** da caixa de diálogo há {{ui:Supports preview}}, {{ui:Wall thickness}}, {{ui:Hollow}} e {{ui:Repair}}. Cada uma abre como um cartão sobre a vista; {{ui:Close}} (o X) fecha o cartão e as suas marcas. Só um cartão aparece por vez.

Cada ferramenta trabalha sobre o que será impresso: a seleção ou tudo o que está visível quando nada está selecionado. {{ui:Esvaziar}} e {{ui:Reparar}} precisam de um grupo, componente ou malha selecionado, porque eles o alteram.

## Visualização de suportes

As faces que se inclinam para fora mais que o **ângulo de balanço**, em relação à vertical, ficam sombreadas em vermelho, e suportes simples são desenhados a partir delas (em laranja) até a mesa, ou até a parte do modelo abaixo delas.

- **Ângulo de balanço**: 45° é o que a maioria das impressoras consegue sem suporte. Aumente-o para uma impressora que faz boas pontes.
- **Colunas**: uma coluna reta a cada 3 mm sob cada balanço. A estimativa as conta como um padrão de suporte de 15%.
- **Árvore**: pontos próximos se unem em um tronco sob o seu meio; nenhum ramo se inclina mais de 45°. Árvores geralmente usam menos material e tocam a mesa em menos pontos.

O cartão informa quanta superfície precisa de suporte, quantos pontos de suporte existem e aproximadamente quanto material eles usam. Suportes apoiados no modelo (e não na mesa) são contados, pois deixam marcas ali. Com uma mesa de impressora escolhida em {{ui:Configurações}}, a mesa é desenhada sob o modelo.

:::note
Isto é uma visualização, não um fatiador: o seu fatiador decide os suportes reais. Em um balanço muito grande, os pontos de suporte são espalhados para que a visualização continue rápida; o cartão informa isso.
:::

## Espessura de parede

Cada face é medida em linha reta através do sólido até o outro lado. Paredes abaixo da **espessura mínima permitida** ficam em vermelho, e as abaixo de uma vez e meia esse valor ficam em laranja: elas imprimem, mas podem sair fracas.

As áreas finas são listadas, primeiro as mais finas, com a espessura e o tamanho de cada uma. {{ui:Mostrar}} gira a câmera para ela.

Uma impressora não consegue fazer uma parede mais fina que cerca de duas larguras do seu bico: 0.8 mm para o bico comum de 0.4 mm (o valor inicial). Impressoras de resina conseguem menos; confira o guia da sua impressora.

Em um modelo muito grande, apenas algumas faces lançam um raio, e as outras assumem a espessura das vizinhas; o cartão informa quantas foram medidas.

## Esvaziar

O esvaziamento mantém o exterior como está e remove o interior, deixando paredes com a espessura que você pedir. Impressões em resina gastam menos resina e exercem menos força sobre a plataforma de impressão; impressões em filamento gastam menos plástico do que o preenchimento gastaria.

1. Selecione o grupo, componente ou malha e depois abra {{ui:Esvaziar}}.
2. Defina a **parede** (2 mm para começar) e a largura dos **furos de drenagem**.
3. Para uma impressão em resina, clique em {{ui:Posicionar furo de drenagem}} e depois clique no exterior do modelo onde ele deve ficar: embaixo, perto da mesa de impressão, para que a resina líquida escorra. Posicione quantos forem necessários; cada um aparece como um círculo azul e é listado com {{ui:Remove}}.
4. {{ui:Preview}} informa quanto o esvaziamento remove.
5. {{ui:Hollow it}} faz a alteração: uma etapa que {{key:Mod+Z}} desfaz.

O resultado é um sólido fechado que a verificação de impressão 3D aceita: o ModelCraft verifica antes e não altera nada se ele não passar. Onde o modelo é mais fino que duas paredes, ele continua sólido. O resultado é um grupo cujas faces planas são faces únicas, então você pode continuar modelando com {{ui:Empurrar/puxar}}; uma peça curva esvaziada na grade fina geralmente tem faces demais para isso e vira uma malha, e a linha de status informa qual.

:::tip
Para a maioria das formas, o interior é o exterior deslocado para dentro exatamente pela espessura da parede. Onde cantos ou partes finas tornam isso impossível, o ModelCraft acompanha o exterior, à distância da parede, em uma grade fina; o cartão então informa quão próximo ele fica (com precisão de uma fração de milímetro).
:::

## Reparar

{{ui:Reparar}} examina a peça selecionada do modo como o fatiador de uma impressora a examinaria, corrige com segurança o que pode ser corrigido e lista cada correção:

| Corrige | O que isso significa |
|---|---|
| Triângulos sem área | descartados |
| Um triângulo desenhado duas vezes | uma cópia é mantida; uma face desenhada costas com costas consigo mesma (sem espessura) é removida |
| Peças soltas menores que 0.5 mm | removidas |
| Triângulos voltados para o lado errado | virados para combinar com os vizinhos |
| Furos, planos ou não | fechados com um leque de novos triângulos a partir do centro de cada furo |
| Uma peça do avesso | virada para fora (um oco dentro de outra peça é deixado como está: ele deve ficar voltado para dentro) |

{{ui:Corrigir as seguras}} faz todas elas em uma única etapa, que {{key:Mod+Z}} desfaz, e a linha de status lista cada correção. A peça corrigida vira um grupo cujas faces planas são faces únicas. Se ela ainda não fechar (algo em **Para você resolver** permanece), ou se tiver faces demais para um grupo, vira uma malha: as faces continuam triângulos, e as laterais planas continuam parecendo planas. A linha de status informa qual. {{ui:Unir partes sobrepostas}} funciona da mesma forma.

O que não pode ser corrigido com segurança aparece em **Para você resolver** e é marcado em roxo na vista, com {{ui:Mostrar}}:

- **Arestas onde três ou mais faces se encontram**: decida qual face pertence e apague as outras.
- **Uma peça que atravessa a si mesma**: mova ou redesenhe essa parte. Veja [Intersecção de faces](topic:intersect).
- **Furos grandes demais ou emaranhados demais para fechar**: desenhe faces sobre eles.
- **Peças separadas que se sobrepõem**: os fatiadores as mesclam de qualquer forma. {{ui:Unir partes sobrepostas}} transforma-as em um único corpo fechado (ele refaz as faces onde se encontram, por isso é um botão separado, nunca feito automaticamente).

Para grupos de empurrar/puxar, você também pode corrigir um de cada vez em {{ui:Informações da entidade}} › {{ui:Mostrar problemas}} / {{ui:Corrigir}}, o que mantém as faces que você desenhou. Veja [Ferramentas de sólidos](topic:solids).

Relacionados: [Preparar um modelo para impressão 3D](topic:print-3d) · [O estilo Iniciante](topic:beginner) · [Ainda não implementado](topic:not-built-yet#3d-printing)
