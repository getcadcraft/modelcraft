---
title: Nodos: crear un modelo conectando
summary: Conecte números con puntos, puntos con curvas y curvas con superficies. Cambie un número y todo lo que depende de él se reconstruye. Cada nodo también es una línea de CraftScript, y el grafo se guarda en el archivo.
keywords: nodos, editor de nodos, programación visual, paramétrico, grafo, cables, puertos, forma libre, nurbs, solevación, extruir, revolución, círculo, curva, superficie, serie, rango, aleatorio, lista, script, craftscript, grasshopper
from: 9c8e254f
---

El editor de **Nodos** construye geometría uniendo cajas. Cada caja (un nodo) hace un trabajo pequeño: crear un número, un punto, un círculo, una solevación. Usted conecta el resultado de una caja a la entrada de la siguiente, y el modelo sigue los cambios cuando modifica un número al inicio.

Ábralo desde el panel de la derecha: {{ui:Nodes}} › {{ui:Nodes…}}. Un archivo que ya tiene un grafo lo abre automáticamente. Es una ventana sobre la vista 3D: arrastre su barra de título para moverla y su esquina para cambiar el tamaño.

## Conectar

1. Elija un nodo de la lista de la izquierda (escriba en el cuadro de búsqueda para filtrar; <kbd>Enter</kbd> agrega la primera coincidencia). Aparece en el centro del lienzo.
2. Arrastre desde un punto **de salida** redondo a la derecha de un nodo hasta un punto **de entrada** redondo a la izquierda de otro. El punto se vuelve verde cuando encaja y rojo cuando no; señálelo para ver el motivo.
3. Una entrada sin nada conectado muestra una caja para un valor escrito. Escriba un número y pulse <kbd>Tab</kbd>: el resultado se reconstruye.
4. El pequeño círculo en la barra de título de un nodo es su **ojo**. Un nodo con el ojo activado se dibuja en la vista 3D: como líneas para curvas, sombreado para superficies y puntos para puntos.

Arrastre un nodo por su barra de título. Arrastre el fondo para encuadrar y gire la rueda para hacer zoom. <kbd>Delete</kbd> elimina el nodo seleccionado. {{ui:Tidy}} acomoda los nodos en columnas, {{ui:Fit}} los trae todos a la vista, y {{ui:Undo}} y {{ui:Redo}} recorren sus ediciones.

## Tipos y unidades

Los puertos tienen un tipo: número, sí/no, punto, vector, curva, superficie, malla, sólido, o "geometría" para cualquiera de ellos. Un punto puede alimentar una entrada de vector y viceversa. Los números llevan unidad: una **longitud** está en milímetros y un **ángulo** en grados. Una longitud no puede alimentar un ángulo, y una longitud por otra longitud (un área) se rechaza, así que una conexión incorrecta se detiene al crearla.

Un punto cuadrado es una **lista**. Cuando una lista llega a una entrada de valor único, el nodo se ejecuta una vez por cada elemento, y su resultado se vuelve una lista. La lista más corta repite su último elemento. Por ejemplo, una **Serie** de alturas conectada a **{{ui:Move}}** crea una pila de copias.

## Sólidos y booleanas como nodos

El grupo **{{ui:Solids}}** crea cuerpos cerrados a partir de las mismas superficies exactas del panel Superficies: **Sólido caja**, **Sólido cilindro** y **Sólido esfera** (tamaños en mm), **{{ui:Union}}**, **Restar** e **Intersecar** (el segundo sólido se toma del primero; la tolerancia es cuánto pueden alejarse de las superficies exactas los triángulos del motor de sólidos), **Redondeo entre caras** (las caras por su número en el sólido, donde 1 es la primera; un radio y, si es mayor que 0, un radio al final), **Volumen del sólido** (mm³) y **Sólido a malla** (para verlo o hornearlo). Un sólido tiene su propio tipo de puerto: un punto o un número no puede conectarse a una entrada de sólido, y el punto queda rojo. Los nodos de booleanas y de redondeo usan el motor de sólidos propio del programa, que se carga la primera vez que se abre el editor.

## Errores

Un nodo que no puede hacer su trabajo indica el motivo bajo su nombre, en rojo ("El radio debe ser mayor que cero."), y los nodos posteriores esperan. El mismo mensaje aparece como un problema en el panel Problemas, así que puede encontrarlo desde ahí.

## Cada nodo es una línea de script

Pulse {{ui:Script}} para ver el grafo como CraftScript: una línea por nodo, como `n3 = nd_circle(n2, n1, [0 0 1]);`. Edite el texto y pulse {{ui:Make the graph from this script}} para devolverlo a un grafo. Las mismas funciones `nd_` funcionan en un CraftScript de PartCraft, así que un grafo puede ejecutarse, repetirse o probarse allí. Los números aleatorios siempre toman una **semilla**, de modo que el mismo grafo da el mismo resultado en cada computadora.

## Guardado con el archivo

El grafo se guarda en el archivo del modelo. Los nodos crean sus propias curvas, superficies y mallas: no cambian las caras del modelo hasta que usted lo pida.

## Hornear al modelo

Active el ojo de un nodo que crea una superficie o una malla, y luego pulse {{ui:Bake to model}} en la ventana Nodos. Cada superficie o malla visible se convierte en un grupo de caras del modelo, en metros, que puede editar como cualquier otro. Es un solo paso de {{ui:Undo}}. El grafo se conserva, pero la copia ya no lo sigue: si cambia un número, hornee de nuevo para obtener una nueva. Los puntos y las curvas no son sólidos, así que se omiten, y el mensaje indica cuántos.
