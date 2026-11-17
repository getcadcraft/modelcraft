---
title: Animer kameraet og objekter, og render en video
summary: Sett nøkler for kameraet og for grupper og komponenter på en tidslinje, spill dem av i visningen, og render animasjonen til en WebM-video med rendererens himmel, sol og materialer.
keywords: animasjon, animer, tidslinje, nøkkelbilde, nøkkel, nøkler, kamerabane, flyv gjennom, gjennomgang, gå gjennom, video, film, webm, render video, bilder, bildefrekvens, fps, avspillingshode, autonøkkel, jevn, hold, scener, png-sekvens, bevegelse
from: d3a58249
---

Den **tidslinjen** flytter kameraet og en hvilken som helst gruppe eller komponent over tid. Du setter **nøkler** (hvor noe er på et gitt tidspunkt); ModelCraft flytter det jevnt fra nøkkel til nøkkel. Spill det av i visningen, og render det deretter til en video med samme himmel, sol, materialer og lamper som [et renderet bilde](topic:render).

## Åpne tidslinjen

Klikk {{ui:Visninger}} i gruppen {{ui:Kamera}}, og deretter {{ui:Animasjonstidslinje}}. Tidslinjen åpnes under visningen: kontrollene øverst, deretter en **Kamera**-rad og en rad for hver gruppe eller komponent som beveger seg. Diamantene er nøkler; den røde linjen er **avspillingshodet**, tidspunktet som vises i visningen.

:::touch
På en telefon åpnes tidslinjen også under visningen. Kontrollene er på én rad: sveip den sidelengs for å nå resten; knappen som lukker tidslinjen blir værende ved enden.
:::

Dra glidebryteren (eller klikk i en rad) for å flytte avspillingshodet. {{ui:Spill av}} spiller fra avspillingshodet og blir til {{ui:Pause}} mens den spiller; klikk igjen for å stoppe der den er. {{key:Space}} gjør det samme mens tidslinjen er åpen (med tidslinjen lukket er Space fortsatt {{ui:Velg}}). {{ui:Forrige nøkkel}} og {{ui:Neste nøkkel}} hopper mellom nøklene. En stil du lager selv, kan gi spill og pause en annen tast: {{ui:Innstillinger}}, deretter menyene, tastene og musen, kommandoen *Spill av eller pause animasjonen*.

## Flytt kameraet

1. Flytt avspillingshodet dit opptaket starter (0 s), sett opp visningen, og klikk {{ui:Nøkkel for kamera}}.
2. Flytt avspillingshodet senere (si 4 s), roter, panorer eller gå i visningen til neste posisjon, og klikk {{ui:Nøkkel for kamera}} igjen.
3. Legg til så mange nøkler du vil, og trykk deretter {{ui:Spill av}}.

Kameraet passerer jevnt gjennom hver nøkkel og starter og slutter i hvile.

:::tip
Har du allerede [scener](topic:scenes)? {{ui:Fra scener}} lager kameraets bane av dem: den holder ved hver scene, og beveger seg så til den neste. Hvis tidslinjen ikke har noen nøkler i det hele tatt, gjør {{ui:Render video…}} dette av seg selv, så to scener eller flere er nok til en gjennomgangsvideo.
:::

## Flytt en gruppe eller komponent

1. Velg gruppen eller komponenten (bare hele grupper og komponenter flytter seg; [lag en gruppe](topic:groups-components) først).
2. Klikk {{ui:Nøkkel for valgte}} ved 0 s.
3. Flytt avspillingshodet senere, [flytt, roter eller skaler](topic:move-copy) gruppen dit den skal være, og klikk {{ui:Nøkkel for valgte}} igjen.

Den glir, dreier seg og vokser mellom nøklene. Dreininger tar den korte veien rundt.

**Autonøkkel** sparer klikket i steg 3: mens {{ui:Autonøkkel}} er på, får en valgt gruppe eller komponent som du flytter, roterer eller skalerer, en nøkkel ved avspillingshodet av seg selv (og, første gang, en nøkkel ved 0 s der den var).

:::note
En animert gruppe du flytter uten nøkkel, varer bare til avspillingshodet flytter seg: neste gang du spiller av eller flytter avspillingshodet, går den tilbake dit nøklene plasserer den. Statuslinjen sier fra om det. Trykk {{ui:Nøkkel for valgte}} for å beholde det.
:::

## Endre nøkler

- **Velg en nøkkel** ved å klikke på diamanten: avspillingshodet går dit.
- **Flytt en nøkkel** ved å dra diamanten langs raden, eller med {{key:Left}} og {{key:Right}} (ett bilde; med {{key:Shift}}, ti).
- **Slett** med {{ui:Slett nøkkel}} (den valgte nøkkelen, eller hver nøkkel ved avspillingshodet) eller med {{key:Delete}} på en valgt diamant.
- **Hvordan den beveger seg videre**, for den valgte nøkkelen: {{ui:Jevn}} (en kurve gjennom nøklene rundt), {{ui:Jevn fart}} (en rett linje i én fart), {{ui:Rolig inn og ut}} (kommer til hvile ved denne nøkkelen) eller {{ui:Hold}} (blir stående til neste nøkkel).
- **Lengde (s)** setter hvor lang animasjonen er; en nøkkel satt etter slutten gjør den lengre. For å forkorte den, flytt eller slett nøklene forbi den nye slutten først.
- **×** på en gruppes rad slutter å animere den.

Tidslinjen har sin egen {{ui:Angre}} og {{ui:Gjør om}}: modellens angre ({{key:Mod+Z}}) endrer modellen, ikke nøklene. Animasjonen lagres i `.modelcraft`-filen. Å lukke tidslinjen setter bevegelige grupper tilbake til sin første posisjon.

## Render videoen

1. Klikk {{ui:Render video}} på tidslinjen (eller {{ui:Eksporter}} › {{ui:Render video…}}).
2. Velg {{ui:Størrelse}}, {{ui:Bildefrekvens}}, {{ui:Kvalitet per bilde}} og {{ui:Fil}}.
3. Klikk {{ui:Render video}}. Hvert bilde vises når det lages, med tiden som gjenstår.
4. Når den er ferdig, klikk {{ui:Lagre video}}.

{{ui:Stopp}} (eller {{key:Esc}}) avslutter tidlig; {{ui:Lagre video}} beholder da bildene som er laget, som en kortere video.

Himmelen, solen, materialene, lampene og lysstyrken er de som er satt i {{ui:Render et bilde…}}: sett dem der først, og sjekk et stillbilde. Hvert bilde rendres på denne datamaskinen; ingenting lastes opp.

| Innstilling | Hva den gjør |
|---|---|
| {{ui:Størrelse}} | 480p, 720p HD, 1080p Full HD, eller visningens egen størrelse (opptil 1920 piksler bred) |
| {{ui:Bildefrekvens}} | 24, 25, 30 eller 60 bilder per sekund. Dobbelt så mange bilder tar dobbelt så lang tid |
| {{ui:Kvalitet per bilde}} | {{ui:Rask}} (4 gjennomganger), {{ui:Utkast}} (16) eller {{ui:God}} (64): flere gjennomganger gir jevnere skygger og kanter |
| {{ui:Fil}} | {{ui:WebM-video}}, {{ui:MP4-video (H.264)}} der nettleseren kan skrive den, eller {{ui:PNG-bilder, ett per bilde (ZIP)}} for videoredigerere (og for nettlesere uten videokoder) |

:::tip
En 10 sekunder lang video med 30 bilder per sekund er 301 bilder. Prøv {{ui:Rask}} i 480p først for å sjekke bevegelsen, og render deretter {{ui:Utkast}} eller {{ui:God}} i større størrelse.
:::

WebM spilles i nettlesere og VLC, og videoredigerere konverterer den. {{ui:MP4-video (H.264)}} tilbys der nettleseren kan skrive den. {{ui:Render video}} bruker den raske rendereren; for å path trace hvert bilde, velg {{ui:Legg denne animasjonen i køen}} i samme dialog: bildene rendres i [rendekøen](topic:render#the-render-queue), som krever WebGPU.

:::firefox safari
Videoopptak krever en nettleser som koder video selv (WebCodecs): nyere Chrome, Edge, Firefox og Safari 17 gjør det. Uten det, velg {{ui:PNG-bilder, ett per bilde (ZIP)}}.
:::

## Viktig å vite

- Bare hele grupper og komponenter flytter seg. Flater, kanter, solens tid og stilen endrer seg ikke over tid ennå.
- {{ui:Eksporter animasjon}} under [Scener](topic:scenes) tar fortsatt opp visningen slik den er på skjermen, i sanntid; {{ui:Render video}} rendrer hvert bilde med himmel, skygger og materialer.
