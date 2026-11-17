---
title: Listi yfir verkfæri
summary: Sérhvert ModelCraft-verkfæri með flýtilykli sínum, hvað hver smellur gerir og hvað þú getur slegið inn í gildisreitinn meðan það vinnur.
keywords: verkfæri, tækjastika, skipanir, listi, lína, rétthyrningur, hringur, marghyrningur, fjarlægð, bogi, ferill, splína, fylgdu mér, sópun, tveggja punkta bogi, bogi frá miðju, velja, ýta/toga, færa, snúa, mælikvarði, strokleður, málband, málsetning, sveifla, hliðra, aðdráttur, setja inn eininguna
from: e08a274f
---

Stöðustikan sýnir alltaf hvað núverandi verkfæri vill gera næst. {{key:Esc}} hættir við það sem verkfæri er mitt í.

## Teikniverkfæri

| Verkfæri | Lykill | Smellir | Sláðu inn í gildisreitinn |
|---|---|---|---|
| {{ui:Lína}} | {{key:L}} | Upphafspunktur, síðan hver næsti punktur. Hættir þegar flötur lokast, eða á {{key:Esc}} | Lengd í átt að bendlinum; `[x,y,z]` fyrir punkt; `<dx,dy,dz>` fyrir frávik ({{ui:Lengd}}) |
| {{ui:Rétthyrningur}} | {{key:R}} | Fyrsta horn (á jörðinni eða á fleti), síðan gagnstætt horn | Breidd og dýpt: `4m,3m` ({{ui:Málsetningar}}) |
| {{ui:Hringur}} | {{key:C}} | Miðja (á jörðinni eða á fleti), punktur á brúninni | Fyrir fyrsta smell: hliðar, `24s` eða `24` ({{ui:Hliðar}}). Eftir það: radíusinn ({{ui:Radíus}}) |
| {{ui:Marghyrningur}} | {{key:N}} | Miðja, horn | Eins og hringur; byrjar með 6 hliðum |
| {{ui:Bogi}} | {{key:A}} | Upphaf, endir, síðan bungan | Lengd strengsins eftir upphaf ({{ui:Lengd}}); bungan eftir endi ({{ui:Bunga}}); `12s` fyrir hluta |
| {{ui:Hornmælir}} | — | Miðja, 0°-punktur, síðan hornið | Hornið í gráðum ({{ui:Horn}}) |
| {{ui:Fylgdu mér}} | — | Veldu slóð, smelltu síðan á flötinn (eða smelltu á flötinn, síðan á brún slóðarinnar) | — |
| {{ui:Mála}} | {{key:B}} | Flötur, hópur eða eining | — ({{key:Ctrl}} tengt, {{key:Shift}} allt í þeim lit, {{key:Alt}} tekur upp lit) |
| {{ui:Jafnfjarlægð}} | {{key:F}} | Flötur (eða veldu flöt eða brúnir fyrst), síðan hliðin og fjarlægðin | Fjarlægðin ({{ui:Fjarlægð}}); inn í flötinn er inn á við |
| {{ui:Ferill}} | — | Punktar sem ferillinn fer um; {{key:Enter}} eða tvísmellur lýkur | Lengd eftir bendlinum, `[x,y,z]` eða `<dx,dy,dz>` fyrir næsta punkt |
| {{ui:Bogi frá miðju}} | — | Miðja, upphaf, síðan endi | Radíusinn eftir miðjuna; hornið í gráðum eftir upphaf; `12s` fyrir hluta |

## Breytingaverkfæri

| Verkfæri | Lykill | Smellir | Sláðu inn í gildisreitinn |
|---|---|---|---|
| {{ui:Velja}} | {{key:Space}} | Smelltu, tvísmelltu, þrísmelltu, dragðu glugga. Sjá [Velja hluti](topic:select) | Með einni málsetningu eða brún valinni: ný lengd, sem breytir stærð líkansins |
| {{ui:Ýta/toga}} | {{key:P}} | Flöturinn, síðan fjarlægðin. Tvísmelltu á flöt til að endurtaka síðustu fjarlægð | Fjarlægð; neikvæð fer hina leiðina ({{ui:Fjarlægð}}) |
| {{ui:Færa}} | {{key:M}} | Frá punkti, að punkti. Haltu inni {{key:Ctrl}} eða {{key:Alt}} til að afrita | Fjarlægð í átt að bendlinum, `<dx,dy,dz>` eða `[x,y,z]` ({{ui:Fjarlægð}}). Eftir afritun: `3x` eða `/3` |
| {{ui:Snúa}} | {{key:Q}} | Miðja (á fleti til að snúa í plani hans), upphafsstefna, endastefna | Hornið í gráðum ({{ui:Horn}}) |
| {{ui:Mælikvarði}} | {{key:S}} | Punkturinn sem helst, viðmiðunarpunktur, nýja stærðin | Stuðull: `2`, `0.5` ({{ui:Mælikvarði}}) |
| {{ui:Strokleður}} | {{key:E}} | Smelltu eða dragðu yfir brúnir, hópa, leiðbeiningar og málsetningar | ekkert |
| {{ui:Málband}} | {{key:T}} | Frá brún: samsíða leiðbeiningarlína. Frá punkti: mælir og skilur eftir leiðbeiningarpunkt | Fjarlægðin ({{ui:Jafnfjarlægð}}) eða lengdin ({{ui:Lengd}}) |
| {{ui:Málsetning}} | {{key:D}} | Tvö horn (eða ein brún), síðan hvar málsetningarlínan á að vera. Sjá [Málsetning og breyting stærðar](topic:dimensions) | Fjarlægðin ({{ui:Jafnfjarlægð}}). Strax eftir: ný lengd, sem breytir stærð líkansins |

{{ui:Færa}}, {{ui:Snúa}} og {{ui:Mælikvarði}} vinna á valinu. Ef ekkert er valið taka þau fyrst það sem þú smellir á (flötur dregur með sér brúnir sínar).

## Myndavélarverkfæri

| Verkfæri | Lykill | Dragðu til að |
|---|---|---|
| {{ui:Snúast}} | {{key:O}} | Snúast um þann hluta líkansins sem er undir bendlinum ({{key:Shift}} hliðrar) |
| {{ui:Hliðra}} | {{key:H}} | Renna sýninni til |
| {{ui:Aðdráttur}} | {{key:Z}} | Aðdráttur: upp er inn, niður er út |
| {{ui:Öll sýn}} | {{key:Shift+Z}} | (hnappur, ekki verkfæri) Passa allt líkanið |

Með mús þarftu sjaldan þessi: miðjudrag snýst, hægri-drag hliðrar og hjólið aðdrægir með hvaða verkfæri sem er. Sjá [Snúast, hliðra og aðdráttur](topic:orbit-pan-zoom).

## Skipuleggja

| Hnappur | Lykill | Gerir |
|---|---|---|
| {{ui:Eining}} | {{key:G}} | Gerir valið að einingu |
| {{ui:Hópur}} | {{key:Shift+G}} | Gerir valið að hópi |
| {{ui:Sundurliða}} | ekkert | Breytir völdum hópum og einingum aftur í lausa rúmfræði |

## Setja inn eininguna

Ekki á tækjastikunni: smelltu á {{ui:Staðsetja}} við hlið einingar í spjaldinu {{ui:Einingar}}. Smelltu einu sinni þar sem upphafspunktur einingarinnar á að vera; verkfærið fer síðan aftur í {{ui:Velja}}.
