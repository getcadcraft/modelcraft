---
title: Modelar sobre un plano de sitio desde un DWG o DXF
summary: Traiga un plano de sitio o de planta CAD como líneas sobre el suelo, responda la pregunta de unidades y trácelo en caras y masas.
keywords: plano de sitio, dwg, dxf, cad, importar, boceto, foto de boceto, boceto a mano, boceto en servilleta, foto, papel, colores de pluma, bloques dinámicos, estados de visibilidad, texto, relleno de sombreado, spline, elipse, cara 3D, trazar, plano de planta, lote, línea de propiedad, unidades, base de referencia, contexto
from: 3415dc96
---

ModelCraft puede traer las líneas de un dibujo CAD 2D, un plano de sitio o un plano de planta, y colocarlas sobre el suelo para que modele encima de ellas.

## Importar el dibujo

1. Haga clic en {{ui:Importar}} en el grupo {{ui:Archivo}} (o suelte el archivo en la vista 3D).
2. Elija un archivo `.dwg` o `.dxf`.

   Un DWG grande tarda un momento: la barra de estado dice "Leyendo plan.dwg…" hasta que termina de cargarse.

3. Si el dibujo no indica cuáles son sus unidades, un cuadro de diálogo titulado "Unidades del dibujo" pregunta: "¿Cuál es una unidad del dibujo?" Elija {{ui:Pulgadas}}, {{ui:Pies}}, {{ui:Milímetros}} o {{ui:Metros}}. La mayoría de los planos de sitio en Estados Unidos están dibujados en pies, los planos arquitectónicos en pulgadas, y los planos métricos en milímetros.

   El dibujo llega como un grupo de aristas sobre el suelo, seleccionado, y la vista hace zoom hacia él. La barra de estado indica cuántas aristas llegaron, por ejemplo "Importado site.dwg: 1697 aristas en el suelo, en un grupo. Descompóngalo para dibujar directamente sobre él."

## Lo que llega

- Líneas, polilíneas (incluidos sus arcos), círculos y arcos, y bloques con todo lo que contienen, solo desde el **espacio modelo**. Las curvas se convierten en tramos rectos cortos.
- Líneas, polilíneas, arcos, círculos, elipses y splines caen planos sobre el suelo, como aristas.
- Los **sombreados** se convierten en caras sobre el suelo, con sus islas como huecos, para que pueda empujar/tirar un área sombreada de inmediato.
- Las **caras 3D** y los rellenos sólidos se convierten en caras; las caras 3D conservan sus alturas.
- El **texto** (texto de una línea, texto de líneas múltiples y valores de atributos) se dibuja como aristas en una letra simple de un solo trazo, con la altura, el ángulo y la alineación propios del texto. Su tipografía no es la del dibujo, así que las palabras pueden quedar un poco más largas o más cortas. Los caracteres sin forma en esa letra se dibujan como pequeños cuadros y se cuentan.
- Las **cotas** se dibujan como las muestra el dibujo (sus líneas, puntas de flecha y texto, como aristas y caras).
- Los **bloques dinámicos** llegan como los muestra el dibujo: cada bloque colocado en el estado de visibilidad con que se guardó, y solo las líneas de ese estado. La barra de estado los enumera con los estados mostrados y los otros estados que tiene cada uno, por ejemplo "Receptacle mostrado como Duplex ×38, GFI ×7 (estados: Duplex, GFI)". ModelCraft no cambia estados.
- Los **sólidos 3D, regiones y cuerpos** (los datos ACIS del dibujo) llegan como grupos propios: un sólido cerrado como sólido, y una región o cuerpo abierto como caras. Las caras planas llegan completas; las caras curvas (cilindros, conos, esferas, toros, superficies spline simples) llegan como triángulos pequeños con bordes suaves entre ellos, así que solo se ven las aristas propias del sólido. Una cara sobre otro tipo de superficie se omite y se lista: "No dibujado aún (sólidos 3D): …".
- No se importan: puntos, tablas, multidirectrices, imágenes y otros tipos de objeto. La barra de estado los enumera por tipo, como "No importado: 12 POINT." Lo que está en una presentación (espacio papel) también se omite, sin listarse.
- No se conservan las capas: todas las líneas llegan por igual.

Si el dibujo está lejos de su origen (coordenadas de plano estatal, por ejemplo), igual se importa, pero puede quedar lejos del origen de ModelCraft. Los dibujos que están a más de 10,000 km de su origen se rechazan: primero acerque el dibujo a 0,0 en el programa CAD.

## Trazar en caras

Las líneas importadas rara vez se cierran limpiamente en caras por sí solas. Hay dos formas de trabajar:

**Mantener el plano como base (recomendado)**

1. Deje el plano como su propio grupo.
2. Dibuje su edificio encima con {{ui:Rectángulo}} y {{ui:Línea}}, forzando a las esquinas del plano ("Punto final") y a sus aristas ("En arista").
3. Empuje/tire sus caras hacia arriba. El plano queda intacto debajo, y puede borrar todo el grupo después con un solo clic.

El forzcursor funciona entre grupos: puede forzar a las esquinas del plano sin abrirlo.

**Dibujar sobre las líneas propias del plano**

1. Seleccione el grupo del plano y haga clic en {{ui:Descomponer}}. Sus líneas pasan a ser aristas sueltas.
2. Donde un contorno cerrado debería ser una cara, dibuje una línea sobre cualquiera de sus aristas con {{ui:Línea}}, de esquina a esquina. Cuando el contorno está cerrado y es plano, la cara normalmente se rellena. Si no, busque un hueco o una superposición en el contorno y dibuje sobre él.
3. Empuje/tire la cara.

Esto funciona mejor en un plano limpio. En un levantamiento muy saturado, trazar encima es más rápido.

## Problemas

- "Este es un DXF binario. Guárdelo como DXF ASCII e intente de nuevo." Vuelva a guardar el DXF desde el programa CAD como ASCII (texto).
- "…no tiene líneas, arcos ni círculos en el espacio modelo para importar." Es probable que el dibujo esté todo en presentaciones, o que solo tenga textos y sombreados.
- "No se pudo leer este dibujo (…). Puede estar dañado, o guardado en una versión de DWG que el lector no maneja…" Los paréntesis indican el motivo, por ejemplo "La versión de DWG AC1009 no es compatible". Guárdelo como DXF, o como DWG de AutoCAD 2000 a 2018, desde el programa CAD.
- El plano tiene el tamaño incorrecto: eligió una unidad equivocada. Deshaga ({{key:Mod+Z}}) e importe de nuevo, o [escale](topic:rotate-scale) el grupo por el factor correcto (12 entre pies y pulgadas, 25.4 entre pulgadas y milímetros).

Para convertir curvas de nivel en un terreno que pueda esculpir, vea [Terreno](topic:terrain).

## A partir de una foto de un boceto a mano

**Archivo › Importar una foto de boceto…** toma una foto de un boceto en papel (JPEG, PNG o TIFF; una foto directa desde un teléfono sirve) y crea el mismo tipo de aristas sobre el suelo. Indique qué papel es (o deje que detecte la hoja, tomada como A4) y la escala del boceto, por ejemplo 1 : 100. Se detecta el borde del papel y se endereza la foto; la tinta se traza en líneas y arcos, y cada color de pluma (negro, rojo, azul, verde) se convierte en un grupo propio con una etiqueta (**Boceto negro**, **Boceto rojo**, …), todo dentro de un grupo con el nombre de la foto. Es un solo paso de deshacer, y todo ocurre en esta computadora: nada se envía a ningún lado.

Cuando no se encuentra el borde del papel, toda la foto se toma como la hoja y la línea de estado lo indica: mida algo que conozca y escale el grupo si no está bien. Trace las líneas en caras como se explicó arriba.
