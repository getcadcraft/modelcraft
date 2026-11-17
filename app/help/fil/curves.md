---
title: Mga curve object
summary: Gumuhit ng Bézier, NURBS at straight-segment na curves, bigyan sila ng kapal, lapad o taper, punuin ang mga patag, itakda ang teksto bilang curve, at gawing mesh.
keywords: curve, curves, bezier, nurbs, spline, splines, path, tube, pipe, cable, rope, bevel, extrude, taper, tilt, radius, fill, profile, teksto, letters, logo, curve to mesh
from: 602bf077
---

Ang **curve object** ay curve na gumagawa ng hugis: isang tubo sa kahabaan nito (bevel), isang banda (extrude), isang nagtatapering sungay (taper), o — kapag patag at sarado — isang punong plato o mga letra. Sumusunod ang hugis sa curve: ilipat ang isang point at gumagalaw ang tubo kasama nito. Kapag tama na ang hugis, gawin itong mesh.

## Magdagdag ng curve

Piliin ang {{ui:Curve}} sa Workspace list at pindutin ang {{ui:Add}}:

| Uri | Ano ito |
| --- | --- |
| Bézier curve, Bézier circle | Dumadaan sa mga point nito; may dalawang handle ang bawat point na nagtatakda ng direksyon ng curve |
| NURBS curve, NURBS circle, Path | Makinis, iginuguhit papunta sa mga point nito (nagsisimula at nagtatapos ito sa mga end point nito); may weight ang bawat point |
| Text | Ang teksto mo bilang patag, punong outline ng mga letra |

Ang bagong curve ay may manipis na tubo para makita at mapili ito; itakda ang **Lalim ng bevel** nito sa 0 para sa hubad na curve.

Maaari ka ring magsimula mula sa iginuhit na: piliin ang arc, circle, polygon o iginuhit na curve sa Model workspace at pindutin ang {{ui:Make a curve object}} sa Entity info. Nananatili ang mga iginuhit na linya.

## I-edit ang mga point

I-double-click ang curve object (o piliin ito at pindutin ang {{ui:Curve}}) para i-edit ito.

- I-click ang point o handle (Shift para magdagdag o mag-alis); i-drag para ilipat. I-drag sa bakanteng espasyo para pumili gamit ang kahon.
- Idinadagdag ng {{ui:Pahabain}} ({{key:E}}, o {{key:Ctrl}}+click) ang isang point pagkatapos ng napiling dulo, sa pointer.
- Naglalagay ang {{ui:Hatiin}} ({{key:W}}) ng point sa pagitan ng bawat pares ng napiling magkakatabi; nananatili ang hugis ng Bézier.
- Ang {{ui:Ilipat}}, {{ui:Paikutin}}, {{ui:Scale}} ay gumagalaw sa napiling mga point kasama ng pointer (modeler keys {{key:G}} {{key:R}} {{key:S}}, push/pull keys {{key:M}} {{key:Q}} {{key:S}}); i-click para panatilihin, {{key:Esc}} para kanselahin.
- Ang {{ui:Isara}} ({{key:C}}) ay nagsasara ng bukas na spline o nagbubukas ng sarado; ang {{ui:Baligtarin}} ({{key:Shift+R}}) ay pinapatakbo ito sa kabilang direksyon.
- Mga Bézier handle: ang {{ui:Pakinis}} ({{key:V}}) ay naglalagay sa mga ito para sa makinis na curve, ang {{ui:Sulok}} ({{key:Shift+V}}) ay itinututok ang mga ito sa mga kapitbahay, ang {{ui:Malaya}} ({{key:Alt+V}}) ay iniiwan sila kung saan mo inilagay. Ang pag-drag sa isang handle ay ginagawa itong malaya.
- Ang {{ui:Bézier}}, {{ui:NURBS}} at {{ui:Poly}} ay nagpapalit ng uri ng napiling splines, habang iniingatan ang mga point.

Bawat pagbabago ay isang hakbang ng undo.

## Hugis

Nasa panel ang mga setting (at sa Entity info sa Model workspace):

- **Shape:** ang 3D na curve ay pupunta sa anumang direksyon; ang patag na curve ay nananatili sa sarili nitong eroplano at puwedeng punuin.
- **Fill closed splines** (patag): nagiging plato ang mga outline; ang outline sa loob ng iba ay butas, kaya nananatili ang mga butas ng mga letra.
- **Extrude:** kalahati ng lapad ng banda (bukas o 3D na curve), o kalahati ng kapal ng plato (punong hugis).
- **Lalim ng bevel** at **kabilugan:** isang bilog na tubo sa kahabaan ng curve (sa extrude: bilog na banda); sa punong hugis, bilog na gilid.
- **Close the ends:** mga takip sa bukas na tubo.
- **Taper sa kahabaan:** pantay na nag-i-scale sa kahabaan ng bawat spline, halimbawa `1, 0.2` para sa sungay, `0, 1, 0` para sa spindle.
- **Kinis** at, para sa NURBS, **order**: gaano kapino ito iginuhit, at gaano kakinis (2 tuwid … 6 pinakamakinis).
- Kapag may napiling points: **radius** (kapal ng tubo doon, beses ang bevel), **tilt** (iniikot ang banda sa paligid ng curve) at, para sa NURBS, **weight**.

Gumagana ang modifiers sa ibabaw ng curve object gaya ng sa mesh: isang Array sa kahabaan nito, isang Mirror, isang Subdivision surface. Tingnan ang [Modifiers on a mesh](topic:modifiers).

## Gawing mesh

{{ui:Sa mesh}} (sa Curve workspace o sa Entity info, {{ui:Curve sa mesh}}) ay ginagawang mesh ang curve object ayon sa ipinapakita nito ngayon; nananatili ang modifiers nito sa ibabaw. Pagkatapos, i-edit ito sa Mesh workspace. Ibinabalik ito ng undo sa dati.

Tingnan din ang [Meshes](topic:meshes) at [Edit a mesh](topic:mesh-edit).
