---
title: Štítky: zobrazení a skrytí sad věcí
summary: Přiřaďte skupinám a komponentám štítek, například Nábytek nebo Zdi, a skryjte nebo zobrazte všechno s tímto štítkem najednou.
keywords: štítky, štítek, vrstvy, vrstva, zobrazit, skrýt, viditelnost, uspořádat, nábytek, zdi, bez štítku, přejmenovat štítek, smazat štítek
from: c1a95a05
---

Štítek je název, který dáte skupinám a komponentám, například **Nábytek**, **Zdi** nebo **Pozemek**, abyste mohli všechno s tímto štítkem najednou skrýt nebo zobrazit. Štítky jsou to, čemu CAD programy říkají vrstvy. Pro skrytí jedné věci najednou viz [Skrytí, izolace a zobrazení](topic:hide-isolate).

## Vytvoření štítku

1. V {{ui:Štítky}} vpravo klikněte na {{ui:Přidat štítek}}.
2. Napište jeho název a stiskněte {{key:Enter}}.

Chcete-li štítek přejmenovat, klikněte na jeho název v {{ui:Štítky}}, napište nový a stiskněte {{key:Enter}}. Dva štítky nemohou mít stejný název.

## Označení skupin a komponent štítkem

1. Vyberte jednu nebo více skupin nebo komponent.
2. V {{ui:Informace o prvku}} vyberte štítek v {{ui:Označit štítkem}}. {{ui:Nový štítek…}} vytvoří nový a označí jím výběr.

{{ui:Bez štítku}} štítek odebere. Číslo vedle každého štítku v {{ui:Štítky}} říká, kolik skupin a komponent ho má.

Označujte skupiny a komponenty, ne volné plochy a hrany: věci, které chcete označit, nejprve nakreslete jako skupiny (vyberte je, {{key:Shift+G}}).

## Skrytí a zobrazení

Klikněte na oko vedle štítku. Vše s tímto štítkem zmizí z dohledu, ať je kdekoli v modelu (i uvnitř jiných skupin), a kliknutí i přichycení jím projdou. Dalším kliknutím na oko je zobrazíte. Věci {{ui:Bez štítku}} jsou vždy zobrazeny.

Pokud upravujete uvnitř skupiny, jejíž štítek skryjete, skupina se zavře.

## Smazání štítku

Klikněte na koš vedle něj. Věci, které měly štítek, se stanou {{ui:Bez štítku}} a zobrazí se.

## Co je dobré vědět

- Štítky, jejich názvy a to, které jsou skryté, se ukládají do souboru ModelCraft. Zkopírujete-li označenou skupinu do jiného modelu, štítek se přenese s ní.
- Skrytí a zobrazení štítku a každá jiná změna štítků je jeden krok funkce zpět.
- Exporty zahrnují vše, i skryté štítky, stejně jako u skrytých věcí.
- Vrstvy v situačních plánech DWG a DXF zatím nepřicházejí jako štítky: celý výkres se naimportuje jako jedna skupina.
