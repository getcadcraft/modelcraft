---
title: Noder: bygg en modell ved å koble sammen
summary: Koble tall til punkter, punkter til kurver og kurver til overflater. Endre et tall, så bygges alt nedstrøms på nytt. Hver node er også en linje med CraftScript, og grafen lagres i filen.
keywords: noder, nodeeditor, visuell skripting, parametrisk, graf, ledninger, porter, fri form, freeform, nurbs, loft, ekstruder, roter, sirkel, kurve, overflate, serie, område, tilfeldig, liste, skript, craftscript, grasshopper
from: 9c8e254f
---

Den **Noder**-editoren bygger geometri ved å koble bokser sammen. Hver boks (en node) gjør en liten jobb: lage et tall, et punkt, en sirkel, en loft. Du kobler resultatet fra én til inngangen til den neste, og modellen følger med når du endrer et tall i starten.

Åpne den fra det høyre panelet: {{ui:Noder}} › {{ui:Noder…}}. En fil som allerede har en graf, åpner den selv. Det er et vindu over 3D-visningen: dra tittellinjen for å flytte det, dra hjørnet for å endre størrelse.

## Koble sammen

1. Velg en node fra listen til venstre (skriv i søkeboksen for å snevre inn; <kbd>Enter</kbd> legger til første treff). Den vises midt på lerretet.
2. Dra fra en rund **utgang**-prikk på høyre side av én node til en rund **inngang**-prikk på venstre side av en annen. Prikken blir grønn når den passer og rød når den ikke gjør det; hold pekeren over den for å se årsaken.
3. En inngang uten tilkobling viser en boks for en skrevet verdi. Skriv et tall og trykk <kbd>Tab</kbd>: resultatet bygges om.
4. Den lille sirkelen i en nodes tittellinje er **øyet**. En node med øyet på tegnes i 3D-visningen: som linjer for kurver, skyggelagt for overflater, og som prikker for punkter.

Dra en node i tittellinjen. Dra bakgrunnen for å panorere, rull hjulet for å zoome. <kbd>Delete</kbd> fjerner den valgte noden. {{ui:Rydd}} ordner nodene i kolonner, {{ui:Tilpass}} får dem alle inn i synsfeltet, og {{ui:Angre}} og {{ui:Gjør om}} går steg for steg gjennom redigeringene dine.

## Typer og enheter

Porter har en type: tall, ja/nei, punkt, vektor, kurve, overflate, nett, volumlegeme, eller «geometri» for noen av disse. Et punkt kan mate en vektorinngang og omvendt. Tall har en enhet: en **lengde** er i millimeter og en **vinkel** er i grader. En lengde kan ikke mate en vinkel, og en lengde ganget med en lengde (et areal) avvises, så en feil ledning stoppes når du lager den.

En firkantet prikk er en **liste**. Når en liste når en inngang med én verdi, kjører noden én gang per element, og resultatet blir en liste. Den kortere listen gjentar sitt siste element. For eksempel gir en **Serie** av høyder inn i **Flytt** en stabel med kopier.

## Volumlegemer og boolske operasjoner som noder

Gruppen **Volumlegemer** lager lukkede legemer fra de samme eksakte overflatene som Overflater-panelet: **Boksvolumlegeme**, **Sylindervolumlegeme** og **Kulevolumlegeme** (størrelser i mm), **Forening**, **Trekk fra** og **Skjæring** (det andre volumlegemet tas fra det første; toleransen er hvor langt trekantene til volumlegemeberegneren kan være fra de eksakte overflatene), **Avrunding mellom flater** (flatene etter nummeret deres i volumlegemet, 1 for den første; en radius og, over 0, en radius ved enden), **Volum av volumlegeme** (mm³) og **Volumlegeme til nett** (for å se eller bake det). Et volumlegeme har sin egen porttype: et punkt eller et tall kan ikke kobles til en volumlegeme-inngang, og prikken forblir rød. De boolske nodene og avrundingsnoden bruker programmets egen volumlegemeberegner, som lastes første gang editoren åpnes.

## Feil

En node som ikke kan gjøre jobben sin, sier hvorfor under navnet sitt, i rødt («Radiusen må være større enn null.»), og nodene etter den venter. Den samme meldingen er et problem i Problemer-panelet, så du kan finne den derfra.

## Hver node er en linje med skript

Trykk {{ui:Skript}} for å se grafen som CraftScript: én linje per node, for eksempel `n3 = nd_circle(n2, n1, [0 0 1]);`. Rediger teksten og trykk {{ui:Lag grafen fra dette skriptet}} for å hente den tilbake som en graf. De samme `nd_`-funksjonene fungerer i et CraftScript i PartCraft, så en graf kan kjøres, løkkes eller testes der. Tilfeldige tall tar alltid et **frø**, så den samme grafen gir samme resultat på hver datamaskin.

## Lagret med filen

Grafen lagres i modellfilen. Nodene lager kurver, overflater og nett for seg selv: de endrer ikke modellens flater før du ber om det.

## Bak inn i modell

Slå på øyet til en node som lager en overflate eller et nett, og trykk deretter {{ui:Bak inn i modell}} i Noder-vinduet. Hver vist overflate eller nett blir en gruppe flater i modellen, i meter, som du kan redigere som alt annet. Det er ett steg i angre. Grafen blir stående, men kopien følger den ikke lenger: endre et tall og bak inn på nytt for en ny. Punkter og kurver er ikke volumlegemer, så de utelates, og meldingen sier hvor mange.
