---
title: Módelgerð á lóðaruppdrætti úr DWG eða DXF
summary: Fluttu inn CAD-lóðar- eða grunnteikningu sem línur á jörðinni, svaraðu spurningunni um einingar og raktu hana í fleti og massa.
keywords: lóðaruppdráttur, dwg, dxf, cad, innflutningur, skissa, ljósmynd af skissu, handskissa, servíettuskissa, ljósmynd, pappír, pennalitir, breytilegar blokkir, sýnileikastöður, texti, skygging, splína, sporbaugur, þrívíddarflötur, rekja, grunnmynd, lóð, lóðarlína, einingar, undirlag, samhengi
from: 3415dc96
---

ModelCraft getur flutt inn línur úr 2D CAD-teikningu, lóðaruppdrætti eða grunnmynd og lagt þær á jörðina svo þú getir módelað ofan á þær.

## Flytja inn teikninguna

1. Smelltu á {{ui:Flytja inn}} í hópnum {{ui:Skrá}} (eða slepptu skránni á þrívíddarsýnina).
2. Veldu `.dwg`- eða `.dxf`-skrá.

   Stór DWG-skrá tekur smá stund: stöðustikan segir „Les plan.dwg…“ þar til hún er komin inn.

3. Ef teikningin segir ekki hverjar einingarnar eru, spyr gluggi sem heitir „Mælieiningar teikningar“: „Hver er ein eining teikningarinnar?“ Veldu {{ui:Tommur}}, {{ui:Fet}}, {{ui:Millimetrar}} eða {{ui:Metrar}}. Flestir bandarískir lóðaruppdrættir eru teiknaðir í fetum, arkitektateikningar í tommum og metrískar teikningar í millimetrum.

   Teikningin kemur inn sem hópur brúna á jörðinni, valinn, og sýnin aðdregur að henni. Stöðustikan segir hversu margar brúnir komu inn, til dæmis „Innflutt site.dwg: 1697 brúnir á jörðinni, í hópi. Sundurliða hann til að teikna beint á hann.“

## Hvað kemur inn

- Línur, fjöllínur (með bogum þeirra), hringir og bogar, og blokkir með öllu í þeim, aðeins úr **líkanrými**. Bogar verða stuttir beinir kaflar.
- Línur, fjöllínur, bogar, hringir, sporbaugar og splínur lenda flatar á jörðinni, sem brúnir.
- **Skyggingar** verða að flötum á jörðinni, með eyjum sínum sem göt, svo þú getir strax ýtt/togað skyggðu svæði.
- **Þrívíddarfletir** og fyllt föst efni verða að flötum; þrívíddarfletir halda hæðum sínum.
- **Texti** (einlínu-texti, fjöllínu-texti og eigindagildi) er teiknaður sem brúnir í einföldu einlínu-letri, í eigin hæð, horni og jöfnun textans. Letrið er ekki letur teikningarinnar, svo orðin geta orðið örlítið lengri eða styttri. Stafir sem letrið hefur ekki lögun fyrir eru teiknaðir sem litlir reitir og taldir.
- **Málsetningar** eru teiknaðar eins og teikningin sýnir þær (línur, örvaroddar og texti, sem brúnir og fletir).
- **Breytilegar blokkir** koma inn eins og teikningin sýnir þær: hver staðsett blokk í þeirri sýnileikastöðu sem hún var vistuð með, og aðeins línur þeirrar stöðu. Stöðustikan telur þær upp með sýndu stöðunum og hinum stöðunum sem hver hefur, til dæmis „Receptacle sýnt sem Duplex ×38, GFI ×7 (stöður: Duplex, GFI)“. ModelCraft skiptir ekki um stöður.
- **Þrívíddarföst efni, svæði og búkar** (ACIS-gögn teikningarinnar) koma inn sem eigin hópar: lokað fast efni sem fast efni, svæði eða opinn búkur sem fletir. Flatir fletir koma inn heilir; bognir fletir (strokkar, keilur, kúlur, tórusar, einfaldir splínufletir) koma inn sem litlir þríhyrningar með mjúkum brúnum á milli, svo aðeins brúnir fasta efnisins sjást. Flötur á annarri gerð yfirborðs er skilinn eftir og skráður: „Ekki teiknað enn (þrívíddar föst efni): …“.
- Ekki flutt inn: punktar, töflur, marglínur, myndir og aðrar gerðir hluta. Stöðustikan telur þá upp eftir gerð, til dæmis „Ekki flutt inn: 12 POINT.“ Allt á útliti (pappírsrými) er líka skilið eftir, án þess að vera skráð.
- Lög eru ekki varðveitt: allar línur koma inn eins.

Ef teikningin er langt frá upphafspunkti sínum (til dæmis ríkjahnit), flyst hún samt inn, en gæti lent langt frá upphafspunkti ModelCraft. Teikningar sem ná meira en 10.000 km frá upphafspunkti sínum eru hafnaðar: færðu teikninguna nær 0,0 í CAD-forritinu fyrst.

## Rektu fleti úr línunum

Innfluttar línur lokast sjaldan snyrtilega í fleti af sjálfsdáðum. Tvær leiðir:

**Haltu uppdrættinum sem undirlagi (mælt með)**

1. Skildu uppdráttinn eftir sem sinn eigin hóp.
2. Teiknaðu húsið þitt ofan á með {{ui:Rétthyrningur}} og {{ui:Lína}}, og smelltu á horn uppdráttarins („Endapunktur“) og brúnir hans („Á brún“).
3. Ýttu/togaðu flötunum þínum upp. Uppdrátturinn helst óhreyfður undir, og þú getur eytt öllum hópnum síðar með einum smelli.

Smellifesting virkar yfir hópa: þú getur smellt á horn uppdráttarins án þess að opna hann.

**Teiknaðu á eigin línur uppdráttarins**

1. Veldu uppdráttarhópinn og smelltu á {{ui:Sundurliða}}. Línur hans verða lausar brúnir.
2. Þar sem lokuð útlína ætti að vera flötur, teiknaðu eina línu yfir einhverja af brúnum hennar með {{ui:Lína}}, frá horni að horni. Þegar útlínan er lokuð og flöt fyllist flöturinn yfirleitt. Ef ekki, leitaðu að bili eða skörun í útlínunni og teiknaðu yfir það.
3. Ýttu/togaðu honum.

Þetta virkar best á hreinum uppdrætti. Á annasamri mælingu er hraðara að rekja ofan á.

## Vandamál

- „Þetta er tvíundar-DXF. Vistaðu hana sem ASCII DXF og reyndu aftur.“ Vistaðu DXF-skrána aftur úr CAD-forritinu sem ASCII (texta).
- „…hefur engar línur, boga eða hringi í líkanrými til að flytja inn.“ Teikningin er líklega öll á útlitum, eða eingöngu texti og skyggingar.
- „Ekki tókst að lesa þessa teikningu (…). Hún gæti verið skemmd, eða vistuð í DWG-útgáfu sem lesarinn ræður ekki við…“ Sviguðu hlutarnir segja hvers vegna, til dæmis „DWG-útgáfa AC1009 er ekki studd“. Vistaðu hana sem DXF, eða sem DWG frá AutoCAD 2000 til 2018, úr CAD-forritinu.
- Uppdrátturinn er á röngum stærð: þú valdir ranga einingu. Afturkallaðu ({{key:Mod+Z}}) og fluttu inn aftur, eða [breyttu mælikvarða](topic:rotate-scale) hópsins um rétta stuðulinn (12 milli feta og tommna, 25,4 milli tommna og millimetra).

Til að breyta hæðarlínum í jörð sem þú getur mótað, sjá [Landslag](topic:terrain).

## Úr ljósmynd af handskissu

**Skrá › Flytja inn ljósmynd af skissu…** tekur ljósmynd af skissu á pappír (JPEG, PNG eða TIFF, beint úr síma er í lagi) og býr til sams konar línur á jörðinni. Segðu hvaða pappír það er (eða láttu forritið finna blaðið, tekið sem A4) og mælikvarða skissunnar, til dæmis 1 : 100. Jaðar pappírsins er fundinn, ljósmyndin rétt af, blekið rakið í línur og boga, og hver pennalitur (svartur, rauður, blár, grænn) verður eigin hópur með merki (**Skissa svört**, **Skissa rauð**, …), allt inni í einum hópi sem heitir eftir ljósmyndinni. Það er eitt afturköllunarskref, og allt gerist á þessari tölvu: ekkert er sent neitt.

Þegar enginn jaðar pappírs finnst er öll ljósmyndin tekin sem blaðið og stöðulínan segir það: mældu eitthvað sem þú þekkir og breyttu mælikvarða hópsins ef hann er rangur. Rektu línurnar í fleti eins og að ofan.
