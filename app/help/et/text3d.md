---
title: 3D-tekst
summary: Lisa mudelile kiri tahkudena, lamedana või tahkena, seismas mis tahes tahul: silt, maja number, nimi uksel.
keywords: 3D-tekst, tekst, tähed, kiri, silt, märgistus, maja number, nimesilt, graveerimine, kirjatüüp, sõnad
from: 923f5d93
---

Rühmas {{ui:Joonistamine}} teeb {{ui:3D-tekst}} kirja tahkudest, mida saab värvida, lükata või tõmmata või lõigata tahkesse kehasse.

## Teksti lisamine

1. Klõpsa {{ui:3D-tekst}}.
2. Sisesta tekst. Teise rea jaoks vajuta kastis {{key:Enter}}.
3. Määra {{ui:Tähe kõrgus}} (suure tähe kõrgus, näiteks `30cm` või `1'`) ja {{ui:Sügavus}}:
   - `0` annab **lamedad tähed**: tahud, mis lamavad sellel, kuhu need paigutad, valmis värvimiseks või lükkamiseks.
   - Sügavus, näiteks `5cm`, annab **tahked tähed**: suletud kehad, mida saab kasutada [tahkete tööriistadega](topic:solids).
4. Klõpsa {{ui:Aseta}} ja klõpsa siis kohta, kuhu tekst läheb.

Tahul paikneb tekst selle tahu peal ja loeb vasakult paremale: seinal seisab püsti; maapinnal või laual lamab tasapinnaliselt piki punast telge. Kui tahu pole, lamab tekst maapinnal.

Tekst on **komponent**, mis on nimetatud selle järgi, nii et iga koopia muutub, kui ühte muuta, ning see ilmub loendisse {{ui:Komponendid}}, kust seda saab uuesti paigutada.

## Mida tuleb teada

- Tähed on ModelCraft-i enda ühejoonelise kirjatüübi paksendatud versioon: selge ja loetav, kuid kirjatüübi valikut veel pole.
- Tähed, numbrid ja tavalised märgid (sh täpitähed) joonistatakse; märk, mida kirjatüüp ei sisalda, kuvatakse väikese kastina.
- Sõnade muutmiseks kustuta tekst ja lisa see uuesti.
- Kirja lõikamiseks pinnasse tee tahked tähed, aseta need poolenisti tahke grupi sisse ja [lahuta](topic:solids) need.
