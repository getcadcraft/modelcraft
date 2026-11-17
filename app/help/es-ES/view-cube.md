---
title: El cubo de vistas
summary: Haga clic en una cara, arista o esquina del cubo de la esquina de la vista para mirar desde allí, arrástrelo para orbitar, gire el anillo de la brújula, pase a vistas de frente y vuelva a la vista inicial.
keywords: cubo de vistas, viewcube, cubo, brújula, norte, vista inicial, vistas estándar, superior, frontal, derecha, iso, esquina, arista, orbitar, girar vista, icono de ejes, indicador de esquina, navegación
from: e1ec1347
---

El cubo de vistas está en la esquina superior derecha de la vista 3D. Gira con la vista, así que siempre muestra hacia dónde mira: {{ui:Superior}} está arriba, {{ui:Frontal}} mira al sur (usted mira hacia el norte, a lo largo del eje verde, cuando mira el cubo), {{ui:Derecha}} mira al este (eje rojo). Permanece translúcido hasta que apunte a él.

## Mirar desde un lado, una arista o una esquina

1. Sitúe el puntero sobre el cubo. La parte bajo el puntero se ilumina: el centro de una cara, una arista (se ilumina en las dos caras que la comparten) o una esquina (en las tres caras).
2. Haga clic. La vista gira para mirar desde ahí, conservando el mismo centro y zoom.

Hay 26 puntos en los que hacer clic: 6 caras ({{ui:Superior}}, {{ui:Inferior}}, {{ui:Frontal}}, {{ui:Posterior}}, {{ui:Izquierda}}, {{ui:Derecha}}), 12 aristas y 8 esquinas. Una esquina da la clásica vista de tres cuartos; una arista mira a medio camino entre dos caras.

Hacer clic en {{ui:Frontal}} es lo mismo que {{ui:Vistas}}, {{ui:Frontal}} en la barra de herramientas, pero sin ajustar el zoom. {{ui:Vistas}} sigue ajustando el zoom a todo el modelo.

## Orbitar arrastrando el cubo

Arrastre el cubo para girar la vista, igual que al orbitar en la propia vista. Un arrastre nunca se toma como clic, así que puede agarrar el cubo por cualquier punto.

## El anillo de la brújula

El anillo bajo el cubo lleva N, E, S y O.

- **Arrastre el anillo** para girar el modelo alrededor del eje vertical, como si estuviera sobre una plataforma giratoria. El anillo sigue al puntero.
- **Haga clic en una letra** para mirar desde ese lado, manteniendo la inclinación con la que mira hacia abajo. En una vista desde arriba, la letra en la que hace clic pasa a la parte inferior de la pantalla.

## Vistas de frente: flechas

Cuando mira de frente a una cara, aparecen pequeñas flechas alrededor del cubo:

- Los cuatro **triángulos** llevan al frente la cara de ese lado: el triángulo sobre el cubo muestra la cara que estaba arriba, y así sucesivamente.
- Las dos **flechas curvas** de la esquina superior derecha giran la imagen un cuarto de vuelta en sentido horario o antihorario, sin cambiar la cara que mira. Úselas para girar una planta de modo que un muro largo quede horizontal en la pantalla.

## Inicio

El botón de casa de la esquina superior izquierda del cubo vuelve a la vista de tres cuartos {{ui:Iso}} y ajusta todo el modelo a la vista. {{key:Home}} hace lo mismo mientras el cubo tiene el foco del teclado.

## Con el teclado

Pulse {{key:Tab}} hasta el cubo y después:

| Tecla | Función |
|---|---|
| {{key:left}} / {{key:right}} | elige un lado, arista o esquina alrededor del cubo, en pasos de un octavo de vuelta (los lectores de pantalla dicen cuál) |
| {{key:up}} / {{key:down}} | elige una posición más alta o más baja, hasta {{ui:Superior}} o hasta {{ui:Inferior}} |
| {{key:Enter}} o {{key:Space}} | mira desde el elegido |
| {{key:Shift+left}} / {{key:Shift+right}} | gira la vista un cuarto de vuelta alrededor del eje vertical |
| {{key:Home}} | la vista inicial |
| {{key:Esc}} | sale del cubo |

Las teclas pulsadas sobre el cubo se quedan en el cubo: no inician herramientas de ModelCraft.

## Icono de ejes o nada

Abra {{ui:Configuración}} ({{key:Mod+,}}), la pestaña {{ui:ModelCraft}}, y ponga **Indicador de esquina** en {{ui:Cubo de vistas}} (el inicial), {{ui:Icono de ejes}} (un pequeño marcador X, Y, Z en la esquina inferior izquierda: X rojo, Y verde, Z azul) o {{ui:Ninguno}}. Este navegador recuerda la elección. Véase [Ajustes de ModelCraft](topic:settings#corner-indicator).

:::note
ModelCraft no tiene balanceo: salvo en las vistas desde arriba y desde abajo, arriba en la pantalla es siempre arriba en el modelo. El cubo y las flechas curvas pueden girar una vista en planta; no pueden inclinar una vista lateral hasta ponerla de canto.
:::
