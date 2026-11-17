---
title: Hva maskinen din renderer med
summary: Innstillinger › Rendering viser grafikken, prosessorkjernene og minnet som denne nettleseren lar appen bruke, og nivået som bestemmer hvor renderingen starter.
keywords: maskinen din, grafikkort, gpu, webgpu, webgl, prosessor, cpu, kjerner, tråder, minne, ram, delt minne, isolasjon, nivå, hastighet, treg, renderingshastighet, bærbar
from: 8a0c21c9
---

Åpne {{ui:Innstillinger}} ({{key:Mod+,}}), bli på appens egen fane og rull ned til {{ui:Rendering}}. {{ui:Maskinen din}} viser hva nettleseren lar appen bruke til rendering. Ingenting der forlater datamaskinen din.

| Rad | Hva det betyr |
|---|---|
| {{ui:Grafikk}} | Grafikkortet som nettleseren rapporterer. «WebGPU» betyr at det kan gjøre all renderingsjobben; «WebGL 2 only» betyr at live-visningen og {{ui:Render et bilde…}} bruker det (høy kvalitet med WebGL-path tracer), mens rendering i visningen og renderingskøen, som krever WebGPU, ikke tilbys; en programvarebasert erstatning betyr at alt kjøres på prosessoren |
| {{ui:Prosessor}} | Hvor mange prosessorkjerner nettleseren rapporterer |
| {{ui:Minne}} | Omtrent hvor mye minne datamaskinen har, når nettleseren oppgir det. Noen nettlesere gjør ikke det |
| {{ui:Delt minne}} | Om siden kan dele minne mellom arbeiderne sine. Når det er på, kan hver kjerne jobbe på én kopi av en scene; når det er av, trenger hver sin egen kopi, så en stor scene får plass på færre kjerner samtidig |
| {{ui:Rask prosessorkode}} | Om nettleseren kjører den raskere WebAssembly-koden. Uten den brukes en tregere reserveløsning |
| {{ui:Nivå}} | {{ui:Grafikkort, høyt}}, {{ui:Grafikkort, enkelt}} eller {{ui:Bare prosessor}}, med årsaken under |

## Nivået

Nivået bestemmer hvor [live-visningen](topic:live-view) starter ({{ui:For denne datamaskinen}}), hvor mange spredte elementer den tegner, og hvor mange flater en [underdelingsoverflate](topic:modifiers#subdivision-surface) kan vise i visningen, slik at en bærbar med innebygd grafikkbrikke, eller uten grafikkort i det hele tatt, holder seg responsiv. En innebygd eller mobil grafikkbrikke, eller 4 GB minne eller mindre, får aldri {{ui:Grafikkort, høyt}}.

:::note
Nettlesere er ulike. Samme datamaskin kan vise WebGPU i én nettleser og «WebGL 2 only» i en annen. På Linux har de fleste nettlesere ikke WebGPU ennå.
:::
