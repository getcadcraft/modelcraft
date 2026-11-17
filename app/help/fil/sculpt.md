---
title: I-sculpt ang mesh
summary: Hubugin ang mesh na parang luwad gamit ang mga brush — draw, clay, smooth, grab, inflate, crease, pinch, flatten — protektahan ang mga bahagi gamit ang mask, i-mirror sa kabila ng X, at magdagdag ng detail kung saan ka nagsi-sculpt.
keywords: sculpt, sculpting, brush, brushes, clay, draw, smooth, grab, inflate, crease, pinch, flatten, mask, symmetry, mirror, detail, dynamic topology, pen, presyon, tablet, stylus
from: 5477801a
---

Hinuhubog ng Sculpt workspace ang mesh gamit ang mga brush, gaya ng luwad: i-drag sa ibabaw at tumataas ito, lumulubog, nagiging makinis, o sumusunod sa pointer sa ilalim ng bilog na brush, pinakamalakas sa gitna at unti-unting nawawala sa gilid nito.

## Pagsisimula

Piliin ang isang mesh at piliin ang {{ui:Sculpt}} sa listahan ng Workspace. Nagiging mesh muna ang isang group o component, gaya sa Mesh workspace. Gumagana ang mga brush sa mga vertex ng mesh, kaya ang mesh na may mas maraming vertex ay nakakakuha ng mas pinong hugis: i-subdivide muna ito (ang {{ui:Hatiin}} ng Mesh workspace, o isang Subdivision surface modifier na i-Apply mo), o i-on ang {{ui:Detail}}.

## Mga brush

| Brush | Key | Ano ang ginagawa |
| --- | --- | --- |
| {{ui:Draw}} | {{key:D}} | Itinataas ang ibabaw sa ilalim ng brush |
| {{ui:Clay}} | {{key:C}} | Bumubuo ng patag na mga layer, pinupuno muna ang mga lubak |
| {{ui:Pakinis}} | {{key:S}} | Pinapantay ang mga umbok; i-hold ang {{key:Shift}} para mag-smooth gamit ang anumang brush |
| {{ui:Hawakan}} | {{key:G}} | Hinihila ang ibabaw kasama ang pointer |
| {{ui:Inflate}} | {{key:I}} | Pinalalaki ang ibabaw palabas sa sarili nitong direksyon |
| {{ui:Crease}} | {{key:Shift+C}} | Naghihiwa ng matalas na uka |
| {{ui:Pinch}} | {{key:P}} | Hinihila ang ibabaw papunta sa gitna ng brush |
| {{ui:Patagin}} | {{key:T}} | Pinipiga ang ibabaw papunta sa average na eroplano nito |
| {{ui:Mask}} | {{key:M}} | Nagpipinta ng mask na nagpoprotekta sa ibabaw mula sa ibang brush |

I-hold ang {{key:Ctrl}} habang nagsa-stroke para gumana sa kabilang paraan (magpababa sa halip na magpataas, isang tagaytay sa halip na uka, alisin ang mask), o i-on ang {{ui:Alisin}}.

## Laki at lakas

Ang laki ng brush ay nasa pixel sa screen, kaya pareho ang pakiramdam kahit gaano kalayo ang zoom: ang {{key:[}} at {{key:]}} ay nagpapaliit at nagpapalaki nito, ang {{key:Shift+[}} at {{key:Shift+]}} ay nagbabago ng lakas nito. Ipinapakita ng panel ang dalawa.

Kapag gumagamit ng pen sa tablet, ang mas malakas na pagpindot ay nagpapalaki at nagpapalakas sa brush; maaaring i-off ng panel ang alinman sa dalawa.

## Mirror, mask at detail

- Ang {{ui:Mirror X}} ({{key:X}}) ay nagsa-sculpt sa magkabilang panig sa kabila ng pula nang sabay, para sa mukha at pigura.
- Lumilitaw na mas madilim ang mask habang nagsa-sculpt ka. Inaalis ito ng {{ui:Burahin ang mask}} ({{key:Alt+M}}), binabaligtad ng {{ui:I-baliktad ang mask}} ({{key:Ctrl+I}}) ang minask na malaya at pinalalaya ang minask. Nananatili ang mask kasama ng mesh.
- Ang {{ui:Detail}} ay nagdaragdag ng triangle kung saan ka nagsa-sculpt: ang mga edge na mas mahaba sa laki na nakatakda sa panel (pixel sa screen) ay nahahati sa ilalim ng brush. Kailangan nito ng mesh na triangle, at magtatanong ito kung gagawin muna ito.

Ang bawat stroke ay isang undo step.

:::note
Nagdadagdag lang ng triangle ang Detail; hindi nito tinatanggal ang mga naging napakaliit. Pinapantay ulit ng Remesh (ng Mesh workspace) ang buong mesh.
:::

Tingnan din ang [I-edit ang mesh](topic:mesh-edit), [Mga mesh](topic:meshes) at [Mga modifier sa mesh](topic:modifiers).
