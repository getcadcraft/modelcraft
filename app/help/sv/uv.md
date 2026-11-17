---
title: Lägg ut ett nätobjekts UV
summary: Markera sömmar, veckla ut, projicera och packa ett nätobjekts texturkoordinater i UV-arbetsytan, och kontrollera dem med en schackruta och sträckningsfärgerna.
keywords: uv, uvs, unwrap, unwrapping, söm, sömmar, textur, texturkoordinater, atlas, packa, packning, ö, öar, schackruta, sträckning, förvrängning, lådprojektion, cylinderprojektion, sfärprojektion, konform, vinkelbaserad, lscm, abf
from: 00028f20
---

En textur är en plan bild; ett nät är inte plant. Dess **UV-koordinater** anger var varje hörn av varje yta hamnar på bilden. UV-arbetsytan skapar dem: du skär upp nätet längs **sömmar**, lägger ut bitarna plant (**veckla ut**) och passar in dem i kvadraten (**packa**).

## Öppna den

Markera ett nät och välj {{ui:UV}} i listan över arbetsytor. En grupp eller komponent blir först ett nät, som i arbetsytan Nät. 3D-vyn flyttar till vänster halva; **UV-redigeraren** till höger visar nätets ytor utlagda på texturkvadraten. Markering fungerar som i arbetsytan Nät, och det du markerar i den ena vyn markeras i den andra.

## Markera sömmar

Sömmar är där nätet får skäras upp; de visas röda i båda vyerna.

- Markera kanter ({{ui:Edge}}, eller {{key:2}}) och tryck på {{ui:Mark seam}} ({{key:Ctrl+E}}). {{ui:Clear seam}} ({{key:Ctrl+Shift+E}}) tar bort dem.
- {{ui:Seams at sharp}} markerar varje skarp kant och varje kant där ytor möts i mer än 60°: en låda faller isär i sina sex sidor.
- {{ui:Seams from UVs}} markerar sömmar där UV-koordinaterna redan bryts, till exempel efter en projektion.

En sluten del behöver sömmar för att ligga plant: en boll behöver minst ett snitt, ett rör ett snitt längs sin längd.

## Veckla ut

Markera de ytor som ska läggas ut (eller inga, för hela nätet) och tryck på {{ui:Unwrap}} ({{key:U}}). Varje bit mellan sömmar läggs plant och behåller sina vinklar så sanna det går (vinkelbaserad utplattning), sedan packas bitarna in i kvadraten. {{ui:Conformal}} veckar ut med minsta-kvadrat-konforma avbildningar i stället: snabbare, men något mindre sant på starkt krökta bitar. En form som kan göras av ett plant ark, till exempel en cylinders sida skuren en gång, veckas ut utan någon sträckning alls.

## Projicera

För enkla former räcker ofta en projektion:

| Projektion | Vad den gör |
| --- | --- |
| {{ui:Box}} | Varje yta ner på den lådsida den vetter mest mot |
| {{ui:Cylinder}} | Runt den blå axeln: tvärs över är vinkeln runt, uppåt är höjden |
| {{ui:Sphere}} | Från mittpunkten: tvärs över är vinkeln runt, uppåt är latituden |
| {{ui:From view}} | Så som ytorna ser ut i 3D-vyn just nu |

En yta över cylinderns eller sfärens skarv hålls i en bit, så dess UV-koordinater kan gå en liten bit förbi kvadratens högra kant; texturer upprepas där.

## Ordna

- {{ui:Pack}} passar in bitarna (öarna) i kvadraten vid en texelstorlek, var och en vänd så att den tar minst plats. Panelen anger utrymmet mellan dem.
- {{ui:Turn 90°}} och {{ui:Mirror}} vrider eller speglar de markerade ytornas UV-koordinater.
- I UV-redigeraren drar du en markerad yta för att flytta markeringens UV-koordinater, eller pekar i redigeraren och trycker på {{key:R}} eller {{key:S}} och flyttar för att vrida eller skala dem (ett klick behåller det, {{key:Esc}} avbryter). {{key:G}} flyttar utan att dra. Dubbelklicka på en yta (eller {{key:L}}) för att markera hela dess ö. Hjulet zoomar; dra med mittenknappen eller högerknappen för att panorera; {{key:F}} anpassar kvadraten igen.

Varje ändring är ett ångra-steg.

## Kontrollera dem

- {{ui:Checker}} visar ett märkt schackrutemönster på nätet i dess UV-koordinater: jämna, kvadratiska rutor betyder att texturen ligger jämnt; etiketterna visar åt vilket håll den går.
- {{ui:Stretch}} färgar varje yta efter hur mycket dess UV-koordinater sträcker den: blått är ingen, över grönt, till rött för mycket. Panelen väljer om den mäter **böjda vinklar** eller **ändrad storlek**, och visar medelvärdet.

Se även [Redigera ett nät](topic:mesh-edit), [Nät](topic:meshes) och [Modifierare på ett nät](topic:modifiers).
