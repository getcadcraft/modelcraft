---
title: I-save, buksan at i-export ang USD
summary: I-save ang buong model bilang USD (.usda, .usdc o .usdz) nang walang nawawala, buksan itong muli, at mag-import ng USD scene mula sa ibang 3D program.
keywords: usd, usda, usdc, usdz, openusd, universal scene description, i-save bilang, export, import, scene assembly, archviz, openpbr, materialx, package
from: 73d299f9
---

Ang USD ay format ng scene na sabay-sabay na ginagamit ng maraming 3D, rendering at archviz program. Nagsusulat at nagbabasa nito ang ModelCraft. Ang `.modelcraft` ay nananatiling format na isinusulat ng {{ui:Save}}; ang USD ay isang pagpipilian sa {{ui:Save as}}.

## I-save bilang USD

1. Piliin ang {{ui:Save as}} sa grupong {{ui:File}} (o pindutin ang {{key:Mod+Shift+S}}).
2. Piliin ang format: {{ui:Text (.usda)}} (nababasa, mainam para sa version control), {{ui:Binary (.usdc)}} (pinakamaliit at pinakamabilis) o {{ui:Package (.usdz)}} (isang file na may mga texture sa loob).
3. Dina-download ang file (sa desktop app, pipiliin mo kung saan ito pupunta).

Ang parehong pagpipilian ay nasa {{ui:Export}} › {{ui:USD (.usda, .usdc, .usdz)…}}.

## Walang nawawala

Kapag binuksan mo ang USD file na na-save ng ModelCraft, makukuha mo ang model nang eksakto: mga face na may butas, malambot at nakatagong edge, curve, group at component, tag, scene, dimension, guide, section plane, lamp, na-import na texture, at ang view. Nakikita ng ibang program ang parehong model bilang mesh, group, prototype para sa component, materyal, lamp at camera.

:::note
Kapag binago ng ibang program ang geometry ng isang group o component, binubuksan ng ModelCraft ang bahaging iyon bilang mesh na nananatili ang pagbabago, at sinasabi nito kung ilang bahagi ang nabasa nang ganoon. Ang placement na nailipat o nabura sa ibang program ay nananatiling nailipat o nabura.
:::

## Buksan o i-import ang USD ng iba

- {{ui:Open}} ng file na `.usd`, `.usda`, `.usdc` o `.usdz` para magsimula ng model mula rito.
- {{ui:Import}} nito para idagdag sa bukas na model. I-drop kasama nito ang mga file na tinutukoy nito (ibang layer, texture).

Ang mga mesh ay pumapasok kasama ang kanilang normal, UV coordinate at kulay; ang shared na geometry ay pumapasok bilang component, ang mga materyal bilang kulay ng pintura, ang mga lamp bilang lamp, at ang mga camera bilang scene, sa metro at nakataas ang Z anuman ang unit ng file at ang up axis nito.

## Hindi pa sinusuportahan

Hindi pa nababasa o naisusulat bilang USD ang animation, skeleton at MaterialX node graph. Ang sariling animation at node material ng ModelCraft ay napapanatili sa USD file na na-save nito, para mabuksan muli ng ModelCraft, pero hindi nakikita ng ibang program ang mga ito. Ang mga layer na tinutukoy ng isang file na hindi kayang basahin ng ModelCraft (halimbawa, isang MaterialX document) ay iniiwan na may tala.
