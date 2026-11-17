---
title: Mbështetëse, trashësia e murit, zbrazja dhe riparimi
summary: Shihni ku një printim ka nevojë për mbështetëse dhe sa afërsisht, gjeni muret shumë të holla për t'u printuar, zbrazni një pjesë deri në një trashësi muri me vrima kullimi, dhe riparoni një rrjetë me çdo rregullim të listuar.
keywords: printim 3d, mbështetëse, pamja paraprake e mbështetëseve, konsolë, kënd konsolë, mbështetëse pemë, mbështetëse kolonash, trashësia e murit, muret e holla, shumë e hollë, grykë, zbraz, zbrazje, guaskë, vrimë kullimi, rrëshirë, riparo, rregullo rrjetën, faqe të kthyera, vrima, guaska të vogla, ndërprerje, mbivendosje, bashko
from: 286bde26
---

Katër vegla për të përgatitur një model për printerin 3D. Hapni {{ui:Eksporto}} › {{ui:Kontrollo për printim 3D (STL ose 3MF)…}}; rreshti **Mjetet e printimit** në dialog ka {{ui:Shfaq paraprakisht mbështetëset}}, {{ui:Trashësia e murit}}, {{ui:Zbrazje}} dhe {{ui:Riparo}}. Secila hapet si kartë mbi pamjen; {{ui:Mbyll}} (kryqi) e heq atë dhe shenjat e saj. Shfaqet vetëm një kartë në një kohë.

Çdo vegël punon me atë që printohet: përzgjedhjen, ose gjithçka e shfaqur kur nuk ka përzgjedhje. {{ui:Zbrazje}} dhe {{ui:Riparo}} kërkojnë një grup, komponent ose rrjetë të përzgjedhur, sepse e ndryshojnë atë.

## Pamja paraprake e mbështetëseve

Faqet që prireshin më shumë se **këndi i konsolës** nga vertikalja shtypen me të kuqe, dhe mbështetëse të thjeshta vizatohen prej tyre (portokalli) poshtë, deri në shtrat ose te pjesa e modelit nën to.

- **Këndi i konsolës**: 45° është ajo që shumica e printerëve bëjnë pa mbështetëse. Ngriteni për një printer që ura mirë.
- **Kolonat**: një kolonë e drejtë çdo 3 mm nën çdo konsolë. Vlerësimi i numëron si një model mbështetjeje 15%.
- **Pema**: pikat aty pranë bashkohen në një trung nën mesin e tyre; asnjë degë nuk prihet më shumë se 45°. Pemët zakonisht marrin më pak material dhe prekin shtratin në më pak vende.

Karta tregon sa sipërfaqe ka nevojë për mbështetje, sa pika mbështetjeje ka dhe sa material afërsisht marrin. Mbështetëset që qëndrojnë mbi model (jo mbi shtrat) llogariten: ato lënë shenja aty. Me një shtrat printeri të zgjedhur te {{ui:Cilësimet}}, shtrati vizatohet nën model.

:::note
Kjo është një pamje paraprake, jo një slicer: slicer-i juaj vendos mbështetëset e vërteta. Te një konsolë shumë e madhe, pikat e mbështetjes shpërndahen më gjerë që pamja paraprake të mbetet e shpejtë; karta e thotë këtë.
:::

## Trashësia e murit

Çdo faqe matet drejt përmes trupit deri në anën tjetër. Muret nën **trashësinë më të hollë të lejuar** janë të kuqe, dhe muret nën një e gjysmë herë kjo vlerë janë portokalli: printohen, por mund të dalin të dobëta.

Zonat e holla listohen, më të holla e para, me sa të holla dhe sa të mëdha është secila. {{ui:Shfaq}} e kthen kamerën drejt saj.

Një printer nuk mund ta bëjë murin më të hollë se rreth dy gjerësi gryke: 0,8 mm për grykën e zakonshme 0,4 mm (fillimisht). Printerët e rrëshirës arrijnë më pak; shikoni udhëzuesin e printerit tuaj.

Te një model shumë i madh, vetëm disa faqe hedhin rreze, dhe të tjerat marrin trashësinë e fqinjëve të tyre; karta thotë sa u matën.

## Zbrazje

Zbrazja e mban jashtën siç është dhe heq brendësinë, duke lënë muret aq të trasha sa kërkoni. Printimet me rrëshirë përdorin më pak rrëshirë dhe tërheqin më pak pllakën e ndërtimit; printimet me filament përdorin më pak plastikë sesa do ta bënte mbushja.

1. Përzgjidhni grupin, komponentin ose rrjetën, pastaj hapni {{ui:Zbrazje}}.
2. Vendosni **murin** (2 mm fillimisht) dhe sa të gjera janë **vrimat e kullimit**.
3. Për një printim me rrëshirë, klikoni {{ui:Vendos një vrimë kullimi}}, pastaj klikoni jashtë modelit ku shkon ajo: poshtë, afër pllakës së ndërtimit, që rrëshira e lëngshme të dalë. Vendosni sa keni nevojë; çdo një shfaqet si një rreth blu dhe listohet me {{ui:Hiq}}.
4. {{ui:Pamja paraprake}} tregon sa heq zbrazja.
5. {{ui:Zbraze}} e bën ndryshimin: një hap që {{key:Mod+Z}} e zhbën.

Rezultati është një trup i vetëm i mbyllur që kontrolli i printimit 3D e pranon: ModelCraft e kontrollon më parë dhe nuk ndryshon asgjë nëse nuk do të kalonte. Aty ku modeli është më i hollë se dy muret, mbetet i ngurtë. Rezultati është një grup, faqet e sheshta të të cilit janë faqe të vetme, kështu që mund ta vazhdoni modelimin me {{ui:Shtyj/tërhiq}}; një pjesë e lakuar e zbrazur në rrjetën e imët zakonisht ka shumë faqe për këtë dhe bëhet rrjetë, dhe rreshti i statusit thotë cila.

:::tip
Për shumicën e formave, brendësia është jashtësia e zhvendosur brenda saktësisht sa muri. Aty ku cepat ose pjesët e holla e bëjnë këtë të pamundur, ModelCraft ndjek jashtësinë në distancën e murit në një rrjet të imët; karta atëherë thotë sa afër është (me saktësi brenda një pjese milimetri).
:::

## Riparo

{{ui:Riparo}} e shikon pjesën e përzgjedhur ashtu si do ta shikonte slicer-i i printerit, rregullon atë që mund të rregullohet me siguri dhe liston çdo rregullim:

| Rregullon | Çfarë do të thotë kjo |
|---|---|
| Trekëndësha pa sipërfaqe | hiqen |
| Një trekëndësh i vizatuar dy herë | mbahet një kopje; një faqe e vizatuar shpinë për shpinë me vetveten (pa trashësi) hiqet |
| Copa të lira nën 0,5 mm | hiqen |
| Trekëndësha që shikojnë në drejtimin e gabuar | kthehen për t'u përputhur me fqinjët |
| Vrima, të sheshta ose jo | mbyllen me një grumbull trekëndëshash të rinj nga mesi i çdo vrime |
| Një copë e kthyer nga brenda | kthehet nga jashtë (një zbrazje brenda një copë tjetër lihet ashtu si është: duhet të shikojë brenda) |

{{ui:Rregullo ato të sigurta}} bën të gjitha në një hap që {{key:Mod+Z}} e zhbën, dhe rreshti i statusit liston çdo rregullim. Pjesa e riparuar bëhet një grup, faqet e sheshta të të cilit janë faqe të vetme. Nëse ende nuk mbyllet (diçka nën **Ju e lini** mbetet), ose do të kishte shumë faqe për një grup, bëhet rrjetë: faqet e saj mbeten trekëndësha, dhe faqet e sheshta duken akoma të sheshta. Rreshti i statusit thotë cila. {{ui:Bashko pjesët e mbivendosura}} punon në të njëjtën mënyrë.

Ajo që nuk mund të rregullohet me siguri listohet nën **Ju e lini** dhe shënohet me vjollcë në pamje, me {{ui:Shfaq}}:

- **Brinjë ku takohen tre ose më shumë faqe**: vendosni cila faqe i takon dhe fshini të tjerat.
- **Një copë që kalon përmes vetes**: zhvendoseni ose rivizatoni atë pjesë. Shihni [Ndërprije faqet](topic:intersect).
- **Vrima shumë të mëdha ose shumë të ngatërruara për t'u mbyllur**: vizatoni faqe përmes tyre.
- **Copa të veçanta që mbivendosen**: slicer-at i bashkojnë gjithsesi. {{ui:Bashko pjesët e mbivendosura}} i bën një trup të vetëm të mbyllur (ai rindërton faqet aty ku takohen, prandaj është një buton i veçantë, dhe nuk bëhet kurrë për ju).

Për grupet e krijuara me {{ui:Shtyj/tërhiq}} mund të rregulloni edhe një nga një te {{ui:Informacioni i entitetit}} › {{ui:Shfaq problemet}} / {{ui:Rregullo}}, që ruan faqet që keni vizatuar. Shihni [Mjetet e trupave](topic:solids).

Lidhje të tjera: [Përgatit një model për printim 3D](topic:print-3d) · [Stili Fillestar](topic:beginner) · [Nuk është ndërtuar ende](topic:not-built-yet#3d-printing)
