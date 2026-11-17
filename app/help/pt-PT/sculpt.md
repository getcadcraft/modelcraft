---
title: Esculpir uma malha
summary: Dê forma a uma malha como argila com pincéis — desenhar, argila, suavizar, agarrar, inflar, vincar, beliscar, achatar —, proteja partes com uma máscara, espelhe em X e adicione detalhe onde esculpe.
keywords: esculpir, escultura, pincel, pincéis, argila, desenhar, suavizar, agarrar, inflar, vinco, beliscar, achatar, máscara, simetria, espelhar, detalhe, topologia dinâmica, caneta, pressão, tablet, stylus
from: 5477801a
---

A área de trabalho Esculpir dá forma a uma malha com pincéis, como se fosse argila: arraste sobre a superfície e ela sobe, desce, suaviza ou segue o cursor sob um pincel redondo, com mais força no centro e a desvanecer até nada na borda.

## Início

Selecione uma malha e escolha {{ui:Esculpir}} na lista de áreas de trabalho. Um grupo ou componente passa primeiro a malha, como na área de trabalho Malha. Os pincéis trabalham sobre os vértices da malha, por isso uma malha com mais vértices permite formas mais finas: subdivida-a primeiro ({{ui:Subdividir}} na área de trabalho Malha, ou um modificador de Superfície de subdivisão que aplique), ou ative {{ui:Detalhe}}.

## Pincéis

| Pincel | Tecla | O que faz |
| --- | --- | --- |
| {{ui:Desenhar}} | {{key:D}} | Eleva a superfície sob o pincel |
| {{ui:Argila}} | {{key:C}} | Acumula camadas planas, enchendo primeiro as depressões |
| {{ui:Suavizar}} | {{key:S}} | Nivela as irregularidades; mantenha {{key:Shift}} premido para suavizar com qualquer pincel |
| {{ui:Agarrar}} | {{key:G}} | Puxa a superfície com o cursor |
| {{ui:Inflar}} | {{key:I}} | Incha a superfície ao longo da sua própria direção |
| {{ui:Vinco}} | {{key:Shift+C}} | Corta um sulco vincado |
| {{ui:Beliscar}} | {{key:P}} | Puxa a superfície para o meio do pincel |
| {{ui:Achatar}} | {{key:T}} | Comprime a superfície para o seu plano médio |
| {{ui:Máscara}} | {{key:M}} | Pinta uma máscara que protege a superfície dos outros pincéis |

Mantenha {{key:Ctrl}} premido enquanto risca para trabalhar ao contrário (baixar em vez de elevar, uma crista em vez de um sulco, remover a máscara), ou ative {{ui:Retirar}}.

## Tamanho e força

O tamanho do pincel é medido em pixels no ecrã, por isso a sensação é a mesma qualquer que seja o zoom: {{key:[}} e {{key:]}} tornam-no mais pequeno e maior, e {{key:Shift+[}} e {{key:Shift+]}} alteram a sua força. O painel mostra os dois valores.

Com uma caneta num tablet, pressionar com mais força torna o pincel maior e mais forte; o painel desliga qualquer uma destas opções.

## Espelho, máscara e detalhe

- {{ui:Espelhar X}} ({{key:X}}) esculpe os dois lados em simultâneo, segundo o vermelho, para rostos e figuras.
- A máscara aparece mais escura enquanto esculpe. {{ui:Limpar máscara}} ({{key:Alt+M}}) retira-a, {{ui:Inverter máscara}} ({{key:Ctrl+I}}) mascara o que estava livre e liberta o que estava mascarado. A máscara fica guardada com a malha.
- {{ui:Detalhe}} acrescenta triângulos onde esculpe: as arestas mais longas do que o tamanho definido no painel (pixels no ecrã) são divididas sob o pincel. Precisa de uma malha de triângulos, e pede que crie uma primeiro.

Cada traço é um passo de anulação.

:::note
O detalhe apenas acrescenta triângulos; não retira os que ficaram minúsculos. Um Remesh (na área de trabalho Malha) volta a uniformizar a malha inteira.
:::

Ver também [Editar uma malha](topic:mesh-edit), [Malhas](topic:meshes) e [Modificadores numa malha](topic:modifiers).
