---
title: Gereedskapslys
summary: Elke ModelCraft-gereedskap met sy sleutel, wat elke klik doen, en wat jy in die waardekassie kan tik terwyl dit werk.
keywords: gereedskap, werkbalk, opdragte, lys, lyn, reghoek, sirkel, veelhoek, ofset, boog, kurwe, spline, volg my, sweep, 2-punt-boog, boog vanaf middelpunt, kies, stoot trek, skuif, draai, skaal, uitveër, maatband, maat, wentel, pan, zoem, plaas komponent
from: e08a274f
---

Die statusbalk se wenk sê altyd wat die huidige gereedskap volgende wil hê. {{key:Esc}} kanselleer wat 'n gereedskap middeaan is.

## Teken-gereedskap

| Gereedskap | Sleutel | Klikke | Tik in die waardekassie |
|---|---|---|---|
| {{ui:Line}} | {{key:L}} | Begin, dan elke volgende punt. Stop wanneer 'n vlak sluit, of op {{key:Esc}} | 'n Lengte na die wyser; `[x,y,z]` 'n punt; `<dx,dy,dz>` 'n ofset ({{ui:Length}}) |
| {{ui:Rectangle}} | {{key:R}} | Eerste hoek (grond of 'n vlak), teenoorstaande hoek | Breedte en diepte: `4m,3m` ({{ui:Dimensions}}) |
| {{ui:Circle}} | {{key:C}} | Middelpunt (grond of 'n vlak), 'n punt op die rand | Voor die eerste klik: sye, `24s` of `24` ({{ui:Sides}}). Daarna: die radius ({{ui:Radius}}) |
| {{ui:Polygon}} | {{key:N}} | Middelpunt, 'n hoek | Dieselfde as Sirkel; begin met 6 sye |
| {{ui:Arc}} | {{key:A}} | Begin, eind, dan die boog | Die koord se lengte na die begin ({{ui:Length}}); die boog na die eind ({{ui:Bulge}}); `12s` vir segmente |
| {{ui:Protractor}} | — | Middelpunt, 0°-punt, dan die hoek | Die hoek in grade ({{ui:Angle}}) |
| {{ui:Follow me}} | — | Kies 'n pad, dan klik die vlak (of klik die vlak, dan 'n rand van die pad) | — |
| {{ui:Paint}} | {{key:B}} | 'n Vlak, groep of komponent | — ({{key:Ctrl}} verbonde, {{key:Shift}} alles van daardie kleur, {{key:Alt}} neem 'n kleur op) |
| {{ui:Offset}} | {{key:F}} | 'n Vlak (of kies eers 'n vlak of rande), dan die kant en afstand | Die afstand ({{ui:Distance}}); in die vlak in is binnewaarts |
| {{ui:Curve}} | — | Punte waardeur die kurwe loop; {{key:Enter}} of 'n dubbelklik voltooi | 'n Lengte langs die wyser, `[x,y,z]` of `<dx,dy,dz>` vir die volgende punt |
| {{ui:Arc center}} | — | Middelpunt, begin, dan die eind | Die radius na die middelpunt; die hoek in grade na die begin; `12s` vir segmente |

## Wysig-gereedskap

| Gereedskap | Sleutel | Klikke | Tik in die waardekassie |
|---|---|---|---|
| {{ui:Select}} | {{key:Space}} | Klik, dubbelklik, drievoudig klik, sleep 'n boks. Sien [Kies dinge](topic:select) | Met een afmeting of rand gekies: 'n nuwe lengte, wat die model herskaal |
| {{ui:Push/pull}} | {{key:P}} | Die vlak, dan die afstand. Dubbelklik op 'n vlak om die laaste afstand te herhaal | 'n Afstand; negatief gaan die ander kant toe ({{ui:Distance}}) |
| {{ui:Move}} | {{key:M}} | Van 'n punt, na 'n punt. Hou {{key:Ctrl}} of {{key:Alt}} om te kopieer | 'n Afstand na die wyser, `<dx,dy,dz>` of `[x,y,z]` ({{ui:Distance}}). Na 'n kopie: `3x` of `/3` |
| {{ui:Rotate}} | {{key:Q}} | Middelpunt (op 'n vlak om in sy vlak te draai), beginrigting, eindrigting | Die hoek in grade ({{ui:Angle}}) |
| {{ui:Scale}} | {{key:S}} | Die punt wat bly, 'n verwysingspunt, die nuwe grootte | 'n Faktor: `2`, `0.5` ({{ui:Scale}}) |
| {{ui:Eraser}} | {{key:E}} | Klik of sleep oor rande, groepe, riglyne en afmetings | niks |
| {{ui:Tape}} | {{key:T}} | Vanaf 'n rand: 'n parallelle riglyn. Vanaf 'n punt: meet en laat 'n riglynpunt | Die ofset ({{ui:Offset}}) of die afstand ({{ui:Length}}) |
| {{ui:Dimension}} | {{key:D}} | Twee hoeke (of een rand), dan waar die maatlyn gaan. Sien [Maat en herskaal](topic:dimensions) | Die ofset ({{ui:Offset}}). Net daarna: 'n nuwe lengte, wat die model herskaal |

{{ui:Move}}, {{ui:Rotate}} en {{ui:Scale}} werk op die seleksie. As niks gekies is nie, neem hulle eers wat jy klik ('n vlak bring sy rande saam).

## Kamera-gereedskap

| Gereedskap | Sleutel | Sleep om |
|---|---|---|
| {{ui:Orbit}} | {{key:O}} | Wentel om die deel van die model onder die wyser ({{key:Shift}} pan) |
| {{ui:Pan}} | {{key:H}} | Skuif die aansig |
| {{ui:Zoom}} | {{key:Z}} | Zoem: op is in, af is uit |
| {{ui:Extents}} | {{key:Shift+Z}} | ('n knoppie, nie 'n gereedskap nie) Pas die hele model in |

Jy het dit selde met 'n muis nodig: middelsleep wentel, regssleep pan, en die wiel zoem met enige gereedskap. Sien [Wentel, pan en zoem](topic:orbit-pan-zoom).

## Organiseer

| Knoppie | Sleutel | Doen |
|---|---|---|
| {{ui:Component}} | {{key:G}} | Maak die seleksie 'n komponent |
| {{ui:Group}} | {{key:Shift+G}} | Maak die seleksie 'n groep |
| {{ui:Explode}} | geen | Draai die gekose groepe en komponente terug na los geometrie |

## Plaas komponent

Nie op die werkbalk nie: klik {{ui:Place}} langs 'n komponent in die {{ui:Components}}-paneel. Klik een keer waar die komponent se oorsprong moet wees; die gereedskap keer dan terug na {{ui:Select}}.
