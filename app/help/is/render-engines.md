---
title: Veldu hvaða forrit teiknar myndina
summary: Vél-valið í myndgerðarglugganum: okkar eigin tvær vélar, önnur forrit í CadCraft Studio, og hvað vefurinn gerir í staðinn.
keywords: myndgerð, vél, myndgerðarvél, viðbót, plugin, studio, utanaðkomandi forrit, teiknað af, biðröð, viðbótarvél
from: be4b056a
---

{{ui:Myndgera mynd…}} hefur **Vél**-val fyrir ofan Ham. Okkar eigin tvær vélar eru alltaf til staðar og virka alls staðar; viðbætur geta bætt við fleiri, og í CadCraft Studio geymir listinn einnig þau forrit sem taka senuna yfir.

| Vél | Hvað hún gerir | Hvar |
|---|---|---|
| Innbyggð: Hraðvirk | Hröð kyrrmynd: dagsbirta, mjúkir skuggar, gler- og málmútlit, á sekúndum | Vafrinn og Studio |
| Innbyggð: Slóðarekjari | Ljós sem skoppar milli yfirborða á skjákorti þínu eða örgjörva, myndgerðarbiðröðin og hinar tölvurnar á netinu þínu | Vafrinn og Studio |
| Vél viðbótar | Hún teiknar og skilar myndinni til baka: sjá [Teiknaðu myndina með öðru forriti](topic:render-other-program) | Vafrinn (vél skrifuð í JavaScript) eða Studio (vél sem keyrir forrit) |
| Forrit sem tekur senuna yfir | Studio setur senuna í möppu sína og heldur henni í takt | Studio |
| Opna í … | Vistar senuna og opnar hana í forriti; ekkert kemur til baka: sjá [Opnaðu senuna í öðru forriti](topic:render-open-in) | Vefurinn vistar skrána |

## Hvernig valið hegðar sér

- Með því að velja Hraðvirku eða Slóðarekjarann breytist Hamur með því, og öfugt. Ekkert annað í glugganum breytist fyrir fólk sem notar aldrei aðra vél.
- Vél sem er ekki tiltæk helst á listanum ásamt ástæðunni („fannst ekki“, „þarfnast nýrri útgáfu“); þú getur ekki valið hana. Í vafranum sýnir vél sem keyrir aðeins í Studio „vistar skrá“: {{ui:Myndgera mynd…}} vistar þá senuna og stillingar hennar í skrá sem þú tekur með þér í það forrit.
- Valið er vistað með myndgerðarstillingum skráarinnar, og vélin sem þú valdir síðast er upphafsvélin fyrir skrár sem hafa ekkert val sjálfar.
- Mynd úr öðru forriti segir hvaða forrit teiknaði hana og útgáfu þess, í glugganum og í myndgerðarbiðröðinni. Loforðin á [Myndgerðar](topic:render)-síðunni ná aðeins yfir **okkar eigin** vélar: annað forrit lýsir, litar og tekur sýni á sinn hátt, þannig að tvær myndir af einni senu eru líkar í myndavél, sól, lömpum og lýsingu, en ekki mynddíl fyrir mynddíl.

## Það sem hver vél fær

Senan fer til annars forrits sem **pakki**: líkanið sem USD-skrá (sama skrá og [Vista sem USD](topic:usd) skrifar), og stillingaskrá sem geymir það sem ekki er hægt að treysta USD-innflytjanda fyrir: nákvæm efnisgildi, lampana sem eru kveiktir með afli sínu og ljósprófílum, sólina, himininn, lýsinguna og myndavélina eins og glugginn myndi teikna hana. Ekkert er hlaðið upp hvert sem er.

## Myndgerðarbiðröðin

Mynd eða hreyfimynd fyrir annað forrit getur beðið í [myndgerðarbiðröðinni](topic:render#the-render-queue) eins og okkar eigin; verkið man hvaða vél það er fyrir. Hreyfimynd fer til forritsins í einni keyrslu.
