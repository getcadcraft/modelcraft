---
title: Rozdelenie veľkého modelu na tlač
summary: Rozrežte model, ktorý je príliš veľký pre vašu tlačiareň, na kusy, ktoré sa zmestia na podložku, s čapmi, perami, rybinovými spojmi, dierami pre kolíky alebo magnety a číslom spoja na oboch plochách; každý kus a list zostavy si stiahnete v jednom zip súbore.
keywords: 3D tlač, rozdelenie, šikmý rez, šikmý, rozrezanie, rez, príliš veľký, veľkosť podložky, objem tlače, kusy, súčiastky, spojovacie prvky, čapy, perá, rybinový spoj, kolíky, magnet, vôľa, tolerancia, čísla kusov, zostava, rozložený pohľad, zip, stl, 3mf, licencia, license, USB kľúč, dongle
from: ee96ba77
---

Keď je model väčší než podložka vašej tlačiarne, **Rozdeliť na tlač** ho rozreže na kusy, ktoré sa zmestia, pridá spojovacie prvky, aby sa kusy po zložení zarovnali, a vyryje rovnaké číslo na obe plochy každého spoja. Otvorte {{ui:Export}} › {{ui:Check for 3D printing (STL or 3MF)…}}; na riadku **Nástroje na tlač** v dialógu je {{ui:Split for printing}}. Otvorí sa ako karta nad zobrazením modelu.

Funguje na tom, čo sa vytlačí: na výbere, alebo na všetkom zobrazenom, keď nič nie je vybrané. To, čo sa tlačí, musí byť uzavreté teleso; ak kontrola nájde diery, najskôr použite [Oprava](topic:print-tools#repair).

Beží v ModelCraft na vašom počítači: bez licenčného servera, bez USB kľúča, nič sa nenahráva.

## Ako rezať

- **Prispôsobiť podložke, najmenej kusov**: zadajte šírku, hĺbku a výšku podložky (berú sa z {{ui:Nastavenia}} › ModelCraft › 3D tlačiareň). Karta povie, koľko kusov je potrebných a aký veľký je každý; model rozreže na rovnaké kusy, a to čo najmenej. Kus môže ležať na boku v súboroch, ak sa tak zmestí. Spojovacie prvky, ktoré vyčnievajú z kusu, sa počítajú do jeho veľkosti.
- **Na miestach, ktoré zadám**: vyberte os, pozdĺž ktorej sa reže, a napíšte miesta v milimetroch od nižšieho konca modelu, oddelené čiarkami (`100, 200` vytvorí tri kusy).
  **Šikmý rez** otočí rezy až o 60° okolo jednej z dvoch ostatných osí (napríklad rez naprieč Z šikmo okolo X): každý šikmý rez prechádza stredovou čiarou modelu v jeho mieste, dáva kusom väčšiu plochu na lepenie a lepšie skrýva spoj na šikmom povrchu. Spojovacie prvky sú kolmé na rez.

Rezné roviny sa počas otvorenej karty kreslia okolo modelu prerušovanými čiarami.

## Spojovacie prvky

Každé miesto, kde sa dva kusy dotýkajú, dostane spojovacie prvky, ktoré sa umiestnia samy tam, kde je najviac miesta: aspoň **najmenšia stena** plus **vôľa** plus ich vlastná veľkosť od vonkajšieho okraja a dostatočne ďaleko od každého ďalšieho rezu, aby sa dva otvory nikdy nestretli. Na dlhej ploche sa dva spojovacie prvky rozmiestnia pozdĺž nej, aby sa kusy nemohli otáčať.

- **Okrúhle čapy**: čap na jednom kuse (zrazený na hrote), diera na druhom.
- **Štvorcové perá**: to isté, štvorcové, takže kus sa dá nasadiť len jedným smerom.
- **Rybinové spoje**: jazýček, ktorý sa zasúva do drážky z boku. Ak by jeden koniec drážky narazil na ďalší rez, rybinový spoj sa zastaví skôr a zasúva sa z otvoreného konca. Rybinové spoje sa hodia na rezy v jednom smere (rad plátkov); v mriežke použite čapy alebo kolíky.
- **Diery pre kolíky**: diera na každej strane; aj kolíky sa vytlačia (v zip súbore).
- **Magnetické vybrania**: vybranie na každej strane pre okrúhly magnet s priemerom a hrúbkou, ktoré zadáte. Pred nalepením skontrolujte póly.
- **Žiadne (lepidlo)**.

**Vôľa** je medzera na každej strane medzi čapom a jeho dierou (na začiatku 0.2 mm). Platí presne podľa zadaného čísla: okrúhle diery sa urobia o niečo väčšie, aby si medzeru udržali ich rovné strany, nie rohy. Ak diely vašej tlačiarne vychádzajú tesne, zvýšte ju.

Ak pre spoj nie je miesto na spojovací prvok (tenká stena, malá dotyková plocha), karta to napíše: tento spoj zalepte.

## Čísla kusov

Keď je zapnuté **Vyryť čísla spojov na oboch plochách**, každý spoj dostane číslo svojich dvoch kusov, napríklad `3-4`, vyryté do hĺbky 0.6 mm na oboch plochách, čitateľné správnym smerom na každej. Čísla majú začiatočnú výšku 5 mm a zmenšujú sa, aby sa zmestili, až na 2.5 mm; spoj bez miesta na číslo sa uvedie v zozname. Kusy sa číslujú od spodnej vrstvy nahor.

## Náhľad, stiahnutie, rozdelenie modelu

1. {{ui:Preview}} model rozreže a povie, koľko je kusov, spojov a spojovacích prvkov, či každý kus prejde kontrolou pre 3D tlač a zmestí sa na podložku, a vypíše veľkosť každého kusu. Kruh v zobrazení označí každý spojovací prvok a číslo.
2. {{ui:Download the pieces (.zip)}} uloží jeden zip: súbor pre každý kus (STL alebo 3MF podľa toho, čo zvolíte pod **Súbory**), každý stojí na podložke; kolíky; a **list zostavy** — obrázok rozložených kusov s ich číslami (`assembly.svg` a `assembly.png`) a zoznam kusov a spojov (`assembly.txt`).
3. {{ui:Split the model}} vloží kusy do modelu namiesto vybraných skupín alebo komponentov, pomenované ako na liste zostavy, v jednom kroku; pomocou {{ui:Undo}} sa vráti pôvodný model. Vyžaduje, aby boli vybrané skupiny alebo komponenty, ktoré sa majú rozdeliť; stiahnutie funguje na čokoľvek, čo sa dá vytlačiť.

## Spojovacie prvky upravte sami

Po náhľade môžete pomocou **Spojovacie prvky ručne** upraviť, kam spojovacie prvky idú:

- {{ui:Move one}}: kliknite na červený kruh v zobrazení (zmení sa na zelený) a potom kliknite na miesto na reze, kam má prvok patriť.
- {{ui:Add one}}: kliknite v zobrazení tam, kam má spojovací prvok ísť. Umiestni sa na rezovú rovinu, ktorú váš klik zasiahne, medzi tamojšie dva kusy.
- {{ui:Remove one}}: kliknutím na červený kruh tento spojovací prvok odstránite.

Každá zmena sa znova kontroluje ako automatické: miesto príliš blízko obrysu, iný rez alebo iný spojovací prvok sa nevytvorí a karta to povie. {{ui:Automatic again}} zabudne vaše miesta. Zostanú zachované, kým model, výber a rezy zostanú nezmenené.

Náhľad zostáva, kým sa nezmení model, výber alebo nastavenie; potom karta požiada o nový náhľad.

:::note
Každý kus sa pred stiahnutím kontroluje rovnako, ako by ho kontrolovala kontrola pre 3D tlač. Váš slicer aj tak rozhodne, ako sa každý kus vytlačí: pozrite si každý v ňom a najskôr vytlačte jeden spoj, aby ste zistili, ako si vaša tlačiareň poradí s vôľou.
:::
