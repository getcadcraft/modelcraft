---
title: Modeliranje na situacijskom planu iz DWG ili DXF
summary: Uvedite CAD situacijski ili tlocrtni plan kao linije na tlu, odgovorite na pitanje o jedinicama i ocrtajte ga u plohe i mase.
keywords: situacijski plan, dwg, dxf, cad, uvoz, skica, fotografija skice, ručna skica, skica na salveti, fotografija, papir, boje olovke, dinamički blokovi, stanja vidljivosti, tekst, šrafura, spline, elipsa, 3D ploha, ocrtavanje, tlocrt, parcela, granica čestice, jedinice, podloga, kontekst
from: 3415dc96
---

ModelCraft može uvesti linije 2D CAD crteža, situacijskog plana ili tlocrta te ih položiti na tlo da možete modelirati iznad njih.

## Uvoz crteža

1. Kliknite {{ui:Uvezi}} u grupi {{ui:Datoteka}} (ili ispustite datoteku na 3D prikaz).
2. Odaberite datoteku `.dwg` ili `.dxf`.

   Velika DWG datoteka traje malo: statusna traka kaže „Čitam plan.dwg…“ dok se ne učita.

3. Ako crtež ne kaže koje su mu jedinice, dijaloški okvir naslovljen „Jedinice crteža“ pita: „Što je jedna jedinica crteža?“ Odaberite {{ui:Inči}}, {{ui:Stope}}, {{ui:Milimetri}} ili {{ui:Metri}}. Većina američkih situacijskih planova crta se u stopama, arhitektonski planovi u inčima, a metrički planovi u milimetrima.

   Crtež stiže kao grupa bridova na tlu, odabrana, a prikaz zumira na nju. Statusna traka kaže koliko je bridova uneseno, primjerice „Uvezeno: site.dwg: 1697 bridova na tlu, u grupi. Rastavite je da biste crtali izravno na njoj.“

## Što se uvozi

- Linije, polilinije (uključujući njihove lukove), kružnice i lukovi te blokovi sa svime u njima, samo iz **prostora modela**. Krivulje postaju kratki ravni dijelovi.
- Linije, polilinije, lukovi, kružnice, elipse i splajnovi padaju ravno na tlo, kao bridovi.
- **Šrafure** postaju plohe na tlu, s njihovim otocima kao rupama, pa odmah možete potisnuti/povući našrafirano područje.
- **3D plohe** i pune ispune postaju plohe; 3D plohe zadržavaju svoje visine.
- **Tekst** (jednoredni tekst, višeretčani tekst i vrijednosti atributa) crta se kao bridovi jednostavnim jednolinijskim pismom, na vlastitoj visini, kutu i poravnanju teksta. Njegov font nije font crteža, pa riječi mogu biti malo duže ili kraće. Znakovi za koje pismo nema oblik crtaju se kao mali okviri i broje se.
- **Kote** se crtaju onako kako ih crtež prikazuje (njihove crte, strelice i tekst, kao bridovi i plohe).
- **Dinamički blokovi** dolaze onako kako ih crtež prikazuje: svaki postavljeni blok u stanju vidljivosti u kojem je spremljen i samo linije tog stanja. Statusna traka ih navodi s prikazanim stanjima i ostalim stanjima koje svaki ima, primjerice „Receptacle prikazan kao Duplex ×38, GFI ×7 (stanja: Duplex, GFI)“. ModelCraft ne mijenja stanja.
- **3D puna tijela, područja i tijela** (ACIS podaci crteža) dolaze kao zasebne grupe: zatvoreno puno tijelo kao puno tijelo, područje ili otvoreno tijelo kao plohe. Ravne plohe dolaze cijele; zakrivljene plohe (cilindri, stošci, sfere, torusi, jednostavne splajn površine) kao mali trokuti s mekim bridovima među njima, pa se vide samo vlastiti bridovi tijela. Ploha na drugoj vrsti površine izostavlja se i navodi: „Još nije nacrtano (3D puna tijela): …“.
- Nije uvezeno: točke, tablice, višestruke vodilice, slike i drugi tipovi objekata. Statusna traka ih navodi po tipu, primjerice „Nije uvezeno: 12 POINT.“ Sve na layoutu (papirnom prostoru) također se izostavlja, bez navođenja.
- Slojevi se ne zadržavaju: sve linije dolaze jednako.

Ako je crtež daleko od svog ishodišta (primjerice koordinate državne ravnine), i dalje se uvozi, ali može pasti daleko od ishodišta ModelCraft. Crteži udaljeni više od 10.000 km od svog ishodišta odbijaju se: najprije pomaknite crtež bliže 0,0 u CAD programu.

## Ocrtavanje u plohe

Uvezene linije rijetko se same lijepo zatvore u plohe. Dva načina rada:

**Zadržite plan kao podlogu (preporučeno)**

1. Ostavite plan kao zasebnu grupu.
2. Nacrtajte zgradu iznad s {{ui:Pravokutnik}} i {{ui:Linija}}, hvatajući se za kutove plana („Krajnja točka“) i bridove („Na bridu“).
3. Potisnite/povucite svoje plohe prema gore. Plan ostaje netaknut ispod, a cijelu grupu kasnije možete izbrisati jednim klikom.

Hvatanje radi preko grupa: možete se hvatati za kutove plana bez njegova otvaranja.

**Crtajte po vlastitim linijama plana**

1. Odaberite grupu plana i kliknite {{ui:Rastavi}}. Njegove linije postaju slobodni bridovi.
2. Gdje zatvoreni obris treba biti ploha, nacrtajte jednu liniju preko bilo kojeg njegova brida s {{ui:Linija}}, od kuta do kuta. Kad je obris zatvoren i ravan, ploha se obično ispuni. Ako se ne ispuni, potražite prazninu ili preklapanje u obrisu i nacrtajte preko njega.
3. Potisnite/povucite je.

Ovo najbolje radi na čistom planu. Za zauzet geodetski snimak brže je ocrtavanje iznad.

## Problemi

- „Ovo je binarna DXF datoteka. Spremite je kao ASCII DXF i pokušajte ponovno.“ Ponovno spremite DXF iz CAD programa kao ASCII (tekst).
- „…u prostoru modela nema linija, lukova ni kružnica za uvoz.“ Crtež je vjerojatno sav na layoutima ili sav tekst i šrafure.
- „Ovaj crtež nije moguće pročitati (…). Možda je oštećen ili spremljen u DWG verziji koju čitač ne podržava…“ Zagrade kazuju razlog, primjerice „DWG verzija AC1009 nije podržana“. Spremite ga kao DXF ili kao DWG iz AutoCAD-a 2000 do 2018, iz CAD programa.
- Plan je krive veličine: odabrali ste krivu jedinicu. Poništite ({{key:Mod+Z}}) i uvezite ponovno, ili [skalirajte](topic:rotate-scale) grupu ispravnim faktorom (12 između stopa i inča, 25.4 između inča i milimetara).

Da izokote pretvorite u teren koji možete oblikovati, vidi [Teren](topic:terrain).

## Iz fotografije ručne skice

**Datoteka › Uvezi fotografiju skice…** uzima fotografiju skice na papiru (JPEG, PNG ili TIFF, izravno s telefona je u redu) i stvara iste vrste bridova na tlu. Recite koji je papir (ili neka ga sam pronađe, uzet kao A4) i mjerilo skice, primjerice 1 : 100. Rub papira se pronalazi i fotografija se ispravlja, tinta se ocrtava u linije i lukove, a svaka boja olovke (crna, crvena, plava, zelena) postaje zasebna grupa s oznakom (**Skica crna**, **Skica crvena**, …), sve unutar jedne grupe nazvane po fotografiji. To je jedan korak poništavanja i sve se događa na ovom računalu: ništa se nigdje ne šalje.

Kad se ne može pronaći rub papira, cijela fotografija uzima se kao list i statusna traka to kaže: izmjerite nešto što znate i skalirajte grupu ako nije točno. Ocrtajte linije u plohe kao gore.
