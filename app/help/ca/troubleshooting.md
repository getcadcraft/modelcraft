---
title: Resolució de problemes
summary: Símptomes, causes i solucions, des d'una vista 3D en blanc fins a importacions amb una mida incorrecta, amb els missatges que mostra ModelCraft.
keywords: problema, error, no funciona, en blanc, webgl, gràfics, lent, missatge, importació fallida, mida incorrecta, no es pot seleccionar, tàctil, tecles que no funcionen, treball perdut
from: 6e7394be
---

## La vista 3D està en blanc

**Símptoma:** el centre de la pantalla es manté buit, o només mostra el color de fons, i fer clic a les eines no fa res.

**Causa:** ModelCraft dibuixa amb WebGL 2, els gràfics 3D del navegador. Falta quan el navegador és antic, quan l'acceleració per maquinari està desactivada, o quan el controlador gràfic està bloquejat.

**Solució:**

:::chromium
1. Obriu la configuració del navegador i cerqueu «acceleració gràfica».
2. Activeu «Utilitza l'acceleració gràfica quan sigui disponible» i reinicieu el navegador.
3. Si ja està activada, escriviu `chrome://gpu` a la barra d'adreces (`edge://gpu` a Edge) i busqueu «WebGL2» a la llista. Si diu que està desactivat, actualitzeu el controlador gràfic.
:::

:::firefox
1. Obriu **Configuració**, després **General**, i desplaceu-vos fins a «Rendiment».
2. Desmarqueu «Utilitza la configuració de rendiment recomanada», i després marqueu «Utilitza l'acceleració per maquinari quan sigui disponible». Reinicieu Firefox.
3. Si encara falla, escriviu `about:support` a la barra d'adreces i mireu la secció «Gràfics» per veure WebGL 2.
:::

:::safari
Actualitzeu macOS i Safari. Les versions recents de Safari tenen sempre activat WebGL 2. Si heu canviat funcions experimentals a **Safari**, després **Configuració**, després **Avançat** (o **Funcions experimentals**), restabliu-les.
:::

En un ordinador de treball, en un escriptori remot o en una màquina virtual, els gràfics 3D poden estar bloquejats per política. Proveu un altre ordinador. Vegeu [Navegadors i ordinadors](common:browsers).

## Les tecles no fan res, o escriuen dins d'una caixa

**Causa:** el focus del teclat és en un camp del panell: la llista {{ui:Cares}} de {{ui:Estil}}, un paràmetre del sol, el camp {{ui:Nom}} de {{ui:Informació de l'entitat}}, o el selector d'unitats. Les lletres i les tecles de fletxa llavors van a aquell camp.

**Solució:** feu clic a la vista 3D i torneu a prémer la tecla. Les tecles tampoc fan res mentre hi ha un diàleg obert.

## Escriure un número no fa res

- **Encara no hi ha direcció.** Una longitud escrita va per on apunta el punter des del primer clic. Mogueu una mica el punter en la direcció que voleu i després escriviu.
- **Moment equivocat.** La majoria d'eines accepten un valor escrit només després del primer clic: feu clic primer a la primera cantonada, a la cara o al punt des d'on voleu moure. {{ui:Cercle}} i {{ui:Polígon}} accepten un nombre de costats abans del primer clic.
- **«Escriviu una longitud, com ara 3m, 10'6" o 4m,3m.»** ModelCraft no l'ha pogut llegir. Comproveu si hi ha una coma decimal (`2,5`): useu un punt.

## Una forma comença en un lloc equivocat en una pantalla tàctil

**Símptoma:** amb un dit, el primer rectangle és correcte, però el següent rectangle, cercle o línia comença on acabava el tacte anterior en lloc d'on heu tocat.

**Causa:** un error en aquesta versió: en una pantalla tàctil, l'eina recorda l'últim punt d'ajust de l'anterior gest.

**Solució:** toqueu de nou el botó de l'eina a la barra d'eines abans de cada forma nova. Això reinicia l'eina, i el primer punt cau on toqueu.

## Editar un grup ha canviat un altre

**Símptoma:** heu copiat un grup amb {{ui:Mou}} i {{key:Ctrl}}, heu obert una còpia i l'heu editat, i l'altra còpia també ha canviat. {{ui:Esquema}} les mostra totes dues amb el mateix nom.

**Causa:** en aquesta versió, copiar un grup fa una segona col·locació del mateix grup, com passa amb un component. El botó {{ui:Feu-lo únic}} de ModelCraft només s'ofereix per als components.

**Solució:** seleccioneu la còpia que voleu canviar, feu clic a {{ui:Crea un component}} a {{ui:Informació de l'entitat}}, i després a {{ui:Feu-lo únic}}. Aquella còpia ara té el seu propi contingut. O bé feu-li {{ui:Descompon}}.

## Prem/estira no fa el que esperava

- **«Prem/estira funciona sobre una cara. Feu clic a una cara.»** Heu fet clic en una aresta o en un espai buit. Passeu el punter fins que la cara es ressalti, i després feu clic.
- **La cara és dins d'un grup.** Feu doble clic al grup per obrir-lo primer.
- **Una finestra no ha tallat el mur.** El rectangle s'ha de dibuixar sobre la cara del mur, no davant seu, i el mur ha de tenir una cara posterior. Vegeu [Talla una obertura a través d'un mur](topic:openings#if-it-did-not-cut-through).
- **Dos volums se superposen sense fusionar-se.** Els sòlids empesos un dins de l'altre no es tallen ni s'uneixen entre ells en aquesta versió.

## Una línia o una forma no ha fet una cara

Una cara només s'omple quan les arestes tanquen un bucle pla. Comproveu que l'últim punt s'ha ajustat al primer («Punt final»), i que totes les arestes es troben en un mateix pla. Un bucle lleugerament fora de pla es queda en línies. Torneu a dibuixar una de les seves arestes, ajustant-la a les cantonades.

## No puc seleccionar ni esborrar una cara

- Amb {{ui:Selecciona}}, un clic a prop d'una aresta agafa l'aresta. Feu clic més a prop del centre de la cara.
- {{ui:Esborrador}} no agafa cares. Seleccioneu la cara i premeu {{key:Delete}}, o esborreu una de les seves arestes.
- Si la cara pertany a un grup o component, el clic selecciona tot l'element. Feu doble clic per obrir-lo.

## «Seleccioneu alguna cosa per moure primer, o feu clic a sobre.»

{{ui:Mou}}, {{ui:Gira}} i {{ui:Escala}} necessiten alguna cosa sobre la qual treballar: seleccioneu-la primer, o inicieu l'eina fent clic a la cosa mateixa (no a un espai buit ni a una guia).

## «Seleccioneu primer una geometria (arrossegueu una finestra, o feu triple clic per seleccionar tot el que està connectat).»

{{key:G}} i {{key:Shift+G}} necessiten una selecció. Les guies no es poden agrupar.

## Les tecles de fletxa fan òrbita en lloc de bloquejar

Els bloquejos només funcionen després del primer clic d'una eina de dibuix o d'edició. {{ui:Prem/Estira}} no té bloquejos, i a {{ui:Gira}} no canvien el gir. En altres moments, les tecles de fletxa fan òrbita a la vista.

## Esc a la pantalla completa

A la pantalla completa, el navegador pot fer servir el primer {{key:Esc}} per sortir-ne. Premeu {{key:Esc}} de nou per cancel·lar l'eina.

## Sense botó del mig

Premeu {{key:O}} per a {{ui:Òrbita}} i arrossegueu, o useu les tecles de fletxa. Vegeu [Òrbita, desplaça i zoom](topic:orbit-pan-zoom#without-a-middle-button).

## Importacions

| Missatge | Què cal fer |
|---|---|
| «ModelCraft importa SketchUp (.skp), Collada (.dae), OBJ, glTF (.glb/.gltf), FBX, PLY, STL, Alembic (.abc), DWG i DXF. … no és cap d'aquests.» | Exporteu el model des de l'altre programa en un d'aquests formats |
| «Aquest fitxer fa més de 300 MB.» | Simplifiqueu o dividiu el model a l'altre programa |
| «…és massa gran per modelar-lo aquí (més de 2 milions de vèrtexs).» | El mateix |
| «Aquest fitxer .gltf necessita "…"…» | Deixeu el `.gltf` juntament amb els seus fitxers `.bin` i de textura, o obriu la versió `.glb` |
| «Aquest fitxer glTF necessita una extensió (…), que ModelCraft encara no llegeix.» | Torneu a exportar des de l'altre programa sense aquesta extensió (les textures KTX2, per exemple) |
| Un OBJ arriba sense els seus colors o textures | Deixeu el `.obj` juntament amb el seu `.mtl` i les imatges |
| «Aquest fitxer Alembic utilitza el disseny antic HDF5…» | Torneu-lo a desar des de l'altre programa com a fitxer Ogawa Alembic |
| Un FBX arriba sense les seves textures | Deixeu el `.fbx` juntament amb les imatges de textura, o incrusteu els suports en exportar |
| «Aquest fitxer FBX és la versió …, que ModelCraft no llegeix» | Torneu a exportar com a FBX 2011 o posterior |
| Un STL o PLY arriba 1.000 vegades més gran o més petit | El STL es llegeix en mil·límetres i el PLY en metres: escaleu-lo (vegeu [Gira i escala](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)) |
| «Això no és un fitxer Collada (.dae)…» o «…no és XML ben format…» | El fitxer està malmès o no és Collada. Torneu-lo a exportar |
| «Aquest fitxer Collada no té geometria que ModelCraft pugui importar.» | Només conté càmeres, llums o referències a altres fitxers |
| «Això és un DXF binari. Desa'l com a DXF ASCII i torna-ho a provar.» | Torneu-lo a desar des del programa CAD en ASCII |
| «Això no és un dibuix DWG…» | El fitxer no és un DWG, o està malmès |
| «No s'ha pogut llegir aquest dibuix (…). Pot estar malmès, o desat en una versió de DWG que el lector no gestiona…» | Les parèntesis indiquen el motiu. Deseu-lo com a DXF, o com a DWG d'AutoCAD 2000 a 2018, des del programa CAD |
| «Aquest dibuix arriba a més de 10.000 km del seu origen…» | Mogueu el dibuix prop de 0,0 al programa CAD |

### La importació té una mida incorrecta o està ajaguda

- **OBJ:** l'OBJ no té unitat; ModelCraft el llegeix en metres. Un model en mil·límetres arriba 1000 vegades més gran: [escaleu-lo](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size) per `0.001`; un model en polzades per `0.0254`.
- **OBJ ajagut:** ModelCraft espera fitxers OBJ amb Y amunt. Un fitxer escrit amb Z amunt arriba ajagut. Gireu-lo 90° al voltant del vermell: feu clic al centre de {{ui:Gira}} sobre una cara que mira al llarg del vermell, o obriu el fitxer al seu programa i exporteu amb Y amunt.
- **DWG o DXF:** heu triat una unitat equivocada al diàleg «Unitats del dibuix». Desfeu-ho i torneu a importar.

## Obrir fitxers

| Missatge | Què cal fer |
|---|---|
| «Aquest fitxer no és un model de ModelCraft (no és JSON).» | Useu {{ui:Importa}} per a altres formats |
| «Això no és un fitxer de ModelCraft que puguem obrir: …» | El fitxer està malmès o l'han canviat a mà |
| «Aquest model l'ha desat una versió més nova de ModelCraft…» | Obriu-lo amb la versió més nova |
| «Aquest fitxer fa més de 200 MB.» | El model és massa gran per obrir-lo aquí |

## He perdut treball

ModelCraft no es desa sol en un fitxer. Quan tanqueu o torneu a carregar una pestanya amb canvis sense desar, el navegador ho pregunta primer («Vols sortir del lloc?» o «Vols tornar a carregar el lloc?»); trieu quedar-vos i desar. {{ui:Nou}} i {{ui:Obre}} també ho pregunten («Canvis sense desar»). Si el navegador o l'ordinador s'han bloquejat, torneu a obrir ModelCraft al mateix navegador: us ofereix de nou el treball sense desar («Vols recuperar el treball?»; vegeu [Recupera el treball](common:recover)). Deseu sovint amb {{key:Mod+S}}.

## La carpeta de baixades s'omple de còpies

Cada desada és una baixada nova, amb el nom `Untitled (1).modelcraft`, `Untitled (2).modelcraft` i així successivament. Eliminiu les antigues, o configureu el navegador perquè pregunti on desar cada fitxer i sobreescrigui el fitxer antic vosaltres mateixos. Vegeu [Obre, desa, importa i exporta](topic:files#save-a-model).

## Va lent

- Cada pas de desfer guarda una còpia del model (una [malla](topic:meshes) només guarda el que ha canviat), de manera que en una importació molt gran de geometria de prem/estira cada edició triga més. Descompongueu o esborreu el que no necessiteu, deseu, i torneu a obrir: en tornar a obrir també es buida l'historial de desfer.
- Les ombres del sol són les que més costen. Desmarqueu {{ui:Ombres del sol}} mentre modeleu.

## Sense ombres

{{ui:Ombres del sol}} està desactivat, el sol és a sota a l'hora que heu triat («El sol és a sota en aquest moment.»), o l'estil és {{ui:Filferro}}, que no dibuixa ombres.

## «Aquest navegador no ha permès la pantalla completa.»

Alguns navegadors i algunes vistes incrustades no permeten la pantalla completa. Useu en canvi la pantalla completa del navegador ({{pick:mac=Control-Command-F|windows linux=F11}}).

## ModelCraft no s'obre sense connexió

ModelCraft només s'obre sense connexió si abans s'ha desat per fer-lo servir sense connexió en aquell navegador: el botó de la barra de l'aplicació ha de dir {{ui:Disponible sense connexió}}. Obriu-lo en línia i feu clic a {{ui:Desa per fer-lo servir sense connexió}}. Si el botó diu {{ui:No s'ha pogut desar}}, torneu a fer clic quan tingueu una millor connexió; {{ui:Mode sense connexió no disponible}} vol dir que aquesta finestra (una finestra privada, o un ordinador gestionat) no pot guardar una còpia. Vegeu [Treballar sense connexió](common:offline).
