---
title: Kótujte a zmeňte veľkosť toho, čo ste nakreslili
summary: Umiestnite kóty medzi rohy, na oblúky a kružnice alebo medzi dve hrany; zadajte novú dĺžku a zmeníte veľkosť modelu. Dĺžku hrany alebo šírku, hĺbku a výšku skupiny znova zadajte v Informáciách o entite.
keywords: kóta, kóty, zmena veľkosti, zmeniť veľkosť, upraviť veľkosť, dĺžka, šírka, hĺbka, výška, roztiahnuť, riadiaca kóta, anotovať, merať, dodatočne, polomer, priemer, uhol, uhlová, oblúk, kružnica, R, Ø
from: a1f815ec
---

Veľkosti v ModelCraft nie sú pevné, keď je niečo nakreslené. Kóta zobrazuje dĺžku na modeli a zadanie novej dĺžky do nej zmení veľkosť modelu podľa nej. Dĺžku hrany alebo šírku, hĺbku a výšku skupiny môžete znova zadať aj v {{ui:Informácie o entite}}.

## Umiestnenie kóty

1. Stlačte {{key:D}} alebo kliknite na {{ui:Kóta}} na paneli nástrojov.
2. Kliknite na roh, od ktorého chcete merať. Prichytáva sa k rohom, stredom a hranám, ako pri kreslení.
3. Kliknite na druhý roh.

   Alebo kliknite raz na **hranu** (popis nástroja hovorí "Na hrane"), aby sa celá táto hrana okótovala jedným kliknutím.
4. Presuňte kurzor tam, kde má byť kótovacia čiara, a kliknite. Môžete tiež zadať odsadenie, napríklad `0.5m`, a stlačiť {{key:Enter}}.

   Kótovacia čiara zostáva vodorovná pri vodorovnej hrane, pokiaľ sa na ňu nepozeráte zboku. Pri zvislej hrane zostáva v zvislej rovine, ktorá je najlepšie obrátená k vám.

Stavový riadok hovorí "Kóta 4 m." Kóty zobrazujú dĺžku v jednotke modelu a aktualizujú sa, keď zmeníte jednotku vo výbere.

## Polomer, priemer a uhol

Rovnaký nástroj {{ui:Kóta}} kótuje aj okrúhle veci a uhly:

- **Oblúk:** kliknite na oblúk. Popis nástroja hovorí {{ui:Polomer}}. Presuňte kurzor tam, kde má byť text, a kliknite: kóta zobrazí **R 1.5 m**.
- **Kružnica:** kliknite na kružnicu. Dostanete **priemer** (**Ø 3 m**) s čiarou cez kružnicu cez jej stred. Mnohouholníky fungujú rovnako, s rohmi na kružnici.
- **Uhol medzi dvoma hranami:** kliknite na jednu hranu, potom na druhú hranu, ktorá sa s ňou stretáva v rohu (keď ste nad ňou, popis nástroja hovorí {{ui:Uhol medzi hranami}}). Potom sa presuňte do uhla, ktorý chcete, a kliknite. Vnútri rohu dostanete uhol medzi hranami; presuniete sa na jednu stranu a dostanete vedľajší uhol (napríklad 150° namiesto 30°). Vzdialenosť od rohu, v ktorej kliknete, určuje, kam oblúk pôjde; alebo túto vzdialenosť zadajte.

Ak chcete polomer prepnúť na priemer alebo späť, vyberte kótu a zvoľte v {{ui:Zobraziť ako}} v {{ui:Informácie o entite}}.

**Zmena veľkosti pomocou nich:** zadajte nový polomer alebo priemer hneď po umiestnení, alebo ho vyberte neskôr a zadajte. Oblúk alebo kružnica si zachová stred a zmení veľkosť; plocha, ktorú ohraničuje (kotúč, koniec drážky), sa s ňou zmení. Dve veci iba merajú:

- **Uhlová kóta** model nikdy nemení. Ak chcete zmeniť uhol, otočte hrany pomocou {{ui:Otočiť}}.
- **Kružnica na konci valca** (kružnica, ktorú ste vytiahli pomocou {{ui:Tlač/ťah}}) sa nedá zmeniť veľkosť z jej kóty, pretože by sa musel zmeniť aj jej bok. Namiesto toho zmeňte mierku valca okolo jeho osi.

## Zmena veľkosti modelu pomocou kóty

Hneď po umiestnení kóty zadajte novú dĺžku a stlačte {{key:Enter}}: `6m`, `12'`, `3500` v modeli v milimetroch. Model sa zmení na túto veľkosť.

Neskôr, kedykoľvek:

1. S {{ui:Vybrať}} kliknite na text alebo čiaru kóty. {{ui:Informácie o entite}} uvádza **Kóta** a zobrazuje jej {{ui:Dĺžka}}.
2. Zadajte novú dĺžku a stlačte {{key:Enter}}. Môžete písať priamo do poľa hodnôt alebo do poľa {{ui:Dĺžka}} v {{ui:Informácie o entite}}.

### Čo sa pohybuje

Pohybuje sa druhý roh, na ktorý ste klikli, a rovnako aj všetko za ním:

- **Obidva rohy na jednom kuse** (šírka kvádra, výška steny): strana pri pohybujúcom sa rohu sa posunie von alebo dovnútra a s ňou spojené plochy sa natiahnu. Kváder zostane uzavretým telesom a všetko, čo sedí celé na tejto strane, napríklad komponent okna, sa s ním pohne.
- **Rohy na dvoch samostatných kusoch** (medzera medzi dvoma kvádrami): kus pohybujúceho sa rohu sa presunie celý a medzera sa zmení.
- **Pohybujúci sa roh vnútri skupiny alebo komponentu**, v ktorej nie je druhý roh: celá skupina sa presunie.
- **Obidva rohy vnútri tej istej skupiny alebo komponentu**: natiahne sa vnútri. Komponent sa zmení všade, kde je umiestnený, ako to vždy robí úprava.

Ak chcete zmeniť, ktorý koniec sa pohybuje, vyberte kótu a zvoľte v {{ui:Presúva sa}} v {{ui:Informácie o entite}}:

| Voľba | Čo sa stane |
|---|---|
| {{ui:Druhý koniec}} (predvolené) | Pohybuje sa koniec, na ktorý ste klikli ako druhý |
| {{ui:Prvý koniec}} | Pohybuje sa koniec, na ktorý ste klikli ako prvý |
| {{ui:Oba konce (vycentrované)}} | Každý koniec sa pohne o polovicu zmeny, takže stred zostane na mieste |

### Keď je zmena veľkosti odmietnutá

ModelCraft nezmení nič a v stavovom riadku uvedie prečo:

- "plocha by sa ohla zo svojej roviny": kóta ide šikmo cez tvar. Kótujte pozdĺž hrany alebo pozdĺž červenej, zelenej alebo modrej.
- "plocha by sa zmenšila na nič alebo sa obrátila naruby": nová dĺžka je pre tvar príliš krátka.
- "koniec, ktorý sa pohybuje, nie je na rohu modelu": tento koniec bol umiestnený v prázdnom priestore alebo na stred hrany. Vyberte druhý koniec v {{ui:Presúva sa}}, alebo umiestnite kótu na dva rohy.
- "dĺžka musí byť väčšia ako nula".

Každá zmena veľkosti je jeden krok: {{key:Mod+Z}} ju vráti späť.

## Opätovné zadanie veľkosti v Informáciách o entite

Kótu nepotrebujete vždy:

- **Hrana:** vyberte ju. Jej {{ui:Dĺžka}} v {{ui:Informácie o entite}} je pole, do ktorého môžete písať. Zadanie dĺžky do poľa hodnôt funguje tiež. Pohybuje sa koniec, ktorý je ďalej pozdĺž červenej, potom zelenej, potom modrej, a natiahne sa to, čo je k nemu pripojené. Napríklad opätovné zadanie prednej spodnej hrany kvádra ho rozšíri doprava.
- **Skupina alebo komponent:** vyberte ich. {{ui:Šírka (červená)}}, {{ui:Hĺbka (zelená)}} a {{ui:Výška (modrá)}} sú polia. Pohybuje sa jej vzdialená strana (pravá, zadná, horná). Sú to vlastné osi skupiny, pred akýmkoľvek otočením, ktoré ste jej dali.

Stlačte {{key:Enter}} na použitie alebo {{key:Esc}} na vrátenie pôvodnej hodnoty.

## Kóty nasledujú model

Kóta je pripojená k dvom rohom, na ktoré bola umiestnená (uhol: k jeho rohu a vzdialeným koncom jeho dvoch hrán; polomer alebo priemer: k jeho oblúku alebo kružnici). Presuňte, tlačte/ťahajte alebo zmeňte veľkosť geometrie a kóta ju nasleduje a zobrazí novú dĺžku. Zostane pripojená, aj keď z geometrie vytvoríte skupinu alebo komponent.

Ak bol koniec umiestnený niekde, čo nie je roh (na ploche alebo v prázdnom priestore), alebo je jeho roh zmazaný, tento koniec zostane tam, kde bol. Kóta stále meria, ale môže sa meniť veľkosť len od svojho druhého konca.

## Odstránenie kót

- Jedna kóta: vyberte ju a stlačte {{key:Delete}}, alebo na ňu kliknite {{ui:Guma}}.
- Všetky kóty: keď nič nie je vybrané, kliknite na {{ui:Zmazať všetky kóty}} v {{ui:Informácie o entite}}.

Kóty sa ukladajú do súboru `.modelcraft`. Neexportujú sa do iných formátov, ktoré prenášajú iba 3D model. Súbor s kótami sa stále otvorí v staršom ModelCraft, bez nich.
