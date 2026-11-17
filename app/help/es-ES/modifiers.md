---
title: Modificadores en una malla, un grupo o un componente
summary: Escale, refleje, cree matrices, suavice, biselle, corte y doble una malla sin cambiarla; repita o escale un grupo o componente con la misma pila, y hágalo permanente cuando esté listo.
keywords: modificador, modificadores, pila, grupo, componente, escalar, hornear, editar origen, no destructivo, espejo, matriz, matriz radial, subdivisión, superficie de subdivisión, suavizar, bisel, solidificar, grosor, booleano, cortar, desplazamiento, ruido, soldar, reducir, simplificar, retícula, jaula, deformación de curva, doblar, envolvente, aplicar
from: dd5ec1cb
---

Un **modificador** cambia lo que muestra una malla sin cambiar la malla en sí. Refleje una mitad de una pieza y modele solo esa mitad; redondee una caja con una superficie de subdivisión y siga editando la caja. Los modificadores se colocan en una **pila** y actúan en orden, de arriba abajo. Lo que ve, exporta, imprime y renderiza es la malla con todos los modificadores activados.

## Añadir un modificador

1. Seleccione una malla. En el espacio de trabajo Modelo, su sección **Modificadores** está en {{ui:Información de entidad}}; en el espacio de trabajo Malla, está en el panel de la derecha.
2. Elija uno en {{ui:Añadir un modificador…}}. Va al final de la pila.
3. Cambie sus ajustes bajo su nombre. Las longitudes admiten los mismos valores que el cuadro de valor, así que `600mm`, `2'6"` y `(6m)/4` funcionan.

Cada cambio es un paso de deshacer: {{key:Mod+Z}} lo revierte.

## Los botones de cada modificador

- La casilla lo activa o desactiva.
- El botón de pantalla lo muestra u oculta en la vista (sigue en la pila).
- El botón de cámara lo muestra u oculta en las imágenes y vídeos renderizados, así que un modificador puede ser solo para renderizados (o solo para la vista).
- Las flechas lo suben o bajan en la pila. El orden importa: espejo y luego subdivisión dan una costura suave; subdividir y luego espejo no.
- {{ui:Aplicar}} convierte la forma en parte de la malla: los modificadores situados por encima de este y el propio se aplican a la malla y salen de la pila. Es un paso de deshacer.
- La cruz lo quita.

## Los modificadores

| Modificador | Qué hace |
| --- | --- |
| {{ui:Escalar}} | Escala respecto al origen del objeto, con un factor para rojo, verde y azul. También en un grupo o componente. |
| Espejo | Añade una copia reflejada a través de rojo, verde o azul, por el origen de la malla, y une las mitades donde se encuentran. |
| {{ui:Matriz}} | Copia en línea (un paso de su propio tamaño por los números que dé, más un paso fijo), alrededor de un eje, o a lo largo de una curva del modelo. Un grupo o componente toma la línea. |
| {{ui:Superficie de subdivisión}} | Suaviza la malla por subdivisión Catmull-Clark. Las aristas afiladas se mantienen con pliegue. Los renderizados pueden usar más niveles que la vista. |
| {{ui:Bisel}} | Redondea cada arista más aguda que el ángulo que dé. |
| Solidificar | Da a una superficie un grosor y cierra el borde. |
| Booleano | Recorta, une o conserva el solapamiento con otro objeto del modelo. Ambos tienen que ser sólidos cerrados. |
| Desplazamiento | Mueve la superficie hacia dentro o hacia fuera mediante ruido suave. La misma semilla da los mismos relieves siempre. |
| Soldar | Une los vértices más cercanos que una distancia. |
| Reducir | Conserva una parte de los triángulos, quitando los que menos cambian la forma. |
| {{ui:Suavizar}} | Relaja los vértices hacia sus vecinos. |
| {{ui:Retícula}} | Dobla la malla con una jaula: mueva los puntos de la jaula y la malla los sigue. |
| Deformación de curva | Dobla la malla a lo largo de una curva del modelo, en rojo, verde o azul. |
| Ajuste envolvente | Mueve cada vértice al punto más cercano de otro objeto. |

## En un grupo o componente

Un grupo o componente también puede conservar una receta: así, la pantalla de una lámpara puede ser un **Escalar** y una **Matriz** de una sola pantalla, y al cambiar un número cambia la lámpara.

1. Seleccione un grupo o componente. En {{ui:Información de entidad}}, su sección **Modificadores** lista la pila (vacía al principio).
2. Elija {{ui:Escalar}} o {{ui:Matriz}} en {{ui:Añadir un modificador…}}. El grupo pasa a ser un componente que es **el original, colocado por la pila**. El original se conserva: edítelo y cada copia lo sigue al instante.
3. Escalar admite un factor para rojo, verde y azul (`1, 1, 2` duplica la altura). Matriz admite el número de copias, un paso como proporción del tamaño que tiene el resultado hasta ese momento, y un paso adicional en longitudes.

La pila se aplica de arriba abajo sobre los ejes propios del original, respecto a su origen, así que el orden importa: una matriz de tres copias separadas 3 m y luego Escalar 2 en rojo pone las copias a 6 m; si primero escala y luego aplica la matriz, quedan a 3 m. La casilla, las flechas y la cruz funcionan como en una malla; los botones de vista y cámara, y Aplicar en un modificador, no, porque una pila en un grupo es una sola cosa.

- {{ui:Editar origen}} abre el original en su sitio. Los cambios se ven en cada copia; al cerrarlo, vuelve a donde estaba.
- {{ui:Hornear modificadores}} convierte el resultado en aristas y caras normales y quita la pila, en un solo paso de deshacer. Las copias que se solapan siguen como geometría separada: Hornear no es una unión.
- Las copias del componente comparten la receta; {{ui:Hacer único}} la separa (el original sigue compartido).
- La pila se guarda en el archivo, se lleva al copiar y pegar y al deshacer, y Purgar no utilizados conserva el original. Un programa que no conoce los modificadores sigue mostrando las copias.
- Hasta Hornear, el resultado no se puede editar, descomponer, cambiar de tamaño ni estirar: se reconstruiría en el siguiente cambio. Cada acción lo indica.
- Los límites son 32 modificadores y 1,000 copias. Un componente preparado para estirarse y una pila todavía no pueden compartir una definición.

## Superficie de subdivisión

La subdivisión suaviza una malla por Catmull-Clark: cada cara se convierte en caras de cuatro lados, y cada nivel da cuatro veces más. Una caja con dos o tres niveles ya parece una forma redondeada, y usted sigue editando la caja.

- **Niveles en la vista** define lo suave que es.
- **Niveles en renderizados** define lo suave que son las imágenes y vídeos renderizados; los renderizados pueden usar más niveles que la vista.
- **Renderizados sobre la superficie suave real** coloca los puntos de una malla renderizada sobre la superficie límite a la que tienden los niveles, así que incluso dos niveles se renderizan tan suaves como muchos.
- **Pliegues** mantienen las aristas afiladas: en el espacio de trabajo Malla, seleccione aristas y use {{ui:Pliegue}} (1 se mantiene afilada, 0.5 redondea un poco, 0 es suave). Vea [Editar una malla](topic:mesh-edit).
- **Baje el nivel de la vista en una malla grande:** cuando los niveles pedidos darían más caras de las que la vista maneja bien en este equipo, la vista muestra un nivel menor e indica cuál. {{ui:Aplicar}} siempre usa todos los niveles. El número de caras lo define la clase de su equipo en {{ui:Configuración}} › Renderizado › Su equipo.
- Los bordes abiertos mantienen sus esquinas y se quedan en la línea de sus aristas.

## Doblar con una jaula de retícula

1. Añada un modificador {{ui:Retícula}} y pulse {{ui:Añadir una jaula de retícula alrededor de la malla}}. Aparece una jaula de 3 × 3 × 3 puntos alrededor de la malla, dibujada como alambres.
2. Abra la jaula en el espacio de trabajo Malla (doble clic) y mueva sus puntos. La malla los sigue con suavidad.

:::tip
Una jaula es una malla como cualquier otra: ocúltela con su etiqueta cuando termine.
:::

## Mallas grandes

Las pilas pequeñas se calculan al momento. Una grande se calcula en segundo plano en cada núcleo de su equipo: la vista sigue mostrando el último resultado hasta que el nuevo esté listo. Los booleanos cargan el modelador de sólidos la primera vez; la vista lo indica un momento.

## Lo que los modificadores aún no hacen

- Pesos por vértice (una caída pintada en la malla) para Desplazamiento, Suavizar y Ajuste envolvente.
- Modificadores distintos de Escalar y de la Matriz lineal sobre geometría de empujar/tirar (grupos y componentes): conviértala primero en malla ({{ui:Convertir en malla}}). Espejo, una matriz radial o por curva, Doblar y Estrechar en grupos llegarán más tarde.
