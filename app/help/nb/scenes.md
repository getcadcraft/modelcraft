---
title: Lagre visninger som scener
summary: Lagre et kamera og en stil som en scene, oppdater og gi nytt navn, og gå gjennom scener for å presentere en design.
keywords: scene, visning, lagret visning, kamera, presentasjon, animasjon, spill av, lysbildefremvisning, page up, page down, faner, steg-for-steg-veiledning
from: 38680d6e
---

En **scene** husker en kameraposisjon, en stil og hva som er skjult: hvor du ser fra, perspektiv eller parallell, flatestilen, kanter, solinnstillingene, skjulte grupper, av slåtte etiketter og snittet. Scener lagres i `.modelcraft`-filen.

## Legg til en scene

1. Still inn visningen: roter, zoom, velg en stil, still inn solen.
2. I {{ui:Scener}}-panelet til høyre klikker du {{ui:Legg til scene}}.

   Scenen dukker opp i listen, kalt "Scene 1", "Scene 2" og så videre, og som en fane øverst i 3D-visningen. Statuslinjen sier "Scene 1 lagret: dette kameraet, stilen og det som er skjult."

## Gå til en scene

- Klikk fanen over 3D-visningen, eller navnet i {{ui:Scener}}-listen.
- Eller trykk {{key:PageDown}} for neste scene og {{key:PageUp}} for forrige. {{ui:Neste}} og {{ui:Forrige}} under listen gjør det samme.

Kameraet glir til scenen på litt over et halvt sekund. Er datamaskinen satt til å redusere bevegelse, hopper det dit i stedet.

## Endre, gi nytt navn eller slett en scene

Hver scene i listen har tre små knapper etter navnet:

- **Oppdater** (de sirkulære pilene): lagrer det gjeldende kameraet, stilen og det som er skjult, i scenen. "Scene 2 oppdatert."
- **Gi nytt navn** (blyanten): åpner dialogen "Gi scenen nytt navn". Skriv det nye navnet og klikk {{ui:Lagre}}.
- **Slett** (søppelbøtta): fjerner scenen. "Scene 2 slettet. Ctrl+Z henter den tilbake."

Å legge til, oppdatere, gi nytt navn og slette scener er trinn i angre, på samme måte som endringer i modellen.

## Lås en scenes kamera

Når du rendrer samme visning om igjen og igjen mens designet endrer seg, lås kameraet til scenen, så visningen aldri flytter seg ved et uhell.

1. I {{ui:Scener}}-listen klikker du **låsknappen** (den åpne hengelåsen) etter scenens navn. Den lukkes, og scenens fane over 3D-visningen får en liten hengelås. Statuslinjen sier "Scene 2: kamera låst."
2. Gå til scenen når du vil rendre: kameraet går tilbake til nøyaktig den lagrede visningen, så bilder laget av den passer med de tidligere.

Mens kameraet er låst, lagrer **Oppdater** fortsatt stilen og det som er skjult, i scenen, men kameraet blir stående der det var, selv om du har rotert bort. Klikk hengelåsen igjen for å låse opp; Oppdater lagrer da den gjeldende visningen på nytt. Låsing og opplåsing er trinn i angre, og låsen lagres i `.modelcraft`-filen.

## Presenter

1. Legg til to eller flere scener.
2. Klikk {{ui:Spill av}} under listen. ModelCraft går til neste scene hvert par sekund, og tilbake til den første etter den siste.
3. Klikk {{ui:Stopp}} (samme knapp) eller trykk {{key:Esc}} for å stoppe.

For en solstudie legger du til én scene per time, med bare {{ui:Tid}} endret, og spiller dem deretter av. Se [Stiler og solskygger](topic:styles-shadows#a-sun-study).

For å presentere uten linjene trykker du {{key:Ctrl+Shift+F}} to ganger: fullskjerm, deretter fullskjerm med linjene skjult. Scenefanene blir stående over visningen.

## Hva en scene viser

En scene husker hva som var skjult da du lagret den: grupper og komponenter du [skjulte](topic:hide-isolate), [etiketter](topic:tags) du slo av, og hvilke [snittplan](topic:sections) som kutter. Går du til scenen, skjules og vises de igjen. Så én scene kan vise hele huset, den neste huset med taketiketten av, og den neste et snitt gjennom det.

Skjulte løse flater og kanter er ikke en del av scener. Å gå til en scene lager ikke et trinn i angre. Scener lagret av en tidligere versjon av ModelCraft beholder det som er skjult slik det er; klikk Oppdater for å lagre det inn i dem.

## Eksporter en animasjon

{{ui:Eksporter animasjon}}, under listen, spiller scenene fra den første til den siste, med kameraet glidende jevnt mellom dem, og lagrer filmen som en **WebM**-video (to sekunders bevegelse og en kort pause per scene). Den tar opp visningen slik du ser den, i sin størrelse på skjermen, i [presentasjonsvisning](topic:styles-shadows#presentation-view) (uten akser, hjelpelinjer eller utvalg). Trykk {{key:Esc}} eller klikk knappen igjen for å stoppe uten å lagre. WebM spilles av i nettlesere og VLC, og videoredigerere konverterer den.

For en rendret gjennomgang (himmel, sol, skygger, materialer) i en størrelse du velger, bruk i stedet {{ui:Render video…}}. Uten animasjonsnøkler tar den scenene, i rekkefølge, som kameraets bane. Se [Animer kameraet og objekter](topic:animation).

## Greit å vite

- Å endre stilen eller flytte kameraet etter at du har gått til en scene, endrer ikke scenen før du klikker Oppdater.
- Scener eksporteres ikke til Collada, OBJ, glTF, STL eller IFC.
