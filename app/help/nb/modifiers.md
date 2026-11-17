---
title: Modifikatorer på et nett, en gruppe eller en komponent
summary: Skaler, speil, matrisekopier, jevn, skråkant, kutt og bøy et nett uten å endre det. Gjenta eller skaler en gruppe eller komponent med samme stabel, og gjør den permanent når du er klar.
keywords: modifikator, modifikatorer, stabel, gruppe, komponent, skaler, bak, rediger kilde, ikke-destruktiv, speil, matrise, radiell matrise, subdivision, subdivision-overflate, jevn, skråkant, tykkelse, boolsk, kutt, forskyv, støy, sveis, forenkle, gitter, bur, kurvedeformasjon, bøy, krymp rundt, bruk
from: dd5ec1cb
---

En **modifikator** endrer det et nett viser, uten å endre selve nettet. Speil den ene halvdelen av en del og modeller bare den halvdelen. Rund en boks med en subdivision-overflate, og fortsett å redigere boksen. Modifikatorer står i en **stabel** og virker i rekkefølge, fra topp til bunn. Det du ser, eksporterer, skriver ut og gjengir, er nettet med hver modifikator som er på.

## Legg til en modifikator

1. Velg et nett. I Modell-arbeidsområdet ligger **Modifikatorer**-seksjonen i {{ui:Entity info}}; i Nett-arbeidsområdet ligger den i panelet til høyre.
2. Velg en fra {{ui:Add a modifier…}}. Den havner nederst i stabelen.
3. Endre innstillingene under navnet. Lengder tar de samme verdiene som verdifeltet, så `600mm`, `2'6"` og `(6m)/4` fungerer alle.

Hver endring er ett angrestrinn: {{key:Mod+Z}} tar den tilbake.

## Knappene på hver modifikator

- Avkrysningsboksen slår den av eller på.
- Skjerm-knappen viser eller skjuler den i visningen (den blir værende i stabelen).
- Kamera-knappen viser eller skjuler den i gjengitte bilder og videoer, slik at en modifikator kan være bare for gjengivelser (eller bare for visningen).
- Pilene flytter den opp eller ned i stabelen. Rekkefølgen betyr noe: speil og deretter subdivision gir en jevn søm, mens subdivision og deretter speil ikke gjør det.
- {{ui:Apply}} gjør formen til en del av nettet: modifikatorene over den og denne utføres på selve nettet, og de forlater stabelen. Det er ett angrestrinn.
- Krysset fjerner den.

## Modifikatorene

| Modifikator | Hva den gjør |
|---|---|
| Skaler | Skalerer om objektets origo, med en faktor for rød, grønn og blå. Også på en gruppe eller komponent. |
| Speil | Legger til en speilet kopi tvers over rød, grønn eller blå gjennom nettets origo, og slår sammen halvdelene der de møtes. |
| Matrise | Kopierer på en linje (et steg på egen størrelse ganger tallene du oppgir, pluss et fast steg), rundt en akse, eller langs en kurve i modellen. En gruppe eller komponent tar linjen. |
| Subdivision-overflate | Jevner nettet med Catmull-Clark-subdivisjon. Skarpe kanter forblir brettet. Gjengivelser kan bruke flere nivåer enn visningen. |
| Fas | Runder av hver kant som er skarpere enn vinkelen du oppgir. |
| Gi tykkelse | Gir en overflate en tykkelse og lukker randen. |
| Boolsk | Kutter bort, slår sammen eller beholder overlappet med et annet objekt i modellen. Begge må være lukkede volumlegemer. |
| Forskyv | Flytter overflaten inn eller ut med jevn støy. Samme startverdi gir de samme ujevnhetene hver gang. |
| Sveis | Slår sammen hjørnepunkter som er nærmere hverandre enn en avstand. |
| Forenkle | Beholder en andel av trekantene, og fjerner de som endrer formen minst. |
| Jevn | Løsner hjørnepunktene mot naboene. |
| Gitter | Bøyer nettet med et bur: flytt burets punkter, og nettet følger. |
| Kurvedeformasjon | Bøyer nettet langs en kurve i modellen, langs rød, grønn eller blå. |
| Krymp rundt | Flytter hvert hjørnepunkt til nærmeste punkt på et annet objekt. |

## På en gruppe eller komponent

En gruppe eller komponent kan også beholde en oppskrift. Slik kan lampeskjermen være en **Skaler** og en **Matrise** av én skjerm, og endres et tall, endres lampen.

1. Velg en gruppe eller komponent. I {{ui:Entity info}} viser **Modifikatorer**-seksjonen stabelen (tom i starten).
2. Velg {{ui:Scale}} eller {{ui:Array}} fra {{ui:Add a modifier…}}. Gruppen blir en komponent som er **originalen, plassert av stabelen**. Originalen beholdes: rediger den, og hver kopi følger med med en gang.
3. Skaler tar en faktor for rød, grønn og blå (`1, 1, 2` dobler høyden). Matrise tar antall kopier, et steg som en andel av resultatets størrelse så langt, og et ekstra steg i lengder.

Stabelen går fra topp til bunn på originalens egne akser, rundt dens origo, så rekkefølgen betyr noe. En matrise med tre kopier 3 m fra hverandre, og deretter Skaler 2 på rød, plasserer kopiene 6 m fra hverandre. Først Skaler og deretter matrisen holder dem 3 m fra hverandre. Avkrysningsboksen, pilene og krysset virker som på et nett. Visnings- og kamera-knappene og {{ui:Apply}} på én modifikator virker ikke, fordi en stabel på en gruppe er én ting.

- {{ui:Edit source}} åpner originalen på stedet. Endringer vises i hver kopi. Når den lukkes, returneres du til der du var.
- {{ui:Bake modifiers}} gjør resultatet til vanlige kanter og flater og fjerner stabelen, i ett angrestrinn. Kopier som overlapper, blir værende som egen geometri: Bak er ikke en sammenslåing.
- Kopier av komponenten deler oppskriften. {{ui:Make unique}} skiller den (originalen forblir delt).
- Stabelen lagres i filen, følger med ved kopiering, liming og angring, og {{ui:Purge unused}} beholder originalen. Et program som ikke kjenner modifikatorer, viser fortsatt kopiene.
- Før {{ui:Bake modifiers}} kan resultatet ikke åpnes, eksploderes, endres i størrelse eller strekkes: det ville bli bygget på nytt ved neste endring. Hver av dem sier det.
- Grensene er 32 modifikatorer og 1,000 kopier. En komponent laget for å strekkes (Strekk) og en stabel kan ikke dele en definisjon ennå.

## Subdivision-overflate

Subdivision jevner et nett med Catmull-Clark: hver flate blir firkantede flater, og hvert nivå gir fire ganger så mange. En boks med to eller tre nivåer leser allerede som en avrundet form, og boksen kan fortsatt redigeres.

- **Nivåer i visningen** angir hvor jevn den er.
- **Nivåer i gjengivelser** angir hvor jevne gjengitte bilder og videoer er. Gjengivelser kan bruke flere nivåer enn visningen.
- **Gjengivelser på den sanne jevne overflaten** setter punktene i et gjengitt nett på grenseoverflaten nivåene går mot, slik at selv to nivåer gjengis like jevnt som mange.
- **Brett** holder kanter skarpe: i Nett-arbeidsområdet velg kanter, og bruk {{ui:Crease}} (1 forblir skarp, 0.5 runder litt, 0 er jevn). Se [Rediger et nett](topic:mesh-edit).
- **Senk visningsnivået på et stort nett:** når nivåene du ber om, ville gi flere flater enn denne datamaskinen takler godt i visningen, viser visningen et lavere nivå og sier hvilket. {{ui:Apply}} bruker alltid alle nivåene. Hvor mange flater som er tillatt, settes av maskinklassen i {{ui:Settings}} › Gjengivelse › Din maskin.
- Åpne kanter beholder sine hjørner og blir på kantenes linje.

## Bøy med et gitterbur

1. Legg til en modifikator {{ui:Lattice}}, og trykk {{ui:Add a lattice cage round the mesh}}. Et bur på 3 × 3 × 3 punkter vises rundt nettet, tegnet som tråder.
2. Åpne buret i Nett-arbeidsområdet (dobbeltklikk det), og flytt punktene. Nettet følger jevnt.

:::tip
Et bur er et nett som alle andre: skjul det med merket når du er ferdig.
:::

## Store nett

Små stabler beregnes med en gang. En stor beregnes i bakgrunnen på hver kjerne i datamaskinen, og visningen viser det siste resultatet til det nye er klart. Boolske operasjoner laster volumlegememodelleringen første gang; visningen sier det et øyeblikk.

## Hva modifikatorer ikke gjør ennå

- Vekter per hjørnepunkt (et fall malt på nettet) for Forskyv, Jevn og Krymp rundt.
- Modifikatorer annet enn Skaler og den lineære Matrisen på geometri med trykk/trekk (grupper og komponenter): gjør det om til et nett først ({{ui:Convert to mesh}}). Speil, en rund eller kurvebasert Matrise, Bøy og Avsmalning på grupper kommer senere.
