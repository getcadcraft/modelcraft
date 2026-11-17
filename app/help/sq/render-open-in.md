---
title: Hap skenën në një program tjetër
summary: Ruaje skenën si skedar USD ose glTF për çdo program që i lexon, ose hape nga Studio në një program në këtë kompjuter.
keywords: hap në, usd, gltf, glb, eksporto, program renderimi, archviz, studio, usdview, dërgo, dorëzim, paketë, dosja unreal
from: 812329d5
---

Zgjidhni një hyrje **Hap në** te lista e Motorit të {{ui:Rendero një foto…}} për ta marrë skenën te një program tjetër. Asgjë nuk kthehet te modeli.

## Një skedar për çdo program

- **Skedari USD** ruan skenën si `.usdc` (ose `.usdz` kur modeli mban foto): [i njëjti skedar si Ruaj si USD](topic:usd), me materialet, llambat dhe kamerat. Ruan instancimin dhe vlerat e sakta të materialeve. Shumica e renderuesve, motorëve të lojërave dhe shikuesve lexojnë USD.
- **Skedari glTF (.glb)** ruan skedarin më të lehtë glTF 2.0 me materiale, tekstura dhe llamba; shihni [Eksporto një model për programe të tjera](topic:export-model) për formatet që shkruan ModelCraft.

- **Dosja e projektit Unreal (.zip)** ruan dosjen që shkruan [Dërgo skenën te një motor lojërash](topic:render-unreal), për një projekt në çdo kompjuter.

Të tre punojnë në shfletues dhe në Studio.

## Në Studio: hapeni në një program

Studio liston programet që gjen në këtë kompjuter që mund ta hapin skenën: usdview nëse është në rrugën tuaj të kërkimit, dhe programi i vetë kompjuterit për llojin e skedarit. Zgjidhni një, zgjidhni USD ose glTF aty ku lexon të dyja, dhe klikoni {{ui:Rendero}}. Studio shkruan paketën në një dosje të re nën Dokumente (`CadCraft hand-off`; asgjë nuk mbishkruhet, çdo dërgim merr dosjen e vet) dhe e nis programin mbi të, pastaj thotë ku janë skedarët.

| Programi | Lexon më mirë |
|---|---|
| usdview | USD |
| Programi i vetë kompjuterit | Çfarëdo që ka kompjuteri për llojin e skedarit |

Studio nis vetëm programe nga kjo listë fikse; nuk ekzekuton asgjë që faqja kërkon me emër, dhe nuk nis kurrë një program me licencë GNU GPL (shihni [Vizato foton me një program tjetër](topic:render-other-program#programs-cadcraft-never-runs)). Çdo program që lexon USD ose glTF e hap skedarin nga **Një skedar për çdo program** më lart.

:::note
Twinmotion, Enscape dhe programet e tjera të vizualizimit nuk janë në listë: CadCraft nuk është testuar me to dhe nuk jep asnjë pretendim për to. Një skedar glTF ose USD nga këtu është rruga hyrëse.
:::
