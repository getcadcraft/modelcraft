---
title: Komponenter som sträcks
summary: Gör en kopia av en komponent bredare, djupare eller högre medan dess delar behåller sina storlekar: ett längre bord med samma ben, en högre bokhylla med hyllorna utspridda, ett räcke vars stolpar upprepas.
keywords: dynamisk komponent, sträck, ändra storlek på komponent, parametrisk, namngivna storlekar, upprepa, matris, ben, hyllor, räcke, regler, variabler
from: b4c40f43
---

Att skala en komponent gör allt i den större, även ben och skenor. **Sträck den här kopian** ändrar en komponents bredd, djup eller höjd, medan varje del följer en regel: en bordsskiva växer, medan dess ben behåller sin tjocklek och stannar vid ändarna.

Det fungerar på komponenter som består av delar, det vill säga grupper eller komponenter inuti komponenten, som allt i [startbiblioteket](topic:starter) gör.

## Sträck en kopia

1. Markera komponenten.
2. Klicka på {{ui:Sträck den här kopian…}} i {{ui:Entitetsinfo}}.
3. Skriv den nya {{ui:Bredd (röd)}}, {{ui:Djup (grön)}} och {{ui:Höjd (blå)}} och klicka på {{ui:Sträckning}}.

Bara den kopian ändras: den blir en egen komponent som minns originalet den kommer från. Sträck den igen när som helst, så räknas den ut på nytt från originalet, så att inget glider isär. Andra kopior av originalet lämnas som de var.

## Reglerna

Öppna komponenten (dubbelklicka på den) och markera en av dess delar. {{ui:Entitetsinfo}} visar {{ui:När komponenten sträcks}}, med en regel längs röd, grön och blå:

| Regel | Vad delen gör | Till exempel |
|---|---|---|
| {{ui:Sträckning}} | Växer med komponenten; dess avstånd till båda sidorna behålls | En bordsskiva |
| {{ui:Stanna vid början}} / {{ui:Stanna vid slutet}} | Behåller sin storlek och sitt avstånd till den sidan | Ben |
| {{ui:Flytta proportionellt}} | Behåller sin storlek; dess mitt flyttas proportionellt | Hyllor, ett dörrhandtag |
| {{ui:Skala proportionellt}} | Både plats och storlek skalas proportionellt | Trappstegen i en trappa |
| {{ui:Upprepa}} | Kopior av den, med jämna mellanrum ({{ui:Var}}), från där den startar till den bortre sidan | Stolparna i ett räcke |

{{ui:Automatiska}} (startläget) räknar ut en regel och visar vilken: {{ui:Sträckning}} när delen spänner över komponenten, {{ui:Flytta proportionellt}} när den ligger ungefär mitt i, annars stannar den vid den sida den ligger närmast.

## Att tänka på

- Delarnas egna former delas, så en sträckt kopia är lätt. Redigerar du en del ändras den i varje kopia.
- En sträckt kopia följer inte senare ändringar i originalets regler eller layout: sträck den igen för att få med dem.
- Ytor som ritats löst i komponenten (inte i en del) behåller sin storlek; gör dem till en del för att de ska följa med.
- Regler och vilket original varje kopia sträcktes från sparas i ModelCraft-filen.
