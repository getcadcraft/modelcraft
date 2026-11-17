---
title: Nodos: crear un modelo conectando
summary: Conecte números con puntos, puntos con curvas y curvas con superficies. Si cambia un número, todo lo que depende de él se reconstruye. Cada nodo es también una línea de CraftScript, y el grafo se guarda en el archivo.
keywords: nodos, editor de nodos, programación visual, paramétrico, grafo, cables, puertos, forma libre, freeform, nurbs, loft, extruir, revolución, círculo, curva, superficie, serie, rango, aleatorio, lista, script, craftscript, grasshopper
from: 9c8e254f
---

El editor de **Nodos** construye geometría uniendo cajas entre sí. Cada caja (un nodo) realiza una tarea pequeña: crear un número, un punto, un círculo o un loft. Conecta el resultado de una con la entrada de la siguiente, y el modelo se actualiza cuando cambia un número del inicio.

Ábralo desde el panel de la derecha: {{ui:Nodos}} › {{ui:Nodos…}}. Un archivo que ya tiene un grafo lo abre automáticamente. Es una ventana sobre la vista 3D: arrastre su barra de título para moverla y su esquina para cambiar el tamaño.

## Conexiones

1. Elija un nodo de la lista de la izquierda (escriba en el cuadro de búsqueda para acotar; <kbd>Intro</kbd> añade la primera coincidencia). Aparece en el centro del lienzo.
2. Arrastre desde un punto de **salida** redondo, a la derecha de un nodo, hasta un punto de **entrada** redondo, a la izquierda de otro. El punto se vuelve verde cuando encaja y rojo cuando no; sitúe el puntero sobre él para ver el motivo.
3. Una entrada sin conexión muestra una casilla para un valor escrito. Escriba un número y pulse <kbd>Tab</kbd>: el resultado se reconstruye.
4. El círculo pequeño de la barra de título de un nodo es su **ojo**. Un nodo con el ojo activado se dibuja en la vista 3D: como líneas para las curvas, sombreado para las superficies y puntos para los puntos.

Arrastre un nodo por su barra de título. Arrastre el fondo para desplazar la vista, y gire la rueda para acercar o alejar. <kbd>Supr</kbd> elimina el nodo seleccionado. {{ui:Ordenar}} organiza los nodos en columnas, {{ui:Ajustar}} los trae a la vista, y {{ui:Deshacer}} y {{ui:Rehacer}} recorren sus ediciones.

## Tipos y unidades

Los puertos tienen un tipo: número, sí/no, punto, vector, curva, superficie, malla, sólido o «geometría» para cualquiera de ellos. Un punto puede alimentar una entrada de vector y viceversa. Los números llevan una unidad: una **longitud** se expresa en milímetros y un **ángulo** en grados. Una longitud no puede alimentar un ángulo, y una longitud por otra longitud (un área) se rechaza, de modo que un cable incorrecto se bloquea en el momento de crearlo.

Un punto cuadrado es una **lista**. Cuando una lista llega a una entrada de un solo valor, el nodo se ejecuta una vez por cada elemento, y su resultado pasa a ser una lista. La lista más corta repite su último elemento. Por ejemplo, una **Serie** de alturas conectada a **Desplazar** genera una pila de copias.

## Sólidos y booleanos como nodos

El grupo **Sólidos** crea cuerpos cerrados a partir de las mismas superficies exactas que el panel Superficies: **Sólido caja**, **Sólido cilindro** y **Sólido esfera** (medidas en mm), **Unión**, **Restar** e **Intersecar** (el segundo sólido se toma del primero; la tolerancia es la distancia máxima a la que pueden estar los triángulos del motor de sólidos de las superficies exactas), **Redondeo entre caras** (las caras por su número en el sólido, 1 para la primera; un radio y, si es mayor que 0, un radio al final), **Volumen del sólido** (mm³) y **Sólido a malla** (para verlo o consolidarlo). Un sólido tiene su propio tipo de puerto: un punto o un número no pueden conectarse a una entrada de sólido, y el punto permanece rojo. Los nodos de booleanos y de redondeo usan el motor de sólidos propio del programa, que se carga la primera vez que se abre el editor.

## Errores

Un nodo que no puede realizar su tarea indica por qué debajo de su nombre, en rojo («El radio debe ser mayor que cero.»), y los nodos posteriores esperan. El mismo mensaje aparece como un Problema en el panel Problemas, desde donde puede localizarlo.

## Cada nodo es una línea de script

Pulse {{ui:Script}} para ver el grafo como CraftScript: una línea por nodo, como `n3 = nd_circle(n2, n1, [0 0 1]);`. Edite el texto y pulse {{ui:Crear el grafo a partir de este script}} para volver a convertirlo en grafo. Las mismas funciones `nd_` funcionan en un CraftScript de PartCraft, así que un grafo puede ejecutarse, repetirse o probarse allí. Los números aleatorios siempre requieren una **semilla**, de modo que el mismo grafo da el mismo resultado en cualquier equipo.

## Guardado con el archivo

El grafo se guarda en el archivo del modelo. Los nodos crean sus propias curvas, superficies y mallas: no cambian las caras del modelo hasta que usted lo pida.

## Consolidar en el modelo

Active el ojo de un nodo que crea una superficie o una malla, y pulse {{ui:Consolidar en el modelo}} en la ventana Nodos. Cada superficie o malla visible se convierte en un grupo de caras del modelo, en metros, que puede editar como cualquier otro. Es un solo paso de deshacer. El grafo permanece, pero la copia ya no lo sigue: si cambia un número, consolide de nuevo para obtener una nueva. Los puntos y las curvas no son sólidos, así que se omiten, y el mensaje indica cuántos.
