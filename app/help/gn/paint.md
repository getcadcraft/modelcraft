---
title: Pintar con colores y materiales
summary: Eipinta caras, grupos y componentes peteĩ color sólido térã peteĩ material, ko'ẽ ladrillo, revestimiento, tejas térã madera, ha omantene exportar rire.
keywords: pintar, color, colour, material, materiales, textura, texturas, ladrillo, revestimiento, tejas, techado, madera, piedra, baldosa, hormigón, revoque, césped, grava, vidrio, metal, balde de pintura, relleno, muestra, cuentagotas, predeterminado, glb, obj, mtl, collada
from: b1500523
---

Colores ayuda ojehechakuaa modelo-pe mba'e-kuéra, ha **materiales** (ladrillo, revestimiento, techado, madera, piedra, baldosa, hormigón, revoque, césped, vidrio, metal) ohechauka mba'éichapa oñemopu'ã. Mokõiva oñepinta peteĩ-háicha.

## Elegí color

{{ui:Colores}} sección derecha-pe ohechauka color sólido-kuéra hilera, {{ui:Predeterminado}} (línea oñemboʼyva: color'ỹ) ha peteĩ {{ui:+}} muestra ambue color-pe. Eka peteĩ umi color actual-pe. Herramienta Pintar oñepyrũ upe ndive.

## Pintar

1. Eapretá {{key:B}} ({{ui:Pintar}}), térã mba'e ndojeporavóiva, eka peteĩ color. (Mba'e ojeporavo ramo, color eka ramo oñepinta selección ko'ẽrõ.)
2. Eka cara oñepintáva.
3. Eka grupo térã componente oñepinta haguã kopia: ndaipóri color hendive cara-kuéra oiko mo'ã color ko'ápe. Pinta ojapo haguéicha oguerekóta hendápe.

Peteĩ jave oñepinta mbohapy-kuéra: ojeporavo-hína avei ha eka color, térã eka {{ui:Pintar}} ndive umi-kuéra. Peteĩ deshacer paso.

| Eapretá | Ha eka cara | Mba'e oñepinta |
|---|---|---|
| — | | Upe cara |
| {{key:Ctrl}} | | Opa cara ojoapytáva ha mismo color oguerekóva |
| {{key:Shift}} | | Opa cara color ko'ápe grupo-pe oñemba'apóva |
| {{key:Alt}} | | Ndaipóri: color ojagarra |

Cara color'ỹ-pe omoĩ haguã, eka {{ui:Predeterminado}} ha eka cara.

## Pintar con material

{{ui:Materiales}} sección, {{ui:Colores}} rire, ohechauka biblioteca de materiales tipo rupive: ladrillo ha bloque, revestimiento, techado, madera, piedra, baldosa, hormigón, revoque, suelo, vidrio ha metal. Muestra rehe pe'a ramo, ohechauka hérava. Eka peteĩ, upéi pinta color-icha: {{key:B}}, eka cara, grupo térã componente; térã ojeporavo ha eka material.

- **Sombreado** estilo-pe caras ohechauka material textura. Línea oculta, alambre ha rayos X estilo-pe ohechauka color.
- Texturas oñemoĩ **nivel cada cara-pe** ha **arriba**: ladrillo hilera nivelada cada pared-pe, tejas techo pendiente-pe, tablas piso-pe eje rojo-pe. Tamaño real-pe (ladrillo 215 mm rehegua), upévare hovy ojehechauka ojuhúva ndive.
- [Imagen renderizada](topic:render) materiales oguereko textura, rugosidad ha vidrio ha metal-pe brillo.
- {{key:Alt}}-clic {{ui:Pintar}} ndive avei ojagarra cara material.

Texturas ModelCraft iñandúva oikuaa, upévare oñemboguata sin conexión ha opa mba'epa oikuaa CC0 licencia.

## Componentes y colores

Color cara **dentro** componente pintado ohechauka opa kopia-pe, kopia-kuéra peteĩ definición oguereko. Color **kopia** rehe pintado componente cerrado ramo, upe kopia-pe añoite pertenece, upévare kopia mokõi color hasy ikatu. {{ui:Información de entidad}} ohechauka cara, grupo térã componente selección-pe color.

## Colores archivo-kuéra-pe

- ModelCraft archivo-kuéra oguereko opa color ha opa material.
- Ambue formato-kuéra oguereko **material color** (lejos-pe hechakuaa) textura rehe: glTF, Collada, OBJ, DWG ha DXF, ha impresión 3D kontrol-pe. glTF, Collada ha OBJ-pe material oguereko hérava: `Material_brick-red`.
- **glTF (.glb)** ha **Collada (.dae)**: cada color peteĩ material ojapo. Componente color ojehechaukáva ojapo peteĩ jey cada color-pe. glTF oguarda avei textura imagen-kuéra textura-pe.
- **OBJ**: exportando ojedescarga mokõi archivo, `.obj` ha `.mtl` materiales archivo colores ndive. Ko'ã tenda ndive peteĩ. Textura importado ndive, `.obj`, `.mtl` ha imagen-kuéra `.zip` peteĩ-pe.
- **DWG** oguarda color ko'ẽrõ; **DXF** oiporu 255 CAD estándar color-kuéra-gui oĩvéva.
- **STL** ha **PLY** oguereko colores: STL VisCAM / SolidView convención-pe (ndojehechaukáiva programa-kuéra ndoreheséi), PLY color peteĩ punto-pe. Ehecha [Formatos de archivo en detalle](topic:formats).

:::tip
Pantalla modelo ojapo ramo, pinta marco carbón-pe ha vidrio azul-pe, [desplazá](topic:draw-faces) cara frontal rire.
:::
