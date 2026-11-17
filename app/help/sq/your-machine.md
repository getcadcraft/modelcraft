---
title: Me çfarë rendëron kompjuteri juaj
summary: Cilësimet › Renderimi tregon grafikën, bërthamat e procesorit dhe memorien që ky shfletues e lejon aplikacionin ta përdorë, si dhe nivelin që përcakton ku fillon renderimi.
keywords: kompjuteri juaj, kartë grafike, gpu, webgpu, webgl, procesor, cpu, bërthama, thread-e, memorie, ram, memorie e përbashkët, izolim, nivel, shpejtësi, ngadalë, shpejtësia e renderimit, laptop
from: 8a0c21c9
---

Hap {{ui:Cilësimet}} ({{key:Mod+,}}), qëndro te skeda e vetë këtij aplikacioni dhe lëviz poshtë te {{ui:Renderimi}}. {{ui:Kompjuteri juaj}} liston atë që ky shfletues e lejon aplikacionin të përdorë për renderim. Asgjë nga ajo nuk del nga kompjuteri juaj.

| Rreshti | Çfarë do të thotë |
|---|---|
| {{ui:Grafika}} | Karta grafike që raporton shfletuesi. "WebGPU" do të thotë se mund ta bëjë gjithë punën e renderimit; "WebGL 2 only" do të thotë se pamja e drejtpërdrejtë dhe {{ui:Rendero një foto…}} e përdorin atë (cilësi e lartë me gjurmuesin e rrezeve WebGL), ndërsa renderimi në pamje dhe radha e renderimit, që kërkojnë WebGPU, nuk ofrohen; një zëvendësues softuerik do të thotë që gjithçka ekzekutohet në procesor |
| {{ui:Procesori}} | Sa bërthama procesori raporton shfletuesi |
| {{ui:Memoria}} | Sa memorie ka afërsisht kompjuteri, kur e raporton shfletuesi. Disa shfletues nuk e bëjnë këtë |
| {{ui:Memorie e përbashkët}} | Nëse faqja mund të ndajë memorie mes punëtorëve të saj. Kur është aktive, çdo bërthamë mund të punojë mbi një kopje të së njëjtës skenë; kur është joaktive, secila ka nevojë për kopjen e vet, prandaj një skenë e madhe përshtatet në më pak bërthama njëkohësisht |
| {{ui:Kod i shpejtë procesori}} | Nëse shfletuesi ekzekuton kodin më të shpejtë WebAssembly. Pa të, përdoret një zëvendësim më i ngadaltë |
| {{ui:Niveli}} | {{ui:Kartë grafike, e lartë}}, {{ui:Kartë grafike, bazë}} ose {{ui:Vetëm procesor}}, me arsyen nën të |

## Niveli

Niveli përcakton ku fillon [pamja e drejtpërdrejtë](topic:live-view) ({{ui:Për këtë kompjuter}}), sa elemente të shpërndara vizaton dhe sa faqe mund të shfaqë një [sipërfaqe me nënndarje](topic:modifiers#subdivision-surface) në pamje, që një laptop me çip grafik të integruar ose pa kartë grafike fare të mbetet i përgjegjshëm. Një çip grafik i integruar ose i telefonit, ose 4 GB memorie ose më pak, nuk merr kurrë {{ui:Kartë grafike, e lartë}}.

:::note
Shfletuesit ndryshojnë. I njëjti kompjuter mund të shfaqë WebGPU në një shfletues dhe "WebGL 2 only" në tjetrin. Në Linux, shumica e shfletuesve nuk kanë ende WebGPU.
:::
