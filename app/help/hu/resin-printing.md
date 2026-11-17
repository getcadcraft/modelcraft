---
title: Szeletelés gyantás nyomtatóhoz
summary: Szeletelje a nyomtatási stage tárgyasztalát gyantás nyomtatóhoz, üresítse ki és támassza meg az alkatrészt, nézze át a rétegeket, mentse a nyomtató fájlját, és keresse meg az expozíciót az expozíciós teszttel.
keywords: gyanta, gyantás nyomtatás, sla, msla, dlp, szeletelő, goo, sl1, ctb, cbddlp, chitubox, anycubic, pwmx, pws, elegoo, üreges, szellőzőlyuk, tartóalap, támasztékok, expozíciós teszt, expozíciós létra, kalibrálás, rétegek, bővítmény
from: 83c394e1
---

A gyantás bővítmények a nyomtatási tárgyasztalon lévő tartalmat rétegképekre szeletelik a nyomtató képernyőjéhez, és elmentik a fájlt, amelyet a nyomtató olvas. Ingyenesek, nincs zárolt funkció, és addig ki vannak kapcsolva, amíg be nem kapcsolja őket.

:::note
Még nem töltöttek be fájlt valódi nyomtatóra. A fájlokat csak a CadCraft saját olvasói olvasták vissza, a támasztékok pedig újak. Ellenőrizze a rétegeket, és az első nyomtatást kézzel futtassa.
:::

## Mit fog csinálni

Szeleteljen egy alkatrészt gyantához, ellenőrizze a rétegeket, mentse a fájlt, és másolja át a nyomtatóra.

## Lépések

1. Nyissa meg a {{ui:Settings}} › {{ui:Add-ons}} részt, és kapcsolja be a gyantás szeletelő bővítményt, valamint a nyomtatója fájlformátumának bővítményét (Elegoo GOO, SL1, Chitubox vagy Anycubic). A {{ui:Add resin printing}} gombot a Nyomtatás szakasz kártyáján is megnyomhatja.
2. Helyezze az alkatrészt a tárgyasztalra, ahogy a [Dolgok elhelyezése a nyomtatási tárgyasztalon](topic:print-stage) részben, majd a **Nyomtatás ezzel** mellett válassza a Gyanta lehetőséget.
3. A **Gyantanyomtatás beállításai** alatt válassza ki a **Nyomtatót** és a **Gyantát**. A kártya megmutatja a képernyő méretét képpontban. Ezek a gyártók közzétett méretei, ellenőrizze a sajátját; az Egyéni alatt szerkesztheti őket.
4. Állítsa be a **Rétegmagasság (mm)**, az **Expozíció (s)** és az **Alsó expozíció (s)** értékeket. A gyantánként megadott számok csak kiindulási pontok.
5. Jelölje be az **Üreges, szellőzőlyukkal** opciót, ha üreges alkatrészt szeretne, és állítsa be a **Fal (mm)** és a **Lyuk szélessége (mm)** értékeket.
6. Jelölje be a **Támasztékok és tartóalap** opciót, majd válassza ki a **Támaszték sűrűsége** értéket: Könnyű, Közepes vagy Nehéz.
7. Válassza ki a **Fájlformátumot**. Ha a kártya azt mondja, hogy még nincs hozzáadva egy sem, nyomja meg a Hozzáadás feliratú gombot a formátum nevével.
8. Nyomja meg a {{ui:Preview layers}} gombot, és mozgassa a **Réteg** csúszkát. A lebegő darabok körbe vannak jelölve. A csúszka alatti sor megadja a rétegeket, az időt, valamint a gyanta mennyiségét mL-ben és grammban, továbbá a költségét.
9. Nyomja meg a {{ui:Save the print file}} gombot, ellenőrizze az összegzést, majd nyomja meg a {{ui:Save}} gombot. Másolja a fájlt a nyomtatóra.

## Expozíció megkeresése

1. Kapcsolja be az expozíciós teszt bővítményt a {{ui:Settings}} › {{ui:Add-ons}} részben.
2. Nyomja meg a {{ui:Put the test part on the bed}} gombot.
3. Nyomja meg a {{ui:Save the exposure ladder}} gombot. Minden expozícióhoz kap egy fájlt, egy zip-ben.
4. Nyomtassa ki az egyes fájlokat ugyanazzal a gyantával, és tartsa meg azt az expozíciót, amelynél a vékony oszlopok és a nyitott lyukak a legélesebbek.

## Megjegyzések

- A szeletelés a háttérben fut, így az oldal nagy lemezen is használható marad.
- A nem zárt testek kimaradnak, a kártya ezt jelzi.
- Ha a nyomtató nem fogad el egy fájlt, a formátum kártyáján vannak lehetőségek arra, amit a formátum nyitva hagy. Változtasson egyen, mentse újra, és jelezze, melyik vált be.
- Az Anycubic 517-es és 518-as verziói nem készülnek.
