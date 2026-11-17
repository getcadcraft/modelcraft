---
title: Emoĩ tamaño exacto value box-pe
summary: Opa mbaʼe ejeʼe hag̃ua longitudes, tamaños, puntos, desfases, ángulos, lados ha copias, ha mba'éichapa unidades ha número simple oñemoañete.
keywords: value box, caja de medidas, vcb, escribir, exacto, cota, longitud, unidades, pies, pulgadas, métrico, milímetros, coordenadas, desfase, array, lados, ángulo, coma decimal
from: 0148dc3d
---

Value box ojoaʼỹ statusbar-pe ipyʼaguápe, peteĩ etiqueta ojeʼe herramienta rehe. Ojapo ramo ohechauka tamaño ko'ẽrõ; mbaʼe jave emoĩ tamaño exacto.

## Mba'éichapa emoĩ

1. Ojepyrũ mba'e peteĩ clic rupi (peteĩ esquina, cara, punto ojeʼe oñepyrũvape).
2. Emoĩ. Ndahaʼéi oikotevẽ value box-pe clic: peteĩ número térã ko'ã signo `. , - ' " [ < * /` ohenduʼáta value box-pe.
3. Eheka {{key:Enter}}.

Value box-pe {{key:Esc}} ejepe'a ha ojeheja mba'e hasy view-pe. Touch pantalla-pe, eheka value box ha omboʼe teclado.

Eremoñe'ẽ ha ModelCraft ndoikuaái mba'épa emoĩ, statusbar omombe'u "Emoĩ longitud ko'ã rehe 3m, 10'6" térã 4m,3m." Herramienta ndoikotevẽi, omombe'u "Ndaiporãi: …" ha ojehai mba'épa.

## Longitudes

| Emoĩ | Oñemboʼe |
|---|---|
| `3m` `320cm` `3200mm` | Metro, centímetro, milímetro |
| `10'` `10ft` `10 feet` | Pie |
| `6"` `6in` `6 inches` | Pulgada |
| `10'6"` `10' 6"` `10'-6 1/2"` | Pie ha pulgada, fracción ndive |
| `6 1/2"` `6-1/2"` `3/4"` | Pulgada fracción ndive |
| `1.5ft` `.5m` | Decimal unidad ndive |
| `120` | Número simple, modelo unidad-pe |

**Número simple oñemboʼe modelo unidad**, ohechauka selector ipyʼaguápe, pe derecha: pulgada pie-pulgada modelo-pe (upévare `120` ha'e 10 pie), milímetro milímetro modelo-pe, ha ambue. Unidad emoĩ vove ojeporavo, modelo unidad mbaʼeve. Comillas curvas ha prima marcas (’ ” ′ ″) avei oñemboʼe pie ha pulgada.

:::warning
Decimal-pe ojeporavo **punto**: `2.5m`. Coma omboʼe mokõi valor, upévare `2,5` ha'e 2 ha 5 (mokõi valor), nde idioma configuración mbaʼeve.
:::

## Cálculos

Opa longitud ikatu ha'e cálculo: emoĩ `+` sumar, `-` restar, `*` multiplicar, `/` dividir, ha ojeporavo corchete. Calculadora ndaikotevẽi.

| Emoĩ | Oñemboʼe |
|---|---|
| `2.5/3` | 2.5 mbytépe (modelo unidad-pe) |
| `12'6"+3/4"` | 12' 6 3/4" |
| `(24'-0")/3` | 8' |
| `2*450mm` | 900 mm |
| `4+7/16` | 4 7/16" pie-pulgada modelo-pe |
| `3m-25cm` | 2.75 m |

Número simple longitud ha'e jave modelo unidad-pe (`2.5/3` metro modelo-pe ha'e 0.833 m), ha multiplica térã divide longitud jave ha'e factor simple (`2*450mm`). Ángulo ha factor avei ikatu cálculo: `90/2` ha'e 45°. Mokõi longitud multiplicado omoĩ área, longitud ndaha'éi, upévare `2m*3m` ojehai.

ModelCraft ndoikuaái mba'éichapa oñemboja, statusbar omombe'u mba'épa ojaʼe ha mba'épa, por ejemplo "División por cero (carácter 4)." Corchete avei ojepyrũ value box, upévare ikatu eñepyrũ `(`.

Ko'ã ohenduʼa ijeʼe: `/3`, `3x` ha `*3` copia rire, `24s` lados-pe, ha `/3` borde selección-pe ([divide the edge](topic:divide)).

## Herramienta rehe

| Herramienta | Etiqueta | Emoĩ |
|---|---|---|
| {{ui:Line}} | {{ui:Length}} | Longitud (puntero rehe), térã punto térã desfase (ko'ẽrõ) |
| {{ui:Rectangle}} | {{ui:Dimensions}} | Mokõi longitud: `4m,3m`, `12',10'`. Punto y ndive avei oñemboʼe: `4m;3m` |
| {{ui:Circle}}, {{ui:Polygon}} | {{ui:Sides}}, upéi {{ui:Radius}} | Primer clic rire, lados cantidad: `12s` térã `12` (3 ha 999 mbytépe). Upéi radio |
| {{ui:Push/pull}} | {{ui:Distance}} | Longitud. Negativo ojeʼe ambue lado |
| {{ui:Move}} | {{ui:Distance}} | Longitud (puntero rehe), térã punto térã desfase. Copia rire: `3x`, `*3`, `/3` |
| {{ui:Rotate}} | {{ui:Angle}} | Grado: `90`, `-45`, `22.5` |
| {{ui:Scale}} | {{ui:Scale}} | Factor 0 rupi: `2`, `0.5`, `1.25` |
| {{ui:Tape}} | {{ui:Offset}} térã {{ui:Length}} | Longitud |
| {{ui:Divide}} | {{ui:Parts}} | Cuánto parte iguales: `5`, `5s` térã `/5` (2 ha 1000 mbytépe). Ehecha [Divide an edge or curve into equal parts](topic:divide) |
| {{ui:Dimension}} | {{ui:Offset}}, upéi {{ui:Length}} | Mba'épa línea cota; colocado rire, longitud pyahu modelo tamaño oñemoambue |
| {{ui:Select}} | {{ui:Value}} | Peteĩ cota térã borde selección-pe, longitud pyahu modelo tamaño oñemoambue. Ehecha [Dimension and resize](topic:dimensions) |

## Puntos ha desfases

{{ui:Line}} ha {{ui:Move}} rehe, primer clic rire:

- `[x,y,z]` ojeʼe punto exacto modelo-pe (grupo ejes ndive, grupo mbytépe ojejapo'ỹ-pe). Ejemplo: `[0,0,3m]` ha'e 3 m origen ári.
- `<dx,dy,dz>` ojeʼe primer punto chugui red, green ha blue ejes rehe. Ejemplo: `<0,0,10'>` ha'e 10 pie tuichaite.

Mbohapy valor peteĩ-peteĩ unidad ikatu: `<12',0,6">`.

## Copias move rire

{{ui:Move}} copia rire:

| Emoĩ | Ojapo |
|---|---|
| `3x` térã `*3` | 3 copia peteĩ rendápe, mesmo espaciado |
| `/3` | 3 copia parejo oñemoĩ original chugui primer copia-pe |

Mbohapy mil copia peve (500). Ehecha [Move, copy and make arrays](topic:move-copy#a-row-of-copies).

## Longitudes emoĩ ha dirección oikotevẽ

Peteĩ longitud emoĩva ojeho puntero ojeʼe rehe primer clic chugui. Clic rire ha emoĩ mboyve ha'e dirección nd'oikói; mbovy puntero ejeporoʼi hag̃ua ndaikatúi. Puntero ojeʼe iñambue, upéi emoĩ.

## Modelo unidad

Unidad ojemoambue selector-pe, pe derecha: {{ui:ft and in}}, in, ft, yd, mi, mil, µm, mm, cm, m térã km, {{ui:Settings}} › {{ui:General}} › {{ui:Units}} ojeporavo ojeiporavo ojekuaáva. Unidad marca emoĩ longitud oñemboʼe ojepe'a unidad-pe. Ehecha [Units, typed values and the unit lists](common:unit-lists). Ohendu lo ohechauka longitud ha número simple; modelo tamaño nd'oñemoambuéi. Unidad archivo-pe oñeñongatu.

Tamaño ohechauka mba'éichapa:

| Unidad | Longitudes | Áreas | Volúmenes |
|---|---|---|---|
| ft and in | `10' 6 1/2"` (1/16" peve) | sq ft | cu ft |
| in | `126 1/2"` | sq in | cu in |
| m | `3.2 m` | m² | m³ |
| cm | `320 cm` | cm² | cm³ |
| mm | `3200 mm` | m² 0.01 m² rire, ambuégui mm² | m³ 0.01 m³ rire, ambuégui mm³ |

Modelo pyahu oñepyrũ pie y pulgada navegador idioma US región (ha Liberia ha Myanmar) rehe, ha milímetro ambue tenda-pe. Unidad {{ui:Settings}} › {{ui:General}} › {{ui:Units}} ojeporavo ojeporavo ha ModelCraft ikatu. Térã emoñemoambue selector {{ui:New}} rire.
