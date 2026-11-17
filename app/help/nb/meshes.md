---
title: Nett
summary: Gjør en gruppe eller komponent om til et nett, den typen objekt 3D-innholdsverktøy modellerer med, og tilbake til geometri med trykk/trekk.
keywords: nett, polygon, polygoner, n-gon, firkant, firkanter, hjørnepunkter, halvkant, uv, uv-er, konverter, konverter til nett, konverter til geometri, subdivision, skulptur, modellering, 3d-innhold
from: e32363e8
---

ModelCraft har to typer geometri. **Geometri med trykk/trekk** er det som tegnes: flate flater som henger sammen, skjærer hverandre og leges igjen. Et **nett** er den typen objekt 3D-innholdsverktøy modellerer med: flater med et hvilket som helst antall hjørner, der hvert hjørne kan ha sine egne teksturkoordinater (UV-er), normaler og farger, og der hvert hjørnepunkt har verdier som vekter. Et nett plasseres som en gruppe eller komponent, og ligger ved siden av geometri med trykk/trekk i samme modell.

## Gjør en gruppe eller komponent om til et nett

1. Velg en gruppe eller komponent.
2. I {{ui:Entity info}}, klikk {{ui:Convert to mesh}}.

Flatene blir nettets flater (en flate med hull kommer inn som trekanter). Harde kanter forblir skarpe, myke kanter skygges jevnt, og maling, materialer og importerte teksturer blir værende på sine flater. Grupper og komponenter inni den slås sammen til ett nett. Løse kanter utelates: et nett beholder flater. Hver plassering av en komponent viser nettet. Det er ett angrestrinn.

## Hva Entity info viser

Velg et nett for å se flatene, hjørnepunktene og kantene, om det er et lukket volumlegeme (og volumet), og størrelsen slik det er plassert. Et nett med åpne kanter sier hvor mange.

## Gjør et nett tilbake til geometri med trykk/trekk

Velg nettet, og klikk {{ui:Convert to geometry}}. Flate flater kommer tilbake som de var; en flate hvis hjørner ikke ligger i ett plan, kommer tilbake som trekanter. Harde kanter er harde, de andre myke. {{ui:Explode}} legger et netts flater rett inn i gruppen rundt det.

## Greit å vite

- Dobbeltklikk et nett for å [redigere hjørnepunkter, kanter og flater](topic:mesh-edit) i Nett-arbeidsområdet. Gjør det om til geometri for å redigere det med trykk/trekk. Flytt, roter, skaler, kopier, mal, skjul og merk det som en hvilken som helst gruppe.
- Eksporter, 3D-printing, gjengivelser og VR ser et nett som sine flater.
- En fil som har et nett, lagres som en nyere versjon av `.modelcraft`-filen, så ModelCraft 0.6 og eldre kan ikke åpne den. Filer uten nett åpnes i dem som før. Gjør nett om til geometri først for å dele en fil med noen på en eldre versjon.
- Angre på et nett beholder bare det hvert steg endret, så også et veldig stort nett angres raskt.

Se også [Grupper og komponenter](topic:groups-components) og [Ikke bygget ennå](topic:not-built-yet).
