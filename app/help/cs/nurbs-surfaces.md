---
title: Volné plochy (NURBS)
summary: Hladké křivky a plochy pro skořepiny výrobků, karosérie aut a trupy lodí — loft, tažení, sítě křivek, záplaty ze čtyř hran, přechody a ořezy — se spojitostí G0, G1 a G2 měřenou na přesných plochách, tělesa se sjednocením, odečtením a průnikem, pohledy zebra a křivosti, plochy přizpůsobené skenu s měřenou chybou a soubory STEP nebo IGES.
keywords: nurbs, sken, reverzní inženýrství, přizpůsobení, síť na plochu, mračno bodů, stl, ořez, oříznutý, otvor, řez, těleso, tělesa, booleovské, sjednocení, odečtení, průnik, rozdíl, sešití, uzavřený, volný tvar, freeform, plocha, plochy, b-spline, bspline, křivka, spline, loft, tažení, vodicí, síť, coons, záplata, přechod, navázání, spojitost, g0, g1, g2, tečna, křivost, zebra, řídicí body, uzly, stupeň, step, iges, třída a
from: 09887405
---

Panel **Plochy** vytváří hladké křivky a plochy druhu, který se používá pro skořepiny výrobků, karosérie aut a trupy lodí: NURBS, tedy stejnou matematiku, jakou používají ostatní modeláře ploch. Vše se měří na přesných plochách, nikdy na trojúhelnících, které vidíte. Velikosti v panelu jsou v **milimetrech**, bez ohledu na jednotku, kterou model zobrazuje.

Otevřete jej z panelu vpravo: {{ui:Plochy}} › {{ui:Otevřít panel Plochy}}. Model, který už plochy má, jej otevře sám.

## Jak příkaz funguje

1. Stiskněte příkaz (například **Loft**). Panel řekne, co ještě potřebuje: body, křivky, hranu plochy nebo konec křivky.
2. Vyberte je: klikněte na ně v 3D zobrazení, nebo stiskněte **Vybrat** (nebo tlačítka hrany a konce) vedle každé položky v seznamu. U hrany klikněte blízko té hrany plochy.
3. Zkontrolujte volby (stupeň, tolerance, spojitost, …) a stiskněte **Vytvořit**.

Křivky z bodů berou body zadané po jednom na řádek (`x, y, z` v mm), nebo **Vybrat body v zobrazení**: každé kliknutí používá stejné přichytávání jako kreslicí nástroje; <kbd>Enter</kbd> nebo dvojklik ukončí, <kbd>Esc</kbd> zastaví.

## Křivky

- **Křivka procházející body** prochází každým bodem. **Křivka podle řídicích bodů** místo toho sleduje klec bodů.
- **Vložit uzel**, **Zvýšit stupeň** a **Snížit stupeň** mění popis křivky bez jejího posunu (snížení se odmítne, pokud by se křivka posunula víc než o toleranci). **Přestavět křivku** jí dá nový počet řídicích bodů a řekne, o kolik se posunula.
- **Navázat křivku** spojí konec jedné křivky s druhou spojitostí G0 (dotyk), G1 (stejný směr) nebo G2 (i stejná křivost). **Přechodová křivka** přidá novou křivku mezi dva konce.
- **Spojit křivky** a **Rozdělit křivku**.

## Plochy

- **Loft** přes dvě nebo více křivek, **Přímková plocha** mezi dvěma, **Vytáhnout křivku**, **Rotovat křivku**.
- **Tažení po jedné vodicí** vede profil po dráze bez zkroucení; **Tažení po dvou vodicích** udrží konce profilu na obou vodicích. Tažení se přizpůsobuje: stavový řádek řekne, jak těsně zůstalo u skutečného tažení.
- **Plocha ze sítě křivek** prochází mřížkou křivek (první výběry jsou profily, ostatní vodítka). **Záplata ze čtyř hran** vyplní čtyři křivky, které se setkávají v rozích.
- **Navázat plochu** nechá hranu plochy navázat na sousední s G0, G1 nebo G2; **Přechodová plocha** přidá plochu mezi dvě hrany.
- **Odsazení plochy**, **Prodloužit plochu** (plocha pokračuje tak, jak šla), **Přestavět plochu**, a uzly a stupeň pro plochy.

## Kontrola kvality

Tabulka **Sdílené hrany** vypisuje každou hranu, kterou sdílí dvě plochy, s mezerou (mm), úhlem mezi nimi (°) a skokem křivosti (1/mm), a říká, zda je to G0, G1 nebo G2. Hrana horší, než jste požadovali, je také v **Problémech** (tlačítko ⚠ v liště aplikace) s opravou **Navázat**.

**Zobrazit jako** › **Pruhy zebra** a **Křivost (Gaussova)** pocházejí z přesné plochy: pruhy, které přes hranu pokračují nepřerušeně, znamenají G1; pruhy, které si zachovají i šířku, znamenají G2. Křivost je modrá tam, kde je plocha sedlo, červená tam, kde je kopule, a bílá tam, kde je plochá. **Řídicí body** kreslí sítě řídicích bodů.

G0–G2 se měří v 33 bodech na hranu. **G3 ani kvalita „class A“ se neměří** a netvrdí se.

## Ořez plochy

Skupina **Ořez** řeže plochu bez změny jejího tvaru: plocha si ponechá všechny řídicí body a zobrazí, spočítá a zapíše se jen část uvnitř obrysu. **Oříznout na obdélník** a **Oříznout kružnicí** pracují s podílem (0 až 1) plochy v každém směru, takže nepotřebují výběr v zobrazení; **Oříznout křivkou** vezme uzavřenou křivku ležící na ploše (promítne se do plochy a odmítne se slovně, je-li otevřená nebo dál než tolerance). Zaškrtněte **Vyříznout díru**, chcete-li odstranit vnitřek obrysu; nechte nezaškrtnuté, chcete-li ponechat jen vnitřek. Plocha může mít jeden zachovaný obrys a libovolný počet děr; obrys, který protíná jiný, se odmítne. **Odstranit ořez** ukáže celou plochu znovu. Řezané hrany přesně sledují obrys; {{ui:Zpět}} v panelu vezme ořez zpět jako každý jiný krok.

STEP nese ořez jako hranice plochy a IGES jako oříznutou plochu (entita 144); oba ho načtou zpět.

## Tělesa a booleovské operace

Skupina **Tělesa** mění plochy na uzavřená tělesa a spojuje je. Těleso je zde množina ploch panelu, které společně uzavírají objem; jeho plochy zůstávají přesnými plochami NURBS s ořezy.

- **Krabicové těleso**, **Válcové těleso** a **Kulové těleso** vytvoří těleso z napsaných velikostí (v mm): krabici se šesti rovnými plochami, válec s kulatým pláštěm a dvěma rovnými čely oříznutými na kružnici, kouli z jedné rotované plochy.
- **Těleso z ploch** seskupí plochy, které jste vytvořili sami. Vyberte je, nebo nevybírejte žádnou a použijí se všechny zobrazené plochy, které ještě nejsou v tělese. Sešijí se v toleranci: nebudou-li se uzavírat, nic se nezmění a panel řekne, kolik hran zůstává otevřených a jak blízko se musí setkat.
- **Sjednocení**, **Odečtení** (druhé těleso se odebere z prvního) a **Průnik** (jen to, co mají obě společné) berou dvě tělesa: klikněte na plochu každého v zobrazení, nebo stiskněte **Vybrat** v seznamu **Tělesa**. Zaškrtněte **Ponechat obě tělesa**, chcete-li je nechat vedle výsledku.

Booleovská operace ponechá každou plochu na její přesné ploše a ořízne ji novými obrysy podél průniku. Řádek výsledku dává naměřená čísla: o kolik se musely body tělesového jádra posunout, aby ležely na přesných plochách (nikdy víc než tolerance), jak blízko jsou body průniku k oběma plochám (obvykle několik milióntin milimetru), objem a zda se nové plochy znovu uzavřou, když je sešijete znovu z jejich přesných ploch. Objemy se měří na trojúhelnících v toleranci (0,05 mm, pokud nenastavíte jinou), takže objem koule nebo válce vyjde mírně nižší než přesný: menší tolerance se přiblíží. Booleovská operace, kterou nelze provést čistě (tělesa se nesdílejí, obrys by se protínal sám), se slovně odmítne a nic nezmění. Jedna booleovská operace je jeden krok {{ui:Zpět}} v panelu.

V seznamu **Tělesa** **Rozpustit** ponechá plochy jako obyčejné plochy; koš odstraní těleso a jeho plochy.

**Přidat do modelu** (v seznamu **Tělesa**) vloží kopii tělesa do modelu jako jednu uzavřenou skupinu, její plochy jako trojúhelníky v toleranci 0,05 mm, v jednom kroku {{ui:Zpět}} modelu. Pak funguje s vlastními {{ui:Sjednotit}}, odečtením a průnikem modelu, s tlačením a tažením a kontrolou 3D tisku; přesné těleso zůstává v panelu.

## Zaoblení a ztloušťování

**Zaoblení mezi plochami** zaoblí hranu, kde se setkávají dvě plochy jednoho tělesa: vyberte dvě plochy (v zobrazení, nebo tlačítkem **Vybrat** v seznamu), napište **poloměr** a pro poloměr, který se mění po hraně, **poloměr na konci** (0 znamená jeden poloměr). Koule tohoto poloměru se kotálí podél hrany a dotýká se obou ploch; zaoblení je přesný kruhový oblouk, který v každém bodě zanechá, spojený do jedné plochy, a obě plochy se ořežou tam, kde se jich koule dotýká. Vnější hrana ztratí materiál, vnitřní roh ho získá. Řádek výsledku říká, co bylo změřeno: jak daleko je plocha zaoblení od kotálející se koule mezi body, z nichž byla vytvořena (body se přidávají, dokud není v rámci čtvrtiny tolerance), největší úhel mezi zaoblením a každou plochou podél dotykových čar a stejná čísla jako u sjednocení. Poloměr, který se nevejde (koule by opustila plochu nebo plocha se ohýbá těsněji než poloměr), se odmítne s uvedením plochy a nic se nezmění.

**Zaoblit více hran** zaoblí mnoho hran v jednom kroku: vyberte dvě plochy první hrany, pak dvě plochy další, a tak dále (plocha může být ve více dvojicích, například horní plocha krabice ve čtyřech z nich); všechny hrany dostanou poloměr, který napíšete. Každé zaoblení se počítá na tělese tak, jak bylo, a pak se řežou jedno po druhém, takže pořadí nezáleží. Tam, kde se dvě zaoblené hrany setkají v rohu, jehož ostatní hrany zůstávají ostré, se obě zaoblení prolnou podél své průsečnice (zlom). Tam, kde se tři zaoblené vnější hrany tří rovných ploch, které jsou k sobě kolmé, setkají s jedním poloměrem, je roh jednou **záplatou koule** tečnou ke všem třem zaoblením (zrušte **Rohy**, chcete-li zlomený roh); hrana musí být na obou koncích, kde jsou takové rohy, alespoň dvojnásobně dlouhá než poloměr. Řádek výsledku říká, kolik hran bylo zaobleno a jak dopadly rohy. Vnitřní hrany lze zaoblit také, ale výsledek, který se znovu neuzavře, je jen nahlášen (řádek to řekne), takže jej zkontrolujte.

**Ztloustit na těleso** dá ploše tloušťku: vyberte ji, napište **tloušťku** a zaškrtněte **Druhá strana**, chcete-li ji nafouknout na opačnou stranu. Odsazená plocha se přizpůsobí původní ploše a změří se proti ní (řádek výsledku dá největší rozdíl od tloušťky); stěny sledují každou hranu a každý obrys ořezu. Je-li plocha na té straně ohnutá těsněji než tloušťka nebo se jiná její část nachází blíž než tloušťka, odmítne se s uvedením plochy a místa a nic se nezmění.

## Zpět, soubor, STEP a IGES

Panel má vlastní {{ui:Zpět}} a {{ui:Znovu}} (jeden krok na příkaz). Plochy se ukládají do souboru `.modelcraft` spolu s modelem; nejsou součástí vlastního zpět modelu, stejně jako materiály souboru.

**STEP…** (AP242) a **IGES…** uloží křivky a plochy přesně tak, jak jsou (křivky a plochy B-spline, nic se nepřevádí na trojúhelníky). Každá plocha je vlastní plocha se svým ořezem; těleso se zapíše jako jeden uzavřený plášť, každá hrana sdílená svými dvěma plochami, jak to čekají jiné CAD programy (stavový řádek řekne, kolik těles takto odešlo). V IGES je totéž těleso jedním plným tělesovým B-rep (entita 186 nad uzavřeným pláštěm 514, plochy 510, smyčky 508, jeden seznam hran 504 a jeden seznam vrcholů 502); těleso, jehož plochy se nepárují hranu po hraně, se zapíše jako samostatné plochy a řádek to řekne. **Import…** takové těleso načte zpět jako těleso, a to ze STEP i z IGES. Čte křivky a plochy zapsané tímto způsobem a sady záplat `.ccnurbs`; tělesa STEP z jiných programů se otevírají přes Soubor › Import jako sítě.

## Plochy ze skenu (reverzní inženýrství)

Vyberte naskenovanou síť v modelu (nic nevybráno znamená vše, co je zobrazeno), otevřete **Plochy** a ve skupině **Sken** zvolte **Přizpůsobit plochy skenu**. Nástroj hledá **roviny**, **válce**, **koule** a **kužele** (přesné plochy, z nichž se skládá obrobený díl; každý řádek ukazuje poloměr nebo poloviční úhel, který našel), hledá **zaoblení** (zaoblené hrany a rohy: malý válec nebo koule, který přechází tečně do dvou nebo více dalších ploch, ukázaný se svým poloměrem a plochami, které spojuje), **zaoblení okrajů** (torus: zaoblená hrana, kde rovná plocha přechází do válce nebo kužele, ukázaná se svým poloměrem a poloměrem kruhu) a **proměnlivá zaoblení** (zaoblená hrana, jejíž poloměr se po ní mění, ukázaná poloměrem na každém konci), přizpůsobí **jednu volnou záplatu** hladkému, mírně zakřivenému kusu a řeže každou plochu podle obrysu části skenu, odkud pochází, takže díry a rohy zůstanou zachovány. Volby: **tolerance** (jak daleko v mm smí bod skenu být od roviny nebo válce a stále k nim patřit, a cíl pro volnou záplatu), **nejmenší kus** (podíl plochy povrchu) a **nejvíce ploch**. Stejný sken a stejné volby vždy dají stejné plochy.

Výsledkem je tabulka, jeden řádek na plochu: její druh, kolik trojúhelníků pocházelo z ní a chyba **naměřená od skenu k ploše** (rms, největší a podíl bodů v toleranci). Měří se vrcholy skenu a střed každého trojúhelníku. Chyba se neměří opačným směrem (od plochy ke skenu), takže plocha, která sahá za sken, by se neukázala. Poznámka pod tabulkou také říká, jak velká část plochy byla příliš malá na přizpůsobení. V zobrazení jsou body skenu obarveny svou **mapou odchylek**: modrá na ploše, zelená v polovině tolerance, červená na toleranci nebo výše (zrušte **Zobrazit mapu odchylek**, chcete-li ji skrýt). Kusy, které se samy překládají (například uzavřená trubka přizpůsobená volnými záplatami), se vypíšou jako nepřizpůsobené a nikdy se nevnutí do jedné plochy.

**Sešít plochy na těleso** sešije každou zobrazenou plochu, která ještě není v tělese, do jednoho uzavřeného tělesa. Plochy skenu se stýkají jen v rámci vlastní chyby skenu, takže zkouší nejmenší vzdálenost spojení, která se uzavře (nikdy víc než **vzdálenost sešití**, kterou nastavíte), a slovně odmítne, pokud se plochy neuzavřou. Nikdy nezakrývá mezeru. Krabice se zaoblenými hranami se sešije, pokud byla její zaoblení nalezena jako vlastní plochy; vzdálenost spojení, která se uzavřela, je ve výsledku. Těleso pak funguje s Sjednocením, Odečtením, Průnikem a **Přidat do modelu**.

Co se nedělá: **zaoblení okrajů** (torus) se hledá jen kolem osy válce nebo kužele, který už byl nalezen, a **proměnlivé zaoblení** jen podél dost rovné hrany (jeho řezy jsou seříznuty kolmo k jednomu směru); jinde vyjdou jako volné záplaty, pokud jsou dost hladké, a jinak se vynechají; koule, kužele a zaoblení se hledají náhodným vzorkováním, takže velmi malé (několik trojúhelníků) mohou chybět; mapa odchylek ukazuje vzdálenost od skenu k plochám, ne naopak; velmi velké sken (přes 300 000 trojúhelníků) se tu odmítne. Plochy plného otočení válce se řežou kolem děr, se švem umístěným tam, kde žádná díra není. Každou plochu zkontrolujte proti skenu, než se na ni spolehnete.

## Zatím není hotovo

Zaoblení hran, které se setkávají v rohu zakřivených ploch nebo s různými poloměry (vrcholový přechod), zaoblení mezi plochami, které se nesetkávají, vnitřní zaoblení, které končí na šikmé nebo zakřivené ploše, a booleovské operace a zaoblení počítané na plochách bez trojúhelníků (zde jádro tělesa pracuje na trojúhelnících v toleranci a každý bod se pak vrátí na přesné plochy).
