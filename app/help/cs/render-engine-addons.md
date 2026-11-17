---
title: Přidání enginu pro vykreslování pomocí doplňku
summary: Co může doplněk přidat do seznamu Engine v dialogu Vykreslit, oprávnění, které potřebuje ke spuštění programu, a co Studio kontroluje a na co se ptá.
keywords: doplněk, addon, engine, vykreslovací engine, vývojář, engine.run, oprávnění, program, skript, podepsaný, studio, api
from: cd7a39ba
---

Doplněk (Nastavení › Doplňky) může do seznamu Engine v {{ui:Vykreslit obrázek…}} přidat engine. Úplný text pro autory doplňků je v oddílu 16 specifikace doplňku. Stručně:

- Doplněk zaregistruje engine s identifikátorem, který začíná jeho vlastním, s názvem, volitelným nastavením a **buď** programem ke spuštění, **nebo** funkcí v JavaScriptu, která obrázek nakreslí.
- Engine, který spouští program, potřebuje oprávnění **`engine.run`**. Ukáže se před instalací a v Nastavení. Běží pouze ve Studiu; v prohlížeči se zobrazí jako soubor k uložení.
- Doplněk pojmenuje program (prostý název souboru, nikdy ne shell), skript, který je **uvnitř podepsaného doplňku**, a argumenty tvořené zástupnými symboly a prostými slovy. Studio program najde, nebo jednou požádá, abyste ho ukázali.
- Když doplněk poprvé spustí program, **Studio se vás zeptá ve svém vlastním dialogu**: který doplněk, který program a že skript může dělat cokoli, co program umí. Povolte to jen doplňku, kterému důvěřujete. Vaše odpověď se zapamatuje pro tento doplněk a program.
- Balíček (scéna jako USD a soubor nastavení, s glTF souborem, pokud o něj doplněk požádá) a skript doplňku se uloží do nové dočasné složky. Program se spustí tam a obrázek se vrátí označený názvem enginu doplňku.

:::note
Doplňky mohou přidat vykreslovací enginy jen z API doplňků 1.4. Ukázkový příklad pro příkazově řízený open-source renderer je ve vlastním repozitáři; v tomto rendereru ještě nebyl spuštěn.
:::
