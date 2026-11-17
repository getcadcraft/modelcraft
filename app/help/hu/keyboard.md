---
title: Billentyűk és egérműveletek
summary: A ModelCraft minden billentyűparancsa, egérművelete, érintőpados kézmozdulata és érintőképernyős gesztusa, hatáscsoportonként rendezve.
keywords: billentyűzet, billentyűparancsok, billentyűk, gyorsbillentyűk, egér, érintőpad, érintőképernyő, kézmozdulatok, gyorsreferencia, ctrl, parancs, nyílbillentyűk
from: e2348957
---

Ezek a nyomással és húzással dolgozó billentyűk, amelyekkel a ModelCraft indul. A másik stílusért lásd lent a [Modeler-billentyűk](topic:keyboard#modeler-keys) részt, és a [ModelCraft beállításait](topic:settings).

A billentyűparancsok akkor működnek, ha a 3D-nézet vagy egy eszköztárgomb van fókuszban. Ha épp egy panel mezőjébe írt, vagy a {{ui:Stílus}} panelen módosított egy listát, előbb kattintson a 3D-nézetbe, különben a billentyűk abba a mezőbe kerülnek. A billentyűk írásmódját minden számítógépen lásd itt: [Billentyűk, egerek és érintőpadok](common:keys).

## Eszközök

| Billentyű | Eszköz |
|---|---|
| {{key:Space}} | {{ui:Kijelölés}} |
| {{key:L}} | {{ui:Vonal}} |
| {{key:R}} | {{ui:Téglalap}} |
| {{key:C}} | {{ui:Kör}} |
| {{key:N}} | {{ui:Sokszög}} |
| {{key:A}} | {{ui:Ív}} |
| {{key:F}} | {{ui:Párhuzamos}} |
| {{key:B}} | {{ui:Festés}} |
| {{key:P}} | {{ui:Nyomás/húzás}} |
| {{key:M}} | {{ui:Mozgatás}} |
| {{key:Q}} | {{ui:Forgatás}} |
| {{key:S}} | {{ui:Léptékezés}} |
| {{key:E}} | {{ui:Radír}} |
| {{key:T}} | {{ui:Mérőszalag}} mérés |
| {{key:D}} | {{ui:Méretezés}} |
| {{key:O}} | {{ui:Körbejárás}} |
| {{key:H}} | {{ui:Eltolás}} |
| {{key:Z}} | {{ui:Nagyítás}} |

Az eszközbetűk csak módosítóbillentyű nélkül működnek: a {{key:Shift}} és egy betű együtt nem tesz semmit, kivéve az alábbi kettőt.

## Modell és fájl

| Billentyű | Művelet |
|---|---|
| {{key:G}} | Komponens létrehozása a kijelölésből |
| {{key:Shift+G}} | Csoport létrehozása a kijelölésből |
| {{key:Shift+Z}} | Nagyítás a kiterjedésre (az egész modell) |
| {{key:Mod+Z}} | Visszavonás |
| {{key:Mod+Y}} vagy {{key:Mod+Shift+Z}} | Ismétlés |
| {{key:Mod+S}} | Mentés (letölti a `.modelcraft` fájlt) |
| {{key:Mod+O}} | Modell megnyitása |
| {{key:Mod+A}} | Minden kijelölése (a megnyitott csoportban, ha van megnyitott csoport) |
| {{key:Mod+C}} | A kijelölés másolása |
| {{key:Mod+X}} | A kijelölés kivágása |
| {{key:Mod+V}} | Beillesztés: a másolat a kurzort követi, kattintson, ahová kerüljön |
| {{key:Mod+Shift+V}} | Beillesztés helyben (onnan, ahonnan másolták) |
| {{key:Mod+D}} | Kettőzés: a másolat a kurzorral mozog, kattintással helyezze le |
| {{key:Delete}} vagy {{key:Backspace}} | A kijelölés törlése |
| {{key:PageDown}} / {{key:PageUp}} | Következő / előző jelenet |
| {{key:F1}} | A súgó megnyitása vagy bezárása (az alkalmazássávon a {{ui:Súgó}} gomb is; a súgón belül az {{key:Esc}} bezárja) |
| {{key:Ctrl+Shift+F}} | Képernyőmód: teljes képernyő, majd sávok elrejtve, majd normál (Mac-en is a Control) |

## Esc

Az {{key:Esc}} billentyű minden lenyomásakor eggyel visszébb lép:

1. Megszakítja, amit az eszköz épp csinál (húzott vonal, nyomás/húzás, mozgatás). Minden visszaáll.
2. Átvált a {{ui:Kijelölés}} eszközre.
3. Törli a kijelölést.
4. Bezárja a szerkesztett csoportot.

Leállítja a lejátszódó jeleneteket is. Az értékdobozban az {{key:Esc}} törli, amit beírt, és visszatér a nézethez.

## Amíg egy eszköz dolgozik

| Billentyű | Művelet |
|---|---|
| Egy számjegy, vagy ezek egyike: `. , - ' " [ < * /` | Gépelést indít az értékdobozban |
| {{key:Enter}} | Alkalmazza az értékdobozba írtakat |
| {{key:Right}} | Piros tengelyre rögzít (újra megnyomva feloldja) |
| {{key:Left}} | Zöld tengelyre rögzít |
| {{key:Up}} | Kék tengelyre rögzít |
| {{key:Down}} | Az első kattintás előtt utoljára megjelölt élre párhuzamosan rögzít |
| {{key:Shift}} lenyomva tartva | Tartja azt az irányt, amelyre épp illeszkedik, amíg lenyomva tartja |
| {{key:Ctrl}}, {{key:Mod}} vagy {{key:Alt}} (Mozgatás) | Vált a mozgatás és a másolás között |

A nyíllal való rögzítés az első kattintás után működik a {{ui:Vonal}}, {{ui:Téglalap}}, {{ui:Kör}}, {{ui:Sokszög}}, {{ui:Mozgatás}}, {{ui:Léptékezés}} és {{ui:Mérőszalag}} (pontból mérésnél) eszközön. A {{ui:Nyomás/húzás}} mindig a lap irányában mozog, és nincs rögzítése. A {{ui:Forgatás}} eszközben a nyilak az első kattintás után „Rögzítve” üzenetet mutatnak, de nem változtatják a fordulást.

## Nyilak más időkben

Ha egy eszköz épp nem dolgozik valamin, a nyilak a kamerát mozgatják:

| Billentyű | Művelet |
|---|---|
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Körbejárás |
| {{key:Shift}} és nyíl | Eltolás |

## Egér

| Művelet | Teszi |
|---|---|
| Kattintás | Az aktuális eszközt használja |
| Megnyomás, húzás, felengedés | Mint két kattintás (rajzoló eszközöknél); dobozos kijelölés (a {{ui:Kijelölés}} eszköznél); közben töröl (a {{ui:Radír}} eszköznél) |
| Duplakattintás | {{ui:Kijelölés}}: lap az éleivel, él a lapjaival, csoportot megnyit; üres terület bezárja a csoportot. {{ui:Nyomás/húzás}}: megismétli az utolsó távolságot |
| Hármas kattintás | {{ui:Kijelölés}}: minden összefüggő elem |
| {{key:Shift}} + kattintás | {{ui:Kijelölés}}: ki- és belépés a kijelölésbe |
| {{key:Mod}} + kattintás | {{ui:Kijelölés}}: hozzáadás a kijelöléshez |
| {{key:Shift}} + {{key:Mod}} + kattintás | {{ui:Kijelölés}}: eltávolítás a kijelölésből |
| Középső gombos húzás | Körbejárás, bármely eszközzel |
| {{key:Shift}} + középső gombos húzás | Eltolás, bármely eszközzel |
| Jobb gombos húzás | Eltolás, bármely eszközzel |
| Görgő | Nagyítás a kurzor felé |

Nincs jobb gombos menü.

## Érintőpad

A kétujjas húzás hatása attól függ, mit állított be a {{ui:Beállítások}} › {{ui:ModelCraft}} › Görgetés alatt:

| Gesztus | Érintőpad (vagy kiszámítva) | Egérgörgő |
|---|---|---|
| Kétujjas húzás | Körbejárás | Nagyítás a kurzor felé |
| {{key:Shift}} + kétujjas húzás | Eltolás | Nagyítás |
| Csippentés | Nagyítás a kurzor felé | Nagyítás a kurzor felé |
| Kétujjas megnyomás és húzás (másodlagos kattintás lenyomva) | Eltolás | Eltolás |

Lásd: [Körbejárás, eltolás és nagyítás](topic:orbit-pan-zoom#on-a-trackpad) és [ModelCraft beállításai](topic:settings#scrolling-mouse-wheel-or-trackpad).

## Modeler-billentyűk

Ha a {{ui:Beállítások}} › {{ui:ModelCraft}} › Vezérlés beállítása Modeler stílusra van állítva:

| Billentyű | Művelet |
|---|---|
| {{key:W}} vagy {{key:Space}} | {{ui:Kijelölés}} |
| {{key:L}} / {{key:B}} / {{key:C}} / {{key:N}} | {{ui:Vonal}} / {{ui:Téglalap}} / {{ui:Kör}} / {{ui:Sokszög}} |
| {{key:E}} | {{ui:Nyomás/húzás}} (kihúzás) |
| {{key:T}} | {{ui:Mérőszalag}} mérés |
| {{key:D}} | {{ui:Méretezés}} |
| {{key:G}} | A kijelölés azonnali mozgatása a kurzorból |
| {{key:R}} | A kijelölés forgatása a közepe körül (kék tengely) |
| {{key:S}} | A kijelölés léptékezése a közepe körül |
| {{key:X}} / {{key:Y}} / {{key:Z}} mozgatás vagy forgatás közben | Piros / zöld / kék tengely rögzítése (újra a feloldáshoz) |
| Kattintás vagy {{key:Enter}} | Lerakás |
| {{key:Esc}} vagy jobb kattintás | Visszatétel az eredeti helyére |
| {{key:Shift+D}} | Kettőzés, és a másolat mozgatása |
| {{key:X}} vagy {{key:Delete}} | A kijelölés törlése |
| {{key:A}} / {{key:Alt+A}} | Minden kijelölése / semmi kijelölése |
| {{key:Tab}} | A kijelölt csoport vagy komponens megnyitása; újra a bezáráshoz |
| {{key:Mod+G}} / {{key:Mod+Shift+G}} | Csoport létrehozása / komponens létrehozása |
| Numpad {{key:1}} / {{key:3}} / {{key:7}} | Elülnézet / jobb oldali nézet / felülnézet ({{key:Mod}}: hátulnézet / bal oldali / alulnézet) |
| Numpad {{key:5}} | Perspektíva be- vagy kikapcsolása |
| Numpad {{key:.}} | Nagyítás a kijelölésre |
| {{key:Home}} vagy {{key:Shift+C}} | Nagyítás a kiterjedésre |
| {{key:Shift+Tab}} | Illesztés be- vagy kikapcsolása |
| Középső gombos húzás / {{key:Shift}}-tel / {{key:Mod}}-dal | Körbejárás / eltolás / nagyítás |
| {{key:Alt}} + húzás / {{key:Alt+Shift}} + húzás | Körbejárás / eltolás (középső gomb nélkül) |

A másolás, beillesztés, visszavonás, mentés és megnyitás a fent felsorolt billentyűket tartja meg. A beírt értékek, az értékdoboz és a {{ui:Nyomás/húzás}} mindkét stílusban ugyanúgy működnek.

## Érintőképernyő

| Gesztus | Művelet |
|---|---|
| Koppintás | Kattintás az aktuális eszközzel |
| Dupla koppintás | Duplakattintás |
| Megnyomás, húzás, felemelés | Mint az egérrel a megnyomás, húzás, felengedés |
| Két ujj: csippentés | Nagyítás |
| Két ujj: együtt mozgatva | Eltolás (a {{ui:Beállítások}} › {{ui:ModelCraft}} › Érintőképernyő beállítással körbejárásra is állítható) |
| Három ujj: együtt mozgatva | Körbejárás (ha a két ujj körbejárást végez, akkor eltolás) |
| Egy ujj mozdulatlanul tartva | Befejezi az eszközt, mint az Enter; ha semmi sem fut, utána húzással körbejárás |
| Második ujj egyujjas művelet közben | Megszakítja azt a műveletet |
| A {{ui:Körbejárás}} eszköz, majd egy ujj húzása | Körbejárás |

Érintőképernyőn értéket úgy írhat be, hogy koppint az alul lévő értékdobozra, beír, majd megnyomja a billentyűzet Enter (vagy Go) gombját.

## Hol található a Mozgatás

A {{ui:Mozgatás}} eszköz, billentyűje az {{key:M}}: jelölje ki, mit mozgat, kattintson egy alappontot, majd egy második pontot, vagy írjon be távolságot. Lásd: [Mozgatás, másolás és sokszorozás](topic:move-copy).
