---
title: Úprava sítě v pracovním prostoru Síť
summary: Vybírejte vrcholy, hrany a plochy sítě, přesouvejte je a vytahujte, odsazujte, srážejte, řežte, slučujte, vyplňujte a propojujte s kterýmkoli stylem kláves.
keywords: síť, režim úprav, pracovní prostor sítě, vrchol, vrcholy, hrana, hrany, plocha, plochy, vytáhnout, odsadit, srazit, řez smyčkou, nůž, rozpůlit, roztočit, sloučit, rozpustit, vyplnit, vyplnit mřížkou, propojit, rozdělit, posunout, proporcionální úprava, útlum, pracovní prostor
from: 92a372dd
---

Pracovní prostor **Síť** upravuje [síť](topic:meshes) bod po bodu: její vrcholy, hrany a plochy. Geometrie tlač/tah zůstává v pracovním prostoru **Model**.

## Otevření

- Vyberte {{ui:Síť}} v seznamu {{ui:Pracovní prostor}} vlevo na panelu nástrojů. Vybraná síť se otevře k úpravě; vybraná skupina nebo komponenta se nejprve převede na síť (jeden krok zpět).
- Nebo dvakrát klikněte na síť, nebo ji s klávesami modeleru vyberte a stiskněte {{key:Tab}}.
- Když nic nevyberete, panel nabídne sítě k přidání: rovinu, mřížku, kostku, kruh, válec, kužel, kouli, ikosférickou kouli a torus. Nová se vloží tam, kam se dívá pohled, a otevře se k úpravě.

{{ui:Zpět na Model}} (nebo seznam, {{key:Tab}} s klávesami modeleru, {{key:Esc}} bez výběru s klávesami tlač/tah) vrátí do Modelu s vybranou sítí. Dokud je otevřený pracovní prostor Síť, zbytek modelu je ztlumen a nástroje kreslení Modelu jsou schovány.

## Výběr

| Akce | Účel |
|---|---|
| {{key:1}} {{key:2}} {{key:3}} | Vybrat vrcholy, hrany nebo plochy |
| Klik | Vybrat jeden; {{key:Shift}}+klik přidá nebo odebere |
| Přetáhnout rámeček | Vybrat, co je uvnitř a vidět; {{key:Shift}} přidá, {{key:Ctrl}} odebere |
| {{key:Alt}}+klik na hranu, nebo dvojklik na ni | Její smyčka hran (smyčka ploch v režimu ploch; celý okraj u otevřené hrany) |
| {{key:Ctrl}}+{{key:Alt}}+klik na hranu | Její kruh hran |
| Trojklik | Vše, co je k němu připojeno |

Skupina {{ui:Vybrat}} má také {{ui:Vše}}, {{ui:Spojené}}, {{ui:Smyčka}}, {{ui:Kruh}}, {{ui:Další}} a {{ui:Méně}}.

## Přesun, otočení, měřítko

{{ui:Přesunout}}, {{ui:Otočit}} a {{ui:Měřítko}} začínají od kurzoru: pohněte jím, potom klikněte nebo stiskněte {{key:Enter}}, aby se výběr položil, nebo {{key:Esc}} pro zrušení. {{key:X}}, {{key:Y}} nebo {{key:Z}} (nebo šipky) zamknou osu. Pro přesnou hodnotu zadejte vzdálenost, úhel nebo činitel; fungují i [výpočty](topic:value-box#calculations).

**Proporcionální úprava** ({{ui:Proporcionální}}, nebo v panelu): vrcholy blízko výběru sledují přesun, tím méně, čím jsou dál, až do dosahu, který nastavíte, s útlumem, který zvolíte. Zapněte {{ui:Jen podél sítě}}, aby se měřilo podél hran místo přímo.

{{ui:Posunout}} posune vybranou smyčku hran po sousedních hranách.

## Změna tvaru

| Nástroj | Co dělá |
|---|---|
| {{ui:Vytáhnout}} | Vytáhne vybrané plochy podél jejich normály, s novými bočními plochami (nebo vytvoří plochy z hran otevřeného okraje). Zadejte vzdálenost |
| {{ui:Odsadit}} | Pás uvnitř obrysu vybraných ploch; pro každou plochu zvlášť znovu stiskněte {{key:I}} |
| {{ui:Srazit}} | Srazí vybrané hrany (nebo, {{key:Ctrl}}+{{key:Shift}}+{{key:B}}, vrcholy) na šířku; kolečko nebo klávesy plus a minus přidávají segmenty pro zaoblenou hranu |
| {{ui:Řez smyčkou}} | Ukažte na hranu: nové smyčky napříč kruhem čtyřúhelníkových ploch; kolečko nastaví počet; kliknutím řežte |
| {{ui:Nůž}} | Klikněte na body na hranách nebo rozích; {{key:Enter}} přeřízne rovně přes plochy mezi nimi, jak je vidíte |
| {{ui:Rozpůlit}} | Nakreslete čáru na obrazovce: vybrané plochy (nebo všechny) se podél ní rozřežou |
| {{ui:Roztočit}} | Otáčí vybrané plochy nebo otevřené hrany kolem modré osy po krocích (kolečko je nastaví); plné otočení uzavře |
| {{ui:Rozdělit}} | Přeřízne vybrané hrany na dvě; celé plochy se změní na mřížku |
| {{ui:Sloučit}} | Vybrané vrcholy se stanou jedním, ve svém středu |
| {{ui:Rozpustit}} | Výběr odstraní, ale povrch zachová: plochy se spojí |
| {{ui:Vyplnit}} | Plocha přes vybraný otevřený okraj (nebo mezi dvěma otevřenými hranami) |
| {{ui:Vyplnit mřížkou}} | Vyplní otevřený okraj se sudým počtem hran mřížkou čtyřúhelníků |
| {{ui:Propojit}} | Spojí dvě vybrané otevřené smyčky hran plochami |
| {{ui:Rýha}} | Jak ostré zůstanou vybrané hrany, když je síť vyhlazena povrchem Subdivision: pohybem od středu, kolečkem (po krocích 0.1) nebo zadáním hodnoty 0 až 1. Panel ukáže rýhu vybraných hran a přijme i zadanou hodnotu. Hrany s rýhou se kreslí purpurově |
| {{ui:Převrátit}}, {{ui:Vyhladit}}, {{ui:Smazat}} | Otočí plochy; vyhladí vrcholy směrem k sousedům; smaže podle režimu výběru |

Každá je jeden krok zpět. Souřadnice textur, barvy a váhy se přenesou na nové plochy a vrcholy.

## Přesíťování

{{ui:Přesíťovat}} vytvoří celou síť znovu jako rovnoměrné trojúhelníky jedné velikosti, zadané při stisknutí (menší je jemnější a pomalejší). Uzavře díry, spojí kusy, které se překrývají, a vyrovná síť, kterou sochání natáhlo. Ostré hrany vyjdou velmi mírně zaoblené. UV souřadnice, malba a rýhy začínají znovu. Jeden krok zpět.

## Retopologie

Chcete-li vytvořit novou, čistší síť nad podrobnou (sochu, sken), v panelu zvolte podrobnou pod {{ui:Retopologie}} › **Stavět na**, potom:

- **Přichytit posunuté body k ní:** body, které posunete, a hrany, které vytáhnete, dosednou na její povrch.
- **Umístit vybrané body na ni** přesune vybrané body na ni hned (jeden krok zpět).
- **Zobrazit hrany této sítě v popředí** nakreslí síť, kterou stavíte, nad povrch, abyste ji viděli.

## Úprava poslední operace

Po {{ui:Odsadit}}, {{ui:Srazit}}, {{ui:Řez smyčkou}}, {{ui:Rozdělit}}, {{ui:Vyhladit}}, {{ui:Vyplnit mřížkou}} nebo {{ui:Roztočit}} panel ukáže jeho nastavení (šířka, segmenty, profil, řezy …). Změníte-li jedno, operace se provede znovu od místa, kde začala, stále jako jeden krok zpět.

## Klávesy

| | Klávesy tlač/tah | Klávesy modeleru |
|---|---|---|
| Přesun, otočení, měřítko | {{key:M}} {{key:Q}} {{key:S}} | {{key:G}} {{key:R}} {{key:S}} ({{key:G}} dvakrát posouvá) |
| Vytáhnout, odsadit | {{key:P}}, {{key:F}} | {{key:E}}, {{key:I}} |
| Smazat | {{key:E}} nebo {{key:Delete}} | {{key:X}} nebo {{key:Delete}} |
| Rýha | {{key:Shift+C}} | {{key:Shift+E}} |
| Vybrat vše, zrušit výběr, invertovat | {{key:Ctrl+A}}, {{key:Esc}}, {{key:Ctrl+I}} | {{key:A}}, {{key:Alt+A}}, {{key:Ctrl+I}} |
| Obě sady | {{key:Ctrl+B}} srazit, {{key:Ctrl+R}} řez smyčkou, {{key:K}} nůž | totéž, a navíc {{key:F}} vyplnit, {{key:M}} sloučit, {{key:Ctrl+X}} rozpustit, {{key:L}} / {{key:Ctrl+L}} spojené, {{key:Alt+N}} převrátit, {{key:O}} proporcionální, {{key:Shift+V}} posun vrcholů |

Viz také [Sítě](topic:meshes), [Modifikátory na síti](topic:modifiers) a [Ještě není hotovo](topic:not-built-yet).
