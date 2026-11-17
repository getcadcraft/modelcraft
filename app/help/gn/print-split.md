---
title: Dividir un modelo grande para imprimir
summary: Cortá un modelo más grande que la cama de tu impresora en piezas que entren, con clavijas, llaves, colas de milano, agujeros de espiga o imán y el número de la unión en ambas caras, y bajá todas las piezas y una hoja de ensamble en un solo zip.
keywords: impresión 3d, dividir, inclinado, corte inclinado, corte en ángulo, oblicuo, divisor, cortar, demasiado grande, tamaño de cama, volumen de impresión, piezas, partes, conectores, clavijas, llaves, cola de milano, espiga, imán, holgura, tolerancia, números de pieza, ensamble, vista explosionada, zip, stl, 3mf, licencia, llave usb, dongle
from: ee96ba77
---

Cuando un modelo ndoikói cama de tu impresora rupi, **Dividir para imprimir** oipartíva chupe pieza ojehechápa, ojapo conector ha oikuaaukáva jave pieza ojoaju, ha oheja mbohapy número ambas caras de cada unión. Emoĩ {{ui:Exportar}} › {{ui:Verificar impresión 3D (STL o 3MF)…}}; diálogo-pe línea **Herramientas de impresión** oĩ {{ui:Dividir para imprimir}}. Ojepe'a tarjeta gotyo vista-pe.

Oiméva imprimible ha'e: selección, walo mbohapy ojehechaukáva selección ndaipóri. Imprimible ojapova ha'e sólido cerrado; verificación-pe agujero ojehechaukáramo, emoĩ [Reparar](topic:print-tools#repair) ojepyhýpe.

Ojapo ModelCraft-pe, nde computadora-pe: ndaipóri servidor de licencia, ndaipóri llave USB, ndaipóri ojesubíva.

## Cómo cortar

- **Cama-pe pocoive, pieza mbytevéva**: heja cama ancho, fondo ha altura (oñepyrũ {{ui:Configuración}} › ModelCraft › impresora 3D). Tarjeta-pe oñemoĩ cuántas pieza oikotevé ha mboy guasu chupe; modelo oipartíva pieza iguálpe, umi mbytevéva oikotévape. Pieza oĩ ambue arrimo-pe archivo-pe jave oikoséramo cama-pe. Pieza-gui ojejuhúva conector oikuaaukáva tamaño-pe.
- **Heja chéve ojehechaukáva**: eiporavo eje oñecorta-háme ha ehecha mm-pe modelo puntayvépe (`100, 200` ojapo mbohapy pieza) ha pyta'ỹ.
  **Inclinado** ohundi corte ha'e 60° peve eje ambue mokõi-gui rupi (por ejemplo, Z-gui corte X rupi inclinado). Corte inclinado cada uno modelo mbytépe línea-pe oĩ; pieza-kuéra oguerekoséva pegado-pe más superficie, ha unión oñemboguejýva mejor. Conector ojeikóva corte-gui ijyvyrávo.

Corte-kuéra imaginario línea ojehechaukáva tarjeta ojepe'ápe modelo rembýpe.

## Conectores

Peteĩ-peteĩ lugar pieza mokõi oñemoñáva oguereko conector, ojeikóva iporãvéva lugar-pe: por lo menos **pared mínima** + **holgura** + ijetu'uha tamaño mbohapy ojejoko vore ha ojehayhúva ambue corte-gui, ojojogua'ỹ mokõi agujero. Cara ipuku-pe mokõi conector ojeikóva, pieza ndoikói haguã.

- **Clavija redonda**: peteĩ pieza-pe clavija (puntape chaflán), ambue-pe agujero.
- **Llave cuadrada**: umíva, cuadrado, pieza ojeikuaa ojojoguáva peteĩ sapy'ápe.
- **Cola de milano**: lengua ojoguáva ranura-pe ijyvy-gui. Ranura ñuhãme ambue corte ojejoko jave, cola de milano ohasáva mboyve ha ojeike abierto punta-gui. Cola de milano iporã ojehecháva eje peteĩ rupi (rebanadas hilera); cuadrícula-pe clavija térã espiga ojapo.
- **Agujero de espiga**: agujero peteĩ tenda-pe; espiga-kuéra oimprimíva avei (zip-pe).
- **Bolsillo de imán**: bolsillo peteĩ tenda-pe imán redondo diámetro ha grosor nde heja-va rupi. Pegá mboyve polo-kuéra ojekuaa.
- **Ninguno (cola)**.

**Holgura** ha'e tuichave clavija ha agujero mbytépe peteĩ lado-gui (0,2 mm oñepyrũ). Ha'e heja nde número-pe: agujero redondo oñemboguyva apytépe, ijyva plano-kuéra, ndaipóri ijyvy'a, holgura oguerekoséva. Eĩmo tenonde nde impresora pieza-kuéra, emboguy.

Unión-pe conector ndaipóri lugar (pared mbyky, contacto mbyky): tarjeta oñe'ẽ upéva; péicha pegá.

## Números de pieza

Con **Grabar los números de unión en ambas caras** oñemoĩ, cada unión oguereko mokõi pieza-kuéra número, por ejemplo `3-4`, 0,6 mm hondura ambas caras-pe, derecho ojehecháva. Números oñepyrũ 5 mm alto ha oiko mbyky 2,5 mm peve; unión ndaipóri lugar número-pe ojehechaukáva. Pieza-kuéra oñumera tuichave-gui capa-kuéra ojapo.

## Vista previa, bajar, dividir el modelo

1. {{ui:Vista previa}} corta el modelo ha oñe'ẽ mboy pieza, unión ha conector oĩ, ha pieza-kuéra oĩ oimprimíva verificación ha cama oipapáva, ha cada pieza tamaño. Círculo ojehechaukáva conector ha número vista-pe.
2. {{ui:Descargar las piezas (.zip)}} ojeipe'a peteĩ zip: archivo pieza-kuéra (STL térã 3MF, **Archivos** rupi ojepotáva), cada uno cama-pe ojeikóva; espiga-kuéra; ha **hoja de ensamble** — pieza-kuéra ojepe'ava kuatiahéva ha numero-kuéra (`assembly.svg` ha `assembly.png`) ha pieza ha unión lista (`assembly.txt`).
3. {{ui:Dividir el modelo}} oñemoĩ pieza-kuéra modelo-pe umi grupo térã componente ojeporãva rehe, hoja de ensamble-pe ojehechaukáva réra; peteĩ paso-pe: {{ui:Deshacer}} omoingove original. Oikotevé grupo térã componente ojeporã; descarga ojapo oimprimíva.

## Mboyve conector nde reipe

Vista previa rire, **Conectores a mano** ohechauka nde ojeporu-háme conector mboheta:

- {{ui:Mover uno}}: eike vista-pe anillo pytã (ohoverá verde), ha upéi eike corte-pe ojeikóvape.
- {{ui:Agregar uno}}: eike vista-pe conector oikóvape. Oiko corte plano-pe nde eike jeroapía, mokõi pieza mbytépe.
- {{ui:Quitar uno}}: eike anillo pytã conector mboyve.

Cada cambio ojehecha de nuevo automáticos-icha: lugar contorno-pe mboyve, ambue corte térã ambue conector ndojapói, ha tarjeta oñe'ẽ upéva. {{ui:Automático otra vez}} omboyve nde heja. Oñeñongatu modelo, selección ha corte ndojejuhúi peve.

Vista previa oikove modelo, selección térã configuración ojejuhúi peve; upéi tarjeta oñeporandu ojapo vista previa jey.

:::note
Peteĩ-peteĩ pieza ojehecha 3D-impresión verificación-icha bajarã rire. Nde slicer ohechakuaa cada pieza imprimíva: ehecha upépe, ha peteĩ unión oimprimi primero ehecha nde impresora holgura.
:::
