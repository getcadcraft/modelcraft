---
title: Gjør en modell klar for 3D-utskrift
summary: Kontroller at en modell er lukket og vender riktig vei, se størrelse, understell og overheng, rett opp det som er galt, og last den ned som STL eller 3MF for skjæreprogrammet ditt.
keywords: 3d-utskrift, 3d-printer, utskrift, skjæreprogram, stl, 3mf, vanntett, lukket, manifold, volumlegeme, hull, vendt innover, overheng, støtter, understell, plate, millimeter, eksport, rett opp, reparer, hul ut, nybegynner, veggtykkelse, utskriftsverktøy
from: 948e19af
---

Et skjæreprogram for 3D-printeren trenger en lukket form: ingen hull, hver flate peker utover, og ingenting går gjennom seg selv. {{ui:Eksporter}} › {{ui:Kontroller for 3D-utskrift (STL eller 3MF)…}} ser etter nettopp det før du laster ned filen.

## Kontroller og last ned

1. Velg det du vil skrive ut: én eller flere grupper eller komponenter, eller noen flater. Hvis ingenting er valgt, skrives alt som vises ut.
2. Klikk {{ui:Eksporter}} i gruppen {{ui:Fil}}, deretter {{ui:Kontroller for 3D-utskrift (STL eller 3MF)…}}.

   Dialogen starter med én linje: «Klar for utskrift», hvor mange ting som må rettes før utskrift, eller hvor mange som må sjekkes først. Hvert problem har tre deler: hva som er galt, hvorfor det betyr noe, og hva du skal gjøre. Deretter kommer størrelsen i millimeter, volumet, antall trekanter og skriverplaten din.

3. Hvis dialogen lister ting som må rettes, klikk {{ui:Rett opp det som kan rettes}} (se nedenfor). Kontrollen kjøres på nytt av seg selv.
4. Klikk {{ui:Last ned 3MF}} eller {{ui:Last ned STL}}.

Det som skrives ut, er det du ser: skjulte flater, skjulte grupper og komponenter, og alt på en skjult etikett, utelates. Størrelser er alltid i millimeter, enheten skjæreprogrammer forventer, uansett hvilken enhet modellen viser.

:::tip
Foretrekk 3MF når skjæreprogrammet ditt kan lese det: det beholder fargene og enhetene. STL har ingen av delene, og skjæreprogrammer antar millimeter.
:::

## Hva kontrollen ser etter

Dette stopper en utskrift eller ødelegger den, og får dialogen til å si «Ikke klar for utskrift»:

| Problem | Hva det betyr | Hva du skal gjøre |
|---|---|---|
| En flate på bare én side | Et hull: en kant har en flate på den ene siden og ingenting på den andre | Tegn den manglende flaten (en linje over gapet lukker den ofte), eller bruk {{ui:Rett opp}} (nedenfor) |
| Delt av tre eller flere flater | Flater møtes i en finne eller en vegg inne i et volumlegeme | Slett den indre flaten |
| Flater som vender motsatte veier | Noen flater peker inn, noen ut | Velg flatene som vender inn, og klikk {{ui:Snu flaten}} i {{ui:Elementinfo}} |
| Vendt innover | En hel lukket del peker innover | Velg flatene og snu dem |
| Går gjennom seg selv | En del brettes gjennom seg selv | {{ui:Rediger}} › {{ui:Mer}} › {{ui:Skjær mot modell}}, og slett deretter det som er inne. Se [Skjær flater](topic:intersect) |

Dette er advarsler: modellen skrives ut, men se på den først.

- **Separate deler overlapper**, eller **møter flate mot flate**: skjæreprogrammer slår dem vanligvis sammen til én. For en renere fil, slå dem sammen med {{ui:Volumlegemer}} › {{ui:Forening}}. Se [Volumlegemeverktøy](topic:solids).
- **Ingenting ligger flatt i bunnen**: vri modellen slik at en flate hviler på platen, ellers legger skjæreprogrammet til støtter eller en flåte.
- **Helner utover mer enn 45° fra loddrett**: de flatene trenger støtte. Dialogen sier hvor mye av overflaten det gjelder.
- **Under 1 mm på tvers**: sannsynligvis modellert i feil enhet. Sjekk enheten i statuslinjen.

En hul del (et lukket skall inne i et annet) er i orden: flatene peker inn i hulrommet, og volumet trekkes fra.

## Rett opp problemene

Under «Hvor problemene er» nevner dialogen hver gruppe eller komponent som har noe galt (løse flater som ikke er i en gruppe, listes som «Flater som ikke er i en gruppe»), med hva som er galt i den. En komponent som er plassert flere ganger, listes én gang: å rette den retter alle kopiene.

- {{ui:Vis}} åpner den gruppen og velger kantene og flatene som er galt, slik at de vises uthevet.
- {{ui:Rett opp det som kan rettes}} retter alle på én gang: den lukker hull der kantene ligger flatt, fjerner flater inne i formen og løse kanter, og snur flatene riktig vei ut. Det er ett steg: {{key:Mod+Z}} angrer det. Kontrollen kjøres så på nytt og viser hva som er igjen.

Det den ikke kan rette (et hull hvis kanter ikke ligger flatt, en del som går gjennom seg selv), blir stående i listen, med hva du må gjøre for hånd. {{ui:Reparer}} under **Utskriftsverktøy** går lenger: den lukker hull som ikke er flate, fjerner løse biter og doble flater, og lister hver rettelse. Se [Støtter, veggtykkelse, hul ut og reparasjon](topic:print-tools#repair). Du kan også rette én gruppe om gangen: velg den, og bruk {{ui:Vis problemer}} og {{ui:Rett opp}} i {{ui:Elementinfo}}. Se [Volumlegemeverktøy](topic:solids).

## En hul del

{{ui:Hul ut}} under **Utskriftsverktøy** gjør en del hul til veggtykkelsen du oppgir, med avløpshull der du klikker. Se [Hul ut](topic:print-tools#hollow).

Du kan også tegne hulrommet selv: en lukket gruppe inne i delen, som ikke rører den, med alle flatene snudd slik at de vender inn i hulrommet. Kontrollen teller den som et hulrom og trekker fra volumet; den listes ikke som noe å rette.

## Skriverplaten din

Velg størrelsen på skriverplaten din i {{ui:Innstillinger}} › {{ui:ModelCraft}} › {{ui:3D-printerens plate}}. Kontrollen advarer da når modellen er større enn platen, snudd begge veier. Se [Innstillinger](topic:settings#3d-printer-bed).

## Utskriftsverktøy

Under funnene i dialogen åpner **Utskriftsverktøy** {{ui:Forhåndsvisning av støtte}} (hvor støttene går og omtrent hvor mye), {{ui:Veggtykkelse}} (vegger som er for tynne til å skrives ut), {{ui:Hul ut}} og {{ui:Reparer}}. Se [Støtter, veggtykkelse, hul ut og reparasjon](topic:print-tools). {{ui:Del for utskrift}} kutter en modell som er for stor for platen, i deler med koblinger og nummererte skjøter: se [Del en stor modell for utskrift](topic:print-split).

## Ikke kontrollert

Kontrollen skjærer ikke. Små detaljer dysen din ikke kan tegne, og de ekte støttene, er skjæreprogrammets ansvar. Se [Ikke bygget ennå](topic:not-built-yet#3d-printing).
