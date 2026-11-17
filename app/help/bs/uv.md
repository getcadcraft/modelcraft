---
title: Rasporedi UV-ove mreže
summary: Označi šavove, razvij, projektuj i složi koordinate teksture mreže u UV radnom prostoru, i provjeri ih šahovnicom i bojama rastezanja.
keywords: uv, uvovi, razvijanje, šav, šavovi, tekstura, koordinate teksture, atlas, slaganje, otok, otoci, šahovnica, rastezanje, izobličenje, projekcija kutije, projekcija cilindra, projekcija sfere, konformno, angle based, lscm, abf
from: 00028f20
---

Tekstura je ravna slika; mreža nije ravna. Njeni **UV-ovi** kažu gdje se svaki ugao svake površine nalazi na slici. UV radni prostor ih pravi: mrežu rasijecaš duž **šavova**, komade razviješ ravno (**razvijanje**) i smjestiš u kvadrat (**složi**).

## Otvori

Odaberi mrežu i izaberi {{ui:UV}} u listi Radni prostor. Grupa ili komponenta prvo postaje mreža, kao u radnom prostoru Mreža. 3D prikaz se pomjera na lijevu polovinu; **UV uređivač** desno prikazuje površine mreže raspoređene na kvadratu teksture. Odabir radi kao u radnom prostoru Mreža, i ono što odabereš u jednom prikazu odabrano je i u drugom.

## Označi šavove

Šavovi su mjesta gdje se mreža smije rasjeći; u oba prikaza su crveni.

- Odaberi ivice ({{ui:Ivica}}, ili {{key:2}}) i pritisni {{ui:Označi šav}} ({{key:Ctrl+E}}). {{ui:Ukloni šav}} ({{key:Ctrl+Shift+E}}) ih skida.
- {{ui:Šavovi na oštrim}} označava svaku oštru ivicu i svaku ivicu gdje se površine sastaju pod više od 60°: kutija se rastavlja na svoje šest strana.
- {{ui:Šavovi iz UV}} označava šavove gdje se UV-ovi već prekidaju, na primjer nakon projekcije.

Zatvoreni dio mora imati šavove da bi ležao ravno: lopta treba bar jedan rez, cijev rez duž svoje dužine.

## Razvijanje

Odaberi površine koje ćeš rasporediti (ili nijednu, za cijelu mrežu) i pritisni {{ui:Razvijanje}} ({{key:U}}). Svaki dio između šavova se polaže ravno, uz očuvanje uglova što je moguće vjernije (ravnanje zasnovano na uglovima), a zatim se dijelovi slažu u kvadrat. {{ui:Konformno}} razvija umjesto toga pomoću konformnih preslikavanja najmanjih kvadrata: brže, ali malo manje vjerno na jako zakrivljenim dijelovima. Oblik koji se može napraviti od ravnog lima, kao bočna strana cilindra presječena jednom, razvija se bez ikakvog rastezanja.

## Projektuj

Za jednostavne oblike često je dovoljna projekcija:

| Projekcija | Šta radi |
| --- | --- |
| {{ui:Kutija}} | Svaka površina na stranu kutije kojoj je najviše okrenuta |
| {{ui:Cilindar}} | Oko plave ose: poprečno je ugao oko ose, gore je visina |
| {{ui:Sfera}} | Iz središta: poprečno je ugao oko ose, gore je geografska širina |
| {{ui:Iz pogleda}} | Kako se površine vide u 3D prikazu sada |

Površina preko spoja cilindra ili sfere ostaje u jednom komadu, pa njeni UV-ovi mogu malo preći desnu ivicu kvadrata; tekstura se tu ponavlja.

## Poredaj

- {{ui:Složi}} smješta dijelove (otoke) u kvadrat pri jednoj veličini teksela, svaki okrenut tako da zauzme najmanje mjesta. Panel određuje razmak među njima.
- {{ui:Okreni 90°}} i {{ui:Zrcali}} okreću ili zrcale UV-ove odabranih površina.
- U UV uređivaču povuci odabranu površinu da pomjeriš UV-ove odabira, ili pokaži na uređivač i pritisni {{key:R}} ili {{key:S}}, pa pomjeri da ih okreneš ili skaliraš (klik zadržava promjenu, {{key:Esc}} otkazuje). {{key:G}} pomjera bez vučenja. Dvostruki klik na površinu (ili {{key:L}}) odabira cijeli njen otok. Točkić zumira; vuci srednjim ili desnim dugmetom za pomjeranje pogleda; {{key:F}} ponovo uklapa kvadrat.

Svaka promjena je jedan korak poništavanja.

## Provjeri ih

- {{ui:Šahovnica}} prikazuje označenu šahovnicu na mreži u njenim UV-ovima: ravnomjerna, kvadratna polja znače da tekstura leži ravnomjerno; oznake pokazuju kojim smjerom ide.
- {{ui:Rastezanje}} boji svaku površinu prema tome koliko je njeni UV-ovi rastežu: plava znači bez rastezanja, preko zelene, do crvene za mnogo. Panel bira da li mjeri **savijene uglove** ili **promijenjenu veličinu**, i prikazuje prosjek.

Vidi također [Uređivanje mreže](topic:mesh-edit), [Mreže](topic:meshes) i [Modifikatori na mreži](topic:modifiers).
