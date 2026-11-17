---
title: Modelar sobre un plano de sitio desde un DWG o DXF
summary: Traé un plano de sitio o de planta CAD como líneas sobre el suelo, respondé la pregunta de unidades, y trazalo en caras y masas.
keywords: plano de sitio, dwg, dxf, cad, importar, boceto, foto de boceto, boceto a mano, boceto en servilleta, foto, papel, colores de lápiz, bloques dinámicos, estados de visibilidad, texto, sombreado, spline, elipse, cara 3d, trazar, plano de planta, lote, línea de propiedad, unidades, base, contexto
from: 3415dc96
---

ModelCraft puede traer las líneas de un dibujo CAD 2D, un plano de sitio o un plano de planta, y colocarlas sobre el suelo para que puedas modelar encima.

## Importar el dibujo

1. Hacé clic en {{ui:Importar}} en el grupo {{ui:Archivo}} (o soltá el archivo en la vista 3D).
2. Elegí un archivo `.dwg` o `.dxf`.

   Un DWG grande tarda un momento: la barra de estado dice "Leyendo plan.dwg…" hasta que termina.

3. Si el dibujo no dice cuáles son sus unidades, un diálogo titulado "Unidades del dibujo" pregunta: "¿Qué es una unidad del dibujo?" Elegí {{ui:Pulgadas}}, {{ui:Pies}}, {{ui:Milímetros}} o {{ui:Metros}}. La mayoría de los planos de sitio de EE. UU. están dibujados en pies, los planos arquitectónicos en pulgadas, y los planos métricos en milímetros.

   El dibujo llega como un grupo de bordes sobre el suelo, seleccionado, y la vista hace zoom hacia él. La barra de estado indica cuántos bordes llegaron, por ejemplo "Importado site.dwg: 1697 bordes sobre el suelo, en un grupo. Descomponelo para dibujar directamente sobre él".

## Qué llega

- Líneas, polilíneas (incluidos sus arcos), círculos y arcos, y bloques con todo lo que tienen dentro, solo del **espacio del modelo**. Las curvas se vuelven trozos rectos cortos.
- Líneas, polilíneas, arcos, círculos, elipses y splines se apoyan planos sobre el suelo, como bordes.
- Los **sombreados** se vuelven caras sobre el suelo, con sus islas como agujeros, para que puedas empujar/tirar un área sombreada de inmediato.
- Las **caras 3D** y los rellenos sólidos se vuelven caras; las caras 3D conservan sus alturas.
- El **texto** (texto de una línea, texto multilínea y valores de atributos) se dibuja como bordes con una letra simple de trazo único, a la altura, ángulo y alineación propios del texto. Su tipografía no es la del dibujo, así que las palabras pueden quedar un poco más largas o más cortas. Los caracteres que la letra no tiene forma se dibujan como cajitas pequeñas y se cuentan.
- Las **cotas** se dibujan como las muestra el dibujo (sus líneas, flechas y textos, como bordes y caras).
- Los **bloques dinámicos** llegan como los muestra el dibujo: cada bloque colocado en el estado de visibilidad con que fue guardado, y solo las líneas de ese estado. La barra de estado los lista con los estados mostrados y los demás estados que tiene cada uno, por ejemplo "Receptáculo mostrado como Duplex ×38, GFI ×7 (estados: Duplex, GFI)". ModelCraft no cambia de estado.
- Los **sólidos 3D, regiones y cuerpos** (los datos ACIS del dibujo) llegan como sus propios grupos: un sólido cerrado como sólido, una región o cuerpo abierto como caras. Las caras planas llegan completas; las caras curvas (cilindros, conos, esferas, toros, superficies spline simples) como triángulos pequeños con bordes suaves entre ellos, así que solo se ven los bordes propios del sólido. Una cara sobre otro tipo de superficie se deja afuera y se lista: "Todavía no dibujado (sólidos 3D): …".
- No se importan: puntos, tablas, multilíneas, imágenes y otros tipos de objetos. La barra de estado los lista por tipo, como "No importado: 12 POINT." Todo lo que está en un layout (espacio de papel) también se deja afuera, sin listarlo.
- Las capas no se conservan: todas las líneas llegan igual.

Si el dibujo está lejos de su origen (coordenadas de plano estatal, por ejemplo), igual se importa, pero puede caer lejos del origen de ModelCraft. Los dibujos a más de 10 000 km de su origen se rechazan: primero mové el dibujo más cerca de 0,0 en el programa CAD.

## Trazarlo en caras

Las líneas importadas casi nunca se cierran prolijamente en caras por sí solas. Dos formas de trabajar:

**Dejar el plano como base (recomendado)**

1. Dejá el plano como su propio grupo.
2. Dibujá tu edificio encima con {{ui:Rectángulo}} y {{ui:Línea}}, ajustando a las esquinas del plano ("Extremo") y a sus bordes ("Sobre borde").
3. Empujá tus caras hacia arriba con empujar/tirar. El plano queda intacto debajo, y podés borrar todo el grupo después de un solo clic.

El ajuste funciona entre grupos: podés ajustarte a las esquinas del plano sin abrirlo.

**Dibujar sobre las líneas propias del plano**

1. Seleccioná el grupo del plano y hacé clic en {{ui:Descomponer}}. Sus líneas pasan a ser bordes sueltos.
2. Donde un contorno cerrado debería ser una cara, dibujá una línea sobre cualquiera de sus bordes con {{ui:Línea}}, de esquina a esquina. Cuando el contorno está cerrado y es plano, la cara normalmente se completa. Si no, buscá un hueco o una superposición en el contorno y dibujá sobre él.
3. Empujala con empujar/tirar.

Esto funciona mejor con un plano limpio. En un relevamiento complejo, trazar encima es más rápido.

## Problemas

- "Este es un DXF binario. Guardalo como DXF ASCII y volvé a intentar." Guardá el DXF de nuevo desde el programa CAD como ASCII (texto).
- "…no tiene líneas, arcos ni círculos en el espacio del modelo para importar." Lo más probable es que el dibujo esté todo en layouts, o que sea todo texto y sombreados.
- "No se pudo leer este dibujo (…). Puede estar dañado, o guardado en una versión de DWG que el lector no maneja…" Los paréntesis dicen por qué, por ejemplo "La versión DWG AC1009 no es compatible". Guardalo como DXF, o como DWG desde AutoCAD 2000 a 2018, desde el programa CAD.
- El plano tiene el tamaño equivocado: elegiste mal la unidad. Deshacé ({{key:Mod+Z}}) e importá de nuevo, o [escalá](topic:rotate-scale) el grupo por el factor correcto (12 entre pies y pulgadas, 25.4 entre pulgadas y milímetros).

Para convertir curvas de nivel en un terreno que puedas esculpir, ver [Terreno](topic:terrain).

## Desde una foto de un boceto a mano

**Archivo › Importar una foto de boceto…** toma una foto de un boceto en papel (JPEG, PNG o TIFF; una foto directa desde el teléfono sirve) y crea el mismo tipo de bordes sobre el suelo. Indicá qué papel es (o dejá que lo encuentre, tomado como A4) y la escala del boceto, por ejemplo 1 : 100. Se detecta el borde del papel y la foto se endereza, la tinta se traza en líneas y arcos, y cada color de lápiz (negro, rojo, azul, verde) se vuelve un grupo propio con una etiqueta (**Boceto negro**, **Boceto rojo**, …), todo dentro de un grupo con el nombre de la foto. Es un solo paso de deshacer, y todo ocurre en esta computadora: no se envía nada a ningún lado.

Cuando no se encuentra un borde de papel, toda la foto se toma como la hoja y la línea de estado lo dice: medí algo que conozcas y escalá el grupo si está mal. Trazá las líneas en caras como se indicó arriba.
