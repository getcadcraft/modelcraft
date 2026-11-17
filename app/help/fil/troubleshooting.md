---
title: Pag-troubleshoot
summary: Mga sintomas, sanhi at ayos, mula sa blangkong 3D view hanggang sa mga import na mali ang laki, kasama ang mga mensaheng ipinapakita ng ModelCraft.
keywords: problema, trouble, error, hindi gumagana, blangko, webgl, graphics, mabagal, mensahe, nabigo ang import, maling laki, hindi mapili, touch, hindi gumagana ang mga key, nawalang trabaho
from: 6e7394be
---

## Blangko ang 3D view

**Sintomas:** nananatiling walang laman ang gitna ng screen, o background color lang ang nakikita, at walang nangyayari kapag nag-click ka ng mga tool.

**Sanhi:** gumagamit ang ModelCraft ng WebGL 2, ang 3D graphics ng browser. Wala ito kapag luma ang browser, kapag naka-off ang hardware acceleration, o kapag hinarang ang graphics driver.

**Ayos:**

:::chromium
1. Buksan ang settings ng browser at hanapin ang "graphics acceleration".
2. I-on ang "Use graphics acceleration when available" at i-relaunch ang browser.
3. Kung naka-on na ito, i-type ang `chrome://gpu` sa address bar (`edge://gpu` sa Edge) at hanapin ang "WebGL2" sa listahan. Kung nakasulat na disabled ito, i-update ang graphics driver.
:::

:::firefox
1. Buksan ang **Settings**, saka ang **General**, at mag-scroll hanggang "Performance".
2. I-untick ang "Use recommended performance settings", saka i-tick ang "Use hardware acceleration when available". I-restart ang Firefox.
3. Kung pumapalya pa rin, i-type ang `about:support` sa address bar at tingnan ang seksyong "Graphics" para sa WebGL 2.
:::

:::safari
I-update ang macOS at Safari. Laging naka-on ang WebGL 2 sa mga bagong bersyon ng Safari. Kung binago mo ang experimental features sa ilalim ng **Safari**, saka **Settings**, saka **Advanced** (o **Feature Flags**), i-reset ang mga ito.
:::

Sa work computer, remote desktop o virtual machine, maaaring hinarang ng policy ang 3D graphics. Subukan ang ibang computer. Tingnan ang [Mga browser at computer](common:browsers).

## Walang nangyayari sa mga key, o nagta-type sa isang kahon

**Sanhi:** nasa isang field ng panel ang keyboard focus: ang listahang {{ui:Faces}} sa {{ui:Style}}, isang setting ng araw, ang field na {{ui:Name}} sa {{ui:Entity info}}, o ang units picker. Kaya napupunta sa field na iyon ang mga letra at arrow key.

**Ayos:** i-click ang 3D view, saka pindutin ulit ang key. Wala ring nangyayari sa mga key habang bukas ang isang dialog.

## Walang nangyayari kapag nagta-type ng numero

- **Wala pang direksyon.** Ang na-type na haba ay susunod sa direksyong itinuturo ng pointer mula sa unang click. Ilipat nang kaunti ang pointer sa direksyong gusto mo, saka mag-type.
- **Maling sandali.** Karamihan sa mga tool ay tumatanggap lang ng na-type na halaga pagkatapos ng unang click: i-click muna ang unang sulok, ang face o ang point na paglilipatan. Ang {{ui:Circle}} at {{ui:Polygon}} ay tumatanggap ng bilang ng sides bago ang unang click.
- **"Mag-type ng haba gaya ng 3m, 10'6" o 4m,3m."** Hindi ito nabasa ng ModelCraft. Tingnan kung may decimal comma (`2,5`): gumamit ng tuldok.

## Mali ang lugar ng simula ng hugis sa touch screen

**Sintomas:** gamit ang daliri, maayos ang unang rectangle, pero ang susunod na rectangle, bilog o linya ay nagsisimula kung saan nagtapos ang nakaraang touch, sa halip na kung saan mo hinawakan.

**Sanhi:** bug sa build na ito: sa touch screen, inaalala ng tool ang huling snap point mula sa nakaraang galaw.

**Ayos:** i-tap muli ang button ng tool sa toolbar bago ang bawat bagong hugis. Sinisimulang muli nito ang tool, at tatama sa tamang lugar ang unang point kung saan ka humawak.

## Ang pag-edit ng isang group ay nagbago ng iba

**Sintomas:** kinopya mo ang isang group gamit ang {{ui:Move}} at {{key:Ctrl}}, binuksan at in-edit ang isang kopya, at nagbago rin ang kabilang kopya. Ipinapakita ng {{ui:Outliner}} na pareho ang pangalan ng dalawa.

**Sanhi:** sa build na ito, ang pagkopya ng group ay gumagawa ng pangalawang placement ng parehong group, gaya ng component. Ang button na {{ui:Make unique}} ng ModelCraft ay inaalok lang para sa mga component.

**Ayos:** piliin ang kopyang gusto mong baguhin, i-click ang {{ui:Make component}} sa {{ui:Entity info}}, saka ang {{ui:Make unique}}. Magkakaroon na ng sariling laman ang kopyang iyon. O gawin itong maluwag na geometry gamit ang {{ui:Explode}}.

## Hindi gumana ang Push/pull gaya ng inaasahan

- **"Gumagana ang push/pull sa isang face. I-click ang isang face."** Nag-click ka sa edge o sa bakanteng espasyo. I-hover hanggang mag-highlight ang face, saka i-click.
- **Nasa loob ng group ang face.** I-double-click muna ang group para buksan ito.
- **Hindi tumagos sa pader ang bintana.** Dapat iguhit ang rectangle sa face ng pader, hindi sa harap nito, at dapat may back face ang pader. Tingnan ang [Gumawa ng butas sa pader](topic:openings#if-it-did-not-cut-through).
- **Nagsasapawan ang dalawang kahon nang hindi nagsasama.** Ang mga solid na itinulak sa isa't isa ay hindi nagpuputol o nagdurugtong sa isa't isa sa build na ito.

## Hindi nabuo ng linya o hugis ang isang face

Nabubuo lang ang face kapag bumubuo ng saradong patag na loop ang mga edge. Tingnan kung na-snap ang huling point sa una ("Endpoint"), at nasa iisang eroplano ang lahat ng edge. Ang loop na bahagyang wala sa eroplano ay nananatiling linya. Iguhit muli ang isa sa mga edge nito, at i-snap sa mga sulok.

## Hindi ko mapili o mabura ang face

- Gamit ang {{ui:Select}}, kapag nag-click ka malapit sa edge, kukunin ang edge. Mag-click nang mas malapit sa gitna ng face.
- Hindi pumipili ng face ang {{ui:Eraser}}. Piliin ang face at pindutin ang {{key:Delete}}, o burahin ang isa sa mga edge nito.
- Kung bahagi ito ng group o component, pipiliin ng click ang buong bagay. I-double-click para buksan.

## "Pumili muna ng bagay na ililipat, o i-click ito."

{{ui:Move}}, {{ui:Rotate}} at {{ui:Scale}} ay nangangailangan ng bagay na gagawin: piliin muna ito, o simulan ang tool sa pamamagitan ng pag-click mismo sa bagay (hindi sa bakanteng espasyo o sa isang guide).

## "Pumili muna ng geometry (i-drag ang isang window, o i-triple-click para piliin ang lahat ng konektado)."

{{key:G}} at {{key:Shift+G}} ay nangangailangan ng selection. Hindi maaaring i-group ang mga guide.

## Nag-o-orbit ang mga arrow key sa halip na mag-lock

Gumagana lang ang mga lock pagkatapos ng unang click ng isang tool sa pagguhit o pag-edit. Walang lock ang {{ui:Push/pull}}, at sa {{ui:Rotate}} ay hindi nila binabago ang pag-ikot. Sa ibang pagkakataon, umiikot ang view kapag pinindot ang mga arrow key.

## Esc sa full screen

Sa full screen, maaaring gamitin ng browser ang unang {{key:Esc}} para lumabas sa full screen. Pindutin ulit ang {{key:Esc}} para kanselahin ang tool.

## Walang middle button

Pindutin ang {{key:O}} para sa {{ui:Orbit}} at i-drag, o gamitin ang mga arrow key. Tingnan ang [Orbit, pan at zoom](topic:orbit-pan-zoom#without-a-middle-button).

## Mga import

| Mensahe | Gawin ang |
|---|---|
| "Nag-i-import ang ModelCraft ng SketchUp (.skp), Collada (.dae), OBJ, glTF (.glb/.gltf), FBX, PLY, STL, Alembic (.abc), DWG at DXF. … ay wala sa mga ito." | I-export ang model mula sa ibang program sa isa sa mga format na ito |
| "Mahigit 300 MB ang file na ito." | Pasimplehin o hatiin ang model sa ibang program |
| "…masyadong malaki para i-model dito (mahigit 2 milyong vertex)." | Pareho |
| "Kailangan ng file na .gltf na ito ang "…"…" | I-drop ang `.gltf` kasama ang mga `.bin` at texture file nito, o buksan ang bersyong `.glb` |
| "Kailangan ng file na glTF na ito ang extension na …, na hindi pa nababasa ng ModelCraft." | I-export muli mula sa ibang program nang wala ang extension na iyon (KTX2 textures, halimbawa) |
| Pumapasok ang OBJ nang walang kulay o texture | I-drop ang `.obj` kasama ang `.mtl` at mga larawan nito |
| "Gumagamit ang file na Alembic na ito ng lumang HDF5 layout…" | I-save itong muli mula sa ibang program bilang Ogawa Alembic file |
| Pumapasok ang FBX nang walang texture | I-drop ang `.fbx` kasama ang mga larawan ng texture nito, o i-embed ang media kapag nag-e-export |
| "Bersyon … ang file na FBX na ito, na hindi nababasa ng ModelCraft" | I-export muli bilang FBX 2011 o mas bago |
| Pumapasok ang STL o PLY nang 1,000 beses na mas malaki o mas maliit | Binabasa ang STL bilang millimeter at ang PLY bilang meter: i-scale ito (tingnan ang [I-rotate at i-scale](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)) |
| "Hindi ito Collada (.dae) na file…" o "…hindi well-formed na XML…" | Sira ang file o hindi ito Collada. I-export muli. |
| "Walang geometry na maaaring i-import ng ModelCraft ang Collada file na ito." | Mga camera, ilaw o reference lang sa ibang file ang laman nito |
| "Binary DXF ito. I-save ito bilang ASCII DXF at subukan ulit." | I-save itong muli mula sa CAD program bilang ASCII |
| "Hindi ito DWG na drawing…" | Hindi DWG ang file, o sira ito |
| "Hindi mabasa ang drawing na ito (…). Maaaring sira ito, o naka-save sa DWG version na hindi kayang basahin ng reader…" | Ipinapakita ng mga bracket ang dahilan. I-save bilang DXF, o bilang DWG mula AutoCAD 2000 hanggang 2018, mula sa CAD program |
| "Lumalampas nang mahigit 10,000 km mula sa origin nito ang drawing na ito…" | Ilipat ang drawing malapit sa 0,0 sa CAD program |

### Mali ang laki ng import o nakahiga sa gilid

- **OBJ:** walang unit ang OBJ; binabasa ito ng ModelCraft bilang meter. Ang model na nasa millimeter ay papasok nang 1000 beses na mas malaki: [i-scale](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size) ito gamit ang `0.001`; ang model na nasa inch ay gamit ang `0.0254`.
- **OBJ na nakahiga:** inaasahan ng ModelCraft ang mga OBJ file na nakataas ang Y. Ang file na isinulat na nakataas ang Z ay papasok na nakahiga. I-rotate ito ng 90° sa palibot ng red axis: i-click ang center ng {{ui:Rotate}} sa isang face na nakaharap sa red, o buksan ang file sa sarili nitong program at i-export na nakataas ang Y.
- **DWG o DXF:** mali ang napili mong unit sa dialog na "Mga unit ng drawing". I-undo at mag-import muli.

## Pagbubukas ng mga file

| Mensahe | Gawin ang |
|---|---|
| "Hindi ito model ng ModelCraft (hindi ito JSON)." | Gamitin ang {{ui:Import}} para sa ibang format |
| "Hindi ito file ng ModelCraft na mabubuksan namin: …" | Sira ang file o binago nang manwal |
| "Na-save ang model na ito ng mas bagong ModelCraft…" | Buksan ito sa mas bagong bersyon |
| "Mahigit 200 MB ang file na ito." | Masyadong malaki ang model para buksan dito |

## Nawala ang trabaho ko

Hindi awtomatikong nagse-save sa file ang ModelCraft. Kapag isinara o nire-reload mo ang tab na may hindi pa na-save na pagbabago, unang magtatanong ang browser ("Leave site?" o "Reload site?"); piliing manatili at i-save. Nagtatanong din ang New at Open ("Mga hindi pa na-save na pagbabago"). Kung nag-crash ang browser o computer, buksan muli ang ModelCraft sa parehong browser: iaalok nito ang hindi pa na-save na trabaho ("Ibalik ang iyong trabaho?"; tingnan ang [Ibalik ang iyong trabaho](common:recover)). I-save nang madalas gamit ang {{key:Mod+S}}.

## Puno ng kopya ang folder ng downloads ko

Bawat save ay isang bagong download, na pinangalanang `Untitled (1).modelcraft`, `Untitled (2).modelcraft` at iba pa. Burahin ang mga luma, o itakda ang browser na magtanong kung saan i-save ang bawat file at i-overwrite nang ikaw mismo ang lumang file. Tingnan ang [Buksan, i-save, i-import at i-export](topic:files#save-a-model).

## Bumabagal ito

- Bawat hakbang ng undo ay nagtatabi ng kopya ng model (ang [mesh](topic:meshes) ay nagtatabi lang ng nagbago), kaya sa napakalaking import ng push/pull na geometry ay mas matagal ang bawat edit. I-explode o burahin ang hindi mo kailangan, i-save, at buksan muli: kasama sa pagbubukas muli ang pag-clear ng undo history.
- Ang mga anino ng araw ang pinakamabigat. I-untick ang {{ui:Anino ng araw}} habang nagmo-model ka.

## Walang anino

{{ui:Anino ng araw}} ay naka-off, nasa ilalim ng abot-tanaw ang araw sa oras na pinili mo ("Nasa ilalim ng abot-tanaw ang araw sa oras na ito."), o ang istilo ay {{ui:Wireframe}}, na hindi nagguguhit ng anino.

## "Hindi pinayagan ng browser na ito ang full screen."

Tumatanggi ang ilang browser at ilang embedded na view sa full screen. Gamitin na lang ang sariling full screen ng browser ({{pick:mac=Control-Command-F|windows linux=F11}}).

## Hindi bumubukas ang ModelCraft nang walang koneksyon

Bumubukas lang ang ModelCraft nang offline kapag na-save ito para sa offline na paggamit sa browser na iyon: dapat ang button sa app bar ay nagsasabing {{ui:Handa offline}}. Buksan ito habang online at i-click ang {{ui:I-save para sa offline}}. Kung nagsasabi ang button ng {{ui:Hindi na-save}}, i-click ulit ito sa mas magandang koneksyon; ang {{ui:Hindi available ang offline}} ay nangangahulugang hindi makapag-iingat ng kopya ang window na ito (isang private window, o isang managed na computer). Tingnan ang [Pagtatrabaho offline](common:offline).
