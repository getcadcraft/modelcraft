---
title: Mal med farger og materialer
summary: Gi flater, grupper og komponenter en ensfarget farge eller et materiale som murstein, kledning, takstein eller tre, og behold dem når du eksporterer.
keywords: mal, farge, farger, materiale, materialer, tekstur, teksturer, murstein, kledning, takstein, takbelegg, tre, stein, flis, betong, puss, gress, grus, glass, metall, malingsbøtte, fyll, prøve, pipette, standard, glb, obj, mtl, collada
from: b1500523
---

Farger hjelper deg å skille deler av en modell fra hverandre, og **materialer** (murstein, kledning, takbelegg, tre, stein, flis, betong, puss, gress, glass, metall) får den til å se ut som det den er bygget av. Begge males på samme måte.

## Velg en farge

{{ui:Farger}}-seksjonen til høyre viser en rad med ensfargede farger, {{ui:Standard}} (den med en strek gjennom: ingen farge) og en {{ui:+}}-rute for alle andre farger. Klikk på en for å gjøre den til gjeldende farge. Maleverktøyet starter med den.

## Mal

1. Trykk {{key:B}} ({{ui:Mal}}), eller klikk på en farge når ingenting er valgt. (Når noe er valgt, maler et klikk på en farge utvalget med en gang.)
2. Klikk på en flate for å male den.
3. Klikk på en gruppe eller en komponent for å male den kopien: flatene som ikke har egen farge, får denne fargen. Flater du har malt inne i den, beholder sin farge.

For å male flere ting samtidig, velg dem først og klikk deretter på en farge, eller klikk på en av dem med {{ui:Mal}}. Det er ett steg å angre.

| Hold | Og klikk på en flate | Hva som males |
|---|---|---|
| — | | Den flaten |
| {{key:Ctrl}} | | Hver flate som er koblet til den og har samme farge |
| {{key:Shift}} | | Hver flate med den fargen i gruppen du arbeider i |
| {{key:Alt}} | | Ingenting: du plukker opp den fargen i stedet |

For å tilbakestille en flate til ingen farge, velg {{ui:Standard}} og klikk på den.

## Mal med et materiale

{{ui:Materialer}}-seksjonen, under {{ui:Farger}}, lister materialbiblioteket etter type: murstein og blokk, kledning, takbelegg, tre, stein, flis, betong, puss, terreng, glass og metall. Hold musepekeren over en rute for å se navnet. Klikk på en, og mal deretter akkurat som med en farge: {{key:B}}, klikk på flater, grupper eller komponenter; eller velg først og klikk på materialet.

- I stilen **Skyggelagt** viser flatene materialets tekstur. Skjult linje, trådramme og røntgen viser fargen.
- Teksturene går **vannrett langs hver flate** og **opp den**: murlag holder seg vannrette på hver vegg, takstein går nedover takets skråning, bord på et gulv følger den røde aksen. De er i sin virkelige størrelse (en murstein er omtrent 215 mm lang), så de ser riktige ut på alle avstander.
- I et [gjengitt bilde](topic:render) beholder materialene teksturen, ruheten og, for glass og metall, glansen.
- {{key:Alt}}-klikk med {{ui:Mal}} plukker også opp en flates materiale.

Teksturene er tegnet av ModelCraft selv, så de fungerer frakoblet og kan brukes fritt til hva som helst (CC0).

## Komponenter og farger

En farge malt på en flate **inne i** en komponent vises på hver kopi, fordi kopiene deler én definisjon. En farge malt på en **kopi** utenfra (med komponenten lukket) hører bare til den kopien, så to kopier av samme komponent kan ha ulike farger. {{ui:Elementinfo}} viser fargen til en valgt flate, gruppe eller komponent.

## Farger i filer

- ModelCraft-filen beholder hver farge og hvert materiale.
- Andre formater får en **materialfarge** (utseendet på avstand) i stedet for teksturen: glTF, Collada, OBJ, DWG og DXF, og kontrollen for 3D-utskrift. I glTF, Collada og OBJ beholder materialet navnet sitt, for eksempel `Material_brick-red`.
- **glTF (.glb)** og **Collada (.dae)**: hver farge blir et materiale. En komponent som vises i ulike farger, skrives én gang per farge. glTF skriver også importerte teksturer som teksturer.
- **OBJ**: eksport laster ned to filer, `.obj` og en materialfil `.mtl` med fargene. Behold dem i samme mappe. Med importerte teksturer kommer `.obj`, `.mtl` og bildene som én `.zip`.
- **DWG** beholder de nøyaktige fargene; **DXF** bruker den nærmeste av de 255 standard CAD-fargene.
- **STL** og **PLY** har farger: STL etter VisCAM / SolidView-konvensjonen (programmer som ikke leser den, ignorerer den), PLY som en farge på hvert punkt. Se [Filformater i detalj](topic:formats).

:::tip
For å modellere en skjerm: mal rammen kullgrå og glasset blått etter at du har [forskjøvet](topic:draw-faces) frontflaten.
:::
