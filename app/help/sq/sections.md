---
title: Plane prerjeje: hap modelin
summary: Vendos një plan prerjeje për të parë brenda modelit, rrëshqite përmes tij, ktheje mbrapsht ose fike prerjen.
keywords: prerje, plan prerjeje, pamje e prerë, hapje, shkëputje, brenda, planimetri, fetë, prerje tërthore
from: 28c3a645
---

Një plan prerjeje e hap modelin, kështu që mund ta shohësh dhe punosh brenda tij: një planimetri e një shtëpie, brendësia e një kabineti. Modeli nuk ndryshohet; prerja është vetëm një pamje.

## Vendos një

1. Kliko {{ui:Prerje}} te grupi {{ui:Kamera}}.
2. Kliko një sipërfaqe. Plani vendoset mbi atë sipërfaqe, me katër shigjeta që shikojnë nga ti.

   Kliko larg çdo sipërfaqeje për një plan katror me drejtimin ku shikon më shumë. Shtyp fillimisht një tast shigjete për ta vendosur katror me të kuqen ({{key:Right}}), jeshilen ({{key:Left}}) ose blunë ({{key:Up}}) në vend të kësaj.

Ana nga ku shikojnë shigjetat është **e prerë larg**. Një plan i vendosur mbi një sipërfaqe nuk pre ende asgjë: rrëshqite brenda modelit.

## Rrëshqite, ktheje, fike

Kliko vijën e konturit të planit për ta zgjedhur. Te {{ui:Informacioni i entitetit}}:

- {{ui:Përgjatë shigjetave të tij}} tregon ku ndodhet. Shkruaj një distancë të re dhe shtyp {{key:Enter}} për ta rrëshqitur përmes modelit; shkruajtja e `-1m` në një plan që ke vendosur mbi një sipërfaqe të përparme e zhvendos 1 m brenda modelit.
- {{ui:Kthe mbrapsht}} i kthen shigjetat, kështu që ana tjetër është e prerë larg.
- {{ui:Aktiv (pret modelin)}}: një plan pret çdo herë. Shëno kutinë e një plani tjetër, ose vendos një të ri, dhe ai prerje në vend të tij.
- Riemërojë te {{ui:Emri}}; fshije me {{key:Delete}} ose me {{ui:Gomë}}.

Aty ku plani kalon një solid të mbyllur, prerja mbushet me ngjyrë të errët. Gjeometria që nuk është e mbyllur (një sipërfaqe e vetme, një kuti e hapur) preret, por nuk mbushet.

## Shfaq dhe fshih

Te {{ui:Pamjet}}:

- {{ui:Shfaq planet e prerjes}} fsheh vijat e konturit dhe shigjetat e planeve (prerja mbetet).
- {{ui:Shfaq prerjet}} e fik prerjen dhe shfaq modelin e tërë, pa fshirë planet.

[Pamja e prezantimit](topic:styles-shadows#presentation-view) fsheh edhe vijat e konturit.

## Gjëra për të ditur

- Ajo që është e prerë larg nuk mund të klikohet ose të ngjitet në të, kështu që mund të vizatosh mbi atë që tregon prerja.
- Planet e prerjes, cili është aktiv dhe dy çelësat ruhen në skedarin ModelCraft. Çdo ndryshim është një hap zhbërjeje.
- Eksportet përmbajnë gjithmonë modelin e tërë: një prerje është një pamje, jo një redaktim.
