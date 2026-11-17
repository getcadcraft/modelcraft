---
title: Ýttu og togaðu fleti í föst form
summary: Breyttu fleti í kassa, hækkaðu eða lækkaðu byggingu, bættu við útskoti eða inndrætti, og endurtaktu fjarlægð með tvísmelli.
keywords: ýta toga, pressa út, hæð, fast form, kassi, massi, hærri, inndráttur, útskot, endurtaka, tvísmellur, rúmmál, kóti, á fleti, jafnt, sama hæð
from: dc093c91
---

{{ui:Ýta/toga}} ({{key:P}}) færir flöt eftir eigin stefnu: upp og niður fyrir gólf, inn og út fyrir vegg. Það sem gerist fer eftir fletinum.

## Gerðu fast form úr fleti

1. Teiknaðu flöt, til dæmis rétthyrning á jörðinni ([Teikna fleti](topic:draw-faces)).
2. Ýttu á {{key:P}}.
3. Færðu bendilinn yfir flötinn. Hann lýsist upp.
4. Smelltu á flötinn, færðu síðan bendilinn. Flöturinn rís (eða sígur) og hliðar vaxa frá jöðrum hans. Gildisreitur ({{ui:Fjarlægð}}) og ábendingin sýna fjarlægðina.
5. Smelltu til að ljúka, eða skrifaðu fjarlægð og ýttu á {{key:Enter}}: `3m`, `10'`, `2700` í líkani í millimetrum.

   Nú er komið lokað fast form. Veldu það allt og hópaðu það (sjá [Hópar og einingar](topic:groups-components)): {{ui:Upplýsingar um eind}} sýnir þá „Fast form: Já“ og rúmmál þess.

Einn stakur flötur getur farið hvora leið sem er: togaðu hann upp fyrir massa yfir jörðinni, ýttu honum niður fyrir gryfju eða undirstöðu.

:::tip
Í stað þess að smella tvisvar, ýttu á flötinn, dragðu og slepptu. Á snertiskjá er það eðlilegasta leiðin: ýttu, dragðu, lyftu.
:::

## Togaðu að hæð annars

Meðan þú togar, færðu bendilinn yfir horn, miðpunkt, brún eða leiðarlínu annars hluta líkansins. Flöturinn smellur að þeirri hæð og merki sýnir punktinn. Notaðu það til að gera tvo kubba jafnháa, eða til að stoppa við leiðarlínu sem þú settir með [málbandinu](topic:guides-measure).

Þú getur einnig fært bendilinn yfir flöt sem er samsíða þeim sem þú ert að ýta, til dæmis efst á öðrum kubbi eða efst á kassanum sem súla stendur á. Ábendingin segir „Á fleti“, og flöturinn sem þú ýtir endar jafnhátt honum. Til dæmis, ýttu innri fleti pípu niður þar til hann er jafnhátt kassanum undir pípunni.

Flötur í horni við þann sem þú ert að ýta setur enga hæð. Fjarlægðin fylgir bendlinum. Hið sama gildir um flöt fyrir aftan flötinn sem þú ert að ýta.

Þegar ýtti flöturinn endar aftur jafnt við fletina í kring, hverfa hliðar hans. Engar núllhæðarhliðar verða eftir, og útlínan sem þú teiknaðir helst á fletinum, svo þú getur ýtt honum aftur seinna. Til að gera hann aftur að einum fleti, eyddu brúnum útlínunnar með {{ui:Strokleður}}: flatirnir tveir sameinast.

## Gerðu kassa hærri eða lægri

Ýttu/togaðu efst á kassa. Þar sem hliðarnar liggja þegar beint upp frá honum, færist toppurinn einfaldlega: kassinn verður hærri eða lægri, og engar nýjar brúnir eru gerðar.

- Ef efsti flöturinn er ýttur alla leið niður í botninn, fjarlægist kassinn. ModelCraft stöðvast við núllhæð; það snýr aldrei kassanum við.
- Hið sama gildir um hvaða flöt sem nágrannarnir liggja allir eftir stefnu hans, til dæmis endi veggs.

## Bættu við útskoti eða inndrætti

1. Teiknaðu rétthyrning á hlið kassa (byrjaðu á fletinum; hann helst í plani fletsins).
2. Ýttu á {{key:P}} og togaðu nýja rétthyrninginn **út**. Það bætir við efni: útskoti, reykháfi, þaki yfir inngangi.
3. Eða ýttu honum **inn**. Það sker inndrátt: forstofu, nisju, inngang sem er dreginn inn.

Þegar hliðar nýja hlutans falla í takt við fleti sem fyrir eru, sameinast þeir í einn flöt, svo þú fáir ekki villulínur á sléttum vegg.

## Ýttu alla leið í gegn

Þegar flöt er ýtt inn í fast form stöðvast það við fyrsta flöt fyrir aftan hann. Þegar það nær þeim fleti sker það op í gegn. Þannig býrðu til glugga og dyr í þykkum vegg. Sjá [Skera op í gegnum vegg](topic:openings).

## Skrifaðu fjarlægð

Eftir að hafa smellt á flötinn, skrifaðu fjarlægðina og ýttu á {{key:Enter}}.

- Skrifaða fjarlægðin fer í þá átt sem þú varst að hreyfa. Ef þú hefur ekki hreyft ennþá, fer hún að framhlið flötsins (út úr föstu formi, upp frá jörðinni).
- Skrifaðu neikvæða tölu, til dæmis `-500`, til að fara hina leiðina.
- Ef þú skiptir um skoðun áður en þú smellir, ýttu á {{key:Esc}}. Flöturinn fer til baka.

## Endurtaktu síðustu fjarlægð

Eftir eina ýtingu/togun, tvísmelltu á annan flöt með {{ui:Ýta/toga}} enn valið. Hann færist um sömu fjarlægð. Þetta er fljótlega leiðin til að gefa nokkrum veggjum eða nokkrum gólfum sömu þykkt eða hæð.

ModelCraft man fjarlægðina þar til þú skiptir yfir í annað verkfæri.

## Gott er að vita

- Ýta/toga virkar á einn flöt í einu. Ef þú smellir á eitthvað sem er ekki flötur, segir stöðustikan „Ýta/toga virkar á flöt. Smelltu á flöt.“
- Til að ýta/toga fleti inni í hópi eða einingu, opnaðu hann fyrst (tvísmelltu á hann).
- Með **Árekstri** á stöðvast ýting eða tog sem lendir á öðru föstu formi þar sem það snertir, og ábendingin segir hvað það snertir (heiti hlutarins, eða „laus rúmfræði í þessum hópi“) og lýsir upp fletina sem það mætti. Vasi sem þú ýtir inn í sitt eigið fasta form (til dæmis flötur sem var færður til og ýttur aftur niður) er hluti af því formi og er aldrei stöðvaður af veggjum þess.
- Tvö föst form sem ýtt er hvort inn í annað skera ekki né sameinast: fletir þeirra fara einfaldlega í gegnum hvort annað. Sjá [Ekki enn smíðað](topic:not-built-yet).
