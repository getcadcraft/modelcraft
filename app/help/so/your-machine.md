---
title: Waxa uu kumbiyuutarkaagu rendar ku sameeyo
summary: Dejinta › Rendar wuxuu muujinayaa garaafyada, core-yada processor-ka iyo xusuusta ay browserkan u ogolaanayso app-ka inuu isticmaalo, iyo heerka oo go'aaminaya meesha rendarku ka bilaabmo.
keywords: kumbiyuutarkaaga, kaarka garaafyada, gpu, webgpu, webgl, processor, cpu, cores, threads, xusuusta, ram, xusuus la wadaago, go'doon, darajo, heerka, xawaaraha, gaabis, xawaaraha rendarka, laptop
from: 8a0c21c9
---

Fur {{ui:Settings}} ({{key:Mod+,}}), ku sii jir tab-ka app-kan, oo hoos u jiid ilaa {{ui:Rendering}}. {{ui:Your machine}} wuxuu soo bandhigayaa waxa browserkan u ogolaanayo app-ka inuu rendarka isticmaalo. Waxba ka mid ah ma bannaanaado kombiyuutarkaaga.

| Safka | Macnaheeda |
|---|---|
| {{ui:Graphics}} | Kaarka garaafyada ee browserku sheego. "WebGPU" waxa uu macnaheedu yahay inuu qaban karo shaqada rendarka oo dhan; "WebGL 2 only" waxa uu macnaheedu yahay muuqaalka toosan iyo {{ui:Render a picture…}} ayaa isticmaala (tayo sare oo leh WebGL path tracer), laakiin rendarka muuqaalka iyo safka rendarka, oo u baahan WebGPU, lama bixiyo; software stand-in waxa uu macnaheedu yahay wax walba processor-ka ayaa socda |
| {{ui:Processor}} | Inta core ee processor-ka browserku sheego |
| {{ui:Memory}} | Qiyaas ahaan inta xusuus ee kombiyuutarku leeyahay, marka browserku sheego. Browserrada qaarkood ma sheegaan |
| {{ui:Shared memory}} | Haddii bogga la ogolyahay inuu xusuus la wadaago workers-keeda. Marka ON, core kasta wuxuu ka shaqayn karaa hal nuqul oo ka mid ah scene-ka; marka OFF, mid kasta nuqul gaar ah ayuu u baahan yahay, sidaas darteed scene weyn wuxuu ku habboon yahay core yar oo isla waqtiga ah |
| {{ui:Fast processor code}} | Haddii browserku socodsiiyo code-ka degdega ah ee WebAssembly. Haddii aanu jirin, waxa la isticmaalaa fallback gaabis ah |
| {{ui:Level}} | {{ui:Graphics card, high}}, {{ui:Graphics card, basic}} ama {{ui:Processor only}}, iyo sababta hoosteeda |

## Heerka

Heerku wuxuu go'aaminayaa meesha [live view](topic:live-view) ka bilaabanto ({{ui:For this computer}}), inta shay kala firdhsan ee ay muujiso, iyo inta wejiga ee [subdivision surface](topic:modifiers#subdivision-surface) ay ku muujin karto muuqaalka, si kombiyuutar leh chip garaafyo oo dhex ku jira ama aan kaarka garaafyo lahayn uu u jawaabo degdeg. Chip garaafyo oo dhex ku jira ama telefoon, ama xusuus 4 GB ama ka yar, waligood ma helo {{ui:Graphics card, high}}.

:::note
Browserrada way kala duwan yihiin. Isla kombiyuutarka wuxuu muuqan karaa WebGPU browser hal ah, iyo "WebGL 2 only" browser kale. Linux inta badan browserrada weli ma leh WebGPU.
:::
