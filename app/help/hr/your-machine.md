---
title: Čime vaše računalo renderira
summary: Postavke › Renderiranje prikazuje grafiku, jezgre procesora i memoriju koje ovaj preglednik dopušta aplikaciji, te razinu koja određuje gdje renderiranje počinje.
keywords: vaše računalo, grafička kartica, gpu, webgpu, webgl, procesor, cpu, jezgre, dretve, memorija, ram, dijeljena memorija, izolacija, razina, razina, brzina, sporo, brzina renderiranja, prijenosno računalo
from: 8a0c21c9
---

Otvorite {{ui:Postavke}} ({{key:Mod+,}}), ostanite na kartici ove aplikacije i pomaknite se do {{ui:Renderiranje}}. {{ui:Vaše računalo}} prikazuje što ovaj preglednik dopušta aplikaciji za renderiranje. Ništa od toga ne napušta vaše računalo.

| Redak | Što znači |
|---|---|
| {{ui:Grafika}} | Grafička kartica koju preglednik prijavljuje. „WebGPU“ znači da može obaviti sav posao renderiranja; „WebGL 2 only“ znači da prikaz uživo i {{ui:Renderiraj sliku…}} koriste nju (visoka kvaliteta uz WebGL path tracer), dok renderiranje u prikazu i red za renderiranje, koji zahtijevaju WebGPU, nisu ponuđeni; softverska zamjena znači da sve radi procesor |
| {{ui:Procesor}} | Koliko jezgri procesora preglednik prijavljuje |
| {{ui:Memorija}} | Otprilike koliko memorije računalo ima, kada to preglednik navede. Neki preglednici to ne navode |
| {{ui:Dijeljena memorija}} | Smije li stranica dijeliti memoriju među svojim radnicima. Uključeno, svaka jezgra može raditi na jednoj kopiji scene; isključeno, svaka treba vlastitu kopiju, pa se velika scena stane na manje jezgri istodobno |
| {{ui:Brzi kod procesora}} | Pokreće li preglednik brži WebAssembly kod. Bez toga se koristi sporija zamjenska verzija |
| {{ui:Razina}} | {{ui:Grafička kartica, visoka}}, {{ui:Grafička kartica, osnovna}} ili {{ui:Samo procesor}}, s razlogom ispod |

## Razina

Razina određuje odakle počinje [prikaz uživo](topic:live-view) ({{ui:Za ovo računalo}}), koliko raspršenih stavki crta i koliko ploha [podjele površine](topic:modifiers#subdivision-surface) smije prikazati u prikazu, kako bi prijenosno računalo s ugrađenim grafičkim čipom ili bez grafičke kartice ostalo responzivno. Ugrađeni grafički čip ili grafički čip telefona, odnosno 4 GB memorije ili manje, nikada ne dobivaju {{ui:Grafička kartica, visoka}}.

:::note
Preglednici se razlikuju. Isto računalo može prikazati WebGPU u jednom pregledniku, a „WebGL 2 only“ u drugom. Na Linuxu većina preglednika još nema WebGPU.
:::
