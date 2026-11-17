---
title: Stiilid ja päikesevarjud
summary: Näita mudelit varjutatuna, peidetud joontena, traatmudelina või läbipaistvana ning uuri, milliseid varje see heidab mis tahes kuupäeval, kellaajal ja kohas.
keywords: esitlusvaade, puhas vaade, peida abijooned, peida teljed, stiil, varjutatud, peidetud jooned, traatmudel, röntgen, servad, varjud, päike, päikeseuuring, kuupäev, kellaaeg, laiuskraad, pikkuskraad, ajavöönd, põhi
from: 09c95329
---

Paremal asuv paneel {{ui:Stiil}} muudab mudeli joonistusviisi. Selle ükski säte ei muuda mudelit ennast ja need ei ole osa tagasivõtmisest. Iga [stseen](topic:scenes) mäletab oma stiili ning fail mäletab stiili, mis sul oli salvestamise hetkel.

## Tahud

Vali üks loendist {{ui:Tahud}}:

| Stiil | Välimus |
|---|---|
| {{ui:Varjutatud}} | Tahked tahud, pehmelt valgustatud. Tagant nähtavad tahud on sinakashallid. Imporditud värvid on nähtavad. |
| {{ui:Peidetud jooned}} | Tahud taustavärviga ja servad tindivärviga: puhas joonistus, kust peidetud jooned on eemaldatud. Valge taustal {{ui:Paber}}, tume taustal {{ui:Mudel}}. |
| {{ui:Traatmudel}} | Ainult servad. Tahke ei joonistata, kuid klõpsamisel ja haakumisel need loevad: läbi tahkude valida ei saa. |
| {{ui:Röntgen}} | Läbipaistvad tahud, et näha, mis on taga või sees. Nagu traatmudelis, klõpsud ja haakumised peatuvad lähima tahu juures. |

{{ui:Näita servi}} lülitab servad sisse või välja kõigis stiilides peale {{ui:Traatmudel}}. Kui see on välja lülitatud, näitab {{ui:Peidetud jooned}} peaaegu midagi, sest selle tahud sobivad taustaga. Pehmeid servi, nagu tõmmatud ringi küljed, ei joonistata kunagi.

## Lülita sisse päikesevarjud

1. Märgi {{ui:Päikesevarjud}}. Selle all olevad päikeseseaded aktiveeruvad ning mudel heidab varju iseendale ja maapinnale.
2. Määra asukoht:
   - {{ui:Laiuskraad}}: põhi on positiivne, lõuna negatiivne (New York on umbes 40.7, Sydney umbes -33.9).
   - {{ui:Pikkuskraad}}: ida on positiivne, lääs negatiivne (New York on umbes -74.0).
   - {{ui:UTC-nihe}}: asukoha nihe UTC-st tundides, näiteks `-5` New Yorgi jaoks talvel. ModelCraft ei arvesta suveaega; kasuta New Yorgi jaoks suvel `-4`.
3. Määra {{ui:Kuupäev}} (kuu ja päev) ning lohista {{ui:Kellaaeg}} liugurit. Kellaaeg liigub 15-minutilise sammuga ja kuvatakse liugurist kõrval, näiteks „3:00 pm“.

Seadete all olev rida ütleb, kus päike asub, näiteks „Päike 52° kõrgusel, 250° põhjast. Põhi on roheline telg.“ Öösel ütleb see „Päike on sel ajal allas.“

Uus mudel algab päikesega 21. juunil kell „3:00 pm“, laiuskraadil 40, pikkuskraadil -105 ja UTC-nihkega -7.

## Pööra mudel põhja

ModelCraft-i põhi on alati **roheline telg**. Reaalse asukoha uurimiseks pööra mudel nii, et selle põhjapoolne külg jääb rohelise telje suunas: vali kõik ({{key:Mod+A}}), vajuta {{key:Q}}, klõpsa keskpunkti maapinnal ja pööra seda asukoha nurga võrra põhjast (vt [Pööra ja skaleeri](topic:rotate-scale)).

## Päikeseuuring

1. Määra asukoht ja kuupäev.
2. Lisa stseen ({{ui:Lisa stseen}} rubriigis {{ui:Stseenid}}).
3. Liiguta kellaaja liugurit ja lisa siis veel üks stseen. Korda seda iga tunni kohta, mida soovid.
4. Klõpsa {{ui:Esita}}, et neid järjest vaadata. Vt [Salvesta vaated stseenidena](topic:scenes).

## Mida tuleb teada

- Väga suurel mudelil võivad varjud paista hambulised, sest üks varjukaart katab kogu mudeli.
- Varje ei joonistata {{ui:Traatmudelis}}.
- Päikese asend järgib NOAA päikesearvutust ja on täpne murdosa kraadi ulatuses, mis on mahuuuringute jaoks piisav. Atmosfääri refraktsioon on arvestamata, nii et väga madalad päikesenurgad õhtu- ja hommikuvalguses võivad olla natuke täpsusest väljas.

## Esitlusvaade

{{ui:Vaated}} › {{ui:Esitlusvaade}} (või {{key:Shift+P}}) näitab ainult mudelit: teljed, abijooned ja abipunktid, lõiketasandite piirjooned (lõige jääb alles), valgustite märgid, avatud grupi raam, haakumismärgid ja vihjed ning valiku esiletõstmine kaovad. Kasuta seda mudeli selgeks vaatamiseks või enne ekraanipilti. Tööriistad töötavad endiselt ja haakuvad endiselt; sa lihtsalt ei näe märke. Vajuta {{key:Shift+P}} uuesti, et need tagasi tuua. Mõõdud jäävad alles, sest need on joonise osa. Kui muudad gruppi seest, ei tuhmu ülejäänud mudel enam: see näitab end nagu on, sealhulgas tekstuurid.
