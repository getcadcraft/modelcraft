---
title: I-intersect ang mga face
summary: Gumuhit ng mga linya kung saan nagtatawiran ang mga face, para mapush/pull, mabura o mapinturahan ang mga piraso.
keywords: intersect, intersect faces, intersect with model, intersect with selection, cut, opening, hole, join, lines where faces cross, boolean
from: 6bc58526
---

Kapag dumaan ang isang hugis sa loob ng isa pa, hindi iginuguhit ng ModelCraft ang linya kung saan nagtatagpo ang kanilang mga face: nagpapatong lang sila. Iginuguhit ng **Intersect** ang mga linyang iyon, bilang mga gilid, kaya nahahati doon ang mga face. Pagkatapos, maaari mong i-push/pull, burahin o pinturahan ang mga piraso.

Nasa {{ui:Edit}} › {{ui:More}} ang dalawang command.

## Intersect with model

Pinuputol ang mga napili mo laban sa **bawat face na nakikita sa screen**.

Halimbawa, may dumaan na beam (isang group) sa isang pader (isa pang group), at gusto mo ng butas sa pader:

1. I-double-click ang pader para buksan ito, at piliin ang lahat ng face nito ({{key:Ctrl+A}}).
2. {{ui:Edit}} › {{ui:More}} › {{ui:Intersect with model}}.

Ang balangkas ng beam ay iginuguhit sa magkabilang face ng pader, bilang dalawang bagong face. I-push ang isa sa mga ito sa pader para makagawa ng butas, pagkatapos isara ang pader.

## Intersect with selection

Pinuputol ang mga napiling face, group at component **sa isa't isa lang**. Pumili ng kahit dalawa.

## Saan napupunta ang mga linya

Palaging iginuguhit ang mga linya sa **bukas na konteksto**: sa model kapag walang bukas na group, o sa group na in-e-edit mo. Hindi nababago ang mga group at component na hindi bukas. Kaya para putulin ang mga face ng isang group, buksan muna ito, gaya sa halimbawa sa itaas.

## Mga dapat malaman

- Hindi pinuputol ang mga face na nasa iisang plane.
- Ang mga linyang nagsasara ng loop sa face ay gumagawa ng bagong face, gaya ng mga iginuhit na linya.
- Bawat intersect ay isang hakbang sa undo. Kung walang nagtatawiran, walang nagbabago.
- Para sa mga saradong hugis, ginagawa ng [solid tools](topic:solids) (Union, Subtract) ang buong trabaho sa isang hakbang.
