---
title: ModelCraft-inställningar
summary: Välj den tangentstil du känner till, låt en styrplatta orbitera och panorera utan kameraknapparna, och slå på eller av fångst och solidkollisioner.
keywords: inställningar, preferenser, kontroller, tangentstil, tangentbindning, genvägar, blender, styrplatta, pekplatta, rullning, orbit, nypning, fångst, fånga, kollision, överlappning, skär, gå igenom
from: caf77d5b
---

Öppna {{ui:Inställningar}} med kugghjulet i appfältet eller {{key:Mod+,}}. Den första fliken, {{ui:ModelCraft}}, innehåller inställningarna som hör till den här appen; {{ui:Allmänt}} innehåller dem som alla CadCraft-appar delar (tema, verktygsfält, paneler). ModelCraft-inställningarna gäller bara i appen: du ändrar dem här, och den här webbläsaren kommer ihåg dem.

## Styrning: vilka tangenter och musknappar

Två tangentstilar. Byt mellan dem här, med {{ui:Tangenter: Tryck/dra}} / {{ui:Tangenter: Modellerare}} nere till höger i vyn, eller i slutet av verktygsfältets {{ui:Mer}}-meny:

- **Tryck/dra-stil** (början; bokstäverna i tryck/dra-modellerare som SketchUp): en bokstav väljer ett verktyg: {{key:L}} linje, {{key:R}} rektangel, {{key:P}} tryck/dra, {{key:M}} flytta, {{key:Q}} rotera, {{key:S}} skala, {{key:G}} skapa komponent. Se [Tangenter och musåtgärder](topic:keyboard).
- **Modellerarstil** (tangenterna i nätmodellerare som Blender): markera först och agera sedan direkt på markeringen. {{key:G}} flyttar den, {{key:R}} roterar den och {{key:S}} skalar den från pekaren, utan något första klick. Medan den flyttas låser {{key:X}}, {{key:Y}} eller {{key:Z}} den röda, gröna eller blå axeln, ett inskrivet tal anger avståndet (eller grader, eller faktorn), och ett klick eller {{key:Enter}} sätter ned den; {{key:Esc}} eller ett högerklick återställer den. Sedan är du tillbaka i {{ui:Markera}}.

Tangentstilen är samma val som menystilen: tangentstilen Modellerare är menystilen {{ui:Modellerare}}, och att välja den ena väljer den andra. Se [Menyer, tangenter och mus](topic:menus-keys-and-mouse). Hela listan för Modellerare finns i [Tangenter och musåtgärder](topic:keyboard#modeler-keys). Tooltips på verktygsfältet och startkortet följer den stil du väljer.

## Rullning: musens hjul eller styrplatta

- **Räkna ut det** (början): ModelCraft följer rullningen. Sidledes eller finkornig rullning, som en styrplatta skickar, orbiterar; hela hjulsteg zoomar.
- **Musens hjul**: rullning zoomar alltid mot pekaren.
- **Styrplatta**: svep med två fingrar för att orbitera, håll ned {{key:Shift}} och svep för att panorera, nyp för att zooma. Du behöver aldrig knapparna {{ui:Orbit}}, {{ui:Panorera}} eller {{ui:Zooma}}.

En nypning zoomar i alla val. Om ”Räkna ut det” gissar fel för din mus eller styrplatta, välj den du har.

:::tip
I Modellerarstil kan du också orbitera genom att hålla ned {{key:Alt}} och dra, och panorera med {{key:Alt+Shift}} och ett drag — praktiskt på en bärbar dator utan mittenknapp.
:::

## Fångst

**Fånga till punkter, kanter och axlar** (på från början) drar pekaren till ändpunkter, mittpunkter, kanter, hjälplinjer och de röda, gröna och blå axlarna — se [Inferens](topic:inference). Stäng av det när du vill placera något fritt nära annan geometri utan att det hoppar. Ytor, marken och axellåsen fungerar fortfarande med fångst avstängd.

Knappen {{ui:Fångst}} nere till höger i vyn gör detsamma för den här sessionens arbete (den sparas också). I Modellerarstil växlar {{key:Shift+Tab}} den.

## Solider stannar där de tar i varandra

**Stoppa solider där de tar i varandra** (på från början) hindrar att en vägg dras genom en annan vägg. Med {{ui:Flytta}} (och {{key:G}}, och klistra in och flytta med {{key:Mod+D}}) glider markeringen upp till den andra soliden och stannar i kontakt med den; med {{ui:Tryck/dra}} stannar en yta där den möter en annan solid. Att vila på något och glida längs det är tillåtet — bara att gå in i det inre stoppas. Saker som redan överlappar när du börjar kan fortfarande dras isär.

För att avsiktligt skjuta igenom något, klicka på {{ui:Kollision}} nere till höger (eller ta bort inställningen), gör förflyttningen och klicka igen.

:::note
Kollisioner kontrolleras vid förflyttning och tryck/dra. {{ui:Rotera}} och {{ui:Skala}} kontrollerar dem inte ännu, och lös geometri som tar i varandra sitter ihop, som den alltid gjort: håll åtskilda saker i [grupper](topic:groups-components) så att de förblir åtskilda.
:::

## 3D-skrivarens bädd

Storleken på skrivarens bädd: {{ui:Inte angiven}} (början), 180 × 180 × 180, 220 × 220 × 250, 256 × 256 × 256 eller 300 × 300 × 400 mm. Välj den storlek som ligger närmast skrivarens byggvolym. [Kontrollera för 3D-utskrift](topic:print-3d) säger sedan när en modell är större än bädden; med {{ui:Inte angiven}} kontrolleras inte storleken.

## Orbit och panorering

**Orbitera kring det under markören** (på från början): orbit vrider runt den del av modellen som är under pekaren, och panorering håller den punkten under pekaren; över tomt utrymme använder båda vyns mitt. Stäng av det för att alltid orbitera runt vyns mitt. **Orbithastighet** och **Panoreringshastighet** går från 0.25× till 3× (1× är början) och gäller musen, styrplattan, pekskärmen och piltangenterna. Se [Orbit, panorering och zoom](topic:orbit-pan-zoom).

## Hörnindikator

Vad som visas i hörnet av 3D-vyn: **ViewCube** (början; uppe till höger — klicka på en yta, kant eller ett hörn för att titta därifrån, dra den för att orbitera, dra dess kompassring för att vrida modellen), **Axelikon** (en liten X-, Y-, Z-markör nere till vänster som vrider sig med vyn: X röd, Y grön, Z blå) eller **Ingen**. Se [ViewCube](topic:view-cube).
