---
title: Vista, opna og flytja út USD
summary: Vistaðu allt líkanið sem USD (.usda, .usdc eða .usdz) án þess að missa neitt, opnaðu það aftur, og fluttu inn USD-senur úr öðrum þrívíddarforritum.
keywords: usd, usda, usdc, usdz, openusd, alhliða senulýsing, vista sem, útflutningur, innflutningur, samsetning senu, archviz, openpbr, materialx, pakki
from: 73d299f9
---

USD er senusnið sem mörg þrívíddar-, flutnings- og arkitektúrsjónmyndaforrit deila. ModelCraft skrifar það og les. `.modelcraft` er sniðið sem {{ui:Vista}} skrifar; USD er val í {{ui:Vista sem}}.

## Vista sem USD

1. Veldu {{ui:Vista sem}} í hópnum {{ui:Skrá}} (eða ýttu á {{key:Mod+Shift+S}}).
2. Veldu sniðið: {{ui:Texti (.usda)}} (læsilegt, gott fyrir útgáfustýringu), {{ui:Tvíundarskrá (.usdc)}} (minnst og hraðvirkast) eða {{ui:Pakki (.usdz)}} (ein skrá með áferðunum inni í henni).
3. Skráin niðurhalast (í skjáborðsforritinu velurðu hvar hún fer).

Sömu val eru í {{ui:Flytja út}} › {{ui:USD (.usda, .usdc, .usdz)…}}.

## Ekkert tapast

Opnaðu USD-skrá sem ModelCraft vistaði og þú færð líkanið aftur nákvæmlega: fleti með götum sínum, mjúkum og földum brúnum, ferla, hópa og einingar, merki, senur, málsetningar, leiðbeiningar, sniðflata, ljós, innfluttar áferðir og sýnina. Önnur forrit sjá sama líkan sem möskva, hópa, frumgerðir fyrir einingar, efni, ljós og myndavélar.

:::note
Ef annað forrit breytir rúmfræði hóps eða einingar opnar ModelCraft þann hluta sem möskva með breytingunni varðveittri, og segir hversu marga hluta það las þannig. Staðsetning sem er færð eða eydd í öðru forriti helst færð eða eydd.
:::

## Opna eða flytja inn USD frá öðrum

- {{ui:Opna}} `.usd`, `.usda`, `.usdc` eða `.usdz` skrá til að byrja líkan út frá henni.
- {{ui:Flytja inn}} hana til að bæta henni við opna líkanið. Settu skrárnar sem hún vísar í (önnur lög, áferðir) ásamt henni.

Möskvar koma inn með normal-vigrum, UV-hnitum og litum; sameiginleg rúmfræði kemur sem einingar, efni sem málningarlitir, ljós sem ljós og myndavélar sem senur, í metrum með Z upp, hver sem einingar og uppstefnuás skráarinnar eru.

## Ekki enn

Hreyfimyndir, beinagrindur og MaterialX-hnútanet eru ekki lesin né skrifuð sem USD enn sem komið er. Hreyfimyndir og hnútaefni ModelCraft eru geymd í USD-skrá sem það vistaði, svo ModelCraft geti opnað hana aftur, en önnur forrit sjá þau ekki. Lög sem skrá vísar í og ModelCraft les ekki (til dæmis MaterialX-skjal) eru skilin eftir með athugasemd.
