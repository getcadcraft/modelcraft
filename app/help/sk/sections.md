---
title: Rezné roviny: rozrezanie modelu
summary: Umiestnite reznú rovinu, aby ste videli dovnútra modelu, posúvajte ju, obráťte alebo vypnite rez.
keywords: rez, rezná rovina, rezný rez, rezať, odrezaný pohľad, orezanie, vnútro, pôdorys, rez plátkom, priečny rez
from: 28c3a645
---

Rezná rovina rozreže model, takže v ňom môžete vidieť a pracovať: pôdorys domu, vnútro skrine. Model sa nemení; rez je iba pohľad.

## Umiestnenie

1. Kliknite na {{ui:Section}} v skupine {{ui:Camera}}.
2. Kliknite na plochu. Rovina sa umiestni na túto plochu so štyrmi šípkami smerujúcimi k vám.

   Kliknutím mimo akejkoľvek plochy sa rovina umiestni kolmo na smer, v ktorom sa pozeráte najviac. Najprv stlačte šípku, aby ste ju postavili kolmo na červenú ({{key:Right}}), zelenú ({{key:Left}}) alebo modrú ({{key:Up}}).

Strana, na ktorú smerujú šípky, je **odrezaná**. Rovina umiestnená na ploche zatiaľ nič neodrezáva: posuňte ju do modelu.

## Posúvanie, obrátenie, vypnutie

Kliknite na obrys roviny, aby ste ju vybrali. V {{ui:Entity info}}:

- {{ui:Along its arrows}} hovorí, kde je. Zadajte novú vzdialenosť a stlačte {{key:Enter}}, aby ste ju posunuli cez model; zadanie `-1m` na rovine, ktorú ste umiestnili na prednej ploche, ju posunie 1 m do modelu.
- {{ui:Reverse}} otočí šípky, takže sa odreže druhá strana.
- {{ui:Active (cuts the model)}}: naraz reže iba jedna rovina. Začiarknite políčko inej roviny alebo umiestnite novú a tá bude rezať namiesto nej.
- Premenujte ju v {{ui:Name}}; zmažte ju klávesom {{key:Delete}} alebo nástrojom {{ui:Eraser}}.

Tam, kde rovina prechádza uzavretým telesom, sa rez vyplní tmavou farbou. Geometria, ktorá nie je uzavretá (jednotlivá plocha, otvorený kváder), sa zrezáva, ale nevypĺňa.

## Zobrazenie a skrytie

V {{ui:Views}}:

- {{ui:Show section planes}} skryje obrysy a šípky rovín (rez zostane).
- {{ui:Show section cuts}} vypne rez a zobrazí celý model bez zmazania rovín.

[Pohľad prezentácie](topic:styles-shadows#presentation-view) skryje aj obrysy.

## Čo treba vedieť

- To, čo je odrezané, sa nedá kliknúť ani prichytiť, takže môžete kresliť na to, čo rez ukazuje.
- Rezné roviny, ktorá je aktívna, a oba prepínače sa ukladajú do súboru ModelCraft. Každá zmena je jeden krok späť.
- Exporty vždy obsahujú celý model: rez je pohľad, nie úprava.
