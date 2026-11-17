---
title: Grupper och komponenter
summary: Hindra objekt från att fastna i varandra, redigera en kopia för att ändra alla, och använd panelerna Disposition och Komponenter.
keywords: grupp, komponent, skapa grupp, skapa komponent, spräng, gör unik, disposition, instanser, kopior, block, kapslad, redigera grupp, placera
from: 7cb925f3
---

Lösa geometrier i ModelCraft fastnar i varandra: linjer som rör varandra delar varandra, och ytor som delar en kant rör sig tillsammans. Det är det som gör att det går att rita på ytor, men det innebär också att en låda som ritas mot en annan låda går ihop med den. **Grupper** och **komponenter** håller saker åtskilda.

- En **grupp** omsluter viss geometri så att den beter sig som ett objekt. Inget utanför kan fastna i den.
- En **komponent** är en grupp som kan placeras många gånger. Varje kopia delar samma innehåll: redigera en så ändras alla. Använd komponenter för allt som upprepas: fönster, pelare, skrivbord, träd.

## Skapa en grupp eller en komponent

1. Markera geometrin. Ett trippelklick på en yta markerar hela det sammanhängande objektet; ett fönsterdrag markerar allt i rutan.
2. Tryck på {{key:Shift+G}} för en grupp, eller {{key:G}} för en komponent. Du kan också klicka på {{ui:Grupp}} eller {{ui:Komponent}} i verktygsfältets grupp {{ui:Organisera}}, eller på {{ui:Skapa grupp (Shift+G)}} eller {{ui:Skapa komponent (G)}} i {{ui:Entitetsinfo}}.

   Statusfältet säger ”Grupperade som Group#1.” eller ”Skapade komponent Component#1.”, det nya objektet markeras, och det visas i {{ui:Disposition}}.

3. För att namnge den skriver du ett namn i fältet {{ui:Namn}} i {{ui:Entitetsinfo}} och trycker på {{key:Enter}} eller klickar utanför.

Markerar du en yta följer dess kanter med. Om inget är markerat säger statusfältet ”Markera geometri först (dra en ruta, eller tryck trippelklick för att markera allt sammanhängande).”

Du kan också gruppera grupper: markera flera grupper och tryck på {{key:Shift+G}}. {{ui:Disposition}} visar kapslingen.

:::note
Tangentbokstäverna följer SketchUps standardval: {{key:G}} skapar en komponent, {{key:Shift+G}} en grupp.
:::

## Redigera inuti en grupp eller komponent

1. Dubbelklicka på den (i vyn eller i {{ui:Disposition}}), eller markera den och klicka på {{ui:Redigera}} i {{ui:Entitetsinfo}}.

   Resten av modellen tonas ned, axlarna flyttas till gruppens egna axlar, och {{ui:Disposition}} visar ”Redigerar: Modell › Group#1”. Statusfältet säger ”Redigerar Group#1. Esc eller dubbelklick utanför stänger den.”

2. Rita, tryck/dra, flytta och radera som vanligt. Allt du gör stannar inuti gruppen.
3. Stäng den: tryck på {{key:Esc}} (två gånger om något är markerat), dubbelklicka på tomt utrymme, eller klicka på {{ui:Stäng grupp}} i {{ui:Disposition}}.

Medan en komponent är öppen ändras varje kopia av den när du arbetar.

## Placera fler kopior av en komponent

- Kopiera den med {{ui:Flytta}} och {{key:Ctrl}} (se [Flytta och kopiera](topic:move-copy)). Varje kopia är en ny placering av samma komponent.
- Eller klicka på {{ui:Placera}} bredvid den i panelen {{ui:Komponenter}}, och klicka sedan där den ska stå. Dess origo, det nedersta hörnet i lådan runt det du markerade när du skapade den, hamnar där du klickar. Verktyget går sedan tillbaka till {{ui:Markera}}.

{{ui:Komponenter}} visar hur många kopior som är placerade (”4×”), och {{ui:Disposition}} visar antalet efter namnet.

## Ordna om i Disposition

Dra en rad i {{ui:Disposition}} för att ändra var den hör hemma. Inget flyttas i vyn: en grupp behåller sin plats i modellen.

- **In i en grupp:** släpp den på mitten av en gruppens rad (raden får en streckad kontur). Den hamnar inuti, sist.
- **I en annan ordning:** släpp den på radens övre eller nedre kant (en linje visas där). Den hamnar precis före eller efter den raden, inuti samma grupp som den raden, så att du också kan lägga den i en grupp på en vald plats.
- **Ut till översta nivån:** släpp den på rubriken {{ui:Disposition}}. Den hamnar sist.

Varje släpp är ett steg: {{key:Mod+Z}} lägger tillbaka den. {{key:Esc}} under ett drag släpper ingenting. En grupp kan inte läggas inuti sig själv eller inuti en grupp den innehåller. Dra är avstängt medan {{ui:Sök på namn}} har text i sig.

:::touch
Håll ett finger på en rad en stund och dra sedan. Ett snabbt svep scrollar listan i stället.
:::

## Ändra en kopia

Markera kopian och klicka på {{ui:Gör unik}} i {{ui:Entitetsinfo}} (visas när komponenten är placerad mer än en gång). Kopian får en egen definition, med samma namn som originalet men ett nytt nummer. Redigera den utan att röra de andra.

## Gör en grupp till en komponent

Markera gruppen och klicka på {{ui:Skapa komponent}} i {{ui:Entitetsinfo}}. Den får ett nytt namn, till exempel Component#2, även om du hade namngett gruppen; skriv in namnet igen i {{ui:Namn}}.

## Spräng

Markera en grupp eller komponent och klicka på {{ui:Spräng}} (i verktygsfältet eller i {{ui:Entitetsinfo}}). Innehållet blir lös geometri på samma plats och fastnar i det de rör vid. Grupper inuti den förblir grupper.

## Solid och volym

När du markerar en grupp eller komponent visar {{ui:Entitetsinfo}} **Solid: Ja** om dess ytor sluter sig utan luckor (varje kant delas av exakt två ytor) och det inte finns några grupper kapslade i den. Då visas också **volymen**. En låda, en vägg med ett fönster skuret genom sig och en utdragen cylinder är solider; en låda vars topp raderats är det inte.

## När sista kopian försvinner

Om du raderar sista kopian av en komponent tas den också bort från panelen {{ui:Komponenter}}. {{key:Mod+Z}} återställer den.

## Bra att veta

- Kopior av en **grupp** som gjorts med {{ui:Flytta}} delar sitt innehåll i den här versionen, precis som komponentkopior gör: redigerar du en ändras de andra. För att göra en oberoende, klicka på {{ui:Skapa komponent}} och sedan {{ui:Gör unik}}. Se [Felsökning](topic:troubleshooting#editing-one-group-changed-another).
- Komponenter skär inga öppningar i väggar och fäster inte vid ytor, och det finns inget bibliotek med färdiga komponenter. Du skapar dina egna eller importerar dem.
- Importerade filer kommer in som en grupp. Collada-filer behåller sina egna grupper och komponenter inuti den.
