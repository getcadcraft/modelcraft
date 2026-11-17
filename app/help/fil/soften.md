---
title: Patulisin at pakinisin ang mga gilid
summary: Itago ang mga gilid sa pagitan ng face na nagtatagpo sa mababaw na anggulo, para magmukhang iisang makinis na surface ang mga kurbadong hugis, sa ModelCraft at sa mga na-export na file.
keywords: soften, smooth, soft edges, smooth shading, itago ang mga gilid, facets, faceted, kurbado, normals, harden, anggulo
from: 52d32453
---

Ang kurbadong hugis sa ModelCraft ay gawa sa patag na face. Ang **malambot** na mga gilid sa pagitan ng mga face na iyon ay hindi iginuguhit, at ang mga face na pinagdurugtong nila ay pinapaliliman bilang iisang makinis na surface, kaya magmumukhang bilog ang 24-sided na silindro.

Kapag hinila mo pataas ang bilog gamit ang {{ui:Push/pull}}, awtomatikong pinapalambot ang mga gilid nito. Para sa ibang hugis, palambutin ayon sa anggulo.

## Palambutin ayon sa anggulo

1. Piliin kung ano ang papalambutin: mga face at edge, o isang group o component (lahat ng edge nito).
2. Sa {{ui:Entity info}}, mag-type ng anggulo sa {{ui:Soften up to}}, gaya ng `20`, at i-click ang {{ui:Soften}}.

Bawat edge sa pagpili na ang dalawang face ay umiikot ng ganoong anggulo o mas kaunti ay nagiging malambot; ang mga edge na may mas matalas na pagliko ay nagiging matigas. Ang 12-sided na prism ay ang mga gilid nito ay umiikot ng 30° at ang mga rim nito ng 90°, kaya ang `31` ay nagpapalambot lamang sa mga gilid.

Ginagawang matigas muli ng {{ui:Harden all}} ang bawat edge sa pagpili. Bawat isa ay isang undo step.

## Mga dapat malaman

- Tanging ang mga edge sa pagitan ng eksaktong dalawang face ang napapalambot. Nananatili ang mga maluwag na edge.
- Gumagana ang smooth shading lamang sa kabila ng malambot na mga gilid: ang face na walang malambot na gilid ay pinapaliliman nang patag.
- Nananatili ang malambot na mga gilid sa file ng ModelCraft. Ang export na **glTF (.glb)** at **OBJ** ay dala ang smooth shading (isang normal bawat sulok), kaya ipinapakita ng ibang programa ang parehong surface. Ang Collada at STL ay nag-e-export ng patag na face.
- Nakatago ang malambot na mga gilid sa bawat face style, pati sa {{ui:X-ray}} at {{ui:Wireframe}}. Para makita ang mga ito, piliin ang hugis at i-click ang {{ui:Harden all}}; ibinabalik ng undo ang paglambot.
