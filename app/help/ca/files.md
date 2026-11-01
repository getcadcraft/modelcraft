---
title: Obre, desa, importa i exporta
summary: El fitxer de ModelCraft, què pots portar dins i enviar fora, on van els fitxers, i què canvia fora de línia i entre navegadors.
keywords: obre, desa, importa, exporta, fitxer, 3dm, skp, recupera, desament automàtic, recents, escriptori, obre en 3D, traspàs, baixa, fitxer de modelcraft, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, formats, fora de línia, desa com a
from: 0b4896d1
---

ModelCraft llegeix i escriu fitxers al teu ordinador. No es puja res: un fitxer que obres es llegeix dins del navegador, i un fitxer que desis és una baixada. Consulta [On van els teus fitxers](common:your-files).

## Formats d'un cop d'ull

| Format | Obre | Importa | Exporta | Per a què serveix |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | sí | no | {{ui:Desa}} | El teu fitxer de treball. Ho guarda tot. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | sí | sí | {{ui:Desa com a}}, {{ui:Exporta}} | Programes de renderització i d'ensamblatge d'escenes. El USD propi de ModelCraft ho guarda tot. Consulta [Desa, obre i exporta USD](topic:usd). |
| SketchUp (`.skp`) | no | sí | no | Portar models de SketchUp. Manté grups, components, colors, textures a les cares, etiquetes i arestes suaus. Consulta [Importa un model SKP](topic:import-sketchup-files). |
| Collada (`.dae`) | no | sí | sí | Intercanvi de models amb altres modeladors 3D. Manté grups, components i colors. |
| OBJ (`.obj`) | no | sí | sí | Programes de renderització i de visualització. |
| glTF (`.glb`, `.gltf`) | no | sí | només `.glb` | Visors web, motors de videojocs, RA. |
| STL (`.stl`) | no | sí | sí | Impressió 3D (en mil·límetres). |
| PLY (`.ply`) | no | sí | sí | Malles amb colors: escanejos, impressió en color. |
| FBX (`.fbx`) | no | sí | no | Models de programes d'animació i de videojocs (FBX 2011 i posteriors). |
| Alembic (`.abc`) | no | sí | no | Memòries cau de geometria, a la seva primera mostra. |
| STEP (`.step`, `.stp`) | no | sí | no | Peces de programes de modelat de peces i de proveïdors, com a malles tancades a la seva mida real. Consulta [Formats de fitxer](topic:formats). |
| `.3dm` | no | sí | no | Models NURBS: polisuperfícies, malles, corbes, blocs i capes, com a malles, arestes, components i etiquetes. Consulta [Importa un model .3dm](topic:import-3dm-files). |
| 3MF (`.3mf`) | no | no | sí | Impressió 3D, amb colors (en mil·límetres). Des de {{ui:Comprova la impressió 3D (STL o 3MF)…}}: consulta [Prepara un model per a la impressió 3D](topic:print-3d). |
| IFC (`.ifc`) | no | no | sí | Programes BIM, i BimCraft. |
| DWG (`.dwg`) | no | sí | sí | Un plànol de situació o de planta sobre el qual modelar; enviar el model a un programa CAD. |
| DXF (`.dxf`) | no | sí | sí | El mateix, per a qualsevol programa CAD. |

[Formats de fitxer en detall](topic:formats) enumera exactament què manté i què deixa fora cada format.

## El fitxer de ModelCraft

Un fitxer `.modelcraft` manté el model complet: la geometria, els grups, els components, les guies, les escenes, les unitats, i la càmera i l'estil que feies servir en desar. No manté l'historial de desfer.

### Obre un model

1. Fes clic a {{ui:Obre}} al grup {{ui:Fitxer}}, o prem {{key:Mod+O}}.
2. Si el model en pantalla té canvis sense desar, ModelCraft pregunta: "Aquest model té canvis que no s'han desat. Vols desar-ne primer una còpia?" Tria {{ui:Desa una còpia}}, {{ui:Descarta els canvis}} o {{ui:Cancel·la}}.
3. Tria el fitxer `.modelcraft`.

El model s'obre en les unitats en què es va desar, i amb la càmera amb què es va desar. També pots deixar un fitxer `.modelcraft` sobre la vista 3D, o fer clic a un dels recents de la targeta d'inici (en els navegadors que poden tornar a obrir un fitxer, i a l'aplicació d'escriptori).

:::desktop
A l'aplicació d'escriptori, fer doble clic a un fitxer `.modelcraft` l'obre a ModelCraft, i també ho fa **Obre amb** en un fitxer Collada, OBJ, glTF, DWG o DXF (s'importa en un model nou).
:::

### Desa un model

Fes clic a {{ui:Desa}} o prem {{key:Mod+S}}. El navegador baixa `<nom>.modelcraft`, on el nom és el del fitxer que has obert, o "Untitled" per a un model nou.

:::desktop
A l'aplicació d'escriptori, {{ui:Desa}} escriu el fitxer que has obert al mateix lloc. Un model nou pregunta on vols desar-lo.
:::

- {{ui:Desa com a}} ({{key:Mod+Shift+S}}) desa una còpia com a fitxer `.modelcraft` o com a [USD](topic:usd); quan el navegador ho permet, demana el nom i el lloc. Si no, reanomena el fitxer baixat: el següent desament, després d'obrir el fitxer reanomenat, fa servir el nom nou.
- Cada desament és una baixada nova. Segons la configuració del navegador, va directament a la carpeta de baixades o pregunta on desar-lo. Si ja hi ha un fitxer amb aquell nom, la majoria de navegadors hi afegeixen un número, com `Untitled (1).modelcraft`.

:::chromium
Per triar la carpeta cada vegada, obre la configuració del navegador, cerca "baixades" i activa l'opció que pregunta on desar cada fitxer abans de baixar-lo.
:::

:::firefox
Per triar la carpeta cada vegada, obre **Configuració**, després **General**, i a "Baixades" tria "Pregunta sempre on desar els fitxers".
:::

:::safari
Per canviar on van les baixades, obre **Safari**, després **Configuració**, després **General**, i defineix "Ubicació de les baixades de fitxers".
:::

### Comença un model nou

Fes clic a {{ui:Nou}}. Si hi ha canvis sense desar, ModelCraft ho pregunta primer. Un model nou comença buit, en la unitat de la teva configuració regional (peus i polzades als Estats Units, mil·límetres a la resta), sense escenes.

### Si el navegador es tanca abans de desar

ModelCraft guarda al navegador una còpia del treball no desat uns segons després de cada canvi. Si la pestanya o el navegador es tanquen abans de desar, la propera vegada que obris ModelCraft pregunta "Recuperar el teu treball?". Recuperar obre el model tal com estava, encara no desat en un fitxer: desa'l per conservar-lo. Consulta [Recupera el teu treball](common:recover).

### Des de CadCraft: Obre a ModelCraft

A l'aplicació de dibuix CadCraft, **Visualitza**, després **Més**, després **Obre a ModelCraft**, passa el dibuix obert a ModelCraft en una pestanya nova, com a DWG. Arriba com arriba un DWG importat: línies a terra, en un grup, a punt per modelar a sobre. No es puja res; el fitxer passa per l'emmagatzematge propi del navegador.

## Importa

Importar afegeix un fitxer al model que tens obert; no el substitueix.

1. Fes clic a {{ui:Importa}} al grup {{ui:Fitxer}}, o deixa el fitxer sobre la vista 3D.
2. Tria un fitxer SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG o DXF.

   El fitxer arriba com a **un sol grup**, seleccionat, i la vista fa zoom per mostrar-lo. La barra d'estat diu què ha arribat i enumera el que no s'ha pogut importar, com "No importat: 2 textures".

3. Per treballar directament sobre la seva geometria, fes doble clic al grup per editar-hi a dins, o fes clic a {{ui:Descompon}}.

Algunes coses a tenir en compte:

- **Mida i direcció amunt:** els fitxers Collada indiquen la seva unitat i quin eix és amunt, i ModelCraft els converteix. glTF és sempre en metres. Els fitxers OBJ no porten unitat: ModelCraft els llegeix com a metres, amb Y amunt. Si un OBJ arriba 1000 vegades més gran o més petit, fes servir [Escala](topic:rotate-scale) amb un factor com `0.001` o `1000`.
- **DWG i DXF** arriben com a línies (arestes) a terra, no com a cares. Si el dibuix no indica la seva unitat, un diàleg titulat "Unitats del dibuix" pregunta què és una unitat del dibuix. Consulta [Modelar sobre un plànol de situació](topic:site-plan).
- **Límits:** els fitxers de més de 300 MB es rebutgen per importar, i els de més de 200 MB per obrir. Els fitxers amb més de 2 milions de vèrtexs o cares es rebutgen per ser massa grans.

## Exporta

1. Fes clic a {{ui:Exporta}} al grup {{ui:Fitxer}}.
2. Tria un format: {{ui:glTF binari (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL per a impressió (.stl, mil·límetres)}}, {{ui:PLY amb colors (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC per a BimCraft (.ifc)}}, {{ui:DWG per a CAD (.dwg, 2004)}} o {{ui:DXF per a CAD (.dxf, R12)}}.

El navegador baixa el fitxer, amb el nom del model. S'exporta el model complet, no només la selecció. Un model buit no s'exporta: "El model és buit: dibuixa alguna cosa primer." Consulta [Exporta un model per a altres programes](topic:export-model).

## En línia i fora de línia

Tot a ModelCraft s'executa al teu ordinador, així que modelar, obrir, desar, importar i exportar funcionen sense connexió una vegada carregada l'aplicació.

Per obrir ModelCraft sense cap connexió, desa'l per fer-lo servir fora de línia mentre estàs en línia:

1. Fes clic a {{ui:Desa per fer-lo servir sense connexió}} a la barra de l'aplicació de dalt.
2. El botó va comptant mentre desa ("Desant 40 de 212"). ModelCraft desa els seus propis fitxers (entre ells, el seu lector de DWG), aquesta ajuda i la biblioteca 3D, així que pot trigar una estona.
3. Quan el botó digui {{ui:Disponible sense connexió}}, ModelCraft s'obre des de la mateixa adreça sense connexió, i la importació de DWG també funciona fora de línia.

Més tard, fes clic a {{ui:Disponible sense connexió}} per a {{ui:Torna a desar (obté la versió més recent)}} o {{ui:Elimina la còpia sense connexió}}. Si el botó diu {{ui:No s'ha pogut desar}}, alguns fitxers no s'han baixat: comprova la connexió i fes-hi clic per tornar-ho a provar. {{ui:Mode sense connexió no disponible}} vol dir que aquesta finestra del navegador no pot guardar una còpia (finestres privades i alguns ordinadors gestionats). Consulta [Treballar fora de línia](common:offline).

Encara no hi ha desament al núvol. Cada model viu on el desis.

:::offline
Estàs fora de línia. Pots continuar modelant i desant. A menys que la barra de l'aplicació mostri {{ui:Disponible sense connexió}}, no tornis a carregar aquesta pestanya fins que tornis a estar en línia.
:::

## Aplicació d'escriptori

:::desktop
Fas servir ModelCraft a CadCraft Studio, l'aplicació d'escriptori amb totes les vuit aplicacions. Els fitxers s'obren i es desen on tu triïs.
:::

:::web
ModelCraft s'executa al navegador a Mac, Windows i Linux, i a CadCraft Studio, l'aplicació d'escriptori amb totes les vuit aplicacions en una sola instal·lació, des de getcadcraft.com/download.
:::
