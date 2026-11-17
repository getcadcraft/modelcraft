---
title: Iluminar un modelo con lámpadas
summary: Coloque lámpadas, focos e paneis de luz nun modelo para que as imaxes renderizadas mostren cuartos pola noite ou interiores iluminados, con sombras suaves.
keywords: luz, luces, lámpada, lámpadas, iluminación, bombilla, luz de teito, foco, downlight, panel de luz, luz de área, lúmenes, brillo, temperatura de cor, cálida, noite, interior, render
from: c8d72cbc
---

As lámpadas iluminan as [imaxes renderizadas](topic:render). Non cambian a vista 3D, na que cada lámpada se mostra como unha pequena marca da súa propia cor.

## Engadir unha lámpada

1. Na sección {{ui:Luces}} á dereita, prema {{ui:Lámpada}}, {{ui:Foco}} ou {{ui:Panel de luz}}.
2. Prema onde debe ir. O axuste funciona como ao debuxar.
   - Nun teito ou parede unha **lámpada** pendura 25 cm da cara, do lado desde o que mira; un **panel de luz** queda sobre a cara e ilumina en sentido contrario a ela.
   - Un **foco** necesita dous clics: primeiro onde está e logo a que apunta.

A nova lámpada queda seleccionada en {{ui:Luces}}, lista para cambiala.

## Cambiar unha lámpada

Prema o nome dunha lámpada en {{ui:Luces}}, ou a súa marca na vista con {{ui:Seleccionar}}. Logo:

| Axuste | Que fai |
|---|---|
| {{ui:Brillo (lúmenes)}} | Canta luz dá. Unha bombilla doméstica ten uns 800 lúmenes; un panel de teito brillante, 3000 |
| {{ui:Cor}} | {{ui:Cálida}} (unha bombilla doméstica), {{ui:Neutra}} ou {{ui:Luz do día}}, ou calquera cor |
| {{ui:Feixe (graos)}} | O cono dun foco, de bordo a bordo |
| {{ui:Tamaño da bombilla}}, {{ui:Largura}}, {{ui:Profundidade}} | As bombillas e os paneis máis grandes dan sombras máis suaves |
| {{ui:Vermello (x)}}, {{ui:Verde (y)}}, {{ui:Altura}} | Onde está |

A marca xunto ao nome dunha lámpada acéndea ou apágaa. {{ui:Eliminar a luz}} quítaa. Cada cambio é un único paso: {{key:Ctrl+Z}} o desfai. As lámpadas gárdanse no ficheiro `.modelcraft`.

## Imaxes pola noite

En {{ui:Renderizar unha imaxe…}}, marque {{ui:Usar outra data e hora para esta imaxe}} e escolla unha hora da noite. Con el sol posto o ceo escurece e só as lámpadas iluminan o modelo. Se a imaxe sae demasiado escura, aumente o {{ui:Brillo}} no diálogo ou engada lámpadas.

:::tip
Para un cuarto visto desde dentro, coloque a cámara dentro do cuarto (oriente e achegue o zoom, ou use unha [escena](topic:scenes)), engada unha lámpada no teito e renderice pola noite. No modo {{ui:Rápido}}, os recunchos lonxe dunha lámpada quedan máis escuros que nunha fotografía; o [modo de alta calidade](topic:render#high-quality) deixa que a luz rebote nas paredes.
:::
