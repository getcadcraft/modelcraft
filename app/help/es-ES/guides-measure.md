---
title: Medir y colocar guías
summary: Lea longitudes y áreas, mida la distancia entre dos puntos con la cinta y trace líneas y puntos de guía contra los que dibujar.
keywords: medir, cinta métrica, transportador, ángulo, guía angular, guía, línea guía, línea de construcción, distancia, cota, longitud, área, desfase, disposición, punto de guía
from: de6d04d9
---

## Leer medidas sin medir

Seleccione algo y mire {{ui:Información de entidad}}:

- Una arista muestra su **longitud**.
- Una cara muestra su **área** y cuántos huecos tiene.
- Varias caras muestran su **área total**.
- Un grupo o componente muestra su **tamaño** (ancho × profundidad × altura de la caja que lo envuelve) y, si es un sólido cerrado, su **volumen**.
- Sin nada seleccionado, {{ui:Información de entidad}} muestra el tamaño de todo el modelo.

Las longitudes y áreas usan la unidad del selector de la esquina inferior derecha. Un modelo en milímetros muestra las áreas desde 0.01 m² en metros cuadrados (una habitación de 4 × 3 m se lee "12 m²").

Mientras dibuja, el cuadro de valor muestra en vivo la longitud, el tamaño, el radio o la distancia, así que rara vez necesitará medir después.

Para cambiar una medida después de dibujar, seleccione una arista o un grupo y vuelva a escribir su longitud o tamaño en {{ui:Información de entidad}}. O coloque una [cota](topic:dimensions) y escriba en ella una longitud nueva.

## Medir entre dos puntos

1. Pulse {{key:T}} para la medición con {{ui:Cinta}}.
2. Haga clic en un punto: una esquina, un punto medio, un punto en una cara o el suelo. (Hacer clic en una arista hace otra cosa; véase más abajo.)
3. Desplácese hasta el segundo punto. La sugerencia y el cuadro de valor ({{ui:Longitud}}) muestran la distancia. Se ajusta a puntos y a las direcciones roja, verde y azul.
4. Haga clic. La barra de estado dice "Medido 4' 6"." y queda un **punto de guía** en el segundo punto.

Para dejar el punto de guía a una distancia exacta, escríbala después del primer clic y pulse {{key:Enter}}: va en la dirección a la que apunta.

## Colocar una línea guía

Una línea guía es una línea discontinua sin fin, paralela a una arista, a una distancia que usted elige. Use las guías para trazar un retranqueo, una altura de planta o dónde empieza una ventana.

1. Pulse {{key:T}}.
2. Haga clic en una **arista** (no en su extremo). La sugerencia dice "En arista".
3. Aléjese de la arista, hacia el lado donde debe ir la guía. Una línea discontinua la sigue, paralela a la arista, y el cuadro de valor ({{ui:Desfase}}) muestra la distancia.
4. Haga clic, o escriba el desfase y pulse {{key:Enter}}: `1.5m`, `5'`.

   La barra de estado dice "Línea guía a 1.5 m de la arista."

Si empieza sobre una línea guía existente, crea otra guía paralela a ella, así puede ir sacando una cuadrícula a partir de una guía.

Si escribe un desfase sin alejarse antes de la arista, ModelCraft no puede saber a qué lado se refiere: "Aléjese primero de la arista para indicar el lado."

## Una guía en ángulo: Transportador

1. Haga clic en {{ui:Transportador}} en el grupo {{ui:Modificar}}.
2. Haga clic en el centro: el punto por el que pasa la guía. Sobre una cara, el transportador se apoya en esa cara; en otro lugar, queda plano. Tras este clic, {{key:Right}}, {{key:Left}} o {{key:Up}} lo colocan perpendicular al rojo, verde o azul (pulse de nuevo para deshacerlo).
3. Haga clic en un punto que fije 0°, por ejemplo a lo largo de una arista.
4. Desplácese hasta el ángulo que quiera y haga clic: se ajusta en pasos de 15°. O escriba el ángulo en grados, como `22.5`, y pulse {{key:Enter}}; la guía va al lado en el que está el puntero.

La línea guía pasa por el centro con ese ángulo. Dibuje sobre ella con {{ui:Línea}} para una pendiente de cubierta, un chaflán o un muro abocinado.

## Dibujar ajustado a guías

Las herramientas de dibujo se ajustan a las líneas guía ("En guía") y a los puntos de guía ("Punto de guía"), y al punto donde una línea guía cruza una dirección de eje. Empiece un rectángulo donde se cruzan dos guías para colocarlo con exactitud.

## Eliminar guías

- Una guía: haga clic en ella con {{ui:Seleccionar}} y pulse {{key:Delete}}, o haga clic en ella con el {{ui:Borrador}}.
- Todas las guías: sin nada seleccionado, haga clic en {{ui:Eliminar todas las guías}} en {{ui:Información de entidad}}.

Las guías se guardan en el archivo `.modelcraft`. No se exportan a otros formatos.
