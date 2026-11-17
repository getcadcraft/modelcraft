---
title: Bojenje bojama i materijalima
summary: Dajte površinama, grupama i komponentama punu boju ili materijal kao što su cigla, fasadna obloga, šindra ili drvo, i zadržite ih pri izvozu.
keywords: boji, boja, boje, materijal, materijali, tekstura, teksture, cigla, fasadna obloga, šindra, krovni pokrivač, drvo, kamen, pločica, beton, štuk, trava, šljunak, staklo, metal, kanta za boju, popuni, uzorak, pipeta, podrazumevano, glb, obj, mtl, collada
from: b1500523
---

Boje vam pomažu da razlikujete delove modela, a **materijali** (cigla, fasadna obloga, krovni pokrivač, drvo, kamen, pločica, beton, štuk, trava, staklo, metal) čine da model izgleda kao ono od čega je izgrađen. Oboje se nanosi na isti način.

## Izbor boje

Odeljak {{ui:Colors}} s desne strane prikazuje red punih boja, {{ui:Default}} (onu precrtanu linijom: bez boje) i polje {{ui:+}} za bilo koju drugu boju. Kliknite jednu da je postavite kao trenutnu boju. Alatka {{ui:Paint}} počinje s njom.

## Bojenje

1. Pritisnite {{key:B}} ({{ui:Paint}}) ili, kad ništa nije izabrano, kliknite boju. (Kad je nešto izabrano, klik na boju odmah boji izbor.)
2. Kliknite površinu da je obojite.
3. Kliknite grupu ili komponentu da obojite taj primerak: njene površine koje nemaju sopstvenu boju dobijaju ovu boju. Površine koje ste obojili unutar nje zadržavaju svoju.

Da biste obojili više stvari odjednom, prvo ih izaberite pa kliknite boju, ili kliknite bilo koju od njih alatkom {{ui:Paint}}. To je jedan korak opozivanja.

| Držite | Pa kliknete površinu | Šta se boji |
|---|---|---|
| — | | Tu površinu |
| {{key:Ctrl}} | | Svaku površinu povezanu s njom koja ima istu boju |
| {{key:Shift}} | | Svaku površinu te boje u grupi u kojoj radite |
| {{key:Alt}} | | Ništa: umesto toga preuzimate tu boju |

Da biste površinu vratili na bez boje, izaberite {{ui:Default}} i kliknite je.

## Bojenje materijalom

Odeljak {{ui:Materials}}, ispod {{ui:Colors}}, navodi biblioteku materijala po vrstama: cigla i blokovi, fasadna obloga, krovni pokrivač, drvo, kamen, pločica, beton, štuk, teren, staklo i metal. Zadržite pokazivač nad uzorkom da vidite njegov naziv. Kliknite jedan, pa bojite kao i bojom: {{key:B}}, kliknite površine, grupe ili komponente; ili prvo izaberite pa kliknite materijal.

- U stilu **Senčeno** površine prikazuju teksturu materijala. Skrivene linije, žičani model i rendgenski prikaz pokazuju njegovu boju.
- Teksture se **pružaju vodoravno duž svake površine** i **uz nju**: redovi cigle ostaju vodoravni na svakom zidu, šindra ide niz nagib krova, a daske na podu prate crvenu osu. Imaju stvarnu veličinu (cigla je duga oko 215 mm), pa izgledaju dobro na svakoj daljini.
- U [renderovanoj slici](topic:render) materijali zadržavaju svoju teksturu, hrapavost i, za staklo i metal, svoj sjaj.
- {{key:Alt}}-klik alatkom {{ui:Paint}} preuzima i materijal površine.

Teksture crta sam ModelCraft, pa rade van mreže i slobodne su za upotrebu bilo gde (CC0).

## Komponente i boje

Boja nanesena na površinu **unutar** komponente prikazuje se na svakom primerku, jer primerci dele jednu definiciju. Boja nanesena na **primerak** spolja (kad je komponenta zatvorena) pripada samo tom primerku, pa dva primerka iste komponente mogu imati različite boje. {{ui:Entity info}} prikazuje boju izabrane površine, grupe ili komponente.

## Boje u datotekama

- ModelCraft datoteka čuva svaku boju i svaki materijal.
- Ostali formati dobijaju **boju materijala** (njegov izgled izdaleka) umesto teksture: glTF, Collada, OBJ, DWG i DXF, kao i provera za 3D štampanje. U glTF, Collada i OBJ materijal zadržava svoje ime, kao što je `Material_brick-red`.
- **glTF (.glb)** i **Collada (.dae)**: svaka boja postaje materijal. Komponenta prikazana u različitim bojama upisuje se jednom za svaku boju. glTF takođe upisuje uvezene teksture kao teksture.
- **OBJ**: izvoz preuzima dve datoteke, `.obj` i `.mtl` datoteku materijala sa bojama. Čuvajte ih u istoj fascikli. Sa uvezenim teksturama, `.obj`, `.mtl` i slike stižu kao jedan `.zip`.
- **DWG** čuva tačne boje; **DXF** koristi najbližu od 255 standardnih CAD boja.
- **STL** i **PLY** nose boje: STL u VisCAM / SolidView konvenciji (programi koji je ne čitaju je ignorišu), PLY kao boju na svakoj tački. Pogledajte [Formati datoteka detaljno](topic:formats).

:::tip
Da biste modelovali ekran, obojite okvir u antracit, a staklo u plavo, nakon što [ofsetujete](topic:draw-faces) prednju površinu.
:::
