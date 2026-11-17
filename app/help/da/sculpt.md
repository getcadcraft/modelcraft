---
title: Skulptér et net
summary: Form et net som ler med pensler — tegn, ler, udglat, tag fat, pust op, fold, knib, planér — beskyt dele med en maske, spejl på tværs af X, og tilføj detalje, hvor du skulpterer.
keywords: skulptér, skulptur, pensel, penselværktøjer, ler, tegn, udglat, tag fat, pust op, fold, maske, symmetri, spejl, detalje, dynamisk topologi, pen, tryk, tablet, stylus
from: 5477801a
---

Arbejdsområdet Skulptér former et net med pensler, som med ler: træk hen over overfladen, og den hæves, synker, udglattes eller følger markøren under en rund pensel, stærkest i midten og tonende ud til ingenting ved kanten.

## Start

Vælg et net, og vælg {{ui:Skulptér}} i listen Arbejdsområde. En gruppe eller komponent bliver først til et net, som i arbejdsområdet Net. Penslerne virker på nettets hjørnepunkter, så et net med flere af dem tager finere former: del det først (arbejdsområdets {{ui:Del}}, eller en Subdivision surface-modifikator, du anvender), eller slå {{ui:Detalje}} til.

## Pensler

| Pensel | Tast | Hvad den gør |
| --- | --- | --- |
| {{ui:Tegn}} | {{key:D}} | Hæver overfladen under penslen |
| {{ui:Ler}} | {{key:C}} | Bygger flade lag op og fylder først lavninger |
| {{ui:Udglat}} | {{key:S}} | Jævner ujævnheder; hold {{key:Shift}} nede for at udglatte med enhver pensel |
| {{ui:Tag fat}} | {{key:G}} | Trækker overfladen med sig, når markøren flyttes |
| {{ui:Pust op}} | {{key:I}} | Svulmer overfladen ud langs sin egen retning |
| {{ui:Fold}} | {{key:Shift+C}} | Skærer en skarp rille |
| {{ui:Knib}} | {{key:P}} | Trækker overfladen mod penslens midte |
| {{ui:Planér}} | {{key:T}} | Presser overfladen mod sit gennemsnitlige plan |
| {{ui:Maske}} | {{key:M}} | Maler en maske, der beskytter overfladen mod de andre pensler |

Hold {{key:Ctrl}} nede, mens du strøger, for at arbejde den anden vej (sænk i stedet for hæv, en kam i stedet for en rille, fjern masken), eller slå {{ui:Tag væk}} til.

## Størrelse og styrke

Penslens størrelse er i pixels på skærmen, så den føles ens, uanset hvor langt du zoomer: {{key:[}} og {{key:]}} gør den mindre og større, {{key:Shift+[}} og {{key:Shift+]}} ændrer dens styrke. Panelet viser begge dele.

Med en pen på en tablet gør et hårdere tryk penslen større og stærkere; panelet kan slå begge dele fra.

## Spejl, maske og detalje

- {{ui:Spejl X}} ({{key:X}}) skulpterer begge sider på tværs af rød på én gang, til flader og figurer.
- Masken vises mørkere, mens du skulpterer. {{ui:Ryd maske}} ({{key:Alt+M}}) fjerner den, {{ui:Vend maske}} ({{key:Ctrl+I}}) maskerer det, der var frit, og frigør det, der var maskeret. Masken gemmes sammen med nettet.
- {{ui:Detalje}} tilføjer trekanter, hvor du skulpterer: kanter, der er længere end størrelsen, der er sat i panelet (pixels på skærmen), deles under penslen. Det kræver et net af trekanter og spørger, om et skal laves først.

Hvert strøg er ét fortrydelsestrin.

:::note
Detalje tilføjer kun trekanter; den fjerner ikke dem, der er blevet små. En Remesh (arbejdsområdet Net) jævner hele nettet ud igen.
:::

Se også [Rediger et net](topic:mesh-edit), [Net](topic:meshes) og [Modifikatorer på et net](topic:modifiers).
