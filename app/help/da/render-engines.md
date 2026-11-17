---
title: Vælg hvilket program, der tegner billedet
summary: Motorvalget i Render-dialogen: vores egne to motorer, andre programmer i CadCraft Studio, og hvad webben gør i stedet.
keywords: render, motor, renderer, render-motor, plug-in, plugin, studio, eksternt program, tegnet af, kø, add-on-motor
from: be4b056a
---

{{ui:Render et billede…}} har et **Motor**-valg over Tilstand. Vores egne to motorer er altid der og virker alle steder. Add-ons kan tilføje flere, og i CadCraft Studio indeholder listen også de programmer, der overtager scenen.

| Motor | Hvad den gør | Hvor |
|---|---|---|
| Indbygget: Fast | Det hurtige still-billede: dagslys, bløde skygger, glas- og metalfremtoning, på sekunder | Browseren og Studio |
| Indbygget: Path tracer | Lys, der hopper mellem overflader, på dit grafikkort eller din processor, renderkøen og de andre computere på dit netværk | Browseren og Studio |
| En add-ons motor | Den tegner og afleverer billedet tilbage: se [Tegn billedet med et andet program](topic:render-other-program) | Browseren (en motor skrevet i JavaScript) eller Studio (en motor, der kører et program) |
| Et program, der overtager scenen | Studio lægger scenen i sin mappe og holder den opdateret | Studio |
| Åbn i … | Gemmer scenen og åbner den i et program; intet kommer tilbage: se [Åbn scenen i et andet program](topic:render-open-in) | Webben gemmer filen |

## Sådan opfører valget sig

- Vælger du Fast eller Path tracer, skifter Tilstand med den, og omvendt. Intet andet i dialogen ændrer sig for folk, der aldrig bruger en anden motor.
- En motor, der ikke er tilgængelig, bliver på listen med årsagen (»ikke fundet«, »kræver en nyere version«); du kan ikke vælge den. I browseren viser en motor, der kun kører i Studio, »gemmer en fil«. {{ui:Render et billede…}} gemmer så scenen og dens indstillinger i en fil, du tager med til det program.
- Valget gemmes med filens render-indstillinger, og den motor, du valgte sidst, er startmotoren for filer, der ikke har et valg af egen.
- Et billede fra et andet program siger, hvilket program der tegnede det, og dets version, i dialogen og i renderkøen. Løfterne på [Render](topic:render)-siden dækker kun **vores egne** motorer. Et andet program belyser, tonemapper og sampler på sin egen måde, så to billeder af én scene ligner hinanden i kamera, sol, lamper og eksponering, men ikke pixel for pixel.

## Hvad hver motor får

Scenen går til et andet program som en **pakke**: modellen som en USD-fil (den samme fil, som [Gem som USD](topic:usd) skriver), og en indstillingsfil, der indeholder det, en USD-importør ikke kan stole på: de præcise materialeværdier, lamperne, der er tændt med deres styrke og lysprofiler, solen, himlen, eksponeringen og kameraet, som dialogen ville tegne det. Intet uploades nogen steder.

## Renderkøen

Et billede eller en animation til et andet program kan vente i [renderkøen](topic:render#the-render-queue) ligesom vores egne. Dets job husker, hvilken motor det er til. En animation sendes til programmet i én kørsel.
