---
title: Medir y colocar guías
summary: Lea longitudes y superficies, mida entre dos puntos con la cinta, y trace líneas y puntos guía para dibujar sobre ellos.
keywords: medir, cinta métrica, transportador, ángulo, guía en ángulo, guía, línea guía, línea de construcción, distancia, cota, longitud, superficie, desfase, distribución, punto guía
from: de6d04d9
---

## Leer medidas sin medir

Seleccione algo y mire {{ui:Información de entidad}}:

- Una arista muestra su **longitud**.
- Una cara muestra su **superficie** y cuántos huecos tiene.
- Varias caras muestran su **superficie total**.
- Un grupo o componente muestra su **tamaño** (ancho × profundidad × altura de la caja que lo rodea) y, si es un sólido cerrado, su **volumen**.
- Sin nada seleccionado, {{ui:Información de entidad}} muestra el tamaño de todo el modelo.

Longitudes y superficies usan la unidad del selector en la esquina inferior derecha. Un modelo en milímetros muestra superficies de 0.01 m² en adelante en metros cuadrados (un ambiente de 4 × 3 m se lee "12 m²").

Mientras dibuja, el cuadro de valor muestra en vivo la longitud, el tamaño, el radio o la distancia, así que rara vez necesita medir después.

Para cambiar un tamaño después de dibujar, seleccione una arista o un grupo y vuelva a escribir su longitud o tamaño en {{ui:Información de entidad}}. O coloque una [cota](topic:dimensions) y escriba una nueva longitud en ella.

## Medir entre dos puntos

1. Pulse {{key:T}} para la medición con {{ui:Cinta}}.
2. Haga clic en un punto: una esquina, un punto medio, un punto sobre una cara, o el suelo. (Hacer clic en una arista hace otra cosa; vea abajo.)
3. Mueva hasta el segundo punto. La indicación y el cuadro de valor ({{ui:Longitud}}) muestran la distancia. Se ajusta a puntos y a las direcciones roja, verde y azul.
4. Haga clic. La barra de estado dice "Medido 4' 6"." y se deja un **punto guía** en el segundo punto.

Para dejar el punto guía a una distancia exacta, escríbala después del primer clic y pulse {{key:Enter}}: va en la dirección hacia la que apunta.

## Colocar una línea guía

Una línea guía es una línea punteada sin fin, paralela a una arista, a una distancia que usted elige. Use guías para trazar un retiro, una altura de piso o dónde empieza una ventana.

1. Pulse {{key:T}}.
2. Haga clic sobre una **arista** (no en su extremo). La indicación dice "Sobre arista".
3. Aléjese de la arista, hacia el lado donde debe ir la guía. Una línea punteada sigue el movimiento, paralela a la arista, y el cuadro de valor ({{ui:Desfase}}) muestra la distancia.
4. Haga clic, o escriba el desfase y pulse {{key:Enter}}: `1.5m`, `5'`.

   La barra de estado dice "Línea guía a 1.5 m de la arista."

Empezar sobre una línea guía existente crea otra guía paralela a ella, así que puede extender una cuadrícula a partir de una guía.

Si escribe un desfase sin alejarse antes de la arista, ModelCraft no puede saber a qué lado se refiere: "Aleje primero el puntero de la arista para indicar de qué lado."

## Una guía en ángulo: Transportador

1. Haga clic en {{ui:Transportador}} en el grupo {{ui:Modificar}}.
2. Haga clic en el centro: el punto por el que pasa la guía. Sobre una cara, el transportador queda sobre esa cara; en otro lugar queda plano. Después de este clic, {{key:Right}}, {{key:Left}} o {{key:Up}} lo ponen en escuadra con el rojo, el verde o el azul (pulse otra vez para deshacer).
3. Haga clic en un punto que fije 0°, por ejemplo a lo largo de una arista.
4. Mueva al ángulo que quiera y haga clic: se ajusta en pasos de 15°. O escriba el ángulo en grados, como `22.5`, y pulse {{key:Enter}}; la guía va al lado donde está el puntero.

La línea guía pasa por el centro con ese ángulo. Dibuje a lo largo de ella con {{ui:Línea}} para una pendiente de techo, un chaflán o un muro con bisel.

## Dibujar contra guías

Las herramientas de dibujo se ajustan a líneas guía ("En guía") y a puntos guía ("Punto guía"), y al lugar donde una línea guía cruza una dirección de eje. Empiece un rectángulo donde se cruzan dos guías para colocarlo exactamente.

## Quitar guías

- Una guía: haga clic en ella con {{ui:Seleccionar}} y pulse {{key:Delete}}, o haga clic en ella con la {{ui:Goma}}.
- Todas las guías: sin nada seleccionado, haga clic en {{ui:Eliminar guía opa}} en {{ui:Información de entidad}}.

Las guías se guardan en el archivo `.modelcraft`. No se exportan a otros formatos.
