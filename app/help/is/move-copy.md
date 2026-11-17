---
title: Færa, afrita og búa til raðir
summary: Færðu hluti með því að smella eða um nákvæma fjarlægð, afritaðu þá með breytitakka og búðu til röð af jafnt bilum afritum.
keywords: færa, afrita, tvítaka, fylki, röð, bil, deila, hliðrun, teygja, súlur, endurtaka, margfalt afrit
from: 280245fc
---

{{ui:Færa}} ({{key:M}}) færir það sem er valið frá einum punkti til annars. Ef haldið er inni breytitakka verður það afrit, og eftir afrit geturðu slegið inn hversu mörg til viðbótar þú vilt.

## Færa eitthvað

1. Veldu það sem þú vilt færa (sjá [Velja hluti](topic:select)). Ef ekkert er valið tekur {{ui:Færa}} það sem þú smellir á.
2. Ýttu á {{key:M}}.
3. Smelltu á punkt til að færa frá. Veldu eitthvað þýðingarmikið, eins og horn: sá punktur lendir nákvæmlega þar sem þú smellir næst.
4. Færðu bendilinn. Valið fylgir með. Það smellur á punkta, brúnir og rauðu, grænu og bláu áttirnar eins og lína gerir.
5. Smelltu þar sem punkturinn á að fara, eða sláðu inn fjarlægð og ýttu á {{key:Enter}}.

   Stöðustikan fer aftur í „Smelltu á punkt til að færa frá…“ fyrir næstu færslu.

Innslegin fjarlægð fer í þá átt sem þú bendir. Þú getur líka slegið inn nákvæma hliðrun, `<2m,0,0>` (2 m eftir rauðu), eða nákvæman áfangastað fyrir punktinn sem þú valdir, `[0,0,0]` (upphafspunkturinn). Sjá [Slá inn nákvæmar stærðir](topic:value-box).

Til að færa aðeins eftir einum ás, ýttu á örvatakka eftir fyrsta smellinn: {{key:Right}} læsir á rautt, {{key:Left}} á grænt, {{key:Up}} á blátt. Ýttu aftur á sömu örina til að aflæsa.

## Að færa hluta af formi teygir það

Hlutir sem eru ekki í hópi eru tengdir. Ef þú velur einn flöt eða nokkrar brúnir og færir þá, teygjast fletirnir sem tengjast þeim til að fylgja. Færðu efri flöt kassa til hliðar og kassinn hallast; færðu eina brún á þakinu og þakhallinn breytist. Fletir sem geta ekki lengur verið flatir brotna í þríhyrninga.

Til að færa heilan hlut án þess að teygja hann skaltu fyrst velja hann allan (þrísmelltu á hann), eða, enn betra, búa til úr honum hóp eða íhlut (sjá [Hópar og íhlutir](topic:groups-components)).

## Afrita eitthvað

1. Veldu það sem þú vilt afrita.
2. Ýttu á {{key:M}}.
3. Haltu inni {{key:Ctrl}} (eða {{key:Alt}}) og smelltu á punktinn til að færa frá. Á Mac gerir {{key:Mod}} eða {{key:Alt}} það sama. Ábendingin segir „Ctrl færir í staðinn“, sem þýðir að þú ert að afrita.

   Þú getur líka ýtt á og sleppt {{key:Ctrl}} eða {{key:Alt}} eftir fyrsta smellinn til að skipta á milli þess að færa og afrita.

4. Smelltu þar sem afritið á að fara, eða sláðu inn fjarlægð og ýttu á {{key:Enter}}.

   Upprunalegi hluturinn helst þar sem hann var og afritið er valið.

## Afrita, klippa, líma og tvítaka

- {{key:Mod+C}} afritar valið, {{key:Mod+X}} klippir það (afritar og eyðir því svo), {{ui:Afrita}} og {{ui:Líma}} eru einnig hnappar í tækjastikunni, í hópnum {{ui:Breyta}}, og {{ui:Meira}} við hlið þeirra hefur klippa, líma á sama stað og tvítaka.
- {{key:Mod+V}} límir: útlínur af afritinu fylgja bendlinum, smella á punkta eins og hvert annað verkfæri, og smellur setur það niður með neðsta horninu þar. {{key:Esc}} hættir við.
- {{key:Mod+Shift+V}} límir á sama stað, nákvæmlega þar sem afritið kom frá. Það er gagnlegt til að færa eitthvað inn í hóp sem þú hefur opnað.
- {{key:Mod+D}} ({{key:Shift+D}} í Modeler-stillingunni) tvítekur: afrit er búið til og fylgir bendlinum strax. Smelltu til að setja það niður, sláðu inn fjarlægð, eða ýttu á {{key:Esc}} til að sleppa því. Strax á eftir skaltu slá inn `3x` fyrir fleiri afrit í röð.

Hópur sem er límdur verður nýr hópur. Íhlutur sem er límdur er önnur staðsetning sama íhlutar, svo breyting á einum breytir þeim öllum. Afrit límast líka í annan ModelCraft-flipa í þessum vafra (þau koma þar inn sem nýjar skilgreiningar).

## Röð af afritum

Strax eftir afrit, meðan {{ui:Færa}} er enn verkfærið:

- Sláðu inn `3x` (eða `*3`) og ýttu á {{key:Enter}} fyrir þrjú afrit í röð, hvert með sama bili og fyrsta afritið. Þú færð þrjú ný afrit auk upprunalega hlutarins.
- Sláðu inn `/3` og ýttu á {{key:Enter}} til að deila í staðinn: þrjú afrit dreifast jafnt frá upprunalega hlutnum að staðnum þar sem þú settir fyrsta afritið, það síðasta á þeim stað. Notaðu þetta til að fylla bil: settu eitt afrit á fjarlægari endann og deildu svo.

Þú getur slegið inn annan fjölda strax á eftir: `5x` kemur í stað `3x`-raðarinnar. Ábendingin minnir þig á: „Afritað. Sláðu inn 3x fyrir fleiri afrit í röð, eða /3 til að deila fjarlægðinni.“

### Dæmi: súlur á 6 metra fresti

1. Búðu til súlu og gerðu hana að íhlut ({{key:G}}), svo öll afrit breytist saman síðar.
2. Ýttu á {{key:M}}, haltu inni {{key:Ctrl}} og smelltu á grunnhorn súlunnar.
3. Færðu eftir rauða ásnum og sláðu inn `6m`, og síðan {{key:Enter}}.
4. Sláðu inn `4x` og {{key:Enter}}. Þú ert þá með fimm súlur, 6 m á milli þeirra.

## Atriði sem gott er að vita

- Ýttu á {{key:Esc}} áður en annar smellurinn er gerður til að hætta við; allt fer aftur þangað sem það var.
- {{ui:Færa}} virkar innan hópsins sem þú ert að breyta. Til að færa heilan hóp skaltu loka honum fyrst og velja hann utan frá.
- Með {{ui:Árekstur}} kveikt (neðst til hægri, og í [stillingum ModelCraft](topic:settings#solids-stop-where-they-touch)) stöðvast færsla þar sem valið snertir annað fast form í stað þess að fara í gegnum það. Smelltu á {{ui:Árekstur}} til að slökkva á því fyrir færslu sem á að fara í gegnum.
- Til að setja afrit inni í öðrum hópi: afritaðu það, opnaðu hinn hópinn og límdu ({{key:Mod+Shift+V}} heldur því á sama stað).
