---
title: Skulptera ett nät
summary: Forma ett nät som lera med penslar — rita, lera, jämna ut, ta tag, blås upp, veck, nyp, platta till — skydda delar med en mask, spegla över X och lägg till detalj där du skulpterar.
keywords: skulptera, skulptering, pensel, penslar, lera, rita, jämna ut, ta tag, blås upp, veck, nyp, platta till, mask, symmetri, spegling, detalj, dynamisk topologi, penna, tryck, ritplatta, stylus
from: 5477801a
---

Skulptera-arbetsytan formar ett nät med penslar, som med lera: dra över ytan så höjs den, sänks, jämnas ut eller följer pekaren under en rund pensel, starkast i mitten och tonande ut helt vid kanten.

## Start

Markera ett nät och välj {{ui:Skulptera}} i listan Arbetsyta. En grupp eller komponent blir först ett nät, som i Nät-arbetsytan. Penslarna arbetar på nätets hörn, så ett nät med fler hörn tar finare former: dela det först (Nät-arbetsytans {{ui:Dela}}, eller en Subdivision surface-modifierare som du {{ui:Verkställer}}), eller slå på {{ui:Detalj}}.

## Penslar

| Pensel | Tangent | Vad den gör |
| --- | --- | --- |
| {{ui:Rita}} | {{key:D}} | Höjer ytan under penseln |
| {{ui:Lera}} | {{key:C}} | Bygger upp platta lager och fyller gropar först |
| {{ui:Jämna ut}} | {{key:S}} | Jämnar ut bucklor; håll ned {{key:Shift}} för att jämna ut med vilken pensel som helst |
| {{ui:Ta tag}} | {{key:G}} | Drar ytan med pekaren |
| {{ui:Blås upp}} | {{key:I}} | Blåser ut ytan längs dess egen riktning |
| {{ui:Veck}} | {{key:Shift+C}} | Skär en skarp fåra |
| {{ui:Nyp}} | {{key:P}} | Drar ytan mot penselns mitt |
| {{ui:Platta till}} | {{key:T}} | Trycker ytan mot dess medelplan |
| {{ui:Mask}} | {{key:M}} | Målar en mask som skyddar ytan från de andra penslarna |

Håll ned {{key:Ctrl}} medan du stryker för att arbeta åt andra hållet (sänka i stället för att höja, enås i stället för en fåra, ta bort masken), eller slå på {{ui:Ta bort}}.

## Storlek och styrka

Penselns storlek anges i bildpunkter på skärmen, så den känns likadan hur långt du än zoomar: {{key:[}} och {{key:]}} gör den mindre och större, {{key:Shift+[}} och {{key:Shift+]}} ändrar dess styrka. Panelen visar båda.

Med en penna på en ritplatta gör hårdare tryck penseln större och starkare; panelen stänger av endera.

## Spegling, mask och detalj

- {{ui:Spegla X}} ({{key:X}}) skulpterar båda sidorna över rött på en gång, för ytor och figurer.
- Masken visas mörkare medan du skulpterar. {{ui:Rensa mask}} ({{key:Alt+M}}) tar bort den, och {{ui:Invertera mask}} ({{key:Ctrl+I}}) maskerar det som var fritt och frigör det som var maskerat. Masken sparas med nätet.
- {{ui:Detalj}} lägger till trianglar där du skulpterar: kanter som är längre än storleken som anges i panelen (bildpunkter på skärmen) delas under penseln. Det kräver ett nät av trianglar och frågar om att göra ett först.

Varje streck är ett steg i Ångra.

:::note
Detalj lägger bara till trianglar; den tar inte bort de som blivit små. En Remesh (Nät-arbetsytan) jämnar ut hela nätet igen.
:::

Se även [Redigera ett nät](topic:mesh-edit), [Nät](topic:meshes) och [Modifierare på ett nät](topic:modifiers).
