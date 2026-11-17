---
title: Animar cualquier propiedad, darle forma con curvas y mezclar clips
summary: El espacio de trabajo Animar pone claves en la posición, el giro y el tamaño de un objeto, en el brillo, la apertura y el color de una lámpara, en el objetivo y en las formas clave de una malla; los armazones doblan una malla con huesos y pesos pintados; la IK y las restricciones hacen que huesos y objetos alcancen, miren, copien, se mantengan dentro de límites, cuelguen o sigan a otros; los cuerpos rígidos caen, se apilan y chocan, y se hornean como claves; los controladores fijan un valor a partir de otros; la vista de curvas de la línea de tiempo da forma a cada cambio con tiradores Bézier y ciclos, y su vista de clips guarda las animaciones como acciones que se vuelven a colocar y mezclar.
keywords: física, cuerpo rígido, cuerpos rígidos, simulación, simular, soltar, caer, gravedad, colisionar, colisión, apilar, rebote, rozamiento, hornear, horneado, ik, cinemática inversa, restricción, restricciones, mirar a, seguir objetivo, apuntar, copiar transformaciones, copiar posición, copiar rotación, limitar rotación, límites, hijo de, padre, seguir trayectoria, trayectoria, polo, fabrik, cadena, armazón, armazones, esqueleto, rigging, huesos, hueso, piel, recubrimiento, pesos, pintar pesos, grupos de vértices, pesos automáticos, pose, modo pose, cuaternión dual, mezcla lineal, formas clave, forma clave, morph, morphs, objetivos de morph, formas de mezcla, facial, expresión, controlador, controladores, expresiones, espacio de trabajo animar, animar, animación, clave, claves, propiedad, propiedades, transformación, posición, rotación, escala, lámpara, luz, brillo, color, objetivo, campo de visión, fov, editor de gráficos, curvas, curva, bezier, tiradores, tangente, interpolación, ciclo, ciclos, repetir, bucle, ida y vuelta, desfase, hoja de exposición, seleccionar claves, selección por recuadro, copiar claves, pegar claves, estirar claves, escalar claves, clips, acciones, nla, mezcla, mezclar, influencia, guardar
from: 16d8e12f
---

La [línea de tiempo](topic:animation) mueve la cámara y los grupos y componentes completos. El espacio de trabajo **Animar** pone claves en más cosas, y la línea de tiempo tiene dos vistas más para dar forma y reutilizar lo que ha puesto en clave.

## Abrirlo

Elija {{ui:Animar}} en la lista de espacios de trabajo de la barra de herramientas. La línea de tiempo se abre bajo la vista, la barra muestra los grupos de animación ({{ui:Claves}}, {{ui:Reproducir}}, {{ui:Línea de tiempo}}) y el panel de la derecha enumera lo que puede poner en clave en el cabezal de reproducción.

## Poner en clave una propiedad

El panel enumera, en el cabezal de reproducción:

- **Objeto elegido**: su {{ui:Colocar}}, su {{ui:Giro (°)}} y su {{ui:Tamaño}}, tres números cada uno. Escriba un número y pulse {{key:Enter}}: queda en clave en el cabezal de reproducción y el objeto se mueve hasta allí. El rombo junto a una fila pone en clave el valor tal como está ahora; un rombo relleno indica que ya hay una clave en el cabezal de reproducción.
- **Lámparas**: el {{ui:Brillo (lm)}}, la {{ui:Apertura (°)}} (lámparas de foco) y el {{ui:Color}} de cada lámpara.
- **Cámara**: el {{ui:Ángulo del objetivo (°)}}, para hacer zoom mientras la cámara se mueve.

{{ui:Clave de transformación}} (o {{key:I}}) pone en clave a la vez la posición, el giro y el tamaño de cada grupo o componente elegido; {{ui:Clave de cámara}} (o {{key:K}}) pone en clave la cámara. Con {{ui:Clave automática}} activada, un grupo cuya posición, giro y tamaño se han puesto en clave de este modo recibe una nueva clave cada vez que lo mueve.

Los giros son tres ángulos, alrededor de X, luego Y y luego Z. Un giro en clave por encima de 180° sigue en el mismo sentido (190° se mantiene en 190°, no pasa a −170°), de modo que una rueda puede girar varias veces.

:::tip
Un grupo en clave con {{ui:Clave de la selección}} en la línea de tiempo tiene claves de colocación completa. El botón de curva de su fila las convierte en curvas de posición, giro y tamaño (la misma colocación en cada clave) para que pueda darles forma en {{ui:Curvas}}.
:::

## Formas clave (morphs)

Una **forma clave** es otra forma de la misma [malla](topic:meshes): una sonrisa en una cara, el abombamiento de una puerta, una hoja doblada. Su deslizador mezcla la malla tal como está (0) con esa forma (1); varias claves se suman.

1. Elija una malla en el espacio de trabajo Animar: el panel muestra sus {{ui:Formas clave}}.
2. Haga clic en {{ui:Añadir forma clave}}. ModelCraft pasa al [espacio de trabajo de malla](topic:mesh-edit) con la nueva clave en edición: desplace puntos, extruya, esculpa; convierta la malla en la forma que desee.
3. Vuelva a {{ui:Animar}} y haga clic en {{ui:Listo}}. La malla vuelve a su estado anterior, y la clave conserva su cambio.

Después, arrastre el deslizador de la clave (o escriba un valor) para mezclarla. El rombo pone en clave el valor en el cabezal de reproducción, así que una clave puede aumentar y desvanecerse con el tiempo; una vez que tiene una pista, un nuevo valor se pone en clave en el cabezal de reproducción. El lápiz vuelve a editar la forma de la clave (la malla la muestra completa hasta {{ui:Listo}}; {{ui:Cancelar}} deja la clave como estaba), el ojo desactiva la clave y el cubo la elimina.

Un vértice que añada mientras edita una clave pertenece a la propia malla: se queda donde lo puso, en todas las formas.

:::note
Las formas clave mueven la malla antes de sus [modificadores](topic:modifiers): un modificador de subdivisión suaviza la forma mezclada. Las imágenes y los vídeos renderizados muestran las claves en cada fotograma.
:::

## Armazones: huesos que doblan una malla

Un **armazón** es un conjunto de huesos dentro de una [malla](topic:meshes). Coloque los huesos en pose y la malla los sigue, cada punto según indiquen sus **pesos**.

1. Elija la malla en el espacio de trabajo Animar y haga clic en {{ui:Añadir un armazón}} en el panel (o en {{ui:Añadir hueso}} del grupo {{ui:Esqueleto}}): el primer hueso recorre el centro de la malla desde su base.
2. Con un hueso elegido, {{ui:Añadir un hueso hijo}} añade el siguiente desde su punta. Defina en el panel el {{ui:Cabeza}}, la {{ui:Punta}}, la {{ui:Torsión (°)}} de cualquier hueso y de qué {{ui:Cuelga de}} cuelga; un hueso que cuelga de otro se mueve con él. Desmarque {{ui:Mueve la malla}} para un hueso que solo dirige a otros.
3. Haga clic en {{ui:Pesos automáticos}}: cada hueso toma los puntos más cercanos a él, y la influencia se reparte suavemente por la malla, de modo que los puntos entre dos huesos los comparten. {{ui:Solo los huesos más cercanos}} es un reparto más rápido y más duro.

**Coloque en pose** los huesos con {{ui:Pose}} ({{key:P}}): haga clic en un hueso para elegirlo, arrastre para girarlo alrededor del eje de la vista, o arrastre con {{key:Shift}} para desplazarlo. También puede escribir su {{ui:Colocar}}, su {{ui:Giro (°)}} y su {{ui:Tamaño}} bajo {{ui:Pose}}; los giros se expresan en los ejes propios del hueso, desde donde reposa. Los rombos y {{ui:Crear clave de toda la pose}} ponen la pose en clave en el cabezal de reproducción; una vez que un hueso tiene claves, colocarlo en pose lo pone en clave allí. {{ui:Restablecer este hueso}} y {{ui:Restablecer la pose}} devuelven los huesos a reposo.

**Pintar pesos** ({{key:W}}) para el hueso elegido: la malla se muestra en reposo, cada cara coloreada según cuánto la sujeta ese hueso: rojo todo, azul nada. Pinte para añadir influencia ({{key:Mod}} la quita, {{key:Shift}} suaviza); {{ui:Tamaño (px)}} e {{ui:Intensidad}} definen el pincel. Con {{ui:Mantener los pesos de cada punto sumando 1}} activado, dar más peso a un hueso quita lo mismo a los demás. Cada trazo es un paso de deshacer del modelo.

{{ui:Piel}} elige cómo se mueve un punto entre huesos: {{ui:Lineal (rápido)}} mezcla los movimientos de los huesos y pellizca un poco una articulación doblada; {{ui:Cuaternión dual (conserva el volumen en las articulaciones)}} gira el punto alrededor de la articulación, así que un codo o una rodilla conserva su grosor (el {{ui:Tamaño}} de un hueso no estira entonces la piel).

:::note
Las formas clave van primero, luego el armazón y después los [modificadores](topic:modifiers). La vista, las imágenes y los vídeos muestran todos la malla en pose; los pesos de una malla se guardan con ella, y los huesos y su pose, con la animación.
:::

## IK y restricciones

Una **restricción** mueve un hueso o un objeto después de sus claves, según una regla. Elija el objeto (o, en un armazón, el hueso) y añada una en {{ui:Restricciones de …}}; varias se ejecutan en el orden en que aparecen (las flechas lo cambian), y cada una tiene {{ui:Cuánto}} (de 0 a 1, puesto en clave con su rombo como cualquier propiedad) y un interruptor de encendido y apagado.

| Restricción | Para | Qué hace |
|---|---|---|
| {{ui:Alcanzar (IK)}} | Huesos | El hueso y los huesos de los que cuelga ({{ui:Huesos de la cadena}}) se doblan para que su punta alcance el objetivo. Con dos huesos y un {{ui:Polo (el doblez apunta hacia él)}}, el codo o la rodilla apunta hacia el polo; las cadenas más largas se doblan suavemente. Fuera de alcance, la cadena apunta directamente al objetivo. |
| {{ui:Mirar a}} | Ambos | Gira para que el {{ui:Eje que apunta}} mire al objetivo, manteniendo el {{ui:Eje que se mantiene arriba}} lo más cerca posible de la vertical. |
| {{ui:Copiar transformaciones}} | Ambos | Toma la posición, el giro o el tamaño del objetivo, los que estén marcados. |
| {{ui:Límites}} | Ambos | Mantiene su propia posición, giro (grados) o tamaño entre un {{ui:mín.}} y un {{ui:máx.}} por eje; deje vacío un par para dejar libre ese eje. |
| {{ui:Hijo de}} | Ambos | Se mueve con el objetivo como si colgara de él, desde donde estaban ambos cuando eligió el objetivo. |
| {{ui:Seguir trayectoria}} | Objetos | Se sitúa sobre un [objeto de curva](topic:curves) en {{ui:A lo largo de la curva}} (0 su inicio, 1 su final; póngalo en clave para que recorra la trayectoria), y con {{ui:Girar a lo largo de la curva}} mira en su dirección. |

Un objetivo puede ser otro objeto del grupo abierto, un hueso del mismo armazón, o {{ui:Un punto}} que escriba (el punto de un objeto está en las coordenadas del modelo, y el de un hueso en las de su malla). Para una pierna con IK, coloque el objetivo donde debe estar el pie y ponga el objetivo en clave, o ponga en clave {{ui:Cuánto}} para pasar la pierna entre las claves y la IK.

:::tip
Un objeto que mira a otro que sigue una trayectoria lo ve sobre la trayectoria: ModelCraft calcula primero los objetivos, sea cual sea el orden de los objetos.
:::

## Física: caer, apilar y chocar

Deje que los objetos caigan y choquen entre sí, y luego conserve el resultado como claves.

1. Elija un grupo, componente o malla y defina su {{ui:Cuerpo rígido}} en {{ui:Física}}: {{ui:Cae y choca}} (se mueve) o {{ui:Se queda quieto, estorba}} (una mesa, una pared, una rampa). Dé a uno que caiga su {{ui:Forma}}, que es {{ui:Caja (sus límites)}} o {{ui:Bola (redonda dentro de sus límites)}}, su {{ui:Masa (kg)}}, su {{ui:Rozamiento}} y su {{ui:Rebote}} (0 golpea sin rebotar, 1 rebota hasta la misma altura).
2. En {{ui:Todo el modelo}}, defina {{ui:Desde (s)}} y {{ui:Hasta (s)}}, la {{ui:Gravedad (m/s², hacia abajo)}} y si hay {{ui:Un suelo donde caer}} (y su altura).
3. Haga clic en {{ui:Hornear física}} (en el panel o en el grupo {{ui:Física}}). Cada objeto que cae recibe una clave de posición, giro y tamaño en cada fotograma entre los dos tiempos; reprodúzcalo como cualquier animación.

Hornear de nuevo sustituye esas claves; {{ui:Quitar claves horneadas}} las elimina. Los objetos empiezan en reposo, donde sus claves, curvas y restricciones los sitúan en {{ui:Desde (s)}} (un movimiento con clave anterior a ese momento no continúa durante la caída). Más {{ui:Pasos por fotograma}} mantiene más estables las pilas altas; la barra de estado indica cuándo algo sigue moviéndose al final.

:::note
Las formas son cajas y bolas alrededor de los límites de cada objeto; una caja toca con sus esquinas, los centros de sus aristas y los centros de sus caras, así que las cajas se apilan y vuelcan como cabría esperar. No se han creado telas, fluidos, articulaciones entre objetos ni formas exactas.
:::

## Controladores

Un **controlador** fija una forma clave a partir de otras cosas en lugar de hacerlo a mano: abra el controlador de una clave (el botón de calculadora), escriba una **expresión** y dé a cada nombre que aparece en ella lo que lee ({{ui:Lee}}): el tiempo en segundos, el fotograma, la posición, el giro o el tamaño de una colocación a lo largo de X, Y o Z, el brillo de una lámpara, u otra forma clave. Por ejemplo, con `v` leyendo el giro de una puerta alrededor de Z, `clamp(v / 90, 0, 1)` abre una forma a medida que se abre la puerta.

Las expresiones usan números, los nombres, `+ - * / % ^` y paréntesis, y las funciones `sin cos tan asin acos atan atan2 abs sqrt exp log floor ceil round sign pow min max clamp lerp smoothstep rad deg` con `pi` y `e`. Un error se señala y no cambia nada. El deslizador de una clave controlada muestra el valor del controlador; el controlador prevalece sobre la pista de la clave hasta que lo quite.

## Elegir y cambiar claves (vista de claves)

{{ui:Claves}} muestra una fila por pista: la cámara, cada grupo que se mueve y cada propiedad («Lámpara 2 · Brillo (lm)»; las claves de propiedad son redondas).

- Haga clic en una clave para elegirla; {{key:Shift}}+clic o {{key:Mod}}+clic añade o quita claves de la selección. Arrastre con {{key:Shift}} sobre las filas para dibujar un recuadro que añade todas las claves que contiene.
- Arrastre una clave elegida para mover todas; {{key:Left}} / {{key:Right}} las mueven un fotograma ({{key:Shift}}: diez).
- {{key:Mod+C}} copia las claves elegidas, {{key:Mod+V}} las pega desde el cabezal de reproducción en las mismas pistas (otra pestaña de ModelCraft también puede pegarlas).
- {{ui:Estiramiento}} separa las claves elegidas desde el cabezal de reproducción según el número que haya junto a él (2 = el doble de separación; 0.5 las junta).
- La lista de suavizado define cómo se mueve cada clave elegida.

## Dar forma a las curvas (vista de curvas)

{{ui:Curvas}} es un gráfico de cada número a lo largo del tiempo: tiempo en horizontal, valor en vertical. Marque las curvas que quiere mostrar en la lista de la izquierda (X, Y y Z son rojo, verde y azul).

- Haga clic en una clave (un cuadrado) para elegirla, {{key:Shift}}+clic para elegir más, o arrastre un recuadro. Arrastre una clave elegida para cambiar su tiempo y su valor; si hay varias elegidas, arrastrar las desplaza en el tiempo.
- Una clave elegida muestra sus dos **tiradores**. Arrastre uno para dar forma a la curva en ese lado. {{ui:Tiradores}} indica cómo se comportan: {{ui:Automático}} (una curva suave que pasa por las claves cercanas), {{ui:Apuntando a la clave siguiente}}, {{ui:Alineados}} (los dos permanecen en línea recta, así que la curva no tiene esquina) o {{ui:Libre}}.
- {{ui:Desde las claves elegidas}} define cómo pasa cada clave elegida a la siguiente: {{ui:Curva (tiradores)}}, {{ui:Suavizar}}, {{ui:Constante}}, {{ui:Entrada y salida lentas}} o {{ui:Mantener}}.
- {{ui:Antes}} y {{ui:Después}} definen qué hace una curva fuera de sus claves: {{ui:Mantener}} (se queda en el primer o último valor), {{ui:Repeticiones}}, {{ui:De ida y vuelta}}, o {{ui:Repetir y continuar}} (cada repetición empieza donde terminó la anterior: una rueda sigue rodando, un caminante sigue caminando).
- La rueda hace zoom ({{key:Mod}}: solo valores; {{key:Shift}}: solo tiempo); arrastre con el botón central o con {{key:Alt}} para desplazar la vista; {{ui:Mostrar todo}} o {{key:Home}} ajusta todas las curvas mostradas. Haga clic en un espacio vacío para mover el cabezal de reproducción hasta allí. {{key:Delete}} elimina las claves elegidas.

Los tiradores no se cruzan entre sí en el tiempo, así que una curva nunca va hacia atrás.

## Reutilizar animaciones (vista de clips)

Un **clip** reproduce una animación guardada (una **acción**) en la línea de tiempo. Los clips se mezclan en orden, las filas inferiores sobre las superiores; las pistas propias de la línea de tiempo van por encima de todos los clips.

1. Ponga en clave los grupos y lámparas como de costumbre, y luego haga clic en {{ui:Crear un clip}} en {{ui:Clips}} y dé un nombre a la acción. Las pistas se convierten en la acción, y un clip la reproduce donde estaban (la cámara se queda en la línea de tiempo).
2. Para volver a usarla, elija la acción y haga clic en {{ui:Añadir clip}}: un nuevo clip empieza en el cabezal de reproducción.
3. Arrastre un clip a lo largo de su fila para moverlo; haga clic en él para definir {{ui:Inicio (s)}}, {{ui:Velocidad}} (2 = el doble de rápido), {{ui:Repeticiones}}, {{ui:Cuánto}} (de 0 a 1), {{ui:Mezcla}} ({{ui:Reemplazar}}, o {{ui:Añadir encima}} de los clips anteriores), {{ui:Fuera del clip}} (nada, mantener su final, o mantener ambos extremos) y {{ui:Silenciar}}. Las flechas cambian el orden; el cubo lo elimina (una acción que ningún clip usa ya se elimina con él).

Un clip con un {{ui:Cuánto}} inferior al completo se mezcla con lo que hay debajo: el clip anterior, o la lámpara o la colocación tal como están sin la animación.

## Qué se reproduce dónde

| Qué | En la vista | En un vídeo renderizado |
|---|---|---|
| Claves de la cámara, ángulo del objetivo con claves de cámara | Sí | Sí |
| Posición, giro y tamaño (claves, curvas, clips) | Sí | Sí |
| Brillo, apertura y color de lámparas | Sí | Todavía no: el vídeo usa las lámparas tal como están al empezar (véase [lo que aún no está creado](topic:not-built-yet)) |
| Ángulo del objetivo sin claves de cámara | Sí | Todavía no: ponga también la cámara en clave |
| Formas clave y controladores | Sí | Sí |
| Armazones (mallas en pose) | Sí | Sí |
| IK y restricciones | Sí | Sí |
| Física horneada (claves) | Sí | Sí |

Todo se guarda en el archivo `.modelcraft` junto con el resto de la animación, y {{ui:Deshacer}} y {{ui:Rehacer}} de la línea de tiempo deshacen cualquiera de estos cambios.
