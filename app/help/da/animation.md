---
title: Animér kameraet og objekter, og render en video
summary: Sæt nøgler for kameraet og for grupper og komponenter på en tidslinje, afspil dem i visningen, og render animationen til en WebM-video med rendererens himmel, sol og materialer.
keywords: animation, animér, tidslinje, nøgleramme, nøgler, nøgle, kamerasti, flyv igennem, gennemflyvning, rundtur, gå igennem, video, film, webm, render video, billeder, billedfrekvens, fps, playhead, autonøgle, udjævn, glat, hold, scener, png-sekvens, bevægelse
from: d3a58249
---

**Tidslinjen** flytter kameraet og enhver gruppe eller komponent over tid. Du sætter **nøgler** (hvor noget er på et bestemt tidspunkt); ModelCraft flytter det glat fra nøgle til nøgle. Afspil det i visningen, og render det derefter til en video med samme himmel, sol, materialer og lamper som [et renderet billede](topic:render).

## Åbn tidslinjen

Klik på {{ui:Visninger}} i gruppen {{ui:Kamera}}, og derefter på {{ui:Animationstidslinje}}. Tidslinjen åbner under visningen: kontrollerne øverst, derefter en **Kamera**-række og en række for hver gruppe eller komponent, der bevæger sig. Rombene er nøgler; den røde linje er **playhead**, øjeblikket der vises i visningen.

:::touch
På en telefon åbner tidslinjen også under visningen. Dens kontroller er én række: stryg den til siden for at nå resten; knappen, der lukker tidslinjen, bliver ved dens ende.
:::

Træk skyderen (eller klik i en række) for at flytte playhead. {{ui:Afspil}} afspiller fra playhead og bliver til {{ui:Pause}}, mens den spiller; klik igen for at stoppe, hvor den er. {{key:Space}} gør det samme, mens tidslinjen er åben (med tidslinjen lukket er Space stadig Vælg). {{ui:Forrige nøgle}} og {{ui:Næste nøgle}} springer mellem nøgler. En stil du selv laver kan give afspil og pause en anden tast: {{ui:Indstillinger}}, derefter menuerne, taster og mus, kommandoen *Afspil eller pause animationen*.

## Flyt kameraet

1. Flyt playhead til, hvor optagelsen starter (0 s), sæt visningen op, og klik på {{ui:Nøgle til kamera}}.
2. Flyt playhead senere (sig 4 s), kredsløb, panorér eller gå rundt i visningen til den næste position, og klik på {{ui:Nøgle til kamera}} igen.
3. Tilføj så mange nøgler, du vil, og klik derefter på {{ui:Afspil}}.

Kameraet passerer glat gennem hver nøgle og starter og slutter i hvile.

:::tip
Har du allerede [scener](topic:scenes)? {{ui:Fra scener}} laver kameraets sti ud fra dem: det holder ved hver scene og bevæger sig derefter til den næste. Hvis tidslinjen slet ingen nøgler har, gør {{ui:Render video…}} det selv, så to scener eller flere er nok til en gennemgangsvideo.
:::

## Flyt en gruppe eller komponent

1. Vælg gruppen eller komponenten (kun hele grupper og komponenter bevæger sig; [lav en gruppe](topic:groups-components) først).
2. Ved 0 s klikker du på {{ui:Nøgle til valg}}.
3. Flyt playhead senere, [flyt, roter eller skalér](topic:move-copy) gruppen dertil, hvor den skal være, og klik på {{ui:Nøgle til valg}} igen.

Den glider, drejer og vokser mellem sine nøgler. Drejninger tager den korte vej rundt.

**Autonøgle** sparer klikket i trin 3: mens {{ui:Autonøgle}} er slået til, får en valgt gruppe eller komponent, du flytter, roterer eller skalerer, selv en nøgle ved playhead (og første gang en nøgle ved 0 s, hvor den var).

:::note
At flytte en animeret gruppe uden en nøgle varer kun, til playhead flytter sig: næste gang du afspiller eller scrubber, går den tilbage dertil, hvor dens nøgler sætter den. Statuslinjen siger det. Tryk på {{ui:Nøgle til valg}} for at beholde den.
:::

## Ændr nøgler

- **Vælg en nøgle** ved at klikke på dens rombe: playhead går dertil.
- **Flyt en nøgle** ved at trække dens rombe langs dens række, eller med {{key:Left}} og {{key:Right}} (et billede; med {{key:Shift}}, ti).
- **Slet** med {{ui:Slet nøgle}} (den valgte nøgle, eller alle nøgler ved playhead) eller {{key:Delete}} på et valgt rombe.
- **Hvordan den bevæger sig videre**, for den valgte nøgle: {{ui:Udglat}} (en kurve gennem nøglerne omkring den), {{ui:Jævn}} (en lige linje i én fart), {{ui:Langsomt ind og ud}} (kommer til hvile ved denne nøgle) eller {{ui:Hold}} (bliver stående, indtil næste nøgle).
- **Længde (s)** sætter, hvor lang animationen er; en nøgle sat efter slutningen gør den længere. For at gøre den kortere, flyt eller slet først nøglerne forbi den nye slutning.
- **×** på en gruppes række stopper med at animere den.

Tidslinjen har sin egen {{ui:Fortryd}} og {{ui:Gentag}}: modellens fortryd ({{key:Mod+Z}}) ændrer modellen, ikke nøglerne. Animationen gemmes i `.modelcraft`-filen. Lukning af tidslinjen sætter bevægelige grupper tilbage i deres første positur.

## Render videoen

1. Klik på {{ui:Render video}} på tidslinjen (eller {{ui:Eksportér}} › {{ui:Render video…}}).
2. Vælg {{ui:Størrelse}}, {{ui:Billedfrekvens}}, {{ui:Hvert billedes kvalitet}} og {{ui:Fil}}.
3. Klik på {{ui:Render video}}. Hvert billede vises, når det laves, med tiden tilbage.
4. Når den er færdig, klik på {{ui:Gem video}}.

{{ui:Stop}} (eller {{key:Esc}}) stopper tidligt; {{ui:Gem video}} gemmer så de billeder, der er lavet, som en kortere video.

Himmel, sol, materialer, lamper og lysstyrke er dem, der er sat i {{ui:Render et billede…}}: sæt dem der først, og tjek et stillbillede. Hvert billede renderes på denne computer; intet uploades.

| Indstilling | Hvad den gør |
|---|---|
| {{ui:Størrelse}} | 480p, 720p HD, 1080p Full HD eller visningens egen form (op til 1920 pixels bred) |
| {{ui:Billedfrekvens}} | 24, 25, 30 eller 60 billeder i sekundet. Dobbelt så mange billeder tager dobbelt så lang tid |
| {{ui:Hvert billedes kvalitet}} | {{ui:Hurtig}} (4 gennemløb), {{ui:Udkast}} (16) eller {{ui:God}} (64): flere gennemløb giver blødere skygger og kanter |
| {{ui:Fil}} | {{ui:WebM video}}, {{ui:MP4-video (H.264)}} hvor browseren kan skrive den, eller {{ui:PNG-billeder, ét pr. billede (ZIP)}} til videoredigerere (og til browsere uden videoencoder) |

:::tip
En 10 sekunders video ved 30 billeder i sekundet er 301 billeder. Prøv {{ui:Hurtig}} i 480p først for at tjekke bevægelsen, og render derefter {{ui:Udkast}} eller {{ui:God}} i en større størrelse.
:::

WebM afspilles i browsere og VLC, og videoredigerere konverterer den. {{ui:MP4-video (H.264)}} tilbydes, hvor browseren kan skrive den. {{ui:Render video}} bruger den hurtige renderer; for at path tracing af hvert billede skal du vælge {{ui:Føj denne animation til køen}} i samme dialog: billederne renderes i [renderkøen](topic:render#the-render-queue), som kræver WebGPU.

:::firefox safari
At render en video kræver en browser, der selv koder video (WebCodecs): nyere Chrome, Edge, Firefox og Safari 17 gør. Uden det skal du vælge {{ui:PNG-billeder, ét pr. billede (ZIP)}}.
:::

## Det skal du vide

- Kun hele grupper og komponenter bevæger sig. Flader, kanter, solens tid og stilen ændrer sig ikke over tid endnu.
- {{ui:Eksportér animation}} under [Scener](topic:scenes) optager stadig visningen, som den er på skærmen, i realtid; {{ui:Render video}} renderer hvert billede med himmel, skygger og materialer.
