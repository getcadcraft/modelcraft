---
title: Mga component na nag-stretch
summary: Gawing mas malapad, mas malalim o mas mataas ang isang kopya ng component habang nananatili ang sukat ng mga parte nito: mas mahabang mesa na may parehong paa, mas matangkad na bookshelf na may kumalat na shelves, isang railing na may paulit-ulit na post.
keywords: dynamic component, stretch, baguhin ang laki ng component, parametric, pinangalanang sukat, ulitin, array, paa, shelves, railing, mga patakaran, mga variable
from: b4c40f43
---

Ang pag-scale ng component ay nagpapalaki sa lahat ng nasa loob nito, pati ang mga paa at rail. **I-stretch ang kopyang ito** ay bino-baguhin ang lapad, lalim o taas ng component habang sumusunod ang bawat parte sa isang patakaran: lumalaki ang tuktok ng mesa, at nananatili ang kapal ng mga paa nito at nasa dulo pa rin.

Gumagana ito sa mga component na binubuo ng mga parte, ibig sabihin, mga group o component sa loob ng component, gaya ng bawat bagay sa [starter library](topic:starter).

## I-stretch ang isang kopya

1. Piliin ang component.
2. Sa {{ui:Entity info}}, i-click ang {{ui:Stretch this copy…}}.
3. I-type ang bagong {{ui:Width (red)}}, {{ui:Depth (green)}} at {{ui:Height (blue)}}, saka i-click ang {{ui:Stretch}}.

Ang kopyang iyon lang ang nagbabago: nagiging sarili nitong component ito, at naaalala nito ang orihinal na pinanggalingan. I-stretch itong muli anumang oras, at muli itong bubuuin mula sa orihinal, kaya walang lumilihis. Hindi nagbabago ang iba pang kopya ng orihinal.

## Ang mga patakaran

Buksan ang component (i-double-click ito) at piliin ang isa sa mga parte nito. Ipinapakita ng {{ui:Entity info}} ang {{ui:When the component stretches}}, na may patakaran sa kahabaan ng red, green at blue:

| Patakaran | Ginagawa ng parte | Halimbawa |
|---|---|---|
| {{ui:Stretch}} | Lumalaki kasabay ng component; nananatili ang distansya nito sa magkabilang gilid | Tuktok ng mesa |
| {{ui:Manatili sa simula}} / {{ui:Manatili sa dulo}} | Nananatili ang laki nito at ang distansya nito sa gilid na iyon | Mga paa |
| {{ui:Ilipat ayon sa proporsyon}} | Nananatili ang laki nito; ang gitna nito ay gumagalaw ayon sa proporsyon | Shelves, hawakan ng pinto |
| {{ui:I-scale ayon sa proporsyon}} | Ang puwesto at laki nito ay parehong ayon sa proporsyon | Mga baitang ng hagdan |
| {{ui:Ulitin}} | Mga kopya nito, bawat ilang distansya ({{ui:Bawat}}), mula sa simula hanggang sa malayong gilid | Mga post ng railing |

Ang {{ui:Awtomatiko}} (ang panimulang setting) ang bumubuo ng isa at nagpapakita kung alin: {{ui:Stretch}} kapag sakop ng parte ang component, {{ui:Ilipat ayon sa proporsyon}} kapag nasa gitna lang ito, kung hindi ay nananatili ito sa gilid na mas malapit dito.

## Mga dapat tandaan

- Pinagsasaluhan ang mga hugis ng mga parte, kaya magaan ang na-stretch na kopya. Ang pag-edit ng isang parte ay nagbabago nito sa bawat kopya.
- Hindi sinusunod ng na-stretch na kopya ang mga susunod na pagbabago sa mga patakaran o layout ng orihinal: i-stretch itong muli para makuha ang mga iyon.
- Ang mga face na nakaguhit nang maluwag sa component (hindi sa loob ng parte) ay nananatili ang laki; gawin silang parte para sumunod sila.
- Ang mga patakaran at kung saan galing ang bawat kopya ay naka-save sa ModelCraft file.
