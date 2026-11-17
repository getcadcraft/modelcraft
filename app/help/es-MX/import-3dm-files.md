---
title: Importar un modelo .3dm
summary: Importe un archivo .3dm con sus mallas, superficies, curvas, bloques, capas y colores; de dónde vienen los triángulos y qué se deja fuera.
keywords: 3dm, importar, nurbs, polisuperficie, brep, superficies, malla de render, extrusión, curvas, bloques, capas, etiquetas, colores, unidades, cambiar, migrar
from: 3cf29879
---

ModelCraft lee archivos `.3dm` con su propio lector, en la página. No se sube nada, y funciona sin conexión siempre que ModelCraft también funcione. Se han probado archivos guardados en los formatos de las versiones 5, 6, 7 y 8; los más antiguos (versiones 2 a 4) deberían abrirse, pero todavía no se han probado.

## Importar el archivo

1. Haga clic en {{ui:Importar}} en el grupo {{ui:Archivo}} (o suelte el archivo `.3dm` en la vista 3D).
2. Elija el archivo.

   La barra de estado dice "Leyendo chair.3dm…" mientras lo lee, y luego lo que entró, por ejemplo "Importado chair.3dm: 14 mallas (8330 caras), 8 curvas, 5 colocaciones de bloque, 3 capas como etiquetas. Superficies: 7 caras de las mallas guardadas en el archivo, 29 teseladas por CadCraft."

El modelo completo llega como un grupo con el nombre del archivo, seleccionado, y la vista hace zoom a él. Un {{key:Mod+Z}} lo quita todo de nuevo, incluidas las etiquetas.

## De dónde vienen los triángulos

ModelCraft modela con caras y mallas, así que cada superficie del archivo entra como una [malla](topic:meshes) de pequeños triángulos planos. Para cada cara de una polisuperficie (y cada extrusión), ModelCraft toma, en este orden:

1. **La malla de render guardada en el archivo.** La mayoría de los programas de modelado guardan con cada superficie la malla que mostraron en pantalla; cuando está, ModelCraft la usa tal cual.
2. **Su propia teselación**, cuando el archivo no tiene malla guardada: planos, superficies NURBS, superficies de revolución (esferas, conos, toros, formas de torno), curvas extruidas y extrusiones (con sus agujeros y tapas), recortadas por sus aristas. Las caras de una polisuperficie comparten sus puntos de arista, así que una polisuperficie cerrada entra como malla cerrada. Las zonas curvas se dividen hasta que los triángulos quedan dentro de aproximadamente 0.15 % del tamaño del objeto respecto de la superficie real.
3. **Nada**, para una cara de un tipo de superficie que ModelCraft todavía no lee. La barra de estado indica cuántas caras son y de qué tipo.

La parte "Superficies:" de la barra de estado indica cuántas caras vinieron de mallas guardadas y cuántas teseló ModelCraft. Las aristas dentro de una cara del archivo son suaves y las aristas entre dos caras son vivas, así que una cara curva se sombrea con suavidad.

:::tip
Para las formas más fieles, guarde el archivo con sus mallas de render en el programa que lo creó (normalmente es lo predeterminado; una opción de "guardar pequeño" las omite).
:::

## Qué entra

- **Mallas** con sus colores de vértice y coordenadas de textura.
- **Polisuperficies, superficies y extrusiones**, como se describió arriba.
- **Curvas** (líneas, polilíneas, arcos, círculos, curvas NURBS y curvas unidas a partir de ellas) como [aristas](topic:curves), un grupo de aristas por capa.
- **Bloques** se convierten en [componentes](topic:groups-components): cada colocación de un bloque es una colocación de un solo componente, así que editar una copia cambia todas. Se conservan los bloques dentro de bloques.
- **Capas** se convierten en [etiquetas](topic:tags) con el nombre completo de la capa ("Furniture::Chairs"), ocultas cuando la capa estaba apagada. La colocación de cada objeto lleva la etiqueta de su capa.
- **Colores.** El color de un objeto viene de donde indique el archivo: su propio color, el de su capa o el color base de su material. Pasa a ser la pintura de sus caras.
- **Los objetos ocultos entran ocultos**; {{ui:Mostrar todo}} los muestra.
- **Unidades:** el archivo indica su unidad; el modelo entra con su tamaño real.

## Qué se deja fuera (y se indica)

La parte "Notas:" de la barra de estado nombra todo lo que no entró, con cuántos:

- puntos y nubes de puntos, texto, puntos de texto, cotas, directrices, sombreados, luces, planos de recorte y detalles de presentación;
- objetos SubD: conviértalos en mallas o polisuperficies en el programa que creó el archivo antes;
- caras en superficies desfasadas y otros tipos de superficie que ModelCraft todavía no lee, cuando el archivo no guardó malla para ellas;
- bloques vinculados desde otros archivos (solo se lee el archivo que importa);
- extrusiones con extremos inclinados (a inglete), que entran con extremos rectos.

Las texturas de material, la configuración de render, las vistas guardadas, los grupos y el texto de usuario no se leen; un material solo da su color base.

## Límites

Archivos de hasta 300 MB. Un archivo dañado indica qué está mal y no agrega nada; un objeto que no se puede leer se deja fuera y se cuenta, y el resto entra.
