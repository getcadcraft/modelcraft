---
title: Crea materials amb nodes
summary: Construïu un material a partir de textures, imatges i operacions a l'espai de treball Ombrejat, veieu-lo a la vista mentre avanceu, i pinteu cares amb ell.
keywords: ombrejat, precàlcul, precàlcul de textures, oclusió ambiental, ao, curvatura, precàlcul de normals, alt polígon, baix polígon, mapa de llum, decal, decals, adhesiu, logotip, etiqueta, pintura de textura, pinzell, material, materials, materialx, mtlx, openpbr, standard surface, biblioteca de materials, librarycraft, conjunt de textures, pbr, importa textures, zip, cc0, arrossega, node, nodes, editor de nodes, shader, textura, procedural, soroll, escacat, voronoi, cel·les, ones, maons, rajoles, fusta, marbre, degradat, brutícia, desgast de vora, rampa de color, barreja, relleu, mapa de normals, rugositat, metalness, opacitat, retall, emissió, brillantor, desplaçament, mapatge de caixa, triplanar, uv, imatge, textura d'imatge, openpbr
from: d7368b21
---

Un material fet a l'espai de treball **Ombrejat** pertany al fitxer. És un graf petit: **nodes** que fan textures, imatges i números, enllaçats a la **Sortida de material**, les entrades de la qual són l'aspecte de la superfície (color base, rugositat, metalness, normal, opacitat, emissió i la resta del model OpenPBR). Pinteu cares amb ell com amb qualsevol material de la biblioteca, i cada canvi es veu a la vista a l'instant.

## Obertura

Trieu {{ui:Ombrejat}} a la llista d'espais de treball. La vista 3D manté la part de dalt de la pantalla i l'**editor de nodes** ocupa la part de baix. El tauler de la dreta llista els materials propis del fitxer.

- {{ui:Material nou}} crea un de gris amb només la seva Sortida de material.
- **Feu una còpia editable d'un material de la biblioteca**: converteix maó, fusta, rajola i la resta en un graf que podeu canviar; la seva textura arriba per un node de textura de biblioteca, i els seus relleus per un node de relleu.
- {{ui:Pinta-hi}} pinta les cares o els grups seleccionats, o tria el material per a l'eina Pinta. Els materials de l'eina Pinta també llisten els del fitxer sota **En aquest fitxer**.
- {{ui:Duplica}} i {{ui:Suprimeix}} actuen sobre el material que editeu. Suprimir no es pot desfer: les cares pintades amb ell mostren el color per defecte fins que les torneu a pintar.

## Materials de la biblioteca

El tauler **Biblioteca de materials** llista els materials de la biblioteca, cadascun amb una previsualització renderitzada amb el traçador de camins de CadCraft. Són conjunts de textures publicats sota CC0, acreditats a les persones que els van fer.

- Feu clic a un per portar-lo al fitxer (amb les seves imatges) i, amb cares o grups seleccionats, pintar-los.
- Arrossegueu-ne un sobre una cara o un grup de la vista per pintar només allò.
- Esdevé un dels materials del fitxer: canvieu-ne els nodes com qualsevol altre. El seu crèdit es mostra al tauler i es queda al fitxer.

## Importa un conjunt de textures

{{ui:Imatges o un zip…}} o {{ui:Una carpeta…}} sota **Importa un conjunt de textures** crea un material a partir d'un conjunt de mapes. Els mapes es troben pels mots dels seus noms de fitxer: color, albedo, diffuse o basecolor; roughness (o gloss, convertit en rugositat); metalness o metallic; normal (OpenGL o DirectX, segons `gl` / `dx` al nom); height o displacement; ambient occlusion; opacity; emission. Els mapes empaquetats (ARM, ORM) no s'inclouen. La rajola comença a 1 × 1 m: definiu-ne la mida real a la Sortida de material. L'alçada va al desplaçament amb la seva escala a 0; augmenteu l'escala per usar-lo en malles.

## MaterialX

MaterialX és el format obert que altres programes 3D i de renderització fan servir per intercanviar materials.

- {{ui:Exporta com a MaterialX…}} desa el material que editeu: els seus valors, i cada textura com a imatge PNG al costat del fitxer `.mtlx` (en un zip). Trieu l'ombrejador amb què s'escriu: **OpenPBR Surface** (MaterialX 1.39, el mateix model que usa ModelCraft) o **Standard Surface** (MaterialX 1.38, que més programes llegeixen avui). Les textures se situen per coordenades UV en metres; la col·locació de caixa i triplanar s'escriu com a UV.
- {{ui:Importa MaterialX…}} (o {{ui:Des d'una carpeta…}}) llegeix fitxers `.mtlx` amb ombrejadors OpenPBR, Standard Surface, UsdPreviewSurface o glTF PBR. Doneu-li també les imatges, o un zip amb tot: una imatge es troba pel seu camí, pel seu nom, o pel seu nom amb un altre tipus d'imatge (un `.exr` que el fitxer anomena pot arribar com a `.jpg` al costat). Les textures, els mapes de normals, les operacions aritmètiques, les barreges i el desplaçament arriben com a nodes; la resta conserva el seu valor, i la línia d'estat diu què s'ha deixat fora.

## Decals

Un decal és una imatge posada sobre una superfície (un logotip, un rètol, una etiqueta, una taca) amb un material propi.

- Definiu **Amplada d'un decal nou**, després {{ui:Col·loca un decal…}} (o {{ui:Decal}} a la barra d'eines), trieu una imatge PNG, JPEG o WebP i feu clic a una cara. La imatge es projecta sobre les superfícies d'allà mantenint les proporcions; les parts transparents d'un PNG segueixen transparents.
- Pertany al grup o component on hi heu fet clic i es mou amb ell. Cobreix les cares de la seva caixa que miren cap a la mateixa banda, i s'atura a les vores d'allò on jeu.
- Cada decal té el seu propi material, anomenat **Decal: <imatge>**, a la llista del fitxer: editeu-lo com qualsevol altre (rugositat, un relleu, una brillantor). {{ui:Material}} al costat del decal l'obre.
- Al costat de cada decal hi ha la seva amplada (l'alçada segueix la imatge), {{ui:Gira}} (un quart de volta) i {{ui:Suprimeix}}. Els decals es guarden amb els materials del fitxer, fora de {{ui:Desfés}}.
- Es veuen a la vista ombrejada, en renderitzats ràpids i en imatges d'alta qualitat.

## Pinta sobre la textura

{{ui:Pinta textura}} (o {{ui:Pinta}} sota **Pinta sobre la textura**) converteix el punter en un pinzell rodó. Arrossegueu sobre una cara que porti un dels materials d'aquest fitxer: el pinzell pinta la imatge darrere del color base.

- En una malla pinta seguint les UV de la malla (desplegueu-la primer a l'espai de treball UV); en altres cares pinta a través de la cara, de manera que la pintura es repeteix amb la rajola del material.
- Un material amb el color base pla rep una imatge nova de 512 × 512 píxels d'aquell color la primera vegada que el pinteu. Un material el color base del qual ve d'altres nodes necessita un node d'imatge enllaçat al Color base.
- Definiu al tauler el color del pinzell, la mida (en píxels de la imatge), la intensitat i la duresa. {{ui:Desfés el traç}} o Ctrl+Z (mentre pintes) enrere un traç, fins als últims 20.
- La imatge pintada es desa al fitxer. Els materials de la biblioteca no es poden pintar: feu-ne abans una còpia editable.

## Precalcula textures

**Precalcula textures** escriu en imatges el que la forma i l'escena donen a una superfície, seguint les UV d'una malla.

- Seleccioneu una malla que tingui UV (desplegueu-la a l'espai de treball UV), marqueu els mapes i premeu {{ui:Precalcula}}:
  - **Oclusió ambiental**: com de obert és cada punt. Les cantonades, els plecs i els llocs sota altres coses s'enfosqueixen. Tot el que es mostra al model l'ombreja, fins a la distància d'oclusió.
  - **Curvatura**: brillant a les vores exteriors, fosc a les cantonades interiors, gris mitjà a les parts planes o lleugerament corbes, sobre l'amplada de vora que definiu.
  - **Normals de l'objecte d'alt detall**: seleccioneu també una còpia detallada. El seu detall de superfície s'escriu com un mapa de normals per a l'altre; el precàlcul es fa sobre l'objecte amb menys triangles. La distància de cerca és la distància màxima entre les dues superfícies.
  - **Il·luminació**: el sol del lloc i la data del model (Estil) amb les seves ombres, i el cel, com a mapa de llum.
- Les imatges s'incorporen al fitxer i apareixen als nodes d'imatge. Si el material que editeu té un node **Brutícia i desgast de vora**, llegeix l'oclusió i la curvatura noves a l'instant.
- Més raigs per texel fan l'oclusió i la il·luminació més suaus, però triguen més. El precàlcul s'executa en segon pla als nuclis del processador de l'ordinador; {{ui:Atura el precàlcul}} l'atura.

## Construeix un graf

1. {{ui:Afegeix un node…}} (o {{key:Shift+A}} a l'editor de nodes) afegeix un node al mig de l'editor.
2. Arrossegueu des d'un punt de sortida (a la dreta d'un node) fins a un punt d'entrada (a l'esquerra d'un altre) per enllaçar-los. Un segon enllaç a una entrada substitueix el primer; arrossegueu una entrada enllaçada per desenllaçar-la.
3. Les entrades sense enllaç mostren el seu valor: escriviu un número o trieu un color. La configuració és a la part inferior de cada node.

Arrossegueu un node pel seu títol per moure'l, arrossegueu l'espai buit per desplaçar i useu la roda per fer zoom. {{key:Delete}} suprimeix els nodes o l'enllaç seleccionats, {{key:Mod+Z}} desfà, {{key:Mod+D}} duplica i {{key:F}} mostra tots els nodes. Cada canvi és un sol pas de desfer de l'editor de nodes. El desfer del model no canvia els materials.

| Nodes | Què fan |
|---|---|
| Coordenades de textura | On és un punt sobre la rajola: repetir-lo, desplaçar-lo, girar-lo un quart. |
| Valor, Color | Un número, un color. |
| Imatge | Una imatge del fitxer (una que arriba amb un model importat, o una que hi heu afegit amb {{ui:Afegeix una imatge…}}). Trieu **Colors** per a una foto i **Dades** per a un mapa de rugositat o de normals. |
| Textura de biblioteca | La textura, la rugositat i l'alçada d'un material de la biblioteca. |
| Escacat, Soroll | Quadrats; soroll fractal suau amb el seu detall, rugositat i llavor. |
| Cel·les Voronoi, Ones, Degradat | Cel·les (distància al punt més proper, les vores entre cel·les, un color per cel·la); bandes en travessat, amunt o en diagonal, com a sinus, dent de serra o triangle, corbades pel soroll; degradats lineals, quadràtics, radials i esfèrics. |
| Maons, Rajoles | Files de maons amb desplaçament alternat, o una quadrícula de rajoles: colors, morter o reblert, un espai i un bisell en metres, una alçada per als relleus, un número aleatori per peça. |
| Fusta, Marbre | Anells seguint la fibra amb fibres fines; vetes corbades per turbulència. |
| Brutícia i desgast de vora | Desgasta les vores convexes i embruta els buits, a partir de les imatges de curvatura i oclusió d'una malla ([Precalcula textures](topic:shading#bake-textures) les fa; o definiu-ne els dos paràmetres d'imatge, en la disposició UV de la malla: situeu el material per coordenades UV). Sense elles no canvia res. |
| Barreja de colors, Rampa de color, To/saturació/valor, Brillantor i contrast, Invertir, Gamma, Separa i Combina RGB | Treball de color. |
| Matemàtica, Interval de valors | Operacions aritmètiques sobre números (sumar, multiplicar, potència, pas suau i més). |
| Relleu, Mapa de normals | Una normal a partir d'una alçada (Relleu) o d'una imatge de mapa de normals (Mapa de normals: trieu la direcció del canal verd). |

## La Sortida de material

Els seus paràmetres indiquen com s'estén la textura sobre les superfícies:

- **Amplada de rajola** i **Alçada de rajola**: quants metres cobreix una rajola de la textura. Tot el que fa un graf es repeteix per la rajola sense costures.
- **Col·locat per**: **Coordenades UV** segueix les cares (cares de prem/estira: al llarg de cada cara; malles: les seves UV, una unitat UV = una rajola); **Caixa** projecta des de l'eix més proper dels tres; **Triplanar** barreja les tres projeccions a les superfícies inclinades (**Nitidesa de la barreja**: un valor més alt és una barreja més dura).
- **Força de la normal** escala l'entrada de normal. **Escala de desplaçament** fixa quant mou l'entrada de desplaçament els vèrtexs d'una malla.
- {{ui:Més entrades}} mostra la resta d'entrades OpenPBR: capa (coat), pelusa (fuzz), subsuperfície, pel·lícula fina, transmissió i els seus colors.

## En imatges d'alta qualitat

El traçador de camins llegeix el color base, la rugositat, la metalness, l'opacitat, la normal i l'emissió del graf tal com canvien sobre la superfície. Qualsevol altra entrada que enllaceu (una capa que varia, per exemple) s'usa pel seu valor mitjà; el tauler diu quina és. Un retall d'una textura d'opacitat mostra la seva forma, i la seva ombra és uniformement translúcida. Una textura lluminosa il·lumina el que mira, sense que es mostregi com un llum.

**Desplaçament** mou els vèrtexs només de les malles, així que afegiu un modificador de subdivisió per tenir detall ([Modificadors](topic:modifiers)). Les cares de prem/estira mantenen la seva forma i reben els relleus de la normal.

:::tip
En un ordinador amb WebGPU el graf es calcula a la targeta gràfica; sense ella, al processador. El resultat és el mateix.
:::
