---
title: Importar un modelo .3dm
summary: Importe un archivo .3dm con sus mallas, superficies, curvas, bloques, capas y colores; de dónde vienen los triángulos y qué se deja fuera.
keywords: 3dm, importar, nurbs, polisuperficie, brep, superficies, malla de renderizado, extrusión, curvas, bloques, capas, etiquetas, colores, unidades, cambio de programa, migrar
from: 3cf29879
---

ModelCraft lee los archivos `.3dm` con su propio lector, en la propia página. No se sube nada, y funciona sin conexión siempre que funcione ModelCraft. Se han probado los archivos guardados con los formatos de las versiones 5, 6, 7 y 8; los anteriores (versiones 2 a 4) deberían abrirse también, pero aún no se han probado.

## Importar el archivo

1. Haga clic en {{ui:Importar}} en el grupo {{ui:Archivo}} (o suelte el archivo `.3dm` en la vista 3D).
2. Elija el archivo.

   Mientras lee, la barra de estado dice "Leyendo chair.3dm…", y después lo que ha entrado, por ejemplo "Importado chair.3dm: 14 mallas (8330 caras), 8 curvas, 5 colocaciones de bloques, 3 capas como etiquetas. Superficies: 7 caras de las mallas guardadas en el archivo, 29 teseladas por CadCraft."

Todo el modelo llega como un solo grupo con el nombre del archivo, seleccionado, y la vista hace zoom sobre él. Con un {{key:Mod+Z}} se quita todo de nuevo, incluidas las etiquetas.

## De dónde vienen los triángulos

ModelCraft modela con caras y mallas, así que cada superficie del archivo entra como una [malla](topic:meshes) de pequeños triángulos planos. Para cada cara de una polisuperficie (y de cada extrusión), ModelCraft toma, en este orden:

1. **La malla de renderizado guardada en el archivo.** La mayoría de programas de modelado guardan con cada superficie la malla que mostraron en pantalla; cuando existe, ModelCraft la usa tal cual.
2. **Su propia teselación**, cuando el archivo no tiene malla guardada: planos, superficies NURBS, superficies de revolución (esferas, conos, toros, formas de torno), curvas extruidas y extrusiones (con sus huecos y tapas), recortadas por sus aristas. Las caras de una misma polisuperficie comparten sus puntos de arista, así que una polisuperficie cerrada entra como malla cerrada. Las zonas curvas se dividen hasta que los triángulos quedan dentro de aproximadamente 0.15 % del tamaño del objeto respecto a la superficie real.
3. **Nada**, para una cara de un tipo de superficie que ModelCraft aún no lee. La barra de estado indica cuántas caras son y de qué tipo.

La parte "Superficies:" de la barra de estado indica cuántas caras vienen de mallas guardadas y cuántas ha teselado ModelCraft. Las aristas dentro de una misma cara del archivo son suaves y las aristas entre dos caras son vivas, así que una cara curva se sombrea con suavidad.

:::tip
Para formas lo más fieles posibles, guarde el archivo con sus mallas de renderizado en el programa que lo creó (suele ser lo predeterminado; una opción de "guardar en tamaño reducido" las omite).
:::

## Qué entra

- **Mallas** con sus colores de vértice y coordenadas de textura.
- **Polisuperficies, superficies y extrusiones**, tal como se ha descrito.
- **Curvas** (líneas, polilíneas, arcos, círculos, curvas NURBS y curvas unidas a partir de ellas) como [aristas](topic:curves), un grupo de aristas por capa.
- Los **bloques** se convierten en [componentes](topic:groups-components): cada colocación de un bloque es una colocación de un solo componente, así que editar una copia cambia todas. Los bloques dentro de bloques se conservan.
- Las **capas** se convierten en [etiquetas](topic:tags) con el nombre completo de la capa ("Furniture::Chairs"), ocultas cuando la capa estaba desactivada. La colocación de cada objeto lleva la etiqueta de su capa.
- **Colores.** El color de un objeto procede de lo que indica el archivo: su propio color, el de su capa o el color base de su material. Se convierte en la pintura de sus caras.
- Los **objetos ocultos entran ocultos**; {{ui:Mostrar todo}} los muestra.
- **Unidades:** el archivo indica su unidad; el modelo entra a su tamaño real.

## Qué se deja fuera (y se indica)

La parte "Notas:" de la barra de estado nombra todo lo que no ha entrado, con su cantidad:

- puntos y nubes de puntos, texto, puntos de texto, cotas, directrices, tramas, luces, planos de recorte y detalles de presentación;
- objetos SubD: conviértalos antes en mallas o polisuperficies en el programa que creó el archivo;
- caras en superficies desplazadas y otros tipos de superficie que ModelCraft aún no lee, cuando el archivo no guardó malla para ellas;
- bloques vinculados desde otros archivos (solo se lee el archivo que importa);
- las extrusiones con extremos oblicuos (a inglete) entran con extremos rectos.

No se leen las texturas de material, los ajustes de renderizado, las vistas con nombre, los grupos ni el texto de usuario; un material solo aporta su color base.

## Límites

Archivos de hasta 300 MB. Un archivo dañado indica qué falla y no añade nada; un objeto que no se puede leer se deja fuera y se cuenta, y el resto entra.
