---
title: Il·lumina un model amb làmpades
summary: Col·loqueu làmpades, focus i panells de llum en un model perquè les imatges renderitzades puguin mostrar estances de nit o interiors il·luminats, amb ombres suaus.
keywords: llum, llums, làmpada, làmpades, il·luminació, bombeta, llum de sostre, focus, downlight, panell de llum, llum d'àrea, lúmens, brillantor, temperatura de color, càlid, nit, interior, renderitzat
from: c8d72cbc
---

Les làmpades il·luminen les [imatges renderitzades](topic:render). No canvien la vista 3D, on cada làmpada es mostra com una petita marca del seu propi color.

## Afegeix una làmpada

1. A la secció {{ui:Lights}} de la dreta, feu clic a {{ui:Lamp}}, {{ui:Spotlight}} o {{ui:Light panel}}.
2. Feu clic on ha d'anar. L'ajust a objectes funciona com en dibuixar.
   - En un sostre o una paret, una **làmpada** penja 25 cm de la cara, pel costat des d'on mireu; un **panell de llum** s'estén sobre la cara i il·lumina cap enfora.
   - Un **focus** requereix dos clics: primer on és, i després cap a què apunta.

La làmpada nova queda seleccionada a {{ui:Lights}}, a punt per canviar-la.

## Canvia una làmpada

Feu clic al nom d'una làmpada a {{ui:Lights}}, o a la seva marca a la vista amb {{ui:Select}}. Després:

| Opció | Què fa |
|---|---|
| {{ui:Brightness (lumens)}} | Quanta llum dona. Una bombeta domèstica són uns 800 lúmens; un panell de sostre potent, 3000 |
| {{ui:Color}} | {{ui:Warm}} (una bombeta de casa), {{ui:Neutral}} o {{ui:Daylight}}, o qualsevol color |
| {{ui:Beam (degrees)}} | El con d'un focus, d'una vora a l'altra |
| {{ui:Bulb size}}, {{ui:Width}}, {{ui:Depth}} | Les bombetes i els panells més grans donen ombres més suaus |
| {{ui:Red (x)}}, {{ui:Green (y)}}, {{ui:Height}} | On és |

La casella al costat del nom d'una làmpada l'encén o l'apaga. {{ui:Delete the light}} la suprimeix. Cada canvi és un sol pas: {{key:Ctrl+Z}} el desfà. Les làmpades es desen al fitxer `.modelcraft`.

## Imatges de nit

A {{ui:Render a picture…}}, marqueu {{ui:Use another date and time for this picture}} i trieu una hora de vespre. Amb el sol ja post, el cel es fa fosc i només les làmpades il·luminen el model. Augmenteu {{ui:Brightness}} al diàleg si la imatge és massa fosca, o afegiu làmpades.

:::tip
Per a una estança vista des de dins, poseu la càmera dins de l'estança (orbiteu i feu zoom, o useu una [escena](topic:scenes)), afegiu una làmpada al sostre i renderitzeu de nit. Al mode {{ui:Fast}}, els racons lluny d'una làmpada resten més foscos que en una fotografia; el [mode d'alta qualitat](topic:render#high-quality) permet que la llum reboti a les parets.
:::
