---
title: Skulpter et nett
summary: Form et nett som leire med penseler – tegn, leire, jevn, grip, blås opp, brett, klyp, flat ut – beskytt deler med en maske, speil over X, og legg til detaljer der du skulpterer.
keywords: skulptering, skulpter, pensel, penseler, leire, tegn, jevn, grip, blås opp, brett, klyp, flat ut, maske, symmetri, speil, detalj, dynamisk topologi, penn, trykk, nettbrett, stylus
from: 5477801a
---

Arbeidsområdet Skulpter former et nett med penseler, som med leire: dra over overflaten, så stiger den, synker, jevnes ut eller følger pekeren under en rund pensel. Den er sterkest i midten og toner ut til ingenting ved kanten.

## Start

Velg et nett og klikk {{ui:Skulpter}} i listen over arbeidsområder. En gruppe eller komponent blir først til et nett, som i Nett-arbeidsområdet. Penslene virker på nettets hjørnepunkter, så et nett med flere av dem gir finere former. Del det opp først (Nett-arbeidsområdets {{ui:Del opp}}, eller en Subdivision surface-modifikator du bruker), eller slå på {{ui:Detalj}}.

## Penseler

| Pensel | Tast | Hva den gjør |
| --- | --- | --- |
| {{ui:Tegn}} | {{key:D}} | Hever overflaten under penselen |
| {{ui:Leire}} | {{key:C}} | Bygger opp flate lag, og fyller forsenkninger først |
| {{ui:Jevn}} | {{key:S}} | Jevner ut knoller; hold {{key:Shift}} nede for å jevne ut med alle penseler |
| {{ui:Grip}} | {{key:G}} | Trekker overflaten med pekeren |
| {{ui:Blås opp}} | {{key:I}} | Svulmer overflaten ut langs sin egen retning |
| {{ui:Brett}} | {{key:Shift+C}} | Skjærer en skarp rille |
| {{ui:Klyp}} | {{key:P}} | Trekker overflaten mot penselens midte |
| {{ui:Flat ut}} | {{key:T}} | Presser overflaten mot sitt gjennomsnittlige plan |
| {{ui:Maske}} | {{key:M}} | Maler en maske som beskytter overflaten mot de andre penslene |

Hold {{key:Ctrl}} nede mens du stryker for å jobbe motsatt vei (senke i stedet for å heve, en rygg i stedet for en rille, fjerne masken), eller slå på {{ui:Ta bort}}.

## Størrelse og styrke

Penselens størrelse er i piksler på skjermen, så den føles lik uansett hvor du zoomer: {{key:[}} og {{key:]}} gjør den mindre og større, og {{key:Shift+[}} og {{key:Shift+]}} endrer styrken. Panelet viser begge.

Med penn på et nettbrett gjør et hardere trykk penselen større og sterkere; panelet slår av begge deler.

## Speil, maske og detalj

- {{ui:Speil X}} ({{key:X}}) skulpterer begge sider over rød samtidig, for ansikter og figurer.
- Masken vises mørkere mens du skulpterer. {{ui:Tøm maske}} ({{key:Alt+M}}) fjerner den, og {{ui:Inverter maske}} ({{key:Ctrl+I}}) maskerer det som var fritt, og frigjør det som var maskert. Masken lagres sammen med nettet.
- {{ui:Detalj}} legger til trekanter der du skulpterer: kanter lengre enn størrelsen som er satt i panelet (piksler på skjermen), deles under penselen. Det krever et nett av trekanter, og spør om å lage ett først.

Hvert strøk er ett trinn i angre.

:::note
Detalj legger bare til trekanter; den fjerner ikke dem som har blitt svært små. En Remesh (Nett-arbeidsområdet) jevner ut hele nettet igjen.
:::

Se også [Rediger et nett](topic:mesh-edit), [Nett](topic:meshes) og [Modifikatorer på et nett](topic:modifiers).
