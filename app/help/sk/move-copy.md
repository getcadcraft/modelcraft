---
title: Presunúť, kopírovať a vytvoriť polia
summary: Presúvajte objekty kliknutím alebo o presnú vzdialenosť, kopírujte ich pomocou modifikačného klávesu a vytvorte rad rovnomerne rozmiestnených kópií.
keywords: presunúť, kopírovať, duplikovať, pole, rad, rozostup, rozdeliť, odsadenie, natiahnuť, stĺpce, opakovať, viacnásobná kópia
from: 280245fc
---

{{ui:Presunúť}} ({{key:M}}) presunie všetko, čo je vybrané, z jedného bodu do druhého. Ak podržíte modifikačný kláves, vznikne kópia a po kopírovaní môžete zadať, koľko ďalších kópií chcete.

## Presunúť objekt

1. Vyberte, čo chcete presunúť (pozri [Výber objektov](topic:select)). Ak nič nie je vybrané, nástroj {{ui:Presunúť}} použije objekt, na ktorý kliknete.
2. Stlačte {{key:M}}.
3. Kliknite na bod, z ktorého chcete presunúť. Vyberte niečo zmysluplné, napríklad roh: tento bod sa presunie presne na miesto, kam kliknete ďalej.
4. Pohybujte ukazovateľom. Výber sa pohybuje spolu s ním. Prichytáva sa k bodom, hranám a k červenému, zelenému a modrému smeru ako čiara.
5. Kliknite na miesto, kam má bod ísť, alebo zadajte vzdialenosť a stlačte {{key:Enter}}.

   Tip v stavovom riadku sa pri ďalšom presune vráti na „Kliknite na bod, z ktorého chcete presunúť…“.

Zadaná vzdialenosť ide v smere, ktorým ukazujete. Môžete tiež zadať presné posunutie `<2m,0,0>` (2 m pozdĺž červenej) alebo presný cieľ pre vybratý bod `[0,0,0]` (počiatok). Pozri [Zadávanie presných rozmerov](topic:value-box).

Ak chcete presúvať len po jednej osi, stlačte po prvom kliknutí šípku: {{key:Right}} uzamkne na červenú, {{key:Left}} na zelenú, {{key:Up}} na modrú. Ak stlačíte tú istú šípku znova, uzamknutie sa zruší.

## Presun časti tvaru ho natiahne

Geometria, ktorá nie je zoskupená, je prepojená. Ak vyberiete jednu plochu alebo niekoľko hrán a presuniete ich, plochy k nim pripojené sa natiahnu. Ak presuniete hornú plochu škatule do strany, škatuľa sa nakloní; ak presuniete jednu hranu strechy, zmení sa sklon strechy. Plochy, ktoré už nemôžu zostať rovné, sa zložia na trojuholníky.

Ak chcete presunúť celý objekt bez natiahnutia, najprv ho celý vyberte (trojitým kliknutím), alebo lepšie, vytvorte z neho skupinu alebo komponent (pozri [Skupiny a komponenty](topic:groups-components)).

## Kopírovať objekt

1. Vyberte, čo chcete kopírovať.
2. Stlačte {{key:M}}.
3. Podržte {{key:Ctrl}} (alebo {{key:Alt}}) a kliknite na bod, z ktorého chcete presunúť. Na Macu urobí to isté {{key:Mod}} alebo {{key:Alt}}. Tip hovorí „Ctrl presúva namiesto toho“, čo znamená, že kopírujete.

   Môžete tiež po prvom kliknutí stlačiť a pustiť {{key:Ctrl}} alebo {{key:Alt}} a prepínať medzi presúvaním a kopírovaním.

4. Kliknite na miesto, kam má kópia ísť, alebo zadajte vzdialenosť a stlačte {{key:Enter}}.

   Originál zostane na pôvodnom mieste a kópia je vybraná.

## Kopírovanie, vystrihnutie, prilepenie a duplikovanie

- {{key:Mod+C}} skopíruje výber, {{key:Mod+X}} ho vystrihne (skopíruje a potom zmaže). {{ui:Kopírovať}} a {{ui:Prilepiť}} sú tiež tlačidlá na paneli nástrojov v skupine {{ui:Úpravy}} a {{ui:Viac}} vedľa nich obsahuje vystrihnutie, prilepenie na rovnaké miesto a duplikovanie.
- {{key:Mod+V}} prilepí: obrys kópie sa pohybuje za ukazovateľom, prichytáva sa ako každý nástroj a kliknutie ju umiestni tak, že jej najnižší roh bude na tom mieste. {{key:Esc}} zruší.
- {{key:Mod+Shift+V}} prilepí na rovnaké miesto, presne tam, odkiaľ kópia pochádza. Hodí sa to na presun niečoho do skupiny, ktorú máte otvorenú.
- {{key:Mod+D}} ({{key:Shift+D}} v štýle Modeler) duplikuje: kópia sa vytvorí a hneď sa pohybuje s ukazovateľom. Kliknutím ju umiestnite, zadajte vzdialenosť, alebo stlačte {{key:Esc}}, aby ste ju zahodili. Hneď potom zadajte `3x` pre ďalšie kópie v rade.

Prilepená skupina sa stane novou skupinou. Prilepený komponent je ďalším umiestnením toho istého komponentu, takže úprava jedného stále mení všetky. Kópie sa prilepia aj do inej karty ModelCraft v tomto prehliadači (tam prídu ako nové definície).

## Rad kópií

Hneď po kopírovaní, keď je {{ui:Presunúť}} stále aktívny nástroj:

- Zadajte `3x` (alebo `*3`) a stlačte {{key:Enter}} pre tri kópie v rade, každú v rovnakom rozostupe ako prvú kópiu. Dostanete tri nové kópie okrem originálu.
- Zadajte `/3` a stlačte {{key:Enter}}, ak chcete rozdeliť: tri kópie rovnomerne rozložené od originálu až po miesto, kam ste umiestnili prvú kópiu, pričom posledná je presne na tom mieste. Použite to na vyplnenie úseku: umiestnite jednu kópiu na vzdialený koniec a potom rozdeľte.

Potom môžete zadať iné číslo: `5x` nahradí rad `3x`. Tip vám pripomína: „Skopírované. Zadajte 3x pre ďalšie kópie v rade alebo /3 na rozdelenie vzdialenosti.“

### Príklad: stĺpce každých 6 metrov

1. Vytvorte stĺpec a urobte z neho komponent ({{key:G}}), aby sa všetky kópie neskôr menili spolu.
2. Stlačte {{key:M}}, podržte {{key:Ctrl}} a kliknite na roh päty stĺpca.
3. Presuňte sa pozdĺž červenej osi, zadajte `6m` a potom stlačte {{key:Enter}}.
4. Zadajte `4x` a stlačte {{key:Enter}}. Máte päť stĺpcov, každý 6 m od seba.

## Dôležité informácie

- Pred druhým kliknutím stlačte {{key:Esc}}, aby ste operáciu zrušili; všetko sa vráti na pôvodné miesto.
- Presun funguje vnútri skupiny, ktorú upravujete. Ak chcete presunúť celú skupinu, najprv ju zatvorte a vyberte ju zvonka.
- Keď je zapnuté {{ui:Kolízia}} (vpravo dole a v [nastaveniach ModelCraft](topic:settings#solids-stop-where-they-touch)), presun sa zastaví tam, kde sa výber dotkne iného telesa, namiesto toho aby prechádzal cez neho. Kliknutím na {{ui:Kolízia}} ho vypnete pre presun, ktorý má prejsť cez teleso.
- Ak chcete dať kópiu do inej skupiny: skopírujte ju, otvorte druhú skupinu a prilepte ({{key:Mod+Shift+V}} ju nechá na rovnakom mieste).
