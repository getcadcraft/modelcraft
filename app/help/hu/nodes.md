---
title: Csomópontok: modell építése összekötéssel
summary: Számok pontokba, pontok görbékbe, görbék felületekbe kapcsolhatók. Egy szám megváltoztatásakor minden utána következő újraépül. Minden csomópont egy CraftScript-sor is, a gráf pedig a fájlban marad meg.
keywords: csomópontok, csomópont-szerkesztő, vizuális szkriptelés, paraméteres, gráf, vezetékek, portok, szabad formájú, nurbs, loft, kihúzás, forgatás, kör, görbe, felület, sorozat, tartomány, véletlen, lista, szkript, craftscript, grasshopper
from: 9c8e254f
---

A **Csomópontok** szerkesztő úgy épít geometriát, hogy dobozokat köt össze. Minden doboz (csomópont) egy kis feladatot lát el: számot, pontot, kört vagy loftot készít. Az egyik eredményét a következő csomópont bemenetére köti, és ha az elején lévő számot megváltoztatja, a modell követi.

Nyissa meg a jobb oldali panelről: {{ui:Csomópontok}} › {{ui:Csomópontok…}}. Az a fájl, amelyben már van gráf, magától megnyitja. Ez egy ablak a 3D nézet felett: a címsorát húzva mozgathatja, a sarkát húzva átméretezheti.

## Kötés

1. Válasszon csomópontot a bal oldali listából (a keresőmezőbe írva szűkítheti; a <kbd>Enter</kbd> billentyű hozzáadja az első találatot). A csomópont a vászon közepén jelenik meg.
2. Húzzon egy kerek **kimeneti** pontból az egyik csomópont jobb oldalán egy másik csomópont bal oldali kerek **bemeneti** pontjára. A pont zöldre vált, ha illik, és pirosra, ha nem; vigye rá a mutatót, és megtudja az okát.
3. Ha egy bemenet nincs bekötve, egy begépelhető értékmező jelenik meg. Írjon be egy számot, és nyomja meg a <kbd>Tab</kbd> billentyűt: az eredmény újraépül.
4. A csomópont címsorában lévő kis kör a **szeme**. Ha a szem be van kapcsolva, a csomópont a 3D nézetben is megjelenik: a görbék vonalként, a felületek árnyékolva, a pontok pöttyként.

A csomópontot a címsorával húzza. A háttér húzásával eltolhatja a vásznat, a görgővel nagyíthat. A <kbd>Delete</kbd> törli a kijelölt csomópontot. A {{ui:Rendezés}} oszlopokba rendezi a csomópontokat, az {{ui:Illesztés}} mindet a látómezőbe hozza, a {{ui:Visszavonás}} és az {{ui:Ismétlés}} lépésenként visszavonja és megismétli a szerkesztéseit.

## Típusok és mértékegységek

A portoknak típusuk van: szám, igen/nem, pont, vektor, görbe, felület, háló, test, vagy „geometria”, ami ezek bármelyike lehet. Pont bekötheti vektor bemenetre, és vissza is. A számok mértékegységgel rendelkeznek: a **hossz** milliméterben, a **szög** fokban adott. Hosszúság nem köthető szögbemenetre, és a hossz szorozva hosszal (terület) elutasításra kerül, így a rossz vezeték már a kötéskor megakad.

Egy négyzet alakú pont **lista**. Ha egy lista egyértékű bemenetre jut, a csomópont minden elemre egyszer lefut, és az eredménye lista lesz. A rövidebb lista utolsó eleme ismétlődik. Például egy **Sorozat** csomópont magasságai a **Mozgatás** csomópont bemenetére köthetők, ami egymásra rakott másolatok sorát hozza létre.

## Test- és logikai csomópontok

A **Testek** csoport zárt testeket készít ugyanazokból a pontos felületekből, mint a Felületek panel: **Doboztest**, **Hengertest** és **Gömbtest** (méretek mm-ben), **Egyesítés**, **Kivonás** és **Metszés** (a második test az elsőből vonódik le; a tűrés azt mondja meg, mennyire térhetnek el a testmotor háromszögei a pontos felületektől), **Lapok közötti lekerekítés** (a lapok a testen belüli sorszámukkal, az első az 1; egy sugár, és 0-nál nagyobb értéknél egy sugár a végén), **Test térfogata** (mm³) és **Test hálóvá** (megtekintéshez vagy rögzítéshez). A testnek saját portípusa van: szám vagy pont nem köthető test bemenetre, és a pont piros marad. A logikai és a lekerekítő csomópontok a program saját testmotorját használják, amely az editor első megnyitásakor töltődik be.

## Hibák

Ha egy csomópont nem tudja elvégezni a feladatát, a neve alatt, pirosan leírja az okát („A sugárnak nullánál nagyobbnak kell lennie.”), a utána lévő csomópontok pedig várakoznak. Ugyanez az üzenet a Problémák panelen is megjelenik mint probléma, így onnan is megtalálhatja.

## Minden csomópont egy szkriptsor

Nyomja meg a {{ui:Szkript}} gombot, hogy a gráfot CraftScript formában lássa: csomópontonként egy sor, például `n3 = nd_circle(n2, n1, [0 0 1]);`. Szerkessze a szöveget, majd nyomja meg a {{ui:Gráf készítése ebből a szkriptből}} gombot, hogy visszaálljon gráfnak. Ugyanezek az `nd_` függvények működnek a PartCraft CraftScript-jeiben, így a gráf ott is futtatható, ciklusban ismételhető vagy tesztelhető. A véletlen számoknak mindig van **magjuk** (seed), így ugyanaz a gráf minden számítógépen ugyanazt az eredményt adja.

## Fájlba mentve

A gráf a modellfájlban mentődik. A csomópontok saját görbéket, felületeket és hálókat készítenek: a modell lapjait nem változtatják meg, amíg nem kérik.

## Rögzítés a modellbe

Kapcsolja be annak a csomópontnak a szemét, amely felületet vagy hálót készít, majd a Csomópontok ablakban nyomja meg a {{ui:Rögzítés a modellbe}} gombot. Minden megjelenített felület vagy háló a modellben lapcsoportként jelenik meg, méterben, és úgy szerkeszthető, mint bármely más elem. Ez egy visszavonási lépés. A gráf megmarad, de a másolat már nem követi: ha egy számot megváltoztat, újra rögzítsen egyet. A pontok és görbék nem testek, ezért kimaradnak, az üzenet pedig megmondja, hányat hagyott ki.
