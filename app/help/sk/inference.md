---
title: Odvodzovanie a prichytávanie
summary: Čo znamenajú farebné značky, ktoré prichytenie vyhráva a ako uzamknúť smer šípkovými klávesmi alebo Shift.
keywords: odvodzovanie, prichytávanie, koncový bod, stredový bod, stred plochy, stred, na hrane, na ploche, os, červená os, zelená os, modrá os, rovnobežný, kolmý, uzamknúť, shift, osnap
from: e78984e9
---

Počas činnosti kreslenia alebo úpravy ModelCraft sleduje, čo je pod ukazovateľom, a prichytí sa k najužitočnejšiemu blízkemu bodu. Značka ukazuje, čo našiel, a hrot v ľavom dolnom rohu to pomenuje.

## Značky a hroty

| Hrot | Značka | Prichytí sa k |
|---|---|---|
| Koncový bod | Zelený kruh | Koniec hrany |
| Stredový bod | Azúrový kruh | Stred hrany |
| Stred plochy | Modrý kruh | Stred plochy pod ukazovateľom |
| Vodiaci bod | Sivá | Vodiaci bod zanechaný pásmom |
| Začiatok | Okrová | Miesto, kde sa stretávajú červená, zelená a modrá os |
| Na červenej osi / Na zelenej osi / Na modrej osi | Čiara v tejto farbe | Čiara od začiatočného bodu v tomto smere |
| Rovnobežne s hranou / Kolmo na hranu | Purpurová čiara | Čiara od začiatočného bodu rovnobežná alebo kolmá na zapamätanú hranu (pozri nižšie) |
| Uzamknuté | Purpurová čiara | Smer, ktorý ste uzamkli šípkovou klávesou alebo {{key:Shift}} |
| Na hrane | Červený štvorec | Kdekoľvek pozdĺž hrany |
| Na vodiacej čiare | Sivá | Kdekoľvek pozdĺž vodiacej čiary |
| Na ploche | Modrý kosoštvorec | Kdekoľvek na ploche |
| Na rovine | žiadna | Rovina, na ktorej ste začali, keď je ukazovateľ nad prázdnym priestorom |
| Na zemi | žiadna | Zem (červeno-zelená rovina), keď tam nič iné nie je |

Keď os od vášho začiatočného bodu pretína hranu alebo vodiacu čiaru, ModelCraft sa prichytí na priesečník a hrot pomenuje oba, napríklad „Na červenej osi, na hrane“.

## Ktoré prichytenie vyhráva

1. **Body** do približne 12 pixelov: najprv koncové body, potom vodiace body, stredové body, stred plochy pod ukazovateľom a začiatok.
2. **Smery** od začiatočného bodu: červená, zelená a modrá os a rovnobežne alebo kolmo na zapamätanú hranu.
3. **Na hrane** alebo na vodiacej čiare.
4. **Na ploche.**
5. **Kresliaca rovina** alebo zem.

Veci skryté za plochou sa nikdy neprichytia. Otáčajte pohľad, aby ste videli bod, ktorý chcete.

## Kreslenie na plochu z bodu

{{ui:Obdĺžnik}}, {{ui:Kružnica}} alebo {{ui:Mnohouholník}} začatý na rohu, stredovom bode, hrane alebo strede plochy sa nakreslí **v rovine plochy pod ukazovateľom** a prereže túto plochu. Hrana patrí k dvom plochám, takže rozhoduje strana hrany, na ktorej je ukazovateľ: ak chcete kresliť na koniec dlhého boxu, začnite zo stredu jednej z jeho hrán s ukazovateľom tesne vnútri koncovej plochy.

## Rovnobežne a kolmo

ModelCraft si pamätá **poslednú hranu, nad ktorou ukazovateľ prešiel pred vaším prvým kliknutím**. Začatie na rohu alebo na hrane sa počíta ako prejdenie tou hranou. Keď nástroj beží, ďalšie hrany, nad ktorými prechádzate, túto pamäť nenahradia.

Ak chcete nakresliť čiaru rovnobežnú s existujúcou hranou:

1. Stlačte {{key:L}} a prejdite ukazovateľom nad hranou, ktorej smer chcete použiť.
2. Presuňte sa k začiatočnému bodu, ak sa dá bez prechádzania ďalších hrán, a kliknite.
3. Presuňte sa v smere rovnobežnom s touto hranou. Čiara sa sfarbí purpurovo a hrot hovorí "Rovnobežne s hranou". Kolmo funguje rovnako, v rovine, na ktorej kreslíte.

Ak bola zapamätaná nesprávna hrana, stlačte {{key:Esc}}, prejdite ukazovateľom nad správnou hranou a začnite znova.

## Uzamknutie smeru

Po prvom kliknutí nástroja môžete ďalší bod udržať na jednej čiare:

| Klávesa | Uzamkne na |
|---|---|
| {{key:Right}} | Červenú os |
| {{key:Left}} | Zelenú os |
| {{key:Up}} | Modrú os (priamo nahor) |
| {{key:Down}} | Rovnobežne so zapamätanou hranou (pozri vyššie) |

Stlačte rovnakú šípku znova na odomknutie. Stavový riadok hovorí "Uzamknuté na červenú os. Stlačte rovnakú šípku na odomknutie."

Uzamknutý bod sa posúva po čiare smerom k miestu, kam ukazuje ukazovateľ, a stále sa zarovnáva s bodmi, nad ktorými prechádzate: prejdite nad roh iného boxu a nakreslite čiaru pozdĺž červenej presne tak ďaleko, ako je ten roh.

**{{key:Shift}}** uzamkne smer, na ktorý práve prichytávate (os alebo rovnobežný smer), kým ho držíte. Pustite ho a odomknete.

Uzamknutia fungujú v {{ui:Úsečka}}, {{ui:Obdĺžnik}}, {{ui:Kružnica}}, {{ui:Mnohouholník}}, {{ui:Presunúť}}, {{ui:Mierka}} a {{ui:Pásmo}}. Pred prvým kliknutím šípkové klávesy namiesto toho otáčajú pohľad.

## Vnútri skupiny

Keď upravujete vnútri skupiny alebo komponentu, osi sú vlastné osi skupiny (pohybujú sa s ňou a otáčajú sa, ak bola otočená). Prichytávanie stále nájde body a hrany mimo skupiny, takže môžete veci zarovnať s ostatným modelom.
