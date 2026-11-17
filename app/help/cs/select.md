---
title: Výběr prvků
summary: Klikání, dvojklik a trojklik, tažení rámečku okna nebo křížení, přidávání a odebírání pomocí modifikačních kláves a mazání.
keywords: vybrat, výběr, okno, křížení, přidat k výběru, zrušit výběr, vybrat vše, trojklik, dvojklik, smazat, vymazat
from: d56d1f89
---

{{ui:Vybrat}} ({{key:Space}}) je nástroj, se kterým ModelCraft začíná, a ke kterému se vrátíte klávesou {{key:Esc}}. Vybrané prvky se zbarví modře a {{ui:Informace o prvku}} vpravo říká, co jsou.

## Klik

| Akce | Vybere |
|---|---|
| Klikněte na plochu nebo hranu | Tuto plochu nebo hranu |
| Klikněte na skupinu nebo komponentu | Celou skupinu nebo komponentu |
| Dvojklik na plochu | Plochu a její hrany |
| Dvojklik na hranu | Hranu a plochy po obou stranách |
| Dvojklik na skupinu nebo komponentu | Otevře ji k úpravě (viz [Skupiny a komponenty](topic:groups-components)) |
| Trojklik na plochu nebo hranu | Vše, co s ní souvisí: celý objekt |
| Klik do prázdného prostoru | Nic (zruší výběr) |
| Dvojklik do prázdného prostoru při úpravě skupiny | Zavře skupinu |

Hrany se trefují snadněji než plochy: je-li kurzor několik pixelů od hrany, klik vybere hranu.

## Tažení rámečku

- **Zleva doprava** nakreslí plný rámeček: výběr **oknem**. Vybrány jsou pouze prvky, které jsou zcela uvnitř něj.
- **Zprava doleva** nakreslí čárkovaný rámeček: výběr **křížením**. Vybrán je každý prvek, kterého se rámeček dotkne, a plocha je vybrána, když je rámeček zcela uvnitř ní.

Skupina nebo komponenta se počítá jako jeden prvek: okno ji musí obsáhnout celou, křížení se jí stačí dotknout.

## Přidávání a odebírání

Při kliknutí nebo tažení podržte klávesu:

| Klávesa | Účinek |
|---|---|
| {{key:Shift}} | Přepíná: přidá, co není vybráno, a odebere, co vybráno je |
| {{key:Mod}} | Přidává |
| {{key:Shift}} a {{key:Mod}} společně | Odebírá |

Chcete-li vybrat vše v modelu (nebo vše ve skupině, kterou upravujete), stiskněte {{key:Mod+A}}.

## Zrušení výběru

Stiskněte {{key:Esc}} (s nástrojem {{ui:Vybrat}}) nebo klikněte do prázdného prostoru.

## Smazání vybraného

Stiskněte {{key:Delete}} nebo {{key:Backspace}}. Plochy, hrany, skupiny a vodítka ve výběru se odstraní najednou; {{key:Mod+Z}} je vrátí zpět.

Smazání hrany odstraní plochy, které ji potřebují, pokud hrana jen oddělovala dvě plochy ve stejné rovině: pak se obě plochy spojí v jednu. Smazání plochy ponechá její hrany. Viz [Mazání a úklid](topic:erase).

## Výběr uvnitř skupiny

Kliknutí na skupinu vybere celou skupinu. Chcete-li vybrat plochu uvnitř ní, dvojklikem skupinu otevřete a pak klikněte. Dokud je skupina otevřená, kliknutí zasáhnou pouze to, co je uvnitř; vše ostatní je zešednuto. Zavřete ji stiskem {{key:Esc}} bez výběru nebo dvojklikem do prázdného prostoru.

{{ui:Strom}} vlevo vybírá skupiny a komponenty podle názvu, což pomůže, když jsou skryté za jinými věcmi.
