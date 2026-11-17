---
title: Komponenty, které se roztahují
summary: Udělejte jednu kopii komponenty širší, hlubší nebo vyšší, zatímco její části si zachovají velikost: delší stůl se stejnými nohami, vyšší knihovna s rozmístěnými policemi, zábradlí, jehož sloupky se opakují.
keywords: dynamická komponenta, natažení, změna velikosti komponenty, parametrický, pojmenované velikosti, opakovat, pole, nohy, police, zábradlí, pravidla, proměnné
from: b4c40f43
---

Změna měřítka komponenty zvětší všechno v ní, včetně nohou a příček. **Roztáhnout tuto kopii** mění šířku, hloubku nebo výšku komponenty, zatímco každá část se řídí pravidlem: deska stolu se zvětší, jeho nohy si zachovají tloušťku a zůstanou na koncích.

Funguje u komponent složených z částí, tedy skupin nebo komponent uvnitř komponenty, jako je každá věc z [startovní knihovny](topic:starter).

## Roztažení kopie

1. Vyberte komponentu.
2. V {{ui:Informace o prvku}} klikněte na {{ui:Roztáhnout tuto kopii…}}.
3. Zadejte novou {{ui:Šířka (červená)}}, {{ui:Hloubka (zelená)}} a {{ui:Výška (modrá)}} a klikněte na {{ui:Natažení}}.

Mění se jen tato kopie: stane se vlastní komponentou, která si pamatuje originál, ze kterého vznikla. Kdykoli ji roztáhněte znovu a přepočítá se znovu z originálu, takže se nic nerozchází. Ostatní kopie originálu zůstanou beze změny.

## Pravidla

Otevřete komponentu (dvojklikem) a vyberte některou z jejích částí. V {{ui:Informace o prvku}} se zobrazí {{ui:Když se komponenta roztahuje}} s pravidlem podél červené, zelené a modré osy:

| Pravidlo | Co část dělá | Příklad |
|---|---|---|
| {{ui:Natažení}} | Roste spolu s komponentou; její vzdálenosti od obou stran zůstávají | Deska stolu |
| {{ui:Zůstat na začátku}} / {{ui:Zůstat na konci}} | Zachovává svou velikost a vzdálenost od dané strany | Nohy |
| {{ui:Posunout úměrně}} | Zachovává velikost; její střed se posouvá úměrně | Police, klika dveří |
| {{ui:Změnit měřítko úměrně}} | Její poloha i velikost se mění úměrně | Stupně schodiště |
| {{ui:Opakovat}} | Kopie této části, každých ({{ui:Každých}}), od začátku až na vzdálenou stranu | Sloupky zábradlí |

{{ui:Automatické}} (výchozí) pravidlo určí a ukáže, které: {{ui:Natažení}}, když část prochází přes celou komponentu, {{ui:Posunout úměrně}}, když leží zhruba uprostřed, jinak zůstane u strany, ke které je blíž.

## Co je dobré vědět

- Tvary jednotlivých částí jsou sdílené, takže roztažená kopie je lehká. Úprava části se projeví ve všech kopiích.
- Roztažená kopie nesleduje pozdější změny pravidel nebo uspořádání originálu: roztáhněte ji znovu, aby se tyto změny propsaly.
- Plochy nakreslené volně v komponentě (ne v části) si zachovávají velikost; chcete-li, aby je sledovaly, udělejte z nich část.
- Pravidla a to, z čeho byla každá kopie roztažena, se ukládají do souboru ModelCraft.
