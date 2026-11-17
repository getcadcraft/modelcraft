---
title: ViewCube
summary: Klik på en flade, kant eller et hjørne af kuben i hjørnet af visningen for at kigge derfra, træk i den for at kredse, drej kompasringen, skridt rundt om en visning lige forfra, og gå hjem.
keywords: viewcube, view cube, kube, kompas, nord, hjemvisning, standardvisninger, top, front, højre, iso, hjørne, kant, kredse, dreje visning, akseikon, hjørneindikator, navigation
from: e1ec1347
---

ViewCube sidder øverst til højre i 3D-visningen. Den drejer med visningen, så den altid viser, hvilken vej du kigger: {{ui:Top}} er op, {{ui:Front}} vender mod syd (du kigger mod nord, langs den grønne akse, når du kigger på den), og {{ui:Højre}} vender mod øst (rød akse). Den er gennemsigtig, indtil du peger på den.

## Kig fra en side, en kant eller et hjørne

1. Peg på kuben. Den del, der er under markøren, lyser op: midten af en flade, en kant (den lyser på begge flader, der deler den) eller et hjørne (på alle tre flader).
2. Klik på den. Visningen drejer, så den kigger derfra og beholder den samme midte og zoom.

Der er 26 steder at klikke: 6 flader ({{ui:Top}}, {{ui:Bund}}, {{ui:Front}}, {{ui:Bagside}}, {{ui:Venstre}}, {{ui:Højre}}), 12 kanter og 8 hjørner. Et hjørne giver den klassiske tre-kvart-visning. En kant ser ud halvvejs mellem to flader.

At klikke på {{ui:Front}} er det samme som {{ui:Visninger}}, {{ui:Front}} i værktøjslinjen, bare uden at zoome for at tilpasse. {{ui:Visninger}} zoomer stadig til hele modellen.

## Kredse ved at trække i kuben

Træk i kuben for at dreje visningen, ligesom når du kredser i selve visningen. Et træk bliver aldrig opfattet som et klik, så du kan tage fat i kuben hvor som helst.

## Kompasringen

Ringen under kuben viser N, Ø, S og V.

- **Træk i ringen** for at dreje modellen om den lodrette akse, som om den stod på en drejeskive. Ringen følger markøren.
- **Klik på et bogstav** for at kigge fra den side og beholde, hvor stejlt du kigger ned. I en visning lige oppefra går det bogstav, du klikker på, til bunden af skærmen.

## Visninger lige forfra: pile

Når du kigger lige på en flade, vises små pile rundt om kuben:

- De fire **trekanter** fører fladen på den side frem til forsiden. Trekanten over kuben viser fladen, der var øverst, og så videre.
- De to **buede pile** øverst til højre drejer billedet en kvart omgang med uret eller mod uret, uden at ændre hvilken flade du kigger på. Brug dem til at dreje en plan, så en lang væg løber hen over skærmen.

## Hjem

Husknappen øverst til venstre på kuben går tilbage til tre-kvart-visningen {{ui:Iso}} og tilpasser hele modellen. {{key:Home}} gør det samme, mens kuben har tastaturfokus.

## Med tastaturet

Tryk {{key:Tab}} for at komme til kuben, og derefter:

| Tast | Gør |
|---|---|
| {{key:left}} / {{key:right}} | vælg en side, kant eller et hjørne rundt om kuben, i trin på en ottendedel omgang (skærmlæsere siger, hvilken) |
| {{key:up}} / {{key:down}} | vælg et højere eller lavere, op til {{ui:Top}} eller ned til {{ui:Bund}} |
| {{key:Enter}} eller {{key:Space}} | kig fra det valgte |
| {{key:Shift+left}} / {{key:Shift+right}} | drej visningen en kvart omgang om den lodrette akse |
| {{key:Home}} | hjemvisningen |
| {{key:Esc}} | forlad kuben |

Taster, der trykkes på kuben, bliver på kuben. De starter ikke ModelCraft-værktøjer.

## Aksikon eller ingenting i stedet

Åbn {{ui:Indstillinger}} ({{key:Mod+,}}), fanen {{ui:ModelCraft}}, og sæt **Hjørneindikator** til {{ui:ViewCube}} (start), {{ui:Akseikon}} (en lille X-, Y-, Z-markør nederst til venstre: X rød, Y grøn, Z blå) eller {{ui:Ingen}}. Denne browser husker valget. Se [ModelCraft-indstillinger](topic:settings#corner-indicator).

:::note
ModelCraft har ingen rulning. Væk fra visninger lige ned og lige op er op på skærmen altid op i modellen. Kuben og de buede pile kan dreje en planvisning. De kan ikke vippe en sidevisning over på kanten.
:::
