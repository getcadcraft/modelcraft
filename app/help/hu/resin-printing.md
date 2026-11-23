---
title: Szeletelés gyantás nyomtatóhoz
summary: Szeletelje fel a nyomtatási tálcát gyantás nyomtatóhoz, üregesítse ki és támassza alá az alkatrészt, nézze át a rétegeket, mentse a nyomtató fájlját, és keresse meg az expozícióját az expozíciós teszttel.
keywords: gyanta, dőlés javasolása, szívókorong, leválasztási erő, merevítés, gyantás nyomtatás, sla, msla, dlp, szeletelő, goo, sl1, ctb, cbddlp, chitubox, anycubic, pwmx, pws, elegoo, üreges, szellőzőnyílás, alapréteg, támaszték, expozíciós teszt, expozíciós létra, kalibrálás, rétegek, bővítmény
from: 8cc12858
---

A gyantás bővítmények a nyomtatási tálcán lévő tartalmat rétegképekre szeletelik a nyomtató kijelzőjéhez, és elmentik a fájlt, amelyet a nyomtató beolvas. Ingyenesek, nincs zárolt funkció, és addig ki vannak kapcsolva, amíg be nem kapcsolja őket.

:::note
Még nem töltöttek be fájlt valódi nyomtatóba. A fájlokat csak a CadCraft saját olvasói ellenőrizték vissza, a támasztékok pedig újak. Ellenőrizze a rétegeket, és az első nyomtatást végezze el kézzel.
:::

## Teendők

Szeletelje fel az alkatrészt gyantához, ellenőrizze a rétegeket, mentse a fájlt, és másolja át a nyomtatóra.

## Lépések

1. Nyissa meg a {{ui:Beállítások}} › {{ui:Bővítmények}} menüt, és kapcsolja be a gyantás szeletelő bővítményt, valamint a nyomtatója fájlformátumának bővítményét (Elegoo GOO, SL1, Chitubox vagy Anycubic). A nyomtatási szakasz kártyáján a {{ui:Gyantás nyomtatás hozzáadása}} gombot is megnyomhatja.
2. Helyezze az alkatrészt a tálcára, ahogy a [Elemek elhelyezése a nyomtatási tálcán](topic:print-stage) részben látható, majd a **Nyomtatás ezzel** mellett válassza a {{ui:Gyanta}} lehetőséget.
3. A **Gyantanyomtatás beállításai** alatt válassza ki a **Nyomtató** és a **Gyanta** beállítást. A kártya megmutatja a képernyő méretét pixelben. Ezek a gyártók közzétett méretei, ellenőrizze a sajátját; az Egyéni alatt szerkesztheti őket.
4. Állítsa be a **Rétegvastagság (mm)**, az **Expozíció (s)** és az **Alsó expozíció (s)** értékét. Az egyes gyanták számai csak kiindulási pontok.
5. Ha üreges alkatrészt szeretne, jelölje be az **Üreges, szellőzőnyílással** jelölőnégyzetet, és állítsa be a **Fal (mm)** és a **Lyuk szélessége (mm)** értékét.
6. Jelölje be a **Támasztékok és alapréteg** lehetőséget, és válassza ki a **Támaszték sűrűsége** értéket: Könnyű, Közepes vagy Nagy.
7. Válassza ki a **Fájlformátumot**. Ha a kártya szerint még nincs hozzáadva egy sem, nyomja meg a „Hozzáadás” feliratú gombot, és utána a formátum nevét.
8. Nyomja meg a {{ui:Rétegek előnézete}} gombot, és mozgassa a **Réteg** csúszkát. A lebegő részek körbe vannak rajzolva. Az alatta lévő sor a rétegek számát, az időt, valamint a gyanta mennyiségét ml-ben és grammban, továbbá a költséget adja meg.
9. Nyomja meg a {{ui:A nyomtatási fájl mentése}} gombot, ellenőrizze az összefoglalót, majd nyomja meg a {{ui:Mentés}} gombot. Másolja át a fájlt a nyomtatóra.

## Dőlés, szívókorongok, merevítések és leválasztási érték

Ez a négy becslés az alkatrész alakján alapul. Egyiket sem próbálták ki valódi nyomtatón, ezért mindegyiket tippként kezelje, és nézze meg a rétegeket.

1. Nyomja meg a **Dőlés (fok)** alatt lévő {{ui:Dőlésszög javaslata}} gombot. A CadCraft 0 és 60 fok közötti dőléseket próbál ki, és azt választja, amelynél a legnagyobb réteg a lehető legkisebb, a legkevesebb túlnyúló felület van, és nincs szívókorong. Beállítja a **Dőlés (fok)** értékét, és leírja, mit talált. A pontozás súlyait mi határoztuk meg, nem a nyomtatógyártó.
2. A {{ui:Rétegek előnézete}} után a figyelmeztetés megnevezi azokat az üregeket, amelyek csak a fólia felé nyílnak. Egy ilyen üreg szívóerőt tarthat, amikor egy réteg leválik. Döntse meg az alkatrészt, vagy adjon hozzá egy lyukat. A figyelmeztetésben megadott cellaméretnél keskenyebb zsebeket nem érzékeli.
3. Ha a **Támasztékok és alapréteg** be van kapcsolva, jelölje be a **Magas támaszték merevítése** lehetőséget, hogy keresztirányú merevítők kerüljenek a magas, vékony oszlopok közé.
4. Az előnézet alatti sor a legnagyobb réteget adja meg cm2-ben. Erőt csak akkor mutat, ha megad egy **Mért leválasztási feszültség** értéket az **Alsó rétegek, emelés és sebességek** alatt. Saját mért érték nélkül csak a területet mutatja.

## Az expozíció megkeresése

1. Kapcsolja be az expozíciós teszt bővítményt a {{ui:Beállítások}} › {{ui:Bővítmények}} menüben.
2. Nyomja meg a {{ui:A tesztalkatrész elhelyezése a tálcán}} gombot.
3. Nyomja meg az {{ui:Expozíciós létra mentése}} gombot. Egy zip fájlban minden expozícióhoz kap egy fájlt.
4. Nyomtassa ki az egyes fájlokat ugyanazzal a gyantával, és tartsa meg azt az expozíciót, ahol a vékony oszlopok és a nyitott lyukak a legélesebbek.

## Megjegyzések

- A szeletelés a háttérben fut, így az oldal nagy tálca esetén is használható marad.
- A nem zárt testként szereplő részek kimaradnak, és a kártya ezt jelzi.
- Ha a nyomtató nem fogadja el a fájlt, a fájlformátum kártyáján vannak lehetőségek arra, amit a formátum nyitva hagy. Módosítson egyet, mentse újra, és jelezze nekünk, melyik vált be.
- Az Anycubic 517-es és 518-as verziói nem készülnek el.
