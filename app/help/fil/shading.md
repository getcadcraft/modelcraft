---
title: Gumawa ng materyal gamit ang node
summary: Bumuo ng materyal mula sa texture, larawan at matematika sa workspace ng Shading, tingnan ito sa view habang ginagawa mo, at ipinta ang mga face gamit ito.
keywords: shading, bake, baking, texture baking, ambient occlusion, ao, curvature, normal bake, high poly, low poly, light map, decal, decals, sticker, logo, label, texture painting, paint texture, brush, material, materials, materialx, mtlx, openpbr, standard surface, material library, librarycraft, texture set, pbr, import textures, zip, cc0, drag, node, nodes, node editor, shader, texture, procedural, noise, checker, voronoi, cells, waves, bricks, tiles, wood, marble, gradient, dirt, edge wear, color ramp, mix, bump, normal map, roughness, metalness, opacity, cut-out, emission, glow, displacement, box mapping, triplanar, uv, picture, image texture, openpbr
from: d7368b21
---

Ang materyal na ginawa sa workspace na **Shading** ay kabilang sa file. Isa itong maliit na graph: mga **node** na gumagawa ng texture, larawan at numero, na nakakabit sa **Material output**, na ang mga input ay ang itsura ng surface: base color, roughness, metalness, normal, opacity, emission at ang iba pa sa modelong OpenPBR. Ipinipinta mo ang mga face gamit ito gaya ng anumang materyal mula sa library, at lumalabas agad sa view ang bawat pagbabago.

## Buksan ito

Piliin ang {{ui:Shading}} sa listahan ng Workspace. Nananatili ang 3D view sa itaas ng screen at ang **node editor** ang kumukuha sa ibaba. Inililista ng panel sa kanan ang sariling materyal ng file.

- {{ui:New material}} ay gumagawa ng kulay-abong materyal na may Material output lamang.
- **Gumawa ng editable na kopya ng materyal mula sa library** ay ginagawang graph na maaari mong baguhin ang brick, kahoy, tile at iba pa: dumaraan ang texture nito sa Library texture node, at ang mga bump nito sa Bump node.
- {{ui:Paint with it}} ay nagpipinta ng napiling face o group, o pumipili ng materyal para sa Paint tool. Inililista rin ng mga materyal ng Paint tool ang sa file sa ilalim ng **Sa file na ito**.
- {{ui:Duplicate}} at {{ui:Delete}} ay gumagana sa materyal na ine-edit mo. Hindi na maibabalik ang pagbura: ang mga face na napinturahan nito ay magpapakita ng default na kulay hanggang muli mo silang ipinta.

## Mga materyal mula sa library

Inililista ng **Library ng materyal (Library)** ng panel ang mga materyal ng library, bawat isa may preview na nirender ng path tracer ng CadCraft. Ito ay mga texture set na inilabas sa ilalim ng CC0, at kredito sa mga taong gumawa nito.

- I-click ang isa para dalhin ito sa file (kasama ang mga larawan nito) at, kapag may napiling face o group, ipinta ang mga ito.
- I-drag ang isa papunta sa face o group sa view para ipinta lamang ang bahaging iyon.
- Nagiging isa ito sa mga materyal ng file: baguhin ang mga node nito gaya ng alinman. Nakikita sa panel ang kredito nito at nananatili ito sa file.

## Mag-import ng texture set

{{ui:Pictures or a zip…}} o {{ui:A folder…}} sa ilalim ng **Import a texture set** ay gumagawa ng materyal mula sa set ng mga mapa. Hinahanap ang mga mapa ayon sa salitang nasa pangalan ng file: color, albedo, diffuse o basecolor; roughness (o gloss, na ginagawang roughness); metalness o metallic; normal (OpenGL o DirectX, mula sa `gl` / `dx` sa pangalan); height o displacement; ambient occlusion; opacity; emission. Hindi kasama ang mga packed map (ARM, ORM). Nagsisimula ang tile sa 1 × 1 m: itakda ang totoong laki nito sa Material output. Napupunta ang height sa displacement na may scale na 0; itaas ang scale para magamit ito sa mga mesh.

## MaterialX

Ang MaterialX ay bukas na format na ginagamit ng ibang 3D at rendering program para ipasa ang mga materyal.

- {{ui:Export as MaterialX…}} ay nagse-save ng materyal na ine-edit mo: ang mga halaga nito, at bawat texture bilang PNG na larawan sa tabi ng file na `.mtlx` (sa isang zip). Piliin ang shader kung paano ito isusulat: **OpenPBR Surface** (MaterialX 1.39, ang parehong modelong ginagamit ng ModelCraft) o **Standard Surface** (MaterialX 1.38, na mas maraming programa ang nakakabasa ngayon). Inilalagay ang mga texture ayon sa UV coordinate sa metro; isinusulat bilang UV ang box at triplanar placement.
- {{ui:Import MaterialX…}} (o {{ui:From a folder…}}) ay bumabasa ng mga file na `.mtlx` na may OpenPBR, Standard Surface, UsdPreviewSurface o glTF PBR shader. Ibigay din ang mga larawan, o isang zip ng lahat: hinahanap ang larawan ayon sa path, pangalan nito, o pangalan nito na may ibang uri ng larawan (ang `.exr` na nakasaad sa file ay maaaring dumating bilang `.jpg` sa tabi nito). Ang mga texture, normal map, arithmetic, mix at displacement ay pumapasok bilang node; ang iba ay nananatili ang halaga, at sinasabi ng status line kung ano ang naiwan.

## Decal

Ang decal ay larawang nakalagay sa surface (logo, sign, label, mantsa) na may sariling materyal.

- Itakda ang **Lapad ng bagong decal**, saka {{ui:Place a decal…}} (o {{ui:Decal}} sa toolbar), pumili ng larawang PNG, JPEG o WebP at i-click ang face. Ipinoproyekto ang larawan sa mga surface doon, pinananatili ang proporsyon nito; nananatiling see-through ang mga transparent na bahagi ng PNG.
- Ito ay kabilang sa group o component na na-click mo at gumagalaw kasama nito. Tinatakpan nito ang mga face sa loob ng box nito na nakaharap sa parehong direksyon, at humihinto sa mga gilid ng kinalalagyan nito.
- Bawat decal ay may sariling materyal, pinangalanang **Decal: <larawan>**, sa listahan ng file: i-edit ito gaya ng iba (roughness, bump, glow). Binubuksan ito ng {{ui:Material}} sa tabi ng decal.
- Sa tabi ng bawat decal: ang lapad nito (sumusunod ang taas sa larawan), {{ui:Turn}} (isang quarter turn) at {{ui:Delete}}. Naka-keep ang mga decal kasama ng materyal ng file, sa labas ng Undo.
- Nakikita sila sa shaded view, sa mabilisang render at sa mataas na kalidad na larawan.

## Ipinta sa texture

{{ui:Paint texture}} (o {{ui:Paint}} sa ilalim ng **Paint on the texture**) ay ginagawang round brush ang pointer. I-drag sa face na may suot na isa sa mga materyal ng file na ito: ipinipinta ng brush ang larawang nasa likod ng base color nito.

- Sa mesh, ipinipinta ito ayon sa UV ng mesh (i-unwrap muna ito sa UV workspace); sa ibang face, ipinipinta ito sa kabuuan ng face, kaya inuulit ang pagpinta kasabay ng tile ng materyal.
- Ang materyal na may simpleng kulay bilang base color ay nakakakuha ng bagong 512 × 512 na larawan ng kulay na iyon sa unang beses mo itong ipinta. Ang materyal na may base color mula sa ibang node ay nangangailangan ng Picture node na nakakabit sa Base color.
- Itakda ang kulay ng brush, laki (sa pixel ng larawan), lakas at hardness sa panel. Binabawi ng {{ui:Undo stroke}} o Ctrl+Z (habang nagpipinta) ang isang stroke, hanggang sa huling 20.
- Naka-save sa file ang napinturahang larawan. Hindi maaaring ipinta ang mga materyal ng library: gumawa muna ng editable na kopya.

## I-bake ang mga texture

**Bake textures** ay isinusulat sa mga larawan ang ibinibigay ng hugis at ng eksena sa isang surface, sa kahabaan ng UV ng mesh.

- Pumili ng mesh na may UV (i-unwrap ito sa UV workspace), lagyan ng tsek ang mga mapa at pindutin ang {{ui:Bake}}:
  - **Ambient occlusion**: gaano kabukas ang bawat punto. Nagiging mas madilim ang mga sulok, tupi at lugar sa ilalim ng ibang bagay. Lahat ng nakikita sa model ay nagpapadilim dito, hanggang sa occlusion distance.
  - **Curvature**: maliwanag sa labas na gilid, madilim sa loob na sulok, katamtamang kulay-abo sa patag at bahagyang kurbadong bahagi, sa edge width na itinakda mo.
  - **Normals from the high-detail object**: pumili rin ng detalyadong kopya. Ang detalye ng surface nito ay isinusulat bilang normal map para sa mas simpleng isa (ang object na may mas kaunting triangle ang pinaglalagyan ng bake). Ang search distance ay kung gaano kalayo maaaring magkalayo ang dalawang surface.
  - **Lighting**: ang araw ng lugar at petsa ng model (Style) kasama ang mga anino nito, at ang langit, bilang light map.
- Sumasama sa file ang mga larawan at lumalabas sa Picture node. Kung ang materyal na ine-edit mo ay may **Dirt and edge wear** node, agad nitong binabasa ang bagong occlusion at curvature.
- Mas maraming ray kada texel ay nagbibigay ng mas makinis na occlusion at lighting, pero mas matagal. Tumatakbo ang bake sa mga processor core ng computer sa background; ang {{ui:Stop baking}} ang humihinto nito.

## Bumuo ng graph

1. {{ui:Add a node…}} (o {{key:Shift+A}} sa node editor) ay nagdaragdag ng node sa gitna ng editor.
2. I-drag mula sa output dot (sa kanang bahagi ng node) papunta sa input dot (sa kaliwang bahagi ng node) para ikonekta sila. Ang ikalawang koneksyon sa isang input ay pumapalit sa una; i-drag palayo ang nakakonektang input para tanggalin ang koneksyon nito.
3. Ang mga hindi nakakonektang input ay nagpapakita ng halaga nila: mag-type ng numero o pumili ng kulay. Nasa ibaba ng bawat node ang mga setting.

I-drag ang node sa pamagat nito para ilipat ito, i-drag ang walang lamang espasyo para mag-pan, at gamitin ang wheel para mag-zoom. Tinatanggal ng {{key:Delete}} ang napiling node o link, ina-undo ng {{key:Mod+Z}}, dino-duplicate ng {{key:Mod+D}}, at ipinapakita ng {{key:F}} ang lahat ng node. Bawat pagbabago ay isang undo step ng node editor. Hindi binabago ng sariling undo ng model ang mga materyal.

| Node | Ang ginagawa nila |
|---|---|
| Texture coordinates | Kung nasaan ang punto sa tile: ulitin ito, i-offset, o paikutin ng isang quarter. |
| Value, Color | Isang numero, isang kulay. |
| Picture | Isang larawan ng file (isa na dumating kasama ng na-import na model, o isa na idinagdag mo gamit ang {{ui:Add a picture…}}). Piliin ang **Colors** para sa litrato at **Data** para sa roughness o normal map. |
| Library texture | Texture, roughness at height ng materyal ng library. |
| Checker, Noise | Mga parisukat; malambot na fractal noise na may detalye, roughness at seed nito. |
| Voronoi cells, Waves, Gradient | Cells (distansya sa pinakamalapit na punto, mga gilid sa pagitan ng cell, isang kulay bawat cell); mga banda pahalang, patayo o dayagonal, bilang sine, saw o triangle, binaluktot ng noise; linear, quadratic, radial at spherical gradient. |
| Bricks, Tiles | Mga hanay ng brick na may pahalang na offset, o grid ng tile: mga kulay, mortar o grout, puwang at bevel sa metro, taas para sa bump, at random na numero kada piraso. |
| Wood, Marble | Mga singsing sa kahabaan ng grain na may pinong hibla; mga ugat na binaluktot ng turbulence. |
| Dirt and edge wear | Nasisira ang mga nakausling gilid at nadudumihan ang mga lukab mula sa curvature ng mesh at mga larawan ng occlusion ([I-bake ang mga texture](topic:shading#bake-textures) ang gumagawa nito; o itakda ang dalawang setting ng larawan nito, sa UV layout ng mesh: ilagay ang materyal ayon sa UV coordinate). Kung wala ang mga ito, walang nababago. |
| Mix colors, Color ramp, Hue/saturation/value, Brightness and contrast, Invert, Gamma, Separate and Combine RGB | Gawaing kulay. |
| Math, Map range | Arithmetic sa mga numero (add, multiply, power, smooth step at iba pa). |
| Bump, Normal map | Normal mula sa height (Bump) o mula sa larawang normal map (Normal map: piliin ang direksyon ng green channel). |

## Ang Material output

Ipinapaliwanag ng mga setting nito kung paano nakalatag ang texture sa mga surface:

- **Lapad ng tile** at **Taas ng tile**: ilang metro ang sakop ng isang tile ng texture. Inuulit sa tile nang walang tahi ang lahat ng ginagawa ng graph.
- **Inilagay ayon sa**: ang **UV coordinates** ay sumusunod sa mga face (push/pull na face: sa kahabaan ng bawat face; mesh: ang UV nila, isang UV unit = isang tile); ang **Box** ay nagpo-proyekto mula sa pinakamalapit sa tatlong axis; ang **Triplanar** ay pinaghahalo ang tatlong projection sa mga surface na nakahilig (**Blend sharpness**: mas mataas ay mas matigas ang timpla).
- **Normal strength** ay nagsusukat sa normal input. **Displacement scale** ay nagtatakda kung gaano kalayo ililipat ng displacement input ang vertex ng mesh.
- {{ui:More inputs}} ay nagpapakita ng iba pang OpenPBR input: coat, fuzz, subsurface, thin film, transmission at ang kanilang mga kulay.

## Sa mataas na kalidad na larawan

Binabasa ng path tracer ang base color, roughness, metalness, opacity, normal at emission mula sa graph habang nagbabago ang mga ito sa buong surface. Ang anumang iba pang input na iniugnay mo (halimbawa, coat na nagbabago) ay ginagamit sa average nito; sinasabi ng panel kung alin. Ang cut-out mula sa opacity texture ay nagpapakita ng hugis nito, at pantay na see-through ang anino nito. Ang texture na nagniningning ay nagpapaliwanag sa mga bagay na nakaharap dito, nang hindi sinusuri bilang lampara.

Ang **Displacement** ay gumagalaw lamang sa vertex ng mga mesh, kaya magdagdag ng Subdivision modifier para sa detalye ([Modifiers](topic:modifiers)). Pinapanatili ng push/pull na face ang hugis nila at nakakakuha ng bump mula sa normal.

:::tip
Sa computer na may WebGPU, ginagawa ang graph sa graphics card; kung wala, sa processor. Pareho ang resulta.
:::
