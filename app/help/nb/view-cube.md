---
title: ViewCube
summary: Klikk en flate, kant eller hjørne på kuben i hjørnet av visningen for å se derfra, dra den for å kretse, vri kompassringen, gå rundt en rettvendt visning, og gå hjem.
keywords: view cube, viewcube, kube, kompass, nord, hjemvisning, standardvisninger, topp, front, høyre, iso, hjørne, kant, kretse, roter visning, aksesymbol, hjørneindikator, navigasjon
from: e1ec1347
---

ViewCube sitter øverst til høyre i 3D-visningen. Den dreier seg med visningen, så den viser alltid hvilken vei du ser: {{ui:Topp}} peker opp, {{ui:Front}} vender mot sør (du ser mot nord, langs den grønne aksen, når du ser på den), {{ui:Høyre}} vender mot øst (rød akse). Den er gjennomsiktig til du peker på den.

## Se fra en side, en kant eller et hjørne

1. Pek på kuben. Delen under pekeren lyser opp: midten av en flate, en kant (den lyser på begge flatene som deler den) eller et hjørne (på alle tre flatene).
2. Klikk på den. Visningen dreier seg for å se derfra, og beholder samme midte og zoom.

Det finnes 26 steder å klikke: 6 flater ({{ui:Topp}}, {{ui:Bunn}}, {{ui:Front}}, {{ui:Bak}}, {{ui:Venstre}}, {{ui:Høyre}}), 12 kanter og 8 hjørner. Et hjørne gir den klassiske trekvartvisningen; en kant ser ut midt mellom to flater.

Å klikke {{ui:Front}} er det samme som {{ui:Visninger}}, {{ui:Front}} på verktøylinjen, uten å zoome for å tilpasse. {{ui:Visninger}} zoomer fortsatt til hele modellen.

## Kretse ved å dra kuben

Dra kuben for å dreie visningen, på samme måte som å kretse rundt i selve visningen. Et drag tas aldri som et klikk, så du kan ta tak i kuben hvor som helst.

## Kompassringen

Ringen under kuben har N, Ø, S og V.

- **Dra ringen** for å dreie modellen om den vertikale aksen, som om den sto på en dreieskive. Ringen følger pekeren.
- **Klikk på en bokstav** for å se fra den siden, og beholder hvor bratt du ser ned. I en visning rett ovenfra, havner bokstaven du klikker på nederst på skjermen.

## Rettvendte visninger: piler

Når du ser rett mot en flate, vises små piler rundt kuben:

- De fire **trekantene** bringer flaten på den siden frem i forgrunnen: trekanten over kuben viser flaten som var øverst, og så videre.
- De to **buede pilene** øverst til høyre dreier bildet en kvart omdreining med klokken eller mot klokken, uten å endre hvilken flate du ser på. Bruk dem til å dreie en plan slik at en lang vegg går tvers over skjermen.

## Hjem

Hus-knappen øverst til venstre på kuben går tilbake til trekvartvisningen {{ui:Iso}} og tilpasser hele modellen. {{key:Home}} gjør det samme mens kuben har tastaturfokus.

## Med tastaturet

Trykk {{key:Tab}} for å komme til kuben, og deretter:

| Tast | Gjør |
|---|---|
| {{key:left}} / {{key:right}} | velger en side, kant eller hjørne rundt kuben, i åttendedels omdreininger (skjermlesere sier hvilken) |
| {{key:up}} / {{key:down}} | velger en høyere eller lavere, opp til {{ui:Topp}} eller ned til {{ui:Bunn}} |
| {{key:Enter}} eller {{key:Space}} | ser derfra den som er valgt |
| {{key:Shift+left}} / {{key:Shift+right}} | dreier visningen en kvart omdreining om den vertikale aksen |
| {{key:Home}} | hjemvisningen |
| {{key:Esc}} | forlater kuben |

Taster som trykkes på kuben, blir på kuben: de starter ikke ModelCraft-verktøy.

## Aksesymbol eller ingenting i stedet

Åpne {{ui:Innstillinger}} ({{key:Mod+,}}), fanen {{ui:ModelCraft}}, og sett **Hjørneindikator** til {{ui:ViewCube}} (startverdien), {{ui:Aksesymbol}} (en liten X-, Y-, Z-markør nederst til venstre: X rød, Y grønn, Z blå) eller {{ui:Ingen}}. Denne nettleseren husker valget. Se [ModelCraft-innstillinger](topic:settings#corner-indicator).

:::note
ModelCraft har ingen rulling: bortsett fra visninger rett ned og rett opp, er opp på skjermen alltid opp i modellen. Kuben og de buede pilene kan dreie en planvisning; de kan ikke vippe en sidevisning over på kanten.
:::
