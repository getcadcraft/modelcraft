---
title: Forgatás és léptékezés
summary: Forgatás egy pont körül kattintással vagy fokok megadásával, és egyenletes átméretezés tényezővel.
keywords: léptékezési fogópontok, húzás, nem egyenletes, tengelyenként, tükrözés, tükrözött másolat, tükrözés mentén, forgatás, fordítás, szög, fok, szögmérő, léptékezés, átméretezés, nagyítás, kicsinyítés, tényező, egyenletes léptékezés
from: 45cdcb49
---

## Forgatás

{{ui:Forgatás}} ({{key:Q}}) a kijelölést egy középpont körül fordítja el. Három kattintás kell: a középpont, a kezdő irány és a végső irány.

1. Jelölje ki, amit el szeretne fordítani. Ha nincs kijelölés, a Forgatás az első kattintott objektumot veszi.
2. Nyomja meg a {{key:Q}} billentyűt. Egy gyűrű követi a mutatót, és mutatja azt a síkot, amelyben fordítani fog.
3. Kattintson a forgatás középpontjára.
   - A talajon vagy üres térben a gyűrű lapos (kék): a fordulat függőleges tengely körül történik, mint egy épület elforgatása a telken.
   - Egy felületen a gyűrű annak a felületnek a síkjában fekszik: a fordulat a felület saját iránya körül történik. Falra kattintva vízszintes tengely körül forgathat.
4. Kattintson egy pontot, amely megadja a kezdő szöget, például a forgatandó objektum egyik élén.
5. Mozgassa a mutatót a középpont körül. A szög a csúcsban és az {{ui:Szög}} értékmezőben látszik. Ha közel ér egy 15°-os lépéshez, a szög ahhoz igazodik.
6. Kattintson a befejezéshez, vagy írja be a szöget fokban, majd nyomja meg az {{key:Enter}} billentyűt: `90`, `45`, `-30`.

   A pozitív szögek a gyűrű irányából nézve az óramutató járásával ellentétesen fordítanak.

Forgatás közben nyomja meg a {{key:Ctrl}} (vagy {{key:Alt}}) billentyűt, hogy **másolatot** fordítson, az eredetit pedig helyben hagyja, ahogy a mozgatásnál is; a tipp megmutatja, hogy a másolás be van-e kapcsolva, a billentyű újbóli megnyomására pedig kikapcsol. Forgatott másolat után közvetlenül írja be a `3x` szöveget, ha több másolatot szeretne ugyanazzal a középponttal.

A mozgatáshoz hasonlóan az összefüggő geometria egy részének forgatása csavarja a hozzá kapcsolódó lapokat. Az egész elfordításához előbb csoportosítsa az objektumokat.

:::note
A tipp szerint a nyílbillentyűk választják ki a forgatási tengelyt, de ebben a verzióban az első kattintás előtt inkább a nézetet forgatják. A tengely kiválasztásához kattintson a középpontra egy olyan felületen, amely a kívánt irányba néz. Lásd: [Még nincs elkészítve](topic:not-built-yet).
:::

## Léptékezés

{{ui:Léptékezés}} ({{key:S}}) átméretezi a kijelölést. Először jelölje ki, amit át szeretne méretezni, majd nyomja meg az {{key:S}} billentyűt: kis négyzetek (fogópontok) jelennek meg a doboz sarkain, éleinek és oldalainak közepén.

### Nyújtás vagy léptékezés fogópontokkal

- A **sarok** fogópont minden irányban egyenletesen léptékez, a szemközti sarok körül.
- Az **oldal** közepén lévő fogópont csak abban az irányban nyújt, a szemközti oldal körül: hosszabbá teszi a dobozt anélkül, hogy magasabb lenne.
- A **doboz élének** közepén lévő fogópont a rá merőleges két irányban nyújt.
- Tartsa lenyomva a {{key:Ctrl}} billentyűt, amikor egy fogópontra kattint, ha a doboz közepe körül szeretne léptékezni.

Kattintson egy fogópontra, mozgassa a mutatót, majd kattintson újra; vagy kattintson a fogópontra, írjon be egy tényezőt (`2` duplázza, `0.5` felezi), és nyomja meg az {{key:Enter}} billentyűt. Irányonként külön tényezőt úgy adhat meg, hogy hármat ír: piros, zöld és kék sorrendben: `2,1,0.5`. Nyitott csoporton belül az irányok a csoport saját irányai.

### Léptékezés tetszőleges pont körül

Bármely fogóponton kívül kattintva egyenletesen léptékezhet egy saját pont körül. Három kattintás kell:

1. Jelölje ki, amit át szeretne méretezni. Ha nincs kijelölés, a Léptékezés az első kattintott objektumot veszi.
2. Nyomja meg az {{key:S}} billentyűt.
3. Kattintson arra a pontra, amelynek a helyén maradnia kell (nem fogópont), például egy alsó sarokra.
4. Kattintson egy referenciapontra. Az első ponttól mért távolsága 1×-es tényezőnek számít.
5. Mozgassa a mutatót az első pont felé vagy attól el. A tényező a csúcsban és az {{ui:Léptékezés}} értékmezőben látszik.
6. Kattintson a befejezéshez, vagy írjon be egy tényezőt, és nyomja meg az {{key:Enter}} billentyűt: `2` duplázza a méretet, `0.5` felezi.

### Pontos méretre léptékezés

Ha valaminek pontos hosszúságot szeretne adni, számítsa ki a tényezőt: új hossz osztva jelenlegi hosszal. A három kattintásos módban az értékmező számol, így a `4.2/3.6` kifejezést beírva egy 3,6 m-es falat 4,2 m hosszúra állíthat. Egy fogópont értékmezője csak egyszerű számokat fogad el: előbb számítsa ki a tényezőt (4,2 osztva 3,6-tal, kb. 1,1667). Előbb jelölje ki az élt, hogy az aktuális hosszát lássa az {{ui:Entitásinfó}} részben.

### Rossz méretben érkező import javítása

Az OBJ-fájloknak nincs mértékegységük, ezért a milliméterben rajzolt modell 1000-szer nagyobbként érkezik. Jelölje ki az importált csoportot, nyomja meg az {{key:S}} billentyűt, kattintson egy sarok fogópontra, írja be a `0.001` értéket, majd nyomja meg az {{key:Enter}} billentyűt. Hüvelykben rajzolt modell esetén a `0.0254` értéket írja be.

## Tudnivalók

- A három kattintással, egy pont körül végzett léptékezés egyenletes. Ha csak egy irányba szeretne nyújtani, használjon oldal- vagy élfogópontot (lásd fent).
- Egy csoport vagy komponens léptékezése a léptékezett példányt változtatja meg; a komponens többi példánya megtartja a méretét.
- Az utolsó kattintás előtt nyomja meg az {{key:Esc}} billentyűt a megszakításhoz.

## Tükrözés

{{ui:Szerkesztés}} › {{ui:Továbbiak}} › {{ui:Tükrözés a piros mentén}}, {{ui:Tükrözés a zöld mentén}} vagy {{ui:Tükrözés a kék mentén}} a kijelölést helyben tükrözi a doboza közepén keresztül: a bal kezes lépcsőből jobb kezes lesz. A lapok kifelé néznek, a csoportot vagy komponenst pedig egészben tükrözi (belsejét nem írja át).

{{ui:Tükrözött másolat a piros mentén}} (és a zöld, illetve a kék változata) az eredetit helyben hagyja, és egy tükrözött másolatot tesz mellé, a kijelölés dobozának túloldalán: egy ajtópár másik szárnyát, egy épület másik szárnyát. Az ott érintkező laza geometria az eredetihez csatlakozik, ahogy az érintkező geometria mindig: ha el szeretné választani őket, előbb csoportosítsa az eredetit.

Nyitott csoporton belül a piros, zöld és kék a csoport saját tengelyei.
