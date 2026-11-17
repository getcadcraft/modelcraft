---
title: Ojapo peteĩ imagen modelo-pe
summary: Ejapo imagen ohasáva luz del día-icha: celeste, sol modelo ubicación ha fecha rehe, sombra mbyasy, vidrio ha metal ojehecháva, upéi guardar PNG-pe.
keywords: render, preset, presets, scene preset, interior, exterior, section view, night, one click, rendering, path tracing, path traced, ray tracing, global illumination, reflections, refraction, high quality, photo, photoreal, realistic, picture, image, png, still, sky, sun, daylight, shadows, soft shadows, ambient occlusion, glass, metal, glossy, materials, exposure, brightness, overcast, dusk, studio, presentation, fog, haze, mist, smoke, cloud, volume, light shafts, god rays, caustics, adaptive sampling, noise
from: 517ba4d3
---

{{ui:Render de una imagen…}} ojapo vista imagen ohasáva luz del día-icha, dibujo rehe ndaha'éi: celeste, sol modelo ubicación ha fecha ohechaukáva, sombra mbyasy, luz celeste rupi oñemyatyro esquina ha mbyteguasu ha color vidrio, metal térã brillo pintura ojehecháva. Modelo ndoumbyai.

## Ejapo vista render

1. Emoĩ vista ndéve ojayhuva: orbitá, zoom, escena ejeporu ([escena](topic:scenes)), ocultá oikóva ndaikatuhápe ohechakuaa. Imagen oipuru vista propio cámara.
2. Ekliká {{ui:Exportar}} {{ui:Archivo}} grupo-pe, upéi {{ui:Render de una imagen…}}.
3. Eiporavo {{ui:Escena}} (ndaipóri ojepy'apy ndéve) ([Escena preset-kuéra](topic:render#scene-presets-a-good-picture-in-one-click)), eiporavo {{ui:Tamaño}}, upéi ekliká {{ui:Renderizar}}.

   Imagen oñemboguata render mboyve, ha mboyve pásada rire ivaleteve. {{ui:Pe'a}} (térã {{key:Esc}}) omboty mboyve ha oguerekóta imagen upe peve.

4. Ekliká {{ui:Guardar}} ojejapo PNG-pe (ndaipóri {{ui:Guardar como}} ojapo ambue).

:::tip
Eiporu {{ui:Borrador}} {{ui:Tamaño de la vista}}-pe ohechakuaa cámara ha aspecto, upéi render {{ui:Bueno}} térã {{ui:Mejor}} tamaño guasúvape imagen final-pe.
:::

## Escena preset-kuéra: peteĩ ekliká-pe imagen porã

Diálogo yvate-pe oguereko mokõi {{ui:Escena}} botón. Peteĩteĩ oñemoĩ celeste, brillo, suelo, borde línea, calidad ha sol peteĩ ekliká-pe, upévare ndaikatuhápe ndajaiko mboyve imagen rehe. Ekliká peteĩ, upéi {{ui:Renderizar}}.

| Escena | Oñemoĩva | Mbaʼépa oipuru |
|---|---|---|
| {{ui:Exterior}} | Cielo despejado, modelo sol, suelo oñemoĩ | Tupinha tuichaitéva |
| {{ui:Interior}} | Cielo nublado (luz parejo, sol mbaꞌe'ỹ), peteĩ stop guasúpe | Ogapy-pegua vista |
| {{ui:Vista de corte}} | Estudio blanco, suelo ndoguerekói, borde línea render mboyve-pe | Sección rupi ojejoko modelo |
| {{ui:Noche}} | Sol ojejuhu (mitãrusu ara pytu'u-pe site mundo mitãpe), peteĩ stop guasúpe | Lámpara ohyrýva modelo. Lámpara ndaipóri rupi imagen oĩta pytũ |

- {{ui:Elegir para esta vista}} oiporavo nde rehe: {{ui:Vista de corte}} sección corte oñemoĩmbáva, {{ui:Interior}} cámara modelo ryepýpe oĩmbáva, ambue jave {{ui:Exterior}}. Diálogo primera jeporeka-pe kóva oñepyrũ upéicha ijeheguíva.
- Opavave configuración ohóva yvate-pe ikatu ojere. Peteĩ cambia rire escena oñemoĩva, botón ndaipóri oipe'áva, ha línea botón-pe he'í configuración nde propio ha. Ekliká escena jey ojeipe'a valor-kuéra.
- Escena ndoñemoĩri motor, modo, tamaño, material, cámara ni lámpara.

:::note
Escena-kuéra oguerekoukáva ModelCraft ha BimCraft-pe valor mbojoaju. Imagen mbohapy oĩ modelo ha compu tarjeta gráfica rehe.
:::

## Configuración

| Configuración | Mba'éicha oiko |
|---|---|
| {{ui:Tamaño}} | Vista tamaño, vista tamaño mokõi jey, Full HD, 4K térã cuadrado. Tamaño fijo oguarda vista cámara ha oguereko ambuegua ysýpe |
| {{ui:Modo}} | {{ui:Rápido}}, térã {{ui:Alta calidad (trazado de rayos)}} (ha'e kóva peteĩ ambue) {{ui:Límite de tiempo}} rehe |
| {{ui:Calidad}} | Mboyve (térã alta calidad-pe, muestra) ojejapyhy: {{ui:Borrador}} 16, {{ui:Bueno}} 64, {{ui:Mejor}} 256. Mboyve mbohapyve sombra ha borde porãve, ha ikatu tiempo mbohapyve |
| {{ui:Celeste}} | {{ui:Cielo despejado}}, {{ui:Nublado}} (luz parejo, sombra ndaipórire), {{ui:Atardecer}} (luz yvy-pe, ro'y) térã {{ui:Estudio blanco}} (fondo hyãhyi) |
| {{ui:Sol}} | Sol oúva fecha, hora ha ubicación {{ui:Estilo}} › sol-gui. Marcá {{ui:Usar otra fecha y hora para esta imagen}} oha'arõ hora ambue modelo estilo cambia ndahaʼéiva |
| {{ui:Brillo}} | Mbyhyãve térã mbyasyve, pasos (stops) |
| {{ui:Suelo bajo el modelo}} | Suelo oinmbáva sombra ha ohóva horizonte-pe. Ejapo ndoikóiva modelo mbyta-pe |
| {{ui:Dibujar aristas}} | Modelo borde línea mbyasy oñemoĩ imagen rehe, dibujo ohasáva |

Sol horizonte rapykuéri hora ohechaukáva, ha'e pytu'u: celeste pytũ oĩ ha modelo [lámpara](topic:lights) ohyrýta. Diálogo he'i upéva.

Configuración oñeñongatu `.modelcraft` archivo-pe, upévare modelo imagen ambue jave oñepyrũ oñemboguejy jave ojeporúva.

## Vidrio térã metal ojehecha color

{{ui:Materiales}} rapykuéri, pantalla color opavave oguereko aspecto: {{ui:Mate}}, {{ui:Satinado}}, {{ui:Brillante}}, {{ui:Metal}}, {{ui:Metal pulido}}, {{ui:Vidrio}} térã {{ui:Vidrio esmerilado}}. {{ui:Caras sin pintar}} ha'e cara ndoguerekóiva color propio.

Ventana vidrio ojapo ramo, [pintá](topic:paint) ventana panel peteĩ color, upéi emoĩ upe color {{ui:Vidrio}}-pe. Vidrio omoĩ celeste ha oĩva upe rupi, color rehe tinte oguereko, ha celeste oñemyiva.

:::note
{{ui:Rápido}} modo-pe vidrio ha metal oñemyiva celeste, modelo ambue ndaha'éi, ha luz ndoiporáva vidrio rupi. {{ui:Alta calidad (trazado de rayos)}} modo ohechakuaa opavavépe.
:::

## Alta calidad

Eiporavo {{ui:Modo}} › {{ui:Alta calidad (trazado de rayos)}} imagen ohasáva luz cámara ohecháicha:

- luz oñemboguata superficie-kuéra apytépe, upévare ventana rupi ojeiporúva térã lámpara ohyrýva ogapy opavave pe'a ha color oñembosaraíva vecino-kuérape;
- vidrio ha'e vidrio: luz oñembohu upe rupi ha ohechauka modelo;
- metal ha superficie pulido oñemyiva modelo ambue;
- luz panel oñeiluminá panel-icha, sombra mbyasy.

Ha'e heta mbyte {{ui:Rápido}} rangue: peteĩteĩ píxel luz oñembohasa jey. Imagen oñepyrũ ha'eŕa ha oñemboporã muestra ojeity jave, upévare eñepyrũ mbyasy ({{ui:Tamaño de la vista}}, {{ui:Borrador}}) ha ejapo {{ui:Límite de tiempo}}: oñemboty jave, imagen upe peve oñeguarda. {{ui:Pe'a}} avei oguarda. Primera pasada oñeha'ã navegador tembiaporã trazado de rayos ojapo mboyve.

Navegador-pe WebGPU oĩ, trazado de rayos CadCraft ijeheguipa ha tarjeta gráfica-pe oúva; línea imagen rupi he'íta {{ui:Trazado de rayos en tarjeta gráfica (WebGPU)}}. {{ui:Pe'a}} térã tiempo omboty rire, {{ui:Reanudar}} oñepytyvõ upe imagen muestra opavave ojeity peve; configuración ambue térã {{ui:Renderizar}} jey ojapo ojepyrũ jey. WebGPU ndoguerekóiva navegador-pe imagen WebGL-pe ojehasa (línea he'iséva upéva) ha {{ui:Reanudar}} ndoikóiva.

:::linux
Firefox ha heta Chrome Linux-pe ndoguerekóiva WebGPU, upévare alta calidad ojeporu WebGL upépe.
:::

Ko modo-pe borde ndojapói, biblioteca textura-kuéra color ha aspereza ohechauka ha ndoguerekói relieve (ojapo nodo-pe material ([material nodo rupi](topic:shading#in-high-quality-pictures)) normal ha relieve ohechauka), ha sección corte modelo-pe ojapo imagen oñepyrũ mboyve.

{{ui:Reducir ruido (borra el grano que queda tras las muestras)}} oñemoĩ jepe: imagen oikuaáva térã oñemboty jave, muestra rire oguedáva grano neural red-pe oñemboguatáva (Intel Open Image Denoise), compu-pe ojapo tarjeta gráfica rupi, térã procesador rupi. Muestra mbyte ha'e porã; {{ui:Mostrar}} › {{ui:La imagen antes de reducir el ruido}} ohechauka render mboyve.

## Render vista-pe

{{ui:Renderizar}} espacio trazado de rayos vista-pe ojapo: orbitá, modelo cambia térã lámpara cambia ha oñepyrũ jey. {{ui:Región}}: rectángulo oñemoĩ, upe anive oñemboguata; {{ui:Vista completa}} oho jey tuichaitéva. {{ui:Enfocar}}: ekliká mba'e ha'eta ayvu, profundidad de campo upépe oñemboguejy. {{ui:Detalle}} oha'arõ vista píxel mboyve oñemboguata (mbyasy oiko mboyvéva). {{ui:Pausa}} oñembopa ha ojevy. WebGPU ojeporeko: ndaipóri rupi espacio he'i ndoikóiha, ha {{ui:Exportar}} › {{ui:Render de una imagen…}} ojapo.

## Celeste ha luz perfil tarjeta gráfica-pe

WebGPU rupi alta calidad-pe oguereko mokõi celeste ambue:

- {{ui:Cielo físico}} oipe'a luz sol tuichaitépe: teĩ azul yvate-pe, mbyasy blanco horizonte-pe, ha sol ohasapáva ha ro'ýva oguerekóva ohechaupe. {{ui:Neblina}} ohóva día hovy porã (2) peve día mbyasy (10) peve.
- {{ui:Imagen de cielo (HDRI)}} modelo oñemboriahu panorama imagen tekoha mbaꞌeporãgui. {{ui:Elegí una imagen…}} oiporavo `.hdr` térã `.exr` archivo; {{ui:Girar}} modelo rehe ohóva, {{ui:Brillo de la imagen}} mbyasy térã mbyasyve. Imagen oguereko sol propio, upévare modelo sol ndoñemoĩri. Oñeñongatu navegador pyahu ojehechaukáva rangue; ojekuaa jey rire ojeporu.

Peteĩteĩ {{ui:Lámparas}} lista-pe ikatu oguereko fabricante luz perfil: {{ui:Perfil IES…}} ojapo IES (LM-63) archivo ha lámpara oñemoĩ upe fabricante ojapo rupi (downlight mbyasy, pared lavador). Lámpara opavave upe nombre-pe oipuru, lámpara ohendu brillo ojeheká. Perfil nombre ekliká ojejoko oipuru.

Vidrio hovy porã ventana rupi celeste luz ohóva tuguy-pe, upévare cielo-pe tuguy imagen hovy ohupyty.

{{ui:Rápido}} modo ha WebGL trazado de rayos ohechauka {{ui:Cielo físico}} ha {{ui:Imagen de cielo (HDRI)}} cielo despejado-icha ha ndohechái luz perfil.

## Cámara

{{ui:Cámara}} ojapo imagen fotografía-icha:

- {{ui:Exposición}}: oguarda {{ui:Control de brillo}}, térã eiporavo {{ui:Ajustes de cámara}} ha emoĩ {{ui:Apertura (f-stop)}}, {{ui:Velocidad de obturación}} ha {{ui:ISO}} kamera-icha; hendápe EV ha'e exposición valor. f/16 1/100 s ha ISO 100 día hovy-icha ohupytýva; tekoha pytũve apertura guasúve, obturación mbyasyve térã ISO guasúve. Kóva opavave modo-pe ojeporu.
- {{ui:Profundidad de campo}} ohaʼarõ {{ui:Distancia de enfoque (m)}} ndive, lente f-stop rupi (eje'ỹ vacío ha ojeporu vista mbytépe enfoque); {{ui:Forma de la apertura}} ohóva ayvu fuera de foco redondo térã aspa-icha.
- {{ui:Perspectiva de dos puntos (las líneas verticales siguen verticales)}} cámara nivelá ha imagen ohóva, arquitectónico tilt-shift lente-icha, upévare pared ndoikóiva jave edificio jaharõ térã jaaỹ.
- {{ui:Balance de blancos}} ohechauka mbaʼéichapa luz color ohecha blanco: mbyasyve (3000 K-icha) lámpara luz kuarahy vara, guasúve sombra ha nublado día-pe.
- {{ui:Proyección}}: {{ui:Panorama de 360°}} 2:1 imagen opavave cámara ryepýpe panorama mirador-pe; {{ui:Panorama estéreo de 360°}} mokõi panorama ojoaju auricular-pe; {{ui:Mapa cúbico (6 caras)}} seis cuadrado vista 3 × 2 cuadrícula-pe. Ancho oúva {{ui:Tamaño}} rehe.

Proyección, profundidad de campo, perspectiva de dos puntos ha balance de blancos ojeporekóva trazado de rayos tarjeta gráfica (WebGPU) rupi, upévare ohechaukáta {{ui:Alta calidad}} rupi.

## Imagen terminar

{{ui:Imagen}} alta calidad imagen fotografía-icha ojapo, ha peteĩteĩ control imagen final cambia ndajakuaava render jey: 

- {{ui:Aspecto (transformación de vista)}}: {{ui:ACES filmic}} (imagen oúva ojeporu), {{ui:AgX}} (mbyasy, color guasu luz-pe ojeguarda), {{ui:Filmic}} (película curva ndaipóri) térã {{ui:Estándar}} (ko'ẽ, luz mbyte blanco-pe ojeheka).
- {{ui:Contraste}} ha {{ui:Compresión de altas luces}} (detalle mbyte luz-pe ohechauka jey).
- {{ui:Bloom}} (luz hyapu ruguy luz guasu rehe), {{ui:Resplandor}} {{ui:Rayos de resplandor}} ndive (luz punto ruguy estrella-icha) ha {{ui:Viñeteado}} (esquina pytũ).
- {{ui:Tabla de color (.cube)…}} `.cube` archivo rupi color grado ojapo, {{ui:Intensidad de la tabla de color}} ndive; celeste imagen-icha, navegador pe'a peve oñeguarda.

## Imagen guardar

{{ui:Guardar como}} {{ui:Guardar}} ramo oiporavo archivo: {{ui:PNG}}, {{ui:JPEG}} térã {{ui:WebP}} compartir-pe (JPEG ha WebP navegador ojapo ikatuháicha), ha alta calidad render tarjeta gráfica-pe upéi avei:

- {{ui:PNG, 16 bits}}: grado imagen, tono mbyte ha'eve, impresión térã ambue edición-pe.
- {{ui:EXR, todas las capas (punto flotante de 32 bits)}}: imagen oñemboguatáva (luz lineal, grado ndaipóri) opavave render elemento ha lámpara grupo peteĩ capa-icha, composición programa-pe.
- {{ui:Archivo de render (.ccrender, para retocar después)}}: diálogo oikotévo mezcla ha grado jey ojapo. {{ui:Abrir un archivo de render…}} omboguejy mezcla ha grado ndive, render ndojapóiva.

## Luz mezcla render rire

Ekliká {{ui:Mezcla de luces (cambiá el color y el brillo de cada luz después del render)}} {{ui:Renderizar}} mboyve. Imagen oikuaáva (térã oñemboty) rire, {{ui:Mezclá la imagen}} lámpara grupo-kuéra he'i: celeste, sol, ha lámpara nombre rehe (lámpara peteĩ nombre grupo peteĩ). Grupo peteĩ ojejoko, color omoĩ, mbyasy térã mbyasyve ojapo, ha imagen cambia ha'ekue; render jey ndojapói. {{ui:Guardar mezcla}} mezcla oñeguarda nombre-pe ambue jave ojeporu; {{ui:Como se renderizó}} imagen ojapo rupi oguejy. {{ui:Guardar}} mezcla imagen oñeguarda.

{{ui:Elementos de render (albedo, normales, profundidad, difusa, especular, transmisión, emisión, IDs)}} imagen parte avei oguarda. {{ui:Mostrar}} vista oñembohasa: superficie color (albedo), normal, profundidad, difusa, especular ha transmitida luz (peteĩteĩ directo ha indirecto), ohendu ha celeste, ha color objeto ojeheka térã material mask-kuéra apytépe.

Opavave tarjeta gráfica-pe capa mbohapy oguardavaʼerã. Tamaño guasúpe tarjeta gráfica ndaikatuhái; diálogo he'i ha tamaño mbyte ojeporu.

## Render cola

Alta calidad rire, {{ui:Renderizar cola}} {{ui:Agregar esta imagen a la cola}} imagen ko'ágã forma-pe oguarda; video diálogo {{ui:Agregar esta animación a la cola}} animación opavave, trazado de rayos cuadro cuadro. {{ui:Iniciar la cola}} peteĩ peteĩ ha'e compu-pe, ha peteĩteĩ rire {{ui:Guardar}} omoĩ ojeguarda. Página ojejoko jave cola oñemoñondive: modelo jepoka jey ha oñepyrũ oje'e hasýi. Cola WebGPU ojeporekóva.

## Niebla, humo, ruido ha caústica

Ko'ã {{ui:Niebla, humo y ruido}} ojeikuaa ha alta calidad tarjeta gráfica-pe ojeporu; ambue motor-kuéra ndojapói.

- {{ui:Niebla y bruma}} aire ojehusa peteĩ altura mbyta, sol, celeste ha lámpara ohyrýva. {{ui:Hasta dónde se ve, en metros}} ohechaukáva mbaʼeichapa mbytea (100 m mbyasy bruma, 20 m mbyte niebla), {{ui:Altura de la niebla sobre el suelo, en metros}} oĩ iñuprekuaa, ha {{ui:Rayos de luz}} ohechaukáva mbaʼeichapa niebla luz rehe ohechauka. Sol niebla yvate-pe oñemoĩ, upévare ventana térã tekoha apytépe ojeikuaa rayos de luz-icha.
- {{ui:Humo o nube}} peteĩ volumen humo térã nube ohyrýva niebla-icha omoĩ. {{ui:Tipo}} ha'e {{ui:Nube}}, {{ui:Columna de humo}} térã {{ui:Desde un archivo de volumen (.ccvol)}}, CadCraft grilla formato. {{ui:Detalle}} ha {{ui:Variación}} ojapo nube térã columna cambia, {{ui:Tamaño de su lado más largo, en metros (0 = el tamaño del modelo)}}, {{ui:Mover X (m)}}, {{ui:Mover Y (m)}}, {{ui:Mover Z (m)}} ha {{ui:Girar}} omoĩ (modelo mbytépe oñepyrũ), {{ui:Grosor}} ojapo ipyahu guasúve, {{ui:Brillo hacia adelante}} luz rupi ohechauka mbyasyve, ha {{ui:Color}} omoĩ color. Volumen archivo navegador pe'a peve oñeguarda, celeste imagen-icha.
- {{ui:Parar antes donde la imagen ya está limpia (muestreo adaptativo)}} píxel ojeity ndaikatuhápe muestra ambue ohomeha, upévare ambue imagen ojevy mbyte. {{ui:Ruido aceptable}} ohechauka grano mbaʼerepa oguedáva píxel pe'a jave. Imagen rehe línea he'i muestra mbaʼerepa píxel oguereko mboyve.
- {{ui:Cáusticas (luz que se curva por el vidrio o rebota en espejos)}} lámpara ha sol luz oñembohasa, upévare vidrio bola ruguy térã espejo luz pared-pe porã ohechauka grano ndaipóri. Niebla, humo, {{ui:Mezcla de luces (cambiá el color y el brillo de cada luz después del render)}} térã elemento render oñemoĩ jave ndojapói; 360° imagen, animación térã {{ui:Espacio Render}} ndojapói.

## Mbaʼerepa heta

Imagen oñemoña compu-pe, tarjeta gráfica rupi; ndojejapói tenonde. Mbaʼerepa heta oguereko upe tarjeta-pe. Tiempo oguata pasada ha píxel mbohapy: {{ui:Mejor}} oguereko 16 vez pasada {{ui:Borrador}} ramo, 4K imagen oguereko Full HD-gui cuatro vez píxel. Tarjeta gráfica ndoguerekóiva compu ojapo avei, ohasa jeýpe.

:::note
Diálogo he'i navegador ndaikatúi render imagen, navegador ndoguerekói WebGL 2. Actualizá térã encendé hardware aceleración configuración-pe.
:::
