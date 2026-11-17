---
title: Dividir una arista o curva en partes iguales
summary: Divida una línea en tramos iguales, o asigne a un arco o círculo un nuevo número de segmentos, con la herramienta Dividir.
keywords: dividir, dividir arista, partes iguales, segmentos iguales, separar arista, segmentos, subdividir, subdividir aristas, segmentos de arco, segmentos de círculo, puntos a lo largo de una línea
from: 5c3ce3ed
---

{{ui:Dividir}} corta una arista en partes iguales, con una esquina en cada corte. Utilice las esquinas para ajustarse a ellas, para empezar líneas desde ellas o para empujar y tirar de partes de una cara.

## Dividir una arista

1. Haga clic en {{ui:Dividir}} en la barra de herramientas, o seleccione una arista y haga clic en {{ui:Dividir…}} en {{ui:Información de entidad}}.
2. Sitúe el puntero sobre la arista. Las marcas muestran dónde irán los cortes: sobre el centro de la arista son dos partes; acérquese a un extremo para obtener más.
3. Haga clic para dividirla en las partes mostradas. O escriba un número, como `5` (o `5s`, o `/5`), y pulse {{key:Enter}}: se divide de inmediato.

Las piezas quedan seleccionadas, y es un solo paso de deshacer. Una cara a la que pertenece la arista conserva su forma y gana las nuevas esquinas.

## Dividir un arco o un círculo

Sitúe el puntero sobre cualquier segmento de un arco o círculo: se divide en su conjunto.

- Un arco o círculo cuyas esquinas no usa nada más, tendido sobre su cara, **se vuelve a dibujar con ese número de segmentos** sobre el arco verdadero. Sus extremos se mantienen en su sitio y sigue siendo una sola curva, así que aún puede seleccionarlo con un clic y cambiar su radio en {{ui:Información de entidad}}. Un círculo de 24 lados dividido en 8 se convierte en un octógono.
- Cualquier otra curva —el borde de un cilindro estirado, una curva dibujada con {{ui:Curva}}, un arco con líneas unidas a sus extremos— recibe nuevas esquinas a longitudes iguales a lo largo de ella, y no se mueve nada.

## Con las teclas del modelador

La herramienta es la misma con las teclas del modelador (Configuración › ModelCraft › Teclas, o el estilo de menú Modelador), donde aparece en el menú {{ui:Malla}} como {{ui:Subdividir aristas}}.

## Puntos a tener en cuenta

- Los números escritos van de 2 a 1000; al mover el puntero se llega hasta 100.
- Una curva dibujada con {{ui:Curva}} conserva sus puntos: tras {{ui:Editar puntos}}, se vuelve a dibujar a partir de ellos y desaparecen las nuevas esquinas.

Consulte también [Dibujar caras con líneas, rectángulos, círculos y arcos](topic:draw-faces) e [Introducir medidas exactas en el cuadro de valores](topic:value-box).
