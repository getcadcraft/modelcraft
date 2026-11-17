---
title: Skrytie, izolácia a zobrazenie
summary: Odsuňte veci nabok, aby ste mohli pracovať medzi nimi, alebo zobrazte len to, na čom pracujete; skryté veci zostanú v súbore skryté.
keywords: skryť, zobraziť, zobraziť všetko, izolovať, skryť ostatné, zobraziť, skrytý, lokálny pohľad, viditeľnosť, odsunúť nabok
from: 2c8a3457
---

Skrytie odsunie veci nabok bez ich vymazania. Skrytá plocha, hrana, skupina alebo komponent sa nevykreslí a nedá sa na ne prichytiť, kliknúť ani vybrať, takže môžete pracovať na tom, čo je za alebo medzi vecami.

## Skryť

1. Vyberte, čo chcete skryť: plochy, hrany, skupiny alebo komponenty.
2. {{ui:Úpravy}} › {{ui:Viac}} › {{ui:Skryť}}.

Napríklad ak chcete pracovať v úzkej medzere medzi dvoma skupinami stojacimi tesne vedľa seba, vyberte prednú a skryte ju: kliknutia a prichytávanie teraz dosiahnu plochu za ňou.

## Izolovať

Vyberte to, čo chcete mať v zornom poli, potom {{ui:Úpravy}} › {{ui:Viac}} › {{ui:Izolovať (skryť zvyšok)}}. Všetko ostatné v modeli sa skryje — alebo, ak upravujete vnútri skupiny, všetko ostatné v tejto skupine. Vybraná plocha si zachová svoje hrany.

## Zobraziť všetko

{{ui:Úpravy}} › {{ui:Viac}} › {{ui:Zobraziť všetko}} zobrazí všetko znova, vo všetkých skupinách. {{ui:Informácie o entite}} povie, koľko vecí je skrytých, keď nič nie je vybraté, a je tam aj tlačidlo {{ui:Zobraziť všetko}}.

{{ui:Strom}} zobrazuje skryté skupiny a komponenty kurzívou s prečiarknutým okom; kliknutím na oko ich zobrazíte znova.

:::note
S klávesami v štýle Modeler: {{key:H}} skryje, {{key:Shift+H}} izoluje a {{key:Alt+H}} zobrazí všetko. ({{ui:Nastavenia}} › {{ui:ModelCraft}} vyberá štýl klávesov.)
:::

## Dôležité informácie

- To, čo je skryté, sa uloží do súboru ModelCraft a pri otvorení zostane skryté.
- Skryté veci sú stále v modeli: exporty ich obsahujú a rovnako ich obsahujú aj objemy a veľkosti v {{ui:Informácie o entite}}.
- Každé skrytie, izolácia alebo zobrazenie je jeden krok späť.
