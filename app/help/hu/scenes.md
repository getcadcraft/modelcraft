---
title: Nézetek mentése jelenetekként
summary: Mentsen el egy kamerát és stílust jelenetként, frissítse és nevezze át, majd lépkedjen vagy játssza le a jeleneteket egy terv bemutatásához.
keywords: jelenet, nézet, mentett nézet, kamera, bemutató, animáció, lejátszás, diavetítés, Page Up, Page Down, lapok, bejárás
from: 38680d6e
---

A **jelenet** megjegyez egy kameraállást, egy stílust és azt, mi van elrejtve: honnan néz, perspektivikus vagy párhuzamos, a felületek stílusát, az éleket, a nap beállításait, az elrejtett csoportokat, a kikapcsolt címkéket és a metszetet. A jelenetek a `.modelcraft` fájlban mentődnek.

## Jelenet hozzáadása

1. Állítsa be a nézetet: forgassa, nagyítsa, válasszon stílust, állítsa be a napot.
2. A jobb oldali {{ui:Scenes}} panelen kattintson a {{ui:Add scene}} gombra.

   A jelenet megjelenik a listában „Jelenet 1”, „Jelenet 2” stb. néven, és lapként a 3D-nézet fölött. Az állapotsor ezt mondja: „Jelenet 1 mentve: ez a kamera, a stílus és az elrejtett elemek.”

## Ugrás egy jelenetre

- Kattintson a lapjára a 3D-nézet fölött, vagy a nevére a {{ui:Scenes}} listában.
- Vagy nyomja meg a {{key:PageDown}} billentyűt a következő, a {{key:PageUp}} billentyűt az előző jelenethez. A lista alatti {{ui:Next}} és {{ui:Previous}} gombok ugyanezt teszik.

A kamera valamivel több mint fél másodperc alatt siklik a jelenetre. Ha a számítógépen csökkentett mozgás van beállítva, egyszerűen odaugrik.

## Jelenet módosítása, átnevezése vagy törlése

A lista minden jelenete után három kis gomb van:

- **Frissítés** (a körkörös nyilak): a jelenlegi kamerát, stílust és elrejtést menti a jelenetbe. „Jelenet 2 frissítve.”
- **Átnevezés** (a ceruza): megnyit egy „Jelenet átnevezése” párbeszédpanelt. Írja be az új nevet, és kattintson a {{ui:Save}} gombra.
- **Törlés** (a kuka): eltávolítja a jelenetet. „Jelenet 2 törölve. A Ctrl+Z visszahozza.”

A jelenetek hozzáadása, frissítése, átnevezése és törlése visszavonható lépés, mint a modell változtatásai.

## Jelenet kamerájának zárolása

Ha ugyanazt a nézetet újra és újra rendereli, ahogy a terv változik, zárolja a jelenet kameráját, hogy a nézet véletlenül se mozduljon el.

1. A {{ui:Scenes}} listában kattintson a jelenet neve utáni **zár** gombra (a nyitott lakatra). Bezárul, a jelenet lapján a 3D-nézet fölött pedig kis lakat jelenik meg. Az állapotsor ezt mondja: „Jelenet 2: kamera zárolva.”
2. Renderelés előtt lépjen a jelenetre: a kamera pontosan a mentett nézetre ugrik, így a belőle készült képek egy vonalba esnek a korábbiakkal.

Zárolt kamera mellett a **Frissítés** továbbra is menti a stílust és az elrejtést a jelenetbe, de a kamera a helyén marad, akkor is, ha elforgatta a nézetet. A lakatra kattintva újra feloldhatja; ekkor a Frissítés újra elmenti az aktuális nézetet. A zárolás és a feloldás is visszavonható lépés, a zár a `.modelcraft` fájlban mentődik.

## Bemutatás

1. Adjon hozzá legalább két jelenetet.
2. Kattintson a lista alatti {{ui:Play}} gombra. A ModelCraft néhány másodpercenként a következő jelenetre lép, az utolsó után pedig az elsőre tér vissza.
3. A {{ui:Stop}} gombra kattintva (ugyanaz a gomb) vagy az {{key:Esc}} billentyűvel állítsa le.

Napvizsgálathoz adjon egy jelenetet óránként úgy, hogy csak az {{ui:Time}} változik, majd játssza le őket. Lásd: [Stílusok és napárnyékok](topic:styles-shadows#a-sun-study).

A sávok nélküli bemutatóhoz nyomja meg kétszer a {{key:Ctrl+Shift+F}} billentyűt: először teljes képernyő, majd teljes képernyő a sávok elrejtésével. A jelenetlapok a nézet fölött maradnak.

## Mit mutat egy jelenet

A jelenet emlékszik arra, mi volt elrejtve a mentéskor: azok a csoportok és komponensek, amelyeket [elrejtett](topic:hide-isolate), azok a [címkék](topic:tags), amelyeket kikapcsolt, és melyik [metszősík](topic:sections) vág. A jelenetre lépve ezeket újra elrejti vagy megjeleníti. Így az egyik jelenet az egész házat mutathatja, a következő a házat a tető címkéjének kikapcsolásával, a harmadik pedig egy átmetszetet.

Az elrejtett szabad lapok és élek nem részei a jeleneteknek. A jelenetre lépés nem hoz létre visszavonási lépést. A korábbi ModelCraft-verzióval mentett jelenetek megtartják az elrejtés állapotát; ezt a Frissítés gombbal mentse beléjük.

## Animáció exportálása

Az {{ui:Export animation}} a lista alatt sorban játssza le a jeleneteket az elsőtől az utolsóig, a kamerát simán mozgatva közöttük, majd a filmet **WebM** videóként menti (jelenetenként két másodperc mozgás és egy rövid szünet). A nézetet úgy rögzíti, ahogy a képernyőn látszik, a képernyőn lévő méretében, a [bemutató nézetben](topic:styles-shadows#presentation-view) (tengelyek, segédvonalak és kijelölés nélkül). Az {{key:Esc}} billentyűvel vagy a gomb újbóli megnyomásával mentés nélkül állítható le. A WebM böngészőkben és a VLC-ben játszható le, a videószerkesztők pedig át tudják alakítani.

Renderelt bejáráshoz (égbolt, nap, árnyékok, anyagok) a kívánt méretben használja a {{ui:Render video…}} lehetőséget: kulcskockák nélkül a jeleneteket sorrendben veszi a kamera útvonalának. Lásd: [Kamera és objektumok animálása](topic:animation).

## Tudnivalók

- A stílus módosítása vagy a kamera mozgatása a jelenetre lépés után nem módosítja a jelenetet, amíg a Frissítés gombra nem kattint.
- A jelenetek nem exportálódnak Collada, OBJ, glTF, STL vagy IFC formátumba.
