---
title: A ModelCraft képernyője
summary: Bemutató az eszköztárról, az oldalpanelekről, a 3D nézetről és az állapotsorról, a képernyőn látható nevükön.
keywords: képernyő, elrendezés, eszköztár, panelek, vázlatnézet, entitásinfó, stílus, jelenetek, állapotsor, értékmező, mértékegységek, felület, bemutató
from: 4a9a4516
---

Fentről lefelé: az alkalmazássáv, az eszköztár, a három oszlop (bal panelek, 3D nézet, jobb panelek) és az állapotsor.

## Az alkalmazássáv

A legfelső vékony sáv minden CadCraft alkalmazásé. Rajta van az alkalmazás neve és verziója, az {{ui:A(z) ModelCraft névjegye}}, a képernyőmód-gomb és a {{ui:Papír}} / {{ui:Modell}} kapcsoló.

- A {{ui:Papír}} a világos téma, a {{ui:Modell}} a sötét. A 3D nézet ennek megfelelően változtatja a színeit; a modellje nem változik.
- A képernyőmód-gomb (eleinte ez áll rajta: {{ui:Teljes képernyő}}) és a {{key:Ctrl+Shift+F}} három mód között lép: normál, teljes képernyő, és teljes képernyő elrejtett sávokkal. Elrejtett sávoknál mutasson a képernyő felső szélére (vagy koppintson oda), hogy visszahozza őket. Az {{key:Esc}} kilép a teljes képernyőből.

:::note
A {{key:Ctrl+Shift+F}} minden számítógépen a Control billentyűt használja, Macen is. iPhone-on, ahol a böngészőknek nincs teljes képernyője, a gomb csak elrejti és megjeleníti a sávokat.
:::

## Az eszköztár

Az eszköztár felirattal ellátott csoportokra oszlik. Vigye fölé a mutatót egy gombnak, hogy lássa a nevét és a billentyűjét.

A bal szélén a {{ui:Munkaterület}} lista átkapcsolja, mire való az eszköztár és a jobb panel: {{ui:Modell}} (nyomás/húzás modellezés, az alábbi bemutató), {{ui:Háló}} ([háló szerkesztése](topic:mesh-edit)), {{ui:Görbe}} ([görbe objektumok](topic:curves)), {{ui:UV}} ([UV-k kiosztása](topic:uv)), {{ui:Szobrászat}} ([szobrászat](topic:sculpt)), {{ui:Árnyalás}} ([csomópontokkal készített anyagok](topic:shading)), {{ui:Animáció}} ([animálás](topic:animate)) és {{ui:Renderelés}} ([renderelés a nézetben](topic:render#render-in-the-view)).

| Csoport | Gombok |
|---|---|
| Fájl | {{ui:Új}}, {{ui:Megnyitás}}, {{ui:Mentés}}, {{ui:Importálás}}, {{ui:Exportálás}} (formátumok menüje) |
| Rajzolás | {{ui:Vonal}} ({{key:L}}), {{ui:Téglalap}} ({{key:R}}), {{ui:Kör}} ({{key:C}}), {{ui:Sokszög}} ({{key:N}}) |
| Módosítás | {{ui:Kijelölés}} ({{key:Space}}), {{ui:Nyomás/húzás}} ({{key:P}}), {{ui:Mozgatás}} ({{key:M}}), {{ui:Forgatás}} ({{key:Q}}), {{ui:Léptékezés}} ({{key:S}}), {{ui:Radír}} ({{key:E}}), {{ui:Mérőszalag}} ({{key:T}}) |
| Rendszerezés | {{ui:Komponens}} ({{key:G}}), {{ui:Csoport}} ({{key:Shift+G}}), {{ui:Felbontás}} |
| Szerkesztés | {{ui:Visszavonás}} ({{key:Mod+Z}}), {{ui:Ismétlés}} ({{key:Mod+Y}}), {{ui:Másolás}} ({{key:Mod+C}}), {{ui:Beillesztés}} ({{key:Mod+V}}), {{ui:Továbbiak}} (menü: kivágás, másolás, beillesztés, beillesztés helyben {{key:Mod+Shift+V}}, kettőzés {{key:Mod+D}}, törlés, összes kijelölése, kijelölés megszüntetése és a billentyűstílus) |
| Kamera | {{ui:Körbejárás}} ({{key:O}}), {{ui:Eltolás}} ({{key:H}}), {{ui:Nagyítás}} ({{key:Z}}), {{ui:Teljes kiterjedés}} ({{key:Shift+Z}}), {{ui:Nézetek}} (menü) |

A feltüntetett billentyűk a nyomás/húzás billentyűk; ha a [ModelCraft beállításaiban](topic:settings) a Modellező stílust választja, a súgószövegek azokat a billentyűket mutatják. Az éppen használt eszköz benyomottan látszik. Keskeny képernyőn az eszköztár oldalra görgethető.

A {{ui:Nézetek}} menüben van az {{ui:Izo}}, a {{ui:Felülnézet}}, az {{ui:Elölnézet}}, a {{ui:Jobb oldal}}, a {{ui:Hátulnézet}}, a {{ui:Bal oldal}} és az {{ui:Alulnézet}}, mindegyik a modellhez igazítva, valamint a {{ui:Perspektíva}}, amely a perspektivikus és a párhuzamos vetítés között vált.

## A 3D nézet

A képernyő közepe. A piros, zöld és kék vonalak a tengelyek: a piros és a zöld a talajon fekszik, a kék felfelé mutat, és **észak a zöld tengely**. Ahol találkoznak, az az origó.

- Induláskor egy „A modellezés megkezdése” című kártya felsorolja az első néhány billentyűt. Eltűnik, ha rajzolóeszközt választ, vagy a nézetbe kattint.
- Amíg egy eszköz dolgozik, a nézet **következtetési jelölőket** mutat: kis színes alakzatokat ott, ahol a mutató fog (zöld kör a végpontnál, ciánkék a felezőpontnál, piros négyzet az élen, kék rombusz a lapon). Lásd [Következtetés és fogás](topic:inference).
- A kijelölt dolgok kékek lesznek. A hátulról látott lap kékesszürke.
- Ha egy csoportot szerkesztésre megnyit, minden, ami rajta kívül van, elhalványul, és a tengelyek a csoport saját tengelyeire költöznek.
- Ha a modellnek vannak jelenetei, jelenetlapok sora jelenik meg a nézet tetején.
- Húzzon egy fájlt a nézet bármelyik pontjára a megnyitásához vagy importálásához.

## A bal panelek

A **{{ui:Vázlatnézet}}** felsorolja a modell csoportjait és komponenseit, úgy egymásba ágyazva, ahogy a modellben vannak. A többször használt komponens megmutatja, hányszor, például „Ablak (4)”.

- Kattintson egy névre a kijelöléséhez. Kattintson duplán a szerkesztésre való megnyitásához.
- A **Keresés név szerint** (két vagy több csoportnál jelenik meg) csak azokat a sorokat tartja meg, amelyek neve egyezik, a csoportjaikkal együtt. Az {{key:Esc}} törli.
- Egy sor végén a **szem** elrejti vagy megjeleníti a csoportot vagy komponenst (ahogy a {{ui:Szerkesztés}} › {{ui:Továbbiak}} › {{ui:Elrejtés}}). A címke ikon azt jelenti, hogy a [címkéje](topic:tags) rejtette el.
- **Átnevezés helyben:** kattintson egy sorra, nyomja meg az {{key:F2}} billentyűt, gépeljen, és nyomja meg az {{key:Enter}} billentyűt (az {{key:Esc}} megtartja a régi nevet).
- **Húzzon egy sort** egy másik csoport sorának közepére, hogy a csoportba helyezze, egy sor felső vagy alsó szélére, hogy közvetlenül elé vagy mögé tegye, vagy a {{ui:Vázlatnézet}} címsorára, hogy a legfelső szintre vigye. A modellben ott marad, ahol van, és megtartja a színét, címkéjét és nevét. Egy csoport nem kerülhet önmagába. Minden áthelyezés egy visszavonási lépés. Lásd [Átrendezés a Vázlatnézetben](topic:groups-components#rearrange-in-the-outliner).
- Amíg egy csoporton belül szerkeszt, egy sor ezt írja: „Szerkesztés: Modell › …”, és megjelenik egy {{ui:Csoport bezárása}} gomb. Egyszerre bezár minden megnyitott szintet.

A **{{ui:Komponensek}}** felsorol minden komponensdefiníciót, hogy hány példány van elhelyezve („3×”), és egy {{ui:Elhelyezés}} gombbal, amely oda tesz még egy példányt, ahová kattint.

## A jobb panelek

Az **{{ui:Entitásinfó}}** leírja, mi van kijelölve. A címsora megváltozik, hogy megmondja, mi az:

| Címsor | Mit mutat | Gombok |
|---|---|---|
| Modell (nincs kijelölve semmi) | Lapok, élek, csoportok, komponensek és hány van elhelyezve, segédvonalak, teljes méret | {{ui:Minden segédvonal törlése}} (ha vannak segédvonalak) |
| Lap | Terület, a lyukak száma | {{ui:Lap megfordítása}} |
| Él | Hossz | nincs |
| Csoport vagy komponens | Név (gépeléssel átnevezhető), hányszor van elhelyezve, zárt test-e, térfogata, mérete | {{ui:Szerkesztés}}, {{ui:Felbontás}}, {{ui:Egyedivé tétel}} (egynél többször elhelyezett komponens), {{ui:Komponens létrehozása}} (csoport) |
| Segédpont vagy segédvonal | semmi | {{ui:Törlés}} |
| Több dolog | Hány lap, él, csoport és segédvonal, a lapok teljes területe | {{ui:Komponens létrehozása (G)}}, {{ui:Csoport létrehozása (Shift+G)}} |

A **{{ui:Stílus}}** beállítja, hogyan rajzolódik a modell: {{ui:Lapok}} ({{ui:Árnyékolt}}, {{ui:Takart vonalas}}, {{ui:Drótváz}}, {{ui:Röntgen}}), {{ui:Élek megjelenítése}} és {{ui:Napárnyékok}} a nap dátumával, idejével és helyével. Lásd [Stílusok és napárnyékok](topic:styles-shadows).

A **{{ui:Jelenetek}}** nézeteket ment: {{ui:Jelenet hozzáadása}}, a jelenetek listája, valamint az {{ui:Előző}}, a {{ui:Lejátszás}} és a {{ui:Következő}}. Lásd [Nézetek mentése jelenetekként](topic:scenes).

## Az állapotsor

Alul, balról jobbra:

1. **A tipp**: mit vár az eszköz következőnek, vagy mihez fog a mutató („Végpont”, „A piros tengelyen”).
2. **Üzenetek**: mi történt az imént („Visszavonva: nyomás/húzás.”, „Importálva: site.dxf: 1697 él a talajon, egy csoportban.”) vagy miért nem sikerült valami.
3. **Az értékmező**: a felirata az eszközzel változik ({{ui:Hossz}}, {{ui:Méretek}}, {{ui:Sugár}}, {{ui:Oldalak}}, {{ui:Távolság}}, {{ui:Szög}}, {{ui:Lépték}}, {{ui:Eltolás}}). Munka közben az élő méretet mutatja, és átveszi, amit begépel. Lásd [Pontos méretek beírása az értékmezőbe](topic:value-box).
4. **A billentyűstílus**: a {{ui:Billentyűk: Nyomás/húzás}} vagy a {{ui:Billentyűk: Modellező}} egyszerre kapcsolja át a billentyűparancsokat és az egérgombokat (ugyanaz, mint a [ModelCraft beállításaiban](topic:settings)).
5. **{{ui:Fogás}} és {{ui:Ütközés}}**: fogás pontokhoz, élekhez és tengelyekhez, illetve a testek megállása ott, ahol összeérnek. Áthúzva = ki. Kattintson a kapcsoláshoz. Lásd [A ModelCraft beállításai](topic:settings).
6. **A mértékegység-választó**: a mértékegység, amelyben a hosszak megjelennek. Lásd [Első lépések](topic:getting-started#check-the-units-first).

## Keskeny képernyőn

Körülbelül 760 képpont szélesség alatt (telefon vagy keskeny ablak) a 3D nézet kapja a képernyőt. Az eszköztár egyetlen, oldalra görgethető sor, a panelek pedig lapokként nyílnak a képernyő alján lévő sávból.
