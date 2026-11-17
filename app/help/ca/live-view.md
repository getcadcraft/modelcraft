---
title: La vista en directe
summary: Una finestra al costat del model que el mostra amb l'aspecte en temps real, amb sol i ombres, i que segueix cada canvi que feu; camineu-hi i definiu l'hora del dia i el mes.
keywords: compartir, panorama, 360, recorregut, recorregut virtual, visualitzador autònom, visualitzador sense connexió, enviar a un client, vídeo, vídeo de recorregut, dispersió, dispersar, herba, prat, bosc, roques, plantes, arbres, multitud, pintar plantes, vista en directe, temps real, renderitzat en temps real, recorregut, caminar, primera persona, presentació, client, segona pantalla, segona finestra, monitor, hora del dia, sol, estació, mes, ombres, oclusió ambiental, reflexions, llum de rebot, il·luminació global, webgpu, webgl
from: fca3b0d6
---

{{ui:Export}} › {{ui:Live view}} obre un panell sobre l'aplicació que mostra el model amb l'aspecte en temps real: el cel i el sol segons el lloc i la data del vostre model, les ombres del sol, els aspectes i materials que heu donat a les cares, les làmpades, i la llum que rebota de les parets i els terres. Segueix el que feu: si gireu la vista, ell també gira; si canvieu el model, en mostra el canvi un moment després. No es puja res.

## Obre-la

1. Trieu {{ui:Export}} › {{ui:Live view}}. El panell s'obre a la cantonada inferior dreta.
2. Arrossegueu la barra del títol per moure'l; estireu-ne la cantonada per fer-lo més gran.
3. {{ui:New window}} el mou a una finestra pròpia, per a una segona pantalla. {{ui:Export}} › {{ui:Live view in a new window}} l'obre allà de seguida. Si el navegador bloqueja les finestres emergents, s'obre com a panell.
4. {{ui:Close}} el tanca.

## Els controls

| Control | Què fa |
|---|---|
| {{ui:Follow the view}} | Activat: la vista en directe mira on mira la vista de ModelCraft. En caminar, es desactiva |
| {{ui:Walk}} | Camineu pel model (a continuació) |
| {{ui:Gravity}} | Mentre camineu: us manteniu sobre els terres i pugeu escales. Desactivat: es vola |
| {{ui:Time}} | L'hora del dia, de les 05:00 a les 21:00. El sol es mou mentre arrossegueu |
| {{ui:Month}} | El mes (el dia 21), per veure el sol a l'hivern i a l'estiu |
| {{ui:Quality}} | {{ui:For this computer}} (el que obté [el vostre equip](topic:your-machine)), o {{ui:Low}}, {{ui:Medium}} o {{ui:High}} |

La línia de sota indica què dibuixa la vista (WebGPU o WebGL 2), la qualitat i la llum de rebot.

## Camineu pel model

1. Gireu la vista principal cap on voleu estar i trieu {{ui:Walk}}. Us situeu sobre el terra, per sota del punt de mira de la vista, a 1.6 m d'alçada.
2. Feu clic a la vista en directe, i després useu {{key:W}} {{key:A}} {{key:S}} {{key:D}} o les tecles de fletxa. Manteniu {{key:Shift}} per córrer. Arrossegueu per mirar al voltant.
3. Els graons de fins a 40 cm es pugen (escales); qualsevol cosa més alta és una paret. Les parets us aturen i hi lliscareu al llarg.
4. Amb {{ui:Gravity}} desactivat, es vola: {{key:E}} puja, {{key:Q}} baixa.
5. {{key:Esc}} atura la marxa.

## Dispersa plantes, roques i persones

{{ui:Scatter}} a la barra de la vista en directe obre el panell de dispersió al costat de la imatge. Un conjunt de dispersió reparteix elements de la biblioteca d'entorn (arbres, arbustos, herba, flors, roques, persones, cotxes) sobre una part del model. Els elements només es dibuixen a la vista en directe: no són geometria del model, i la vista principal no els mostra.

1. **Ompliu cares:** seleccioneu cares (o un grup, com un terreny) a ModelCraft i després trieu {{ui:Fill selection}}. El conjunt les cobreix.
2. **Pinteu:** trieu {{ui:Paint}} i arrossegueu sobre la vista en directe. Amb cares seleccionades, la pintura només cau sobre elles; sense res seleccionat, cau sobre qualsevol cosa que hi hagi sota el pinzell, inclòs el terreny. {{ui:Brush size}} defineix el pinzell; {{ui:Eraser}} treu les taques pintades.
3. Marqueu què voleu dispersar. El nombre al costat de cada element és el seu pes: 3 i 1 fan tres del primer per cada un del segon.

| Control | Què fa |
|---|---|
| {{ui:Per m²}} | Quants elements hi ha per cada metre quadrat |
| {{ui:Keep away (m)}} | Cap element més a prop d'això d'altres objectes, ni sota un sostre o una taula. 0 ho desactiva |
| {{ui:Turn (°)}} | Quant gira cada element a l'atzar sobre la vertical |
| {{ui:Steepest (°)}} | Cap element on la superfície sigui més inclinada |
| {{ui:Size}} | La mida mínima i la màxima, com a factor de la mida pròpia de l'element |
| {{ui:Height from, to (m)}} | Només entre aquestes alçades (en blanc = qualsevol) |
| {{ui:Lean with the surface}} | 0 manté els elements drets; 1 els posa perpendiculars a la pendent |
| {{ui:Seed}}, {{ui:Shuffle}} | La mateixa llavor sempre dóna la mateixa dispersió; {{ui:Shuffle}} n'escull una altra |

Els conjunts es desen al fitxer .modelcraft i segueixen les cares que cobreixen quan les canvieu. El nombre màxim d'elements que dibuixa la vista en directe depèn del nivell de [el vostre equip](topic:your-machine): 20 000 per a {{ui:Processor only}}, 100 000 per a {{ui:Graphics card, basic}}, un milió per a {{ui:Graphics card, high}}. El panell indica quants se n'han col·locat de quants que demana la densitat: se'n col·loquen menys quan s'arriba al límit, o quan els objectes els deixen fora. Els elements a prop de la càmera es dibuixen com ells mateixos; els llunyans, com a formes simples amb els seus colors.

:::note
Els elements dispersos es veuen a la vista en directe (i al seu recorregut, als panorames i al visualitzador autònom). Renderitzar una imatge encara no els dibuixa.
:::

## Comparteix: panorames, recorreguts, un visualitzador, un vídeo

{{ui:Share}} a la barra de la vista en directe fa fitxers a partir de la vista en directe. Tot es fa en aquest ordinador; no es puja res.

| Opció | Què obteniu |
|---|---|
| {{ui:360° panorama}} | Una imatge de 360° des d'on està la vista (o on camineu), com a PNG equirectangular que obren els visualitzadors de panorames i la majoria de llocs de fotografia |
| {{ui:Add this spot to the tour}}, i després {{ui:Save the tour}} | Una sola pàgina web amb un panorama a cada punt i fletxes cap als punts que cada un pot veure (una paret pel mig amaga la fletxa) |
| {{ui:Save a viewer}} | Una sola pàgina web amb el model amb aquest aspecte en temps real: girar-lo, caminar-hi, anar a les seves escenes desades. S'obre sense connexió en un navegador amb WebGPU o WebGL 2, des d'una carpeta, una memòria USB o un correu, sense instal·lar res ni tenir compte, i no carrega res d'internet |
| {{ui:Video of the path}} | El recorregut de la càmera de la línia de temps (o les escenes desades en ordre) com a vídeo amb aquest aspecte en temps real, a la mida de la vista en directe: WebM o MP4 quan el navegador els pot fer, si no, imatges numerades en un ZIP |

La mida del panorama segueix la qualitat: 1024, 2048 o 4096 píxels d'amplada a {{ui:Low}}, {{ui:Medium}} i {{ui:High}}. Un fitxer de visualitzador ocupa uns 5 MB més el model.

:::note
El recorregut i el visualitzador són per mostrar, no per editar: conserven el model tal com és quan els deseu.
:::

## Qualitat

| | Baixa | Mitjana | Alta |
|---|---|---|---|
| Ombres del sol | un mapa d'ombres | tres cascades | quatre cascades |
| Oclusió ambiental (ombres de contacte) | | ✓ | ✓, més fina |
| Reflexions en metall | | | ✓ |
| Floració (si la defineix Renderitza una imatge) | | ✓ | ✓ |
| Vores suavitzades | FXAA | sobre diversos fotogrames (TAA) | sobre diversos fotogrames (TAA) |
| Llum de rebot | gruixuda | més fina | la més fina |

{{ui:For this computer}} tria Baixa en un ordinador sense targeta gràfica utilitzable, Mitjana amb un xip gràfic integrat, i Alta amb una targeta gràfica independent. Baixa està pensada per a un portàtil de 8 GB sense targeta gràfica.

## Llum de rebot

La llum que rebota d'una paret il·luminada pel sol cap al terra, i l'interior més fosc d'una estança, es calculen amb el mateix traçador de camins que fa les [imatges renderitzades](topic:render): renderitza un petit panorama en punts a través del model, en segon pla a cada nucli del processador. Mentre treballa, la línia de sota diu Llum de rebot: 40 %; quan està a punt, la vista l'incorpora. Després d'un canvi, torna a començar.

:::note
Això és una aproximació per a una vista en directe, no una imatge renderitzada: els petits detalls entre els punts reben la llum de rebot dels punts propers. Per a una imatge acabada, useu [Renderitza una imatge](topic:render).
:::

## Brillantor i colors

La vista en directe usa la mateixa brillantor, balanç de blancs, contrast i transformació de vista (ACES, AgX, filmic o estàndard) que [Renderitza una imatge](topic:render): definiu-los allà i la vista en directe els segueix.

:::note
Els navegadors difereixen. Quan el navegador té WebGPU (Chrome i Edge a Windows, macOS i ChromeOS, Safari 26), la vista en directe l'usa; en altres casos (la majoria de navegadors a Linux, sistemes Apple antics) usa WebGL 2 i es veu igual.
:::
