---
title: Seznam nástrojů
summary: Každý nástroj ModelCraftu s jeho klávesou, co dělá každé kliknutí a co můžete napsat do pole hodnoty během práce.
keywords: nástroje, panel nástrojů, příkazy, seznam, úsečka, obdélník, kružnice, mnohoúhelník, odsazení, oblouk, křivka, spline, sledovat cestu, tažení po dráze, oblouk ze 2 bodů, oblouk od středu, výběr, tlač tah, přesunout, otočit, měřítko, guma, pásmo, kóta, obíhání, posun, zoom, umístit komponentu
from: e08a274f
---

Tip ve stavovém řádku vždy říká, co aktuální nástroj chce jako další. {{key:Esc}} zruší to, co nástroj zrovna dělá.

## Kreslicí nástroje

| Nástroj | Klávesa | Kliknutí | Napište do pole hodnoty |
|---|---|---|---|
| {{ui:Úsečka}} | {{key:L}} | Začátek, pak každý další bod. Zastaví se, když se plocha uzavře, nebo na {{key:Esc}} | Délku ve směru ukazatele; `[x,y,z]` bod; `<dx,dy,dz>` odsazení ({{ui:Délka}}) |
| {{ui:Obdélník}} | {{key:R}} | První roh (na zemi nebo na ploše), protilehlý roh | Šířku a hloubku: `4m,3m` ({{ui:Kóty}}) |
| {{ui:Kružnice}} | {{key:C}} | Střed (na zemi nebo na ploše), bod na okraji | Před prvním kliknutím: strany, `24s` nebo `24` ({{ui:Strany}}). Potom: poloměr ({{ui:Poloměr}}) |
| {{ui:Mnohoúhelník}} | {{key:N}} | Střed, roh | Stejně jako {{ui:Kružnice}}; začíná se 6 stranami |
| {{ui:Oblouk}} | {{key:A}} | Začátek, konec, pak vyklenutí | Délku tětivy po začátku ({{ui:Délka}}); vyklenutí po konci ({{ui:Vyklenutí}}); `12s` pro segmenty |
| {{ui:Úhloměr}} | — | Střed, bod 0°, pak úhel | Úhel ve stupních ({{ui:Úhel}}) |
| {{ui:Sledovat cestu}} | — | Vyberte cestu, pak klikněte na plochu (nebo klikněte na plochu, pak na hranu cesty) | — |
| {{ui:Malovat}} | {{key:B}} | Plochu, skupinu nebo komponentu | — ({{key:Ctrl}} propojené, {{key:Shift}} všechno dané barvy, {{key:Alt}} převzetí barvy) |
| {{ui:Odsazení}} | {{key:F}} | Plochu (nebo nejprve vyberte plochu či hrany), pak stranu a vzdálenost | Vzdálenost ({{ui:Vzdálenost}}); směrem do plochy je dovnitř |
| {{ui:Křivka}} | — | Body, kterými křivka prochází; {{key:Enter}} nebo dvojklik dokončí | Délku podél ukazatele, `[x,y,z]` nebo `<dx,dy,dz>` pro další bod |
| {{ui:Oblouk od středu}} | — | Střed, začátek, pak konec | Poloměr po středu; úhel ve stupních po začátku; `12s` pro segmenty |

## Nástroje úprav

| Nástroj | Klávesa | Kliknutí | Napište do pole hodnoty |
|---|---|---|---|
| {{ui:Vybrat}} | {{key:Space}} | Klik, dvojklik, trojklik, tažení rámečku. Viz [Výběr věcí](topic:select) | S jednou vybranou kótou nebo hranou: novou délku, která změní velikost modelu |
| {{ui:Tlač/tah}} | {{key:P}} | Plochu, pak vzdálenost. Dvojklikem na plochu zopakujete poslední vzdálenost | Vzdálenost; záporná hodnota jde opačným směrem ({{ui:Vzdálenost}}) |
| {{ui:Přesunout}} | {{key:M}} | Z bodu do bodu. Podržte {{key:Ctrl}} nebo {{key:Alt}} pro kopírování | Vzdálenost směrem k ukazateli, `<dx,dy,dz>` nebo `[x,y,z]` ({{ui:Vzdálenost}}). Po kopírování: `3x` nebo `/3` |
| {{ui:Otočit}} | {{key:Q}} | Střed (na ploše pro otočení v její rovině), počáteční směr, koncový směr | Úhel ve stupních ({{ui:Úhel}}) |
| {{ui:Měřítko}} | {{key:S}} | Bod, který zůstane, referenční bod, nová velikost | Koeficient: `2`, `0.5` ({{ui:Měřítko}}) |
| {{ui:Guma}} | {{key:E}} | Klikněte nebo táhněte přes hrany, skupiny, vodítka a kóty | nic |
| {{ui:Pásmo}} | {{key:T}} | Z hrany: rovnoběžná vodicí čára. Z bodu: změří a zanechá vodicí bod | Odsazení ({{ui:Odsazení}}) nebo vzdálenost ({{ui:Délka}}) |
| {{ui:Kóta}} | {{key:D}} | Dva rohy (nebo jedna hrana), pak kam jde kótovací čára. Viz [Kótování a změna velikosti](topic:dimensions) | Odsazení ({{ui:Odsazení}}). Hned potom: novou délku, která změní velikost modelu |

{{ui:Přesunout}}, {{ui:Otočit}} a {{ui:Měřítko}} pracují s výběrem. Pokud nic není vybráno, vezmou nejprve to, na co kliknete (plocha přinese své hrany).

## Nástroje kamery

| Nástroj | Klávesa | Tažení pro |
|---|---|---|
| {{ui:Obíhat}} | {{key:O}} | Otáčení kolem části modelu pod ukazatelem ({{key:Shift}} posouvá) |
| {{ui:Posun}} | {{key:H}} | Posun pohledu |
| {{ui:Zoom}} | {{key:Z}} | Zoom: nahoru přibližuje, dolů oddaluje |
| {{ui:Rozsah}} | {{key:Shift+Z}} | (tlačítko, ne nástroj) Přizpůsobit celý model |

Myší je tyto nástroje potřeba jen zřídka: tažení prostředním tlačítkem obíhá, tažení pravým tlačítkem posouvá a kolečko přibližuje s jakýmkoli nástrojem. Viz [Obíhání, posun a zoom](topic:orbit-pan-zoom).

## Uspořádání

| Tlačítko | Klávesa | Funkce |
|---|---|---|
| {{ui:Komponenta}} | {{key:G}} | Z výběru udělá komponentu |
| {{ui:Skupina}} | {{key:Shift+G}} | Z výběru udělá skupinu |
| {{ui:Rozložit}} | žádná | Vrátí vybrané skupiny a komponenty zpět na volnou geometrii |

## Umístění komponenty

Není na panelu nástrojů: klikněte na {{ui:Umístit}} vedle komponenty v panelu {{ui:Komponenty}}. Klikněte jednou tam, kam má jít počátek komponenty; nástroj se pak vrátí na {{ui:Vybrat}}.
