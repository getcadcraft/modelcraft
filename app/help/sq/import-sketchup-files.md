---
title: Sjell një model SKP
summary: Importo një skedar .skp me grupet, komponentët, ngjyrat, teksturat, etiketat dhe brinjët e buta; shiko çfarë hyri dhe çfarë jo, dhe vazhdo modelimin.
keywords: skp, importo, hap skp, komponentë, grupe, etiketa, shtresa, materiale, ngjyra, tekstura, i fshehur, brinjë e butë, 3d warehouse, migrim, ndërrim
from: 325d3c81
---

ModelCraft lexon skedarët e SketchUp (`.skp`) me lexuesin e vet, në faqe. Asgjë nuk ngarkohet, dhe punon pa internet kurdo që punon ModelCraft. Skedarët nga SketchUp 3 deri 2026 janë testuar.

## Importo skedarin

1. Kliko {{ui:Importo}} në grupin {{ui:Skedar}} (ose lësho skedarin `.skp` mbi pamjen 3D).
2. Zgjidh skedarin.

   Shiriti i statusit thotë "Po lexohet house.skp…" ndërsa lexon, pastaj çfarë hyri, për shembull "U importua house.skp (SketchUp 25.0.575): 1240 faqe, 6 komponentë, në një grup."

I gjithë modeli hyn si një grup i vetëm me emrin e skedarit, i përzgjedhur, dhe pamja zmadhohet te ai. Një {{key:Mod+Z}} e heq përsëri të gjithë, bashkë me etiketat.

:::tip
Çmonto grupin e importit ({{ui:Informacioni i entitetit}} › {{ui:Çmonto}}) kur dëshiron përmbajtjen e tij të lirë në modelin tënd, në vend që të jetë në një grup të vetëm.
:::

## Çfarë hyn

- **Faqet** me vrimat e tyre, dhe **brinjët** që nuk janë pjesë e një faqeje.
- **Grupet** hyjnë si grupe, dhe **komponentët** si komponentë: çdo kopje e një komponenti është një vendosje e një përkufizimi të vetëm, kështu që redaktimi i një kopjeje i ndryshon të gjitha, si në SketchUp. Emrat vijnë bashkë me to.
- **Ngjyrat.** Materiali i vet i një faqeje i jep asaj ngjyrën. Një material i lyer mbi një grup ose komponent bëhet bojë e asaj vendosjeje, kështu që faqet brenda tij pa ngjyrë të vetën e marrin, si në SketchUp. Një komponent i lyer i kuq në një vend dhe blu në një tjetër mbetet një komponent i vetëm.
- **Teksturat.** Një faqe e lyer me material me tekstura hyn me teksturën e vet, e vendosur mbi faqe ashtu si në skedar, dhe stili {{ui:Me hije}} e shfaq. Imazhi ruhet në skedarin ModelCraft kur ruan, dhe një [imazh i renderuar](topic:render) e shfaq gjithashtu. Një material me tekstura i lyer mbi një grup ose komponent të tërë i jep asaj kopjeje vetëm ngjyrën e materialit.
- **Etiketat.** Një grup ose komponent në një etiketë SketchUp merr një etiketë ModelCraft me të njëjtin emër, të listuar te {{ui:Etiketat}}, e shfaqur ose e fshehur ashtu si ishte në SketchUp. Nëse modeli yt ka tashmë një etiketë me atë emër, përdoret ajo.
- **Gjërat e fshehura hyjnë të fshehura:** faqe, brinjë, grupe dhe komponentë, dhe faqe e brinjë në një etiketë të fshehur. Sheh atë që tregonte SketchUp, dhe asgjë nuk humbet: {{ui:Redakto}} › {{ui:Më shumë}} › {{ui:Shfaq të gjitha}} i shfaq. Shih [Fshih, izolo dhe shfaq](topic:hide-isolate).
- **Brinjët e buta dhe të lëmuara** mbeten të buta, kështu që sipërfaqet e lakuara duken ende të lëmuara.
- **Madhësitë** dalin të sakta në çdo njësi: skedarët SketchUp janë në inç brenda, dhe ModelCraft i shndërron.

## Çfarë nuk hyn

Shiriti i statusit thotë çfarë u la jashtë, me numërime.

- **Disa tekstura** mbajnë vetëm ngjyrën e materialit të tyre: një teksturë që mungon në skedar, një imazh në një format që shfletuesit nuk e shfaqin (si një skedar Photoshop), ose një teksturë pa madhësi. Faqet me një teksturë të projektuar hyjnë me teksturën të vendosur përafërsisht.
- **Etiketat mbi faqe dhe brinjë të lira.** ModelCraft i etiketon vetëm grupet dhe komponentët, kështu që një faqe ose brinjë me etiketën e vet hyn pa etiketë, dhe shiriti i statusit i numëron. Bëj të tilla faqe një grup ({{key:Shift+G}}) dhe etiketo grupin.
- **Imazhet** e vendosura në model, tekstin, përmasat, udhëzuesit, planet e prerjes, skenat dhe stilet.

## Probleme

- "Ky nuk është skedar SketchUp." ose "Ky skedar SketchUp është i dëmtuar: …": skedari është i prerë, ose është diçka tjetër me emër `.skp`. Ruaje përsëri nga SketchUp, ose kërko një kopje të re.
- Një skedar nga një version SketchUp më të ri se ai që njeh ModelCraft refuzohet, me versionin që gjeti.
- Një model që është tërësisht imazhe, tekst ose përmasa thotë se nuk ka çfarë të shfaqë.

## Merr modelin mbrapsht

ModelCraft nuk mund të ruajë skedarë `.skp`. Eksporto Collada ({{ui:Eksporto}} › `.dae`) dhe importoje atë në SketchUp: grupet, komponentët dhe ngjyrat kalojnë; teksturat shkojnë si ngjyra të materialit të tyre. Shih [Eksporto modelin tënd](topic:export-model).
