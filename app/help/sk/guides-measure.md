---
title: Meranie a umiestnenie vodiacich čiar
summary: Čítajte dĺžky a plochy, merajte medzi dvoma bodmi pásmom a rozmiestňujte vodiace čiary a body, o ktoré sa pri kreslení zarovnáte.
keywords: meranie, pásmo, uhlomer, uhol, šikmá vodiaca čiara, vodiaca čiara, pomocná čiara, vzdialenosť, kóta, dĺžka, plocha, odsadenie, rozloženie, vodiaci bod
from: de6d04d9
---

## Čítanie rozmerov bez merania

Vyberte niečo a pozrite sa na {{ui:Informácie o entite}}:

- Hrana zobrazí svoju **dĺžku**.
- Plocha zobrazí svoju **plochu** a počet otvorov.
- Viac plôch zobrazí ich **celkovú plochu**.
- Skupina alebo komponent zobrazí svoju **veľkosť** (šírka × hĺbka × výška boxu okolo nej) a ak je uzavretým telesom, aj **objem**.
- Keď nič nie je vybraté, {{ui:Informácie o entite}} zobrazí veľkosť celého modelu.

Dĺžky a plochy používajú jednotku z výberu v pravom dolnom rohu. Model v milimetroch zobrazuje plochy od 0.01 m² vyššie v štvorcových metroch (miestnosť 4 × 3 m sa zobrazí ako "12 m²").

Počas kreslenia zobrazuje políčko hodnoty živú dĺžku, veľkosť, polomer alebo vzdialenosť, takže len zriedka potrebujete merať dodatočne.

Ak chcete veľkosť zmeniť až po nakreslení, vyberte hranu alebo skupinu a v {{ui:Informácie o entite}} znova zadajte dĺžku alebo veľkosť. Alebo umiestnite [kótu](topic:dimensions) a zadajte do nej novú dĺžku.

## Meranie medzi dvoma bodmi

1. Stlačte {{key:T}} pre {{ui:Pásmo}}.
2. Kliknite na bod: roh, stred, bod na ploche alebo na zemi. (Kliknutie na hranu robí niečo iné; pozri nižšie.)
3. Presuňte sa na druhý bod. Hrot a políčko hodnoty ({{ui:Dĺžka}}) zobrazia vzdialenosť. Prichytáva sa k bodom a k červenému, zelenému a modrému smeru.
4. Kliknite. Stavový riadok hovorí "Nameraná hodnota 4' 6"." a na druhom bode zostane **vodiaci bod**.

Ak chcete namiesto toho zanechať vodiaci bod v presnej vzdialenosti, zadajte ju po prvom kliknutí a stlačte {{key:Enter}}: pôjde v smere, ktorým ukazujete.

## Umiestnenie vodiacej čiary

Vodiaca čiara je nekonečná prerušovaná čiara rovnobežná s hranou vo vzdialenosti, ktorú zvolíte. Vodiace čiary používajte na rozvrhnutie odsadenia, výšky podlažia alebo miesta, kde začína okno.

1. Stlačte {{key:T}}.
2. Kliknite na **hranu** (nie na jej koniec). Hrot hovorí "Na hrane".
3. Presuňte sa mimo hranu, na stranu, kde má vodiaca čiara byť. Prerušovaná čiara ide rovnobežne s hranou a políčko hodnoty ({{ui:Odsadenie}}) zobrazuje vzdialenosť.
4. Kliknite, alebo zadajte odsadenie a stlačte {{key:Enter}}: `1.5m`, `5'`.

   Stavový riadok hovorí "Vodiaca čiara 1.5 m od hrany."

Začať na existujúcej vodiacej čiare vytvorí ďalšiu rovnobežnú s ňou, takže z jednej vodiacej čiary môžete postupne rozložiť mriežku.

Ak zadáte odsadenie bez toho, aby ste najprv odišli z hrany, ModelCraft nevie, ktorú stranu myslíte: "Najprv sa presuňte mimo hranu, aby sa ukázalo, ktorou stranou."

## Vodiaca čiara v uhle: Uhlomer

1. Kliknite na {{ui:Uhlomer}} v skupine {{ui:Úpravy}}.
2. Kliknite na stred: bod, ktorým vodiaca čiara prechádza. Na ploche leží uhlomer na tej ploche; inde leží vodorovne. Po tomto kliknutí {{key:Right}}, {{key:Left}} alebo {{key:Up}} ho postavia kolmo na červenú, zelenú alebo modrú (opätovným stlačením sa to zruší).
3. Kliknite na bod, ktorý nastaví 0°, napríklad pozdĺž hrany.
4. Presuňte sa na požadovaný uhol a kliknite: prichytí sa po krokoch 15°. Alebo zadajte uhol v stupňoch, napríklad `22.5`, a stlačte {{key:Enter}}; vodiaca čiara pôjde na stranu, kde je ukazovateľ.

Vodiaca čiara prechádza stredom pod týmto uhlom. Pozdĺž nej kreslite pomocou {{ui:Úsečka}} pre sklon strechy, skosenie alebo šikmú stenu.

## Kreslenie podľa vodiacich čiar

Kreslené nástroje sa prichytávajú k vodiacim čiaram ("Na vodiacej čiare") a k vodiacim bodom ("Vodiaci bod") a tiež k miestu, kde vodiaca čiara pretína smer osi. Začnite obdĺžnik tam, kde sa dve vodiace čiary krížia, aby sa umiestnil presne.

## Odstránenie vodiacich čiar

- Jedna vodiaca čiara: kliknite na ňu nástrojom {{ui:Vybrať}} a stlačte {{key:Delete}}, alebo na ňu kliknite {{ui:Guma}}.
- Všetky vodiace čiary: keď nič nie je vybraté, kliknite na {{ui:Zmazať všetky vodiace čiary}} v {{ui:Informácie o entite}}.

Vodiace čiary sa ukladajú do súboru `.modelcraft`. Neexportujú sa do iných formátov.
