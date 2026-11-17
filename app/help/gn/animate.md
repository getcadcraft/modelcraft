---
title: Animá cualquier propiedad, dale forma con curvas y mezclá clips
summary: El espacio {{ui:Animar}} marca el lugar, el giro y el tamaño de un objeto, el brillo, la abertura y el color de una lámpara, el lente y las claves de forma de una malla; las armaduras doblan una malla con huesos y pesos pintados; IK y restricciones hacen que los huesos y objetos alcancen, miren, copien, se mantengan dentro de límites, cuelguen o sigan a otros; los cuerpos rígidos caen, se apilan y chocan y quedan guardados como claves; los conductores fijan un valor a partir de otros; la vista de curvas de la línea de tiempo da forma a cada cambio con manijas Bézier y ciclos, y su vista de clips guarda las animaciones como acciones que podés colocar de nuevo y mezclar.
keywords: física, cuerpo rígido, cuerpos rígidos, simulación, simular, caer, caída, gravedad, colisión, colisionar, apilar, rebote, fricción, calcular, calculado, ik, cinemática inversa, restricción, restricciones, mirar hacia, apuntar, copiar transformaciones, copiar posición, copiar rotación, límites, hijo de, padre, seguir trayectoria, trayectoria, polo, fabrik, cadena, armadura, armaduras, rig, rigging, huesos, hueso, esqueleto, piel, skinning, pesos, pintar pesos, grupos de vértices, pesos automáticos, pose, modo pose, cuaternión dual, mezcla lineal, claves de forma, clave de forma, morph, morfos, formas mezcladas, facial, expresión, conductor, conductores, expresiones, espacio animar, animar, animación, fotograma clave, clave, claves, propiedad, propiedades, transformación, posición, rotación, escala, lámpara, luz, brillo, color, lente, campo de visión, fov, editor de gráficos, curvas, curva, bezier, manijas, tangente, interpolación, ciclo, ciclos, repetir, bucle, ida y vuelta, desfase, hoja de claves, seleccionar claves, selección por caja, copiar claves, pegar claves, estirar claves, escalar claves, clips, acciones, nla, mezcla, mezclar, influencia, guardar
from: 16d8e12f
---

La [línea de tiempo](topic:animation) mueve la cámara y los grupos y componentes completos. El espacio **{{ui:Animar}}** marca más que eso, y la línea de tiempo tiene dos vistas más para dar forma y volver a usar lo que marcaste.

## Abrilo

Eiporavo {{ui:Animar}} en la lista de espacios de trabajo de la barra de herramientas. La línea de tiempo se abre debajo de la vista, la barra de herramientas muestra los grupos de Animar ({{ui:Claves}}, {{ui:Reproducir}}, {{ui:Línea de tiempo}}) y el panel de la derecha lista lo que podés marcar en el cabezal de reproducción.

## Marcar una propiedad

El panel lista, en el cabezal de reproducción:

- **Objeto elegido**: su {{ui:Oñemoĩ}}, {{ui:Giro (°)}} y {{ui:Tamaño}}, tres números cada uno. Escribí un número y apretá {{key:Enter}}: se marca en el cabezal y el objeto se mueve hasta allí. El rombo al lado de una fila marca el valor tal como está ahora; un rombo lleno quiere decir que ya hay una clave en el cabezal.
- **Lámparas**: el {{ui:Brillo (lm)}} de cada lámpara, la {{ui:Abertura (°)}} (lámparas de foco) y el {{ui:Color}}.
- **Cámara**: el {{ui:Ángulo del lente (°)}}, para un zoom mientras la cámara se mueve.

{{ui:Clave de transformación}} (o {{key:I}}) marca el lugar, el giro y el tamaño de todos los grupos o componentes elegidos a la vez; {{ui:Clave de cámara}} (o {{key:K}}) marca la cámara. Con {{ui:Clave automática}} activada, un grupo cuyo lugar, giro y tamaño están marcados de esta forma recibe una clave nueva cada vez que lo movés.

Los giros son tres ángulos, alrededor de X, después Y, después Z. Un giro marcado de más de 180° sigue en la misma dirección (190° queda 190°, no −170°), así una rueda puede girar varias veces.

:::tip
Un grupo marcado con {{ui:Clave seleccionada}} en la línea de tiempo tiene claves de ubicación completa. El botón de curva de su fila las convierte en curvas de lugar, giro y tamaño (la misma ubicación en cada clave) para que las des forma en {{ui:Curvas}}.
:::

## Claves de forma (morfos)

Una **clave de forma** es otra forma de la misma [malla](topic:meshes): una sonrisa en una cara, la panza de una puerta, una hoja doblada. Su deslizador mezcla desde la malla tal como está (0) hasta esa forma (1); varias claves se suman.

1. Elegí una malla en el espacio Animar: el panel muestra sus {{ui:Claves de forma}}.
2. Hacé clic en {{ui:Agregar clave de forma}}. ModelCraft pasa al [espacio Malla](topic:mesh-edit) con la clave nueva en edición: movés puntos, extruís, esculpís; cambiá la malla a la forma que querés.
3. Volvé a {{ui:Animar}} y hacé clic en {{ui:Listo}}. La malla vuelve como estaba, y la clave guarda tu cambio.

Después arrastrá el deslizador de la clave (o escribí un valor) para mezclarla. El rombo marca el valor en el cabezal, así una clave puede crecer y desvanecerse con el tiempo; una vez que tiene una pista, un valor nuevo se marca en el cabezal. El lápiz edita la forma de la clave otra vez (la malla la muestra completa hasta {{ui:Listo}}; {{ui:Cancelar}} deja la clave como estaba), el ojo apaga la clave, el tacho la elimina.

Un vértice que agregás mientras editás una clave pertenece a la malla misma: queda donde lo pusiste, en todas las formas.

:::note
Las claves de forma mueven la malla antes de sus [modificadores](topic:modifiers): un modificador de Subdivisión suaviza la forma mezclada. Las imágenes y videos renderizados muestran las claves en cada cuadro.
:::

## Armaduras: huesos que doblan una malla

Una **armadura** es un conjunto de huesos dentro de una [malla](topic:meshes). Posá los huesos y la malla los sigue, cada punto según lo que digan sus **pesos**.

1. Elegí la malla en el espacio Animar y hacé clic en {{ui:Agregar una armadura}} en el panel (o {{ui:Agregar hueso}} en el grupo {{ui:Armadura}}): el primer hueso sube por el medio de la malla desde su pie.
2. Con un hueso elegido, {{ui:Agregar un hueso hijo}} agrega el siguiente desde su punta. Ajustá en el panel el {{ui:Cabezal}}, la {{ui:Punta}}, el {{ui:Rodamiento (°)}} y de qué {{ui:Cuelga de}} cada hueso; un hueso que cuelga de otro se mueve con él. Desmarcá {{ui:Mueve la malla}} para un hueso que solo dirige a otros.
3. Hacé clic en {{ui:Pesos automáticos}}: cada hueso toma los puntos más cercanos a él, y el agarre se reparte suavemente por la malla, así que los puntos entre dos huesos los comparten. {{ui:Solo los huesos más cercanos}} es una división más rápida y más dura.

**Posá** los huesos con {{ui:Pose}} ({{key:P}}): hacé clic en un hueso para elegirlo, arrastrá para girarlo alrededor del eje de la vista, {{key:Shift}} + arrastrar para moverlo. O escribí su {{ui:Oñemoĩ}}, {{ui:Giro (°)}} y {{ui:Tamaño}} debajo de {{ui:Pose}}; los giros son en los ejes propios del hueso, desde donde descansa. Los rombos y {{ui:Marcar toda la pose}} marcan la pose en el cabezal; una vez que un hueso tiene claves, posarlo lo marca ahí. {{ui:Restablecer este hueso}} y {{ui:Restablecer la pose}} devuelven los huesos al reposo.

**Pintar pesos** ({{key:W}}) para el hueso elegido: la malla se muestra en reposo, cada cara coloreada según cuánto la sostiene ese hueso: rojo todo, azul nada. Pintá para agregar agarre ({{key:Mod}} lo quita, {{key:Shift}} suaviza); {{ui:Tamaño (px)}} e {{ui:Intensidad}} fijan el pincel. Con {{ui:Mantener la suma de los pesos de cada punto igual a 1}} activado, darle más a un hueso quita lo mismo a los otros. Cada trazo es un paso de deshacer del modelo.

{{ui:Piel}} elige cómo se mueve un punto entre huesos: {{ui:Lineal (rápido)}} mezcla los movimientos de los huesos y aprieta un poco una articulación doblada; {{ui:Cuaternión dual (mantiene el volumen en las articulaciones)}} gira el punto alrededor de la articulación, así un codo o una rodilla mantiene su grosor (el {{ui:Tamaño}} de un hueso entonces no estira la piel).

:::note
Primero van las claves de forma, después la armadura, después los [modificadores](topic:modifiers). La vista, las imágenes y los videos muestran todos la malla posada; los pesos de una malla se guardan con ella, y los huesos y su pose con la animación.
:::

## IK y restricciones

Una **restricción** mueve un hueso o un objeto después de sus claves, según una regla. Elegí el objeto (o, en una armadura, el hueso) y agregá una en {{ui:Restricciones de …}}; varias corren en el orden de la lista (las flechas lo cambian), y cada una tiene {{ui:Cuánto}} (0 a 1, marcado con su rombo como cualquier propiedad) y un interruptor de encendido y apagado.

| Restricción | Para | Qué hace |
|---|---|---|
| {{ui:Alcance (IK)}} | Huesos | El hueso y los huesos de los que cuelga ({{ui:Huesos de la cadena}}) se doblan para que su punta llegue al objetivo. Con dos huesos y un {{ui:Polo (la curva apunta hacia él)}}, el codo o la rodilla apunta hacia el polo; las cadenas más largas se doblan suavemente. Fuera de alcance, la cadena apunta derecho al objetivo. |
| {{ui:Mirar hacia}} | Ambos | Gira para que el {{ui:Eje que apunta}} mire al objetivo, manteniendo el {{ui:Eje que se mantiene arriba}} lo más cerca de arriba que pueda. |
| {{ui:Copiar transformaciones}} | Ambos | Toma el lugar, el giro o el tamaño del objetivo, los que estén marcados. |
| {{ui:Límites}} | Ambos | Mantiene su propio lugar, giro (grados) o tamaño entre un {{ui:mín}} y un {{ui:máx}} por eje; dejá vacío un par para dejar libre ese eje. |
| {{ui:Hijo de}} | Ambos | Se mueve con el objetivo como si colgara de él, desde donde estaban los dos cuando elegiste el objetivo. |
| {{ui:Seguir trayectoria}} | Objetos | Se ubica sobre un [objeto curva](topic:curves) en {{ui:A lo largo de la curva}} (0 su inicio, 1 su fin; marcalo para que viaje), y con {{ui:Girar a lo largo de la curva}} mira en la dirección de la curva. |

Un objetivo es otro objeto del grupo abierto, un hueso de la misma armadura, o un {{ui:Un punto}} que escribas (el punto de un objeto está en las coordenadas del modelo, el de un hueso en las de su malla). Para una pierna IK, poné el objetivo donde debe estar el pie y marcá el objetivo, o marcá {{ui:Cuánto}} para pasar la pierna entre las claves y la IK.

:::tip
Un objeto que mira a otro que sigue una trayectoria lo ve sobre la trayectoria: ModelCraft calcula primero los objetivos, sin importar el orden de los objetos.
:::

## Física: caer, apilar y chocar

Dejá que los objetos caigan y choquen entre sí, y después guardá el resultado como claves.

1. Elegí un grupo, componente o malla y fijá su {{ui:Cuerpo rígido}} en {{ui:Física}}: {{ui:Cae y choca}} (se mueve) o {{ui:Queda fijo, estorba}} (una mesa, un muro, una rampa). A uno que cae dale su {{ui:Forma}} — {{ui:Caja (sus límites)}} o {{ui:Esfera (redonda según sus límites)}} —, su {{ui:Masa (kg)}}, {{ui:Fricción}} y {{ui:Rebote}} (0 golpea sin rebotar, 1 rebota hasta la misma altura).
2. En {{ui:Todo el modelo}}, fijá {{ui:Desde (s)}} y {{ui:Hasta (s)}}, la {{ui:Gravedad (m/s², hacia abajo)}} y si hay {{ui:Un suelo donde apoyarse}} (y su altura).
3. Hacé clic en {{ui:Calcular física}} (en el panel o en el grupo {{ui:Física}}). Cada objeto que cae recibe una clave de lugar, giro y tamaño en cada cuadro entre los dos tiempos; reproducila como cualquier animación.

Calcular de nuevo reemplaza esas claves; {{ui:Eliminar las marcas calculadas}} las quita. Los objetos empiezan en reposo, donde sus claves, curvas y restricciones los ponen en {{ui:Desde (s)}} (un movimiento marcado antes de ese momento no sigue durante la caída). Más {{ui:Pasos por cuadro}} mantiene más estables las pilas altas; la barra de estado avisa si algo sigue moviéndose al final.

:::note
Las formas son cajas y esferas alrededor de los límites de cada objeto; una caja toca con sus esquinas, con el medio de sus aristas y con el medio de sus caras, así las cajas se apilan y se vuelcan como se espera. No están hechos la tela, los fluidos, las articulaciones entre objetos ni las formas exactas.
:::

## Conductores

Un **conductor** fija una clave de forma a partir de otras cosas en vez de a mano: abrí el conductor de una clave (el botón de calculadora), escribí una **expresión** y dale a cada nombre lo que lee ({{ui:Lee}}): el tiempo en segundos, el cuadro, el lugar, el giro o el tamaño de una ubicación a lo largo de X, Y o Z, el brillo de una lámpara, u otra clave de forma. Por ejemplo, con `v` leyendo el giro de una puerta alrededor de Z, `clamp(v / 90, 0, 1)` abre una forma a medida que la puerta se abre.

Las expresiones usan números, los nombres, `+ - * / % ^` y paréntesis, y las funciones `sin cos tan asin acos atan atan2 abs sqrt exp log floor ceil round sign pow min max clamp lerp smoothstep rad deg` con `pi` y `e`. Un error se señala y no cambia nada. El deslizador de una clave conducida muestra el valor del conductor; el conductor gana a la pista de la clave hasta que lo quitás.

## Elegir y cambiar claves (vista Claves)

{{ui:Claves}} muestra una fila por pista: la cámara, cada grupo que se mueve y cada propiedad («Lámpara 2 · Brillo (lm)»; las claves de propiedad son redondas).

- Hacé clic en una clave para elegirla; {{key:Shift}} + clic o {{key:Mod}} + clic agrega o quita claves de la selección. {{key:Shift}} + arrastrar sobre las filas dibuja una caja que agrega todas las claves que tiene.
- Arrastrá una clave elegida para moverlas todas; {{key:Left}} / {{key:Right}} las mueven un cuadro ({{key:Shift}}: diez).
- {{key:Mod+C}} copia las claves elegidas, {{key:Mod+V}} las pega desde el cabezal en las mismas pistas (otra pestaña de ModelCraft también puede pegarlas).
- {{ui:Estiramiento}} separa las claves elegidas desde el cabezal según el número al lado (2 = dos veces más separadas; 0.5 las junta).
- La lista de suavizado fija cómo se mueve cada clave elegida hacia la siguiente.

## Dar forma a las curvas (vista Curvas)

{{ui:Curvas}} es un gráfico de cada número a lo largo del tiempo: tiempo en horizontal, valor hacia arriba. Marcá las curvas que querés ver en la lista de la izquierda (X, Y y Z son rojo, verde y azul).

- Hacé clic en una clave (un cuadrado) para elegirla, {{key:Shift}} + clic para más, o arrastrá una caja. Arrastrá una clave elegida para cambiar su tiempo y su valor; con varias elegidas, arrastrar las mueve juntas en el tiempo.
- Una clave elegida muestra sus dos **manijas**. Arrastrá una para dar forma a la curva de ese lado. {{ui:Manijas}} dice cómo se comportan: {{ui:Automática}} (una curva suave que pasa por las claves de alrededor), {{ui:Apuntando a la clave siguiente}}, {{ui:Alineadas}} (las dos quedan en línea recta, así la curva no tiene esquina) o {{ui:Libre}}.
- {{ui:Desde las claves elegidas}} fija cómo cada clave elegida pasa a la siguiente: {{ui:Curva (manijas)}}, {{ui:Suavizar}}, {{ui:Constante}}, {{ui:Lento al inicio y al final}} o {{ui:Mantener}}.
- {{ui:Antes}} y {{ui:Después}} fijan qué hace una curva fuera de sus claves: {{ui:Mantener}} (queda en el primer o último valor), {{ui:Repetir}}, {{ui:Ida y vuelta}}, o {{ui:Repetir y seguir}} (cada repetición empieza donde terminó la anterior: una rueda sigue rodando, un caminante sigue caminando).
- La rueda hace zoom ({{key:Mod}}: solo valores; {{key:Shift}}: solo tiempo); arrastrá con el botón del medio o con {{key:Alt}} para desplazarte; {{ui:Mostrar todo}} o {{key:Home}} ajusta todas las curvas mostradas. Hacé clic en un espacio vacío para mover el cabezal hasta allí. {{key:Delete}} borra las claves elegidas.

Las manijas no se cruzan entre sí en el tiempo, así una curva nunca va hacia atrás.

## Reutilizar animaciones (vista Clips)

Un **clip** reproduce una animación guardada (una **acción**) en la línea de tiempo. Los clips se mezclan en orden, las filas de abajo sobre las de arriba; las pistas propias de la línea de tiempo van encima de todos los clips.

1. Marcá los grupos y lámparas como de costumbre, después hacé clic en {{ui:Hacer un clip}} en {{ui:Clips}} y ponele un nombre a la acción. Las pistas se vuelven la acción, y un clip la reproduce donde estaban (la cámara queda en la línea de tiempo).
2. Para volver a usarla, elegí la acción y hacé clic en {{ui:Agregar clip}}: un clip nuevo empieza en el cabezal.
3. Arrastrá un clip a lo largo de su fila para moverlo; hacé clic en él para fijar {{ui:Inicio (s)}}, {{ui:Velocidad}} (2 = el doble de rápido), {{ui:Repeticiones}}, {{ui:Cuánto}} (0 a 1), {{ui:Mezcla}} ({{ui:Reemplazar}}, o {{ui:Sumar encima}} de los clips anteriores), {{ui:Fuera del clip}} (nada, mantener su final, o mantener ambos extremos) y {{ui:Silenciar}}. Las flechas cambian el orden; el tacho lo quita (una acción que ningún clip usa se va con él).

Un clip con menos del {{ui:Cuánto}} completo se mezcla con lo que hay debajo: el clip anterior, o la lámpara o la ubicación tal como están sin la animación.

## Qué se reproduce dónde

| Qué | En la vista | En un video renderizado |
|---|---|---|
| Claves de cámara, ángulo del lente con claves de cámara | Sí | Sí |
| Lugar, giro y tamaño (claves, curvas, clips) | Sí | Sí |
| Brillo, abertura y color de lámparas | Sí | Todavía no: el video usa las lámparas como están al empezar (ver [lo que todavía no está hecho](topic:not-built-yet)) |
| Ángulo del lente sin claves de cámara | Sí | Todavía no: marcá también la cámara |
| Claves de forma y conductores | Sí | Sí |
| Armaduras (mallas posadas) | Sí | Sí |
| IK y restricciones | Sí | Sí |
| Física calculada (claves) | Sí | Sí |

Todo se guarda en el archivo `.modelcraft` junto con el resto de la animación, y {{ui:Deshacer}} y {{ui:Rehacer}} de la línea de tiempo devuelven cualquiera de estos cambios.
