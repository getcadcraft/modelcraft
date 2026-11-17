---
title: Animujte ľubovoľnú vlastnosť, tvarujte ju ako krivky a miešajte klipy
summary: Pracovný priestor Animácia zakľúčuje polohu, otočenie a veľkosť objektu, jas, rozptyl a farbu svetla, uhol objektívu a tvarové kľúče siete. Kostry ohýbajú sieť kosťami a namaľovanými váhami. IK a obmedzenia zabezpečujú, že kosti a objekty dosiahnu cieľ, pozerajú sa na niečo, kopírujú, zostávajú v limitoch, visia alebo nasledujú iné objekty. Tuhé telesá padajú, skladajú sa a zrážajú sa a sú zapečené do kľúčov. Ovládače nastavujú hodnotu z iných hodnôt. Pohľad Krivky na časovej osi tvaruje každú zmenu Bézierovými úchytmi a cyklami a pohľad Klipy ukladá animácie ako akcie, ktoré znova umiestnite a miešate.
keywords: fyzika, tuhé teleso, tuhé telesá, simulácia, simulovať, padať, pád, gravitácia, zraziť sa, zrážka, skladať, odraz, trenie, zapiecť, zapečené, ik, inverzná kinematika, obmedzenie, obmedzenia, pozerať na, sledovať, mieriť, kopírovať transformácie, kopírovať polohu, kopírovať otočenie, obmedziť otočenie, limity, potomok, rodič, sledovať dráhu, dráha, pól, fabrik, reťaz, kostra, kostry, kosti, kosť, skelet, pokožka, váhy, maľovanie váh, skupiny vrcholov, automatické váhy, pózа, tvarové kľúče, morf, morfy, cieľové tvary, výrazy, ovládač, ovládače, animačný priestor, animovať, animácia, kľúčový snímok, kľúče, vlastnosť, vlastnosti, transformácia, poloha, otočenie, veľkosť, svetlo, jas, farba, objektív, zorný uhol, fov, editor kriviek, krivky, bézier, úchyty, dotyčnica, interpolácia, cyklus, cykly, opakovať, slučka, tam a späť, posun, graf kľúčov, výber kľúčov, rámček, kopírovať kľúče, prilepiť kľúče, natiahnuť kľúče, mierka kľúčov, klipy, akcie, nla, zmiešanie, prelínanie, vplyv, uskladniť
from: 16d8e12f
---

[Časová os](topic:animation) posúva kameru a celé skupiny a komponenty. Pracovný priestor **Animácia** zakľúčuje viac než to a časová os dostáva dva ďalšie pohľady na tvarovanie a opätovné použitie toho, čo ste zakľúčovali.

## Otvorenie

Vyberte {{ui:Animácia}} v zozname pracovných priestorov na paneli nástrojov. Pod pohľadom sa otvorí časová os, panel nástrojov zobrazí skupiny Animácie ({{ui:Kľúče}}, {{ui:Prehrať}}, {{ui:Časová os}}) a panel vpravo uvádza, čo môžete zakľúčovať na hlave prehrávania.

## Zakľúčovanie vlastnosti

Panel na hlave prehrávania uvádza:

- **Vybraný objekt**: jeho {{ui:Umiestniť}}, {{ui:Otočenie (°)}} a {{ui:Veľkosť}}, každé po troch číslach. Zadajte číslo a stlačte {{key:Enter}}: hodnota sa zakľúčuje na hlave prehrávania a objekt sa tam presunie. Kosoštvorec vedľa riadka zakľúčuje hodnotu tak, ako je teraz; vyplnený kosoštvorec znamená, že na hlave prehrávania už je kľúč.
- **Svetlá**: pre každé svetlo {{ui:Jas (lm)}}, {{ui:Rozptyl (°)}} (reflektorové svetlá) a {{ui:Farba}}.
- **Kamera**: {{ui:Uhol objektívu (°)}} pre priblíženie počas pohybu kamery.

{{ui:Kľúč transformácie}} (alebo {{key:I}}) zakľúčuje umiestnenie, otočenie a veľkosť každej vybranej skupiny alebo komponentu naraz; {{ui:Kľúč kamery}} (alebo {{key:K}}) zakľúčuje kameru. Keď je zapnutý {{ui:Automatický kľúč}}, skupina, ktorej umiestnenie, otočenie a veľkosť sú takto zakľúčované, dostane nový kľúč vždy, keď ju presuniete.

Otočenia sú tri uhly: okolo osi X, potom Y a potom Z. Otočenie zakľúčované za 180° pokračuje rovnakým smerom (190° zostane 190°, nie −170°), takže koleso sa môže otáčať niekoľkokrát.

:::tip
Skupina zakľúčovaná pomocou {{ui:Kľúč výberu}} na časovej osi má kľúče celého umiestnenia. Tlačidlo krivky na jej riadku ich premení na krivky umiestnenia, otočenia a veľkosti (rovnaké umiestnenie v každom kľúči), aby ste ich mohli tvarovať v {{ui:Krivky}}.
:::

## Tvarové kľúče (morfy)

**Tvarový kľúč** je iný tvar tej istej [siete](topic:meshes): úsmev na tvári, vyklenutie dverí, ohnutý list. Jeho posúvač prelína od siete v jej pôvodnom stave (0) k tomuto tvaru (1); viacero kľúčov sa sčítava.

1. V pracovnom priestore Animácia vyberte sieť: panel zobrazí jej {{ui:Tvarové kľúče}}.
2. Kliknite na {{ui:Pridať tvarový kľúč}}. ModelCraft prejde do [pracovného priestoru Sieť](topic:mesh-edit) s novým kľúčom v úprave: presúvajte body, vyťahujte, tvarujte – zmeňte sieť na požadovaný tvar.
3. Vráťte sa do {{ui:Animácia}} a kliknite na {{ui:Hotovo}}. Sieť sa vráti do pôvodného stavu a kľúč si uchová vašu zmenu.

Potom potiahnite posúvač kľúča (alebo zadajte hodnotu), aby sa primiešal. Kosoštvorec zakľúčuje hodnotu na hlave prehrávania, takže kľúč môže v čase narastať a miznúť; keď už má stopu, nová hodnota sa zakľúčuje na hlave prehrávania. Ceruzka znovu upraví tvar kľúča (sieť ho zobrazuje v plnej podobe až do {{ui:Hotovo}}; {{ui:Zrušiť}} ponechá kľúč tak, ako bol), oko kľúč vypne a kôš ho odstráni.

Vrchol, ktorý pridáte pri úprave kľúča, patrí samotnej sieti: ostane tam, kde ste ho vytvorili, vo všetkých tvaroch.

:::note
Tvarové kľúče pôsobia na sieť pred jej [modifikátormi](topic:modifiers): modifikátor Subdivision vyhladí primiešaný tvar. Vykreslené obrázky a videá zobrazujú kľúče v každom snímku.
:::

## Kostry: kosti, ktoré ohýbajú sieť

**Kostra** je súbor kostí vnútri [siete](topic:meshes). Keď nastavíte kosti do pózy, sieť ich nasleduje, každý bod v takom rozsahu, ako určujú jeho **váhy**.

1. V pracovnom priestore Animácia vyberte sieť a v paneli kliknite na {{ui:Pridať kostru}} (alebo na {{ui:Pridať kosť}} v skupine {{ui:Kostra}}): prvá kosť vedie od spodku siete cez jej stred nahor.
2. Keď je vybraná kosť, {{ui:Pridať podriadenú kosť}} pridá ďalšiu od jej hrotu. V paneli nastavte u ľubovoľnej kosti {{ui:Hlava}}, {{ui:Hrot}}, {{ui:Zvinutie (°)}} a to, {{ui:Visí na}}; kosť, ktorá visí na inej, sa s ňou pohybuje. Pre kosť, ktorá iba riadi ostatné, zrušte označenie {{ui:Hýbe sieťou}}.
3. Kliknite na {{ui:Automatické váhy}}: každá kosť si podrží body najbližšie k sebe a toto podržanie sa plynulo rozloží po sieti, takže body medzi dvoma kosťami ich zdieľajú. {{ui:Len najbližšie kosti}} je rýchlejšie a ostrejšie rozdelenie.

Nastavte kosti do pózy pomocou {{ui:Poza}} ({{key:P}}): kliknutím vyberte kosť, potiahnutím ju otočte okolo osi pohľadu, potiahnutím so {{key:Shift}} ju presuniete. Alebo zadajte jej {{ui:Umiestniť}}, {{ui:Otočenie (°)}} a {{ui:Veľkosť}} pod {{ui:Poza}}; otočenia sú v osiach samotnej kosti, od miesta, kde kosť leží v kľude. Kosoštvorce a {{ui:Zakľúčovať celú pózu}} zakľúčujú pózu na hlave prehrávania; keď má kosť kľúče, jej nastavenie ho tam zakľúči. {{ui:Obnoviť túto kosť}} a {{ui:Obnoviť pózu}} vrátia kosti do kľudovej polohy.

**Maľovanie váh** ({{key:W}}) pre vybranú kosť: sieť sa zobrazí v kľude, každá plocha je sfarbená podľa toho, koľko ju daná kosť drží – červená všetko, modrá nič. Maľujte, aby ste pridali podržanie ({{key:Mod}} ho odoberie, {{key:Shift}} vyhladí); {{ui:Veľkosť (px)}} a {{ui:Sila}} nastavujú štetec. Pri {{ui:Udržiavať súčet váh každého bodu na 1}} dať jednej kosti viac znamená, že ju ostatným odoberiete v rovnakej miere. Každý ťah je jeden krok späť v modeli.

{{ui:Pokožka}} určuje, ako sa bod medzi kosťami pohybuje: {{ui:Lineárny (rýchly)}} primiešava pohyby kostí a mierne stláča ohnutý kĺb; {{ui:Duálny kvaternión (zachováva objem v kĺboch)}} namiesto toho otáča bod okolo kĺbu, takže lakeť alebo koleno si zachová hrúbku (vtedy {{ui:Veľkosť}} kosti nenatiahne pokožku).

:::note
Najprv idú tvarové kľúče, potom kostra a potom [modifikátory](topic:modifiers). Pohľad, obrázky aj videá zobrazujú sieť v póze; váhy siete sa uložia spolu s ňou, kosti a ich póza spolu s animáciou.
:::

## IK a obmedzenia

**Obmedzenie** pohybuje kosťou alebo objektom po ich kľúčoch podľa pravidla. Vyberte objekt (alebo v kostre kosť) a pridajte obmedzenie pod {{ui:Obmedzenia pre …}}; viac obmedzení sa vykonáva v uvedenom poradí (šípky ho menia) a každé má {{ui:Ako veľmi}} (0 až 1, zakľúčované kosoštvorcom ako každá vlastnosť) a vypínač.

| Obmedzenie | Pre | Čo robí |
|---|---|---|
| {{ui:Dosah (IK)}} | Kosti | Kosť a kosti, na ktorých visí ({{ui:Kosti v reťazci}}), sa ohnú tak, aby jej hrot dosiahol cieľ. Pri dvoch kostiach a {{ui:Pól (ohyb smeruje k nemu)}} lakeť alebo koleno smeruje k pólu; dlhšie reťazce sa ohýbajú plynulo. Ak je cieľ mimo dosahu, reťaz smeruje priamo na cieľ. |
| {{ui:Pozerať na}} | Obe | Otočí sa tak, aby {{ui:Os, ktorá mieri}} smerovala na cieľ, pričom {{ui:Os ponechaná nahor}} zostane čo najbližšie nahor. |
| {{ui:Kopírovať transformácie}} | Obe | Prevezme umiestnenie, otočenie alebo veľkosť cieľa – tie, ktoré sú označené. |
| {{ui:Limity}} | Obe | Udržiava svoje umiestnenie, otočenie (stupne) alebo veľkosť medzi {{ui:min}} a {{ui:max}} pre každú os; ak pár nechá prázdny, daná os zostane voľná. |
| {{ui:Potomok}} | Obe | Pohybuje sa s cieľom, akoby na ňom visel, od miesta, kde boli obidva, keď ste cieľ vybrali. |
| {{ui:Sledovať dráhu}} | Objekty | Sedí na [objekte krivky](topic:curves) v mieste {{ui:Pozdĺž krivky}} (0 jej začiatok, 1 jej koniec; zakľúčujte ho, aby cestoval) a s {{ui:Otáčať pozdĺž krivky}} smeruje pozdĺž nej. |

Cieľom je iný objekt v otvorenej skupine, kosť tej istej kostry alebo {{ui:Bod}}, ktorý zadáte (bod objektu je v súradniciach modelu, bod kosti v súradniciach jej siete). Pri IK nohe umiestnite cieľ tam, kde má byť chodidlo, a cieľ zakľúčujte, alebo zakľúčujte {{ui:Ako veľmi}}, aby noha medzi kľúčmi prešla z kľúčov na IK.

:::tip
Objekt, ktorý sa pozerá na iný, ktorý sleduje dráhu, ho vidí na dráhe: ModelCraft najprv vypočíta ciele, bez ohľadu na poradie objektov.
:::

## Fyzika: pád, skladanie a zrážky

Nechajte objekty padať a naraziť do seba, potom výsledok ponechajte ako kľúče.

1. Vyberte skupinu, komponent alebo sieť a nastavte ich {{ui:Tuhé teleso}} v časti {{ui:Fyzika}}: {{ui:Padá a zráža sa}} (pohybuje sa) alebo {{ui:Zostáva na mieste, prekáža}} (stôl, stena, rampa). Padajúcemu objektu nastavte {{ui:Tvar}} – {{ui:Kváder (jeho ohraničenie)}} alebo {{ui:Guľa (okolo jeho ohraničenia)}} – jeho {{ui:Hmotnosť (kg)}}, {{ui:Trenie}} a {{ui:Odraz}} (0 dopadne bez odrazu, 1 odskočí späť rovnako vysoko).
2. V časti {{ui:Celý model}} nastavte {{ui:Od (s)}} a {{ui:Do (s)}}, {{ui:Gravitácia (m/s², nadol)}} a či je tu {{ui:Zem, na ktorú sa dopadá}} (a jej výška).
3. Kliknite na {{ui:Vypočítať fyziku}} (v paneli alebo v skupine {{ui:Fyzika}}). Každý padajúci objekt dostane kľúč umiestnenia, otočenia a veľkosti v každom snímku medzi oboma časmi; prehrajte ho ako ľubovoľnú animáciu.

Nové vypočítanie nahradí tieto kľúče; {{ui:Odstrániť vypočítané kľúče}} ich odstráni. Objekty začínajú v kľude, tam, kam ich v {{ui:Od (s)}} postavia ich kľúče, krivky a obmedzenia (zakľúčený pohyb pred tým sa do pádu nepreniesie). Vyšší počet {{ui:Krokov na snímku}} udrží vysoké hromady stabilnejšie; stavový riadok na konci oznámi, ak sa niečo stále hýbe.

:::note
Tvary sú kvádre a gule okolo ohraničenia každého objektu; kváder sa dotýka rohmi, stredmi hrán a stredmi stien, takže kvádre sa skladajú a prevracajú tak, ako by ste čakali. Látky, kvapaliny, spoje medzi objektmi a presné tvary ešte nie sú hotové.
:::

## Ovládače

**Ovládač** nastavuje tvarový kľúč z iných vecí namiesto ručne: otvorte ovládač kľúča (tlačidlo kalkulačky), napíšte **výraz** a každému názvu v ňom priraďte, čo číta ({{ui:Číta}}): čas v sekundách, snímok, umiestnenie, otočenie alebo veľkosť objektu pozdĺž X, Y alebo Z, jas svetla alebo iný tvarový kľúč. Napríklad keď `v` číta otočenie dverí okolo Z, `clamp(v / 90, 0, 1)` otvorí tvar, keď sa dvere otvárajú.

Výrazy používajú čísla, názvy, `+ - * / % ^` a zátvorky a funkcie `sin cos tan asin acos atan atan2 abs sqrt exp log floor ceil round sign pow min max clamp lerp smoothstep rad deg` s `pi` a `e`. Chyba sa označí a nič nezmení. Posúvač riadeného kľúča zobrazuje hodnotu ovládača; ovládač má prednosť pred stopou kľúča, kým ho neodstránite.

## Výber a úprava kľúčov (pohľad Kľúče)

{{ui:Kľúče}} zobrazuje jeden riadok pre každú stopu: kameru, každú pohybujúcu sa skupinu a každú vlastnosť ("Svetlo 2 · Jas (lm)"; kľúče vlastností sú okrúhle).

- Kliknutím na kľúč ho vyberiete; kliknutie so {{key:Shift}} alebo {{key:Mod}} pridá kľúče do výberu alebo ich z neho odoberie. Potiahnutie so {{key:Shift}} cez riadky nakreslí rámček, ktorý pridá všetky kľúče v ňom.
- Potiahnutím vybraného kľúča ich presuniete všetky; {{key:Left}} / {{key:Right}} ich posunú o snímok ({{key:Shift}}: desať).
- {{key:Mod+C}} skopíruje vybrané kľúče, {{key:Mod+V}} ich prilepí od hlavy prehrávania na tie isté stopy (aj iná karta ModelCraft ich môže prilepiť).
- {{ui:Natiahnutie}} roztiahne vybrané kľúče od hlavy prehrávania o číslo vedľa neho (2 = dvakrát ďalej od seba; 0.5 ich stiahne bližšie).
- Zoznam plynulosti nastavuje, ako sa každý vybraný kľúč posúva ďalej.

## Tvarovanie kriviek (pohľad Krivky)

{{ui:Krivky}} je graf každého čísla v čase: čas vodorovne, hodnota zvislo. Označte krivky, ktoré sa majú zobraziť v zozname vľavo (X, Y a Z sú červená, zelená a modrá).

- Kliknutím na kľúč (štvorec) ho vyberiete, kliknutím so {{key:Shift}} pridáte ďalšie, alebo potiahnete rámček. Potiahnutím vybraného kľúča zmeníte jeho čas a hodnotu; keď je vybraných viac, potiahnutím ich posuniete v čase.
- Vybraný kľúč zobrazuje svoje dva **úchyty**. Potiahnutím jedného tvarujete krivku na tej strane. {{ui:Úchyty}} určuje, ako sa správajú: {{ui:Automatické}} (plynulá krivka cez okolité kľúče), {{ui:Smerujúce na ďalší kľúč}}, {{ui:Zarovnané}} (obidva zostanú na priamke, takže krivka nemá roh) alebo {{ui:Voľný}}.
- {{ui:Z vybraných kľúčov}} nastavuje, ako každý vybraný kľúč prechádza na ďalší: {{ui:Krivka (úchyty)}}, {{ui:Vyhladiť}}, {{ui:Rovnomerne}}, {{ui:Pomalý nábeh a dobeh}} alebo {{ui:Podržať}}.
- {{ui:Pred}} a {{ui:Po}} nastavujú, čo krivka robí mimo svojich kľúčov: {{ui:Podržať}} (zostane na prvej alebo poslednej hodnote), {{ui:Opakovať}}, {{ui:Tam a späť}} alebo {{ui:Opakovať a pokračovať}} (každé opakovanie začína tam, kde skončilo predchádzajúce: koleso sa ďalej kotúľa, chodec ďalej kráča).
- Koliesko zväčšuje ({{key:Mod}}: len hodnoty, {{key:Shift}}: len čas); potiahnite prostredným tlačidlom alebo s {{key:Alt}} na posun; {{ui:Zobraziť všetko}} alebo {{key:Home}} prispôsobí každú zobrazenú krivku. Kliknutím na prázdne miesto tam presuniete hlavu prehrávania. {{key:Delete}} zmaže vybrané kľúče.

Úchyty sa nesmú v čase prekrížiť, takže krivka nikdy nejde spätným smerom.

## Opätovné použitie animácií (pohľad Klipy)

**Klip** prehráva uloženú animáciu (**akciu**) na časovej osi. Klipy sa miešajú v poradí, nižšie riadky nad vyššími; vlastné stopy časovej osi sú nad každým klipom.

1. Skupiny a svetlá zakľúčujte ako obvykle, potom v {{ui:Klipy}} kliknite na {{ui:Vytvoriť klip}} a akcii dajte názov. Stopy sa stanú akciou a klip ju prehráva tam, kde boli (kamera zostáva na časovej osi).
2. Ak ju chcete použiť znova, vyberte akciu a kliknite na {{ui:Pridať klip}}: nový klip začína na hlave prehrávania.
3. Klip potiahnite po jeho riadku, aby ste ho presunuli; kliknutím naň nastavte {{ui:Začiatok (s)}}, {{ui:Rýchlosť}} (2 = dvakrát rýchlejšie), {{ui:Opakovania}}, {{ui:Ako veľmi}} (0 až 1), {{ui:Zmiešanie}} ({{ui:Nahradiť}}, alebo {{ui:Pridať navrch}} na klipy pred ním), {{ui:Mimo klipu}} (nič, podržať jeho koniec alebo podržať oba konce) a {{ui:Stlmiť}}. Šípky menia poradie; kôš ho odstráni (akcia, ktorú už žiadny klip nepoužíva, odíde spolu s ním).

Klip s menším než plným {{ui:Ako veľmi}} sa primiešava k tomu, čo je pod ním: k predchádzajúcemu klipu, alebo k svetlu či umiestneniu tak, ako sú bez animácie.

## Čo sa kde prehráva

| Čo | V pohľade | Vo vykreslenom videu |
|---|---|---|
| Kľúče kamery, uhol objektívu s kľúčmi kamery | Áno | Áno |
| Umiestnenie, otočenie a veľkosť (kľúče, krivky, klipy) | Áno | Áno |
| Jas, rozptyl a farba svetla | Áno | Zatiaľ nie: video používa svetlá tak, ako sú na začiatku (pozri [čo ešte nie je hotové](topic:not-built-yet)) |
| Uhol objektívu bez kľúčov kamery | Áno | Zatiaľ nie: zakľúčujte aj kameru |
| Tvarové kľúče a ovládače | Áno | Áno |
| Kostry (siete v póze) | Áno | Áno |
| IK a obmedzenia | Áno | Áno |
| Vypočítaná fyzika (kľúče) | Áno | Áno |

Všetko sa uloží do súboru `.modelcraft` spolu so zvyškom animácie a {{ui:Späť}} a {{ui:Znova}} na časovej osi vrátia ktorúkoľvek z týchto zmien.
