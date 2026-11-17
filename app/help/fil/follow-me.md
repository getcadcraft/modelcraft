---
title: "Follow me: i-sweep ang face sa kahabaan ng path"
summary: "Gumawa ng tubo, cable, handrail, molding at singsing sa pamamagitan ng pag-sweep ng face sa kahabaan ng mga edge, arko o curve."
keywords: "follow me, sweep, path, tubo, cable, tube, handrail, molding, moulding, gutter, singsing, torus, lathe, i-extrude sa kahabaan"
from: ec7b3839
---

Inililipat ng {{ui:Follow me}} ang face sa kahabaan ng path at binubuo ang solid na dinadaanan nito. Pinapanatili ng face ang hugis nito at nananatiling patayo sa path, at sa bawat corner ng path, nagkakatagpo ang mga piraso sa malinis na mitre.

## Gumawa ng cable

1. Gumuhit ng path: isang {{ui:Curve}} na dumaraan sa mga punto na dinadaanan ng cable (maaari itong tumaas at bumaba), o mga {{ui:Linya}} at {{ui:Arko}} na magkakabit sa dulo-sa-dulo.
2. Sa simula ng path, iguhit ang seksyon ng cable: isang maliit na {{ui:Bilog}} na nakahalang sa path. Simulan ang bilog sa endpoint ng path at i-ikot ito para humarap sa kahabaan ng path; o iguhit ito sa face na tumatawid sa path doon.
3. Piliin ang path (isang click ang pumipili ng buong curve o arko; ang {{key:Ctrl}}+click ay nagdaragdag ng mas maraming edge).
4. I-click ang {{ui:Follow me}} sa grupong {{ui:Modify}}, pagkatapos i-click ang bilog.

Ang tubo ay sarado na solid, na may makinis (malambot) na gilid.

## Nang walang munang pagpili ng path

I-click ang {{ui:Follow me}}, i-click ang face, pagkatapos i-click ang alinmang edge ng path. Ang path ay ang kadena ng mga edge sa pamamagitan ng edge na iyon, hanggang sa puntong nagtatagpo ang tatlo o higit pang edge.

## Dapat malaman

- **Sarado na path** (bilog, sarado na curve, balangkas ng rectangle) ay gumagawa ng singsing: nauubos ang face at nagsasara ang singsing sa sarili nito. Gumuhit ng bilog sa lupa para sa path at maliit na bilog na nakatayo sa ibabaw nito para sa donut.
- **Wala sa path:** hindi kailangang humipo ang face sa path. Ang profile na iginuhit sa tabi ng path ay dumadausdos sa tabi nito, gaya ng molding sa itaas ng pader.
- **Hindi dapat magsanga ang path**, at dapat itong isang magkakabit na kadena. Sinasabi ito ng ModelCraft kapag hindi.
- **Ang face na nakahiga sa kahabaan ng path** (sa parehong eroplano ng unang edge ng path) ay hindi maaaring i-sweep: ikutan ito para tumawid sa path.
- Isang undo step ito.
