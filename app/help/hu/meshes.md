---
title: Hálók
summary: Csoport vagy komponens hálóvá alakítása — az a fajta objektum, amellyel a 3D-tartalomeszközök modelleznek — és vissza nyomás/húzásos geometriává.
keywords: háló, hálók, sokszög, sokszögek, n-gon, négyszög, négyszögek, csúcsok, half-edge, uv, uv-k, átalakítás, hálóvá alakítás, geometriává alakítás, felosztott felület, szobrászat, modellezés, 3D-tartalom
from: e32363e8
---

A ModelCraftban kétféle geometria van. A **nyomás/húzásos geometria** az, amit rajzol: sík lapok, amelyek összeillenek, egymást vágják és összeforrnak. A **háló** az a fajta objektum, amellyel a 3D-tartalomeszközök modelleznek: tetszőleges számú sarkú lapok, minden sarokhoz saját textúrakoordináta (UV), normálvektor és szín tartozhat, minden csúcsnak pedig olyan értékei, mint a súlyok. A hálót úgy helyezi el, mint egy csoportot vagy komponenst, és a nyomás/húzásos geometria mellett ugyanabban a modellben áll.

## Csoport vagy komponens hálóvá alakítása

1. Jelöljön ki egy csoportot vagy komponenst.
2. Az {{ui:Entitásinfó}} panelen kattintson az {{ui:Átalakítás hálóvá}} gombra.

A lapjai a háló lapjaivá válnak (a lyukas lap háromszögekként jön át), a kemény élek élesek maradnak, a lágy élek simán árnyalódnak, a festék, az anyagok és az importált textúrák pedig a lapjaikon maradnak. A benne lévő csoportok és komponensek egyetlen hálóba kerülnek. A szabad élek kimaradnak: a háló lapokat tart meg. Egy komponens minden elhelyezése a hálót mutatja. Ez egy visszavonási lépés.

## Mit mutat az Entitásinfó

Jelöljön ki egy hálót, és látni fogja a lapjait, csúcsait és éleit, azt, hogy zárt test-e (és a térfogatát), valamint az elhelyezett méretét. A nyílt élekkel rendelkező háló megmondja, hány ilyen van.

## Háló visszaalakítása nyomás/húzásos geometriává

Jelölje ki a hálót, és kattintson az {{ui:Átalakítás geometriává}} gombra. A sík lapok visszaállnak eredeti formájukba; a nem egy síkban lévő sarkú lap háromszögekként tér vissza. Az éles élek kemények, a többiek lágyak. A {{ui:Felbontás}} a háló lapjait közvetlenül a körülötte lévő csoportba teszi.

## Tudnivalók

- Kettős kattintással a hálót [csúcsaira, éleire és lapjaira](topic:mesh-edit) szerkesztheti a Háló munkaterületen. Geometriává alakítva nyomás/húzással szerkeszthető; mozgatni, forgatni, léptékezni, másolni, festeni, elrejteni és címkézni lehet, mint bármely csoportot.
- Az exportálás, a 3D-nyomtatás, a renderelés és a VR a hálót a lapjai szerint látja.
- A hálót tartalmazó fájl a `.modelcraft` fájl újabb verziójaként mentődik, ezért a ModelCraft 0.6 és a régebbi verziók nem nyitják meg; háló nélküli fájlok a régiekben is megnyílnak. Ha egy régebbi verziót használó valakivel szeretne fájlt megosztani, előbb alakítsa a hálókat geometriává.
- A visszavonás egy hálón csak azt tartja meg, amit az egyes lépések megváltoztattak, így még egy nagyon nagy háló is gyorsan visszavonható.

Lásd még: [Csoportok és komponensek](topic:groups-components) és [Még nincs elkészítve](topic:not-built-yet).
