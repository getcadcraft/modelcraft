---
title: Komponenter som strekkes
summary: Lag én kopi av en komponent som er bredere, dypere eller høyere, mens delene beholder størrelsen sin: et lengre bord med de samme bena, en høyere bokhylle med hyllene spredt utover, et rekkverk der stolpene gjentas.
keywords: dynamisk komponent, strekk, endre størrelse på komponent, parametrisk, navngitte størrelser, gjenta, matrise, bein, hyller, rekkverk, regler, variabler
from: b4c40f43
---

Skalering av en komponent gjør alt i den større, også bena og skinnene. **Strekk denne kopien** endrer bredden, dybden eller høyden til en komponent, mens hver del følger en regel: en bordplate vokser, og bena beholder tykkelsen og står fortsatt i endene.

Det fungerer på komponenter laget av deler, altså grupper eller komponenter inne i komponenten, slik alle ting i [startbiblioteket](topic:starter) er.

## Strekk en kopi

1. Velg komponenten.
2. I {{ui:Elementinfo}} klikker du {{ui:Strekk denne kopien…}}.
3. Skriv inn ny {{ui:Bredde (rød)}}, {{ui:Dybde (grønn)}} og {{ui:Høyde (blå)}}, og klikk {{ui:Strekk}}.

Bare den kopien endres: den blir en egen komponent, som husker originalen den kom fra. Strekk den igjen når som helst, så beregnes den på nytt fra originalen, og ingenting glir. Andre kopier av originalen forblir som de var.

## Reglene

Åpne komponenten (dobbeltklikk på den) og velg en av delene. {{ui:Elementinfo}} viser {{ui:Når komponenten strekkes}}, med en regel langs rød, grønn og blå:

| Regel | Hva delen gjør | Eksempel |
|---|---|---|
| {{ui:Strekk}} | Vokser med komponenten; avstanden til begge sider beholdes | En bordplate |
| {{ui:Bli ved starten}} / {{ui:Bli ved enden}} | Beholder størrelsen og avstanden til den siden | Bein |
| {{ui:Flytt i forhold}} | Beholder størrelsen; midten flyttes i forhold | Hyller, et dørhåndtak |
| {{ui:Skaler i forhold}} | Plassering og størrelse skaleres i forhold | Trinnene i en trapp |
| {{ui:Gjenta}} | Kopier av den, med jevne mellomrom ({{ui:Hver}}), fra der den starter til den andre siden | Stolpene i et rekkverk |

{{ui:Automatisk}} (startverdien) finner ut hvilken regel som passer og viser den: {{ui:Strekk}} når delen spenner over komponenten, {{ui:Flytt i forhold}} når den ligger omtrent midt i, ellers blir den på siden den er nærmest.

## Ting å vite

- Delenes egne former deles, så en strukket kopi er lett. Redigeres en del, endres den i hver kopi.
- En strukket kopi følger ikke senere endringer i originalens regler eller oppsett: strekk den på nytt for å ta dem med.
- Flater tegnet løst i komponenten (ikke i en del) beholder størrelsen sin; gjør dem til en del for at de skal følge med.
- Regler, og hva hver kopi ble strukket fra, lagres i ModelCraft-filen.
