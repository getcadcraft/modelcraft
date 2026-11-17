---
title: Modelovanje na planu lokacije iz DWG ili DXF
summary: Uvezi CAD plan lokacije ili tlocrt kao linije na tlu, odgovori na pitanje o jedinicama i ocrtaj ga u površine i mase.
keywords: plan lokacije, dwg, dxf, cad, uvoz, skica, fotografija skice, ručna skica, skica na salveti, fotografija, papir, boje olovke, dinamički blokovi, stanja vidljivosti, tekst, šrafura, splajn, elipsa, 3D površ, ocrtavanje, tlocrt, parcela, linija parcele, jedinice, podloga, kontekst
from: 3415dc96
---

ModelCraft može da uveze linije 2D CAD crteža, plana lokacije ili tlocrta i da ih položi na tlo, pa možeš da modeluješ preko njih.

## Uvezi crtež

1. Klikni {{ui:Uvezi}} u grupi {{ui:Datoteka}} (ili prevuci datoteku na 3D prikaz).
2. Izaberi `.dwg` ili `.dxf` datoteku.

   Veliki DWG traje malo: statusna traka kaže „Čitanje plan.dwg…“ dok ne stigne.

3. Ako crtež ne kaže koje su mu jedinice, dijalog pod naslovom „Jedinice crteža“ pita: „Koja je jedna jedinica crteža?“ Izaberi {{ui:Inči}}, {{ui:Stope}}, {{ui:Milimetri}} ili {{ui:Metri}}. Većina američkih planova lokacija crta se u stopama, arhitektonski planovi u inčima, a metrički planovi u milimetrima.

   Crtež stiže kao grupa ivica na tlu, izabrana, a prikaz se zumira na nju. Statusna traka kaže koliko je ivica stiglo, na primer „Uvezeno site.dwg: 1697 ivica na tlu, u grupi. Rastavi je da crtaš direktno na njoj.“

## Šta stiže

- Linije, polilinije (uključujući njihove lukove), krugovi i lukovi, i blokovi sa svime u njima, samo iz **prostora modela**. Krive postaju kratki ravni delovi.
- Linije, polilinije, lukovi, krugovi, elipse i splajnovi slažu se ravno na tlo, kao ivice.
- **Šrafure** postaju površine na tlu, sa svojim ostrvima kao rupama, pa možeš odmah da guraš/vučeš šrafiranu površinu.
- **3D površi** i punjenja tela postaju površine; 3D površi zadržavaju svoje visine.
- **Tekst** (jednoredni tekst, višeredni tekst i vrednosti atributa) crta se kao ivice jednostavnim jednolinijskim pismom, na visini, uglu i poravnanju samog teksta. Njegov font nije crtežev, pa reči mogu biti malo duže ili kraće. Znakovi za koje pismo nema oblik crtaju se kao mala polja i broje se.
- **Kote** se crtaju onako kako ih crtež prikazuje (njihove linije, strelice i tekst, kao ivice i površine).
- **Dinamički blokovi** stižu onako kako ih crtež prikazuje: svaki postavljeni blok u stanju vidljivosti u kojem je sačuvan, i samo linije tog stanja. Statusna traka ih navodi sa prikazanim stanjima i drugim stanjima koje svaki ima, na primer „Receptacle prikazan kao Duplex ×38, GFI ×7 (stanja: Duplex, GFI)“. ModelCraft ne menja stanja.
- **3D tela, oblasti i tela** (ACIS podaci crteža) stižu kao sopstvene grupe: zatvoreno telo kao telo, oblast ili otvoreno telo kao površine. Ravne površine stižu cele; zakrivljene (cilindri, konusi, sfere, torusi, jednostavne splajn površine) kao mali trouglovi sa mekim ivicama među njima, pa se vide samo sopstvene ivice tela. Površina na drugoj vrsti površi se izostavlja i navodi: „Još nije nacrtano (3D tela): …“.
- Nije uvezeno: tačke, tabele, višestruki izvodi, slike i drugi tipovi objekata. Statusna traka ih navodi po tipu, na primer „Nije uvezeno: 12 POINT.“ Sve na rasporedu (papirni prostor) takođe se izostavlja, bez navođenja.
- Slojevi se ne čuvaju: sve linije stižu jednako.

Ako je crtež daleko od svog početka (koordinate ravni stanja, na primer), i dalje se uvozi, ali može da sleti daleko od ModelCraft-ovog početka. Crteži udaljeni više od 10,000 km od svog početka se odbijaju: prvo pomeri crtež bliže 0,0 u CAD programu.

## Ocrtavanje u površine

Uvezene linije retko se same uredno zatvaraju u površine. Postoje dva načina:

**Zadrži plan kao podlogu (preporučeno)**

1. Ostavi plan kao sopstvenu grupu.
2. Nacrtaj zgradu preko njega sa {{ui:Pravougaonik}} i {{ui:Linija}}, hvatajući za uglove plana („Krajnja tačka“) i ivice („Na ivici“).
3. Gurni/vuci svoje površine naviše. Plan ostaje netaknut ispod, a celu grupu kasnije možeš obrisati jednim klikom.

Hvatanje radi preko grupa: možeš da hvataš za uglove plana bez njegovog otvaranja.

**Crtaj na linijama samog plana**

1. Izaberi grupu plana i klikni {{ui:Rastavi}}. Njegove linije postaju slobodne ivice.
2. Gde zatvoreni obris treba da bude površina, nacrtaj liniju preko bilo koje njegove ivice sa {{ui:Linija}}, od ugla do ugla. Kad je obris zatvoren i ravan, površina se obično sama popuni. Ako ne, traži prazninu ili preklapanje u obrisu i nacrtaj preko njega.
3. Gurni/vuci je.

Ovo najbolje radi na čistom planu. Na zauzetom geodetskom snimku, ocrtavanje preko je brže.

## Problemi

- „Ovo je binarni DXF. Sačuvaj ga kao ASCII DXF i pokušaj ponovo.“ Sačuvaj DXF ponovo iz CAD programa kao ASCII (tekst).
- „…nema linija, lukova ni krugova u prostoru modela za uvoz.“ Crtež je verovatno sav na rasporedima, ili sav tekst i šrafure.
- „Ovaj crtež nije mogao da se pročita (…). Možda je oštećen ili sačuvan u DWG verziji koju čitač ne podržava…“ Zagrade kažu zašto, na primer „DWG verzija AC1009 nije podržana“. Sačuvaj ga kao DXF, ili kao DWG iz AutoCAD-a od 2000 do 2018, iz CAD programa.
- Plan je pogrešne veličine: izabrao si pogrešnu jedinicu. Opozovi ({{key:Mod+Z}}) i uvezi ponovo, ili [skaliraj](topic:rotate-scale) grupu za ispravan faktor (12 između stopa i inča, 25.4 između inča i milimetara).

Da konturne linije pretvoriš u tlo koje možeš da oblikuješ, vidi [Teren](topic:terrain).

## Iz fotografije skice rukom

**Datoteka › Uvezi fotografiju skice…** uzima fotografiju skice na papiru (JPEG, PNG ili TIFF, pravo sa telefona je u redu) i pravi istu vrstu ivica na tlu. Reci koji je papir (ili pusti da ga nađe kao list, uzet kao A4) i razmeru skice, na primer 1 : 100. Ivica papira se nalazi i fotografija se ispravlja, mastilo se ocrtava u linije i lukove, a svaka boja olovke (crna, crvena, plava, zelena) postaje sopstvena grupa sa oznakom (**Skica crna**, **Skica crvena**, …), sve unutar jedne grupe nazvane po fotografiji. Ovo je jedan korak opozivanja, i sve se odvija na ovom računaru: ništa se nigde ne šalje.

Kad ivica papira ne može da se nađe, cela fotografija se uzima kao list, a statusna linija to kaže: izmeri nešto što znaš i skaliraj grupu ako nije tačno. Ocrtaj linije u površine kao gore.
