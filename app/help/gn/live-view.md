---
title: La vista en vivo
summary: Peteĩ ventana modelo ndive ohechauka tiempo real apariencia-pe, sol ha sombra ndive, ha ojeheka opa ojecambia; eiporavo upépe, emoĩ hora ára ha mes.
keywords: compartir, panorama, 360, recorrido, recorrido virtual, visor independiente, visor sin conexión, enviar a cliente, video, video de recorrido, esparcir, dispersión, pasto, pradera, bosque, rocas, plantas, árboles, multitud, pintar plantas, vista en vivo, tiempo real, render en tiempo real, recorrido, caminar, primera persona, presentación, cliente, segunda pantalla, segunda ventana, monitor, hora del día, sol, estación, mes, sombras, oclusión ambiental, reflexiones, luz de rebote, iluminación global, webgpu, webgl
from: fca3b0d6
---

{{ui:Export}} › {{ui:Live view}} ohorýi peteĩ panel aplicación ári, ohechauka modelo tiempo real apariencia-pe: cielo ha sol modelo-pe ojeikuaáva ha ára-pe, sol-kuéra sombra, cara-kuéra looks ha materiales, lámparakuéra, ha luz paredes ha pisos-gui ojehupytýva. Ojeheka nde ojapóva: ejejoko vista ha upe ojejoko avei, modelo ojecambia ha omboguejy ijetu'u rire. Mba'eve ndojeguerahaʼái.

## Ejepe'a

1. Ejepe'a {{ui:Export}} › {{ui:Live view}}. Panel oñepyrũ tuichaiterei tuichaveve ángulo-pe.
2. Ejerokẏ hag̃ua, ejejapy título barra; ejeipysýi tuichave hag̃ua, ejeheja ángulo.
3. {{ui:New window}} omoĩ ijehegui peteĩ ventana iñambue, segunda pantalla hag̃ua. {{ui:Export}} › {{ui:Live view in a new window}} ojehupyty upe ventana-pe ndaipórire. Navegador oblokea ventana emergente-kuéra jave, oñepyrũ panel-pe.
4. {{ui:Close}} omboguejy.

## Control-kuéra

| Control | Mba'épa oiko |
|---|---|
| {{ui:Follow the view}} | Ojehechaukávo: live view ojehecha ModelCraft vista ohechaukáva. {{ui:Walk}} omboguejy |
| {{ui:Walk}} | Modelo ryepýpe ejeho (ojuehe) |
| {{ui:Gravity}} | Ejeho jave: piso-pe oĩ ha escalera-pe oho. Ojeheja: ejeho ñemoñare |
| {{ui:Time}} | Ára hora, 05:00 gui 21:00 peve. Sol ojeho ejejapykuéra jave |
| {{ui:Month}} | Mes (ha ára 21), sol invierno ha verano-pe ehechahaguã |
| {{ui:Quality}} | {{ui:For this computer}} ([nde máquina](topic:your-machine) ojuhúva), térã {{ui:Low}}, {{ui:Medium}} térã {{ui:High}} |

Pe línea mboýpe ohechauka mba'e ojapo vista (WebGPU térã WebGL 2), calidad ha luz de rebote.

## Ejeho modelo ryepýpe

1. Ejepe'a vista principal oĩtavape ha ejepe'a {{ui:Walk}}. Oĩ piso-pe vista ojo'éva mbytépe, 1.6 m guasu.
2. Ejepe'a live view, upéi eiporu {{key:W}} {{key:A}} {{key:S}} {{key:D}} térã flecha teclas. Ejejoaju hag̃ua {{key:Shift}}. Ejejapy ehecha hag̃ua.
3. Pasos 40 cm peve ojeguata (escaleras); mba'e hasýva pared ha'e. Paredes ndejeho ha nde ndepyhy hag̃ua.
4. {{ui:Gravity}} ojeheja jave ejogua: {{key:E}} ojupi, {{key:Q}} ojuka.
5. {{key:Esc}} ojehe'a ejeho.

## Esparcir plantas, rocas ha personas

{{ui:Scatter}} live view barra-pe ohorýi esparcir panel imagen apytépe. Peteĩ conjunto esparcir ohasa ítems entourage biblioteca-gui (árboles, arbustos, pasto, flores, rocas, personas, autos) modelo peteĩ parte-pe. Ítems ojehechauka live view-pe nomás: ndaha'éi geometría modelo-pe, ha vista principal ndohechauka.

1. **Llenar caras:** ejepe'a caras (térã grupo, terreno ichupe) ModelCraft-pe, upéi ejepe'a {{ui:Fill selection}}. Conjunto oñemyasã chupekuéra.
2. **Pintar:** ejepe'a {{ui:Paint}}, upéi ejejapy live view ári. Caras ejepe'avaekue jave, pintura chupe añoite oho; ndaipóri jave, pincel ryepýpe mba'e oĩva oho, tierra oĩ ramo avei. {{ui:Brush size}} ombohasa pincel; {{ui:Eraser}} omboguejy pintado mancha-kuéra.
3. Ejepe'a esparcir ojehai mba'e. Cada apyka peso ojehecha: 3 ha 1 oguereko mbohapy peteĩ-pe ha peteĩ upe ambue-pe.

| Control | Mba'épa oiko |
|---|---|
| {{ui:Per m²}} | Mávapa ítems cada metro cuadrado-pe |
| {{ui:Keep away (m)}} | Ndojehaʼaséi ambue objeto-gui upe distancia-gui pe michĩvéva, ha ndojeikeséi techo térã mesa rapykue. 0 ojehasa |
| {{ui:Turn (°)}} | Mávapa ítem ojeikuaa aleatorio vertical rehe |
| {{ui:Steepest (°)}} | Ndoikéi cara ojapóva pendiente guasúva |
| {{ui:Size}} | Tamaño michĩvéva ha guasúvéva, ítem tamaño ndive factor-pe |
| {{ui:Height from, to (m)}} | Heʼi ko altura-kuéra apytépe anive (vacío = mávapa) |
| {{ui:Lean with the surface}} | 0 ítem pyvusu oĩ; 1 pendiente ndive kuadrado oĩ |
| {{ui:Seed}}, {{ui:Shuffle}} | Semilla peteĩha ojapo peteĩha esparcir; Shuffle ojeporu ambue |

Conjunto-kuéra oñeñongatu .modelcraft archivo-pe ha ojeheka cara-kuéra ojecambiáva jave. [Nde máquina](topic:your-machine) nivel ndive live view ojehechaukáva ítems tuichaveve: 20 000 {{ui:Processor only}}-pe, 100 000 {{ui:Graphics card, basic}}-pe, peteĩ millón {{ui:Graphics card, high}}-pe. Panel ohechauka mávapa ojeikekuaa ha mávapa densidad ojerévo: mbytéva ojeikeséi presupuesto ojuhu jave, térã objeto oporomboty jave. Kámara apytépe ítems ohechauka imagen ndaha'éi; mbykyve ohechauka forma michĩ kolor ndive.

:::note
Esparcir ítems oĩ live view-pe (ha iremo, paneles ha visor independiente-pe). Render una imagen ndohechaukái upéva aún.
:::

## Compartir: paneles, recorridos, visor, peteĩ video

{{ui:Share}} live view barra-pe ojapo archivo-kuéra live view-gui. Opa ojapo ko computadora-pe; mba'eve ndojeguerahaʼái.

| Elección | Mba'épa ejupi |
|---|---|
| {{ui:360° panorama}} | 360° imagen vista ojeguahẽ hendápe (térã ndejehovápe), equirectangular PNG-pe, panorama visor ha foto sitio ojeporu |
| {{ui:Add this spot to the tour}}, upéi {{ui:Save the tour}} | Peteĩ página web panorama cada lugar-pe ha flecha lugar-kuérape ohecha hag̃ua (pared mbytépe flecha ocultáva) |
| {{ui:Save a viewer}} | Peteĩ página web modelo tiempo real apariencia-pe: ejerekoyty, ejeho, escena-kuéra ojekuaa oñekuaa. Ndoikóiva ijaʼaeha navegador-pe WebGPU térã WebGL 2 ndive, carpeta, USB, térã email gui, instalación ni cuenta ndoikóiva, ha internet-gui ndojeikóiva |
| {{ui:Video of the path}} | Línea de tiempo cámara ruta (térã escena-kuéra ojeikuaa orden-pe) video-pe tiempo real apariencia-pe, live view tamaño-pe: WebM térã MP4 navegador ikatu jave, ndaikatuvéramo numerado imagen-kuéra ZIP-pe |

Panorama tamaño calidad ndive: 1024, 2048 térã 4096 píxeles ancho Low, Medium ha High-pe. Visor archivo ohasa 5 MB modelo ndive.

:::note
Recorrido ha visor oñemoĩ ohechauka, ndaha'éi editar: oñeñongatu modelo oĩva guarégui.
:::

## Calidad

| | Low | Medium | High |
|---|---|---|---|
| Sombras solares | mapa sombra peteĩ | tres cascadas | cuatro cascadas |
| Oclusión ambiental (sombras de contacto) | | ✓ | ✓, mbykyve |
| Reflexiones en metal | | | ✓ |
| Bloom (Render una imagen ojapo jave) | | ✓ | ✓ |
| Bordes suavizados | FXAA | varios cuadros (TAA) | varios cuadros (TAA) |
| Luz de rebote | tosco | mbykyve | mbykyve tuichave |

{{ui:For this computer}} oñeha Low computadora-pe ndaiporiva tarjeta gráfica utilizable, Medium tarjeta gráfica integrada-pe, High tarjeta gráfica independiente-pe. Low oñemoĩ 8 GB notebook-pe ndaiporiva tarjeta gráfica.

## Luz de rebote

Luz ojehupytýva pared ilumináva-gui piso-pe, ha room-pe mbytérõ, [imágenes renderizadas](topic:render) ojapóva ojapóva path tracer ndive ojapo: panorama michĩ ohechauka modelo ryepýpe puntos-pe, procesador núcleo opa-pe background-pe. Oĩvaekue ojapo jave, pie línea ohechauka {{ui:Bounce light: 40 %}}; ojeikuaa jave vista ohupyty. Ojecambia rire, oñepyrũ jey.

:::note
Ko ha'e aproximación live view-pe, ndaha'éi imagen renderizada: puntos apytépe michĩ detalle-kuéra ohupyty upe puntos ha'eño luz de rebote. Imagen mbykyvéva ramo, ejeporu [Render una imagen](topic:render).
:::

## Brillo ha colores

Live view ojeporu brillo, balance de blanco, contraste ha vista transformación (ACES, AgX, filmic térã standard) [Render una imagen](topic:render) ndive: upépe emoĩ ha live view oheka.

:::note
Navegadores oiporavo: navegador oguereko WebGPU (Chrome ha Edge Windows, macOS ha ChromeOS-pe, Safari 26) live view ojeporu upe; ambue rapykuéra (navegador mayoría Linux-pe, Apple sistema mbyte'ỹ) ojeporu WebGL 2 ha ohechauka peteĩha.
:::
