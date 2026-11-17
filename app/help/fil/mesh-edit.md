---
title: I-edit ang mesh sa Mesh workspace
summary: Piliin ang vertex, edge at face ng mesh, ilipat ang mga ito, at i-extrude, i-inset, i-bevel, putulin, pagsamahin, punan at ikonekta ang mga ito, gamit ang alinmang key style.
keywords: mesh, edit mode, mesh workspace, vertex, vertices, edge, edges, gilid, face, faces, mukha, extrude, inset, bevel, loop cut, knife, bisect, spin, merge, dissolve, punan, grid fill, bridge, subdivide, slide, proportional editing, falloff, workspace
from: 92a372dd
---

Ina-edit ng **Mesh** workspace ang isang [mesh](topic:meshes) point by point: ang vertex, edge at face nito. Nananatili sa **Model** workspace ang push/pull geometry.

## Buksan ito

- Piliin ang {{ui:Mesh}} sa listahan ng {{ui:Workspace}} sa kaliwa ng toolbar. Bubuksan ang napiling mesh para i-edit; ang napiling group o component ay ginagawang mesh muna (isang undo step).
- O i-double-click ang mesh, o, gamit ang modeler key, piliin ito at pindutin ang {{key:Tab}}.
- Kapag walang napili, nag-aalok ang panel ng mga mesh na idadagdag: plane, grid, cube, circle, cylinder, cone, sphere, ico sphere at torus. Mapupunta ang bagong mesh kung saan tumitingin ang view at bubukas para i-edit.

Ang {{ui:Back to Model}} (o ang listahan, {{key:Tab}} gamit ang modeler key, {{key:Esc}} kapag walang napili gamit ang push/pull key) ay bumabalik sa Model na napili ang mesh. Habang bukas ang Mesh workspace, pinapalabo ang natitirang model at inililigpit ang mga drawing tool ng Model.

## Pumili

| Gawin | Para sa |
|---|---|
| {{key:1}} {{key:2}} {{key:3}} | Pumili ng vertex, edge o face |
| I-click | Pumili ng isa; ang {{key:Shift}}+click ay nagdadagdag o nag-aalis |
| I-drag ang kahon | Piliin ang nasa loob at nakikita; ang {{key:Shift}} ay nagdadagdag, ang {{key:Ctrl}} ay nag-aalis |
| {{key:Alt}}+click sa edge, o i-double-click ito | Ang edge loop nito (face loop sa face mode; ang buong hangganan sa bukas na edge) |
| {{key:Ctrl}}+{{key:Alt}}+click sa edge | Ang edge ring nito |
| Triple-click | Lahat ng konektado rito |

Ang grupong {{ui:Select}} ay mayroon ding {{ui:All}}, {{ui:Linked}}, {{ui:Loop}}, {{ui:Ring}}, {{ui:More}} at {{ui:Less}}.

## Ilipat, i-rotate, i-scale

{{ui:Move}}, {{ui:Rotate}} at {{ui:Scale}} ay nagsisimula sa pointer: igalaw ito, saka i-click o pindutin ang {{key:Enter}} para ibaba ang napili, o {{key:Esc}} para kanselahin. Ang {{key:X}}, {{key:Y}} o {{key:Z}} (o ang arrow keys) ay nagla-lock ng axis. I-type ang distansya, anggulo o factor para sa eksaktong halaga; gumagana rin ang [calculations](topic:value-box#calculations).

**Proportional editing** ({{ui:Proportional}}, o ang panel): ang mga vertex na malapit sa napili ay sumusunod sa galaw, at bumababa ang epekto habang lumalayo, hanggang sa abot na itinakda mo, gamit ang falloff na pipiliin mo. I-on ang {{ui:Only along the mesh}} para sukatin sa kahabaan ng mga edge sa halip na tuwid.

Ang {{ui:Slide}} ay gumagalaw ng napiling edge loop sa kahabaan ng mga katabing edge.

## Baguhin ang hugis

| Tool | Ginagawa nito |
|---|---|
| {{ui:Extrude}} | Hinihila ang napiling face palabas sa kanilang normal, na may bagong side face (o gumagawa ng face mula sa bukas na hangganang edge). I-type ang distansya |
| {{ui:Inset}} | Isang banda sa loob ng outline ng napiling face; pindutin ulit ang {{key:I}} para sa bawat face nang hiwalay |
| {{ui:Bevel}} | Pinuputol ang napiling edge (o, {{key:Ctrl}}+{{key:Shift}}+{{key:B}}, vertex) sa isang lapad; ang wheel o ang plus at minus key ay nagdadagdag ng segment para sa bilugang edge |
| {{ui:Loop cut}} | Ituro ang edge: bagong loop sa kabila ng ring ng apat na panig na face; itinatakda ng wheel kung ilan; i-click para putulin |
| {{ui:Knife}} | I-click ang mga punto sa edge o sulok; pumuputol ang {{key:Enter}} nang tuwid sa mga face sa pagitan nila, gaya ng nakikita mo |
| {{ui:Bisect}} | Gumuhit ng linya sa screen: pinuputol ang napiling face (o lahat) sa kahabaan nito |
| {{ui:Spin}} | Iniikot ang napiling face o bukas na edge sa paligid ng asul na axis sa mga hakbang (itinatakda ng wheel); ang buong ikot ay nagsasara |
| {{ui:Subdivide}} | Pinuputol ang napiling edge sa dalawa; nagiging grid ang buong face |
| {{ui:Merge}} | Nagiging isa ang napiling vertex, sa gitna nila |
| {{ui:Dissolve}} | Inaalis ang napili pero pinananatili ang ibabaw: nagdudugtong ang mga face |
| {{ui:Fill}} | Isang face sa kabila ng napiling bukas na hangganan (o sa pagitan ng dalawang bukas na edge) |
| {{ui:Grid fill}} | Pinupuno ang bukas na hangganan na may pantay na bilang ng edge ng grid ng quad |
| {{ui:Bridge}} | Ikinokonekta ang dalawang napiling bukas na edge loop gamit ang mga face |
| {{ui:Crease}} | Gaano katalim mananatili ang napiling edge kapag pinakinis ng Subdivision surface ang mesh: ilayo mula sa gitna, gamitin ang wheel (mga hakbang na 0.1) o i-type ang 0 hanggang 1. Ipinapakita ng panel ang crease ng napiling edge at tumatanggap din ng i-type na halaga. Iginuguhit sa magenta ang mga crease na edge |
| {{ui:Flip}}, {{ui:Smooth}}, {{ui:Delete}} | Ibinabaligtad ang face; pinapakinis ang vertex patungo sa kapitbahay nila; binubura ayon sa select mode |

Bawat isa ay isang undo step. Sumusunod ang texture coordinate, kulay at weight papunta sa bagong face at vertex.

## Remesh

{{ui:Remesh}} ay ginagawang muli ang buong mesh bilang pantay na triangle na may iisang laki, na hinihingi kapag pinindot mo ito (mas maliit ay mas pino at mas mabagal). Pinupunan nito ang mga butas, pinagdurugtong ang mga piyesang nagsasapawan, at pinapantay ang mesh na ininat ng sculpting. Bahagyang bilog ang matatalas na edge. Nagsisimula ulit ang UV, pintura at crease. Isang undo step.

## Retopology

Para bumuo ng bago at mas malinis na mesh sa ibabaw ng detalyadong isa (sculpt, scan), piliin ang detalyadong isa sa ilalim ng {{ui:Retopology}} › **Itayo sa** sa panel, saka:

- **I-snap ang mga inilipat na punto dito:** ang mga punto na igagalaw mo, at ang mga edge na i-extrude mo, ay mapupunta sa ibabaw nito.
- **Ilagay ang napiling punto dito** ay inilalagay ang napiling punto sa ibabaw nito ngayon (isang undo step).
- **Ipakita ang edge ng mesh na ito sa harap** ay iginuguhit ang mesh na binubuo mo sa ibabaw ng ibabaw, para makita mo ito.

## Ayusin ang huling operasyon

Pagkatapos ng {{ui:Inset}}, {{ui:Bevel}}, {{ui:Loop cut}}, {{ui:Subdivide}}, {{ui:Smooth}}, {{ui:Grid fill}} o {{ui:Spin}}, ipinapakita ng panel ang mga setting nito (lapad, segment, profile, cut …). Baguhin ang isa at uulitin ang operasyon mula sa simula, pero isang undo step pa rin ito.

## Mga key

| | Push/pull keys | Modeler keys |
|---|---|---|
| Ilipat, i-rotate, i-scale | {{key:M}} {{key:Q}} {{key:S}} | {{key:G}} {{key:R}} {{key:S}} ({{key:G}} dalawang beses ay nag-slide) |
| Extrude, inset | {{key:P}}, {{key:F}} | {{key:E}}, {{key:I}} |
| Burahin | {{key:E}} o {{key:Delete}} | {{key:X}} o {{key:Delete}} |
| Crease | {{key:Shift+C}} | {{key:Shift+E}} |
| Piliin lahat, wala, baligtarin | {{key:Ctrl+A}}, {{key:Esc}}, {{key:Ctrl+I}} | {{key:A}}, {{key:Alt+A}}, {{key:Ctrl+I}} |
| Pareho | {{key:Ctrl+B}} bevel, {{key:Ctrl+R}} loop cut, {{key:K}} knife | ang pareho, at {{key:F}} fill, {{key:M}} merge, {{key:Ctrl+X}} dissolve, {{key:L}} / {{key:Ctrl+L}} linked, {{key:Alt+N}} flip, {{key:O}} proportional, {{key:Shift+V}} vertex slide |

Tingnan din ang [Mga mesh](topic:meshes), [Mga modifier sa mesh](topic:modifiers) at [Hindi pa nagagawa](topic:not-built-yet).
