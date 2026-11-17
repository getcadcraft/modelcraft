---
title: Uzly: budovanie modelu prepájaním
summary: Prepájajte čísla do bodov, body do kriviek a krivky do plôch. Zmeňte číslo a všetko nadväzujúce sa prestaví. Každý uzol je aj riadok CraftScriptu a graf sa uloží do súboru.
keywords: uzly, editor uzlov, vizuálne skriptovanie, parametrický, graf, drôty, porty, voľný tvar, freeform, nurbs, loft, vytiahnuť, kružnica, krivka, plocha, séria, rozsah, náhodný, zoznam, skript, craftscript, grasshopper
from: 9c8e254f
---

Editor **Uzly** vytvára geometriu prepájaním krabičiek. Každá krabička (uzol) plní jednu malú úlohu: vytvorí číslo, bod, kružnicu alebo loft. Výsledok jednej krabičky prepojíte so vstupom ďalšej a model sa zmení, keď zmeníte číslo na začiatku.

Otvorte ho z pravého panela: {{ui:Uzly}} › {{ui:Uzly…}}. Súbor, ktorý už má graf, ho otvorí sám. Je to okno nad 3D zobrazením: ťahajte za jeho titulok na presun a za roh na zmenu veľkosti.

## Prepájanie

1. Vyberte uzol zo zoznamu vľavo (do vyhľadávacieho poľa zadajte text na zúženie; <kbd>Enter</kbd> pridá prvú zhodu). Uzol sa objaví v strede plátna.
2. Ťahajte z okrúhleho **výstupného** bodu vpravo na jednom uzle na okrúhly **vstupný** bod vľavo na inom. Bod zozelenie, keď sa spojenie hodí, a sčervenie, keď sa nehodí; ukážte naň kurzorom a zobrazí sa dôvod.
3. Vstup, ktorý nie je ničím prepojený, zobrazuje políčko na zadanie hodnoty. Zadajte číslo a stlačte <kbd>Tab</kbd>: výsledok sa prepočíta.
4. Malý krúžok v titulku uzla je jeho **oko**. Uzol so zapnutým okom sa kreslí v 3D zobrazení: ako čiary pre krivky, tieňovaný pre plochy a bodky pre body.

Uzol presuniete ťahaním za titulok. Ťahaním za pozadie posúvate plátno, kolieskom ho približujete. <kbd>Delete</kbd> zmaže vybraný uzol. {{ui:Usporiadať}} rozloží uzly do stĺpcov, {{ui:Prispôsobiť}} ich všetky zmestí do zobrazenia a {{ui:Späť}} a {{ui:Znova}} sa pohybujú medzi vašimi úpravami.

## Typy a jednotky

Porty majú typ: číslo, áno/nie, bod, vektor, krivka, plocha, sieť, teleso alebo "geometria" pre ktorýkoľvek z nich. Bod môže napájať vektorový vstup a naopak. Čísla majú jednotku: **dĺžka** je v milimetroch a **uhol** je v stupňoch. Dĺžka nemôže napájať uhol a dĺžka vynásobená dĺžkou (plocha) sa odmietne, takže nesprávne prepojenie sa zastaví hneď pri jeho vytvorení.

Štvorcová bodka je **zoznam**. Keď zoznam dorazí na vstup pre jednu hodnotu, uzol sa spustí raz pre každú položku a jeho výsledok sa stane zoznamom. Kratší zoznam sa opakuje svojou poslednou položkou. Napríklad **Séria** výšok napojená na **Presunúť** vytvorí zásobník kópií.

## Telesá a booleovské operácie ako uzly

Skupina **Telesá** vytvára uzavreté telesá z rovnakých presných plôch ako panel Povrchy: **Škatuľa teleso**, **Valec teleso** a **Guľa teleso** (veľkosti v mm), **Zjednotenie**, **Odčítanie** a **Prienik** (druhé teleso sa berie z prvého; tolerancia určuje, ako ďaleko môžu byť trojuholníky telesového enginu od presných plôch), **Zaoblenie medzi plochami** (plochy podľa ich čísla v telese, 1 pre prvú; polomer a, ak je nad 0, polomer na konci), **Objem telesa** (mm³) a **Teleso na sieť** (na zobrazenie alebo zapečenie). Teleso má vlastný typ portu: bod alebo číslo sa nedá prepojiť so vstupom telesa a bod zostane červený. Uzly Booleovské operácie a Zaoblenie používajú vlastný engine telies programu, ktorý sa načíta pri prvom otvorení editora.

## Chyby

Uzol, ktorý nemôže splniť svoju úlohu, o tom povie pod svojím názvom červeným textom ("Polomer musí byť väčší ako nula."), a nasledujúce uzly čakajú. Rovnaká správa je aj problém v paneli Problémy, takže ju tam nájdete.

## Každý uzol je riadok skriptu

Stlačte {{ui:Skript}}, aby ste videli graf ako CraftScript: jeden riadok na uzol, napríklad `n3 = nd_circle(n2, n1, [0 0 1]);`. Upravte text a stlačte {{ui:Vytvoriť graf z tohto skriptu}}, čím sa vráti ako graf. Rovnaké funkcie `nd_` fungujú aj v CraftScripte v PartCraft, takže sa graf dá tam spustiť, zacykliť alebo otestovať. Náhodné čísla vždy vyžadujú **seed**, takže rovnaký graf dá rovnaký výsledok na každom počítači.

## Uložené so súborom

Graf sa uloží do súboru modelu. Uzly vytvárajú vlastné krivky, plochy a siete: nemenia plochy modelu, kým o to nepožiadate.

## Zapiecť do modelu

Zapnite oko uzla, ktorý vytvára plochu alebo sieť, a potom stlačte {{ui:Zapiecť do modelu}} v okne Uzly. Každá zobrazená plocha alebo sieť sa stane skupinou plôch v modeli, v metroch, ktorú môžete upraviť ako čokoľvek iné. Je to jeden krok Späť. Graf zostane, ale kópia ho už nesleduje: ak zmeníte číslo, zapečte znova pre novú kópiu. Body a krivky nie sú telesá, takže sa vynechajú a správa povie, koľko ich bolo.
