---
title: Esculpir uma malha
summary: Modele uma malha como argila com pincéis — desenhar, argila, suavizar, pegar, inflar, vincar, pinçar, achatar —, proteja partes com uma máscara, espelhe pelo eixo X e adicione detalhes onde você esculpe.
keywords: esculpir, escultura, pincel, pincéis, argila, desenhar, suavizar, pegar, inflar, vincar, pinçar, achatar, máscara, simetria, espelhar, detalhe, topologia dinâmica, caneta, pressão, mesa digitalizadora, stylus
from: 5477801a
---

A área de trabalho Esculpir dá forma a uma malha com pincéis, como com argila: arraste sobre a superfície e ela sobe, afunda, suaviza ou segue o ponteiro sob um pincel redondo, mais forte no centro e desaparecendo na borda.

## Início

Selecione uma malha e escolha {{ui:Sculpt}} na lista de áreas de trabalho. Um grupo ou componente vira malha antes, como na área de trabalho Malha. Os pincéis atuam sobre os vértices da malha, então uma malha com mais vértices recebe formas mais finas: subdivida-a antes ({{ui:Subdivide}} na área de trabalho Malha, ou um modificador Superfície de subdivisão que você aplique com {{ui:Apply}}), ou ative {{ui:Detail}}.

## Pincéis

| Pincel | Tecla | O que faz |
| --- | --- | --- |
| {{ui:Draw}} | {{key:D}} | Eleva a superfície sob o pincel |
| {{ui:Clay}} | {{key:C}} | Acumula camadas planas, preenchendo primeiro as depressões |
| {{ui:Smooth}} | {{key:S}} | Suaviza as saliências; segure {{key:Shift}} para suavizar com qualquer pincel |
| {{ui:Grab}} | {{key:G}} | Puxa a superfície junto com o ponteiro |
| {{ui:Inflate}} | {{key:I}} | Incha a superfície para fora, na sua própria direção |
| {{ui:Crease}} | {{key:Shift+C}} | Corta um sulco afiado |
| {{ui:Pinch}} | {{key:P}} | Puxa a superfície em direção ao meio do pincel |
| {{ui:Flatten}} | {{key:T}} | Pressiona a superfície em direção ao seu plano médio |
| {{ui:Mask}} | {{key:M}} | Pinta uma máscara que protege a superfície dos outros pincéis |

Segure {{key:Ctrl}} enquanto pinta para trabalhar ao contrário (rebaixar em vez de elevar, uma crista em vez de um sulco, remover a máscara), ou ative {{ui:Take away}}.

## Tamanho e força

O tamanho do pincel é em pixels na tela, então ele se comporta igual, não importa o zoom: {{key:[}} e {{key:]}} o tornam menor e maior, e {{key:Shift+[}} e {{key:Shift+]}} alteram a sua força. O painel mostra os dois.

Com uma caneta em uma mesa digitalizadora, pressionar mais forte torna o pincel maior e mais forte; o painel desativa um ou outro.

## Espelho, máscara e detalhe

- {{ui:Mirror X}} ({{key:X}}) esculpe os dois lados ao longo do vermelho ao mesmo tempo, para rostos e figuras.
- A máscara aparece mais escura enquanto você esculpe. {{ui:Clear mask}} ({{key:Alt+M}}) a remove; {{ui:Invert mask}} ({{key:Ctrl+I}}) mascara o que estava livre e libera o que estava mascarado. A máscara é guardada com a malha.
- {{ui:Detail}} adiciona triângulos onde você esculpe: arestas mais longas que o tamanho definido no painel (em pixels na tela) são divididas sob o pincel. Precisa de uma malha de triângulos e pede para criar uma antes.

Cada traço é uma etapa de desfazer.

:::note
Detail só adiciona triângulos; não remove os que ficaram minúsculos. Refazer a malha (na área de trabalho Malha) uniformiza a malha inteira outra vez.
:::

Veja também [Editar uma malha](topic:mesh-edit), [Malhas](topic:meshes) e [Modificadores em uma malha](topic:modifiers).
