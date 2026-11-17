---
title: Importér en SKP-model
summary: Importér en .skp-fil med dens grupper, komponenter, farver, teksturer, tags og bløde kanter, se hvad der kom ind og ikke kom ind, og fortsæt med at modellere.
keywords: skp, importér, åbn skp, komponenter, grupper, tags, lag, materialer, farver, teksturer, skjult, bløde kanter, 3D Warehouse, migrér, skift
from: 325d3c81
---

ModelCraft læser SketchUp-filer (`.skp`) med sin egen læser, på siden. Intet uploades, og det virker offline, når ModelCraft gør. Filer fra SketchUp 3 og op til 2026 er testet.

## Importér filen

1. Klik på {{ui:Importér}} i gruppen {{ui:Fil}} (eller slip `.skp`-filen på 3D-visningen).
2. Vælg filen.

   Statuslinjen siger »Læser house.skp…«, mens den læser, og derefter hvad der kom ind, f.eks. »Importerede house.skp (SketchUp 25.0.575): 1240 flader, 6 komponenter, i en gruppe.«

Hele modellen kommer ind som én gruppe med filens navn, valgt, og visningen zoomer til den. Ét {{key:Mod+Z}} fjerner det hele igen, inklusive tags.

:::tip
Eksplodér importgruppen ({{ui:Objektinfo}} › {{ui:Eksplodér}}), når du vil have dens indhold løst i din model i stedet for i én gruppe.
:::

## Hvad der kommer med

- **Flader** med deres huller, og **kanter**, der ikke er en del af en flade.
- **Grupper** kommer ind som grupper, og **komponenter** som komponenter: hver kopi af en komponent er en placering af én definition, så redigerer du én kopi, ændres de alle, som i SketchUp. Navne følger med.
- **Farver.** En flades eget materiale giver den dens farve. Et materiale malet på en gruppe eller komponent bliver den placerings maling, så flader inde i den uden egen farve tager det, som i SketchUp. En komponent malet rød det ene sted og blå et andet sted forbliver én komponent.
- **Teksturer.** En flade malet med et teksturmateriale kommer ind med sin tekstur, lagt på fladen som i filen, og stilen {{ui:Skygget}} viser den. Billedet gemmes i ModelCraft-filen, når du gemmer, og et [renderet billede](topic:render) viser det også. Et teksturmateriale malet på en hel gruppe eller komponent giver den kopi kun materialets farve.
- **Tags.** En gruppe eller komponent på et SketchUp-tag får et ModelCraft-tag med samme navn, vist i {{ui:Tags}}, og vist eller skjult, som det var i SketchUp. Hvis din model allerede har et tag med det navn, bruges det tag.
- **Skjulte ting kommer ind skjulte:** flader, kanter, grupper og komponenter, og flader og kanter på et skjult tag. Du ser det, SketchUp viste, og intet er tabt: {{ui:Rediger}} › {{ui:Mere}} › {{ui:Vis alle}} viser dem. Se [Skjul, isolér og vis igen](topic:hide-isolate).
- **Bløde og glatte kanter** forbliver bløde, så buede flader stadig ser glatte ud.
- **Størrelser** bliver rigtige i alle enheder: SketchUp-filer er i tommer indvendigt, og ModelCraft omregner dem.

## Hvad der ikke kommer med

Statuslinjen siger, hvad der blev udeladt, med antal.

- **Nogle teksturer** beholder kun deres materials farve: en tekstur, der mangler i filen, et billede i et format, browsere ikke kan vise (f.eks. en Photoshop-fil), eller en tekstur uden størrelse. Flader med en projiceret tekstur kommer ind med teksturen placeret nogenlunde.
- **Tags på løse flader og kanter.** ModelCraft tagger kun grupper og komponenter, så en flade eller kant med sit eget tag kommer ind uden tag, og statuslinjen tæller dem. Lav sådanne flader om til en gruppe ({{key:Shift+G}}) og tag gruppen.
- **Billeder** placeret i modellen, tekst, målsætninger, hjælpelinjer, snitplaner, scener og stilarter.

## Problemer

- »Dette er ikke en SketchUp-fil.« eller »Denne SketchUp-fil er beskadiget: …«: filen er afskåret, eller det er noget andet med et `.skp`-navn. Gem den igen fra SketchUp, eller bed om en frisk kopi.
- En fil fra en SketchUp-version nyere end den, ModelCraft kender, afvises med den version, den fandt.
- En model, der kun består af billeder, tekst eller målsætninger, siger, at den intet har at vise.

## Tag modellen tilbage

ModelCraft kan ikke gemme `.skp`-filer. Eksportér Collada ({{ui:Eksportér}} › `.dae`) og importér den i SketchUp: grupper, komponenter og farver går med; teksturer går med deres materials farve. Se [Eksportér din model](topic:export-model).
