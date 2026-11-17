---
title: Dërgo skenën te një motor loje
summary: Studio mund ta shkruajë skenën në një projekt Unreal Engine dhe ta mbajë të përditësuar në çdo dërgim; ndryshimet e tua qëndrojnë në një shtresë që CadCraft nuk e shkruan kurrë. Shtojca që e hap nuk është lëshuar ende.
keywords: unreal, unreal engine, motor loje, lidhje, dërgo, skenë usd, projekt, drejtpërdrejt, kamerë cine, radha e renderimit filmi
from: 9a765cc2
---

Në CadCraft Studio, lista e motorit mund të mbajë një **lidhje** me një projekt Unreal Engine. Vetëm në një drejtim: nga CadCraft te Unreal.

## Dërgo skenën

1. Zgjidh hyrjen Unreal te lista e motorit. Herën e parë, Studio të kërkon të zgjedhësh dosjen e projektit tënd (ajo që ka skedarin `.uproject`); e mban mend.
2. Kliko {{ui:Send}}. Studio shkruan `CadCraft/<file name>/` brenda projektit: skenën si skedar USD, skedarin e cilësimeve, profilet e dritave dhe dy skedarë të vegjël shtresash.
3. Ndrysho modelin, ruaje dhe dërgoje përsëri. Vetëm skena dhe skedari i cilësimeve zëvendësohen.

## Ndryshimet e tua janë të sigurta

Skena USD që hap Unreal është një shtresë e vogël rrënjë e krijuar një herë, me dy shtresa nën të: **jotja** në krye (`<name>.user.usda`, bosh në fillim, kurrë e rishkruar nga CadCraft) dhe skena e CadCraft-it poshtë. Ndryshimet që ruan në shtresën tënde mbeten kur skena dërgohet përsëri. Dritat dhe aktorët e tjerë që vendos në nivelin e Unreal janë jashtë skenës dhe as ata nuk preken.

## Pa Studio

Në shfletues, ose në një kompjuter ku Studio nuk e gjen Unreal, zgjidh **Dosja e projektit Unreal (.zip)** te lista e motorit dhe kliko {{ui:Render}}. Ruan të njëjtën dosje si zip: shpaketoje në dosjen `CadCraft` të projektit tënd. Lëre **Përfshi skedarët e skenës USD** të ndezur herën e parë; fikeni për ruajtjet e mëvonshme, që zip të përmbajë vetëm skenën dhe skedarin e cilësimeve, dhe shtresa jote të mos zëvendësohet kurrë.

:::note
Shtojca Unreal që hap skenën USD, aplikon diellin, dritat, kamerat dhe ekspozimin, ndjek çdo dërgim dhe renderon një kamerë **nuk është lëshuar ende** dhe nuk është provuar ende në Unreal. Derisa të jetë gati, Dërgo i vendos skedarët në projekt dhe mjetet USD të vetë Unreal mund t'i hapin. Windows është sistemi i parë; macOS vjen pas.
:::
