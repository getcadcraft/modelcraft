---
title: Iluminar un modelo con lámparas
summary: Emoĩ lámparas, reflectores ha paneles de luz modelope, ojehechaukáva imágenes renderizadas ambiente nochépe térã interior iluminádope, sombras suaves rehe.
keywords: luz, luces, lámpara, lámparas, iluminación, bombilla, luz de techo, reflector, downlight, panel de luz, luz de área, lúmenes, brillo, temperatura de color, cálida, noche, interior, render
from: c8d72cbc
---

Lámparas iluminan [imágenes renderizadas](topic:render). Ndojecambiái vista 3D-pe; upépe cada lámpara ohechauka peteĩ marca michĩ ijyvykue ndive.

## Emoĩ peteĩ lámpara

1. Ko {{ui:Lights}} apartado-pe ñaneretã, ejepe'a {{ui:Lamp}}, {{ui:Spotlight}} térã {{ui:Light panel}}.
2. Ejepe'a pe lugar ojoguáva. Snapping oservi kóicha dibujo ojapo-pe.
   - Techo térã pared-pe, peteĩ **lámpara** oñemboja 25 cm cara-gui, pe lado-pe ndehecháva; peteĩ **panel de luz** oike cara-pe ha oñemboja upe cara-gui.
   - Peteĩ **reflector** ohaseha mokõi jepe'ápe: peteĩ hendápe, upéi mbohapy ohechaukáva upe ohendu.

Lámpara pyahu ohechaukáta {{ui:Lights}} apartado-pe, oñeme'ẽvape ojeréva.

## Emoĩ lámpara oñemoambue

Ejepe'a peteĩ lámpara réra {{ui:Lights}} apartado-pe, térã ilámpara marca vista-pe ejepe'a {{ui:Select}} ndive. Upéi:

| Ajuste | Mba'épa oiko |
|---|---|
| {{ui:Brightness (lumens)}} | Mávapa luz ome'ẽta. Peteĩ bombilla de casa ohasa 800 lúmenes; peteĩ panel de techo guasu 3000 |
| {{ui:Color}} | {{ui:Warm}} (peteĩ bombilla de casa), {{ui:Neutral}} térã {{ui:Daylight}}, térã mba'e color ojeporavóva |
| {{ui:Beam (degrees)}} | Reflector-pe cono, peteĩ borde gui ambue borde peve |
| {{ui:Bulb size}}, {{ui:Width}}, {{ui:Depth}} | Bombilla térã panel guasúvape sombras suavésa ojapo |
| {{ui:Red (x)}}, {{ui:Green (y)}}, {{ui:Height}} | Oĩ hendápe |

Lámpara réra rehe peteĩ tick oiko ojehai térã ojepe'a hag̃ua. {{ui:Delete the light}} omboguejy. Cada cambio ojapo peteĩ pasómbe: {{key:Ctrl+Z}} omboguejy. Lámparakuéra oñeñongatu `.modelcraft` archivo-pe.

## Imágenes pyharépe

{{ui:Render a picture…}} apartado-pe, ejepe'a {{ui:Use another date and time for this picture}} ha eiporu peteĩ ára tardekue. Sol oñemboja-vaekue, cielo oiko iku'a ha lámparakuéra añónte ohendu modelo. Imagen iku'a ramo, {{ui:Brightness}} ejuvi diálogo-pe térã emoĩ lámparakuéra.

:::tip
Ambiente peteĩ rendápe ehecha-hagua, emoĩ kámara ambiente-pe (orbit ha zoom térã peteĩ [escena](topic:scenes)), emoĩ lámpara techo-pe ha render pyharépe. Modo {{ui:Fast}}-pe, lámpara ndive ndahaʼéi ikatu ohendu koina rincón-kuéra oiko iku'a jepe photo-gui; [modo de alta calidad](topic:render#high-quality) ohechauka luz ohupyty paredes-pe.
:::
