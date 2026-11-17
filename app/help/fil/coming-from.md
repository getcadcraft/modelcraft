---
title: Galing sa ibang modeler
summary: Paano tumutugma ang mga ugali sa push/pull modeling sa ModelCraft, key sa key, at ang mga pagkakaibang nakakagulat sa mga tao.
keywords: paglipat, mag-migrate, pamilyar, pagkakaiba, push pull modeler, skp, shortcuts, ugali, ihambing, measurements box, outliner, entity info
from: 74ffd4ac
---

Kung nagmodelo ka sa SketchUp, pamilyar ang ModelCraft sa iyo: ang parehong ideya ng faces at push/pull, ang parehong tool letters, isang value box na tina-type mo nang hindi kini-click, inference gamit ang pula, berde at asul na axes, groups, components, isang Outliner, Entity Info at scenes. Nakalista sa pahinang ito kung ano ang direktang lumilipat at, mas mahalaga, kung ano ang hindi.

## Mga ugaling nadadala

| Nakasanayan mo | Sa ModelCraft |
|---|---|
| Pindutin ang Space para sa Select, L Line, R Rectangle, C Circle | Pareho: {{key:Space}}, {{key:L}}, {{key:R}}, {{key:C}} |
| Pindutin ang P Push/Pull, M Move, Q Rotate, S Scale, E Eraser, T Tape Measure | Pareho: {{key:P}}, {{key:M}}, {{key:Q}}, {{key:S}}, {{key:E}}, {{key:T}} |
| Pindutin ang O Orbit, H Pan, Z Zoom, Shift+Z Zoom Extents | Pareho: {{key:O}}, {{key:H}}, {{key:Z}}, {{key:Shift+Z}} |
| Pindutin ang G para gumawa ng component | Pareho: {{key:G}}. Ang {{key:Shift+G}} ay gumagawa ng group |
| I-type sa Measurements box nang hindi ito kini-click | Pareho, sa value box sa ibaba. Pindutin ang {{key:Enter}} |
| Mag-type ng `4m,3m` para sa rectangle, `12s` para sa mga gilid | Pareho |
| Mag-type ng `3x` o `/3` pagkatapos ng Move copy | Pareho; gumagana rin ang `*3` |
| Mag-type ng `[x,y,z]` o `<dx,dy,dz>` para sa point o offset | Pareho |
| Mag-type ng bare number sa architectural-inch model at makakuha ng inches | Pareho |
| Middle-drag para mag-orbit, Shift+middle-drag para mag-pan, wheel para mag-zoom sa cursor | Pareho |
| Double-click gamit ang Push/Pull para ulitin ang distansya | Pareho |
| Arrow keys para i-lock ang pula, berde, asul, at parallel | Pareho: {{key:Right}} pula, {{key:Left}} berde, {{key:Up}} asul, {{key:Down}} parallel |
| Hawakan ang Shift para i-lock ang inference | Pareho |
| Ctrl (Option sa Mac) para kopyahin habang gumagalaw | {{key:Ctrl}}, {{key:Mod}} o {{key:Alt}}, sa anumang computer |
| Shift para mag-toggle, Ctrl para magdagdag, Shift+Ctrl para mag-alis sa pinili | Pareho ang mga key; sa Mac, gamitin ang {{key:Mod}} kung saan nakasulat ang Ctrl |
| Window mula kaliwa pakanan, crossing mula kanan pakaliwa | Pareho |
| Dimension tool para lagyan ng label ang mga haba | {{key:D}}, at higit pa: mag-type ng bagong haba sa isang dimension at magre-resize ang model dito. Tingnan ang [Dimension and resize](topic:dimensions) |
| Double-click sa face para sa face at mga gilid; triple-click para sa lahat ng konektado | Pareho |
| Double-click sa group para i-edit; Esc para isara | Pareho |
| Gumuhit ng linya sa ibabaw ng face para hatiin ito; burahin ang gilid sa pagitan ng coplanar na faces para pagdugtungin sila | Pareho |
| Itulak ang window rectangle sa pader para putulin ito | Pareho |
| Back faces sa asul-kulay-abo; Reverse Faces | Pareho ang kulay; {{ui:Reverse face}} sa {{ui:Entity info}} |
| Scenes bilang tabs sa ibabaw ng view, Page Up at Page Down | Pareho, kasama ang {{ui:Play}} sa {{ui:Scenes}} panel |
| Shadows mula sa petsa, oras, latitude at longitude, may north sa berde | Pareho, sa {{ui:Style}} panel |

## Mga pagkakaibang nakakagulat

### Ang pag-save ay download

Walang Save na nag-o-overwrite sa binuksang file, walang Save As dialog na may pangalan, walang autosave at walang backup file. Ang {{ui:Save}} ({{key:Mod+S}}) ay nagda-download ng bagong `.modelcraft` file sa bawat pagkakataon, kadalasan sa iyong downloads folder. Mag-save nang madalas, at ikaw mismo ang magpalit ng pangalan o maglipat ng mga file. Tingnan ang [Open, save, import and export](topic:files).

### Nag-iimport ng .skp files, pero hindi nagse-save ng mga ito

{{ui:Import}} ay bumabasa ng SketchUp files gamit ang sariling reader ng ModelCraft, sa loob ng page: nakakarating ang mga group, component, kulay, texture sa mga face, tag at soft edges. Tingnan ang [File formats in detail](topic:formats#skp-files). Hindi kayang i-save ng ModelCraft ang `.skp`: para bumalik, i-export ang Collada mula sa ModelCraft at i-import ito sa SketchUp.

### Walang right-click menu

Ang right-drag ay nagpa-pan; walang ginagawa ang right-click. Ang mga command na hahanapin mo sa context menu ay nasa {{ui:Entity info}} ({{ui:Reverse face}}, {{ui:Edit}}, {{ui:Explode}}, {{ui:Make unique}}, {{ui:Make component}}) at sa {{ui:Organize}} group ng toolbar.

### Nasa status bar ang mga unit

Walang Model Info o pagpili ng template. Nasa kanang ibaba ang unit picker. Nagsisimula ang bagong model sa feet at inches sa US at sa millimeters sa ibang lugar, ayon sa language setting ng iyong browser. Laging period ang decimal: `2.5m`, hindi kailanman `2,5m`, dahil laging naghihiwalay ng values ang comma.

### May sariling materyal ang Paint

{{ui:Paint}} ({{key:B}}) ay nagpipintura ng solid na kulay at ng mga materyal sa seksyong {{ui:Materials}}: brick, siding, roofing, wood, stone at iba pa, na iginuhit ng ModelCraft. Hindi ka pa makakapag-load ng sarili mong larawan bilang materyal; nananatili ang mga texture na kasama ng mga na-import na file. Tingnan ang [Paint with colors and materials](topic:paint).

### Pantay ang scale, walang grips

Hindi nagpapakita ng kahon na may grips ang Scale. I-click ang punto na nananatiling nakatayo, isang reference point, pagkatapos ang bagong laki o typed na factor. Laging pantay ang scale sa lahat ng direksyon. Para mag-stretch sa iisang direksyon, i-push/pull o ilipat ang face, o i-retype ang lapad, lalim o taas ng group sa {{ui:Entity info}}, o [mag-resize gamit ang dimension](topic:dimensions).

### Pumipili ang Rotate ng eroplano nito batay sa kung saan ka nag-click

Walang protractor na dumidikit sa mga face habang nag-hover ka gamit ang arrow keys para pumili ng eroplano. I-click ang sentro sa isang face para umikot sa eroplano ng face na iyon, o sa lupa para umikot sa patayo. Ang arrow keys ay nag-o-orbit ng view bago ang unang click.

### Inference mula sa mga punto na dinaanan mo

Nagsa-snap ang ModelCraft sa direksyon ng axis mula sa **iyong start point**, at sa mga punto, gilid at face sa ilalim ng pointer. Hindi nito sinusubaybayan ang direksyon mula sa punto na dinaanan mo lang sa hover (ang tuldok-tuldok na "from point" inference). Para umayon sa malayong sulok, i-lock ang axis gamit ang arrow key at i-hover ang sulok na iyon: dumudulas ang naka-lock na punto para umayon dito. O maglagay ng [guide](topic:guides-measure).

### Ang parallel ay gumagamit ng gilid na nadaanan mo bago magsimula

Ang parallel at perpendicular inference ay gumagamit ng huling gilid na tinawiran ng pointer **bago ang unang click**, hindi ng mga gilid na dinadaanan mo habang gumuguhit. Tingnan ang [Inference and snapping](topic:inference#parallel-and-perpendicular).

### Ang mga kopya ng group ay naka-link

Ang pagkopya ng group gamit ang {{ui:Move}} ay gumagawa ng pangalawang placement ng parehong group, kaya kapag inedit ang isa, nagbabago ang pareho, gaya ng components. Ginagawang independent ng SketchUp ang mga group. Tingnan ang [Troubleshooting](topic:troubleshooting#editing-one-group-changed-another).

### Hindi nagpa-pan ang Space

Pumipili ang {{key:Space}} ng {{ui:Select}}, gaya sa SketchUp. Sa ilang ibang web app, nagpa-pan ang pagpigil sa Space; dito, hindi. Ang right-drag ang nagpa-pan sa halip.

### Nag-zu-zoom ang two-finger scroll

Sa trackpad, itakda ang {{ui:Settings}} › {{ui:ModelCraft}} › Scrolling sa Trackpad: nag-o-orbit ang dalawang daliri, {{key:Shift}} at dalawang daliri ang nagpa-pan, nag-zu-zoom ang pinch. Tingnan ang [Orbit, pan and zoom](topic:orbit-pan-zoom#on-a-trackpad).

Kung ang mga kamay mo ay sanay sa mga key ng Blender sa halip na sa SketchUp, piliin ang {{ui:Modeler}} na menu style: ang {{key:G}}, {{key:R}} at {{key:S}} ay kumikilos sa pinili nang sabay, ang {{key:E}} ay nag-e-extrude (push/pull), ang {{key:Shift+D}} ay nagdo-duplicate, at isang header menu bar (File, Edit, View, Select, Add, Object, Mesh) ang pumapalit sa toolbar. Kung galing sa SketchUp, ang {{ui:Push-pull}} style ay nagbibigay ng menu bar na parang sarili nito sa parehong tool letters. Tingnan ang [Menus, keys and mouse](topic:menus-keys-and-mouse).

### Ang mga solid na itinulak sa isa't isa ay hindi nagpuputol

Pinuputol ng push/pull ang face sa likod nito sa parehong object, pero ang dalawang magkahiwalay na solid na itinulak sa isa't isa ay hindi nagsasalubong. Walang Intersect Faces at walang Solid Tools.

### Ang wala

Ang Freehand, Trim, Split at Outer Shell, ang sarili mong image materials, extensions, at layout tool para sa sheets ay wala sa build na ito. Nakalista sa [Not built yet](topic:not-built-yet) ang dapat gawin sa halip.

## Mga shortcut na pinananatili ng browser

Tumatakbo ang ModelCraft sa browser, kaya ang ilang shortcut ay sa browser, hindi sa app. Ang {{key:Mod+N}} ay nagbubukas ng browser window (gamitin ang {{ui:New}}), at ang {{key:Mod+W}} ay nagsasara ng tab. Kung may hindi pa nase-save na pagbabago, magtatanong muna ang browser bago magsara. Tingnan ang [Keys, mice and trackpads](common:keys#shortcuts-the-browser-keeps).
