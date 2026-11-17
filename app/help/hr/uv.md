---
title: Raspored UV-ova mreže
summary: Označite šavove, razmotajte, projicirajte i složite teksturne koordinate mreže u radnom prostoru UV i provjerite ih šahovnicom i bojama razvlačenja.
keywords: uv, uv-ovi, razmotavanje, šav, šavovi, tekstura, teksturne koordinate, atlas, slaganje, pakiranje, otok, otoci, šahovnica, razvlačenje, distorzija, projekcija kutije, projekcija valjka, projekcija kugle, konformno, angle based, lscm, abf
from: 00028f20
---

Tekstura je ravna slika; mreža nije ravna. Njezini **UV-ovi** određuju gdje se svaki kut svake plohe nalazi na slici. Radni prostor UV ih izrađuje: mrežu rasijecate po **šavovima**, dijelove položite ravno (**razmotajte**) i uklopite ih u kvadrat (**složite**).

## Otvaranje

Odaberite mrežu i odaberite {{ui:UV}} na popisu radnih prostora. Grupa ili komponenta prvo postaje mreža, kao u radnom prostoru Mreža. 3D prikaz se pomiče na lijevu polovicu; **UV editor** s desne strane prikazuje plohe mreže položene na kvadrat teksture. Odabir radi kao u radnom prostoru Mreža, a ono što odaberete u jednom prikazu odabrano je i u drugome.

## Označavanje šavova

Šavovi su mjesta na kojima se mreža smije rezati; u oba prikaza prikazuju se crveno.

- Odaberite bridove ({{ui:Brid}} ili {{key:2}}) i pritisnite {{ui:Označi šav}} ({{key:Ctrl+E}}). {{ui:Očisti šav}} ({{key:Ctrl+Shift+E}}) ih uklanja.
- {{ui:Šavovi na oštrim}} označava svaki oštar brid i svaki brid na kojem se plohe spajaju pod više od 60°: kutija se raspada na svojih šest strana.
- {{ui:Šavovi iz UV-ova}} označava šavove na kojima se UV-ovi već lome, na primjer nakon projekcije.

Zatvoreni dio mora imati šavove da bi ležao ravno: kugli treba barem jedan rez, a cijevi rez duž cijele duljine.

## Razmotavanje

Odaberite plohe koje želite položiti (ili ništa, za cijelu mrežu) i pritisnite {{ui:Razmotaj}} ({{key:U}}). Svaki dio između šavova položen je ravno, uz što vjerniju očuvanost kutova (ravnanje temeljeno na kutovima), zatim se dijelovi slažu u kvadrat. {{ui:Konformno}} umjesto toga razmotava konformnim preslikavanjem najmanjih kvadrata: brže, ali nešto manje vjerno na jako zakrivljenim dijelovima. Oblik koji se može izraditi iz ravnog lima, poput bočne strane valjka rezane jednom, razmotava se bez ikakvog razvlačenja.

## Projekcija

Za jednostavne oblike često je dovoljna projekcija:

| Projekcija | Što radi |
| --- | --- |
| {{ui:Kutija}} | Svaka ploha na stranu kutije kojoj je najviše okrenuta |
| {{ui:Valjak}} | Oko plave osi: poprijeko je kut oko osi, gore je visina |
| {{ui:Kugla}} | Iz središta: poprijeko je kut oko osi, gore je geografska širina |
| {{ui:Iz pogleda}} | Kako se plohe vide u 3D prikazu sada |

Ploha preko spoja valjka ili kugle zadržava se u jednom komadu, pa njezini UV-ovi mogu malo prijeći desni rub kvadrata; teksture se tu ponavljaju.

## Raspoređivanje

- {{ui:Složi}} ugrađuje dijelove (otoke) u kvadrat u jednoj veličini texela, svaki okrenut tako da zauzme najmanje mjesta. Ploča postavlja razmak između njih.
- {{ui:Zakreni 90°}} i {{ui:Zrcali}} okreću ili zrcale UV-ove odabranih ploha.
- U UV editoru povucite odabranu plohu da pomaknete UV-ove odabira ili postavite pokazivač na editor i pritisnite {{key:R}} ili {{key:S}}, zatim pomaknite da ih okrenete ili skalirate (klik zadržava, {{key:Esc}} otkazuje). {{key:G}} pomiče bez povlačenja. Dvostrukim klikom na plohu (ili {{key:L}}) odaberite cijeli njezin otok. Kotačić zumira; povlačenjem srednjom ili desnom tipkom miša pomičete prikaz; {{key:F}} ponovno prilagođava kvadrat.

Svaka promjena je jedan korak poništavanja.

## Provjera

- {{ui:Šahovnica}} prikazuje označenu šahovnicu na mreži u njezinim UV-ovima: ujednačena, kvadratna polja znače da tekstura leži ravnomjerno; oznake pokazuju kojim smjerom ide.
- {{ui:Razvlačenje}} boji svaku plohu prema tome koliko je UV-ovi razvlače: plavo ništa, preko zelene do crvene za mnogo. Ploča bira mjeri li to **savijene kutove** ili **promijenjenu veličinu** i prikazuje prosjek.

Pogledajte i [Uređivanje mreže](topic:mesh-edit), [Mreže](topic:meshes) i [Modifikatori na mreži](topic:modifiers).
