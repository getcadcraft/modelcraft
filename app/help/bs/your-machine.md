---
title: Čime vaš računar renderuje
summary: Postavke › Renderovanje prikazuje grafiku, jezgra procesora i memoriju koje ovaj pretraživač dopušta aplikaciji da koristi, i nivo koji određuje gdje renderovanje počinje.
keywords: vaš računar, grafička kartica, gpu, webgpu, webgl, procesor, cpu, jezgra, niti, memorija, ram, zajednička memorija, izolacija, nivo, nivo, brzina, spor, brzina renderovanja, laptop
from: 8a0c21c9
---

Otvori {{ui:Postavke}} ({{key:Mod+,}}), ostani na kartici ove aplikacije i pomjeri se do {{ui:Renderovanje}}. {{ui:Vaš računar}} prikazuje šta ovaj pretraživač dopušta aplikaciji da koristi za renderovanje. Ništa od toga ne napušta vaš računar.

| Red | Šta to znači |
|---|---|
| {{ui:Graphics}} | Grafička kartica koju pretraživač prijavljuje. „WebGPU“ znači da može obaviti sav posao renderovanja; „WebGL 2 only“ znači da živi prikaz i {{ui:Renderuj sliku…}} koriste nju (visok kvalitet uz WebGL path tracer), dok renderovanje u prikazu i red za renderovanje, koji zahtijevaju WebGPU, nisu ponuđeni; softverska zamjena znači da se sve izvršava na procesoru |
| {{ui:Processor}} | Koliko jezgara procesora pretraživač prijavljuje |
| {{ui:Memory}} | Otprilike koliko memorije ima računar, kada to pretraživač kaže. Neki pretraživači to ne čine |
| {{ui:Shared memory}} | Da li stranica smije dijeliti memoriju između svojih radnika. Uključeno, svako jezgro može raditi na jednoj kopiji scene; isključeno, svako treba svoju kopiju, pa velika scena stane na manje jezgara istovremeno |
| {{ui:Fast processor code}} | Da li pretraživač izvršava brži WebAssembly kod. Bez toga koristi se sporija zamjena |
| {{ui:Level}} | {{ui:Grafička kartica, visoki}}, {{ui:Grafička kartica, osnovni}} ili {{ui:Samo procesor}}, s razlogom ispod |

## Nivo

Nivo određuje gdje [živi prikaz](topic:live-view) počinje ({{ui:Za ovaj računar}}), koliko raštrkanih stavki crta i koliko [podjelnih površina](topic:modifiers#subdivision-surface) smije prikazati u prikazu, tako da laptop s ugrađenim grafičkim čipom ili bez grafičke kartice ostane responzivan. Ugrađeni ili telefonski grafički čip, ili 4 GB memorije ili manje, nikada ne dobija {{ui:Grafička kartica, visoki}}.

:::note
Pretraživači se razlikuju. Isti računar može prikazati WebGPU u jednom pretraživaču, a „WebGL 2 only“ u drugom. Na Linuxu većina pretraživača još nema WebGPU.
:::
