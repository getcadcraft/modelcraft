---
title: Håll en .3dm-modell levande
summary: Ändra en modell i programmet som skapade den och se ändringen här, från Rhino 8 eller en Grasshopper-definition, utan att spara och importera igen.
keywords: rhino, grasshopper, live-länk, live-anslutning, 3dm, nurbs, parametrisk, länk, synka, skript, referensmodell, skicka
from: 331b0a7e
---

Fortsätt modellera där du modellerar, och använd resultatet här: för att rendera det, belysa det eller bygga en scen runt det. Varje ändring i det andra programmet uppdaterar en grupp i ModelCraft.

:::note
Länken kräver **CadCraft Studio** på samma dator. En webbläsarflik kan inte ta emot anslutningen. Ingenting skickas över internet: skriptet pratar med Studio på datorns egen adress, med en token.
:::

:::warning
Den här länken har testats med skriptets filskrivare och en ersättning för det andra programmet, ännu inte inne i Rhino eller Grasshopper själva. Om något misslyckas där, berätta vad det skrev ut.
:::

## Ställ in den

1. I Studio öppnar du ModelCraft. Under {{ui:Inställningar}} › {{ui:ModelCraft}} › {{ui:Assistenter}} markerar du **Låt AI-assistenter och skript använda ModelCraft** och klickar sedan på **Redigera**.
2. I Studio väljer du {{ui:Anslut en assistent}}. Den visar adressen och token som du klistrar in nedan.
3. Ladda ner skriptet: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Från Rhino

1. Kör `cadcraft_link.py` i Rhinos skripteditor (Python 3 i Rhino 8).
2. Första gången klistrar du in adressen och token. De sparas i `.cadcraft-link.json` i din hemmapp, aldrig i modellen. Studio skapar en ny token varje gång Studio startar, så skriptet frågar då igen.

Hela modellen kommer över som en grupp med namn efter dokumentet, till exempel "chair (linked)". Därefter kommer varje ändring över när du pausar en stund, och bara de objekt som ändrats skickas. Kör skriptet igen för att stoppa.

## Från Grasshopper

Kör skriptet en gång i Rhino först, så att adressen och token sparas.

1. Lägg till en Script-komponent (Python 3) och klistra in hela `cadcraft_link.py` i den.
2. Ge den dessa indata: `G` (geometrin, med liståtkomst), `N` (ett namn, valfritt), `On` (en boolesk växel) och `Target` (valfritt: `model` eller `part`, om båda programmen är öppna).
3. Sätt `On` till sant.

Varje beräkning skickar `G` och ersätter det komponenten skickade förra gången, så när du drar i ett reglage uppdateras gruppen här. Dess utdata `a` säger vad som hände. Varje komponent har sin egen grupp.

## Vad du kan göra med gruppen

- **Flytta den, tagga den, bygg runt den.** Var du placerar gruppen och dess tagg består genom varje uppdatering, och så gör allt intill den.
- **Redigera inte inuti den.** Varje uppdatering ersätter det som finns inuti gruppen. Det andra programmet äger de objekten.
- **Ångra.** Uppdateringar som ligger inom två sekunder från varandra delar ett enda ångra-steg, så att {{key:Mod+Z}} tar tillbaka ett helt dragsteg. Nästa uppdatering återställer modellen så att den stämmer.
- **Spara.** Den sparade filen behåller länken. Kör skriptet igen efter att du öppnat den, så uppdateras samma grupp.

## Vad som kommer över

Nät, polytytor, ytor och extruderingar som nätet du ser på skärmen, SubD som sitt nät, kurvor som kanter, block som separata objekt där de står (inte som komponenter), lager som taggar, färger och enheter. Se [Importera en .3dm-modell](topic:import-3dm-files) för hur de visas här.

Utelämnas, med ett antal i det andra programmet: punkter, text, måttsättningar, ljus och liknande.

**Enkelriktat.** Ändringar här går inte tillbaka till det andra programmet.

## Om något går fel

- **"Inget ModelCraft- eller PartCraft-fönster tillåter det":** gör steg 1 i inställningen.
- **"Studio avvisade token":** Studio har startat om. Kopiera den nya token och kör skriptet igen. För Grasshopper, kör det i Rhino först.
- **"Kan inte nå CadCraft Studio":** Studio körs inte, eller adressen har ändrats.
