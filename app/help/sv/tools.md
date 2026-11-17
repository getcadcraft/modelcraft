---
title: Verktygslista
summary: Varje ModelCraft-verktyg med sin tangent, vad varje klick gör och vad du kan skriva i värderutan medan det arbetar.
keywords: verktyg, verktygsfält, kommandon, lista, linje, rektangel, cirkel, polygon, förskjut, båge, kurva, spline, följ mig, svep, 2-punktsbåge, båge från centrum, markera, tryck/dra, flytta, rotera, skala, radergummi, måttband, mått, orbit, panorera, zooma, placera komponent
from: e08a274f
---

Tipset i statusfältet säger alltid vad det aktuella verktyget vill ha härnäst. {{key:Esc}} avbryter det ett verktyg håller på med.

## Ritverktyg

| Verktyg | Tangent | Klick | Skriv i värderutan |
|---|---|---|---|
| {{ui:Linje}} | {{key:L}} | Start, sedan varje nästa punkt. Slutar när en yta sluts, eller vid {{key:Esc}} | En längd mot pekaren; `[x,y,z]` en punkt; `<dx,dy,dz>` en förskjutning ({{ui:Längd}}) |
| {{ui:Rektangel}} | {{key:R}} | Första hörnet (mark eller en yta), motsatt hörn | Bredd och djup: `4m,3m` ({{ui:Mått}}) |
| {{ui:Cirkel}} | {{key:C}} | Centrum (mark eller en yta), en punkt på kanten | Före första klicket: sidor, `24s` eller `24` ({{ui:Sidor}}). Efter: radien ({{ui:Radie}}) |
| {{ui:Polygon}} | {{key:N}} | Centrum, ett hörn | Samma som Cirkel; startar med 6 sidor |
| {{ui:Båge}} | {{key:A}} | Start, slut, sedan välvningen | Kordans längd efter starten ({{ui:Längd}}); välvningen efter slutet ({{ui:Välvning}}); `12s` för segment |
| {{ui:Gradskiva}} | — | Centrum, 0°-punkten, sedan vinkeln | Vinkeln i grader ({{ui:Vinkel}}) |
| {{ui:Följ mig}} | — | Markera en bana, klicka sedan på ytan (eller klicka på ytan och sedan på en kant i banan) | — |
| {{ui:Måla}} | {{key:B}} | En yta, grupp eller komponent | — ({{key:Ctrl}} sammanhängande, {{key:Shift}} all av den färgen, {{key:Alt}} plocka upp en färg) |
| {{ui:Förskjut}} | {{key:F}} | En yta (eller markera först en yta eller kanter), sedan sidan och avståndet | Avståndet ({{ui:Avstånd}}); in i ytan är inåt |
| {{ui:Kurva}} | — | Punkter som kurvan går genom; {{key:Enter}} eller ett dubbelklick avslutar | En längd längs pekaren, `[x,y,z]` eller `<dx,dy,dz>` för nästa punkt |
| {{ui:Båge från centrum}} | — | Centrum, start, sedan slutet | Radien efter centrum; vinkeln i grader efter start; `12s` för segment |

## Redigeringsverktyg

| Verktyg | Tangent | Klick | Skriv i värderutan |
|---|---|---|---|
| {{ui:Markera}} | {{key:Space}} | Klicka, dubbelklicka, tripleklicka, dra en ruta. Se [Markera saker](topic:select) | Med ett mått eller en kant markerad: en ny längd, som ändrar storleken på modellen |
| {{ui:Tryck/dra}} | {{key:P}} | Ytan, sedan avståndet. Dubbelklicka på en yta för att upprepa det senaste avståndet | Ett avstånd; negativt går åt andra hållet ({{ui:Avstånd}}) |
| {{ui:Flytta}} | {{key:M}} | Från en punkt, till en punkt. Håll {{key:Ctrl}} eller {{key:Alt}} för att kopiera | Ett avstånd mot pekaren, `<dx,dy,dz>` eller `[x,y,z]` ({{ui:Avstånd}}). Efter en kopia: `3x` eller `/3` |
| {{ui:Rotera}} | {{key:Q}} | Centrum (på en yta för att vrida i dess plan), startriktning, slutriktning | Vinkeln i grader ({{ui:Vinkel}}) |
| {{ui:Skala}} | {{key:S}} | Punkten som står kvar, en referenspunkt, den nya storleken | En faktor: `2`, `0.5` ({{ui:Skala}}) |
| {{ui:Radergummi}} | {{key:E}} | Klicka eller dra över kanter, grupper, hjälplinjer och mått | ingenting |
| {{ui:Måttband}} | {{key:T}} | Från en kant: en parallell hjälplinje. Från en punkt: mäter och lämnar en hjälppunkt | Förskjutningen ({{ui:Förskjut}}) eller avståndet ({{ui:Längd}}) |
| {{ui:Mått}} | {{key:D}} | Två hörn (eller en kant), sedan var måttlinjen ska gå. Se [Mått och ändra storlek](topic:dimensions) | Förskjutningen ({{ui:Förskjut}}). Direkt efteråt: en ny längd, som ändrar storleken på modellen |

{{ui:Flytta}}, {{ui:Rotera}} och {{ui:Skala}} arbetar på markeringen. Om inget är markerat tar de först det du klickar på (en yta tar med sina kanter).

## Kameraverktyg

| Verktyg | Tangent | Dra för att |
|---|---|---|
| {{ui:Orbit}} | {{key:O}} | Vrida runt den del av modellen som finns under pekaren ({{key:Shift}} panorerar) |
| {{ui:Panorera}} | {{key:H}} | Skjuta vyn |
| {{ui:Zooma}} | {{key:Z}} | Zooma: uppåt är in, nedåt är ut |
| {{ui:Utsträckning}} | {{key:Shift+Z}} | (en knapp, inte ett verktyg) Anpassa hela modellen |

Du behöver sällan dessa med musen: dra med mittenknappen för att orbita, dra med högerknappen för att panorera, och hjulet zoomar med vilket verktyg som helst. Se [Orbit, panorera och zooma](topic:orbit-pan-zoom).

## Ordna

| Knapp | Tangent | Gör |
|---|---|---|
| {{ui:Komponent}} | {{key:G}} | Gör markeringen till en komponent |
| {{ui:Grupp}} | {{key:Shift+G}} | Gör markeringen till en grupp |
| {{ui:Spräng}} | ingen | Gör de markerade grupperna och komponenterna tillbaka till lös geometri |

## Placera komponent

Inte på verktygsfältet: klicka på {{ui:Placera}} bredvid en komponent i panelen {{ui:Komponenter}}. Klicka en gång där komponentens origo ska vara; verktyget går sedan tillbaka till {{ui:Markera}}.
