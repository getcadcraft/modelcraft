---
title: Modificadores en una malla, un grupo o un componente
summary: Escale, refleje, cree matrices, suavice, biselé, corte y doble una malla sin cambiarla; repita o escale un grupo o componente con la misma pila; hágalo permanente cuando esté listo.
keywords: modificador, modificadores, pila, grupo, componente, escala, hornear, editar origen, no destructivo, simetría, matriz, matriz radial, subdivisión, superficie de subdivisión, suavizar, bisel, solidificar, grosor, booleano, cortar, desplazar, ruido, soldar, decimar, simplificar, celosía, jaula, deformación de curva, doblar, envolver, aplicar
from: dd5ec1cb
---

Un **modificador** cambia lo que muestra una malla sin cambiar la malla en sí. Refleje una mitad de una pieza y modele solo esa mitad; redondee una caja con una superficie de subdivisión y siga editando la caja. Los modificadores están en una **pila** y actúan en orden, de arriba hacia abajo. Lo que ve, exporta, imprime y renderiza es la malla con todos los modificadores activos.

## Agregar un modificador

1. Seleccione una malla. En el espacio de trabajo Modelo, su sección **Modificadores** está en {{ui:Entity info}}; en el espacio de trabajo Malla, está en el panel de la derecha.
2. Elija uno de {{ui:Add a modifier…}}. Va al final de la pila.
3. Cambie sus ajustes debajo de su nombre. Las longitudes admiten los mismos valores que el cuadro de valor, así que `600mm`, `2'6"` y `(6m)/4` funcionan.

Cada cambio es un paso de deshacer: {{key:Mod+Z}} lo revierte.

## Los botones de cada modificador

- La casilla lo activa o desactiva.
- El botón de pantalla lo muestra u oculta en la vista (sigue en la pila).
- El botón de cámara lo muestra u oculta en imágenes renderizadas y videos, así que un modificador puede ser solo para renderizados (o solo para la vista).
- Las flechas lo suben o bajan en la pila. El orden importa: simetría y luego subdividir da una unión suave; subdividir y luego simetría no.
- {{ui:Apply}} hace que la forma forme parte de la malla: los modificadores de arriba y este se aplican a la malla misma y salen de la pila. Es un paso de deshacer.
- La cruz lo quita.

## Los modificadores

| Modificador | Qué hace |
| --- | --- |
| Escalar | Escala respecto al origen del objeto, con un factor para rojo, verde y azul. También en un grupo o componente. |
| Simetría | Agrega una copia reflejada a lo largo de rojo, verde o azul, a través del origen de la malla, y une las mitades donde se encuentran. |
| Matriz | Copia en línea (un paso de su propio tamaño por los números que dé, más un paso fijo), alrededor de un eje, o a lo largo de una curva en el modelo. Un grupo o componente usa la línea. |
| Superficie de subdivisión | Suaviza la malla por subdivisión de Catmull-Clark. Las aristas filosas se mantienen con pliegue. Los renderizados pueden usar más niveles que la vista. |
| Bisel | Redondea toda arista más aguda que el ángulo que indique. |
| Solidificar | Da a una superficie un grosor y cierra el borde. |
| Booleano | Recorta, une o conserva la superposición con otro objeto del modelo. Ambos deben ser sólidos cerrados. |
| Desplazar | Mueve la superficie hacia dentro o hacia fuera con ruido suave. La misma semilla da las mismas protuberancias cada vez. |
| Soldar | Une los vértices más cercanos que una distancia. |
| Decimar | Conserva una parte de los triángulos, quitando los que menos cambian la forma. |
| Suavizar | Relaja los vértices hacia sus vecinos. |
| Celosía | Dobla la malla con una jaula: mueva los puntos de la jaula y la malla los sigue. |
| Deformación de curva | Dobla la malla a lo largo de una curva en el modelo, a lo largo de rojo, verde o azul. |
| Envolver | Mueve cada vértice al punto más cercano de otro objeto. |

## En un grupo o componente

Un grupo o componente también puede guardar una receta, así que la pantalla de una lámpara puede ser un **Escalar** y una **Matriz** de una sola pantalla, y cambiar un número cambia la lámpara.

1. Seleccione un grupo o componente. En {{ui:Entity info}}, su sección **Modificadores** muestra la pila (vacía al principio).
2. Elija {{ui:Scale}} o {{ui:Array}} de {{ui:Add a modifier…}}. El grupo se convierte en un componente que es **el original, colocado por la pila**. El original se conserva: edítelo y cada copia lo sigue de inmediato.
3. Escalar toma un factor para rojo, verde y azul (`1, 1, 2` duplica la altura). Matriz toma el número de copias, un paso como parte del tamaño que tiene el resultado hasta ese momento, y un paso extra en longitudes.

La pila se ejecuta de arriba hacia abajo, sobre los ejes propios del original y respecto a su origen, así que el orden importa: una matriz de tres copias separadas 3 m, seguida de Escalar 2 en rojo, pone las copias a 6 m; si escala primero y luego aplica la matriz, quedan a 3 m. La casilla, las flechas y la cruz funcionan como en una malla; los botones de vista y cámara, y Aplicar en un modificador, no, porque una pila en un grupo es una sola cosa.

- {{ui:Edit source}} abre el original en su lugar. Los cambios se ven en cada copia; al cerrarlo, vuelve a donde estaba.
- {{ui:Bake modifiers}} convierte el resultado en aristas y caras simples, y quita la pila, en un solo paso de deshacer. Las copias que se superponen siguen como geometría separada: hornear no es una unión.
- Las copias del componente comparten la receta; {{ui:Make unique}} la separa (el original sigue compartido).
- La pila se guarda en el archivo, se lleva al copiar y pegar y al deshacer, y Purgar sin usar conserva el original. Un programa que no conoce los modificadores sigue mostrando las copias.
- Hasta hornear, el resultado no puede editarse, descomponerse, cambiar de tamaño ni estirarse: se reconstruiría en el siguiente cambio. Cada acción lo indica.
- Los límites son 32 modificadores y 1,000 copias. Un componente hecho para estirarse (Estirar) y una pila no pueden compartir una definición todavía.

## Superficie de subdivisión

La subdivisión suaviza una malla por Catmull-Clark: cada cara se convierte en caras de cuatro lados, y cada nivel genera cuatro veces más. Una caja con dos o tres niveles ya se ve como una forma redondeada, y usted sigue editando la caja.

- **Niveles en la vista** define qué tan suave se ve.
- **Niveles en renderizados** define qué tan suaves son las imágenes y videos renderizados; los renderizados pueden usar más niveles que la vista.
- **Renderizar sobre la superficie suave real** coloca los puntos de una malla renderizada sobre la superficie límite a la que tienden los niveles, así que incluso dos niveles se renderizan tan suaves como muchos.
- **Pliegues** mantienen las aristas filosas: en el espacio de trabajo Malla, seleccione aristas y use {{ui:Crease}} (1 se mantiene filosa, 0.5 redondea un poco, 0 es suave). Vea [Editar una malla](topic:mesh-edit).
- **Baje el nivel de vista en una malla grande:** cuando los niveles pedidos darían más caras de las que la vista de esta computadora maneja bien, la vista muestra un nivel menor y lo indica. {{ui:Apply}} siempre usa todos los niveles. La cantidad de caras la define la clase de su equipo en {{ui:Settings}} › Renderizado › Su equipo.
- Los bordes abiertos conservan sus esquinas y se mantienen sobre la línea de sus aristas.

## Doblar con una jaula de celosía

1. Agregue un modificador {{ui:Lattice}} y presione {{ui:Add a lattice cage round the mesh}}. Aparece una jaula de 3 × 3 × 3 puntos alrededor de la malla, dibujada como alambres.
2. Abra la jaula en el espacio de trabajo Malla (haga doble clic en ella) y mueva sus puntos. La malla sigue el movimiento con suavidad.

:::tip
Una jaula es una malla como cualquier otra: ocúltela con su etiqueta cuando termine.
:::

## Mallas grandes

Las pilas pequeñas se calculan de inmediato. Una grande se calcula en segundo plano, en cada núcleo de su computadora: la vista sigue mostrando el último resultado hasta que el nuevo esté listo. Los booleanos cargan el modelador de sólidos la primera vez; la vista lo indica por un momento.

## Lo que los modificadores aún no hacen

- Pesos por vértice (una atenuación pintada en la malla) para Desplazar, Suavizar y Envolver.
- Modificadores distintos de Escalar y de Matriz lineal en geometría de empujar/tirar (grupos y componentes): conviértala primero en malla ({{ui:Convert to mesh}}). Simetría, una Matriz radial o de curva, Doblar y Ahusar en grupos llegarán después.
