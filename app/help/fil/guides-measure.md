---
title: Sukatin at ilagay ang mga guide
summary: Basahin ang mga haba at lawak, sukatin ang layo ng dalawang punto gamit ang tape, at ilatag ang mga guide line at punto na pagguhitan.
keywords: sukat, tape measure, protractor, angle, angled guide, guide, guideline, construction line, layo, dimension, haba, lawak, offset, layout, guide point
from: de6d04d9
---

## Basahin ang laki nang hindi sumusukat

Pumili ng isang bagay at tingnan ang {{ui:Entity info}}:

- Ang gilid ay nagpapakita ng **haba** nito.
- Ang face ay nagpapakita ng **lawak** nito at kung ilang butas ang mayroon ito.
- Ang ilang face ay nagpapakita ng **kabuuang lawak**.
- Ang group o component ay nagpapakita ng **laki** nito (lapad × lalim × taas ng kahon sa paligid nito) at, kung saradong solid ito, ang **volume** nito.
- Kapag walang napili, ipinapakita ng {{ui:Entity info}} ang laki ng buong model.

Ang mga haba at lawak ay gumagamit ng unit sa picker sa ibabang kanan. Ang model na nasa millimeter ay nagpapakita ng lawak na 0.01 m² pataas sa square meters (ang kuwartong 4 × 3 m ay mababasang "12 m²").

Habang gumuguhit ka, ipinapakita ng value box ang live na haba, laki, radius, o distansya, kaya bihira mo nang kailangang sumukat pagkatapos.

Para baguhin ang laki pagkatapos gumuhit, pumili ng gilid o group at i-type muli ang haba o laki nito sa {{ui:Entity info}}. O maglagay ng [dimension](topic:dimensions) at i-type doon ang bagong haba.

## Sukatin ang layo ng dalawang punto

1. Pindutin ang {{key:T}} para sa {{ui:Tape}} measure.
2. I-click ang isang punto: isang sulok, isang midpoint, isang punto sa face, o ang ground. (Ang pag-click sa gilid ay ibang bagay; tingnan sa ibaba.)
3. Lumipat sa ikalawang punto. Ipinapakita ng dulo at ng value box ({{ui:Length}}) ang distansya. Dumadapo ito sa mga punto at sa mga direksyong pula, berde at asul.
4. I-click. Sinasabi ng status bar ang "Nasukat ang 4' 6"." at may naiwang **guide point** sa ikalawang punto.

Para maiwan ang guide point sa eksaktong distansya, i-type ito pagkatapos ng unang click at pindutin ang {{key:Enter}}: pupunta ito sa direksyong tinuturo mo.

## Maglagay ng guide line

Ang guide line ay walang hanggang dashed na linya, parallel sa isang gilid, sa distansyang pipiliin mo. Gamitin ang guide para ilatag ang setback, taas ng palapag, o kung saan magsisimula ang bintana.

1. Pindutin ang {{key:T}}.
2. I-click ang **gilid** (hindi ang dulo nito). Sasabihin ng tip na "On edge".
3. Lumayo sa gilid, sa panig kung saan dapat pumunta ang guide. May susunod na dashed na linya na parallel sa gilid, at ipinapakita ng value box ({{ui:Offset}}) ang distansya.
4. I-click, o i-type ang offset at pindutin ang {{key:Enter}}: `1.5m`, `5'`.

   Sinasabi ng status bar ang "Guide line 1.5 m mula sa gilid."

Ang pagsisimula sa umiiral nang guide line ay gumagawa ng panibagong guide na parallel dito, kaya maaari mong ilabas ang grid nang sunod-sunod mula sa isang guide.

Kung mag-type ka ng offset nang hindi muna lumalayo sa gilid, hindi malalaman ng ModelCraft kung aling panig ang ibig mo: "Lumayo muna sa gilid para ipakita kung aling panig."

## Guide sa anggulo: Protractor

1. I-click ang {{ui:Protractor}} sa pangkat na {{ui:Modify}}.
2. I-click ang center: ang punto na dinadaanan ng guide. Sa face, nasa face na iyon ang protractor; sa iba, nakahiga ito nang patag. Pagkatapos ng click na ito, ang {{key:Right}}, {{key:Left}} o {{key:Up}} ay nagtatayo nito nang tuwid sa pula, berde o asul (pindutin muli para bawiin).
3. I-click ang punto na nagtatakda ng 0°, halimbawa sa kahabaan ng gilid.
4. Lumipat sa anggulong gusto mo at i-click: dumadapo ito sa mga hakbang na 15°. O i-type ang anggulo sa degrees, gaya ng `22.5`, at pindutin ang {{key:Enter}}; pupunta ang guide sa panig kung nasaan ang pointer.

Dumadaan ang guide line sa center sa anggulong iyon. Gumuhit sa kahabaan nito gamit ang {{ui:Line}} para sa pitch ng bubong, chamfer, o nakatagilid na pader.

## Gumuhit gamit ang guide

Dumadapo ang mga drawing tool sa mga guide line ("On guide") at guide point ("Guide point"), at sa lugar kung saan tumatawid ang guide line sa direksyon ng axis. Simulan ang rectangle kung saan nagtatawiran ang dalawang guide para eksaktong maipuwesto ito.

## Magtanggal ng guide

- Isang guide: i-click ito gamit ang {{ui:Select}} at pindutin ang {{key:Delete}}, o i-click ito gamit ang {{ui:Eraser}}.
- Lahat ng guide: kapag walang napili, i-click ang {{ui:Delete all guides}} sa {{ui:Entity info}}.

Nase-save ang mga guide sa `.modelcraft` file. Hindi sila ine-export sa ibang format.
