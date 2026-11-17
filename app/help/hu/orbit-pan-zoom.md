---
title: Körbejárás, eltolás és nagyítás
summary: Mozgás a modell körül egérrel, érintőpaddel, érintőképernyővel vagy billentyűzettel, és ugrás a szabványos nézetekre.
keywords: körbejárás, eltolás, nagyítás, hosszú nyomás, három ujj, két ujj, koppintás, navigálás, kamera, nézet, nézet forgatása, érintőpad, érintés, csippentés, középső gomb, nagyítás a teljes kiterjedésre, perspektíva, párhuzamos, felülnézet, izo
from: 10d4d33a
---

A kamerát bármikor mozgathatja, akár egy vonal vagy egy lap tolása közepén is: az eszköz ott várakozik, ahol volt.

## Három gombos egérrel

| Cél | Teendő |
|---|---|
| Körbejárás | Húzzon a középső gombbal (nyomja le a görgőt) |
| Eltolás | Húzzon a jobb gombbal, vagy tartsa lenyomva a {{key:Shift}} billentyűt, és húzzon a középső gombbal. A {{key:Shift}} lenyomása vagy felengedése húzás közben a körbejárás és az eltolás között vált |
| Nagyítás | Forgassa a görgőt. A mutató alatti lap felé nagyít, vagy a nézet közepének mélységében a mutató alatti pont felé |
| A teljes modell megtekintése | {{key:Shift+Z}} vagy {{ui:Teljes kiterjedés}} |

A körbejárás a modell mutató alatti részének környezetében forgatja a nézetet, így az a pont a helyén marad, miközben minden körülötte fordul. Üres térben a nézet közepe körül forog. Az eltolás a megfogott pontot tartja a mutató alatt.

A körbejárást mindig a nézet közepe körül tarthatja, vagy módosíthatja a körbejárás és az eltolás sebességét: nyissa meg a {{ui:Beállítások}} ({{key:Mod+,}}) párbeszédpanelt, a {{ui:ModelCraft}} lapot, **Körbejárás és eltolás**. A sebességek az egérre, az érintőpadra, az érintésre és a nyílbillentyűkre vonatkoznak.

Jobb gombbal kattintva, húzás nélkül nem történik semmi; a ModelCraft-ban nincs jobb kattintásos menü.

## Középső gomb nélkül

Használja az eszköztár kameraeszközeit vagy a billentyűzetet:

1. Nyomja meg az {{key:O}} billentyűt (vagy kattintson a {{ui:Körbejárás}} gombra), és húzzon a bal gombbal a körbejáráshoz. Húzás közben tartsa lenyomva a {{key:Shift}} billentyűt az eltoláshoz.
2. Nyomja meg az {{key:H}} billentyűt (vagy kattintson az {{ui:Eltolás}} gombra), és húzzon az eltoláshoz.
3. Nyomja meg a {{key:Z}} billentyűt (vagy kattintson a {{ui:Nagyítás}} gombra), és húzzon felfelé a nagyításhoz, lefelé a kicsinyítéshez.
4. Nyomja meg a {{key:Space}} billentyűt a visszatéréshez a {{ui:Kijelölés}} eszközre, vagy a következő kívánt eszköz billentyűjét.

A kameraeszközök lecserélik a használt eszközt. Ha egy művelet közepén szeretne körülnézni anélkül, hogy elveszítené, használja a billentyűzetet:

- A nyílbillentyűk körbejárnak.
- A {{key:Shift}} és a nyílbillentyűk együtt eltolnak.

Amikor egy rajzeszköz művelet közepén van (az első kattintás után), a nyílbillentyűk irányokat zárnak ahelyett, hogy körbejárnának. Lásd: [Következtetés és fogás](topic:inference#lock-a-direction).

## Érintőpadon

A legegyszerűbb: nyissa meg a {{ui:Beállítások}} ({{key:Mod+,}}) párbeszédpanelt, a {{ui:ModelCraft}} lapot, és állítsa a Görgetést **Érintőpad**ra (vagy hagyja az „Automatikus felismerés” értéken). Ezután két ujjal húzva körbejár, a {{key:Shift}} tartásával és húzással eltol, csippentéssel nagyít – kamera-gombok nélkül. Lásd: [ModelCraft beállításai](topic:settings#scrolling-mouse-wheel-or-trackpad).

A Görgetés **Egérgörgő**re állítva:

:::mac
- **Nagyítás:** görgessen két ujjal, vagy csippentsen. Mindkettő a mutató felé nagyít.
- **Eltolás:** nyomjon két ujjal (másodlagos kattintás), és tartsa lenyomva az ujjait húzás közben. Ha a két ujjas kattintás nem működik, kapcsolja be a „Másodlagos kattintás” lehetőséget a **Rendszerbeállítások** › **Érintőpad** menüpontban.
- **Körbejárás:** nyomja meg az {{key:O}} billentyűt, és húzzon egy ujjal, vagy használja a nyílbillentyűket.
- A {{key:Ctrl}} lenyomása kattintás közben a böngészőtől függően nem számít jobb kattintásnak a ModelCraft-ban: lehet, hogy Ctrl-lel lenyomott kattintásként működik. Az eltoláshoz használja a két ujjas nyomást.
:::

:::windows linux
- **Nagyítás:** görgessen két ujjal. A csippentés is nagyít, ott, ahol az illesztőprogram Ctrl-lel küldött görgetésként adja.
- **Eltolás:** húzzon a jobb gombbal (sok érintőpadon a jobb alsó sarkot nyomja meg, és húz), vagy nyomja meg az {{key:H}} billentyűt, és húzzon.
- **Körbejárás:** nyomja meg az {{key:O}} billentyűt, és húzzon, vagy használja a nyílbillentyűket.
:::

Egérgörgővel a két ujjas görgetés nagyít, nem tol el. Ez ellentétes sok webes oldallal, de így viselkedik az egérgörgő a legtöbb 3D-modellezőben.

:::tip
A {{key:Space}} a ModelCraft-ban a {{ui:Kijelölés}} eszközt választja. A {{key:Space}} tartása és húzás nem tol el, mint néhány más alkalmazásban.
:::

## Érintőképernyőn

:::touch
- **Egy ujj** az aktuális eszközt használja: **koppintás** a kattintáshoz, **nyomva tartott húzás** a rajzoláshoz vagy húzáshoz.
- Miközben egy rajzeszköz ujja le van nyomva, egy **nagyító** jelenik meg felette, amely megmutatja, mi van az ujj alatt, így még az emelés előtt látja a végpontot, a felezőpontot vagy az élt, amelyre fog.
- **Tartsa mozdulatlanul** fél másodpercig, hogy befejezze azt, amit az eszköz csinál, ahogy azt az {{key:Enter}} teszi: egy görbét, egy vonalláncot. Ha semmi nincs folyamatban, a mozdulatlan tartás után ugyanazzal az ujjal húzva **körbejár**, amíg fel nem emeli.
- **Két ujj** együtt húzva **eltol**; **csippentéssel** nagyít. Mindkettő működik egy mozdulatban.
- **Három ujj** együtt húzva **körbejár**.
- A felcseréléshez (két ujj körbejár, három tol) nyissa meg a {{ui:Beállítások}} párbeszédpanelt, a {{ui:ModelCraft}} lapot, Érintőképernyő.
- Ha egy második ujjat tesz le, az **megszakítja** azt, amit az első ujj elkezdett (félig rajzolt téglalap, folyamatban lévő nyomás/húzás). Emelje fel az ujjait, és kezdje újra.
- A nézet alján lévő kis sávban van a **Kész** ({{key:Enter}}), a **Mégse** ({{key:Esc}}) és a **Visszavonás** gomb, billentyűzet nélküli esetre.
- A fogás és a kiválasztás kicsit messzebbre ér, mint egérrel, a gombok pedig nagyobbak, hogy az ujj eltalálja őket.
:::

:::mouse
Érintőképernyőn egy ujj az aktuális eszközt használja (koppintás a kattintáshoz, mozdulatlan tartás a befejezéshez, vagy mozdulatlan tartás és húzás a körbejáráshoz), két ujj eltol és csippent a nagyításhoz, három ujj körbejár, a kis sáv pedig a Kész, a Mégse és a Visszavonás gombot kínálja.
:::

## Szabványos nézetek

1. Kattintson a {{ui:Nézetek}} gombra az eszköztár jobb végén.
2. Válassza az {{ui:Izo}}, a {{ui:Felülnézet}}, az {{ui:Elölnézet}}, a {{ui:Jobb oldal}}, a {{ui:Hátulnézet}}, a {{ui:Bal oldal}} vagy az {{ui:Alulnézet}} lehetőséget.

A nézet abba az irányba fordul, és az egész modell belefér. Az {{ui:Elölnézet}} észak felé néz, a zöld tengely mentén; a {{ui:Felülnézet}} egyenesen lefelé néz, észak felfelé.

A nézetkocka a nézet jobb felső sarkában ugyanezt egy kattintással elvégzi, emellett az éleket és sarkokat, egy iránytű gyűrűt a modell forgatásához és egy kezdőgombot is kínál. Lásd: [A nézetkocka](topic:view-cube).

## Perspektivikus és párhuzamos vetítés

Válassza a {{ui:Nézetek}}, majd a {{ui:Perspektíva}} lehetőséget. A pipa jelzi, hogy a perspektíva be van kapcsolva. Kikapcsolva a nézet párhuzamos (ortografikus) vetítés: a modellben párhuzamos vonalak a képernyőn is párhuzamosak maradnak, ami a {{ui:Elölnézet}} vagy a {{ui:Jobb oldal}} nézetből készülő homlokzatokhoz kell. Az állapotsor „Perspektíva.” vagy „Párhuzamos vetítés.” szöveget mutat.

Minden jelenet megjegyzi, hogy perspektivikus volt-e. Lásd: [Nézetek mentése jelenetként](topic:scenes).
