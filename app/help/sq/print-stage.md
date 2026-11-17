---
title: Vendosni gjërat në shtratin e printimit dhe dërgojini te një printer
summary: Shtoni artikuj nga Biblioteka ose modelin tuaj në shtratin e printerit, rregullojini, shikoni shtresat e prera dhe dërgoni printimin përmes USB ose rrjetit, ose ruani G-code-in, pa eksportuar një STL më parë.
keywords: faza e printimit, printim 3d, printer, shtrat, dërgo te printeri 3d, slicer, gcode, g-code, usb, klipper, moonraker, octoprint, prusalink, bibliotekë, rregullo, përshtat të gjitha, pamja paraprake e shtresave, mbushje, mbështetëse, filament, pla, petg, shtojcë, shtojcë printimi 3d
from: abcf5d7e
---

{{ui:Faza e printimit}} i vendos gjërat në shtratin e printerit tuaj, i pret në shtresa dhe i dërgon te printeri. Nuk eksportoni një skedar më parë. I përket shtojcës 3D Print, që është e ndezur si parazgjedhje.

:::note
Asgjë nuk është printuar ende në një printer të vërtetë me këtë. Slicer-i është i ri: shikoni shtresat e para të printimit të parë, dhe përdorni pamjen e shtresave përpara se ta dërgoni.
:::

## Çfarë do të bëni

Vendosni një model në shtrat, kontrolloni që përshtatet, shikoni shtresat e prera, dhe dërgojeni te një printer ose ruajeni G-code-in.

## Hapat

1. Klikoni {{ui:Faza e printimit}} në shiritin e veglave. Hapet një kartë mbi pamjen dhe një kontur me vija të ndërprera tregon shtratin tuaj.
2. Nën **Shto nga Biblioteka**, shkruani një emër në kutinë e kërkimit, shtypni {{ui:Kërko}} dhe shtypni {{ui:Shto}} te një rezultat. Artikulli zbret në shtrat në madhësi të plotë, ose i zvogëluar për t'u përshtatur. Çdo gjë që keni vizatuar ose importuar tashmë dhe që shihet në pamje është gjithashtu në shtrat.
3. Nën **Në shtrat**, kontrolloni madhësinë e çdo artikulli. Një artikull i shënuar **Jashtë shtratit** duhet zhvendosur. Zhvendosni, rrotulloni dhe zmadhoni gjërat në pamje me veglat e zakonshme.
4. Shtypni {{ui:Rregullo në shtrat}} për t'i shpërndarë artikujt, ose {{ui:Përshtat të gjitha në shtrat}} për t'i zvogëluar deri sa të përshtaten.
5. Nën **Printeri juaj**, zgjidhni madhësinë e **Shtratit** ose një nga profilet e printerit.
6. Nën **Cilësimet e printimit**, zgjidhni **Materialin**, **Cilësinë** dhe **Mbushjen %**, dhe shenjoni **Shto mbështetëse nën konsola** nëse forma e kërkon.
7. Shtypni {{ui:Pamja paraprake e shtresave}} dhe lëvizni rrëshqitësin **Shtresa** për të parë shtresat e prera. Nëse më pas ndryshoni fazën ose cilësimet, shtypni {{ui:Pamja paraprake e shtresave}} përsëri.
8. Nën **Lidhja**, zgjidhni {{ui:Kabllo USB}}, {{ui:Klipper (Moonraker)}}, {{ui:OctoPrint}} ose {{ui:PrusaLink}}. Për USB shtypni {{ui:Lidh}}. Për një printer rrjeti shkruani **Adresën** e tij (dhe **çelësin API** nëse e kërkon), pastaj shtypni {{ui:Testo lidhjen}}.
9. Shtypni {{ui:Dërgo te printeri 3D}}. Karta pyet nëse shtrati është i lirë dhe materiali i duhur është ngarkuar, dhe tregon kohën, materialin dhe temperaturat. Konfirmoni për ta dërguar.

Ju shfaqet një mesazh që printeri po niset. {{ui:Ndalo printimin}} i fik ngrohësit, ventilatorin dhe motorët. Nëse dëshironi vetëm një skedar, shtypni {{ui:Ruaj G-code-in në vend}}.

## Shënime

- USB kërkon Chrome ose Edge në një kompjuter, dhe faqja duhet të mbetet e hapur deri sa të mbarojë printimi. Mbyllja e saj ndal rrjedhën.
- Një printer rrjeti duhet të lejojë këtë sajt (në Moonraker shtojeni te `cors_domains`; në OctoPrint ndizni CORS dhe kopjoni një çelës API). Shfletuesi juaj mund të kërkojë të arrijë pajisjet në rrjetin tuaj.
- Asgjë nuk lidhet ose nuk dërgohet pa klikimin tuaj.
- Lista e slicer-ave është nën **Slicer**. {{ui:CadCraft basic (included, fastest)}} është e integruar. Kiri:Moto, PrusaSlicer, OrcaSlicer dhe Bambu Lab P2S janë shtojca të veçanta që i ndizni nga karta ose nën {{ui:Cilësimet}} › {{ui:Shtojcat}}. PrusaSlicer dhe OrcaSlicer përdorin kopjen tuaj dhe punojnë nga CadCraft Studio në një kompjuter.
- Copat që nuk janë trupa të mbyllur lihen jashtë, dhe karta ju thotë sa e formës është ajo.
- Për printerët e rrëshirës, shihni [Prerje për një printer rrëshire](topic:resin-printing). Për të kontrolluar ose riparuar një model më parë, shihni [Mbështetëse, trashësia e murit, zbrazja dhe riparimi](topic:print-tools).
