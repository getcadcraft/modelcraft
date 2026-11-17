---
title: Stílusok és napárnyékok
summary: Az modell megjelenítése árnyékolva, takart vonalakként, drótvázként vagy átlátszóan, valamint a vetett árnyékok vizsgálata bármely dátumra, időpontra és helyre.
keywords: bemutató nézet, tiszta nézet, segédvonalak elrejtése, tengelyek elrejtése, stílus, árnyékolt, takart vonalas, drótváz, röntgen, élek, árnyékok, nap, napvizsgálat, napállás, dátum, idő, szélesség, hosszúság, időzóna, észak
from: 09c95329
---

A jobb oldalon lévő {{ui:Stílus}} panel megváltoztatja, hogyan rajzolódik ki a modell. Ebben semmi sem változtatja meg magát a modellt, és nem része a visszavonásnak. Minden [jelenetnek](topic:scenes) saját stílusa van, a fájl pedig azt a stílust őrzi meg, amelyet mentéskor használt.

## Lapok

Válasszon egyet a {{ui:Lapok}} listából:

| Stílus | Ilyen lesz |
|---|---|
| {{ui:Árnyékolt}} | Tömör lapok, lágyan megvilágítva. A hátulról látott lapok kékesszürkék. Az importált színek megjelennek. |
| {{ui:Takart vonalas}} | Lapok a háttérszínnel, élek tintával: tiszta vonalrajz, a takart vonalak eltávolítva. Fehéren a {{ui:Papír}}, sötéten a {{ui:Modell}} esetén. |
| {{ui:Drótváz}} | Csak élek. A lapok nem rajzolódnak ki, de kattintáskor és illesztéskor számítanak: nem lehet rajtuk átkattintani. |
| {{ui:Röntgen}} | Átlátszó lapok, hogy lássa, mi van mögöttük vagy belül. A drótvázhoz hasonlóan a kattintások és illesztések a legközelebbi lapnál állnak meg. |

Az {{ui:Élek megjelenítése}} be- és kikapcsolja az éleket minden stílusban, kivéve a {{ui:Drótváz}} stílust. Kikapcsolt állapotban a {{ui:Takart vonalas}} szinte semmit nem mutat, mert lapjai megegyeznek a háttérrel. A lágy élek, például egy húzott kör oldalai, sosem rajzolódnak ki.

## Napárnyékok bekapcsolása

1. Pipálja be a {{ui:Napárnyékok}} jelölőnégyzetet. Alatta aktívvá válnak a napbeállítások, a modell pedig árnyékot vet önmagára és a talajra.
2. Állítsa be a helyet:
   - {{ui:Szélesség}}: észak pozitív, dél negatív (New York körülbelül 40,7, Sydney körülbelül -33,9).
   - {{ui:Hosszúság}}: kelet pozitív, nyugat negatív (New York körülbelül -74,0).
   - {{ui:UTC-eltolás}}: a helyszín eltolása az UTC-hez képest órában, például `-5` New Yorkra télen. A ModelCraft nem alkalmazza a nyári időszámítást; New York nyáron `-4`.
3. Állítsa be a dátumot (hónap és nap) a {{ui:Dátum}} mezőben, és húzza a {{ui:Idő}} csúszkát. Az idő 15 perces lépésekben változik, és a csúszka mellett jelenik meg, például „15:00”.

A beállítások alatti sor megmondja, hol van a nap, például: „Nap 52° magasan, északtól 250° értéknél. Az észak a zöld tengely.” Éjszaka ezt írja: „Ebben az időpontban a nap a horizont alatt van.”

Új modell esetén a nap június 21-én, 15:00-kor áll, szélesség 40, hosszúság -105, UTC-eltolás -7 értékekkel.

## A modell északi irányba fordítása

A ModelCraft északi iránya mindig a **zöld tengely**. Egy valódi telek tanulmányozásához fordítsa a modellt úgy, hogy északi oldala a zöld irányba nézzen: jelöljön ki mindent ({{key:Mod+A}}), nyomja meg a {{key:Q}} billentyűt, kattintson a talajon egy középpontra, és forgassa el a telek északtól mért szöge szerint (lásd [Forgatás és léptékezés](topic:rotate-scale)).

## Napvizsgálat

1. Állítsa be a helyet és a dátumot.
2. Adjon hozzá egy jelenetet a {{ui:Jelenetek}} részben a {{ui:Jelenet hozzáadása}} gombbal.
3. Mozgassa az idő csúszkát, majd adjon hozzá egy újabb jelenetet. Ismételje meg minden kívánt órára.
4. Kattintson a {{ui:Lejátszás}} gombra a jelenetek végigtekintéséhez. Lásd [Nézetek mentése jelenetként](topic:scenes).

## Tudnivalók

- Nagyon nagy modelleken az árnyékok fogazottnak látszhatnak, mivel egyetlen árnyéktérkép fedi le az egész modellt.
- Az árnyékok nem jelennek meg a {{ui:Drótváz}} stílusban.
- A napállást a NOAA napszámítás követi, egy fok töredékéig pontos, ami tömegtanulmányokhoz bőven elég. A légköri törést figyelmen kívül hagyja, ezért napkelte és napnyugta közelében nagyon alacsony napszögek kissé eltérhetnek.

## Bemutató nézet

{{ui:Nézetek}} › {{ui:Bemutató nézet}} (vagy {{key:Shift+P}}) csak a modellt mutatja: a tengelyek, a segédvonalak és segédpontok, a metszősíkok kontúrjai (a vágás marad), a lámpák jelölései, egy megnyitott csoport kerete, az illesztési jelek és tippek, valamint a kijelölés kiemelése mind eltűnnek. Használja, ha a modellt tisztán szeretné látni, vagy képernyőkép előtt. Az eszközök továbbra is működnek és illesztenek; csak a jelöléseket nem látja. A {{key:Shift+P}} ismételt megnyomásával visszakerülnek. A méretek megmaradnak, mert a rajz részei. Csoport szerkesztésekor a modell többi része már nem halványul: úgy jelenik meg, ahogy van, a textúráival együtt.
