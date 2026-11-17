---
title: Uvoz .3dm modela
summary: Uvezite .3dm datoteku s njezinim mrežama, plohama, krivuljama, blokovima, slojevima i bojama; odakle dolaze trokuti i što je izostavljeno.
keywords: 3dm, uvoz, nurbs, polysurface, brep, plohe, mreža za prikaz, izvlačenje, krivulje, blokovi, slojevi, oznake, boje, jedinice, prebacivanje, migracija
from: 3cf29879
---

ModelCraft čita `.3dm` datoteke vlastitim čitačem, na stranici. Ništa se ne učitava na poslužitelj, a radi izvan mreže kad god radi i ModelCraft. Datoteke spremljene u formatima verzija 5, 6, 7 i 8 su testirane; starije (verzije 2 do 4) bi se trebale otvoriti, ali još nisu isprobane.

## Uvezite datoteku

1. Kliknite {{ui:Uvezi}} u grupi {{ui:Datoteka}} (ili povucite `.3dm` datoteku na 3D prikaz).
2. Odaberite datoteku.

   Statusna traka kaže "Čitanje chair.3dm…" dok čita, zatim što je uvezeno, npr. "Uvezena datoteka chair.3dm: 14 mreža (8330 ploha), 8 krivulja, 5 postavljanja blokova, 3 sloja kao oznake. Plohe: 7 ploha iz mreža spremljenih u datoteci, 29 tesselirao CadCraft."

Cijeli model dolazi kao jedna grupa nazvana po datoteci, odabrana, a prikaz se primiče na nju. Jedno {{key:Mod+Z}} sve ponovno uklanja, uključujući oznake.

## Odakle dolaze trokuti

ModelCraft modelira s plohama i mrežama, pa svaka ploha u datoteci dolazi kao [mreža](topic:meshes) malih ravnih trokuta. Za svaku plohu polysurfacea (i svako izvlačenje) ModelCraft uzima, tim redom:

1. **Mrežu za prikaz spremljenu u datoteci.** Većina programa za modeliranje sprema mrežu koju je prikazao na zaslonu uz svaku plohu; kad postoji, ModelCraft je koristi kakva jest.
2. **Vlastitu tesselaciju**, kad datoteka nema spremljenu mrežu: ravnine, NURBS plohe, plohe rotacije (kugle, stošci, torusi, tokarski oblici), izvučene krivulje i izvlačenja (s provrtima i krajnjim poklopcima), obrezane prema svojim bridovima. Plohe jednog polysurfacea dijele točke bridova, pa se zatvoreni polysurface uvozi kao zatvorena mreža. Zakrivljena područja se dijele dok trokuti ne leže unutar oko 0.15 % veličine objekta od prave plohe.
3. **Ništa**, za plohu vrste koju ModelCraft još ne čita. Statusna traka kaže koliko je ploha i kakve vrste.

Dio "Plohe:" statusne trake kaže koliko je ploha došlo iz spremljenih mreža, a koliko ih je ModelCraft tesselirao. Bridovi unutar jedne plohe datoteke su meki, a bridovi između dviju ploha oštri, pa zakrivljena ploha ima glatko sjenčanje.

:::tip
Za najvjerniji oblik spremite datoteku s njezinim mrežama za prikaz u programu koji ju je izradio (to je obično zadano; opcija "spremi malo" ih izostavlja).
:::

## Što dolazi

- **Mreže** s bojama vrhova i koordinatama tekstura.
- **Polysurfacei, plohe i izvlačenja**, kako je opisano gore.
- **Krivulje** (linije, polilinije, lukovi, kružnice, NURBS krivulje i krivulje spojene od njih) kao [bridovi](topic:curves), jedna grupa bridova po sloju.
- **Blokovi** postaju [komponente](topic:groups-components): svako postavljanje bloka je postavljanje jedne komponente, pa uređivanje jedne kopije mijenja sve. Blokovi unutar blokova se zadržavaju.
- **Slojevi** postaju [oznake](topic:tags) s punim nazivom sloja ("Furniture::Chairs"), skrivene kad je sloj bio isključen. Svaki postavljeni objekt nosi oznaku svog sloja.
- **Boje.** Boja objekta dolazi odakle datoteka kaže: vlastita boja, boja njegova sloja ili osnovna boja materijala. Postaje boja njegovih ploha.
- **Skriveni objekti dolaze skriveni**; {{ui:Prikaži sve}} ih prikazuje.
- **Jedinice:** datoteka kaže svoju jedinicu; model dolazi u svojoj stvarnoj veličini.

## Što je izostavljeno (i navedeno)

Dio "Bilješke:" statusne trake navodi sve što nije uvezeno, s brojem:

- točke i oblaci točaka, tekst, točke teksta, kote, vodilice, šrafure, svjetla, ravnine rezanja i detalji rasporeda;
- SubD objekti: prvo ih pretvorite u mreže ili polysurfacee u programu koji je izradio datoteku;
- plohe na pomaknutim plohama i druge vrste ploha koje ModelCraft još ne čita, kad datoteka za njih nije spremila mrežu;
- blokovi povezani iz drugih datoteka (čita se samo datoteka koju uvozite);
- izvlačenja s kosim (zakošenim) krajevima dolaze s ravnim krajevima.

Teksture materijala, postavke prikaza, imenovani pogledi, grupe i korisnički tekst se ne čitaju; materijal daje samo osnovnu boju.

## Ograničenja

Datoteke do 300 MB. Oštećena datoteka kaže što nije u redu i ništa ne dodaje; jedan objekt koji se ne može pročitati se izostavlja i broji, a ostatak se uvozi.
