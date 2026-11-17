---
title: Bojenje bojama i materijalima
summary: Dajte površinama, grupama i komponentama punu boju ili materijal kao što su cigla, obloga, šindra ili drvo, i zadržite ih kad izvezete.
keywords: boji, boja, boje, materijal, materijali, tekstura, teksture, cigla, obloga, šindra, krovni pokrivač, drvo, kamen, pločica, beton, štuko, trava, šljunak, staklo, metal, kanta za boju, popuni, uzorak, pipeta, zadano, glb, obj, mtl, collada
from: b1500523
---

Boje vam pomažu da razlikujete dijelove modela, a **materijali** (cigla, obloga, krovni pokrivač, drvo, kamen, pločica, beton, štuko, trava, staklo, metal) čine da model izgleda od čega je građen. Oboje se boji na isti način.

## Odaberi boju

Odjeljak {{ui:Colors}} s desne strane prikazuje red punih boja, {{ui:Default}} (onu prečrtanu linijom: bez boje) i polje {{ui:+}} za bilo koju drugu boju. Kliknite jednu da postane trenutna boja. Alat {{ui:Paint}} počinje s njom.

## Boji

1. Pritisnite {{key:B}} ({{ui:Paint}}), ili, kad ništa nije odabrano, kliknite boju. (Kad je nešto odabrano, klik na boju odmah boji odabir.)
2. Kliknite površinu da je obojite.
3. Kliknite grupu ili komponentu da obojite tu kopiju: njene površine koje nemaju svoju boju uzimaju ovu boju. Površine koje ste obojili unutar nje zadržavaju svoje.

Da obojite više stvari odjednom, prvo ih odaberite pa kliknite boju, ili kliknite bilo koju od njih alatom {{ui:Paint}}. To je jedan korak poništavanja.

| Držite | I kliknete površinu | Šta se boji |
|---|---|---|
| — | | Tu površinu |
| {{key:Ctrl}} | | Svaku površinu povezanu s njom koja ima istu boju |
| {{key:Shift}} | | Svaku površinu te boje u grupi u kojoj radite |
| {{key:Alt}} | | Ništa: umjesto toga uzimate tu boju |

Da površinu vratite bez boje, izaberite {{ui:Default}} i kliknite je.

## Boji materijalom

Odjeljak {{ui:Materials}}, ispod {{ui:Colors}}, navodi biblioteku materijala po vrsti: cigla i blok, obloga, krovni pokrivač, drvo, kamen, pločica, beton, štuko, tlo, staklo i metal. Zadržite pokazivač iznad uzorka da vidite njegovo ime. Kliknite jedan, pa bojite kao i bojom: {{key:B}}, kliknite površine, grupe ili komponente; ili prvo odaberite pa kliknite materijal.

- U stilu **Shaded** površine prikazuju teksturu materijala. Skrivena linija, žičani okvir i rendgen prikazuju njegovu boju.
- Teksture se postavljaju **vodoravno duž svake površine** i **uz nju**: redovi cigle ostaju ravni na svakom zidu, šindra ide niz nagib krova, daske na podu prate crvenu osu. Imaju stvarnu veličinu (cigla je otprilike 215 mm duga), pa izgledaju ispravno na svakoj udaljenosti.
- U [renderovanoj slici](topic:render) materijali zadržavaju svoju teksturu, hrapavost i, za staklo i metal, svoj sjaj.
- {{key:Alt}}-klik s {{ui:Paint}} preuzima i materijal površine.

Teksture crta sam ModelCraft, pa rade van mreže i slobodne su za upotrebu bilo čega (CC0).

## Komponente i boje

Boja nanesena na površinu **unutar** komponente prikazuje se na svakoj kopiji, jer kopije dijele jednu definiciju. Boja nanesena na **kopiju** spolja (kad je komponenta zatvorena) pripada samo toj kopiji, pa dvije kopije jedne komponente mogu imati različite boje. {{ui:Entity info}} prikazuje boju odabrane površine, grupe ili komponente.

## Boje u datotekama

- ModelCraft datoteka čuva svaku boju i svaki materijal.
- Ostali formati dobijaju **boju materijala** (njegov izgled izdaleka) umjesto teksture: glTF, Collada, OBJ, DWG i DXF, te provjera za 3D štampanje. U glTF, Collada i OBJ materijal zadržava svoje ime, kao `Material_brick-red`.
- **glTF (.glb)** i **Collada (.dae)**: svaka boja postaje materijal. Komponenta prikazana u različitim bojama upisuje se jednom po boji. glTF također upisuje uvezene teksture kao teksture.
- **OBJ**: izvoz preuzima dvije datoteke, `.obj` i `.mtl` datoteku materijala s bojama. Držite ih u istom folderu. S uvezenim teksturama, `.obj`, `.mtl` i slike stižu kao jedan `.zip`.
- **DWG** čuva tačne boje; **DXF** koristi najbližu od 255 standardnih CAD boja.
- **STL** i **PLY** nose boje: STL u VisCAM / SolidView konvenciji (programi koji je ne čitaju je ignorišu), PLY kao boju na svakoj tački. Pogledajte [Formati datoteka detaljno](topic:formats).

:::tip
Da modelujete ekran, obojite okvir u ugljen sivu, a staklo u plavu nakon što [pomaknete](topic:draw-faces) prednju površinu.
:::
