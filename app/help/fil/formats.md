---
title: "Mga format ng file nang detalyado"
summary: "Eksaktong kung ano ang pinananatili, kinokonberte at iniiwan ng bawat format na binubuksan, ini-import at ine-export ng ModelCraft."
keywords: "mga format, uri ng file, modelcraft, json, 3dm, nurbs, skp, collada, dae, obj, mtl, gltf, glb, stl, step, stp, ap214, ap242, ply, alembic, abc, cache, fbx, 3mf, ifc, dwg, dxf, mga unit, mga axis, y up, z up, millimeters, mga limit"
from: c47d2d28
---

Nasa meters ang model ng ModelCraft na may Z (blue) pataas. Ang bawat format sa ibaba ay kino-convert mula o papunta roon.

## ModelCraft (.modelcraft)

| Ano | Detalye |
|---|---|
| Buksan | {{ui:Buksan}} ({{key:Mod+O}}) o i-drop sa view. Tinatanggap din ang mga file na nagtatapos sa `.json` |
| I-save | {{ui:I-save}} ({{key:Mod+S}}), bilang download |
| Pinananatili | Lahat: geometry, mga face at kanilang kulay, materyal at na-import na texture, mga lamp, malambot na edge, grupo, component, pangalan, guide, scene, mga unit, at huling camera at style |
| Iniiwan | Ang kasaysayan ng undo |
| Limitasyon | 200 MB |

Tinatanggihan ang file na na-save ng mas bagong ModelCraft kaysa sa iyo: "Na-save ang model na ito ng mas bagong ModelCraft (file version …). I-update ang ModelCraft para mabuksan ito." Ang file na hindi model ng ModelCraft ay nagsasabing "Hindi ito model ng ModelCraft (hindi ito JSON)." o "Hindi ito file ng ModelCraft na mabubuksan namin: …".

## USD (.usd, .usda, .usdc, .usdz)

Buksan, i-import, at {{ui:I-save bilang}} o {{ui:I-export}} › {{ui:USD (.usda, .usdc, .usdz)…}}. Muling nagbubukas nang walang nawawala ang USD file na na-save ng ModelCraft; ang USD file ng ibang program ay nagbubukas bilang mesh, grupo, component, lamp at camera. Tingnan ang [I-save, buksan at i-export ang USD](topic:usd).

## Collada (.dae)

Import at export. Ang pinakamahusay na format para sa pagpapalitan ng model sa ibang 3D modeler.

- **Export:** Collada 1.4.1, Z up, meters. Isang geometry bawat definisyon ng grupo o component; isinusulat nang isang beses ang mga component at inilalagay sa pamamagitan ng reference, kaya nananatili silang shared. Ang mga face na may butas o malukong na balangkas ay hinahati sa triangle. Nagiging materyal ang mga kulay. Isinusulat bilang linya ang maluwag na edge. Ang mga pangalang hindi wasto sa format ay inaayos, at nananatili ang eksaktong pangalan sa tabi nito.
- **Import:** nagiging face ang mga triangle, polygon (may butas), triangle fan at strip; nagiging edge ang mga linya. Ina-apply ang node transform, up axis at unit ng file. Ang node na nakalagay sa maraming lugar, o geometry na ginagamit ng maraming node, ay papasok bilang component; ang iba pang node ay papasok bilang grupo. Nagiging kulay ng face ang mga kulay ng materyal (diffuse).
- **Hindi ini-import:** mga texture, skin at morph, camera, ilaw, ilang uri ng transform (look-at at skew), at mga reference sa ibang file. Binibilang ito ng status bar.
- **Nawawala sa export:** kung aling mga edge ang malambot. **Sa import,** nananatiling triangle ang mga surface na na-triangulate, na may malambot na dayagonal para magmukhang isang surface pa rin ang mga patag na lugar.

## OBJ (.obj, .mtl)

Import at export.

- **Import:** i-drop ang `.obj` kasama ang `.mtl` at mga larawan ng texture nito (o i-import ang `.obj` lang: papasok ito nang walang materyal, at pinapangalanan ng status bar ang `.mtl` na hinahanap nito). Binabasa bilang meters na may Y up. Ang bawat object (`o`, kung wala ay `g`) ay nagiging [mesh](topic:meshes), at nananatili ang mga face nito gaya ng mga ito (nananatiling quad ang mga quad). Pinananatili ang texture coordinate, normal at per-vertex na kulay. Ang larawan ng kulay ng materyal (`map_Kd`, PNG, JPEG o WebP) ay papasok bilang texture, kasama ang mga opsyon sa scale at offset nito; kung hindi, ang kulay nito (`Kd`). Matigas ang mga edge kung saan sumisira ang mga normal ng file; kapag walang normal, ang mga smoothing group ng file ang nagpapasya. Ang ibang map (bump, normal), mga punto, linya at curve ay binibilang at iniiwan. Walang unit ang OBJ, kaya ang model na ginawa sa millimeters o inches ay darating sa maling laki: i-scale ito pagkatapos ng import (tingnan ang [Rotate at scale](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)).
- **Export:** meters, Y up, world coordinates. Isang object bawat paglalagay ng grupo; buong isinusulat ang mga component sa bawat paglalagay. Pinananatili ng mga mesh ang sarili nilang face, texture coordinate at normal; ang mga face na pinagdugtong ng [malambot na edge](topic:soften) ay nakakakuha ng normal bawat corner. Kapag may kulay ang model, dina-download ang isang `.mtl` sa tabi ng `.obj`. Kapag may na-import na texture ito, dina-download nang sabay ang `.obj`, `.mtl` at mga larawan bilang isang `.zip`.
- **Limitasyon:** 2 milyong vertex o face; 64 MB ng teksto.

## glTF (.glb, .gltf)

Import at export, glTF 2.0.

- **Import:** isang `.glb`, o isang `.gltf` kasama ang `.bin` at mga texture file nito: i-drop ang mga ito sa view nang sabay-sabay (o piliin ang `.glb`). Ang `.gltf` na mag-isa ay nagsasabi kung aling file ang kailangan nito: "Kailangan ng file na .gltf na ito ang "…": buksan ang bersyong .glb, o i-drop ang .gltf kasama ang mga file nito."
  - **Mesh** ay papasok bilang [mga mesh](topic:meshes), isa bawat mesh sa file, at pinananatili rito ang normal, texture coordinate at kulay ng vertex ng file. Matigas ang mga edge kung saan sumisira ang mga normal ng file; malambot ang iba. Ang mesh na ginamit sa maraming lugar ay nananatiling shared.
  - **Nodes** ay nagiging grupo, pinangalanan ayon sa nasa file. Ang instanced mesh (EXT_mesh_gpu_instancing) ay papasok bilang isang mesh na maraming beses na nakalagay.
  - **Materyal:** ang base color texture (PNG, JPEG o WebP) ay papasok bilang texture, nakalagay ayon sa texture coordinate ng file (kasama ang anumang texture transform), at pinananatili kapag nag-save ka; kung hindi, ang base color. Ang metal, roughness, normal map, salamin, clear coat, sheen at iba pang extension ng materyal ay nababasa pero hindi pa napapanatili: sinasabi ito ng status bar.
  - **Mga ilaw** (KHR_lights_punctual): ang point at spot light ay nagiging [mga lamp](topic:lights). Binibilang ang directional light: ang araw ang nagbibigay-liwanag sa model.
  - **Mga camera** ay nagiging [mga scene](topic:scenes).
  - **Mga skinned na character** ay papasok na nakatayo ayon sa pagkakapahinga nila sa file; ang kanilang buto at animation, at morph target, ay binibilang at hindi pa napapanatili.
  - **Mga naka-compress na file** (Draco, meshopt) at quantized na data ay nababasa. Naglo-load lang ang mga decoder para sa file na nangangailangan nito.
  - Binibilang at iniiwan ang mga punto at linya (ang mesh ay may hawak na face). Iniiwan ang mga KTX2 texture; pinananatili ng mga face ang kulay nila.
- **Export** (`.glb`): glTF 2.0 binary, meters, Y up. Isang mesh bawat definisyon, kaya nananatiling shared ang mga component. Pinananatili ng mga mesh ang normal, texture coordinate at kulay ng vertex nila; ang mga face na pinagdugtong ng [malambot na edge](topic:soften) ay may makinis na normal. Nagiging materyal ang mga kulay at materyal (ang materyal bilang kulay nito); isinusulat bilang texture ang mga na-import na texture. Ang mga lamp na naka-on ay nagiging point at spot light (walang katumbas sa glTF ang area lamp at iniiwan ito); nagiging camera ang mga scene. Iniiwan ang maluwag na edge.
- **Limitasyon:** hanggang 300 MB ang mga file; mga 130 milyong numero ng geometry.

## STL (.stl)

Import at export.

- **Import:** binary o ASCII. Walang unit ang STL: binabasa ito bilang **millimeters**, gaya ng pagsulat ng mga printer at ng sariling export ng ModelCraft. Pinagdudugtong ang mga corner sa iisang punto, kaya ang sarado na bahagi ay papasok bilang sarado na [mesh](topic:meshes). Ang mga kulay sa file (ang VisCAM / SolidView at ang Materialise na convention) ay nagpipinta sa mga face.
- **Export,** para sa 3D printing: binary STL, **millimeters**, Z up. Triangle lang: iniiwan ang mga grupo at maluwag na edge. Dinadala ng mga pininturahang face ang kulay nila sa VisCAM / SolidView na convention, na hindi pinapansin ng ibang program kung hindi nila ito nababasa. I-export ang mga sarado na solid para sa malinis na pag-print.

## STEP (.step, .stp)

Import lang. Ang STEP ang ipinapadala ng mga part modeler at supplier: mga AP203, AP214 at AP242 na file.

- **Import:** binabasa mismo ng ModelCraft ang file sa pahina, at ginagawang sarado na [mesh](topic:meshes) ng triangle ang bawat solid: nananatiling patag ang mga patag na face, ang mga kurbadong face (silindro, kono, sphere, torus, B-spline surface) ay nagiging maraming maliliit na patag na face, na may malambot na edge sa loob ng isang kurbadong face at matutulis na edge sa pagitan ng dalawang face. Sinasabi ng mga STEP file ang kanilang unit; papasok ang model sa totoong laki nito. Papasok ang assembly na may bawat bahagi sa lugar kung saan ito inilagay ng file, bawat bahagi ay sariling mesh sa grupong pinangalanan ayon sa file. Hindi binabasa ang mga kulay, pangalan ng bahagi ng assembly tree, at tolerance (PMI).
- **Mga mensahe:** idinadagdag sa status line ang nilaktawan o mas magaspang na iginuhit ("Mga tala: …"); ang file na walang solid, sirang file, o lampas sa limitasyon ay nagsasabi kung bakit at walang idinadagdag.
- **Limitasyon:** hanggang 300 MB ang mga file; 400 000 face at 8 milyong triangle.

## .3dm

Import lang. Ang mga `.3dm` file ay naglalaman ng NURBS model: polysurface, surface, mesh, curve at block.

- **Import:** binabasa mismo ng ModelCraft ang file sa pahina. Pumapasok ang mga mesh gaya ng mga ito; ang bawat face ng polysurface o extrusion ay galing sa render mesh na naka-save sa file, kung wala, ita-tessellate ito ng ModelCraft (mga eroplano, NURBS surface, surface of revolution, extruded curve, extrusion; pinuputol ng mga gilid nito, ang sarado na polysurface bilang sarado na mesh). Nagiging edge ang mga curve, nagiging component ang mga block (pinananatili ang block sa loob ng block), nagiging tag ang mga layer (nakatago kapag naka-off), at ang kulay ng object (sarili nito, ng layer nito, o ng materyal nito) ang nagpipinta sa mga face nito. Sinasabi ng file ang unit nito; papasok ang model sa totoong laki nito. Hakbang-hakbang: [Mag-import ng .3dm model](topic:import-3dm-files).
- **Mga mensahe:** sinasabi ng status line kung ilang face ang galing sa naka-save na mesh at ilan ang na-tessellate, at pinapangalanan ang iniwan: mga punto, point cloud, teksto, dimension, hatch, ilaw, SubD object, mga face sa uri ng surface na hindi pa nababasa, mga naka-link na block.
- **Limitasyon:** hanggang 300 MB ang mga file.

## PLY (.ply)

Import at export, para sa mga mesh na may kulay (scan, 3D printing na may kulay, ibang modeler).

- **Import:** ASCII at binary. Nagiging [mesh](topic:meshes) ang mga face na may normal, texture coordinate at kulay ng vertex na pinananatili; ang bawat face ay pinipinturahan ng pinakamalapit sa 4,096 na kulay para makita mo na ang mga kulay ngayon. Walang unit o axis convention ang PLY: papasok ang mga coordinate gaya ng mga ito (meters, Z up). Ang PLY na may mga punto lang ay point cloud: buksan ito sa BimCraft o CivilCraft.
- **Export:** binary PLY na may posisyon, normal at kulay (at texture coordinate kapag mayroon ang model), sa meters, Z up.

## FBX (.fbx)

Import lang. Mga FBX 7 file (mula 2011 pataas), binary o ASCII, na binabasa ng sariling reader ng ModelCraft.

- Pumapasok ang mga mesh bilang [mga mesh](topic:meshes) na may normal, texture coordinate (bawat UV set) at kulay ng vertex; nananatiling shared ang mesh na ginagamit ng ilang object. Nagiging grupo ang mga object kasama ang kanilang transform (kasama ang mga pivot, offset at pre-rotation).
- Materyal: ang diffuse texture (nakabaon sa file, o larawang i-drop kasama ng `.fbx`) ay papasok bilang texture (ang TGA na larawan ay pinananatili bilang PNG); kung hindi, ang diffuse na kulay. Naghihintay ang iba pang setting ng materyal sa bagong material model.
- Ina-apply ang up axis at unit ng file: lahat ay papasok na Z up, sa meters.
- Ang point at spot light ay nagiging [mga lamp](topic:lights) (ang intensity na 100 sa FBX ay ang default na lamp ng ModelCraft, 800 lumens: walang unit ang intensity sa FBX). Ang mga camera ay nagiging [mga scene](topic:scenes).
- Ang mga skinned na character ay papasok sa pagkakapahinga; binibilang ang mga buto at animation at hindi pa napapanatili. Binibilang at iniiwan ang directional at area light, at ang geometry na hindi mesh (NURBS, curve).
- Tinatanggihan ang mga FBX 6 at mas luma na file: i-save ulit ang mga ito bilang FBX 2011 o mas bago.

## Alembic (.abc)

Import lang: mga geometry cache mula sa animation at effects program.

- Pumapasok ang mga mesh (polygon at subdivision mesh) bilang [mga mesh](topic:meshes), kasama ang kanilang texture coordinate at normal; nagiging grupo ang mga transform. Ang Alembic ay Y up at ginagawang Z up; meters.
- Ang cache na may maraming sample (animation) ay papasok sa unang sample nito; sinasabi ng status bar kung ilan ang mayroon ito.
- Binibilang at iniiwan ang mga punto, curve, NURBS surface, camera at ilaw. Tinatanggihan ang mga file sa lumang HDF5 layout: i-save ulit ang mga ito bilang Ogawa Alembic file.

{{ui:Suriin para sa 3D printing (STL o 3MF)…}} ay muna sinusuri ang hugis at isinusulat ang napili, o ang lahat ng nakikita. Tingnan ang [Ihanda ang model para sa 3D printing](topic:print-3d).

## 3MF (.3mf)

Export lang, mula sa {{ui:Suriin para sa 3D printing (STL o 3MF)…}}. 3MF core: isang mesh sa **millimeters**, Z up, na may kulay bilang materyal. Karamihan sa slicer ang nagbabasa nito, at hindi tulad ng STL, sinasabi nito ang unit nito. Iniiwan ang mga nakatagong bagay. Tingnan ang [Ihanda ang model para sa 3D printing](topic:print-3d).

## DWG at DXF export (.dwg, .dxf)

Para sa mga CAD program. Isinusulat ang model sa sarili nitong unit: inches para sa mga model sa feet at inches, kung hindi, millimeters, centimeters o meters (pinapangalanan ito ng status bar).

- **Mga face** ay nagiging 3D face (triangle). Ang mga linyang nasa loob ng face, at malambot na edge, ay isinusulat na hindi nakikita, kaya magmumukha ang mga face gaya ng sa ModelCraft.
- **Mga maluwag na edge** ay nagiging linya.
- **Mga grupo at component** ay nagiging block: isinusulat nang isang beses ang component at inilalagay nang kasing dalas ng paggamit nito, kasama ang mga na-ikot at na-mirror na kopya. Ang grupong na-unat pagkatapos ikutan (kaya nakahilis) ay isinusulat sa mismong lugar nito.
- **Mga kulay:** eksaktong pinananatili ng DWG ang kulay ng bawat face; ginagamit ng DXF ang pinakamalapit sa 255 standard na CAD color.
- **Mga bersyon:** isinusulat ang DWG bilang AutoCAD 2004 (AC1018), na nabubuksan ng mga CAD program mula 2004 pataas. Ang DXF ay R12 (AC1009), ang bersyong binabasa ng bawat CAD program; walang unit field ang R12, kaya sabihin sa CAD program kung aling unit ang gagamitin.
- **Hindi isinusulat:** guide, dimension, scene, at camera.

## IFC (.ifc)

Export lang, para sa BimCraft at iba pang BIM program. IFC4 na may project, site, gusali at mga palapag nito. Ang bawat pinakamataas na grupo o component ay nagiging isang building element proxy na may pangalan nito; ang sarado ay isinusulat bilang solid shape (faceted brep), ang bukas bilang surface model; pinananatili ang mga butas sa face. Ang maluwag na geometry sa pinakamataas na antas ay nagiging isang element na tinatawag na "Loose geometry". Walang type, property o materyal.

**Mga palapag:** nililista ng {{ui:I-export}} › {{ui:IFC storeys…}} ang mga ito, bawat isa may pangalan at elevation ({{ui:Magdagdag ng storey}}, o {{ui:Hulaan mula sa model}}, na gumagawa ng isang palapag para sa bawat taas kung saan nakatayo ang iyong pinakamataas na grupo). Sa export, ang bawat grupo o component ay napupunta sa palapag na nasa o nasa ibaba ng pinakamababa nitong punto, at nananatili ang puwesto nito. Kapag walang palapag, lahat ay napupunta sa iisang palapag, "Level 1", sa 0. Naka-save ang mga palapag sa ModelCraft file.

## DWG (.dwg) at DXF (.dxf)

I-import bilang linya sa lupa (ang hatch at 3D face bilang face); i-export gaya ng inilarawan sa itaas. Tingnan ang [Mag-model sa site plan](topic:site-plan).

- **Binabasa:** mga linya, polyline (may arko), 3D polyline, bilog, arko, at block reference kasama ang array, mula sa model space. Iniiwan ang mga hindi nakikitang object (gaya ng mga nakatagong estado ng dynamic block). Nagiging 48 na tuwid na piraso bawat buong ikot ang mga curve.
- **Binabasa mula 0.4:** spline at ellipse (bilang edge), teksto, multiline text at attribute value (bilang edge sa single-stroke lettering), hatch (face na may butas), 3D face at solid fill (face), at dimension (iginuhit mula sa sariling dimension block ng drawing).
- **Binabasa mula 0.7:** 3D solid, region at body (ang kanilang ACIS data, DWG at DXF ng bawat bersyon), bawat isa ay sariling grupo; ang sarado ay nagiging solid. Ang mga face sa surface maliban sa eroplano, silindro, kono, sphere, torus at simpleng spline surface ay iniiwan at nakalista.
- **Hindi binabasa:** mga punto, table, multileader, larawan, at anumang nasa paper space.
- **Mga unit:** kinukuha mula sa drawing kapag sinasabi nito. Kung hindi, nagtatanong ang ModelCraft.
- **Dapat ASCII ang DXF.** Tinatanggihan ang binary DXF.
- **DWG** na mula AutoCAD R13 hanggang sa kasalukuyang format (AutoCAD 2018 pataas; AC1012 hanggang AC1032) ay binabasa ng sariling DWG reader ng ModelCraft, sa pahina; bahagi ito ng ModelCraft, kaya gumagana ito offline kailan man gumagana ang ModelCraft. Hindi mababasa ang mas lumang bersyon (R12 at mas luma) at ang malubhang sirang file; i-save ang mga ito bilang DXF.
- **Limitasyon:** tinatanggihan ang mga coordinate na mahigit 10,000 km mula sa origin, o mahigit 2 milyong piraso ng linya.

## Mga file ng SKP

{{ui:Import}} (o i-drop ang file sa view) ay bumabasa ng mga SketchUp file gamit ang sariling reader ng ModelCraft, sa pahina: walang ina-upload, at gumagana ito offline kailan man gumagana ang ModelCraft. Nasubukan sa mga file mula SketchUp 3, 6, 7, 2014, 2017, 2018, 2020, 2025 at 2026; dapat din bumukas ang ibang bersyon, pero hindi pa nasusubukan. Papasok ang model bilang isang grupong pinangalanan ayon sa file. Isang {{key:Mod+Z}} lang ang nag-aalis nito muli. Hakbang-hakbang: [Mag-import ng SKP model](topic:import-sketchup-files).

- **Pinananatili:** mga face kasama ang kanilang butas, grupo (bilang grupo) at component (bilang component, shared), ang kanilang pangalan at puwesto, kulay, tag sa grupo at component, mga edge na hindi bahagi ng face, at malambot at makinis na edge, para manatiling makinis ang mga kurbadong surface.
- **Mga kulay:** ang sariling materyal ng face ang nagbibigay ng kulay nito. Ang materyal na ipininta sa grupo o component ay nagiging pintura ng paglalagay na iyon, kaya ang mga face sa loob na walang sariling kulay ay kinukuha ito, gaya sa SketchUp; ang component na may dalawang kulay ay nananatiling isang component.
- **Mga tag** sa grupo at component ay nagiging tag ng ModelCraft, nakikita o nakatago gaya ng dati. Hindi pinananatili ang mga tag sa maluwag na face at edge (ang ModelCraft ay nagta-tag lang ng grupo at component); binibilang ito ng status bar.
- **Papasok na nakatago ang mga nakatagong bagay** (mga face, edge, grupo, component, at mga face at edge sa nakatagong tag), kaya makikita mo ang ipinakita ng SketchUp; ipinapakita ng {{ui:Ipakita lahat}} ang mga ito.
- **Mga texture:** pinananatili ng face na ipininta ng materyal na may texture ang texture nito, nakalagay gaya ng nasa file, at pinananatili ng ModelCraft file ang larawan. Ang texture sa buong grupo o component, texture na nawawala sa file, o larawang hindi maipakita ng browser (gaya ng file ng Photoshop) ay pinananatili lang ang kulay ng materyal nito.
- **Iniiwan, at binibilang sa status bar:** mga larawang nakalagay sa model. Hindi binabasa ang teksto, dimension, guide, section plane, scene at style.
- **Mga unit:** nasa inches sa loob ang mga SketchUp file; kino-convert ng ModelCraft ang mga ito, kaya tama ang lumalabas na laki sa anumang unit.
- **Hindi pa naitatayo ang pag-save ng `.skp`.** Para maibalik ang model sa SketchUp, i-export ang Collada (`.dae`).

## Hindi suportado

Hindi mabubuksan ng ModelCraft ang 3DS o IFC na file, at hindi nito mai-save ang 3DS, FBX, STEP, `.3dm` o SketchUp (`.skp`) na file.
