---
title: Mæla og staðsetja leiðbeiningarlínur
summary: Lestu lengdir og flatarmál, mældu milli tveggja punkta með málbandinu, og leggðu út leiðbeiningarlínur og punkta til að teikna eftir.
keywords: mæla, málband, hornmælir, horn, hallandi leiðbeining, leiðbeining, leiðbeiningarlína, hjálparlína, fjarlægð, málsetning, lengd, flatarmál, jafnfjarlægð, útlögn, leiðbeiningarpunktur
from: de6d04d9
---

## Lesa stærðir án þess að mæla

Veldu eitthvað og skoðaðu {{ui:Upplýsingar um eind}}:

- Jaðar sýnir **lengd** sína.
- Flötur sýnir **flatarmál** sitt og hversu mörg göt hann hefur.
- Nokkrir fletir sýna **heildarflatarmál** sitt.
- Hópur eða eining sýnir **stærð** sína (breidd × dýpt × hæð kassans utan um hana) og, ef hún er lokað föst efni, **rúmmál** sitt.
- Þegar ekkert er valið sýnir {{ui:Upplýsingar um eind}} stærð alls líkansins.

Lengdir og flatarmál nota eininguna í valinu neðst til hægri. Líkan í millimetrum sýnir flatarmál frá 0.01 m² og upp í fermetrum (herbergi 4 × 3 m sýnir „12 m²“).

Meðan þú teiknar sýnir gildisreiturinn lifandi lengd, stærð, radíus eða fjarlægð, svo þú þarft sjaldan að mæla á eftir.

Til að breyta stærð eftir teikningu, veldu jaðar eða hóp og skrifaðu lengdina eða stærðina aftur í {{ui:Upplýsingar um eind}}. Eða settu [málsetningu](topic:dimensions) og skrifaðu nýja lengd í hana.

## Mæla milli tveggja punkta

1. Ýttu á {{key:T}} fyrir {{ui:Málband}}.
2. Smelltu á punkt: horn, miðpunkt, punkt á fleti eða jörðina. (Að smella á jaðar gerir eitthvað annað; sjá hér að neðan.)
3. Færðu þig að öðrum punktinum. Oddurinn og gildisreiturinn ({{ui:Lengd}}) sýna fjarlægðina. Hann smellur að punktum og að rauðu, grænu og bláu áttunum.
4. Smelltu. Stöðustikan segir „Mælt 4' 6".“ og **leiðbeiningarpunktur** verður eftir á öðrum punktinum.

Til að skilja leiðbeiningarpunktinn eftir í nákvæmri fjarlægð, skrifaðu hana eftir fyrsta smellinn og ýttu á {{key:Enter}}: hann fer í þá átt sem þú bendir.

## Staðsetja leiðbeiningarlínu

Leiðbeiningarlína er endalaus strikalína, samsíða jaðri, í fjarlægð sem þú velur. Notaðu leiðbeiningar til að leggja út afturdrátt, gólfhæð, eða hvar gluggi byrjar.

1. Ýttu á {{key:T}}.
2. Smelltu á **jaðar** (ekki endann á honum). Oddurinn segir „Á jaðri“.
3. Færðu þig frá jaðrinum, að þeirri hlið sem leiðbeiningin á að fara. Strikalína fylgir, samsíða jaðrinum, og gildisreiturinn ({{ui:Jafnfjarlægð}}) sýnir fjarlægðina.
4. Smelltu, eða skrifaðu jafnfjarlægðina og ýttu á {{key:Enter}}: `1.5m`, `5'`.

   Stöðustikan segir „Leiðbeiningarlína 1.5 m frá jaðrinum.“

Ef þú byrjar á leiðbeiningarlínu sem þegar er til verður til önnur leiðbeining samsíða henni, svo þú getur stigið rist út frá einni leiðbeiningu.

Ef þú skrifar jafnfjarlægð án þess að færa þig fyrst frá jaðrinum getur ModelCraft ekki vitað hvaða hlið þú átt við: „Færðu þig fyrst frá jaðrinum til að sýna hvaða hlið.“

## Leiðbeining í horni: Hornmælir

1. Smelltu á {{ui:Hornmælir}} í hópnum {{ui:Breyting}}.
2. Smelltu á miðjuna: punktinn sem leiðbeiningin fer í gegnum. Á fleti liggur hornmælirinn á þeim fleti; annars liggur hann flatur. Eftir þennan smell lætur {{key:Right}}, {{key:Left}} eða {{key:Up}} hann standa lóðrétt á rauða, græna eða bláa ásinn í staðinn (ýttu aftur til að afturkalla).
3. Smelltu á punkt sem setur 0°, til dæmis eftir jaðri.
4. Færðu að horninu sem þú vilt og smelltu: það smellur í 15° skref. Eða skrifaðu hornið í gráðum, eins og `22.5`, og ýttu á {{key:Enter}}; leiðbeiningin fer þeim megin sem bendillinn er á.

Leiðbeiningarlínan fer í gegnum miðjuna í því horni. Teiknaðu eftir henni með {{ui:Lína}} fyrir þakhalla, skálun eða skáhallan vegg.

## Teikna eftir leiðbeiningum

Teikniverkfæri smella að leiðbeiningarlínum („Á leiðbeiningu“) og leiðbeiningarpunktum („Leiðbeiningarpunktur“), og þar sem leiðbeiningarlína sker ásstefnu. Byrjaðu rétthyrning þar sem tvær leiðbeiningar skerast til að staðsetja hann nákvæmlega.

## Fjarlægja leiðbeiningar

- Ein leiðbeining: smelltu á hana með {{ui:Velja}} og ýttu á {{key:Delete}}, eða smelltu á hana með {{ui:Strokleður}}.
- Allar leiðbeiningar: þegar ekkert er valið, smelltu á {{ui:Eyða öllum leiðbeiningarlínum}} í {{ui:Upplýsingar um eind}}.

Leiðbeiningar vistast í `.modelcraft`-skránni. Þær eru ekki fluttar út á önnur snið.
