---
title: Maak materiale met nodusse
summary: Bou 'n materiaal uit teksture, prente en wiskunde in die Skakering-werkruimte, sien dit in die aansig soos jy werk, en verf vlakke daarmee.
keywords: skakering, bak, baking, tekstuurbakery, omgewingsokklusie, okklusie, krommung, normaalbak, hoë poli, lae poli, ligkaart, dekaal, plakker, logo, etiket, tekstuurverf, verf tekstuur, kwas, materiaal, materiale, materialx, mtlx, openpbr, standaard oppervlak, materiaalbiblioteek, librarycraft, tekstuurstel, pbr, teksture invoer, zip, cc0, sleep, nodus, nodusse, nodusredigeerder, skakeerder, tekstuur, prosedureel, geraas, dambord, voronoi, selle, golwe, gradiënt, vuil, randslytasie, kleurrampe, meng, bult, normaalkaart, ruheid, metaalagtigheid, dekking, uitsny, emissie, gloed, verplasing, boksafbeelding, triplanêr, uv, prent, prenttekstuur
from: d7368b21
---

'n Materiaal wat in die **Skakering**-werkruimte gemaak is, behoort aan die lêer. Dit is 'n klein grafiek: **nodusse** wat teksture, prente en getalle maak, gekoppel aan die **Materiaaluitset**, waarvan die insette die oppervlak se voorkoms is — basiese kleur, ruheid, metaalagtigheid, normaal, dekking, emissie en die res van die OpenPBR-model. Jy verf vlakke daarmee soos met enige biblioteekmateriaal, en elke verandering wys dadelik in die aansig.

## Maak dit oop

Kies {{ui:Shading}} in die Werkruimte-lys. Die 3D-aansig hou die bokant van die skerm, en die **nodusredigeerder** neem die onderkant. Die paneel aan die regterkant lys die lêer se eie materiale.

- {{ui:New material}} maak 'n grys een met net sy Materiaaluitset.
- **Maak 'n redigeerbare kopie van 'n biblioteekmateriaal** verander baksteen, hout, teël en die res in 'n grafiek wat jy kan verander: die tekstuur kom deur 'n Biblioteektekstuur-nodus, en die bulte deur 'n Bult-nodus.
- {{ui:Paint with it}} verf die gekose vlakke of groepe, of kies die materiaal vir die Verf-gereedskap. Die Verf-gereedskap se materiale lys ook die lêer se eie onder **In hierdie lêer**.
- {{ui:Duplicate}} en {{ui:Delete}} werk op die materiaal wat jy redigeer. Verwydering kan nie ongedaan gemaak word nie: vlakke wat daarmee geverf is, wys die standaardkleur tot jy hulle weer verf.

## Materiale uit die biblioteek

Die paneel se **Materiaalbiblioteek** lys die biblioteek se materiale, elk met 'n voorskou wat deur CadCraft se padtracer weergegee word. Dit is tekstuurstelle wat onder CC0 vrygestel is, en aan die mense wat hulle gemaak het, toegeskryf.

- Klik een om dit in die lêer te bring (sy prente kom saam) en, met vlakke of groepe gekies, verf hulle.
- Sleep een op 'n vlak of 'n groep in die aansig om net dit te verf.
- Dit word een van die lêer se materiale: verander sy nodusse soos enige ander. Sy erkenning wys in die paneel en bly in die lêer.

## Voer 'n tekstuurstel in

{{ui:Pictures or a zip…}} of {{ui:A folder…}} onder **Voer 'n tekstuurstel in** maak 'n materiaal uit 'n stel kaarte. Die kaarte word gevind aan die woorde in hulle lêernaam: color, albedo, diffuse of basecolor; roughness (of gloss, omgeskakel na roughness); metalness of metallic; normal (OpenGL of DirectX, uit `gl` / `dx` in die naam); height of displacement; ambient occlusion; opacity; emission. Gepakte kaarte (ARM, ORM) word weggelaat. Die teël begin op 1 × 1 m: stel sy werklike grootte op die Materiaaluitset. Hoogte gaan na verplasing met sy skaal op 0 — verhoog die skaal om dit op netwerke te gebruik.

## MaterialX

MaterialX is die oop formaat wat ander 3D- en weergawe-programme gebruik om materiale oor te dra.

- {{ui:Export as MaterialX…}} stoor die materiaal wat jy redigeer: sy waardes, en elke tekstuur as 'n PNG-prent langs die `.mtlx`-lêer (in 'n zip). Kies die skakeerder waarin dit geskryf word: **OpenPBR Surface** (MaterialX 1.39, dieselfde model wat ModelCraft gebruik) of **Standard Surface** (MaterialX 1.38, wat meer programme vandag lees). Die teksture word met UV-koördinate in meter geplaas; boks- en triplanêre plasing word as UV geskryf.
- {{ui:Import MaterialX…}} (of {{ui:From a folder…}}) lees `.mtlx`-lêers met OpenPBR-, Standard Surface-, UsdPreviewSurface- of glTF PBR-skakeerders. Gee dit ook die prente, of 'n zip van alles: 'n prent word gevind volgens sy pad, sy naam, of sy naam met 'n ander prenttipe ('n `.exr` wat die lêers noem, kan as 'n `.jpg` langsaan kom). Teksture, normaalkaarte, rekenkunde, mengsels en verplasing kom as nodusse in; enigiets anders behou sy waarde, en die statuslyn sê wat weggelaat is.

## Dekaals

'n Dekaal is 'n prent wat op 'n oppervlak gelê word — 'n logo, 'n bord, 'n etiket, 'n vlek — met 'n eie materiaal.

- Stel **Breedte van 'n nuwe dekaal**, dan {{ui:Place a decal…}} (of {{ui:Decal}} op die werkbalk), kies 'n PNG-, JPEG- of WebP-prent en klik 'n vlak. Die prent word op die oppervlaktes daar geprojekteer, met behoud van sy verhoudings; deursigtige dele van 'n PNG bly deursigtig.
- Dit hoort by die groep of komponent waarin jy geklik het, en beweeg saam daarmee. Dit dek die vlakke binne sy blokkie wat dieselfde rigting wys, en stop by die rande van wat dit op lê.
- Elke dekaal kry sy eie materiaal, genoem **Dekaal: <prent>**, in die lêer se lys: redigeer dit soos enige ander (ruheid, 'n bult, 'n gloed). {{ui:Material}} langs die dekaal maak dit oop.
- Langs elke dekaal: sy breedte (die hoogte volg die prent), {{ui:Turn}} ('n kwartdraai) en {{ui:Delete}}. Dekaals word saam met die lêer se materiale bewaar, buite {{ui:Undo}}.
- Hulle wys in die geskakeerde aansig, in vinnige weergawes en in hoëgehalte-prente.

## Verf op die tekstuur

{{ui:Paint texture}} (of {{ui:Paint}} onder **Verf op die tekstuur**) verander die wyser in 'n ronde kwas. Sleep op 'n vlak wat een van hierdie lêer se materiale dra: die kwas verf die prent agter sy basiese kleur.

- Op 'n netwerk verf dit langs die netwerk se UV's (ontvou dit eers in die UV-werkruimte); op ander vlakke verf dit oor die vlak, sodat die verf met die materiaal se teël herhaal.
- 'n Materiaal waarvan die basiese kleur 'n gewone kleur is, kry die eerste keer as jy dit verf 'n nuwe 512 × 512-prent van daardie kleur. 'n Materiaal waarvan die basiese kleur uit ander nodusse kom, het 'n Prentnodus nodig wat aan Basiese kleur gekoppel is.
- Stel die kwaskleur, grootte (in prentpixels), sterkte en hardheid in die paneel. {{ui:Undo stroke}} of {{key:Ctrl+Z}} (terwyl jy verf) neem 'n streep terug, tot die laaste 20.
- Die geverfde prent word in die lêer gestoor. Biblioteekmateriale kan nie geverf word nie: maak eers 'n redigeerbare kopie.

## Bak teksture

**Bak teksture** skryf wat die vorm en die toneel aan 'n oppervlak gee, in prente langs 'n netwerk se UV's.

- Kies 'n netwerk wat UV's het (ontvou dit in die UV-werkruimte), merk die kaarte aan en druk {{ui:Bake}}:
  - **Omgewingsokklusie** — hoe oop elke punt is: hoeke, groewe en plekke onder ander dinge word donkerder. Alles wat in die model gewys word, skakeer dit, tot by die okklusie-afstand.
  - **Krommung** — helder langs buitenrande, donker in binnehoeke, middelgrys op plat en sag geboë dele, oor die randwydte wat jy stel.
  - **Normale uit die hoëdetail-voorwerp** — kies ook 'n gedetailleerde kopie: sy oppervlakdetail word as 'n normaalkaart vir die eenvoudiger een geskryf (die voorwerp met minder driehoeke word daarop gebak). Die soekafstand is hoe ver die twee oppervlaktes van mekaar mag wees.
  - **Verligting** — die son van die model se plek en datum (Styl) met sy skaduwees, plus die lug, as 'n ligkaart.
- Die prente voeg by die lêer en verskyn in Prentnodusse. As die materiaal wat jy redigeer 'n **Vuil en randslytasie**-nodus het, lees dit die nuwe okklusie en krommung dadelik.
- Meer strale per tekselpunt maak die okklusie en verligting gladder, en neem langer. Bak loop op die rekenaar se verwerkerkerne op die agtergrond; {{ui:Stop baking}} stop dit.

## Bou 'n grafiek

1. {{ui:Add a node…}} (of {{key:Shift+A}} in die nodusredigeerder) voeg 'n nodus in die middel van die redigeerder by.
2. Sleep van 'n uitsetpunt (aan 'n nodus se regterkant) na 'n insetpunt (aan 'n nodus se linkerkant) om hulle te koppel. 'n Tweede koppeling na 'n inset vervang die eerste; sleep 'n gekoppelde inset weg om dit te ontkoppel.
3. Insette wat nie gekoppel is nie, wys hulle waarde: tik 'n getal of kies 'n kleur. Instellings staan onderaan elke nodus.

Sleep 'n nodus aan sy titel om dit te skuif, sleep leë ruimte om te pan, en gebruik die wiel om te zoem. {{key:Delete}} verwyder die gekose nodusse of koppeling, {{key:Mod+Z}} ontdoen, {{key:Mod+D}} dupliseer, {{key:F}} wys elke nodus. Elke verandering is een ontdoenstap van die nodusredigeerder. Die model se eie ontdoen verander nie materiale nie.

| Nodusse | Wat hulle maak |
|---|---|
| Tekstuurkoördinate | Waar op die teël 'n punt is: herhaal dit, verskuif dit, draai dit 'n kwart. |
| Waarde, Kleur | 'n Getal, 'n kleur. |
| Prent | 'n Prent van die lêer (een wat met 'n ingevoerde model saamgekom het, of een wat jy met {{ui:Add a picture…}} bygevoeg het). Kies **Kleure** vir 'n foto en **Data** vir 'n ruheid- of normaalkaart. |
| Biblioteektekstuur | 'n Biblioteekmateriaal se tekstuur, ruheid en hoogte. |
| Dambord, Geraas | Vierkante; gladde fraktale geraas met sy detail, ruheid en saad. |
| Voronoi-selle, Golwe, Gradiënt | Selle (afstand tot die naaste punt, die rande tussen selle, 'n kleur per sel); bande dwars, op of diagonaal, as sinus, saag of driehoek, gebuig deur geraas; lineêre, kwadratiese, radiale en sferiese gradiënte. |
| Baksteen, Teëls | Rye baksteen met 'n lopende verskuiwing, of 'n rooster teëls: kleure, mortel of voeg, 'n spleet en 'n skuinssnit in meter, 'n hoogte vir bulte, 'n ewekansige getal per stuk. |
| Hout, Marmer | Ringe langs die nerf met fyn vesels; are gebuig deur turbulensie. |
| Vuil en randslytasie | Slyt konvekse rande weg en vuil holtes uit 'n netwerk se krommings- en okklusieprente ([Bak teksture](topic:shading#bake-textures) maak hulle; of stel sy twee prentinstellings, in die netwerk se UV-uitleg: plaas die materiaal volgens UV-koördinate). Sonder hulle verander dit niks nie. |
| Meng kleure, Kleurrampe, Tint/versadiging/waarde, Helderheid en kontras, Omkeer, Gamma, Skei en Kombineer RGB | Kleurwerk. |
| Wiskunde, Kaartreeks | Rekenkunde op getalle (optel, vermenigvuldig, mag, gladde stap en meer). |
| Bult, Normaalkaart | 'n Normaal uit 'n hoogte (Bult) of uit 'n normaalkaartprent (Normaalkaart: kies die groen kanaal se rigting). |

## Die Materiaaluitset

Sy instellings sê hoe die tekstuur op oppervlaktes lê:

- **Teëlwydte** en **Teëlhoogte**: hoeveel meter een teël van die tekstuur dek. Alles wat 'n grafiek maak, herhaal oor die teël sonder 'n naat.
- **Geplaas deur**: **UV-koördinate** volg vlakke (stoot/trek-vlakke: langs elke vlak; netwerke: hulle UV's, een UV-eenheid = een teël), **Boks** projekteer vanaf die naaste van die drie asse, **Triplanêr** meng die drie projeksies op oppervlaktes wat skuins lê (**Vermengskerpte**: hoër is 'n harder oorgang).
- **Normaalsterkte** skaal die normaal-inset. **Verplasingskaal** stel hoe ver die verplasingsinset 'n netwerk se punte skuif.
- {{ui:More inputs}} wys die res van die OpenPBR-insette: laag, pluis, onderoppervlak, dun film, transmissie en hulle kleure.

## In hoëgehalte-prente

Die padtracer lees die basiese kleur, ruheid, metaalagtigheid, dekking, normaal en emissie uit die grafiek soos hulle oor die oppervlak verander. Enige ander inset wat jy koppel (byvoorbeeld 'n laag wat wissel), word by sy gemiddelde gebruik; die paneel sê watter. 'n Uitsny uit 'n dekkingstekstuur wys sy vorm, en sy skaduwee is eweneens deursigtig. 'n Gloeiende tekstuur verlig wat dit in die gesig staar, sonder om as 'n lamp gemonster te word.

**Verplasing** skuif die punte van netwerke alleen, so voeg 'n Onderverdeling-wysiger by vir detail ([Wysigers](topic:modifiers)). Stoot/trek-vlakke behou hulle vorm en kry die bulte uit die normaal.

:::tip
Op 'n rekenaar met WebGPU word die grafiek op die grafiekkaart uitgewerk; sonder dit, op die verwerker. Die resultaat is dieselfde.
:::
