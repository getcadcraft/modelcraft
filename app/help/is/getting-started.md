---
title: Byrjaðu með ModelCraft
summary: Til hvers ModelCraft er, hvernig þú opnar það, og fyrsti kassinn þinn, frá rétthyrningi til vistaðs líkans.
keywords: byrja, fyrsta líkan, byrjun, kennsla, inngangur, kassi, massi, 3d, ýta/toga, skjót byrjun, leiðsögn, byrjandi, nýr í 3D
from: d47ad719
---

ModelCraft er þrívíddarmótunarforrit fyrir snemma hönnun: massarannsóknir, skipulag herbergja, einföld byggingarform og skuggana sem þau varpa. Þú teiknar flöt form, togar þau upp í fasta hluti og heldur áfram að vinna með þau með því að teikna á fleti þeirra. Það keyrir í vafranum þínum og líkönin þín eru áfram á tölvunni þinni.

Ef þú hefur notað SketchUp, þá nýtist flest af því sem þú þekkir: sömu stafir á verkfærunum, ýta/toga, gildisreitur fyrir nákvæmar stærðir, hópar og einingar. [Frá öðrum mótunarforritum](topic:coming-from) listar hvað er öðruvísi.

## Opna ModelCraft

1. Opnaðu ModelCraft í nýlegri útgáfu af Chrome, Edge, Firefox eða Safari. Sjá [Vafrar og tölvur](common:browsers).
2. Bíddu þar til þrívíddarsýnin birtist: ljóst (eða dökkt) svæði í miðjunni með spjaldi sem heitir „Byrjaðu að móta“.

Skjárinn er með tækjastiku efst, {{ui:Yfirlit}} og {{ui:Einingar}} vinstra megin, þrívíddarsýnina í miðjunni, {{ui:Upplýsingar um eind}}, {{ui:Stíll}} og {{ui:Senur}} hægra megin, og stöðustiku neðst með gildisreitnum og mælieiningunum. [Skjár ModelCraft](topic:workspace) lýsir hverjum hluta.

:::note
ModelCraft þarf WebGL, þrívíddarteikniaðgerð vafrans þíns. Ef miðja skjásins helst tóm og verkfærin gera ekkert, sjá [Bilanagreiningu](topic:troubleshooting#the-3d-view-is-blank).
:::

## Athugaðu mælieiningarnar fyrst

Líttu á neðra hægra hornið. Mælieiningavalið sýnir í hverju lengdir eru mældar.

- Nýtt líkan byrjar í **fetum og tommum** þegar vafrinn þinn er stilltur á Bandaríkin (einnig Líbería og Mjanmar), og í **millimetrum** alls staðar annars staðar.
- Til að breyta því, veldu aðra mælieiningu í valinu: {{ui:ft og in}}, {{ui:in}}, {{ui:m}}, {{ui:cm}} eða {{ui:mm}}. Líkanið sjálft breytist ekki að stærð; aðeins hvernig lengdir eru sýndar og hvernig tölur án eininga eru lesnar.

Tala sem þú skrifar án einingar notar einingu líkansins. Í líkani í fetum og tommum er tala án eininga **tommur**, svo `120` þýðir 10 fet.

## Láttu ModelCraft leiða þig í gegnum fyrsta líkanið

Ný í þrívídd? Smelltu á {{ui:Leiðsögn um fyrsta líkan}} á spjaldinu {{ui:Byrjaðu að móta}} (það er líka í {{ui:Sýnir}}). Lítið spjald leiðir þig í gegnum fjögur skref, frá flötum rétthyrningi að líkani tilbúnu fyrir þrívíddarprentara:

1. Teiknaðu rétthyrning á jörðinni.
2. Togaðu hann upp í kassa.
3. Gerðu kassann að einum hlut (hópi).
4. Athugaðu fyrir þrívíddarprentun, og sæktu síðan 3MF- eða STL-skrá.

Spjaldið fylgist með líkaninu, ekki hnöppunum: það fer áfram þegar skrefið er búið, sama hvernig þú gerðir það, og fer eitt skref til baka þegar þú afturkallar. {{ui:Veldu verkfærið}} velur verkfærið fyrir þig. Lokaðu því hvenær sem er með {{ui:×}}.

## Teiknaðu fyrsta kassann

1. Ýttu á {{key:R}} fyrir {{ui:Rétthyrningur}}-verkfærið, eða smelltu á {{ui:Rétthyrningur}} í {{ui:Teikna}}-flokknum á tækjastikunni.
2. Smelltu einu sinni á jörðina nálægt miðju sýnarinnar. Það er fyrsta hornið.
3. Færðu bendilinn í burtu. Rétthyrningur fylgir honum, og gildisreiturinn neðst (merktur {{ui:Málsetningar}}) sýnir stærð hans.
4. Skrifaðu stærðina og ýttu á {{key:Enter}}: til dæmis `4m,3m`, eða `16',12'` í fetum og tommum. Þú þarft ekki að smella í gildisreitinn fyrst; að skrifa tölu sendir hana þangað.

   Þú færð flatan rétthyrning á jörðinni. Hann er **flötur**: yfirborð með brúnum allt í kringum sig.

5. Ýttu á {{key:P}} fyrir {{ui:Ýta/toga}}.
6. Smelltu á rétthyrninginn, færðu bendilinn upp og smelltu aftur. Eða smelltu á rétthyrninginn og skrifaðu hæð, til dæmis `3m` eða `10'`, og ýttu síðan á {{key:Enter}}.

   Rétthyrningurinn verður kassi með efri hlið, neðri hlið og fjórum hliðum.

7. Ýttu á {{key:Space}} til að fara aftur í {{ui:Velja}}, og smelltu síðan á efri hlið kassans. {{ui:Upplýsingar um eind}} hægra megin sýnir flatarmál hans.

:::tip
Þú getur líka dregið í stað þess að smella tvisvar: ýttu á fyrsta hornið, dragðu, og slepptu á því öðru. Báðar leiðirnar virka fyrir öll teikniverkfæri.
:::

## Skoðaðu þig um

- **Snúast:** dragðu með miðjuhnappi músarinnar (hjólinu), eða ýttu á {{key:O}} og dragðu með vinstri hnappnum.
- **Hliðra:** dragðu með hægri hnappi, eða með miðjuhnappi meðan þú heldur {{key:Shift}} inni.
- **Aðdráttur:** snúðu hjólinu. Aðdrátturinn beinist að því sem er undir bendlinum.
- **Sjá allt:** ýttu á {{key:Shift+Z}}, eða smelltu á {{ui:Öll sýn}}.

Á snertiborði eða snertiskjá eru bendingarnar öðruvísi. Sjá [Snúast, hliðra og aðdráttur](topic:orbit-pan-zoom).

## Afturkalla

Ýttu á {{key:Mod+Z}} til að afturkalla og {{key:Mod+Y}} til að endurgera, eða notaðu {{ui:Afturkalla}} og {{ui:Endurgera}} á tækjastikunni. ModelCraft man síðustu 200 skrefin meðan líkanið er opið. Ferillinn er ekki vistaður í skránni.

## Vistaðu líkanið

1. Smelltu á {{ui:Vista}} í {{ui:Skrá}}-flokknum, eða ýttu á {{key:Mod+S}}.
2. Vafrinn sækir skrá nefnda eftir líkaninu þínu, til dæmis `Untitled.modelcraft`. Stöðustikan segir hvert hún fór: „Vistað Untitled.modelcraft í niðurhöl.“

**Vistun er niðurhal.** Hver vistun býr til nýtt afrit í niðurhalsmöppunni þinni; hún yfirskrifar ekki skrána sem þú opnaðir. Til að halda verkefnamöppu snyrtilegri, færðu eða endurnefndu skrána þar handvirkt. [Opna, vista, flytja inn og út](topic:files) útskýrir af hverju og hvað annað þú getur gert.

:::warning
ModelCraft vistar ekki af sjálfu sér. Ef þú lokar flipanum með óvistuðum breytingum spyr vafrinn fyrst („Yfirgefa síðu?“). Veldu að vera áfram, og vistaðu síðan.
:::

## Fá hjálp

Ýttu á {{key:F1}} eða smelltu á {{ui:Hjálp}} í forritastikunni til að opna þessa hjálp við hliðina á líkaninu. Hún virkar án tengingar. Ýttu aftur á {{key:F1}}, eða {{key:Esc}} inni í hjálpinni, til að loka henni. Sjá [Notkun þessarar hjálpar](common:help).

## Hvert á að fara næst

- [Teiknaðu fleti með línum, rétthyrningum og hringjum](topic:draw-faces)
- [Ýttu og togaðu flötum í fasta hluti](topic:push-pull)
- [Skrifaðu nákvæmar stærðir í gildisreitinn](topic:value-box)
- [Hver aðgerð takka og músar](topic:keyboard)
