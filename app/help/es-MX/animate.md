---
title: Anime cualquier propiedad, dele forma con curvas y mezcle clips
summary: El espacio de trabajo Animar crea claves para la posición, el giro y el tamaño de un objeto, el brillo, la apertura y el color de una lámpara, la lente y las formas clave de una malla; los esqueletos doblan una malla con huesos y pesos pintados; la cinemática inversa y las restricciones hacen que huesos y objetos alcancen, miren, copien, se mantengan dentro de límites, cuelguen o sigan a otros; los cuerpos rígidos caen, se apilan y chocan, y se hornean como claves; los controladores fijan un valor a partir de otros; la vista Curvas de la línea de tiempo da forma a cada cambio con tiradores Bézier y ciclos, y la vista Clips guarda las animaciones como acciones que usted vuelve a colocar y mezclar.
keywords: física, cuerpo rígido, cuerpos rígidos, simulación, simular, caer, gravedad, chocar, colisión, apilar, rebote, fricción, hornear, horneada, ik, cinemática inversa, restricción, restricciones, mirar a, seguir objetivo, apuntar, copiar transformaciones, copiar ubicación, copiar rotación, limitar rotación, límites, hijo de, padre, seguir trayectoria, trayectoria, polo, fabrik, cadena, esqueleto, esqueletos, rig, rigging, huesos, hueso, armazón, piel, pesos, pintar pesos, grupos de vértices, pesos automáticos, calor de hueso, pose, modo pose, cuaternión dual, mezcla lineal, formas clave, forma clave, morfo, morfos, objetivos de morfo, formas de mezcla, facial, expresión, controlador, controladores, expresiones, espacio de trabajo animar, animar, animación, fotograma clave, clave, claves, propiedad, propiedades, transformación, posición, rotación, escala, lámpara, luz, brillo, color, lente, campo de visión, fov, editor de gráficas, curvas, curva, bézier, tiradores, tangente, interpolación, ciclo, ciclos, repetir, bucle, ida y vuelta, desfase, hoja de claves, seleccionar claves, selección por recuadro, copiar claves, pegar claves, estirar claves, escalar claves, clips, acciones, nla, mezcla, mezclar, influencia, guardar
from: 16d8e12f
---

La [línea de tiempo](topic:animation) mueve la cámara y grupos y componentes completos. El espacio de trabajo **Animar** crea claves para más cosas que eso, y la línea de tiempo tiene dos vistas adicionales para dar forma y reutilizar lo que usted creó con claves.

## Abrirlo

Elija {{ui:Animar}} en la lista de espacios de trabajo de la barra de herramientas. La línea de tiempo se abre debajo de la vista, la barra de herramientas muestra los grupos de Animar ({{ui:Claves}}, {{ui:Reproducir}}, {{ui:Línea de tiempo}}) y el panel de la derecha enumera lo que puede crear con claves en el cabezal de reproducción.

## Crear una clave para una propiedad

El panel enumera, en el cabezal de reproducción:

- **Objeto elegido**: su {{ui:Colocar}}, {{ui:Giro (°)}} y {{ui:Tamaño}}, tres números cada uno. Escriba un número y pulse {{key:Enter}}: se crea una clave en el cabezal de reproducción y el objeto se mueve allí. El rombo junto a una fila crea una clave con el valor actual; un rombo relleno indica que ya hay una clave en el cabezal de reproducción.
- **Lámparas**: el {{ui:Brillo (lm)}} de cada lámpara, su {{ui:Apertura (°)}} (lámparas de foco) y su {{ui:Color}}.
- **Cámara**: el {{ui:Ángulo de la lente (°)}}, para un zoom mientras la cámara se mueve.

{{ui:Clave de transformación}} (o {{key:I}}) crea claves para la posición, el giro y el tamaño de todos los grupos o componentes elegidos a la vez; {{ui:Clave de cámara}} (o {{key:K}}) crea una clave para la cámara. Con {{ui:Clave automática}} activada, un grupo cuya posición, giro y tamaño tienen claves de este modo recibe una clave nueva cada vez que lo mueve.

Los giros son tres ángulos, alrededor de X, luego Y y luego Z. Un giro con clave superior a 180° sigue en el mismo sentido (190° se queda en 190°, no en −170°), así que una rueda puede girar varias veces.

:::tip
Un grupo con clave creada con {{ui:Clave de la selección}} en la línea de tiempo tiene claves de colocación completa. El botón de curva de su fila las convierte en curvas de posición, giro y tamaño (la misma colocación en cada clave) para que pueda darles forma en {{ui:Curvas}}.
:::

## Formas clave (morfos)

Una **forma clave** es otra forma de la misma [malla](topic:meshes): una sonrisa en una cara, la curvatura de una puerta, una hoja doblada. Su control deslizante mezcla desde la malla tal como está (0) hasta esa forma (1); varias claves se suman.

1. Elija una malla en el espacio de trabajo Animar: el panel muestra sus {{ui:Formas clave}}.
2. Haga clic en {{ui:Agregar forma clave}}. ModelCraft pasa al [espacio de trabajo Malla](topic:mesh-edit) con la nueva forma clave en edición: desplace puntos, extruya, esculpa; cambie la malla a la forma que desee.
3. Vuelva a {{ui:Animar}} y haga clic en {{ui:Listo}}. La malla vuelve a su estado anterior y la clave conserva su cambio.

Luego arrastre el control deslizante de la clave (o escriba un valor) para mezclarla. El rombo crea una clave del valor en el cabezal de reproducción, así que una clave puede crecer y desvanecerse con el tiempo; una vez que tiene una pista, un valor nuevo se guarda como clave en el cabezal de reproducción. El lápiz vuelve a editar la forma de la clave (la malla la muestra completa hasta {{ui:Listo}}; {{ui:Cancelar}} deja la clave como estaba), el ojo desactiva la clave y el cesto la elimina.

Un vértice que agrega mientras edita una clave pertenece a la malla misma: se queda donde lo puso, en todas las formas.

:::note
Las formas clave mueven la malla antes de sus [modificadores](topic:modifiers): un modificador de subdivisión suaviza la forma mezclada. Las imágenes y los videos renderizados muestran las claves en cada cuadro.
:::

## Esqueletos: huesos que doblan una malla

Un **esqueleto** es un conjunto de huesos dentro de una [malla](topic:meshes). Posicione los huesos y la malla los sigue, cada punto tanto como indiquen sus **pesos**.

1. Elija la malla en el espacio de trabajo Animar y haga clic en {{ui:Agregar un esqueleto}} en el panel (o en {{ui:Agregar hueso}} dentro del grupo {{ui:Esqueleto}}): el primer hueso recorre el centro de la malla desde su base.
2. Con un hueso elegido, {{ui:Agregar un hueso hijo}} agrega el siguiente desde su punta. En el panel, ajuste la {{ui:Cabeza}}, la {{ui:Punta}} y el {{ui:Alabeo (°)}} de cualquier hueso, y el {{ui:Cuelga de}}: un hueso que cuelga de otro se mueve con él. Desmarque {{ui:Mueve la malla}} para un hueso que solo dirige a otros.
3. Haga clic en {{ui:Pesos automáticos}}: cada hueso toma los puntos más cercanos a él, y esa influencia se extiende suavemente por la malla, de modo que los puntos entre dos huesos las comparten. {{ui:Solo los huesos más cercanos}} es una división más rápida y tajante.

**Posicione** los huesos con {{ui:Posar}} ({{key:P}}): haga clic en un hueso para elegirlo, arrástrelo para girarlo alrededor del eje de la vista, o arrastre con {{key:Shift}} para desplazarlo. También puede escribir su {{ui:Colocar}}, {{ui:Giro (°)}} y {{ui:Tamaño}} en {{ui:Posar}}; los giros se miden en los ejes propios del hueso, desde su posición de reposo. Los rombos y {{ui:Clave de toda la pose}} crean claves de la pose en el cabezal de reproducción; una vez que un hueso tiene claves, al posicionarlo se crea una clave allí. {{ui:Restablecer este hueso}} y {{ui:Restablecer la pose}} devuelven los huesos al reposo.

**Pintar pesos** ({{key:W}}) para el hueso elegido: la malla se muestra en reposo, cada cara coloreada según cuánto la sostiene ese hueso: rojo todo, azul nada. Pinte para agregar influencia ({{key:Mod}} la quita, {{key:Shift}} suaviza); {{ui:Tamaño (px)}} e {{ui:Intensidad}} definen el pincel. Con {{ui:Mantener la suma de pesos de cada punto en 1}} activada, dar más peso a un hueso quita la misma cantidad a los demás. Cada trazo es un paso del deshacer del modelo.

{{ui:Piel}} elige cómo se mueve un punto entre huesos: {{ui:Lineal (rápida)}} mezcla los movimientos de los huesos y pellizca un poco una articulación doblada; {{ui:Cuaternión dual (conserva el volumen en las articulaciones)}} gira el punto alrededor de la articulación, así un codo o una rodilla conserva su grosor (el {{ui:Tamaño}} de un hueso no estira entonces la piel).

:::note
Primero van las formas clave, luego el esqueleto y después los [modificadores](topic:modifiers). La vista, las imágenes y los videos muestran la malla posicionada; los pesos de una malla se guardan con ella, y los huesos y su pose se guardan con la animación.
:::

## Cinemática inversa y restricciones

Una **restricción** mueve un hueso o un objeto después de sus claves, según una regla. Elija el objeto (o, en un esqueleto, el hueso) y agregue una en {{ui:Restricciones de …}}; varias se ejecutan en el orden en que aparecen (las flechas cambian ese orden), y cada una tiene {{ui:Cuánto}} (de 0 a 1, con clave mediante su rombo como cualquier propiedad) y un interruptor de encendido y apagado.

| Restricción | Para | Qué hace |
|---|---|---|
| {{ui:Alcanzar (IK)}} | Huesos | El hueso y los huesos de los que cuelga ({{ui:Huesos en la cadena}}) se doblan para que su punta alcance el objetivo. Con dos huesos y un {{ui:Polo (la flexión apunta a él)}}, el codo o la rodilla apunta hacia el polo; las cadenas más largas se doblan suavemente. Si está fuera de alcance, la cadena apunta en línea recta al objetivo. |
| {{ui:Mirar a}} | Ambos | Gira para que el {{ui:Eje que apunta}} mire al objetivo, manteniendo el {{ui:Eje que se mantiene arriba}} lo más cerca posible de arriba. |
| {{ui:Copiar transformaciones}} | Ambos | Toma la posición, el giro o el tamaño del objetivo, los que estén marcados. |
| {{ui:Límites}} | Ambos | Mantiene su propia posición, giro (grados) o tamaño entre un {{ui:mín}} y un {{ui:máx}} por eje; deje un par vacío para que ese eje quede libre. |
| {{ui:Hijo de}} | Ambos | Se mueve con el objetivo como si colgara de él, desde donde estaban ambos cuando eligió el objetivo. |
| {{ui:Seguir trayectoria}} | Objetos | Se sitúa sobre un [objeto curva](topic:curves) en {{ui:A lo largo de la curva}} (0 su inicio, 1 su final; cree claves para que se desplace) y, con {{ui:Girar a lo largo de la curva}}, mira en la dirección de la curva. |

El objetivo puede ser otro objeto del grupo abierto, un hueso del mismo esqueleto o {{ui:Un punto}} que escriba (el punto de un objeto está en las coordenadas del modelo, y el de un hueso en las de su malla). Para una pierna con IK, coloque el objetivo donde debe estar el pie y cree una clave del objetivo, o cree una clave de {{ui:Cuánto}} para repartir el control de la pierna entre la clave y la IK.

:::tip
Un objeto que mira a otro que sigue una trayectoria lo ve sobre la trayectoria: ModelCraft calcula primero los objetivos, sin importar el orden de los objetos.
:::

## Física: caer, apilar y chocar

Deje que los objetos caigan y choquen entre sí, y luego conserve el resultado como claves.

1. Elija un grupo, componente o malla y defina su {{ui:Cuerpo rígido}} en {{ui:Física}}: {{ui:Cae y choca}} (se mueve) o {{ui:Se queda quieto, estorba}} (una mesa, una pared, una rampa). A un objeto que cae asígnele su {{ui:Forma}}: {{ui:Caja (sus límites)}} o {{ui:Bola (alrededor de sus límites)}}; su {{ui:Masa (kg)}}, su {{ui:Fricción}} y su {{ui:Rebote}} (0: golpe seco; 1: rebota hasta la misma altura).
2. En {{ui:Todo el modelo}}, defina {{ui:Desde (s)}} y {{ui:Hasta (s)}}, la {{ui:Gravedad (m/s², hacia abajo)}} y si hay {{ui:Un suelo donde caer}} (y su altura).
3. Haga clic en {{ui:Hornear física}} (en el panel o en el grupo {{ui:Física}}). Cada objeto que cae recibe una clave de posición, giro y tamaño en cada cuadro entre los dos tiempos; reprodúzcalo como cualquier animación.

Volver a hornear reemplaza esas claves; {{ui:Quitar claves horneadas}} las elimina. Los objetos empiezan en reposo, donde sus claves, curvas y restricciones los colocan en {{ui:Desde (s)}} (un movimiento con clave antes de ese momento no continúa en la caída). Más {{ui:Pasos por cuadro}} mantiene más estables las pilas altas; la barra de estado indica cuándo algo sigue moviéndose al final.

:::note
Las formas son cajas y bolas alrededor de los límites de cada objeto; una caja toca con sus esquinas, los puntos medios de sus aristas y los centros de sus caras, así que las cajas se apilan y vuelcan como cabría esperar. Telas, fluidos, articulaciones entre objetos y formas exactas no están construidos.
:::

## Controladores

Un **controlador** fija una forma clave a partir de otras cosas en lugar de hacerlo a mano: abra el controlador de una clave (el botón de calculadora), escriba una **expresión** y dé a cada nombre que aparece en ella lo que lee ({{ui:Lee}}): el tiempo en segundos, el cuadro, la posición de una colocación, su giro o tamaño a lo largo de X, Y o Z, el brillo de una lámpara u otra forma clave. Por ejemplo, si `v` lee el giro de una puerta alrededor de Z, `clamp(v / 90, 0, 1)` abre una forma a medida que la puerta se abre.

Las expresiones usan números, los nombres, `+ - * / % ^` y paréntesis, y las funciones `sin cos tan asin acos atan atan2 abs sqrt exp log floor ceil round sign pow min max clamp lerp smoothstep rad deg` con `pi` y `e`. Un error se señala y no cambia nada. El control deslizante de una clave controlada muestra el valor del controlador; el controlador prevalece sobre la pista de la clave hasta que lo quite.

## Elegir y cambiar claves (vista Claves)

{{ui:Claves}} muestra una fila por pista: la cámara, cada grupo en movimiento y cada propiedad ("Lámpara 2 · Brillo (lm)"; las claves de propiedad son redondas).

- Haga clic en una clave para elegirla; con clic de {{key:Shift}} o de {{key:Mod}} agrega o quita claves de la selección. Arrastre con {{key:Shift}} sobre las filas para dibujar un recuadro que agrega todas las claves que contiene.
- Arrastre una clave elegida para desplazarlas todas; {{key:Left}} / {{key:Right}} las desplazan un cuadro ({{key:Shift}}: diez).
- {{key:Mod+C}} copia las claves elegidas, {{key:Mod+V}} las pega desde el cabezal de reproducción en las mismas pistas (otra pestaña de ModelCraft también puede pegarlas).
- {{ui:Estiramiento}} separa las claves elegidas desde el cabezal de reproducción según el número junto a él (2 = el doble de separación; 0.5 las acerca).
- La lista de interpolación define cómo avanza cada clave elegida.

## Dar forma a las curvas (vista Curvas)

{{ui:Curvas}} es una gráfica de cada número a lo largo del tiempo: el tiempo en horizontal y el valor en vertical. Marque las curvas que quiere mostrar en la lista de la izquierda (X, Y y Z son rojo, verde y azul).

- Haga clic en una clave (un cuadrado) para elegirla, con {{key:Shift}} para elegir más, o arrastre un recuadro. Arrastre una clave elegida para cambiar su tiempo y su valor; si hay varias elegidas, arrastrar las desplaza en el tiempo.
- Una clave elegida muestra sus dos **tiradores**. Arrastre uno para dar forma a la curva de ese lado. {{ui:Tiradores}} indica cómo se comportan: {{ui:Automáticos}} (una curva suave que pasa por las claves cercanas), {{ui:Hacia la clave siguiente}}, {{ui:Alineados}} (los dos quedan en línea recta, así la curva no tiene esquina) o {{ui:Libre}}.
- {{ui:Desde las claves elegidas}} define cómo cada clave elegida avanza hasta la siguiente: {{ui:Curva (tiradores)}}, {{ui:Suavizar}}, {{ui:Constante}}, {{ui:Entrada y salida lentas}} o {{ui:Mantener}}.
- {{ui:Antes}} y {{ui:Después}} definen lo que hace una curva fuera de sus claves: {{ui:Mantener}} (se queda en el primer o último valor), {{ui:Repetir}}, {{ui:Ida y vuelta}} o {{ui:Repetir y continuar}} (cada repetición empieza donde terminó la anterior: una rueda sigue rodando, un caminante sigue caminando).
- La rueda hace zoom ({{key:Mod}}: solo valores; {{key:Shift}}: solo tiempo); arrastre con el botón central o con {{key:Alt}} para encuadrar; {{ui:Ver todo}} o {{key:Home}} ajusta a la vista todas las curvas mostradas. Haga clic en un espacio vacío para mover el cabezal de reproducción allí. {{key:Delete}} borra las claves elegidas.

Los tiradores no se cruzan en el tiempo, así que una curva nunca va hacia atrás.

## Reutilizar animaciones (vista Clips)

Un **clip** reproduce una animación guardada (una **acción**) en la línea de tiempo. Los clips se mezclan en orden: las filas inferiores sobre las superiores; las pistas propias de la línea de tiempo van encima de todos los clips.

1. Cree claves de los grupos y lámparas como de costumbre, luego haga clic en {{ui:Hacer un clip}} en {{ui:Clips}} y dé un nombre a la acción. Las pistas se convierten en la acción y un clip la reproduce donde estaban (la cámara se queda en la línea de tiempo).
2. Para volver a usarla, elija la acción y haga clic en {{ui:Agregar clip}}: un clip nuevo empieza en el cabezal de reproducción.
3. Arrastre un clip a lo largo de su fila para moverlo; haga clic en él para definir {{ui:Inicio (s)}}, {{ui:Velocidad}} (2 = el doble de rápido), {{ui:Repeticiones}}, {{ui:Cuánto}} (de 0 a 1), {{ui:Mezcla}} ({{ui:Reemplazar}}, o {{ui:Sumar encima}} de los clips anteriores), {{ui:Fuera del clip}} (nada, mantener su final o mantener ambos extremos) y {{ui:Silenciar}}. Las flechas cambian el orden; el cesto lo elimina (una acción que ningún clip usa ya se elimina con él).

Un clip con un {{ui:Cuánto}} menor que el completo se mezcla con lo que hay debajo: el clip anterior, o la lámpara o colocación tal como está sin la animación.

## Qué se reproduce y dónde

| Qué | En la vista | En un video renderizado |
|---|---|---|
| Claves de cámara, ángulo de la lente con claves de cámara | Sí | Sí |
| Posición, giro y tamaño (claves, curvas, clips) | Sí | Sí |
| Brillo, apertura y color de lámparas | Sí | Todavía no: el video usa las lámparas tal como están al empezar (vea [lo que aún no está construido](topic:not-built-yet)) |
| Ángulo de la lente sin claves de cámara | Sí | Todavía no: cree también claves de la cámara |
| Formas clave y controladores | Sí | Sí |
| Esqueletos (mallas posicionadas) | Sí | Sí |
| Cinemática inversa y restricciones | Sí | Sí |
| Física horneada (claves) | Sí | Sí |

Todo se guarda en el archivo `.modelcraft` junto con el resto de la animación, y {{ui:Deshacer}} y {{ui:Rehacer}} de la línea de tiempo revierten cualquiera de estos cambios.
