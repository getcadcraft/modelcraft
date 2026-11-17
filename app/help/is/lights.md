---
title: Lýstu upp líkan með lömpum
summary: Settu lampa, kastljós og ljósaplötur í líkan svo myndgerðar myndir geti sýnt herbergi að næturlagi eða upplýst innirými, með mjúkum skuggum.
keywords: ljós, lampi, lampar, lýsing, pera, loftljós, kastljós, niðurljós, ljósaplata, svæðisljós, lúmen, birta, litahiti, hlýtt, nótt, innirými, myndgerð
from: c8d72cbc
---

Lampar lýsa [myndgerðar myndir](topic:render). Þeir breyta ekki þrívíddarsýninni, þar sem hver lampi birtist sem lítið merki í sínum eigin lit.

## Bæta við lampa

1. Í hlutanum {{ui:Ljós}} hægra megin, smelltu á {{ui:Lampi}}, {{ui:Kastljós}} eða {{ui:Ljósaplata}}.
2. Smelltu þar sem hann á að vera. Smellifesting virkar eins og við teikningu.
   - Á lofti eða vegg hangir **lampi** 25 cm frá fletinum, þeim megin sem þú horfir frá; **ljósaplata** liggur á fletinum og lýsir frá honum.
   - **Kastljós** krefst tveggja smella: fyrst hvar það er, síðan hvað það beinist að.

Nýi lampinn er valinn í {{ui:Ljós}}, tilbúinn til breytinga.

## Breyta lampa

Smelltu á nafn lampans í {{ui:Ljós}}, eða á merki hans í sýninni með {{ui:Velja}}. Síðan:

| Stilling | Hvað hún gerir |
|---|---|
| {{ui:Birta (lúmen)}} | Hversu mikla birtu hann gefur. Venjuleg heimilispera er um 800 lúmen; björt loftplata 3000 |
| {{ui:Litur}} | {{ui:Hlýtt}} (heimilisperu), {{ui:Hlutlaust}} eða {{ui:Dagsbirta}}, eða hvaða lit sem er |
| {{ui:Geisli (gráður)}} | Keila kastljóss, frá brún til brúnar |
| {{ui:Stærð peru}}, {{ui:Breidd}}, {{ui:Dýpt}} | Stærri perur og plötur gefa mýkri skugga |
| {{ui:Rautt (x)}}, {{ui:Grænt (y)}}, {{ui:Hæð}} | Hvar hann er |

Hakið við hlið nafns lampans kveikir eða slekkur á honum. {{ui:Eyða ljósinu}} fjarlægir hann. Hver breyting er eitt skref: {{key:Ctrl+Z}} afturkallar hana. Lampar eru vistaðir í `.modelcraft` skránni.

## Myndir að nóttu

Í {{ui:Myndgera mynd…}} skaltu haka við {{ui:Nota annan dag og tíma fyrir þessa mynd}} og velja kvöldstund. Þegar sólin er sest verður himinninn dimmur og aðeins lamparnir lýsa líkanið. Hækkaðu {{ui:Birtustig}} í glugganum ef myndin er of dökk, eða bættu við lömpum.

:::tip
Fyrir herbergi séð að innan skaltu setja myndavélina inni í herberginu (snúðu og aðdraðu að), eða [senu](topic:scenes), bæta lampa í loftið og myndgera að nóttu. Í {{ui:Hröð}} ham verða horn fjarri lampa dekkri en á ljósmynd; [hágæðaham](topic:render#high-quality) lætur ljósið endurkastast af veggjunum.
:::
