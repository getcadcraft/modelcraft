---
title: Čím váš počítač vykresľuje
summary: Nastavenia › Vykresľovanie zobrazuje grafiku, jadrá procesora a pamäť, ktoré môže aplikácia v tomto prehliadači použiť, a úroveň, ktorá určuje, kde vykresľovanie začína.
keywords: váš počítač, grafická karta, gpu, webgpu, webgl, procesor, cpu, jadrá, vlákna, pamäť, ram, zdieľaná pamäť, izolácia, úroveň, rýchlosť, pomalý, rýchlosť vykresľovania, notebook
from: 8a0c21c9
---

Otvorte {{ui:Nastavenia}} ({{key:Mod+,}}), zostaňte na karte tejto aplikácie a posuňte sa na {{ui:Vykresľovanie}}. {{ui:Váš počítač}} zobrazuje, čo môže aplikácia na vykresľovanie v tomto prehliadači použiť. Nič z toho neopúšťa váš počítač.

| Riadok | Čo to znamená |
|---|---|
| {{ui:Grafika}} | Grafická karta, ktorú prehliadač hlási. "WebGPU" znamená, že zvláda celú prácu s vykresľovaním; "WebGL 2 only" znamená, že [živý pohľad](topic:live-view) a {{ui:Vykresliť obrázok…}} ju používajú (vysoká kvalita s WebGL path tracerom), kým vykresľovanie v pohľade a fronta vykreslenia, ktoré vyžadujú WebGPU, sa neponúkajú; softvérová náhrada znamená, že všetko beží na procesore |
| {{ui:Procesor}} | Koľko jadier procesora prehliadač hlási |
| {{ui:Pamäť}} | Približne koľko pamäte má počítač, keď to prehliadač oznámi. Niektoré prehliadače to neuvádzajú |
| {{ui:Zdieľaná pamäť}} | Či môže stránka zdieľať pamäť medzi svojimi workermi. Ak je zapnutá, každé jadro môže pracovať na jednej kópii scény; ak je vypnutá, každé jadro potrebuje vlastnú kópiu, takže veľká scéna sa naraz zmestí na menej jadier |
| {{ui:Rýchly kód procesora}} | Či prehliadač spúšťa rýchlejší kód WebAssembly. Bez neho sa použije pomalšia záložná verzia |
| {{ui:Úroveň}} | {{ui:Grafická karta, vysoká}}, {{ui:Grafická karta, základná}} alebo {{ui:Iba procesor}}, s dôvodom pod ním |

## Úroveň

Úroveň určuje, kde sa [živý pohľad](topic:live-view) začína ({{ui:Pre tento počítač}}), koľko rozptýlených položiek kreslí a koľko plôch môže [povrch so subdivíziou](topic:modifiers#subdivision-surface) zobraziť v pohľade, aby notebook s vstavaným grafickým čipom alebo bez grafickej karty zostal svižný. Vstavaný alebo mobilný grafický čip alebo 4 GB pamäte či menej nikdy nedostane {{ui:Grafická karta, vysoká}}.

:::note
Prehliadače sa líšia. Ten istý počítač môže v jednom prehliadači zobrazovať WebGPU a v inom "WebGL 2 only". V Linuxe väčšina prehliadačov WebGPU zatiaľ nemá.
:::
