---
title: Tvarování sítě
summary: Tvarujte síť jako hlínu štětci — kreslení, hlína, vyhlazení, uchopení, nafouknutí, rýha, stáhnutí, zploštění — chraňte části maskou, zrcadlete přes osu X a přidávejte detail tam, kde tvarujete.
keywords: tvarování, sochání, štětec, štětce, hlína, kreslit, vyhladit, uchopit, nafouknout, rýha, stáhnout, zploštit, maska, symetrie, zrcadlit, detail, dynamická topologie, pero, tlak, tablet, stylus
from: 5477801a
---

Pracovní prostor Tvarování tvaruje síť štětci, jako hlínu: přejeďte po povrchu a ten se pod kulatým štětcem zvedne, klesne, vyhladí nebo sleduje ukazatel, nejsilněji uprostřed a s přechodem k nule na okraji.

## Začátek

Vyberte síť a v seznamu pracovních prostorů zvolte {{ui:Tvarování}}. Skupina nebo komponenta se nejdřív změní na síť, stejně jako v pracovním prostoru Síť. Štětce pracují s vrcholy sítě, takže síť s jejich větším počtem vytvoří jemnější tvary: nejdřív ji rozdělte ({{ui:Rozdělit}} v pracovním prostoru Síť, nebo modifikátor Subdivision surface, který použijete), případně zapněte {{ui:Detail}}.

## Štětce

| Štětec | Klávesa | Co dělá |
| --- | --- | --- |
| {{ui:Kreslit}} | {{key:D}} | Zvedne povrch pod štětcem |
| {{ui:Hlína}} | {{key:C}} | Nanáší ploché vrstvy a nejdřív vyplní prohlubně |
| {{ui:Vyhladit}} | {{key:S}} | Vyrovná hrboly; podržte {{key:Shift}} pro vyhlazení jakýmkoli štětcem |
| {{ui:Uchopit}} | {{key:G}} | Táhne povrch s ukazatelem |
| {{ui:Nafouknout}} | {{key:I}} | Vyboulí povrch podél jeho vlastního směru |
| {{ui:Rýha}} | {{key:Shift+C}} | Vyřízne ostrou rýhu |
| {{ui:Stáhnout}} | {{key:P}} | Táhne povrch k středu štětce |
| {{ui:Zploštit}} | {{key:T}} | Tlačí povrch k jeho průměrné rovině |
| {{ui:Maska}} | {{key:M}} | Namaluje masku, která chrání povrch před ostatními štětci |

Podržte {{key:Ctrl}} při tahu pro opačný směr (snížit místo zvednutí, hřbet místo rýhy, odstranit masku), nebo zapněte {{ui:Odebírat}}.

## Velikost a síla

Velikost štětce je v pixelech na obrazovce, takže se chová stejně, ať přibližujete jakkoli: {{key:[}} a {{key:]}} ho zmenší a zvětší, {{key:Shift+[}} a {{key:Shift+]}} mění jeho sílu. Panel ukazuje obojí.

Při peru na tabletu tlak zvětšuje a zesiluje štětec; panel obojí vypne.

## Zrcadlení, maska a detail

- {{ui:Zrcadlit X}} ({{key:X}}) tvaruje obě strany přes červenou najednou, pro tváře a postavy.
- Maska je při tvarování tmavší. {{ui:Vymazat masku}} ({{key:Alt+M}}) ji sundá, {{ui:Obrátit masku}} ({{key:Ctrl+I}}) zamaskuje, co bylo volné, a uvolní, co bylo maskované. Maska se ukládá se sítí.
- {{ui:Detail}} přidává trojúhelníky tam, kde tvarujete: hrany delší než velikost nastavená v panelu (pixely na obrazovce) se pod štětcem rozdělí. Vyžaduje síť z trojúhelníků a nejdřív se zeptá, zda ji vytvořit.

Každý tah je jeden krok zpět.

:::note
Detail pouze přidává trojúhelníky; nemaže ty, které se staly drobnými. Remesh (v pracovním prostoru Síť) vyrovná celou síť znovu.
:::

Viz také [Úprava sítě](topic:mesh-edit), [Sítě](topic:meshes) a [Modifikátory na síti](topic:modifiers).
