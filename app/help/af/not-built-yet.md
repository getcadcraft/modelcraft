---
title: Nog nie gebou nie
summary: Wat hierdie bou van ModelCraft nog nie doen nie, en wat om vandag in plaas daarvan te doen.
keywords: ontbrekend, nog nie, beperkings, padkaart, materiale, teksture, teks, lae, snoei, verdeel, wolk, lessenaar
from: 179fa5e4
---

ModelCraft is 'n vroeë bou. Hierdie bladsy lys wat dit nog nie doen nie, sodat jy nie daarna soek nie, en die naaste manier om die werk vandag te doen.

## Teken-gereedskap

| Nog nie | In plaas daarvan, vandag |
|---|---|
| Vrye hand-tekening | Klik die punte met {{ui:Kurwe}} |
| Verander 'n boog se of sirkel se aantal segmente ná die teken | Vee dit uit en teken dit weer nadat jy `24s` getik het |
| Kies 'n tipegrafie vir [3D-teks](topic:text3d), of wysig sy woorde ná plasing | Skrap dit en voeg die teks weer by |
| Verander 'n hoek deur in 'n hoekmaat te tik, of 'n silinder se grootte vanaf sy sirkel se maat | Draai die rande met {{ui:Draai}}; skaal die silinder met {{ui:Skaal}} |
| Maate in uitgevoerde modellêers | Maate verskyn in beelde, drukke en PDF's van die aansig; modellêers dra slegs geometrie |
| Snoei, Verdeel en Buitenste dop | [Unie, Trek af en Snyding](topic:solids) geslote groepe, of [snyding van vlakke](topic:intersect) en vee uit wat jy nie nodig het nie |
| Kies die rotasie-as met die pyltjiesleutels | Klik die {{ui:Draai}}-middelpunt op 'n vlak wat in die rigting wys waarin die as moet wys |
| Slotte op meer as een afleiding terselfdertyd | Sluit een rigting met 'n pyltjiesleutel, en klik dan vas op 'n punt |
| Verstel langs 'n skuins lyn, of vanaf 'n maatlyn-einde wat nie op 'n hoek is nie | Plaas die maat op twee hoeke, langs 'n rand of langs rooi, groen of blou |

## Animasie

| Nog nie | In plaas daarvan, vandag |
|---|---|
| Vlakke, rande, die son se tyd van die dag, die styl of wat versteek is, animeer | Maak die bewegende deel 'n groep of komponent; weergee 'n afsonderlike video vir 'n ander tyd van die dag |
| 'n Kamera wat 'n geteekende pad volg, of na 'n bewegende voorwerp kyk | Stel meer kameraleutels langs die pad ([Animeer](topic:animation)) |
| Klank in video's, en hoëgehalte- (pad-gevolgde) video's sonder WebGPU | Voeg klank by in 'n videoredigeerder; sonder WebGPU, weergee die video met die vinnige weergeër ([Weergee die video](topic:animation#render-the-video)) |
| Geanimeerde lampe (helderheid, spreiding, kleur) in 'n weergegewe video, 'n lenshoek wat sonder kameraleutels in 'n video geanimeer word, animeer van materiale of weergee-instellings | Lampe animeer in die aansig; vir 'n video, sleutel ook die kamera vir 'n zoem; weergee afsonderlike video's vir verskillende lampinstellings ([Animeer enige eienskap](topic:animate)) |
| Gewigte of bene van een kant na die ander spieël, beenomhulsels wat jy kan sien, gewigte wat punt-vir-punt geskakeer word (hulle wys per vlak), die vervormde maas sien terwyl jy gewigte verf | Verf albei kante, of maak een helfte en gebruik 'n Spieël-wysiger voordat die skelet bygevoeg word; wissel tussen Verf gewigte en Pose om te kontroleer |
| Bene wat uit glTF-, FBX- of USD-lêers as 'n skelet gelees word, en skelette wat na daardie lêers geskryf word | Gevelde modelle kom in rus in met die lêer se gewigte; voeg die bene in die lêer se gewrigsvolgorde by, en gebruik dan {{ui:Gebruik die lêer se gewigte}} ([Animeer](topic:animate)) |
| 'n IK-teiken of 'n pool sleep in die aansig, 'n beperking se eie ruimte (plaaslik of wêreldwyd) om te kies, IK-kettings rek, IK langs 'n kurwe | Tik die teiken se punt, of mik na 'n voorwerp en beweeg dit; hou kettings by hul lengtes |
| Materiaal, sagte liggame, vloeistowwe, gewrigte en skarniere tussen starre liggame, botsing met 'n voorwerp se presiese vorm (slegs bokse en balle rondom), 'n lewende simulasie terwyl jy speel, 'n beginspoed of draaiing (liggame begin in rus) | Bak starre liggame en speel die sleutels; bou 'n skarnier uit sleutels; verdeel 'n vreemde vorm in bokse (groepe) |
| Uitvoer van die animasie na glTF of ander modellêers | Weergee 'n video; die `.modelcraft`-lêer, en 'n [USD-lêer](topic:usd) wat ModelCraft gestoor het, hou dit vir ModelCraft |
| Tik 'n kommentaar of titel op 'n kwessie in VR, stemnotas, die verskuiwing van 'n snitvlak met die hand in VR | Plaas die kwessie in VR, en voeg dan sy woorde by in 'n BCF-program; stel 'n snitvlak in die aansig in voordat jy ingaan: sien [Hersien die model in 'n VR-koptelefoon](topic:vr-review) |
| Mense aan die lessenaar in VR sien (slegs mense in VR wys), 'n VR-wandeling opneem | Vra hulle om in VR aan te sluit, of maak 'n [animasie](topic:animation) van die wandeling |

## Maas

| Nog nie | In plaas daarvan, vandag |
|---|---|
| Beeldhou volgens vlakke (multi-resolusie), en Detail wat driehoeke wat klein geword het, wegneem | [Beeldhou](topic:sculpt) 'n onderverdeelde maas; {{ui:Hermesh}} om dit weer gelyk te maak |
| 'n Hermaasing in vierkantige vlakke wat die vorm volg | {{ui:Hermesh}} (gelyk driehoeke), en bou dit dan weer met [Hertopologie](topic:mesh-edit#retopology) |
| Gewigte op punte geverf vir wysigers (Verplaas, Gladmaak en Krimpwrap werk op die hele maas) | Pas die wysiger toe, en beeldhou of wysig dan die dele wat dit nodig het |
| Kopieer en plak van punte, rande of vlakke, 'n mes-snit wat binne 'n vlak eindig, draadrande sonder vlak | Dupliseer die maas in Model; sny met 'n mes van rand tot rand; [Trek](topic:mesh-edit#change-the-shape) oop rande uit tot vlakke |

## Organisering en aansig

| Nog nie | In plaas daarvan, vandag |
|---|---|
| Lae van DWG- en DXF-terreinplanne as etikette | Die terreinplan kom in as een groep: ontbind dit en groepeer die dele wat jy wil etiketteer |
| Verskeie snitte terselfdertyd, 'n snitboks, of 'n snit se buitelyn wat as 'n tekening uitgevoer word | Een [snitvlak](topic:sections) sny per keer; voer die aansig as 'n beeld uit |
| Sagte rande stippellyn wys, of versag terwyl jy 'n skuifbalk sleep | [Versag volgens hoek](topic:soften) in Entiteitinligting, en ontdoen om 'n ander hoek te probeer |
| 'n Aanlyn biblioteek van modelle om te soek, of komponente met opsies om te kies (kleur, styl) | Die [beginbiblioteek](topic:starter); voer Collada-, OBJ- of glTF-modelle in; [rek](topic:stretch) 'n kopie tot grootte |
| Plante uit die plantbiblioteek plaas | [Strooi](topic:live-view#scatter-plants-rocks-and-people) plante in die lewende aansig, of plaas 'n boom uit die beginbiblioteek |
| Onafhanklike kopieë van 'n groep | Maak dit 'n komponent, en dan {{ui:Maak uniek}} (sien [Foutoplossing](topic:troubleshooting#editing-one-group-changed-another)) |

## Weergee

| Nog nie | In plaas daarvan, vandag |
|---|---|
| Weergee in die aansig (die {{ui:Weergee}}-werkruimte), die weergawe-tou, en die kamera-, hemelprent-, mis- en lig-mengopsies sonder WebGPU | {{ui:Weergee 'n prent…}} in {{ui:Hoë gehalte}} gebruik daar die WebGL-padtraceerder, sonder daardie opsies ([Weergee 'n prent](topic:render#high-quality)) |
| 'n Ander program wat die weergegewe prent teken sonder 'n weergee-enjin-byvoeging (CadCraft laat nooit 'n program onder die GNU GPL-lisensie loop nie); panorama- of stereokameras en 'n hemelprent deur 'n ander program; die Unreal Engine-inprop (die lêers word geskryf, maar die inprop wat hulle oopmaak, is nie vrygestel nie) | Ons eie Vinnige en Padtraceerder-enjins; 'n byvoeging se enjin ([teken die prent met 'n ander program](topic:render-other-program)); 'n USD-, glTF- of Unreal-mapleêer uit die Enjin-lys om na enige program te neem |
| Gestrooide plante en rotse in {{ui:Weergee 'n prent…}} | Hulle wys in die [lewende aansig](topic:live-view), sy panorama's, kyker en video |

## Materiale en kleure

| Nog nie | In plaas daarvan, vandag |
|---|---|
| Insette anders as basiskleur, ruheid, metaalagtigheid, deursigtigheid, normaal en emissie wat oor 'n vlak verander in hoëgehalte-beelde (hulle gebruik hul gemiddelde) | [Maak materiale met nodusse](topic:shading): koppel hulle tog, die aansig wys hulle wat verander |
| Verplasing op druk-en-trek-vlakke | Skakel die voorwerp om na 'n maas vir verplasing |
| Deel jou eie materiale na die Biblioteek vanaf die app, en gepakte (ARM/ORM) of EXR-kaarte in 'n ingevoerde teksstel | Hou hulle in die lêer; voer die afsonderlike kaarte in as PNG of JPEG |
| Materiale van die lêer in Live TeamWork-sessies (hulle bly op die rekenaar wat hulle gemaak het) | Stoor die lêer en deel dit |
| Dekale wat om geboë oppervlaktes buig, dekale in Ontdoen, of verf van verskeie vlakke se teksture terselfdertyd oor 'n naat | Plaas kleiner dekale op elke deel; verf elke kant van 'n naat op sy eie |
| Bak op druk-en-trek-vlakke, bak verskeie voorwerpe in een prent, 'n kooi wat jy met die hand vorm, of gebakte beligting van lampe | Skakel om na 'n maas en ontvou dit; bak elke voorwerp; verhoog die soekafstand; weergee 'n prent vir lamplig |
| Verf ruheid, metaalagtigheid of hoogte, verf met prente (stempels) en teksverf groter as 512 × 512 | Verf die basiskleur hier; maak ander kaarte in 'n prenredigeerder en voer dit as 'n teksstel in |
| Teksture in Collada-, STL-, PLY-, 3MF-, IFC-, DWG- en DXF-uitvoere, en die nodusgrafieke van die lêer se eie materiale in uitgevoerde modelle | Daardie formate kry elke materiaal se kleur; glTF en OBJ dra ingevoerde teksture; voer 'n materiaal op sy eie uit as [MaterialX](topic:shading#materialx); [USD](topic:usd) hou die hele model vir ModelCraft |
| Teksture in Collada-lêers | Hulle word getel en weggelaat by invoer; teksture in `.skp`- en `.glb`-lêers kom in |

## Lêers

| Nog nie | In plaas daarvan, vandag |
|---|---|
| Stoor van SketchUp-lêers, en teks en maatlyne daaruit | [Invoer](topic:import-sketchup-files) hou vlakke, kleure en teksture; voer Collada (`.dae`) uit om terug na SketchUp te gaan |
| Maatlyne en gidse in DWG- en DXF-uitvoere | Voeg hulle by in die CAD-program ná uitvoer |
| Punte, tabelle en multi-leiers uit DWG en DXF | Hulle word getel en weggelaat; teks kom in as enkellyn-letters, nie die tekening se lettertipe nie |
| Oppervlaktes, maas, tabelle en multi-leiers uit DWG en DXF; vlakke van 3D-soliedes op gesweepte, gelofte of ander vrye oppervlaktes | Hulle word ook getel en weggelaat (3D-soliedes self kom in). Voer daardie dele uit die CAD-program as OBJ of Collada uit en voer dit in |
| IFC-tipes, eienskappe of materiale | Die IFC-uitvoer het [verdiepings](topic:formats#ifc-ifc) en generiese elemente; voeg die res by in 'n BIM-program |
| 'n Model reguit na BimCraft stuur | Voer {{ui:IFC vir BimCraft (.ifc)}} uit en maak dit in BimCraft oop |
| Los rande in glTF en STL | Gebruik OBJ of Collada vir lynwerk |
| glTF- en FBX-materiale buite die basiskleur (metaal, ruheid, normaalkaarte, glas, deklaag, sheen…) | Hulle word gelees en gelys; ModelCraft hou die basiskleur of tekstuur. Bou die voorkoms weer in die [Skakeerwerkruimte](topic:shading) |
| glTF-bene, animasies en morfteikens | Gevelde modelle kom in soos hulle rus; animeer in die [tydlyn](topic:animation) |
| Kleure en die samestelling se deelname van STEP-lêers | Dele kom in as maasse op hul ware grootte; [verf](topic:paint) en benoem hulle ná invoer |
| SubD-voorwerpe, teks, maatlyne en ligte uit `.3dm`-lêers | Sien [wat weggelaat word](topic:import-3dm-files#what-is-left-out-and-said); skakel SubD om in maasse in die program wat die lêer gemaak het |
| KTX2-teksture en materiaalvariante in glTF | Voer uit met PNG- of JPEG-teksture; die verstekvariant word gebruik |
| Skryf van glTF-instansiëring (EXT_mesh_gpu_instancing) | Komponente word een keer geskryf en baie keer geplaas, wat elke kyker lees |
| Alembic-animasie (elke monster van 'n kas), Alembic-punte en -kurwes, skryf van Alembic | Die eerste monster kom in; animeer in die [tydlyn](topic:animation); skryf glTF, USD of OBJ |
| Rompings- en normaalkaarte in OBJ-materiale | Slegs die kleurprent (`map_Kd`) kom in |
| FBX-bene en animasie, FBX-uitvoer, FBX 6-lêers | Gevelde modelle kom in rus; voer glTF uit; stoor ou lêers as FBX 2011 of nuwer |
| Collada-vel, morf, kameras, ligte, kyk-na- en skeefvormtransformasies, eksterne verwysings | By invoer weggelaat en in die boodskap getel |
| Rugsteunlêers | {{ui:Stoor as}} ({{key:Mod+Shift+S}}) stoor 'n ander afskrif. Ná 'n ineenstorting bied ModelCraft jou ongestoorde werk aan ("Herstel jou werk?") |
| Wolkstoor en sinkronisasie tussen rekenaars | Nog nie beskikbaar nie. Stoor lêers op jou rekenaar, en kopieer hulle waar jy hulle nodig het |

## 3D-druk

| Nog nie | In plaas daarvan, vandag |
|---|---|
| Werklike snyprogram-ondersteuning (koppelvlakke, vlot, die presiese steunpatroon) | Die [steunvoorskou](topic:print-tools#supports-preview) wys waar en ongeveer hoeveel; jou snyprogram se voorskou wys die werklike |
| Ontwar 'n deel wat deur homself gaan, of rande waar drie of meer vlakke ontmoet | [Herstel](topic:print-tools#repair) lys hulle met waar hulle is; gebruik [Snyding van vlakke](topic:intersect) en vee uit wat binne is |
| Vullingspatrone en 'n rooster binne 'n holte | [Hol maak](topic:print-tools#hollow) laat dit leeg; jou snyprogram voeg vulling by 'n soliede deel |
| Besonderhede te klein vir jou spuitmond (behalwe mure) | [Muurdikte](topic:print-tools#wall-thickness) vind dun mure; jou snyprogram se laagvoorskou wys die res |

## Prestasie

Ontdoen hou 'n kopie van die model vir elke stap (’n [maas](topic:meshes) hou slegs wat verander het), so baie groot invoere van druk-en-trek-geometrie maak elke wysiging stadiger. Hou invoere skraal, en stoor en heropen om die geskiedenis te suiwer.

## Programme en platforms

- **Lessenaar:** ModelCraft loop in die blaaier op Mac, Windows en Linux, en in CadCraft Studio, die lessenaarprogram met al agt programme in een installasie. Op Android installeer CadCraft Studio vanaf sy APK op getcadcraft.com/download. Daar is nog geen iPad- of iPhone-bou nie.
- **Aanraking:** sien [Wentel, pan en zoem](topic:orbit-pan-zoom) vir die vingerbewegings. 'n Pen se druk stel die kwas in [Beeldhou](topic:sculpt); elders word druk en pen-kanteling nie gebruik nie.
- **Blaaie:** ModelCraft [druk een aansig per bladsy](topic:export-model#print-the-view-or-save-it-as-a-pdf); daar is geen bladuitlegte met verskeie aansigte of 'n titelblok nie. Voer uit na CadCraft-vriendelike DWG/DXF vir tekeninge op skaal.
