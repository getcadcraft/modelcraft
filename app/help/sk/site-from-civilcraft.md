---
title: Prevzatie lokality z CivilCraftu
summary: Otvorte súbor z adresy na lokalitu, ktorý vytvorí CivilCraft, a pridajte okolité budovy a parcelu ako hmoty a čiaru lokality, len tie, ktoré označíte.
keywords: lokalita, civilcraft, adresa, parcela, susedné budovy, hmoty, kontext, ccsite, otvorené dáta, openstreetmap
from: f28e4a3b
---

CivilCraft dokáže vyhľadať adresu a uložiť, čo o jej okolí vedia zdroje otvorených dát: susedné budovy, parcelu a obrysy záplav, zonácie a pôdy. ModelCraft ten súbor berie ako návrhy. Nič sa nepridá, kým to nepotvrdíte.

## Načítanie súboru

1. V CivilCrafte odošlite lokalitu do ModelCraftu alebo uložte súbor (končí na `.ccsite.json`).
2. V ModelCrafte otvorte alebo pretiahnite súbor. Otvorí sa zoznam so zaškrtávacím políčkom pre každú budovu a pre parcelu.
3. Zadajte výšku budov, pri ktorých zdroj žiadnu neuviedol. Vedľa každej je uvedené, odkiaľ jej výška pochádza: počet podlaží po 3 m, alebo výška, ktorú ste zadali.
4. Stlačte {{ui:Pridať označené}}.

Označené budovy sa stanú vytlačenými hmotami v jednom komponente a parcela sa stane čiarou okolo lokality. Všetko je jeden krok späť. Adresný bod leží v počiatku, v metroch na východ a na sever od neho.

Obrysy záplav, zonácie a pôdy sú uvedené len na informáciu; nekreslia sa.

Dáta pochádzajú z otvorených zdrojov a ich uvedenie autorov je v spodnej časti zoznamu. Výšky, ktoré neboli uvedené, sú predpoklady, preto ich pred použitím skontrolujte.
