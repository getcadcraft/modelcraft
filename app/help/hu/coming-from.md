---
title: Más modellezőkből érkezőknek
summary: Hogyan feleltethetők meg a tolással és húzással végzett modellezés szokásai a ModelCraft-nak, billentyűnként, és azok az eltérések, amelyek meglepik az embereket.
keywords: váltás, átállás, ismerős, eltérések, tolás húzás modellező, skp, billentyűparancsok, szokások, összehasonlítás, mérőmező, objektumlista, entitásinfó
from: 74ffd4ac
---

Ha SketchUp-ban modellezett, a ModelCraft ismerősnek fog tűnni: ugyanaz a lapok és a tolás/húzás elve, ugyanazok az eszközbetűk, egy értékmező, amelybe kattintás nélkül írhat, következtetés a piros, zöld és kék tengelyekkel, csoportok, komponensek, egy objektumlista, Entitásinfó és jelenetek. Ez az oldal felsorolja, mi vihető át közvetlenül, és – ami fontosabb – mi nem.

## Átvihető szokások

| Ezt szokta | A ModelCraft-ban |
|---|---|
| A Space a Kijelöléshez, L a Vonalhoz, R a Téglalaphoz, C a Körhöz | Ugyanaz: {{key:Space}}, {{key:L}}, {{key:R}}, {{key:C}} |
| P a Tolás/húzáshoz, M a Mozgatáshoz, Q a Forgatáshoz, S a Léptékezéshez, E a Radírhoz, T a Mérőszalaghoz | Ugyanaz: {{key:P}}, {{key:M}}, {{key:Q}}, {{key:S}}, {{key:E}}, {{key:T}} |
| O a Körbeforgatáshoz, H a Eltoláshoz, Z a Nagyításhoz, Shift+Z a Nagyítás a kiterjedésre | Ugyanaz: {{key:O}}, {{key:H}}, {{key:Z}}, {{key:Shift+Z}} |
| G komponens létrehozásához | Ugyanaz: {{key:G}}. A {{key:Shift+G}} csoportot hoz létre |
| Beírás a Mérőmezőbe kattintás nélkül | Ugyanaz, az alsó értékmezőben. Nyomja meg az {{key:Enter}} billentyűt |
| `4m,3m` beírása téglalaphoz, `12s` oldalakhoz | Ugyanaz |
| `3x` vagy `/3` beírása egy másolásos mozgatás után | Ugyanaz; a `*3` is működik |
| `[x,y,z]` vagy `<dx,dy,dz>` beírása pontnak vagy eltolásnak | Ugyanaz |
| Puszta szám beírása hüvelykes építészeti modellben, hüvelyk lesz belőle | Ugyanaz |
| Középső gombbal húzás a körbeforgatáshoz, Shift+középső gomb a mozgatáshoz, görgő a kurzor helyén nagyít | Ugyanaz |
| Dupla kattintás a Tolás/húzással a távolság megismétléséhez | Ugyanaz |
| Nyíl-billentyűk a piros, zöld, kék és a párhuzamos záráshoz | Ugyanaz: {{key:Right}} piros, {{key:Left}} zöld, {{key:Up}} kék, {{key:Down}} párhuzamos |
| Shift nyomva tartása egy következtetés zárolásához | Ugyanaz |
| Ctrl (Mac-en Option) a mozgatás közbeni másoláshoz | {{key:Ctrl}}, {{key:Mod}} vagy {{key:Alt}}, bármely számítógépen |
| Shift a kapcsoláshoz, Ctrl a hozzáadáshoz, Shift+Ctrl az eltávolításhoz a kijelölésből | Ugyanazok a billentyűk; Mac-en ott, ahol Ctrl szerepel, a {{key:Mod}} billentyűt használja |
| Balról jobbra ablak, jobbról balra metszés | Ugyanaz |
| Méretezés eszköz a hosszok jelöléséhez | {{key:D}}, és még több: írjon új hosszt egy mérethez, és a modell ahhoz méreteződik. Lásd [Méretezés és átméretezés](topic:dimensions) |
| Lapra dupla kattintás a lap és az élei, hármas kattintás az összes összefüggő elemhez | Ugyanaz |
| Csoportra dupla kattintás a szerkesztéshez; Esc a bezáráshoz | Ugyanaz |
| Vonal húzása egy lapon annak felosztásához; egy él törlése két egysíkú lap között a összeolvasztásukhoz | Ugyanaz |
| Ablak téglalapjának áttolása egy falon a kivágáshoz | Ugyanaz |
| Hátoldalak kék-szürkével; Lapok megfordítása | Ugyanaz a szín; a {{ui:Lap megfordítása}} az {{ui:Entitásinfó}} panelen |
| Jelenetek lapokként a nézet fölött, Page Up és Page Down | Ugyanaz, a {{ui:Jelenetek}} panelen lévő {{ui:Lejátszás}} gombbal |
| Árnyékok a dátumból, időből, szélességből és hosszúságból, észak zölddel | Ugyanaz, a {{ui:Stílus}} panelen |

## Eltérések, amelyek meglepik az embereket

### A mentés letöltés

Nincs olyan Mentés, amely felülírja a megnyitott fájlt, nincs névvel ellátott Mentés másként párbeszédpanel, nincs automatikus mentés és nincs biztonsági másolat. A {{ui:Mentés}} ({{key:Mod+S}}) minden alkalommal új `.modelcraft` fájlt tölt le, általában a letöltések mappájába. Gyakran mentsen, és nevezze át vagy helyezze át a fájlokat saját magának. Lásd [Megnyitás, mentés, importálás és exportálás](topic:files).

### Importálja a .skp fájlokat, de nem menti őket

A {{ui:Importálás}} a SketchUp-fájlokat a ModelCraft saját olvasójával, az oldalon belül olvassa be: csoportok, komponensek, színek, lapokra került textúrák, címkék és lágy élek átkerülnek. Lásd [Fájlformátumok részletesen](topic:formats#skp-files). A ModelCraft nem tud `.skp` fájlt menteni: visszavitelhez exportáljon Collada formátumot a ModelCraft-ból, és importálja a SketchUp-ba.

### Nincs jobb gombos menü

A jobb gombos húzás a nézetet mozgatja; a jobb kattintás nem csinál semmit. A helyi menüben várható parancsok az {{ui:Entitásinfó}} panelen találhatók ({{ui:Lap megfordítása}}, {{ui:Szerkesztés}}, {{ui:Felbontás}}, {{ui:Egyedivé tétel}}, {{ui:Komponens létrehozása}}), valamint az eszköztár {{ui:Rendezés}} csoportjában.

### A mértékegységek az állapotsorban vannak

Nincs Modellinformáció vagy sablonválasztás. A mértékegység-választó jobb alul van. Az új modell a böngésző nyelvi beállítása szerint az Egyesült Államokban láb és hüvelyk, máshol milliméter egységben indul. A tizedesjegy mindig pont: `2.5m`, sosem `2,5m`, mert a vessző mindig az értékek elválasztására szolgál.

### A festésnek saját anyagai vannak

A {{ui:Festés}} ({{key:B}}) egyszínű festékkel és a {{ui:Anyagok}} szakaszban lévő anyagokkal fest: tégla, burkolat, tetőfedés, fa, kő és további anyagok, amelyeket a ModelCraft rajzol. Saját képet még nem tud anyagként betölteni; a betöltött fájlokkal érkező textúrák megmaradnak. Lásd [Festés színekkel és anyagokkal](topic:paint).

### A léptékezés egyenletes, fogópontok nélkül

A léptékezés nem mutat fogópontokkal ellátott dobozt. Kattintson arra a pontra, amely helyben marad, egy vonatkoztatási pontra, majd az új méretet vagy egy beírt szorzót adja meg. Mindig egyenletesen léptékez minden irányban. Egy irányban nyújtáshoz tolja/húzza vagy mozgatja a lapot, vagy az {{ui:Entitásinfó}} panelen írja újra a csoport szélességét, mélységét vagy magasságát, illetve [átméretezze méretezéssel](topic:dimensions).

### A forgatás a kattintás helyéből választja ki a síkját

Nincs olyan szögmérő, amely a lapokhoz tapad, és amelyet a nyíl-billentyűkkel kijelölve választhatna síkot. Kattintson a középpontra egy lapon, hogy az adott lap síkjában forgasson, vagy a talajon, hogy a függőleges tengely körül forgasson. Az első kattintás előtt a nyíl-billentyűk a nézetet forgatják.

### Következtetés az átvitt pontokból

A ModelCraft a **kezdőpontjából** indulva a tengelyirányokhoz tapad, illetve a mutató alatt lévő pontokhoz, élekhez és lapokhoz. Nem követ irányt olyan pontból, amelyen csak áthaladt (a pontozott „pontból” következtetés). Egy távoli sarokkal való igazításhoz zárolja a tengelyt egy nyíl-billentyűvel, majd vigye a mutatót a sarokra: a zárolt pont odacsúszik, hogy igazodjon hozzá. Vagy helyezzen el egy [segédvonalat](topic:guides-measure).

### A párhuzamos az indítás előtt átvitt élt használja

A párhuzamos és merőleges következtetés az utolsó élt használja, amelyet a mutató **az első kattintás előtt** keresztezett, nem a rajzolás közben átvitt éleket. Lásd [Következtetés és tapadás](topic:inference#parallel-and-perpendicular).

### A csoport másolatai össze vannak kötve

Egy csoport másolása a {{ui:Mozgatás}} paranccsal a csoport egy második elhelyezését hozza létre, így az egyik szerkesztése mindkettőt változtatja, ahogy a komponenseknél is. A SketchUp a csoportokat függetlenné teszi. Lásd [Hibaelhárítás](topic:troubleshooting#editing-one-group-changed-another).

### A Space nem mozgatja a nézetet

A {{key:Space}} a {{ui:Kijelölés}} eszközt választja, ahogy a SketchUp-ban. Néhány más webes alkalmazásban a Space nyomva tartása mozgatja a nézetet; itt nem. Helyette jobb gombbal húzzon.

### A kétujjas görgetés nagyít

Érintőpadon állítsa a {{ui:Beállítások}} › {{ui:ModelCraft}} › Görgetés beállítását érintőpadra: két ujjal körbeforgat, a {{key:Shift}} és két ujjal mozgat, a csippentés nagyít. Lásd [Körbeforgatás, mozgatás és nagyítás](topic:orbit-pan-zoom#on-a-trackpad).

Ha a keze inkább a Blender billentyűit ismeri, mint a SketchUp-ét, válassza a {{ui:Modeler}} menüstílust: a {{key:G}}, {{key:R}} és {{key:S}} egyszerre a kijelölésen hat, az {{key:E}} kihúzza (tolás/húzás), a {{key:Shift+D}} kettőz, és egy fejléc menüsor (Fájl, Szerkesztés, Nézet, Kijelölés, Hozzáadás, Objektum, Háló) váltja fel az eszköztárat. SketchUp-ból érkezve a {{ui:Push-pull}} stílus ugyanazokkal az eszközbetűkkel a sajátjához hasonló menüsort ad. Lásd [Menük, billentyűk és egér](topic:menus-keys-and-mouse).

### Egymásba tolt testek nem vágják egymást

A tolás/húzás a mögötte lévő lapon keresztül vág ugyanazon objektumon belül, de két külön testet, amelyeket egymásba tolnak, nem metsz. Nincs Lapok metszése és nincs Testeszközök.

### Ami hiányzik

A szabadkézi rajzolás, a Vágás, az Osztás és a Külső héj, a saját képes anyagok, a bővítmények és a lapok elrendezőeszköze nincs benne ebben a verzióban. A [Még nincs kész](topic:not-built-yet) felsorolja, mit használjon helyette.

## A böngésző által megtartott billentyűparancsok

A ModelCraft böngészőben fut, így néhány billentyűparancs a böngészőé, nem az alkalmazásé. A {{key:Mod+N}} böngészőablakot nyit (használja a {{ui:Új}} parancsot), a {{key:Mod+W}} bezárja a lapot. Ha vannak nem mentett módosítások, a böngésző megkérdezi, mielőtt bezárja. Lásd [Billentyűk, egér és érintőpad](common:keys#shortcuts-the-browser-keeps).
