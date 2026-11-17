---
title: Ndaj një model të madh për printim
summary: Pritni në copa që përshtaten në shtrat një model shumë të madh për printerin tuaj, me kunja, çelësa, bisht dallëndyshe, vrima kunjash ose magnetësh dhe numrin e lidhjes në të dy faqet, dhe shkarkoni çdo copë dhe një fletë montimi në një zip.
keywords: printim 3d, ndarje, prerje e prirur, prerje me kënd, prerje e pjerrët, oblik, ndarës, prerje, shumë e madhe, madhësia e shtratit, vëllimi i ndërtimit, copa, pjesë, lidhës, kunja, çelësa, bisht dallëndyshe, kunjë, magnet, hapësirë lirie, tolerancë, numrat e pjesëve, montim, pamje e shpërndarë, zip, stl, 3mf, licencë, çelës usb, dongle
from: ee96ba77
---

Kur një model është më i madh se shtrati i printerit tuaj, **Ndaj për printim** e pret në copa që përshtaten, shton lidhës që copat të përputhen kur i bashkoni, dhe gdhend të njëjtin numër në të dy faqet e çdo lidhjeje. Hapni {{ui:Eksporto}} › {{ui:Kontrollo për printim 3D (STL ose 3MF)…}}; rreshti **Mjetet e printimit** në dialog ka {{ui:Ndaj për printim}}. Hapet si kartë mbi pamjen.

Punon me atë që printohet: përzgjedhjen, ose gjithçka e shfaqur kur nuk ka përzgjedhje. Ajo që printohet duhet të jetë një trup i mbyllur; nëse kontrolli gjen vrima, përdorni më parë [Riparo](topic:print-tools#repair).

Ekzekutohet në ModelCraft, në kompjuterin tuaj: pa server licence, pa çelës USB, pa asgjë të ngarkuar.

## Si të pritet

- **Përshtat në shtrat, me sa më pak copa**: jepni gjerësinë, thellësinë dhe lartësinë e shtratit (fillojnë nga {{ui:Cilësimet}} › ModelCraft › printeri 3D). Karta tregon sa copa duhen dhe sa madhe është secila; e pret modelin në copa të barabarta, sa më pak që të përshtaten. Një copë mund të qëndrojë anash në skedarë, nëse kjo e bën të përshtatet. Lidhësit që dalin nga një copë numërohen në madhësinë e saj.
- **Në vendet që jap unë**: zgjidhni boshtin ku të pritet dhe shkruani vendin, në milimetra nga fundi i ulët i modelit, me presje ndërmjet (`100, 200` bën tre copa).
  **Prirja** i kthen prerjet deri në 60° rreth njërit prej dy boshteve të tjerë (për shembull një prerje mbi Z e prirur rreth X): çdo prerje e prirur kalon nga mesi i modelit në vendin e vet, u jep copave më shumë sipërfaqe ngjitjeje dhe e fsheh më mirë lidhjen mbi një sipërfaqe të pjerrët. Lidhësit qëndrojnë drejt me prerjen.

Planet e prerjes vizatohen rreth modelit si vija me pika ndërsa karta është e hapur.

## Lidhësit

Çdo vend ku dy copa prekin njëra-tjetrën merr lidhës, të vendosur vetvetiu aty ku ka më shumë hapësirë: të paktën **murin më të hollë** plus **hapësirën e lirisë** plus madhësinë e vet larg jashtës, dhe mjaft larg çdo prerjeje tjetër që dy vrima të mos takohen kurrë. Në një faqe të gjatë vendosen dy lidhës të shpërndarë përgjatë saj, që copat të mos mund të rrotullohen.

- **Kunja rrethore**: një kunjë në njërën copë (me majën e prerë), një vrimë në tjetrën.
- **Çelësa katrorë**: e njëjta gjë, katrore, që një copë të mund të futet vetëm në një drejtim.
- **Bisht dallëndyshe**: një lakim që rrëshqet në një brazdë nga anash. Aty ku një skaj i brazdës do të takonte një prerje tjetër, bishti ndalet më parë dhe rrëshqet nga skaji i hapur. Bishtat dallëndyshe përshtaten për prerje në një drejtim (një rresht feta); në rrjet përdorni kunja ose kunjë.
- **Vrima kunjash**: një vrimë në secilën anë; kunjat printohen edhe ato (në zip).
- **Xhepa magnetësh**: një xhep në secilën anë për një magnet rrethor me diametrin dhe trashësinë që jepni. Kontrolloni polet para se t'i ngjitni.
- **Asnjë (ngjitje)**.

**Hapësira e lirisë** është boshllëku në secilën anë midis një kunje dhe vrimës së saj (fillimisht 0,2 mm). Ajo është e saktë me numrin që jepni: vrimat rrethore bëhen pak më të mëdha, që anët e tyre të sheshta, jo kthinat, ta ruajnë atë boshllëk. Rritni nëse pjesët e printerit tuaj dalin të ngushta.

Kur një lidhje nuk ka vend për lidhës (mur i hollë, sipërfaqe e vogël prekjeje), karta e thotë këtë: ngjiteni atë.

## Numrat e pjesëve

Me **Gdhend numrat e lidhjeve në të dy faqet** të ndezur, çdo lidhje merr numrin e dy copave të saj, si `3-4`, të gdhendur 0,6 mm thellë në të dy faqet, i lexueshëm drejt nga secila. Numrat fillojnë 5 mm të lartë dhe zvogëlohen për t'u përshtatur, deri në 2,5 mm; një lidhje pa vend për numrin e vet listohet. Copat numërohen nga shtresa e poshtme lart.

## Pamja paraprake, shkarkimi, ndarja e modelit

1. {{ui:Pamja paraprake}} e pret modelin dhe tregon sa copa, lidhje dhe lidhës ka, nëse çdo copë kalon kontrollin e printimit 3D dhe përshtatet në shtrat, dhe liston madhësinë e çdo copë. Një unazë shënon çdo lidhës dhe numër në pamje.
2. {{ui:Shkarko pjesët (.zip)}} ruan një zip: një skedar për copë (STL ose 3MF, siç zgjidhni nën **Skedarët**), secila që qëndron në shtrat; kunjat e vrimave; dhe **fletën e montimit**, një foto e copave të shpërndara me numrat e tyre (`assembly.svg` dhe `assembly.png`) dhe një listë të copave dhe lidhjeve (`assembly.txt`).
3. {{ui:Ndaj modelin}} i vendos copat në model në vend të grupeve ose komponentëve të përzgjedhur, të emërtuara si në fletën e montimit, në një hap: {{ui:Zhbëj}} e kthen origjinalin. Duhet të ketë përzgjedhur grupet ose komponentët për t'u ndarë; shkarkimi punon me çfarëdo që printohet.

## Lëvizni vetë lidhësit

Pas një pamjeje paraprake, **Lidhësit me dorë** ju lejon të korrigjoni se ku shkojnë lidhësit:

- {{ui:Zhvendos një}}: klikoni një unazë të kuqe në pamje (kthehet e gjelbër), pastaj klikoni aty ku duhet të shkojë në prerje.
- {{ui:Shto një}}: klikoni në pamje ku duhet të shkojë një lidhës. Shkon në planin e prerjes që arrin klikimi juaj, midis dy copave aty.
- {{ui:Hiq një}}: klikoni një unazë të kuqe për ta hequr atë lidhës.

Çdo ndryshim kontrollohet përsëri si ata automatikë: një vend shumë afër konturit, një prerje tjetër ose një lidhës tjetër nuk bëhet, dhe karta e thotë këtë. {{ui:Përsëri automatike}} harron vendet tuaja. Ato ruhen për sa kohë modeli, përzgjedhja dhe prerjet mbeten të njëjta.

Një pamje paraprake mbetet deri sa të ndryshojë modeli, përzgjedhja ose një cilësim; pastaj karta ju kërkon ta bëni pamjen paraprake përsëri.

:::note
Çdo copë kontrollohet si do ta kontrollonte kontrolli i printimit 3D para se ta shkarkoni. Slicer-i juaj vendos akoma se si printohet secila copë: shikojeni secilën atje dhe printoni fillimisht një lidhje, për të parë si e trajton printeri juaj hapësirën e lirisë.
:::
