---
title: Mga tag: ipakita at itago ang mga set ng bagay
summary: Bigyan ng tag ang mga group at component, gaya ng Furniture o Walls, at itago o ipakita ang lahat ng may tag na iyon nang sabay-sabay.
keywords: tags, tag, layers, layer, ipakita, itago, visibility, ayusin, furniture, walls, walang tag, palitan ang pangalan ng tag, burahin ang tag
from: c1a95a05
---

Ang tag ay pangalang ibinibigay mo sa mga group at component, gaya ng **Furniture**, **Walls** o **Site**, para maitago o maipakita ang lahat ng may tag na iyon nang sabay-sabay. Ang tags ang tawag ng mga CAD program sa layers. Para sa pagtatago ng isang bagay sa isang pagkakataon, tingnan ang [Itago, i-isolate at ipakita ulit](topic:hide-isolate).

## Gumawa ng tag

1. Sa {{ui:Tags}} sa kanan, i-click ang {{ui:Add tag}}.
2. I-type ang pangalan nito at pindutin ang {{key:Enter}}.

Para palitan ang pangalan ng tag, i-click ang pangalan nito sa {{ui:Tags}}, i-type ang bago, at pindutin ang {{key:Enter}}. Hindi maaaring magkapareho ang pangalan ng dalawang tag.

## Lagyan ng tag ang mga group at component

1. Piliin ang isa o higit pang group o component.
2. Sa {{ui:Entity info}}, piliin ang tag sa {{ui:Tag}}. Gumagawa ang {{ui:New tag…}} ng bagong tag at ilalagay ito sa selection.

Inaalis ng {{ui:Walang tag}} ang tag. Ipinapakita ng numero sa tabi ng bawat tag sa {{ui:Tags}} kung ilang group at component ang may tag na iyon.

Lagyan ng tag ang mga group at component, hindi ang mga maluwag na face at edge: iguhit muna bilang group ang mga bagay na gusto mong lagyan ng tag (piliin ang mga ito, {{key:Shift+G}}).

## Itago at ipakita

I-click ang mata sa tabi ng tag. Mawawala sa paningin ang lahat ng may tag na iyon, saan man ito nasa model (pati sa loob ng ibang group), at lalampas dito ang mga click at snap. I-click ulit ang mata para ipakita ito. Palaging nakikita ang mga bagay na {{ui:Walang tag}}.

Kung nag-e-edit ka sa loob ng group na may tag na itinago mo, magsasara ang group.

## Burahin ang tag

I-click ang basurahan sa tabi nito. Ang mga bagay na may tag na iyon ay magiging {{ui:Walang tag}}, at lalabas.

## Mga dapat tandaan

- Naka-save sa ModelCraft file ang mga tag, ang kanilang pangalan, at kung alin ang nakatago. Kapag kinopya ang isang naka-tag na group sa ibang model, dala rin nito ang tag.
- Ang pagtatago at pagpapakita ng tag, at ang bawat ibang pagbabago sa mga tag, ay isang undo step.
- Kasama sa mga export ang lahat, pati ang mga nakatagong tag, gaya ng ginagawa sa mga nakatagong bagay.
- Hindi pa naipapasok bilang tag ang mga layer sa DWG at DXF na site plan: ang buong drawing ay ipinapasok bilang iisang group.
