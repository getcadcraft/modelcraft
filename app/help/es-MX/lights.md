---
title: Iluminar un modelo con lámparas
summary: Coloque lámparas, reflectores y paneles de luz en un modelo para que las imágenes renderizadas muestren habitaciones de noche o interiores iluminados, con sombras suaves.
keywords: luz, luces, lámpara, lámparas, iluminación, foco, luz de techo, reflector, luz empotrada, panel de luz, luz de área, lúmenes, brillo, temperatura de color, cálida, noche, interior, renderizar
from: c8d72cbc
---

Las lámparas iluminan [imágenes renderizadas](topic:render). No cambian la vista 3D, donde cada lámpara se muestra como una pequeña marca en su propio color.

## Agregar una lámpara

1. En la sección {{ui:Lights}} de la derecha, haga clic en {{ui:Lamp}}, {{ui:Spotlight}} o {{ui:Light panel}}.
2. Haga clic donde debe ir. La referencia a objetos funciona igual que al dibujar.
   - En un techo o una pared, una **lámpara** cuelga 25 cm fuera de la superficie, del lado desde el que usted mira; un **panel de luz** se apoya en la superficie y emite luz alejándose de ella.
   - Un **reflector** requiere dos clics: primero dónde está y luego hacia qué apunta.

La nueva lámpara queda seleccionada en {{ui:Lights}}, lista para cambiarla.

## Cambiar una lámpara

Haga clic en el nombre de una lámpara en {{ui:Lights}}, o en su marca en la vista con {{ui:Select}}. Después:

| Ajuste | Qué hace |
|---|---|
| {{ui:Brightness (lumens)}} | Cuánta luz emite. Un foco doméstico tiene unos 800 lúmenes; un panel de techo brillante, 3000 |
| {{ui:Color}} | {{ui:Warm}} (un foco doméstico), {{ui:Neutral}} o {{ui:Daylight}}, o cualquier color |
| {{ui:Beam (degrees)}} | El cono de un reflector, de borde a borde |
| {{ui:Bulb size}}, {{ui:Width}}, {{ui:Depth}} | Focos y paneles más grandes dan sombras más suaves |
| {{ui:Red (x)}}, {{ui:Green (y)}}, {{ui:Height}} | Dónde está |

La casilla junto al nombre de una lámpara la enciende o apaga. {{ui:Delete the light}} la elimina. Cada cambio es un solo paso: {{key:Ctrl+Z}} lo deshace. Las lámparas se guardan en el archivo `.modelcraft`.

## Imágenes de noche

En {{ui:Render a picture…}}, marque {{ui:Use another date and time for this picture}} y elija una hora de la tarde. Con el sol ya puesto, el cielo se oscurece y solo las lámparas iluminan el modelo. Suba {{ui:Brightness}} en el cuadro de diálogo si la imagen queda muy oscura, o agregue lámparas.

:::tip
Para una habitación vista desde dentro, coloque la cámara dentro de la habitación (gire la órbita y acerque el zoom, o use una [escena](topic:scenes)), agregue una lámpara en el techo y renderice de noche. En el modo {{ui:Fast}}, las esquinas alejadas de una lámpara quedan más oscuras que en una foto; el [modo de alta calidad](topic:render#high-quality) hace que la luz rebote en las paredes.
:::
