---
title: Málsettu og breyttu stærð á því sem þú teiknaðir
summary: Settu málsetningar milli hornpunkta, á boga og hringi, eða milli tveggja brúna; skrifaðu nýja lengd til að breyta stærð líkansins. Skrifaðu aftur lengd brúnar, eða breidd, dýpt og hæð hóps, í Upplýsingum um eind.
keywords: málsetning, málsetningar, breyta stærð, stærð, breyta stærð, lengd, breidd, dýpt, hæð, teygja, akstursmálsetning, athugasemd, mæla, eftir á, radíus, þvermál, horn, bogi, hringur, R, Ø
from: a1f815ec
---

Stærðir í ModelCraft eru ekki fastar þegar eitthvað hefur verið teiknað. Málsetning sýnir lengd á líkaninu, og ef þú skrifar nýja lengd í hana breytist líkanið í samræmi við það. Þú getur líka skrifað aftur lengd brúnar, eða breidd, dýpt og hæð hóps, í {{ui:Upplýsingar um eind}}.

## Setja málsetningu

1. Ýttu á {{key:D}}, eða smelltu á {{ui:Málsetning}} á tækjastikunni.
2. Smelltu á hornpunkt til að mæla frá. Hann smellist á hornpunkta, miðpunkta og brúnir, eins og teikning gerir.
3. Smelltu á annan hornpunkt.

   Eða smelltu einu sinni á **brún** (ábendingin segir „Á brún“) til að málsetja alla brúnina í einum smelli.

4. Færðu bendilinn þangað sem málsetningarlínan á að vera, og smelltu. Þú getur líka skrifað frávikið, eins og `0.5m`, og ýtt á {{key:Enter}}.

   Málsetningarlínan helst lárétt fyrir lárétta brún, nema þú horfir á hana frá hlið. Fyrir lóðrétta brún helst hún í lóðrétta planinu sem snýr best að þér.

Stöðustikan segir „Málsetning 4 m.“ Málsetningar sýna lengd sína í einingu líkansins og uppfærast þegar þú breytir einingunni í valinu.

## Radíus, þvermál og horn

Sama verkfæri {{ui:Málsetning}} málsetur líka hringlaga hluti og horn:

- **Bogi:** smelltu á bogann. Ábendingin segir {{ui:Radíus}}. Færðu bendilinn þangað sem textinn á að vera og smelltu: málsetningin segir **R 1.5 m**.
- **Hringur:** smelltu á hringinn. Þú færð **þvermál** (**Ø 3 m**) með línu yfir hringinn í gegnum miðjuna. Marghyrningar eru eins, með hornpunktana á hringnum.
- **Horn milli tveggja brúna:** smelltu á eina brún, síðan á aðra brún sem mætir henni í hornpunkti (meðan þú ert yfir henni segir ábendingin {{ui:Horn milli brúna}}). Færðu þig síðan inn í hornið sem þú vilt og smelltu. Innan hornsins færðu hornið milli brúnanna; færðu þig yfir á aðra hlið og færðu hornið við hliðina (til dæmis 150° í stað 30°). Hversu langt frá hornpunktinum þú smellir ákvarðar hvar bogann er; eða skrifaðu þá fjarlægð.

Til að skipta radíus yfir í þvermál eða til baka skaltu velja málsetninguna og velja í {{ui:Sýna sem}} í Upplýsingum um eind.

**Breyting á stærð með þeim:** skrifaðu nýjan radíus eða þvermál rétt eftir að þú setur einn, eða veldu hann síðar og skrifaðu. Bogi eða hringur heldur miðju sinni og breytir stærð; flötur sem hann afmarkar (diskur, endi raufar) breytist með honum. Tvennt mælir aðeins:

- **Hornmálsetning** breytir aldrei líkaninu. Til að breyta horni skaltu snúa brúnunum með {{ui:Snúa}}.
- **Hringurinn við enda strokks** (hringur sem þú dróst með {{ui:Ýta/toga}}) er ekki hægt að breyta stærð á frá málsetningu hans, því hliðar hans þyrftu þá líka að breytast. Breyttu stærð strokksins í staðinn, um ásinn hans.

## Breyta stærð líkansins með málsetningu

Strax eftir að þú setur málsetningu skaltu skrifa nýja lengd og ýta á {{key:Enter}}: `6m`, `12'`, `3500` í líkani í millimetrum. Líkanið breytist í þá stærð.

Síðar, hvenær sem er:

1. Með {{ui:Velja}} smelltu á texta málsetningarinnar eða línuna. Upplýsingar um eind segja **Málsetning** og sýna {{ui:Lengd}} hennar.
2. Skrifaðu nýja lengd og ýttu á {{key:Enter}}. Þú getur skrifað beint í gildisreitinn, eða í reitinn {{ui:Lengd}} í Upplýsingum um eind.

### Hvað hreyfist

Annar hornpunkturinn sem þú smelltir á hreyfist, og allt sem er handan við hann:

- **Báðir hornpunktar á einu stykki** (breidd kassa, hæð veggs): hliðin við hreyfanlega hornið rennur út eða inn, og fletir sem tengjast henni teygjast. Kassinn helst lokaður fastur hlutur, og allt sem situr alveg á þeirri hlið, eins og gluggaeining, hreyfist með honum.
- **Hornpunktarnir á tveimur aðskildum stykkjum** (bilið milli tveggja kassa): stykkið við hreyfanlega hornið hreyfist heilt og bilið breytist.
- **Hreyfanlegi hornpunkturinn inni í hópi eða einingu** sem hinn hornpunkturinn er ekki í: allur hópurinn hreyfist.
- **Báðir hornpunktar inni í sama hópi eða einingu**: hún teygist innan frá. Eining breytist alls staðar þar sem hún er sett, eins og þegar hún er breytt alltaf.

Til að breyta hvaða enda hreyfist skaltu velja málsetninguna og velja í {{ui:Hreyfist}} í Upplýsingum um eind:

| Val | Hvað gerist |
|---|---|
| {{ui:Seinni endi}} (sjálfgefið) | Endinn sem þú smelltir á annar hreyfist |
| {{ui:Fyrri endi}} | Endinn sem þú smelltir á fyrst hreyfist |
| {{ui:Báðir endar (miðjaðir)}} | Hvor endi hreyfist um helming breytingarinnar, svo miðjan helst kyrr |

### Þegar breyting á stærð er hafnað

ModelCraft breytir engu og segir hvers vegna í stöðustikunni:

- „flötur myndi beygjast út úr plani sínu“: málsetningin liggur á ská yfir formið. Málsettu eftir brún, eða eftir rauðum, grænum eða bláum ási.
- „flötur myndi minnka í ekkert eða snúast við“: nýja lengdin er of stutt fyrir formið.
- „endinn sem hreyfist er ekki á hornpunkti líkansins“: sá endi var settur í tómt rými eða á miðju brúnar. Veldu hinn endann í {{ui:Hreyfist}}, eða settu málsetninguna á tvo hornpunkta.
- „lengd verður að vera hærri en núll“.

Sérhver breyting á stærð er eitt skref: {{key:Mod+Z}} afturkallar henni.

## Breyta stærð í Upplýsingum um eind

Þú þarft ekki alltaf málsetningu:

- **Brún:** veldu hana. Lengd hennar ({{ui:Lengd}}) í Upplýsingum um eind er kassi sem þú getur skrifað í. Að skrifa lengd í gildiskassann virkar líka. Endinn sem er lengra eftir rauðum ási, síðan grænum, síðan bláum hreyfist, og það sem tengist honum teygist. Til dæmis, að skrifa aftur framan neðri brún kassa gerir kassann breiðari til hægri.
- **Hópur eða eining:** veldu hana. {{ui:Breidd (rautt)}}, {{ui:Dýpt (grænt)}} og {{ui:Hæð (blátt)}} eru kassar. Fjærri hliðin (hægri, aftan, efst) hreyfist. Þetta eru eigin ásar hópsins, áður en snúningur sem þú gafst honum.

Ýttu á {{key:Enter}} til að beita, eða {{key:Esc}} til að setja gamla gildið aftur.

## Málsetningar fylgja líkaninu

Málsetning er tengd við þá tvo hornpunkta sem hún var sett á (horn: við hornpunkt sinn og fjarlæga enda beggja brúnanna; radíus eða þvermál: við boga sinn eða hring). Færðu, ýttu/togaðu eða breyttu stærð á rúmfræðinni, og málsetningin fylgir og sýnir nýju lengdina. Hún helst tengd þegar þú gerir rúmfræðina að hóp eða einingu.

Ef endi var settur einhvers staðar sem er ekki hornpunktur (á fleti, eða í tómu rými), eða hornpunktur hans er strokinn út, situr hann þar sem hann var. Málsetningin mælir enn, en getur aðeins breytt stærð frá hinum endanum.

## Fjarlægja málsetningar

- Ein málsetning: veldu hana og ýttu á {{key:Delete}}, eða smelltu á hana með {{ui:Strokleður}}.
- Allar málsetningar: með ekkert valið, smelltu á {{ui:Eyða öllum málsetningum}} í Upplýsingum um eind.

Málsetningar eru vistaðar í `.modelcraft`-skránni. Þær eru ekki fluttar út á önnur snið, sem bera aðeins þrívíddarlíkanið. Skrá með málsetningum opnast enn í eldri ModelCraft, án þeirra.
