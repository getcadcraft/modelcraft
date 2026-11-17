---
title: "Hatiin ang edge o curve sa magkakapantay na bahagi"
summary: "Hatiin ang linya sa magkakapantay na piraso, o bigyan ang arko o bilog ng bagong bilang ng segment, gamit ang tool na Hatiin."
keywords: "hatiin, hatiin ang edge, magkakapantay na bahagi, magkakapantay na segment, split edge, segment, subdivide, i-subdivide ang mga gilid, arc segments, circle segments, mga punto sa kahabaan ng linya"
from: 5c3ce3ed
---

{{ui:Hatiin}} ay naghahati ng isang edge sa magkakapantay na piraso, na may corner sa bawat hati. Gamitin ang mga corner para mag-snap, para simulan ang mga linya mula roon, o para itulak at hilahin ang mga bahagi ng isang face.

## Hatiin ang isang edge

1. I-click ang {{ui:Hatiin}} sa toolbar, o piliin ang isang edge at i-click ang {{ui:Divide…}} sa {{ui:Impormasyon ng entity}}.
2. Ituro ang edge. Ipinapakita ng mga marka kung saan pupunta ang mga hiwa: kapag nasa gitna ng edge ang pointer, dalawang bahagi ang mabubuo; ilapit ito sa isang dulo para sa mas maraming bahagi.
3. I-click para hatiin ito sa mga bahaging ipinapakita. O mag-type ng numero, gaya ng `5` (o `5s`, o `/5`), at pindutin ang {{key:Enter}}: agad itong hahatiin.

Nananatiling napili ang mga piraso, at isang undo step lang ito. Pinapanatili ng face na kinabibilangan ng edge ang hugis nito at nagkakaroon ng mga bagong corner.

## Hatiin ang arko o bilog

Ituro ang alinmang segment ng arko o bilog: hahatiin ito bilang buo.

- Ang arko o bilog na walang ibang gumagamit ng mga corner nito, at nakahiga nang patag sa face nito, ay **iginuguhit muli na may ganoong bilang ng segment** sa tunay na arko. Mananatili sa kanilang lugar ang mga dulo nito, at nananatili itong isang curve, kaya maipipili pa rin ito sa isang click at mababago ang radius nito sa {{ui:Impormasyon ng entity}}. Ang bilog na may 24 na gilid na hinati sa 8 ay nagiging octagon.
- Ang alinmang ibang curve (ang gilid ng hinilang silindro, curve na iginuhit gamit ang {{ui:Curve}}, arko na may mga linyang nakakabit sa mga corner nito) ay binibigyan ng mga bagong corner sa magkakapantay na haba sa kahabaan nito, at walang gumagalaw.

## Gamit ang mga key ng modeler

Pareho ang tool kapag gamit ang mga key ng modeler (Mga setting › ModelCraft › Keys, o ang istilo ng menu ng Modeler), kung saan nasa menu na {{ui:Mesh}} ito bilang {{ui:I-subdivide ang mga gilid}}.

## Mga dapat malaman

- Ang mga na-type na numero ay mula 2 hanggang 1000; ang paggalaw ng pointer ay hanggang 100.
- Pinapanatili ng curve na iginuhit gamit ang {{ui:Curve}} ang mga punto nito: pagkatapos ng {{ui:I-edit ang mga punto}}, iginuguhit ulit ito mula sa mga iyon at nawawala ang mga bagong corner.

Tingnan din ang [Gumuhit ng face gamit ang linya, rectangle, bilog at arko](topic:draw-faces) at [I-type ang eksaktong sukat sa value box](topic:value-box).
