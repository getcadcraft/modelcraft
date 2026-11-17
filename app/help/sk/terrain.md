---
title: "Terén: povrch z vrstevníc a jeho úprava"
summary: Vytvorte povrch z vrstevníc alebo ako mriežku a potom ho zdvihnite alebo znížte mäkkým štetcom.
keywords: terén, povrch, krajina, topografia, vrstevnice, vrstevnice, lokalita, svah, kopec, navŕšenie, pieskovisko, smoove, sochať, sklon, TIN
from: 407652b3
---

Terén je povrch zložený z trojuholníkov, takže sa môže prispôsobiť akémukoľvek tvaru. Je to skupina: dvojitým kliknutím ju otvorte a upravte.

## Z vrstevníc

1. Získajte vrstevnice vo ich výškach: nakreslite ich alebo [importujte situačný plán](topic:site-plan) a každú vrstevnicu posuňte do jej výšky.
2. Vyberte ich (všetky hrany všetkých vrstevníc).
3. {{ui:Úpravy}} › {{ui:Viac}} › {{ui:Terén z vybraných vrstevníc}}.

ModelCraft spojí body vrstevníc trojuholníkmi (TIN) a zmäkčí každú hranu vo vnútri, aby sa povrch tienil hladko. Čiary samy ostanú; keď ich už nepotrebujete, zmažte ich alebo skryte. Veľmi husté vrstevnice sa zredukujú na 8 000 bodov.

## Mriežka na úpravu

{{ui:Úpravy}} › {{ui:Viac}} › {{ui:Mriežka terénu…}} sa pýta na šírku, hĺbku a veľkosť bunky, potom umiestni plochú mriežku trojuholníkov tam, kde kliknete na roh. Malé bunky sa upravujú hladšie, ale vytvoria viac plôch (najviac 200 × 200 buniek).

## Úprava: zdvíhanie a znižovanie terénu

1. Dvojitým kliknutím na terén ho otvorte.
2. {{ui:Úpravy}} › {{ui:Viac}} › {{ui:Sochať terén}}. Kruh zobrazuje štetec na povrchu pod ukazovateľom.
3. Ťahajte nahor na zdvihnutie terénu pod štetcom alebo nadol na zníženie. Stred sa posunie najviac a terén sa k okraju kruhu postupne vyrovná, takže vyvýšeniny a priehlbiny vzniknú hladko.

Ak chcete vyvýšeninu presnej výšky, kliknite raz, potom zadajte výšku, napríklad `1.5m` (mínus ju zníži), a stlačte {{key:Enter}}. Ak chcete zmeniť štetec, pred kliknutím zadajte dĺžku: `5m` dá štetec s polomerom 5 m.

Každé sochanie je jeden krok späť.

## Čo treba vedieť

- Úprava posúva iba trojuholníkové plochy, takže každá plocha zostane rovná. Plochy nakreslené ručne (obdĺžniky, mnohouholníky) nie sú terén: nástroj to oznámi.
- Úprava posúva body iba kolmo nahor a nadol; nepridáva body. Pre jemnejšie detaily vytvorte mriežku s menšími bunkami.
- Terén sa exportuje ako každá iná skupina. V IFC je to zástupný prvok stavebného prvku, ako všetko ostatné.
