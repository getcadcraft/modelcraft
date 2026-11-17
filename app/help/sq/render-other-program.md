---
title: Vizato foton me një program tjetër
summary: Gjurmuesi ynë i rrezeve vizaton foton e Renderimit; një program tjetër mund ta vizatojë vetëm përmes një shtojce motori renderimi në CadCraft Studio. Çfarë kalon dhe pse disa programe nuk ofrohen kurrë.
keywords: renderim, motor, program i jashtëm, motor shtojce, studio, sfond, radhë, usd, gltf, vizatuar nga, blender, gpl
from: 150f94f1
---

Fotoja në {{ui:Rendero një foto…}} vizatohet nga **motorët tanë**: Shpejt dhe Gjurmues rrezesh, në shfletues dhe në CadCraft Studio. Një program tjetër mund ta vizatojë vetëm kur e sjell një **shtojcë motori renderimi**: shihni [Shto një motor renderimi me një shtojcë](topic:render-engine-addons). Për ta marrë skenën te një program tjetër dhe për të punuar më tej aty, përdorni [Hap skenën në një program tjetër](topic:render-open-in) ose [Dërgo skenën te një motor lojërash](topic:render-unreal).

## Vizato një foto me motorin e një shtojce

1. Ndizni shtojcën te Cilësimet › Shtojcat. Motori i saj shfaqet në listën e Motorit të {{ui:Rendero një foto…}}.
2. Zgjidheni atë. Cilësimet e veta shfaqen nën listën e Motorit.
3. Klikoni {{ui:Rendero}}. Në Studio, herën e parë që një shtojcë ekzekuton një program, Studio ju pyet në dialogun e vet. Progresi shfaqet ndërsa vizaton; {{ui:Ndalo}} e ndërpret. Fotoja shfaqet e shënuar me motorin që e vizatoi.

Një motor i shkruar në JavaScript punon edhe në shfletues. Një motor që ekzekuton një program në këtë kompjuter punon vetëm në Studio; në shfletues shfaqet si një skedar për ruajtje.

## Çfarë kalon

Motori merr një **paketë**: modelin si skedar USD (dhe një skedar glTF kur e kërkon), dhe një skedar cilësimesh me vlerat e sakta të materialeve, diellin dhe qiellin, çdo llambë të ndezur me fuqinë dhe profilin e dritës së saj, kamerën dhe ekspozimin. Çdo program ndriçon, ton dhe mostron në mënyrën e vet, prandaj fotot janë të ngjashme në kamerë, diell, llamba dhe ekspozim, por jo piksel për piksel.

## Programet që CadCraft nuk i nis kurrë

CadCraft nuk nis kurrë një program me licencë GNU GPL, dhe nuk e liston kurrë si motor ose si objektiv të Hap në. Blender është një nga ata, prandaj nuk është në listën e Motorit. Një skedar USD ose glTF i ruajtur nga {{ui:Rendero një foto…}} hapet akoma në të, ashtu si në çdo program që lexon ato skedarë.

:::note
Kamerat e panoramës dhe stereo, dhe një foto qielli (përdoren ngjyrat e qiellit), nuk kalojnë te një program tjetër. Asgjë e bërë në një program tjetër nuk kthehet te modeli.
:::
