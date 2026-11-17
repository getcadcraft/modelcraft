---
title: Testeszközök: egyesítés, kivonás, metszet
summary: Zárt csoportokat és komponenseket egyesítsen egybe, vágjon ki egyet egy másikból, vagy tartsa meg azt, amit közösen használnak.
keywords: test, testek, testellenőrző, nem test, test javítása, lyuk, szálas él, befelé fordult, egyesítés, összekapcsolás, összevonás, kivonás, különbség, vágás, metszet, metszéspont, logikai művelet, külső héj
from: f35df1cc
---

A testeszközök **testeket** egyesítenek: olyan csoportokat és komponenseket, amelyek lapjai egy térfogatot zárnak le, és minden él pontosan két lapot köt össze. Az {{ui:Entitásinfó}} megmondja, hogy a {{ui:Test}}: {{ui:Igen}} egy testnél, és megmutatja a térfogatát.

Ezek a {{ui:Rendezés}} csoportban lévő {{ui:Testek}} menüben találhatók.

## Amikor valami nem test

Jelölje ki a csoportot vagy komponenst. Ha nem test, az {{ui:Entitásinfó}} megmondja, miért, például: „Nem test: 4 él lyukat szegélyez · 1 szálas él”.

| Probléma | Mit jelent |
|---|---|
| Élek lyukat szegélyeznek | Hiányzik egy lap |
| Három vagy több lap által osztott élek | Egy lap osztja ketté a belsőt, vagy két alakzat egy élen érintkezik |
| Lapok az alakzaton belül | Egy fal maradt a térfogat belsejében |
| Szálas élek | Olyan vonalak, amelyek nem határolnak lapot |
| Befelé fordított lapok | Előlapjuk befelé néz, a szomszédjaikkal szemben |

A {{ui:Problémák megjelenítése}} megnyitja a hibás éleket és lapokat, kijelölve, hogy láthassa őket. A {{ui:Javítás}} egy visszavonási lépésben megjavítja az egyszerű eseteket: eltávolítja a szálas éleket és az alakzaton belüli lapokat, a lapokat a helyes irányba fordítja, és lezárja a lyukakat, ha peremük sík. Amit nem tud biztonságosan megjavítani (nem sík lyuk, sok lap által osztott él), azt a kézi javításra hagyja, és közli, mi maradt.

## Egyesítés

1. Jelöljön ki két vagy több testet (kattintson az egyikre, a többit {{key:Ctrl}}+kattintással).
2. {{ui:Testek}} › {{ui:Egyesítés}}.

Egy testté válnak, egy csoportban. Ahol átfedtek, a belsejükben lévő lapok eltűnnek.

## Kivonás

1. {{ui:Testek}} › {{ui:Kivonás}}.
2. Kattintson arra a testre, amelyet **el kell venni** (a vágóeszköz).
3. Kattintson arra a testre, amelyet **vágni** kell.

A második test megmaradt része megmarad; a vágóeszköz felhasználódik. Például egy tömbön átmenő lyukhoz rajzoljon egy oszlopot a tömbön keresztül, tegye az oszlopot csoporttá, majd vonja ki az oszlopot a tömbből.

## Metszet

Jelöljön ki két vagy több testet, majd {{ui:Testek}} › {{ui:Metszet}}. Csak az a rész marad meg, amelyet mindannyian közösen használnak.

## Tudnivalók

- Az eredmény új csoport. Megőrzi az első test (kivonásnál: a vágott) nevét, színét és címkéjét. A lapokra festett színek nem maradnak meg.
- Az eredmény sík oldalai egyetlen lapok. A kerek oldalak azokból a síklapokból állnak, amelyekkel megrajzolták őket.
- Ha egy csoport vagy komponens nem test, az eszköz megmondja, melyik, és semmit nem változtat. Keressen hiányzó lapot vagy belső szabad lapot.
- Nyitott csoporton belül az eszközök a csoportban lévő csoportokra és komponensekre hatnak.
- Minden eszköz egy visszavonási lépés.
- Az első testeszköz-használatkor a motorja (manifold-3d) betöltődik, ez eltarthat egy pillanatig.
