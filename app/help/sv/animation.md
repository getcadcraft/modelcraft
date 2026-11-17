---
title: Animera kameran och objekt, och rendera en video
summary: Sätt nycklar för kameran och för grupper och komponenter på en tidslinje, spela upp dem i vyn och rendera animeringen till en WebM-video med renderarens himmel, sol och material.
keywords: animering, animera, tidslinje, nyckelbildruta, nycklar, kamerabana, flyga igenom, genomgång, gå igenom, video, film, webm, rendera video, bildrutor, bildfrekvens, spelhuvud, automatisk nyckel, mjuk, håll, scener, PNG-sekvens, rörelse
from: d3a58249
---

Den **tidslinjen** flyttar kameran och alla grupper och komponenter över tid. Du sätter **nycklar** (var något är vid ett visst ögonblick); ModelCraft flyttar det mjukt från nyckel till nyckel. Spela upp det i vyn och rendera det sedan till en video med samma himmel, sol, material och lampor som [en renderad bild](topic:render).

## Öppna tidslinjen

Klicka {{ui:Views}} i gruppen {{ui:Camera}}, och sedan {{ui:Animation timeline}}. Tidslinjen öppnas under vyn: kontrollerna längs överkanten, sedan en rad för **Kamera** och en rad för varje grupp eller komponent som rör sig. Diamanterna är nycklar; den röda linjen är **spelhuvudet**, det ögonblick som visas i vyn.

:::touch
På en telefon öppnas tidslinjen under vyn också. Dess kontroller är en rad: svep den åt sidan för att nå resten; knappen som stänger tidslinjen står kvar vid dess ände.
:::

Dra reglaget (eller klicka i en rad) för att flytta spelhuvudet. {{ui:Play}} spelar från spelhuvudet och blir {{ui:Pause}} medan det spelar; klicka igen för att stoppa där det står. {{key:Space}} gör samma sak medan tidslinjen är öppen (med tidslinjen stängd är Space fortfarande Markera). {{ui:Previous key}} och {{ui:Next key}} hoppar mellan nycklar. En egen stil kan ge uppspelning och paus en annan tangent: {{ui:Settings}}, sedan menyerna, tangenterna och musen, kommandot *Spela upp eller pausa animeringen*.

## Flytta kameran

1. Flytta spelhuvudet till där skottet startar (0 s), ställ in vyn och klicka {{ui:Key camera}}.
2. Flytta spelhuvudet senare (säg 4 s), kretsa, panorera eller gå i vyn till nästa position, och klicka {{ui:Key camera}} igen.
3. Lägg till så många nycklar du vill och klicka sedan {{ui:Play}}.

Kameran passerar mjukt genom varje nyckel och startar och slutar i vila.

:::tip
Har du redan [scener](topic:scenes)? {{ui:From scenes}} gör kamerans bana av dem: den håller vid varje scen och rör sig sedan till nästa. Om tidslinjen inte har några nycklar alls gör {{ui:Render video…}} det av sig självt, så två scener eller fler räcker för en genomgångsvideo.
:::

## Flytta en grupp eller komponent

1. Markera gruppen eller komponenten (bara hela grupper och komponenter rör sig; [skapa en grupp](topic:groups-components) först).
2. Vid 0 s klickar du {{ui:Key selected}}.
3. Flytta spelhuvudet senare, [flytta, rotera eller skala](topic:move-copy) gruppen dit den ska vara och klicka {{ui:Key selected}} igen.

Den glider, vrids och växer mellan sina nycklar. Vridningar tar den korta vägen runt.

**Auto key** sparar klicket i steg 3: medan {{ui:Auto key}} är på får en markerad grupp eller komponent som du flyttar, roterar eller skalar en nyckel vid spelhuvudet av sig själv (och, första gången, en nyckel vid 0 s där den var).

:::note
Att flytta en animerad grupp utan nyckel varar bara tills spelhuvudet flyttas: nästa gång du spelar eller skrubbar går den tillbaka dit dess nycklar placerar den. Statusfältet säger det. Tryck {{ui:Key selected}} för att behålla den.
:::

## Ändra nycklar

- **Välj en nyckel** genom att klicka på dess diamant: spelhuvudet går dit.
- **Flytta en nyckel** genom att dra dess diamant längs sin rad, eller med {{key:Left}} och {{key:Right}} (en bildruta; med {{key:Shift}}, tio).
- **Ta bort** med {{ui:Delete key}} (den valda nyckeln, eller varje nyckel vid spelhuvudet) eller {{key:Delete}} på en vald diamant.
- **Hur den rör sig vidare**, för den valda nyckeln: {{ui:Smooth}} (en kurva genom nycklarna omkring), {{ui:Steady}} (en rak linje i en jämn fart), {{ui:Slow in and out}} (kommer till vila vid denna nyckel) eller {{ui:Hold}} (står kvar tills nästa nyckel).
- **Length (s)** anger hur lång animeringen är; en nyckel satt efter slutet gör den längre. För att korta den, flytta eller ta bort nycklarna efter det nya slutet först.
- **×** på en grupps rad slutar animera den.

Tidslinjen har sin egen {{ui:Undo}} och {{ui:Redo}}: modellens ångra ({{key:Mod+Z}}) ändrar modellen, inte nycklarna. Animeringen sparas i `.modelcraft`-filen. Att stänga tidslinjen sätter tillbaka rörliga grupper i deras första pose.

## Rendera videon

1. Klicka {{ui:Render video}} på tidslinjen (eller {{ui:Export}} › {{ui:Render video…}}).
2. Välj {{ui:Size}}, {{ui:Frame rate}}, {{ui:Quality of each frame}} och {{ui:File}}.
3. Klicka {{ui:Render video}}. Varje bildruta visas när den görs, med tiden kvar.
4. När den är klar, klicka {{ui:Save video}}.

{{ui:Stop}} (eller {{key:Esc}}) avslutar i förtid; {{ui:Save video}} sparar sedan de bildrutor som hunnit göras som en kortare video.

Himmel, sol, material, lampor och ljusstyrka är de som sätts i {{ui:Render a picture…}}: ställ in dem där först och kontrollera en stillbild. Varje bildruta renderas på den här datorn; ingenting laddas upp.

| Inställning | Vad den gör |
|---|---|
| {{ui:Size}} | 480p, 720p HD, 1080p Full HD, eller vyns egen form (upp till 1920 pixlar bred) |
| {{ui:Frame rate}} | 24, 25, 30 eller 60 bildrutor per sekund. Dubbelt så många bildrutor tar dubbelt så lång tid |
| {{ui:Quality of each frame}} | {{ui:Snabb}} (4 pass), {{ui:Utkast}} (16) eller {{ui:Bra}} (64): fler pass ger jämnare skuggor och kanter |
| {{ui:File}} | {{ui:WebM video}}, {{ui:MP4 video (H.264)}} där webbläsaren kan skriva den, eller {{ui:PNG pictures, one per frame (ZIP)}} för videoredigerare (och för webbläsare utan videokodare) |

:::tip
En 10 sekunder lång video med 30 bildrutor per sekund är 301 bildrutor. Prova {{ui:Snabb}} i 480p först för att kontrollera rörelsen, och rendera sedan {{ui:Utkast}} eller {{ui:Bra}} i en större storlek.
:::

WebM spelas i webbläsare och VLC, och videoredigerare konverterar den. {{ui:MP4 video (H.264)}} erbjuds där webbläsaren kan skriva den. {{ui:Render video}} använder den snabba renderaren; för att pathtracea varje bildruta, välj {{ui:Add this animation to the queue}} i samma dialog: bildrutorna renderas i [renderingskön](topic:render#the-render-queue), som kräver WebGPU.

:::firefox safari
Att rendera en video kräver en webbläsare som kodar video själv (WebCodecs): nyare Chrome, Edge, Firefox och Safari 17 gör det. Utan det, välj {{ui:PNG pictures, one per frame (ZIP)}}.
:::

## Att veta

- Bara hela grupper och komponenter rör sig. Ytor, kanter, solens tid och stilen ändras inte över tid ännu.
- {{ui:Export animation}} under [Scener](topic:scenes) spelar fortfarande in vyn som den syns på skärmen, i realtid; {{ui:Render video}} renderar varje bildruta med himmel, skuggor och material.
