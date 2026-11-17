---
title: Senda massa til BimCraft
summary: Afhentu massa úr ýta/toga til BimCraft sem massavalkosti, með hæðum, grunnfleti, heildargólfflatarmáli og rúmmáli reiknuðu út frá hverju rúmtaki.
keywords: massi, massing, hugmynd, valkostir, bimcraft, ifc, bim, ýta toga, hæðir, byggingarmassi, heildargólfflatarmál, grunnflötur, rúmmál, senda, afhenda, stig 2
from: 73c51f3f
---

## Hvað þú gerir

Breyttu blokkunum sem þú mótaðir með ýta/toga í massavalkosti sem BimCraft skilur, svo hugmyndin haldi áfram sem byggingarlíkan.

## Áður en þú byrjar

Gerðu hvern massa að **hópi** eða **íhlut** og gefðu honum nafn. Hver og einn verður einn valkostur. Lausar rúmfræðar eru ekki sendar.

## Senda

1. Veldu hópana sem á að senda. Ef ekkert er valið fer hver efsti hópur og íhlutur.
2. Veldu {{ui:Flytja út}}, síðan {{ui:Massi til BimCraft…}}.
3. Skrifaðu inn {{ui:Heiti valkostasafns}} og {{ui:Gólfhæð}}.
4. Yfirfarðu listann: hæðir, grunnflöt, heildargólfflatarmál og rúmmál hvers valkosts.
5. Veldu **Senda til BimCraft** til að opna BimCraft í nýjum flipa með valkostunum, eða {{ui:Vista sem IFC}} til að sækja skrána og opna hana þar sjálfur.

Í BimCraft eru valkostirnir skráðir undir „Massavalkostir í líkaninu“, þar sem einn þeirra getur orðið núverandi valkostur og unnið áfram í veggi og gólf.

## Hvernig rúmtak verður massi

- **Hæðir** eru hæð rúmtaksins deilt með gólfhæðinni, námundaðar, og að minnsta kosti ein. Hæðirnar deila síðan hæð rúmtaksins jafnt, svo 10 m blokk með 3 m hæðum hefur 3 hæðir, 3,33 m hver.
- **Flatarmál hæðar** er flatarmál lárétta sniðs rúmtaksins í hæð þeirrar hæðar. Blokk sem gengur inn á við hefur minni efri hæðir, og heildargólfflatarmálið er summa þeirra.
- **Grunnflöturinn** er útlínan á sniðinu rétt fyrir ofan botn rúmtaksins.
- **Rúmmálið** er rúmtaksins eigið.

Í IFC skránni er hver valkostur byggingarhlutur (grunnflöturinn hækkaður upp í hæð rúmtaksins) með einu rými á hverri hæð sem ber heildargólfflatarmál hæðarinnar. Allir valkostir deila einni byggingu, með jafnmörgum hæðum og hæsti valkosturinn.

## Einfölduð form

Venjulegur uppréttur blokk fer yfir nákvæmlega eins og hún var mótuð. Allt annað er samt sent, og listinn segir hvers vegna lögun þess er einfölduð:

- **Hæðir þess eru ekki allar af stærð grunnsins** (það gengur inn á við eða hallar): massinn í BimCraft er grunnútlínan hækkuð upp í fulla hæð, en flatarmál hæðanna og rúmmálið eru rúmtaksins eigið.
- **Rúmtakið er ekki lokað**: hæðir þar sem sniðið er ekki hægt að loka eru ekki mældar og teljast ekkert. Lokaðu rúmtakinu ({{ui:Upplýsingar um eind}} sýnir „Rúmtak: Já“) til að fá fullar tölur.
- **Grunnurinn hefur fleiri en eina útlínu**: sú stærsta er notuð sem grunnflötur.

## Gott að vita

- {{ui:IFC fyrir BimCraft (.ifc)}} er annar útflutningur: hann sendir aðeins form og nöfn, án hæða eða flatarmála.
- Ekkert er hlaðið upp. Skráin er afhent BimCraft-flipanum á þessari tölvu.
