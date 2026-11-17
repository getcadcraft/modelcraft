---
title: Amb què renderitza el vostre ordinador
summary: Configuració › Renderitzat mostra els gràfics, els nuclis del processador i la memòria que aquest navegador permet a l'aplicació, i el nivell que fixa on comença el renderitzat.
keywords: el vostre ordinador, targeta gràfica, gpu, webgpu, webgl, processador, cpu, nuclis, fils, memòria, ram, memòria compartida, aïllament, nivell, categoria, velocitat, lent, velocitat de renderitzat, portàtil
from: 8a0c21c9
---

Obriu {{ui:Settings}} ({{key:Mod+,}}), quedeu-vos a la pestanya d'aquesta aplicació i desplaceu-vos fins a {{ui:Rendering}}. {{ui:Your machine}} llista el que aquest navegador permet a l'aplicació per al renderitzat. Res d'això no surt del vostre ordinador.

| Fila | Què significa |
|---|---|
| {{ui:Graphics}} | La targeta gràfica que informa el navegador. «WebGPU» vol dir que pot fer tot el treball de renderitzat; «WebGL 2 only» vol dir que la vista en directe i {{ui:Render a picture…}} l'usen (alta qualitat amb el traçador de camins WebGL), mentre que el renderitzat a la vista i la cua de renderitzat, que necessiten WebGPU, no s'ofereixen; un substitut per programari vol dir que tot s'executa al processador |
| {{ui:Processor}} | Quants nuclis de processador informa el navegador |
| {{ui:Memory}} | Aproximadament quanta memòria té l'ordinador, quan el navegador ho informa. Alguns navegadors no ho fan |
| {{ui:Shared memory}} | Si la pàgina pot compartir memòria entre els seus treballadors. Activada, cada nucli pot treballar sobre una sola còpia d'una escena; desactivada, cadascun necessita la seva pròpia còpia, de manera que una escena gran cap en menys nuclis alhora |
| {{ui:Fast processor code}} | Si el navegador executa el codi WebAssembly més ràpid. Sense això s'usa una alternativa més lenta |
| {{ui:Level}} | {{ui:Graphics card, high}}, {{ui:Graphics card, basic}} o {{ui:Processor only}}, amb el motiu a sota |

## El nivell

El nivell fixa on comença la [vista en directe](topic:live-view) ({{ui:For this computer}}), quants elements dispersos dibuixa i quantes cares pot mostrar una [superfície de subdivisió](topic:modifiers#subdivision-surface) a la vista, de manera que un portàtil amb un xip gràfic integrat o sense targeta gràfica es mantingui àgil. Un xip gràfic integrat o de telèfon, o 4 GB de memòria o menys, mai no obté {{ui:Graphics card, high}}.

:::note
Els navegadors són diferents. El mateix ordinador pot mostrar WebGPU en un navegador i «WebGL 2 only» en un altre. A Linux, la majoria de navegadors encara no tenen WebGPU.
:::
