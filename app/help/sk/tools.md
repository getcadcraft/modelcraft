---
title: Zoznam nástrojov
summary: Každý nástroj ModelCraft s jeho klávesou, to, čo robí každé kliknutie, a čo môžete zadať do poľa hodnoty počas jeho práce.
keywords: nástroje, panel nástrojov, príkazy, zoznam, úsečka, obdĺžnik, kružnica, mnohouholník, odsadenie, oblúk, krivka, spline, nasleduj ma, ťahanie po dráhe, oblúk 2 body, oblúk zo stredu, vybrať, tlač/ťah, presunúť, otočiť, mierka, guma, pásmo, kóta, otáčanie, posun, zväčšenie, umiestniť komponent
from: e08a274f
---

Stavový riadok vždy hovorí, čo nástroj chce ďalej. {{key:Esc}} zruší to, čo nástroj práve robí.

## Kresliace nástroje

| Nástroj | Klávesa | Kliknutia | Zadajte do poľa hodnoty |
|---|---|---|---|
| {{ui:Úsečka}} | {{key:L}} | Začiatok, potom každý ďalší bod. Zastaví sa, keď sa uzavrie plocha, alebo stlačením {{key:Esc}} | Dĺžka smerom k ukazovateľu; `[x,y,z]` bod; `<dx,dy,dz>` posunutie ({{ui:Dĺžka}}) |
| {{ui:Obdĺžnik}} | {{key:R}} | Prvý roh (zem alebo plocha), protiľahlý roh | Šírka a hĺbka: `4m,3m` ({{ui:Kóty}}) |
| {{ui:Kružnica}} | {{key:C}} | Stred (zem alebo plocha), bod na okraji | Pred prvým kliknutím: strany, `24s` alebo `24` ({{ui:Strany}}). Potom: polomer ({{ui:Polomer}}) |
| {{ui:Mnohouholník}} | {{key:N}} | Stred, roh | Rovnako ako {{ui:Kružnica}}; začína so 6 stranami |
| {{ui:Oblúk}} | {{key:A}} | Začiatok, koniec, potom vypuklina | Dĺžka tetivy po začiatku ({{ui:Dĺžka}}); vypuklina po konci ({{ui:Vypuklina}}); `12s` pre segmenty |
| {{ui:Uhlomer}} | — | Stred, bod 0°, potom uhol | Uhol v stupňoch ({{ui:Uhol}}) |
| {{ui:Nasleduj ma}} | — | Vyberte dráhu, potom kliknite na plochu (alebo kliknite na plochu a potom na hranu dráhy) | — |
| {{ui:Farba}} | {{key:B}} | Plocha, skupina alebo komponent | — ({{key:Ctrl}} prepojené, {{key:Shift}} všetko danej farby, {{key:Alt}} zobrať farbu) |
| {{ui:Odsadenie}} | {{key:F}} | Plocha (alebo najprv vyberte plochu či hrany), potom strana a vzdialenosť | Vzdialenosť ({{ui:Vzdialenosť}}); do plochy je dovnútra |
| {{ui:Krivka}} | — | Body, ktorými krivka prechádza; dokončí sa {{key:Enter}} alebo dvojitým kliknutím | Dĺžka pozdĺž ukazovateľa, `[x,y,z]` alebo `<dx,dy,dz>` pre ďalší bod |
| {{ui:Oblúk zo stredu}} | — | Stred, začiatok, potom koniec | Polomer po strede; uhol v stupňoch po začiatku; `12s` pre segmenty |

## Upravovacie nástroje

| Nástroj | Klávesa | Kliknutia | Zadajte do poľa hodnoty |
|---|---|---|---|
| {{ui:Vybrať}} | {{key:Space}} | Kliknutie, dvojité kliknutie, trojité kliknutie, ťahanie rámčeka. Pozri [Výber vecí](topic:select) | Ak je vybraná jedna kóta alebo hrana: nová dĺžka, ktorá zmení veľkosť modelu |
| {{ui:Tlač/ťah}} | {{key:P}} | Plocha, potom vzdialenosť. Dvojitým kliknutím na plochu zopakujete poslednú vzdialenosť | Vzdialenosť; záporná ide opačným smerom ({{ui:Vzdialenosť}}) |
| {{ui:Presunúť}} | {{key:M}} | Z bodu do bodu. Podržte {{key:Ctrl}} alebo {{key:Alt}} na kopírovanie | Vzdialenosť smerom k ukazovateľu, `<dx,dy,dz>` alebo `[x,y,z]` ({{ui:Vzdialenosť}}). Po kopírovaní: `3x` alebo `/3` |
| {{ui:Otočiť}} | {{key:Q}} | Stred (na ploche pre otáčanie v jej rovine), smer začiatku, smer konca | Uhol v stupňoch ({{ui:Uhol}}) |
| {{ui:Mierka}} | {{key:S}} | Bod, ktorý zostane, referenčný bod, nová veľkosť | Koeficient: `2`, `0.5` ({{ui:Mierka}}) |
| {{ui:Guma}} | {{key:E}} | Kliknutie alebo ťahanie cez hrany, skupiny, vodiace čiary a kóty | nič |
| {{ui:Pásmo}} | {{key:T}} | Z hrany: rovnobežná vodiaca čiara. Z bodu: zmeria a zanechá vodiaci bod | Odsadenie ({{ui:Odsadenie}}) alebo vzdialenosť ({{ui:Dĺžka}}) |
| {{ui:Kóta}} | {{key:D}} | Dva rohy (alebo jedna hrana), potom kam pôjde kótovacia čiara. Pozri [Kótovanie a zmena veľkosti](topic:dimensions) | Odsadenie ({{ui:Odsadenie}}). Hneď potom: nová dĺžka, ktorá zmení veľkosť modelu |

{{ui:Presunúť}}, {{ui:Otočiť}} a {{ui:Mierka}} pracujú nad výberom. Ak nič nie je vybrané, najprv použijú to, na čo kliknete (plocha prinesie aj svoje hrany).

## Nástroje kamery

| Nástroj | Klávesa | Ťahaním |
|---|---|---|
| {{ui:Otáčanie}} | {{key:O}} | Otáčanie okolo časti modelu pod ukazovateľom ({{key:Shift}} posúva) |
| {{ui:Posun}} | {{key:H}} | Posúvanie pohľadu |
| {{ui:Zväčšenie}} | {{key:Z}} | Zväčšenie: ťah nahor priblíži, nadol oddiali |
| {{ui:Rozsah}} | {{key:Shift+Z}} | (tlačidlo, nie nástroj) Prispôsobí zobrazenie celému modelu |

Myšou tieto nástroje takmer nepotrebujete: ťahanie stredným tlačidlom otáča, ťahanie pravým tlačidlom posúva a koliesko zväčšuje s ktorýmkoľvek nástrojom. Pozri [Otáčanie, posun a zväčšenie](topic:orbit-pan-zoom).

## Usporiadanie

| Tlačidlo | Klávesa | Funkcia |
|---|---|---|
| {{ui:Komponent}} | {{key:G}} | Vybraný výber sa zmení na komponent |
| {{ui:Skupina}} | {{key:Shift+G}} | Vybraný výber sa zmení na skupinu |
| {{ui:Rozložiť}} | žiadna | Vybrané skupiny a komponenty sa zmenia späť na voľnú geometriu |

## Umiestnenie komponentu

Nie je na paneli nástrojov: kliknite na {{ui:Umiestniť}} vedľa komponentu v paneli {{ui:Komponenty}}. Kliknite raz tam, kam má prísť počiatok komponentu; nástroj sa potom vráti na {{ui:Vybrať}}.
