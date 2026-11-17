---
title: Odabir objekata
summary: Klik, dvostruki i trostruki klik, prevlačenje prozora ili ukrštenog okvira, dodavanje i uklanjanje tipkama za izmjenu, te brisanje.
keywords: odabir, izbor, prozor, ukršteni okvir, dodaj u odabir, poništi odabir, odaberi sve, trostruki klik, dvostruki klik, izbriši, obriši
from: d56d1f89
---

{{ui:Odaberi}} ({{key:Space}}) je alat s kojim ModelCraft počinje, i na koji vas {{key:Esc}} vraća. Odabrane stvari postaju plave, a {{ui:Podaci o entitetu}} s desne strane kaže šta su.

## Klik

| Uradi ovo | Odabire |
|---|---|
| Klikni površinu ili ivicu | Tu površinu ili ivicu |
| Klikni grupu ili komponentu | Cijelu grupu ili komponentu |
| Dvaput klikni površinu | Površinu i njene ivice |
| Dvaput klikni ivicu | Ivicu i površine s obje strane |
| Dvaput klikni grupu ili komponentu | Otvara je za uređivanje (vidi [Grupe i komponente](topic:groups-components)) |
| Trostruko klikni površinu ili ivicu | Sve što je povezano s njom: cijeli objekat |
| Klikni prazan prostor | Ništa (briše odabir) |
| Dvaput klikni prazan prostor dok uređujete grupu | Zatvara grupu |

Ivice se lakše pogađaju nego površine: kad je pokazivač unutar nekoliko piksela od ivice, klik uzima ivicu.

## Prevuci okvir

- **Lijevo prema desno** crta punu kutiju: odabir **prozorom**. Odabire se samo ono što je u potpunosti unutar nje.
- **Desno prema lijevo** crta isprekidanu kutiju: odabir **ukrštanjem**. Odabire se sve što kutija dodirne, a površina se odabire kad kutija leži u potpunosti unutar nje.

Grupa ili komponenta računa se kao jedna stvar: prozor mora sadržavati cijelu, a ukrštanje je dovoljno da je dodirne.

## Dodaj i ukloni

Držite tipku dok klikate ili prevlačite:

| Tipka | Učinak |
|---|---|
| {{key:Shift}} | Prebacuje: dodaje ono što nije odabrano, uklanja ono što jeste |
| {{key:Mod}} | Dodaje |
| {{key:Shift}} i {{key:Mod}} zajedno | Uklanja |

Da odaberete sve u modelu (ili sve u grupi koju uređujete), pritisnite {{key:Mod+A}}.

## Poništi odabir

Pritisnite {{key:Esc}} (uz {{ui:Odaberi}} kao alat) ili kliknite prazan prostor.

## Izbriši odabrano

Pritisnite {{key:Delete}} ili {{key:Backspace}}. Površine, ivice, grupe i vodilice u odabiru uklanjaju se u jednom koraku; {{key:Mod+Z}} ih vraća.

Brisanje ivice uklanja površine kojima ona treba, osim ako je ivica razdvajala samo dvije površine u istoj ravni: tada se te dvije površine spajaju u jednu. Brisanje površine ostavlja njene ivice. Vidi [Brisanje i čišćenje](topic:erase).

## Odabir unutar grupe

Klik na grupu odabire cijelu grupu. Da odaberete površinu unutar nje, dvaput kliknite grupu da je otvorite, pa kliknite. Dok je grupa otvorena, klikovi dopiru samo do onoga što je unutra; sve ostalo je zamućeno. Pritisnite {{key:Esc}} bez ičega odabranog, ili dvaput kliknite prazan prostor, da je zatvorite.

{{ui:Pregled}} s lijeve strane odabire grupe i komponente po imenu, što pomaže kad su skrivene iza drugih stvari.
