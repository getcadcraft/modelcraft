---
title: Importera en SKP-modell
summary: Importera en .skp-fil med dess grupper, komponenter, färger, texturer, taggar och mjuka kanter, se vad som kom in och vad som inte gjorde det, och fortsätt modellera.
keywords: skp, importera, öppna skp, komponenter, grupper, taggar, lager, material, färger, texturer, dold, mjuka kanter, 3D Warehouse, migrera, byta
from: 325d3c81
---

ModelCraft läser SketchUp-filer (`.skp`) med sin egen läsare, på sidan. Inget laddas upp, och det fungerar offline när ModelCraft gör det. Filer från SketchUp 3 och upp till 2026 har testats.

## Importera filen

1. Klicka på {{ui:Importera}} i gruppen {{ui:Fil}} (eller släpp `.skp`-filen på 3D-vyn).
2. Välj filen.

   Statusfältet säger ”Läser house.skp…” medan den läser, och sedan vad som kom in, till exempel ”Importerade house.skp (SketchUp 25.0.575): 1240 ytor, 6 komponenter, i en grupp.”

Hela modellen kommer in som en grupp med filens namn, markerad, och vyn zoomar till den. Ett {{key:Mod+Z}} tar bort allt igen, även taggarna.

:::tip
Spräng importgruppen ({{ui:Entitetsinfo}} › {{ui:Spräng}}) när du vill att dess innehåll ska ligga löst i din modell i stället för i en grupp.
:::

## Vad som kommer in

- **Ytor** med sina hål, och **kanter** som inte är en del av en yta.
- **Grupper** kommer in som grupper, och **komponenter** som komponenter: varje kopia av en komponent är en placering av en och samma definition, så att redigering av en kopia ändrar alla, precis som i SketchUp. Namn kommer med.
- **Färger.** En yta får sin färg från sitt eget material. Ett material målat på en grupp eller komponent blir den placeringens målning, så att ytor inuti den utan egen färg tar den, precis som i SketchUp. En komponent målad röd på ett ställe och blå på ett annat förblir en komponent.
- **Texturer.** En yta målad med ett texturerat material kommer in med sin textur, lagd på ytan som i filen, och stilen {{ui:Skuggad}} visar den. Bilden sparas i ModelCraft-filen när du sparar, och en [renderad bild](topic:render) visar den också. Ett texturerat material målat på en hel grupp eller komponent ger den kopian bara materialets färg.
- **Taggar.** En grupp eller komponent på en SketchUp-tagg får en ModelCraft-tagg med samma namn, listad i {{ui:Taggar}}, och visas eller döljs som den gjorde i SketchUp. Har din modell redan en tagg med det namnet används den.
- **Dolda saker kommer in dolda:** ytor, kanter, grupper och komponenter, och ytor och kanter på en dold tagg. Du ser vad SketchUp visade, och inget förloras: {{ui:Redigera}} › {{ui:Mer}} › {{ui:Visa allt}} visar dem. Se [Dölj, isolera och visa igen](topic:hide-isolate).
- **Mjuka och släta kanter** förblir mjuka, så att böjda ytor fortfarande ser släta ut.
- **Storlekar** blir rätt i vilken enhet som helst: SketchUp-filer är i tum inuti, och ModelCraft konverterar dem.

## Vad som inte kommer in

Statusfältet säger vad som lämnades ut, med antal.

- **Vissa texturer** behåller bara sitt materials färg: en textur som saknas i filen, en bild i ett format som webbläsare inte kan visa (till exempel en Photoshop-fil), eller en textur utan storlek. Ytor med en projicerad textur kommer in med texturen ungefär placerad.
- **Taggar på lösa ytor och kanter.** ModelCraft taggar bara grupper och komponenter, så en yta eller kant med egen tagg kommer in utan tagg, och statusfältet räknar dem. Gör sådana ytor till en grupp ({{key:Shift+G}}) och tagga gruppen.
- **Bilder** placerade i modellen, text, mått, hjälplinjer, snittplan, scener och stilar.

## Problem

- ”Det här är inte en SketchUp-fil.” eller ”Den här SketchUp-filen är skadad: …”: filen är avklippt eller är något annat med ett `.skp`-namn. Spara den igen från SketchUp, eller be om en ny kopia.
- En fil från en SketchUp-version nyare än ModelCraft känner till avvisas, med den version som hittades.
- En modell som bara består av bilder, text eller mått säger att den inte har något att visa.

## Ta tillbaka modellen

ModelCraft kan inte spara `.skp`-filer. Exportera Collada ({{ui:Exportera}} › `.dae`) och importera den i SketchUp: grupper, komponenter och färger följer med; texturer går över som sitt materials färg. Se [Exportera din modell](topic:export-model).
