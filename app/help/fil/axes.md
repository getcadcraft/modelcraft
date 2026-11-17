---
title: Ilipat at ikutin ang drawing axes
summary: Ikutin ang pula, berde at asul na axes para tumugma sa gusaling hindi tuwid sa kanila, o i-align ang mga ito sa isang face, para sumunod sa kanila ang pagguhit at pag-type.
keywords: axes, drawing axes, origin, i-align ang axes, i-rotate ang axes, ikutin ang axes, i-reset ang axes, gusaling naka-anggulo, nakiling, ucs, coordinate system
from: cab258f7
---

Ginagabayan ng pula, berde at asul na axes ang lahat ng iginuguhit mo: nakahanay sa kanila ang mga rectangle, nakakandado sa kanila ang mga linya, at ang lupa ay ang eroplanong pula-berde. Kapag nakaanggulo ang isang gusali (site plan na hindi tuwid sa north, pakpak na nakaikot ng 30°), ilipat ang axes dito para sumunod ang pagguhit sa mga pader nito. Hindi gumagalaw ang model mismo.

Nasa {{ui:Edit}} › {{ui:More}} ang lahat ng tatlong command.

## Ilagay ang axes

1. {{ui:Edit}} › {{ui:More}} › {{ui:Place axes}}.
2. I-click kung saan dapat ang origin, tulad ng sulok ng gusali.
3. I-click ang isang punto sa bagong pulang axis, tulad ng mas malayo sa kahabaan ng pader.
4. I-click ang isang punto patungo sa bagong berdeng axis. Ginagawang tuwid sa pula ang berde, at nakatayo ang asul na tuwid sa pareho.

Iginuguhit na ang axes sa bago nilang lugar. Ang rectangle na iginuguhit mo ngayon sa lupa, o tina-type bilang `4m,3m`, ay tumatakbo sa kahabaan ng umikot na pula at berde; nakakandado sa kanila ang arrow keys; at nasa bagong origin ang origin snap.

## I-align ang axes sa face

Piliin ang isang face, pagkatapos {{ui:Edit}} › {{ui:More}} › {{ui:Align axes to face}}. Tumuturo ang asul palabas sa face, tumatakbo ang pula sa kahabaan ng pinakamahabang gilid nito, at nasa simula ng gilid na iyon ang origin. Gamitin ito para gumuhit sa nakahilig na bubong na parang lupa.

## I-reset ang axes

Ibinabalik ng {{ui:Edit}} › {{ui:More}} › {{ui:Reset axes}} ang mga ito sa kinalalagyan ng model sa simula.

## Mga dapat tandaan

- Sa loob ng bukas na group o component, ginagamit ang sarili nitong axes (umiikot ang mga ito kasama nito); ang axes ng model ay nalalapat sa pinakataas na antas.
- Nakasave ang axes sa ModelCraft file, at bawat pagbabago ay isang hakbang ng undo.
- Ginagamit pa rin ng mga export at ng karaniwang view ({{ui:Top}}, {{ui:Front}}…) ang sariling direksyon ng model.
