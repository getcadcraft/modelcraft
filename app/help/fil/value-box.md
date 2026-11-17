---
title: I-type ang eksaktong laki sa value box
summary: Ang lahat ng paraan ng pag-type ng haba, laki, punto, offset, anggulo, gilid at kopya, at kung paano binabasa ang unit at mga bare na numero.
keywords: value box, measurements box, vcb, i-type, eksakto, dimension, haba, units, feet, inches, metric, millimeters, coordinates, offset, array, gilid, anggulo, decimal comma
from: 0148dc3d
---

Nasa status bar sa ibaba ang value box, na may label na nagbabago depende sa tool. Habang nagtatrabaho ka, ipinapakita nito ang live na laki; anumang oras, maaari kang mag-type ng eksaktong laki.

## Paano mag-type

1. Simulan ang aksyon sa pamamagitan ng click (ang unang sulok, ang face, ang punto na pagmumulan ng galaw).
2. Mag-type. Hindi mo kailangang i-click ang value box: ang digit o isa sa `. , - ' " [ < * /` ay ipinapadala ang pag-type mo roon.
3. Pindutin ang {{key:Enter}}.

Pindutin ang {{key:Esc}} sa value box para burahin ito at bumalik sa view. Sa touch screen, i-tap ang value box para lumabas ang keyboard.

Kung hindi mabasa ng ModelCraft ang na-type mo, sinasabi ng status bar: "Mag-type ng haba gaya ng 3m, 10'6" o 4m,3m." Kung hindi ito magamit ng tool, sinasabi nito: "Hindi gumana: …" kasama ang dahilan.

## Mga haba

| I-type | Ibig sabihin |
|---|---|
| `3m` `320cm` `3200mm` | Metro, sentimetro, milimetro |
| `10'` `10ft` `10 feet` | Feet |
| `6"` `6in` `6 inches` | Inches |
| `10'6"` `10' 6"` `10'-6 1/2"` | Feet at inches, may fraction |
| `6 1/2"` `6-1/2"` `3/4"` | Inches na may fraction |
| `1.5ft` `.5m` | Decimal na may unit |
| `120` | Bare na numero, sa unit ng model |

**Ginagamit ng bare na numero ang unit ng model**, gaya ng ipinapakita sa picker sa kanang ibaba: inches sa model na feet at inches (kaya ang `120` ay 10 feet), millimeters sa model na millimeter, at iba pa. Laging nananalo ang unit na i-type mo, anuman ang unit ng model. Binabasa rin bilang feet at inches ang curly quotes at prime marks (’ ” ′ ″).

:::warning
Laging gumamit ng **tuldok** para sa decimal: `2.5m`. Naghihiwalay ng dalawang halaga ang kuwit, kaya ang `2,5` ay nangangahulugang 2 at 5 (dalawang halaga), anuman ang setting ng wika mo.
:::

## Mga kalkulasyon

Maaaring kalkulasyon ang anumang haba: magdagdag gamit ang `+`, magbawas gamit ang `-`, mag-multiply gamit ang `*`, mag-divide gamit ang `/`, at gumamit ng bracket. Hindi kailangan ng calculator.

| I-type | Ibig sabihin |
|---|---|
| `2.5/3` | Isang-katlo ng 2.5 (sa unit ng model) |
| `12'6"+3/4"` | 12' 6 3/4" |
| `(24'-0")/3` | 8' |
| `2*450mm` | 900 mm |
| `4+7/16` | 4 7/16" sa model na feet at inches |
| `3m-25cm` | 2.75 m |

Ang bare na numero ay nasa unit ng model kapag haba ito (ang `2.5/3` sa model na metro ay 0.833 m), at simpleng factor kapag nagmu-multiply o nagdi-divide ng haba (`2*450mm`). Kasama rin sa kalkulasyon ang mga anggulo at factor: ang `90/2` ay 45°. Ang dalawang haba na pinarami ay lugar, hindi haba, kaya tinatanggihan ang `2m*3m`.

Kung hindi ito makalkula ng ModelCraft, sinasabi ng status bar kung ano ang mali at saan, halimbawa: "Pagdi-divide sa zero (character 4)." Nagsisimula rin ang value box sa bracket, kaya maaari kang magsimula sa `(`.

Nananatili ang sarili nilang kahulugan ng mga ito: ang `/3`, `3x` at `*3` pagkatapos ng kopya, ang `24s` para sa gilid, at ang `/3` kapag may napiling edge ([hinahati ang edge](topic:divide)).

## Ayon sa tool

| Tool | Label | I-type |
|---|---|---|
| {{ui:Line}} | {{ui:Length}} | Isang haba (patungo sa pointer), o punto o offset (sa ibaba) |
| {{ui:Rectangle}} | {{ui:Dimensions}} | Dalawang haba: `4m,3m`, `12',10'`. Gumagana rin ang semicolon: `4m;3m` |
| {{ui:Circle}}, {{ui:Polygon}} | {{ui:Sides}}, pagkatapos {{ui:Radius}} | Bago ang unang click, bilang ng gilid: `12s` o `12` (3 hanggang 999). Pagkatapos nito, ang radius |
| {{ui:Push/pull}} | {{ui:Distance}} | Isang haba. Ang negatibo ay pupunta sa kabilang direksyon |
| {{ui:Move}} | {{ui:Distance}} | Isang haba (patungo sa pointer), o punto o offset. Pagkatapos ng kopya: `3x`, `*3`, `/3` |
| {{ui:Rotate}} | {{ui:Angle}} | Degree: `90`, `-45`, `22.5` |
| {{ui:Scale}} | {{ui:Scale}} | Factor na higit sa 0: `2`, `0.5`, `1.25` |
| {{ui:Tape}} | {{ui:Offset}} o {{ui:Length}} | Isang haba |
| {{ui:Divide}} | {{ui:Parts}} | Ilang pantay na bahagi: `5`, `5s` o `/5` (2 hanggang 1000). Tingnan ang [Hatiin ang edge o curve sa pantay na bahagi](topic:divide) |
| {{ui:Dimension}} | {{ui:Offset}}, pagkatapos {{ui:Length}} | Saan pupunta ang dimension line; pagkatapos ilagay, ang bagong haba ay magre-resize ng model |
| {{ui:Select}} | {{ui:Value}} | Kapag may napiling isang dimension o edge, ang bagong haba ay magre-resize ng model. Tingnan ang [Dimension at resize](topic:dimensions) |

## Mga punto at offset

Para sa {{ui:Line}} at {{ui:Move}}, pagkatapos ng unang click:

- Ang `[x,y,z]` ay pupunta sa eksaktong puntong iyon sa model (sa sarili nitong axis ng group kapag nag-e-edit ka sa loob ng group). Halimbawa: ang `[0,0,3m]` ay 3 m nang diretso sa itaas ng origin.
- Ang `<dx,dy,dz>` ay pupunta nang ganoong layo mula sa unang punto sa kahabaan ng pula, berde at asul. Halimbawa: ang `<0,0,10'>` ay 10 feet nang diretso pataas.

Bawat isa sa tatlong halaga ay maaaring may sariling unit: `<12',0,6">`.

## Mga kopya pagkatapos ilipat

Pagkatapos ng kopya gamit ang {{ui:Move}}:

| I-type | Gumagawa ng |
|---|---|
| `3x` o `*3` | 3 kopya sa isang hilera sa parehong layo |
| `/3` | 3 kopya na pantay ang pagkakalatag mula sa orihinal hanggang sa unang kopya |

Hanggang 500 kopya. Tingnan ang [Ilipat, kopyahin at gumawa ng array](topic:move-copy#a-row-of-copies).

## Kailangan ng direksyon ang na-type na haba

Ang isang na-type na haba ay pupunta sa direksyon ng pointer mula sa unang click. Kung mag-type ka kaagad pagkatapos mag-click, bago pa gumalaw, wala pang direksyon at walang mangyayari. Igalaw nang kaunti ang pointer patungo sa gusto mong puntahan, saka mag-type.

## Ang unit ng model

Palitan ang unit sa picker sa kanang ibaba: {{ui:ft and in}}, in, ft, yd, mi, mil, µm, mm, cm, m o km, hangga't naka-on ang mga ito sa {{ui:Mga setting}} › {{ui:General}} › {{ui:Units}} (laging nandiyan ang sariling unit ng model). Ang haba na na-type na may marka ng alinmang unit ay binabasa sa unit na iyon. Tingnan ang [Units, na-type na halaga at mga listahan ng unit](common:unit-lists). Binabago nito kung paano ipinapakita ang mga haba at kung paano binabasa ang mga bare na numero; nananatiling pareho ang laki ng model. Naka-save sa file ang unit.

Paano ipinapakita ang mga laki:

| Unit | Haba | Lawak | Volume |
|---|---|---|---|
| ft and in | `10' 6 1/2"` (hanggang 1/16") | sq ft | cu ft |
| in | `126 1/2"` | sq in | cu in |
| m | `3.2 m` | m² | m³ |
| cm | `320 cm` | cm² | cm³ |
| mm | `3200 mm` | m² mula sa 0.01 m², kung hindi mm² | m³ mula sa 0.01 m³, kung hindi mm³ |

Nagsisimula ang bagong model sa feet at inches kapag nakatakda sa rehiyon ng US ang wika ng browser (at sa Liberia at Myanmar), at sa millimeters sa lahat ng iba pa. Ginagamit sa halip ang unit na may bituin sa {{ui:Mga setting}} › {{ui:General}} › {{ui:Units}}, kapag mayroon nito ang ModelCraft. O palitan ang picker pagkatapos ng {{ui:Bago}}.
