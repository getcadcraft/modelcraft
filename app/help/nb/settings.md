---
title: ModelCraft-innstillinger
summary: Velg tastestilen du kjenner, gjør orbit og panorering med styreplate uten kameraknappene, og slå fangst og kollisjon mellom volumlegemer av eller på.
keywords: innstillinger, preferanser, styring, tastestil, tastekart, hurtigtaster, blender, styreplate, rulling, orbit, klyp, fang, fangst, kollisjon, overlapp, snitt, gå gjennom
from: caf77d5b
---

Åpne {{ui:Innstillinger}} med tannhjulet i appfeltet, eller {{key:Mod+,}}. Første fane, {{ui:ModelCraft}}, inneholder innstillingene som hører til denne appen; {{ui:Generelt}} inneholder dem alle CadCraft-appene deler (tema, verktøylinje, paneler). ModelCraft-innstillingene finnes bare i appen: du endrer dem her, og denne nettleseren husker dem.

## Styring: hvilke taster og museknapper

To tastestiler. Bytt dem her, med {{ui:Taster: Trykk/trekk}} / {{ui:Taster: Modeller}} nederst til høyre i visningen, eller på slutten av verktøylinjens {{ui:Mer}}-meny:

- **Trykk/trekk-stil** (utgangspunktet; bokstavene i trykk/trekk-modellerere som SketchUp): en bokstav velger et verktøy — {{key:L}} linje, {{key:R}} rektangel, {{key:P}} trykk/trekk, {{key:M}} flytt, {{key:Q}} roter, {{key:S}} skaler, {{key:G}} lag komponent. Se [Taster og museaksjoner](topic:keyboard).
- **Modellerer-stil** (tastene til mesh-modellerere som Blender): velg først, og utfør deretter handlingen på utvalget med en gang. {{key:G}} flytter det, {{key:R}} roterer det og {{key:S}} skalerer det fra der pekeren er — uten første klikk. Mens det flyttes, låser {{key:X}}, {{key:Y}} eller {{key:Z}} den røde, grønne eller blå aksen, et skrevet tall setter avstanden (eller grader, eller faktor), og et klikk eller {{key:Enter}} setter den ned; {{key:Esc}} eller høyreklikk fører den tilbake. Deretter er du tilbake i {{ui:Velg}}.

Tastestilen er det samme valget som menystilen: Modellerer-tastestilen er {{ui:Modellerer}}-menystilen, og når du velger én, velger du den andre. Se [Menyer, taster og mus](topic:menus-keys-and-mouse). Den fullstendige Modellerer-listen står i [Taster og museaksjoner](topic:keyboard#modeler-keys). Verktøytipsene på verktøylinjen og startkortet følger stilen du velger.

## Rulling: musehjul eller styreplate

- **Gjenkjenn automatisk** (utgangspunktet): ModelCraft følger rullingen. Sidelengs eller finmasket rulling, slik en styreplate sender, roterer rundt; hele hjulsteg zoomer.
- **Musehjul**: rulling zoomer alltid mot pekeren.
- **Styreplate**: sveip med to fingre for å rotere rundt, hold {{key:Shift}} og sveip for å panorere, klyp for å zoome. Du trenger aldri knappene {{ui:Orbit}}, {{ui:Panorer}} eller {{ui:Zoom}}.

Klyp zoomer i alle valg. Hvis «Gjenkjenn automatisk» gjetter feil for musen eller styreplaten din, velg den du har.

:::tip
I Modellerer-stilen kan du også rotere rundt ved å holde {{key:Alt}} og dra, og panorere med {{key:Alt+Shift}} og et drag — nyttig på en bærbar uten midtknapp.
:::

## Fang

**Fang til punkter, kanter og akser** (på fra start) drar pekeren til endepunkter, midtpunkter, kanter, hjelpelinjer og de røde, grønne og blå aksene — se [Inferens](topic:inference). Slå det av når du vil plassere noe fritt nær annen geometri uten at det hopper. Flater, bakken og akselåsene virker fortsatt med fang av.

{{ui:Fang}}-knappen nederst til høyre i visningen gjør det samme for denne øktens arbeid (den lagres også). I Modellerer-stilen veksler {{key:Shift+Tab}} den.

## Volumlegemer stopper der de berører

**Stopp volumlegemer der de berører** (på fra start) hindrer at en vegg dras gjennom en annen vegg. Med {{ui:Flytt}} (og {{key:G}}, og lim inn-og-flytt med {{key:Mod+D}}) glir utvalget bort til det andre volumlegemet og stopper der det berører det; med {{ui:Trykk/trekk}} stopper en flate der den møter et annet volumlegeme. Å hvile på noe og gli langs det er greit — bare å gå inn i det indre stoppes. Ting som allerede overlapper når du starter, kan fortsatt trekkes fra hverandre.

For å skyve noe gjennom med vilje, klikk {{ui:Kollisjon}} nederst til høyre (eller fjern innstillingen), gjør flyttingen, og klikk den igjen.

:::note
Kollisjoner sjekkes for flytting og trykk/trekk. {{ui:Roter}} og {{ui:Skaler}} sjekker dem ikke ennå, og løs geometri som berører hverandre, slås fortsatt sammen, som den alltid har gjort: hold atskilte ting i [grupper](topic:groups-components) slik at de forblir atskilt.
:::

## 3D-skriverplattform

Størrelsen på skriverens plattform: {{ui:Ikke angitt}} (utgangspunktet), 180 × 180 × 180, 220 × 220 × 250, 256 × 256 × 256 eller 300 × 300 × 400 mm. Velg størrelsen som er nærmest skriverens byggevolum. [Sjekk for 3D-printing](topic:print-3d) sier da når en modell er større enn plattformen; med {{ui:Ikke angitt}} sjekkes ikke størrelsen.

## Orbit og panorer

**Orbit rundt det som er under pekeren** (på fra start): orbit dreier rundt delen av modellen under pekeren, og panorering holder det punktet under pekeren; over tomt rom bruker begge midten av visningen. Slå det av for alltid å dreie rundt midten av visningen. **Orbit-hastighet** og **Panorer-hastighet** går fra 0.25× til 3× (1× er utgangspunktet) og gjelder musen, styreplaten, berøring og piltastene. Se [Orbit, panorer og zoom](topic:orbit-pan-zoom).

## Hjørneindikator

Det som vises i hjørnet av 3D-visningen: **ViewCube** (utgangspunktet; øverst til høyre — klikk en flate, kant eller et hjørne for å se derfra, dra det for å rotere, dra kompassringen for å dreie modellen), **Aksesymbol** (et lite X-, Y-, Z-merke nederst til venstre som snur seg med visningen: X rød, Y grønn, Z blå) eller **Ingen**. Se [ViewCube](topic:view-cube).
