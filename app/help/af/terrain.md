---
title: Terrein: grond uit kontoerlyne, en beeldhou daarvan
summary: Maak grond uit kontoerlyne of as 'n rooster, en lig dit dan op en laat dit sak met 'n sagte kwas.
keywords: terrein, grond, landskap, topografie, kontoerlyne, kontoerlyn, perseel, helling, heuwel, hoop, sandbak, smoove, beeldhou, gelykmaak, TIN
from: 407652b3
---

Terrein is grond wat uit driehoeke gemaak is, so dit kan enige vorm volg. Dit is 'n groep: dubbelklik daarop om dit te redigeer.

## Uit kontoerlyne

1. Kry die kontoerlyne by hul hoogtes: teken hulle, of [voer 'n perseelplan in](topic:site-plan) en skuif elke kontoer op tot sy vlak.
2. Kies hulle (al die rande van al die kontoerlyne).
3. {{ui:Edit}} › {{ui:More}} › {{ui:Terrain from selected contours}}.

ModelCraft verbind die kontoerpunte met driehoeke ('n TIN), en maak elke rand binne-in sag sodat die grond glad skadu. Die lyne self bly; vee hulle uit of versteek hulle wanneer jy hulle nie meer nodig het nie. Baie digte kontoerlyne word tot 8 000 punte verdun.

## 'n Rooster om te beeldhou

{{ui:Edit}} › {{ui:More}} › {{ui:Terrain grid…}} vra vir 'n breedte, 'n diepte en 'n selgrootte, en plaas dan 'n plat rooster van driehoeke waar jy sy hoek klik. Klein selle beeldhou gladder, maar maak meer vlakke (hoogstens 200 × 200 selle).

## Beeldhou: lig die grond op en laat dit sak

1. Dubbelklik op die terrein om dit oop te maak.
2. {{ui:Edit}} › {{ui:More}} › {{ui:Sculpt terrain}}. 'n Sirkel wys die kwas op die grond onder die wyser.
3. Sleep op om die grond onder die kwas op te lig, of af om dit te laat sak. Die middel beweeg die meeste, en die grond word tot niks by die sirkel se rand verminder nie, so heuwels en holtes kom glad uit.

Om 'n hoop 'n presiese hoogte te gee, klik een keer, tik dan die hoogte, soos `1.5m` ('n minusteken laat dit sak), en druk {{key:Enter}}. Om die kwas te verander, tik 'n lengte voordat jy klik: `5m` gee 'n kwas met 'n radius van 5 m.

Elke beeldhouery is een ontdoen-stap.

## Goed om te weet

- Beeldhou skuif slegs driehoeksvlakke, so elke vlak bly plat. Vlakke wat met die hand geteken is (reghoeke, veelhoeke) is nie terrein nie: die gereedskap sê dit.
- Beeldhou skuif punte reguit op en af; dit voeg nie punte by nie. Vir fyner detail, maak 'n rooster met kleiner selle.
- Terrein voer uit soos enige ander groep. In IFC is dit 'n building element proxy, soos alles anders.
