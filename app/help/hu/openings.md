---
title: Nyílás vágása egy falon át
summary: Ablakot vagy ajtót rajzolhat egy vastag falra, és átnyomhatja, így a falon valódi lyuk keletkezik.
keywords: ablak, ajtó, nyílás, lyuk, fal, vágás, átnyomás, üreg, vastagság, homlokzat
from: 6b22f32c
---

A nyíláshoz két oldalú fal kell: egy doboz, vagy egy fal, amelyet egy hosszú, vékony téglalap felhúzásával készített. Egy önálló lap, amely magában áll, nincs mihez átnyomni.

## Gyakorlófal készítése

1. Nyomja meg az {{key:R}} billentyűt, kattintson egy sarokra a talajon, írja be a `6m,0.3m` értéket (vagy a `20',12"` értéket), majd nyomja meg az {{key:Enter}} billentyűt.
2. Nyomja meg az {{key:P}} billentyűt, kattintson a téglalapra, írja be a `3m` értéket (vagy a `10'` értéket), majd nyomja meg az {{key:Enter}} billentyűt.

Így 300 mm (12 in) vastag fala lesz.

## A nyílás megrajzolása

1. Körbejárással úgy forgassa a nézetet, hogy lássa a fal hosszú oldalát.
2. Nyomja meg az {{key:R}} billentyűt.
3. Vigye a mutatót a fal lapjára, majd kattintson arra a pontra, ahová az ablak alsó sarka kerül. Az állapotsor tippje: „Lapon”.
4. Írja be az ablak szélességét és magasságát, például `1.2m,1.5m` (vagy `4',5'`), és nyomja meg az {{key:Enter}} billentyűt.

   Az ablak a fal lapján belül egy saját lap lesz, a fal lapja körülötte pedig lyukat kap.

Ha pontos távolságra szeretné elhelyezni a sarokhoz és a padlóhoz képest, előbb használjon [segédvonalakat](topic:guides-measure): a {{ui:Mérőszalag}} eszközzel húzzon segédvonalakat a fal alsó és oldalsó széléről, majd ott kezdje a téglalapot, ahol két segédvonal metszi egymást (az állapotsor tippje: „Segédvonalon”).

## Átnyomás

1. Nyomja meg a {{key:P}} billentyűt.
2. Kattintson az ablak lapjára, és nyomja a fal belsejébe.
3. Mozgassa addig, amíg a hátsó lapnál meg nem áll, majd kattintson. Vagy írja be a fal vastagságát, `300` (vagy `12`) értékkel, és nyomja meg az {{key:Enter}} billentyűt.

   A ModelCraft a mögötte lévő lapnál megáll, és kinyitja: a falon most átmenő lyuk van, amelyet négy oldallap (szemöldök, fejléc és párkány) bélel. A {{ui:Entitásinfó}} csoportosítva is zárt testnek hívja a falat.

Ha a teljes vastagságnál kevesebbet nyom át, lyuk helyett mélyedés keletkezik.

## Ajtó

Úgy rajzolja meg a téglalapot, hogy a fal lapjának alsó élén kezdődjön (az állapotsor tippje: „Élen” vagy „Végpont”), így a nyílás eléri a padlót. Ugyanúgy nyomja át.

## Sok ugyanakkora ablak

1. Készítse el az első nyílást.
2. A következőkhöz rajzolja meg a téglalapokat, majd a {{ui:Nyomás/húzás}} eszközzel kattintson duplán mindegyikre: a dupla kattintás megismétli az utolsó távolságot. Lásd: [Nyomás és húzás](topic:push-pull#repeat-the-last-distance).

## Ha nem vágott át

- A téglalapot a falon **kell** megrajzolni. Ha a fal előtt a levegőben rajzolta meg, az külön lap lesz: vonja vissza, és rajzolja újra, a lapon kezdve.
- Az átnyomás az első lapnál áll meg a nyílás mögött. Ha a falban valami más is útban van (egy korábbi rajzolásból maradt belső lap), ott megáll; törölje az adott lap éleit, és próbálja újra.
- A külön csoportban lévő geometria nem vágódik. Nyissa meg a falat tartalmazó csoportot, és a nyílást abban rajzolja meg.
