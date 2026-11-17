---
title: Odabir objekata
summary: Klik, dvostruki i trostruki klik, povlačenje prozora ili križnog okvira, dodavanje i uklanjanje tipkama za izmjenu te brisanje.
keywords: odaberi, odabir, prozor, križanje, dodaj odabiru, poništi odabir, odaberi sve, trostruki klik, dvostruki klik, izbriši, brisanje
from: d56d1f89
---

{{ui:Odaberi}} ({{key:Space}}) je alat s kojim ModelCraft započinje i na koji vas {{key:Esc}} vraća. Odabrani objekti postaju plavi, a {{ui:Informacije o entitetu}} s desne strane kazuje što su.

## Klik

| Radnja | Odabire |
|---|---|
| Kliknite plohu ili brid | Tu plohu ili brid |
| Kliknite grupu ili komponentu | Cijelu grupu ili komponentu |
| Dvaput kliknite plohu | Plohu i njezine bridove |
| Dvaput kliknite brid | Brid i plohe s obje strane |
| Dvaput kliknite grupu ili komponentu | Otvara je za uređivanje (vidi [Grupe i komponente](topic:groups-components)) |
| Trostruko kliknite plohu ili brid | Sve povezano s njim: cijeli objekt |
| Kliknite prazan prostor | Ništa (briše odabir) |
| Dvaput kliknite prazan prostor dok uređujete grupu | Zatvara grupu |

Bridove je lakše pogoditi nego plohe: kad je pokazivač unutar nekoliko piksela od brida, klik odabire brid.

## Povlačenje okvira

- **Slijeva nadesno** crta puni okvir: odabir **prozorom**. Odabiru se samo objekti koji su u potpunosti unutar njega.
- **Zdesna nalijevo** crta isprekidani okvir: odabir **križanjem**. Odabire se sve što okvir dotakne, a ploha se odabire kad je okvir potpuno unutar nje.

Grupa ili komponenta broji se kao jedan objekt: prozor je mora cijelu obuhvatiti, a križanje je samo mora dotaknuti.

## Dodavanje i uklanjanje

Držite tipku dok kliknete ili povlačite:

| Tipka | Učinak |
|---|---|
| {{key:Shift}} | Mijenja stanje: dodaje ono što nije odabrano, uklanja ono što jest |
| {{key:Mod}} | Dodaje |
| {{key:Shift}} i {{key:Mod}} zajedno | Uklanja |

Za odabir svega u modelu (ili svega u grupi koju uređujete) pritisnite {{key:Mod+A}}.

## Poništavanje odabira

Pritisnite {{key:Esc}} (uz {{ui:Odaberi}} kao alat) ili kliknite prazan prostor.

## Brisanje odabranih objekata

Pritisnite {{key:Delete}} ili {{key:Backspace}}. Plohe, bridovi, grupe i pomoćne linije u odabiru uklanjaju se u jednom koraku; {{key:Mod+Z}} ih vraća.

Brisanje brida uklanja plohe koje ga trebaju, osim ako je brid samo razdvajao dvije plohe u istoj ravnini: tada se te dvije plohe spajaju u jednu. Brisanje plohe ostavlja njezine bridove. Vidi [Brisanje i čišćenje](topic:erase).

## Odabir unutar grupe

Klik na grupu odabire cijelu grupu. Za odabir plohe unutar nje dvaput kliknite grupu da je otvorite, pa kliknite. Dok je grupa otvorena, klikovi dosežu samo ono što je unutra; sve ostalo je prigušeno. Pritisnite {{key:Esc}} bez odabira ili dvaput kliknite prazan prostor da je zatvorite.

{{ui:Struktura}} s lijeve strane odabire grupe i komponente prema nazivu, što pomaže kad su sakrivene iza drugih objekata.
