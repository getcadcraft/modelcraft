---
title: Mozgatás, másolás és sorok készítése
summary: Mozgatás kattintással vagy pontos távolsággal, másolás módosító billentyűvel, és egyenletes távolságú másolatsor készítése.
keywords: mozgatás, másolás, kettőzés, sokszorozás, sor, távolság, felosztás, eltolás, nyújtás, oszlopok, ismétlés, többszörös másolás
from: 280245fc
---

{{ui:Mozgatás}} ({{key:M}}) a kijelölt elemeket egyik pontból a másikba viszi. Módosító billentyű tartásakor másolat készül, és másolás után megadhatja, hány további másolatot kér.

## Elem mozgatása

1. Jelölje ki a mozgatni kívánt elemeket (lásd: [Elemek kijelölése](topic:select)). Ha nincs kijelölés, a {{ui:Mozgatás}} azt az elemet veszi, amelyre kattint.
2. Nyomja meg az {{key:M}} billentyűt.
3. Kattintson arra a pontra, ahonnan mozgatni szeretne. Válasszon értelmes pontot, például egy sarkot: ez a pont pontosan oda kerül, ahová a következő kattintással megadja.
4. Mozgassa a mutatót. A kijelölés követi. Úgy fogódzik pontokhoz, élekhez és a piros, zöld és kék irányokhoz, ahogy a vonal is.
5. Kattintson arra a helyre, ahová a pontnak kerülnie kell, vagy adjon meg távolságot, és nyomja meg az {{key:Enter}} billentyűt.

   Az állapotsor tippje a következő mozgatáshoz visszatér: „Kattintson a kiindulási pontra…”.

A beírt távolság a mutatott irányba történik. Megadhat pontos eltolást is, például `<2m,0,0>` (2 m a piros irányban), vagy a kiválasztott pont pontos célját, például `[0,0,0]` (az origó). Lásd: [Pontos méretek megadása](topic:value-box).

Ha csak egy tengely mentén szeretne mozgatni, az első kattintás után nyomjon meg egy nyílbillentyűt: a {{key:Right}} a pirosra, a {{key:Left}} a zöldre, a {{key:Up}} a kékre zárja. Ugyanazt a nyilat újra megnyomva a zár feloldódik.

## Egy alakzat részének mozgatása megnyújtja

A nem csoportosított geometria összefügg. Ha egy lapot vagy néhány élt jelöl ki és mozgat, a hozzájuk kapcsolódó lapok megnyúlnak, hogy követhessék. Egy doboz felső lapját oldalra húzva a doboz megdől; a tető egyik élét mozgatva a tető hajlásszöge változik. Azok a lapok, amelyek már nem maradhatnak síkban, háromszögekre törnek.

Ha egy egész objektumot anélkül szeretne mozgatni, hogy megnyúlna, előbb jelölje ki az egészet (kattintson rá háromszor), vagy – ami jobb – készítsen belőle csoportot vagy komponenst (lásd: [Csoportok és komponensek](topic:groups-components)).

## Másolás

1. Jelölje ki a másolni kívánt elemeket.
2. Nyomja meg az {{key:M}} billentyűt.
3. Tartsa lenyomva a {{key:Ctrl}} (vagy az {{key:Alt}}) billentyűt, és kattintson arra a pontra, ahonnan mozgatni szeretne. Macen a {{key:Mod}} vagy az {{key:Alt}} ugyanezt teszi. Az állapotsor tippje ezt írja: „A Ctrl helyette mozgat”, ami azt jelenti, hogy másolja az elemet.

   Az első kattintás után a {{key:Ctrl}} vagy az {{key:Alt}} billentyűt le is nyomhatja és el is engedheti, így mozgatás és másolás között válthat.

4. Kattintson arra a helyre, ahová a másolat kerül, vagy adjon meg távolságot, és nyomja meg az {{key:Enter}} billentyűt.

   Az eredeti a helyén marad, a másolat lesz a kijelölt.

## Másolás, kivágás, beillesztés és kettőzés

- A {{key:Mod+C}} másolja a kijelölést, a {{key:Mod+X}} kivágja (másolja, majd törli). A {{ui:Másolás}} és a {{ui:Beillesztés}} gomb is megvan az eszköztár {{ui:Szerkesztés}} csoportjában, a mellettük lévő {{ui:Továbbiak}} gomb pedig kivágást, helyben beillesztést és kettőzést kínál.
- A {{key:Mod+V}} beilleszt: a másolat körvonala követi a mutatót, a többi eszközhöz hasonlóan fogódik, és egy kattintással a legalsó sarkával kerül a helyére. Az {{key:Esc}} megszakítja.
- A {{key:Mod+Shift+V}} helyben illeszt be, pontosan ott, ahonnan a másolat származik – hasznos, ha valamit egy megnyitott csoportba szeretne áthelyezni.
- A {{key:Mod+D}} ({{key:Shift+D}} a Modeler stílusban) kettőz: a másolat azonnal elkészül, és a mutatóval együtt mozog. Kattintással helyezze le, adjon meg távolságot, vagy az {{key:Esc}} billentyűvel ejtse el. Közvetlenül utána a `3x` beírásával több másolatot kérhet egymás után.

A beillesztett csoport új csoporttá válik. A beillesztett komponens ugyanannak a komponensnek egy másik elhelyezése, így ha az egyiket szerkeszti, mindegyik változik. A másolatok egy másik ModelCraft-lapba is beilleszthetők ebben a böngészőben (ott új definíciókként érkeznek).

## Másolatok sora

Közvetlenül egy másolás után, miközben a {{ui:Mozgatás}} még az aktív eszköz:

- Írja be a `3x` (vagy a `*3`) szöveget, és nyomja meg az {{key:Enter}} billentyűt: három másolat készül egymás után, mindegyik az első másolattal azonos távolságra. Az eredetin kívül három új másolatot kap.
- Írja be a `/3` szöveget, és nyomja meg az {{key:Enter}} billentyűt, ha inkább osztani szeretne: három másolat egyenletesen oszlik el az eredeti és az első másolat helye között, az utolsó pont a helyén. Ezzel egy szakasz kitölthető: helyezzen egy másolatot a távoli végére, majd osztson.

Utána más számot is beírhat: a `5x` lecseréli a `3x` sort. Az állapotsor emlékeztet: „Lemásolva. A 3x beírásával több másolat készül egymás után, a /3 beírásával a távolság osztható.”

### Példa: oszlopok 6 méterenként

1. Készítsen egy oszlopot, és alakítsa komponenssé ({{key:G}}), hogy a másolatok később együtt változzanak.
2. Nyomja meg az {{key:M}} billentyűt, tartsa lenyomva a {{key:Ctrl}} billentyűt, és kattintson az oszlop alapsarkára.
3. Mozgassa a mutatót a piros tengely mentén, írja be a `6m` értéket, majd nyomja meg az {{key:Enter}} billentyűt.
4. Írja be a `4x` értéket, és nyomja meg az {{key:Enter}} billentyűt. Így öt oszlopa lesz, egymástól 6 m-re.

## Tudnivalók

- A második kattintás előtt az {{key:Esc}} billentyűvel megszakíthatja a műveletet; minden visszakerül az eredeti helyére.
- A {{ui:Mozgatás}} a szerkesztett csoporton belül működik. Egy egész csoport mozgatásához előbb zárja be, majd kívülről jelölje ki.
- Ha a **{{ui:Ütközés}}** be van kapcsolva (jobb alul, és a [ModelCraft beállításai](topic:settings#solids-stop-where-they-touch) között), a mozgatás ott megáll, ahol a kijelölés egy másik testhez ér, ahelyett hogy áthaladna rajta. Ha egy mozgatásnál át kell haladnia egy testen, kattintson az {{ui:Ütközés}} gombra a kikapcsoláshoz.
- Másolat másik csoportba helyezéséhez: másolja le, nyissa meg a másik csoportot, majd illessze be ({{key:Mod+Shift+V}} ugyanazon a helyen tartja).
