---
title: Si veniu d'altres modeladors
summary: Com els hàbits de modelatge amb prem/estira s'hi corresponen a ModelCraft, tecla per tecla, i les diferències que sorprenen la gent.
keywords: canvi, migra, familiar, diferències, modelador prem estira, skp, dreceres, hàbits, compara, quadre de mesures, outliner, informació de l'entitat
from: 74ffd4ac
---

Si heu modelat a SketchUp, ModelCraft us semblarà familiar: la mateixa idea de cares i prem/estira, les mateixes lletres d'eina, un quadre de valor on escriviu sense fer clic, la inferència amb els eixos vermell, verd i blau, grups, components, un Outliner, Informació de l'entitat i escenes. Aquesta pàgina enumera el que es transfereix directament i, més important, el que no.

## Hàbits que es mantenen

| Esteu acostumat a | A ModelCraft |
|---|---|
| Premer Space per a Selecciona, L Línia, R Rectangle, C Cercle | El mateix: {{key:Space}}, {{key:L}}, {{key:R}}, {{key:C}} |
| Premer P Prem/Estira, M Mou, Q Gira, S Escala, E Esborrador, T Cinta mètrica | El mateix: {{key:P}}, {{key:M}}, {{key:Q}}, {{key:S}}, {{key:E}}, {{key:T}} |
| Premer O Òrbita, H Desplaça, Z Zoom, Shift+Z Zoom Extensió | El mateix: {{key:O}}, {{key:H}}, {{key:Z}}, {{key:Shift+Z}} |
| Premer G per fer un component | El mateix: {{key:G}}. {{key:Shift+G}} fa un grup |
| Escriure al quadre de mesures sense fer-hi clic | El mateix, al quadre de valor de la part inferior. Premeu {{key:Enter}} |
| Escriure `4m,3m` per a un rectangle, `12s` per als costats | El mateix |
| Escriure `3x` o `/3` després d'una còpia amb Mou | El mateix; `*3` també funciona |
| Escriure `[x,y,z]` o `<dx,dy,dz>` per a un punt o un desplaçament | El mateix |
| Escriure un número sol en un model en polzades arquitectòniques i obtenir polzades | El mateix |
| Arrossegar amb el botó del mig per orbitar, Shift amb el botó del mig per desplaçar, la roda per fer zoom al cursor | El mateix |
| Fer doble clic amb Prem/Estira per repetir la distància | El mateix |
| Tecles de fletxa per bloquejar el vermell, verd, blau i paral·lel | El mateix: {{key:Right}} vermell, {{key:Left}} verd, {{key:Up}} blau, {{key:Down}} paral·lel |
| Mantenir Shift per bloquejar una inferència | El mateix |
| Ctrl (Option en un Mac) per copiar mentre es mou | {{key:Ctrl}}, {{key:Mod}} o {{key:Alt}}, en qualsevol ordinador |
| Shift per alternar, Ctrl per afegir, Shift+Ctrl per treure de la selecció | Les mateixes tecles; en un Mac useu {{key:Mod}} on diu Ctrl |
| Finestra d'esquerra a dreta, intersecció de dreta a esquerra | El mateix |
| Una eina de Cota per etiquetar longituds | {{key:D}}, i més: escriviu una longitud nova en una cota i el model es redimensiona. Vegeu [Cota i redimensionament](topic:dimensions) |
| Fer doble clic a una cara per la cara més les arestes; triple clic per a tot el connectat | El mateix |
| Fer doble clic a un grup per editar-lo; Esc per tancar | El mateix |
| Dibuixar una línia sobre una cara per dividir-la; esborrar una aresta entre cares coplanàries per unir-les | El mateix |
| Empènyer un rectangle de finestra a través d'un mur per tallar-lo | El mateix |
| Cares posteriors en gris blau; Inverteix les cares | El mateix color; {{ui:Inverteix la cara}} a {{ui:Informació de l'entitat}} |
| Escenes com a pestanyes sobre la vista, Page Up i Page Down | El mateix, amb {{ui:Reprodueix}} al tauler {{ui:Escenes}} |
| Ombres segons la data, l'hora, la latitud i la longitud, amb el nord en verd | El mateix, al tauler {{ui:Estil}} |

## Diferències que sorprenen la gent

### Desar és una baixada

No hi ha cap {{ui:Desa}} que sobrescrigui el fitxer que heu obert, cap diàleg d'Anomena i desa amb un nom, cap desament automàtic i cap fitxer de còpia de seguretat. {{ui:Desa}} ({{key:Mod+S}}) baixa un fitxer `.modelcraft` nou cada vegada, normalment a la carpeta de baixades. Deseu sovint, i renombreu o moveu els fitxers vosaltres mateixos. Vegeu [Obrir, desar, importar i exportar](topic:files).

### Importa fitxers .skp, però no els desa

{{ui:Importa}} llegeix fitxers de SketchUp amb el lector propi de ModelCraft, a la pàgina: grups, components, colors, textures a les cares, etiquetes i arestes suaus s'hi transfereixen. Vegeu [Formats de fitxer en detall](topic:formats#skp-files). ModelCraft no pot desar `.skp`: per tornar enrere, exporteu Collada des de ModelCraft i importeu-lo a SketchUp.

### Sense menú del botó dret

El arrossegament amb el botó dret desplaça; un clic dret no fa res. Les ordres que trobaríeu al menú contextual són a {{ui:Informació de l'entitat}} ({{ui:Inverteix la cara}}, {{ui:Edita}}, {{ui:Descompon}}, {{ui:Feu-lo únic}}, {{ui:Crea un component}}) i al grup {{ui:Organitza}} de la barra d'eines.

### Les unitats són a la barra d'estat

No hi ha Informació del model ni elecció de plantilla. El selector d'unitats és a la part inferior dreta. Un model nou comença en peus i polzades als Estats Units i en mil·límetres a la resta, segons la configuració d'idioma del navegador. Els decimals sempre s'escriuen amb punt: `2.5m`, mai `2,5m`, perquè la coma sempre separa valors.

### La pintura té materials propis

{{ui:Pinta}} ({{key:B}}) pinta colors sòlids i els materials de la secció {{ui:Materials}}: maó, revestiment, teulada, fusta, pedra i més, dibuixats per ModelCraft. Encara no podeu carregar una imatge pròpia com a material; es conserven les textures que arriben amb els fitxers importats. Vegeu [Pinta amb colors i materials](topic:paint).

### L'escala és uniforme, sense nanses

{{ui:Escala}} no mostra una caixa amb nanses. Feu clic al punt que es queda quiet, un punt de referència, i després a la nova mida o escriviu un factor. Sempre escala de manera uniforme en totes les direccions. Per estirar en una sola direcció, feu servir Prem/Estira o moveu una cara, torneu a escriure l'amplada, la profunditat o l'alçada d'un grup a {{ui:Informació de l'entitat}}, o [canvieu la mida amb una cota](topic:dimensions).

### Gira escull el seu pla on feu clic

No hi ha cap transportador que s'enganxi a les cares mentre passeu el cursor amb les tecles de fletxa per triar el pla. Feu clic al centre sobre una cara per girar en el pla d'aquesta cara, o sobre el terra per girar al voltant de la vertical. Les tecles de fletxa fan orbitar la vista abans del primer clic.

### Inferència des dels punts que sobrevoleu

ModelCraft s'ajusta a les direccions dels eixos des del **vostre punt inicial**, i als punts, arestes i cares sota el punter. No segueix una direcció des d'un punt només sobrevolat (la línia de punts «des del punt»). Per alinear-vos amb una cantonada llunyana, bloquegeu l'eix amb una tecla de fletxa i sobrevoleu aquella cantonada: el punt bloquejat es desplaça per alinear-se amb ella. O col·loqueu una [guia](topic:guides-measure).

### El paral·lel usa l'aresta que heu sobrevolat abans de començar

La inferència paral·lela i perpendicular usa l'última aresta que el punter ha creuat **abans del primer clic**, no les arestes que sobrevoleu mentre dibuixeu. Vegeu [Inferència i ajustament](topic:inference#parallel-and-perpendicular).

### Les còpies d'un grup estan enllaçades

Copiar un grup amb {{ui:Mou}} fa una segona col·locació del mateix grup, de manera que editar-ne una canvia totes dues, com amb els components. SketchUp fa independents els grups. Vegeu [Resolució de problemes](topic:troubleshooting#editing-one-group-changed-another).

### Space no desplaça

{{key:Space}} tria {{ui:Selecciona}}, com a SketchUp. En altres aplicacions web, mantenir Space desplaça; aquí no. Arrossegueu amb el botó dret per desplaçar-vos.

### El desplaçament amb dos dits fa zoom

En un trackpad, poseu {{ui:Configuració}} › {{ui:ModelCraft}} › Desplaçament a Trackpad: dos dits orbiten, {{key:Shift}} i dos dits desplacen, un pinç fa zoom. Vegeu [Òrbita, desplaçament i zoom](topic:orbit-pan-zoom#on-a-trackpad).

Si les vostres mans coneixen les tecles de Blender en lloc de les de SketchUp, trieu l'estil de menú {{ui:Modelador}}: {{key:G}}, {{key:R}} i {{key:S}} actuen alhora sobre la selecció, {{key:E}} extrudeix (prem/estira), {{key:Shift+D}} duplica, i una barra de menú a la capçalera (Fitxer, Edita, Visualitza, Selecciona, Afegeix, Objecte, Malla) substitueix la barra d'eines. Si veniu de SketchUp, l'estil {{ui:Prem/estira}} dona una barra de menú com la seva pròpia sobre les mateixes lletres d'eina. Vegeu [Menús, tecles i ratolí](topic:menus-keys-and-mouse).

### Els sòlids empesos un dins de l'altre no es tallen

Prem/Estira talla a través de la cara que hi ha darrere al mateix objecte, però dos sòlids separats empesos l'un dins de l'altre no es creuen. No hi ha Intersecció de cares ni Eines de sòlids.

### Què falta

A mà alçada, Retalla, Divideix i Closca exterior, els vostres materials d'imatge, les extensions i una eina de presentació per a fulls no són en aquesta versió. [Encara no implementat](topic:not-built-yet) explica què fer en lloc d'això.

## Dreceres que el navegador conserva

ModelCraft funciona en un navegador, de manera que algunes dreceres pertanyen al navegador, no a l'aplicació. {{key:Mod+N}} obre una finestra del navegador (useu {{ui:Nou}}), i {{key:Mod+W}} tanca la pestanya. Si hi ha canvis sense desar, el navegador pregunta abans de tancar. Vegeu [Tecles, ratolins i trackpads](common:keys#shortcuts-the-browser-keeps).
