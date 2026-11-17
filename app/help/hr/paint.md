---
title: Bojanje bojama i materijalima
summary: Dajte plohama, grupama i komponentama punu boju ili materijal poput cigle, obloge, šindre ili drva te ih zadržite pri izvozu.
keywords: oboji, boja, boje, materijal, materijali, tekstura, teksture, cigla, obloga, šindra, krovni pokrov, drvo, kamen, pločica, beton, žbuka, trava, šljunak, staklo, metal, kanta s bojom, ispuna, uzorak, kapaljka, zadano, glb, obj, mtl, collada
from: b1500523
---

Boje pomažu razlikovati dijelove modela, a **materijali** (cigla, obloga, pokrov krova, drvo, kamen, pločica, beton, žbuka, trava, staklo, metal) čine da model izgleda kao od čega je izgrađen. Oboje se boji na isti način.

## Odabir boje

Odjeljak {{ui:Boje}} s desne strane prikazuje niz punih boja, {{ui:Zadano}} (ona precrtana crtom: bez boje) i uzorak {{ui:+}} za bilo koju drugu boju. Kliknite jednu da postane trenutna boja. Alat {{ui:Oboji}} počinje s njom.

## Bojanje

1. Pritisnite {{key:B}} ({{ui:Oboji}}) ili, ako ništa nije odabrano, kliknite boju. (Ako je nešto odabrano, klik na boju odmah boji odabir.)
2. Kliknite plohu da je obojite.
3. Kliknite grupu ili komponentu da obojite tu kopiju: njezine plohe koje nemaju vlastitu boju preuzimaju ovu boju. Plohe koje ste unutar nje obojili zadržavaju svoju boju.

Za bojanje više stvari odjednom odaberite ih prvo, pa kliknite boju, ili kliknite bilo koju od njih s {{ui:Oboji}}. To je jedan korak poništavanja.

| Držite | I kliknete plohu | Što se boji |
|---|---|---|
| — | | Ta ploha |
| {{key:Ctrl}} | | Svaka povezana ploha iste boje |
| {{key:Shift}} | | Svaka ploha te boje u grupi u kojoj radite |
| {{key:Alt}} | | Ništa: umjesto toga uzmite tu boju |

Da plohu vratite bez boje, odaberite {{ui:Zadano}} i kliknite je.

## Bojanje materijalom

Odjeljak {{ui:Materijali}}, ispod {{ui:Boje}}, navodi biblioteku materijala po vrstama: cigla i blok, obloga, pokrov krova, drvo, kamen, pločica, beton, žbuka, tlo, staklo i metal. Zadržite pokazivač na uzorku za njegov naziv. Kliknite jedan, pa bojajte točno kao bojom: {{key:B}}, kliknite plohe, grupe ili komponente; ili prvo odaberite pa kliknite materijal.

- U stilu **Sjenčano** plohe prikazuju teksturu materijala. Skriveni rubovi, žičani model i rendgen prikazuju njegovu boju.
- Teksture idu **ravno duž svake plohe** i **uz nju**: slojevi cigle ostaju vodoravni na svakom zidu, šindra ide niz nagib krova, a daske na podu prate crvenu os. Imaju stvarnu veličinu (cigla je oko 215 mm duga), pa izgledaju dobro na svakoj udaljenosti.
- U [renderiranoj slici](topic:render) materijali zadržavaju teksturu, hrapavost i, za staklo i metal, sjaj.
- {{key:Alt}}-klik s {{ui:Oboji}} također uzima materijal plohe.

Teksture crta sam ModelCraft, pa rade izvan mreže i slobodne su za upotrebu bilo čega (CC0).

## Komponente i boje

Boja nanesena na plohu **unutar** komponente prikazuje se na svakoj kopiji, jer kopije dijele jednu definiciju. Boja nanesena na **kopiju** izvana (kad je komponenta zatvorena) pripada samo toj kopiji, pa dvije kopije jedne komponente mogu imati različite boje. {{ui:Informacije o entitetu}} prikazuje boju odabrane plohe, grupe ili komponente.

## Boje u datotekama

- ModelCraft datoteka čuva svaku boju i svaki materijal.
- Ostali formati dobivaju **boju materijala** (njegov izgled izdaleka) umjesto teksture: glTF, Collada, OBJ, DWG i DXF, te provjera za 3D ispis. U glTF, Collada i OBJ materijal zadržava svoj naziv, poput `Material_brick-red`.
- **glTF (.glb)** i **Collada (.dae)**: svaka boja postaje materijal. Komponenta prikazana u različitim bojama zapisuje se jednom za svaku boju. glTF također zapisuje uvezene teksture kao teksture.
- **OBJ**: izvoz preuzima dvije datoteke, `.obj` i `.mtl` datoteku materijala s bojama. Držite ih u istoj mapi. S uvezenim teksturama `.obj`, `.mtl` i slike dolaze kao jedan `.zip`.
- **DWG** čuva točne boje; **DXF** koristi najbližu od 255 standardnih CAD boja.
- **STL** i **PLY** nose boje: STL u konvenciji VisCAM / SolidView (programi koji je ne čitaju je ignoriraju), PLY kao boju svake točke. Pogledajte [Formati datoteka detaljno](topic:formats).

:::tip
Da modelirate ekran, obojite okvir antracitno, a staklo plavo nakon što [odmaknete](topic:draw-faces) prednju plohu.
:::
