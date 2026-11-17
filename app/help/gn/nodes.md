---
title: Nodos: hacer un modelo conectando
summary: Conectá números con puntos, puntos con curvas, curvas con superficies. Cambiá un número y todo lo que sigue se reconstruye. Cada nodo es también una línea de CraftScript, y el grafo se guarda en el archivo.
keywords: nodos, editor de nodos, programación visual, paramétrico, grafo, cables, puertos, forma libre, freeform, nurbs, loft, extrusión, revolución, círculo, curva, superficie, serie, rango, aleatorio, lista, script, craftscript, grasshopper
from: 9c8e254f
---

El editor de **Nodos** construye geometría uniendo cajas. Cada caja (un nodo) hace un trabajo pequeño: crea un número, un punto, un círculo, un loft. Conectás el resultado de uno a la entrada del siguiente, y el modelo sigue los cambios cuando modificás un número al inicio.

Abrilo desde el panel de la derecha: {{ui:Nodos}} › {{ui:Nodos…}}. Un archivo que ya tiene un grafo lo abre solo. Es una ventana sobre la vista 3D: arrastrá su barra de título para moverla, arrastrá su esquina para cambiarle el tamaño.

## Conectar

1. Elegí un nodo de la lista de la izquierda (escribí en el cuadro de búsqueda para reducir la lista; {{key:Enter}} agrega la primera coincidencia). Aparece en el medio del lienzo.
2. Arrastrá desde un punto redondo de **salida** a la derecha de un nodo hasta un punto redondo de **entrada** a la izquierda de otro. El punto se pone verde cuando encaja y rojo cuando no; ubicá el puntero encima para ver el motivo.
3. Una entrada sin conexión muestra una caja para un valor escrito. Escribí un número y apretá <kbd>Tab</kbd>: el resultado se reconstruye.
4. El círculo pequeño de la barra de título de un nodo es su **ojo**. Un nodo con el ojo activado se dibuja en la vista 3D: como líneas para las curvas, sombreado para las superficies, puntos para los puntos.

Arrastrá un nodo por su barra de título. Arrastrá el fondo para desplazarte, girá la rueda para hacer zoom. <kbd>Delete</kbd> borra el nodo seleccionado. {{ui:Ordenar}} acomoda los nodos en columnas, {{ui:Ajustar}} los trae todos a la vista, {{ui:Deshacer}} y {{ui:Rehacer}} recorren tus cambios.

## Tipos y unidades

Los puertos tienen un tipo: número, sí/no, punto, vector, curva, superficie, malla, sólido, o "geometría" para cualquiera de esos. Un punto puede alimentar una entrada de vector y viceversa. Los números llevan una unidad: una **longitud** va en milímetros y un **ángulo** en grados. Una longitud no puede alimentar un ángulo, y una longitud por otra longitud (una superficie) se rechaza, así que un cable incorrecto se frena cuando lo hacés.

Un punto cuadrado es una **lista**. Cuando una lista llega a una entrada de valor único, el nodo se ejecuta una vez por cada elemento, y su resultado pasa a ser una lista. La lista más corta repite su último elemento. Por ejemplo, una **Serie** de alturas conectada a **Mover** hace una pila de copias.

## Sólidos y booleanas como nodos

El grupo **Sólidos** crea cuerpos cerrados a partir de las mismas superficies exactas del panel Superficies: **Sólido caja**, **Sólido cilindro** y **Sólido esfera** (tamaños en mm), **Unión**, **Restar** e **Intersecar** (el segundo sólido se toma del primero; la tolerancia es cuánto pueden alejarse los triángulos del motor de sólidos de las superficies exactas), **Redondeo entre caras** (las caras por su número en el sólido, 1 para la primera; un radio y, si es mayor que 0, un radio al final), **Volumen del sólido** (mm³) y **Sólido a malla** (para verlo o hornearlo). Un sólido tiene su propio tipo de puerto: un punto o un número no se pueden conectar a una entrada de sólido, y el punto queda rojo. Los nodos Booleana y Redondeo usan el motor de sólidos propio del programa, que se carga la primera vez que se abre el editor.

## Errores

Un nodo que no puede hacer su trabajo dice por qué debajo de su nombre, en rojo ("El radio debe ser mayor que cero."), y los nodos siguientes esperan. El mismo mensaje aparece como Problema en el panel Problemas, así que podés encontrarlo desde allí.

## Cada nodo es una línea de script

Apretá {{ui:Script}} para ver el grafo como CraftScript: una línea por nodo, por ejemplo `n3 = nd_circle(n2, n1, [0 0 1]);`. Editá el texto y apretá {{ui:Hacer el grafo desde este script}} para volverlo a grafo. Las mismas funciones `nd_` funcionan en un CraftScript de PartCraft, así que un grafo se puede ejecutar, repetir o probar allí. Los números aleatorios siempre toman una **semilla**, así que el mismo grafo da el mismo resultado en cada computadora.

## Guardado con el archivo

El grafo se guarda en el archivo del modelo. Los nodos crean sus propias curvas, superficies y mallas: no cambian las caras del modelo hasta que lo pidas.

## Hornear al modelo

Activá el ojo de un nodo que crea una superficie o una malla, y después apretá {{ui:Modelo-pe ojejapo}} en la ventana Nodos. Cada superficie o malla visible se convierte en un grupo de caras del modelo, en metros, que podés editar como cualquier otra cosa. Es un solo paso de deshacer. El grafo queda, pero la copia ya no lo sigue: si cambiás un número, volvé a hornear para obtener una nueva. Los puntos y las curvas no son sólidos, así que quedan afuera, y el mensaje dice cuántos son.
