---
title: Lêerformate in detail
summary: Presies wat elke formaat wat ModelCraft oopmaak, invoer en uitvoer, behou, omskakel en uitlaat.
keywords: formate, lêertipes, modelcraft, json, 3dm, nurbs, skp, collada, dae, obj, mtl, gltf, glb, stl, step, stp, ap214, ap242, ply, alembic, abc, cache, fbx, 3mf, ifc, dwg, dxf, eenhede, asse, y op, z op, millimeter, limiete
from: c47d2d28
---

ModelCraft se model is in meter met Z (blou) op. Elke formaat hieronder word na of van daardie een omgeskakel.

## ModelCraft (.modelcraft)

| Wat | Besonderhede |
|---|---|
| Maak oop | {{ui:Maak oop}} ({{key:Mod+O}}) of los op die aansig. Lêers wat op `.json` eindig, word ook aanvaar |
| Stoor | {{ui:Stoor}} ({{key:Mod+S}}), as 'n aflaai |
| Behou | Alles: meetkunde, vlakke en hul kleure, materiale en ingevoerde teksture, lampe, sagte rande, groepe, komponente, name, gidse, tonele, die eenhede, en die laaste kamera en styl |
| Laat uit | Die ontdoen-geskiedenis |
| Limiet | 200 MB |

'n Lêer wat deur 'n nuwer ModelCraft as joune gestoor is, word geweier: "Hierdie model is deur 'n nuwer ModelCraft gestoor (lêerweergawe …). Dateer ModelCraft op om dit oop te maak." 'n Lêer wat nie 'n ModelCraft-model is nie, sê "Hierdie lêer is nie 'n ModelCraft-model nie (dit is nie JSON nie)." of "Dit is nie 'n ModelCraft-lêer wat ons kan oopmaak nie: …".

## USD (.usd, .usda, .usdc, .usdz)

Maak oop, voer in, en {{ui:Stoor as}} of {{ui:Voer uit}} › {{ui:USD (.usda, .usdc, .usdz)…}}. 'n USD-lêer wat ModelCraft gestoor het, maak weer oop met niks verlore nie; ander programme se USD-lêers maak oop as nette, groepe, komponente, lampe en kameras. Sien [Stoor, maak oop en voer USD uit](topic:usd).

## Collada (.dae)

Invoer en uitvoer. Die beste formaat om modelle met ander 3D-modelleerders te ruil.

- **Uitvoer:** Collada 1.4.1, Z op, meter. Een geometrie per groep of komponentdefinisie; komponente word een keer geskryf en deur verwysing geplaas, so hulle bly gedeel. Vlakke met gate of konkawe buitelyne word in driehoeke verdeel. Kleure word materiale. Los rande word as lyne geskryf. Name wat nie in die formaat geldig is nie, word aangepas, en die presiese naam word langs dit behou.
- **Invoer:** driehoeke, veelhoeke (met gate), driehoekwaaiers en -stroke word vlakke; lyne word rande. Nodetransformasies, die lêer se op-as en eenheid word toegepas. 'n Node wat op verskeie plekke geplaas is, of 'n geometrie wat deur verskeie nodes gebruik word, kom in as 'n komponent; ander nodes kom in as groepe. Materiaalkleure (diffuus) word vlakkleure.
- **Nie ingevoer nie:** teksture, vel en vormverskuiwings, kameras, ligte, sommige transformasietipes (look-at en skeef), en verwysings na ander lêers. Die statusbalk tel hulle.
- **Verlore by uitvoer:** watter rande sag is. **By invoer** bly getrianguleerde oppervlaktes driehoeke, met die diagonale versag sodat plat gebiede steeds as een oppervlak lees.

## OBJ (.obj, .mtl)

Invoer en uitvoer.

- **Invoer:** sleep die `.obj` saam met sy `.mtl` en teksturprente (of voer die `.obj` alleen in: dit kom in sonder materiale, en die statusbalk noem die `.mtl` wat dit wou hê). Gelees as meter met Y op. Elke voorwerp (`o`, anders `g`) word 'n [netwerk](topic:meshes), sy vlakke word soos hulle is (vierhoeke bly vierhoeke). Teksturkoördinate, normale en kleure per hoekpunt word behou. 'n Materiaal se kleurprent (`map_Kd`, PNG, JPEG of WebP) kom in as 'n tekstuur, met sy skaal- en verskuiwingopsies; andersins sy kleur (`Kd`). Rande waar die lêer se normale breek, is hard; sonder normale bepaal die lêer se gladmaakgroepe. Ander kaarte (bult, normaal), punte, lyne en kurwes word getel en uitgelaat. OBJ het geen eenheid nie, so 'n model wat in millimeter of duim gemaak is, kom op die verkeerde grootte aan: skaal dit ná invoer (sien [Draai en skaal](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)).
- **Uitvoer:** meter, Y op, wêreldkoördinate. Een voorwerp per groepplasing; komponente word voluit by elke plasing geskryf. Netwerke behou hul eie vlakke, teksturkoördinate en normale; vlakke wat deur [sagte rande](topic:soften) verbind is, kry 'n normaal per hoek. Wanneer die model kleure het, laai 'n `.mtl` saam met die `.obj` af. Wanneer dit ingevoerde teksture het, laai die `.obj`, die `.mtl` en die prente saam as een `.zip` af.
- **Limiet:** 2 miljoen hoekpunte of vlakke; 64 MB teks.

## glTF (.glb, .gltf)

Invoer en uitvoer, glTF 2.0.

- **Invoer:** 'n `.glb`, of 'n `.gltf` saam met sy `.bin`- en teksturlêers: sleep hulle almal op die aansig saam (of kies die `.glb`). 'n `.gltf` wat alleen gegee word, noem die lêer wat dit nodig het: "Hierdie .gltf-lêer het "…" nodig: maak die .glb-weergawe oop, of sleep die .gltf saam met sy lêers."
  - **Netwerke** kom in as [netwerke](topic:meshes), een per netwerk in die lêer, met die lêer se normale, teksturkoördinate en hoekpuntkleure behou. Rande waar die lêer se normale breek, is hard; die res is sag. 'n Netwerk wat op verskeie plekke gebruik word, bly gedeel.
  - **Nodes** word groepe, genoem soos in die lêer. Geïnstansieerde netwerke (EXT_mesh_gpu_instancing) kom in as een netwerk wat baie keer geplaas is.
  - **Materiale:** 'n basiskleurtekstuur (PNG, JPEG of WebP) kom in as 'n tekstuur, geplaas volgens die lêer se teksturkoördinate (met enige teksturtransformasie), en word behou wanneer jy stoor; andersins die basiskleur. Metaal, ruwheid, normaalkaarte, glas, helder laag, glans en die ander materiaaluitbreidings word gelees maar nog nie behou nie: die statusbalk sê so.
  - **Ligte** (KHR_lights_punctual): punt- en spotligte word [lampe](topic:lights). Rigtingligte word getel: die son verlig die model.
  - **Kameras** word [tonele](topic:scenes).
  - **Geskinde karakters** kom in soos die lêer hulle laat rus; hul bene en animasies, en morfteikens, word getel en nog nie behou nie.
  - **Saamgeperste lêers** (Draco, meshopt) en gekwantiseerde data word gelees. Die dekodeerders laai slegs vir 'n lêer wat hulle nodig het.
  - Punte en lyne word getel en uitgelaat ('n netwerk hou vlakke). KTX2-teksture word uitgelaat; die vlakke behou hul kleur.
- **Uitvoer** (`.glb`): glTF 2.0-binêr, meter, Y op. Een netwerk per definisie, so komponente bly gedeel. Netwerke behou hul normale, teksturkoördinate en hoekpuntkleure; vlakke wat deur [sagte rande](topic:soften) verbind is, dra gladde normale. Kleure en materiale word materiale ('n materiaal as sy kleur); ingevoerde teksture word as teksture geskryf. Ligte wat aan is, word punt- en spotligte (oppervlakligte het geen glTF-ekwivalent nie en laat uit); tonele word kameras. Los rande word uitgelaat.
- **Limiet:** lêers tot 300 MB; ongeveer 130 miljoen getalle van meetkunde.

## STL (.stl)

Invoer en uitvoer.

- **Invoer:** binêr of ASCII. STL het geen eenheid nie: dit word as **millimeter** gelees, soos drukkers en ModelCraft se eie uitvoer dit skryf. Hoekpunte op dieselfde punt word verbind, so 'n geslote deel kom in as 'n geslote [netwerk](topic:meshes). Kleure in die lêer (die VisCAM / SolidView- en Materialise-konvensies) verf die vlakke.
- **Uitvoer,** vir 3D-druk: binêre STL, **millimeter**, Z op. Driehoeke alleen: groepe en los rande word uitgelaat. Geverfde vlakke dra hul kleur in die VisCAM / SolidView-konvensie, wat ander programme ignoreer as hulle dit nie lees nie. Voer geslote soliede liggame uit vir 'n skoon druk.

## STEP (.step, .stp)

Slegs invoer. STEP is wat onderdeelmodelleerders en verskaffers stuur: AP203-, AP214- en AP242-lêers.

- **Invoer:** ModelCraft lees die lêer self, in die bladsy, en verander elke soliede liggaam in 'n geslote [netwerk](topic:meshes) van driehoeke: plat vlakke bly plat, geboë vlakke (silinders, keëls, sfere, torusse, B-spline-oppervlaktes) word baie klein plat vlakke, met die rande binne een geboë vlak sag en die rande tussen twee vlakke skerp. STEP-lêers sê hul eenheid; die model kom in op sy ware grootte. 'n Samestelling kom in met elke onderdeel waar die lêer dit plaas, elke onderdeel sy eie netwerk in 'n groep genoem na die lêer. Kleure, onderdeelname van die samestellingboom en toleransies (PMI) word nie gelees nie.
- **Boodskappe:** wat oorgeslaan is of growwer geteken is, word by die statusreël gevoeg ("Notas: …"); 'n lêer sonder 'n soliede liggaam, 'n beskadigde lêer of een wat die perke oorskry, sê waarom en voeg niks by nie.
- **Limiet:** lêers tot 300 MB; 400 000 vlakke en 8 miljoen driehoeke.

## .3dm

Slegs invoer. `.3dm`-lêers bevat NURBS-modelle: poli-oppervlaktes, oppervlaktes, netwerke, kurwes en blokke.

- **Invoer:** ModelCraft lees die lêer self, in die bladsy. Netwerke kom in soos hulle is; elke vlak van 'n poli-oppervlak of ekstrusie kom uit die renderingsnetwerk wat saam met dit in die lêer gestoor is, anders tesselleer ModelCraft dit (vlakke, NURBS-oppervlaktes, oppervlaktes van omwenteling, ekstrusiekurwes, ekstrusies; begrens deur hul rande, geslote poli-oppervlaktes as geslote netwerke). Kurwes word rande, blokke word komponente (blokke in blokke behou), lae word etikette (verborge wanneer af), en die voorwerp se kleur (sy eie, sy laag s'n of sy materiaal s'n) verf sy vlakke. Die lêer sê sy eenheid; die model kom in op sy ware grootte. Stap vir stap: [Bring 'n .3dm-model in](topic:import-3dm-files).
- **Boodskappe:** die statusbalk sê hoeveel vlakke uit gestoorde netwerke gekom het en hoeveel getesselleer is, en noem wat uitgelaat is: punte, puntwolke, teks, afmetings, arseringe, ligte, SubD-voorwerpe, vlakke op oppervlaktesoorte wat nog nie gelees word nie, gekoppelde blokke.
- **Limiet:** lêers tot 300 MB.

## PLY (.ply)

Invoer en uitvoer, vir netwerke met kleure (skanderings, 3D-druk in kleur, ander modelleerders).

- **Invoer:** ASCII en binêr. Vlakke word 'n [netwerk](topic:meshes) met hul normale, teksturkoördinate en hoekpuntkleure behou; elke vlak word geverf met die naaste van 4 096 kleure, so jy sien die kleure nou. PLY het geen eenheid of as-konvensie nie: koördinate kom in soos hulle is (meter, Z op). 'n PLY met slegs punte is 'n puntwolk: maak dit oop in BimCraft of CivilCraft.
- **Uitvoer:** binêre PLY met posisies, normale en kleure (en teksturkoördinate wanneer die model dit het), in meter, Z op.

## FBX (.fbx)

Slegs invoer. FBX 7-lêers (vanaf 2011), binêr of ASCII, gelees deur ModelCraft se eie leser.

- Netwerke kom in as [netwerke](topic:meshes) met hul normale, teksturkoördinate (elke UV-stel) en hoekpuntkleure; 'n netwerk wat deur verskeie voorwerpe gebruik word, bly gedeel. Voorwerpe word groepe met hul transformasies (draaipunte, verskuiwings en voor-rotasies ingesluit).
- Materiale: die diffuse tekstuur — ingebed in die lêer, of 'n prent wat saam met die `.fbx` gesleep is — kom in as 'n tekstuur (TGA-prente word as PNG behou); andersins die diffuse kleur. Ander materiaalinstellings wag vir die nuwe materiaalmodel.
- Die lêer se op-as en eenheid word toegepas: alles kom in Z op, in meter.
- Punt- en spotligte word [lampe](topic:lights) ('n FBX-intensiteit van 100 is ModelCraft se standaardlamp, 800 lumen: FBX-intensiteite het geen eenheid nie). Kameras word [tonele](topic:scenes).
- Geskinde karakters kom in rus; bene en animasies word getel en nog nie behou nie. Rigting- en oppervlakligte, en meetkunde anders as netwerke (NURBS, kurwes), word getel en uitgelaat.
- FBX 6 en ouer lêers word geweier: stoor hulle weer as FBX 2011 of nuwer.

## Alembic (.abc)

Slegs invoer: geometrie-caches van animasie- en effekprogramme.

- Netwerke (poligoon- en onderverdelingsnetwerke) kom in as [netwerke](topic:meshes), met hul teksturkoördinate en normale; transformasies word groepe. Alembic is Y op en word na Z op gedraai; meter.
- 'n Cache met baie monsters (een animasie) kom in by sy eerste monster; die statusbalk sê hoeveel dit het.
- Punte, kurwes, NURBS-oppervlaktes, kameras en ligte word getel en uitgelaat. Lêers in die ou HDF5-uitleg word geweier: stoor hulle weer as 'n Ogawa Alembic-lêer.

{{ui:Check for 3D printing (STL or 3MF)…}} kontroleer eers die vorm en skryf die keuse, of alles wat gewys word. Sien [Maak 'n model gereed vir 3D-druk](topic:print-3d).

## 3MF (.3mf)

Slegs uitvoer, vanaf {{ui:Check for 3D printing (STL or 3MF)…}}. 3MF-kern: een netwerk in **millimeter**, Z op, met sy kleure as materiale. Die meeste snyers lees dit, en anders as STL sê dit sy eenheid. Verborge dinge word uitgelaat. Sien [Maak 'n model gereed vir 3D-druk](topic:print-3d).

## DWG- en DXF-uitvoer (.dwg, .dxf)

Vir CAD-programme. Die model word in sy eie eenheid geskryf: duim vir voet-en-duim-modelle, andersins millimeter, sentimeter of meter (die statusbalk noem dit).

- **Vlakke** word 3D-vlakke (driehoeke). Lyne binne 'n vlak, en sagte rande, word onsigbaar geskryf, sodat die vlakke lyk soos ModelCraft s'n.
- **Los rande** word lyne.
- **Groepe en komponente** word blokke: 'n komponent word een keer geskryf en so dikwels geplaas as dit gebruik word, insluitend gedraaide en gespieëlde afskrifte. 'n Groep wat gerek is nadat dit gedraai is (so dat dit skuins is), word eerder op sy plek uitgeskryf.
- **Kleure:** DWG behou elke vlak se kleur presies; DXF gebruik die naaste van die 255 standaard-CAD-kleure.
- **Weergawes:** DWG word as AutoCAD 2004 (AC1018) geskryf, wat CAD-programme vanaf 2004 oopmaak. DXF is R12 (AC1009), die weergawe wat elke CAD-program lees; R12 het geen eenheidsveld nie, so sê vir die CAD-program watter eenheid om te gebruik.
- **Nie geskryf nie:** gidse, afmetings, tonele en die kamera.

## IFC (.ifc)

Slegs uitvoer, vir BimCraft en ander BIM-programme. IFC4 met 'n projek, 'n terrein, 'n gebou en sy verdiepings. Elke boonste groep of komponent word een boukundige elementproxy met sy naam; geslote een word as soliede vorms geskryf (facet-breps), oop een as oppervlaktemodelle; gate in vlakke word behou. Los meetkunde op die boonste vlak word een element genaamd "Los geometrie". Geen tipes, eienskappe of materiale nie.

**Verdiepings:** {{ui:Voer uit}} › {{ui:IFC-verdiepings…}} lys hulle, elk met 'n naam en 'n hoogte ({{ui:Voeg verdieping by}}, of {{ui:Raai uit die model}}, wat een verdieping maak vir elke hoogte waarop jou boonste groepe staan). By uitvoer gaan elke groep of komponent op die verdieping by of onder sy laagste punt, en behou sy plek. Sonder verdiepings gaan alles op een verdieping, "Vlak 1", op 0. Die verdiepings word in die ModelCraft-lêer gestoor.

## DWG (.dwg) en DXF (.dxf)

Invoer as lyne op die grond (arseringe en 3D-vlakke as vlakke); uitvoer soos hierbo beskryf. Sien [Model op 'n terreinplan](topic:site-plan).

- **Lees:** lyne, polylyne (met bogas), 3D-polylyne, sirkels, bogas, en blokverwysings insluitend skikkings, uit modelruimte. Onsigbare voorwerpe (soos die verborge toestande van 'n dinamiese blok) word uitgelaat. Kurwes word 48 reguit stukke per volle draai.
- **Lees sedert 0.4:** splines en ellipse (as rande), teks, meerlynteks en kenmerkwaardes (as rande in 'n enkellyn-lettering), arserings (vlakke met gate), 3D-vlakke en soliede vulsels (vlakke), en afmetings (geteken uit die tekening se eie afmetingblokke).
- **Lees sedert 0.7:** 3D-soliede liggame, streke en liggame (hul ACIS-data, DWG en DXF van elke weergawe), elk as sy eie groep, geslote een as soliede liggame. Vlakke op oppervlaktes anders as vlakke, silinders, keëls, sfere, torusse en eenvoudige spline-oppervlaktes word uitgelaat en gelys.
- **Nie gelees nie:** punte, tabelle, meerleiers, beelde, en alles in papierruimte.
- **Eenhede:** geneem uit die tekening wanneer dit dit sê. Indien nie, vra ModelCraft.
- **DXF** moet ASCII wees. Binêre DXF word geweier.
- **DWG**-lêers vanaf AutoCAD R13 tot die huidige formaat (AutoCAD 2018 en later; AC1012 tot AC1032) word deur ModelCraft se eie DWG-leser gelees, in die bladsy; dit is deel van ModelCraft, so dit werk aflyn wanneer ModelCraft dit doen. Ouer weergawes (R12 en vroeër) en erg beskadigde lêers kan nie gelees word nie; stoor hulle as DXF.
- **Perke:** koördinate meer as 10 000 km van die oorsprong af, of meer as 2 miljoen lynstukke, word geweier.

## SKP-lêers

{{ui:Voer in}} (of sleep die lêer op die aansig) lees SketchUp-lêers met ModelCraft se eie leser, in die bladsy: niks word opgelaai nie, en dit werk aflyn wanneer ModelCraft dit doen. Getoets met lêers van SketchUp 3, 6, 7, 2014, 2017, 2018, 2020, 2025 en 2026; ander weergawes behoort ook oop te maak, maar is nog nie probeer nie. Die model kom in as een groep genoem na die lêer. Een {{key:Mod+Z}} haal dit weer weg. Stap vir stap: [Bring 'n SKP-model in](topic:import-sketchup-files).

- **Behou:** vlakke met hul gate, groepe (as groepe) en komponente (as komponente, gedeel), hul name en plasings, kleure, etikette op groepe en komponente, rande wat nie deel van 'n vlak is nie, en sagte en gladde rande, sodat geboë oppervlaktes glad bly.
- **Kleure:** 'n vlak se eie materiaal gee sy kleur. 'n Materiaal wat op 'n groep of komponent geverf is, word daardie plasing se verf, so vlakke binne wat geen eie kleur het nie, neem dit, soos in SketchUp; 'n komponent wat in twee kleure geverf is, bly een komponent.
- **Etikette** op groepe en komponente word ModelCraft-etikette, gewys of verborge soos hulle was. Etikette op los vlakke en rande word nie behou nie (ModelCraft merk slegs groepe en komponente); die statusbalk tel hulle.
- **Verborge dinge kom verborge in** (vlakke, rande, groepe, komponente, en vlakke en rande op 'n verborge etiket), so jy sien wat SketchUp gewys het; {{ui:Wys alles}} wys hulle.
- **Teksture:** 'n vlak wat met 'n getekstureerde materiaal geverf is, behou sy tekstuur, geplaas soos in die lêer, en die ModelCraft-lêer behou die beeld. 'n Tekstuur op 'n hele groep of komponent, 'n tekstuur wat in die lêer ontbreek, of 'n beeld wat blaaiers nie kan wys nie (soos 'n Photoshop-lêer), behou slegs die materiaal se kleur.
- **Uitgelaat, en getel in die statusbalk:** beelde in die model geplaas. Teks, afmetings, gidse, snitvlakke, tonele en style word nie gelees nie.
- **Eenhede:** SketchUp-lêers is binne in duim; ModelCraft skakel hulle om, so groottes kom reg uit in enige eenheid.
- **Stoor van `.skp`** is nie gebou nie. Om 'n model terug na SketchUp te neem, voer Collada (`.dae`) uit.

## Nie ondersteun nie

ModelCraft kan nie 3DS- of IFC-lêers oopmaak nie, en kan nie 3DS-, FBX-, STEP-, `.3dm`- of SketchUp- (`.skp`) lêers stoor nie.
