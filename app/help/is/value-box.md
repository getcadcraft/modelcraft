---
title: Skrifaðu nákvæmar stærðir í gildisreitinn
summary: Allar leiðir til að slá inn lengdir, stærðir, punkta, jöfnun, horn, hliðar og afrit, og hvernig einingar og tölur án einingar eru lesnar.
keywords: gildisreitur, mælireitur, vcb, slá inn, nákvæmt, málsetning, lengd, einingar, fet, tommur, metrar, millimetrar, hnit, jöfnun, fylki, hliðar, horn, tugakomma
from: 0148dc3d
---

Gildisreiturinn situr í stöðustikunni neðst, með merkimiða sem breytist eftir verkfærinu. Meðan þú vinnur sýnir hann stærðina í rauntíma; hvenær sem er getur þú slegið inn nákvæma stærð.

## Hvernig þú slærð inn

1. Byrjaðu aðgerðina með smelli (fyrsta hornið, fletinum, punktinum sem á að færa frá).
2. Sláðu inn. Þú þarft ekki að smella á gildisreitinn: tölustafur eða eitt af `. , - ' " [ < * /` sendir innsláttinn þangað.
3. Ýttu á {{key:Enter}}.

Ýttu á {{key:Esc}} í gildisreitnum til að hreinsa hann og fara aftur í sýnina. Á snertiskjá skaltu snerta gildisreitinn til að opna lyklaborðið.

Ef ModelCraft getur ekki lesið það sem þú slóst inn segir stöðustikan: „Sláðu inn lengd eins og 3m, 10'6" eða 4m,3m.“ Ef verkfærið getur ekki notað það segir hún: „Þetta virkaði ekki: …“ ásamt ástæðunni.

## Lengdir

| Slá inn | Þýðir |
|---|---|
| `3m` `320cm` `3200mm` | Metrar, sentímetrar, millimetrar |
| `10'` `10ft` `10 feet` | Fet |
| `6"` `6in` `6 inches` | Tommur |
| `10'6"` `10' 6"` `10'-6 1/2"` | Fet og tommur, með broti |
| `6 1/2"` `6-1/2"` `3/4"` | Tommur með broti |
| `1.5ft` `.5m` | Aukastafir með einingu |
| `120` | Tala án einingar, í einingu líkansins |

**Tala án einingar notar einingu líkansins**, eins og sýnt er í veljaranum neðst til hægri: tommur í líkani í fetum og tommum (svo `120` er 10 fet), millimetrar í millimetralíkani, og svo framvegis. Ef þú slærð inn einingu hefur hún alltaf vinninginn, sama hver eining líkansins er. Bogadregnar gæsalappir og frumtölutákn (’ ” ′ ″) eru líka lesin sem fet og tommur.

:::warning
Notaðu alltaf **punkt** sem aukastafaskil: `2.5m`. Komma skilur á milli tveggja gilda, svo `2,5` þýðir 2 og 5 (tvö gildi), óháð tungumálsstillingum þínum.
:::

## Reikningur

Hvaða lengd sem er getur verið reikningur: bættu við með `+`, dragðu frá með `-`, margfaldaðu með `*`, deildu með `/`, og notaðu sviga. Engin reiknivél þarf.

| Slá inn | Þýðir |
|---|---|
| `2.5/3` | Þriðjungur af 2.5 (í einingu líkansins) |
| `12'6"+3/4"` | 12' 6 3/4" |
| `(24'-0")/3` | 8' |
| `2*450mm` | 900 mm |
| `4+7/16` | 4 7/16" í líkani í fetum og tommum |
| `3m-25cm` | 2.75 m |

Tala án einingar er í einingu líkansins þegar hún er lengd (`2.5/3` í metralíkani er 0.833 m), og hreinn margfaldari þegar hún margfaldar eða deilir lengd (`2*450mm`). Horn og margfaldarar taka líka reikning: `90/2` er 45°. Tvær lengdir margfaldaðar saman gefa flatarmál, ekki lengd, svo `2m*3m` er hafnað.

Ef ModelCraft getur ekki reiknað út segir stöðustikan hvað er að og hvar, til dæmis „Division by zero (character 4).“ Sviga byrjar líka gildisreitinn, svo þú getur byrjað á `(`.

Þetta hefur áfram sína eigin merkingu: `/3`, `3x` og `*3` eftir afrit, `24s` fyrir hliðar, og `/3` þegar jaðar er valinn (það [deilir jaðrinum](topic:divide)).

## Eftir verkfærum

| Verkfæri | Merkimiði | Innsláttur |
|---|---|---|
| {{ui:Lína}} | {{ui:Lengd}} | Lengd (í átt að bendlinum), eða punktur eða jöfnun (hér að neðan) |
| {{ui:Rétthyrningur}} | {{ui:Málsetningar}} | Tvær lengdir: `4m,3m`, `12',10'`. Semíkomma virkar líka: `4m;3m` |
| {{ui:Hringur}}, {{ui:Marghyrningur}} | {{ui:Hliðar}}, síðan {{ui:Radíus}} | Áður en fyrsti smellurinn kemur: fjöldi hliða, `12s` eða `12` (3 til 999). Eftir hann: radíusinn |
| {{ui:Ýta/toga}} | {{ui:Fjarlægð}} | Lengd. Neikvæð lengd fer hina leiðina |
| {{ui:Færa}} | {{ui:Fjarlægð}} | Lengd (í átt að bendlinum), eða punktur eða jöfnun. Eftir afrit: `3x`, `*3`, `/3` |
| {{ui:Snúa}} | {{ui:Horn}} | Gráður: `90`, `-45`, `22.5` |
| {{ui:Mælikvarði}} | {{ui:Mælikvarði}} | Stuðull yfir 0: `2`, `0.5`, `1.25` |
| {{ui:Málband}} | {{ui:Jafnfjarlægð}} eða {{ui:Lengd}} | Lengd |
| {{ui:Skipta}} | {{ui:Hlutar}} | Hversu margir jafnir hlutar: `5`, `5s` eða `/5` (2 til 1000). Sjá [Skipta jaðri eða ferli í jafna hluta](topic:divide) |
| {{ui:Málsetning}} | {{ui:Jafnfjarlægð}}, síðan {{ui:Lengd}} | Hvar málsetningarlínan liggur; rétt eftir staðsetningu endurstærir ný lengd líkanið |
| {{ui:Velja}} | {{ui:Gildi}} | Með einni málsetningu eða jaðri valinni endurstærir ný lengd líkanið. Sjá [Málsetning og endurstærð](topic:dimensions) |

## Punktar og jöfnun

Fyrir {{ui:Lína}} og {{ui:Færa}}, eftir fyrsta smell:

- `[x,y,z]` fer á þann nákvæma punkt í líkaninu (í eigin ásum hópsins þegar þú breytir inni í hópi). Dæmi: `[0,0,3m]` er 3 m beint fyrir ofan upphafspunktinn.
- `<dx,dy,dz>` fer þessa vegalengd frá fyrsta punktinum eftir rauðum, grænum og bláum ás. Dæmi: `<0,0,10'>` er 10 fet beint upp.

Hvert af þremur gildunum getur haft sína eigin einingu: `<12',0,6">`.

## Afrit eftir færslu

Rétt eftir afrit með {{ui:Færa}}:

| Innsláttur | Býr til |
|---|---|
| `3x` eða `*3` | 3 afrit í röð með sama bili |
| `/3` | 3 afrit dreifð jafnt frá upprunalega hlutnum að fyrsta afritinu |

Allt að 500 afrit. Sjá [Færa, afrita og búa til raðir](topic:move-copy#a-row-of-copies).

## Innslegnar lengdir þurfa stefnu

Ein innslegin lengd fer í þá átt sem bendillinn vísar frá fyrsta smelli. Ef þú slærð inn strax eftir smell, áður en þú hreyfir neitt, er engin stefna komin og ekkert gerist. Færðu bendilinn aðeins í þá átt sem þú vilt fara, og slærð svo inn.

## Eining líkansins

Breyttu einingunni í veljaranum neðst til hægri: {{ui:ft og in}}, in, ft, yd, mi, mil, µm, mm, cm, m eða km, eftir því sem þær eru kveiktar í {{ui:Stillingar}} › {{ui:Almennt}} › {{ui:Mælieiningar}} (eining líkansins sjálfs er alltaf þar). Lengd sem slegin er inn með merki einhverrar einingar er lesin í þeirri einingu. Sjá [Einingar, innslegin gildi og einingalistar](common:unit-lists). Hún breytir því hvernig lengdir birtast og hvernig tölur án einingar eru lesnar; líkanið helst jafnstórt. Einingin er vistuð í skránni.

Hvernig stærðir birtast:

| Eining | Lengdir | Flatarmál | Rúmmál |
|---|---|---|---|
| ft og in | `10' 6 1/2"` (að 1/16") | ferfet | rúmfet |
| in | `126 1/2"` | fertommur | rúmtommur |
| m | `3.2 m` | m² | m³ |
| cm | `320 cm` | cm² | cm³ |
| mm | `3200 mm` | m² frá 0.01 m², annars mm² | m³ frá 0.01 m³, annars mm³ |

Nýtt líkan byrjar í fetum og tommum þegar tungumál vafrans er stillt á bandarískt svæði (og Líbería og Mjanmar), og í millimetrum alls staðar annars staðar. Eining sem er stjörnumerkt í {{ui:Stillingar}} › {{ui:Almennt}} › {{ui:Mælieiningar}} er notuð í staðinn, þegar ModelCraft hefur hana. Eða breyttu veljaranum eftir {{ui:Nýtt}}.
