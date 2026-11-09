---
title: Mba'e pyahu 0.8 ha 0.8.1
summary: Render Engine eligi archivo ambue programa-kuéra haguã, caras NURBS libres continuidad medida, escena ndeporu asistente-pe, material peteĩ foto rupi, boceto foto tierra-pe, amueblado ambiente, cortes inclinados impresión 3D-pe ha impresión check Problemas panel-pe.
keywords: qué hay de nuevo, novedades, notas de versión, changelog, cambios, 0.8, 0.8.1, versión, nuevas funciones, render engine, motor, abrir en, usd, gltf, unreal, motor de add-on, nurbs, superficies, loft, sweep, continuidad, g0, g1, g2, zebra, step, iges, decir la escena, escena, clima, hora del día, estación, asistente, material de una foto, foto, foto de boceto, amueblar, amueblar ambiente, inclinar, corte inclinado, dividir, chequeo de impresión, problemas, panel de propiedades, lámparas, idiomas, dispositivos de entrada, filas de barra de herramientas, dwg, en vivo
from: e4989b17
---

Ko'ã ojeporavo ModelCraft 0.8 (2026-11-01) ha 0.8.1 (2026-11-02) rehe, 0.7 ndive ohupytýva. Diálogo {{ui:Render de una imagen…}} ikatu ko'ágã escena ambue programa-pe ome'ẽ, Superficies panel ojapo superficies libres lisas, ha nde conectáva asistente peteĩ oración ndive escena peteĩ ojapo.

## Pyahu

### Render

- **Motor eligi.** {{ui:Render de una imagen…}} oguereko lista **Motor** Modo ryépe. Ñande propio mokõi motor, Rápido ha Trazador de trayectoria, default ha opa-pe oiko. Ambue ñemoĩ escena paquete-pe ramo (modelo USD archivo-pe, ha ajustes archivo materiales valores exacto, lámparas ojevýva, sol, cielo, exposición ha cámara ndive) ambue programa-pe ogueraha haguã. Ambue programa ojapo imagen ohechauka mba'e programa ha versión ojapo. Ehecha [Eligi mba'e programa ojapóta imagen](topic:render-engines).
- **Ambue programa-pe ojeporta.** Motor lista ombohasa escena USD archivo-pe, glTF archivo (`.glb`) térã Unreal proyecto carpeta (`.zip`) ramo, navegadór-pe ha CadCraft Studio-pe. Studio-pe avei ikatu oñepyrũ usdview térã computadora propio programa archivo-pe. Ehecha [Abrir la escena en otro programa](topic:render-open-in).
- **Juego motor-pe Studio-gui ome'ẽ.** Studio ombohasa escena Unreal Engine proyecto-pe ha oñemyatyrõ cada envío-pe, peteĩ dirección-pe solamente. Nde propio cambios peteĩ capa-pe oiko, CadCraft ndoheséi. Ehecha [Enviar la escena a un motor de juego](topic:render-unreal).
- **Motor add-on-gui.** Peteĩ add-on ikatu omoĩ motor lista-pe. JavaScript-pe ojapóva nevegadór ha Studio-pe ojapo; programa oñemoĩva oñeikotevẽ tu sí Studio-pe. Ehecha [Dibujar imagen con otro programa](topic:render-other-program) ha [Agregar motor de render con un add-on](topic:render-engine-addons).
- **Escena decí.** Ei asistente conectado-pe "atardecer, llovizna, árboles de otoño, gente en la plaza" ha ModelCraft ojapo peteĩ pasó-pe: sol ojeñemboty fecha ha hora-pe ojapo haguã sombras ojeheja, cielo ñemyatyrõ, superficies mbiruguasu oike, árboles ha gente objeto reales ramo tags-pe ohecha, ojapa térã ojejoaju hasa. Hora del día, fecha térã estación, ha clima (despejado, nublado, niebla, llovizna, lluvia, tormenta) avei oiko ipypeʼỹ, ha peteĩ pedido ambue escena ojapo mismo. Niebla ojehecha alta calidad imagen-pe gráfica tarjeta-pe; ambue motor-kuéra cielo, luz ha superficies mbiru ohechauka. Lluvia ndoĩ jaráva rayas-pe.

### Materiales

- **Peteĩ foto rupi material.** Ome'ẽ ModelCraft-pe foto de superficie (pared, piso, piedra) ha ojapo material mosaico: foto luz ojeheja, bordes ojeunyva, color mapa, rugosidad mapa ha normal mapa ojejapo foto rupi. Ko'ã imagen procesamiento ndoikóiva modelo entrenado, nde propia imagen-pe. Rugosidad ha'e estimación. Foto cuadrada, derecha ha ndahecháiva jave mosaico porã; patrón mbarete, ladrillo-gui, unión ojapo rupi mancha ohechauka.

### Superficies

- **Superficies libres.** Panel {{ui:Superficies}} ojapo curvas NURBS ha superficies sin recortar: curvas puntos rupi, loft, reglada, extrusión, revolución, barridos peteĩ wala mokõi riel-pe, superficies curva red-gui, parches cuatro bordes-gui, match ha blend. Cada borde compartido medido G0, G1 térã G2 (hueco, ángulo, curvatura salto) superficie exacta-pe, ha borde ndoporiva eligí jave Problemas panel-pe ohechauka **Match** arreglo ndive. Zebra rayas ha curvatura colores superficie exacta-gui ojapo. STEP ha IGES archivo oguenohẽ ha oike. Ehecha [Superficies libres (NURBS)](topic:nurbs-surfaces).

### Sitio ha ambiente

- **Boceto foto tierra-pe.** {{ui:Archivo}} › {{ui:Importar peteĩ foto de boceto…}} telefonomi foto boceto mano-gui borde tierra-pe ojapo, eñe'ẽva escala-pe: peteĩ grupo, peteĩ tag cada lápiz color-pe. Papel ojejuhu ha ojeenderesa nde computadora-pe, ndoguenohẽi nada. Ehecha [Modelar sobre un plano de sitio](topic:site-plan).
- **Ambiente amueblado.** Eligi piso ha ejeporu {{ui:Organizar}} › {{ui:Amueblar peteĩ ambiente…}}. Dormitorio, sala, comedor, cocina, baño térã oficina mueble regla rupi omoĩ, pared rembe ha puerta ha ventana ndive, peteĩ grupo-pe mbohéva peteĩ paso-pe. Ha'e default distribución jehechavo, ndaha'éi diseño. Ehecha [Biblioteca inicial](topic:starter).

### Impresión 3D

- **Cortes inclinados.** Dividir impresión-pe inclinar ikatu cortes 60 grado peve, pedazo-kuéra gluing area porã. Conectores corte ryépe ojeguarda cuadrado. Ehecha [Dividir un modelo para impresión](topic:print-split).
- **Impresión chequeo Problemas-pe.** Impresión 3D chequeo resultados ohechauka Problemas panel-pe modelo-pe markers ndive, ha Reparar hendive ojeregua. Ehecha [Soportes, grosor de pared, vaciado y reparación](topic:print-tools).

### Opa app-pe

- **Idiomas.** Ayuda ha app 54 idioma-pe. Diez pyahu: lituano, letón, bosnio, maratí, telugu, albanés, afrikáans, filipino, suajili ha uzbeko. Inglés ambue idioma-kuéra máquina borrador ha'e peteĩ tuichavéva oñeleéva peve, ayuda tema oĩtaha inglés-pe.
- **Entrada dispositivos.** Trackpad, lápiz, mouse 3D, juego control ha MIDI control ojeporu ikatu app-kuéra, opavave térã peteĩ-pe.
- **Barra de herramientas filas.** {{ui:Configuración}} › {{ui:General}} › Filas de barra de herramientas omoĩ Envolver (ojekuaa ramo), 2 filas wala 1 fila. Barra ndoikeévo desplázase costádo-pe, dibujo espacio ndoguerekói. Envolver ha'e default.
- **Panel de propiedades.** ModelCraft lámpara campo ojeporu compartido panel: colapsables categorías, etiqueta ha valor columnas, ha Compacto densidad. Aritmética tipeada `2*450` oiko jey.
- **Problemas.** Problemas panel (barra superior-pe advertencia botón) opa app-kuéra compartido. ModelCraft-pe chequeo impresión ha superficies continuidad advertencia oguereko.
- **En vivo.** Live TeamWork sesión ohechauka máva oĩ mba'épa. Ehecha [Modelar juntos con Live TeamWork](topic:work-live).
- **Add-ons.** Add-on-kuéra ikatu omoĩ motor render, ko'ãva ramo.
- **Conectá tu IA.** Herramientas contrato ha ocho app-kuéra chequeo oĩ, 454 herramienta opavave. Un clic conexión Studio-pe, navegadór asistente-kuéra conector hospedado, Studio-pe nde propio clave ha paquete publicado ndoikóiva jepe. Ehecha [Usar ModelCraft con asistentes de IA](topic:use-with-ai-assistants).

## Arreglado 0.8.1-pe

- **DWG clases sección.** DWG archivo clases sección ojelee tipo ndeeréva, importación-pe archivo ohasa ikatu. Ko'ágã porã ojelee, ModelCraft-pe ha DWG leéva ambue app-pe.
- **Tablet vertical.** Grilla altura ojeguerekova lienzo-pe, ha hoja distribución 760 píxel ancho térã michĩvépe oñepyrũ. Estilo hoja ModelCraft-pe avei oguerekóta cambio.
- **Idioma Studio-pe.** CadCraft Studio ha paquete edición ojehecha idioma ojemyatyrõ ojeporu jave; mboyve solo inglés. Opa plataforma-pe ndoñeprobáva jepe: ehechaukárõ idioma ndojemyatyrõi.

## Ko versión-pe ndoĩ jepe

- **Ndoĩ firma código.** Windows oikuaáta SmartScreen: eligi {{ui:Más información}}, upéi {{ui:Ejecutar de todos modos}}. Mac-pe, clic derecho ha eligi {{ui:Abrir}}. Tienda build ha'e ojeko, iPad ha iPhone build ndoñeorganizái 0.8.1-pe.
- Ambue programa render add-on ndeporiva, panorama térã estéreo cámara ha ambue programa cielo imagen ndoĩ, ha Unreal escena abre ojeporta plug-in ndoĩ. Archivo ojejapo; plug-in ndoñemoĩ ha Unreal-pe ndojeporuvái.
- Superficies libres: G3 ha clase A ndoñemedíi térã ndoñeprometéi, recorte ha sólido mboyve.
- Ambue programa imagen ndaha'éi pixel por pixel ñande ndive: cámara, sol, lámpara ha exposición sóloramo ojekuaa.
- Studio-pe idioma cambio 0.8.1 arreglo ndoñeprobáva opa plataforma-pe.

Opa ambue [Todavía no construido](topic:not-built-yet)-pe. Versión yma-pe, ehecha [Novedades en 0.7](topic:whats-new-0-7).
