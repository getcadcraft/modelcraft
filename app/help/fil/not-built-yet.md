---
title: Hindi pa nagagawa
summary: Ang mga hindi pa kayang gawin ng build na ito ng ModelCraft, at ang dapat mong gawin sa halip ngayon.
keywords: missing, not yet, limitations, roadmap, materials, textures, text, layers, trim, split, cloud, desktop
from: 179fa5e4
---

Ang ModelCraft ay maagang build. Nakalista sa pahinang ito ang mga hindi pa nito kayang gawin, para hindi mo na hanapin ang mga ito, at ang pinakamalapit na paraan para magawa ang trabaho ngayon.

## Mga drawing tool

| Hindi pa | Sa halip, ngayon |
|---|---|
| Freehand drawing | I-click ang mga punto gamit ang {{ui:Curve}} |
| Pagpapalit ng bilang ng segment ng arc o circle pagkatapos itong iguhit | Burahin ito at iguhit muli pagkatapos i-type ang `24s` |
| Pagpili ng typeface para sa [3D text](topic:text3d), o pag-edit ng mga salita nito pagkatapos ilagay | Burahin ito at idagdag muli ang text |
| Pagbabago ng anggulo sa pamamagitan ng pag-type sa angle dimension, o ng sukat ng cylinder mula sa dimension ng bilog nito | I-rotate ang mga gilid gamit ang {{ui:Rotate}}; i-scale ang cylinder gamit ang {{ui:Scale}} |
| Mga dimension sa mga na-export na model file | Lumalabas ang mga dimension sa mga larawan, print at PDF ng view; geometry lamang ang dala ng mga model file |
| Trim, Split at Outer shell | [Union, Subtract at Intersect](topic:solids) sa mga saradong group, o [intersect faces](topic:intersect) at burahin ang hindi mo kailangan |
| Pagpili ng rotation axis gamit ang arrow key | I-click ang {{ui:Rotate}} center sa face na nakaharap sa direksyong dapat ituro ng axis |
| Pag-lock sa higit sa isang inference nang sabay | I-lock ang isang direksyon gamit ang arrow key, saka mag-snap sa isang punto |
| Pag-resize sa kahabaan ng hilig na linya, o mula sa dulo ng dimension na wala sa sulok | Ilagay ang dimension sa dalawang sulok, sa kahabaan ng isang gilid, o sa pula, berde o asul na direksyon |

## Animation

| Hindi pa | Sa halip, ngayon |
|---|---|
| Pag-animate ng mga face, edge, oras ng araw ng araw, style o kung ano ang nakatago | Gawing group o component ang gumagalaw na bahagi; mag-render ng hiwalay na video para sa ibang oras ng araw |
| Camera na sumusunod sa iginuhit na landas, o tumitingin sa gumagalaw na bagay | Maglagay ng mas maraming camera key sa daan ([Animate](topic:animation)) |
| Tunog sa mga video, at mataas ang kalidad (path-traced) na mga video nang walang WebGPU | Magdagdag ng tunog sa video editor; kung walang WebGPU, i-render ang video gamit ang mabilis na renderer ([I-render ang video](topic:animation#render-the-video)) |
| Mga animated na lamp (liwanag, spread, kulay) sa na-render na video, lens angle na ina-animate nang walang camera key sa video, pag-animate ng materyal o render setting | Ina-animate ang mga lamp sa view; para sa video, i-key din ang camera para sa zoom; mag-render ng hiwalay na video para sa iba't ibang setting ng lamp ([Animate any property](topic:animate)) |
| Pag-mirror ng weight o bone mula sa isang gilid papunta sa kabila, nakikitang bone envelope, pagpapakita ng weight na naka-shade point by point (ipinapakita ang mga ito kada face), pagtingin sa posed mesh habang nagpi-paint ng weight | I-paint ang magkabilang gilid, o gumawa ng isang kalahati at gumamit ng Mirror modifier bago idagdag ang armature; lumipat sa pagitan ng Paint weights at Pose para suriin |
| Mga bone na binabasa mula sa glTF, FBX o USD file bilang armature, at mga armature na isinusulat sa mga file na iyon | Ang mga skinned model ay pumapasok sa pahinga na may weight ng file; idagdag ang mga bone sa joint order ng file, saka i-click ang {{ui:Use the file's weights}} ([Animate](topic:animate)) |
| Paglipat ng IK target o pole sa pamamagitan ng pag-drag nito sa view, pagpili ng sariling space ng constraint (local o world), pag-stretch ng IK chain, IK sa kahabaan ng curve | I-type ang punto ng target, o itutok sa isang bagay at ilipat iyon; panatilihin ang mga chain sa kanilang haba |
| Cloth, fluid, soft body, joint at hinge sa pagitan ng rigid body, collision sa eksaktong hugis ng bagay (box at bola lamang ang pumapalibot), live na simulation habang nagpe-play, paunang bilis o ikot (nagsisimula sa pahinga ang mga body) | I-bake ang rigid body at i-play ang mga key; gumawa ng hinge gamit ang key; hatiin ang kakaibang hugis sa mga box (group) |
| Pag-export ng animation sa glTF o ibang model file | Mag-render ng video; ang file na `.modelcraft`, at ang [USD file](topic:usd) na sinave ng ModelCraft, ay para lamang sa ModelCraft |
| Pag-type ng komento o pamagat sa isang issue sa VR, voice note, paglipat ng section plane sa kamay sa VR | Ilagay ang issue sa VR, saka idagdag ang mga salita nito sa BCF program; magtakda ng section plane sa view bago pumasok: tingnan ang [Suriin ang model sa VR headset](topic:vr-review) |
| Pagkita ng mga taong nasa mesa sa VR (mga taong nasa VR lamang ang lumalabas), pag-record ng VR walk | Hilingin silang sumali sa VR, o gumawa ng [animation](topic:animation) ng lakad |

## Mga mesh

| Hindi pa | Sa halip, ngayon |
|---|---|
| Sculpting ayon sa levels (multiresolution), at ang Detail na nag-aalis ng mga triangle na naging napakaliit | [Sculpt](topic:sculpt) ng subdivided mesh; {{ui:Remesh}} para muling pantayin |
| Remesh na nagiging four-sided na mga face na sumusunod sa hugis | {{ui:Remesh}} (pantay na triangle), saka muling buuin gamit ang [Retopology](topic:mesh-edit#retopology) |
| Mga weight na ipinipinta sa vertex para sa modifier (gumagana ang Displace, Smooth at Shrinkwrap sa buong mesh) | I-apply ang modifier, saka i-sculpt o i-edit ang mga bahaging kailangan nito |
| Pagkopya at pag-paste ng vertex, edge o face, knife cut na nagtatapos sa loob ng face, wire edge na walang face | I-duplicate ang mesh sa Model; knife mula sa edge papunta sa edge; [Extrude](topic:mesh-edit#change-the-shape) ang mga bukas na edge papunta sa face |

## Pag-aayos at pagtingin

| Hindi pa | Sa halip, ngayon |
|---|---|
| Layer ng DWG at DXF na site plan bilang tag | Ang site plan ay pumapasok bilang isang group: i-explode ito at i-group ang mga bahaging gusto mong i-tag |
| Ilang section cut nang sabay, section box, o outline ng section na ine-export bilang drawing | Isang [section plane](topic:sections) lang ang pumuputol sa isang pagkakataon; i-export ang view bilang larawan |
| Pagpapakita ng soft edge na may tuldok-tuldok na linya, o pagpapalambot habang nagdra-drag ng slider | [Soften by angle](topic:soften) sa Entity info, at i-undo para subukan ang ibang anggulo |
| Online na library ng mga model na mahahanap, o mga component na may pagpipiliang opsyon (kulay, style) | Ang [starter library](topic:starter); mag-import ng Collada, OBJ o glTF na model; [stretch](topic:stretch) ang kopya para sa tamang sukat |
| Paglalagay ng halaman mula sa plant library | [Scatter](topic:live-view#scatter-plants-rocks-and-people) ng mga halaman sa live view, o maglagay ng puno mula sa starter library |
| Hiwalay na kopya ng isang group | Gawin itong component, saka {{ui:Make unique}} (tingnan ang [Troubleshooting](topic:troubleshooting#editing-one-group-changed-another)) |

## Pag-render

| Hindi pa | Sa halip, ngayon |
|---|---|
| Pag-render sa view (ang {{ui:Render}} workspace), ang render queue, at ang mga opsyon ng camera, sky picture, fog at light-mixing kapag walang WebGPU | {{ui:Render a picture…}} sa {{ui:High quality}} ay gumagamit ng WebGL path tracer doon, nang walang mga opsyong iyon ([I-render ang larawan](topic:render#high-quality)) |
| Ibang programa na gumuguhit ng Render picture nang walang render-engine add-on (hindi kailanman nagpapatakbo ng programa ang CadCraft sa ilalim ng GNU GPL licence); panorama o stereo camera at sky picture sa pamamagitan ng ibang programa; ang Unreal Engine plug-in (nakasulat ang mga file, pero hindi pa inilalabas ang plug-in na magbubukas sa mga iyon) | Ang sarili naming Fast at Path tracer engine; ang engine ng isang add-on ([iguhit ang larawan gamit ang ibang programa](topic:render-other-program)); isang USD, glTF o Unreal folder file mula sa Engine list na dadalhin sa anumang programa |
| Mga nakakalat na halaman at bato sa {{ui:Render a picture…}} | Nakikita ang mga ito sa [live view](topic:live-view), sa mga panorama, viewer at video nito |

## Mga materyal at kulay

| Hindi pa | Sa halip, ngayon |
|---|---|
| Mga input maliban sa base color, roughness, metalness, opacity, normal at emission na nagbabago sa buong surface sa mga high-quality na larawan (ginagamit nila ang average) | [Gumawa ng materyal gamit ang nodes](topic:shading): i-link pa rin ang mga ito, ipapakita ng view na nagbabago ang mga ito |
| Displacement sa mga face ng push/pull | I-convert ang bagay sa mesh para sa displacement |
| Pagbabahagi ng sarili mong materyal sa Library mula sa app, at packed (ARM/ORM) o EXR na map sa na-import na texture set | Panatilihin ang mga ito sa file; i-import ang hiwalay na map bilang PNG o JPEG |
| Mga materyal ng file sa Live TeamWork session (nananatili ang mga ito sa computer na gumawa sa mga ito) | I-save ang file at ibahagi ito |
| Decal na yumuyuko sa paligid ng kurbadong surface, decal sa Undo, o pagpipinta ng texture ng maraming face nang sabay sa isang tahi | Maglagay ng mas maliliit na decal sa bawat bahagi; ipinta ang bawat gilid ng tahi nang hiwalay |
| Baking sa push/pull face, baking ng maraming bagay sa isang larawan, cage na hinuhubog nang kamay, o baked lighting mula sa lamp | I-convert sa mesh at i-unwrap; i-bake ang bawat bagay; taasan ang search distance; mag-render ng larawan para sa lamp light |
| Pagpinta ng roughness, metalness o height, pagpinta gamit ang larawan (stamp), at pagpinta ng texture na mas malaki sa 512 × 512 | I-paint ang base color dito; gumawa ng ibang map sa picture editor at i-import ang mga ito bilang texture set |
| Mga texture sa Collada, STL, PLY, 3MF, IFC, DWG at DXF export, at ang node graph ng sariling materyal ng file sa mga na-export na model | Ang mga format na ito ay nakukuha ang kulay ng bawat materyal; dala ng glTF at OBJ ang mga na-import na texture; i-export ang isang materyal nang mag-isa bilang [MaterialX](topic:shading#materialx); pinananatili ng [USD](topic:usd) ang buong model para sa ModelCraft |
| Mga texture sa Collada file | Binibilang ang mga ito at iniiwan sa pag-import; pumapasok ang mga texture sa mga file na `.skp` at `.glb` |

## Mga file

| Hindi pa | Sa halip, ngayon |
|---|---|
| Pag-save ng SketchUp file, at ang text at dimension mula rito | Pinapanatili ng [Import](topic:import-sketchup-files) ang mga face, kulay at texture; i-export ang Collada (`.dae`) para bumalik sa SketchUp |
| Dimension at guide sa DWG at DXF export | Idagdag ang mga ito sa CAD program pagkatapos mag-export |
| Point, table at multileader mula sa DWG at DXF | Binibilang ang mga ito at iniiwan; ang text ay pumapasok bilang single-stroke lettering, hindi sa font ng drawing |
| Surface, mesh, table at multileader mula sa DWG at DXF; mga face ng 3D solid sa swept, lofted o iba pang freeform surface | Binibilang din ang mga ito at iniiwan (ang mismong 3D solid ay pumapasok). I-export ang mga bahaging iyon mula sa CAD program bilang OBJ o Collada at i-import iyon |
| IFC type, property o materyal | Ang IFC export ay may [storey](topic:formats#ifc-ifc) at generic element; idagdag ang iba sa BIM program |
| Direktang pagpapadala ng model sa BimCraft | I-export ang {{ui:IFC for BimCraft (.ifc)}} at buksan ito sa BimCraft |
| Maluwag na edge sa glTF at STL | Gumamit ng OBJ o Collada para sa line work |
| Materyal ng glTF at FBX na lampas sa base color (metal, roughness, normal map, salamin, clear coat, sheen…) | Nababasa at nakalista ang mga ito; pinananatili ng ModelCraft ang base color o texture. Gawing muli ang itsura sa [Shading workspace](topic:shading) |
| Bone, animation at morph target sa glTF | Ang mga skinned model ay pumapasok na nakatayo sa pahinga; mag-animate sa [timeline](topic:animation) |
| Kulay at mga pangalan ng bahagi ng assembly mula sa STEP file | Ang mga bahagi ay pumapasok bilang mesh sa totoong sukat nila; [ipinta](topic:paint) at pangalanan ang mga ito pagkatapos mag-import |
| SubD object, text, dimension at ilaw mula sa `.3dm` file | Tingnan ang [ano ang naiiwan](topic:import-3dm-files#what-is-left-out-and-said); gawing mesh ang SubD sa programang gumawa ng file |
| KTX2 texture at material variant sa glTF | Mag-export gamit ang PNG o JPEG texture; ginagamit ang default na variant |
| Pagsusulat ng glTF instancing (EXT_mesh_gpu_instancing) | Isinusulat ang mga component nang isang beses at inilalagay nang maraming beses, na nababasa ng bawat viewer |
| Alembic animation (bawat sample ng cache), Alembic point at curve, pagsusulat ng Alembic | Pumapasok ang unang sample; mag-animate sa [timeline](topic:animation); magsulat ng glTF, USD o OBJ |
| Bump at normal map sa OBJ na materyal | Ang color picture lamang (`map_Kd`) ang pumapasok |
| FBX bone at animation, FBX export, FBX 6 file | Ang mga skinned model ay pumapasok sa pahinga; mag-export ng glTF; i-save ang mga lumang file bilang FBX 2011 o mas bago |
| Collada skin, morph, camera, ilaw, look-at at skew transform, panlabas na reference | Naiiwan sa pag-import at binibilang sa mensahe |
| Backup file | Ang {{ui:Save as}} ({{key:Mod+Shift+S}}) ay nagse-save ng isa pang kopya. Pagkatapos ng crash, iniaalok ng ModelCraft ang hindi pa nase-save mong gawa ("Recover your work?") |
| Cloud saving at sync sa pagitan ng mga computer | Hindi pa available. I-save ang mga file sa computer mo, at kopyahin ang mga ito kung saan mo kailangan |

## 3D printing

| Hindi pa | Sa halip, ngayon |
|---|---|
| Totoong slicer support (interface, raft, eksaktong pattern ng support) | Ipinapakita ng [supports preview](topic:print-tools#supports-preview) kung saan at tinatayang gaano karami; ipinapakita ng preview ng iyong slicer ang mga totoo |
| Pag-aayos ng bahaging dumadaan sa sarili nito, o mga edge kung saan nagtatagpo ang tatlo o higit pang face | Inililista ng [Repair](topic:print-tools#repair) ang mga ito at kung nasaan; gamitin ang [Intersect faces](topic:intersect) at burahin ang nasa loob |
| Infill pattern at lattice sa loob ng hollow | Iniiwang walang laman ng [Hollow](topic:print-tools#hollow); nagdadagdag ang iyong slicer ng infill sa solid na bahagi |
| Mga detalyeng masyadong maliit para sa iyong nozzle (maliban sa wall) | Hinahanap ng [Wall thickness](topic:print-tools#wall-thickness) ang mga manipis na wall; ipinapakita ng layer preview ng iyong slicer ang iba |

## Performance

Nagtatago ang Undo ng kopya ng model para sa bawat hakbang (nagtatago ang [mesh](topic:meshes) lamang ng nabago), kaya ang napakalaking import ng push/pull na geometry ay nagpapabagal sa bawat edit. Panatilihing magaan ang mga import, at i-save at buksan muli para burahin ang history.

## Mga app at platform

- **Desktop:** tumatakbo ang ModelCraft sa browser sa Mac, Windows at Linux, at sa CadCraft Studio, ang desktop app na may lahat ng walong app sa isang install. Sa Android, ini-install ang CadCraft Studio mula sa APK nito sa getcadcraft.com/download. Wala pang build para sa iPad o iPhone.
- **Touch:** tingnan ang [Orbit, pan at zoom](topic:orbit-pan-zoom) para sa mga galaw ng daliri. Ang pressure ng pen ang nagtatakda ng brush sa [Sculpt](topic:sculpt); sa iba pa, hindi ginagamit ang pressure at tilt ng pen.
- **Sheet:** [nagpi-print ang ModelCraft ng isang view sa bawat pahina](topic:export-model#print-the-view-or-save-it-as-a-pdf); walang sheet layout na may ilang view o title block. Mag-export sa CadCraft-friendly DWG/DXF para sa mga drawing na may sukat.
