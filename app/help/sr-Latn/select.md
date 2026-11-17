---
title: Biranje stvari
summary: Klik, dvostruki i trostruki klik, prevlačenje prozora ili ukrštenog okvira, dodavanje i uklanjanje tasterima za izmenu, i brisanje.
keywords: izaberi, izbor, prozor, ukrštanje, dodaj u izbor, poništi izbor, izaberi sve, trostruki klik, dvostruki klik, izbriši, obriši
from: d56d1f89
---

{{ui:Izaberi}} ({{key:Space}}) je alat sa kojim ModelCraft počinje, i na koji te {{key:Esc}} vraća. Izabrane stvari postaju plave, a {{ui:Podaci o entitetu}} desno kaže šta su.

## Klik

| Uradi ovo | Bira |
|---|---|
| Klik na površinu ili ivicu | Tu površinu ili ivicu |
| Klik na grupu ili komponentu | Celu grupu ili komponentu |
| Dvostruki klik na površinu | Površinu i njene ivice |
| Dvostruki klik na ivicu | Ivicu i površine sa obe strane |
| Dvostruki klik na grupu ili komponentu | Otvara je za izmenu (vidi [Grupe i komponente](topic:groups-components)) |
| Trostruki klik na površinu ili ivicu | Sve povezano sa njom: ceo objekat |
| Klik na prazan prostor | Ništa (briše izbor) |
| Dvostruki klik na prazan prostor dok menjaš grupu | Zatvara grupu |

Ivice je lakše pogoditi nego površine: kad je pokazivač u nekoliko piksela od ivice, klik uzima ivicu.

## Prevlačenje okvira

- **Sleva nadesno** crta punu kutiju: izbor **prozorom**. Bira se samo ono što je u potpunosti unutra.
- **Zdesna nalevo** crta isprekidanu kutiju: izbor **ukrštanjem**. Bira se sve što kutija dodirne, a površina se bira kad kutija leži u potpunosti unutar nje.

Grupa ili komponenta računa se kao jedna stvar: prozor mora da je obuhvati celu, a ukrštanje je dovoljno da je dodirne.

## Dodavanje i uklanjanje

Drži taster dok klikneš ili prevlačiš:

| Taster | Dejstvo |
|---|---|
| {{key:Shift}} | Menja: dodaje ono što nije izabrano, uklanja ono što jeste |
| {{key:Mod}} | Dodaje |
| {{key:Shift}} i {{key:Mod}} zajedno | Uklanja |

Da izabereš sve u modelu (ili sve u grupi koju menjaš), pritisni {{key:Mod+A}}.

## Poništavanje izbora

Pritisni {{key:Esc}} (uz {{ui:Izaberi}} kao alat) ili klikni na prazan prostor.

## Brisanje izabranog

Pritisni {{key:Delete}} ili {{key:Backspace}}. Površine, ivice, grupe i vodilice u izboru uklanjaju se u jednom koraku; {{key:Mod+Z}} ih vraća.

Brisanje ivice uklanja površine kojima je ona potrebna, osim ako je ivica samo razdvajala dve površine u istoj ravni: tada se te dve površine spajaju u jednu. Brisanje površine ostavlja njene ivice. Vidi [Brisanje i čišćenje](topic:erase).

## Izbor unutar grupe

Klik na grupu bira celu grupu. Da izabereš površinu unutar nje, dvaput klikni na grupu da je otvoriš, pa klikni. Dok je grupa otvorena, klikovi dolaze samo do onoga što je unutra; sve drugo je zamućeno. Pritisni {{key:Esc}} bez ičega izabranog ili dvaput klikni na prazan prostor da je zatvoriš.

{{ui:Pregled}} levo bira grupe i komponente po imenu, što pomaže kad su sakrivene iza drugih stvari.
