---
title: Importera en .3dm-modell
summary: Importera en .3dm-fil med dess nät, ytor, kurvor, block, lager och färger; varifrån trianglarna kommer och vad som lämnas ut.
keywords: 3dm, importera, nurbs, polyyta, brep, ytor, renderingsnät, extrudering, kurvor, block, lager, taggar, färger, enheter, byta, migrera
from: 3cf29879
---

ModelCraft läser `.3dm`-filer med sin egen läsare, på sidan. Inget laddas upp, och det fungerar offline när ModelCraft gör det. Filer sparade i version 5, 6, 7 och 8 har testats; äldre (version 2 till 4) bör också öppnas, men har inte prövats ännu.

## Importera filen

1. Klicka på {{ui:Importera}} i gruppen {{ui:Fil}} (eller släpp `.3dm`-filen på 3D-vyn).
2. Välj filen.

   Statusfältet säger ”Läser chair.3dm…” medan den läser, och sedan vad som kom in, till exempel ”Importerade chair.3dm: 14 nät (8330 ytor), 8 kurvor, 5 blockplaceringar, 3 lager som taggar. Ytor: 7 ytor från näten sparade i filen, 29 tessellerade av CadCraft.”

Hela modellen kommer in som en grupp med filens namn, markerad, och vyn zoomar till den. Ett {{key:Mod+Z}} tar bort allt igen, även taggarna.

## Varifrån trianglarna kommer

ModelCraft modellerar med ytor och nät, så varje yta i filen kommer in som ett [nät](topic:meshes) av små plana trianglar. För varje yta i en polyyta (och varje extrudering) tar ModelCraft, i den här ordningen:

1. **Renderingsnätet sparat i filen.** De flesta modelleringsprogram sparar nätet de visade på skärmen med varje yta; när det finns där använder ModelCraft det som det är.
2. **Egen tessellering**, när filen saknar sparat nät: plan, NURBS-ytor, rotationsytor (sfärer, koner, torusar, svarvade former), extruderade kurvor och extruderingar (med sina hål och ändlock), trimmade av sina kanter. Ytor i en polyyta delar sina kantpunkter, så en sluten polyyta kommer in som ett slutet nät. Böjda områden delas upp tills trianglarna ligger inom cirka 0.15 % av objektets storlek från den verkliga ytan.
3. **Ingenting**, för en yta av en typ ModelCraft ännu inte läser. Statusfältet säger hur många ytor det gäller och av vilken typ.

Statusfältets del ”Ytor:” säger hur många ytor som kom från sparade nät och hur många ModelCraft tessellerade. Kanter inuti en yta i filen är mjuka och kanter mellan två ytor är skarpa, så en böjd yta skuggas jämnt.

:::tip
För de mest trogna formerna, spara filen med dess renderingsnät i programmet som skapade den (det är oftast standard; ett alternativ för liten fil utelämnar dem).
:::

## Vad som kommer in

- **Nät** med sina hörnfärger och texturkoordinater.
- **Polyytor, ytor och extruderingar**, som beskrivet ovan.
- **Kurvor** (linjer, polylinjer, bågar, cirklar, NURBS-kurvor och kurvor sammanfogade av dem) som [kanter](topic:curves), en grupp kanter per lager.
- **Block** blir [komponenter](topic:groups-components): varje placering av ett block är en placering av en och samma komponent, så att redigering av en kopia ändrar alla. Block inuti block behålls.
- **Lager** blir [taggar](topic:tags) med lagrets fullständiga namn (”Furniture::Chairs”), dolda när lagret var avstängt. Varje objekts placering bär sitt lagers tagg.
- **Färger.** Ett objekts färg kommer från där filen anger den: sin egen färg, sitt lagers, eller sitt materials basfärg. Den blir målningen på dess ytor.
- **Dolda objekt kommer in dolda**; {{ui:Visa allt}} visar dem.
- **Enheter:** filen anger sin enhet; modellen kommer in i sin verkliga storlek.

## Vad som lämnas ut (och sägs)

Statusfältets del ”Obs:” nämner allt som inte kom in, med antal:

- punkter och punktmoln, text, textpunkter, mått, hänvisningar, hatchningar, ljus, klippplan och layoutdetaljer;
- SubD-objekt: gör dem till nät eller polyytor i programmet som skapade filen först;
- ytor på förskjutna ytor och andra ytslag som ModelCraft ännu inte läser, när filen inte sparade något nät för dem;
- block länkade från andra filer (endast filen du importerar läses);
- extruderingar med sneda (geringade) ändar kommer in med raka ändar.

Materialtexturer, renderingsinställningar, namngivna vyer, grupper och användartext läses inte; ett material ger bara sin basfärg.

## Gränser

Filer upp till 300 MB. En skadad fil säger vad som är fel och lägger inte till något; ett objekt som inte kan läsas lämnas ut och räknas, och resten kommer in.
