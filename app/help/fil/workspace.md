---
title: Ang screen ng ModelCraft
summary: Isang pasyal sa toolbar, sa mga panel sa bawat gilid, sa 3D view at sa status bar, ayon sa mga pangalang nakikita sa screen.
keywords: screen, layout, toolbar, panels, outliner, impormasyon ng entity, istilo, mga scene, status bar, value box, units, interface, pasyal
from: 4a9a4516
---

Mula sa itaas pababa: ang app bar, ang toolbar, ang tatlong hanay (mga panel sa kaliwa, 3D view, mga panel sa kanan) at ang status bar.

## Ang app bar

Ang manipis na bar sa pinakatuktok ay para sa bawat CadCraft app. Naglalaman ito ng pangalan at bersyon ng app, ang {{ui:Tungkol sa ModelCraft}}, ang button ng screen mode, at ang switch na {{ui:Papel}} / {{ui:Model}}.

- Ang {{ui:Papel}} ang light na tema at ang {{ui:Model}} ang dark. Nagbabago ang kulay ng 3D view para tumugma; hindi nagbabago ang model mo.
- Ang button ng screen mode (ang nakasulat na {{ui:Full screen}} sa simula) at ang {{key:Ctrl+Shift+F}} ay nagpapalipat-lipat sa tatlong mode: normal, full screen, at full screen na nakatago ang mga bar. Kapag nakatago ang mga bar, ituro ang itaas na gilid ng screen (o i-tap ito) para maibalik ang mga ito. Ang {{key:Esc}} ay lumalabas sa full screen.

:::note
Ang {{key:Ctrl+Shift+F}} ay gumagamit ng Control key sa bawat computer, pati sa Mac. Sa iPhone, kung saan walang full screen ang mga browser, ang button ay nagtatago at nagpapakita lamang ng mga bar.
:::

## Ang toolbar

Hinati ang toolbar sa mga grupong may label. Ituro ang isang button para makita ang pangalan at key nito.

Sa kaliwa, ang listahang {{ui:Workspace}} ay nagpapalit kung para saan ang toolbar at ang kanang panel: {{ui:Model}} (push/pull modeling, ang pasyal sa ibaba), {{ui:Mesh}} ([i-edit ang mesh](topic:mesh-edit)), {{ui:Curve}} ([curve object](topic:curves)), {{ui:UV}} ([ayusin ang UV](topic:uv)), {{ui:Sculpt}} ([i-sculpt](topic:sculpt)), {{ui:Shading}} ([materyal na gawa sa node](topic:shading)), {{ui:Animate}} ([i-animate](topic:animate)) at {{ui:Render}} ([render sa view](topic:render#render-in-the-view)).

| Grupo | Mga button |
|---|---|
| File | {{ui:Bago}}, {{ui:Buksan}}, {{ui:I-save}}, {{ui:I-import}}, {{ui:I-export}} (isang menu ng mga format) |
| Draw | {{ui:Linya}} ({{key:L}}), {{ui:Rectangle}} ({{key:R}}), {{ui:Bilog}} ({{key:C}}), {{ui:Polygon}} ({{key:N}}) |
| Baguhin | {{ui:Piliin}} ({{key:Space}}), {{ui:Push/pull}} ({{key:P}}), {{ui:Ilipat}} ({{key:M}}), {{ui:I-rotate}} ({{key:Q}}), {{ui:Scale}} ({{key:S}}), {{ui:Eraser}} ({{key:E}}), {{ui:Tape}} ({{key:T}}) |
| Isaayos | {{ui:Component}} ({{key:G}}), {{ui:Group}} ({{key:Shift+G}}), {{ui:Explode}} |
| Edit | {{ui:I-undo}} ({{key:Mod+Z}}), {{ui:I-redo}} ({{key:Mod+Y}}), {{ui:Kopyahin}} ({{key:Mod+C}}), {{ui:I-paste}} ({{key:Mod+V}}), {{ui:Iba pa}} (isang menu: gupitin, kopyahin, i-paste, i-paste sa mismong lugar {{key:Mod+Shift+V}}, i-duplicate {{key:Mod+D}}, burahin, piliin lahat, alisin ang pagpili, at ang key style) |
| Camera | {{ui:Orbit}} ({{key:O}}), {{ui:Pan}} ({{key:H}}), {{ui:Zoom}} ({{key:Z}}), {{ui:Extents}} ({{key:Shift+Z}}), {{ui:Views}} (isang menu) |

Ang mga key na ipinapakita ay ang push-pull; kapag napili ang istilong Modeler sa [mga setting ng ModelCraft](topic:settings), ang mga tooltip ay ang mga key na iyon ang ipapakita. Ipinapakitang nakapindot ang tool na ginagamit mo. Sa makitid na screen, nagsa-scroll sa gilid ang toolbar.

Ang menu na {{ui:Views}} ay may {{ui:Iso}}, {{ui:Top}}, {{ui:Front}}, {{ui:Kanan}}, {{ui:Likod}}, {{ui:Kaliwa}} at {{ui:Ibaba}}, bawat isa ay nakaangkop sa model, at {{ui:Perspective}}, na nagpapalipat sa pagitan ng perspective at parallel na projection.

## Ang 3D view

Ang gitna ng screen. Ang pula, berde at asul na linya ay ang mga axis: nasa lupa ang pula at berde, nakaturo pataas ang asul, at **ang hilaga ay ang berdeng axis**. Ang punto kung saan sila nagtatagpo ay ang origin.

- Kapag nagsimula ka, may card na pinamagatang "Simulan ang modeling" na naglilista ng unang ilang key. Nawawala ito kapag pumili ka ng drawing tool o nag-click sa view.
- Habang gumagana ang isang tool, ipinapakita ng view ang **inference marker**: maliliit na kulay na hugis kung saan kumakapit ang pointer (berdeng bilog sa endpoint, cyan sa midpoint, pulang parisukat sa edge, asul na brilyante sa face). Tingnan ang [Inference at snapping](topic:inference).
- Nagiging asul ang mga napiling bagay. Ang face na nakikita mula sa likod ay asul-abo.
- Kapag binuksan mo ang group para i-edit ito, nawawala sa paningin ang lahat sa labas nito, at lumilipat ang mga axis sa sarili nitong axis ng group.
- Kapag may mga scene ang model, lumilitaw sa itaas ng view ang isang hanay ng tab ng scene.
- I-drop ang file kahit saan sa view para buksan o i-import ito.

## Ang mga panel sa kaliwa

**{{ui:Outliner}}** ay naglilista ng mga group at component sa model, nakapaloob gaya ng pagkakapaloob nila sa model. Ang component na ginamit nang higit sa isang beses ay nagpapakita ng bilang, gaya ng "Window (4)".

- I-click ang pangalan para piliin ito. I-double-click para buksan ito sa pag-edit.
- **Hanapin ayon sa pangalan** (lumalabas kapag dalawa o higit pang group ang mayroon) ay nagpapanatili lamang ng mga row na tumutugma sa pangalan, kasama ang mga group na kinabibilangan nila. Binubura ito ng {{key:Esc}}.
- Ang **mata** sa dulo ng isang row ay nagtatago o nagpapakita ng group o component na iyon (gaya ng ginagawa ng {{ui:Edit}} › {{ui:Iba pa}} › {{ui:Itago}}). Ang icon ng tag ay nangangahulugang nakatago ito dahil sa [tag](topic:tags) nito.
- **Palitan ang pangalan sa mismong lugar:** i-click ang row, pindutin ang {{key:F2}}, i-type, at pindutin ang {{key:Enter}} ({{key:Esc}} ang nagpapanatili ng lumang pangalan).
- **I-drag ang row** sa gitna ng row ng ibang group para ilipat ito sa loob ng group na iyon, sa itaas o ibabang gilid ng isang row para ilagay ito bago o pagkatapos ng row na iyon, o sa heading na {{ui:Outliner}} para ilipat ito sa pinakamataas na antas. Nananatili ito sa kinalalagyan nito sa model, at nananatili ang kulay, tag at pangalan nito. Hindi maaaring pumasok ang isang group sa sarili nito. Isang undo step ang bawat paglipat. Tingnan ang [Ayusin muli sa Outliner](topic:groups-components#rearrange-in-the-outliner).
- Habang nag-e-edit ka sa loob ng group, may linyang nagsasabing "Editing: Model › …", at lumilitaw ang button na {{ui:Isara ang group}}. Isinasara nito ang bawat bukas na antas nang sabay-sabay.

Inililista ng **{{ui:Mga component}}** ang bawat depinisyon ng component kasama ang bilang ng nakalagay na kopya ("3×") at isang button na {{ui:Ilagay}} na nagdaragdag ng isa pang kopya kung saan ka mag-click.

## Ang mga panel sa kanan

Inilalarawan ng **{{ui:Impormasyon ng entity}}** ang napili. Nagbabago ang heading nito para sabihin kung ano iyon:

| Heading | Ipinapakita | Mga button |
|---|---|---|
| Model (walang napili) | Mga face, edge, group, component at kung ilan ang nakalagay, mga guide, kabuuang laki | {{ui:Burahin ang lahat ng guide}} (kapag may mga guide) |
| Face | Lawak, bilang ng butas | {{ui:Baligtarin ang face}} |
| Edge | Haba | wala |
| Group o Component | Pangalan (i-type para palitan), ilang beses ito nakalagay, kung saradong solid ito, ang volume nito, ang laki nito | {{ui:Edit}}, {{ui:Explode}}, {{ui:Gawing natatangi}} (component na nakalagay nang higit sa isang beses), {{ui:Gumawa ng component}} (isang group) |
| Guide point o guide line | wala | {{ui:Burahin}} |
| Ilang bagay | Ilang face, edge, group at guide, ang kabuuang lawak ng mga face | {{ui:Gumawa ng component (G)}}, {{ui:Gumawa ng group (Shift+G)}} |

Itinatakda ng **{{ui:Istilo}}** kung paano iginuhit ang model: {{ui:Mga face}} ({{ui:Shaded}}, {{ui:Hidden line}}, {{ui:Wireframe}}, {{ui:X-ray}}), {{ui:Ipakita ang mga gilid}}, at {{ui:Anino ng araw}} kasama ang petsa, oras at lugar ng araw. Tingnan ang [Mga istilo at anino ng araw](topic:styles-shadows).

Nagse-save ng mga view ang **{{ui:Mga scene}}**: {{ui:Magdagdag ng scene}}, ang listahan ng mga scene, at ang {{ui:Nakaraan}}, {{ui:Play}} at {{ui:Susunod}}. Tingnan ang [I-save ang mga view bilang scene](topic:scenes).

## Ang status bar

Sa ibaba, mula kaliwa pakanan:

1. **Ang tip**: ang kailangan ng tool sa susunod, o kung saan kumakapit ang pointer ("Endpoint", "On red axis").
2. **Mga mensahe**: kung ano ang kakatapos lang ("Na-undo ang push/pull.", "Na-import ang site.dxf: 1697 na edge sa lupa, sa isang group.") o kung bakit hindi gumana ang isang bagay.
3. **Ang value box**: nagbabago ang label nito ayon sa tool ({{ui:Haba}}, {{ui:Dimension}}, {{ui:Radius}}, {{ui:Gilid}}, {{ui:Distansya}}, {{ui:Anggulo}}, {{ui:Scale}}, {{ui:Offset}}). Ipinapakita nito ang laki habang nagtatrabaho ka, at tinatanggap ang anumang i-type mo. Tingnan ang [I-type ang eksaktong laki sa value box](topic:value-box).
4. **Ang key style**: ang {{ui:Keys: Push-pull}} o {{ui:Keys: Modeler}} ay sabay na nagpapalit ng keyboard shortcut at mouse button (pareho sa [mga setting ng ModelCraft](topic:settings)).
5. **{{ui:Snap}} at {{ui:Collide}}**: pagkapit sa mga punto, edge at axis, at paghinto ng mga solid kung saan sila magdampi. Naka-cross out = naka-off. I-click para magpalit. Tingnan ang [mga setting ng ModelCraft](topic:settings).
6. **Ang units picker**: ang unit kung saan ipinapakita ang mga haba. Tingnan ang [Simulan](topic:getting-started#check-the-units-first).

## Sa makitid na screen

Kapag mas makitid sa humigit-kumulang 760 pixel (telepono, o makitid na window), ang 3D view ang sumasakop sa screen. Iisang hanay na nagsa-scroll sa gilid ang toolbar, at ang mga panel ay nagbubukas bilang sheet mula sa bar sa ibaba ng screen.
