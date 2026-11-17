---
title: Menyer, taster og mus
summary: Velg en menystil som passer til modelleringsprogrammet du allerede kjenner, gi en kommando din egen tast, flytt kommandoer mellom menyer, og still inn hva hjulet og midtre og høyre museknapp gjør.
keywords: menystil, menyer, menylinje, verktøylinje, hurtigtaster, taster, tastestil, tastekart, tilpass, gi nytt tastevalg, mus, hjul, inverter, zoomretning, midtknapp, høyreknapp, kretse, panorer, eksporter, importer, bytte, kjent, trykk/trekk, modellerer
from: e56fce3d
---

Verktøyene i ModelCraft er de samme uansett hvordan de nås. En **menystil** bestemmer hvor de står på skjermen, hva de heter der, og hvilke taster som kjører dem. Velg en i {{ui:Settings}} ({{key:Mod+,}}) › {{ui:ModelCraft}} › {{ui:Menus, keys and mouse}}. Endringen virker med en gang, og denne nettleseren husker den.

## Stilene

| Stil | Resultat |
|---|---|
| {{ui:ModelCraft}} | ModelCraft sin egen verktøylinje (Fil, Tegn, Endre, Organiser, Rediger, Kamera) og enkelttegnstastene: {{key:L}} linje, {{key:R}} rektangel, {{key:P}} trykk/trekk, {{key:M}} flytt, {{key:Q}} roter, {{key:S}} skaler, {{key:E}} viskelær, {{key:O}} kretse. Startstilen. |
| {{ui:Push-pull}} | En menylinje (Fil, Rediger, Vis, Kamera, Tegn, Verktøy, Vindu) over en rad med hovedverktøyene, med de samme enkelttegnstastene. |
| {{ui:Modeler}} | En toppmenylinje (Fil, Rediger, Vis, Velg, Legg til, Objekt, Nett) og tastene til nettmodellerere: {{key:W}} velg, {{key:G}} flytt, {{key:R}} roter og {{key:S}} skaler utvalget samtidig ({{key:X}}, {{key:Y}} eller {{key:Z}} låser en akse mens det flyttes), {{key:E}} trykk/trekk, {{key:B}} rektangel, {{key:X}} slett, {{key:A}} velg alle, {{key:Alt+A}} ingen, {{key:Shift+D}} dupliser, {{key:Mod+G}} gruppe, {{key:H}} skjul. Midtknappen kretser; {{key:Shift}} og midtknappen panorerer, {{key:Mod}} og midtknappen zoomer; høyreknappen avbryter det et verktøy holder på med. |
| {{ui:Beginner}} | Et bånd der fanen {{ui:Make}} er noen få store knapper: former å slippe ned, hull, flytt, roter og størrelse, juster, {{ui:Group}} (hull kuttet i formene) og sjekken for 3D-printing. Alle andre verktøy ligger på fanen {{ui:More tools}}. Høyreknappen kretser, midtknappen panorerer. Se [Nybegynner-stilen](topic:beginner). |

Tastestilen du kanskje kjenner fra {{ui:Keys}} nederst til høyre i visningen og fra {{ui:Edit}} › {{ui:More}}, er det samme valget: velges modellererterastene der, velges {{ui:Modeler}}-stilen, og velges trykk/trekk-tastene, forlates den for {{ui:ModelCraft}}-stilen. Har modellererterastene vært valgt i en eldre versjon, åpnes ModelCraft én gang i {{ui:Modeler}}-stilen av seg selv.

:::tip
En tast som hører til trykk/trekk-tastene, men som stilen gir en annen kommando, gjør ingenting, og statuslinjen sier hvor kommandoen ble av («I Modellerer er Trykk/trekk E»). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} og piltastene beholder alltid sin betydning. Tall går alltid til verdifeltet, og mens et verktøy flytter noe, vinner dets egne taster.
:::

## Gjør den til din egen

1. Velg stilen som ligner mest på det du vil ha, og klikk deretter {{ui:Customize…}}.
2. Under {{ui:Keys and menus}}: finn en kommando (søkeboksen hjelper). Klikk {{ui:Add a key}}, og trykk tasten. Klikk en tast for å fjerne den.
3. Med en menylinje flytter {{ui:Where it sits}} kommandoen til en annen meny, eller til {{ui:Keys only}}.
4. Under {{ui:Mouse}} settes hjulet og hva knappene gjør i 3D-visningen.
5. Gi den et navn, og klikk {{ui:Save}}.

Å lagre en innebygd stil lager en egen kopi («Min Modellerer»); den innebygde endres aldri. Kopien leser taster slik stilen den startet fra gjør: en kopi laget fra {{ui:Modeler}} beholder flytt-, roter- og skalertastene som virker samtidig.

## Mus

- **Hjul i musen**: {{ui:Scroll up zooms in}} (standard) eller {{ui:Scroll up zooms out}}, og hvor raskt. En klype på styreflaten zoomer alltid i den retningen fingrene beveger seg.
- **Dra i 3D-visningen**: {{ui:Each view's own}} beholder ModelCraft sine knapper (midtknappen kretser, høyreknappen eller {{key:Shift}} og midtknappen panorerer). Eller sett midt- og høyreknappen til å kretse, panorere, zoome eller ingenting; {{key:Shift}} med knappen bytter mellom kretsing og panorering. Venstreknappen tilhører alltid verktøyet som er i bruk.
- **Styreflater**: {{ui:Settings}} › {{ui:ModelCraft}} › {{ui:Scrolling}} avgjør fortsatt om to fingre kretser (styreflate) eller zoomer (mus). Se [Kretsing, panorering og zoom](topic:orbit-pan-zoom).

## Ta den med

{{ui:Export}} lagrer stilen som er i bruk, som en liten `.ccinput.json`-fil. {{ui:Import…}} legger til en, fra en annen datamaskin eller fra en kollega. En importert fil kan bare peke på ModelCraft sine egne kommandoer: alt annet i den utelates og telles i statuslinjen. {{ui:Delete this style}} fjerner en egen stil.

:::note
Disse innstillingene blir i denne nettleseren. {{ui:Use this style in every app}} under stilkortene gjør at alle apper åpnes i den tilsvarende stilen: {{ui:Push-pull}} hører sammen med de andre appenes menylinjestiler. {{ui:Modeler}} har ingen motpart i de andre appene, så den forblir et ModelCraft-valg.
:::

Relatert: [Taster og musehandlinger](topic:keyboard) · [ModelCraft-innstillinger](topic:settings) · [Fra andre modellerere](topic:coming-from)
