---
title: Mála með litum og efnum
summary: Gefðu flötum, hópum og íhlutum einn traustan lit eða efni eins og múrstein, klæðningu, þakspón, við eða stein, og haltu því þegar þú flytur út.
keywords: mála, litur, litir, efni, áferð, múrsteinn, klæðning, þakspónn, þakefni, viður, steinn, flís, steypa, stúkó, gras, möl, gler, málmur, málningarfata, fylling, sýnishorn, litasogi, sjálfgefið, glb, obj, mtl, collada
from: b1500523
---

Litir hjálpa þér að greina hluta líkans í sundur, og **efni** (múrsteinn, klæðning, þakefni, viður, steinn, flís, steypa, stúkó, gras, gler, málmur) láta það líta út eins og það er byggt úr. Bæði málast á sama hátt.

## Veldu lit

{{ui:Litir}}-hlutinn hægra megin sýnir röð af einlitum litum, {{ui:Sjálfgefið}} (sá sem er strikaður yfir: enginn litur) og {{ui:+}} reit fyrir hvaða annan lit sem er. Smelltu á einn til að gera hann að núverandi lit. Málningartólið byrjar með honum.

## Mála

1. Ýttu á {{key:B}} ({{ui:Mála}}), eða, þegar ekkert er valið, smelltu á lit. (Þegar eitthvað er valið málar það að smella á lit valið strax.)
2. Smelltu á flöt til að mála hana.
3. Smelltu á hóp eða íhlut til að mála það afrit: flatir þess sem hafa engan eigin lit fá þennan lit. Flatir sem þú málaðir inni í því halda sínum.

Til að mála nokkra hluti í einu, veldu þá fyrst og smelltu síðan á lit, eða smelltu á einhvern þeirra með {{ui:Mála}}. Það er eitt afturköllunarskref.

| Halda | Og smella á flöt | Hvað málast |
|---|---|---|
| — | | Þessi flötur |
| {{key:Ctrl}} | | Hver flötur tengdur honum sem hefur sama lit |
| {{key:Shift}} | | Hver flötur af þeim lit í hópnum sem þú vinnur í |
| {{key:Alt}} | | Ekkert: þú tekur þann lit í staðinn |

Til að taka flöt aftur í engan lit, veldu {{ui:Sjálfgefið}} og smelltu á hann.

## Mála með efni

{{ui:Efni}}-hlutinn, undir {{ui:Litir}}, sýnir efnasafnið eftir tegund: múrsteinn og steinblokk, klæðning, þakefni, viður, steinn, flís, steypa, stúkó, jörð, gler og málmur. Svífðu yfir reit til að sjá nafn hans. Smelltu á einn, og málaðu síðan með honum alveg eins og með lit: {{key:B}}, smelltu á fleti, hópa eða íhluti; eða veldu fyrst og smelltu á efnið.

- Í **Skyggðum** stíl sýna fletir áferð efnisins. Falin lína, vírlíkan og röntgen sýna litinn þess.
- Áferðir liggja **láréttar eftir hverjum fleti** og **upp eftir honum**: múrsteinsraðir haldast láréttar á hverjum vegg, þakspónar liggja niður halla þaksins, plankar á gólfi fylgja rauða ásnum. Þær eru í sinni raunstærð (múrsteinn er um 215 mm langur), þannig að þær líta rétt út í hvaða fjarlægð sem er.
- Í [myndgerðri mynd](topic:render) halda efni áferð sinni, grófleika og, fyrir gler og málm, glansi sínum.
- {{key:Alt}}-smellur með {{ui:Mála}} tekur líka efni flatar.

Áferðirnar eru teiknaðar af ModelCraft sjálfu, þannig að þær virka án nettengingar og eru frjálsar til notkunar til hvers sem er (CC0).

## Íhlutir og litir

Litur sem málaður er á flöt **inni í** íhlut sést á hverju afriti, því afritin deila einni skilgreiningu. Litur sem málaður er á **afrit** utan frá (með íhlutinn lokaðan) tilheyrir aðeins því afriti, þannig að tvö afrit af einum íhlut geta haft mismunandi liti. {{ui:Upplýsingar um eind}} sýnir lit valins flatar, hóps eða íhlutar.

## Litir í skrám

- ModelCraft-skráin geymir hvern lit og hvert efni.
- Önnur snið fá **lit efnisins** (útlit þess úr fjarlægð) í stað áferðarinnar: glTF, Collada, OBJ, DWG og DXF, og athugunin fyrir þrívíddarprentun. Í glTF, Collada og OBJ heldur efnið nafni sínu, eins og `Material_brick-red`.
- **glTF (.glb)** og **Collada (.dae)**: hver litur verður efni. Íhlutur sem sýndur er í mismunandi litum er skrifaður einu sinni fyrir hvern lit. glTF skrifar líka innfluttar áferðir sem áferðir.
- **OBJ**: útflutningur sækir tvær skrár, `.obj` og `.mtl`-efnisskrá með litunum. Hafðu þær í sömu möppu. Með innfluttum áferðum koma `.obj`, `.mtl` og myndirnar sem eitt `.zip`.
- **DWG** geymir nákvæmu litina; **DXF** notar þann nálægasta af 255 stöðluðu CAD-litunum.
- **STL** og **PLY** bera liti: STL í VisCAM / SolidView sniði (forrit sem lesa það ekki hunsa það), PLY sem lit á hverjum punkti. Sjá [Skráarsnið í smáatriðum](topic:formats).

:::tip
Til að móta skjá, málaðu rammann kolsvartan og glerið blátt eftir að þú hefur [fært framflötinn til hliðar](topic:draw-faces).
:::
