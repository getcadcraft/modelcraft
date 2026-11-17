---
title: Poner cosas en la cama de impresión y enviarlas a una impresora
summary: Agregá elementos de la Biblioteca o tu propio modelo a la cama de tu impresora, ordenalos, mirá las capas cortadas y enviá la impresión por USB o la red, o guardá el G-code, sin exportar antes un STL.
keywords: etapa de impresión, impresión 3d, impresora, cama, enviar a impresora 3d, slicer, gcode, g-code, usb, klipper, moonraker, octoprint, prusalink, biblioteca, ordenar, ajustar todo, vista previa de capas, relleno, soportes, filamento, pla, petg, complemento, complemento de impresión 3d
from: abcf5d7e
---

**Etapa de impresión** oordena cosas cama impresora-pe, oslicea ha omondo impresora-pe. Ndaikatu exportar archivo primero. Ha'e complemento Impresión 3D rehe, omboguejy ojeporanduva.

:::note
Ndaipóri heja impresora ojejapo rire ko ha'e. Slicer ha'e pyahu: ehecha umi capa primera primera impresión-pe, ha ehecha vista previa de capas enviar mboyve.
:::

## Mbo'ehao reipe

Modelo cama-pe emoĩ, ehecha ojeikóramo, ha capas ohechaukáva ehecha, ha impresora-pe enviá térã G-code guardá.

## Mba'éichapa ojapo

1. Herramienta barra-pe oprimí {{ui:Etapa de impresión}}. Tarjeta oĩ vista rembýpe ha línea pytã oŕe cama.
2. **Agregar desde la Biblioteca** rehe, búsqueda ventana-pe ñe'ẽ eme'ẽ, oprimí {{ui:Search}} ha oprimí {{ui:Agregar}} resultado-pe. Elemento cama-pe ojeikóta tamaño ijetu'uha, térã mbyky ojeikóta ojeajusta haguã. Ojapo térã ojeipe'a ha vista-pe ehecha ha oĩ, avei cama-pe oĩ.
3. **En la cama** rehe, ehecha tamaño elemento peteĩ-peteĩ. **Fuera de la cama** marca oikotevé ojemboguéva. Ojemboguejy, ojeipe'a ha ojeporã ojepe'a vista-pe herramienta ndaha'éi.
4. Oprimí {{ui:Arrange on the bed}} elementos-kuéra ojeporandu haguã, térã {{ui:Fit all on the bed}} ojeikóta mbyky peve ojeajusta haguã.
5. **Tu impresora** rehe, eiporavo **Cama** tamaño térã umi perfil impresora-gui.
6. **Configuración de impresión** rehe, eiporavo **Material**, **Calidad** ha **Relleno %**, ha tilde **Agregar soportes bajo voladizos** tesape pyre ojeikuaa oikotevéramo.
7. Oprimí {{ui:Vista previa de capas}} ha moveha **Capa** deslizador capas cortadas ehecha haguã. Upéi eikotevéramo etapa térã configuración ojemboguejy, oprimí {{ui:Vista previa de capas}} jey.
8. **Conexión** rehe, eiporavo {{ui:Cable USB}}, {{ui:Klipper (Moonraker)}}, {{ui:OctoPrint}} térã {{ui:PrusaLink}}. USB-pe oprimí {{ui:Conectar}}. Red impresora-pe **Dirección** ñeʼẽ (ha **clave API** oporandu ramo), upéi oprimí {{ui:Probar la conexión}}.
9. Oprimí {{ui:Enviar a impresora 3D}}. Tarjeta oporandu cama ndaipóri mba'e ha material korrecto oñemoĩ, ha ohechauka tiempo, material ha temperatura. Ñeconfirmá enviá haguã.

Mensaje oúta impresora oñepyrũ. {{ui:Detener la impresión}} omboguejy calentadores, ventilador ha motores. Archivo añoite ehayhu-pe, oprimí {{ui:Guardar el G-code en su lugar}}.

## Ñe'ẽ

- USB oikotevé Chrome térã Edge computadora-pe, ha página oñeñongatu impresión oñemotenondeva peve. Ojepe'a ojejapo ñemoñáva oñemboguejy.
- Red impresora oikotevé sitio ojekuaáva (Moonraker-pe `cors_domains` rupi ha'ékena; OctoPrint-pe CORS ojapo ha API clave ojepe'a). Nde navegador oporandu ikatu ndaha'éi red-pe mba'e ohechápa.
- Ndaipóri ojeikóva ndoúi ndejeporã ndemoñeʼẽri.
- Slicer lista **Slicer** rehe. {{ui:CadCraft básico (incluido, el más rápido)}} oĩ ijyvy-pe. Kiri:Moto, PrusaSlicer, OrcaSlicer ha Bambu Lab P2S ha'e complementos ijeheguikuéra, tarjeta-gui térã {{ui:Configuración}} › {{ui:Complementos}} rupi ojeporanduva. PrusaSlicer ha OrcaSlicer ojeporu nde kopia, ha CadCraft Studio-gui computadora-pe ojapo.
- Pieza ndaha'éi sólido cerrado ojejeheja; tarjeta ohechauka mboy ha'e forma ndojehechaukáiva.
- Resina impresora-kuéra-pe, ehecha [Cortar para impresora de resina](topic:resin-printing). Modelo verificar térã reparar rire, ehecha [Soportes, grosor de pared, ahuecado y reparación](topic:print-tools).
