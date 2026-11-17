---
title: Obre, desa, importa i exporta
summary: El fitxer de ModelCraft, què es pot portar i enviar, on van els fitxers, i què canvia sense connexió i entre navegadors.
keywords: obre, desa, importa, exporta, fitxer, 3dm, skp, recupera, desament automàtic, recents, escriptori, obre en 3D, traspàs, baixa, fitxer modelcraft, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, formats, fora de línia, desa com a
from: 3f09ab72
---

ModelCraft llegeix i escriu fitxers a l'ordinador. No es puja res: un fitxer que s'obre es llegeix dins del navegador, i un fitxer que es desa és una baixada. Vegeu [On van els fitxers](common:your-files).

## Resum dels formats

| Format | Obre | Importa | Exporta | Per a què serveix |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | sí | no | {{ui:Save}} | El fitxer de treball. Ho conserva tot. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | sí | sí | {{ui:Save as}}, {{ui:Export}} | Programes de renderitzat i de muntatge d'escenes. L'USD propi de ModelCraft ho conserva tot. Vegeu [Desa, obre i exporta USD](topic:usd). |
| SketchUp (`.skp`) | no | sí | no | Per importar models de SketchUp. Conserva grups, components, colors, textures a les cares, etiquetes i arestes suaus. Vegeu [Importa un model SKP](topic:import-sketchup-files). |
| Collada (`.dae`) | no | sí | sí | Intercanvi de models amb altres modeladors 3D. Conserva grups, components i colors. |
| OBJ (`.obj`) | no | sí | sí | Programes de renderitzat i de visualització. |
| glTF (`.glb`, `.gltf`) | no | sí | només `.glb` | Visualitzadors web, motors de jocs, RA. |
| STL (`.stl`) | no | sí | sí | Impressió 3D (en mil·límetres). |
| PLY (`.ply`) | no | sí | sí | Malles amb colors: escanejos, impressió en color. |
| FBX (`.fbx`) | no | sí | no | Models de programes d'animació i de jocs (FBX 2011 i posteriors). |
| Alembic (`.abc`) | no | sí | no | Memòries cau de geometria, a la seva primera mostra. |
| STEP (`.step`, `.stp`) | no | sí | no | Peces de modeladors de peces i de proveïdors, com a malles tancades a la mida real. Vegeu [Formats de fitxer](topic:formats). |
| `.3dm` | no | sí | no | Models NURBS: polysuperfícies, malles, corbes, blocs i capes, com a malles, arestes, components i etiquetes. Vegeu [Importa un model .3dm](topic:import-3dm-files). |
| 3MF (`.3mf`) | no | no | sí | Impressió 3D, amb colors (en mil·límetres). Des de {{ui:Check for 3D printing (STL or 3MF)…}}: vegeu [Prepara un model per a la impressió 3D](topic:print-3d). |
| IFC (`.ifc`) | no | no | sí | Programes BIM, i BimCraft. |
| DWG (`.dwg`) | no | sí | sí | Un plànol de situació o de planta on modelar; enviar el model a un programa CAD. |
| DXF (`.dxf`) | no | sí | sí | Igual, per a qualsevol programa CAD. |

[Formats de fitxer en detall](topic:formats) indica exactament què conserva i què deixa fora cada format.

## El fitxer de ModelCraft

Un fitxer `.modelcraft` conserva tot el model: geometria, grups, components, guies, escenes, les unitats, i la càmera i l'estil usats en desar-lo. No conserva l'historial de desfer.

### Obre un model

1. Feu clic a {{ui:Open}} al grup {{ui:File}}, o premeu {{key:Mod+O}}.
2. Si el model de la pantalla té canvis sense desar, ModelCraft pregunta: "Aquest model té canvis que no s'han desat. Voleu desar-ne una còpia primer?" Trieu {{ui:Save a copy}}, {{ui:Discard changes}} o {{ui:Cancel}}.
3. Trieu el fitxer `.modelcraft`.

El model s'obre amb les unitats en què es va desar, i amb la càmera amb què es va desar. També podeu arrossegar un fitxer `.modelcraft` a la vista 3D, o fer clic en un a la llista de fitxers recents de la targeta d'inici (navegadors que poden tornar a obrir un fitxer, i l'aplicació d'escriptori).

:::desktop
A l'aplicació d'escriptori, fer doble clic en un fitxer `.modelcraft` l'obre a ModelCraft, i també ho fa **Obre amb** en un fitxer Collada, OBJ, glTF, DWG o DXF (s'importa en un model nou).
:::

### Desa un model

Feu clic a {{ui:Save}} o premeu {{key:Mod+S}}. El navegador baixa `<name>.modelcraft`, on el nom és el del fitxer obert, o "Untitled" per a un model nou.

:::desktop
A l'aplicació d'escriptori, {{ui:Save}} escriu el fitxer obert al mateix lloc. Un model nou demana on desar-lo.
:::

- {{ui:Save as}} ({{key:Mod+Shift+S}}) desa una còpia com a fitxer `.modelcraft` o com a [USD](topic:usd); quan el navegador ho permet, demana el nom i el lloc. Si no, canvieu el nom del fitxer baixat: el següent desament, després d'obrir el fitxer reanomenat, usa el nom nou.
- Cada desament és una baixada nova. Segons la configuració del navegador, va directament a la carpeta de baixades o demana on desar-lo. Si ja hi ha un fitxer amb aquest nom, la majoria de navegadors hi afegeixen un número, com `Untitled (1).modelcraft`.

:::chromium
Per triar la carpeta cada vegada, obriu la configuració del navegador, cerqueu "baixades" i activeu "Pregunta on desar cada fitxer abans de baixar-lo".
:::

:::firefox
Per triar la carpeta cada vegada, obriu **Configuració**, després **General**, i a "Baixades" trieu "Pregunta sempre on desar els fitxers".
:::

:::safari
Per canviar on van les baixades, obriu **Safari**, després **Configuració**, després **General**, i definiu "Ubicació de les baixades de fitxers".
:::

### Comença un model nou

Feu clic a {{ui:New}}. Si hi ha canvis sense desar, ModelCraft pregunta primer. Un model nou comença buit, en la unitat de la teva regió (peus i polzades als Estats Units, mil·límetres a la resta), i sense escenes.

### Si el navegador es tanca abans de desar

ModelCraft guarda una còpia del treball sense desar al navegador uns segons després de cada canvi. La còpia s'escriu en segon pla, perquè un model gran no us faci esperar mentre es guarda. Si la pestanya o el navegador es tanquen abans de desar, la propera vegada que s'obri ModelCraft pregunta si voleu recuperar el treball. Recuperar obre el model tal com estava, encara no desat en un fitxer: deseu-lo per conservar-lo. Vegeu [Recupera el treball](common:recover).

### Des de CadCraft: Obre a ModelCraft

A l'aplicació de dibuix CadCraft, **Visualitza**, després **Més**, després **Obre a ModelCraft** passa el dibuix obert a ModelCraft en una pestanya nova, com a DWG. Arriba de la mateixa manera que un DWG importat: línies sobre el terra, en un grup, a punt per modelar-hi a sobre. No es puja res; el fitxer passa per l'emmagatzematge propi del navegador.

## Importa

Importar afegeix un fitxer al model obert; no el substitueix.

1. Feu clic a {{ui:Import}} al grup {{ui:File}}, o arrossegueu el fitxer a la vista 3D.
2. Trieu un fitxer SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG o DXF.

   El fitxer arriba com **un sol grup**, seleccionat, i la vista fa zoom per mostrar-lo. La barra d'estat diu què ha arribat, i enumera el que no s'ha pogut importar, com "No importat: 2 textura".

3. Per treballar directament sobre la seva geometria, feu doble clic al grup per editar-lo per dins, o feu clic a {{ui:Explode}}.

Algunes coses a tenir en compte:

- **Mida i direcció amunt:** els fitxers Collada indiquen la seva unitat i quin eix és amunt, i ModelCraft els converteix. glTF és sempre en metres. Els fitxers OBJ no porten unitat: ModelCraft els llegeix en metres, amb Y amunt. Si un OBJ arriba 1000 vegades més gran o més petit, useu [Escala](topic:rotate-scale) amb un factor com `0.001` o `1000`.
- **DWG i DXF** arriben com a línies (arestes) sobre el terra, no com a cares. Si el dibuix no indica la unitat, un diàleg titulat "Unitats del dibuix" pregunta quina és una unitat de dibuix. Vegeu [Modelar sobre un plànol de situació](topic:site-plan).
- **Límits:** els fitxers de més de 300 MB es rebutgen per importar, i els de més de 200 MB per obrir. Els fitxers amb més de 2 milions de vèrtexs o cares es rebutgen com a massa grans. Un OBJ de més de 64 MB es rebutja abans de llegir-lo. Els fitxers de text (Collada, OBJ, STL ASCII, USD en text) es llegeixen a trossos d'uns 4 MB, de manera que cap bloc de text no conté tot el fitxer; un OBJ de 16 MB va fer servir uns 0.5 GB de memòria mentre s'obria a la nostra prova.

## Exporta

1. Feu clic a {{ui:Export}} al grup {{ui:File}}.
2. Trieu un format: {{ui:glTF binary (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL for printing (.stl, millimeters)}}, {{ui:PLY with colours (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC for BimCraft (.ifc)}}, {{ui:DWG for CAD (.dwg, 2004)}} o {{ui:DXF for CAD (.dxf, R12)}}.

El navegador baixa el fitxer, amb el nom del model. S'exporta tot el model, no només la selecció. Els fitxers glTF, Collada i OBJ s'escriuen en segon pla, de manera que ModelCraft continua funcionant mentre s'exporta un model gran; la baixada comença quan el fitxer és a punt. Un model buit no s'exporta: "El model és buit: dibuixeu alguna cosa primer." Vegeu [Exporta un model per a altres programes](topic:export-model).

## En línia i fora de línia

Tot el que hi ha a ModelCraft s'executa a l'ordinador, de manera que modelar, obrir, desar, importar i exportar funcionen sense connexió, una vegada carregada l'aplicació.

Per obrir ModelCraft sense cap connexió, deseu-lo per a ús fora de línia mentre hi hagi connexió:

1. Feu clic a {{ui:Save for offline}} a la barra d'aplicació de dalt.
2. El botó va comptant ("Desant 40 de 212") mentre desa. ModelCraft desa els seus propis fitxers (entre ells el seu lector de DWG), aquesta ajuda i la biblioteca 3D, de manera que pot trigar una estona.
3. Quan el botó diu {{ui:Offline ready}}, ModelCraft s'obre des de la mateixa adreça sense connexió, i la importació de DWG també funciona sense connexió.

Més tard, feu clic a {{ui:Offline ready}} per a {{ui:Save again (get the newest version)}} o {{ui:Remove the offline copy}}. Si el botó diu {{ui:Could not save}}, alguns fitxers no s'han baixat: comproveu la connexió i feu clic-hi per tornar-ho a provar. {{ui:Offline not available}} vol dir que aquesta finestra del navegador no pot guardar una còpia (finestres privades i alguns ordinadors gestionats). Vegeu [Treballar sense connexió](common:offline).

El desament al núvol encara no està implementat. Cada model queda on es desa.

:::offline
Esteu fora de línia. Podeu continuar modelant i desant. Tret que la barra d'aplicació mostri {{ui:Offline ready}}, no torneu a carregar aquesta pestanya fins que hi hagi connexió de nou.
:::

## Aplicació d'escriptori

:::desktop
Esteu fent servir ModelCraft a CadCraft Studio, l'aplicació d'escriptori amb les vuit aplicacions. Els fitxers s'obren i es desen on es trïa.
:::

:::web
ModelCraft s'executa al navegador a Mac, Windows i Linux, i a CadCraft Studio, l'aplicació d'escriptori amb les vuit aplicacions en una sola instal·lació, des de getcadcraft.com/download.
:::
