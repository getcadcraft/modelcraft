---
title: "Štítky: zobrazenie a skrytie sád vecí"
summary: Dajte skupinám a komponentom štítok, napríklad Nábytok alebo Steny, a naraz skryte alebo zobrazte všetko s týmto štítkom.
keywords: štítky, štítok, hladiny, hladina, zobraziť, skryť, viditeľnosť, usporiadať, nábytok, steny, bez štítku, premenovať štítok, zmazať štítok
from: c1a95a05
---

Štítok je názov, ktorý dávate skupinám a komponentom, napríklad **Nábytok**, **Steny** alebo **Pozemok**, aby ste mohli naraz skryť alebo zobraziť všetko s týmto štítkom. Štítky sú to, čomu CAD programy hovoria hladiny. Na skrývanie po jednom pozri [Skrytie, izolácia a zobrazenie](topic:hide-isolate).

## Vytvorenie štítka

1. V {{ui:Štítky}} vpravo kliknite na {{ui:Pridať štítok}}.
2. Zadajte jeho názov a stlačte {{key:Enter}}.

Ak chcete štítok premenovať, kliknite na jeho názov v {{ui:Štítky}}, zadajte nový názov a stlačte {{key:Enter}}. Dva štítky nemôžu mať rovnaký názov.

## Označenie skupín a komponentov

1. Vyberte jednu alebo viac skupín či komponentov.
2. V {{ui:Informácie o entite}} vyberte štítok v {{ui:Štítok}}. {{ui:Nový štítok…}} vytvorí nový a označí ním výber.

{{ui:Bez štítku}} štítok odstráni. Číslo pri každom štítku v {{ui:Štítky}} ukazuje, koľko skupín a komponentov ho má.

Štítkujte skupiny a komponenty, nie voľné plochy a hrany: veci, ktoré chcete označiť, najprv nakreslite ako skupiny (vyberte ich a stlačte {{key:Shift+G}}).

## Skrytie a zobrazenie

Kliknite na oko vedľa štítka. Všetko s týmto štítkom zmizne z pohľadu, kdekoľvek v modeli (aj vnútri iných skupín), a kliknutia a prichytenia ho preskočia. Kliknutím na oko ho zobrazíte znova. Veci s {{ui:Bez štítku}} sa vždy zobrazujú.

Ak upravujete vnútri skupiny, ktorej štítok skryjete, skupina sa zatvorí.

## Zmazanie štítka

Kliknite na kôš vedľa neho. Veci, ktoré mali štítok, sa stanú {{ui:Bez štítku}} a zobrazia sa.

## Čo treba vedieť

- Štítky, ich názvy a to, ktoré sú skryté, sa uložia do súboru ModelCraft. Pri kopírovaní označenej skupiny do iného modelu sa prenesie aj jej štítok.
- Skrytie a zobrazenie štítka aj každá iná zmena štítkov je jeden krok späť.
- Exporty zahŕňajú všetko, aj skryté štítky, rovnako ako skryté veci.
- Hladiny v situačných plánoch DWG a DXF sa zatiaľ neimportujú ako štítky: celý výkres sa importuje ako jedna skupina.
