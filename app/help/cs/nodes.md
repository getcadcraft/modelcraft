---
title: Uzly: stavba modelu propojováním
summary: Propojujte čísla do bodů, body do křivek a křivky do ploch. Změníte-li číslo, vše navazující se přestaví. Každý uzel je také řádek CraftScriptu a graf se uloží do souboru.
keywords: uzly, editor uzlů, vizuální skriptování, parametrické, graf, dráty, porty, volné tvary, freeform, nurbs, loft, vytažení, rotační těleso, kružnice, křivka, plocha, řada, rozsah, náhodné, seznam, skript, craftscript, grasshopper
from: 9c8e254f
---

Editor **Uzly** vytváří geometrii propojováním krabiček. Každá krabička (uzel) dělá jednu malou věc: vytvoří číslo, bod, kružnici nebo loft. Výsledek jedné krabičky připojíte na vstup další a model se mění, když změníte číslo na začátku.

Otevřete jej z panelu vpravo: {{ui:Uzly}} › {{ui:Uzly…}}. Soubor, který už graf obsahuje, se otevře sám. Je to okno nad 3D zobrazením: přetažením titulku ho přesunete, přetažením rohu změníte velikost.

## Propojování

1. Vyberte uzel ze seznamu vlevo (do hledání napište text pro zúžení; {{key:Enter}} přidá první shodu). Uzel se objeví uprostřed plátna.
2. Přetáhněte z kulaté tečky **výstupu** vpravo na jednom uzlu na kulatou tečku **vstupu** vlevo na jiném uzlu. Tečka zezelená, když se hodí, a zčervená, když ne; najetím na ni zjistíte důvod.
3. Vstup, do kterého nic není připojeno, ukazuje políčko pro zadanou hodnotu. Napište číslo a stiskněte {{key:Tab}}: výsledek se přepočítá.
4. Malý kroužek v titulku uzlu je jeho **oko**. Uzel se zapnutým okem se vykreslí v 3D zobrazení: křivky jako čáry, plochy stínovaně, body jako tečky.

Uzel přesunete přetažením za titulek. Přetažením pozadí posouváte, kolečkem přibližujete. {{key:Delete}} smaže vybraný uzel. {{ui:Uspořádat}} uspořádá uzly do sloupců, {{ui:Přizpůsobit}} je všechny zobrazí v okně a {{ui:Zpět}} a {{ui:Znovu}} procházejí vaše úpravy.

## Typy a jednotky

Porty mají typ: číslo, ano/ne, bod, vektor, křivka, plocha, síť, těleso, nebo „geometrie“ pro kterýkoli z nich. Bod může napájet vektorový vstup a naopak. Čísla nesou jednotku: **délka** je v milimetrech a **úhel** ve stupních. Délka nemůže napájet úhel a délka krát délka (plocha) se odmítne, takže chybné propojení se zastaví hned, když ho vytvoříte.

Čtvercová tečka znamená **seznam**. Když seznam dorazí na vstup pro jedinou hodnotu, uzel proběhne jednou pro každou položku a jeho výsledek je seznam. Kratší seznam se opakuje svou poslední položkou. Například **Řada** výšek napojená na **Přesunout** vytvoří hromadu kopií.

## Tělesa a booleovské operace jako uzly

Skupina **Tělesa** vytváří uzavřená tělesa ze stejných přesných ploch jako panel Plochy: **Krabicové těleso**, **Válcové těleso** a **Kulové těleso** (velikosti v mm), **Sjednocení**, **Odečtení** a **Průnik** (druhé těleso se bere z prvního; tolerance udává, jak daleko mohou být trojúhelníky tělesového jádra od přesných ploch), **Zaoblení mezi plochami** (plochy podle jejich čísla v tělese, 1 pro první; poloměr a, je-li větší než 0, poloměr na konci), **Objem tělesa** (mm³) a **Těleso na síť** (pro zobrazení nebo převedení). Těleso má vlastní typ portu: bod ani číslo nelze připojit na vstup tělesa a tečka zůstane červená. Uzly Boolean a Zaoblení používají vlastní tělesové jádro programu, které se načte při prvním otevření editoru.

## Chyby

Uzel, který nemůže udělat svou práci, o tom řekne pod svým názvem červeně („Poloměr musí být větší než nula.“) a následující uzly čekají. Stejná zpráva je jako Problém v panelu {{ui:Problémy}}, takže ji najdete i odtud.

## Každý uzel je řádek skriptu

Stiskněte {{ui:Skript}} a uvidíte graf jako CraftScript: jeden řádek na uzel, například `n3 = nd_circle(n2, n1, [0 0 1]);`. Upravte text a stiskněte {{ui:Vytvořit graf z tohoto skriptu}}, aby se vrátil zpět na graf. Stejné funkce `nd_` fungují i v CraftScriptu v PartCraftu, takže graf lze tam spustit, zařadit do smyčky nebo otestovat. Náhodná čísla vždy berou **seed**, takže stejný graf dá stejný výsledek na každém počítači.

## Uloženo se souborem

Graf se uloží do souboru modelu. Uzly vytvářejí vlastní křivky, plochy a sítě: nemění plochy modelu, dokud o to nepožádáte.

## Převést do modelu

Zapněte oko uzlu, který vytváří plochu nebo síť, a v okně Uzly stiskněte {{ui:Převést do modelu}}. Každá zobrazená plocha nebo síť se stane skupinou ploch v modelu, v metrech, kterou můžete upravovat jako každou jinou. Je to jeden krok zpět. Graf zůstane, ale kopie se za ním už nepohybuje: změníte-li číslo, převeďte znovu a získáte novou. Body a křivky nejsou tělesa, takže se vynechají a zpráva řekne, kolik jich bylo.
