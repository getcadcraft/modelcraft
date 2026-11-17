---
title: Noder: bygg en modell genom att koppla ihop
summary: Koppla siffror till punkter, punkter till kurvor och kurvor till ytor. Ändrar du en siffra byggs allt efter den om. Varje nod är också en rad CraftScript, och grafen sparas i filen.
keywords: noder, nodredigerare, visuell skriptning, parametrisk, graf, trådar, portar, fri form, freeform, nurbs, loft, extrudera, revolvera, cirkel, kurva, yta, serie, intervall, slumpmässig, lista, skript, craftscript, grasshopper
from: 9c8e254f
---

Redigeraren **{{ui:Noder}}** bygger geometri genom att koppla ihop rutor. Varje ruta (en nod) gör ett litet jobb: skapar en siffra, en punkt, en cirkel, en loft. Du kopplar resultatet från en till indatan på nästa, och modellen följer med när du ändrar en siffra i början.

Öppna den från den högra panelen: {{ui:Noder}} › {{ui:Noder…}}. En fil som redan har en graf öppnar den av sig själv. Det är ett fönster över 3D-vyn: dra i dess namnlist för att flytta det, dra i hörnet för att ändra storlek.

## Koppla ihop

1. Välj en nod från listan till vänster (skriv i sökrutan för att snäva av; <kbd>Enter</kbd> lägger till första träffen). Den dyker upp i mitten av arbetsytan.
2. Dra från en rund **utgång** på höger sida av en nod till en rund **ingång** på vänster sida av en annan. Punkten blir grön när det passar och röd när det inte gör det; peka på den för att se varför.
3. En ingång utan koppling visar en ruta för ett inskrivet värde. Skriv ett tal och tryck på <kbd>Tab</kbd>: resultatet byggs om.
4. Den lilla cirkeln i en nods namnlist är dess **öga**. En nod med ögat på ritas i 3D-vyn: som linjer för kurvor, skuggat för ytor, prickar för punkter.

Dra en nod i dess namnlist. Dra i bakgrunden för att panorera, rulla hjulet för att zooma. <kbd>Delete</kbd> tar bort vald nod. {{ui:Ordna}} ordnar noderna i kolumner, {{ui:Anpassa}} visar alla, och {{ui:Ångra}} och {{ui:Gör om}} stegar genom dina ändringar.

## Typer och enheter

Portar har en typ: tal, ja/nej, punkt, vektor, kurva, yta, nät, solid, eller "geometri" för någon av dem. En punkt kan mata en vektoringång och tvärtom. Tal har en enhet: en **längd** anges i millimeter och en **vinkel** i grader. En längd kan inte mata en vinkel, och en längd gånger en längd (en area) nekas, så en felaktig koppling stoppas redan när du gör den.

En kvadratisk prick är en **lista**. När en lista når en ingång för ett enskilt värde kör noden en gång för varje objekt, och resultatet blir en lista. Den kortare listan upprepar sitt sista objekt. Till exempel ger en **Serie** av höjder till **{{ui:Flytta}}** en hög av kopior.

## Solider och booleska operationer som noder

Gruppen **{{ui:Solider}}** gör slutna kroppar av samma exakta ytor som panelen {{ui:Ytor}}: **Lådsolid**, **Cylindersolid** och **Sfärsolid** (storlekar i mm), **{{ui:Union}}**, **Subtrahera** och **Skär** (den andra solidet tas från det första; toleransen är hur långt solidmotorns trianglar får ligga från de exakta ytorna), **Rundning mellan ytor** (ytorna anges med sitt nummer i solidet, 1 för dess första; en radie och, över 0, en radie vid slutet), **Solidvolym** (mm³) och **Solid till nät** (för att se eller baka den). En solid har en egen porttyp: en punkt eller ett tal kan inte kopplas till en solidingång, och punkten förblir röd. Booleska och rundningsnoderna använder programmets egna solidmotor, som laddas första gången redigeraren öppnas.

## Fel

En nod som inte kan utföra sitt jobb säger varför under sitt namn, i rött ("Radien måste vara större än noll."), och noderna efter den väntar. Samma meddelande är ett problem i panelen Problem, så du kan hitta det därifrån.

## Varje nod är en rad skript

Tryck på {{ui:Skript}} för att se grafen som CraftScript: en rad per nod, till exempel `n3 = nd_circle(n2, n1, [0 0 1]);`. Redigera texten och tryck på {{ui:Skapa grafen från det här skriptet}} för att få tillbaka den som graf. Samma `nd_`-funktioner fungerar i ett CraftScript i PartCraft, så en graf kan köras, loopas eller testas där. Slumptal tar alltid ett **seed** (startvärde), så samma graf ger samma resultat på varje dator.

## Sparas med filen

Grafen sparas i modellfilen. Noderna gör egna kurvor, ytor och nät: de ändrar inte modellens ytor förrän du ber om det.

## Baka till modell

Slå på ögat för en nod som gör en yta eller ett nät och tryck sedan på {{ui:Baka till modell}} i fönstret Noder. Varje visad yta eller visat nät blir en grupp ytor i modellen, i meter, som du kan redigera som vilket annat som helst. Det är ett steg i Ångra. Grafen står kvar, men kopian följer inte längre den: ändra en siffra och baka igen för en ny. Punkter och kurvor är inte solider, så de utelämnas, och meddelandet säger hur många.
