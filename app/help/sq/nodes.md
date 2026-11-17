---
title: Nyjet: ndërto një model duke lidhur me tela
summary: Lidh numrat me pika, pikat me kurba, kurbat me sipërfaqe. Ndrysho një numër dhe gjithçka poshtë rindërtohet. Çdo nyje është gjithashtu një rresht CraftScript, dhe grafiku ruhet në skedar.
keywords: nyje, redaktor nyjesh, skriptim vizual, parametrik, grafik, tela, porta, forma e lirë, nurbs, loft, shtrirje, rrotullim, rreth, kurbë, sipërfaqe, seri, interval, rastësor, listë, skript, craftscript, grasshopper
from: 9c8e254f
---

Redaktori **Nyjet** ndërton gjeometrinë duke lidhur kuti me tela. Çdo kuti (një nyje) bën një punë të vogël: krijon një numër, një pikë, një rreth, një loft. Lidh rezultatin e njërës me hyrjen e tjetrës, dhe modeli ndjek kur ndryshon një numër në fillim.

Hap nga paneli në të djathtë: {{ui:Nyjet}} › {{ui:Nyjet…}}. Një skedar që ka tashmë një grafik e hap vetë. Është një dritare mbi pamjen 3D: tërhiqe shiritin e titullit për ta zhvendosur, tërhiq cepin për ta ndryshuar madhësinë.

## Lidhja

1. Zgjidh një nyje nga lista në të majtë (shkruaj në kutinë e kërkimit për ta ngushtuar; <kbd>Enter</kbd> shton përputhjen e parë). Ajo shfaqet në mes të fletës.
2. Tërhiq nga një pikë e rrumbullakët **dalëse** në të djathtë të një nyjeje te një pikë e rrumbullakët **hyrëse** në të majtë të një tjetre. Pika bëhet jeshile kur përshtatet dhe e kuqe kur nuk përshtatet; qëndro mbi të për arsyen.
3. Një hyrje pa asgjë të lidhur shfaq një kuti për një vlerë të shkruar. Shkruaj një numër dhe shtyp <kbd>Tab</kbd>: rezultati rindërtohet.
4. Rrethi i vogël në shiritin e titullit të një nyjeje është **syri** i saj. Një nyje me syrin të ndezur vizatohet në pamjen 3D: si vija për kurbat, të hijezuara për sipërfaqet, si pika për pikat.

Tërhiq një nyje nga shiriti i titullit. Tërhiq sfondin për të lëvizur, rrotulla e miut për të zmadhuar. <kbd>Delete</kbd> heq nyjen e përzgjedhur. {{ui:Rregullo}} i rregullon nyjet në kolona, {{ui:Përshtat}} i sjell të gjitha në pamje, {{ui:Zhbëj}} dhe {{ui:Ribëj}} kalojnë nëpër ndryshimet e tua.

## Llojet dhe njësitë

Portat kanë një lloj: numër, po/jo, pikë, vektor, kurbë, sipërfaqe, rrjetë, solid, ose "gjeometri" për çdo nga këto. Një pikë mund të furnizojë një hyrje vektori dhe anasjelltas. Numrat kanë një njësi: një **gjatësi** është në milimetra dhe një **kënd** është në gradë. Një gjatësi nuk mund të furnizojë një kënd, dhe një gjatësi shumëzuar me një gjatësi (një sipërfaqe) refuzohet, kështu që një tel i gabuar ndalohet kur e bën.

Një pikë katrore është një **listë**. Kur një listë arrin një hyrje me një vlerë të vetme, nyja ekzekutohet një herë për çdo element, dhe rezultati i saj bëhet listë. Lista më e shkurtër përsërit elementin e fundit të saj. Për shembull, një **Seri** lartësish e lidhur me **Zhvendos** bën një stivë kopjesh.

## Solidet dhe Booleanët si nyje

Grupi **Solide** krijon trupa të mbyllur nga të njëjtat sipërfaqe të sakta si paneli i Sipërfaqeve: **Kuti solide**, **Cilindër solid** dhe **Sferë solide** (përmasat në mm), **Bashkim**, **Zbritje** dhe **Kryqëzim** (solidi i dytë merret nga i pari; toleranca është sa larg mund të jenë trekëndëshat e motorit të solideve nga sipërfaqet e sakta), **Rrumbullakim midis faqeve** (faqet sipas numrit të tyre në solid, 1 për të parën; një rreze dhe, mbi 0, një rreze në fund), **Vëllimi i solidit** (mm³) dhe **Solid në rrjetë** (për ta parë ose për ta shndërruar). Një solid ka llojin e vet të portës: një pikë ose një numër nuk mund të lidhen me një hyrje solidi, dhe pika mbetet e kuqe. Nyjet Boolean dhe Rrumbullakim përdorin motorin e vet të solideve të programit, të ngarkuar herën e parë që hapet redaktori.

## Gabimet

Një nyje që nuk mund ta bëjë punën e vet thotë pse, nën emrin e saj, me të kuqe ("Rrezja duhet të jetë më e madhe se zero."), dhe nyjet pas saj presin. I njëjti mesazh është një Problem në panelin Problemet, kështu që mund ta gjeni aty.

## Çdo nyje është një rresht skripti

Shtyp {{ui:Skripti}} për ta parë grafikun si CraftScript: një rresht për çdo nyje, si `n3 = nd_circle(n2, n1, [0 0 1]);`. Ndrysho tekstin dhe shtyp {{ui:Bëje grafikun nga ky skript}} për ta kthyer si grafik. Të njëjtat funksione `nd_` funksionojnë edhe në një CraftScript në PartCraft, kështu që një grafik mund të ekzekutohet, të përsëritet ose të testohet aty. Numrat e rastësishëm kërkojnë gjithmonë një **farë** (seed), kështu që i njëjti grafik jep të njëjtin rezultat në çdo kompjuter.

## Ruajtur me skedarin

Grafiku ruhet në skedarin e modelit. Nyjet krijojnë kurbat, sipërfaqet dhe rrjetat e tyre: nuk ndryshojnë faqet e modelit derisa ta kërkoni.

## Shndërro në model

Ndiz syrin e një nyjeje që krijon një sipërfaqe ose rrjetë, pastaj shtyp {{ui:Shndërro në model}} në dritaren Nyjet. Çdo sipërfaqe ose rrjetë e shfaqur bëhet një grup faqesh në model, në metra, që mund ta redaktosh si çdo gjë tjetër. Është një hap i vetëm i Zhbëj. Grafiku mbetet, por kopja nuk e ndjek më: ndrysho një numër dhe shndërro përsëri për një të re. Pikat dhe kurbat nuk janë solide, kështu që lihen jashtë, dhe mesazhi thotë sa janë.
