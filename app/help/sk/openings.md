---
title: Vyrezať otvor v stene
summary: Nakreslite okno alebo dvere na stenu s hrúbkou a pretlačte ich, aby stena dostala skutočný otvor.
keywords: okno, dvere, otvor, diera, stena, rez, pretlačiť, dutina, hrúbka, fasáda
from: 6b22f32c
---

Otvor potrebuje stenu s dvoma stranami: škatuľu alebo stenu, ktorú ste vytvorili vytiahnutím dlhého tenkého obdĺžnika nahor. Jedna samostatne stojaca plocha nemá, kam by sa pretlačila.

## Vytvorte stenu na precvičenie

1. Stlačte {{key:R}}, kliknite na roh na zemi a zadajte `6m,0.3m` (alebo `20',12"`), potom stlačte {{key:Enter}}.
2. Stlačte {{key:P}}, kliknite na obdĺžnik a zadajte `3m` (alebo `10'`), potom stlačte {{key:Enter}}.

Máte stenu s hrúbkou 300 mm (12 in).

## Nakreslite otvor

1. Otočte pohľad tak, aby ste videli dlhú stranu steny.
2. Stlačte {{key:R}}.
3. Nasmerujte kurzor na plochu steny a potom kliknite tam, kam ide dolný roh okna. Tip hovorí „Na ploche“.
4. Zadajte šírku a výšku okna, napríklad `1.2m,1.5m` (alebo `4',5'`), a stlačte {{key:Enter}}.

   Okno je vlastná plocha vnútri plochy steny, ktorá má teraz okolo seba dieru.

Ak ho chcete umiestniť v presnej vzdialenosti od rohu a podlahy, najprv použite [vodiace čiary](topic:guides-measure): pomocou {{ui:Pásmo}} ťahajte vodiace čiary od spodnej a koncovej hrany steny, potom začnite obdĺžnik tam, kde sa dve vodiace čiary kríži (tip hovorí „Na vodiacej čiare“).

## Pretlačte ho

1. Stlačte {{key:P}}.
2. Kliknite na plochu okna a pretlačte ju do steny.
3. Pohybujte, kým sa nezastaví na zadnej ploche, potom kliknite. Alebo zadajte hrúbku steny, `300` (alebo `12`), a stlačte {{key:Enter}}.

   ModelCraft sa zastaví na ploche za ním a otvorí ju: stena má teraz dieru prechádzajúcu celou hrúbkou, lemovanú štyrmi bočnými plochami (ostenia, nadpražie a parapet). {{ui:Informácie o entite}} stále označuje stenu ako uzavreté teleso, keď je zoskupená.

Ak pretlačíte menej než celú hrúbku, dostanete výklenok namiesto diery.

## Dvere

Nakreslite obdĺžnik začínajúci na spodnej hrane plochy steny (tip hovorí „Na hrane“ alebo „Koncový bod“), aby otvor siahal k podlahe. Pretlačte ho rovnakým spôsobom.

## Veľa okien rovnakej veľkosti

1. Vytvorte prvý otvor.
2. Pre ďalšie nakreslite obdĺžniky, potom dvojitým kliknutím na každý z nich pomocou {{ui:Tlač/ťah}} zopakujte poslednú vzdialenosť: dvojité kliknutie zopakuje posledný posun. Pozri [Tlač/ťah](topic:push-pull#repeat-the-last-distance).

## Ak to nepreťalo

- Obdĺžnik musí byť nakreslený **na** ploche steny. Ak bol nakreslený vo vzduchu pred ňou, je to samostatná plocha: vráťte späť a nakreslite ho znova, začínajúc na ploche.
- Pretlačenie sa zastaví na prvej ploche za otvorom. Ak je vnútri steny niečo iné v ceste (zvyšná vnútorná plocha z predošlého kreslenia), zastaví sa tam; zmažte hrany tej plochy a skúste znova.
- Geometria v samostatnej skupine sa nerezaná. Otvorte skupinu, ktorá drží stenu, a nakreslite otvor vnútri nej.
