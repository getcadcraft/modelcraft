---
title: Nodes: bumuo ng model sa pamamagitan ng wiring
summary: I-wire ang mga numero sa mga punto, ang mga punto sa mga curve, at ang mga curve sa mga surface. Kapag binago mo ang isang numero, magre-rebuild ang lahat ng nasa ibaba nito. Ang bawat node ay isa ring linya ng CraftScript, at naka-save ang graph sa file.
keywords: nodes, node editor, visual scripting, parametric, graph, wires, ports, free-form, freeform, nurbs, loft, extrude, revolve, circle, curve, surface, series, range, random, list, script, craftscript, grasshopper
from: 9c8e254f
---

Ang editor na **Nodes** ay bumubuo ng geometry sa pamamagitan ng pag-wire ng mga kahon. Ang bawat kahon (isang node) ay may maliit na tungkulin: gumawa ng numero, punto, bilog, loft. Ikokonekta mo ang resulta ng isa sa input ng susunod, at susunod ang model kapag binago mo ang numero sa simula.

Buksan ito mula sa panel sa kanan: {{ui:Nodes}} › {{ui:Nodes…}}. Kapag may graph na ang file, kusa itong bubukas. Isa itong window sa ibabaw ng 3D view: i-drag ang title bar nito para ilipat, i-drag ang sulok nito para baguhin ang laki.

## Pag-wire

1. Pumili ng node mula sa listahan sa kaliwa (mag-type sa search box para paliitin, ang <kbd>Enter</kbd> ay nagdadagdag ng unang tumugma). Lalabas ito sa gitna ng canvas.
2. I-drag mula sa bilog na **output** na dot sa kanan ng isang node papunta sa bilog na **input** na dot sa kaliwa ng iba. Nagiging berde ang dot kapag angkop ito at pula kapag hindi; ituro ito para makita ang dahilan.
3. Ang input na walang nakakonektang bagay ay nagpapakita ng kahon para sa na-type na value. I-type ang isang numero at pindutin ang <kbd>Tab</kbd>: magre-rebuild ang resulta.
4. Ang maliit na bilog sa title bar ng node ay ang **eye** nito. Ang node na naka-on ang eye ay iginuguhit sa 3D view: bilang mga linya para sa curve, may shade para sa surface, at mga tuldok para sa punto.

I-drag ang node sa pamamagitan ng title bar nito. I-drag ang background para mag-pan, i-scroll ang wheel para mag-zoom. Tinatanggal ng <kbd>Delete</kbd> ang napiling node. Inaayos ng {{ui:Tidy}} ang mga node sa mga column, dinadala ng {{ui:Fit}} ang lahat sa view, at ang {{ui:Undo}} at {{ui:Redo}} ay naglalakad sa mga pagbabago mo.

## Mga uri at unit

May uri ang mga port: number, yes/no, point, vector, curve, surface, mesh, solid, o "geometry" para sa alinman sa mga iyon. Maaaring magpakain ang isang point sa vector input at pabalik. May unit ang mga numero: ang **length** ay nasa millimetre at ang **angle** ay nasa degree. Hindi maaaring magpakain ang length sa angle, at tinatanggihan ang length na pinarami sa length (isang area), kaya napipigilan ang maling wire sa sandaling gawin mo ito.

Ang parisukat na dot ay isang **list**. Kapag umabot ang list sa input na iisa ang value, tatakbo ang node nang isang beses para sa bawat item, at ang resulta nito ay magiging list. Inuulit ng mas maikling list ang huling item nito. Halimbawa, ang **Series** ng mga taas na ipinasok sa **Move** ay gagawa ng tambak ng mga kopya.

## Mga solid at Boolean bilang node

Ang grupong **Solids** ay gumagawa ng saradong mga katawan mula sa parehong eksaktong surface gaya ng panel ng Surfaces: **Box solid**, **Cylinder solid** at **Sphere solid** (mga sukat sa mm), **Union**, **Subtract** at **Intersect** (ang pangalawang solid ay kinukuha mula sa una; ang tolerance ay kung gaano kalayo ang maaaring ang mga triangle ng solid engine mula sa eksaktong surface), **Fillet between faces** (ang mga face ayon sa kanilang numero sa solid, 1 para sa una; isang radius at, kapag higit sa 0, isang radius sa dulo), **Solid volume** (mm³) at **Solid to mesh** (para makita o i-bake ito). May sariling uri ng port ang solid: hindi maaaring i-wire ang point o numero sa solid input, at mananatiling pula ang dot. Ginagamit ng mga node ng Boolean at Fillet ang sariling solid engine ng programa, na naglo-load sa unang pagbukas ng editor.

## Mga error

Ang node na hindi kayang gawin ang tungkulin nito ay nagsasabi kung bakit sa ilalim ng pangalan nito, sa pula (halimbawa, "The radius must be above zero."), at maghihintay ang mga node pagkatapos nito. Ang parehong mensahe ay isang Problem sa panel ng Problems, kaya mahahanap mo ito mula roon.

## Bawat node ay isang linya ng script

Pindutin ang {{ui:Script}} para makita ang graph bilang CraftScript: isang linya bawat node, gaya ng `n3 = nd_circle(n2, n1, [0 0 1]);`. I-edit ang teksto at pindutin ang {{ui:Make the graph from this script}} para ibalik ito bilang graph. Gumagana rin ang parehong `nd_` function sa CraftScript sa PartCraft, kaya maaaring patakbuhin, i-loop, o subukan doon ang isang graph. Ang mga random na numero ay palaging may **seed**, kaya pareho ang resulta ng graph sa bawat computer.

## Naka-save kasama ng file

Naka-save ang graph sa model file. Ang mga node ay gumagawa ng sarili nilang curve, surface at mesh: hindi nila binabago ang mga face ng model hangga't hindi mo hinihiling.

## I-bake sa model

I-on ang eye ng node na gumagawa ng surface o mesh, saka pindutin ang {{ui:Bake to model}} sa Nodes window. Ang bawat ipinakitang surface o mesh ay magiging grupo ng mga face sa model, sa metro, na maaari mong i-edit na tulad ng iba. Isang hakbang ito ng undo. Mananatili ang graph, pero hindi na susunod sa kanya ang kopya: baguhin ang numero at i-bake muli para sa bago. Hindi isinasama ang mga point at curve dahil hindi sila solid, at sinasabi ng mensahe kung ilan ang hindi isinama.
