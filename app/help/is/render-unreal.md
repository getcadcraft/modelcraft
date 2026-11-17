---
title: Senda senuna í leikjavél
summary: Studio getur skrifað senuna inn í Unreal Engine verkefni og haldið henni í takt við hverja sendingu; þínar eigin breytingar eru í lagi sem CadCraft skrifar aldrei í. Viðbótin sem opnar hana er ekki komin út enn.
keywords: unreal, unreal engine, leikjavél, tengill, senda, usd stage, verkefni, beint, cine camera, movie render queue
from: 9a765cc2
---

Í CadCraft Studio getur vélalistinn haldið **tengli** á Unreal Engine verkefni. Aðeins ein leið: frá CadCraft yfir í Unreal.

## Senda senuna

1. Veldu Unreal-færsluna í vélalistanum. Í fyrsta skipti biður Studio þig um möppu verkefnisins (þá sem inniheldur `.uproject` skrána); hún man hana.
2. Smelltu á {{ui:Senda}}. Studio skrifar `CadCraft/<file name>/` inn í verkefnið: senuna sem USD skrá, stillingaskrána, ljósasnið og tvær litlar lagaskrár.
3. Breyttu líkaninu, vistaðu og sendu aftur. Aðeins senan og stillingaskráin eru endurskrifaðar.

## Breytingarnar þínar eru öruggar

Sviðið sem Unreal opnar er lítið rótarlag sem er búið til einu sinni, með tveimur lögum undir: **þínu lagi** efst (`<name>.user.usda`, tómt í fyrstu, CadCraft skrifar aldrei yfir það) og senu CadCraft fyrir neðan. Breytingar sem þú vistar í þitt eigið lag haldast þegar senan er send aftur. Ljós og aðrir leikarar sem þú setur í Unreal-borðinu eru utan sviðsins og er heldur ekki breytt.

## Án Studio

Í vafra, eða á tölvu þar sem Studio finnur ekki Unreal, veldu **Unreal verkefnismappa (.zip)** í vélalistanum og smelltu á {{ui:Myndgera}}. Hún vistar sömu möppu sem zip-skrá: taktu hana upp í `CadCraft` möppu verkefnisins. Hafðu **Taka með sviðsskrárnar** valið í fyrsta skipti; slökktu á því við síðari vistanir, svo zip-skráin innihaldi aðeins senuna og stillingaskrána og þitt eigið lag sé aldrei skrifað yfir.

:::note
Unreal-viðbótin sem opnar sviðið, beitir sólinni, lömpunum, myndavélunum og lýsingunni, fylgir hverri sendingu og myndgerir myndavél, er **ekki komin út enn** og hefur ekki verið keyrð í Unreal. Þangað til setur Senda skrárnar í verkefnið og verkfæri Unreal fyrir USD geta opnað þær. Windows er fyrsta stýrikerfið; macOS kemur á eftir.
:::
