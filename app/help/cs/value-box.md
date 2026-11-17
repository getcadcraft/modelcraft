---
title: Zadání přesných rozměrů do pole hodnoty
summary: Všechny způsoby zadání délek, rozměrů, bodů, odsazení, úhlů, stran a kopií a jak se čtou jednotky a holá čísla.
keywords: pole hodnoty, pole měření, vcb, zadání, přesně, kóta, délka, jednotky, stopy, palce, metrické, milimetry, souřadnice, odsazení, pole, strany, úhel, desetinná čárka
from: 0148dc3d
---

Pole hodnoty je ve stavovém řádku dole a jeho popisek se mění podle nástroje. Během práce ukazuje živou velikost; kdykoli můžete zadat přesnou.

## Jak zadávat

1. Akci zahajte kliknutím (první roh, plocha, bod, ze kterého se má přesouvat).
2. Pište. Do pole hodnoty klikat nemusíte: číslice nebo některý ze znaků `. , - ' " [ < * /` pošle váš text přímo tam.
3. Stiskněte {{key:Enter}}.

V poli hodnoty stiskněte {{key:Esc}} pro jeho vymazání a návrat do pohledu. Na dotykové obrazovce klepněte na pole hodnoty, aby se zobrazila klávesnice.

Pokud ModelCraft nepřečte, co jste napsali, stavový řádek zobrazí "Zadejte délku, například 3m, 10'6" nebo 4m,3m." Pokud s tím nástroj nemůže pracovat, zobrazí "Nepovedlo se: …" a důvod.

## Délky

| Zápis | Význam |
|---|---|
| `3m` `320cm` `3200mm` | Metry, centimetry, milimetry |
| `10'` `10ft` `10 feet` | Stopy |
| `6"` `6in` `6 inches` | Palce |
| `10'6"` `10' 6"` `10'-6 1/2"` | Stopy a palce, se zlomkem |
| `6 1/2"` `6-1/2"` `3/4"` | Palce se zlomkem |
| `1.5ft` `.5m` | Desetinná čísla s jednotkou |
| `120` | Holé číslo v jednotce modelu |

**Holé číslo používá jednotku modelu**, jak ukazuje výběr vpravo dole: palce v modelu ve stopách a palcích (takže `120` je 10 stop), milimetry v modelu v milimetrech a tak dále. Napsaná jednotka má vždy přednost, ať je jednotka modelu jakákoli. Typografické uvozovky a znaky prime (’ ” ′ ″) se také čtou jako stopy a palce.

:::warning
Vždy používejte **tečku** pro desetinná čísla: `2.5m`. Čárka odděluje dvě hodnoty, takže `2,5` znamená 2 a 5 (dvě hodnoty), ať máte jakékoli jazykové nastavení.
:::

## Výpočty

Jakákoli délka může být výpočet: sčítání `+`, odčítání `-`, násobení `*`, dělení `/` a závorky. Kalkulačka není potřeba.

| Zápis | Význam |
|---|---|
| `2.5/3` | Třetina z 2.5 (v jednotce modelu) |
| `12'6"+3/4"` | 12' 6 3/4" |
| `(24'-0")/3` | 8' |
| `2*450mm` | 900 mm |
| `4+7/16` | 4 7/16" v modelu ve stopách a palcích |
| `3m-25cm` | 2.75 m |

Holé číslo je v jednotce modelu, když je délka (`2.5/3` v modelu v metrech je 0.833 m), a obyčejný činitel, když něco násobí nebo dělí (`2*450mm`). Výpočty berou i úhly a činitele: `90/2` je 45°. Dvě vynásobené délky dají plochu, ne délku, takže `2m*3m` je odmítnuto.

Pokud ModelCraft výpočet nedokáže spočítat, stavový řádek napíše, co je špatně a kde, například "Dělení nulou (znak 4)." Také závorka spustí pole hodnoty, takže můžete začít znakem `(`.

Tyto zápisy si zachovávají vlastní význam: `/3`, `3x` a `*3` po kopii, `24s` pro strany a `/3` při vybrané hraně (to [rozdělí hranu](topic:divide)).

## Podle nástroje

| Nástroj | Popisek | Zápis |
|---|---|---|
| {{ui:Úsečka}} | {{ui:Délka}} | Délka (směrem k ukazateli), nebo bod či odsazení (níže) |
| {{ui:Obdélník}} | {{ui:Kóty}} | Dvě délky: `4m,3m`, `12',10'`. Funguje i středník: `4m;3m` |
| {{ui:Kružnice}}, {{ui:Mnohoúhelník}} | {{ui:Strany}}, potom {{ui:Poloměr}} | Před prvním kliknutím počet stran: `12s` nebo `12` (3 až 999). Po něm poloměr |
| {{ui:Tlač/tah}} | {{ui:Vzdálenost}} | Délka. Záporná jde opačným směrem |
| {{ui:Přesunout}} | {{ui:Vzdálenost}} | Délka (směrem k ukazateli), nebo bod či odsazení. Po kopii: `3x`, `*3`, `/3` |
| {{ui:Otočit}} | {{ui:Úhel}} | Stupně: `90`, `-45`, `22.5` |
| {{ui:Měřítko}} | {{ui:Měřítko}} | Činitel větší než 0: `2`, `0.5`, `1.25` |
| {{ui:Pásmo}} | {{ui:Odsazení}} nebo {{ui:Délka}} | Délka |
| {{ui:Rozdělit}} | {{ui:Díly}} | Kolik stejných dílů: `5`, `5s` nebo `/5` (2 až 1000). Viz [Rozdělení hrany nebo křivky na stejné díly](topic:divide) |
| {{ui:Kóta}} | {{ui:Odsazení}}, potom {{ui:Délka}} | Kam jde kótovací čára; hned po umístění nová délka změní velikost modelu |
| {{ui:Vybrat}} | {{ui:Hodnota}} | Při vybrané jedné kótě nebo hraně nová délka změní velikost modelu. Viz [Kóta a změna velikosti](topic:dimensions) |

## Body a odsazení

U {{ui:Úsečka}} a {{ui:Přesunout}} po prvním kliknutí:

- `[x,y,z]` přejde na přesný bod v modelu (v osách samotné skupiny, když upravujete uvnitř skupiny). Příklad: `[0,0,3m]` je 3 m přímo nad počátkem.
- `<dx,dy,dz>` jde o tuto vzdálenost od prvního bodu podél červené, zelené a modré osy. Příklad: `<0,0,10'>` je 10 stop přímo nahoru.

Každá ze tří hodnot může mít vlastní jednotku: `<12',0,6">`.

## Kopie po přesunu

Hned po kopii pomocí {{ui:Přesunout}}:

| Zápis | Vytvoří |
|---|---|
| `3x` nebo `*3` | 3 kopie v řadě se stejným rozestupem |
| `/3` | 3 kopie rovnoměrně rozložené od originálu k první kopii |

Až 500 kopií. Viz [Přesun, kopírování a vytváření polí](topic:move-copy#a-row-of-copies).

## Zadané délky potřebují směr

Jediná zadaná délka jde tím směrem, kam ukazuje kurzor od prvního kliknutí. Pokud začnete psát hned po kliknutí, dřív než pohnete myší, směr ještě není a nic se nestane. Posuňte kurzor trochu směrem, kam chcete jít, a potom pište.

## Jednotka modelu

Jednotku změníte ve výběru vpravo dole: {{ui:ft a in}}, in, ft, yd, mi, mil, µm, mm, cm, m nebo km, pokud jsou zapnuté v {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Jednotky}} (vlastní jednotka modelu tam vždy je). Délka napsaná se značkou kterékoli jednotky se čte v této jednotce. Viz [Jednotky, zadané hodnoty a seznamy jednotek](common:unit-lists). Mění se tím způsob zobrazení délek a čtení holých čísel; model zůstává stejně velký. Jednotka se ukládá do souboru.

Způsob zobrazení velikostí:

| Jednotka | Délky | Plochy | Objemy |
|---|---|---|---|
| ft a in | `10' 6 1/2"` (na 1/16") | sq ft | cu ft |
| in | `126 1/2"` | sq in | cu in |
| m | `3.2 m` | m² | m³ |
| cm | `320 cm` | cm² | cm³ |
| mm | `3200 mm` | m² od 0.01 m², jinak mm² | m³ od 0.01 m³, jinak mm³ |

Nový model začíná ve stopách a palcích, když je jazyk prohlížeče nastaven na region USA (a v Libérii a Myanmaru), jinak v milimetrech. Místo toho se použije jednotka označená hvězdičkou v {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Jednotky}}, pokud ji ModelCraft má. Nebo změňte výběr po {{ui:Nový}}.
