---
title: Dividir un modelo grande para imprimir
summary: Corte un modelo demasiado grande para su impresora en piezas que quepan en la cama, con clavijas, llaves, colas de milano, orificios para espigas o imanes y el número de la unión en ambas caras, y descargue cada pieza y una hoja de ensamblaje en un solo zip.
keywords: impresión 3d, dividir, inclinado, corte inclinado, corte en ángulo, oblicuo, divisor, cortar, demasiado grande, tamaño de la cama, volumen de impresión, piezas, componentes, conectores, clavijas, llaves, cola de milano, espiga, imán, holgura, tolerancia, números de pieza, ensamblaje, vista explosionada, zip, stl, 3mf, licencia, llave USB, dongle
from: ee96ba77
---

Cuando un modelo es más grande que la cama de su impresora, **Dividir para imprimir** lo corta en piezas que sí caben, agrega conectores para que las piezas alineen al unirlas y graba el mismo número en ambas caras de cada unión. Abra {{ui:Exportar}} › {{ui:Revisar para impresión 3D (STL o 3MF)…}}; la línea **Herramientas de impresión** del diálogo tiene {{ui:Dividir para imprimir}}. Se abre como una tarjeta sobre la vista.

Trabaja sobre lo que se imprime: la selección, o todo lo visible si no hay nada seleccionado. Lo que se imprime debe ser un sólido cerrado; si la revisión encuentra huecos, use primero [Reparar](topic:print-tools#repair).

Se ejecuta en ModelCraft, en su computadora: sin servidor de licencias, sin llave USB y sin subir nada.

## Cómo cortar

- **Ajustar a la cama, menos piezas**: indique el ancho, el fondo y la altura de la cama (se toman de {{ui:Configuración}} › ModelCraft › Impresora 3D). La tarjeta indica cuántas piezas se necesitan y qué tamaño tiene cada una; corta el modelo en piezas iguales, las menos que quepan. Una pieza puede quedar acostada en los archivos si así cabe. Los conectores que sobresalen de una pieza cuentan para su tamaño.
- **En los lugares que indique**: elija el eje a cortar y escriba dónde, en milímetros desde el extremo inferior del modelo, separados por comas (`100, 200` hace tres piezas).
  **Inclinar** gira los cortes hasta 60° alrededor de uno de los otros dos ejes (por ejemplo, un corte a través de Z inclinado alrededor de X): cada corte inclinado pasa por la línea media del modelo en su lugar, da más superficie de pegado y oculta mejor la unión en una superficie inclinada. Los conectores quedan perpendiculares al corte.

Los planos de corte se dibujan alrededor del modelo como líneas discontinuas mientras la tarjeta está abierta.

## Conectores

Cada lugar donde dos piezas se tocan recibe conectores, colocados por sí solos donde hay más espacio: al menos la **pared mínima** más la **holgura** más su propio tamaño alejados del exterior, y lo bastante lejos de cualquier otro corte para que dos orificios nunca se encuentren. En una cara larga se reparten dos conectores a lo largo de ella, para que las piezas no puedan girar.

- **Clavijas redondas**: una clavija en una pieza (con la punta biselada) y un orificio en la otra.
- **Llaves cuadradas**: igual, pero cuadradas, de modo que una pieza solo pueda entrar en un sentido.
- **Colas de milano**: una lengüeta que se desliza dentro de una ranura desde el costado. Cuando un extremo de la ranura tocaría otro corte, la cola de milano se detiene antes y entra desde el extremo abierto. Las colas de milano convienen a cortes en una sola dirección (una hilera de rebanadas); en una cuadrícula, use clavijas o espigas.
- **Orificios para espigas**: un orificio en cada lado; los pasadores también se imprimen (en el zip).
- **Cavidades para imán**: una cavidad en cada lado para un imán redondo del diámetro y grosor que indique. Revise los polos antes de pegarlos.
- **Ninguno (pegamento)**.

La **holgura** es el espacio en cada lado entre una clavija y su orificio (0.2 mm para empezar). Es fiel al número que indique: los orificios redondos se hacen un poco más grandes para que sus lados planos, y no sus esquinas, conserven esa holgura. Auméntela si las piezas de su impresora salen apretadas.

Cuando una unión no tiene espacio para un conector (una pared delgada, un área de contacto pequeña), la tarjeta lo indica: pegue esa unión.

## Números de pieza

Con **Grabar los números de unión en ambas caras** activado, cada unión recibe el número de sus dos piezas, como `3-4`, grabado a 0.6 mm de profundidad en ambas caras y leído en el sentido correcto en cada una. Los números empiezan con 5 mm de altura y se reducen para caber, hasta 2.5 mm; una unión sin espacio para su número aparece en la lista. Las piezas se numeran desde la capa inferior hacia arriba.

## Vista previa, descarga, dividir el modelo

1. {{ui:Vista previa}} corta el modelo e indica cuántas piezas, uniones y conectores hay, si cada pieza pasa la revisión de impresión 3D y cabe en la cama, y enumera el tamaño de cada pieza. Un anillo marca cada conector y número en la vista.
2. {{ui:Descargar las piezas (.zip)}} guarda un zip: un archivo por pieza (STL o 3MF, según elija en **Archivos**), cada una apoyada en la cama; los pasadores de las espigas; y la **hoja de ensamblaje**, una imagen de las piezas separadas con sus números (`assembly.svg` y `assembly.png`) y una lista de las piezas y uniones (`assembly.txt`).
3. {{ui:Dividir el modelo}} coloca las piezas en el modelo en lugar de los grupos o componentes seleccionados, con los nombres de la hoja de ensamblaje, en un solo paso: {{ui:Deshacer}} devuelve el original. Necesita que estén seleccionados los grupos o componentes a dividir; la descarga funciona con lo que se imprime.

## Mueva los conectores usted mismo

Después de una vista previa, **Conectores a mano** le permite corregir dónde van los conectores:

- {{ui:Mover uno}}: haga clic en un anillo rojo de la vista (se vuelve verde) y luego haga clic donde debe ir, en el corte.
- {{ui:Agregar uno}}: haga clic en la vista donde debe ir un conector. Va en el plano de corte que alcanza su clic, entre las dos piezas de ese lugar.
- {{ui:Quitar uno}}: haga clic en un anillo rojo para quitar ese conector.

Cada cambio se verifica de nuevo, igual que los automáticos: un punto demasiado cerca del contorno, otro corte u otro conector no se crea, y la tarjeta lo indica. {{ui:Automático otra vez}} olvida sus lugares. Se conservan mientras el modelo, la selección y los cortes sigan igual.

Una vista previa se mantiene hasta que cambien el modelo, la selección o una configuración; entonces la tarjeta le pide volver a generar la vista previa.

:::note
Cada pieza se revisa como lo haría la revisión de impresión 3D antes de descargarla. Su laminador sigue decidiendo cómo se imprime cada pieza: revise cada una allí, e imprima primero una unión para ver cómo su impresora maneja la holgura.
:::
