---
title: Uvoz 3DM modela
summary: Uvezite .3dm fajl sa njegovim mrežama, površima, krivama, blokovima, slojevima i bojama; odakle dolaze trouglovi i šta se izostavlja.
keywords: 3dm, uvoz, nurbs, poligrupa, brep, površi, mreža za renderovanje, izvlačenje, krive, blokovi, slojevi, oznake, boje, jedinice, prebacivanje, migracija
from: 3cf29879
---

ModelCraft čita `.3dm` fajlove sopstvenim čitačem, na stranici. Ništa se ne otprema, i radi van mreže kad i ModelCraft. Fajlovi sačuvani u verzijama 5, 6, 7 i 8 su isprobani; stariji (verzije 2 do 4) bi trebalo da se otvore, ali još nisu probani.

## Uvezite fajl

1. Kliknite {{ui:Uvezi}} u grupi {{ui:Datoteka}} (ili prevucite `.3dm` fajl na 3D prikaz).
2. Izaberite fajl.

   Statusna traka kaže „Čitam chair.3dm…“ dok čita, pa šta je ušlo, na primer „Uvezeno chair.3dm: 14 mreža (8330 površi), 8 krivih, 5 postavljanja blokova, 3 sloja kao oznake. Površi: 7 površi iz mreža sačuvanih u fajlu, 29 aproksimirano pomoću CadCraft-a.“

Ceo model stiže kao jedna grupa nazvana po fajlu, izabrana, a prikaz se zumira na nju. Jedan {{key:Mod+Z}} uklanja sve, uključujući oznake.

## Odakle dolaze trouglovi

ModelCraft modeluje površima i mrežama, pa svaka površ iz fajla stiže kao [mreža](topic:meshes) sitnih ravnih trouglova. Za svaku površ poligrupe (i svako izvlačenje) ModelCraft uzima, tim redom:

1. **Mrežu za renderovanje sačuvanu u fajlu.** Većina programa za modelovanje čuva mrežu koju je prikazao na ekranu uz svaku površ; kad je tu, ModelCraft je koristi onakvu kakva je.
2. **Sopstvenu aproksimaciju trouglovima**, kad fajl nema sačuvanu mrežu: ravni, NURBS površi, površi rotacije (sfere, konusi, torusi, oblici struga), izvučene krive i izvlačenja (sa njihovim rupama i krajnjim poklopcima), isečene svojim ivicama. Površi jedne poligrupe dele svoje tačke ivica, pa zatvorena poligrupa stiže kao zatvorena mreža. Zakrivljena mesta se dele dok trouglovi ne leže unutar oko 0.15 % veličine objekta od prave površi.
3. **Ništa**, za površ vrste koju ModelCraft još ne čita. Statusna traka kaže koliko površi i kakvih.

Deo „Površi:“ statusne trake kaže koliko je površi došlo iz sačuvanih mreža, a koliko ih je ModelCraft aproksimirao. Ivice unutar jedne površi iz fajla su meke, a ivice između dve površi oštre, pa zakrivljena površ senči glatko.

:::tip
Za najverniji oblik sačuvajte fajl sa njegovim mrežama za renderovanje u programu koji ga je napravio (to je obično podrazumevano; opcija „sačuvaj malo“ ih izostavlja).
:::

## Šta dolazi

- **Mreže** sa njihovim bojama temena i koordinatama teksture.
- **Poligrupe, površi i izvlačenja**, kao što je opisano gore.
- **Krive** (linije, polilinije, lukovi, krugovi, NURBS krive i krive spojene od njih) kao [ivice](topic:curves), jedna grupa ivica po sloju.
- **Blokovi** postaju [komponente](topic:groups-components): svako postavljanje bloka je postavljanje jedne komponente, pa izmena jedne kopije menja sve. Blokovi unutar blokova se zadržavaju.
- **Slojevi** postaju [oznake](topic:tags) sa punim nazivom sloja („Furniture::Chairs“), skrivene kad je sloj bio isključen. Postavljanje svakog objekta nosi oznaku svog sloja.
- **Boje.** Boja objekta dolazi odakle fajl kaže: sopstvena boja, boja sloja ili osnovna boja materijala. Postaje boja njegovih površi.
- **Skriveni objekti stižu skriveni**; {{ui:Prikaži sve}} ih prikazuje.
- **Jedinice:** fajl kaže svoju jedinicu; model stiže u svojoj pravoj veličini.

## Šta se izostavlja (i kaže se)

Deo „Napomene:“ statusne trake navodi sve što nije ušlo, sa brojem:

- tačke i oblaci tačaka, tekst, tačke teksta, kote, pokazne linije, šrafure, svetla, ravni isecanja i detalji rasporeda;
- SubD objekti: prvo ih pretvorite u mreže ili poligrupe u programu koji je napravio fajl;
- površi na pomerenim površima i druge vrste površi koje ModelCraft još ne čita, kad fajl za njih nije sačuvao mrežu;
- blokovi povezani iz drugih fajlova (čita se samo fajl koji uvozite);
- izvlačenja sa kosim (ukrštenim) krajevima dolaze sa pravim krajevima.

Teksture materijala, podešavanja renderovanja, imenovani pogledi, grupe i korisnički tekst se ne čitaju; materijal daje samo osnovnu boju.

## Ograničenja

Fajlovi do 300 MB. Oštećen fajl kaže šta nije u redu i ne dodaje ništa; jedan objekat koji se ne može pročitati se izostavlja i broji, a ostalo ulazi.
