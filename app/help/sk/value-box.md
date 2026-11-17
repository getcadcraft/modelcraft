---
title: Presné veľkosti zadávajte do poľa hodnoty
summary: Všetky spôsoby zadávania dĺžok, veľkostí, bodov, odsadení, uhlov, strán a kópií a ako sa čítajú jednotky a holé čísla.
keywords: pole hodnoty, pole mier, vcb, zadávanie, presné, kóta, dĺžka, jednotky, stopy, palce, metrické, milimetre, súradnice, odsadenie, kópie, pole, uhol, desatinná čiarka
from: 0148dc3d
---

Pole hodnoty je v stavovom riadku dole, s popiskom, ktorý sa mení podľa nástroja. Počas práce ukazuje živú veľkosť; kedykoľvek môžete zadať presnú.

## Ako zadávať

1. Akciu začnite kliknutím (prvý roh, plocha, bod, z ktorého sa hýbe).
2. Píšte. Nemusíte klikať do poľa hodnoty: číslica alebo jeden zo znakov `. , - ' " [ < * /` pošle vaše písanie tam.
3. Stlačte {{key:Enter}}.

Stlačte {{key:Esc}} v poli hodnoty, aby ste ho vymazali a vrátili sa do pohľadu. Na dotykovej obrazovke klepnite na pole hodnoty, aby sa zobrazila klávesnica.

Ak ModelCraft nevie prečítať, čo ste napísali, stavový riadok zobrazí "Zadajte dĺžku, napríklad 3m, 10'6" alebo 4m,3m." Ak to nástroj nevie použiť, zobrazí "Nepodarilo sa: …" s dôvodom.

## Dĺžky

| Zápis | Znamená |
|---|---|
| `3m` `320cm` `3200mm` | Metre, centimetre, milimetre |
| `10'` `10ft` `10 feet` | Stopy |
| `6"` `6in` `6 inches` | Palce |
| `10'6"` `10' 6"` `10'-6 1/2"` | Stopy a palce, so zlomkom |
| `6 1/2"` `6-1/2"` `3/4"` | Palce so zlomkom |
| `1.5ft` `.5m` | Desatinné čísla s jednotkou |
| `120` | Holé číslo, v jednotke modelu |

**Holé číslo používa jednotku modelu**, ako je zobrazená vo výbere vpravo dole: palce v modeli so stopami a palcami (takže `120` je 10 stôp), milimetre v modeli v milimetroch a podobne. Zápis jednotky má vždy prednosť, bez ohľadu na jednotku modelu. Typografické úvodzovky a prime značky (’ ” ′ ″) sa tiež čítajú ako stopy a palce.

:::warning
Desatinné čísla vždy píšte s **bodkou**: `2.5m`. Čiarka oddeľuje dve hodnoty, takže `2,5` znamená 2 a 5 (dve hodnoty), bez ohľadu na jazykové nastavenia.
:::

## Výpočty

Ľubovoľná dĺžka môže byť výpočet: sčítanie `+`, odčítanie `-`, násobenie `*`, delenie `/` a zátvorky. Kalkulačka nie je potrebná.

| Zápis | Znamená |
|---|---|
| `2.5/3` | Tretina z 2.5 (v jednotke modelu) |
| `12'6"+3/4"` | 12' 6 3/4" |
| `(24'-0")/3` | 8' |
| `2*450mm` | 900 mm |
| `4+7/16` | 4 7/16" v modeli so stopami a palcami |
| `3m-25cm` | 2.75 m |

Holé číslo je v jednotke modelu, keď je dĺžka (`2.5/3` v modeli v metroch je 0.833 m), a čistý činiteľ, keď ním násobíte alebo delíte dĺžku (`2*450mm`). Uhly a činitele tiež berú výpočty: `90/2` je 45°. Dve dĺžky vynásobené dávajú plochu, nie dĺžku, takže `2m*3m` sa odmietne.

Ak ModelCraft nevie výpočet vyriešiť, stavový riadok povie, čo je zle a kde, napríklad "Delenie nulou (znak 4)." Aj zátvorka spustí pole hodnoty, takže môžete začať znakom `(`.

Tieto zápisy si zachovávajú svoj význam: `/3`, `3x` a `*3` po kopírovaní, `24s` pre strany a `/3` pri vybranej hrane (ktorá [rozdelí hranu](topic:divide)).

## Podľa nástroja

| Nástroj | Popisok | Zápis |
|---|---|---|
| {{ui:Úsečka}} | {{ui:Dĺžka}} | Dĺžka (smerom k ukazovateľu), alebo bod či odsadenie (nižšie) |
| {{ui:Obdĺžnik}} | {{ui:Kóty}} | Dve dĺžky: `4m,3m`, `12',10'`. Funguje aj bodkočiarka: `4m;3m` |
| {{ui:Kružnica}}, {{ui:Mnohouholník}} | {{ui:Strany}}, potom {{ui:Polomer}} | Pred prvým kliknutím počet strán: `12s` alebo `12` (3 až 999). Po ňom polomer |
| {{ui:Tlač/ťah}} | {{ui:Vzdialenosť}} | Dĺžka. Záporná ide opačným smerom |
| {{ui:Presunúť}} | {{ui:Vzdialenosť}} | Dĺžka (smerom k ukazovateľu), alebo bod či odsadenie. Po kopírovaní: `3x`, `*3`, `/3` |
| {{ui:Otočiť}} | {{ui:Uhol}} | Stupne: `90`, `-45`, `22.5` |
| {{ui:Mierka}} | {{ui:Mierka}} | Činiteľ väčší ako 0: `2`, `0.5`, `1.25` |
| {{ui:Pásmo}} | {{ui:Odsadenie}} alebo {{ui:Dĺžka}} | Dĺžka |
| {{ui:Rozdeliť}} | {{ui:Diely}} | Koľko rovnakých častí: `5`, `5s` alebo `/5` (2 až 1000). Pozri [Rozdelenie hrany alebo krivky na rovnaké časti](topic:divide) |
| {{ui:Kóta}} | {{ui:Odsadenie}}, potom {{ui:Dĺžka}} | Kam ide kótovacia čiara; hneď po umiestnení nová dĺžka zmení veľkosť modelu |
| {{ui:Vybrať}} | {{ui:Hodnota}} | Pri jednej vybranej kóte alebo hrane nová dĺžka zmení veľkosť modelu. Pozri [Kóta a zmena veľkosti](topic:dimensions) |

## Body a odsadenia

Pre {{ui:Úsečka}} a {{ui:Presunúť}} po prvom kliknutí:

- `[x,y,z]` ide na ten presný bod v modeli (v osiach skupiny, keď upravujete vnútri skupiny). Príklad: `[0,0,3m]` je 3 m rovno nad počiatkom.
- `<dx,dy,dz>` ide tak ďaleko od prvého bodu pozdĺž červenej, zelenej a modrej. Príklad: `<0,0,10'>` je 10 stôp rovno hore.

Každá z troch hodnôt môže mať vlastnú jednotku: `<12',0,6">`.

## Kópie po presunutí

Hneď po kopírovaní s {{ui:Presunúť}}:

| Zápis | Vytvorí |
|---|---|
| `3x` alebo `*3` | 3 kópie v rade s rovnakým rozostupom |
| `/3` | 3 kópie rovnomerne rozložené od pôvodného po prvú kópiu |

Až 500 kópií. Pozri [Presun, kopírovanie a polia](topic:move-copy#a-row-of-copies).

## Zadané dĺžky potrebujú smer

Jedna zadaná dĺžka ide smerom, akým ukazuje ukazovateľ od prvého kliknutia. Ak píšete hneď po kliknutí, ešte pred pohybom, smer nie je a nič sa nestane. Pohnite ukazovateľom trochu smerom, kam chcete ísť, a potom píšte.

## Jednotka modelu

Jednotku zmeníte vo výbere vpravo dole: {{ui:ft a in}}, in, ft, yd, mi, mil, µm, mm, cm, m alebo km, pokiaľ sú zapnuté v {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Jednotky}} (vlastná jednotka modelu tam vždy je). Dĺžka napísaná so značkou ľubovoľnej jednotky sa číta v tejto jednotke. Pozri [Jednotky, zadané hodnoty a zoznamy jednotiek](common:unit-lists). Mení to len zobrazenie dĺžok a čítanie holých čísel; model zostáva rovnako veľký. Jednotka sa ukladá do súboru.

Ako sa zobrazujú veľkosti:

| Jednotka | Dĺžky | Plochy | Objemy |
|---|---|---|---|
| ft a in | `10' 6 1/2"` (na 1/16") | sq ft | cu ft |
| in | `126 1/2"` | sq in | cu in |
| m | `3.2 m` | m² | m³ |
| cm | `320 cm` | cm² | cm³ |
| mm | `3200 mm` | m² od 0.01 m², inak mm² | m³ od 0.01 m³, inak mm³ |

Nový model sa otvorí v stopách a palcoch, keď má jazyk prehliadača nastavený americkú oblasť (a Libéria a Mjanmarsko), inak v milimetroch. Jednotka označená hviezdičkou v {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Jednotky}} sa použije namiesto nej, ak ju ModelCraft má. Alebo zmeňte výber po {{ui:Nový}}.
