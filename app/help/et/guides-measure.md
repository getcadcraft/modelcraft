---
title: Mõõtmine ja abijoonte paigutamine
summary: Loe pikkusi ja pindalu, mõõda kahe punkti vahel mõõdulindiga ning paiguta abijooni ja abipunkte, millele joonistada.
keywords: mõõda, mõõdulint, nurgamõõdik, nurk, nurgaga abijoon, abijoon, juhtjoon, ehitusjoon, kaugus, mõõt, pikkus, pindala, nihe, paigutus, abipunkt
from: de6d04d9
---

## Mõõtmeid lugemine ilma mõõtmata

Vali midagi ja vaata jaotist {{ui:Objekti teave}}:

- Serv näitab oma **pikkust**.
- Tahk näitab oma **pindala** ja seda, mitu auku sellel on.
- Mitu tahku näitavad oma **koguspindala**.
- Grupp või komponent näitab oma **mõõtu** (laius × sügavus × kõrgus kasti kohta, mis selle ümber on) ja kui see on suletud tahkis, siis selle **mahtu**.
- Kui midagi pole valitud, näitab {{ui:Objekti teave}} kogu mudeli mõõtu.

Pikkused ja pindalad kasutavad ühikut, mis on paremal all olevas valijas. Millimeetrite mudel näitab alates 0.01 m² suurusi ruutmeetrites (4 × 3 m ruum loeb „12 m²“).

Joonistades näitab väärtuste kast reaalajas pikkust, mõõtu, raadiust või kaugust, nii et pärast harva on vaja mõõta.

Suuruse muutmiseks pärast joonistamist vali serv või grupp ja sisesta uus pikkus või mõõt jaotises {{ui:Objekti teave}}. Või paiguta [mõõt](topic:dimensions) ja sisesta sinna uus pikkus.

## Mõõtmine kahe punkti vahel

1. Vajuta {{key:T}} mõõtmiseks tööriistaga {{ui:Mõõdulint}}.
2. Klõpsa punkti: nurk, keskpunkt, punkt tahul või maapind. (Serva klõpsamine teeb midagi muud; vt allpool.)
3. Liigu teise punkti juurde. Ots ja väärtuste kast ({{ui:Pikkus}}) näitavad kaugust. See haakub punktidega ning punaste, roheliste ja siniste suundadega.
4. Klõpsa. Olekuriba ütleb „Mõõdetud 4' 6".“ ja **abipunkt** jääb teise punkti kohale.

Kui tahad abipunkti täpsel kaugusel, sisesta see pärast esimest klõpsu ja vajuta {{key:Enter}}: see läheb suunas, kuhu osutad.

## Abijoone paigutamine

Abijoon on lõputu katkendjoon, paralleelne servaga ja valitud kaugusel. Kasuta abijooni, et paigutada tagasihüpe, korruse kõrgus või koht, kust aken algab.

1. Vajuta {{key:T}}.
2. Klõpsa **servale** (mitte selle otsale). Tipp ütleb „Serval“.
3. Liigu servast eemale, sinna poole, kuhu abijoon peaks minema. Katkendjoon järgneb servale paralleelselt ja väärtuste kast ({{ui:Nihe}}) näitab kaugust.
4. Klõpsa või sisesta nihe ja vajuta {{key:Enter}}: `1.5m`, `5'`.

   Olekuriba ütleb „Abijoon 1.5 m servast.“

Kui alustad olemasolevalt abijoonelt, teeb see uue abijoone sellega paralleelseks, nii et saad ruudustiku ühest abijoonest välja astuda.

Kui sisestad nihke ilma enne servast eemale liikumata, ei saa ModelCraft aru, millist külge mõeldakse: „Liigu kõigepealt servast eemale, et näidata, millisele poolele.“

## Nurgaga abijoon: nurgamõõdik

1. Klõpsa rühmas {{ui:Muutmine}} nuppu {{ui:Nurgamõõdik}}.
2. Klõpsa keskpunkt: punkt, kust abijoon läbi läheb. Tahul asetub nurgamõõdik selle tahu peale; mujal lamab tasapinnal. Pärast seda klõpsu seab {{key:Right}}, {{key:Left}} või {{key:Up}} selle risti punase, rohelise või sinise suhtes (uuesti vajutades tühistatakse).
3. Klõpsa punkt, mis määrab 0°, näiteks mööda serva.
4. Liigu soovitud nurgani ja klõpsa: see haakub 15° sammudega. Või sisesta nurk kraadides, näiteks `22.5`, ja vajuta {{key:Enter}}; abijoon läheb sellele poolele, kus kursor on.

Abijoon läbib keskpunkti selles nurgas. Joonista selle järgi käsuga {{ui:Joon}} katuse kalde, faasi või kaldseina jaoks.

## Joonistamine abijoonte vastu

Joonistamise tööriistad haakuvad abijoontele („Abijoonel“) ja abipunktidele („Abipunkt“) ning kohale, kus abijoon ristub telje suunaga. Alusta ristkülikut kohast, kus kaks abijoont ristuvad, et see täpselt paigutada.

## Abijoonte eemaldamine

- Üks abijoon: vali see tööriistaga {{ui:Vali}} ja vajuta {{key:Delete}}, või klõpsa sellel tööriistaga {{ui:Kustutaja}}.
- Kõik abijooned: kui midagi pole valitud, klõpsa jaotises {{ui:Objekti teave}} nuppu {{ui:Kustuta kõik abijooned}}.

Abijooned salvestatakse `.modelcraft`-faili. Neid ei ekspordita teistesse vormingutesse.
