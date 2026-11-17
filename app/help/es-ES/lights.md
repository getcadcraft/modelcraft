---
title: Iluminar un modelo con lámparas
summary: Coloque lámparas, reflectores y paneles de luz en un modelo para que las imágenes renderizadas muestren habitaciones de noche o interiores iluminados, con sombras suaves.
keywords: luz, luces, lámpara, lámparas, iluminación, bombilla, luz de techo, reflector, downlight, panel de luz, luz de área, lúmenes, brillo, temperatura de color, cálida, noche, interior, renderizar
from: c8d72cbc
---

Las lámparas iluminan las [imágenes renderizadas](topic:render). No cambian la vista 3D, donde cada lámpara aparece como una pequeña marca de su propio color.

## Añadir una lámpara

1. En la sección {{ui:Luces}} de la derecha, haga clic en {{ui:Lámpara}}, {{ui:Reflector}} o {{ui:Panel de luz}}.
2. Haga clic donde debe ir. El ajuste funciona igual que al dibujar.
   - En un techo o una pared, una **lámpara** cuelga 25 cm de la cara, en el lado desde el que mira; un **panel de luz** se apoya en la cara e ilumina alejándose de ella.
   - Un **reflector** necesita dos clics: dónde está y hacia qué apunta.

La nueva lámpara queda seleccionada en {{ui:Luces}}, lista para cambiarla.

## Cambiar una lámpara

Haga clic en el nombre de una lámpara en {{ui:Luces}}, o en su marca en la vista con {{ui:Seleccionar}}. Después:

| Ajuste | Qué hace |
| --- | --- |
| {{ui:Brillo (lúmenes)}} | Cuánta luz emite. Una bombilla doméstica son unos 800 lúmenes; un panel de techo luminoso, 3000 |
| {{ui:Color}} | {{ui:Cálida}} (una bombilla doméstica), {{ui:Neutra}} o {{ui:Luz de día}}, o cualquier color |
| {{ui:Haz (grados)}} | El cono de un reflector, de borde a borde |
| {{ui:Tamaño del foco}}, {{ui:Anchura}}, {{ui:Profundidad}} | Las bombillas y los paneles más grandes dan sombras más suaves |
| {{ui:Rojo (x)}}, {{ui:Verde (y)}}, {{ui:Altura}} | Dónde está |

La casilla junto al nombre de una lámpara la enciende o la apaga. {{ui:Eliminar la luz}} la quita. Cada cambio es un solo paso: {{key:Ctrl+Z}} lo deshace. Las lámparas se guardan en el archivo `.modelcraft`.

## Imágenes de noche

En {{ui:Renderizar una imagen…}}, marque {{ui:Usar otra fecha y hora para esta imagen}} y elija una hora de la tarde. Con el sol ya puesto, el cielo se oscurece y solo las lámparas iluminan el modelo. Suba {{ui:Brillo}} en el cuadro de diálogo si la imagen queda demasiado oscura, o añada lámparas.

:::tip
Para una habitación vista desde dentro, coloque la cámara dentro de la habitación (oriente y acerque la vista, o use una [escena](topic:scenes)), añada una lámpara en el techo y renderice de noche. En el modo {{ui:Rápido}}, las esquinas alejadas de una lámpara quedan más oscuras que en una foto; el [modo de alta calidad](topic:render#high-quality) deja que la luz rebote en las paredes.
:::
