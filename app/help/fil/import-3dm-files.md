---
title: I-import ang .3dm model
summary: I-import ang .3dm file kasama ang mga mesh, surface, curve, block, layer at kulay nito; saan galing ang mga triangle, at ano ang naiiwan.
keywords: 3dm, import, nurbs, polysurface, brep, surfaces, render mesh, extrusion, curves, blocks, layers, tags, colors, units, switching, migrate
from: 3cf29879
---

Binabasa ng ModelCraft ang mga `.3dm` file gamit ang sarili nitong reader, sa loob ng pahina. Walang ina-upload, at gumagana ito offline sa tuwing gumagana ang ModelCraft. Nasubukan na ang mga file na na-save sa layout ng bersyon 5, 6, 7 at 8; dapat ding mabuksan ang mas lumang bersyon (2 hanggang 4), pero hindi pa nasusubukan.

## I-import ang file

1. I-click ang {{ui:Import}} sa pangkat na {{ui:File}} (o i-drop ang `.3dm` file sa 3D view).
2. Piliin ang file.

   Sinasabi ng status bar ang "Binabasa ang chair.3dm…" habang binabasa, pagkatapos kung ano ang pumasok, halimbawa "Na-import ang chair.3dm: 14 meshes (8330 faces), 8 curves, 5 block placements, 3 layers bilang tags. Surfaces: 7 faces mula sa mga mesh na naka-save sa file, 29 na na-tessellate ng CadCraft."

Ang buong model ay dumarating bilang iisang group na ipinangalan sa file, napili, at nagzu-zoom ang view dito. Isang {{key:Mod+Z}} lang ang magtatanggal ulit ng lahat, kasama ang mga tag.

## Saan galing ang mga triangle

Ang ModelCraft ay nagmo-model gamit ang mga face at mesh, kaya bawat surface sa file ay pumapasok bilang [mesh](topic:meshes) ng maliliit na patag na triangle. Para sa bawat face ng polysurface (at bawat extrusion), kinukuha ng ModelCraft, sa ganitong pagkakasunod:

1. **Ang render mesh na naka-save sa file.** Karamihan sa mga modeling program ay nagse-save ng mesh na ipinakita nila sa screen kasama ng bawat surface; kapag naroon ito, ginagamit ito ng ModelCraft kung paano ito.
2. **Sarili nitong tessellation**, kapag walang naka-save na mesh sa file: mga plane, NURBS surface, surface of revolution (sphere, cone, torus, lathe shapes), extruded curves at extrusion (kasama ang mga butas at dulong takip nila), na pinuputol ayon sa kanilang mga gilid. Nagbabahagi ng mga punto sa gilid ang mga face ng iisang polysurface, kaya ang saradong polysurface ay pumapasok bilang saradong mesh. Hinahati ang mga kurbadong bahagi hanggang ang mga triangle ay nasa loob ng humigit-kumulang 0.15 % ng laki ng bagay mula sa totoong surface.
3. **Wala**, para sa face na nasa uri ng surface na hindi pa nababasa ng ModelCraft. Sinasabi ng status bar kung ilang face at anong uri ang mga ito.

Sinasabi ng bahaging "Surfaces:" ng status bar kung ilang face ang galing sa naka-save na mesh at ilan ang na-tessellate ng ModelCraft. Malambot ang mga gilid sa loob ng isang face ng file at matutulis ang mga gilid sa pagitan ng dalawang face, kaya nagiging makinis ang shading ng kurbadong face.

:::tip
Para sa pinakatapat na hugis, i-save ang file kasama ang mga render mesh nito sa program na gumawa nito (karaniwang default iyon; may opsyong "save small" na nag-aalis sa mga ito).
:::

## Ano ang pumapasok

- **Mesh** kasama ang kanilang vertex color at texture coordinate.
- **Polysurface, surface at extrusion**, gaya ng inilarawan sa itaas.
- **Curve** (linya, polyline, arko, bilog, NURBS curve at mga curve na pinagdugtong mula sa mga ito) bilang [gilid](topic:curves), isang group ng mga gilid bawat layer.
- **Block** ay nagiging [component](topic:groups-components): bawat placement ng block ay placement ng iisang component, kaya kapag in-edit ang isang kopya, nagbabago silang lahat. Pinananatili ang mga block sa loob ng block.
- **Layer** ay nagiging [tag](topic:tags) na may buong pangalan ng layer ("Furniture::Chairs"), nakatago kapag naka-off ang layer. Dala ng placement ng bawat bagay ang tag ng layer nito.
- **Kulay.** Ang kulay ng bagay ay galing sa kung saan ito sinasabi ng file: sarili nitong kulay, kulay ng layer nito, o base color ng materyal nito. Nagiging pintura ito ng mga face nito.
- **Ang mga nakatagong bagay ay pumapasok na nakatago**; ipinapakita ito ng {{ui:Unhide all}}.
- **Units:** sinasabi ng file ang unit nito; pumapasok ang model sa totoong laki nito.

## Ano ang naiiwan (at sinasabi)

Pinangalanan ng bahaging "Notes:" ng status bar ang lahat ng hindi pumasok, kasama ang bilang:

- mga punto at point cloud, teksto, text dot, dimension, leader, hatch, ilaw, clipping plane at detalye ng layout;
- SubD object: gawing mesh o polysurface muna sa program na gumawa ng file;
- mga face sa offset surface at iba pang uri ng surface na hindi pa nababasa ng ModelCraft, kapag walang mesh na naka-save para sa mga ito;
- mga block na naka-link mula sa ibang file (ang file lang na ini-import mo ang binabasa);
- mga extrusion na may hiwa-hiwang (mitered) dulo ay pumapasok na may tuwid na dulo.

Hindi nababasa ang mga texture ng materyal, render setting, named view, group at user text; base color lang ang ibinibigay ng materyal.

## Mga limitasyon

Hanggang 300 MB ang mga file. Sinasabi ng sirang file kung ano ang mali at walang idinadagdag; ang bagay na hindi mabasa ay iniiwan at binibilang, at papasok ang iba.
