---
title: Voľné plochy (NURBS)
summary: Hladké krivky a plochy pre výrobné kryty, karosérie áut a trupy lodí — loft, ťahanie po dráhe, siete kriviek, záplaty zo štyroch hrán, prechody, orezanie — s kontinuitou G0, G1 a G2 meranou na presných plochách, telesá so zjednotením, odčítaním a prienikom, zobrazenia zebra a krivosti, plochy prispôsobené skenu s meranou chybou a súbory STEP alebo IGES.
keywords: nurbs, sken, reverzné inžinierstvo, prispôsobenie, sieť na plochu, mrak bodov, stl, orezanie, orezaný, diera, rez, teleso, telesá, boolean, zjednotenie, odčítanie, prienik, rozdiel, zošiť, uzavretý, voľný tvar, freeform, plocha, plochy, b-spline, bspline, krivka, spline, loft, ťahanie, dráha, sieť, coons, záplata, prechod, zhoda, kontinuita, g0, g1, g2, dotyčnica, krivosť, zebra, riadiace body, uzly, stupeň, step, iges, class a
from: 09887405
---

Panel **Povrchy** vytvára hladké krivky a plochy, aké sa používajú pri výrobných krytoch, karosériách áut a trupoch lodí: NURBS, rovnakú matematiku, akú používajú aj iné modelovacie programy na plochy. Všetko sa meria na presných plochách, nikdy na trojuholníkoch, ktoré vidíte. Rozmery v paneli sú v **milimetroch**, bez ohľadu na jednotku, ktorú model zobrazuje.

Otvorte ho z pravého panela: {{ui:Povrchy}} › {{ui:Otvoriť panel Povrchy}}. Model, ktorý už má plochy, ho otvorí sám.

## Ako funguje príkaz

1. Stlačte príkaz (napríklad **Loft**). Panel povie, čo ešte potrebuje: body, krivky, hranu plochy alebo koniec krivky.
2. Vyberte ich: kliknite na ne v 3D zobrazení alebo stlačte **Vybrať** (alebo tlačidlá hrany a konca) vedľa každého v zozname. Pri hrane kliknite blízko tej hrany plochy.
3. Skontrolujte možnosti (stupeň, tolerancia, kontinuita, …) a stlačte **Vytvoriť**.

Krivky z bodov prijmú body zadané po jednom na riadok (`x, y, z` v mm), alebo **Vybrať body v zobrazení**: každé kliknutie používa rovnaké prichytávanie ako kresliace nástroje. Dokončite stlačením <kbd>Enter</kbd> alebo dvojitým kliknutím, zastavte <kbd>Esc</kbd>.

## Krivky

- **Krivka cez body** prechádza každým bodom. **Krivka podľa riadiacich bodov** namiesto toho sleduje klietku bodov.
- **Vložiť uzol**, **Zvýšiť stupeň** a **Znížiť stupeň** menia opis krivky bez jej presunutia (znižovanie sa odmietne, ak by sa krivka posunula viac ako o toleranciu). **Prestavať krivku** jej dá nový počet riadiacich bodov a povie, ako ďaleko sa posunula.
- **Zarovnať krivku** spojí koniec jednej krivky s koncom druhej s G0 (dotyk), G1 (rovnaký smer) alebo G2 (aj rovnaká krivosť). **Prechodová krivka** pridá novú krivku medzi dva konce.
- **Spojiť krivky** a **Rozdeliť krivku**.

## Plochy

- **Loft** cez dve alebo viac kriviek, **Priamková plocha** medzi dvoma, **Vytiahnuť krivku**, **Rotovať krivku**.
- **Ťahanie po jednej dráhe** nesie profil po dráhe bez skrútenia; **Ťahanie po dvoch dráhach** drží konce profilu na oboch dráhach. Ťahania sú prispôsobené: stavový riadok povie, ako blízko zostali k skutočnému ťahaniu.
- **Plocha zo siete kriviek** prechádza mriežkou kriviek (prvé výbery sú profily, ostatné vodiace krivky). **Záplata zo štyroch hrán** vyplní štyri krivky, ktoré sa stretajú v rohoch.
- **Zarovnať plochu** spojí hranu plochy so susedom s G0, G1 alebo G2; **Prechodová plocha** pridá plochu medzi dve hrany.
- **Odsadenie plochy**, **Predĺžiť plochu** (plocha pokračuje tak, ako išla), **Prestavať plochu** a uzly a stupeň pre plochy.

## Kontrola kvality

Tabuľka **Spoločné hrany** uvádza každú hranu, ktorú zdieľajú dve plochy, s medzerou (mm), uhlom medzi nimi (°) a skokom krivosti (1/mm), a či to robí G0, G1 alebo G2. Hrana horšia, než ste chceli, je tiež v **Problémoch** (tlačidlo ⚠ v paneli aplikácie) s opravou **Zarovnať**.

**Zobraziť ako** › **Zebra pruhy** a **Krivosť (Gaussova)** pochádzajú z presnej plochy: pruhy, ktoré prechádzajú cez hranu bez prerušenia, znamenajú G1; pruhy, ktoré si zachovajú aj šírku, znamenajú G2. Krivosť je modrá tam, kde je plocha sedlo, červená tam, kde je kopula, a biela tam, kde je rovná. **Riadiace body** kreslia riadiace siete.

G0–G2 sa merajú v 33 bodoch na hranu. **G3 a kvalita „class A“ sa nemerajú** a netvrdia sa.

## Orezanie plochy

Skupina **Orezanie** reže plochu bez zmeny jej tvaru: plocha si zachová všetky riadiace body a zobrazí, spočíta a zapíše sa iba časť vnútri obrysu. **Orezať na obdĺžnik** a **Orezať kružnicou** pracujú na podiele (0 až 1) plochy v každom smere, takže nepotrebujú výber v zobrazení; **Orezať krivkou** vezme uzavretú krivku ležiacu na ploche (premietne sa do plochy a odmietne sa slovami, ak je otvorená alebo viac ako toleranciu vzdialená). Označte **Vyrezať dieru**, aby sa odstránilo vnútro obrysu; ak ju necháte vypnutú, zostane len vnútro. Plocha môže mať jeden zachovaný obrys a ľubovoľný počet dier; obrys, ktorý kríži iný, sa odmietne. **Odstrániť orezanie** zobrazí celú plochu znova. Rezané hrany presne sledujú obrys; Späť v paneli vráti orezanie späť ako každý iný krok.

STEP prenáša orezanie ako hranice plochy a IGES ako orezanú plochu (entita 144); obe ho načítajú späť.

## Telesá a booleovské operácie

Skupina **Telesá** premieňa plochy na uzavreté telesá a kombinuje ich. Teleso je tu množina vlastných plôch panela, ktoré spolu uzatvárajú objem; jeho plochy zostávajú presné NURBS plochy s orezaniami.

- **Škatuľa teleso**, **Valec teleso** a **Guľa teleso** vytvoria teleso z zadaných rozmerov (v mm): škatuľu so šiestimi rovnými plochami, valec s okrúhlym plášťom a dvoma rovnými koncami orezanými na kružnicu, guľu z jednej rotovanej plochy.
- **Teleso z plôch** zoskupí plochy, ktoré ste vytvorili sami. Vyberte ich, alebo nevyberajte nič a použijete všetky zobrazené plochy, ktoré ešte nie sú v telese. Zošijú sa v rámci tolerancie: ak sa nezavrú, nič sa nezmení a panel povie, koľko hrán zostáva otvorených a ako blízko sa musia stretnúť.
- **Zjednotenie**, **Odčítanie** (druhé teleso sa odoberie od prvého) a **Prienik** (iba to, čo majú obe spoločné) berú dve telesá: kliknite na plochu každého v zobrazení alebo stlačte **Vybrať** v zozname **Telesá**. Označte **Ponechať obe telesá**, aby zostali vedľa výsledku.

Booleovská operácia zachová každú plochu na jej presnej ploche a reže ju novými obrysmi orezania pozdĺž prieniku. Riadok výsledku uvádza namerané hodnoty: ako ďaleko museli body engine telies posunúť, aby ležali na presných plochách (nikdy viac než tolerancia), ako blízko sú priesečníkové body k obom plochám (zvyčajne niekoľko miliontín milimetra), objem a či sa nové plochy znova uzavrú, keď sa zošijú znova z ich presných plôch. Objemy sa merajú na trojuholníkoch v rámci tolerancie (0.05 mm, pokiaľ nenastavíte inú), takže objem gule alebo valca vyjde mierne nižší ako presný: menšia tolerancia je presnejšia. Booleovská operácia, ktorú nemožno urobiť čisto (telesá nemajú nič spoločné, obrys by sa križoval sám so sebou), sa odmietne slovami a nič nezmení. Jedna booleovská operácia je jeden krok **Späť** panela.

V zozname **Telesá** **Zrušiť zoskupenie** ponechá plochy ako obyčajné plochy; kôš odstráni teleso a jeho plochy.

**Pridať do modelu** (v zozname **Telesá**) vloží kópiu telesa do modelu ako jednu uzavretú skupinu, s plochami ako trojuholníkmi v rámci 0.05 mm, v jednom kroku Späť modelu. Potom funguje s vlastnými nástrojmi modelu **Zjednotenie**, **Odčítanie** a **Prienik**, s tlačou/ťahom a s kontrolou pre 3D tlač; presné teleso zostáva v paneli.

## Zaoblenia a zhrubnutie

**Zaoblenie medzi plochami** zaoblí hranu, kde sa stretajú dve plochy jedného telesa: vyberte dve plochy (v zobrazení alebo tlačidlom **Vybrať** v zozname), zadajte **polomer** a pri polomere, ktorý sa mení pozdĺž hrany, aj **polomer na konci** (0 zachová jeden polomer). Guľa tohto polomeru sa kotúľa pozdĺž hrany a dotýka sa oboch plôch; zaoblenie je presný kruhový oblúk, ktorý v každom bode zanechá, spojený do jednej plochy, a dve plochy sú orezané tam, kde sa ich guľa dotýka. Vonkajšia hrana stráca materiál, vnútorný roh ho získava. Riadok výsledku uvádza namerané hodnoty: ako ďaleko je plocha zaoblenia od kotúľajúcej sa gule medzi bodmi, z ktorých bola postavená (body sa pridávajú, kým nie je v rámci štvrtiny tolerancie), najväčší uhol medzi zaoblením a každou plochou pozdĺž dotykových čiar a rovnaké čísla ako pri Zjednotení. Polomer, ktorý nesedí (guľa by opustila plochu alebo plocha sa ohýba tesnejšie ako polomer), sa odmietne s uvedením plochy a nič sa nezmení.

**Zaoblenie viacerých hrán** zaoblí veľa hrán naraz: vyberte dve plochy prvej hrany, potom dve plochy ďalšej a tak ďalej (plocha môže byť v niekoľkých dvojiciach, napríklad horná plocha škatule v štyroch z nich); všetky hrany dostanú polomer, ktorý zadáte. Každé zaoblenie sa vypočíta na telese v pôvodnom stave a potom sa jedno po druhom orežú, takže poradie nezáleží. Tam, kde sa dve zaoblené hrany stretnú v rohu, ktorého ostatné hrany zostávajú ostré, sa dve zaoblenia pretnú pozdĺž svojej priesečníkovej krivky (ostrý zlom). Tam, kde sa tri zaoblené vonkajšie hrany troch rovných plôch, ktoré sú na seba kolmé, stretnú s jedným polomerom, roh je jedna **guľová záplata** dotyčná ku všetkým trom zaobleniam (zrušte označenie **Rohy**, ak chcete ostrý zlomený roh); hrana musí byť aspoň dvojnásobok polomeru dlhá, ak sú na oboch jej koncoch takéto rohy. Riadok výsledku uvádza, koľko hrán sa zaoblilo a ako dopadli rohy. Vnútorné hrany sa dajú zaoblieť tiež, ale výsledok, ktorý sa znova neuzavrie, sa iba nahlási (riadok to povie), takže ho skontrolujte.

**Zhrubnutie na teleso** dá ploche hrúbku: vyberte ju, zadajte **hrúbku** a označte **Druhá strana**, aby narástla opačným smerom. Odsadená plocha sa prispôsobí ploche a meria sa oproti nej (riadok výsledku uvádza najväčší rozdiel od hrúbky); steny nasledujú každú hranu a každý obrys orezania. Ak sa plocha ohýba tesnejšie než hrúbka na tej strane alebo iná časť leží bližšie než hrúbka, odmietne sa s uvedením plochy a miesta a nič sa nezmení.

## Späť, súbor, STEP a IGES

Panel má vlastné **Späť** a **Znova** (jeden krok na príkaz). Plochy sa ukladajú do súboru `.modelcraft` s modelom; nie sú súčasťou vlastného Späť modelu, rovnako ako materiály súboru.

**STEP…** (AP242) a **IGES…** uložia krivky a plochy presne tak, ako sú (krivky a plochy B-spline, nič sa nepremení na trojuholníky). Každá plocha je vlastná plocha so svojím orezaním; teleso sa zapíše ako jedna uzavretá škrupina, každá hrana zdieľaná dvoma plochami, ako očakávajú iné CAD programy (stavový riadok uvedie, koľko telies takto odišlo). V IGES je rovnaké teleso jeden manifold telesový B-rep (entita 186 nad uzavretou škrupinou 514, plochy 510, slučky 508, jeden zoznam hrán 504 a jeden zoznam vrcholov 502); teleso, ktorého plochy sa nespárujú hrana po hrane, sa zapíše ako samostatné plochy a riadok to povie. **Import…** načíta také teleso späť ako teleso, zo STEP aj z IGES. Načíta krivky a plochy zapísané týmto spôsobom a sady záplat `.ccnurbs`; STEP telesá iných programov sa otvoria cez Súbor › Import ako siete.

## Plochy zo skenu (reverzné inžinierstvo)

Vyberte naskenovanú sieť v modeli (ak nie je nič vybrané, platí všetko zobrazené), otvorte **Povrchy** a v skupine **Sken** zvoľte **Prispôsobiť plochy skenu**. Nástroj hľadá **roviny**, **valce**, **gule** a **kužele** (presné plochy, z ktorých sa skladá obrábaná súčiastka; každý riadok ukáže polomer alebo polovičný uhol, ktorý našiel), nájde **zaoblenia** (zaoblené hrany a rohy: malý valec alebo guľa, ktorá sa dotýka a prechádza do dvoch alebo viacerých iných plôch, zobrazí sa s polomerom a plochami, ktoré spája), **okrajové zaoblenia** (torus: zaoblená hrana, kde rovná plocha stretáva valec alebo kužeľ, zobrazí sa s polomerom a polomerom kruhu) a **premenlivé zaoblenia** (zaoblená hrana, ktorej polomer sa mení pozdĺž nej, zobrazí sa s polomerom na každom konci), prispôsobí **jednu voľnú záplatu** hladkému, mierne zakrivenému kusu a každú plochu orezáva podľa obrysu časti skenu, z ktorej pochádza, takže diery a rohy zostanú. Možnosti: **tolerancia** (ako ďaleko v mm môže bod skenu ležať od roviny alebo valca a ešte k nej patriť, a cieľ pre voľnú záplatu), **najmenší kus** (podiel plochy povrchu) a **najviac plôch**. Ten istý sken a rovnaké možnosti vždy dajú rovnaké plochy.

Výsledkom je tabuľka, jeden riadok na plochu: jej druh, koľko trojuholníkov z nej pochádza a chyba **meraná od skenu k ploche** (rms, najväčšia a podiel bodov v rámci tolerancie). Merané body sú vrcholy skenu a stred každého trojuholníka. Chyba sa nemeria opačne (plocha k skenu), takže plocha, ktorá presahuje sken, by sa neukázala. Poznámka pod tabuľkou tiež uvádza, koľko plochy bolo príliš malé na prispôsobenie. V zobrazení sú body skenu zafarbené podľa svojej **mapy odchýlok**: modré na ploche, zelené na polovici cesty k tolerancii, červené na tolerancii alebo viac (zrušte označenie **Zobraziť mapu odchýlok**, ak ju chcete skryť). Kusy, ktoré sa zložia cez seba (napríklad uzavretá trubica prispôsobená voľnými záplatami), sa uvedú ako neprispôsobené a nikdy sa nevnucujú do jednej plochy.

**Zošiť plochy do telesa** zošije každú zobrazenú plochu, ktorá nie je v telese, do jedného uzavretého telesa. Plochy skenu sa stretajú len v rámci vlastnej chyby skenu, takže skúsi najmenšiu vzdialenosť spojenia, ktorá uzavrie (nikdy viac než **vzdialenosť zošitia**, ktorú nastavíte), a odmietne slovami, keď sa plochy nezavrú. Nikdy neprekrýva medzeru. Škatuľa so zaoblenými hranami sa zošije, keď sa jej zaoblenia našli ako vlastné plochy; vzdialenosť spojenia, ktorá sa uzavrela, je vo výsledku. Teleso potom funguje so Zjednotením, Odčítaním, Prienikom a **Pridať do modelu**.

Čo sa nerobí: **okrajové zaoblenie** (torus) sa hľadá len okolo osi valca alebo kužeľa, ktoré už boli nájdené, a **premenlivé zaoblenie** len pozdĺž pomerne rovnej hrany (jeho rezy sú vyrezané kolmo na jeden smer); inde vychádzajú ako voľné záplaty, ak sú dostatočne hladké, a inak sa vynechajú; gule, kužele a zaoblenia sa hľadajú náhodným vzorkovaním, takže veľmi malé (pár trojuholníkov) sa môžu minúť; mapa odchýlok ukazuje vzdialenosť od skenu k plochám, nie naopak; veľmi veľké sken (nad 300,000 trojuholníkov) sa tu odmietne. Plochy valca s plným obratom sa vyrezávajú okolo dier, so švom umiestneným tam, kde nie je diera. Pred spoliehaním sa na každú plochu ju skontrolujte oproti skenu.

## Ešte nie je hotové

Zaoblenie hrán, ktoré sa stretajú v rohu zakrivených plôch alebo s rôznymi polomermi (vrcholový prechod), zaoblenie medzi plochami, ktoré sa nestretajú, vnútorné zaoblenie, ktoré končí na šikmej alebo zakrivenej ploche, a booleovské operácie a zaoblenia počítané na plochách bez trojuholníkov (tu engine telies pracuje na trojuholníkoch v rámci tolerancie a každý bod sa potom vráti na presné plochy).
