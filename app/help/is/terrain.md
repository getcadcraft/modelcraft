---
title: Landlíkan: jörð úr hæðarlínum og mótun hennar
summary: Gerðu jörð úr hæðarlínum eða sem net, og hækkaðu hana eða lækkaðu með mjúkum pensli.
keywords: landlíkan, jörð, landslag, landslagsfræði, hæðarlínur, lóð, halli, hæð, haugur, sandkassi, sléttun, móta, landmótun, TIN
from: 407652b3
---

Landlíkan er jörð úr þríhyrningum, þannig að hún getur fylgt hvaða lögun sem er. Það er hópur: tvísmelltu á það til að breyta því.

## Úr hæðarlínum

1. Fáðu hæðarlínurnar í réttri hæð: teiknaðu þær, eða [fluttu inn lóðarteikningu](topic:site-plan) og færðu hverja hæðarlínu upp í sína hæð.
2. Veldu þær (allar brúnir allra hæðarlínanna).
3. {{ui:Breyta}} › {{ui:Meira}} › {{ui:Land úr völdum hæðarlínum}}.

ModelCraft tengir punkta hæðarlínanna með þríhyrningum (TIN) og mýkir hverja brún innan hennar svo jörðin skyggist mjúklega. Línurnar sjálfar haldast; eyddu þeim eða feldu þær þegar þú þarft þær ekki lengur. Mjög þéttar hæðarlínur eru grisjaðar niður í 8 000 punkta.

## Net til að móta

{{ui:Breyta}} › {{ui:Meira}} › {{ui:Landnet…}} biður um breidd, dýpt og stærð reita, og setur síðan flatt net þríhyrninga þar sem þú smellir á hornið. Smáir reitir móta mýkri en gera fleiri fleti (í mesta lagi 200 × 200 reiti).

## Móta: hækka og lækka jörðina

1. Tvísmelltu á landlíkanið til að opna það.
2. {{ui:Breyta}} › {{ui:Meira}} › {{ui:Móta land}}. Hringur sýnir pensilinn á jörðinni undir bendlinum.
3. Dragðu upp til að hækka jörðina undir pensilinum, eða niður til að lækka hana. Miðjan hreyfist mest og jörðin dofnar út við brún hringsins, þannig að hólar og dældir verða mjúkar.

Til að gera haug af nákvæmri hæð, smelltu einu sinni, sláðu síðan inn hæðina, til dæmis `1.5m` (mínus lækkar hana), og ýttu á {{key:Enter}}. Til að breyta penslinum skaltu slá inn lengd áður en þú smellir: `5m` gefur pensil með 5 m {{ui:Radíus}}.

Hver mótun er eitt skref í afturköllun.

## Atriði sem gott er að vita

- Mótun færir aðeins þríhyrningsfleti, þannig að hver flötur helst flatur. Fletir sem eru teiknaðir með hendi (ferhyrningar, marghyrningar) eru ekki landlíkan: tólið segir til um það.
- Mótun færir punkta beint upp og niður; hún bætir ekki við punktum. Fyrir fínni smáatriði skaltu búa til net með minni reitum.
- Landlíkan flyst út eins og hver annar hópur. Í IFC er það „building element proxy“, eins og allt annað.
