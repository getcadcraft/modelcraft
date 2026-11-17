---
title: Zgjidhni cili program vizaton foton
summary: Zgjedhja e Motorit në dialogun Rendero: motorët tanë, programe të tjera në CadCraft Studio, dhe çfarë bën uebi në vend të tyre.
keywords: renderim, motor, renderues, motor renderimi, plug-in, plugin, studio, program i jashtëm, vizatuar nga, radhë, motor shtojce
from: be4b056a
---

{{ui:Rendero një foto…}} ka një zgjedhje **Motor** mbi Mënyrën. Dy motorët tanë janë gjithmonë aty dhe punojnë kudo; shtojcat mund të shtojnë të tjerë, dhe në CadCraft Studio lista përmban edhe programet që e marrin skenën përsipër.

| Motori | Çfarë bën | Ku |
|---|---|---|
| I integruar: Shpejt | Fotoja e shpejtë: dritë ditore, hije të buta, pamje xhami dhe metali, në sekonda | Shfletuesi dhe Studio |
| I integruar: Gjurmues rrezesh | Drita që kthehet mes sipërfaqeve, në kartën tuaj grafike ose procesorin, radha e renderimit dhe kompjuterët e tjerë në rrjetin tuaj | Shfletuesi dhe Studio |
| Motori i një shtojce | Vizaton dhe e kthen foton: shihni [Vizato foton me një program tjetër](topic:render-other-program) | Shfletuesi (një motor i shkruar në JavaScript) ose Studio (një motor që ekzekuton një program) |
| Një program që e merr skenën përsipër | Studio e vendos skenën në dosjen e vet dhe e mban të përputhur | Studio |
| Hap në … | Ruan skenën dhe e hap në një program; asgjë nuk kthehet: shihni [Hap skenën në një program tjetër](topic:render-open-in) | Uebi ruan skedarin |

## Si sillet zgjedhja

- Zgjedhja e Shpejt ose e Gjurmuesit të rrezeve e ndryshon Mënyrën me të, dhe anasjelltas. Asgjë tjetër në dialog nuk ndryshon për ata që nuk përdorin kurrë një motor tjetër.
- Një motor që nuk është i disponueshëm mbetet në listë me arsyen ("nuk u gjet", "kërkon një version më të ri"); nuk mund ta zgjidhni. Në shfletues një motor që punon vetëm në Studio shfaq "ruan një skedar": {{ui:Rendero një foto…}} atëherë ruan skenën dhe cilësimet e saj në një skedar që e merrni te ai program.
- Zgjedhja ruhet me cilësimet e renderimit të skedarit, dhe motori që zgjodhët së fundmi është motori fillestar për skedarët që nuk kanë zgjedhjen e vet.
- Një foto nga një program tjetër thotë cili program e vizatoi dhe versionin e tij, në dialog dhe në radhën e renderimit. Premtimet e faqes [Renderimi](topic:render) mbulojnë vetëm motorët **tanë**: një program tjetër ndriçon, ton dhe mostron në mënyrën e vet, kështu që dy foto të së njëjtës skenë janë të ngjashme në kamerë, diell, llamba dhe ekspozim, por jo piksel për piksel.

## Çfarë i jepet çdo motori

Skena shkon te një program tjetër si një **paketë**: modeli si skedar USD (i njëjti skedar që shkruan [Ruaj si USD](topic:usd)), dhe një skedar cilësimesh që mban atë që një importues USD nuk mund t'i besohet: vlerat e sakta të materialeve, llambat që janë të ndezura me fuqinë dhe profilet e dritës së tyre, dielli, qielli, ekspozimi dhe kamera siç do ta vizatonte dialogu. Asgjë nuk ngarkohet askund.

## Radha e renderimit

Një foto ose një animacion për një program tjetër mund të presë në [radhën e renderimit](topic:render#the-render-queue) si ato tona; puna e tij mban mend cilin motor është për të. Një animacion shkon te programi në një ekzekutim.
