---
title: Čime tvoj računar renderuje
summary: Podešavanja › Renderovanje prikazuje grafiku, jezgra procesora i memoriju koje ovaj pregledač dozvoljava aplikaciji, kao i nivo koji određuje gde renderovanje počinje.
keywords: tvoj računar, grafička kartica, gpu, webgpu, webgl, procesor, cpu, jezgra, niti, memorija, ram, deljena memorija, izolacija, nivo, brzina, sporo, brzina renderovanja, laptop
from: 8a0c21c9
---

Otvori {{ui:Settings}} ({{key:Mod+,}}), ostani na kartici ove aplikacije i pomeri se do {{ui:Rendering}}. {{ui:Your machine}} prikazuje šta ovaj pregledač dozvoljava aplikaciji za renderovanje. Ništa od toga ne napušta tvoj računar.

| Red | Šta znači |
|---|---|
| {{ui:Graphics}} | Grafička kartica koju pregledač prijavljuje. „WebGPU“ znači da može da obavi sav posao renderovanja; „WebGL 2 only“ znači da živi prikaz i {{ui:Render a picture…}} koriste nju (visok kvalitet uz WebGL path tracer), dok renderovanje u prikazu i red za renderovanje, koji zahtevaju WebGPU, nisu dostupni; softverska zamena znači da se sve izvršava na procesoru |
| {{ui:Processor}} | Koliko jezgara procesora pregledač prijavljuje |
| {{ui:Memory}} | Približno koliko memorije ima računar, kad to pregledač kaže. Neki pregledači to ne prijavljuju |
| {{ui:Shared memory}} | Da li stranica sme da deli memoriju između svojih radnika. Uključeno: svako jezgro može da radi na jednoj kopiji scene; isključeno: svakom je potrebna sopstvena kopija, pa velika scena stane na manji broj jezgara istovremeno |
| {{ui:Fast processor code}} | Da li pregledač izvršava brži WebAssembly kod. Bez toga koristi se sporija zamena |
| {{ui:Level}} | {{ui:Graphics card, high}}, {{ui:Graphics card, basic}} ili {{ui:Processor only}}, sa razlogom ispod |

## Nivo

Nivo određuje gde počinje [živi prikaz](topic:live-view) ({{ui:For this computer}}), koliko rasutih stavki crta i koliko lica može da prikaže [površina podele](topic:modifiers#subdivision-surface) u prikazu, tako da laptop sa ugrađenim grafičkim čipom ili bez grafičke kartice ostane brz. Ugrađeni ili telefonski grafički čip, ili 4 GB memorije ili manje, nikad ne dobija {{ui:Graphics card, high}}.

:::note
Pregledači se razlikuju. Isti računar može da prikaže WebGPU u jednom pregledaču, a „WebGL 2 only“ u drugom. Na Linuxu većina pregledača još nema WebGPU.
:::
