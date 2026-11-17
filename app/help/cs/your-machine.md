---
title: Čím váš počítač vykresluje
summary: Nastavení › Vykreslování ukazuje grafiku, jádra procesoru a paměť, které tento prohlížeč aplikaci povoluje použít, a úroveň, která určuje, kde začíná vykreslování.
keywords: váš počítač, grafická karta, gpu, webgpu, webgl, procesor, cpu, jádra, vlákna, paměť, ram, sdílená paměť, izolace, stupeň, úroveň, rychlost, pomalý, rychlost vykreslování, notebook
from: 8a0c21c9
---

Otevřete {{ui:Nastavení}} ({{key:Mod+,}}), zůstaňte na záložce této aplikace a přejděte dolů k {{ui:Vykreslování}}. {{ui:Váš počítač}} ukazuje, co prohlížeč aplikaci povoluje použít pro vykreslování. Nic z toho neopouští váš počítač.

| Řádek | Co znamená |
|---|---|
| {{ui:Grafika}} | Grafická karta, kterou prohlížeč hlásí. „WebGPU“ znamená, že zvládne veškerou práci s vykreslováním; „WebGL 2 only“ znamená, že živý pohled a {{ui:Vykreslit obrázek…}} používají tuto cestu (vysoká kvalita s WebGL path tracerem), zatímco vykreslování v pohledu a fronta vykreslování, které vyžadují WebGPU, nejsou nabízeny; softwarová náhrada znamená, že vše běží na procesoru |
| {{ui:Procesor}} | Kolik jader procesoru prohlížeč hlásí |
| {{ui:Paměť}} | Přibližně kolik paměti počítač má, pokud ji prohlížeč uvádí. Některé prohlížeče ji neuvádějí |
| {{ui:Sdílená paměť}} | Zda stránka smí sdílet paměť mezi svými pomocnými vlákny. Je-li zapnuta, každé jádro může pracovat s jednou kopií scény; je-li vypnuta, každé potřebuje vlastní kopii, takže velká scéna se naráz vejde na méně jader |
| {{ui:Rychlý kód procesoru}} | Zda prohlížeč spouští rychlejší kód WebAssembly. Bez něj se použije pomalejší záložní varianta |
| {{ui:Úroveň}} | {{ui:Grafická karta, vysoká}}, {{ui:Grafická karta, základní}} nebo {{ui:Jen procesor}}, s důvodem pod tím |

## Úroveň

Úroveň určuje, kde začíná [živý pohled](topic:live-view) ({{ui:Podle tohoto počítače}}), kolik rozptýlených položek se vykreslí a kolik ploch smí [rozdělovaný povrch](topic:modifiers#subdivision-surface) v pohledu ukazovat, aby notebook s integrovaným grafickým čipem nebo bez jakékoli grafické karty zůstal svižný. Integrovaný grafický čip nebo grafický čip telefonu či paměť 4 GB a méně nikdy nedostane {{ui:Grafická karta, vysoká}}.

:::note
Prohlížeče se liší. Stejný počítač může v jednom prohlížeči ukazovat WebGPU a v jiném „WebGL 2 only“. Na Linuxu zatím většina prohlížečů WebGPU nemá.
:::
