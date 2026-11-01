---
title: Wat is nuut in 0.7
summary: Roosters met wysigers, beeldhouwerk, UV's en kurwe-voorwerpe, padgevolging op die grafiese kaart en 'n Render-werkruimte, 'n intydse lewe-aansig met verstrooiing en panorama's, materiale met nodusse, 'n Animeer-werkruimte met bene en fisika, USD-, FBX-, STEP- en .3dm-lêers, en druk-gereedskap met 'n Beginner-styl.
keywords: wat is nuut, release notes, veranderinge, changelog, veranderinge, 0.7, weergawe, nuwe funksies, maas, maas, maaswerkruimte, wysigers, onderverdeling, vou, uv, ontvou, naatlyne, krommes, kurwe-voorwerpe, nurbs, bezier, beeldhou, hermesh, hertopologie, verdeel, berekening, padgevolging, webgpu, render-werkruimte, renderreeks, mp4, exr, ontgeluid, fisiese lug, hdri, ies, veldiepte, lig-meng, mis, kaustiek, lewe-aansig, intyds, stap, verstrooiing, panorama, toer, kyker, skakering, nodusse, nodusmateriale, materiaalbiblioteek, materialx, afplakkers, teksture verf, bak, animeer, grafiekredigeerder, klippe, vormsleutels, dryers, skelet, bene, vel, ik, beperkings, fisika, usd, usdz, gltf, fbx, step, 3dm, alembic, ply, acis, 3d-soliede, steunsels, muurdikte, hol maak, herstel, beginner, assistente, jou masjien, eenhede, portugees
from: b9fc43e2
---

Dit is wat in ModelCraft 0.7 verander het, vergeleke met 0.6. ModelCraft modelleer nou roosters sowel as stoot/trek-geometrie, render op die grafiese kaart, en het 'n werkruimte vir elke soort werk: kies dit in die lys {{ui:Werkruimte}} aan die linkerkant van die nutsbalk.

## Nuut

### Roosters

- **Roosters.** Kies 'n groep of komponent en klik op {{ui:Skakel om na maas}} in {{ui:Entiteitinligting}}: dit word 'n maas, met vlakke van enige aantal hoeke wat teksture-koördinate, normale, kleure en gewigte kan dra. {{ui:Skakel om na geometrie}} draai dit terug. Ontdoen op 'n maas hou net wat elke stap verander het. 'n Lêer wat 'n maas hou, benodig ModelCraft 0.7 om oop te maak. Sien [Roosters](topic:meshes).
- **Die Maas-werkruimte.** Dubbelklik op 'n maas, of kies {{ui:Maas}} in die lys {{ui:Werkruimte}}, om sy hoekpunte, rande en vlakke te wysig: lusse en ringe, proporsionele wysiging, uittrek, insit, afskuins, lusknip, mes, halveer, draai, saamvoeg, oplos, vul, roostervul, brug en gly, en die instellings van die laaste bewerking wat daarna verander is in die paneel. Begin van 'n vlak, kubus, sfeer, torus en meer. Stoot/trek-sleutels en modelleersleutels werk albei. Sien [Wysig 'n maas in die Maas-werkruimte](topic:mesh-edit).
- **Wysigers.** Spieël, skikking, onderverdelingsoppervlak, afskuins, verdik, boolse, verplaas, las, verlaag, gladmaak, rooster, krommevervorming en krimpomhulsel verander wat 'n maas wys sonder om dit te verander. Stapel hulle, skakel elkeen aan of af vir die aansig en vir weergawes, en {{ui:Pas toe}} een wanneer jy dit vir goed wil hê. Sien [Wysigers op 'n maas](topic:modifiers).
- **Onderverdeling met vouings.** {{ui:Vou}} in die Maas-werkruimte hou gekose rande skerp onder 'n onderverdelingsoppervlak. Weergawes kan meer vlakke gebruik as die aansig, en op 'n groot maas wys die aansig 'n laer vlak en sê dit. Sien [Onderverdelingsoppervlak](topic:modifiers#subdivision-surface).
- **Kurwe-voorwerpe.** Bézier-, NURBS- en reguitsegment-krommes wat 'n buis, 'n band, 'n taps toelopende vorm of 'n gevulde plaat maak, en teks as 'n kromme. Wysig hulle punte in die {{ui:Kurwe}}-werkruimte; {{ui:Na vlakmodel}} wanneer die vorm reg is. Sien [Kurwe-voorwerpe](topic:curves).
- **Die UV-werkruimte.** Merk naatlyne (of laat ModelCraft hulle by skerp rande merk), {{ui:Ontvou}} en {{ui:Pak}}, of projekteer deur boks, silinder, sfeer of die aansig. 'n UV-redigeerder langs die 3D-aansig skuif, draai en skaal die stukke, en 'n toetsbord- en rekkleure wys die resultaat. Sien [Lê 'n maas se UV's uit](topic:uv).
- **Beeldhouwerk.** Die {{ui:Beeldhou}}-werkruimte het teken-, klei-, gladmaak-, gryp-, opblaas-, vou-, knyp-, plat maak- en masker-kwasse, spieëling oor X, en {{ui:Detail}} wat driehoeke byvoeg waar jy beeldhou. 'n Pen se druk stel die kwas se grootte en sterkte. Elke streek is een ontdoen-stap. Sien [Beeldhou 'n maas](topic:sculpt).
- **Hermesh en hertopologie.** {{ui:Hermesh}} maak 'n hele maas weer as eweredige driehoeke, sluit gate en voeg oorvleuelende stukke saam. Om 'n skoon maas oor 'n gedetailleerde een te bou, kies dit onder {{ui:Hertopologie}}: punte wat jy skuif land op sy oppervlak. Sien [Hermesh](topic:mesh-edit#remesh).

### Tekening

- **Verdeel 'n rand of kromme.** Die {{ui:Verdeel}}-gereedskap merk die snitte soos jy langs 'n rand beweeg en verdeel met 'n klik of 'n getal wat jy tik; met 'n rand, boog of sirkel gekies, tik `/5`; {{ui:Entiteitinligting}} › {{ui:Verdeel…}} vra vir die getal, vir tablette. 'n Boog of sirkel word verdeel in gelyke hoeke op die ware boog. Sien [Verdeel 'n rand of kromme in gelyke dele](topic:divide).
- **Berekeninge in die waardeblokkie.** Tik `2.5/3`, `12'6"+3/4"`, `(24'-0")/3` of `2*450mm` vir enige lengte, en `90/2` vir 'n hoek. 'n Berekening wat nie gedoen kan word nie, sê wat verkeerd is en waar. Sien [Berekeninge](topic:value-box#calculations).

### Weergee

- **Padgevolging op die grafiese kaart.** {{ui:Maak 'n prent…}} › {{ui:Hoë gehalte (padgevolg)}} laat CadCraft se eie padgevolger op die grafiese kaart loop waar die blaaier WebGPU het; die lyn onder die prent sê watter enjin dit gemaak het. {{ui:Stop}} hou die prent en {{ui:Hervat}} gaan van daar voort. Sonder WebGPU word die prent met WebGL padgevolg, soos vroeër. Sien [Hoë gehalte](topic:render#high-quality).
- **Weergee in die aansig.** Die {{ui:Weergee}}-werkruimte volg die aansig self en begin weer as jy wentel of wysig: weergee 'n {{ui:Streek}}, klik om te {{ui:Fokus}}, stel die {{ui:Detail}} in. Dit benodig WebGPU. Sien [Weergee in die aansig](topic:render#render-in-the-view).
- **Materiale, ligte en hemele.** Hoë-gehalte-prente skakker elke oppervlak met die OpenPBR-materiaalmodel (lae, pluis, dun films, gekleurde glas, gloed). Met WebGPU is daar ook 'n {{ui:Fisiese lug}} met {{ui:Waasheid}}, 'n {{ui:Lugprent (HDRI)}}, en vervaardiger se IES-liglyne vir lampe. Sien [Hemele en liglyne](topic:render#skies-and-light-profiles-on-the-graphics-card).
- **'n Kamera soos 'n foto se kamera.** Blootstelling uit f-stop, sluiter en ISO in elke modus; met WebGPU ook veldiepte, tweepuntperspektief, witbalans, 360°-panorama's (ook in stereo) en kubuskaarte. Sien [Die kamera](topic:render#the-camera).
- **Maak die prent klaar na weergee.** Gradeer dit ({{ui:ACES-filmies}}, {{ui:AgX}}, {{ui:Filmies}} of {{ui:Standaard}}, kontras, gloed, glans, vignet, 'n `.cube`-kleurtabel), meng die lug, die son en elke lampgroep, en kyk na weergee-elemente een vir een, alles sonder om weer weer te gee. Die oorblywende korrel word deur 'n ontruisers op jou eie rekenaar verwyder. Sien [Maak die prent klaar](topic:render#finish-the-picture) en [Meng die ligte na die weergee](topic:render#mix-the-lights-after-the-render).
- **Meer maniere om 'n weergawe te stoor.** 16-bis PNG, 'n multilaag-EXR met elke weergee-element en lig-groep, en 'n weergawe-lêer (`.ccrender`) wat weer oopmaak met sy mengsel en gradering. Sien [Stoor die prent](topic:render#save-the-picture).
- **Mis, rook en kaustiek.** Mis en waas wat deur die son en lampe verlig word, met ligskagte; een rookkolom of wolk; kaustiek onder glas en spieëls; aanpasbare steekproefneming wat stop by pixels wat reeds skoon is. Net op die grafiese kaart. Sien [Mis, rook, geraas en kaustiek](topic:render#fog-smoke-noise-and-caustics).
- **'n Weergaverij en MP4.** Voeg hoë-gehalte-prente en hele animasies by die {{ui:Renderreeks}}; hulle word een na die ander weergegee, en die reeks oorleef dat die bladsy toemaak. Dit benodig WebGPU. Video's kan ook as MP4 gestoor word waar die blaaier dit kan skryf. Sien [Die weergaverij](topic:render#the-render-queue) en [Weergee die video](topic:animation#render-the-video).

### Lewe-aansig en aanbiedings

- **Lewe-aansig.** {{ui:Voer uit}} › {{ui:Lewe-aansig}} wys die model in 'n intydse voorkoms langs die aansig, en volg elke wysiging en die kamera: sonskaduwees, materiale, lampe en lig wat van mure terugkaats. {{ui:Stap}} daardeur, sleep {{ui:Tyd}} en {{ui:Maand}} om die son te skuif, of skuif dit na 'n {{ui:Nuwe venster}}. Dit gebruik WebGPU waar die blaaier dit het, anders WebGL 2. Sien [Die lewe-aansig](topic:live-view).
- **Verstrooiing.** Versprei gras, blomme, rotse, bome en mense oor vlakke of met 'n kwas, uit sewe nuwe omgewingsitems en die res van die biblioteek; die stelle word in die lêer gestoor. Sien [Verstrooi plante, rotse en mense](topic:live-view#scatter-plants-rocks-and-people).
- **Deel.** 'n 360°-panorama, 'n panorama-toer met pyltjies tussen plekke, 'n alleenstaande kyker (een webblad wat aflyn oopmaak en niks van die internet laai nie) en 'n video van die kamerapad, almal in die intydse voorkoms. Sien [Deel](topic:live-view#share-panoramas-tours-a-viewer-a-video).
- **VR in die intydse voorkoms.** {{ui:Hersien in VR}} wys die model met sy materiale, lug, sonskaduwee, lampe, verstrooide items en terugkaatsende lig. Sien [Hoe dit lyk](topic:vr-review#what-it-looks-like).

### Materiale

- **Materiale gemaak met nodusse.** Die {{ui:Skakering}}-werkruimte bou die lêer se eie materiale as nodus-grafieke: prente, geraas en toetsborde, Voronoi-selle, golwe, baksteen, teëls, hout, marmer, oorgange, vuil en kantslytasie, kleurwerk, wiskunde, bult- en normaalkaarte, in die volle OpenPBR-materiaal. Die aansig wys elke verandering dadelik. Sien [Maak materiale met nodusse](topic:shading).
- **'n Materiaalbiblioteek en jou eie teksturstelle.** Die Skakering-paneel lys Biblioteek se materiale: sestien CC0-tekstuurstelle, elk gekrediteer. Klik op een om dit te gebruik, of sleep dit op 'n vlak. {{ui:Prente of 'n zip…}} of {{ui:'n Vouer…}} maak 'n materiaal uit jou eie kaarte, gevind deur hulle lêernaam. Sien [Materiale uit die biblioteek](topic:shading#materials-from-the-library).
- **MaterialX in en uit.** Voer 'n materiaal uit as MaterialX (OpenPBR Surface of Standard Surface, teksture as PNG), en voer MaterialX-lêers in met hul prente. Sien [MaterialX](topic:shading#materialx).
- **Afplakkers en tekstuurverf.** Plaas 'n prent op 'n oppervlak as 'n afplakker met 'n eie materiaal, en verf op 'n materiaal se prent met 'n ronde kwas. Sien [Afplakkers](topic:shading#decals) en [Verf op die tekstuur](topic:shading#paint-on-the-texture).
- **Teksturbak.** Bak omgewingsoklusie, krommming, lig en 'n gedetailleerde voorwerp se normale in prente langs 'n maas se UV's, op die rekenaar se verwerkerkerne. Sien [Bak teksture](topic:shading#bake-textures).

### Animasie

- **Die Animeer-werkruimte.** Sleutel 'n voorwerp se plek, draai en grootte, elke lamp se helderheid, spreiding en kleur, en die lens se hoek, reg in die paneel. Die tydlyn kry 'n {{ui:Krommes}}-aansig (Bézier-handvatsels, herhalings) en 'n {{ui:Klippe}}-aansig wat sleutels as aksies stoor om weer te plaas en te meng; sleutels op verskeie rye kan geskuif, gerek, gekopieer en geplak word. Sien [Animeer enige eienskap](topic:animate).
- **Vormsleutels en dryers.** 'n Maas hou ander vorms van homself, gemeng deur skuiwers wat gesleutel kan word, of ingestel uit ander waardes deur 'n klein uitdrukking. Sien [Vormsleutels](topic:animate#shape-keys-morphs) en [Dryers](topic:animate#drivers).
- **Skelette.** Plaas bene in 'n maas, laat {{ui:Outomatiese gewigte}} die punte onder hulle verdeel of die gewigte verf, en stel die bene en sleutel hulle; lineêre of dubbele kwaternioen-vel. Sien [Skelette](topic:animate#armatures-bones-that-bend-a-mesh).
- **IK en beperkings.** Bereik (IK) met 'n pool, kyk na, kopieer transformasies, grense, kind van en volg pad, vir bene en voorwerpe. Sien [IK en beperkings](topic:animate#ik-and-constraints).
- **Fisika.** Groepe en komponente val, stapel en bots as bokse of balle, en {{ui:Bak fisika}} hou die resultaat as sleutels. Sien [Fisika](topic:animate#physics-drop-stack-and-collide).

### Lêers

- **USD.** {{ui:Stoor as}} ({{key:Mod+Shift+S}}) stoor die model as `.usda`, `.usdc` of `.usdz`, en 'n USD-lêer wat ModelCraft gestoor het, maak weer oop met niks verlore nie. USD van ander programme maak oop of word ingevoer as maas, groepe, komponente, lampe en kameras. {{ui:Stoor}} skryf steeds `.modelcraft`. Sien [Stoor, maak oop en voer USD uit](topic:usd).
- **glTF, volledig.** glTF-lêers kom in as wysbare roosters met hul normale, UV's, hoekpuntkleure en teksture, nodusse as groepe, ligte as lampe en kameras as tonele, Draco- en meshopt-lêers ingesluit; 'n `.gltf` maak oop wanneer dit saam met sy lêers laat val word. Uitvoer skryf roosters, teksture, lampe en kameras. Sien [glTF](topic:formats#gltf-glb-gltf).
- **FBX-, PLY-, STL- en Alembic-invoer.** FBX 2011 en nuwer (roosters, UV-stelle, materiale, ingebedde teksture, ligte, kameras), PLY en STL met hul kleure, en Alembic-kas by sy eerste monster. OBJ kom in met sy `.mtl` en prente wanneer jy dit saam laat val. Sien [Lêerformate in detail](topic:formats).
- **Meer uitvoere.** PLY met kleure, STL met die kleure van geverfde vlakke, en OBJ met sy teksture as een zip. Sien [Lêerformate in detail](topic:formats).
- **STEP-lêers.** {{ui:Voer in}} lees STEP (AP203, AP214, AP242) onderdele en samestellings as geslote roosters op hul ware grootte, elke onderdeel waar die lêer dit plaas. Sien [STEP](topic:formats#step-step-stp).
- **.3dm-lêers.** {{ui:Voer in}} lees `.3dm`-modelle: roosters, poliwerkvlakke en uittrekkings (uit die roosters wat in die lêer gestoor is, anders getessellereer deur ModelCraft), krommes as rande, blokke as komponente en lae as etikette. Sien [Voer 'n .3dm-model in](topic:import-3dm-files).
- **3D-soliede uit DWG en DXF.** Die invoer van 'n tekening bring nou ook sy 3D-soliede, streke en liggame, elk as sy eie groep, geslote een as soliede. Sien [Modelleer op 'n terreinplan](topic:site-plan#what-comes-in).

### 3D-druk

- **Druk-gereedskap.** {{ui:Kontroleer vir 3D-druk (STL of 3MF)…}} › **Drukgereedskap** het 'n {{ui:Steunsels-voorskou}} (oorhange, kolomme of boomsteunsels, ongeveer hoeveel materiaal), {{ui:Muurdikte}} (mure te dun om te druk, gelys met {{ui:Wys}}), {{ui:Hol maak}} (mure van die dikte wat jy gee, met dreinasgate) en {{ui:Herstel}} (elke regstelling gelys; oorvleuelende dele voeg net saam wanneer jy vra). Hol maak en Herstel gee 'n groep waarvan die plat kante enkele vlakke is, of 'n maas wanneer die resultaat nie sluit nie of te veel vlakke het; die statuslyn sê watter een. Sien [Steunsels, muurdikte, holmaak en herstel](topic:print-tools).
- **Die Beginner-styl.** {{ui:Instellings}} › {{ui:ModelCraft}} › {{ui:Kieslyste, sleutels en muis}} › {{ui:Beginner}}: groot knoppies om vorms en gate te laat val, te skuif, uit te lyn en {{ui:Groep}} sodat die gate sny, en dan die model vir druk te kontroleer. Sien [Die Beginner-styl](topic:beginner).

### Assistente en jou masjien

- **Meer vir KI-assistente.** 'n Assistent kan nou vlakke en materiale lys, stoot/trek, verf, groepe maak, tonele byvoeg en wys, maas byvoeg, wysigerstapels wysig, USD uitvoer, 'n prent weergee en die weergaverij vul. Sien [Gebruik ModelCraft met KI-assistente](topic:use-with-ai-assistants).
- **Jou masjien.** {{ui:Instellings}} › {{ui:ModelCraft}} › {{ui:Weergee}} › {{ui:Jou masjien}} wys die grafiese kaart, verwerkerkerne en geheue wat hierdie blaaier die program laat gebruik, en die vlak wat bepaal waar die lewe-aansig begin. Sien [Waarmee jou masjien weergee](topic:your-machine).

## Reggestel

- {{ui:Soliede}} › {{ui:Unie}}, {{ui:Trek af}} en {{ui:Snyding}} kon 'n groep gee wat nie geslote was nie, op enige grootte. Hulle sluit nou.
- {{ui:Soliede}} › {{ui:Trek af}} was grys met niks gekies nie, al kies dit sy twee stukke om die beurt nadat jy dit gekies het.
- Binne die animasietydlyn het getikte sleutels nêrens heen gegaan nie, {{key:Mod+S}} ook nie. {{key:Mod+Z}} en {{key:Mod+Y}} daar is die tydlyn se eie ontdoen en herdoen; ander {{key:Mod}}-sleutels bereik die program.

## In elke app

- **Eenhede.** {{ui:Instellings}} › {{ui:Algemeen}} › {{ui:Eenhede}} het een lys elk vir lengte, oppervlakte, volume, hoek en helling, met die presiese groottes wat die eenhede se definisies gee (die Amerikaanse opmetingsvoet is sy eie eenheid). Skakel die eenhede wat jy nooit gebruik af, en hulle verlaat die eenheidlyste; merk een met 'n ster en nuwe werk begin daarin. 'n Lêer hou altyd sy eie eenheid. In ModelCraft volg die eenhedelys langs die waardeblokkie die skakelaars (die model se eie eenheid bly altyd daarin), die ster stel die eenheid van 'n nuwe model in (wanneer ModelCraft daardie eenheid het), en 'n lengte wat met enige eenheid se merk getik word, word in daardie eenheid gelees. Sien [Eenhede, getikte waardes en die eenheidlyste](common:unit-lists).
- **'n Digter uitleg en paneele wat netjies wegskuif.** {{ui:Instellings}} › {{ui:Algemeen}} › {{ui:Uitlegdigtheid}} › {{ui:Kompak}} pas meer op die skerm (aanraakskerms en foonskerms hou hul groot knoppies). Elke syspaneel het 'n slanke titelbalk: sleep dit om die paneel te dok of te laat sweef, laat val dit op 'n ander paneel se balk om een raam as oortjies te deel, pen dit vas sodat dit na die rand wegskuif, of versteek dit en haal dit terug van die rand af. Sien [Rangskik die paneele](common:arrange-panels#make-the-layout-denser).
- **Dialoë skuif.** Sleep 'n dialoog aan sy titelbalk uit die pad van die tekening; dit kom terug waar jy dit gelos het. Dubbelklik op die titelbalk om dit weer te sentreer. Sien [Skuif 'n dialoog](common:arrange-panels#move-a-dialog).
- **Resepte vir KI-assistente.** Tien uitgewerkte versoeke vir jou eie assistent (maak 'n tekening skoon, plot 'n stel, kontroleer tekeninge, vra 'n model vrae, tel 'n hoeveelheidsopname op, probeer 'n onderdeelvariant…), elk met die gereedskap wat dit roep en die toestemmings wat dit nodig het, en elk deur ons toetse herspeel. Die programme bevat geen KI nie. Sien [Resepte vir KI-assistente](common:assistants-recipes).
- **Tale.** **Português (Portugal)** is nuut in {{ui:Instellings}} › {{ui:Algemeen}} › {{ui:Taal}}. Dit, **Português (Brasil)**, **Español (México)** en **Bahasa Indonesia** het nou elke woord van die programme, as konsepte wat nog nie deur 'n moedertaalspreker hersien is nie. Hulp-onderwerpe is in Engels.
- **CadCraft Studio** sê waarom 'n opdateringskontrole misluk het (nog geen lêer vir jou stelsel nie, geen netwerk nie, 'n slegte handtekening) in plaas van net "Klaar", en hou op om 'n Wat is nuut-kaart wat jy toegemaak het terug te bring totdat daar 'n nuwer uitgawe is.

## Nog nie in hierdie weergawe nie

- **0.7 is nie kode-geteken nie.** Teken en die Microsoft Store-pakket is na 0.8 verskuif omdat die sertifikaatvalidering nog nie deurgekom het nie. Kontroleer die SHA-256 langs elke lêer op getcadcraft.com/download. Op Windows, as SmartScreen die installeerder stop, kies {{ui:Meer inligting}}, dan {{ui:Begin tog}}. Op 'n Mac, die eerste keer, regsklik op CadCraft Studio en kies {{ui:Maak oop}}. CadCraft Studio is nog nie in 'n programwinkel nie, en daar is nog nie 'n iPad- of iPhone-bou nie.
- Die hoek- en helling-lyste in {{ui:Eenhede}} word gestoor, maar geen kassie lees hulle nog nie.
- Weergee op die grafiese kaart (WebGPU) is hier slegs met 'n sagtewarevervanger getoets, nog nie op regte grafiese kaarte nie, so weergee eers iets klein op jou eie rekenaar. Dieselfde geld vir die lewe-aansig, en VR is nog net met 'n kopstuk-emulator getoets.
- Sonder WebGPU is daar geen Weergee-werkruimte of renderreeks nie, en hoë-gehalte-prente het geen veldiepte, fisiese lug, lugprent, mis, rook, kaustiek of lig-meng nie.
- {{ui:Maak 'n prent…}} teken nog nie verstrooide items nie; hulle wys in die lewe-aansig, sy panorama's, kyker en video.
- Lampe animeer in die aansig, maar 'n weergegewe video gebruik die lampe soos hulle is wanneer dit begin.
- Bene en animasie word nog nie uit of na glTF-, FBX- of USD-lêers gelees of geskryf nie (vel-modelle kom in rusposisie in, met hul gewigte), en glTF- en FBX-materiale behalwe die basiskleur of tekstuur word nog nie bewaar nie.
- STEP-kleure en die samestelling se onderdeelname word nog nie gelees nie. `.3dm`-invoer is getoets met lêers wat deur die formaat se gereedskap geskryf is, nog nie met lêers van die modelleringsprogram self nie; SubD-voorwerpe, teks en afmetings word weggelaat.
- Die plantbiblioteek van CivilCraft is in ModelCraft, maar plante daaruit plaas is nog nie gebou nie.
- 'n Tekstuur op stoot/trek-vlakke verf herhaal met die materiaal se teël; om een vlak alleen te verf, skakel dit om na 'n maas en ontvou dit.

Al die ander is in [Nog nie gebou nie](topic:not-built-yet).
