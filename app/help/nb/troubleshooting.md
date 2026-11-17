---
title: Feilsøking
summary: Symptomer, årsaker og løsninger, fra en tom 3D-visning til importer med feil størrelse, med meldingene ModelCraft viser.
keywords: problem, feil, error, virker ikke, tom, webgl, grafikk, tregt, melding, import mislyktes, feil størrelse, kan ikke velge, berøring, taster virker ikke, tapt arbeid
from: 6e7394be
---

## Den 3D-visningen er tom

**Symptom:** midten av skjermen forblir tom, eller viser bare bakgrunnsfargen, og å klikke på verktøy gjør ingenting.

**Årsak:** ModelCraft tegner med WebGL 2, nettleserens 3D-grafikk. Den mangler når nettleseren er gammel, når maskinvareakselerasjon er slått av, eller når grafikkdriveren er blokkert.

**Løsning:**

:::chromium
1. Åpne nettleserens innstillinger og søk etter «maskinvareakselerasjon».
2. Slå på «Bruk maskinvareakselerasjon når den er tilgjengelig», og start nettleseren på nytt.
3. Er den allerede på, skriv `chrome://gpu` i adressefeltet (`edge://gpu` i Edge) og se etter «WebGL2» i listen. Står det deaktivert, oppdater grafikkdriveren.
:::

:::firefox
1. Åpne **Innstillinger**, deretter **Generelt**, og bla ned til «Ytelse».
2. Fjern haken i «Bruk anbefalte ytelsesinnstillinger», og sett haken i «Bruk maskinvareakselerasjon når det er tilgjengelig». Start Firefox på nytt.
3. Feiler det fortsatt, skriv `about:support` i adressefeltet og se i delen «Grafikk» etter WebGL 2.
:::

:::safari
Oppdater macOS og Safari. Nyere versjoner av Safari har alltid WebGL 2 på. Er eksperimentelle funksjoner endret under **Safari**, deretter **Innstillinger**, deretter **Avansert** (eller **Funksjonsflagg**), tilbakestill dem.
:::

På en jobbmaskin, fjernskrivebord eller virtuell maskin kan 3D-grafikk være blokkert av retningslinjer. Prøv en annen maskin. Se [Nettlesere og datamaskiner](common:browsers).

## Tastene gjør ingenting, eller skriver inn i en boks

**Årsak:** tastaturfokuset er i et panelfelt: listen {{ui:Flater}} i {{ui:Stil}}, en solinnstilling, feltet {{ui:Navn}} i {{ui:Elementinfo}}, eller velgeren for enheter. Bokstaver og piltaster går da til det feltet.

**Løsning:** klikk i 3D-visningen, og trykk tasten igjen. Tastene gjør heller ingenting mens en dialogboks er åpen.

## Å skrive et tall gjør ingenting

- **Ingen retning ennå.** En skrevet lengde går den veien pekeren peker fra første klikk. Flytt pekeren litt i ønsket retning, og skriv deretter.
- **Feil tidspunkt.** De fleste verktøy tar en skrevet verdi først etter første klikk: klikk første hjørne, flaten eller punktet å flytte fra først. {{ui:Sirkel}} og {{ui:Mangekant}} tar et antall sider før første klikk.
- **"Skriv en lengde, for eksempel 3m, 10'6" eller 4m,3m."** ModelCraft kunne ikke lese den. Sjekk etter desimalkomma (`2,5`): bruk punktum.

## En form starter på feil sted på en berøringsskjerm

**Symptom:** med en finger er den første rektangelen i orden, men neste rektangel, sirkel eller linje starter der den forrige berøringen endte, i stedet for der du tok på.

**Årsak:** en feil i denne versjonen: på en berøringsskjerm husker verktøyet det siste fangepunktet fra forrige bevegelse.

**Løsning:** trykk på verktøyets knapp i verktøylinjen igjen før hver nye form. Da starter verktøyet på nytt, og første punkt havner der det trykkes.

## Redigering av én gruppe endret en annen

**Symptom:** en gruppe ble kopiert med {{ui:Flytt}} og {{key:Ctrl}}, én kopi ble åpnet og redigert, og den andre kopien endret seg også. {{ui:Oversikt}} viser begge med samme navn.

**Årsak:** i denne versjonen lager kopiering av en gruppe en ny plassering av samme gruppe, som for en komponent. Knappen {{ui:Gjør unik}} tilbys bare for komponenter.

**Løsning:** velg kopien som skal endres, klikk {{ui:Lag komponent}} i {{ui:Elementinfo}}, og deretter {{ui:Gjør unik}}. Den kopien har da sitt eget innhold. Eller {{ui:Eksploder}} den.

## Trykk/trekk gjør ikke det forventet

- **"Trykk/trekk virker på en flate. Klikk på en flate."** Det ble klikket på en kant eller tomt rom. Hold pekeren til flaten markeres, og klikk deretter.
- **Flaten er inne i en gruppe.** Dobbeltklikk på gruppen for å åpne den først.
- **Et vindu kuttet ikke gjennom veggen.** Rektangelen må tegnes på veggens flate, ikke foran den, og veggen må ha en bakflate. Se [Lag en åpning gjennom en vegg](topic:openings#if-it-did-not-cut-through).
- **To bokser overlapper uten å slås sammen.** Volumlegemer som er skjøvet inn i hverandre, kutter eller slår ikke sammen hverandre i denne versjonen.

## En linje eller form ga ikke en flate

En flate fylles bare når kantene lukker en flat sløyfe. Sjekk at siste punkt festet til det første («Endepunkt»), og at alle kantene ligger i ett plan. En sløyfe som er litt utenfor planet, blir stående som linjer. Tegn én av kantene på nytt, og fest den til hjørnene.

## Jeg kan ikke velge eller slette en flate

- Med {{ui:Velg}} tar et klikk nær en kant kanten. Klikk nærmere midten av flaten.
- {{ui:Viskelær}} plukker ikke flater. Velg flaten og trykk {{key:Delete}}, eller slett en av kantene.
- Hører flaten til en gruppe eller komponent, velges hele tingen med klikket. Dobbeltklikk for å åpne den.

## "Velg noe å flytte først, eller klikk på det."

{{ui:Flytt}}, {{ui:Roter}} og {{ui:Skaler}} trenger noe å jobbe med: velg det først, eller start verktøyet ved å klikke på selve tingen (ikke på tomt rom eller en hjelpelinje).

## "Velg først noe geometri (dra et vindu, eller trippelklikk for å velge alt som henger sammen)."

{{key:G}} og {{key:Shift+G}} trenger et utvalg. Hjelpelinjer kan ikke grupperes.

## Piltastene roterer i stedet for å låse

Låsing virker bare etter første klikk i et tegne- eller redigeringsverktøy. {{ui:Trykk/trekk}} har ingen låser, og i {{ui:Roter}} endrer de ikke svingen. Ellers roterer piltastene visningen.

## Esc i fullskjerm

I fullskjerm kan nettleseren bruke første {{key:Esc}} til å avslutte fullskjerm. Trykk {{key:Esc}} igjen for å avbryte verktøyet.

## Ingen midtknapp

Trykk {{key:O}} for {{ui:Orbit}} og dra, eller bruk piltastene. Se [Orbit, panorer og zoom](topic:orbit-pan-zoom#without-a-middle-button).

## Import

| Melding | Hva du gjør |
|---|---|
| "ModelCraft importerer SketchUp (.skp), Collada (.dae), OBJ, glTF (.glb/.gltf), FBX, PLY, STL, Alembic (.abc), DWG og DXF. … er ingen av disse." | Eksporter modellen fra det andre programmet i ett av disse formatene |
| "Denne filen er over 300 MB." | Forenkle eller del modellen i det andre programmet |
| "…for stor til å modellere her (over 2 millioner hjørnepunkter)." | Det samme |
| "Denne .gltf-filen trenger "…"…" | Dra `.gltf`-filen sammen med dens `.bin`- og teksturfiler, eller åpne `.glb`-versjonen |
| "Denne glTF-filen trenger utvidelsen …, som ModelCraft ikke leser ennå." | Eksporter på nytt fra det andre programmet uten den utvidelsen (KTX2-teksturer, for eksempel) |
| En OBJ importeres uten sine farger eller teksturer | Dra `.obj`-filen sammen med dens `.mtl`- og bildefiler |
| "Denne Alembic-filen bruker det gamle HDF5-oppsettet…" | Lagre den på nytt fra det andre programmet som en Ogawa Alembic-fil |
| En FBX importeres uten sine teksturer | Dra `.fbx`-filen sammen med teksturbildene, eller legg inn mediene ved eksport |
| "Denne FBX-filen er versjon …, som ModelCraft ikke leser" | Eksporter på nytt som FBX 2011 eller nyere |
| En STL eller PLY importeres 1 000 ganger for stor eller liten | STL leses som millimeter og PLY som meter: skaler den (se [Roter og skaler](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)) |
| "Dette er ikke en Collada-fil (.dae)…" eller "…ikke velformet XML…" | Filen er skadet eller ikke Collada. Eksporter den på nytt |
| "Denne Collada-filen har ingen geometri ModelCraft kan importere." | Den inneholder bare kameraer, lamper eller referanser til andre filer |
| "Dette er en binær DXF. Lagre den som ASCII-DXF og prøv igjen." | Lagre den på nytt fra CAD-programmet som ASCII |
| "Dette er ikke en DWG-tegning…" | Filen er ikke en DWG, eller den er skadet |
| "Denne tegningen kunne ikke leses (…). Den kan være skadet, eller lagret i en DWG-versjon leseren ikke håndterer…" | Parentesen gir årsaken. Lagre den som DXF, eller som DWG fra AutoCAD 2000 til 2018, fra CAD-programmet |
| "Denne tegningen går mer enn 10,000 km fra sitt origo…" | Flytt tegningen nær 0,0 i CAD-programmet |

### Importen har feil størrelse eller ligger på siden

- **OBJ:** OBJ har ingen enhet; ModelCraft leser meter. En modell i millimeter kommer inn 1000 ganger for stor: [skaler](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size) den med `0.001`; en modell i tommer med `0.0254`.
- **OBJ på siden:** ModelCraft forventer OBJ-filer med Y opp. En fil skrevet med Z opp kommer inn liggende. Roter den 90° om rød akse: klikk {{ui:Roter}}-senteret på en flate som vender langs rød, eller åpne filen i programmet og eksporter med Y opp.
- **DWG eller DXF:** feil enhet ble valgt i dialogboksen «Tegningsenheter». Angre og importer på nytt.

## Åpne filer

| Melding | Hva du gjør |
|---|---|
| "Denne filen er ikke en ModelCraft-modell (den er ikke JSON)." | Bruk {{ui:Importer}} for andre formater |
| "Dette er ikke en ModelCraft-fil vi kan åpne: …" | Filen er skadet eller endret for hånd |
| "Denne modellen ble lagret av en nyere ModelCraft…" | Åpne den i den nyere versjonen |
| "Denne filen er over 200 MB." | Modellen er for stor til å åpnes her |

## Jeg mistet arbeid

ModelCraft lagrer ikke til en fil av seg selv. Når en fane med ulagrede endringer lukkes eller lastes inn på nytt, spør nettleseren først («Forlate siden?» eller «Laste inn siden på nytt?»); velg å bli og lagre. Ny og Åpne spør også («Ulagrede endringer»). Hvis nettleseren eller datamaskinen krasjet, åpne ModelCraft igjen i samme nettleser: den tilbyr det ulagrede arbeidet tilbake («Gjenopprett arbeidet ditt?»; se [Gjenopprett arbeidet ditt](common:recover)). Lagre ofte med {{key:Mod+S}}.

## Nedlastingsmappen fylles med kopier

Hver lagring er en ny nedlasting, med navnet `Untitled (1).modelcraft`, `Untitled (2).modelcraft` og så videre. Slett de gamle, eller sett nettleseren til å spørre hvor hver fil skal lagres, og overskriv den gamle filen selv. Se [Åpne, lagre, importer og eksporter](topic:files#save-a-model).

## Det blir tregt

- Hvert trinn i angre lagrer en kopi av modellen (et [nett](topic:meshes) lagrer bare det som endret seg), så ved en svært stor import av trykk/trekk-geometri tar hver redigering lengre tid. Eksploder eller slett det som ikke trengs, lagre, og åpne på nytt: ved gjenåpning tømmes også angrehistorikken.
- Solskygger koster mest. Fjern haken for {{ui:Solskygger}} mens modellen lages.

## Ingen skygger

{{ui:Solskygger}} er av, solen er nede på tidspunktet som er valgt («Solen er nede på dette tidspunktet.»), eller stilen er {{ui:Trådramme}}, som ikke tegner skygger.

## «Denne nettleseren tillot ikke fullskjerm.»

Noen nettlesere og noen innebygde visninger nekter fullskjerm. Bruk nettleserens egen fullskjerm i stedet ({{pick:mac=Control-Command-F|windows linux=F11}}).

## ModelCraft åpnes ikke uten tilkobling

ModelCraft åpnes frakoblet bare etter at det er lagret for frakoblet bruk i den nettleseren: knappen i appens linje må vise {{ui:Klar frakoblet}}. Åpne den mens du er tilkoblet, og klikk {{ui:Lagre for frakoblet bruk}}. Viser knappen {{ui:Kunne ikke lagre}}, klikk på nytt med en bedre tilkobling. {{ui:Frakoblet bruk er ikke tilgjengelig}} betyr at dette vinduet (et privat vindu, eller en administrert datamaskin) ikke kan beholde en kopi. Se [Arbeide frakoblet](common:offline).
