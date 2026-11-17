---
title: Osvětlení modelu lampami
summary: Umístěte do modelu lampy, reflektory a plošná světla, aby vykreslené obrázky mohly ukazovat místnosti v noci nebo osvětlené interiéry, s měkkými stíny.
keywords: světlo, světla, lampa, lampy, osvětlení, žárovka, stropní světlo, reflektor, bodové světlo, plošné světlo, plošný zdroj, lumeny, jas, teplota barvy, teplé, noc, interiér, vykreslení
from: c8d72cbc
---

Lampy osvětlují [vykreslené obrázky](topic:render). Ve 3D pohledu se nemění; tam se každá lampa zobrazuje jako malá značka ve vlastní barvě.

## Přidání lampy

1. V sekci {{ui:Světla}} vpravo klikněte na {{ui:Lampa}}, {{ui:Reflektor}} nebo {{ui:Plošné světlo}}.
2. Klikněte, kam ji umístit. Přichytávání funguje stejně jako při kreslení.
   - Na stropě nebo stěně **lampa** visí 25 cm od plochy, na straně, ze které se díváte; **plošné světlo** leží na ploše a svítí od ní pryč.
   - **Reflektor** se umísťuje dvěma kliknutími: nejprve místo, potom to, kam míří.

Nová lampa je vybrána v sekci {{ui:Světla}}, připravena ke změně.

## Úprava lampy

Klikněte na název lampy v sekci {{ui:Světla}}, nebo na její značku v pohledu nástrojem {{ui:Vybrat}}. Potom:

| Nastavení | Co to dělá |
|---|---|
| {{ui:Jas (lumeny)}} | Kolik světla dává. Běžná domácí žárovka má zhruba 800 lumenů; jasný stropní panel 3000 |
| {{ui:Barva}} | {{ui:Teplé světlo}} (domácí žárovka), {{ui:Neutrální světlo}} nebo {{ui:Denní světlo}}, případně libovolná barva |
| {{ui:Úhel svazku (stupně)}} | Kužel reflektoru od okraje k okraji |
| {{ui:Velikost žárovky}}, {{ui:Šířka}}, {{ui:Hloubka}} | Větší žárovky a panely dávají měkčí stíny |
| {{ui:Červená (x)}}, {{ui:Zelená (y)}}, {{ui:Výška}} | Kde se nachází |

Zaškrtávací políčko vedle názvu lampy ji zapíná a vypíná. {{ui:Smazat světlo}} ji odstraní. Každá změna je jeden krok: {{key:Ctrl+Z}} ji vrátí zpět. Lampy se ukládají do souboru `.modelcraft`.

## Obrázky v noci

V {{ui:Vykreslit obrázek…}} zaškrtněte {{ui:Pro tento obrázek použít jiné datum a čas}} a vyberte večerní hodinu. Když je slunce pod obzorem, obloha ztmavne a model osvětlují jen lampy. Pokud je obrázek příliš tmavý, zvyšte v dialogu {{ui:Jas}} nebo přidejte lampy.

:::tip
Pro místnost viděnou zevnitř umístěte kameru dovnitř místnosti (otočte a přiblížte, nebo použijte [scénu](topic:scenes)), přidejte lampu na strop a vykreslete v noci. V režimu {{ui:Rychlý}} zůstávají rohy dále od lampy tmavší než na fotografii; [režim vysoké kvality](topic:render#high-quality) nechá světlo odrážet od stěn.
:::
