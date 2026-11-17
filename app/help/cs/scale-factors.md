---
title: Změna měřítka podle faktorů a přídavek na smrštění
summary: Změňte měřítko výběru faktorem pro každou osu kolem zvoleného bodu, nebo zvětšete model o procento, o které se odlitek smrští.
keywords: měřítko, neuniformní, faktor, procento, natáhnout, smrštění, smrštit, odlitek, model, slévárna, přídavek, změna velikosti
from: 37e1bbff
---

Nástroj Měřítko ({{key:S}}) mění měřítko rovnoměrně nebo táhne za úchyt, aby natáhl jeden nebo dva směry. **Měřítko podle faktorů…** (nabídka Nástroje nebo skupina Upravit) je psaná forma: číslo pro každou ze tří os.

1. Vyberte hrany, plochy, skupiny nebo komponenty.
2. Otevřete {{ui:Měřítko podle faktorů…}}. Zadejte faktor pro červenou, zelenou a modrou. Faktor může být `1.015`, `101.5%` nebo `+1.5%` (a `-2%` pro menší). {{ui:Stejně na všech třech osách}} zkopíruje první do dalších dvou.
3. Vyberte, co **zůstane na místě**: střed výběru, jeho nejnižší roh, střed jeho spodní strany, nebo počátek.
4. Řádek pod poli ukáže velikost nyní a potom. {{ui:Měřítko}} to provede jako jeden krok zpět.

Osy jsou osy skupiny, kterou máte otevřenou (u modelu na nejvyšší úrovni). Skupina nebo komponenta, která je natočená, se při různých faktorech zkosí; místo toho změňte měřítko skupiny, která ji obsahuje. Obsah komponenty se nedotkne, takže její další kopie zůstanou beze změny.

## Přídavek na smrštění

Odlitek se při chladnutí smršťuje, proto se jeho model vyrobí větší. Pod **Přídavek na smrštění** zadejte procento pro každou osu (vaše slévárna nebo modelář ho uvede pro váš kov; 1.5 % níže je jen příklad) a stiskněte {{ui:Použít jako faktory}}.

- **Samotné procento** udělá faktor 1 plus procento: 1.5 % dá 1.015, to je to, co značí smršťovací měrka.
- **Přesně dostatečné** udělá faktor 1 dělené jedničkou minus procento: 1.5 % dá 1.0152, takže odlitek má po takovém smrštění velikost dílu.

Vaše poslední procenta si tento prohlížeč pamatuje.

:::note
Procento určujete vy: ModelCraft nic neví o vašem kovu, formě ani procesu.
:::
