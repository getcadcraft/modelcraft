---
title: "Följ mig: dra en yta längs en bana"
summary: Gör rör, kablar, räcken, lister och ringar genom att dra en yta längs kanter, bågar eller en kurva.
keywords: följ mig, svep, bana, rör, kabel, slang, räcke, list, hängränna, ring, torus, svarvning, extrudera längs
from: ec7b3839
---

{{ui:Följ mig}} flyttar en yta längs en bana och bygger solidet som den passerar genom. Ytan behåller sin form och står kvar vinkelrätt mot banan, och vid varje hörn av banan möts delarna i en ren geringsskärning.

## Gör en kabel

1. Rita banan: en {{ui:Kurva}} genom punkterna som kabeln passerar (den kan stiga och falla), eller linjer och bågar från {{ui:Linje}} och {{ui:Båge}} sammanfogade ände mot ände.
2. Rita kabelns sektion i banans start: en liten {{ui:Cirkel}} tvärs över banan. Starta cirkeln i banans ändpunkt och vrid den så att den vetter längs banan; eller rita den på en yta som korsar banan där.
3. Markera banan (ett klick markerar en hel kurva eller båge; {{key:Ctrl}}+klick lägger till fler kanter).
4. Klicka på {{ui:Följ mig}} i gruppen {{ui:Ändra}}, och klicka sedan på cirkeln.

Slangen är ett slutet solid, med släta (mjuka) sidor.

## Utan att markera banan först

Klicka på {{ui:Följ mig}}, klicka på ytan och klicka sedan på valfri kant i banan. Banan är kedjan av kanter genom den kanten, upp till där tre eller fler kanter möts.

## Att tänka på

- **Slutna banor** (en cirkel, en sluten kurva, konturen av en rektangel) gör en ring: ytan förbrukas och ringen sluter sig själv. Rita en cirkel på marken för banan och en liten cirkel som står tvärs över den för en munk.
- **Utanför banan:** ytan behöver inte röra banan. En profil ritad bredvid en bana sveper längs den, som en list längs toppen av en vägg.
- **Banan får inte förgrenas**, och den måste vara en sammanhängande kedja. ModelCraft säger till när den inte är det.
- **En yta som ligger längs banan** (i samma plan som banans första kant) kan inte svepas: vrid den så att den korsar banan.
- Det är ett steg att ångra.
