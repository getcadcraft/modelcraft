---
title: Foutoplossing
summary: Simptome, oorsake en oplossings, van 'n leë 3D-aansig tot invoere by die verkeerde grootte, met die boodskappe wat ModelCraft wys.
keywords: probleem, moeilikheid, fout, werk nie, leeg, webgl, grafika, stadig, boodskap, invoer misluk, verkeerde grootte, kan nie kies nie, raak, sleutels werk nie, verlore werk
from: 6e7394be
---

## Die 3D-aansig is leeg

**Simptoom:** die middel van die skerm bly leeg, of wys net die agtergrondkleur, en klik op gereedskap doen niks nie.

**Oorsaak:** ModelCraft teken met WebGL 2, die blaaier se 3D-grafika. Dit ontbreek wanneer die blaaier oud is, wanneer hardewareversnelling afgeskakel is, of wanneer die grafiese bestuurder geblokkeer is.

**Oplossing:**

:::chromium
1. Maak die blaaier se instellings oop en soek na "grafiese versnelling".
2. Skakel "Gebruik grafiese versnelling wanneer beskikbaar" aan en herlaai die blaaier.
3. As dit reeds aan is, tik `chrome://gpu` in die adresbalk (`edge://gpu` in Edge) en soek na "WebGL2" in die lys. As daar staan dat dit gedeaktiveer is, werk jou grafiese bestuurder op.
:::

:::firefox
1. Maak **Instellings** oop, dan **Algemeen**, en rol af na "Prestasie".
2. Ontmerk "Gebruik aanbevole prestasie-instellings", dan merk "Gebruik hardewareversnelling wanneer beskikbaar". Herlaai Firefox.
3. As dit steeds misluk, tik `about:support` in die adresbalk en kyk in die "Grafika"-afdeling vir WebGL 2.
:::

:::safari
Werk macOS en Safari op. Onlangse weergawes van Safari het altyd WebGL 2 aan. As jy eksperimentele kenmerke onder **Safari**, dan **Instellings**, dan **Gevorderd** (of **Kenmerkvlae**) verander het, stel hulle terug.
:::

Op 'n werkrekenaar, afstandbeheerde rekenaar of virtuele masjien kan 3D-grafika deur beleid geblokkeer wees. Probeer 'n ander rekenaar. Sien [Blaaiers en rekenaars](common:browsers).

## Sleutels doen niks, of tik in 'n kassie

**Oorsaak:** die sleutelbordfokus is in 'n paneelveld: die {{ui:Faces}}-lys in {{ui:Style}}, 'n sonintelling, die {{ui:Name}}-veld in {{ui:Entity info}}, of die eenhede-kieser. Letters en pyltjiesleutels gaan dan na daardie veld.

**Oplossing:** klik in die 3D-aansig, en druk dan die sleutel weer. Sleutels doen ook niks terwyl 'n dialoogvenster oop is nie.

## 'n Getal tik doen niks

- **Nog geen rigting nie.** 'n Getikte lengte gaan in die rigting waarin die wyser van die eerste klik af wys. Beweeg die wyser 'n bietjie in die rigting wat jy wil hê, en tik dan.
- **Verkeerde oomblik.** Meeste gereedskap neem 'n getikte waarde slegs na die eerste klik: klik eers die eerste hoek, die vlak of die punt waarvandaan jy beweeg. {{ui:Circle}} en {{ui:Polygon}} neem 'n getal sye voor die eerste klik.
- **"Tik 'n lengte soos 3m, 10'6" of 4m,3m."** ModelCraft kon dit nie lees nie. Kyk vir 'n desimale komma (`2,5`): gebruik 'n punt.

## 'n Vorm begin op die verkeerde plek op 'n raakskerm

**Simptoom:** met 'n vinger is die eerste reghoek reg, maar die volgende reghoek, sirkel of lyn begin waar jou vorige raak geëindig het, in plaas van waar jy geraak het.

**Oorsaak:** 'n fout in hierdie weergawe: op 'n raakskerm onthou die gereedskap die laaste vasvangpunt van die vorige gebaar.

**Oplossing:** tik die gereedskap se knoppie in die werkbalk weer voor elke nuwe vorm. Dit begin die gereedskap vars, en die eerste punt land waar jy raak.

## Die wysiging van een groep het 'n ander verander

**Simptoom:** jy het 'n groep met {{ui:Move}} en {{key:Ctrl}} gekopieer, een kopie oopgemaak en gewysig, en die ander kopie het ook verander. Die {{ui:Outliner}} wys albei met dieselfde naam.

**Oorsaak:** in hierdie weergawe maak die kopiëring van 'n groep 'n tweede plasing van dieselfde groep, soos met 'n komponent. Die {{ui:Make unique}}-knoppie word net vir komponente aangebied.

**Oplossing:** kies die kopie wat jy wil verander, klik {{ui:Make component}} in {{ui:Entity info}}, en dan {{ui:Make unique}}. Daardie kopie het nou sy eie inhoud. Of {{ui:Explode}} dit.

## Stoot/trek doen nie wat ek verwag het nie

- **"Stoot/trek werk op 'n vlak. Klik 'n vlak."** Jy het 'n rand of leë ruimte geklik. Hou die wyser totdat die vlak uitlig, en klik dan.
- **Die vlak is binne 'n groep.** Dubbelklik op die groep om dit eers oop te maak.
- **'n Venster het nie deur die muur gesny nie.** Die reghoek moet op die muur se vlak getrek word, nie voor dit nie, en die muur moet 'n agtervlak hê. Sien [Sny 'n opening deur 'n muur](topic:openings#if-it-did-not-cut-through).
- **Twee dose oorvleuel sonder om saam te smelt.** Soliede liggame wat in mekaar gestoot is, sny of verbind mekaar nie in hierdie weergawe nie.

## 'n Lyn of vorm het nie 'n vlak gemaak nie

'n Vlak word slegs gevul wanneer die rande 'n plat lus sluit. Kyk dat die laaste punt aan die eerste vasgevang het ("Eindpunt"), en dat al die rande in een vlak lê. 'n Lus wat effens buite die vlak is, bly as lyne. Teken een van sy rande weer, en vang aan die hoeke vas.

## Ek kan nie 'n vlak kies of uitvee nie

- Met {{ui:Select}} kies 'n klik naby 'n rand die rand. Klik nader aan die middel van die vlak.
- Die {{ui:Eraser}} kies nie vlakke nie. Kies die vlak en druk {{key:Delete}}, of vee een van sy rande uit.
- As dit aan 'n groep of komponent behoort, kies die klik die hele ding. Dubbelklik om dit oop te maak.

## "Kies eers iets om te skuif, of klik daarop."

{{ui:Move}}, {{ui:Rotate}} en {{ui:Scale}} het iets nodig om op te werk: kies dit eers, of begin die gereedskap deur op die ding self te klik (nie op leë ruimte of 'n riglyn nie).

## "Kies eers 'n geometrie (sleep 'n venster, of drievoudig klik om alles wat verbind is te kies)."

{{key:G}} en {{key:Shift+G}} het 'n seleksie nodig. Riglyne kan nie gegroepeer word nie.

## Die pyltjiesleutels wentel in plaas van om te sluit

Slotte werk slegs na die eerste klik van 'n teken- of redigeergereedskap. {{ui:Push/pull}} het geen slotte nie, en in {{ui:Rotate}} verander hulle nie die draai nie. Op ander tye wentel die pyltjiesleutels die aansig.

## Esc in volskerm

In volskerm gebruik die blaaier dalk die eerste {{key:Esc}} om volskerm te verlaat. Druk {{key:Esc}} weer om die gereedskap te kanselleer.

## Geen middelknoppie nie

Druk {{key:O}} vir {{ui:Orbit}} en sleep, of gebruik die pyltjiesleutels. Sien [Wentel, pan en zoem](topic:orbit-pan-zoom#without-a-middle-button).

## Invoere

| Boodskap | Wat om te doen |
|---|---|
| "ModelCraft voer SketchUp (.skp), Collada (.dae), OBJ, glTF (.glb/.gltf), FBX, PLY, STL, Alembic (.abc), DWG en DXF in. … is nie een van hierdie nie." | Voer die model uit die ander program uit in een van hierdie formate |
| "Hierdie lêer is groter as 300 MB." | Vereenvoudig of verdeel die model in die ander program |
| "…te groot om hier mee te modelleer (meer as 2 miljoen hoekpunte)." | Dieselfde |
| "Hierdie .gltf-lêer benodig "…"…" | Sit die `.gltf` saam met sy `.bin`- en tekstuurlêers neer, of maak die `.glb`-weergawe oop |
| "Hierdie glTF-lêer benodig die …-uitbreiding, wat ModelCraft nog nie lees nie." | Voer weer uit vanaf die ander program sonder daardie uitbreiding (KTX2-teksture, byvoorbeeld) |
| 'n OBJ kom in sonder sy kleure of teksture | Sit die `.obj` saam met sy `.mtl` en prente neer |
| "Hierdie Alembic-lêer gebruik die ou HDF5-uitleg…" | Stoor dit weer vanaf die ander program as 'n Ogawa Alembic-lêer |
| 'n FBX kom in sonder sy teksture | Sit die `.fbx` saam met sy tekstuurprente neer, of sluit die media in wanneer jy uitvoer |
| "Hierdie FBX-lêer is weergawe …, wat ModelCraft nie lees nie" | Voer weer uit as FBX 2011 of nuwer |
| 'n STL of PLY kom 1,000 keer te groot of te klein in | STL word as millimeter gelees en PLY as meter: skaal dit (sien [Draai en skaal](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)) |
| "Dit is nie 'n Collada (.dae)-lêer nie…" of "…nie goed gevormde XML nie…" | Die lêer is beskadig of nie Collada nie. Voer dit weer uit |
| "Hierdie Collada-lêer het geen geometrie wat ModelCraft kan invoer nie." | Dit bevat net kameras, ligte of verwysings na ander lêers |
| "Dit is 'n binêre DXF. Stoor dit as ASCII-DXF en probeer weer." | Stoor dit weer vanaf die CAD-program as ASCII |
| "Dit is nie 'n DWG-tekening nie…" | Die lêer is nie 'n DWG nie, of dit is beskadig |
| "Hierdie tekening kon nie gelees word nie (…). Dit is dalk beskadig, of gestoor in 'n DWG-weergawe wat die leser nie hanteer nie…" | Die hakies gee die rede. Stoor dit as DXF, of as 'n DWG van AutoCAD 2000 tot 2018, vanaf die CAD-program |
| "Hierdie tekening reik meer as 10,000 km van sy oorsprong af…" | Skuif die tekening na 0,0 in die CAD-program |

### Die invoer is die verkeerde grootte, of lê op sy sy

- **OBJ:** OBJ het geen eenheid nie; ModelCraft lees meter. 'n Model in millimeter kom 1000 keer te groot in: [skaal](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size) dit met `0.001`; 'n model in duim met `0.0254`.
- **OBJ op sy sy:** ModelCraft verwag OBJ-lêers met Y op. 'n Lêer wat met Z op geskryf is, kom plat lê in. Draai dit 90° om die rooi as: klik die {{ui:Rotate}}-middelpunt op 'n vlak wat langs rooi wys, of maak die lêer oop in sy program en voer uit met Y op.
- **DWG of DXF:** jy het die verkeerde eenheid in die dialoogvenster "Tekeningeenhede" gekies. Ontdoen en voer weer in.

## Oop lêers

| Boodskap | Wat om te doen |
|---|---|
| "Hierdie lêer is nie 'n ModelCraft-model nie (dit is nie JSON nie)." | Gebruik {{ui:Import}} vir ander formate |
| "Dit is nie 'n ModelCraft-lêer wat ons kan oopmaak nie: …" | Die lêer is beskadig of met die hand verander |
| "Hierdie model is gestoor deur 'n nuwer ModelCraft…" | Maak dit oop in die nuwer weergawe |
| "Hierdie lêer is groter as 200 MB." | Die model is te groot om hier oop te maak |

## Ek het werk verloor

ModelCraft stoor nie self na 'n lêer nie. Wanneer jy 'n oortjie met ongestoorde veranderinge toemaak of herlaai, vra die blaaier eers ("Verlaat webwerf?" of "Herlaai webwerf?"); kies om te bly en te stoor. Nuut en Maak oop vra ook ("Ongestoorde veranderinge"). As die blaaier of rekenaar gecrash het, maak ModelCraft weer oop in dieselfde blaaier: dit bied die ongestoorde werk terug aan ("Herstel jou werk?"; sien [Herstel jou werk](common:recover)). Stoor dikwels met {{key:Mod+S}}.

## My aflaaigids vul op met kopieë

Elke stoor is 'n nuwe aflaai, genoem `Untitled (1).modelcraft`, `Untitled (2).modelcraft` en so aan. Vee die ou uit, of stel die blaaier in om te vra waar elke lêer gestoor moet word, en die ou lêer self te oorskryf. Sien [Maak oop, stoor, voer in en voer uit](topic:files#save-a-model).

## Dit word stadig

- Elke stap van ontdoen hou 'n kopie van die model ('n [netwerk](topic:meshes) hou net wat verander het), so by 'n baie groot invoer van stoot/trek-geometrie neem elke wysiging langer. Ontbind of vee uit wat jy nie nodig het nie, stoor, en maak weer oop: weer oopmaak maak ook die ontdoen-geskiedenis skoon.
- Sonskaduwees kos die meeste. Ontmerk {{ui:Sun shadows}} terwyl jy modelleer.

## Geen skaduwees nie

{{ui:Sun shadows}} is af, die son is onder op die tyd wat jy gekies het ("Die son is op hierdie tyd onder."), of die styl is {{ui:Wireframe}}, wat geen skaduwees teken nie.

## "Hierdie blaaier het nie volskerm toegelaat nie."

Sommige blaaiers en ingebedde aansigte weier volskerm. Gebruik eerder die blaaier se eie volskerm ({{pick:mac=Control-Command-F|windows linux=F11}}).

## ModelCraft open nie sonder 'n verbinding nie

ModelCraft open slegs vanlyn nadat dit in daardie blaaier vir vanlyn gebruik gestoor is: die toepbalk se knoppie moet {{ui:Offline ready}} lees. Maak dit oop terwyl jy aanlyn is en klik {{ui:Save for offline}}. As die knoppie {{ui:Could not save}} lees, klik dit weer op 'n beter verbinding. {{ui:Offline not available}} beteken hierdie venster ('n privaatvenster, of 'n bestuurde rekenaar) kan nie 'n kopie hou nie. Sien [Werk vanlyn](common:offline).
