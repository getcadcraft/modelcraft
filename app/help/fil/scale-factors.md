---
title: I-scale ayon sa factor at allowance sa pag-urong
summary: I-scale ang napili ayon sa factor para sa bawat axis sa paligid ng punto na pipiliin mo, o gawing mas malaki ang pattern ayon sa porsiyento ng pag-urong ng cast na piyesa.
keywords: scale, hindi pantay, factor, percent, stretch, shrinkage, shrink, casting, pattern, foundry, allowance, resize
from: 37e1bbff
---

Pantay na nag-i-scale ang Scale tool ({{key:S}}), o humihila ng grip para mag-stretch sa isa o dalawang direksyon. Ang **Scale ayon sa factor…** (menu ng Tools, o ang Modify group) ang naka-type na anyo: isang numero para sa bawat isa sa tatlong axis.

1. Piliin ang mga edge, face, group o component.
2. Buksan ang {{ui:Scale ayon sa factor…}}. I-type ang factor para sa pula, berde at asul. Ang factor ay maaaring `1.015`, `101.5%` o `+1.5%` (at `-2%` para sa mas maliit). Kinokopya ng {{ui:Pareho sa lahat ng tatlong axis}} ang una sa dalawa pang axis.
3. Piliin kung ano ang **mananatili sa puwesto nito**: ang gitna ng napili, ang pinakamababang sulok nito, ang gitna ng ilalim nito, o ang origin.
4. Ipinapakita ng linya sa ilalim ng mga field ang laki ngayon at pagkatapos. Ginagawa ito ng {{ui:Scale}} sa isang undo step.

Ang mga axis ay ang sa group na bukas mo (ang sa model, sa pinakataas na antas). Ang group o component na naka-ikot ay lalabas na na-shear kung magkaiba ang mga factor nito; i-scale na lang ang group na naglalaman nito. Hindi ginagalaw ang laman ng component, kaya nananatili ang iba pa nitong kopya.

## Allowance sa pag-urong

Umuurong ang cast na piyesa habang lumalamig, kaya ginagawang mas malaki ang pattern nito. Sa ilalim ng **Allowance sa pag-urong**, i-type ang porsiyento para sa bawat axis (ibinibigay ito ng foundry o gumagawa ng pattern para sa metal mo; ang 1.5 % sa ibaba ay halimbawa lang) at pindutin ang {{ui:Gamitin bilang mga factor}}.

- **Ang porsiyento mismo** ay ginagawang 1 kasama ang porsiyento ang factor: ang 1.5 % ay nagbibigay ng 1.015, ang minamarkahan ng shrink rule.
- **Eksaktong sapat** ay ginagawang 1 na hinati sa isang minus ang porsiyento ang factor: ang 1.5 % ay nagbibigay ng 1.0152, kaya lalabas ang casting sa laki ng piyesa pagkatapos nitong umurong nang ganoon.

Naaalala sa browser na ito ang huling porsiyento mo.

:::note
Ikaw ang nagbibigay ng porsiyento: walang alam ang ModelCraft tungkol sa metal, mold o proseso mo.
:::
