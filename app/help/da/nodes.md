---
title: Knuder: byg en model ved at forbinde
summary: Forbind tal til punkter, punkter til kurver og kurver til overflader. Ændr et tal, og alt nedstrøms genopbygges. Hver knude er også en linje CraftScript, og grafen gemmes i filen.
keywords: knuder, knudeeditor, visuel scripting, parametrisk, graf, ledninger, porte, frit form, freeform, nurbs, loft, ekstruder, drej, cirkel, kurve, overflade, serie, interval, tilfældig, liste, script, craftscript, grasshopper
from: 9c8e254f
---

Editoren **Knuder** bygger geometri ved at forbinde bokse. Hver boks (en knude) gør en lille opgave: laver et tal, et punkt, en cirkel, et loft. Du forbinder resultatet af én til indgangen på den næste, og modellen følger med, når du ændrer et tal i starten.

Åbn den fra panelet til højre: {{ui:Knuder}} › {{ui:Noder…}}. En fil, der allerede har en graf, åbner den af sig selv. Det er et vindue over 3D-visningen: træk i dets titellinje for at flytte det, træk i hjørnet for at ændre størrelsen.

## Forbinding

1. Vælg en knude fra listen til venstre (skriv i søgefeltet for at indsnævre; <kbd>Enter</kbd> tilføjer den første match). Den vises midt på lærredet.
2. Træk fra en rund **output**-prik til højre på én knude til en rund **input**-prik til venstre på en anden. Prikken bliver grøn, når den passer, og rød, når den ikke gør; peg på den for at se årsagen.
3. En input uden forbindelse viser en boks til en skrevet værdi. Skriv et tal og tryk <kbd>Tab</kbd>: resultatet genopbygges.
4. Den lille cirkel i en knudes titellinje er dens **øje**. En knude med øjet tændt tegnes i 3D-visningen: som linjer for kurver, skygget for overflader og som prikker for punkter.

Træk en knude i dens titellinje. Træk i baggrunden for at panorere, drej hjulet for at zoome. <kbd>Delete</kbd> fjerner den valgte knude. {{ui:Ryd op}} stiller knuderne i kolonner, {{ui:Tilpas}} får dem alle i syne, og {{ui:Fortryd}} og {{ui:Gentag}} går skridt for skridt gennem dine redigeringer.

## Typer og enheder

Porte har en type: tal, ja/nej, punkt, vektor, kurve, overflade, net, massivt legeme eller "geometri" for hvad som helst af disse. Et punkt kan føres til en vektorindgang og omvendt. Tal har en enhed: en **længde** er i millimeter, og en **vinkel** er i grader. En længde kan ikke føres til en vinkel, og en længde gange en længde (et areal) afvises, så en forkert ledning stoppes, når du laver den.

En firkantet prik er en **liste**. Når en liste når en indgang med en enkelt værdi, kører knuden én gang for hvert element, og dens resultat bliver en liste. Den kortere liste gentager sit sidste element. For eksempel laver en **Serie** af højder ind i **Flyt** en stak kopier.

## Massive legemer og booleske operationer som knuder

Gruppen **Massive legemer** laver lukkede kroppe ud fra de samme præcise overflader som panelet Overflader: **Massiv kasse**, **Massiv cylinder** og **Massiv kugle** (størrelser i mm), **Forening**, **Træk fra** og **Skæring** (det andet legeme tages fra det første; tolerancen er, hvor langt trekanterne i legemesmotoren må være fra de præcise overflader), **Afrundning mellem flader** (fladerne efter deres nummer i legemet, 1 for den første; en radius og, over 0, en radius ved enden), **Legemevolumen** (mm³) og **Legeme til net** (for at se eller indbage det). Et legeme har sin egen porttype: et punkt eller et tal kan ikke forbindes til en legemeindgang, og prikken forbliver rød. Boolske og afrundingsknuderne bruger programmets egen legemesmotor, som indlæses første gang editoren åbnes.

## Fejl

En knude, der ikke kan udføre sin opgave, siger hvorfor under sit navn, med rødt ("Radius skal være større end nul."), og knuderne efter den venter. Den samme besked er et problem i panelet Problemer, så du kan finde den derfra.

## Hver knude er en linje script

Tryk på {{ui:Script}} for at se grafen som CraftScript: én linje pr. knude, fx `n3 = nd_circle(n2, n1, [0 0 1]);`. Redigér teksten og tryk på {{ui:Lav grafen ud fra dette script}} for at få den tilbage som graf. De samme `nd_`-funktioner virker i et CraftScript i PartCraft, så en graf kan køres, gentages i en løkke eller testes dér. Tilfældige tal tager altid et **seed**, så den samme graf giver det samme resultat på alle computere.

## Gemt med filen

Grafen gemmes i modelfilen. Knuderne laver kurver, overflader og net med egne data: de ændrer ikke modellens flader, før du beder om det.

## Indbag i model

Tænd øjet på en knude, der laver en overflade eller et net, og tryk derefter på {{ui:Indbag i model}} i vinduet Knuder. Hver vist overflade eller hvert net bliver til en gruppe af flader i modellen, i meter, som du kan redigere som alt andet. Det er ét trin i fortrydelse. Grafen bliver, men kopien følger den ikke længere: ændr et tal og indbag igen for en ny. Punkter og kurver er ikke massive legemer, så de udelades, og beskeden siger, hvor mange der blev udeladt.
