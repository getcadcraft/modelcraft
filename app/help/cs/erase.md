---
title: Mazání a úklid
summary: Smažte hrany, skupiny a vodítka gumou nebo klávesou Delete, spojte rozdělené plochy a opravte plochy obrácené špatným směrem.
keywords: smazat, guma, delete, odebrat, spojit, sloučit plochy, úklid, volné čáry, obrátit plochu, zadní plocha, zpět
from: 80b92a81
---

## Mazání gumou

1. Stiskněte {{key:E}} pro {{ui:Guma}}.
2. Klikněte na hranu, skupinu nebo komponentu, nebo na vodítko. Smaže se.
3. Chcete-li smazat více věcí, stiskněte a táhněte přes ně. Vše, přes co přejedete, se zvýrazní a při uvolnění se smaže všechno.

Guma nevybírá plochy: plocha zmizí, když smažete hrany, které potřebuje. Plochy jsou to, čím guma prochází, aby našla hrany.

## Co se stane s plochami

- **Hrana mezi dvěma plochami ve stejné rovině** (například čára nakreslená přes podlahu) zmizí a dvě plochy se **spojí** v jednu.
- **Hrana, kterou plocha potřebuje, aby zůstala uzavřená** (hrana krabice), vezme s sebou tu plochu. Smažete-li jednu horní hranu krabice, zmizí horní a jedna boční strana a zůstane otevřená krabice.
- **Volné konce** (body, které už žádná hrana nepoužívá) se uklidí.

Smazání poslední kopie komponenty ji odebere také z panelu {{ui:Komponenty}}.

## Mazání klávesou Delete

1. Vyberte, co chcete odstranit, nástrojem {{ui:Vybrat}}.
2. Stiskněte {{key:Delete}} nebo {{key:Backspace}}.

Tím se odstraní i plochy. Plocha smazaná tímto způsobem zanechá své hrany, takže můžete smazat horní stranu krabice, zachovat její obrys a nakreslit tam něco jiného.

## Úklid volných čar na rovné ploše

Pokud zeď nebo podlaha ukazuje čáry, které nechcete (zbytky po kreslení), smažte je gumou {{ui:Guma}}. Čáry ležící v ploše se zacelí; plocha zůstane.

## Plocha obrácená špatným směrem

Plocha pohlédnutá zezadu je modrošedá. Pokud plocha ukazuje modrošedou barvu na vnějšku vašeho modelu:

1. Vyberte plochu.
2. Klikněte na {{ui:Obrátit plochu}} v {{ui:Informace o prvku}}.

Směr plochy je nejdůležitější při exportu: renderery, herní enginy a 3D tiskárny mohou plochy směřující dovnitř skrýt nebo špatně přečíst.

## Vrácení chyby

{{key:Mod+Z}} vrací zpět po jednom kroku, {{key:Mod+Y}} (nebo {{key:Mod+Shift+Z}}) opakuje. Tažení gumou je jeden krok, bez ohledu na to, kolik věcí zasáhlo. Stavový řádek uvádí, co bylo vráceno: "Zpět: smazání."
