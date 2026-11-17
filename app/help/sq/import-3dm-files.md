---
title: Sjell një model .3dm
summary: Importo një skedar .3dm me rrjetat, sipërfaqet, kurbat, blloqet, shtresat dhe ngjyrat; nga vijnë trekëndëshat dhe çfarë lihet jashtë.
keywords: 3dm, importo, nurbs, polisipërfaqe, brep, sipërfaqe, rrjetë vizatimi, ekstrudim, kurba, blloqe, shtresa, etiketa, ngjyra, njësi, ndërrim, migrim
from: 3cf29879
---

ModelCraft lexon skedarët `.3dm` me lexuesin e vet, në faqe. Asgjë nuk ngarkohet, dhe punon pa internet kurdo që punon ModelCraft. Skedarët e ruajtur në versionet 5, 6, 7 dhe 8 janë testuar; ata më të vjetër (versionet 2 deri 4) duhet të hapen gjithashtu, por nuk janë provuar ende.

## Importo skedarin

1. Kliko {{ui:Importo}} në grupin {{ui:Skedar}} (ose lësho skedarin `.3dm` mbi pamjen 3D).
2. Zgjidh skedarin.

   Shiriti i statusit thotë "Po lexohet chair.3dm…" ndërsa lexon, pastaj çfarë hyri, për shembull "U importua chair.3dm: 14 rrjeta (8330 faqe), 8 kurba, 5 vendosje blloqesh, 3 shtresa si etiketa. Sipërfaqet: 7 faqe nga rrjetat e ruajtura në skedar, 29 të trekëndëzuara nga CadCraft."

I gjithë modeli hyn si një grup i vetëm me emrin e skedarit, i përzgjedhur, dhe pamja zmadhohet te ai. Një {{key:Mod+Z}} e heq përsëri të gjithë, bashkë me etiketat.

## Nga vijnë trekëndëshat

ModelCraft modelon me faqe dhe rrjeta, kështu që çdo sipërfaqe në skedar hyn si një [rrjetë](topic:meshes) me trekëndësha të vegjël të sheshtë. Për çdo faqe të një polisipërfaqeje (dhe për çdo ekstrudim) ModelCraft merr, sipas kësaj radhe:

1. **Rrjetën e vizatimit të ruajtur në skedar.** Shumica e programeve të modelimit ruajnë rrjetën që shfaqën në ekran me çdo sipërfaqe; kur është aty, ModelCraft e përdor ashtu siç është.
2. **Ndarjen e vet në trekëndësha**, kur skedari nuk ka rrjetë të ruajtur: plane, sipërfaqe NURBS, sipërfaqe rrotullimi (sfera, konet, torë, forma tornoje), kurba të ekstrudura dhe ekstrudime (me vrimat dhe kapakët e tyre), të prera nga brinjët e tyre. Faqet e një polisipërfaqeje ndajnë pikat e brinjëve, kështu që një polisipërfaqe e mbyllur hyn si rrjetë e mbyllur. Zonat e lakuara ndahen derisa trekëndëshat të jenë brenda rreth 0.15 % të madhësisë së objektit nga sipërfaqja e vërtetë.
3. **Asgjë**, për një faqe me një lloj sipërfaqeje që ModelCraft nuk e lexon ende. Shiriti i statusit thotë sa faqe janë dhe të çfarë lloji.

Pjesa "Surfaces:" e shiritit të statusit thotë sa faqe erdhën nga rrjetat e ruajtura dhe sa u trekëndëzuan nga ModelCraft. Brinjët brenda një faqe të skedarit janë të buta, dhe brinjët midis dy faqesh janë të mprehta, kështu që një faqe e lakuar hijëzohet me lëmi.

:::tip
Për format më besnike, ruaje skedarin me rrjetat e vizatimit në programin që e krijoi (zakonisht kjo është parazgjedhja; një opsion "ruaj më të vogël" i lë jashtë).
:::

## Çfarë hyn

- **Rrjetat** me ngjyrat e kulmeve dhe koordinatat e teksturës.
- **Polisipërfaqet, sipërfaqet dhe ekstrudimet**, siç u përshkruan më sipër.
- **Kurbat** (vija, polivija, harqe, rrathë, kurba NURBS dhe kurba të bashkuara prej tyre) si [brinjë](topic:curves), një grup brinjësh për çdo shtresë.
- **Blloqet** bëhen [komponentë](topic:groups-components): çdo vendosje e një blloku është një vendosje e një komponenti të vetëm, kështu që redaktimi i një kopjeje i ndryshon të gjitha. Blloqet brenda blloqeve ruhen.
- **Shtresat** bëhen [etiketa](topic:tags) me emrin e plotë të shtresës ("Furniture::Chairs"), të fshehura kur shtresa ishte e fikur. Vendosja e çdo objekti mban etiketën e shtresës së vet.
- **Ngjyrat.** Ngjyra e një objekti vjen nga aty ku thotë skedari: ngjyra e vet, ajo e shtresës, ose ngjyra bazë e materialit të tij. Bëhet boja e faqeve të tij.
- **Objektet e fshehura hyjnë të fshehura**; {{ui:Shfaq të gjitha}} i shfaq.
- **Njësitë:** skedari thotë njësinë e vet; modeli hyn në madhësinë e tij të vërtetë.

## Çfarë lihet jashtë (dhe thuhet)

Pjesa "Notes:" e shiritit të statusit emëron gjithçka që nuk hyri, me numër:

- pika dhe re pikash, tekst, pika tekstesh, përmasa, udhëheqës, vijëzime, drita, plane prerjesh dhe detaje paraqitjeje;
- objekte SubD: shndërroji në rrjeta ose polisipërfaqe në programin që e krijoi skedarin, më parë;
- faqe mbi sipërfaqe të zhvendosura dhe lloje të tjera sipërfaqesh që ModelCraft nuk i lexon ende, kur skedari nuk ruajti rrjetë për to;
- blloqe të lidhura nga skedarë të tjerë (lexohet vetëm skedari që importon);
- ekstrudime me skaje të prera me kënd (me gërshetim) hyjnë me skaje drejtkëndëshe.

Teksturat e materialeve, cilësimet e renderimit, pamjet e emërtuara, grupet dhe teksti i përdoruesit nuk lexohen; një material jep vetëm ngjyrën bazë.

## Kufijtë

Skedarë deri në 300 MB. Një skedar i dëmtuar thotë çfarë nuk shkon dhe nuk shton asgjë; një objekt që s'mund të lexohet lihet jashtë dhe numërohet, dhe pjesa tjetër hyn.
