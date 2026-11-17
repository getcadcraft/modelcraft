---
title: Mal med farver og materialer
summary: Giv flader, grupper og komponenter en ensfarvet farve eller et materiale som mursten, facadebeklædning, tagspån eller træ, og behold dem, når du eksporterer.
keywords: maling, farve, farver, materiale, materialer, tekstur, teksturer, mursten, facadebeklædning, tagspån, tagdækning, træ, sten, fliser, beton, stuk, græs, grus, glas, metal, malerspand, udfyld, prøve, pipette, standard, glb, obj, mtl, collada
from: b1500523
---

Farver hjælper dig med at skelne dele af en model fra hinanden, og **materialer** (mursten, facadebeklædning, tagdækning, træ, sten, fliser, beton, stuk, græs, glas, metal) får den til at ligne det, den er bygget af. Begge males på samme måde.

## Vælg en farve

Sektionen {{ui:Farver}} til højre viser en række ensfarvede farver, {{ui:Standard}} (den med en streg igennem: ingen farve) og en {{ui:+}}-farveprøve til enhver anden farve. Klik på en for at gøre den til den aktuelle farve. Malerværktøjet starter med den.

## Maling

1. Tryk {{key:B}} ({{ui:Maling}}), eller klik på en farve, når intet er markeret. (Med noget markeret maler et klik på en farve markeringen med det samme.)
2. Klik på en flade for at male den.
3. Klik på en gruppe eller en komponent for at male den kopi: dens flader, der ikke har egen farve, får denne farve. Flader, du har malet inde i den, beholder deres.

For at male flere ting på én gang: markér dem først og klik derefter på en farve, eller klik på en af dem med {{ui:Maling}}. Det er ét fortrydelsestrin.

| Hold nede | Og klik på en flade | Hvad der males |
|---|---|---|
| — | | Den flade |
| {{key:Ctrl}} | | Hver flade, der hænger sammen med den, og har samme farve |
| {{key:Shift}} | | Hver flade med den farve i den gruppe, du arbejder i |
| {{key:Alt}} | | Intet: du henter den farve i stedet |

For at tage en flade tilbage til ingen farve, vælg {{ui:Standard}} og klik på den.

## Mal med et materiale

Sektionen {{ui:Materialer}}, under {{ui:Farver}}, lister materialebiblioteket efter type: mursten og blokke, facadebeklædning, tagdækning, træ, sten, fliser, beton, stuk, jord, glas og metal. Hold musen over en farveprøve for at se dens navn. Klik på en, og mal derefter præcis som med en farve: {{key:B}}, klik på flader, grupper eller komponenter; eller markér først og klik på materialet.

- I stilen **Skygget** viser fladerne materialets tekstur. Skjult linje, trådmodel og røntgen viser dens farve.
- Teksturer løber **vandret hen ad hver flade** og **op ad den**: murlag forbliver vandrette på alle vægge, tagspån løber ned ad et tags hældning, og brædder på et gulv følger den røde akse. De er i deres rigtige størrelse (en mursten er ca. 215 mm lang), så de ser rigtige ud på enhver afstand.
- I et [renderet billede](topic:render) beholder materialer deres tekstur, ruhed og, for glas og metal, deres glans.
- {{key:Alt}}-klik med {{ui:Maling}} henter også en flades materiale.

Teksturerne er tegnet af ModelCraft selv, så de virker offline, og de er frit brugbare til alt (CC0).

## Komponenter og farver

En farve malet på en flade **inde i** en komponent vises på hver kopi, fordi kopierne deler én definition. En farve malet på en **kopi** udefra (med komponenten lukket) hører kun til den kopi, så to kopier af én komponent kan have forskellige farver. {{ui:Objektinfo}} viser farven på en markeret flade, gruppe eller komponent.

## Farver i filer

- ModelCraft-filen gemmer hver farve og hvert materiale.
- Andre formater får en **materialefarve** (dets udseende på afstand) i stedet for teksturen: glTF, Collada, OBJ, DWG og DXF samt 3D-printkontrollen. I glTF, Collada og OBJ beholder materialet sit navn, fx `Material_brick-red`.
- **glTF (.glb)** og **Collada (.dae)**: hver farve bliver et materiale. En komponent vist i forskellige farver skrives én gang pr. farve. glTF skriver også importerede teksturer som teksturer.
- **OBJ**: eksport downloader to filer, `.obj` og en `.mtl`-materialefil med farverne. Gem dem i samme mappe. Med importerede teksturer kommer `.obj`, `.mtl` og billederne som én `.zip`.
- **DWG** beholder de nøjagtige farver; **DXF** bruger den nærmeste af de 255 standard-CAD-farver.
- **STL** og **PLY** bærer farver: STL i VisCAM / SolidView-konventionen (programmer, der ikke læser den, ignorerer den), PLY som en farve på hvert punkt. Se [Filformater i detaljer](topic:formats).

:::tip
For at modellere en skærm: mal rammen kulgrå og glasset blåt, efter du har [forskudt](topic:draw-faces) forsiden.
:::
