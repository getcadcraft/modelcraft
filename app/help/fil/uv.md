---
title: Ayusin ang UV ng mesh
summary: Markahan ang seam, i-unwrap, i-project at i-pack ang texture coordinates ng mesh sa UV workspace, at suriin ang mga ito gamit ang checker at stretch colors.
keywords: uv, uvs, unwrap, unwrapping, seam, seams, texture, texture coordinates, atlas, pack, packing, island, islands, checker, stretch, distortion, box projection, cylinder projection, sphere projection, conformal, angle based, lscm, abf
from: 00028f20
---

Ang texture ay flat na larawan; ang mesh ay hindi flat. Sinasabi ng mga **UV** nito kung saan nakalagay ang bawat sulok ng bawat face sa larawan. Ang UV workspace ang gumagawa nito: binubuksan mo ang mesh sa kahabaan ng mga **seam**, ilalatag nang flat ang mga piraso (**unwrap**), at ikakasya ang mga ito sa parisukat (**pack**).

## Buksan ito

Pumili ng mesh at piliin ang {{ui:UV}} sa listahan ng {{ui:Workspace}}. Nagiging mesh muna ang isang group o component, gaya ng sa Mesh workspace. Lilipat ang 3D view sa kaliwang kalahati; ang **UV editor** sa kanan ang magpapakita ng mga face ng mesh na nakalatag sa texture square. Gumagana ang pagpili gaya ng sa Mesh workspace, at ang napili sa isang view ay napipili rin sa kabila.

## Markahan ang seam

Ang seam ay ang mga lugar kung saan maaaring buksan ang mesh; pula ang mga ito sa parehong view.

- Piliin ang mga edge ({{ui:Edge}}, o {{key:2}}) at pindutin ang {{ui:Markahan ang seam}} ({{key:Ctrl+E}}). Tinatanggal ng {{ui:Burahin ang seam}} ({{key:Ctrl+Shift+E}}) ang mga ito.
- Minamarkahan ng {{ui:Seams sa matalim}} ang bawat matalim na edge at bawat edge kung saan nagtatagpo ang mga face sa higit sa 60°: nahahati ang isang box sa anim na gilid nito.
- Minamarkahan ng {{ui:Seams mula sa UVs}} ang mga seam kung saan nasisira na ang UV, halimbawa pagkatapos ng projection.

Kailangan ng seam ang saradong piraso para mailatag nang flat: kailangan ng bola ng kahit isang hiwa, at tubo ng hiwa sa haba nito.

## Unwrap

Piliin ang mga face na ilalatag (o wala, para sa buong mesh) at pindutin ang {{ui:Unwrap}} ({{key:U}}). Bawat piraso sa pagitan ng mga seam ay inilalatag nang flat, pinananatiling totoo ang mga anggulo nito hangga't kaya (angle-based flattening), saka ipinapack ang mga piraso sa parisukat. Ang {{ui:Conformal}} ay nag-u-unwrap sa pamamagitan ng least-squares conformal maps: mas mabilis, bahagyang hindi gaanong totoo sa mga piraso na may malakas na kurba. Ang hugis na maaaring gawin mula sa flat na sheet, gaya ng gilid ng silindro na hiniwa nang minsan, ay nag-u-unwrap nang walang stretch.

## I-project

Para sa simpleng hugis, kadalasang sapat na ang projection:

| Projection | Ano ang ginagawa nito |
| --- | --- |
| {{ui:Box}} | Bawat face sa gilid ng box na pinakaharap nito |
| {{ui:Cylinder}} | Paikot sa asul na axis: pahalang ang anggulo sa paligid, pataas ang taas |
| {{ui:Sphere}} | Mula sa sentro: pahalang ang anggulo sa paligid, pataas ang latitude |
| {{ui:From view}} | Gaya ng nakikita ang mga face sa 3D view ngayon |

Ang face na nasa tagpuan ng silindro o sphere ay pinananatiling isang piraso, kaya maaaring lumampas nang kaunti ang UV nito sa kanang gilid ng parisukat; umuulit doon ang mga texture.

## Ayusin

- Ikinakasya ng {{ui:Pack}} ang mga piraso (islands) sa parisukat sa iisang texel size, bawat isa ay iniikot para sa pinakakaunting espasyo. Itinatakda ng panel ang espasyong natitira sa pagitan nila.
- Iniikot ng {{ui:Turn 90°}} at sinasalamin ng {{ui:Mirror}} ang UV ng mga piniling face.
- Sa UV editor, i-drag ang piniling face para ilipat ang UV ng pinili, o ituro ang editor at pindutin ang {{key:R}} o {{key:S}} saka galawin para iikutin o i-scale ang mga ito (ang isang click ay nagpapanatili nito, kinakansela ito ng {{key:Esc}}). Inililipat ng {{key:G}} nang hindi nagda-drag. I-double-click ang isang face (o {{key:L}}) para piliin ang buong isla nito. Nag-zo-zoom ang gulong; i-drag gamit ang gitnang o kanang button para mag-pan; ibinabalik ng {{key:F}} ang parisukat sa tamang sukat.

Isang undo step ang bawat pagbabago.

## Suriin ang mga ito

- Ipinapakita ng {{ui:Checker}} ang may-label na checker sa mesh sa UV nito: ang pantay at parisukat na checks ay nangangahulugang pantay ang pagkakalatag ng texture; ipinapakita ng mga label kung saang direksyon ito tumatakbo.
- Kinukulayan ng {{ui:Stretch}} ang bawat face ayon sa dami ng pag-stretch ng UV nito: asul kung wala, dumaraan sa berde, hanggang pula kung marami. Pinipili ng panel kung ang sinusukat ay **nabaluktot na anggulo** o **nagbago na laki**, at ipinapakita ang average.

Tingnan din ang [I-edit ang mesh](topic:mesh-edit), [Mga mesh](topic:meshes) at [Modifiers sa mesh](topic:modifiers).
