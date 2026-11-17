---
title: Ar ko jūsu dators renderē
summary: Iestatījumi › Renderēšana parāda grafiku, procesora kodolus un atmiņu, ko šī pārlūkprogramma ļauj lietotnei izmantot, un līmeni, kas nosaka, kur sākas renderēšana.
keywords: jūsu dators, grafikas karte, gpu, webgpu, webgl, procesors, cpu, kodoli, pavedieni, atmiņa, ram, koplietotā atmiņa, izolācija, pakāpe, līmenis, ātrums, lēns, renderēšanas ātrums, portatīvais dators
from: 8a0c21c9
---

Atveriet {{ui:Settings}} ({{key:Mod+,}}), paliekiet šīs lietotnes cilnē un ritiniet līdz {{ui:Rendering}}. {{ui:Your machine}} uzskaita, ko šī pārlūkprogramma ļauj lietotnei izmantot renderēšanai. Nekas no tā neatstāj jūsu datoru.

| Rinda | Ko tā nozīmē |
|---|---|
| {{ui:Graphics}} | Pārlūkprogrammas norādītā grafikas karte. "WebGPU" nozīmē, ka tā var veikt visu renderēšanas darbu; "WebGL 2 only" nozīmē, ka tiešraides skatu un {{ui:Render a picture…}} izmanto to (augsta kvalitāte ar WebGL ceļu izsekotāju), bet renderēšana skatā un renderēšanas rindā, kam nepieciešams WebGPU, nav pieejama; programmatūras aizstājējs nozīmē, ka viss darbojas procesorā |
| {{ui:Processor}} | Cik procesora kodolus pārlūkprogramma norāda |
| {{ui:Memory}} | Aptuveni cik atmiņas ir datorā, kad pārlūkprogramma to norāda. Dažas pārlūkprogrammas to nedara |
| {{ui:Shared memory}} | Vai lapa drīkst koplietot atmiņu starp saviem darbiniekiem. Ja ieslēgta, katrs kodols var strādāt ar vienu ainas kopiju; ja izslēgta, katram vajag savu kopiju, tāpēc liela aina vienlaikus iederas uz mazāka kodolu skaita |
| {{ui:Fast processor code}} | Vai pārlūkprogramma izpilda ātrāko WebAssembly kodu. Bez tā tiek izmantota lēnāka rezerves versija |
| {{ui:Level}} | {{ui:Graphics card, high}}, {{ui:Graphics card, basic}} vai {{ui:Processor only}}, zem tā ir iemesls |

## Līmenis

Līmenis nosaka, kur [tiešraides skats](topic:live-view) sākas ({{ui:For this computer}}), cik izkaisītu vienumu tas zīmē un cik virsmu [apakšdalītā virsma](topic:modifiers#subdivision-surface) var rādīt skatā, lai klēpjdators ar iebūvētu grafikas mikroshēmu vai bez grafikas kartes vispār paliktu atsaucīgs. Iebūvēta vai tālruņa grafikas mikroshēma vai 4 GB atmiņas vai mazāk nekad nedod {{ui:Graphics card, high}}.

:::note
Pārlūkprogrammas atšķiras. Tas pats dators var rādīt WebGPU vienā pārlūkprogrammā un "WebGL 2 only" citā. Linux lielākajā daļā pārlūkprogrammu WebGPU vēl nav.
:::
