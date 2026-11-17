---
title: Cu ce randează acest calculator
summary: Setări › Randare arată grafica, nucleele de procesor și memoria pe care browserul le permite aplicației, precum și nivelul care stabilește de unde începe randarea.
keywords: acest calculator, placă grafică, gpu, webgpu, webgl, procesor, cpu, nuclee, fire de execuție, memorie, ram, memorie partajată, izolare, treaptă, nivel, viteză, lent, viteza de randare, laptop
from: 8a0c21c9
---

Deschideți {{ui:Setări}} ({{key:Mod+,}}), rămâneți pe fila acestei aplicații și derulați până la {{ui:Randare}}. {{ui:Acest calculator}} listează ce permite browserul aplicației să folosească pentru randare. Nimic din ceea ce se afișează aici nu părăsește calculatorul.

| Rând | Ce înseamnă |
|---|---|
| {{ui:Grafică}} | Placa grafică raportată de browser. „WebGPU” înseamnă că poate face toată munca de randare; „Doar WebGL 2” înseamnă că vizualizarea în timp real și {{ui:Randare imagine…}} o folosesc (calitate ridicată, cu trasorul de cale WebGL), dar randarea în vizualizare și coada de randare, care au nevoie de WebGPU, nu sunt oferite; o înlocuire software înseamnă că totul rulează pe procesor |
| {{ui:Procesor}} | Câte nuclee de procesor raportează browserul |
| {{ui:Memorie}} | Cam câtă memorie are calculatorul, atunci când browserul o raportează. Unele browsere nu o fac |
| {{ui:Memorie partajată}} | Dacă pagina poate partaja memorie între procesele sale de lucru (workers). Dacă este activată, fiecare nucleu poate lucra pe o singură copie a scenei; dacă este dezactivată, fiecare are nevoie de propria copie, deci o scenă mare încape pe mai puține nuclee simultan |
| {{ui:Cod rapid pentru procesor}} | Dacă browserul rulează codul WebAssembly mai rapid. Fără el se folosește o variantă de rezervă, mai lentă |
| {{ui:Nivel}} | {{ui:Placă grafică, nivel ridicat}}, {{ui:Placă grafică, nivel de bază}} sau {{ui:Doar procesor}}, cu motivul afișat dedesubt |

## Nivelul

Nivelul stabilește de unde pornește [vizualizarea în timp real](topic:live-view) ({{ui:Pentru acest calculator}}), câte elemente împrăștiate desenează și câte fețe poate afișa o [suprafață de subdiviziune](topic:modifiers#subdivision-surface) în vizualizare, astfel încât un laptop cu un cip grafic integrat sau fără placă grafică deloc să rămână receptiv. Un cip grafic integrat sau de telefon ori 4 GB de memorie sau mai puțin nu primesc niciodată {{ui:Placă grafică, nivel ridicat}}.

:::note
Browserele diferă. Același calculator poate afișa WebGPU într-un browser și „Doar WebGL 2” într-altul. Pe Linux, majoritatea browserelor nu au încă WebGPU.
:::
