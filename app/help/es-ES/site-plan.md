---
title: Modelar sobre un plano de emplazamiento desde DWG o DXF
summary: Traiga un plano de emplazamiento o de planta CAD como líneas sobre el suelo, responda a la pregunta de unidades y calque sobre él caras y volúmenes.
keywords: plano de emplazamiento, dwg, dxf, cad, importar, boceto, foto de boceto, boceto a mano, boceto en servilleta, foto, papel, colores de bolígrafo, bloques dinámicos, estados de visibilidad, texto, trama, spline, elipse, cara 3D, calcar, planta, parcela, linde, unidades, calco, contexto
from: 3415dc96
---

ModelCraft puede traer las líneas de un dibujo CAD 2D, un plano de emplazamiento o una planta, y colocarlas sobre el suelo para que pueda modelar encima.

## Importar el dibujo

1. Haga clic en {{ui:Importar}} en el grupo {{ui:Archivo}} (o suelte el archivo en la vista 3D).
2. Elija un archivo `.dwg` o `.dxf`.

   Un DWG grande tarda un momento: la barra de estado dice "Leyendo plan.dwg…" hasta que se carga.

3. Si el dibujo no indica cuáles son sus unidades, un cuadro de diálogo titulado "Unidades del dibujo" pregunta: "¿Cuánto vale una unidad de dibujo?" Elija {{ui:Pulgadas}}, {{ui:Pies}}, {{ui:Milímetros}} o {{ui:Metros}}. La mayoría de los planos de emplazamiento de EE. UU. se dibujan en pies, los planos arquitectónicos en pulgadas, y los planos métricos en milímetros.

   El dibujo llega como un grupo de aristas sobre el suelo, seleccionado, y la vista se acerca a él. La barra de estado indica cuántas aristas llegaron, por ejemplo "Importado site.dwg: 1697 aristas sobre el suelo, en un grupo. Descomponerlo para dibujar directamente sobre él."

## Qué llega

- Líneas, polilíneas (con sus arcos), círculos y arcos, y bloques con todo lo que contienen, solo desde el **espacio modelo**. Las curvas se convierten en pequeños tramos rectos.
- Líneas, polilíneas, arcos, círculos, elipses y splines caen planos sobre el suelo, como aristas.
- Las **tramas** se convierten en caras sobre el suelo, con sus islas como huecos, para que pueda empujar/tirar de un área rayada de inmediato.
- Las **caras 3D** y los rellenos sólidos se convierten en caras; las caras 3D conservan sus alturas.
- El **texto** (texto de una línea, texto multilínea y valores de atributo) se dibuja como aristas con una letra sencilla de un solo trazo, con la altura, el ángulo y la alineación propios del texto. Su tipografía no es la del dibujo, así que las palabras pueden quedar algo más largas o más cortas. Los caracteres para los que la letra no tiene forma se dibujan como pequeños cuadros y se cuentan.
- Las **acotaciones** se dibujan como las muestra el dibujo (sus líneas, flechas y textos, como aristas y caras).
- Los **bloques dinámicos** llegan como los muestra el dibujo: cada bloque colocado en el estado de visibilidad con que se guardó, y solo las líneas de ese estado. La barra de estado los enumera con los estados mostrados y los demás estados que tiene cada uno, por ejemplo "Receptáculo mostrado como Duplex ×38, GFI ×7 (estados: Duplex, GFI)". ModelCraft no cambia de estado.
- Los **sólidos 3D, regiones y cuerpos** (los datos ACIS del dibujo) llegan como grupos propios: un sólido cerrado como sólido, una región o cuerpo abierto como caras. Las caras planas llegan enteras; las caras curvas (cilindros, conos, esferas, toros, superficies spline sencillas) como pequeños triángulos con aristas suaves entre ellos, de modo que solo se vean las aristas propias del sólido. Una cara sobre otro tipo de superficie se deja fuera y se lista: "No dibujado todavía (sólidos 3D): …".
- No se importan: puntos, tablas, multilíneas, imágenes y otros tipos de objeto. La barra de estado los lista por tipo, como "No importado: 12 POINT." Lo que esté en una presentación (espacio papel) también se deja fuera, sin listarlo.
- No se conservan las capas: todas las líneas llegan por igual.

Si el dibujo está lejos de su origen (coordenadas de plano estatal, por ejemplo), se importa igualmente, pero puede caer lejos del origen de ModelCraft. Los dibujos que superen los 10,000 km desde su origen se rechazan: acerque el dibujo a 0,0 en el programa CAD antes.

## Calcar en caras

Las líneas importadas rara vez se cierran limpiamente en caras por sí solas. Hay dos formas de trabajar:

**Mantenga el plano como calco (recomendado)**

1. Deje el plano como su propio grupo.
2. Dibuje su edificio encima con {{ui:Rectángulo}} y {{ui:Línea}}, ajustando a las esquinas del plano ("Extremo") y a sus aristas ("Sobre arista").
3. Empuje/tire de sus caras hacia arriba. El plano queda intacto debajo, y puede borrar todo el grupo más tarde con un clic.

El ajuste funciona entre grupos: puede ajustar a las esquinas del plano sin abrirlo.

**Dibuje sobre las líneas propias del plano**

1. Seleccione el grupo del plano y haga clic en {{ui:Descomponer}}. Sus líneas pasan a ser aristas sueltas.
2. Donde un contorno cerrado debería ser una cara, dibuje una línea sobre cualquiera de sus aristas con {{ui:Línea}}, de esquina a esquina. Cuando el contorno está cerrado y es plano, la cara suele rellenarse. Si no, busque un hueco o un solape en el contorno y dibuje sobre él.
3. Empuje/tire de ella.

Esto funciona mejor con un plano limpio. En un levantamiento muy cargado, calcar encima es más rápido.

## Problemas

- "Este es un DXF binario. Guárdelo como DXF ASCII e inténtelo de nuevo." Guarde el DXF de nuevo desde el programa CAD como ASCII (texto).
- "…no tiene líneas, arcos ni círculos en el espacio modelo que importar." Probablemente el dibujo está todo en presentaciones, o solo tiene texto y tramas.
- "No se pudo leer este dibujo (…). Puede estar dañado, o guardado en una versión de DWG que el lector no admite…" Los paréntesis indican por qué, por ejemplo "La versión DWG AC1009 no es compatible". Guárdelo como DXF, o como DWG de AutoCAD 2000 a 2018, desde el programa CAD.
- El plano tiene un tamaño incorrecto: eligió mal la unidad. Deshaga ({{key:Mod+Z}}) e importe de nuevo, o [escale](topic:rotate-scale) el grupo por el factor correcto (12 entre pies y pulgadas, 25.4 entre pulgadas y milímetros).

Para convertir curvas de nivel en terreno que pueda esculpir, véase [Terreno](topic:terrain).

## A partir de una foto de un boceto a mano

**Archivo › Importar una foto de boceto…** toma una foto de un boceto en papel (JPEG, PNG o TIFF; una foto directa desde el móvil sirve) y crea el mismo tipo de aristas sobre el suelo. Indique qué papel es (o deje que lo encuentre, tomado como A4) y la escala del boceto, por ejemplo 1 : 100. Se detecta el borde del papel y la foto se endereza, la tinta se calca en líneas y arcos, y cada color de bolígrafo (negro, rojo, azul, verde) se convierte en un grupo propio con una etiqueta (**Boceto negro**, **Boceto rojo**, …), todo dentro de un grupo con el nombre de la foto. Es un solo paso de deshacer, y todo ocurre en este equipo: no se envía nada a ningún sitio.

Cuando no se encuentra ningún borde de papel, toda la foto se toma como hoja y la línea de estado lo indica: mida algo que conozca y escale el grupo si no encaja. Calque las líneas en caras como se explicó antes.
