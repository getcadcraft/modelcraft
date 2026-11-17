---
title: Emoaplana peteĩ malla UVs
summary: Emombyry costura, desenvuelve, proyecta ha empaqueta peteĩ malla textura coordenadas UV workspace-pe, ha ehecha checker ha estiramiento color rupi.
keywords: uv, uvs, desenvolver, costura, costuras, textura, coordenadas de textura, atlas, empaquetar, empaquetado, isla, islas, checker, estiramiento, distorsión, proyección caja, proyección cilindro, proyección esfera, conforme, angle based, lscm, abf
from: 00028f20
---

Peteĩ textura ha'e peteĩ imagen plana; peteĩ malla ndaha'éi plana. Sus **UVs** omombe'u mbáva peteĩ punto opa cara esquina-pe imagen-pe. UV workspace-pe ojapo: ejopa malla **costuras** rupi, emoaplana hína pedaso (**desenvolver**), ha emoĩ cuadrado-pe (**empaquetar**).

## Ejopa

Eiporavo peteĩ malla ha eheka {{ui:UV}} Workspace lista-pe. Grupo térã componente primero oiko malla Mesh workspace-pe ojapo ramo. 3D vista oñemboʼe vista izquierda mbytepe; **UV editor** derecha pe mbytépe ohechauka malla cara textura cuadrado-pe. Selección ojapo Mesh workspace-pe ramo, ha mba'e ejeporavo peteĩ vista-pe ojeporavo avei ambue-pe.

## Emoĩ costuras

Costuras ha'e lugar oñemboguépa malla ojopáva; ohechauka pytã ambue vistas-pe.

- Eporavo bordes ({{ui:Edge}}, térã {{key:2}}) ha eheka {{ui:Mark seam}} ({{key:Ctrl+E}}). {{ui:Clear seam}} ({{key:Ctrl+Shift+E}}) omboguejy chupe.
- {{ui:Seams at sharp}} omoĩ costura opa borde afilado ha opa borde cara oñembojoaʼỹva 60° mbytépe: peteĩ caja ojepe'a hexa irundy kuare-pe.
- {{ui:Seams from UVs}} omoĩ costuras UVs ojopáva jau, por ejemplo proyección rire.

Peteĩ pieza cerrada oikotevẽ costuras oñemoaplana hag̃ua: peteĩ bola oikotevẽ por lo menos peteĩ corte, peteĩ tubo oikotevẽ peteĩ corte ipuku rehe.

## Desenvolver

Eiporavo cara oñemoaplanáva (térã ndaipóri, malla entero-pe) ha eheka {{ui:Unwrap}} ({{key:U}}). Costuras apytépe peteĩ pedaso oñemoaplana, ojeiporaháicha ángulos iporã ikatuháicha (angle-based flattening), upéi pedaso oñemoĩ cuadrado-pe. {{ui:Conformal}} oñemoaplana least-squares conformal mapas rupi: ligero ha'eve, peteĩ hasy ndojojái ipahápe pedaso oñemosaʼyhaʼỹva. Ndaipóri tela tuichaiterei ndojojái hína ojopa vove peteĩ cilindro lado peteĩ corte rupi, ha oñemoaplana sin estiramiento.

## Proyectar

Forma simple-pe peteĩ proyección oiporavo jave:

| Proyección | Mba'épa oiko |
|---|---|
| {{ui:Box}} | Cada cara oho caja lado oĩvape hetãiterei |
| {{ui:Cylinder}} | Azul eje rehe: ancho ángulo ndive, alto altura |
| {{ui:Sphere}} | Centro chugui: ancho ángulo ndive, alto latitud |
| {{ui:From view}} | Cara 3D vista-pe ojehecha ko'ẽrõ |

Cilindro térã esfera unión cara oikotevẽ peteĩ pedaso-pe, upévare UVs ikatu ojoaju cuadrado borde derecha rembe; textura hendive repetí.

## Ordenar

- {{ui:Pack}} oñemoĩ pedaso (islas) cuadrado-pe peteĩ texel tamaño-pe, cada peteĩ oñemoambue ojeiporavo hetaiterei ndojeikotevẽi lugar. Panel omoĩ espacio oñeme'ẽvaʼekue.
- {{ui:Turn 90°}} ha {{ui:Mirror}} oñemoambue térã oñemoespejo cara selección UVs.
- UV editor-pe, eñemoĩ cara selección UVs ojeʼe hag̃ua, térã eñemoĩ editor-pe ha eheka {{key:R}} térã {{key:S}} ha emoĩ rehe ojeporavo hag̃ua (eheka ha ombyaʼe; {{key:Esc}} omboguejy). {{key:G}} oñemoĩ ndaipóri mbogue. Eheka cara mokõi jey (térã {{key:L}}) ojeporavo opa isla. Rueda omoĩ zoom; mbogue botón del medio térã derecha rehe ojeʼe; {{key:F}} oñemboʼe cuadrado ojepyrũvaicha.

Opa cambio peteĩ paso de deshacer.

## Ehecha

- {{ui:Checker}} ohechauka tablero marcado malla-pe UVs-pe: cuadrado parejo ha tuichaiterei omombe'u textura parejo oĩ; marcas ohechauka mba'éichapa ojeʼe.
- {{ui:Stretch}} omoĩ color cada cara ohechaukáva mbaʼeichaiterei oestira UVs: azul ndaipóri, verde, ha pytã mbaʼeichaite. Panel oñemboʼe **ángulos doblados** térã **tamaño cambiado** ojeporavo, ha omombe'u promedio.

Ambue ohechauka [Edit a mesh](topic:mesh-edit), [Meshes](topic:meshes) ha [Modifiers on a mesh](topic:modifiers).
