---
title: Uvoz .3dm modela
summary: Uvezite .3dm datoteku s njenim mrežama, površima, krivuljama, blokovima, slojevima i bojama; odakle dolaze trouglovi i šta je izostavljeno.
keywords: 3dm, uvoz, nurbs, polipovršina, brep, površi, mreža za prikaz, ekstruzija, krive, blokovi, slojevi, oznake, boje, jedinice, prebacivanje, migracija
from: 3cf29879
---

ModelCraft čita `.3dm` datoteke vlastitim čitačem, na stranici. Ništa se ne šalje, i radi van mreže kad i ModelCraft. Datoteke sačuvane u verzijama 5, 6, 7 i 8 su testirane; starije (verzije 2 do 4) bi se trebale otvoriti, ali još nisu isprobane.

## Uvezite datoteku

1. Kliknite {{ui:Import}} u grupi {{ui:File}} (ili prevucite `.3dm` datoteku na 3D prikaz).
2. Odaberite datoteku.

   Statusna traka kaže "Reading chair.3dm…" dok čita, pa šta je stiglo, npr. "Imported chair.3dm: 14 meshes (8330 faces), 8 curves, 5 block placements, 3 layers as tags. Surfaces: 7 faces from the meshes saved in the file, 29 tessellated by CadCraft."

Cijeli model stiže kao jedna grupa nazvana po datoteci, odabrana, i prikaz se zumira na nju. Jedan {{key:Mod+Z}} sve ponovo uklanja, uključujući oznake.

## Odakle dolaze trouglovi

ModelCraft radi s plohama i mrežama, pa svaka površ iz datoteke dolazi kao [mreža](topic:meshes) sitnih ravnih trouglova. Za svaku plohu polipovršine (i svaku ekstruziju) ModelCraft uzima, tim redoslijedom:

1. **Mrežu za prikaz sačuvanu u datoteci.** Većina programa za modeliranje čuva mrežu koju je prikazao na ekranu uz svaku površ; kad je ona tu, ModelCraft je koristi kakva jeste.
2. **Vlastitu tesalaciju**, kad datoteka nema sačuvanu mrežu: ravni, NURBS površi, površi rotacije (sfere, konusi, torusi, oblici tokarenja), ekstrudirane krive i ekstruzije (s njihovim rupama i završnim poklopcima), obrezane svojim ivicama. Plohe jedne polipovršine dijele tačke svojih ivica, pa se zatvorena polipovršina uvozi kao zatvorena mreža. Zakrivljena područja se dijele dok trouglovi ne leže unutar oko 0.15 % veličine objekta od prave površi.
3. **Ništa**, za plohu vrste površi koju ModelCraft još ne čita. Statusna traka kaže koliko ploha i koje vrste.

Dio "Surfaces:" u statusnoj traci kaže koliko ploha dolazi iz sačuvanih mreža, a koliko ih je ModelCraft tesalirao. Ivice unutar jedne plohe iz datoteke su meke, a ivice između dvije plohe oštre, pa zakrivljena ploha ima glatko senčenje.

:::tip
Za najvjernije oblike sačuvajte datoteku s njenim mrežama za prikaz u programu koji ju je napravio (to je obično podrazumijevano; opcija "save small" ih izostavlja).
:::

## Što dolazi

- **Mreže** s njihovim bojama vrhova i koordinatama teksture.
- **Polipovršine, površi i ekstruzije**, kako je opisano gore.
- **Krive** (linije, polilinije, lukovi, krugovi, NURBS krive i krive spojene od njih) kao [ivice](topic:curves), jedna grupa ivica po sloju.
- **Blokovi** postaju [komponente](topic:groups-components): svako postavljanje bloka je postavljanje jedne komponente, pa uređivanje jedne kopije mijenja sve. Blokovi unutar blokova se zadržavaju.
- **Slojevi** postaju [oznake](topic:tags) s punim nazivom sloja ("Furniture::Chairs"), skrivene kad je sloj bio isključen. Postavljanje svakog objekta nosi oznaku svog sloja.
- **Boje.** Boja objekta dolazi odakle datoteka kaže: njegova vlastita boja, boja njegovog sloja ili osnovna boja njegovog materijala. Postaje boja njegovih ploha.
- **Skriveni objekti dolaze skriveni**; {{ui:Unhide all}} ih prikazuje.
- **Jedinice:** datoteka kaže svoju jedinicu; model dolazi u svojoj stvarnoj veličini.

## Što je izostavljeno (i javlja se)

Dio "Notes:" u statusnoj traci imenuje sve što nije uvezeno, s brojem:

- tačke i oblaci tačaka, tekst, tačke teksta, kote, vodilice, šrafure, svjetla, ravni isjecanja i detalji rasporeda;
- SubD objekti: prvo ih pretvorite u mreže ili polipovršine u programu koji je napravio datoteku;
- plohe na pomaknutim površima i druge vrste površi koje ModelCraft još ne čita, kad datoteka za njih nije sačuvala mrežu;
- blokovi povezani iz drugih datoteka (čita se samo datoteka koju uvozite);
- ekstruzije s kosim (zakošenim) krajevima dolaze s pravim krajevima.

Teksture materijala, postavke prikaza, imenovani pogledi, grupe i korisnički tekst se ne čitaju; materijal daje samo osnovnu boju.

## Ograničenja

Datoteke do 300 MB. Oštećena datoteka kaže što nije u redu i ne dodaje ništa; jedan objekat koji se ne može pročitati se izostavlja i broji, a ostalo se uvozi.
