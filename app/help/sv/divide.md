---
title: Dela en kant eller kurva i lika delar
summary: Dela en linje i lika bitar, eller ge en båge eller cirkel ett nytt antal segment, med verktyget Dela.
keywords: dela, dela kant, lika delar, lika segment, dela kant, segment, underdela, underdela kanter, bågsegment, cirkelsegment, punkter längs en linje
from: 5c3ce3ed
---

{{ui:Dela}} delar en kant i lika bitar, med ett hörn vid varje delning. Använd hörnen för att fånga dem, starta linjer från dem eller för att trycka och dra delar av en yta.

## Dela en kant

1. Klicka på {{ui:Dela}} i verktygsfältet, eller markera en kant och klicka på {{ui:Dela…}} i {{ui:Entitetsinfo}}.
2. Peka på kanten. Markeringar visar var snitten görs: över mitten av kanten blir det två delar; flytta mot en ände för fler.
3. Klicka för att dela den i de delar som visas. Eller skriv in ett tal, till exempel `5` (eller `5s`, eller `/5`), och tryck på {{key:Enter}}: den delas direkt.

Delarna lämnas markerade, och det är ett steg att ångra. En yta som kanten tillhör behåller sin form och får de nya hörnen.

## Dela en båge eller en cirkel

Peka på valfritt segment på en båge eller cirkel: den delas som en helhet.

- En båge eller cirkel vars hörn ingen annan använder, och som ligger plant på sin yta, **ritas om med så många segment** på den verkliga bågen. Dess ändar står kvar, och den är fortfarande en kurva, så du kan markera den med ett klick och ändra dess radie i {{ui:Entitetsinfo}}. En 24-sidig cirkel som delas i 8 blir en åttkant.
- Alla andra kurvor — kanten på en utdragen cylinder, en kurva ritad med {{ui:Kurva}}, en båge med linjer fästa i sina hörn — får nya hörn med lika långa avstånd längs sig, och ingenting flyttas.

## Med modelleringstangenterna

Verktyget är detsamma med modelleringstangenterna (Inställningar › ModelCraft › Tangenter, eller menystilen Modeler), där det finns i menyn {{ui:Nät}} som {{ui:Dela upp kanter}}.

## Att tänka på

- Inskrivna tal går från 2 till 1000; med pekaren får du upp till 100.
- En kurva ritad med {{ui:Kurva}} behåller sina punkter: efter {{ui:Redigera punkter}} ritas den om från dem, och de nya hörnen försvinner.

Se också [Rita ytor med linjer, rektanglar, cirklar och bågar](topic:draw-faces) och [Skriv in exakta mått i värderutan](topic:value-box).
