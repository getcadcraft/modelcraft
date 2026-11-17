---
title: Følg meg: dra en flate langs en bane
summary: Lag rør, kabler, rekkverk, lister og ringer ved å sveipe en flate langs kanter, buer eller en kurve.
keywords: følg meg, sveip, bane, rør, kabel, tube, rekkverk, håndlist, list, takrenne, ring, torus, dreie, ekstruder langs
from: ec7b3839
---

{{ui:Følg meg}} flytter en flate langs en bane og bygger volumlegemet den passerer gjennom. Flaten beholder formen sin og står vinkelrett på banen, og i hvert hjørne av banen møtes delene i en ren gjæring.

## Lag en kabel

1. Tegn banen: en {{ui:Kurve}} gjennom punktene kabelen går gjennom (den kan stige og falle), eller {{ui:Linje}}r og {{ui:Bue}}r satt sammen ende mot ende.
2. Ved starten av banen tegner du kabelens snitt: en liten {{ui:Sirkel}} tvers over banen. Start sirkelen på banens endepunkt og snu den slik at den vender langs banen; eller tegn den på en flate som krysser banen der.
3. Velg banen (ett klikk velger en hel kurve eller bue; {{key:Ctrl}}+klikk legger til flere kanter).
4. Klikk {{ui:Følg meg}} i gruppen {{ui:Endre}}, og klikk deretter sirkelen.

Røret er et lukket volumlegeme, med glatte (myke) sider.

## Uten å velge banen først

Klikk {{ui:Følg meg}}, klikk flaten, og klikk deretter en hvilken som helst kant på banen. Banen er kjeden av kanter gjennom den kanten, opp til der tre eller flere kanter møtes.

## Å vite

- **Lukkede baner** (en sirkel, en lukket kurve, omrisset av et rektangel) lager en ring: flaten brukes opp, og ringen lukker seg selv. Tegn en sirkel på bakken for banen, og en liten sirkel som står tvers over den, for en smultring.
- **Utenfor banen:** flaten må ikke røre banen. En profil tegnet ved siden av en bane sveipes langs ved siden av den, som en list langs toppen av en vegg.
- **Banen må ikke grene seg**, og den må være én sammenhengende kjede. ModelCraft sier fra når den ikke er det.
- **En flate som ligger langs banen** (i samme plan som banens første kant) kan ikke sveipes: vend den slik at den krysser banen.
- Det er ett angrepunkt.
