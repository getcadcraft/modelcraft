---
title: Stuðningar, veggþykkt, holun og lagfæring
summary: Sjáðu hvar prentun þarfnast stuðninga og hve mikils, finndu veggi sem eru of þunnir til að prenta, holaðu hlut niður í veggþykkt með frárennslisgötum, og lagfærðu möskva með öllum lagfæringum skráðum.
keywords: 3d prentun, stuðningar, forskoðun stuðninga, yfirhengi, trjástuðningar, súlustuðningar, veggþykkt, þunnir veggir, of þunnt, stútur, hola, holun, skel, frárennslisgat, plastefni, lagfæring, lagfæra möskva, ógild rúmfræði, snúnir fletir, göt, smáar skeljar, sjálfsskurður, skörun, sameina
from: 286bde26
---

Fjögur verkfæri til að gera líkan tilbúið fyrir þrívíddarprentara. Opnaðu {{ui:Flytja út}} › {{ui:Athuga fyrir þrívíddarprentun (STL eða 3MF)…}}; í glugganum er línan **Prentverkfæri** sem hefur {{ui:Forskoðun stuðninga}}, {{ui:Veggþykkt}}, {{ui:Holað}} og {{ui:Lagfæra}}. Hvert opnast sem spjald yfir sýninni; {{ui:Loka}} (krossinn) tekur það og merkin þess burt. Eitt spjald birtist í einu.

Hvert verkfæri vinnur á því sem prentast: valinu, eða öllu sem sýnt er þegar ekkert er valið. {{ui:Holað}} og {{ui:Lagfæra}} þurfa að einn hópur, eining eða möskvi sé valinn, því þau breyta honum.

## Forskoðun stuðninga

Fletir sem halla meira en **yfirhengishornið** frá lóðréttu eru skyggðir rauðir, og einfaldir stuðningar eru teiknaðir frá þeim (appelsínugulir) niður á prentflötinn, eða á hluta líkansins fyrir neðan þá.

- **Yfirhengishorn**: 45° er það sem flestir prentarar ráða við án stuðnings. Hækkaðu það fyrir prentara sem brúa vel.
- **Súlur**: bein súla á 3 mm fresti undir hverju yfirhengi. Matið telur þær sem 15% stuðningsmynstur.
- **Tré**: nálægir punktar sameinast í einn stofn undir miðju sinni; engin grein hallar meira en 45°. Tré taka yfirleitt minna efni og snerta prentflötinn á færri stöðum.

Spjaldið segir hve mikið yfirborð þarf stuðning, hve marga stuðningspunkta er um að ræða og um hve mikið efni þeir taka. Stuðningar sem standa á líkaninu (ekki prentfletinum) eru taldir: þeir skilja eftir för þar. Þegar prentflötur er valinn í {{ui:Stillingar}} er hann teiknaður undir líkaninu.

:::note
Þetta er forskoðun, ekki sneiðari: sneiðarinn þinn ákveður raunverulegu stuðningana. Á mjög stóru yfirhengi eru stuðningspunktarnir dreifðari svo forskoðunin haldist hröð; spjaldið segir það.
:::

## Veggþykkt

Hver flötur er mældur beint í gegnum fasta formið að hinni hliðinni. Veggir undir **minnstu leyfilegu veggþykkt** eru rauðir, og veggir undir einu og hálfu sinnum hennar eru appelsínugulir: þeir prentast, en gætu komið út veikir.

Þunnu svæðin eru skráð, þynnsta fyrst, með því hve þunn og hve stór hvert er. {{ui:Sýna}} snýr myndavélinni að því.

Prentari getur ekki gert vegg þynnri en u.þ.b. tvær breiddir stútsins síns: 0.8 mm fyrir algengan 0.4 mm stút (upphafsgildið). Plastefnisprentarar ráða við minna; athugaðu leiðbeiningar prentarans þíns.

Á mjög stóru líkani varpa aðeins sumir fletir geisla, og hinir taka þykkt nágranna sinna; spjaldið segir hve margir voru mældir.

## Holun

Holun heldur ytra byrði óbreyttu og fjarlægir innra byrðið, og skilur eftir veggi jafnþykka og þú biður um. Plastefnisprentanir nota minna plastefni og toga minna í prentplötuna; þráðprentanir nota minna plast en fylling myndi gera.

1. Veldu hópinn, eininguna eða möskvann, og opnaðu síðan {{ui:Holað}}.
2. Stilltu **vegginn** (2 mm til að byrja með) og hve breið **frárennslisgötin** eru.
3. Fyrir plastefnisprentun smelltu á {{ui:Setja frárennslisgat}}, og smelltu síðan á ytra byrði líkansins þar sem það á að vera: neðarlega, nálægt prentplötunni, svo fljótandi plastefnið renni út. Settu eins mörg og þú þarft; hvert birtist sem blár hringur og er skráð með {{ui:Fjarlægja}}.
4. {{ui:Forskoðun}} segir hve mikið holunin fjarlægir.
5. {{ui:Hola það}} gerir breytinguna: eitt skref sem {{key:Mod+Z}} afturkallar.

Niðurstaðan er eitt lokað fast form sem þrívíddarprentunarathugunin samþykkir: ModelCraft athugar það fyrst og breytir engu ef það stæðist ekki. Þar sem líkanið er þynnra en tveir veggir, helst það fast. Niðurstaðan er hópur þar sem flatir hliðarfletir eru einir fletir, svo þú getur haldið áfram að móta hann með {{ui:Ýta/toga}}; bogadreginn hluti holaður á fínu neti hefur yfirleitt of marga fleti fyrir það og verður í staðinn möskvi, og stöðulínan segir hvort.

:::tip
Fyrir flest form er innra byrðið ytra byrðið fært inn um nákvæmlega vegginn. Þar sem horn eða þunnir hlutar gera það ómögulegt, fylgir ModelCraft í staðinn ytra byrðinu í fjarlægð veggsins á fínu neti; spjaldið segir þá hve nálægt það er (innan brots úr millimetra).
:::

## Lagfæring

{{ui:Lagfæra}} skoðar valda hlutann eins og sneiðari prentarans gerir, lagfærir það sem hægt er að laga örugglega og listar hverja lagfæringu:

| Lagfærir | Hvað það þýðir |
|---|---|
| Þríhyrningar án flatarmáls | skildir eftir |
| Þríhyrningur teiknaður tvisvar | eitt eintak haldið; flötur teiknaður bak í bak við sjálfan sig (án þykktar) er fjarlægður |
| Lausir bitar undir 0.5 mm | fjarlægðir |
| Þríhyrningar sem snúa rangt | snúið til samræmis við nágranna sína |
| Göt, flöt eða ekki | lokuð með viftu af nýjum þríhyrningum frá miðju hvers gats |
| Bitur á hvolfi | snúið út á við (hola inni í öðrum bita er látin vera: hún á að snúa inn) |

{{ui:Lagfæra þá öruggu}} gerir þær allar í einu skrefi sem {{key:Mod+Z}} afturkallar, og stöðulínan listar hverja lagfæringu. Lagfærði hlutinn verður hópur þar sem flatir hliðarfletir eru einir fletir. Ef hann lokast enn ekki (eitthvað undir **Eftir fyrir þig** er eftir), eða hann hefði of marga fleti fyrir hóp, verður hann í staðinn möskvi: fletir hans haldast þríhyrningar, og flatir hliðarfletir líta samt út fyrir að vera flatir. Stöðulínan segir hvort. {{ui:Sameina skarandi hluta}} virkar eins.

Það sem ekki er hægt að laga örugglega er skráð undir **Eftir fyrir þig** og merkt fjólublátt í sýninni, með {{ui:Sýna}}:

- **Brúnir þar sem þrír fletir eða fleiri mætast**: ákveddu hvaða flötur á heima þar og eyddu hinum.
- **Bitur sem fer í gegnum sjálfan sig**: færðu eða teiknaðu þann hluta upp aftur. Sjá [Skurðflötur](topic:intersect).
- **Göt of stór eða of flækt til að loka**: teiknaðu fleti yfir þau.
- **Aðskildir bitar sem skarast**: sneiðarar sameina þá samt. {{ui:Sameina skarandi hluta}} gerir þá að einum lokuðum líkama (það endurbyggir fletina þar sem þeir mætast, svo það er sérstakur hnappur, aldrei gerður fyrir þig).

Fyrir ýta/toga hópa geturðu einnig lagfært eitt í einu í {{ui:Upplýsingar um eind}} › {{ui:Sýna vandamál}} / {{ui:Laga}}, sem heldur þeim flötum sem þú teiknaðir. Sjá [Verkfæri fyrir fast form](topic:solids).

Tengt: [Gerðu líkan tilbúið fyrir þrívíddarprentun](topic:print-3d) · [Byrjendastíllinn](topic:beginner) · [Ekki enn smíðað](topic:not-built-yet#3d-printing)
