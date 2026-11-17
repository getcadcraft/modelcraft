---
title: 3D Text
summary: Maglagay ng lettering sa model bilang mga face, patag o solid, nakatayo sa anumang face: isang sign, numero ng bahay, pangalan sa pinto.
keywords: 3d text, teksto, letters, lettering, sign, signage, numero ng bahay, label, ukit, font, mga salita
from: 923f5d93
---

{{ui:3D Text}} sa grupong {{ui:Draw}} ay gumagawa ng lettering mula sa mga face, na maaari mong kulayan, i-push/pull o ukitin sa isang solid.

## Magdagdag ng teksto

1. I-click ang {{ui:3D Text}}.
2. I-type ang teksto. Pindutin ang {{key:Enter}} sa kahon para sa pangalawang linya.
3. Itakda ang {{ui:Taas ng letra}} (ang taas ng isang malaking titik, gaya ng `30cm` o `1'`) at ang {{ui:Lalim}}:
   - Ang `0` ay gumagawa ng **patag na mga letra**: mga face na nakalatag sa anumang pinaglalagyan mo nito, handa nang kulayan o i-push/pull.
   - Ang lalim gaya ng `5cm` ay gumagawa ng **solid na mga letra**, mga saradong solid na maaari mong gamitin sa [mga solid tool](topic:solids).
4. I-click ang {{ui:Ilagay}}, saka i-click kung saan ilalagay ang teksto.

Sa isang face, nakalatag ang teksto sa face na iyon, binabasa mula kaliwa pakanan: sa pader ay nakatayo ito nang patayo; sa lupa o mesa ay nakalatag ito nang patag sa kahabaan ng red. Kapag wala sa anumang face, nasa lupa ito.

Ang teksto ay isang **component** na pinangalanan ayon dito, kaya nagbabago ang bawat kopya kapag may ine-edit ka sa isa, at lumalabas ito sa listahang {{ui:Mga component}} para mailagay ulit.

## Mga dapat tandaan

- Ang mga letra ay ang sariling single-stroke font ng ModelCraft, pinakapal: malinis at madaling basahin, pero wala pang pagpipilian ng typeface.
- Iginuguhit ang mga letra, numero at karaniwang sign (kasama ang mga letrang may tuldik); ang karakter na wala sa font ay lumalabas bilang maliit na kahon.
- Para baguhin ang mga salita, burahin ang teksto at idagdag itong muli.
- Para ukitin ang lettering sa isang surface, gumawa ng solid na mga letra, ilagay ang mga ito hanggang kalahati sa loob ng solid na group, at [i-subtract](topic:solids) ang mga ito.
