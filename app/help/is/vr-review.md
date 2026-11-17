---
title: Skoðaðu líkanið í VR-heyrnartóli
summary: Gakktu um líkanið í fullri stærð með VR-heyrnartóli: stökktu, snúðu, mældu, skerðu það opið, settu vandamál með mynd, sjáðu það sem borðlíkan og hittu hina í lifandi lotu.
keywords: vr, sýndarveruleiki, heyrnartól, webxr, xr, sökkvandi, quest, oculus, vive, index, pico, ganga í gegnum, gönguferð, hvarfa, hönnunarrýni, rýni, mæling, snið, skurður, vandamál, bcf, borðplata, skalalíkan, nærvera, avatarar, lifandi, saman
from: fa2f591a
---

{{ui:Yfirfara í VR}} setur þig inni í líkaninu með VR-heyrnartóli, í fullri stærð. Þú stendur þar sem myndavél sýnarinnar er, á gólfinu undir henni, og snýrð í sömu átt. Ekkert er hlaðið upp: heyrnartólið sýnir það sem vafrinn teiknar á þessari tölvu (eða í vafra heyrnartólsins sjálfs).

## Það sem þú þarft

- Heyrnartól sem vafrinn getur stjórnað (WebXR): vafri sjálfstæðs heyrnartóls, eða Chrome eða Edge á PC með tengt heyrnartól.
- ModelCraft opið á öruggri síðu (https), eins og hún er á þessari vefsíðu.

Þegar ekkert heyrnartól er til er {{ui:Yfirfara í VR}} grátt út og segir af hverju.

## Byrjaðu

1. Stilltu sýnina þar sem þú vilt byrja: í herbergi, eða utandyra og horfandi á bygginguna.
2. Smelltu á {{ui:Sýnir}} í hópnum {{ui:Myndavél}}, og síðan á {{ui:Yfirfara í VR}}.
3. Settu heyrnartólið á þig.

Valmyndin er á aftanverðri vinstri hendi þinni. Bentu á hana með hægra stýrinu og togaðu í gikkinn til að velja hnapp. (Með aðeins annarri hendi svífur valmyndin fyrir framan þar sem þú byrjaðir.)

## Hvernig það lítur út

Heyrnartólið sýnir líkanið í [lifandi sýnar](topic:live-view)-útliti: útlitin og efnin sem þú gafst flötunum, himininn og sólin frá stað og dagsetningu líkansins ásamt skugga þess, ljós, dreifðar plöntur og steina, og ljós sem kastast af veggjum og gólfum (reiknað á þessari tölvu meðan þú skoðar, og fylgir þér þegar þú hreyfir þig). Birta og litvarpið (ACES eða AgX) eru þau sömu og í [Myndgera mynd](topic:render). Hve mikið er teiknað fer eftir því hvað vafri heyrnartólsins ræður við, eins og á skjáborðinu; umhverfisskuggi (ambient occlusion), speglanir og ljómi eru áfram á skjáborðinu.

## Hreyfðu þig

- **Stökktu:** í {{ui:Færa}} skaltu benda á gólf og toga í gikkinn; þú lendir þar. Eða ýttu stýripinnanum fram til að miða og slepptu til að stökkva. Þú getur aðeins lent á gólfum og jörð (flötum sem snúa upp), aldrei á vegg.
- **Snúðu:** ýttu stýripinnanum til vinstri eða hægri: þú snýst um 30° í hvert skipti.
- **Gakktu:** á leiksvæðinu þínu skaltu einfaldlega ganga.

## Mældu

Veldu {{ui:Mæla}}, og togaðu síðan í gikkinn á tveimur punktum. Fjarlægðin birtist á milli þeirra, í einingum líkansins. Punktur nálægt horni smellur í hornið.

## Skerðu það opið

Veldu {{ui:Snið}} og togaðu í gikkinn á fleti:

- á vegg (eða einhverju sem er ekki gólf): allt á milli þín og þess flatar er skorið burt, svo þú sérð inn. Þetta virkar best utan frá, eða þvert yfir herbergi;
- á gólfi, ofanfrá: grunnsnið 1.2 m yfir því gólfi, svo veggirnir sýna neðri hlutann.

{{ui:Hreinsa}} tekur sniðið og mælingarnar burt. Ef sniðsflötur sker líkanið í sýninni þegar þú byrjar, byrjar heyrnartólið með honum.

## Settu vandamál

Veldu {{ui:Vandamál}} og togaðu í gikkinn þar sem vandamálið er. Númeruð nál merkir það, og ModelCraft geymir vandamálið ásamt mynd af því sem þú sást og hvar þú stóðst. Þegar þú yfirgefur VR eru vandamálin í listanum {{ui:Vandamál}} hægra megin:

- augnhnappurinn sýnir vandamálið frá þeim stað þar sem það var sett;
- {{ui:Vista sem BCF}} sækir þau öll sem BCF-skrá, sem BIM-rýniforrit opna (myndavél og mynd fylgja með);
- þau eru líka vistuð í `.modelcraft`-skránni.

Bættu athugasemd við vandamál eftir að þú yfirgefur VR, í BCF-forriti: innsláttur í heyrnartólinu er ekki komið enn.

## Sjáðu það sem borðlíkan

{{ui:Borðplata}} minnkar líkanið til að passa á borð fyrir framan þig; gakktu í kringum það, eða snúðu því með stýripinnanum. {{ui:Full stærð}} setur þig aftur þar sem þú varst.

## Með öðrum, í beinni

Í [lifandi lotu](topic:work-live) sér hver og einn í VR hina sem höfuð og tvær hendur í sínum eigin lit, með nafni sínu, og punkt þar sem hver og einn bendir. Breytingar sem einhver gerir berast í heyrnartólið þitt innan skamms. Fólk við skrifborðið er ekki sýnt í heyrnartólinu enn.

## Yfirgefðu

Veldu {{ui:Fara úr VR}} (eða taktu heyrnartólið af og ljúktu þar). Sýnin á skjánum færist þangað sem höfuðið þitt var.

:::note
Prófað eingöngu með heyrnartólshermi, ekki enn með raunverulegu heyrnartóli. Stórt líkan getur látið heyrnartólið hökta: feldu það sem þú þarft ekki fyrst ([fela og einangra](topic:hide-isolate)).
:::
