---
title: Hnútar: byggja líkan með tengingum
summary: Tengdu tölur við punkta, punkta við ferla og ferla við yfirborð. Breyttu tölu og allt sem á eftir kemur endurbyggist. Sérhver hnútur er einnig lína í CraftScript og grafið er vistað í skránni.
keywords: hnútar, hnútaritill, sjónræn forritun, færibreytur, graf, vírar, tengi, frjálst form, freeform, nurbs, sveipun, útdráttur, snúningur, hringur, ferill, yfirborð, runa, bil, handahóf, listi, skrift, craftscript, grasshopper
from: 9c8e254f
---

**Hnútar**-ritillinn býr til rúmfræði með því að tengja kassa saman. Hver kassi (hnútur) gerir eitt lítið verk: býr til tölu, punkt, hring, sveipun. Þú tengir útkomu eins við inntak þess næsta og líkanið fylgir þegar þú breytir tölu í upphafi.

Opnaðu hann úr hægra spjaldinu: {{ui:Hnútar}} › {{ui:Hnútar…}}. Skrá sem þegar hefur graf opnar það sjálfkrafa. Hann er gluggi yfir 3D-sýninni: dragðu titilstikuna til að færa hann, dragðu hornið til að breyta stærð hans.

## Tengingar

1. Veldu hnút af listanum vinstra megin (skrifaðu í leitarreitinn til að þrengja hann, <kbd>Enter</kbd> bætir við fyrstu samsvörun). Hann birtist í miðju teikniborðsins.
2. Dragðu frá kringlótta **úttakspunktinum** hægra megin á einum hnút að kringlóttum **inntakspunkti** vinstra megin á öðrum. Punkturinn verður grænn þegar hann passar og rauður þegar hann gerir það ekki; bentu á hann til að sjá ástæðuna.
3. Inntak sem er ekki tengt sýnir reit fyrir innslegið gildi. Sláðu inn tölu og ýttu á <kbd>Tab</kbd>: niðurstaðan endurbyggist.
4. Litli hringurinn í titilstiku hnúts er **augað** hans. Hnútur með kveikt auga er teiknaður í 3D-sýninni: sem línur fyrir ferla, skyggður fyrir yfirborð og sem punktar fyrir punkta.

Dragðu hnút með titilstikunni. Dragðu bakgrunninn til að hliðra, snúðu hjólinu til að þysja. <kbd>Delete</kbd> eyðir völdum hnút. {{ui:Taka til}} raðar hnútunum í dálka, {{ui:Passa}} færir þá alla í sýn og {{ui:Afturkalla}} og {{ui:Endurgera}} fara til baka og fram um breytingar þínar.

## Gerðir og einingar

Tengi hafa gerð: tölu, já/nei, punkt, vigur, feril, yfirborð, möskva, fast form, eða „rúmfræði“ fyrir hvað sem er af þessu. Punktur getur farið í vigurinntak og öfugt. Tölur bera einingu: **lengd** er í millimetrum og **horn** í gráðum. Lengd getur ekki farið í horn, og lengd margfölduð með lengd (flatarmál) er hafnað, þannig að röng tenging er stöðvuð þegar þú gerir hana.

Ferhyrndur punktur er **listi**. Þegar listi nær inntaki með einu gildi keyrir hnúturinn einu sinni fyrir hvert atriði og útkoman verður listi. Styttri listinn endurtekur síðasta atriði sitt. Til dæmis: **runa** af hæðum inn í **Færa** býr til stafla af afritum.

## Föst form og Boolean-aðgerðir sem hnútar

**Föst form**-hópurinn býr til lokaða hluti úr sömu nákvæmu yfirborðum og Yfirborð-spjaldið: **kassa úr föstu formi**, **strokk úr föstu formi** og **kúlu úr föstu formi** (stærðir í mm), **Sameina**, **Draga frá** og **Skera saman** (seinna fasta formið er tekið úr því fyrsta; vikmörkin eru hversu langt þríhyrningar vélarinnar fyrir föst form mega vera frá nákvæmu yfirborðunum), **Ávöl milli fleta** (flötin eftir númeri þeirra í fasta forminu, 1 fyrir þann fyrsta; radíus og, ef hann er yfir 0, radíus í endanum), **rúmmál fasts forms** (mm³) og **fast form í möskva** (til að sjá það eða færa það í líkan). Fast form hefur sína eigin tengigerð: punktur eða tala er ekki hægt að tengja í inntak fasts forms, og punkturinn helst rauður. Boolean- og ávölunarhnútar nota eigin vél forritsins fyrir föst form, sem hleðst í fyrsta skipti sem ritillinn opnast.

## Villur

Hnútur sem getur ekki unnið verkið sitt segir af hverju undir nafni sínu, í rauðu („Radíusinn verður að vera stærri en núll.“), og hnútarnir á eftir bíða. Sömu skilaboð birtast sem **vandamál** í Vandamálaspjaldinu, svo þú getur fundið þau þaðan.

## Sérhver hnútur er lína af skrift

Ýttu á {{ui:Skrift}} til að sjá grafið sem CraftScript: eina línu á hvern hnút, eins og `n3 = nd_circle(n2, n1, [0 0 1]);`. Breyttu textanum og ýttu á {{ui:Búa til myndina úr þessari skrift}} til að skila honum aftur sem graf. Sömu `nd_`-föll virka í CraftScript í PartCraft, þannig að hægt er að keyra, endurtaka eða prófa graf þar. Slembitölur taka alltaf **fræ**, svo sama grafið gefur sömu niðurstöðu á hverri tölvu.

## Vistað með skránni

Grafið er vistað í líkanskránni. Hnútarnir búa til ferla, yfirborð og möskva sjálfir: þeir breyta ekki fleti líkansins fyrr en þú biður um það.

## Færa í líkan

Kveiktu á auga hnúts sem býr til yfirborð eða möskva, ýttu svo á {{ui:Færa í líkan}} í Hnútaglugganum. Hvert sýnt yfirborð eða möskvi verður hópur fleta í líkaninu, í metrum, sem þú getur breytt eins og hverju öðru. Það er eitt skref í afturköllun. Grafið helst, en afritið fylgir því ekki lengur: breyttu tölu og færðu aftur í líkan til að fá nýtt. Punktar og ferlar eru ekki föst form, svo þeir eru skildir eftir, og skilaboðin segja hversu margir.
