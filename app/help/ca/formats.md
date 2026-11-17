---
title: Formats de fitxer en detall
summary: Exactament què conserva, converteix i deixa fora cada format que ModelCraft obre, importa i exporta.
keywords: formats, tipus de fitxer, modelcraft, json, 3dm, nurbs, skp, collada, dae, obj, mtl, gltf, glb, stl, step, stp, ap214, ap242, ply, alembic, abc, memòria cau, fbx, 3mf, ifc, dwg, dxf, unitats, eixos, Y amunt, Z amunt, mil·límetres, límits
from: c47d2d28
---

El model de ModelCraft és en metres amb Z (blau) amunt. Cada format següent es converteix a o des d'aquest sistema.

## ModelCraft (.modelcraft)

| Què | Detalls |
|---|---|
| Obrir | {{ui:Obre}} ({{key:Mod+O}}) o deixar-lo caure sobre la vista. També s'accepten els fitxers que acaben en `.json` |
| Desar | {{ui:Desa}} ({{key:Mod+S}}), com a baixada |
| Conserva | Tot: geometria, cares i els seus colors, materials i textures importades, llums, arestes suaus, grups, components, noms, guies, escenes, les unitats i l'última càmera i l'estil |
| Deixa fora | L'historial de desfer |
| Límit | 200 MB |

Un fitxer desat amb una versió de ModelCraft més nova que la vostra es rebutja: "Aquest model s'ha desat amb una versió més nova de ModelCraft (versió de fitxer …). Actualitzeu ModelCraft per obrir-lo." Un fitxer que no és un model de ModelCraft diu "Aquest fitxer no és un model de ModelCraft (no és JSON)." o "Aquest no és un fitxer de ModelCraft que puguem obrir: …".

## USD (.usd, .usda, .usdc, .usdz)

Obrir, importar, i {{ui:Desa com a}} o {{ui:Exporta}} › {{ui:USD (.usda, .usdc, .usdz)…}}. Un fitxer USD que ModelCraft ha desat s'obre de nou sense perdre res; els fitxers USD d'altres programes s'obren com a malles, grups, components, llums i càmeres. Vegeu [Desa, obre i exporta USD](topic:usd).

## Collada (.dae)

Importació i exportació. El millor format per intercanviar models amb altres modeladors 3D.

- **Exportació:** Collada 1.4.1, Z amunt, metres. Una geometria per cada definició de grup o component; els components s'escriuen una vegada i es col·loquen per referència, de manera que continuen compartits. Les cares amb forats o contorns còncaus es divideixen en triangles. Els colors esdevenen materials. Les arestes soltes s'escriuen com a línies. Els noms que no són vàlids en el format s'ajusten, i el nom exacte es conserva al costat.
- **Importació:** els triangles, els polígons (amb forats), els ventalls i les tires de triangles esdevenen cares; les línies esdevenen arestes. S'apliquen les transformacions dels nodes, l'eix vertical del fitxer i la seva unitat. Un node col·locat en diversos llocs, o una geometria usada per diversos nodes, arriba com a component; la resta de nodes arriben com a grups. Els colors difusos del material esdevenen colors de cara.
- **No importat:** textures, pells i morfs, càmeres, llums, alguns tipus de transformació (look-at i skew) i referències a altres fitxers. La barra d'estat els compta.
- **Perdut en exportar:** quines arestes són suaus. **En importar,** les superfícies triangulades es mantenen com a triangles, amb les diagonals suavitzades perquè les zones planes continuïn llegint-se com una sola superfície.

## OBJ (.obj, .mtl)

Importació i exportació.

- **Importació:** deixeu caure el `.obj` juntament amb el seu `.mtl` i les imatges de textura (o importeu només el `.obj`: arriba sense materials, i la barra d'estat indica el `.mtl` que volia). Es llegeix en metres amb Y amunt. Cada objecte (`o`, o si no `g`) esdevé una [malla](topic:meshes), amb les seves cares tal com són (els quadrilàters es mantenen com a quadrilàters). Es mantenen les coordenades de textura, les normals i els colors per vèrtex. La imatge de color d'un material (`map_Kd`, PNG, JPEG o WebP) arriba com a textura, amb les seves opcions d'escala i desplaçament; altrament, el seu color (`Kd`). Les arestes on les normals del fitxer es trenquen són dures; sense normals, decideixen els grups d'alisat del fitxer. Els altres mapes (relleu, normal), els punts, les línies i les corbes es compten i es deixen fora. OBJ no té unitat, de manera que un model fet en mil·límetres o polzades arriba a una mida incorrecta: escaleu-lo després d'importar (vegeu [Gira i escala](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)).
- **Exportació:** metres, Y amunt, coordenades del món. Un objecte per cada col·locació de grup; els components s'escriuen completament a cada col·locació. Les malles mantenen les seves pròpies cares, coordenades de textura i normals; les cares unides per [arestes suaus](topic:soften) reben una normal per cantonada. Quan el model té colors, es baixa un `.mtl` al costat de l'`.obj`. Quan té textures importades, l'`.obj`, el `.mtl` i les imatges es baixen junts en un sol `.zip`.
- **Límit:** 2 milions de vèrtexs o cares; 64 MB de text.

## glTF (.glb, .gltf)

Importació i exportació, glTF 2.0.

- **Importació:** un `.glb`, o un `.gltf` juntament amb el seu `.bin` i els fitxers de textura: deixeu-los caure a la vista tots alhora (o trieu el `.glb`). Un `.gltf` donat sol indica quin fitxer necessita: "Aquest fitxer .gltf necessita "…": obriu la versió .glb, o deixeu caure el .gltf juntament amb els seus fitxers."
  - **Les malles** arriben com a [malles](topic:meshes), una per cada malla del fitxer, amb les normals, les coordenades de textura i els colors per vèrtex del fitxer conservats. Les arestes on les normals del fitxer es trenquen són dures; la resta són suaus. Una malla usada en diversos llocs es manté compartida.
  - **Els nodes** esdevenen grups, amb el nom que tenen al fitxer. Les malles instanciades (EXT_mesh_gpu_instancing) arriben com una sola malla col·locada moltes vegades.
  - **Materials:** una textura de color base (PNG, JPEG o WebP) arriba com a textura, col·locada segons les coordenades de textura del fitxer (amb qualsevol transformació de textura), i es conserva en desar; altrament, el color base. El metall, la rugositat, els mapes de normals, el vidre, la capa transparent, el sheen i les altres extensions de material es llegeixen però encara no es conserven: la barra d'estat ho indica.
  - **Llums** (KHR_lights_punctual): els llums puntuals i de focus esdevenen [llums](topic:lights). Els llums direccionals es compten: el sol il·lumina el model.
  - **Les càmeres** esdevenen [escenes](topic:scenes).
  - **Els personatges amb esquelet** arriben dempeus tal com els deixa el fitxer; els seus ossos i animacions, i els morph targets, es compten i encara no es conserven.
  - **Els fitxers comprimits** (Draco, meshopt) i les dades quantificades es llegeixen. Els descodificadors només es carreguen per als fitxers que els necessiten.
  - Els punts i les línies es compten i es deixen fora (una malla conté cares). Les textures KTX2 es deixen fora; les cares conserven el seu color.
- **Exportació** (`.glb`): glTF 2.0 binari, metres, Y amunt. Una malla per cada definició, de manera que els components continuen compartits. Les malles mantenen les seves normals, coordenades de textura i colors per vèrtex; les cares unides per [arestes suaus](topic:soften) porten normals suaus. Els colors i els materials esdevenen materials (un material, com el seu color); les textures importades s'escriuen com a textures. Els llums que estan encesos esdevenen llums puntuals i de focus (els llums d'àrea no tenen equivalent en glTF i es deixen fora); les escenes esdevenen càmeres. Les arestes soltes es deixen fora.
- **Límit:** fitxers de fins a 300 MB; unes 130 milions de xifres de geometria.

## STL (.stl)

Importació i exportació.

- **Importació:** binari o ASCII. STL no té unitat: es llegeix com a **mil·límetres**, com ho escriuen les impressores i l'exportació pròpia de ModelCraft. Les cantonades en el mateix punt s'uneixen, de manera que una peça tancada arriba com una [malla](topic:meshes) tancada. Els colors del fitxer (les convencions VisCAM / SolidView i Materialise) pinten les cares.
- **Exportació,** per a la impressió 3D: STL binari, **mil·límetres**, Z amunt. Només triangles: els grups i les arestes soltes es deixen fora. Les cares pintades porten el seu color segons la convenció VisCAM / SolidView, que altres programes ignoren si no la llegeixen. Exporteu sòlids tancats per a una impressió neta.

## STEP (.step, .stp)

Només importació. STEP és el que envien els modeladors de peces i els proveïdors: fitxers AP203, AP214 i AP242.

- **Importació:** ModelCraft llegeix el fitxer per si mateix, a la pàgina, i converteix cada sòlid en una [malla](topic:meshes) tancada de triangles: les cares planes es mantenen planes, les cares corbes (cilindres, cons, esferes, tors, superfícies B-spline) es converteixen en moltes cares petites i planes, amb les arestes dins d'una mateixa cara corba suaus i les arestes entre dues cares vives. Els fitxers STEP indiquen la seva unitat; el model arriba a la seva mida real. Un conjunt arriba amb cada peça on el fitxer la situa, cada peça com la seva pròpia malla dins d'un grup que porta el nom del fitxer. Els colors, els noms de peça de l'arbre del conjunt i les toleràncies (PMI) no es llegeixen.
- **Missatges:** el que s'ha saltat o dibuixat més aproximat s'afegeix a la línia d'estat ("Nota: …"); un fitxer sense cap sòlid, un fitxer danyat o un que supera els límits ho indica i no afegeix res.
- **Límit:** fitxers de fins a 300 MB; 400 000 cares i 8 milions de triangles.

## .3dm

Només importació. Els fitxers `.3dm` contenen models NURBS: polisuperfícies, superfícies, malles, corbes i blocs.

- **Importació:** ModelCraft llegeix el fitxer per si mateix, a la pàgina. Les malles arriben tal com són; cada cara d'una polisuperfície o extrusió prové de la malla de renderitzat desada amb el fitxer, altrament ModelCraft la tessel·la (plans, superfícies NURBS, superfícies de revolució, corbes extruïdes, extrusions; retallades per les seves arestes, i les polisuperfícies tancades com a malles tancades). Les corbes esdevenen arestes, els blocs esdevenen components (els blocs dins de blocs es mantenen), les capes esdevenen etiquetes (ocultes quan estan desactivades), i el color de l'objecte (el seu propi, el de la seva capa o el del seu material) pinta les seves cares. El fitxer indica la seva unitat; el model arriba a la seva mida real. Pas a pas: [Importa un model .3dm](topic:import-3dm-files).
- **Missatges:** la línia d'estat indica quantes cares han vingut de malles desades i quantes s'han tessel·lat, i anomena el que s'ha deixat de banda: punts, núvols de punts, text, cotes, trames, llums, objectes SubD, cares sobre tipus de superfície que encara no es llegeixen, blocs enllaçats.
- **Límit:** fitxers de fins a 300 MB.

## PLY (.ply)

Importació i exportació, per a malles amb colors (escaneigs, impressió 3D en color, altres modeladors).

- **Importació:** ASCII i binari. Les cares esdevenen una [malla](topic:meshes) amb les seves normals, coordenades de textura i colors per vèrtex conservats; cada cara es pinta amb el més proper dels 4,096 colors perquè vegeu ja els colors. PLY no té unitat ni convenció d'eixos: les coordenades arriben tal com són (metres, Z amunt). Un PLY només amb punts és un núvol de punts: obriu-lo a BimCraft o CivilCraft.
- **Exportació:** PLY binari amb posicions, normals i colors (i coordenades de textura quan el model les té), en metres, Z amunt.

## FBX (.fbx)

Només importació. Fitxers FBX 7 (de 2011 en endavant), binaris o ASCII, llegits pel lector propi de ModelCraft.

- Les malles arriben com a [malles](topic:meshes) amb les seves normals, coordenades de textura (cada conjunt UV) i colors per vèrtex; una malla que diversos objectes fan servir es manté compartida. Els objectes esdevenen grups amb les seves transformacions (inclosos els pivots, els desplaçaments i les prerotacions).
- Materials: la textura difusa —incrustada al fitxer, o una imatge deixada caure juntament amb el `.fbx`— arriba com a textura (les imatges TGA es mantenen com a PNG); altrament, el color difús. Els altres ajustos de material esperen el nou model de materials.
- Els eixos i la unitat del fitxer s'apliquen: tot arriba amb Z amunt, en metres.
- Els llums puntuals i de focus esdevenen [llums](topic:lights) (una intensitat FBX de 100 és el llum per defecte de ModelCraft, 800 lúmens: les intensitats FBX no tenen unitat). Les càmeres esdevenen [escenes](topic:scenes).
- Els personatges amb esquelet arriben en repòs; els ossos i les animacions es compten i encara no es conserven. Els llums direccionals i d'àrea, i la geometria que no és malla (NURBS, corbes), es compten i es deixen fora.
- Els fitxers FBX 6 i anteriors es rebutgen: deseu-los de nou com a FBX 2011 o posterior.

## Alembic (.abc)

Només importació: memòries cau de geometria de programes d'animació i d'efectes.

- Les malles (de polígons i de subdivisió) arriben com a [malles](topic:meshes), amb les seves coordenades de textura i normals; les transformacions esdevenen grups. Alembic és Y amunt i es gira a Z amunt; metres.
- Una memòria cau amb moltes mostres (una animació) arriba amb la seva primera mostra; la barra d'estat indica quantes té.
- Els punts, les corbes, les superfícies NURBS, les càmeres i els llums es compten i es deixen fora. Els fitxers de l'antiga disposició HDF5 es rebutgen: deseu-los de nou com a fitxer Alembic Ogawa.

{{ui:Comprova la impressió 3D (STL o 3MF)…}} comprova primer la forma i escriu la selecció, o tot el que es mostra. Vegeu [Prepara un model per a la impressió 3D](topic:print-3d).

## 3MF (.3mf)

Només exportació, des de {{ui:Comprova la impressió 3D (STL o 3MF)…}}. Nucli 3MF: una malla en **mil·límetres**, Z amunt, amb els seus colors com a materials. La majoria de programes de laminat (slicers) la llegeixen, i a diferència de l'STL indica la seva unitat. Les coses ocultes es deixen fora. Vegeu [Prepara un model per a la impressió 3D](topic:print-3d).

## Exportació DWG i DXF (.dwg, .dxf)

Per a programes CAD. El model s'escriu en la seva pròpia unitat: polzades per als models en peus i polzades, altrament mil·límetres, centímetres o metres (la barra d'estat la indica).

- **Les cares** esdevenen cares 3D (triangles). Les línies dins d'una cara, i les arestes suaus, s'escriuen invisibles, de manera que les cares es veuen com les de ModelCraft.
- **Les arestes soltes** esdevenen línies.
- **Els grups i els components** esdevenen blocs: un component s'escriu una vegada i es col·loca tantes vegades com s'usi, incloses les còpies girades i simètriques. Un grup que va ser estirat després de girar-lo (de manera que està inclinat) s'escriu directament al seu lloc.
- **Colors:** el DWG conserva exactament el color de cada cara; el DXF usa el més proper dels 255 colors estàndard de CAD.
- **Versions:** el DWG s'escriu com a AutoCAD 2004 (AC1018), que obren els programes CAD des del 2004 en endavant. El DXF és R12 (AC1009), la versió que llegeix qualsevol programa CAD; R12 no té camp d'unitat, de manera que cal indicar al programa CAD quina unitat ha d'usar.
- **No s'escriuen:** les guies, les cotes, les escenes i la càmera.

## IFC (.ifc)

Només exportació, per a BimCraft i altres programes BIM. IFC4 amb un projecte, un emplaçament, un edifici i les seves plantes. Cada grup o component de nivell superior esdevé un element proxy d'edifici amb el seu nom; els tancats s'escriuen com a formes sòlides (breps facetats), els oberts com a models de superfície; els forats de les cares es mantenen. La geometria solta de nivell superior esdevé un sol element anomenat "Geometria solta". Sense tipus, propietats ni materials.

**Plantes:** {{ui:Exporta}} › {{ui:Plantes IFC…}} les enumera, cadascuna amb un nom i una elevació ({{ui:Afegeix una planta}}, o {{ui:Dedueix-les del model}}, que en fa una per a cada alçada on estan situats els grups de nivell superior). En exportar, cada grup o component va a la planta situada a la seva alçada o per sota del seu punt més baix, i manté el seu lloc. Sense plantes, tot va a una sola planta, "Nivell 1", a 0. Les plantes es desen al fitxer de ModelCraft.

## DWG (.dwg) i DXF (.dxf)

Importació com a línies sobre el terra (les trames i les cares 3D com a cares); exportació tal com s'ha descrit. Vegeu [Model sobre un plànol de situació](topic:site-plan).

- **Lectura:** línies, polilínies (amb arcs), polilínies 3D, cercles, arcs, i referències a blocs incloses les matrius, des de l'espai model. Els objectes invisibles (com els estats ocults d'un bloc dinàmic) es deixen fora. Les corbes es converteixen en 48 trossos rectes per volta completa.
- **Llegit des de la 0.4:** splines i el·lipses (com a arestes), text, text multilínia i valors d'atributs (com a arestes en una lletra d'un sol traç), trames (cares amb forats), cares 3D i reblerts sòlids (cares), i cotes (dibuixades des dels propis blocs de cota del dibuix).
- **Llegit des de la 0.7:** sòlids 3D, regions i cossos (les seves dades ACIS, DWG i DXF de totes les versions), cadascun com el seu propi grup; els tancats com a sòlids. Les cares sobre superfícies que no són plans, cilindres, cons, esferes, tors ni superfícies spline simples es deixen fora i s'enumeren.
- **No es llegeix:** punts, taules, multilíders, imatges, i tot el que és a l'espai paper.
- **Unitats:** es prenen del dibuix quan les indica. Si no, ModelCraft ho pregunta.
- **El DXF** ha de ser ASCII. Els DXF binaris es rebutgen.
- **Els fitxers DWG** des d'AutoCAD R13 fins al format actual (AutoCAD 2018 i posteriors; AC1012 a AC1032) els llegeix el lector DWG propi de ModelCraft, a la pàgina; forma part de ModelCraft, de manera que funciona sense connexió sempre que funcioni ModelCraft. Les versions més antigues (R12 i anteriors) i els fitxers molt malmesos no es poden llegir; deseu-los com a DXF.
- **Límits:** les coordenades a més de 10.000 km de l'origen, o més de 2 milions de trossos de línia, es rebutgen.

## Fitxers SKP

{{ui:Importa}} (o deixeu el fitxer a la vista) llegeix fitxers de SketchUp amb el lector propi de ModelCraft, a la pàgina: no es puja res, i funciona sense connexió sempre que funcioni ModelCraft. Provat amb fitxers de SketchUp 3, 6, 7, 2014, 2017, 2018, 2020, 2025 i 2026; les altres versions haurien d'obrir-se també, però encara no s'han provat. El model arriba com un sol grup amb el nom del fitxer. Un {{key:Mod+Z}} el treu de nou. Pas a pas: [Importa un model SKP](topic:import-sketchup-files).

- **Es conserva:** cares amb els seus forats, grups (com a grups) i components (com a components, compartits), els seus noms i col·locacions, colors, etiquetes de grups i components, arestes que no formen part d'una cara, i arestes suaus i llises, de manera que les superfícies corbes es mantenen llises.
- **Colors:** el material propi d'una cara en dóna el color. Un material pintat sobre un grup o component esdevé la pintura d'aquella col·locació, de manera que les cares interiors sense color propi l'agafen, com a SketchUp; un component pintat amb dos colors es manté com un sol component.
- **Etiquetes** als grups i components esdevenen etiquetes de ModelCraft, mostrades o ocultes tal com eren. Les etiquetes de cares i arestes soltes no es conserven (ModelCraft només etiqueta grups i components); la barra d'estat les compta.
- **Les coses ocultes arriben ocultes** (cares, arestes, grups, components, i cares i arestes en una etiqueta oculta), de manera que veieu el que mostrava SketchUp; {{ui:Mostra-ho tot}} les mostra.
- **Textures:** una cara pintada amb un material amb textura conserva la seva textura, col·locada tal com és al fitxer, i el fitxer de ModelCraft conserva la imatge. Una textura sobre un grup o component sencer, una textura que falta al fitxer, o una imatge que els navegadors no poden mostrar (com un fitxer de Photoshop) només conserva el color del seu material.
- **Deixat de banda, i comptat a la barra d'estat:** les imatges col·locades al model. El text, les cotes, les guies, els plans de secció, les escenes i els estils no es llegeixen.
- **Unitats:** els fitxers de SketchUp són en polzades a dins; ModelCraft les converteix, de manera que les mides surten bé en qualsevol unitat.
- **Desar `.skp`** encara no està implementat. Per portar un model a SketchUp, exporteu Collada (`.dae`).

## No s'admet

ModelCraft no pot obrir fitxers 3DS ni IFC, i no pot desar fitxers 3DS, FBX, STEP, `.3dm` ni SketchUp (`.skp`).
