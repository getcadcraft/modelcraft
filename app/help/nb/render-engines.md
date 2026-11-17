---
title: Velg hvilket program som tegner bildet
summary: Motorvalget i dialogen Render: våre egne to motorer, andre programmer i CadCraft Studio, og hva nettet gjør i stedet.
keywords: render, motor, renderer, rendermotor, programtillegg, plugin, studio, eksternt program, tegnet av, kø, tillegg-motor
from: be4b056a
---

{{ui:Render et bilde…}} har et valg **Motor** over Modus. Våre egne to motorer er alltid der og virker overalt; tillegg kan legge til flere, og i CadCraft Studio har listen også de programmene som tar over scenen.

| Motor | Hva den gjør | Hvor |
|---|---|---|
| Innebygd: Rask | Det raske stillbildet: dagslys, myke skygger, glass- og metallutseende, på sekunder | Nettleseren og Studio |
| Innebygd: Path tracer | Lys som spretter mellom flater, på grafikkortet eller prosessoren din, renderkøen og de andre datamaskinene på nettverket ditt | Nettleseren og Studio |
| En tillegg-motor | Den tegner og gir bildet tilbake: se [Tegn bildet med et annet program](topic:render-other-program) | Nettleseren (en motor skrevet i JavaScript) eller Studio (en motor som kjører et program) |
| Et program som tar over scenen | Studio legger scenen i sin mappe og holder den i takt | Studio |
| Åpne i … | Lagrer scenen og åpner den i et program; ingenting kommer tilbake: se [Åpne scenen i et annet program](topic:render-open-in) | Nettet lagrer filen |

## Slik oppfører valget seg

- Velger du Rask eller Path tracer, endres Modus med det, og omvendt. Ingenting annet i dialogen endrer seg for folk som aldri bruker en annen motor.
- En motor som ikke er tilgjengelig blir stående i listen med årsaken («ikke funnet», «trenger en nyere versjon»); du kan ikke velge den. I nettleseren viser en motor som bare kjører i Studio «lagrer en fil»: {{ui:Render et bilde…}} lagrer da scenen og innstillingene til en fil som du tar med til det programmet.
- Valget lagres med filens rendringsinnstillinger, og motoren du valgte sist er startmotoren for filer som ikke har et valg av egen.
- Et bilde fra et annet program sier hvilket program som tegnet det og versjonen, i dialogen og i renderkøen. Løftene på siden [Render](topic:render) gjelder bare **våre egne** motorer: et annet program belyser, toner og samplerer på sin egen måte, så to bilder av én scene er like i kamera, sol, lamper og eksponering, men ikke piksel for piksel.

## Hva hver motor får

Scenen sendes til et annet program som en **pakke**: modellen som en USD-fil (samme fil som [Lagre som USD](topic:usd) skriver), og en innstillingsfil som holder det en USD-importør ikke kan stoles på med: de eksakte materialverdiene, lampene som er på med effekt og lysprofiler, solen, himmelen, eksponeringen og kameraet slik dialogen ville tegnet det. Ingenting lastes opp noe sted.

## Renderkøen

Et bilde eller en animasjon for et annet program kan vente i [renderkøen](topic:render#the-render-queue) akkurat som våre egne; jobben husker hvilken motor den er for. En animasjon sendes til programmet i ett kjøring.
