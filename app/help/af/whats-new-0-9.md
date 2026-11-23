---
title: Wat is nuut in 0.9 (vroeër)
summary: Druk-fase met ons eie snyer en stuur na USB, Klipper, OctoPrint en PrusaLink, harssnyding en lêerbyvoegings, materiaalvloei, digitale tweeling- en fabriekvloerbyvoegings, NURBS-verrondings, verdikking en skanderingspassing, AR op die terrein en tien boogmetodes.
keywords: wat is nuut 0.9, vroeër vrystelling, wat is nuut, release notes, veranderinglys, 0.9, druk-fase, 3d-druk, stuur na 3D-drukker, snyer, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, hars, harsdruk, goo, sl1, ctb, anycubic, blootstellingstoets, materiaalvloei, digitale tweeling, fabriekvloer, plc, transportband, nurbs, verronding, verdik, skanderingspassing, ar, op terrein, boogmetodes, eenhede, veranderinge, 0.8, 0.8.1, weergawe, nuwe kenmerke, weergee-enjin, enjin, oopmaak in, usd, gltf, unreal, byvoegingenjin, nurbs, oppervlaktes, loft, sweep, kontinuïteit, g0, g1, g2, zebra, step, iges, sê die toneel, toneel, weer, tyd van die dag, seisoen, assistent, materiaal uit 'n foto, foto, skets-foto, meubileer, meubileer 'n vertrek, skuins, skuins snit, verdeel, drukkontrole, probleme, eienskapsrooster, lampe, tale, invoertoestelle, nutsbalkrye, dwg, lewendig
from: 2717d1b1
---

Dit is wat in ModelCraft 0.9 verander het, vergeleke met 0.8.1. ModelCraft bereik nou die drukker en die fabrieksvloer: jy kan dinge op 'n druk-bed plaas en dit stuur sonder om uit te voer, sny vir filament of hars, en 'n materiaalhanteringslyn uitlê. Dit is CadCraft Studio 0.9 en sy agt toepassings; die meeste nuwe kenmerke hieronder is byvoegings.

## Nuut

### 3D-druk

- **Druk-stadium.** Klik {{ui:Druk-stadium}} in die nutsbalk. Voeg Biblioteek-items by die drukker se bed, rangskik hulle, kyk deur die gesnyde lae en druk {{ui:Stuur na 3D-drukker}}, sonder enige STL om uit te voer. Dit hoort by die 3D-druk-byvoeging, wat standaard aan is en soos enige byvoeging verwyder kan word. Sien [Plaas dinge op die druk-bed en stuur hulle na 'n drukker](topic:print-stage).
- **Ons eie filamentsnyer.** {{ui:CadCraft basic (ingesluit, vinnigste)}} is die snyer in die kaart se **Snyer**-lys: mure, velle, vulling, ondersteuning en 'n skirt (voorlyn), op 'n werker sodat die bladsy bruikbaar bly. {{ui:Voorskou lae}} met die **Laag**-skuifbalk wys die lae voordat jy stuur. Drukkerprofiele, soos die Ender-3- en Prusa MK4-style, dra hul eie begin-G-kode.
- **Stuur.** Oor USB (Chrome of Edge op 'n rekenaar, met die bladsy oop gehou), of na Klipper (Moonraker), OctoPrint of PrusaLink op jou netwerk. Niks koppel of stuur sonder 'n klik nie, en stuur vra eers.
- **Ander snyers.** Kiri:Moto, PrusaSlicer en OrcaSlicer is elk hul eie byvoegings, standaard af; voeg hulle by vanaf die kaart of vanaf {{ui:Instellings}} › {{ui:Byvoegings}}. PrusaSlicer en OrcaSlicer gebruik jou eie geïnstalleerde kopie van CadCraft Studio. Die Bambu Lab-drukkers-byvoeging sny met jou OrcaSlicer en sy P2S-voorinstellings en benodig Studio op 'n rekenaar.
- **Harsdruk.** Die harsbyvoegings (standaard af) maak laagprente vir jou drukker se skerm, met uithol en lugopenings, 'n vlot en ondersteuning, 'n laagvoorskou, en tyd, hars en koste. Lêerformaat-byvoegings skryf Elegoo GOO, SL1, Chitubox (CBDDLP en CTB 2 tot 5) en Anycubic (PWMX en PWS). 'n Harsblootstellingstoets maak 'n leer van vyf blootstellings. Sien [Sny vir 'n harsdrukker](topic:resin-printing).
- **Onveranderd.** {{ui:Voer uit}} › {{ui:Kontroleer vir 3D-druk (STL of 3MF)…}}, die druk-gereedskap en Verdeel vir druk werk soos in 0.8. Sien [Maak 'n model gereed vir 3D-druk](topic:print-3d).

### Materiaalvloei, Digitale tweeling en Fabriekvloer

Hierdie drie is byvoegings, af totdat jy hulle in {{ui:Instellings}} › {{ui:Byvoegings}} aanskakel, en elk het sy eie hulp sodra dit aan is.

- **Materiaalvloei.** 'n Paneel met die naam Materiaalvloei lê transportbane, stasies, buffers en AGV-paaie in die 3D-aansig uit, laat 'n simulasie met 'n vaste saad loop, speel dit terug, en wys deurset, leitye en toue, met resultate gestoor as CSV. Bestellings kan van 'n CSV-lêer kom. Robotselle kan nagegaan en uitgevoer word. Die PLC-skakel het 'n sagte modus en 'n werklike modus oor Modbus TCP, wat net in CadCraft Studio werk.
- **Digitale tweeling.** Lees die Materiaalvloei-uitleg en loop 'n sagte PLC daarop, met foute wat jy kan afdwing, voorraadtoetse, 'n uitlegvergelyking en 'n materiaallys.
- **Fabriekvloer.** Verander die stasies in masjiene en selle, lees hulle lewendig of vanaf 'n simulator, en hou 'n werkrytoue en 'n eenvoudige OEE. Dit lees net: hierdie bou kan nie na 'n masjien of PLC skryf nie.

### Oppervlaktes, modelle en tekening

- **Verrondings, verdikking en Booleaanse bewerkings op NURBS.** Die {{ui:Oppervlaktes}}-paneel het {{ui:Verronding tussen vlakke}}, {{ui:Verronding van verskeie rande}}, {{ui:Verdik tot 'n massief}} en Unie, Aftrek en Deursnyding, elk met sy gemete afwyking. Sien [Vrye oppervlaktes (NURBS)](topic:nurbs-surfaces).
- **Pas oppervlaktes by 'n skandering.** Kies 'n geskandeerde mesh en gebruik {{ui:Pas oppervlakke by die skandering}} in die **Skandering**-groep, en dan {{ui:Steek die oppervlakke tot 'n soliede voorwerp}}. Dit is 'n eerste passing, nie 'n volledige terugwaartse-ingenieurspakket nie.
- **'n Lewendige skakel vanaf 'n .3dm-modelleerder.** Eenrigting, vanaf Rhino 8 of Grasshopper, en dit benodig CadCraft Studio op dieselfde rekenaar. Sien [Hou 'n .3dm-model lewendig](topic:live-3dm-link).
- **Sien die model op die terrein.** {{ui:Aansig op terrein (AR, foon)}} in die {{ui:Aansigte}}-kieslys werk op 'n Android-foon met Chrome. Sien [Sien die model op die terrein met 'n Android-foon (AR)](topic:ar-on-site).
- **Boogmetodes.** Die {{ui:Boogmetodes}}-aftrekkieslys bied tien maniere om 'n boog te teken, insluitend {{ui:3-Punt}} en {{ui:Begin, Middelpunt, Einde}}.
- **Meer eenhede.** Gewigte (kg, lb, t, ton) en temperature (grade C, F, K en R) word verstaan waar jy waardes met eenhede tik.

## In elke toepassing

- **Nutswenke.** Sweefteks op knoppies en afgekapte etikette is 'n Bootstrap-nutswenk.
- **Sluitbare beginwenk.** Die wenkkaart op 'n leë tekenarea het 'n klein sluit-x. Dit bly toe, en die opdragpalet kan dit weer wys.
- **Rollende oortjiestroke.** 'n Paneel se oortjiestrook wat nie pas nie, rol in plaas van afgesny te word.
- **Oortjiestitels.** Met 'n dokument oop begin die blad-oortjie met die dokument se naam, dan ModelCraft en CadCraft. 'n Kolletjie kom eerste terwyl die dokument nog nie gestoor is nie.
- **Uitleg.** {{ui:Instellings}} › {{ui:Algemeen}} › Uitleg hou die uitlegte in 'n aftrekkieslys, met 'n keuse om 'n uitleg vir net hierdie toepassing te gebruik en 'n knoppie om die uitleg terug te stel.
- **Tale.** Die taallys in Instellings volg die taallêers wat die bou bevat. Tale behalwe Engels is masjienkonsepte.
- **Lewendig en Biblioteek.** Live TeamWork wys lewende wysers en name, en Biblioteek-versamelings gee elke toepassing 'n standaardversameling.

## Reggestel

- {{ui:Speel}} verander in {{ui:Pouseer}} terwyl 'n animasie speel, en {{key:Space}} speel en pouseer terwyl die tydlyn oop is.
- Die stil weergawe val terug na WebGL wanneer die grafiekkaart nie die padopsporer kan begin nie. Die lewende weergawe-aansig mag steeds die fout wys; dit is nie op 'n Windows-masjien met daardie bestuurder nagegaan nie.
- Materiaalvloei se werklike modus koppel weer aan nadat 'n skakel op PLC-uitsonderingsantwoorde geëindig het.

## Eerlike beperkings

- Niks is op 'n werklike drukker gedruk nie: nie filament nie, nie hars nie, en nie deur Bambu Connect nie. Harslêers is slegs deur CadCraft se eie leesprogramme teruggelees.
- Die digitale tweeling en Fabriekvloer is net teen simulators en bekende antwoorde getoets, sonder 'n werklike PLC, lyn of protokol. Dit is nagaanhulpmiddels, nie 'n veiligheidsvalidasie nie. Fisika dek net kaste, tot agt laste.
- Die Rhino- en Grasshopper-skakel het nog nooit in die werklike programme gedraai nie.
- Tale behalwe Engels is masjienkonsepte.

## Vroeër: 0.8 en 0.8.1

Dit is wat in ModelCraft 0.8 (2026-11-01) en 0.8.1 (2026-11-02) verander het, vergeleke met 0.7. Die {{ui:Weergee 'n prent…}}-dialoog kan nou die toneel na 'n ander program stuur, die Oppervlaktes-paneel maak gladde vrye oppervlaktes, en 'n assistent wat jy koppel, kan die hele toneel uit een sin stel.

### Nuut

**Weergee**

- **'n Enjin-keuse.** {{ui:Weergee 'n prent…}} het 'n **Enjin**-lys bo Modus. Ons eie twee enjins, Fast en die Padopsporer, is die standaard en werk oral. Ander inskrywings stoor die toneel as 'n pakket (die model as 'n USD-lêer, plus 'n instellingslêer met die presiese materiaalwaardes, die lampe wat aan is, die son, die lug, die blootstelling en die kamera) om na 'n ander program te neem. 'n Prent wat deur 'n ander program geteken is, sê watter program en weergawe dit gemaak het. Sien [Kies watter program die prent teken](topic:render-engines).
- **Oopmaak in 'n ander program.** Die Enjin-lys kan die toneel stoor as 'n USD-lêer, 'n glTF-lêer (`.glb`) of 'n Unreal-projekvouer (`.zip`), in die blaaier en in CadCraft Studio. In Studio kan dit ook usdview of die rekenaar se eie program vir die lêer begin. Sien [Maak die toneel in 'n ander program oop](topic:render-open-in).
- **Stuur na 'n speletjiesenjin vanaf Studio.** Studio skryf die toneel in 'n Unreal Engine-projek en hou dit op elke stuur in pas, net een rigting. Jou eie wysigings lewe in 'n laag wat CadCraft nooit skryf nie. Sien [Stuur die toneel na 'n speletjiesenjin](topic:render-unreal).
- **Enjins vanaf byvoegings.** 'n Byvoeging kan 'n enjin by die lys voeg. Een geskryf in JavaScript teken in die blaaier en in Studio; een wat 'n program laat loop, benodig jou ja in Studio. Sien [Teken die prent met 'n ander program](topic:render-other-program) en [Voeg 'n weergee-enjin met 'n byvoeging by](topic:render-engine-addons).
- **Sê die toneel.** Vertel jou gekoppelde assistent "skemering, liggte reën, herfsbome, mense op die plein" en ModelCraft stel dit in een stap op: die son beweeg na die datum en tyd sodat die skaduwees volg, die lug verander, natterige oppervlaktes verskyn, en bome en mense word as werklike voorwerpe op etikette geplaas wat jy kan wegsteek, skuif of skrap. Tyd van die dag, datum of seisoen, en weer (helder, bewolk, mis, liggte reën, reën, storm) werk ook op hul eie, en 'n latere versoek verander dieselfde toneel. Mis wys in die hoë-gehalte prent op die grafiekkaart; die ander enjins wys die lug, die lig en die natterige oppervlaktes. Reën word nie as vallende strepe geteken nie.

**Materiale**

- **'n Materiaal uit een foto.** Gee ModelCraft 'n foto van 'n oppervlak ('n muur, 'n vloer, klip) en dit maak 'n teëlmateriaal: die beligting oor die foto word gelyk gemaak, die rande word laat aansluit, en 'n kleurkaart, 'n ruwheidskaart en 'n normaalkaart word uit die prent uitgewerk. Dit is gewone beeldverwerking op jou eie foto, sonder 'n opgeleide model. Ruwheid is 'n skatting. 'n Plat, vierkantige, reguit foto gee die beste teël; 'n sterk patroon soos baksteen kan 'n sagte spook wys waar die verbinding vervaag is.

**Oppervlaktes**

- **Vrye oppervlaktes.** Die {{ui:Oppervlaktes}}-paneel maak NURBS-kurwes en onbeperkte oppervlaktes: kurwes deur punte, loft, gereël, ekstrusie, rotasie, swaaie langs een of twee rails, oppervlaktes uit 'n kurwenetwerk, lappe uit vier rande, passing en vermenging. Elke gedeelde rand word as G0, G1 of G2 gemeet (gaping, hoek, kromtesprong) op die presiese oppervlaktes, en 'n rand wat slegter is as wat jy gevra het, verskyn in die Probleme-paneel met 'n **Pas**-herstel. Zebra-strepe en kromtekleure word uit die presiese oppervlaktes geteken. STEP- en IGES-lêers gaan uit en kom in. Sien [Vrye oppervlaktes (NURBS)](topic:nurbs-surfaces).

**Terrein en vertrekke**

- **'n Skets-foto op die grond.** {{ui:Lêer}} › {{ui:Voer 'n skets-foto in…}} verander 'n foto van 'n handskets met jou foon in rande op die grond by die skaal wat jy noem: een groep, met 'n etiket vir elke pennekleur. Die papier word op jou rekenaar gevind en reggetrek, en niks word iewers gestuur nie. Sien [Model op 'n terreinplan](topic:site-plan).
- **Meubileer 'n vertrek.** Kies 'n vloer en gebruik {{ui:Organiseer}} › {{ui:Meubileer 'n vertrek…}}. Slaapkamer-, sitkamer-, eetkamer-, kombuis-, badkamer- of kantoormeubels word volgens reëls geplaas, teen die mure en weg van deure en vensters, in een groep wat jy in een stap kan wegneem. Dit is 'n verstekuitleg vir jou om na te gaan, nie 'n ontwerp nie. Sien [Beginnerbiblioteek](topic:starter).

**3D-druk**

- **Skuins snitte.** Verdeel vir druk kan sy snitte tot 60 grade skuins maak, wat die stukke meer plakarea gee. Verbindings staan vierkant op die snit. Sien [Verdeel 'n model vir druk](topic:print-split).
- **Die drukkontrole in Probleme.** Die bevindinge van die 3D-drukkontrole wys in die Probleme-paneel met merkers op die model, en Herstel los hulle van daar af op. Sien [Ondersteuning, muurdikte, uithol en herstel](topic:print-tools).

**In elke toepassing**

- **Tale.** Hulp en toepassings kom in 54 tale. Tien is nuut: Litaus, Letties, Bosnies, Marathi, Telugu, Albanees, Afrikaans, Filipino, Swahili en Oesbekies. Tale behalwe Engels is masjienkonsepte totdat 'n moedertaalspreker dit gelees het, en hulponderwerpe mag steeds in Engels wees.
- **Invoertoestelle.** 'n Trackpad, 'n pen, 'n 3D-muis, 'n speletjiebeheerder en MIDI-beheer kan die toepassings beheer, vir almal of vir een.
- **Nutsbalkrye.** {{ui:Instellings}} › {{ui:Algemeen}} › Nutsbalkrye stel Wrap (soos vantevore), 2 rye of 1 ry. 'n Balk wat nie pas nie, rol sywaarts in plaas van ruimte van die tekening te neem. Wrap bly die standaard.
- **Eienskapsrooster.** ModelCraft se lampvelde gebruik die gedeelde rooster: invouebare kategorieë, etiket- en waardekolomme, en Kompakte digtheid. Getikte rekenkunde soos `2*450` werk steeds.
- **Probleme.** Die Probleme-paneel (die waarskuwingsknoppie in die toepassingsbalk) word deur al die toepassings gedeel. In ModelCraft hou dit die drukkontrole en die oppervlakkontinuïteitswaarskuwings.
- **Lewendig.** 'n Live TeamWork-sessie wys wie waar is. Sien [Model saam met Live TeamWork](topic:work-live).
- **Byvoegings.** Byvoegings kan weergee-enjins byvoeg, soos hierbo.
- **Koppel jou KI.** Die gereedskapskontrak en die kontroles van die agt toepassings slaag, met 454 gereedskapstukke in totaal. Eenklikverbinding binne Studio, 'n gehoste koppelaar vir blaaierassistente, jou eie sleutel binne Studio en 'n gepubliseerde pakket is nog nie belowe nie. Die toepassings bevat self geen KI nie. Sien [Gebruik ModelCraft met KI-assistente](topic:use-with-ai-assistants).

### Reggestel in 0.8.1

- **DWG-klassesafdeling.** 'n DWG-lêer se klassesafdeling is as die verkeerde tipe gelees, wat die lêer by invoer kon breek. Dit word nou korrek gelees, in ModelCraft en in die ander toepassings wat DWG lees.
- **Tablette in staande rigting.** Oorblywende rooster-hoogte gaan na die kanvas, en die bladuitleg begin by 760 pixels breed of minder. ModelCraft se stylesheet het die verandering ook.
- **Taal in Studio.** CadCraft Studio en die gepakte uitgawes kan taal wissel terwyl hulle loop; voorheen was hulle net Engels. Dit is nog nie op elke platform getoets nie: vertel ons as die taal nie verander nie.

### Nog nie in hierdie weergawe nie

- **Nie kode-onderteken nie.** Windows mag SmartScreen wys: kies {{ui:Meer inligting}}, en dan {{ui:Begin tog}}. Op 'n Mac, regsklik en kies {{ui:Oopmaak}}. Winkelbouwerke is opgeskort, en die iPad- en iPhone-bou is nie vir 0.8.1 herbou nie.
- 'n Ander program wat die prent teken sonder 'n weergee-enjin-byvoeging, panorama- of stereokamera's en 'n hemelprent deur 'n ander program, en die inprop wat die Unreal-toneel oopmaak, is nog nie daar nie. Die lêers word geskryf; die inprop is nie vrygestel nie en is nie in Unreal gedraai nie.
- Vrye oppervlaktes: G3 en klas A word nie gemeet of beweer nie, en trim en soliede liggame kom later.
- Prente van ander programme is nie pixel vir pixel soos ons s'n nie: net die kamera, son, lampe en blootstelling pas.
- Die 0.8.1-regstelling vir die taalwisseling in Studio is nie op elke platform getoets nie.

Alles anders is in [Nog nie gebou nie](topic:not-built-yet). Vir die vorige vrystelling, sien [Wat is nuut in 0.7](topic:whats-new-0-7).
