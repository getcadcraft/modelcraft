---
title: Opnaðu senuna í öðru forriti
summary: Vistaðu senuna sem USD-skrá eða glTF-skrá fyrir hvaða forrit sem les þær, eða opnaðu hana úr Studio í forriti á þessari tölvu.
keywords: opna í, usd, gltf, glb, útflutningur, myndgerðarforrit, archviz, studio, usdview, senda, afhending, pakki, unreal-mappa
from: 812329d5
---

Veldu færslu **Opna í** á vél-listanum í {{ui:Myndgera mynd…}} til að fara með senuna í annað forrit. Ekkert kemur til baka í líkanið.

## Skrá fyrir hvaða forrit sem er

- **USD-skrá** vistar senuna sem `.usdc` (eða `.usdz` þegar líkanið ber myndir): [sömu skrá og Vista sem USD](topic:usd), með efnum, lömpum og myndavélum. Hún heldur afritum (instancing) og nákvæmum efnisgildum. Flestar myndgerðir, leikjavélar og skoðarar lesa USD.
- **glTF-skrá (.glb)** vistar léttari glTF 2.0-skrá með efnum, áferðum og lömpum; sjá [Flytja líkan út fyrir önnur forrit](topic:export-model) fyrir sniðin sem ModelCraft skrifar.

- **Unreal-verkefnismappa (.zip)** vistar möppuna sem [Senda senuna í leikjavél](topic:render-unreal) skrifar, fyrir verkefni á hvaða tölvu sem er.

Allar þrjár virka í vafranum og í Studio.

## Í Studio: opnaðu hana í forriti

Studio listar forritin sem það finnur á þessari tölvu sem geta opnað senuna: usdview ef það er á leitarslóðinni þinni, og innbyggða forrit tölvunnar fyrir skráargerðina. Veldu eitt, veldu USD eða glTF þar sem það les bæði, og smelltu á {{ui:Myndgera}}. Studio skrifar pakkann í nýja möppu undir Skjöl (`CadCraft hand-off`; ekkert er yfirskrifað, hver sending fær sína eigin möppu) og ræsir forritið á honum, og segir síðan hvar skrárnar eru.

| Forrit | Les best |
|---|---|
| usdview | USD |
| Innbyggt forrit tölvunnar | Það sem tölvan hefur fyrir skráargerðina |

Studio ræsir aðeins forrit af þessum fasta lista; það keyrir ekki neitt sem síðan biður um með nafni, og ræsir aldrei forrit undir GNU GPL-leyfinu (sjá [Teiknaðu myndina með öðru forriti](topic:render-other-program#programs-cadcraft-never-runs)). Hvaða forrit sem les USD eða glTF opnar skrána úr **Skrá fyrir hvaða forrit sem er** hér að ofan.

:::note
Twinmotion, Enscape og önnur sjónmyndaforrit eru ekki á listanum: CadCraft hefur ekki verið prófað með þeim og gerir enga kröfu um þau. glTF- eða USD-skrá héðan er leiðin inn.
:::
