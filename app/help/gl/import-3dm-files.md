---
title: Importar un modelo .3dm
summary: Importe un ficheiro .3dm coas súas mallas, superficies, curvas, bloques, capas e cores; de onde veñen os triángulos e que queda fóra.
keywords: 3dm, importar, nurbs, polisuperficie, brep, superficies, malla de renderizado, extrusión, curvas, bloques, capas, etiquetas, cores, unidades, cambiar, migrar
from: 3cf29879
---

ModelCraft le os ficheiros `.3dm` co seu propio lector, na páxina. Non se sube nada, e funciona sen conexión sempre que funcione ModelCraft. Probáronse os ficheiros gardados nos formatos das versións 5, 6, 7 e 8; os máis antigos (versións 2 a 4) deberían abrirse, pero aínda non se probaron.

## Importar o ficheiro

1. Faga clic en {{ui:Import}} no grupo {{ui:File}} (ou solte o ficheiro `.3dm` na vista 3D).
2. Escolla o ficheiro.

   A barra de estado di "Lendo chair.3dm…" mentres le, e despois o que entrou, por exemplo "Importado chair.3dm: 14 mallas (8330 caras), 8 curvas, 5 colocacións de bloques, 3 capas como etiquetas. Superficies: 7 caras das mallas gardadas no ficheiro, 29 teseladas por CadCraft."

O modelo completo entra como un grupo co nome do ficheiro, seleccionado, e a vista achégase a el. Un {{key:Mod+Z}} lévao todo de novo, incluídas as etiquetas.

## De onde veñen os triángulos

ModelCraft modela con caras e mallas, así que cada superficie do ficheiro entra como unha [malla](topic:meshes) de pequenos triángulos planos. Para cada cara dunha polisuperficie (e cada extrusión), ModelCraft toma, por esta orde:

1. **A malla de renderizado gardada no ficheiro.** A maioría dos programas de modelado gardan a malla que mostraron na pantalla con cada superficie; cando existe, ModelCraft úsaa tal cal.
2. **A súa propia teselación**, cando o ficheiro non ten malla gardada: planos, superficies NURBS, superficies de revolución (esferas, conos, toros, formas de torno), curvas extruídas e extrusións (cos seus buratos e tapas), recortadas polas súas arestas. As caras dunha polisuperficie comparten os seus puntos de aresta, así que unha polisuperficie pechada entra como unha malla pechada. As zonas curvas divídense ata que os triángulos quedan dentro de uns 0,15 % do tamaño do obxecto respecto da superficie real.
3. **Nada**, para unha cara dun tipo de superficie que ModelCraft aínda non le. A barra de estado indica cantas caras son e de que tipo.

A parte "Superficies:" da barra de estado indica cantas caras vennen de mallas gardadas e cantas ModelCraft tesela. As arestas dentro dunha cara do ficheiro son suaves e as arestas entre dúas caras son vivas, así que unha cara curva sombrea de forma suave.

:::tip
Para as formas máis fieis, grave o ficheiro coas mallas de renderizado no programa que o creou (normalmente é o predeterminado; unha opción de "gardar pequeno" as deixa fóra).
:::

## Que entra

- **Mallas** coas súas cores de vértice e coordenadas de textura.
- **Polisuperficies, superficies e extrusións**, como se describe enriba.
- **Curvas** (liñas, polilíneas, arcos, círculos, curvas NURBS e curvas unidas a partir delas) como [arestas](topic:curves), un grupo de arestas por capa.
- **Bloques** pasan a [compoñentes](topic:groups-components): cada colocación dun bloque é unha colocación dun mesmo compoñente, así que editar unha copia cambia todas. Os bloques dentro de bloques consérvanse.
- **Capas** pasan a [etiquetas](topic:tags) co nome completo da capa ("Mobiliario::Cadeiras"), ocultas cando a capa estaba apagada. A colocación de cada obxecto leva a etiqueta da súa capa.
- **Cores.** A cor dun obxecto vén de onde indica o ficheiro: a súa propia, a da súa capa ou a cor base do seu material. Convértese na pintura das súas caras.
- **Os obxectos ocultos entran ocultos**; {{ui:Unhide all}} mostra todos.
- **Unidades:** o ficheiro indica a súa unidade; o modelo entra co seu tamaño real.

## Que queda fóra (e xa se indica)

A parte "Notas:" da barra de estado nomea todo o que non entrou, con cantidades:

- puntos e nubes de puntos, texto, puntos de texto, cotas, indicadores, tramas, luces, planos de recorte e detalles de disposición;
- obxectos SubD: convértaos en mallas ou polisuperficies no programa que creou o ficheiro antes;
- caras en superficies desprazadas e outros tipos de superficie que ModelCraft aínda non le, cando o ficheiro non gardou malla para elas;
- bloques ligados desde outros ficheiros (só se le o ficheiro que importa);
- extrusións con extremos biselados, que entran con extremos rectos.

As texturas dos materiais, a configuración de renderizado, as vistas con nome, os grupos e o texto de usuario non se len; un material dá só a súa cor base.

## Límites

Ficheiros de até 300 MB. Un ficheiro danado indica o problema e non engade nada; un obxecto que non se pode ler queda fóra e contase, e o resto entra.
