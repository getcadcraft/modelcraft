---
title: Protnutí ploch
summary: Nakreslete čáry, kde se plochy navzájem protínají, abyste mohli tlačit, mazat nebo malovat jednotlivé kousky.
keywords: protnout, protnout plochy, protnout s modelem, řez, otvor, spojit, čáry, kde se plochy kříží, booleovské operace
from: 6bc58526
---

Když jeden tvar prochází jiným, ModelCraft nekreslí čáru, kde se jejich plochy setkávají: jen se překrývají. **Protnout** kreslí tyto čáry jako hrany, takže se plochy na nich rozdělí. Pak můžete tlačit/tahat, mazat nebo malovat jednotlivé kousky.

Oba příkazy jsou v {{ui:Úpravy}} › {{ui:Další}}.

## Protnout s modelem

Proříznout to, co vyberete, proti **každé ploše na obrazovce**.

Například kvádr (skupina) prochází stěnou (jinou skupinou) a chcete v zdi otvor:

1. Dvakrát klikněte na stěnu, abyste ji otevřeli, a vyberte všechny její plochy ({{key:Ctrl+A}}).
2. {{ui:Úpravy}} › {{ui:Další}} › {{ui:Protnout s modelem}}.

Obrys nosníku se nakreslí na obě plochy stěny jako dvě nové plochy. Jednu z nich protlačte skrz stěnu a vytvořte otvor, potom stěnu zavřete.

## Protnout s výběrem

Proříznout vybrané plochy, skupiny a komponenty **pouze navzájem**. Vyberte alespoň dvě.

## Kam čáry jdou

Čáry se vždy kreslí v **otevřeném kontextu**: v modelu, když není otevřena žádná skupina, nebo ve skupině, kterou upravujete. Skupiny a komponenty, které nejsou otevřené, se nemění. Chcete-li tedy proříznout plochy skupiny, nejprve ji otevřete, jak je uvedeno v příkladu výše.

## Co je dobré vědět

- Plochy ležící ve stejné rovině se neprotínají.
- Čáry, které uzavírají smyčku na ploše, vytvoří novou plochu, stejně jako nakreslené čáry.
- Každé protnutí je jeden krok zpět. Nekříží-li se nic, nic se nezmění.
- U uzavřených tvarů celou práci udělají [nástroje těles](topic:solids) (Sjednotit, Odečíst) v jednom kroku.
