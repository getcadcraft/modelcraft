---
title: Modelovanje na situacionom planu iz DWG ili DXF
summary: Uvezite CAD situacioni ili tlocrtni plan kao linije na tlu, odgovorite na pitanje o jedinicama i ocrtajte ga u površine i mase.
keywords: situacioni plan, dwg, dxf, cad, uvoz, skica, fotografija skice, ručna skica, skica na salveti, fotografija, papir, boje olovaka, dinamički blokovi, stanja vidljivosti, tekst, šrafura, spline, elipsa, 3d površina, ocrtavanje, tlocrt, parcela, međa, jedinice, podloga, kontekst
from: 3415dc96
---

ModelCraft može uvesti linije 2D CAD crteža, situacionog plana ili tlocrta i položiti ih na tlo, da modelujete preko njih.

## Uvezite crtež

1. Kliknite {{ui:Uvezi}} u grupi {{ui:Datoteka}} (ili prevucite datoteku na 3D prikaz).
2. Izaberite `.dwg` ili `.dxf` datoteku.

   Veliki DWG traje malo: statusna traka piše "Čitam plan.dwg…" dok se ne učita.

3. Ako crtež ne kaže koje su mu jedinice, dijalog pod naslovom "Jedinice crteža" pita: "Šta je jedna jedinica crteža?" Izaberite {{ui:Inči}}, {{ui:Stope}}, {{ui:Milimetri}} ili {{ui:Metri}}. Većina američkih situacionih planova nacrtana je u stopama, arhitektonski u inčima, a metrički u milimetrima.

   Crtež stiže kao grupa ivica na tlu, odabrana, i prikaz zumira na nju. Statusna traka kaže koliko je ivica stiglo, na primjer "Uvezeno site.dwg: 1697 ivica na tlu, u grupi. Rastavite je da biste direktno crtali po njoj."

## Šta stiže

- Linije, polilinije (uključujući njihove lukove), krugovi i lukovi, te blokovi sa svime u njima, samo iz **prostora modela**. Krive postaju kratki ravni komadi.
- Linije, polilinije, lukovi, krugovi, elipse i splajnovi slijeću ravno na tlo, kao ivice.
- **Šrafure** postaju površine na tlu, s otocima kao rupama, pa možete odmah gurnuti/povući šrafiranu površinu.
- **3D površine** i pune ispune postaju površine; 3D površine zadržavaju svoje visine.
- **Tekst** (jednolinijski tekst, višelinijski tekst i vrijednosti atributa) crta se kao ivice jednostavnim jednolinijskim pismom, na vlastitoj visini, uglu i poravnanju teksta. Njegov font nije font crteža, pa riječi mogu biti malo duže ili kraće. Znakovi za koje pismo nema oblik crtaju se kao mali okviri i broje se.
- **Kote** se crtaju onako kako ih crtež prikazuje (njihove linije, strelice i tekst, kao ivice i površine).
- **Dinamički blokovi** stižu onako kako ih crtež prikazuje: svaki postavljeni blok u stanju vidljivosti u kojem je sačuvan, i samo linije tog stanja. Statusna traka ih navodi s prikazanim stanjima i ostalim stanjima koja svaki ima, na primjer "Receptacle prikazan kao Duplex ×38, GFI ×7 (stanja: Duplex, GFI)". ModelCraft ne mijenja stanja.
- **3D tijela, regije i tijela** (ACIS podaci crteža) stižu kao vlastite grupe: zatvoreno tijelo kao tijelo, regija ili otvoreno tijelo kao površine. Ravne površine stižu cijele; zakrivljene površine (cilindri, konusi, sfere, torusi, jednostavne splajn površine) kao mali trouglovi s mekim ivicama među njima, pa se vide samo vlastite ivice tijela. Površina na drugoj vrsti površi se izostavlja i navodi se: "Još nije nacrtano (3D tijela): …".
- Ne uvozi se: tačke, tabele, višestruke oznake, slike i drugi tipovi objekata. Statusna traka ih navodi po tipu, kao "Nije uvezeno: 12 POINT." Sve na rasporedu (papirni prostor) također se izostavlja, bez navođenja.
- Slojevi se ne zadržavaju: sve linije stižu jednako.

Ako je crtež daleko od svog ishodišta (npr. koordinate državne ravni), i dalje se uvozi, ali može sletjeti daleko od ishodišta ModelCraft-a. Crteži koji sežu više od 10,000 km od svog ishodišta se odbijaju: prvo pomjerite crtež bliže 0,0 u CAD programu.

## Ocrtajte ga u površine

Uvezene linije rijetko se same od sebe lijepo zatvaraju u površine. Dva načina rada:

**Zadržite plan kao podlogu (preporučeno)**

1. Ostavite plan kao vlastitu grupu.
2. Nacrtajte svoju zgradu preko plana s {{ui:Pravougaonik}} i {{ui:Linija}}, hvatajući za uglove plana ("Krajnja tačka") i ivice ("Na ivici").
3. Gurnite/povucite svoje površine gore. Plan ostaje netaknut ispod, a cijelu grupu kasnije možete obrisati jednim klikom.

Hvatanje radi preko grupa: možete hvatati za uglove plana bez njegovog otvaranja.

**Crtajte po linijama samog plana**

1. Odaberite grupu plana i kliknite {{ui:Rastavi}}. Njegove linije postaju slobodne ivice.
2. Gdje zatvoreni obris treba biti površina, nacrtajte jednu liniju preko bilo koje njegove ivice s {{ui:Linija}}, od ugla do ugla. Kad je obris zatvoren i ravan, površina se obično popuni. Ako ne, potražite prazninu ili preklapanje u obrisu i nacrtajte preko njega.
3. Gurnite/povucite je.

Ovo najbolje radi na čistom planu. Na zauzetom geodetskom snimku ocrtavanje preko je brže.

## Problemi

- "Ovo je binarni DXF. Sačuvajte ga kao ASCII DXF i pokušajte ponovo." Sačuvajte DXF ponovo iz CAD programa kao ASCII (tekst).
- "…nema linija, lukova ni krugova u prostoru modela za uvoz." Crtež je vjerovatno sav na rasporedima, ili sav od teksta i šrafura.
- "Ovaj crtež nije mogao biti pročitan (…). Možda je oštećen ili sačuvan u DWG verziji koju čitač ne podržava…" Zagrade kažu zašto, na primjer "DWG verzija AC1009 nije podržana". Sačuvajte ga kao DXF, ili kao DWG iz AutoCAD-a 2000 do 2018, iz CAD programa.
- Plan je pogrešne veličine: izabrali ste pogrešnu jedinicu. Poništite ({{key:Mod+Z}}) i uvezite ponovo, ili [skalirajte](topic:rotate-scale) grupu za ispravan faktor (12 između stopa i inča, 25.4 između inča i milimetara).

Da pretvorite konturne linije u tlo koje možete oblikovati, vidi [Teren](topic:terrain).

## Iz fotografije ručne skice

**Datoteka › Uvezi fotografiju skice…** uzima fotografiju skice na papiru (JPEG, PNG ili TIFF, direktno s telefona je u redu) i pravi istu vrstu ivica na tlu. Recite koji je papir (ili neka ga pronađe, uzima se kao A4) i razmjer skice, na primjer 1 : 100. Rub papira se pronalazi i fotografija se ispravlja, tinta se ocrtava u linije i lukove, a svaka boja olovke (crna, crvena, plava, zelena) postaje vlastita grupa s oznakom (**Skica crna**, **Skica crvena**, …), sve unutar jedne grupe nazvane po fotografiji. To je jedan korak poništavanja, i sve se dešava na ovom računaru: ništa se nigdje ne šalje.

Ako rub papira ne može biti pronađen, cijela fotografija uzima se kao list, a statusna linija to kaže: izmjerite nešto što znate i skalirajte grupu ako nije tačno. Ocrtajte linije u površine kao gore.
