---
title: Tárgyak elhelyezése a nyomtatási tárgyasztalon és küldés nyomtatóra
summary: Adjon könyvtári elemet vagy saját modelljét a nyomtató tárgyasztalára, rendezze el, nézze át a szeletelt rétegeket, és küldje el a nyomtatást USB-n vagy hálózaton, vagy mentse a G-kódot, előzetes STL-exportálás nélkül.
keywords: nyomtatási szakasz, 3d nyomtatás, nyomtató, tárgyasztal, küldés 3D-nyomtatóra, szeletelő, gcode, g-code, usb, klipper, moonraker, octoprint, prusalink, könyvtár, elrendezés, összes illesztése, rétegek előnézete, kitöltés, támaszok, filament, pla, petg, bővítmény, 3D-nyomtatási bővítmény
from: abcf5d7e
---

A {{ui:Nyomtatási szakasz}} a nyomtató tárgyasztalán rendezi el a tárgyakat, szeleteli őket, és elküldi a nyomtatónak. Nem kell előbb fájlt exportálnia. A 3D-nyomtatási bővítményhez tartozik, amely alapértelmezés szerint be van kapcsolva.

:::note
Ezzel még nem nyomtattak valódi nyomtatón. A szeletelő új: figyelje az első nyomtatás első rétegeit, és küldés előtt használja a rétegek előnézetét.
:::

## A teendők

Helyezzen modellt a tárgyasztalra, ellenőrizze, hogy ráfér-e, nézze meg a szeletelt rétegeket, és küldje el a nyomtatónak, vagy mentse a G-kódot.

## Lépések

1. Kattintson az eszköztár {{ui:Nyomtatási szakasz}} elemére. Kártya nyílik meg a nézet fölött, szaggatott körvonal mutatja a tárgyasztalt.
2. A **Hozzáadás a könyvtárból** részben írjon nevet a keresőmezőbe, nyomja meg a {{ui:Keresés}} gombot, és egy találatnál a {{ui:Hozzáadás}} gombot. Az elem teljes méretben kerül a tárgyasztalra, vagy lekicsinyítve, hogy ráférjen. Minden, amit már megrajzolt vagy importált, és ami látszik a nézetben, szintén a tárgyasztalon van.
3. A **Tárgyasztalon** részben ellenőrizze minden elem méretét. A **Tárgyasztalon kívül** jelölésű elemet át kell helyezni. A dolgokat a nézetben a szokásos eszközökkel mozgassa, forgassa és méretezze.
4. Nyomja meg a {{ui:Elrendezés a tárgyasztalon}} gombot az elemek szétterítéséhez, vagy a {{ui:Összes illesztése a tárgyasztalra}} gombot, hogy lekicsinyítse őket, amíg ráférnek.
5. A **Nyomtató** részben válassza ki a **Tárgyasztal** méretét vagy a nyomtatóprofilok egyikét.
6. A **Nyomtatási beállítások** részben válassza ki az **Anyag**, a **Minőség** és a **Kitöltés %** értékét, és jelölje be a **Támaszok hozzáadása a túlnyúlások alá** lehetőséget, ha az alak igényli.
7. Nyomja meg a {{ui:Rétegek előnézete}} gombot, és a **Réteg** csúszkát mozgatva nézze át a szeletelt rétegeket. Ha utólag megváltoztatja a szakaszt vagy a beállításokat, nyomja meg újra a {{ui:Rétegek előnézete}} gombot.
8. A **Kapcsolat** részben válassza a {{ui:USB-kábel}}, {{ui:Klipper (Moonraker)}}, {{ui:OctoPrint}} vagy {{ui:PrusaLink}} lehetőséget. USB esetén nyomja meg a {{ui:Csatlakozás}} gombot. Hálózati nyomtatónál írja be a **Cím** mezőt (és az **API-kulcsot**, ha kéri), majd nyomja meg a {{ui:A kapcsolat tesztelése}} gombot.
9. Nyomja meg a {{ui:Küldés 3D-nyomtatóra}} gombot. A kártya megkérdezi, hogy tiszta-e a tárgyasztal és be van-e töltve a megfelelő anyag, és megmutatja az időt, az anyagot és a hőmérsékleteket. Küldéshez erősítse meg.

Üzenet jelzi, hogy a nyomtató indul. A {{ui:A nyomtatás leállítása}} kikapcsolja a fűtőket, a ventilátort és a motorokat. Ha csak fájlra van szüksége, nyomja meg a {{ui:Helyette a G-kód mentése}} gombot.

## Megjegyzések

- Az USB-hez számítógépen Chrome vagy Edge szükséges, és az oldalnak a nyomtatás végéig nyitva kell maradnia. Bezárása megállítja az adatfolyamot.
- A hálózati nyomtatónak engednie kell ezt az oldalt (Moonrakerben vegye fel a `cors_domains` listába; OctoPrintben kapcsolja be a CORS-t, és másoljon ki egy API-kulcsot). A böngésző kérheti, hogy elérje a hálózatán lévő eszközöket.
- Kattintás nélkül semmi sem csatlakozik és nem küldődik el.
- A szeletelők listája a **Szeletelő** részben található. A {{ui:CadCraft alap (tartalmazott, leggyorsabb)}} be van építve. A Kiri:Moto, a PrusaSlicer, az OrcaSlicer és a Bambu Lab P2S saját bővítmények, amelyeket a kártyáról vagy a {{ui:Beállítások}} › {{ui:Bővítmények}} alatt lehet bekapcsolni. A PrusaSlicer és az OrcaSlicer a saját példányát használja, és számítógépen a CadCraft Studióból működik.
- A nem zárt testek darabjai kimaradnak, és a kártya megmondja, az alaknak mekkora része ez.
- Gyantanyomtatókhoz lásd: [Szeletelés gyantanyomtatóhoz](topic:resin-printing). Ha előbb ellenőrizni vagy javítani szeretne egy modellt, lásd: [Támaszok, falvastagság, kiüregelés és javítás](topic:print-tools).
