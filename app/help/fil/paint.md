---
title: Magpinta gamit ang kulay at materyal
summary: Bigyan ang mga face, group at component ng solidong kulay o materyal gaya ng ladrilyo, siding, shingles o kahoy, at panatilihin ang mga ito kapag nag-export.
keywords: paint, kulay, colour, materyal, materyales, texture, mga texture, ladrilyo, siding, shingles, bubong, kahoy, bato, tile, kongkreto, stucco, damo, graba, salamin, metal, paint bucket, punan, sample, eyedropper, default, glb, obj, mtl, collada
from: b1500523
---

Nakakatulong ang mga kulay para makilala ang mga bahagi ng model, at ginagawa ng **mga materyal** (ladrilyo, siding, bubong, kahoy, bato, tile, kongkreto, stucco, damo, salamin, metal) na mukhang kung ano ang itinayo ang model. Parehong ipinipinta ang dalawa.

## Pumili ng kulay

Ang seksyong {{ui:Mga kulay}} sa kanan ay nagpapakita ng hilera ng solidong kulay, {{ui:Default}} (ang may guhit sa ibabaw: walang kulay) at isang {{ui:+}} swatch para sa anumang ibang kulay. I-click ang isa para gawin itong kasalukuyang kulay. Nagsisimula ang Paint tool dito.

## Paint

1. Pindutin ang {{key:B}} ({{ui:Paint}}), o, kapag walang napili, i-click ang kulay. (Kapag may napili, ang pag-click sa kulay ay agad magpipinta sa napili.)
2. I-click ang face para ipinta ito.
3. I-click ang group o component para ipinta ang kopyang iyon: ang mga face nito na walang sariling kulay ay kukuha ng kulay na ito. Nananatili ang kulay ng mga face na ipininta mo sa loob nito.

Para magpinta ng ilang bagay nang sabay, piliin muna ang mga ito at saka i-click ang kulay, o i-click ang alinman sa mga ito gamit ang {{ui:Paint}}. Isang undo step ito.

| Hawakan | At i-click ang face | Ano ang mapipinta |
|---|---|---|
| — | | Ang face na iyon |
| {{key:Ctrl}} | | Bawat face na konektado dito na may parehong kulay |
| {{key:Shift}} | | Bawat face ng kulay na iyon sa group na ginagawa mo |
| {{key:Alt}} | | Wala: kinukuha mo ang kulay na iyon sa halip |

Para ibalik sa walang kulay ang isang face, piliin ang {{ui:Default}} at i-click ito.

## Magpinta gamit ang materyal

Ang seksyong {{ui:Mga materyal}}, sa ilalim ng {{ui:Mga kulay}}, ay naglilista ng material library ayon sa uri: ladrilyo at block, siding, bubong, kahoy, bato, tile, kongkreto, stucco, lupa, salamin at metal. I-hover ang swatch para makita ang pangalan nito. I-click ang isa, saka magpinta gaya ng kulay: {{key:B}}, i-click ang mga face, group o component; o piliin muna at i-click ang materyal.

- Sa **Shaded** na style, ipinapakita ng mga face ang texture ng materyal. Kulay nito ang ipinapakita ng hidden line, wireframe at x-ray.
- Tumatakbo ang mga texture nang **pahalang sa bawat face** at **pataas dito**: nananatiling pahalang ang mga hanay ng ladrilyo sa bawat pader, ang shingles ay tumatakbo pababa sa dalisdis ng bubong, ang mga board sa sahig ay sumusunod sa red axis. Nasa totoong laki ang mga ito (mga 215 mm ang haba ng isang ladrilyo), kaya maayos ang itsura nila sa anumang layo.
- Sa isang [rendered picture](topic:render), pinapanatili ng mga materyal ang kanilang texture, roughness at, para sa salamin at metal, ang kanilang kinang.
- Ang {{key:Alt}}-click gamit ang {{ui:Paint}} ay kumukuha rin ng materyal ng face.

Iginuguhit mismo ng ModelCraft ang mga texture, kaya gumagana ang mga ito offline at libre para sa anumang gamit (CC0).

## Mga component at kulay

Ang kulay na ipinintang sa face **sa loob** ng component ay lumalabas sa bawat kopya, dahil iisa ang kahulugan ng mga kopya. Ang kulay na ipinintang sa **kopya** mula sa labas (habang sarado ang component) ay para sa kopyang iyon lang, kaya maaaring magkaiba ang kulay ng dalawang kopya ng iisang component. Ipinapakita ng {{ui:Impormasyon ng entity}} ang kulay ng napiling face, group o component.

## Mga kulay sa mga file

- Iniingatan ng ModelCraft file ang bawat kulay at bawat materyal.
- Ang ibang format ay tumatanggap ng **kulay ng materyal** (ang itsura nito mula sa malayo) sa halip na texture: glTF, Collada, OBJ, DWG at DXF, at ang 3D printing check. Sa glTF, Collada at OBJ, pinapanatili ng materyal ang pangalan nito, gaya ng `Material_brick-red`.
- **glTF (.glb)** at **Collada (.dae)**: bawat kulay ay nagiging materyal. Ang component na ipinapakita sa iba't ibang kulay ay isinusulat nang isang beses bawat kulay. Isinusulat din ng glTF ang mga na-import na texture bilang texture.
- **OBJ**: ang pag-export ay nagda-download ng dalawang file, ang `.obj` at ang `.mtl` na materials file na may mga kulay. Panatilihin ang mga ito sa iisang folder. Kapag may na-import na texture, ang `.obj`, `.mtl` at mga larawan ay darating bilang iisang `.zip`.
- **DWG** ay pinapanatili ang eksaktong kulay; ang **DXF** ay gumagamit ng pinakamalapit sa 255 standard na CAD color.
- Ang **STL** at **PLY** ay may dalang kulay: ang STL ayon sa VisCAM / SolidView convention (binabalewala ito ng mga program na hindi ito kilala), ang PLY bilang kulay sa bawat point. Tingnan ang [Mga format ng file nang detalyado](topic:formats).

:::tip
Para mag-model ng screen, ipinta ang frame ng charcoal at ang salamin ng asul pagkatapos mong [i-offset](topic:draw-faces) ang harap na face.
:::
