---
title: Grupper og komponenter
summary: Hindre at objekter henger sammen, rediger én kopi for å endre dem alle, og bruk panelene Oversikt og Komponenter.
keywords: gruppe, komponent, lag gruppe, lag komponent, eksploder, gjør unik, oversikt, forekomster, kopier, blokk, nestet, rediger gruppe, plasser
from: 7cb925f3
---

Løst geometri i ModelCraft henger sammen: linjer som berører hverandre deler hverandre, og flater som deler en kant beveger seg sammen. Det er det som gjør det mulig å tegne på flater, men det betyr også at en boks tegnet mot en annen boks smelter sammen med den. **Grupper** og **komponenter** holder ting adskilt.

- En **gruppe** pakker inn litt geometri slik at den oppfører seg som ett objekt. Ingenting utenfor kan henge seg fast i den.
- En **komponent** er en gruppe som kan plasseres mange ganger. Hver kopi deler det samme innholdet: endrer du én, endres de alle. Bruk komponenter for alt som gjentas: vinduer, søyler, pulter, trær.

## Lag en gruppe eller en komponent

1. Velg geometrien. Et trippelklikk på en flate velger hele det sammenhengende objektet; et vindusdrag velger alt i boksen.
2. Trykk {{key:Shift+G}} for en gruppe, eller {{key:G}} for en komponent. Du kan også klikke {{ui:Gruppe}} eller {{ui:Komponent}} i verktøylinjens gruppe {{ui:Organiser}}, eller {{ui:Lag gruppe (Shift+G)}} eller {{ui:Lag komponent (G)}} i {{ui:Elementinfo}}.

   Statuslinjen sier "Gruppert som Group#1." eller "Laget komponent Component#1.", det nye objektet er valgt, og det vises i {{ui:Oversikt}}.

3. For å gi det et navn, skriv et navn i feltet {{ui:Navn}} i {{ui:Elementinfo}} og trykk {{key:Enter}} eller klikk et annet sted.

Valgt flate tar med seg kantene. Hvis ingenting er valgt, sier statuslinjen "Velg geometri først (dra et vindu, eller trippelklikk for å velge alt som henger sammen)."

Du kan også gruppere grupper: velg flere grupper og trykk {{key:Shift+G}}. {{ui:Oversikt}} viser nestingen.

:::note
Hurtigtastene samsvarer med SketchUps standardinnstillinger: {{key:G}} lager en komponent, {{key:Shift+G}} en gruppe.
:::

## Rediger inne i en gruppe eller komponent

1. Dobbeltklikk på den (i visningen eller i {{ui:Oversikt}}), eller velg den og klikk {{ui:Rediger}} i {{ui:Elementinfo}}.

   Resten av modellen tones ut, aksene flytter seg til gruppens egne akser, og {{ui:Oversikt}} viser "Redigerer: Modell › Group#1". Statuslinjen sier "Redigerer Group#1. Esc eller dobbeltklikk utenfor lukker den."

2. Tegn, trykk/trekk, flytt og slett som vanlig. Alt du gjør blir værende inne i gruppen.
3. Lukk den: trykk {{key:Esc}} (to ganger hvis noe er valgt), dobbeltklikk på et tomt område, eller klikk {{ui:Lukk gruppe}} i {{ui:Oversikt}}.

Mens en komponent er åpen, endres hver kopi av den mens du arbeider.

## Plasser flere kopier av en komponent

- Kopier den med {{ui:Flytt}} og {{key:Ctrl}} (se [Flytt og kopier](topic:move-copy)). Hver kopi er en ny plassering av samme komponent.
- Eller klikk {{ui:Plasser}} ved siden av den i {{ui:Komponenter}}-panelet, og klikk deretter der den skal stå. Origo, det nederste hjørnet av boksen rundt det du valgte da du laget den, havner der du klikker. Verktøyet går deretter tilbake til {{ui:Velg}}.

{{ui:Komponenter}} viser hvor mange kopier som er plassert ("4×"), og {{ui:Oversikt}} viser antallet etter navnet.

## Omorganiser i Oversikten

Dra en rad i {{ui:Oversikt}} for å endre hvor den hører hjemme. Ingenting flytter seg i visningen: en gruppe beholder sin plass i modellen.

- **Inn i en gruppe:** slipp den midt på radens gruppe (raden får en stiplet kontur). Den havner inni, sist.
- **I annen rekkefølge:** slipp den på øvre eller nedre kant av en rad (en strek vises der). Den havner rett før eller etter den raden, inne i samme gruppe som den raden, så dette legger den også inn i en gruppe på et valgt sted.
- **Ut til toppnivå:** slipp den på overskriften {{ui:Oversikt}}. Den havner sist.

Hvert slipp er ett steg: {{key:Mod+Z}} legger det tilbake. {{key:Esc}} under et drag gjør at ingenting slippes. En gruppe kan ikke plasseres inni seg selv eller inni en gruppe den holder. Drag er av mens {{ui:Søk etter navn}} har tekst i seg.

:::touch
Hold fingeren på en rad en liten stund, og dra den deretter. Et raskt sveip ruller listen i stedet.
:::

## Gjør én kopi forskjellig

Velg kopien og klikk {{ui:Gjør unik}} i {{ui:Elementinfo}} (vises når komponenten er plassert mer enn én gang). Den kopien får sin egen definisjon, med navn som originalen og et nytt nummer. Rediger den uten å berøre de andre.

## Gjør en gruppe om til en komponent

Velg gruppen og klikk {{ui:Lag komponent}} i {{ui:Elementinfo}}. Den får et nytt navn, for eksempel Component#2, selv om du hadde gitt gruppen et navn; skriv navnet på nytt i {{ui:Navn}}.

## Eksploder

Velg en gruppe eller komponent og klikk {{ui:Eksploder}} (i verktøylinjen eller i {{ui:Elementinfo}}). Innholdet blir løst geometri på samme sted, og henger seg fast i det det berører. Grupper inni den forblir grupper.

## Volumlegeme og volum

Når du velger en gruppe eller komponent, viser {{ui:Elementinfo}} **Volumlegeme: Ja** hvis flatene lukker seg uten hull (hver kant deles av nøyaktig to flater) og det ikke er grupper nestet inni. Da vises også **volumet**. En boks, en vegg med et vindu skåret gjennom, og en trukket sylinder er volumlegemer; en boks med toppen slettet er det ikke.

## Når den siste kopien forsvinner

Å slette den siste kopien av en komponent fjerner den også fra {{ui:Komponenter}}-panelet. {{key:Mod+Z}} henter den tilbake.

## Greit å vite

- Kopier av en **gruppe** laget med {{ui:Flytt}} deler innhold i denne versjonen, slik komponentkopier gjør: redigerer du én, endres de andre. For å gjøre en uavhengig, klikk {{ui:Lag komponent}}, deretter {{ui:Gjør unik}}. Se [Feilsøking](topic:troubleshooting#editing-one-group-changed-another).
- Komponenter kutter ikke åpninger i vegger og fester seg ikke til flater, og det finnes ikke noe bibliotek med ferdige komponenter. Du lager dine egne, eller importerer dem.
- Importerte filer kommer inn som en gruppe. Collada-filer beholder sine egne grupper og komponenter inni den.
