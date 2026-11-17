---
title: Wat is nuut in 0.9
summary: Druk-fase met ons eie snyer en stuur na USB, Klipper, OctoPrint en PrusaLink, harssnyding en lêer-byvoegings, materiaalvloei, digitale tweeling- en fabrieksvloer-byvoegings, NURBS-verrondings, verdikking en skanderingpassing, AR op terrein en tien boogmetodes.
keywords: wat is nuut, whats new, vrystellingsnotas, veranderingslys, 0.9, druk-fase, 3d-druk, stuur na 3d-drukker, snyer, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, hars, harsdruk, goo, sl1, ctb, anycubic, blootstellingstoets, materiaalvloei, digitale tweeling, fabrieksvloer, plc, transportband, nurbs, verronding, verdik, skanderingpassing, ar, op terrein, boogmetodes, eenhede, weergawe, 0.8, 0.8.1, veranderings, nuwe kenmerke, renderenjin, enjin, oopmaak in, usd, gltf, unreal, byvoegingsenjin, oppervlaktes, loft, veeg, kontinuïteit, g0, g1, g2, zebra, step, iges, sê die toneel, toneel, weer, tyd van dag, seisoen, assistent, materiaal uit 'n foto, foto, skets-foto, meubileer, meubileer 'n vertrek, skuins, skuins snit, verdeel, druk-kontrole, probleme, eienskapsrooster, lampe, tale, invoertoestelle, nutsbalkrye, dwg, lewendig
from: 169048a2
---

Dit is wat in ModelCraft 0.9 verander het, vergeleke met 0.8.1. ModelCraft bereik nou die drukker en die fabrieksvloer: jy kan dinge op 'n druk-bed plaas en dit stuur sonder om uit te voer, snit vir gloeidraad of hars, en 'n materiaalhanteringslyn uitlê. Dit is CadCraft Studio 0.9 en sy agt apps; die meeste nuwe kenmerke hieronder is byvoegings.

## Nuut

### 3D-druk

- **Druk-fase.** Klik {{ui:Druk-fase}} in die nutsbalk. Voeg Biblioteekitems by die drukker se bed, rangskik hulle, kyk deur die gesnyde lae en druk {{ui:Stuur na 3D-drukker}}, sonder dat 'n STL uitgevoer hoef te word. Dit hoort by die 3D Print-byvoeging, wat standaard aan is en soos enige byvoeging verwyder kan word. Sien [Plaas voorwerpe op die druk-bed en stuur hulle na 'n drukker](topic:print-stage).
- **Ons eie gloeidraad-snyer.** {{ui:CadCraft basic (ingesluit, vinnigste)}} is die snyer in die kaart se **Snyer**-lys: mure, velle, vulling, steunsels en 'n rok, op 'n werker sodat die bladsy bruikbaar bly. {{ui:Voorskou lae}} met die **Laag**-skuifbalk wys die lae voordat jy stuur. Drukkerprofiele soos die Ender-3- en Prusa MK4-style dra hul eie aanvangs-G-kode.
- **Stuur.** Oor USB (Chrome of Edge op 'n rekenaar, met die bladsy oop gehou), of na Klipper (Moonraker), OctoPrint of PrusaLink op jou netwerk. Niks koppel of stuur sonder 'n klik nie, en stuur vra eers.
- **Ander snyers.** Kiri:Moto, PrusaSlicer en OrcaSlicer is elk eie byvoegings, standaard af; voeg hulle by vanaf die kaart of vanaf {{ui:Instellings}} › {{ui:Byvoegings}}. PrusaSlicer en OrcaSlicer gebruik jou eie geïnstalleerde kopie uit CadCraft Studio. Die Bambu Lab-drukkers-byvoeging sny met jou OrcaSlicer en sy P2S-voorinstellings en benodig Studio op 'n rekenaar.
- **Harsdruk.** Die hars-byvoegings (standaard af) maak laagprente vir jou drukker se skerm, met uitholing en ontluchtingsgate, 'n vlot en steunsels, 'n laagvoorskou, en tyd, hars en koste. Lêerformaat-byvoegings skryf Elegoo GOO, SL1, Chitubox (CBDDLP en CTB 2 tot 5) en Anycubic (PWMX en PWS). 'n Harsblootstellingstoets maak 'n leer van vyf blootstellings. Sien [Snyd vir 'n harsdrukker](topic:resin-printing).
- **Onveranderd.** {{ui:Voer uit}} › {{ui:Kontroleer vir 3D-druk (STL of 3MF)…}}, die druk-gereedskap en Verdeel vir druk werk soos in 0.8. Sien [Maak 'n model gereed vir 3D-druk](topic:print-3d).

### Materiaalvloei, Digitale tweeling en Fabrieksvloer

Hierdie drie is byvoegings, af totdat jy hulle aanskakel in {{ui:Instellings}} › {{ui:Byvoegings}}, en elk het sy eie hulp sodra dit aan is.

- **Materiaalvloei.** 'n Paneel met die naam Materiaalvloei lê transportbande, stasies, buffers en AGV-paaie in die 3D-aansig uit, laat 'n gesaaide simulasie loop, speel dit terug, en wys deurset, leeftye en rye, met resultate wat as CSV gestoor word. Bestellings kan uit 'n CSV-lêer kom. Robotselle kan nagegaan en uitgevoer word. Die PLC-skakel het 'n sagte modus en 'n werklike modus oor Modbus TCP, wat slegs in CadCraft Studio werk.
- **Digitale tweeling.** Lees die Materiaalvloei-uitleg en laat 'n sagte PLC daarop loop, met foute wat jy kan afdwing, voorraadtoetse, 'n uitlegvergelyking en 'n materiaallys.
- **Fabrieksvloer.** Verander die stasies in masjiene en selle, lees hulle lewendig of uit 'n simulator, en hou 'n werkry en 'n eenvoudige OEE. Dit lees net: hierdie bou kan nie na 'n masjien of PLC skryf nie.

### Oppervlaktes, modelle en tekening

- **Verrondings, verdikking en booleaanse bewerkings op NURBS.** Die {{ui:Oppervlaktes}}-paneel het {{ui:Verronding tussen vlakke}}, {{ui:Verronding van verskeie rande}}, {{ui:Verdik tot 'n massief}} en Unie, Trek af en Snymengsel, elk met sy gemete afwyking. Sien [Vrye oppervlaktes (NURBS)](topic:nurbs-surfaces).
- **Pas oppervlaktes by 'n skandering.** Kies 'n geskandeerde mesh en gebruik {{ui:Pas oppervlakke by die scan}} in die **Skandering**-groep, en dan {{ui:Steek die oppervlakke tot 'n soliede voorwerp}}. Dit is 'n eerste passing, nie 'n volledige terug-ingenieurspakket nie.
- **'n Lewendige skakel vanaf 'n .3dm-modelleerder.** Eenrigting, vanaf Rhino 8 of Grasshopper, en dit benodig CadCraft Studio op dieselfde rekenaar. Sien [Hou 'n .3dm-model lewendig](topic:live-3dm-link).
- **Sien die model op terrein.** {{ui:Aansig op terrein (AR, foon)}} in die {{ui:Aansigte}}-kieslys werk op 'n Android-foon met Chrome. Sien [Sien die model op terrein met 'n Android-foon (AR)](topic:ar-on-site).
- **Boogmetodes.** Die {{ui:Boogmetodes}}-aftrekkieslys bied tien maniere om 'n boog te teken, insluitend {{ui:3-Punt}} en {{ui:Begin, Middelpunt, Einde}}.
- **Meer eenhede.** Gewigte (kg, lb, t, ton) en temperature (grade C, F, K en R) word verstaan waar jy waardes met eenhede tik.

## In elke app

- **Wenke.** Sweefteks op knoppe en afgesnyde etikette is 'n Bootstrap-wenk.
- **Sluitbare begin-wenk.** Die wenkkaart op 'n leë tekenarea het 'n klein sluit-x. Dit bly toe, en die opdragpalet kan dit weer wys.
- **Rollende oortjiesrye.** 'n Paneel se oortjiesry wat nie pas nie, rol in plaas daarvan om en word nie afgesny nie.
- **Oortjietitels.** Met 'n dokument oop begin die blaaieroortjie met die dokument se naam, dan ModelCraft en CadCraft. 'n Stip kom eerste solank dit nie gestoor is nie.
- **Uitleg.** {{ui:Instellings}} › {{ui:Algemeen}} › Uitleg hou die uitlegte in 'n aftrekkieslys, met 'n keuse om 'n uitleg vir net hierdie app te gebruik en 'n knoppie om die uitleg terug te stel.
- **Tale.** Die taallys in Instellings volg die taallêers wat die bou bevat. Ander tale as Engels is masjienkonsepte.
- **Lewendig en Biblioteek.** Lewendige TeamWerk wys lewendige wysers en name, en Biblioteek-versamelings gee elke app 'n standaardversameling.

## Reggestel

- {{ui:Speel}} verander in {{ui:Pouseer}} terwyl 'n animasie speel, en {{key:Space}} speel en pouseer terwyl die tydlyn oop is.
- Die stilteprent val terug na WebGL wanneer die grafiese kaart nie die pad-tracer kan begin nie. Die lewendige renderaansig mag steeds die fout wys; dit is nie op 'n Windows-masjien met daardie bestuurder nagegaan nie.
- Materiaalvloei se werklike modus koppel weer aan nadat 'n skakel geëindig het op PLC-uitsondering-antwoorde.

## Eerlike perke

- Niks is op 'n werklike drukker gedruk nie: nie gloeidraad nie, nie hars nie, nie deur Bambu Connect nie. Harslêers is slegs deur CadCraft se eie lesers teruggelees.
- Die digitale tweeling en Fabrieksvloer is slegs teen simulators en bekende antwoorde getoets, sonder 'n werklike PLC, lyn of protokol. Dit is nagaan-hulpmiddels, nie 'n veiligheidsvalidering nie. Fisika dek slegs bokse, tot agt ladings.
- Die Rhino- en Grasshopper-skakel het nog nooit in die werklike programme gedraai nie.
- Tale anders as Engels is masjienkonsepte.

## Vroeër: 0.8 en 0.8.1

Dit is wat in ModelCraft 0.8 (2026-11-01) en 0.8.1 (2026-11-02) verander het, vergeleke met 0.7. Die {{ui:Weergee 'n prent…}}-dialoog kan nou die toneel na 'n ander program stuur, die Oppervlaktes-paneel maak gladde vrye oppervlaktes, en 'n assistent wat jy koppel kan 'n hele toneel uit een sin opstel.

### Nuut

**Weergawe**

- **'n Enjinkeuse.** {{ui:Weergee 'n prent…}} het 'n **Enjin**-lys bo Modus. Ons eie twee enjins, Vinnig en die Pad-tracer, is die standaard en werk oral. Ander inskrywings stoor die toneel as 'n pakket (die model as 'n USD-lêer, plus 'n instellingslêer met die presiese materiaalwaardes, die lampe wat aan is, die son, die lug, die blootstelling en die kamera) om na 'n ander program te neem. 'n Prent wat deur 'n ander program geteken is, sê watter program en weergawe dit gemaak het. Sien [Kies watter program die prent teken](topic:render-engines).
- **Oopmaak in 'n ander program.** Die Enjin-lys kan die toneel as 'n USD-lêer, 'n glTF-lêer (`.glb`) of 'n Unreal-projekvouer (`.zip`) stoor, in die blaaier en in CadCraft Studio. In Studio kan dit ook usdview of die rekenaar se eie program vir die lêer begin. Sien [Maak die toneel in 'n ander program oop](topic:render-open-in).
- **Stuur na 'n speletjiesenjin vanaf Studio.** Studio skryf die toneel in 'n Unreal Engine-projek en hou dit op elke stuur gelyk, eenrigting net. Jou eie redigerings leef in 'n laag wat CadCraft nooit skryf nie. Sien [Stuur die toneel na 'n speletjiesenjin](topic:render-unreal).
- **Enjins van byvoegings.** 'n Byvoeging kan 'n enjin by die lys voeg. Een geskryf in JavaScript teken in die blaaier en in Studio; een wat 'n program laat loop, benodig jou ja in Studio. Sien [Teken die prent met 'n ander program](topic:render-other-program) en [Voeg 'n renderenjin by met 'n byvoeging](topic:render-engine-addons).
- **Sê die toneel.** Vertel jou gekoppelde assistent "skemer, ligte reën, herfsbome, mense op die plein" en ModelCraft stel dit in een stap op: die son beweeg na die datum en tyd sodat die skaduwees volg, die lug verander, nat oppervlaktes verskyn, en bome en mense word as werklike voorwerpe op etikette geplaas wat jy kan wegsteek, skuif of skrap. Tyd van dag, datum of seisoen, en weer (helder, bewolk, mis, ligte reën, reën, storm) werk ook op hul eie, en 'n latere versoek verander dieselfde toneel. Mis wys in die hoë-gehalte prent op die grafiese kaart; die ander enjins wys die lug, die lig en die nat oppervlaktes. Reën word nie as vallende strepe geteken nie.

**Materiale**

- **'n Materiaal uit een foto.** Gee ModelCraft 'n foto van 'n oppervlak ('n muur, 'n vloer, klip) en dit maak 'n teëlmateriaal: die lig oor die foto word gelykgemaak, die rande word laat aansluit, en 'n kleurkaart, 'n ruheidskaart en 'n normaalkaart word uit die prent bereken. Dit is gewone beeldverwerking op jou eie foto, sonder 'n afgerigte model. Ruheid is 'n skatting. 'n Gewone, vierkante, reguit foto gee die beste teël; 'n sterk patroon soos baksteen kan 'n sagte spook wys waar die verbinding vermeng word.

**Oppervlaktes**

- **Vrye oppervlaktes.** Die {{ui:Oppervlaktes}}-paneel maak NURBS-krommes en ongetrimde oppervlaktes: krommes deur punte, loft, gelinieerd, ekstrudeer, roteer, veë langs een of twee rails, oppervlaktes uit 'n kromme-netwerk, lappe uit vier rande, passing en vermenging. Elke gedeelde rand word gemeet as G0, G1 of G2 (gaping, hoek, kromtesprong) op die presiese oppervlaktes, en 'n rand slegter as wat jy gevra het verskyn in die Probleme-paneel met 'n **Pas**-regstelling. Sebra-strepe en kromtekleure word uit die presiese oppervlaktes geteken. STEP- en IGES-lêers gaan uit en kom in. Sien [Vrye oppervlaktes (NURBS)](topic:nurbs-surfaces).

**Terrein en kamers**

- **'n Skets-foto op die grond.** {{ui:Lêer}} › {{ui:Voer 'n sketsfoto in…}} verander 'n foonfoto van 'n handskets in rande op die grond by die skaal wat jy noem: een groep, met 'n etiket vir elke pennekleur. Die papier word op jou rekenaar gevind en reggetrek, en niks word êrens gestuur nie. Sien [Model op 'n terreinplan](topic:site-plan).
- **Meubileer 'n vertrek.** Kies 'n vloer en gebruik {{ui:Organiseer}} › {{ui:Meubileer 'n vertrek…}}. Slaapkamer-, sitkamer-, eetkamer-, kombuis-, badkamer- of kantoormeubels word volgens reëls geplaas, teen die mure en weg van deure en vensters, in een groep wat jy in een stap kan wegneem. Dit is 'n standaarduitleg vir jou om na te gaan, nie 'n ontwerp nie. Sien [Beginnerbiblioteek](topic:starter).

**3D-druk**

- **Skuins snitte.** Verdeel vir druk kan sy snitte tot 60 grade skuins maak, wat die stukke meer plakarea gee. Verbindings staan reg op die snit. Sien [Verdeel 'n model vir druk](topic:print-split).
- **Die druk-kontrole in Probleme.** Die bevindinge van die 3D-druk-kontrole wys in die Probleme-paneel met merkers op die model, en Herstel los hulle vandaar op. Sien [Steunsels, muurdikte, uitholing en herstel](topic:print-tools).

**In elke app**

- **Tale.** Hulp en apps kom in 54 tale. Tien is nuut: Litaus, Letties, Bosnies, Marathi, Telugu, Albanees, Afrikaans, Filipino, Swahili en Oesbekies. Tale anders as Engels is masjienkonsepte totdat 'n moedertaalspreker dit nagelees het, en hulponderwerpe mag steeds in Engels wees.
- **Invoertoestelle.** 'n Trackpad, 'n pen, 'n 3D-muis, 'n speletjiebeheerder en MIDI-beheerders kan die apps bestuur, vir almal of vir een.
- **Nutsbalkrye.** {{ui:Instellings}} › {{ui:Algemeen}} › Nutsbalkrye stel Omwikkel (soos voorheen), 2 rye of 1 ry. 'n Balk wat nie pas nie, rol sywaarts in plaas daarvan om ruimte van die tekening af te neem. Omwikkel bly die standaard.
- **Eienskapsrooster.** ModelCraft se lampvelde gebruik die gedeelde rooster: invoubare kategorieë, etiket- en waardekolomme, en Kompakte digtheid. Getikte rekenkunde soos `2*450` werk steeds.
- **Probleme.** Die Probleme-paneel (die waarskuwingsknoppie in die appbalk) word deur al die apps gedeel. In ModelCraft hou dit die druk-kontrole en die oppervlak-kontinuïteitswaarskuwings.
- **Lewendig.** 'n Lewendige TeamWerk-sessie wys wie waar is. Sien [Modelleer saam met Lewendige TeamWerk](topic:work-live).
- **Byvoegings.** Byvoegings kan renderenjins byvoeg, soos hierbo.
- **Koppel jou KI.** Die gereedskapskontrak en die toetse van die agt apps slaag, met 454 gereedskapstukke altesaam. Eenklik-koppeling binne Studio, 'n gehuisveste koppelaar vir blaaierassistente, jou eie sleutel binne Studio en 'n gepubliseerde pakket is nog nie belowe nie. Die apps bevat geen KI van hul eie nie. Sien [Gebruik ModelCraft met KI-assistente](topic:use-with-ai-assistants).

### Reggestel in 0.8.1

- **DWG-klasseafdeling.** Die klasseafdeling van 'n DWG-lêer is as die verkeerde tipe gelees, wat die lêer by invoer kon breek. Dit word nou korrek gelees, in ModelCraft en in die ander apps wat DWG lees.
- **Tablette in staande rigting.** Oortollige roosterhoogte gaan na die doek, en die bladuitleg begin by 760 pixels breed of minder. ModelCraft se stylblad het die verandering ook.
- **Taal in Studio.** CadCraft Studio en die verpakte uitgawes kan taal wissel terwyl dit loop; voorheen was dit net Engels. Dit is nog nie op elke platform getoets nie: sê vir ons as die taal nie verander nie.

### Nog nie in hierdie weergawe nie

- **Nie kode-geteken nie.** Windows mag SmartScreen wys: kies {{ui:Meer inligting}}, en dan {{ui:Laat tog loop}}. Op 'n Mac, regsklik en kies {{ui:Maak oop}}. Winkelbou's is aan die hou, en die iPad- en iPhone-bou is nie vir 0.8.1 herbou nie.
- 'n Ander program wat die prent teken sonder 'n renderenjin-byvoeging, panorama- of stereokameras en 'n lugprent deur 'n ander program, en die inprop wat die Unreal-toneel oopmaak, is nog nie daar nie. Die lêers word geskryf; die inprop is nie vrygestel nie en is nie in Unreal gedraai nie.
- Vrye oppervlaktes: G3 en klas A word nie gemeet of beweer nie, en trim en soliede voorwerpe kom later.
- Prente van ander programme is nie piksel vir piksel soos ons s'n nie: slegs die kamera, son, lampe en blootstelling pas.
- Die 0.8.1-regstelling vir die taalwissel in Studio is nie op elke platform getoets nie.

Alles anders is in [Nog nie gebou nie](topic:not-built-yet). Vir die vorige vrystelling, sien [Wat is nuut in 0.7](topic:whats-new-0-7).
