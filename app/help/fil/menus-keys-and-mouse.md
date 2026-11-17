---
title: Mga menu, key at mouse
summary: Pumili ng menu style na tugma sa modeler na alam mo na, bigyan ng sarili mong key ang anumang command, ilipat ang mga command sa pagitan ng mga menu, at itakda kung ano ang ginagawa ng wheel at ng middle at right mouse button.
keywords: menu style, menus, menu bar, toolbar, keyboard shortcuts, hotkeys, keys, key style, keymap, customize, remap, rebind, mouse, wheel, baligtarin, direksyon ng zoom, middle button, right button, orbit, pan, export, import, paglipat, pamilyar, push-pull, modeler
from: e56fce3d
---

Pareho ang mga tool ng ModelCraft kahit alin ang paraan mo ng pag-abot sa mga ito. Tinutukoy ng **menu style** kung saan sila nakalagay sa screen, paano sila tinatawag doon, at aling mga key ang nagpapatakbo sa kanila. Pumili nito sa {{ui:Settings}} ({{key:Mod+,}}) › {{ui:ModelCraft}} › {{ui:Menus, keys and mouse}}; agad ang pagbabago, at tinatandaan ito ng browser na ito.

## Ang mga style

| Style | Ang makukuha mo |
|---|---|
| {{ui:ModelCraft}} | Ang sariling toolbar ng ModelCraft (File, Draw, Modify, Organize, Edit, Camera) at ang single-letter key nito: {{key:L}} linya, {{key:R}} rectangle, {{key:P}} push/pull, {{key:M}} ilipat, {{key:Q}} i-rotate, {{key:S}} scale, {{key:E}} eraser, {{key:O}} orbit. Ang panimula. |
| {{ui:Push-pull}} | Isang menu bar (File, Edit, View, Camera, Draw, Tools, Window) sa ibabaw ng isang hilera ng pangunahing tool, na may parehong single-letter key. |
| {{ui:Modeler}} | Isang header menu bar (File, Edit, View, Select, Add, Object, Mesh) at ang mga key ng mesh modeler: {{key:W}} piliin, {{key:G}} grab, {{key:R}} i-rotate at {{key:S}} i-scale ang napiling bagay nang sabay ({{key:X}}, {{key:Y}} o {{key:Z}} ang nagla-lock ng isang axis habang gumagalaw ito), {{key:E}} push/pull, {{key:B}} rectangle, {{key:X}} burahin, {{key:A}} piliin lahat, {{key:Alt+A}} wala, {{key:Shift+D}} duplicate, {{key:Mod+G}} group, {{key:H}} itago. Umiikot ang middle button sa orbit; {{key:Shift}} at ang middle button ang nagpa-pan, {{key:Mod}} at ang middle button ang nag-zoom; kinakansela ng right button ang ginagawa ng tool. |
| {{ui:Beginner}} | Isang ribbon na ang tab na {{ui:Make}} ay ilang malalaking button: mga hugis na ihuhulog, butas, ilipat, ikot at sukat, align, {{ui:Group}} (mga butas na pinuputol sa mga hugis) at ang tseke para sa 3D printing; ang bawat ibang tool ay nasa tab na {{ui:More tools}}. Ang right button ay nagpapaikot ng orbit, ang middle button ay nagpapa-pan. Tingnan ang [Ang Beginner style](topic:beginner). |

Ang key style na maaaring kilala mo mula sa {{ui:Keys}} sa kanang ibaba ng view at mula sa {{ui:Edit}} › {{ui:More}} ay ang parehong pagpili: ang pagpili ng modeler key doon ay pumipili ng {{ui:Modeler}} style, at ang pagpili ng push-pull key ay umaalis dito para sa {{ui:ModelCraft}} style. Kung pumili ka ng modeler key sa mas lumang bersyon, magbubukas ang ModelCraft sa {{ui:Modeler}} style nang isang beses, nang kusa.

:::tip
Ang key na pag-aari ng push-pull keys pero ibinigay ng style mo sa ibang command ay walang gagawin, at sinasabi ng status line kung saan napunta ang command nito ("In Modeler, Push/pull is E"). Laging nananatili ang kahulugan ng {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} at ng mga arrow; laging napupunta sa value box ang mga numero, at habang may gumagalaw na tool, nananaig ang sarili nitong key.
:::

## Gawin itong sa iyo

1. Piliin ang style na pinakamalapit sa gusto mo, saka i-click ang {{ui:Customize…}}.
2. Sa {{ui:Keys and menus}}, hanapin ang command (nakatutulong ang search box). I-click ang {{ui:Add a key}} at pindutin ang key. I-click ang key para alisin ito.
3. Kapag may menu bar, inililipat ng {{ui:Where it sits}} ang command sa ibang menu, o sa {{ui:Keys only}}.
4. Sa {{ui:Mouse}}, itakda ang wheel at kung ano ang ginagawa ng mga button sa 3D view.
5. Bigyan ito ng pangalan at i-click ang {{ui:Save}}.

Ang pag-save ng built-in na style ay gumagawa ng sarili mong kopya ("My Modeler"); hindi kailanman nagbabago ang built-in. Binabasa ng kopya mo ang mga key ayon sa style na pinagmulan nito: ang gawa mula sa {{ui:Modeler}} ay nagpapanatiling gumagana ang grab, rotate at scale key nang sabay.

## Mouse

- **Mouse wheel**: {{ui:Scroll up zooms in}} (ang simula) o {{ui:Scroll up zooms out}}, at kung gaano kabilis. Laging nag-zo-zoom ang trackpad pinch ayon sa galaw ng daliri mo.
- **I-drag sa 3D view**: pinananatili ng {{ui:Each view's own}} ang mga button ng ModelCraft (nag-o-orbit ang middle button, nagpa-pan ang right button o ang {{key:Shift}} at ang middle button). O itakda ang middle at right button sa orbit, pan, zoom o wala; ang {{key:Shift}} kasama ang button ay nagpapalit ng orbit at pan. Laging sa tool na ginagamit ang left button.
- **Trackpad**: Ang {{ui:Settings}} › {{ui:ModelCraft}} › {{ui:Scrolling}} ay nagpapasya pa rin kung ang dalawang daliri ay mag-o-orbit (trackpad) o mag-zo-zoom (mouse). Tingnan ang [Orbit, pan at zoom](topic:orbit-pan-zoom).

## Dalhin ito kahit saan

{{ui:Export}} ay nagse-save ng style na ginagamit bilang maliit na `.ccinput.json` na file; ang {{ui:Import…}} ay nagdadagdag ng isa, mula sa ibang computer o mula sa katrabaho. Ang na-import na file ay maaari lamang tumuro sa sariling command ng ModelCraft: anumang iba pa rito ay iniiwan at binibilang sa status line. Inaalis ng {{ui:Delete this style}} ang isa sa sarili mong style.

:::note
Nananatili sa browser na ito ang mga setting na ito. Ang {{ui:Use this style in every app}} sa ilalim ng mga style card ay nagpapabukas sa bawat app ng tugmang style nito: ang {{ui:Push-pull}} ay kasama ng iba pang app na menu-bar style. Walang katapat ang {{ui:Modeler}} sa ibang app, kaya nananatili itong pagpili ng ModelCraft.
:::

Kaugnay: [Mga key at aksyon ng mouse](topic:keyboard) · [Mga setting ng ModelCraft](topic:settings) · [Galing sa ibang modeler](topic:coming-from)
