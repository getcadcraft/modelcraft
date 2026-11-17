---
title: El cubo de vistas
summary: Haga clic en una cara, arista o esquina del cubo, en la esquina de la vista, para mirar desde allí; arrástrelo para orbitar, gire el anillo de la brújula, recorra las vistas de frente a una cara y vuelva a la vista inicial.
keywords: cubo de vistas, viewcube, cubo, brújula, norte, vista inicial, vistas estándar, superior, frontal, derecha, iso, esquina, arista, órbita, girar vista, icono de ejes, indicador de esquina, navegación
from: e1ec1347
---

El cubo de vistas está en la esquina superior derecha de la vista 3D. Gira con la vista, así que siempre muestra hacia dónde está mirando: {{ui:Superior}} queda arriba, {{ui:Frontal}} mira al sur (usted mira hacia el norte, a lo largo del eje verde, cuando lo observa), y {{ui:Derecha}} mira al este (eje rojo). Permanece translúcido hasta que apunte hacia él.

## Mirar desde un lado, una arista o una esquina

1. Apunte al cubo. La parte bajo el puntero se ilumina: el centro de una cara, una arista (se ilumina en las dos caras que comparte) o una esquina (en las tres caras).
2. Haga clic. La vista gira para mirar desde ahí, conservando el mismo centro y zoom.

Hay 26 lugares donde hacer clic: 6 caras ({{ui:Superior}}, {{ui:Inferior}}, {{ui:Frontal}}, {{ui:Posterior}}, {{ui:Izquierda}}, {{ui:Derecha}}), 12 aristas y 8 esquinas. Una esquina da la clásica vista en tres cuartos; una arista se ve a medio camino entre dos caras.

Hacer clic en {{ui:Frontal}} equivale a {{ui:Vistas}}, {{ui:Frontal}} en la barra de herramientas, sin el zoom para ajustar. {{ui:Vistas}} sigue haciendo zoom a todo el modelo.

## Orbitar arrastrando el cubo

Arrastre el cubo para girar la vista, igual que al orbitar en la vista misma. Un arrastre nunca se toma como clic, así que puede tomar el cubo por cualquier parte.

## El anillo de la brújula

El anillo bajo el cubo lleva N, E, S y O.

- **Arrastre el anillo** para girar el modelo alrededor del eje vertical, como si estuviera sobre una plataforma giratoria. El anillo sigue al puntero.
- **Haga clic en una letra** para mirar desde ese lado, conservando la inclinación con que mira hacia abajo. En una vista desde arriba, la letra que pulse va a la parte inferior de la pantalla.

## Vistas de frente: flechas

Cuando mira directamente a una cara, aparecen pequeñas flechas alrededor del cubo:

- Los cuatro **triángulos** llevan al frente la cara de ese lado: el triángulo sobre el cubo muestra la cara que estaba arriba, y así sucesivamente.
- Las dos **flechas curvas** de la parte superior derecha giran la imagen un cuarto de vuelta en sentido horario o antihorario, sin cambiar la cara que mira. Úselas para girar una planta de modo que una pared larga cruce la pantalla.

## Inicio

El botón de casa, en la esquina superior izquierda del cubo, vuelve a la vista isométrica en tres cuartos, {{ui:Iso}}, y ajusta todo el modelo a la pantalla. {{key:Home}} hace lo mismo mientras el cubo tiene el foco del teclado.

## Con el teclado

{{key:Tab}} hasta el cubo, luego:

| Tecla | Hace |
|---|---|
| {{key:left}} / {{key:right}} | elige una cara, arista o esquina alrededor del cubo, en pasos de un octavo de vuelta (los lectores de pantalla indican cuál) |
| {{key:up}} / {{key:down}} | elige una más alta o más baja, hasta {{ui:Superior}} o hasta {{ui:Inferior}} |
| {{key:Enter}} o {{key:Space}} | mira desde la elegida |
| {{key:Shift+left}} / {{key:Shift+right}} | gira la vista un cuarto de vuelta alrededor del eje vertical |
| {{key:Home}} | la vista inicial |
| {{key:Esc}} | sale del cubo |

Las teclas que pulsa en el cubo se quedan en el cubo: no activan herramientas de ModelCraft.

## Indicador de ejes o nada

Abra {{ui:Configuración}} ({{key:Mod+,}}), la pestaña {{ui:ModelCraft}}, y ajuste **Indicador de esquina** en {{ui:Cubo de vistas}} (el predeterminado), {{ui:Icono de ejes}} (un pequeño marcador X, Y, Z en la esquina inferior izquierda: X rojo, Y verde, Z azul) o {{ui:Ninguno}}. Este navegador recuerda la elección. Vea [Configuración de ModelCraft](topic:settings#corner-indicator).

:::note
ModelCraft no permite inclinar la cámara sobre su eje (roll): salvo en las vistas directamente desde arriba y desde abajo, lo que está arriba en la pantalla siempre es arriba en el modelo. El cubo y las flechas curvas pueden girar una vista en planta; no pueden volcar una vista lateral sobre su canto.
:::
