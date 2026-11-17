---
title: Distribuir las UV de una malla
summary: Marque costuras, desenvuelva, proyecte y empaquete las coordenadas de textura de una malla en el espacio de trabajo UV, y compruébelas con un damero y los colores de estiramiento.
keywords: uv, uvs, desenvolver, desenvolvimiento, costura, costuras, textura, coordenadas de textura, atlas, empaquetar, empaquetado, isla, islas, damero, estiramiento, distorsión, proyección de caja, proyección de cilindro, proyección de esfera, conforme, basado en ángulos, lscm, abf
from: 00028f20
---

Una textura es una imagen plana; una malla no lo es. Sus **UV** indican dónde se ubica cada esquina de cada cara sobre la imagen. El espacio de trabajo UV las genera: usted corta la malla a lo largo de **costuras**, extiende las piezas planas (**desenvolver**) y las ajusta dentro del cuadrado (**empaquetar**).

## Abrirlo

Seleccione una malla y elija {{ui:UV}} en la lista de espacios de trabajo. Un grupo o componente primero se convierte en malla, como en el espacio de trabajo Malla. La vista 3D se desplaza a la mitad izquierda; el **editor UV** a la derecha muestra las caras de la malla distribuidas sobre el cuadrado de textura. La selección funciona igual que en el espacio de trabajo Malla, y lo que seleccione en una vista queda seleccionado en la otra.

## Marcar costuras

Las costuras son los lugares donde la malla puede abrirse; se muestran en rojo en ambas vistas.

- Seleccione aristas ({{ui:Arista}}, o {{key:2}}) y pulse {{ui:Marcar costura}} ({{key:Ctrl+E}}). {{ui:Quitar costura}} ({{key:Ctrl+Shift+E}}) las elimina.
- {{ui:Costuras en aristas vivas}} marca cada arista viva y cada arista donde las caras se encuentran con más de 60°: una caja se divide en sus seis lados.
- {{ui:Costuras desde UV}} marca costuras donde las UV ya se separan, por ejemplo después de una proyección.

Una pieza cerrada necesita costuras para quedar plana: una esfera necesita al menos un corte, y un tubo, un corte a lo largo de su longitud.

## Desenvolver

Seleccione las caras que quiere distribuir (o ninguna, para toda la malla) y pulse {{ui:Desenvolver}} ({{key:U}}). Cada pieza entre costuras se aplana, conservando sus ángulos lo más fielmente posible (aplanado basado en ángulos), y luego las piezas se empaquetan dentro del cuadrado. {{ui:Conforme}} desenvuelve mediante mapas conformes de mínimos cuadrados: es más rápido, pero un poco menos fiel en piezas muy curvas. Una forma que puede fabricarse a partir de una lámina plana, como el lateral de un cilindro cortado una vez, se desenvuelve sin ningún estiramiento.

## Proyectar

Para formas sencillas, una proyección suele bastar:

| Proyección | Qué hace |
| --- | --- |
| {{ui:Caja}} | Cada cara sobre el lado de una caja al que mira más |
| {{ui:Cilindro}} | Alrededor del eje azul: a lo ancho está el ángulo alrededor, y hacia arriba la altura |
| {{ui:Esfera}} | Desde el centro: a lo ancho está el ángulo alrededor, y hacia arriba la latitud |
| {{ui:Desde la vista}} | Como se ven ahora las caras en la vista 3D |

Una cara que cruza la unión del cilindro o de la esfera se conserva en una sola pieza, así que sus UV pueden salirse un poco del borde derecho del cuadrado; ahí las texturas se repiten.

## Distribuir

- {{ui:Empaquetar}} ajusta las piezas (islas) dentro del cuadrado con un tamaño de texel uniforme, cada una girada para ocupar el menor espacio posible. El panel define el espacio libre entre ellas.
- {{ui:Girar 90°}} y {{ui:Reflejar}} giran o reflejan las UV de las caras seleccionadas.
- En el editor UV, arrastre una cara seleccionada para mover las UV de la selección, o sitúe el puntero en el editor y pulse {{key:R}} o {{key:S}}, luego mueva para girarlas o escalarlas (un clic lo conserva, {{key:Esc}} cancela). {{key:G}} mueve sin arrastrar. Haga doble clic en una cara (o pulse {{key:L}}) para seleccionar toda su isla. La rueda hace zoom; arrastre con el botón central o derecho para desplazar la vista; {{key:F}} vuelve a ajustar el cuadrado a la pantalla.

Cada cambio es un paso de deshacer.

## Compruébelas

- {{ui:Damero}} muestra un damero con etiquetas sobre la malla en sus UV: cuadros uniformes y cuadrados indican que la textura queda pareja; las etiquetas muestran hacia dónde corre.
- {{ui:Estiramiento}} colorea cada cara según cuánto la estiran sus UV: azul sin estiramiento, pasando por verde, hasta rojo si es mucho. El panel permite elegir si mide **ángulos doblados** o **tamaño cambiado**, y muestra el promedio.

Vea también [Editar una malla](topic:mesh-edit), [Mallas](topic:meshes) y [Modificadores en una malla](topic:modifiers).
