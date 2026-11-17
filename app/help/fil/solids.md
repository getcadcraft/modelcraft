---
title: Mga solid tool: union, subtract, intersect
summary: Pagsamahin ang mga sarado na group at component sa isa, putulin ang isa mula sa isa pa, o panatilihin lamang ang pinagsasaluhan nila.
keywords: solid, solids, solid inspector, hindi solid, ayusin ang solid, butas, stray edge, nakabaligtad, union, join, combine, merge, subtract, difference, cut, butas, intersect, intersection, boolean, panlabas na shell
from: f35df1cc
---

Pinagsasama ng mga solid tool ang **solids**: mga group at component na ang mga face ay bumubuo ng volume, na ang bawat edge ay nagdurugtong ng eksaktong dalawang face. Sinasabi ng {{ui:Entity info}} na {{ui:Solid}}: {{ui:Yes}} para sa isa, at ipinapakita ang volume nito.

Nasa menu na {{ui:Solids}} sila, sa grupong {{ui:Organize}}.

## Kapag hindi solid ang isang bagay

Piliin ang group o component. Kapag hindi ito solid, sinasabi ng {{ui:Entity info}} kung bakit, halimbawa "Hindi solid: 4 na edge ang nasa gilid ng butas · 1 maligaw na edge":

| Problema | Ibig sabihin |
|---|---|
| Mga edge na nasa gilid ng butas | May nawawalang face |
| Mga edge na pinagsasaluhan ng tatlo o higit pang face | May face na naghahati sa loob, o dalawang hugis na nagdidikit sa isang edge |
| Mga face sa loob ng hugis | Isang pader na naiwan sa loob ng volume |
| Stray edge | Mga linyang walang bumubuong face |
| Mga face na nakabaligtad | Nakaharap sa loob ang kanilang front face, laban sa mga kapitbahay nila |

Binubuksan ng {{ui:Show problems}} ito na may napiling mga edge at face na iyon, para makita mo ang mga ito. Inaayos ng {{ui:Fix}} ang mga simpleng kaso sa isang undo step: tinatanggal ang mga stray edge at mga face sa loob ng hugis, itinatama ang pagkaharap ng mga face palabas, at isinasara ang mga butas na patag ang gilid. Anumang hindi nito maayos nang ligtas (butas na hindi patag, edge na pinagsasaluhan ng maraming face) ay iniiwan para sa iyo, at sinasabi nito kung ano ang natitira.

## Union

1. Pumili ng dalawa o higit pang solid (i-click ang isa, {{key:Ctrl}}+click ang iba).
2. {{ui:Solids}} › {{ui:Union}}.

Nagiging isang solid ang mga ito, sa isang group. Kung saan nagkapatong ang mga ito, nawawala ang mga face sa loob.

## Subtract

1. {{ui:Solids}} › {{ui:Subtract}}.
2. I-click ang solid na **aalisin** (ang cutter).
3. I-click ang solid na **puputulin**.

Nananatili ang natitira sa pangalawang solid; nauubos ang cutter. Halimbawa, para gumawa ng butas sa isang block, gumuhit ng poste na dumadaan dito, gawing group ang poste, saka i-subtract ang poste sa block.

## Intersect

Pumili ng dalawa o higit pang solid, saka {{ui:Solids}} › {{ui:Intersect}}. Ang bahaging pinagsasaluhan lamang nilang lahat ang natitira.

## Mga dapat malaman

- Ang resulta ay bagong group. Pinapanatili nito ang pangalan, kulay at tag ng unang solid (para sa Subtract: ang pinutulan mo). Hindi pinananatili ang mga kulay na ipininta sa mga face nito.
- Ang patag na gilid ng resulta ay iisang face. Ang bilog na gilid ay lumalabas bilang mga patag na facet, gaya ng pagkakaguhit nila.
- Kung ang isang group o component ay hindi solid, sinasabi ng tool kung alin ito at walang binabago. Hanapin ang nawawalang face o ang maligaw na face sa loob nito.
- Sa loob ng bukas na group, gumagana ang mga tool sa mga group at component sa loob ng group na iyon.
- Bawat tool ay isang undo step.
- Sa unang paggamit mo ng solid tool, nilo-load ang engine nito (manifold-3d), na maaaring tumagal nang kaunti.
