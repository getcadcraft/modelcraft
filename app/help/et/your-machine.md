---
title: Millega sinu masin renderdab
summary: Sätted › Renderdamine näitab graafikat, protsessori tuumi ja mälu, mida see brauser rakendusele lubab, ning taset, mis määrab, kust renderdamine algab.
keywords: sinu masin, graafikakaart, gpu, webgpu, webgl, protsessor, cpu, tuumad, lõimed, mälu, ram, jagatud mälu, isolatsioon, aste, tase, kiirus, aeglane, renderdamise kiirus, sülearvuti
from: 8a0c21c9
---

Ava {{ui:Sätted}} ({{key:Mod+,}}), jää selle rakenduse enda sakile ja keri jaotiseni {{ui:Renderdamine}}. {{ui:Sinu masin}} loetleb, mida see brauser lubab rakendusel renderdamiseks kasutada. Sellest ei lahku midagi sinu arvutist.

| Rida | Mida see tähendab |
|---|---|
| {{ui:Graafika}} | Graafikakaart, mille brauser teatab. „WebGPU“ tähendab, et see suudab teha kogu renderdamistöö; „WebGL 2 only“ tähendab, et elavvaadet ja {{ui:Renderda pilt…}} kasutavad seda (kõrge kvaliteet WebGL-i teejälgijaga), kuid renderdamist vaates ja renderdusjärjekorda, mis vajavad WebGPU-d, ei pakuta; tarkvaraline asendaja tähendab, et kõik töötab protsessoril |
| {{ui:Protsessor}} | Mitu protsessori tuuma brauser teatab |
| {{ui:Mälu}} | Umbes kui palju mälu arvutil on, kui brauser seda ütleb. Mõned brauserid seda ei ütle |
| {{ui:Jagatud mälu}} | Kas leht tohib oma töölistega mälu jagada. Kui see on sees, saab iga tuum töötada ühe stseeni koopiaga; kui see on väljas, vajab igaüks oma koopiat, nii et suur stseen mahub korraga vähematele tuumadele |
| {{ui:Kiire protsessorikood}} | Kas brauser käivitab kiirema WebAssembly-koodi. Ilma selleta kasutatakse aeglasemat varukoodi |
| {{ui:Tase}} | {{ui:Graafikakaart, kõrge}}, {{ui:Graafikakaart, lihtne}} või {{ui:Ainult protsessor}}, koos põhjusega all |

## Tase

Tase määrab, kust [elavvaade](topic:live-view) algab ({{ui:Selle arvuti jaoks}}), mitu hajutatud eset see joonistab ja mitu tahku [alamjaotuspind](topic:modifiers#subdivision-surface) vaates tohib näidata, nii et sisseehitatud graafikakiibiga või üldse graafikakaardita sülearvuti jääks reageerivaks. Sisseehitatud või telefoni graafikakiip ning 4 GB või vähem mälu ei saa kunagi taset {{ui:Graafikakaart, kõrge}}.

:::note
Brauserid erinevad. Sama arvuti võib ühes brauseris näidata WebGPU-d ja teises „WebGL 2 only“. Linuxis pole enamikul brauseritest WebGPU-d veel.
:::
