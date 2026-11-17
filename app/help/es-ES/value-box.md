---
title: Escribir medidas exactas en el cuadro de valores
summary: Todas las formas de escribir longitudes, tamaños, puntos, desplazamientos, ángulos, lados y copias, y cómo se leen las unidades y los números sin unidad.
keywords: cuadro de valores, cuadro de medidas, vcb, escribir, exacto, cota, longitud, unidades, pies, pulgadas, métrico, milímetros, coordenadas, desplazamiento, matriz, lados, ángulo, coma decimal
from: 0148dc3d
---

El cuadro de valores está en la barra de estado inferior, con una etiqueta que cambia según la herramienta. Mientras trabaja muestra el tamaño en vivo; en cualquier momento puede escribir uno exacto.

## Cómo escribir

1. Empiece la acción con un clic (la primera esquina, la cara o el punto desde el que desplazar).
2. Escriba. No hace falta hacer clic en el cuadro de valores: un dígito o uno de `. , - ' " [ < * /` envía lo que escriba a ese cuadro.
3. Pulse {{key:Enter}}.

Pulse {{key:Esc}} en el cuadro de valores para borrarlo y volver a la vista. En una pantalla táctil, toque el cuadro de valores para mostrar el teclado.

Si ModelCraft no puede leer lo que escribió, la barra de estado dice «Escriba una longitud, por ejemplo 3m, 10'6" o 4m,3m.» Si la herramienta no puede usarlo, dice «Eso no ha funcionado: …» con el motivo.

## Longitudes

| Escriba | Significa |
|---|---|
| `3m` `320cm` `3200mm` | Metros, centímetros, milímetros |
| `10'` `10ft` `10 feet` | Pies |
| `6"` `6in` `6 inches` | Pulgadas |
| `10'6"` `10' 6"` `10'-6 1/2"` | Pies y pulgadas, con fracción |
| `6 1/2"` `6-1/2"` `3/4"` | Pulgadas con fracción |
| `1.5ft` `.5m` | Decimales con unidad |
| `120` | Un número sin unidad, en la unidad del modelo |

**Un número sin unidad usa la unidad del modelo**, tal como se muestra en el selector de la esquina inferior derecha: pulgadas en un modelo de pies y pulgadas (así que `120` son 10 pies), milímetros en un modelo en milímetros, y así sucesivamente. Escribir una unidad siempre prevalece, sea cual sea la unidad del modelo. Las comillas tipográficas y las marcas de prima (’ ” ′ ″) también se leen como pies y pulgadas.

:::warning
Use siempre un **punto** para los decimales: `2.5m`. La coma separa dos valores, así que `2,5` significa 2 y 5 (dos valores), sean cuales sean sus ajustes de idioma.
:::

## Cálculos

Cualquier longitud puede ser un cálculo: sume `+`, reste `-`, multiplique `*`, divida `/` y use paréntesis. No hace falta calculadora.

| Escriba | Significa |
|---|---|
| `2.5/3` | Un tercio de 2.5 (en la unidad del modelo) |
| `12'6"+3/4"` | 12' 6 3/4" |
| `(24'-0")/3` | 8' |
| `2*450mm` | 900 mm |
| `4+7/16` | 4 7/16" en un modelo de pies y pulgadas |
| `3m-25cm` | 2.75 m |

Un número sin unidad está en la unidad del modelo cuando es una longitud (`2.5/3` en un modelo en metros es 0.833 m), y es un factor simple cuando multiplica o divide una longitud (`2*450mm`). Los ángulos y los factores también admiten cálculos: `90/2` es 45°. Dos longitudes multiplicadas dan un área, no una longitud, así que `2m*3m` se rechaza.

Si ModelCraft no puede calcularlo, la barra de estado indica qué está mal y dónde, por ejemplo «División entre cero (carácter 4).» Un paréntesis también abre el cuadro de valores, así que puede empezar con `(`.

Estos conservan su propio significado: `/3`, `3x` y `*3` tras una copia, `24s` para lados, y `/3` con una arista seleccionada (que [divide la arista](topic:divide)).

## Por herramienta

| Herramienta | Etiqueta | Escriba |
|---|---|---|
| {{ui:Línea}} | {{ui:Longitud}} | Una longitud (hacia el puntero), o un punto o desplazamiento (abajo) |
| {{ui:Rectángulo}} | {{ui:Cotas}} | Dos longitudes: `4m,3m`, `12',10'`. Un punto y coma también funciona: `4m;3m` |
| {{ui:Círculo}}, {{ui:Polígono}} | {{ui:Lados}}, luego {{ui:Radio}} | Antes del primer clic, el número de lados: `12s` o `12` (de 3 a 999). Después, el radio |
| {{ui:Empujar/tirar}} | {{ui:Distancia}} | Una longitud. Una negativa va en sentido contrario |
| {{ui:Desplazar}} | {{ui:Distancia}} | Una longitud (hacia el puntero), o un punto o desplazamiento. Tras una copia: `3x`, `*3`, `/3` |
| {{ui:Girar}} | {{ui:Ángulo}} | Grados: `90`, `-45`, `22.5` |
| {{ui:Escalar}} | {{ui:Escalar}} | Un factor mayor que 0: `2`, `0.5`, `1.25` |
| {{ui:Cinta}} | {{ui:Desfase}} o {{ui:Longitud}} | Una longitud |
| {{ui:Dividir}} | {{ui:Partes}} | Cuántas partes iguales: `5`, `5s` o `/5` (de 2 a 1000). Véase [Dividir una arista o curva en partes iguales](topic:divide) |
| {{ui:Cota}} | {{ui:Desfase}}, luego {{ui:Longitud}} | Dónde va la línea de cota; justo después de colocarla, una nueva longitud redimensiona el modelo |
| {{ui:Seleccionar}} | {{ui:Valor}} | Con una cota o arista seleccionada, una nueva longitud redimensiona el modelo. Véase [Acotar y redimensionar](topic:dimensions) |

## Puntos y desplazamientos

Para {{ui:Línea}} y {{ui:Desplazar}}, tras el primer clic:

- `[x,y,z]` va a ese punto exacto del modelo (en los ejes propios del grupo cuando edita dentro de un grupo). Ejemplo: `[0,0,3m]` está a 3 m justo encima del origen.
- `<dx,dy,dz>` va esa distancia desde el primer punto a lo largo de los ejes rojo, verde y azul. Ejemplo: `<0,0,10'>` está a 10 pies justo arriba.

Cada uno de los tres valores puede tener su propia unidad: `<12',0,6">`.

## Copias tras un desplazamiento

Justo después de una copia con {{ui:Desplazar}}:

| Escriba | Crea |
|---|---|
| `3x` o `*3` | 3 copias seguidas con la misma separación |
| `/3` | 3 copias repartidas uniformemente desde el original hasta la primera copia |

Hasta 500 copias. Véase [Desplazar, copiar y crear matrices](topic:move-copy#a-row-of-copies).

## Las longitudes escritas necesitan una dirección

Una sola longitud escrita va en la dirección en que apunta el puntero desde el primer clic. Si escribe justo después de hacer clic, antes de mover nada, todavía no hay dirección y no ocurre nada. Mueva un poco el puntero hacia donde quiera ir y luego escriba.

## La unidad del modelo

Cambie la unidad en el selector de la esquina inferior derecha: {{ui:ft y in}}, in, ft, yd, mi, mil, µm, mm, cm, m o km, siempre que estén activadas en {{ui:Configuración}} › {{ui:General}} › {{ui:Unidades}} (la unidad propia del modelo siempre está). Una longitud escrita con la marca de cualquier unidad se lee en esa unidad. Véase [Unidades, valores escritos y listas de unidades](common:unit-lists). Cambia cómo se muestran las longitudes y cómo se leen los números sin unidad; el modelo sigue teniendo el mismo tamaño. La unidad se guarda en el archivo.

Así se muestran los tamaños:

| Unidad | Longitudes | Áreas | Volúmenes |
|---|---|---|---|
| ft y in | `10' 6 1/2"` (a 1/16") | sq ft | cu ft |
| in | `126 1/2"` | sq in | cu in |
| m | `3.2 m` | m² | m³ |
| cm | `320 cm` | cm² | cm³ |
| mm | `3200 mm` | m² desde 0.01 m², si no mm² | m³ desde 0.01 m³, si no mm³ |

Un modelo nuevo empieza en pies y pulgadas cuando el idioma del navegador está configurado en una región de Estados Unidos (y en Liberia y Birmania), y en milímetros en el resto de casos. Si una unidad está marcada con una estrella en {{ui:Configuración}} › {{ui:General}} › {{ui:Unidades}}, se usa en su lugar, cuando ModelCraft la tiene. O cambie el selector después de {{ui:Nuevo}}.
