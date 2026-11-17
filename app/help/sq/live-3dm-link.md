---
title: Mbaj një model .3dm të drejtpërdrejtë
summary: Ndrysho një model në programin që e bëri dhe shiko ndryshimin këtu, nga Rhino 8 ose një përkufizim Grasshopper, pa e ruajtur dhe importuar sërish.
keywords: rhino, grasshopper, lidhje e drejtpërdrejtë, lidhje aktive, 3dm, nurbs, parametrik, lidhje, sinkronizim, skriptë, model referimi, dërgo
from: 331b0a7e
---

Vazhdo modelimin aty ku modelon, dhe përdor rezultatin këtu: për ta renderuar, ndriçuar, ose për të hartuar një skenë rreth tij. Çdo ndryshim në programin tjetër përditëson një grup në ModelCraft.

:::note
Lidhja kërkon **CadCraft Studio-n** në të njëjtin kompjuter. Një skedë shfletuesi nuk mund ta marrë lidhjen. Asgjë nuk dërgohet nëpër internet: skripti komunikon me Studio-n në adresën e vetë këtij kompjuteri, me një token.
:::

:::warning
Kjo lidhje është testuar me shkruesin e skedarëve të skriptit dhe me një zëvendësues për programin tjetër, jo ende brenda vetë Rhino ose Grasshopper. Nëse diçka dështon atje, na thuaj çfarë tha.
:::

## Konfiguro

1. Në Studio, hap ModelCraft. Te {{ui:Cilësimet}} › {{ui:ModelCraft}} › {{ui:Asistentët}}, shëno **Lejo asistentët AI dhe skriptet të përdorin ModelCraft**, pastaj **Redakto**.
2. Në Studio, zgjidh {{ui:Lidh një asistent}}. Ai tregon adresën dhe tokenin që do të ngjitësh më poshtë.
3. Shkarko skriptin: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Nga Rhino

1. Ekzekuto `cadcraft_link.py` në editorin e skripteve të Rhino (Python 3 në Rhino 8).
2. Herën e parë, ngjit adresën dhe tokenin. Ato ruhen në `.cadcraft-link.json` në dosjen tënde home, kurrë në model. Studio krijon një token të ri çdo herë që nis, prandaj skripti pyet sërish atëherë.

Modeli i plotë vjen si një grup i vetëm me emrin e dokumentit, për shembull "chair (linked)". Pas kësaj, çdo ndryshim vjen kur pauzon për një çast, dhe dërgohen vetëm objektet që ndryshuan. Ekzekuto sërish skriptin për ta ndaluar.

## Nga Grasshopper

Ekzekuto skriptin një herë në Rhino më parë, që adresa dhe tokeni të ruhen.

1. Shto një komponent Script (Python 3) dhe ngjit gjithë `cadcraft_link.py` brenda tij.
2. Jepi këto hyrje: `G` (gjeometria, me qasje liste), `N` (një emër, opsional), `On` (një çelës booleani) dhe `Target` (opsionale: `model` ose `part`, nëse të dy aplikacionet janë hapur).
3. Vendos `On` në true.

Çdo llogaritje (solve) dërgon `G` dhe zëvendëson atë që komponenti dërgoi herën e fundit, prandaj tërheqja e një rrëshqitësi përditëson grupin këtu. Dalja e tij `a` tregon çfarë ndodhi. Çdo komponent ka grupin e vet.

## Çfarë mund të bësh me grupin

- **Lëvize, etiketo, ndërto rreth tij.** Vendi i grupit dhe etiketa e tij mbeten gjatë çdo përditësimi, dhe gjithçka pranë tij gjithashtu.
- **Mos e redakto brenda.** Çdo përditësim zëvendëson gjithçka brenda grupit. Objektet i zotëron programi tjetër.
- **Zhbëj.** Përditësimet brenda dy sekondave nga njëra-tjetra ndajnë një hap zhbërjeje, prandaj {{key:Mod+Z}} heq një tërheqje të tërë. Përditësimi tjetër e sjell modelin sërish në përputhje.
- **Ruaj.** Skedari i ruajtur e mban lidhjen. Ekzekuto sërish skriptin pasi e hap, dhe i njëjti grup përditësohet.

## Çfarë vjen

Rrjetat, sipërfaqet poligonale, sipërfaqet dhe ekstruzionet si rrjetë që shikon në ekran; SubD si rrjetën e vet; kurbat si skaje; blloqet si objekte të veçanta aty ku qëndrojnë (jo si komponentë); shtresat si etiketa, ngjyrat dhe njësitë. Shih [Sjell një model .3dm](topic:import-3dm-files) për mënyrën si shfaqen këtu.

Lihen jashtë, me një numër në programin tjetër: pikat, teksti, dimensionet dhe dritat e ngjashme.

**Vetëm një drejtim.** Ndryshimet këtu nuk kthehen te programi tjetër.

## Nëse diçka shkon keq

- **"No ModelCraft or PartCraft window allows it":** bëj hapin 1 të konfigurimit.
- **"Studio refused the token":** Studio u rinis. Kopjo tokenin e ri dhe ekzekuto sërish skriptin. Për Grasshopper, ekzekuto së pari në Rhino.
- **"Cannot reach CadCraft Studio":** Studio nuk po ekzekutohet, ose adresa ka ndryshuar.
