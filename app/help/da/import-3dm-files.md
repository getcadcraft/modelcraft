---
title: Importér en .3dm-model
summary: Importér en .3dm-fil med dens net, overflader, kurver, blokke, lag og farver; hvor trekanterne kommer fra, og hvad der udelades.
keywords: 3dm, importér, nurbs, polyoverflade, brep, overflader, render-net, ekstrudering, kurver, blokke, lag, tags, farver, enheder, skift, migrér
from: 3cf29879
---

ModelCraft læser `.3dm`-filer med sin egen læser, på siden. Intet uploades, og det virker offline, når ModelCraft gør. Filer gemt i version 5, 6, 7 og 8 er testet; ældre (version 2 til 4) burde også åbne, men er ikke prøvet endnu.

## Importér filen

1. Klik på {{ui:Importér}} i gruppen {{ui:Fil}} (eller slip `.3dm`-filen på 3D-visningen).
2. Vælg filen.

   Statuslinjen siger »Læser chair.3dm…«, mens den læser, og derefter hvad der kom ind, f.eks. »Importerede chair.3dm: 14 net (8330 flader), 8 kurver, 5 blokplaceringer, 3 lag som tags. Overflader: 7 flader fra nettene gemt i filen, 29 trianguleret af CadCraft.«

Hele modellen kommer ind som én gruppe med filens navn, valgt, og visningen zoomer til den. Ét {{key:Mod+Z}} fjerner det hele igen, inklusive tags.

## Hvor trekanterne kommer fra

ModelCraft modellerer med flader og net, så hver overflade i filen kommer ind som et [net](topic:meshes) af små flade trekanter. For hver flade i en polyoverflade (og hver ekstrudering) tager ModelCraft i denne rækkefølge:

1. **Render-nettet gemt i filen.** De fleste modelleringsprogrammer gemmer det net, de viste på skærmen, sammen med hver overflade; når det findes, bruger ModelCraft det, som det er.
2. **Sin egen trianguleringsproces**, når filen ikke har gemt et net: planer, NURBS-overflader, rotationsoverflader (kugler, kegler, tori, drejede former), ekstruderede kurver og ekstruderinger (med deres huller og endestykker), beskåret af deres kanter. Flader i én polyoverflade deler deres kantpunkter, så en lukket polyoverflade kommer ind som et lukket net. Buede områder deles, indtil trekanterne ligger inden for cirka 0.15 % af objektets størrelse fra den rigtige overflade.
3. **Intet**, for en flade af en type overflade ModelCraft endnu ikke læser. Statuslinjen siger, hvor mange flader og af hvilken type.

Statuslinjens del »Overflader:« siger, hvor mange flader der kom fra gemte net, og hvor mange ModelCraft trianguleret. Kanter inde i én flade i filen er bløde, og kanter mellem to flader er skarpe, så en buet flade skygges jævnt.

:::tip
For de mest trofaste former, gem filen med dens render-net i det program, der lavede den (det er normalt standard; en »gem lille«-indstilling udelader dem).
:::

## Hvad der kommer med

- **Net** med deres farver på hjørnepunkter og teksturkoordinater.
- **Polyoverflader, overflader og ekstruderinger**, som beskrevet ovenfor.
- **Kurver** (linjer, polylinjer, buer, cirkler, NURBS-kurver og kurver sammensat af dem) som [kanter](topic:curves), én gruppe af kanter pr. lag.
- **Blokke** bliver til [komponenter](topic:groups-components): hver placering af en blok er en placering af én komponent, så redigerer du én kopi, ændres de alle. Blokke i blokke bevares.
- **Lag** bliver til [tags](topic:tags) med lagets fulde navn (»Furniture::Chairs«), skjult når laget var slukket. Hver objekts placering bærer sit lags tag.
- **Farver.** Et objekts farve kommer fra det sted, filen angiver: sin egen farve, sit lags farve eller sit materiales grundfarve. Den bliver malingen på dets flader.
- **Skjulte objekter kommer ind skjulte**; {{ui:Vis alle}} viser dem.
- **Enheder:** filen angiver sin enhed; modellen kommer ind i sin rigtige størrelse.

## Hvad der udelades (og siges)

Statuslinjens del »Noter:« navngiver alt, der ikke kom ind, med antal:

- punkter og punktskyer, tekst, tekstpunkter, målsætninger, henvisningslinjer, skraveringer, lyskilder, afskæringsplaner og layoutdetaljer;
- SubD-objekter: lav dem om til net eller polyoverflader i det program, der lavede filen, først;
- flader på forskudte overflader og andre typer overflader, ModelCraft endnu ikke læser, når filen ikke gemte et net til dem;
- blokke, der er linket fra andre filer (kun den fil, du importerer, læses);
- ekstruderinger med skrå (gærede) ender, der kommer ind med lige ender.

Materialeteksturer, renderindstillinger, navngivne visninger, grupper og brugertekst læses ikke; et materiale giver kun sin grundfarve.

## Grænser

Filer op til 300 MB. En beskadiget fil siger, hvad der er galt, og tilføjer intet; ét objekt, der ikke kan læses, udelades og tælles, og resten kommer ind.
