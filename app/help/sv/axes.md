---
title: Flytta och vrid ritningens axlar
summary: Vrid de röda, gröna och blå axlarna så att de passar en byggnad som inte står rakt mot dem, eller rikta dem mot en yta, så att ritning och inmatning följer den.
keywords: axlar, ritningsaxlar, origo, rikta axlar, rotera axlar, vrid axlar, återställ axlar, vinklad byggnad, sned, ucs, koordinatsystem
from: cab258f7
---

De röda, gröna och blå axlarna styr allt du ritar: rektanglar radas upp efter dem, linjer låses till dem, och marken är det röda-gröna planet. När en byggnad står i en vinkel (en situationsplan som inte är rak mot norr, en flygel vriden 30°), flytta axlarna till den, så att ritningen följer dess väggar. Modellen i sig flyttas inte.

Alla tre kommandona finns i {{ui:Edit}} › {{ui:More}}.

## Placera axlar

1. {{ui:Edit}} › {{ui:More}} › {{ui:Place axes}}.
2. Klicka där origo ska vara, till exempel ett hörn på byggnaden.
3. Klicka en punkt längs den nya röda axeln, till exempel längre fram längs en vägg.
4. Klicka en punkt mot den nya gröna axeln. Grön görs rät mot röd, och blå står rät mot båda.

Axlarna ritas på sin nya plats. En rektangel du nu ritar på marken, eller skriver som `4m,3m`, löper längs den vridna röda och gröna; piltangenterna låser till dem; och origofångsten ligger vid det nya origot.

## Rikta axlar mot en yta

Markera en yta och välj sedan {{ui:Edit}} › {{ui:More}} › {{ui:Align axes to face}}. Blå pekar då ut ur ytan, röd löper längs dess längsta kant, och origo ligger vid kantens början. Använd det för att rita på ett sluttande tak som om det vore marken.

## Återställ axlar

{{ui:Edit}} › {{ui:More}} › {{ui:Reset axes}} sätter tillbaka dem dit modellen började.

## Att veta

- Inne i en öppen grupp eller komponent används dess egna axlar (de vrids med den); modellens axlar gäller på översta nivån.
- Axlarna sparas i ModelCraft-filen, och varje ändring är ett steg i ångra.
- Exporter och de vanliga vyerna ({{ui:Top}}, {{ui:Front}} …) använder fortfarande modellens egna riktningar.
