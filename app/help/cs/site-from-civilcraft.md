---
title: Převzetí lokality z CivilCraft
summary: Otevřete soubor lokality od adresy, který vytvoří CivilCraft, a přidejte budovy a parcelu kolem ní jako hmoty a čáru lokality, jen ty, které zaškrtnete.
keywords: lokalita, civilcraft, adresa, parcela, sousední budovy, hmoty, kontext, ccsite, otevřená data, openstreetmap
from: f28e4a3b
---

CivilCraft umí vyhledat adresu a uložit, co o jejím okolí vědí zdroje otevřených dat: sousední budovy, parcelu a obrysy záplavových, územně plánovacích a půdních oblastí. ModelCraft tento soubor převezme jako návrhy. Nic se nepřidá, dokud to neřeknete.

## Načtení souboru

1. V CivilCraft odešlete lokalitu do ModelCraft, nebo soubor uložte (končí na `.ccsite.json`).
2. V ModelCraft soubor otevřete nebo přetáhněte. Otevře se seznam se zaškrtávacím polem pro každou budovu a pro parcelu.
3. Zadejte výšku budov, pro které zdroj žádnou neuvedl. Vedle každé budovy je řádek, který říká, odkud její výška pochází: počet podlaží po 3 m, nebo výška, kterou jste zadali.
4. Stiskněte {{ui:Přidat zaškrtnuté}}.

Zaškrtnuté budovy se stanou vytaženými hmotami v jedné komponentě a parcela se stane čárou kolem lokality. Vše je jeden krok zpět. Bod adresy leží v počátku, v metrech na východ a na sever od něj.

Obrysy záplavových území, územního plánování a půd jsou uvedeny jen pro informaci; nekreslí se.

Data pocházejí z otevřených zdrojů a jejich uvedení autora je ve spodní části seznamu. Výšky, které nebyly uvedeny, jsou předpoklady, proto je před použitím zkontrolujte.
