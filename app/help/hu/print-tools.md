---
title: Támaszok, falvastagság, kiüregelés és javítás
summary: Lássa, hol van szüksége támaszokra a nyomtatásnál és nagyjából mennyire, keresse meg a túl vékony falakat, üregesítse ki a darabot a megadott falvastagságra lefolyólyukakkal, és javítsa a hálót minden javítás felsorolásával.
keywords: 3d nyomtatás, támaszok, támasz előnézet, túlnyúlás, fa típusú támaszok, oszlop típusú támaszok, falvastagság, vékony falak, túl vékony, fúvóka, kiüregelés, üregelés, héj, lefolyólyuk, gyanta, javítás, háló javítása, nem sokrétű, megfordított lapok, lyukak, kis héjak, önmetszés, átfedés, egyesítés
from: 286bde26
---

Négy eszköz, amellyel modellt készíthet elő a 3D-nyomtatóhoz. Nyissa meg a {{ui:Exportálás}} › {{ui:3D nyomtatás ellenőrzése (STL vagy 3MF)…}} menüpontot; a párbeszédpanel **Nyomtatási eszközök** sorában található a {{ui:Támaszok előnézete}}, a {{ui:Falvastagság}}, a {{ui:Kiüregelés}} és a {{ui:Javítás}}. Mindegyik kártyaként nyílik meg a nézet fölött; a {{ui:Bezárás}} (a kereszt) bezárja, és eltünteti a hozzá tartozó jelöléseket. Egyszerre egy kártya látszik.

Minden eszköz azon dolgozik, ami nyomtatható: a kijelölésen, vagy ha nincs kijelölés, a látható mindenen. A {{ui:Kiüregelés}} és a {{ui:Javítás}} egy csoportot, komponenst vagy hálót igényel kijelölve, mert ezek módosítják azt.

## Támaszok előnézete

Azok a lapok, amelyek a függőlegestől a **túlnyúlási szögnél** jobban kidőlnek, pirossal árnyékoltak, és egyszerű támaszok húzódnak tőlük (narancssárgával) lefelé a tárgyasztalig, vagy a modell alatta lévő részéig.

- **Túlnyúlási szög**: 45° az, amit a legtöbb nyomtató támasz nélkül kezel. Emelje meg olyan nyomtatónál, amely jól hidal át.
- **Oszlopok**: egyenes oszlop 3 mm-enként minden túlnyúlás alatt. A becslés 15%-os támasz-mintázatként számolja őket.
- **Fa**: a közeli pontok egy törzsbe futnak össze a közepük alatt; egyetlen ág sem dől 45°-nál jobban. A fa típusú támaszok általában kevesebb anyagot igényelnek, és kevesebb helyen érintik a tárgyasztalt.

A kártya megmondja, mekkora felület igényel támaszt, hány támasztási pont van, és nagyjából mennyi anyagot vesznek igénybe. A modellen állva (nem a tárgyasztalon) álló támaszokat is számolja: nyomot hagynak ott. Ha a {{ui:Beállítások}} menüben nyomtató tárgyasztalt választ, a tárgyasztal a modell alatt jelenik meg.

:::note
Ez előnézet, nem szeletelő: a valódi támaszokról a szeletelő dönt. Nagyon nagy túlnyúlásnál a támasztási pontok szélesebbre oszlanak, hogy az előnézet gyors maradjon; a kártya ezt jelzi.
:::

## Falvastagság

Minden lap a testen keresztül egyenesen a másik oldalig van mérve. A **megengedett legvékonyabb fal** alatti falak pirosak, és az ennek másfélszeresénél vékonyabbak narancssárgák: ezek kinyomtathatók, de gyengék lehetnek.

A vékony területek listában szerepelnek, a legvékonyabbal kezdve, megadva, mennyire vékonyak és mekkorák. A {{ui:Megjelenítés}} gomb a kamerát odafordítja.

A nyomtató nagyjából a fúvókája két szélességénél vékonyabb falat nem tud készíteni: 0,8 mm a szokásos 0,4 mm-es fúvókához (kezdeti érték). A gyantanyomtatók kevesebbre képesek; ellenőrizze a nyomtató útmutatóját.

Nagyon nagy modellnél csak néhány lap bocsát ki sugarat, a többi a szomszédai vastagságát veszi át; a kártya megmondja, hányat mértek meg.

## Kiüregelés

A kiüregelés megtartja a külsőt, és kiveszi a belsejét, a falakat a kért vastagságban hagyva. A gyantanyomatok kevesebb gyantát használnak, és kevésbé húzzák a nyomtatási lapot; a filamentes nyomatok kevesebb műanyagot használnak, mint a kitöltéssel lenne.

1. Jelölje ki a csoportot, komponenst vagy hálót, majd nyissa meg a {{ui:Kiüregelés}} eszközt.
2. Állítsa be a **fal** vastagságát (kezdetben 2 mm), és a **lefolyólyukak** szélességét.
3. Gyantanyomtatásnál kattintson a {{ui:Lefolyólyuk elhelyezése}} gombra, majd kattintson a modell külső oldalán arra a helyre, ahová kerül: lent, a nyomtatási lap közelében, hogy a folyékony gyanta kifolyhasson. Annyit helyezzen el, amennyire szüksége van; mindegyik kék körként látszik, és az {{ui:Eltávolítás}} gombbal listázva van.
4. A {{ui:Előnézet}} megmutatja, mennyit von el a kiüregelés.
5. A {{ui:Kiüregelés}} elvégzi a változtatást: egy lépés, amelyet a {{key:Mod+Z}} visszavon.

Az eredmény egyetlen zárt test, amelyet a 3D-nyomtatási ellenőrzés elfogad: a ModelCraft előbb ellenőrzi, és ha nem menne át rajta, semmit sem változtat. Ahol a modell két falnál vékonyabb, ott tömör marad. Az eredmény olyan csoport, amelynek sík oldalai egyetlen lapok, így a {{ui:Nyomás/húzás}} eszközzel tovább modellezhető; a finom rácson kiüregelt ívelt darab általában túl sok lapot kap ehhez, ezért háló lesz belőle, és az állapotsor megmondja, melyik.

:::tip
A legtöbb alaknál a belső rész a külső, pontosan a fal vastagságával befelé eltolva. Ahol sarkok vagy vékony részek ezt lehetetlenné teszik, a ModelCraft ehelyett finom rácson, a fal távolságában követi a külsőt; a kártya ezután megmondja, mennyire pontos (egy milliméter törtrészén belül).
:::

## Javítás

A {{ui:Javítás}} úgy vizsgálja meg a kijelölt darabot, ahogyan a nyomtató szeletelője teszi, a biztonságosan javíthatókat kijavítja, és felsorol minden javítást:

| Javítja | Mit jelent ez |
|---|---|
| Terület nélküli háromszögek | kimaradnak |
| Kétszer rajzolt háromszög | egy példány marad; a saját magával hátulról hátulra rajzolt (vastagság nélküli) lap törlődik |
| 0,5 mm alatti laza darabok | eltávolítva |
| Rosszul néző háromszögek | a szomszédjaikhoz igazítva elforgatva |
| Lyukak, síkok vagy nem | lezárva új háromszögek legyezőjével minden lyuk középpontjából |
| Befelé fordult darab | kifelé fordítva (egy másik darab belsejében lévő üreg marad, ahogy van: befelé kell néznie) |

A {{ui:A biztonságosak javítása}} mindet egy lépésben elvégzi, amelyet a {{key:Mod+Z}} visszavon, az állapotsor pedig felsorolja az egyes javításokat. A javított darab olyan csoporttá válik, amelynek sík oldalai egyetlen lapok. Ha még mindig nem zárul le (marad valami a **Kézzel teendő** alatt), vagy túl sok lapja lenne egy csoportnak, háló lesz belőle: lapjai háromszögek maradnak, a sík oldalak pedig továbbra is síknak látszanak. Az állapotsor megmondja, melyik. Az {{ui:Átfedő részek egyesítése}} ugyanúgy működik.

Ami biztonságosan nem javítható, a **Kézzel teendő** alatt szerepel, a nézetben lilával jelölve, a {{ui:Megjelenítés}} gombbal:

- **Három vagy több lapot összekötő élek**: döntse el, melyik lap tartozik ide, és törölje a többit.
- **Önmagán átnyúló darab**: mozgassa vagy rajzolja át ezt a részt. Lásd: [Lapok metszése](topic:intersect).
- **Túl nagy vagy túl bonyolult lyukak, amelyek nem zárhatók le**: rajzoljon lapokat, amelyek áthidalják őket.
- **Egymást átfedő külön darabok**: a szeletelők amúgy is egyesítik őket. Az {{ui:Átfedő részek egyesítése}} egy zárt testté teszi őket (újraépíti a lapokat ott, ahol találkoznak, ezért ez külön gomb, amelyet nem végez el automatikusan).

A nyomás/húzás csoportoknál a {{ui:Entitásinfó}} › {{ui:Problémák megjelenítése}} / {{ui:Javítás}} menüben egyenként is javíthat, ez megtartja a megrajzolt lapokat. Lásd: [Testeszközök](topic:solids).

Kapcsolódó: [Modell előkészítése 3D-nyomtatáshoz](topic:print-3d) · [A Kezdő stílus](topic:beginner) · [Még nincs elkészítve](topic:not-built-yet#3d-printing)
