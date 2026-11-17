---
title: Hvað þín tölva notar til myndgerðar
summary: Stillingar › Myndgerð sýnir skjákortið, örgjörvakjarna og minni sem vafrinn leyfir forritinu að nota, ásamt stiginu sem ákvarðar hvar myndgerð hefst.
keywords: þín tölva, skjákort, gpu, webgpu, webgl, örgjörvi, cpu, kjarnar, þræðir, minni, ram, sameiginlegt minni, einangrun, þrep, stig, hraði, hægt, myndgerðarhraði, fartölva
from: 8a0c21c9
---

Opnaðu {{ui:Settings}} ({{key:Mod+,}}), vertu áfram á eigin flipa þessa forrits og flettu niður að {{ui:Rendering}}. {{ui:Your machine}} sýnir hvað vafrinn leyfir forritinu að nota við myndgerð. Ekkert af því fer úr tölvunni þinni.

| Röð | Hvað það þýðir |
|---|---|
| {{ui:Graphics}} | Skjákortið sem vafrinn gefur upp. „WebGPU“ merkir að það getur séð um alla myndgerðarvinnuna; „WebGL 2 only“ merkir að lifandi sýnin og {{ui:Render a picture…}} nota það (há gæði með WebGL geislarekjaranum), en myndgerð í sýninni og biðröð myndgerða, sem þurfa WebGPU, er ekki í boði; hermt skjákort merkir að allt keyrir á örgjörvanum |
| {{ui:Processor}} | Hve marga örgjörvakjarna vafrinn gefur upp |
| {{ui:Memory}} | U.þ.b. hve mikið minni tölvan hefur, þegar vafrinn gefur það upp. Sumir vafrar gera það ekki |
| {{ui:Shared memory}} | Hvort síðunni sé heimilt að deila minni milli vinnsluþráa sinna. Þegar kveikt er á því getur hver kjarni unnið á einu afriti af senu; þegar slökkt er á því þarf hver sitt eigið afrit, svo stór sena passar á færri kjarna í einu |
| {{ui:Fast processor code}} | Hvort vafrinn keyrir hraðari WebAssembly-kóðann. Án þess er hægari varakostur notaður |
| {{ui:Level}} | {{ui:Graphics card, high}}, {{ui:Graphics card, basic}} eða {{ui:Processor only}}, með ástæðunni undir |

## Stigið

Stigið ákvarðar hvar [lifandi sýn](topic:live-view) byrjar ({{ui:For this computer}}), hversu marga dreifða hluti hún teiknar og hversu marga fleti [undirskipt yfirborð](topic:modifiers#subdivision-surface) má sýna í sýninni, svo að fartölva með innbyggðum skjákubbi eða án skjákorts svari áfram snöggt. Innbyggður skjákubbur eða skjákubbur í síma, eða 4 GB minni eða minna, fær aldrei {{ui:Graphics card, high}}.

:::note
Vafrar eru ólíkir. Sama tölvan getur sýnt WebGPU í einum vafra og „WebGL 2 only“ í öðrum. Á Linux hafa flestir vafrar ekki WebGPU enn.
:::
