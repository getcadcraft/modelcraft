---
title: I-import ang SKP model
summary: I-import ang .skp file kasama ang mga group, component, kulay, texture, tag at soft edge nito, tingnan kung ano ang pumasok at ano ang hindi, at magpatuloy sa pagmo-model.
keywords: skp, import, buksan ang skp, components, groups, tags, layers, materials, colors, textures, nakatago, soft edges, 3d warehouse, migrate, switching
from: 325d3c81
---

Binabasa ng ModelCraft ang mga SketchUp file (`.skp`) gamit ang sarili nitong reader, sa loob ng pahina. Walang ina-upload, at gumagana ito offline sa tuwing gumagana ang ModelCraft. Nasubukan na ang mga file mula SketchUp 3 hanggang 2026.

## I-import ang file

1. I-click ang {{ui:Import}} sa pangkat na {{ui:File}} (o i-drop ang `.skp` file sa 3D view).
2. Piliin ang file.

   Sinasabi ng status bar ang "Binabasa ang house.skp…" habang binabasa, pagkatapos kung ano ang pumasok, halimbawa "Na-import ang house.skp (SketchUp 25.0.575): 1240 faces, 6 components, nasa isang group."

Ang buong model ay dumarating bilang iisang group na ipinangalan sa file, napili, at nagzu-zoom ang view dito. Isang {{key:Mod+Z}} lang ang magtatanggal ulit ng lahat, kasama ang mga tag.

:::tip
I-explode ang import group ({{ui:Entity info}} › {{ui:Explode}}) kapag gusto mong maluwag ang laman nito sa model mo sa halip na nasa iisang group.
:::

## Ano ang pumapasok

- **Mga face** kasama ang kanilang mga butas, at **mga gilid** na hindi bahagi ng face.
- **Group** ay pumapasok bilang group, at **component** bilang component: bawat kopya ng component ay placement ng iisang definition, kaya kapag in-edit ang isang kopya, nagbabago silang lahat, gaya sa SketchUp. Kasama ang mga pangalan.
- **Kulay.** Ang sariling materyal ng face ang nagbibigay ng kulay nito. Ang materyal na pininturahan sa group o component ay nagiging pintura ng placement na iyon, kaya ang mga face sa loob nito na walang sariling kulay ay kumukuha nito, gaya sa SketchUp. Ang component na pininturahan ng pula sa isang lugar at asul sa iba ay nananatiling iisang component.
- **Texture.** Ang face na pininturahan ng materyal na may texture ay pumapasok kasama ang texture nito, nakalatag sa face gaya ng nasa file, at ipinapakita ito ng istilong {{ui:Shaded}}. Naka-save ang larawan sa ModelCraft file kapag nag-save ka, at ipinapakita rin ito ng [rendered picture](topic:render). Ang textured na materyal na pininturahan sa buong group o component ay nagbibigay lang sa kopyang iyon ng kulay ng materyal.
- **Tag.** Ang group o component na nasa SketchUp tag ay nakakakuha ng ModelCraft tag na may parehong pangalan, nakalista sa {{ui:Tags}}, at nakikita o nakatago gaya ng nasa SketchUp. Kung may tag na ang model mo na may ganoong pangalan, ang tag na iyon ang gagamitin.
- **Ang mga nakatagong bagay ay pumapasok na nakatago:** mga face, gilid, group at component, at mga face at gilid sa nakatagong tag. Nakikita mo ang ipinakita ng SketchUp, at walang nawawala: ipinapakita ng {{ui:Edit}} › {{ui:More}} › {{ui:Unhide all}} ang mga ito. Tingnan ang [Hide, isolate and unhide](topic:hide-isolate).
- **Soft at smooth na gilid** ay nananatiling soft, kaya mukhang makinis pa rin ang mga kurbadong surface.
- **Tamang laki** sa anumang unit: nasa inches sa loob ang mga SketchUp file, at kino-convert ito ng ModelCraft.

## Ano ang hindi pumapasok

Sinasabi ng status bar kung ano ang naiwan, kasama ang bilang.

- **Ilang texture** ay nagpapanatili lang ng kulay ng materyal nila: texture na wala sa file, larawang nasa format na hindi maipakita ng browser (gaya ng Photoshop file), o texture na walang sukat. Ang mga face na may projected texture ay pumapasok na may texture na tinatayang nakalagay.
- **Tag sa maluwag na face at gilid.** Group at component lang ang tina-tag ng ModelCraft, kaya ang face o gilid na may sariling tag ay pumapasok na walang tag, at binibilang ito ng status bar. Gawing group ang ganoong face ({{key:Shift+G}}) at i-tag ang group.
- **Mga larawang nakalagay sa model**, teksto, dimension, guide, section plane, scene at style.

## Mga problema

- "This is not a SketchUp file." o "This SketchUp file is damaged: …": putol ang file o ibang bagay na may pangalang `.skp`. I-save ulit ito mula sa SketchUp, o humingi ng bagong kopya.
- Tinatanggihan ang file mula sa SketchUp na mas bago kaysa sa alam ng ModelCraft, kasama ang bersyong nakita nito.
- Ang model na puro larawan, teksto o dimension ay nagsasabing wala itong maipapakita.

## Ibalik ang model

Hindi makapag-save ang ModelCraft ng `.skp` file. I-export ang Collada ({{ui:Export}} › `.dae`) at i-import iyon sa SketchUp: dadaan ang mga group, component at kulay; ang mga texture ay magiging kulay ng materyal nila. Tingnan ang [Export your model](topic:export-model).
