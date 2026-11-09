---
title: Wat is nuut in 0.8 en 0.8.1
summary: 'n Keuse van weergee-enjin met lêers vir ander programme, vrye-vorm NURBS-oppervlaktes met gemete kontinuïteit, 'n toneel wat jy aan jou assistent beskryf, 'n materiaal uit een foto, 'n sketsfoto op die grond, gemeubileerde vertrekke, skuins snitte vir 3D-druk, en die drukkontrole in die Probleme-paneel.
keywords: wat is nuut, what's new, vrystellingsnotas, veranderinge, changelog, veranderinge, 0.8, 0.8.1, weergawe, nuwe funksies, weergee-enjin, enjin, oopmaak in, usd, gltf, unreal, byvoeging-enjin, nurbs, oppervlaktes, loft, sweep, kontinuïteit, g0, g1, g2, zebra, step, iges, beskryf die toneel, toneel, weer, tyd van die dag, seisoen, assistent, materiaal uit 'n foto, foto, sketsfoto, meubileer, meubileer 'n vertrek, skuins, skuins snit, verdeel, drukkontrole, probleme, eienskapsrooster, lampe, tale, invoertoestelle, nutsbalkrye, dwg, lewendig
from: e4989b17
---

Dit is wat verander het in ModelCraft 0.8 (2026-11-01) en 0.8.1 (2026-11-02), in vergelyking met 0.7. Die dialoog {{ui:Weergee 'n prent…}} kan nou die toneel na 'n ander program stuur, die {{ui:Oppervlaktes}}-paneel maak gladde vrye-vorm-oppervlaktes, en 'n assistent wat jy koppel, kan 'n hele toneel uit een sin stel.

## Nuut

### Weergee

- **'n Keuse van enjin.** {{ui:Weergee 'n prent…}} het 'n **Enjin**-lys bo **Modus**. Ons eie twee enjins, Vinnig en die Padtraceerder, is die verstek en werk oral. Ander inskrywings stoor die toneel as 'n pakket (die model as 'n USD-lêer, plus 'n instellingslêer met die presiese materiaalwaardes, die lampe wat aan is, die son, die lug, die blootstelling en die kamera) om na 'n ander program te neem. 'n Prent wat deur 'n ander program geteken is, sê watter program en weergawe dit gemaak het. Sien [Kies watter program die prent teken](topic:render-engines).
- **Open in 'n ander program.** Die Enjin-lys kan die toneel stoor as 'n USD-lêer, 'n glTF-lêer (`.glb`) of 'n Unreal-projekgids (`.zip`), in die blaaier en in CadCraft Studio. In Studio kan dit ook usdview of die rekenaar se eie program vir die lêer begin. Sien [Maak die toneel oop in 'n ander program](topic:render-open-in).
- **Stuur na 'n speletjiemotor vanaf Studio.** Studio skryf die toneel in 'n Unreal Engine-projek en hou dit elke keer wat jy stuur gelyk, net een rigting. Jou eie wysigings is in 'n laag wat CadCraft nooit skryf nie. Sien [Stuur die toneel na 'n speletjiemotor](topic:render-unreal).
- **Enjins vanaf byvoegings.** 'n Byvoeging kan 'n enjin by die lys voeg. Een wat in JavaScript geskryf is, teken in die blaaier en in Studio; een wat 'n program laat loop, benodig jou ja in Studio. Sien [Teken die prent met 'n ander program](topic:render-other-program) en [Voeg 'n weergee-enjin met 'n byvoeging by](topic:render-engine-addons).
- **Beskryf die toneel.** Sê vir jou gekoppelde assistent "skemering, liggte reën, herfsbome, mense op die plein" en ModelCraft stel dit in een stap op: die son beweeg na die datum en tyd sodat die skaduwees volg, die lug verander, nat oppervlaktes verskyn, en bome en mense word as werklike voorwerpe geplaas op etikette wat jy kan wegsteek, skuif of skrap. Tyd van die dag, datum of seisoen, en weer (helder, bewolk, mis, liggte reën, reën, storm) werk ook op hul eie, en 'n latere versoek verander dieselfde toneel. Mis verskyn in die hoëgehalte-prent op die grafiese kaart; die ander enjins wys die lug, die lig en die nat oppervlaktes. Reën word nie as vallende strepe geteken nie.

### Materiaal

- **'n Materiaal uit een foto.** Gee ModelCraft 'n foto van 'n oppervlak ('n muur, 'n vloer, klip) en dit maak 'n teëlmateriaal: die beligting oor die foto word gelyk gemaak, die rande word gemaak om aan te sluit, en 'n kleurkaart, 'n ruwheidskaart en 'n normaalkaart word uit die prent bereken. Dit is gewone beeldverwerking op jou eie foto, sonder 'n opgeleide model. Ruwheid is 'n skatting. 'n Gewone, vierkantige, reguit foto gee die beste teël; 'n sterk patroon soos baksteen kan 'n sagte spook toon waar die naat vermeng is.

### Oppervlaktes

- **Vrye-vorm-oppervlaktes.** Die {{ui:Oppervlaktes}}-paneel maak NURBS-krommes en onbeperkte oppervlaktes: krommes deur punte, loft, geruit, ekstrudeer, rotasie, swaaie langs een of twee rails, oppervlaktes uit 'n kromme-netwerk, lappe uit vier rande, pas by en meng. Elke gedeelde rand word gemeet as G0, G1 of G2 (gaping, hoek, krommingsprong) op die presiese oppervlaktes, en 'n rand wat slegter is as wat jy gevra het, verskyn in die Probleme-paneel met 'n **Pas by**-regstelling. Sebra-strepe en krommingskleure word uit die presiese oppervlaktes geteken. STEP- en IGES-lêers gaan uit en kom in. Sien [Vrye-vorm-oppervlaktes (NURBS)](topic:nurbs-surfaces).

### Terrein en vertrekke

- **'n Sketsfoto op die grond.** {{ui:Lêer}} › {{ui:Voer 'n sketsfoto in…}} verander 'n foto van 'n handsketsie met jou foon in rande op die grond by die skaal wat jy sê: een groep, met 'n etiket vir elke pennekleur. Die papier word op jou rekenaar gevind en reguitgemaak, en niks word êrens gestuur nie. Sien [Model op 'n terreinplan](topic:site-plan).
- **Meubileer 'n vertrek.** Kies 'n vloer en gebruik {{ui:Organiseer}} › {{ui:Meubileer 'n vertrek…}}. Slaapkamer-, sitkamer-, eetkamer-, kombuis-, badkamer- of kantoormeubels word volgens reëls geplaas, teen die mure en vry van deure en vensters, in een groep wat jy in een stap kan verwyder. Dit is 'n verstekuitleg vir jou om na te gaan, nie 'n ontwerp nie. Sien [Beginnerbiblioteek](topic:starter).

### 3D-druk

- **Skuins snitte.** Verdeel vir druk kan sy snitte tot 60 grade skuins maak, wat die stukke meer plakoppervlak gee. Verbindings staan reg op die snit. Sien [Verdeel 'n model vir druk](topic:print-split).
- **Die drukkontrole in Probleme.** Die bevindings van die 3D-drukkontrole verskyn in die Probleme-paneel met merkers op die model, en Herstel los hulle van daar op. Sien [Ondersteuning, muurdikte, holmaak en herstel](topic:print-tools).

### In elke program

- **Tale.** Hulp en programme kom in 54 tale. Tien is nuut: Litaus, Letties, Bosnies, Marathi, Teluge, Albanees, Afrikaans, Filipyns, Swahili en Oesbekies. Tale behalwe Engels is masjienkonsepte totdat 'n huidige spreker dit gelees het, en hulponderwerpe mag steeds in Engels wees.
- **Invoertoestelle.** 'n Raakpaneel, 'n pen, 'n 3D-muis, 'n speletjiebeheerder en MIDI-beheer kan die programme bestuur, vir almal of vir een.
- **Nutsbalkrye.** {{ui:Instellings}} › {{ui:Algemeen}} › Nutsbalkrye stel Omvou (soos voorheen), 2 rye of 1 ry. 'n Balk wat nie pas nie, rol sywaarts in plaas daarvan om ruimte van die tekening af te neem. Omvou bly die verstek.
- **Eienskapsrooster.** ModelCraft se lampvelde gebruik die gedeelde rooster: invoubare kategorieë, etiket- en waardekolomme, en Kompakte digtheid. Getikte rekenkunde soos `2*450` werk steeds.
- **Probleme.** Die Probleme-paneel (die waarskuwingknoppie in die programbalk) word deur al die programme gedeel. In ModelCraft hou dit die drukkontrole en die oppervlakkontinuïteit-waarskuwings.
- **Lewendig.** 'n Lewendige TeamWork-sessie wys wie waar is. Sien [Modelleer saam met Lewendige TeamWork](topic:work-live).
- **Byvoegings.** Byvoegings kan weergee-enjins by voeg, soos hierbo.
- **Koppel jou KI.** Die gereedskapkontrak en die kontroles van die agt programme slaag, met 454 gereedskapstukke in totaal. Eenklik-koppeling binne Studio, 'n gasheer-koppelaar vir blaaierassistente, jou eie sleutel binne Studio en 'n gepubliseerde pakket is nog nie belowe nie. Die programme bevat geen KI van hul eie nie. Sien [Gebruik ModelCraft met KI-assistente](topic:use-with-ai-assistants).

## Reggestel in 0.8.1

- **DWG-klasseafdeling.** 'n DWG-lêer se klasseafdeling is as die verkeerde tipe gelees, wat die lêer met invoer kon breek. Dit word nou korrek gelees, in ModelCraft en in die ander programme wat DWG lees.
- **Tablette in staande rigting.** Ekstra roosterhoogte gaan na die doek, en die bladuitleg begin by 760 pixels breed of minder. ModelCraft se stylblad het die verandering ook.
- **Taal in Studio.** CadCraft Studio en die verpakte uitgawes kan die taal wissel terwyl hulle loop; voorheen was dit net Engels. Dit is nog nie op elke platform getoets nie: sê vir ons as die taal nie verander nie.

## Nog nie in hierdie weergawe nie

- **Nie kode-geteken nie.** Windows wys dalk SmartScreen: kies {{ui:Meer inligting}}, en dan {{ui:Tog uitvoer}}. Op 'n Mac, regsklik en kies {{ui:Maak oop}}. Winkelbouweergawes is opgeskort, en die iPad- en iPhone-bouweergawe is nie vir 0.8.1 herbou nie.
- 'n Ander program wat die prent teken sonder 'n weergee-enjin-byvoeging, panorama- of stereokamera's en 'n lugprent deur 'n ander program, en die inprop wat die Unreal-toneel oopmaak, is nog nie daar nie. Die lêers word geskryf; die inprop is nie vrygestel nie en is nog nie in Unreal laat loop nie.
- Vrye-vorm-oppervlaktes: G3 en klas A word nie gemeet of beweer nie, en snoei en soliede liggame kom later.
- Prente van ander programme is nie pixel vir pixel soos ons s'n nie: net die kamera, son, lampe en blootstelling stem ooreen.
- Die 0.8.1-regstelling vir die taalwisseling in Studio is nie op elke platform getoets nie.

Al die ander is in [Nog nie gebou nie](topic:not-built-yet). Vir die vorige vrystelling, sien [Wat is nuut in 0.7](topic:whats-new-0-7).
