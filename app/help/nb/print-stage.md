---
title: Legg ting på utskriftsbyggplaten og send dem til en skriver
summary: Legg til elementer fra biblioteket eller din egen modell på byggplaten til skriveren din, ordne dem, se gjennom de skivede lagene, og send utskriften over USB eller nettverket, eller lagre G-code, uten å eksportere en STL først.
keywords: utskriftsfase, 3D-utskrift, skriver, byggplate, send til 3D-skriver, slicer, gcode, g-code, usb, klipper, moonraker, octoprint, prusalink, bibliotek, ordne, tilpass alle, forhåndsvisning av lag, fyll, støtter, filament, pla, petg, tillegg, 3D-utskrift-tillegg
from: abcf5d7e
---

{{ui:Utskriftsfase}} legger ut ting på byggplaten til skriveren din, skiver dem og sender dem til skriveren. Du eksporterer ikke en fil først. Den hører til 3D-utskrift-tillegget, som er på som standard.

:::note
Ingenting er skrevet ut på en ekte skriver med dette ennå. Slicer-programmet er nytt: følg med på de første lagene av den første utskriften, og bruk forhåndsvisningen av lag før du sender.
:::

## Hva du skal gjøre

Legg en modell på byggplaten, kontroller at den får plass, se på de skivede lagene, og send den til en skriver eller lagre G-code.

## Steg

1. Klikk {{ui:Utskriftsfase}} i verktøylinjen. Et kort åpnes over visningen, og en stiplet kontur viser byggplaten din.
2. Under **Legg til fra biblioteket** skriver du et navn i søkefeltet, trykker {{ui:Søk}} og trykker {{ui:Legg til}} på et resultat. Elementet havner på byggplaten i full størrelse, eller skalert ned til å passe. Alt du allerede har tegnet eller importert og kan se i visningen er også på byggplaten.
3. Under **På byggplaten** kontrollerer du størrelsen på hvert element. Et element merket **Utenfor byggplaten** må flyttes. Flytt, roter og skaler ting i visningen med de vanlige verktøyene.
4. Trykk {{ui:Ordne på byggplaten}} for å spre elementene utover, eller {{ui:Tilpass alle på byggplaten}} for å skalere dem ned til de får plass.
5. Under **Skriveren din** velger du **Byggplate**-størrelsen eller en av skriverprofilene.
6. Under **Utskriftsinnstillinger** velger du **Materiale**, **Kvalitet** og **Fyll %**, og huker av for **Legg til støtter under overheng** hvis formen trenger dem.
7. Trykk {{ui:Forhåndsvis lag}} og flytt **Layer**-skyveknappen for å se gjennom de skivede lagene. Hvis du endrer scenen eller innstillingene etterpå, trykker du {{ui:Forhåndsvis lag}} på nytt.
8. Under **Tilkobling** velger du {{ui:USB-kabel}}, {{ui:Klipper (Moonraker)}}, {{ui:OctoPrint}} eller {{ui:PrusaLink}}. For USB trykker du {{ui:Koble til}}. For en nettverksskriver skriver du inn **Adresse** (og **API-nøkkel** hvis den spør), og trykker deretter {{ui:Test tilkoblingen}}.
9. Trykk {{ui:Send til 3D-skriver}}. Kortet spør om byggplaten er tom og riktig materiale er lastet, og viser tid, materiale og temperaturer. Bekreft for å sende.

Du får en melding om at skriveren starter. {{ui:Stopp utskriften}} slår av varmeelementene, viften og motorene. Hvis du bare vil ha en fil, trykker du {{ui:Lagre G-code i stedet}}.

## Merknader

- USB krever Chrome eller Edge på en datamaskin, og siden må være åpen til utskriften er ferdig. Hvis den lukkes, stopper strømmen.
- En nettverksskriver må tillate denne siden (i Moonraker legger du den til i `cors_domains`; i OctoPrint slår du på CORS og kopierer en API-nøkkel). Nettleseren din kan spørre om tilgang til enheter på nettverket ditt.
- Ingenting kobles til eller sendes uten at du klikker.
- Listen over slicere ligger under **Slicer**. {{ui:CadCraft basic (inkludert, raskest)}} er innebygd. Kiri:Moto, PrusaSlicer, OrcaSlicer og Bambu Lab P2S er egne tillegg som du slår på fra kortet eller under {{ui:Innstillinger}} › {{ui:Tillegg}}. PrusaSlicer og OrcaSlicer bruker din egen kopi og fungerer fra CadCraft Studio på en datamaskin.
- Deler som ikke er lukkede volumlegemer blir utelatt, og kortet forteller hvor stor del av formen det er.
- For harpiksskrivere, se [Slik skjærer du for en harpiksskriver](topic:resin-printing). For å kontrollere eller reparere en modell først, se [Støtter, veggtykkelse, utholing og reparasjon](topic:print-tools).
