---
title: Importa un model .3dm
summary: Importa un fitxer .3dm amb les seves malles, superfícies, corbes, blocs, capes i colors; d'on venen els triangles i què queda fora.
keywords: 3dm, importa, nurbs, polisuperfície, brep, superfícies, malla de render, extrusió, corbes, blocs, capes, etiquetes, colors, unitats, canvi, migra
from: 3cf29879
---

ModelCraft llegeix els fitxers `.3dm` amb el seu propi lector, a la pàgina. No es puja res, i funciona sense connexió sempre que ho faci ModelCraft. S'han provat els fitxers desats amb els formats de les versions 5, 6, 7 i 8; els més antics (versions 2 a 4) haurien d'obrir-se, però encara no s'han provat.

## Importa el fitxer

1. Fes clic a {{ui:Importa}} dins del grup {{ui:Fitxer}} (o deixa anar el fitxer `.3dm` a la vista 3D).
2. Tria el fitxer.

   La barra d'estat diu "Llegint chair.3dm…" mentre el llegeix, i després què ha entrat, per exemple "Importat chair.3dm: 14 malles (8330 cares), 8 corbes, 5 col·locacions de blocs, 3 capes com a etiquetes. Superfícies: 7 cares de les malles desades al fitxer, 29 tessel·lades per CadCraft."

El model complet arriba com un sol grup amb el nom del fitxer, seleccionat, i la vista fa zoom sobre ell. Un {{key:Mod+Z}} se'l porta de nou, incloses les etiquetes.

## D'on venen els triangles

ModelCraft treballa amb cares i malles, de manera que cada superfície del fitxer arriba com una [malla](topic:meshes) de petits triangles plans. Per a cada cara d'una polisuperfície (i per a cada extrusió) ModelCraft pren, en aquest ordre:

1. **La malla de render desada al fitxer.** La majoria de programes de modelatge desen la malla que van mostrar a la pantalla amb cada superfície; quan hi és, ModelCraft l'utilitza tal com és.
2. **La seva pròpia tessel·lació**, quan el fitxer no té malla desada: plans, superfícies NURBS, superfícies de revolució (esferes, cons, tors, formes de torn), corbes extruïdes i extrusions (amb els seus forats i tapes), retallades per les seves arestes. Les cares d'una polisuperfície comparteixen els punts de les arestes, de manera que una polisuperfície tancada arriba com una malla tancada. Les àrees corbes es divideixen fins que els triangles queden a uns 0.15 % de la mida de l'objecte respecte a la superfície real.
3. **Res**, per a una cara d'un tipus de superfície que ModelCraft encara no llegeix. La barra d'estat diu quantes cares són i de quin tipus.

La part "Superfícies:" de la barra d'estat diu quantes cares han vingut de malles desades i quantes ha tessel·lat ModelCraft. Les arestes dins d'una mateixa cara del fitxer són suaus i les arestes entre dues cares són vives, de manera que una cara corba s'ombreja de manera suau.

:::tip
Per a les formes més fidels, desa el fitxer amb les malles de render al programa que l'ha creat (normalment és l'opció per defecte; una opció de desat reduït les deixa fora).
:::

## Què entra

- **Malles** amb els seus colors de vèrtex i coordenades de textura.
- **Polisuperfícies, superfícies i extrusions**, tal com s'ha descrit abans.
- **Corbes** (línies, polilínies, arcs, cercles, corbes NURBS i corbes unides a partir d'aquestes) com a [arestes](topic:curves), un grup d'arestes per capa.
- **Blocs** esdevenen [components](topic:groups-components): cada col·locació d'un bloc és una col·locació d'un sol component, de manera que editar una còpia les canvia totes. Es conserven els blocs dins de blocs.
- **Capes** esdevenen [etiquetes](topic:tags) amb el nom complet de la capa ("Furniture::Chairs"), amagades quan la capa estava apagada. La col·locació de cada objecte porta l'etiqueta de la seva capa.
- **Colors.** El color d'un objecte ve del que indica el fitxer: el seu propi color, el de la seva capa, o el color base del seu material. Esdevé la pintura de les seves cares.
- **Els objectes amagats entren amagats**; {{ui:Mostra-ho tot}} els mostra.
- **Unitats:** el fitxer indica la seva unitat; el model entra a la seva mida real.

## Què queda fora (i s'indica)

La part "Notes:" de la barra d'estat indica tot el que no ha entrat, amb el nombre:

- punts i núvols de punts, text, punts de text, cotes, línies de crida, trames, llums, plans de retall i detalls de presentació;
- objectes SubD: converteix-los en malles o polisuperfícies al programa que ha creat el fitxer, abans de tot;
- cares en superfícies desplaçades i altres tipus de superfície que ModelCraft encara no llegeix, quan el fitxer no ha desat cap malla per a elles;
- blocs enllaçats des d'altres fitxers (només es llegeix el fitxer que importes);
- extrusions amb extrems inclinats (a inglet), que entren amb extrems rectes.

Les textures de material, la configuració de render, les vistes amb nom, els grups i el text d'usuari no es llegeixen; un material només dona el seu color base.

## Límits

Fitxers de fins a 300 MB. Un fitxer malmès diu què hi ha de malament i no n'afegeix res; un objecte que no es pot llegir es deixa fora i es compta, i la resta entra.
