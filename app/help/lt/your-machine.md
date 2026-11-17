---
title: Kuo jūsų kompiuteris atvaizduoja
summary: Parametrai › Atvaizdavimas rodo grafiką, procesoriaus branduolius ir atmintį, kuriuos ši naršyklė leidžia programai naudoti, ir lygį, nuo kurio prasideda atvaizdavimas.
keywords: jūsų kompiuteris, grafikos plokštė, gpu, webgpu, webgl, procesorius, cpu, branduoliai, gijos, atmintis, ram, bendra atmintis, izoliacija, pakopa, lygis, greitis, lėtas, atvaizdavimo greitis, nešiojamas kompiuteris
from: 8a0c21c9
---

Atidarykite {{ui:Parametrai}} ({{key:Mod+,}}), likite šios programos skirtuke ir slinkite iki {{ui:Atvaizdavimas}}. {{ui:Jūsų kompiuteris}} rodo, ką ši naršyklė leidžia programai naudoti atvaizdavimui. Nieko iš to neišsiunčiama iš jūsų kompiuterio.

| Eilutė | Ką ji reiškia |
|---|---|
| {{ui:Grafika}} | Naršyklės nurodoma grafikos plokštė. „WebGPU“ reiškia, kad ji gali atlikti visą atvaizdavimo darbą; „WebGL 2 only“ reiškia, kad tiesioginį vaizdą ir {{ui:Atvaizduoti paveikslėlį…}} naudoja ją (aukšta kokybė su WebGL kelio sekimo atvaizdavikliu), o atvaizdavimas vaizde ir atvaizdavimo eilėje, kuriems reikia WebGPU, nesiūlomas; programinis pakaitalas reiškia, kad viskas vykdoma procesoriuje |
| {{ui:Procesorius}} | Kiek procesoriaus branduolių nurodo naršyklė |
| {{ui:Atmintis}} | Maždaug kiek atminties turi kompiuteris, kai naršyklė tai nurodo. Kai kurios naršyklės to nenurodo |
| {{ui:Bendra atmintis}} | Ar puslapis gali bendrinti atmintį tarp savo darbinių procesų. Kai įjungta, kiekvienas branduolys gali dirbti su viena scenos kopija; kai išjungta, kiekvienam reikia savos kopijos, todėl didelė scena tuo pačiu metu telpa į mažiau branduolių |
| {{ui:Greitas procesoriaus kodas}} | Ar naršyklė vykdo greitesnį WebAssembly kodą. Be jo naudojamas lėtesnis atsarginis variantas |
| {{ui:Lygis}} | {{ui:Grafikos plokštė, aukštas}}, {{ui:Grafikos plokštė, pagrindinis}} arba {{ui:Tik procesorius}}, o po jų – priežastis |

## Lygis

Lygis nustato, nuo kurio [tiesioginio vaizdo](topic:live-view) prasideda vaizdas ({{ui:Šiam kompiuteriui}}), kiek išbarstytų elementų jis piešia ir kiek paviršių [padalijamasis paviršius](topic:modifiers#subdivision-surface) gali rodyti vaizde, kad nešiojamasis kompiuteris su integruotu grafikos lustu ar be grafikos plokštės išliktų greitas. Integruotas ar telefono grafikos lustas arba 4 GB atminties ar mažiau niekada negauna {{ui:Grafikos plokštė, aukštas}}.

:::note
Naršyklės skiriasi. Tas pats kompiuteris vienoje naršyklėje gali rodyti WebGPU, o kitoje – „WebGL 2 only“. Linux sistemoje dauguma naršyklių dar neturi WebGPU.
:::
