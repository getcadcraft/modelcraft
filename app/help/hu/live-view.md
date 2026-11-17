---
title: Az élő nézet
summary: A modell melletti ablak, amely valós idejű megjelenésben, nappal és árnyékokkal mutatja a modellt, és követ minden módosítást; járjon benne, és állítsa be a napszakot és a hónapot.
keywords: megosztás, panoráma, 360, túra, virtuális túra, önálló megjelenítő, offline megjelenítő, ügyfélnek küldés, videó, bejárási videó, szórás, szóródás, fű, rét, erdő, sziklák, növények, fák, tömeg, növények festése, élő nézet, valós idő, valós idejű render, bejárás, séta, sétálás, első személy, bemutató, ügyfél, második képernyő, második ablak, monitor, napszak, nap, évszak, hónap, árnyékok, környezeti elzáródás, tükröződés, visszaverődő fény, globális megvilágítás, webgpu, webgl
from: fca3b0d6
---

A {{ui:Exportálás}} › {{ui:Élő nézet}} menüpont egy panelt nyit az alkalmazás fölött, amely a modellt valós idejű megjelenésben mutatja: az eget és a napot a modell helyéről és dátumáról, a nap árnyékait, a felületeknek adott kinézetet és anyagokat, a lámpákat, valamint a falakról és padlókról visszaverődő fényt. Követi, amit csinál: ha elforgatja a nézetet, ő is elfordul; ha módosítja a modellt, a változás egy pillanat múlva látszik. Semmi nem töltődik fel.

## Megnyitás

1. Válassza a {{ui:Exportálás}} › {{ui:Élő nézet}} menüpontot. A panel a jobb alsó sarokban nyílik meg.
2. A címsávjánál fogva húzza a mozgatáshoz, a sarkánál fogva húzva méretezze.
3. Az {{ui:Új ablak}} saját ablakba viszi, egy második képernyőhöz. Az {{ui:Exportálás}} › {{ui:Élő nézet új ablakban}} azonnal ott nyitja meg. Ha a böngészője letiltja a felugró ablakokat, panelként nyílik meg.
4. A {{ui:Bezárás}} bezárja.

## A vezérlők

| Vezérlő | Mit csinál |
|---|---|
| {{ui:A nézet követése}} | Bekapcsolva: az élő nézet oda néz, ahová a ModelCraft nézete. Járáskor kikapcsol |
| {{ui:Séta}} | Bejárás a modellben (lent) |
| {{ui:Gravitáció}} | Járáskor: padlón áll és lépcsőn megy. Kikapcsolva: repül |
| {{ui:Idő}} | A napszak, 05:00-tól 21:00-ig. A nap mozog, ahogy húzza |
| {{ui:Hónap}} | A hónap (annak a 21. napja), hogy télen és nyáron is lássa a napot |
| {{ui:Minőség}} | {{ui:Ehhez a számítógéphez}} (amit [az Ön gépe](topic:your-machine) kap), vagy Alacsony, Közepes vagy Magas |

A panel alján lévő sor azt mutatja, mi rajzolja a nézetet (WebGPU vagy WebGL 2), a minőséget és a visszaverődő fényt.

## Séta a modellben

1. Forgassa a főnézetet arra, ahol állni szeretne, majd válassza a {{ui:Séta}} lehetőséget. A nézet szemmagassága alatti padlón áll, 1,6 m magasan.
2. Kattintson az élő nézetre, majd használja a {{key:W}} {{key:A}} {{key:S}} {{key:D}} billentyűket vagy a nyílbillentyűket. A {{key:Shift}} billentyűvel futhat. Húzással nézhet körbe.
3. A 40 cm-ig terjedő lépcsőfokokra felmehet (ezek a lépcsők); minden ennél magasabb akadály fal. A falak megállítják, és mentén csúszik.
4. Ha a {{ui:Gravitáció}} ki van kapcsolva, repül: a {{key:E}} felfelé, a {{key:Q}} lefelé viszi.
5. A {{key:Esc}} leállítja a sétát.

## Növények, sziklák és emberek szórása

A {{ui:Szórás}} az élő nézet sávjában a kép mellett megnyitja a szórási panelt. Egy szórási készlet a környezeti elemek könyvtárából (fák, cserjék, fű, virágok, sziklák, emberek, autók) szór el elemeket a modell egy részén. Az elemeket csak az élő nézetben rajzolja ki: nem a modell geometriája, és a főnézet nem mutatja őket.

1. **Felületek kitöltése:** jelöljön ki felületeket (vagy egy csoportot, például egy terepet) a ModelCraftban, majd válassza a {{ui:Kijelölés kitöltése}} lehetőséget. A készlet lefedi őket.
2. **Festés:** válassza a {{ui:Festés}} lehetőséget, majd húzzon az élő nézeten. Ha felületek vannak kijelölve, a festés csak ezekre kerül; ha nincs kijelölés, bármire kerül, ami az ecset alatt van, a talajt is beleértve. A {{ui:Kefe mérete}} az ecsetet állítja; a {{ui:Radír}} eltávolítja a festett foltokat.
3. Jelölje be, mit szórjon. Az egyes elemek melletti szám a súlyuk: a 3 és az 1 azt jelenti, hogy az első fajtából háromszor annyi lesz, mint a másodikból.

| Vezérlő | Mit csinál |
|---|---|
| {{ui:m²-enként}} | Hány elem jut egy négyzetméterre |
| {{ui:Távolságtartás (m)}} | Nem kerül elem ennél közelebb más objektumhoz, és nem kerül tető vagy asztal alá. A 0 kikapcsolja |
| {{ui:Forgatás (°)}} | Mennyire fordul el véletlenszerűen minden elem a függőleges tengely körül |
| {{ui:Legmeredekebb (°)}} | Nincs elem ott, ahol a felület meredekebb |
| {{ui:Méret}} | A legkisebb és a legnagyobb méret, az elem saját méretének szorzójaként |
| {{ui:Magasság innen, eddig (m)}} | Csak ezek között a magasságok között (üresen = bármelyik) |
| {{ui:Dőlés a felülettel}} | 0: az elemek függőlegesek maradnak; 1: merőlegesen állnak a lejtőre |
| {{ui:Mag}}, {{ui:Keverés}} | Ugyanaz a mag mindig ugyanazt a szórást adja; a Keverés másikat választ |

A készletek a .modelcraft fájlban mentődnek, és módosításkor követik a lefedett felületeket. Hogy az élő nézet legfeljebb hány elemet rajzoljon, azt [az Ön gépe](topic:your-machine) szintje határozza meg: 20 000 a {{ui:Csak processzor}} esetén, 100 000 a {{ui:Videokártya, alap}} esetén, egymillió a {{ui:Videokártya, magas}} esetén. A panel megmutatja, hány elem kerül elhelyezésre a sűrűség által kért összesből: kevesebb kerül elhelyezésre, ha elérjük a keretet, vagy ha az objektumok kizárják őket. A kamerához közeli elemek a saját alakjukban, a távoliak egyszerű formában, a saját színükben jelennek meg.

:::note
A szórt elemek az élő nézetben láthatók (és a bejárásában, a panorámákban és az önálló megjelenítőben). A kép renderelése még nem rajzolja ki őket.
:::

## Megosztás: panorámák, túrák, megjelenítő, videó

A {{ui:Megosztás}} az élő nézet sávjában fájlokat készít az élő nézetből. Minden a számítógépen készül; semmi nem töltődik fel.

| Választás | Mit kap |
|---|---|
| {{ui:360°-os panoráma}} | Egy 360°-os kép abból a helyzetből, ahol a nézet áll (vagy ahol bejár), equirectangular PNG formátumban, amelyet a panorámanézegetők és a legtöbb fotós oldal megnyit |
| {{ui:E hely hozzáadása a túrához}}, majd {{ui:A túra mentése}} | Egy webes oldal: minden helyen panorámával, és nyilakkal a helyekre, amelyeket mindegyikről lát (a köztes fal elrejti a nyilat) |
| {{ui:Megjelenítő mentése}} | Egy webes oldal a modellel ebben a valós idejű megjelenésben: forgatható, bejárható, a mentett jelenetei között ugorhat. WebGPU-val vagy WebGL 2-vel rendelkező böngészőben offline nyílik meg, mappából, USB-tárolóról vagy e-mailből, telepítés és fiók nélkül, és nem tölt be semmit az internetről |
| {{ui:Az útvonal videója}} | Az idővonal kameraútja (vagy a mentett jelenetek sorrendben) videóként ebben a valós idejű megjelenésben, az élő nézet méretében: WebM vagy MP4, ahol a böngésző tudja készíteni, különben számozott képek ZIP-ben |

A panoráma mérete a minőséget követi: 1024, 2048 vagy 4096 pixel széles Alacsony, Közepes és Magas minőségnél. Egy megjelenítőfájl körülbelül 5 MB, plusz a modell.

:::note
A túra és a megjelenítő bemutatásra készül, nem szerkesztésre: mentéskor a modellt olyannak őrzik meg, amilyen volt.
:::

## Minőség

| | Alacsony | Közepes | Magas |
|---|---|---|---|
| Napárnyékok | egy árnyéktérkép | három kaszkád | négy kaszkád |
| Környezeti elzáródás (érintkezési árnyékok) | | ✓ | ✓, finomabb |
| Tükröződés fémen | | | ✓ |
| Bloom (ha a kép renderelése beállítja) | | ✓ | ✓ |
| Élek simítása | FXAA | több képkockán át (TAA) | több képkockán át (TAA) |
| Visszaverődő fény | durva | finomabb | legfinomabb |

Az {{ui:Ehhez a számítógéphez}} beállítás Alacsonyat választ olyan számítógépen, amelyen nincs használható videokártya, Közepest beépített grafikus chipnél, Magast külön videokártyánál. Az Alacsony egy 8 GB-os, videokártya nélküli laptophoz készült.

## Visszaverődő fény

A napfényes falról a padlóra visszaverődő fényt, valamint a szoba sötétebb belsejét ugyanaz az útvonalkövető számolja ki, amely a [renderelt képeket](topic:render) készíti: kis panorámákat rajzol a modell pontjainál, a háttérben, a számítógép minden magján. Munka közben az alsó sor azt mutatja: {{ui:Visszaverődő fény: 40%}}; ha kész, a nézet befogadja. Minden módosítás után újrakezdi.

:::note
Ez az élő nézet közelítése, nem renderelt kép: a pontok közötti apró részletek a hozzájuk közeli pontok visszaverődő fényét kapják. Végleges képhez használja a [Kép renderelése](topic:render) funkciót.
:::

## Fényerő és színek

Az élő nézet ugyanazt a fényerőt, fehéregyensúlyt, kontrasztot és nézettranszformációt használja (ACES, AgX, filmes vagy szabványos), mint a [Kép renderelése](topic:render): ha ott állítja be, az élő nézet követi.

:::note
A böngészők eltérnek. Ahol a böngészőben van WebGPU (Chrome és Edge Windows-on, macOS-en és ChromeOS-en, Safari 26), az élő nézet azt használja; máshol (a legtöbb böngésző Linuxon, régebbi Apple-rendszereken) WebGL 2-t használ, és ugyanúgy néz ki.
:::
