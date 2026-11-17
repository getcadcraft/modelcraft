---
title: Modell megvilágítása lámpákkal
summary: Lámpák, spotlámpák és fénypanelek elhelyezése a modellben, hogy a renderelt képeken szobák éjszaka vagy megvilágított belső terek látszanak, lágy árnyékokkal.
keywords: fény, fények, lámpa, lámpák, világítás, izzó, mennyezeti lámpa, spotlámpa, lefelé világító lámpa, fénypanel, területi fény, lumen, fényerő, színhőmérséklet, meleg, éjszaka, belső tér, render
from: c8d72cbc
---

A lámpák megvilágítják a [renderelt képeket](topic:render). A 3D nézetet nem változtatják meg; ott minden lámpa egy kis jelként látszik a saját színében.

## Lámpa hozzáadása

1. A jobb oldali {{ui:Fények}} szakaszban kattintson a {{ui:Lámpa}}, a {{ui:Spotlámpa}} vagy a {{ui:Fénypanel}} gombra.
2. Kattintson oda, ahová kerülnie kell. A fogás ugyanúgy működik, mint rajzoláskor.
   - Mennyezeten vagy falon a **lámpa** 25 cm-re lóg le a felülettől, a nézet felőli oldalon; a **fénypanel** a felületen fekszik, és onnan elfelé világít.
   - A **spotlámpához** két kattintás kell: először a helye, majd az, amire irányul.

Az új lámpa ki van jelölve a {{ui:Fények}} szakaszban, így azonnal módosítható.

## Lámpa módosítása

Kattintson a lámpa nevére a {{ui:Fények}} szakaszban, vagy a nézetben a jelére a {{ui:Kijelölés}} eszközzel. Ezután:

| Beállítás | Mit csinál |
|---|---|
| {{ui:Fényerő (lumen)}} | Mennyi fényt ad. Egy háztartási izzó körülbelül 800 lumen; egy erős mennyezeti panel 3000 |
| {{ui:Szín}} | {{ui:Meleg}} (egy otthoni izzó), {{ui:Semleges}} vagy {{ui:Nappali}}, vagy bármilyen szín |
| {{ui:Sugár (fok)}} | A spotlámpa kúpja, szélétől szélig |
| {{ui:Izzó mérete}}, {{ui:Szélesség}}, {{ui:Mélység}} | A nagyobb izzók és panelek lágyabb árnyékot adnak |
| {{ui:Piros (x)}}, {{ui:Zöld (y)}}, {{ui:Magasság}} | Hol van |

A lámpa neve melletti pipa be- vagy kikapcsolja. Az {{ui:A fény törlése}} eltávolítja. Minden módosítás egy lépés: a {{key:Ctrl+Z}} visszavonja. A lámpák a `.modelcraft` fájlban mentődnek.

## Éjszakai képek

A {{ui:Kép renderelése…}} párbeszédpanelen jelölje be a {{ui:Másik dátum és időpont használata ehhez a képhez}} opciót, és válasszon egy esti órát. Ha lement a nap, az ég elsötétedik, és csak a lámpák világítják meg a modellt. Ha a kép túl sötét, a párbeszédpanelen emelje a {{ui:Fényerő}} értékét, vagy adjon hozzá lámpákat.

:::tip
Egy szobát belülről nézve helyezze a kamerát a szobába (forgassa és nagyítsa be, vagy használjon [jelenetet](topic:scenes)), tegyen egy lámpát a mennyezetre, és renderelje éjszaka. A {{ui:Gyors}} módban a lámpától távoli sarkok sötétebbek maradnak, mint egy fényképen; a [jó minőségű mód](topic:render#high-quality) lehetővé teszi, hogy a fény visszaverődjön a falakról.
:::
