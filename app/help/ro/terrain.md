---
title: Teren: sol din curbe de nivel și modelarea lui
summary: Creați sol din curbe de nivel sau sub formă de grilă, apoi ridicați-l și coborâți-l cu o pensulă moale.
keywords: teren, sol, peisaj, topografie, curbe de nivel, linii de nivel, amplasament, pantă, deal, movilă, cutie cu nisip, smoove, modelare, nivelare, TIN
from: 407652b3
---

Terenul este sol format din triunghiuri, deci poate urma orice formă. Este un grup: faceți dublu clic pe el pentru a-l edita.

## Din curbe de nivel

1. Obțineți curbele de nivel la înălțimile lor: desenați-le sau [importați un plan de amplasament](topic:site-plan) și mutați fiecare curbă până la nivelul ei.
2. Selectați-le (toate muchiile tuturor curbelor).
3. {{ui:Editare}} › {{ui:Mai multe}} › {{ui:Teren din liniile de nivel selectate}}.

ModelCraft unește punctele curbelor de nivel cu triunghiuri (un TIN) și netezește fiecare muchie din interior, astfel încât solul se umbrește uniform. Liniile în sine rămân; ștergeți-le sau ascundeți-le când nu mai aveți nevoie de ele. Curbele foarte dense sunt rărite la 8 000 de puncte.

## O grilă de modelat

{{ui:Editare}} › {{ui:Mai multe}} › {{ui:Grilă de teren…}} cere o lățime, o adâncime și o dimensiune a celulei, apoi plasează o grilă plată de triunghiuri în locul unde faceți clic pentru colțul ei. Celulele mici se modelează mai neted, dar creează mai multe fețe (cel mult 200 × 200 celule).

## Modelare: ridicați și coborâți solul

1. Faceți dublu clic pe teren pentru a-l deschide.
2. {{ui:Editare}} › {{ui:Mai multe}} › {{ui:Modelare teren}}. Un cerc arată pensula pe sol, sub cursor.
3. Trageți în sus pentru a ridica solul sub pensulă sau în jos pentru a-l coborî. Centrul se mișcă cel mai mult, iar solul se estompează până la zero pe marginea cercului, astfel încât movilele și depresiunile ies netede.

Pentru a face o movilă la o înălțime exactă, faceți clic o dată, apoi scrieți înălțimea, de exemplu `1.5m` (un minus o coboară), și apăsați {{key:Enter}}. Pentru a schimba pensula, scrieți o lungime înainte de a face clic: `5m` dă o pensulă cu raza de 5 m.

Fiecare modelare este un singur pas de anulare.

## De reținut

- Modelarea mută doar fețele triunghiulare, deci fiecare față rămâne plană. Fețele desenate manual (dreptunghiuri, poligoane) nu sunt teren: unealta o spune.
- Modelarea mută punctele doar în sus și în jos; nu adaugă puncte. Pentru detalii mai fine, faceți o grilă cu celule mai mici.
- Terenul se exportă ca orice alt grup. În IFC este un proxy de element de construcție, ca tot restul.
