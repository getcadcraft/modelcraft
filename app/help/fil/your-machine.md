---
title: Ano ang ginagamit ng iyong makina sa pag-render
summary: Ipinapakita ng Mga setting › Rendering ang graphics, processor cores at memory na pinapayagan ng browser na ito na gamitin ng app, at ang level na nagtatakda kung saan magsisimula ang rendering.
keywords: ang iyong makina, graphics card, gpu, webgpu, webgl, processor, cpu, cores, threads, memory, ram, shared memory, isolation, tier, level, bilis, mabagal, bilis ng rendering, laptop
from: 8a0c21c9
---

Buksan ang {{ui:Settings}} ({{key:Mod+,}}), manatili sa sarili nitong tab ng app na ito at mag-scroll sa {{ui:Rendering}}. Ipinapakita ng {{ui:Your machine}} ang mga maaaring gamitin ng app para sa rendering ng browser na ito. Walang bahagi nito ang umaalis sa iyong computer.

| Row | Ibig sabihin |
|---|---|
| {{ui:Graphics}} | Ang graphics card na iniuulat ng browser. Ang "WebGPU" ay nangangahulugang kaya nitong gawin ang lahat ng rendering work; ang "WebGL 2 only" ay nangangahulugang ang live view at {{ui:Render a picture…}} ang gumagamit nito (mataas na kalidad gamit ang WebGL path tracer), habang ang rendering sa view at ang render queue, na nangangailangan ng WebGPU, ay hindi inaalok; ang software stand-in ay nangangahulugang sa processor tatakbo ang lahat |
| {{ui:Processor}} | Ilang processor core ang iniuulat ng browser |
| {{ui:Memory}} | Tinatayang dami ng memory ng computer, kapag sinabi ng browser. Ang ilang browser ay hindi ito sinasabi |
| {{ui:Shared memory}} | Kung pinapayagan ng pahina na magbahagi ng memory sa pagitan ng mga worker nito. Kapag naka-on, kayang magtrabaho ng bawat core sa iisang kopya ng eksena; kapag naka-off, kailangan ng bawat isa ng sariling kopya, kaya kasya ang malaking eksena sa mas kaunting core nang sabay-sabay |
| {{ui:Fast processor code}} | Kung pinapatakbo ng browser ang mas mabilis na WebAssembly code. Kapag wala ito, ginagamit ang mas mabagal na fallback |
| {{ui:Level}} | {{ui:Graphics card, high}}, {{ui:Graphics card, basic}} o {{ui:Processor only}}, kasama ang dahilan sa ilalim nito |

## Ang level

Itinatakda ng level kung saan magsisimula ang [live view](topic:live-view) ({{ui:For this computer}}), kung ilang nakakalat na item ang iguguhit nito, at kung ilang face ang maaaring ipakita ng [subdivision surface](topic:modifiers#subdivision-surface) sa view, para manatiling responsive ang laptop na may built-in na graphics chip o walang graphics card. Ang built-in o phone na graphics chip, o 4 GB na memory o mas kaunti, ay hindi kailanman makakakuha ng {{ui:Graphics card, high}}.

:::note
Nag-iiba-iba ang mga browser. Ang parehong computer ay maaaring magpakita ng WebGPU sa isang browser at "WebGL 2 only" sa iba. Sa Linux, karamihan sa mga browser ay wala pang WebGPU.
:::
