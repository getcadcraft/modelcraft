---
title: Dividir un modelo grande para imprimir
summary: Corte un modelo demasiado grande para su impresora en piezas que quepan en la plataforma, con clavijas, chavetas, colas de milano, agujeros para espigas o imanes y el número de la unión en ambas caras, y descargue todas las piezas y una hoja de montaje en un solo zip.
keywords: impresión 3D, dividir, inclinado, corte inclinado, corte en ángulo, oblicuo, divisor, cortar, demasiado grande, tamaño de plataforma, volumen de impresión, piezas, partes, conectores, clavijas, chavetas, cola de milano, espiga, imán, holgura, tolerancia, números de pieza, montaje, vista desglosada, zip, stl, 3mf, licencia, license, llave USB, dongle
from: ee96ba77
---

Cuando un modelo es más grande que la plataforma de su impresora, **Dividir para imprimir** lo corta en piezas que caben, añade conectores para que las piezas se alineen al unirlas y graba el mismo número en ambas caras de cada unión. Abra {{ui:Exportar}} › {{ui:Revisar para impresión 3D (STL o 3MF)…}}; la línea **Herramientas de impresión** del diálogo contiene {{ui:Dividir para imprimir}}. Se abre como una tarjeta sobre la vista.

Trabaja sobre lo que se imprime: la selección o, si no hay nada seleccionado, todo lo visible. Lo que se imprime debe ser un sólido cerrado; si la revisión encuentra agujeros, use antes [Reparar](topic:print-tools#repair).

Se ejecuta en ModelCraft, en su ordenador: sin servidor de licencias, sin llave USB y sin subir nada.

## Cómo cortar

- **Ajustar a la plataforma, menos piezas**: indique el ancho, el fondo y la altura de la plataforma (parten de {{ui:Configuración}} › ModelCraft › impresora 3D). La tarjeta indica cuántas piezas necesita y el tamaño de cada una; corta el modelo en piezas iguales, las menos que quepan. Una pieza puede quedar tumbada en los archivos si así cabe. Los conectores que sobresalen de una pieza cuentan para su tamaño.
- **En los puntos que indique**: elija el eje a través del cual cortar y escriba dónde, en milímetros desde el extremo bajo del modelo, separados por comas (`100, 200` genera tres piezas).
  **Inclinar** gira los cortes hasta 60° alrededor de uno de los otros dos ejes (por ejemplo, un corte a través de Z inclinado alrededor de X): cada corte inclinado pasa por la línea central del modelo en su posición, da a las piezas más superficie de pegado y oculta mejor la unión en una superficie en pendiente. Los conectores quedan perpendiculares al corte.

Los planos de corte se dibujan alrededor del modelo como líneas discontinuas mientras la tarjeta está abierta.

## Conectores

En cada punto donde se tocan dos piezas se colocan conectores, situados automáticamente donde hay más espacio: como mínimo a la distancia de la **pared mínima** más la **holgura** más su propio tamaño desde el exterior, y lo bastante lejos de cada otro corte para que dos agujeros nunca se encuentren. En una cara larga se reparten dos conectores a lo largo de ella, para que las piezas no puedan girar.

- **Clavijas redondas**: una clavija en una pieza (biselada en la punta) y un agujero en la otra.
- **Chavetas cuadradas**: lo mismo, pero cuadradas, de modo que una pieza solo encaja en un sentido.
- **Colas de milano**: una lengüeta que se desliza en una ranura desde el lateral. Cuando un extremo de la ranura coincidiría con otro corte, la cola de milano se queda corta y entra por el extremo abierto. Las colas de milano son adecuadas para cortes en una sola dirección (una fila de rodajas); en una cuadrícula, use clavijas o espigas.
- **Agujeros para espigas**: un agujero en cada lado; las espigas también se imprimen (en el zip).
- **Alojamientos para imanes**: un alojamiento en cada lado para un imán redondo del diámetro y grosor que indique. Compruebe los polos antes de pegarlos.
- **Ninguno (pegamento)**.

La **holgura** es el espacio a cada lado entre una clavija y su agujero (0.2 mm al principio). Se ajusta al valor que indique: los agujeros redondos se hacen un poco más grandes para que sus lados planos, y no sus esquinas, mantengan esa holgura. Auméntela si las piezas de su impresora salen demasiado apretadas.

Cuando una unión no tiene espacio para un conector (una pared fina, una zona de contacto pequeña), la tarjeta lo indica: pegue esa unión.

## Números de pieza

Con **Grabar los números de unión en ambas caras** activado, cada unión recibe el número de sus dos piezas, como `3-4`, grabado 0.6 mm de profundidad en ambas caras y leído en el sentido correcto en cada una. Los números empiezan con 5 mm de altura y se reducen para caber, hasta 2.5 mm; una unión sin espacio para su número aparece en la lista. Las piezas se numeran desde la capa inferior hacia arriba.

## Vista previa, descarga y división del modelo

1. {{ui:Vista previa}} corta el modelo e indica cuántas piezas, uniones y conectores hay, si cada pieza supera la revisión para impresión 3D y cabe en la plataforma, y enumera el tamaño de cada pieza. Un anillo marca cada conector y número en la vista.
2. {{ui:Descargar las piezas (.zip)}} guarda un zip: un archivo por pieza (STL o 3MF, según elija en **Archivos**), cada una de pie sobre la plataforma; las espigas; y la **hoja de montaje**: una imagen de las piezas separadas con sus números (`assembly.svg` y `assembly.png`) y una lista de las piezas y uniones (`assembly.txt`).
3. {{ui:Dividir el modelo}} coloca las piezas en el modelo en lugar de los grupos o componentes seleccionados, con los nombres de la hoja de montaje, en un solo paso: {{ui:Deshacer}} devuelve el original. Necesita que estén seleccionados los grupos o componentes a dividir; la descarga funciona con lo que se imprime.

## Mover los conectores manualmente

Tras una vista previa, **Conectores a mano** le permite corregir dónde van los conectores:

- {{ui:Mover uno}}: haga clic en un anillo rojo de la vista (se vuelve verde) y luego en el lugar donde debe ir en el corte.
- {{ui:Añadir uno}}: haga clic en la vista donde debe ir un conector. Se coloca en el plano de corte que alcance su clic, entre las dos piezas de ese punto.
- {{ui:Quitar uno}}: haga clic en un anillo rojo para retirar ese conector.

Cada cambio se vuelve a comprobar como los automáticos: no se crea un punto demasiado cerca del contorno, de otro corte o de otro conector, y la tarjeta lo indica. {{ui:Automático otra vez}} olvida sus posiciones. Se conservan mientras el modelo, la selección y los cortes no cambien.

Una vista previa se mantiene hasta que cambien el modelo, la selección o un ajuste; entonces la tarjeta le pide volver a hacer la vista previa.

:::note
Cada pieza se comprueba como lo haría la revisión de impresión 3D antes de descargarla. Su laminador sigue decidiendo cómo se imprime cada pieza: revise cada una allí e imprima primero una unión para ver cómo gestiona su impresora la holgura.
:::
