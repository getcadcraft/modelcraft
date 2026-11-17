---
title: Listahan ng tool
summary: Bawat tool ng ModelCraft kasama ang key nito, ang ginagawa ng bawat click, at ang maaari mong i-type sa value box habang gumagana ito.
keywords: tools, toolbar, commands, listahan, line, rectangle, circle, polygon, offset, arc, curve, spline, follow me, sweep, 2 point arc, arc from center, select, push pull, move, rotate, scale, eraser, tape, dimension, orbit, pan, zoom, place component
from: e08a274f
---

Laging sinasabi ng tip sa status bar kung ano ang gusto ng kasalukuyang tool sa susunod. Kinakansela ng {{key:Esc}} ang kasalukuyang ginagawa ng tool.

## Mga tool sa pagguhit

| Tool | Key | Mga click | I-type sa value box |
|---|---|---|---|
| {{ui:Line}} | {{key:L}} | Simula, saka bawat susunod na point. Humihinto kapag nagsara ang face, o sa {{key:Esc}} | Haba patungo sa pointer; `[x,y,z]` para sa isang point; `<dx,dy,dz>` para sa offset ({{ui:Length}}) |
| {{ui:Rectangle}} | {{key:R}} | Unang sulok (lupa o face), kabilang sulok | Lapad at lalim: `4m,3m` ({{ui:Dimensions}}) |
| {{ui:Circle}} | {{key:C}} | Center (lupa o face), isang point sa gilid | Bago ang unang click: bilang ng sides, `24s` o `24` ({{ui:Sides}}). Pagkatapos: ang radius ({{ui:Radius}}) |
| {{ui:Polygon}} | {{key:N}} | Center, isang sulok | Kapareho ng Circle; nagsisimula sa 6 na sides |
| {{ui:Arc}} | {{key:A}} | Simula, dulo, saka ang bulge | Haba ng chord pagkatapos ng simula ({{ui:Length}}); ang bulge pagkatapos ng dulo ({{ui:Bulge}}); `12s` para sa mga segment |
| {{ui:Protractor}} | — | Center, point ng 0°, saka ang anggulo | Ang anggulo sa degree ({{ui:Angle}}) |
| {{ui:Follow me}} | — | Pumili ng path, saka i-click ang face (o i-click ang face, saka isang edge ng path) | — |
| {{ui:Paint}} | {{key:B}} | Isang face, group o component | — ({{key:Ctrl}} konektado, {{key:Shift}} lahat ng kulay na iyon, {{key:Alt}} kunin ang kulay) |
| {{ui:Offset}} | {{key:F}} | Isang face (o pumili muna ng face o mga edge), saka ang gilid at distansya | Ang distansya ({{ui:Distance}}); ang papasok sa face ay papunta sa loob |
| {{ui:Curve}} | — | Mga point na dinadaanan ng curve; tinatapos ng {{key:Enter}} o double-click | Haba sa kahabaan ng pointer, `[x,y,z]` o `<dx,dy,dz>` para sa susunod na point |
| {{ui:Arc center}} | — | Center, simula, saka ang dulo | Ang radius pagkatapos ng center; ang anggulo sa degree pagkatapos ng simula; `12s` para sa mga segment |

## Mga tool sa pag-edit

| Tool | Key | Mga click | I-type sa value box |
|---|---|---|---|
| {{ui:Select}} | {{key:Space}} | I-click, i-double-click, i-triple-click, i-drag ang isang kahon. Tingnan ang [Pumili ng mga bagay](topic:select) | Kapag may isang dimension o edge na napili: bagong haba, na nagre-resize sa model |
| {{ui:Push/pull}} | {{key:P}} | Ang face, saka ang distansya. I-double-click ang face para ulitin ang huling distansya | Isang distansya; ang negatibo ay pupunta sa kabilang direksyon ({{ui:Distance}}) |
| {{ui:Move}} | {{key:M}} | Mula sa isang point, papunta sa isang point. Pindutin nang matagal ang {{key:Ctrl}} o {{key:Alt}} para kopyahin | Isang distansya patungo sa pointer, `<dx,dy,dz>` o `[x,y,z]` ({{ui:Distance}}). Pagkatapos kopyahin: `3x` o `/3` |
| {{ui:Rotate}} | {{key:Q}} | Center (sa face para i-turn sa eroplano nito), direksyon ng simula, direksyon ng dulo | Ang anggulo sa degree ({{ui:Angle}}) |
| {{ui:Scale}} | {{key:S}} | Ang point na nananatili, isang reference point, ang bagong laki | Isang factor: `2`, `0.5` ({{ui:Scale}}) |
| {{ui:Eraser}} | {{key:E}} | I-click o i-drag sa ibabaw ng mga edge, group, guide at dimension | wala |
| {{ui:Tape}} | {{key:T}} | Mula sa isang edge: isang parallel na guide line. Mula sa isang point: sumusukat at nag-iiwan ng guide point | Ang offset ({{ui:Offset}}) o ang distansya ({{ui:Length}}) |
| {{ui:Dimension}} | {{key:D}} | Dalawang sulok (o isang edge), saka kung saan ilalagay ang dimension line. Tingnan ang [Dimension at pag-resize](topic:dimensions) | Ang offset ({{ui:Offset}}). Pagkatapos: bagong haba, na nagre-resize sa model |

Gumagana ang {{ui:Move}}, {{ui:Rotate}} at {{ui:Scale}} sa selection. Kapag walang napili, ang unang i-click mo ang kukunin nila (ang face ay nagdadala ng mga edge nito).

## Mga camera tool

| Tool | Key | I-drag para |
|---|---|---|
| {{ui:Orbit}} | {{key:O}} | Umikot sa bahagi ng model sa ilalim ng pointer ({{key:Shift}} ay nagpa-pan) |
| {{ui:Pan}} | {{key:H}} | I-slide ang view |
| {{ui:Zoom}} | {{key:Z}} | Zoom: pataas ay palapit, pababa ay palayo |
| {{ui:Extents}} | {{key:Shift+Z}} | (isang button, hindi tool) Ilapat sa view ang buong model |

Bihira mong kailanganin ang mga ito gamit ang mouse: ang middle-drag ay umiikot, ang right-drag ay nagpa-pan, at ang wheel ay nagzu-zoom sa kahit anong tool. Tingnan ang [Orbit, pan at zoom](topic:orbit-pan-zoom).

## Ayusin

| Button | Key | Ginagawa |
|---|---|---|
| {{ui:Component}} | {{key:G}} | Ginagawang component ang selection |
| {{ui:Group}} | {{key:Shift+G}} | Ginagawang group ang selection |
| {{ui:Explode}} | wala | Ginagawang maluwag na geometry muli ang mga napiling group at component |

## Ilagay ang component

Wala sa toolbar: i-click ang {{ui:Place}} sa tabi ng component sa panel na {{ui:Components}}. I-click nang isang beses kung saan ilalagay ang origin ng component; pagkatapos, babalik ang tool sa {{ui:Select}}.
