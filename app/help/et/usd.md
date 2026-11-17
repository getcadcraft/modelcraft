---
title: USD salvestamine, avamine ja eksport
summary: Salvesta kogu mudel USD-na (.usda, .usdc või .usdz) ilma midagi kaotamata, ava see uuesti ja impordi USD-stseene teistest 3D-programmidest.
keywords: usd, usda, usdc, usdz, openusd, universaalne stseenikirjeldus, salvesta kui, eksport, import, stseenide kokkupanek, arhitektuuriline visualiseerimine, openpbr, materialx, pakett
from: 73d299f9
---

USD on stseeniformaat, mida jagavad paljud 3D-, renderdus- ja arhitektuurse visualiseerimise programmid. ModelCraft kirjutab ja loeb seda. `.modelcraft` jääb formaadiks, mille {{ui:Salvesta}} kirjutab; USD on valik jaotises {{ui:Salvesta kui}}.

## Salvesta USD-na

1. Vali {{ui:Salvesta kui}} rühmas {{ui:Fail}} (või vajuta {{key:Mod+Shift+S}}).
2. Vali formaat: {{ui:Tekst (.usda)}} (loetav, hea versioonihaldusele), {{ui:Binaarne (.usdc)}} (kõige väiksem ja kiireim) või {{ui:Pakett (.usdz)}} (üks fail, kus tekstuurid on sees).
3. Fail laaditakse alla (töölaua rakenduses valid, kuhu see läheb).

Samad valikud on jaotises {{ui:Ekspordi}} › {{ui:USD (.usda, .usdc, .usdz)…}}.

## Mitte midagi ei kao

Ava ModelCraft-i salvestatud USD-fail ja saad mudeli täpselt tagasi: tahud koos avadega, pehmed ja peidetud servad, kõverad, grupid ja komponendid, sildid, stseenid, mõõdud, abijooned, lõiketasandid, valgustid, imporditud tekstuurid ja vaade. Teised programmid näevad sama mudelit võrkudena, gruppidena, komponentide prototüüpidena, materjalidena, valgustite ja kaameratena.

:::note
Kui mõni teine programm muudab grupi või komponendi geomeetriat, avab ModelCraft selle osa võrguna, muudatus alles, ja ütleb, mitut osa nii loeti. Paigutus, mida teises programmis teisaldati või kustutati, jääb teisaldatuks või kustutatuks.
:::

## Ava või impordi kellegi teise USD

- {{ui:Ava}} `.usd`, `.usda`, `.usdc` või `.usdz` fail, et sellest mudel alustada.
- {{ui:Impordi}} üks neist, et see lisada avatud mudelisse. Lohista koos sellega ka failid, millele see viitab (muud kihid, tekstuurid).

Võrgud tulevad sisse oma normaalide, UV-koordinaatide ja värvidega, jagatud geomeetria komponentidena, materjalid värvidena, valgustid valgustitena ja kaamerad stseenidena, meetrites ja Z üles, olenemata faili ühikutest ja ülessuunast.

## Veel mitte

Animatsioon, skeletid ja MaterialX-i sõlmede graafikud ei lugeta ega kirjutata USD-na veel. ModelCraft-i enda animatsioon ja sõlmematerjalid säilivad USD-failis, mille ta salvestas, et ModelCraft saaks selle uuesti avada, kuid teised programmid neid ei näe. Failide viidatud kihid, mida ModelCraft ei suuda lugeda (näiteks MaterialX-dokument), jäetakse välja märkusega.
