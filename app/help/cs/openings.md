---
title: Vyříznutí otvoru skrz stěnu
summary: Nakreslete okno nebo dveře na stěnu s tloušťkou a protlačte je skrz, aby stěna dostala skutečný otvor.
keywords: okno, dveře, otvor, díra, stěna, řez, protlačit, dutina, tloušťka, fasáda
from: 6b22f32c
---

Otvor potřebuje stěnu se dvěma stranami: krabici nebo stěnu, kterou jste vytvořili vytažením dlouhého tenkého obdélníku nahoru. Samostatná plocha stojící sama o sobě nemá, skrz co by se protlačila.

## Vytvořte stěnu pro cvičení

1. Stiskněte {{key:R}}, klikněte na roh na zemi, napište `6m,0.3m` (nebo `20',12"`) a stiskněte {{key:Enter}}.
2. Stiskněte {{key:P}}, klikněte na obdélník, napište `3m` (nebo `10'`) a stiskněte {{key:Enter}}.

Máte stěnu tlustou 300 mm (12 in).

## Nakreslete otvor

1. Oběhněte pohled tak, abyste viděli dlouhou stranu stěny.
2. Stiskněte {{key:R}}.
3. Najeďte na plochu stěny a klikněte, kam přijde spodní roh okna. Nápověda říká „Na ploše“.
4. Napište šířku a výšku okna, například `1.2m,1.5m` (nebo `4',5'`), a stiskněte {{key:Enter}}.

   Okno je vlastní plocha uvnitř plochy stěny, která má teď kolem sebe díru.

Chcete-li ho umístit v přesné vzdálenosti od rohu a podlahy, nejprve použijte [vodicí čáry](topic:guides-measure): nástrojem {{ui:Pásmo}} vytáhněte vodicí čáry z dolní a koncové hrany stěny, pak začněte obdélník tam, kde se dvě vodicí čáry kříží (nápověda říká „Na vodicí“).

## Protlačte jej skrz

1. Stiskněte {{key:P}}.
2. Klikněte na plochu okna a protlačte ji do stěny.
3. Posouvejte, dokud se nezastaví na zadní ploše, a pak klikněte. Nebo napište tloušťku stěny, `300` (nebo `12`), a stiskněte {{key:Enter}}.

   ModelCraft se zastaví na ploše za ním a otevře ji: stěna má teď díru skrz naskrz se čtyřmi bočními plochami (ostění, nadpraží a parapet), které ji lemují. {{ui:Informace o prvku}} stále označuje stěnu jako uzavřené těleso, je-li seskupena.

Protlačíte-li méně než celou tloušťku, dostanete výklenek místo díry.

## Dveře

Nakreslete obdélník začínající na spodní hraně plochy stěny (nápověda říká „Na hraně“ nebo „Koncový bod“), aby otvor dosáhl podlahy. Protlačte jej stejným způsobem.

## Mnoho oken stejné velikosti

1. Vytvořte první otvor.
2. Pro další nakreslete obdélníky a pak na každý dvakrát klikněte nástrojem {{ui:Tlač/tah}}: dvojklik zopakuje poslední vzdálenost. Viz [Tlač a tah](topic:push-pull#repeat-the-last-distance).

## Nevyřízl-li se skrz

- Obdélník musí být nakreslen **na** ploše stěny. Byl-li nakreslen ve vzduchu před ní, je to samostatná plocha: zpět a nakreslete jej znovu, začínajíc na ploše.
- Protlačení se zastaví na první ploše za otvorem. Je-li uvnitř stěny něco jiného v cestě (vnitřní plocha zanechaná z dřívějšího kreslení), zastaví se tam; smažte hrany té plochy a zkuste to znovu.
- Geometrie v samostatné skupině se neřeže. Otevřete skupinu, která stěnu obsahuje, a nakreslete otvor uvnitř ní.
