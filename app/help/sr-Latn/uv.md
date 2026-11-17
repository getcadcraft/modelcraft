---
title: Raspored UV koordinata mreže
summary: Označite šavove, razvijte, projektujte i spakujte teksturne koordinate mreže u radnom prostoru UV, pa ih proverite šahovnicom i bojama istezanja.
keywords: uv, uv koordinate, razvij, razvijanje, šav, šavovi, tekstura, teksturne koordinate, atlas, pakovanje, spakuj, ostrvo, ostrva, šahovnica, istezanje, izobličenje, projekcija kutije, projekcija cilindra, projekcija sfere, konformno, na osnovu uglova, lscm, abf
from: 00028f20
---

Tekstura je ravna slika; mreža nije ravna. Njene **UV** koordinate kažu gde se svaki ugao svake površi nalazi na slici. Radni prostor UV ih pravi: mrežu sečete duž **šavova**, razvijate komade ravno (**razvij**) i ulažete ih u kvadrat (**spakuj**).

## Otvorite ga

Izaberite mrežu i izaberite {{ui:UV}} u listi {{ui:Radni prostor}}. Grupa ili komponenta prvo postaje mreža, kao u radnom prostoru {{ui:Mreža}}. 3D pogled se pomera na levu polovinu; **UV uređivač** desno prikazuje površi mreže raspoređene na kvadratu teksture. Biranje radi kao u radnom prostoru {{ui:Mreža}}, a šta izaberete u jednom prikazu, izabrano je i u drugom.

## Označite šavove

Šavovi su mesta gde mreža sme da se preseče; prikazuju se crveno u oba prikaza.

- Izaberite ivice ({{ui:Ivica}}, ili {{key:2}}) i pritisnite {{ui:Označi šav}} ({{key:Ctrl+E}}). {{ui:Obriši šav}} ({{key:Ctrl+Shift+E}}) ih uklanja.
- {{ui:Šavovi na oštrim ivicama}} označava svaku oštru ivicu i svaku ivicu gde se površi sustiču pod više od 60°: kutija se razlaže na svojih šest strana.
- {{ui:Šavovi iz UV-a}} označava šavove gde se UV već lome, na primer posle projekcije.

Zatvoren komad treba šavove da bi ležao ravno: lopti treba najmanje jedan rez, a cevi rez duž njene dužine.

## Razvijte

Izaberite površi koje treba rasporediti (ili nijednu, za celu mrežu) i pritisnite {{ui:Razvij}} ({{key:U}}). Svaki komad između šavova se položi ravno, zadržavajući uglove što je moguće tačnije (ravnanje na osnovu uglova), pa se komadi spakuju u kvadrat. {{ui:Konformno}} razvija pomoću konformnih preslikavanja po metodi najmanjih kvadrata: brže, ali malo manje tačno na jako zakrivljenim komadima. Oblik koji može da se napravi od ravnog lima, kao bočna strana cilindra presečena jednom, razvija se bez ikakvog istezanja.

## Projektujte

Za jednostavne oblike projekcija je često dovoljna:

| Projekcija | Šta radi |
| --- | --- |
| {{ui:Kutija}} | Svaka površ na stranu kutije kojoj je najviše okrenuta |
| {{ui:Cilindar}} | Oko plave ose: poprečno je ugao oko, vertikalno visina |
| {{ui:Sfera}} | Iz središta: poprečno je ugao oko, vertikalno geografska širina |
| {{ui:Sa pogleda}} | Kako se površi vide u 3D pogledu sada |

Površ preko mesta spajanja cilindra ili sfere ostaje u jednom komadu, pa njene UV mogu da izađu malo preko desne ivice kvadrata; tekstura se tu ponavlja.

## Rasporedite

- {{ui:Spakuj}} ulaže komade (ostrva) u kvadrat pri jednoj veličini texela, svaki okrenut tako da zauzme najmanje mesta. Panel podešava razmak između njih.
- {{ui:Okreni za 90°}} i {{ui:Ogledalo}} okreću ili preslikavaju UV izabranih površi.
- U UV uređivaču prevucite izabranu površ da pomerite UV izbora, ili pokažite na uređivač i pritisnite {{key:R}} ili {{key:S}}, pa pomerajte da ih okrenete ili skalirate (klik zadržava, {{key:Esc}} otkazuje). {{key:G}} pomera bez prevlačenja. Dvostruki klik na površ (ili {{key:L}}) bira celo njeno ostrvo. Točkić miša zumira; prevucite srednjim ili desnim dugmetom za pomeranje pogleda; {{key:F}} ponovo uklapa kvadrat.

Svaka izmena je jedan korak opoziva.

## Proverite ih

- {{ui:Šahovnica}} prikazuje označenu šahovnicu na mreži u njenim UV: ravna, kvadratna polja znače da tekstura leži ravnomerno; oznake pokazuju kojim smerom ide.
- {{ui:Istezanje}} boji svaku površ po tome koliko je UV istežu: plavo ništa, preko zelenog, do crvenog mnogo. Panel bira da li meri **savijene uglove** ili **promenjenu veličinu**, i prikazuje prosek.

Pogledajte i [Uređivanje mreže](topic:mesh-edit), [Mreže](topic:meshes) i [Modifikatori na mreži](topic:modifiers).
