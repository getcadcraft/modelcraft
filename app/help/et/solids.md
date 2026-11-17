---
title: Tahkiste tööriistad: ühenda, lahuta, lõikumine
summary: Ühenda suletud grupid ja komponendid üheks, lõika üks teisest välja või säilita ainult see, mida need jagavad.
keywords: tahkis, tahkised, tahkise kontrollija, pole tahkis, paranda tahkis, auk, eksinud serv, pahupidi, ühenda, liida, kombineeri, lahuta, erinevus, lõika, lõikumine, boolean, välimine kest
from: f35df1cc
---

Tahkisetööriistad ühendavad **tahkiseid**: gruppe ja komponente, kelle tahud sulgevad mahu ning iga serv ühendab täpselt kaks tahku. {{ui:Objekti teave}} näitab {{ui:Tahkis}}: {{ui:Jah}} tahkise puhul, ja kuvab selle mahu.

Need asuvad menüüs {{ui:Tahkised}} grupis {{ui:Korrastamine}}.

## Kui miski ei ole tahkis

Vali grupp või komponent. Kui see pole tahkis, ütleb {{ui:Objekti teave}}, miks, näiteks „Pole tahkis: 4 serva piiravad auku · 1 eksinud serv“:

| Probleem | Mida see tähendab |
|---|---|
| Servad piiravad auku | Tahk puudub |
| Servi jagab kolm või rohkem tahku | Tahk jagab sisemust või kaks kuju puutuvad kokku mööda serva |
| Tahud kuju sees | Sisemusse jäänud sein |
| Eksinud servad | Jooned, mis ei piira ühtegi tahku |
| Tahud pööratud pahupidi | Nende esikülg on sissepoole, naabrite vastu |

{{ui:Näita probleeme}} avab selle nii, et need servad ja tahud on valitud ja sa näed neid. {{ui:Paranda}} parandab lihtsad juhud ühe sammuga: eemaldab eksinud servad ja kuju sees olevad tahud, pöörab tahud õiges suunas välja ning sulgeb augud, mille serv on tasane. Kõik, mida ei saa turvaliselt parandada (mittetasane auk, serv, mida jagab palju tahke), jääb sulle ja teatab, mis on alles.

## Ühenda

1. Vali kaks või rohkem tahkist (klõpsa ühte, {{key:Ctrl}}+klõps teistele).
2. {{ui:Tahkised}} › {{ui:Ühenda}}.

Need muutuvad üheks tahkiseks, ühes grupis. Kohas, kus nad kattusid, on sisemised tahud kadunud.

## Lahuta

1. {{ui:Tahkised}} › {{ui:Lahuta}}.
2. Klõpsa tahkist, mida **eemaldada** (lõikur).
3. Klõpsa tahkist, mida **lõigata**.

Teise tahkise järele jääv osa jääb alles; lõikur kulub ära. Näiteks augu tegemiseks läbi ploki joonista läbi selle post, tee post grupiks ja lahuta post plokist.

## Lõikumine

Vali kaks või rohkem tahkist, siis {{ui:Tahkised}} › {{ui:Lõikumine}}. Alles jääb ainult see osa, mida nad kõik jagavad.

## Hea teada

- Tulemus on uus grupp. See säilitab esimese tahkise nime, värvi ja sildi (lahutamise puhul: selle, mida lõigati). Tahkude peale maalitud värve ei säilitata.
- Tulemuse tasased küljed on üksikud tahud. Ümarad küljed tulevad välja tasaste tahkudena, millega need joonistati.
- Kui grupp või komponent pole tahkis, ütleb tööriist, milline, ja ei muuda midagi. Otsi puuduvat tahku või eksinud tahku selle seest.
- Avatud grupi sees töötavad tööriistad selles grupis olevate gruppide ja komponentidega.
- Iga tööriist on üks tagasivõtmise samm.
- Tahkisetööriista esmakordsel kasutamisel laaditakse selle mootor (manifold-3d), mis võib võtta hetke.
