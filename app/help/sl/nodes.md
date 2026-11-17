---
title: Vozlišča: gradnja modela z povezovanjem
summary: Povežite števila v točke, točke v krivulje in krivulje v površine. Spremenite število in vse, kar je odvisno od njega, se obnovi. Vsako vozlišče je tudi vrstica CraftScript, graf pa je shranjen v datoteki.
keywords: vozlišča, urejevalnik vozlišč, vizualno programiranje, parametrično, graf, povezave, vhodi, prosta oblika, freeform, nurbs, prehod, iztisni, zavrti, krog, krivulja, površina, zaporedje, območje, naključno, seznam, skript, craftscript, grasshopper
from: 9c8e254f
---

Urejevalnik **Vozlišča** gradi geometrijo tako, da povezuje škatle. Vsaka škatla (vozlišče) opravi majhno nalogo: naredi število, točko, krog, prehod. Izhod enega povežete z vhodom naslednjega, model pa sledi, ko spremenite število na začetku.

Odprete ga z desne plošče: {{ui:Vozlišča}} › {{ui:Vozlišča …}}. Datoteka, ki že ima graf, ga odpre sama. Je okno nad 3D pogledom: povlecite njegovo naslovno vrstico za premik, njegov kot za spremembo velikosti.

## Povezovanje

1. Izberite vozlišče s seznama na levi (v iskalno polje vpišite za zožitev; <kbd>Enter</kbd> doda prvo ujemanje). Pojavi se na sredini platna.
2. Povlecite z okroglega **izhodnega** gumba na desni strani enega vozlišča na okrogli **vhodni** gumb na levi strani drugega. Gumb postane zelen, ko se ujema, in rdeč, ko se ne. Kazalec nanj pokaže razlog.
3. Vhod brez povezave prikaže polje za vneseno vrednost. Vnesite število in pritisnite <kbd>Tab</kbd>: rezultat se obnovi.
4. Majhen krog v naslovni vrstici vozlišča je njegovo **oko**. Vozlišče z vklopljenim očesom je narisano v 3D pogledu: krivulje kot črte, površine osenčene, točke kot pike.

Vozlišče povlecite za naslovno vrstico. Povlecite ozadje za pomik, kolesce za povečavo. <kbd>Delete</kbd> odstrani izbrano vozlišče. {{ui:Uredi}} razporedi vozlišča v stolpce, {{ui:Prilagodi}} jih vse spravi v pogled, {{ui:Razveljavi}} in {{ui:Uveljavi}} pa se pomikata po vaših urejanjih.

## Vrste in enote

Priključki imajo vrsto: število, da/ne, točka, vektor, krivulja, površina, mreža, telo ali „geometrija“ za katero koli od teh. Točka lahko napaja vektorski vhod in obratno. Števila imajo enoto: **dolžina** je v milimetrih, **kot** pa v stopinjah. Dolžina ne more napajati kota, dolžina krat dolžina (ploskev) pa je zavrnjena, zato je napačna povezava ustavljena že ob nastanku.

Kvadratna pika je **seznam**. Ko seznam doseže vhod z eno vrednostjo, vozlišče deluje enkrat za vsak element, njegov rezultat pa postane seznam. Krajši seznam ponovi svoj zadnji element. Na primer, **Zaporedje** višin, povezano na **Premakni**, naredi kup kopij.

## Telesa in Booleove operacije kot vozlišča

Skupina **Telesa** naredi zaprta telesa iz istih točnih površin kot podokno Površine: **Telo: škatla**, **Telo: valj** in **Telo: krogla** (velikosti v mm), **Unija**, **Odštej** in **Presek** (drugo telo se vzame iz prvega; toleranca pove, kako daleč lahko trikotniki motorja teles odstopajo od točnih površin), **Zaobljenost med ploskvama** (ploskve po njihovi številki v telesu, 1 za prvo; polmer in, nad 0, polmer na koncu), **Prostornina telesa** (mm³) in **Telo v mrežo** (da ga vidite ali zapečete). Telo ima svojo vrsto priključka: točke ali števila ni mogoče povezati z vhodom telesa, pika pa ostane rdeča. Vozlišči Booleove operacije in Zaobljenost uporabljata lasten motor teles programa, ki se naloži, ko se urejevalnik prvič odpre.

## Napake

Vozlišče, ki ne more opraviti svoje naloge, pove, zakaj, pod svojim imenom v rdečem („Polmer mora biti večji od nič.“), vozlišča za njim pa čakajo. Isto sporočilo je tudi težava v podoknu Težave, zato ga najdete tudi tam.

## Vsako vozlišče je vrstica skripta

Pritisnite {{ui:Skript}}, da vidite graf kot CraftScript: ena vrstica na vozlišče, na primer `n3 = nd_circle(n2, n1, [0 0 1]);`. Uredite besedilo in pritisnite {{ui:Ustvari graf iz tega skripta}}, da ga spet pretvorite v graf. Iste funkcije `nd_` delujejo tudi v CraftScript v PartCraft, zato je graf tam mogoče zagnati, zanke ali preskusiti. Naključna števila vedno vzamejo **seme**, zato isti graf da isti rezultat na vsakem računalniku.

## Shranjeno z datoteko

Graf je shranjen v datoteki modela. Vozlišča naredijo lastne krivulje, površine in mreže: ne spremenijo ploskev modela, dokler tega ne zahtevate.

## Zapeci v model

Vklopite oko vozlišča, ki naredi površino ali mrežo, nato pritisnite {{ui:Zapeci v model}} v oknu Vozlišča. Vsaka prikazana površina ali mreža postane skupina ploskev v modelu, v metrih, ki jo lahko urejate kot vsako drugo. To je en korak razveljavitve. Graf ostane, vendar kopija ne sledi več: za novo spremenite število in ponovno zapecite. Točke in krivulje niso telesa, zato so izpuščene, sporočilo pa pove, koliko jih je.
