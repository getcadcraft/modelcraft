---
title: Tööriistade loend
summary: Iga ModelCraft-i tööriist koos klahvi, iga klõpsu tähenduse ja sellega, mida saab tööriista töötamise ajal väärtuse kasti sisestada.
keywords: tööriistad, tööriistariba, käsud, loend, joon, ristkülik, ring, hulknurk, nihe, kaar, kõver, spline, järgi mind, pühkimine, kaar 2 punktiga, kaar keskpunktist, vali, lükka tõmba, teisalda, pööra, skaleeri, kustutaja, mõõdulint, mõõt, orbiit, nihuta, suumi, paiguta komponent
from: e08a274f
---

Oleku riba vihje ütleb alati, mida praegune tööriist järgmiseks soovib. {{key:Esc}} tühistab selle, mida tööriist parasjagu teeb.

## Joonistamise tööriistad

| Tööriist | Klahv | Klõpsud | Sisesta väärtuse kasti |
|---|---|---|---|
| {{ui:Joon}} | {{key:L}} | Algus, siis iga järgmine punkt. Peatub, kui tahk sulgub, või klahviga {{key:Esc}} | Pikkus osuti suunas; `[x,y,z]` punkt; `<dx,dy,dz>` nihe ({{ui:Pikkus}}) |
| {{ui:Ristkülik}} | {{key:R}} | Esimene nurk (maapinnal või tahul), vastasnurk | Laius ja sügavus: `4m,3m` ({{ui:Mõõdud}}) |
| {{ui:Ring}} | {{key:C}} | Keskpunkt (maapinnal või tahul), punkt servas | Enne esimest klõpsu: küljed, `24s` või `24` ({{ui:Küljed}}). Pärast: raadius ({{ui:Raadius}}) |
| {{ui:Hulknurk}} | {{key:N}} | Keskpunkt, nurk | Sama mis Ring; algab 6 küljega |
| {{ui:Kaar}} | {{key:A}} | Algus, lõpp, siis kumerus | Kõõlu pikkus pärast algust ({{ui:Pikkus}}); kumerus pärast lõppu ({{ui:Kumerus}}); `12s` lõikude jaoks |
| {{ui:Nurgamõõdik}} | — | Keskpunkt, 0° punkt, siis nurk | Nurk kraadides ({{ui:Nurk}}) |
| {{ui:Järgi mind}} | — | Vali tee, siis klõpsa tahku (või klõpsa tahku ja seejärel tee serva) | — |
| {{ui:Värvi}} | {{key:B}} | Tahk, grupp või komponent | — ({{key:Ctrl}} ühendatud, {{key:Shift}} kogu sama värv, {{key:Alt}} värvi korjamine) |
| {{ui:Nihe}} | {{key:F}} | Tahk (või vali enne tahk või servad), siis pool ja kaugus | Kaugus ({{ui:Vahemaa}}); tahku sisse on sissepoole |
| {{ui:Kõver}} | — | Punktid, mida kõver läbib; {{key:Enter}} või topeltklõps lõpetab | Pikkus osuti suunas, `[x,y,z]` või `<dx,dy,dz>` järgmise punkti jaoks |
| {{ui:Kaar keskpunktist}} | — | Keskpunkt, algus, siis lõpp | Raadius pärast keskpunkti; nurk kraadides pärast algust; `12s` lõikude jaoks |

## Muutmise tööriistad

| Tööriist | Klahv | Klõpsud | Sisesta väärtuse kasti |
|---|---|---|---|
| {{ui:Vali}} | {{key:Space}} | Klõpsa, topeltklõpsa, kolmikklõpsa, lohista kast. Vt [Asjade valimine](topic:select) | Ühe mõõdu või serva valikuga: uus pikkus, mis muudab mudeli suurust |
| {{ui:Lükka/tõmba}} | {{key:P}} | Tahk, siis kaugus. Topeltklõps tahul kordab viimast kaugust | Kaugus; negatiivne läheb vastupidi ({{ui:Vahemaa}}) |
| {{ui:Teisalda}} | {{key:M}} | Punktist punkti. Kopeerimiseks hoia {{key:Ctrl}} või {{key:Alt}} all | Kaugus osuti suunas, `<dx,dy,dz>` või `[x,y,z]` ({{ui:Vahemaa}}). Pärast kopeerimist: `3x` või `/3` |
| {{ui:Pööra}} | {{key:Q}} | Keskpunkt (tahul, et pöörata selle tasapinnas), algussuund, lõppsuund | Nurk kraadides ({{ui:Nurk}}) |
| {{ui:Mõõtkava}} | {{key:S}} | Punkt, mis jääb paigale, viitepunkt, uus suurus | Tegur: `2`, `0.5` ({{ui:Mõõtkava}}) |
| {{ui:Kustutaja}} | {{key:E}} | Klõpsa või lohista servade, gruppide, abijoonte ja mõõtude peal | ei midagi |
| {{ui:Mõõdulint}} | {{key:T}} | Servast: paralleelne abijoon. Punktist: mõõdab ja jätab abipunkti | Nihe ({{ui:Nihe}}) või kaugus ({{ui:Pikkus}}) |
| {{ui:Mõõt}} | {{key:D}} | Kaks nurka (või üks serv), siis kuhu mõõtejoon läheb. Vt [Mõõt ja suuruse muutmine](topic:dimensions) | Nihe ({{ui:Nihe}}). Kohe pärast: uus pikkus, mis muudab mudeli suurust |

{{ui:Teisalda}}, {{ui:Pööra}} ja {{ui:Mõõtkava}} töötavad valiku kallal. Kui midagi pole valitud, võtavad need esimeseks selle, mida klõpsad (tahk toob kaasa oma servad).

## Kaamera tööriistad

| Tööriist | Klahv | Lohista |
|---|---|---|
| {{ui:Orbiit}} | {{key:O}} | Pööra mudeli osa ümber, mis on kursori all ({{key:Shift}} nihutab) |
| {{ui:Nihuta vaadet}} | {{key:H}} | Libista vaadet |
| {{ui:Suumi}} | {{key:Z}} | Suumi: üles on sisse, alla on välja |
| {{ui:Ulatus}} | {{key:Shift+Z}} | (nupp, mitte tööriist) Mahuta kogu mudel |

Hiirega neid tavaliselt vaja ei lähe: keskmise nupu lohistamine pöörab, parema nupu lohistamine nihutab ja ratas suumib iga tööriistaga. Vt [Orbiit, nihe ja suum](topic:orbit-pan-zoom).

## Korrasta

| Nupp | Klahv | Teeb |
|---|---|---|
| {{ui:Komponent}} | {{key:G}} | Muudab valiku komponendiks |
| {{ui:Grupp}} | {{key:Shift+G}} | Muudab valiku grupiks |
| {{ui:Lahuta}} | puudub | Muudab valitud grupid ja komponendid tagasi vabaks geomeetriaks |

## Aseta komponent

Ei ole tööriistaribal: klõpsa {{ui:Aseta}} komponendi kõrval paneelis {{ui:Komponendid}}. Klõpsa üks kord kohta, kuhu komponendi päritolupunkt läheb; siis pöördub tööriist tagasi tööriistale {{ui:Vali}}.
