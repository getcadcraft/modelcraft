---
title: Disponer las UV de una malla
summary: Marque costuras, desenvuelva, proyecte y empaquete las coordenadas de textura de una malla en el espacio de trabajo UV, y compruébelas con un tablero y los colores de estiramiento.
keywords: uv, uvs, desenvolver, desenvolvimiento, costura, costuras, textura, coordenadas de textura, atlas, empaquetar, empaquetado, isla, islas, tablero, estiramiento, distorsión, proyección de caja, proyección de cilindro, proyección de esfera, conforme, basado en ángulos, lscm, abf
from: 00028f20
---

Una textura es una imagen plana; una malla no es plana. Sus **UV** indican dónde está cada esquina de cada cara en la imagen. El espacio de trabajo UV las genera: se abre la malla por sus **costuras**, se extienden las piezas planas (**desenvolver**) y se ajustan dentro del cuadrado (**empaquetar**).

## Abrirlo

Seleccione una malla y elija {{ui:UV}} en la lista de {{ui:Espacio de trabajo}}. Antes, un grupo o un componente se convierte en malla, como en el espacio de trabajo de malla. La vista 3D pasa a la mitad izquierda; el **editor UV** de la derecha muestra las caras de la malla dispuestas sobre el cuadrado de la textura. La selección funciona como en el espacio de trabajo de malla, y lo que seleccione en una vista se selecciona también en la otra.

## Marcar costuras

Las costuras son los puntos por donde la malla puede abrirse; se muestran en rojo en ambas vistas.

- Seleccione aristas ({{ui:Arista}}, o {{key:2}}) y pulse {{ui:Marcar costura}} ({{key:Ctrl+E}}). {{ui:Borrar costura}} ({{key:Ctrl+Shift+E}}) las quita.
- {{ui:Costuras en aristas vivas}} marca toda arista viva y toda arista donde las caras forman un ángulo mayor de 60°: una caja se divide en sus seis lados.
- {{ui:Costuras desde los UV}} marca costuras donde los UV ya se rompen, por ejemplo tras una proyección.

Una pieza cerrada necesita costuras para quedar plana: una esfera necesita al menos un corte, y un tubo, un corte a lo largo de su longitud.

## Desenvolver

Seleccione las caras que quiera disponer (o ninguna, para toda la malla) y pulse {{ui:Desenvolver}} ({{key:U}}). Cada pieza entre costuras se extiende plana, manteniendo sus ángulos lo más fieles posible (aplanado basado en ángulos), y después las piezas se empaquetan dentro del cuadrado. {{ui:Conforme}} desenvuelve en su lugar mediante mapas conformes de mínimos cuadrados: es más rápido, algo menos fiel en piezas muy curvadas. Una forma que puede hacerse a partir de una lámina plana, como el lateral de un cilindro cortado una vez, se desenvuelve sin ningún estiramiento.

## Proyectar

Para formas sencillas, a menudo basta con una proyección:

| Proyección | Qué hace |
| --- | --- |
| {{ui:Caja}} | Cada cara sobre el lado de una caja al que mira más |
| {{ui:Cilindro}} | Alrededor del eje azul: en horizontal, el ángulo de giro; en vertical, la altura |
| {{ui:Esfera}} | Desde el centro: en horizontal, el ángulo de giro; en vertical, la latitud |
| {{ui:Desde la vista}} | Tal como se ven las caras en la vista 3D en este momento |

Una cara que cruza la unión del cilindro o de la esfera se mantiene en una sola pieza, así que sus UV pueden sobrepasar un poco el borde derecho del cuadrado; allí las texturas se repiten.

## Organizar

- {{ui:Empaquetar}} ajusta las piezas (islas) dentro del cuadrado con un tamaño de texel único, girando cada una para ocupar el menor espacio posible. El panel define el espacio que queda entre ellas.
- {{ui:Girar 90°}} y {{ui:Reflejar}} giran o reflejan los UV de las caras seleccionadas.
- En el editor UV, arrastre una cara seleccionada para mover los UV de la selección, o sitúe el puntero en el editor, pulse {{key:R}} o {{key:S}} y mueva para girarlos o escalarlos (un clic lo mantiene, {{key:Esc}} cancela). {{key:G}} mueve sin arrastrar. Haga doble clic en una cara (o pulse {{key:L}}) para seleccionar toda su isla. La rueda hace zoom; arrastre con el botón central o el derecho para desplazar la vista; {{key:F}} vuelve a ajustar el cuadrado.

Cada cambio es un solo paso de deshacer.

## Comprobarlos

- {{ui:Tablero}} muestra un tablero con etiquetas sobre la malla en sus UV: cuadros regulares y cuadrados indican que la textura se aplica de forma uniforme; las etiquetas muestran hacia dónde va.
- {{ui:Estiramiento}} colorea cada cara según cuánto la estiran sus UV: azul, nada; pasando por verde, hasta rojo, mucho. El panel elige si mide **ángulos doblados** o **tamaño cambiado**, y muestra el promedio.

Véase también [Editar una malla](topic:mesh-edit), [Mallas](topic:meshes) y [Modificadores en una malla](topic:modifiers).
