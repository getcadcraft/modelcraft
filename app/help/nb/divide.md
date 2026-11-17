---
title: Del en kant eller kurve i like deler
summary: Del en linje i like biter, eller gi en bue eller sirkel et nytt antall segmenter, med verktøyet Del.
keywords: del, del kant, like deler, like segmenter, splitt kant, segmenter, underdel, del kanter, buesegmenter, sirkelsegmenter, punkter langs en linje
from: 5c3ce3ed
---

{{ui:Del}} deler en kant i like deler, med et hjørne ved hvert kutt. Bruk hjørnene til å feste til, til å starte linjer fra, eller til å skyve og trekke deler av en flate.

## Del en kant

1. Klikk {{ui:Del}} i verktøylinjen, eller velg en kant og klikk {{ui:Del…}} i {{ui:Elementinfo}}.
2. Pek på kanten. Merkene viser hvor kuttene blir: over midten av kanten blir det to deler; flytt mot en ende for flere.
3. Klikk for å dele den i delene som vises. Eller skriv et tall, for eksempel `5` (eller `5s`, eller `/5`), og trykk {{key:Enter}}: den deles med én gang.

Delene blir liggende valgt, og det er ett trinn å angre. En flate kanten hører til, beholder formen sin og får de nye hjørnene.

## Del en bue eller en sirkel

Pek på et hvilket som helst segment av en bue eller sirkel: den deles som helhet.

- En bue eller sirkel som ingen andre hjørner bruker, og som ligger flatt på flaten sin, **tegnes på nytt med så mange segmenter** på den virkelige buen. Endepunktene blir liggende der de er, og den er fortsatt én kurve, så du kan velge den med ett klikk og endre radiusen i {{ui:Elementinfo}}. En sirkel med 24 sider som deles i 8, blir en åttekant.
- Enhver annen kurve — kanten på en trukket sylinder, en kurve tegnet med {{ui:Kurve}}, en bue med linjer festet til hjørnene — får nye hjørner med like lengder langs seg, og ingenting flyttes.

## Med modelleringstastene

Verktøyet er det samme med modelleringstastene (Innstillinger › ModelCraft › Taster, eller Modeler-menystilen), der det ligger i {{ui:Nett}}-menyen som {{ui:Del kanter}}.

## Ting å vite

- Skrevne tall går fra 2 til 1000; når du beveger pekeren, gis opptil 100.
- En kurve tegnet med {{ui:Kurve}} beholder punktene sine: etter {{ui:Rediger punkter}} tegnes den på nytt fra dem, og de nye hjørnene er borte.

Se også [Tegn flater med linjer, rektangler, sirkler og buer](topic:draw-faces) og [Skriv inn nøyaktige størrelser i verdiboksen](topic:value-box).
