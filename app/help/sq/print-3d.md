---
title: Përgatit një model për printim 3D
summary: Kontrollo që një model të jetë i mbyllur dhe i kthyer në drejtimin e duhur, shiko madhësinë, bazën dhe prirjet, rregullo ç'është e gabuar, dhe shkarkoje si STL ose 3MF për slicer-in tënd.
keywords: printim 3D, printer, printo, slicer, stl, 3mf, i mbyllur, i pa vrima, solid, vrima, nga brenda jashtë, prirje, mbështetëse, bazë, shtrat, milimetra, eksport, rregullo, riparo, zbrazje, madhësia e shtratit, fillestar, trashësia e murit, mjete printimi
from: 948e19af
---

Slicer-i i printerit 3D ka nevojë për një formë të mbyllur: pa vrima, çdo faqe e kthyer nga jashtë, asgjë që kalon përmes vetes. {{ui:Eksporto}} › {{ui:Kontrollo për printim 3D (STL ose 3MF)…}} kërkon pikërisht këtë përpara se të shkarkosh skedarin.

## Kontrollo dhe shkarko

1. Zgjidh atë që dëshiron të printosh: një ose më shumë grupe ose komponentë, ose disa faqe. Pa asgjë të përzgjedhur, printohet çdo gjë që shihet.
2. Kliko {{ui:Eksporto}} në grupin {{ui:Skedar}}, pastaj {{ui:Kontrollo për printim 3D (STL ose 3MF)…}}.

   Dialogu fillon me një rresht: "Gati për printim", sa gjëra duhen rregulluar përpara printimit, ose sa duhen shikuar më parë. Çdo problem ka tri pjesë: çfarë është e gabuar, pse ka rëndësi, dhe çfarë të bësh. Pas tyre vijnë madhësia në milimetra, vëllimi, numri i trekëndëshave dhe shtrati i printerit tënd.

3. Nëse dialogu liston gjëra për t'u rregulluar, kliko {{ui:Rregullo ç'mund të rregullohet}} (shih më poshtë). Kontrolli rifillon vetvetiu.
4. Kliko {{ui:Shkarko 3MF}} ose {{ui:Shkarko STL}}.

Ç'printohet është ajo që shikon: faqet e fshehura, grupet dhe komponentët e fshehur, dhe çdo gjë në një etiketë të fshehur lihen jashtë. Madhësitë janë gjithmonë në milimetra, njësia që pret slicer-i, pavarësisht nga njësia që tregon modeli.

:::tip
Preferoje 3MF kur slicer-i yt e lexon: ai mban ngjyrat dhe njësitë. STL nuk ka asnjërën, dhe slicer-at supozojnë milimetra.
:::

## Çfarë kontrollon kontrolli

Këto ndalojnë një printim ose e prishin, dhe bëjnë dialogun të thotë "Jo gati për printim":

| Problemi | Çfarë do të thotë | Çfarë të bësh |
|---|---|---|
| Një faqe vetëm në njërën anë | Një vrimë: një skaj ka një faqe në njërën anë dhe asgjë në tjetrën | Vizato faqen që mungon (një vijë përgjatë hapësirës shpesh e mbyll), ose përdor {{ui:Rregullo}} (më poshtë) |
| Ndarë nga tre ose më shumë faqe | Faqet takohen në një pendë ose mur brenda një solidi | Fshi faqen e brendshme |
| Faqe që shikojnë në drejtime të kundërta | Disa faqe shikojnë brenda, disa jashtë | Përzgjidh faqet që shikojnë brenda dhe kliko {{ui:Kthe faqen}} në {{ui:Informacioni i entitetit}} |
| Nga brenda jashtë | Një pjesë e tërë e mbyllur shikon brenda | Përzgjidh faqet e saj dhe i kthe |
| Kalon përmes vetes | Një pjesë palos veten | {{ui:Redakto}} › {{ui:Më shumë}} › {{ui:Kryqëzo me modelin}}, pastaj fshi çfarë është brenda. Shih [Kryqëzo faqet](topic:intersect) |

Këto janë paralajmërime: modeli printohet, por shiko më parë.

- **Pjesët e ndara mbivendosen**, ose **takohen faqe më faqe**: slicer-at zakonisht i bashkojnë në një. Për një skedar më të pastër, bashkoji me {{ui:Solide}} › {{ui:Bashkim}}. Shih [Mjetet për solide](topic:solids).
- **Asgjë nuk është e sheshtë në fund**: kthe modelin që një faqe të pushojë mbi shtrat, ose slicer-i do të shtojë mbështetëse ose raft.
- **Priret jashtë më shumë se 45° nga vertikalja**: këto faqe kanë nevojë për mbështetje. Dialogu thotë sa e sipërfaqes e bën këtë.
- **Më pak se 1 mm në gjerësi**: ka gjasa të jetë modeluar në njësinë e gabuar. Kontrollo njësinë në shiritin e statusit.

Një pjesë e zbrazët (një guaskë e mbyllur brenda një tjetre) është në rregull: faqet e saj shikojnë në zbrazëti, dhe vëllimi i saj zbritet.

## Rregullo problemet

Nën **Ku janë problemet**, dialogu emërton çdo grup ose komponent që ka diçka të gabuar (faqet e lira jashtë një grupi listohen si "Faqe jashtë grupit"), me atë që është e gabuar brenda tij. Një komponent i vendosur disa herë listohet një herë: rregullimi i tij rregullon çdo kopje.

- {{ui:Shfaq}} hap atë grup dhe përzgjedh skajet dhe faqet që janë të gabuara, që të duken të theksuara.
- {{ui:Rregullo ç'mund të rregullohet}} i rregullon të gjitha njëherësh: mbyll vrimat, skajet e të cilave shtrihen të sheshta, heq faqet brenda formës dhe skajet e lira, dhe kthen faqet nga jashtë. Është një hap i vetëm: {{key:Mod+Z}} e zhbën. Kontrolli rifillon dhe tregon çfarë mbetet.

Çfarë nuk mund të rregullojë (një vrimë me skaje që nuk shtrihen të sheshta, një pjesë që kalon përmes vetes) mbetet në listë me atë që duhet bërë me dorë. {{ui:Riparo}} nën **Mjetet e printimit** shkon më larg: mbyll vrimat që nuk janë të sheshta, heq copa të lira dhe faqe të dyfishta, dhe liston çdo rregullim. Shih [Mbështetëse, trashësia e murit, zbrazja dhe riparimi](topic:print-tools#repair). Mund të rregullosh edhe një grup në një kohë: përzgjidhe, pastaj përdor {{ui:Shfaq problemet}} dhe {{ui:Rregullo}} te {{ui:Informacioni i entitetit}}. Shih [Mjetet për solide](topic:solids).

## Një pjesë e zbrazët

{{ui:Zbrazje}} nën **Mjetet e printimit** zbraz një pjesë në trashësinë e murit që jep ti, me vrima kullimi aty ku klikon. Shih [Zbrazja](topic:print-tools#hollow).

Mund ta vizatosh vetë zbrazjen: një grup i mbyllur brenda pjesës, pa e prekur, me të gjitha faqet e kthyera që të shikojnë në zbrazëti. Kontrolli e numëron si zbrazje dhe i zbret vëllimin; nuk listohet si diçka për t'u rregulluar.

## Shtrati i printerit tënd

Zgjidh madhësinë e shtratit të printerit tënd në {{ui:Cilësimet}} › {{ui:ModelCraft}} › {{ui:Shtrati i printerit 3D}}. Kontrolli atëherë paralajmëron kur modeli është më i madh se shtrati, i kthyer në çdo drejtim. Shih [Cilësimet](topic:settings#3d-printer-bed).

## Mjetet e printimit

Nën gjetjet e dialogut, **Mjetet e printimit** hap {{ui:Shfaq paraprakisht mbështetëset}} (ku shkojnë mbështetëset dhe sa afërsisht), {{ui:Trashësia e murit}} (muret shumë të hollë për t'u printuar), {{ui:Zbrazje}} dhe {{ui:Riparo}}. Shih [Mbështetëse, trashësia e murit, zbrazja dhe riparimi](topic:print-tools). {{ui:Ndaj për printim}} pret një model shumë të madh për shtratin në copa me lidhës dhe bashkime të numëruara: shih [Ndaj një model të madh për printim](topic:print-split).

## Nuk kontrollohet

Kontrolli nuk prerë: detajet shumë të vogla që grykës tënde nuk mund t'i vizatojë dhe mbështetëset e vërteta janë të slicer-it. Shih [Ende nuk është ndërtuar](topic:not-built-yet#3d-printing).
