---
title: Mba'épa oñemoambue 0.9 (anterior)
summary: Etapa de impresión con nuestro laminador y envío por USB, Klipper, OctoPrint y PrusaLink, laminado de resina y complementos de archivo, flujo de material, complementos de gemelo digital y piso de fábrica, filetes NURBS, engrosamiento y ajuste de escaneo, AR en obra y diez métodos de arco.
keywords: novedades 0.9, versión anterior, novedades, qué hay de nuevo, notas de versión, registro de cambios, 0.9, etapa de impresión, impresión 3d, enviar a impresora 3d, laminador, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, resina, impresión en resina, goo, sl1, ctb, anycubic, prueba de exposición, flujo de material, gemelo digital, piso de fábrica, plc, cinta transportadora, nurbs, filete, engrosar, ajuste de escaneo, ar, en obra, métodos de arco, unidades, novedades, qué hay de nuevo, notas de versión, registro de cambios, cambios, 0.8, 0.8.1, versión, nuevas funciones, motor de render, motor, abrir en, usd, gltf, unreal, motor de complementos, nurbs, superficies, loft, barrido, continuidad, g0, g1, g2, zebra, step, iges, decir la escena, escena, clima, hora del día, estación, asistente, material desde una foto, foto, foto de boceto, amueblar, amueblar un ambiente, corte inclinado, dividir, revisión de impresión, problemas, cuadrícula de propiedades, lámparas, idiomas, dispositivos de entrada, filas de barra de herramientas, dwg, en vivo
from: 2717d1b1
---

Ko'ã mba'e oñemoambue ModelCraft 0.9-pe, 0.8.1 rehe jehechakuaa. ModelCraft ko'ẽrõ oike impresora ha piso de planta-pe: pod eiporavo ibasepe de impresión-pe ha emondo ndaikotevẽi exportar, laminá filamento térã resina-pe, ha eiporã peteĩ línea manejo de material. Ko'ã ha'e CadCraft Studio 0.9 ha sus ocho aplicaciones; ko'ã mba'e pyahu ojehechaukáva gueteri ha'e complementos.

## Pyahu

### Impresión 3D

- **Etapa de impresión.** Eapreta {{ui:Etapa de impresión}} barra de herramientas-pe. Emoĩ ítems de Biblioteca impresora ibasepe-pe, eñemboaty, ehecha capas laminadas ha apreta {{ui:Enviar a impresora 3D}}, ndaikotevẽi STL exportar. Ha'e complemento Impresión 3D-pe, oĩ apagado peve omoaktiva ha oñemboguejy complemento ndaipóri. Ehecha [Put things on the print bed and send them to a printer](topic:print-stage).
- **Nuestro propio laminador de filamento.** {{ui:CadCraft basic (included, fastest)}} ha'e laminador tarjeta **Laminador** lista-pe: paredes, pielas, relleno, soportes ha falda, peteĩ worker-pe ha'e página ojeporu hag̃ua. {{ui:Vista previa de capas}} **Capa** deslizador ndive omombe'u capas envío mboyve. Perfiles de impresora, Ender-3 ha Prusa MK4 ojapo tuichaite, oguereko iG-code inicial.
- **Envío.** USB rupi (Chrome térã Edge computadora-pe, página ojekuaa haguã), térã Klipper (Moonraker), OctoPrint térã PrusaLink tu red-pe. Ndaipóri mba'e oñemboguejy térã oñemoĩ clic ndaipóri, ha envío oporandu jepe.
- **Otros laminadores.** Kiri:Moto, PrusaSlicer ha OrcaSlicer ha'e complemento mboyve, apagado peve; emoaggrega tarjeta-gui térã {{ui:Configuración}} › {{ui:Complementos}}. PrusaSlicer ha OrcaSlicer ojeporu tu propia copia instalada de CadCraft Studio. Complemento impresoras Bambu Lab lamina OrcaSlicer ndive ha perfiles P2S, ha oikotevẽ Studio computadora-pe.
- **Impresión en resina.** Complementos de resina (apagado peve) ojapo imagen de capa tu impresora pantalla-pe, ahuecamiento ha orificios de ventilación, balsa y soportes, vista previa de capas, ha tiempo, resina ha costo. Complementos de formato ojapo Elegoo GOO, SL1, Chitubox (CBDDLP ha CTB 2 guive 5) ha Anycubic (PWMX ha PWS). Prueba de exposición resina ojapo escalera cinco exposiciones. Ehecha [Slice for a resin printer](topic:resin-printing).
- **Sin cambios.** {{ui:Exportar}} › {{ui:Verificar impresión 3D (STL o 3MF)…}}, herramientas de impresión ha Dividir para impresión oñemboja 0.8-pe ramo.  Ehecha [Get a model ready for 3D printing](topic:print-3d).

### Flujo de material, gemelo digital y piso de fábrica

Ko'ã mbohapy ha'e complemento, apagado peve emoaktiva {{ui:Configuración}} › {{ui:Complementos}}-pe, ha peteĩ ayuda propia omoaktiva rire.

- **Flujo de material.** Panel Flujo de material oñemoĩ cintas transportadoras, estaciones, buffers ha rutas AGV 3D vista-pe, ojapo simulación, ojehai, ha omombe'u rendimiento, tiempos de entrega y colas, resultados CSV-pe ojekuaveve. Pedidos ikatu oúva archivo CSV-gui. Celdas robot ikatu ojehechava ha exportarse. Enlace PLC oguereko modo blando ha modo real Modbus TCP rupi, ha ojapo CadCraft Studio-pe anive.
- **Gemelo digital.** Oñemboja diseño Flujo de material ha ojapo PLC blando upépe, falla omoñe'ẽva, pruebas de stock, comparación de diseño ha lista de materiales.
- **Piso de fábrica.** Estaciones ojapo máquinas ha celdas, ojehai directamente térã simulador-gui, ha oguereko cola de trabajos ha OEE sencillo. Ojehai solamente: ko versión ndaikatúi oescribi máquina térã PLC-pe.

### Superficies, modelos y dibujo

- **Filetes, engrosamiento y booleanas en NURBS.** Panel {{ui:Superficies}} oguereko {{ui:Redondeo entre caras}}, {{ui:Redondear varias aristas}}, {{ui:Dar espesor para hacer un sólido}} ha Unión, Restar ha Intersección, peteĩ peteĩ desviación medida. Ehecha [Freeform surfaces (NURBS)](topic:nurbs-surfaces).
- **Ajustar escaneo.** Eiporavo malla escaneada ha ojeporu {{ui:Ajustar superficies al escaneo}} **Escaneo** grupo-pe, upéi {{ui:Coser las superficies en un sólido}}. Ha'e primer ajuste, ndaha paquete completo de ingeniería inversa.
- **Enlace en vivo desde modelador .3dm.** Peteĩ dirección, desde Rhino 8 térã Grasshopper, ha oikotevẽ CadCraft Studio peteĩ computadora-pe. Ehecha [Keep a .3dm model live](topic:live-3dm-link).
- **Ver el modelo en obra.** {{ui:Ver en obra (AR, teléfono)}} menú {{ui:Vistas}}-pe ojapo teléfono Android Chrome-pe. Ehecha [See the model on site with an Android phone (AR)](topic:ar-on-site).
- **Métodos de arco.** Lista {{ui:Métodos de arco}} ome'ẽ diez tape ojapo hag̃ua arco, oĩhágui {{ui:3 puntos}} ha {{ui:Inicio, Centro, Final}}.
- **Más unidades.** Pesos (kg, lb, t, ton) ha temperaturas (grados C, F, K ha R) oñeentendéva ojekuaa rupi valores unidades ndive.

## En toda aplicación

- **Consejos emergentes.** Texto flotante botón-pe ha etiqueta cortada ha'e Bootstrap tooltip.
- **Consejo de inicio cerrable.** Tarjeta consejo área de dibujo vacía-pe oguereko peteĩ x pequeño. Oĩ cerrado ha paleta de comandos ikatu omoĩ jey.
- **Barras de pestañas desplazables.** Barra de pestañas panel ndojehupýiva desplázase en vez de cortarse.
- **Títulos de pestaña.** Documento abierto-pe, pestaña navegador oñepyrũ nombre documento-gui, upéi ModelCraft ha CadCraft. Punto oñepyrũ oñeguardáiva.
- **Diseño.** {{ui:Configuración}} › {{ui:General}} › Diseño oguereko diseños lista-pe, opción ojeporu peteĩ aplicación anive, ha botón restablecer diseño.
- **Idiomas.** Lista idioma Configuración-pe oñeñangareko archivos idioma buildpe. Idiomas ndaha inglés ha'e borradores automáticos.
- **En vivo y Biblioteca.** Live TeamWork omoĩ cursores y nombres en vivo, ha colecciones Biblioteca oguereko colección predeterminada peteĩ aplicación-pe.

## Oñemoañete

- {{ui:Reproducir}} oñemoambue {{ui:Pausa}} animación oñemboja mboyve, ha {{key:Space}} oñemboja ha omboty línea de tiempo abierta mboyve.
- Render fijo oñemboja WebGL-pe tarjeta gráfica ndaikatúi oñepyrũ trazador de caminos. Vista render en vivo ikatu ojehechauka error; ndojehekáima Windows computadora controlador ndive.
- Modo real de Flujo de material oñemoingove peve enlace oñemboty PLC respuestas excepción rire.

## Limitaciones honestas

- Ndojapóri peteĩ impresora real: ndaha filamento, ndaha resina, ndaha Bambu Connect rupi. Archivos resina oñelee CadCraft lectores propios rupi añoite.
- Gemelo digital ha Piso de fábrica oñemboja simuladores ha respuesta conocidas añoite, sin PLC, línea ni protocolo real. Ha'e ayuda de revisión, ndaha validación de seguridad. Física cubre cajas añoite, hasta ocho cargas.
- Enlace Rhino ha Grasshopper ndojapo nunca programas reales-pe.
- Idiomas ndaha inglés ha'e borradores automáticos.

## Anteriores: 0.8 y 0.8.1

Ko'ã mba'e oñemoambue ModelCraft 0.8 (2026-11-01) ha 0.8.1 (2026-11-02) rehe, 0.7 ndive ojehechakuaa. Diálogo {{ui:Render una imagen…}} ikatu ko'ẽrõ envia escena otro programa-pe, panel Superficies oreja superficies libres suaves, ha asistente oconecta peteĩ oración-pe ikatu omoĩ escena entera.

### Pyahu

**Render**

- **Opción de motor.** {{ui:Render una imagen…}} oguereko lista **Motor** Modo ryepýpe. Ñande ro'ẽ motores, Rápido ha Trazador de rutas de luz, ha'e predeterminados ha ojapo opa rupive. Otras entradas omboguejy escena paquete rehe (modelo USD archivo rupi, archivo configuración valores material exacto, lámparas omboyke, sol, cielo, exposición ha cámara) ojeporu hag̃ua otro programa-pe. Imagen otro programa omoĩva omombe'u mavapa programa ha versión. Ehecha [Choose which program draws the picture](topic:render-engines).
- **Abrir en otro programa.** Lista Motor ikatu omboguejy escena USD archivo, glTF archivo (`.glb`) térã Unreal proyecto carpeta (`.zip`), navegador ha CadCraft Studio-pe. Studio-pe avei ikatu omboguejy usdview térã computadora propio programa archivo rehe. Ehecha [Open the scene in another program](topic:render-open-in).
- **Envío a motor de juegos desde Studio.** Studio oñeko escena Unreal Engine proyecto-pe ha oñemboyke envío ndive, peteĩ dirección añoite. Tus cambios oĩ capa CadCraft ndoikotevéi. Ehecha [Send the scene to a game engine](topic:render-unreal).
- **Motores desde complementos.** Complemento ikatu omoaggrega motor lista-pe. JavaScript-pe ojapóva navegador ha Studio-pe ojapo; programa ojapóva oikotevẽ Studio-pe pe jajapo ndéve. Ehecha [Draw the picture with another program](topic:render-other-program) ha [Add a render engine with an add-on](topic:render-engine-addons).
- **Decí la escena.** Eñe'ẽ asistente conectado "atardecer, lluvia leve, árboles de otoño, gente en la plaza" ha ModelCraft omoĩ peteĩ pasómpe: sol omoĩ fecha ha hora-pe ha sombras oreguái, cielo ojehecha, superficies mojadas oguahẽ, árboles ha gente ojapo objeto real etiqueta-pe ikatu omoĩ, omboty térã omoambue. Hora del día, fecha, estación ha clima (claro, nublado, niebla, lluvia leve, lluvia, tormenta) avei oñemboja, ha pedido ulterior oñemoambue escena mbohapy. Niebla oĩ calidad alta imagen-pe tarjeta gráfica-pe; otros motores omoĩ cielo, luz ha superficies mojadas. Lluvia ndojapói rayas que caen.

**Materiales**

- **Material de peteĩ foto.** Eme'ẽ ModelCraft peteĩ foto superficie rehe (pared, piso, piedra) ha ojapo material mosaico: iluminación foto rupi oñemboja, bordes oñemboja hag̃ua, ha mapa color, mapa rugosidad ha mapa normal ojejuhu imagen rehe. Ha'e procesamiento imagen sencillo tu propia foto-pe, ndaipóri modelo entrenado. Rugosidad ha'e estimación. Foto sencilla, cuadrada, derecha ome'ẽ mejor mosaico; patrón fuerte peteĩ ladrillo oñemoĩ sombra leve unión-pe.

**Superficies**

- **Superficies libres.** Panel {{ui:Superficies}} ojapo curvas NURBS y superficies sin recortar: curvas por puntos, loft, reglada, extrusión, revolución, barridos sobre uno térã dos rieles, superficies de red de curvas, parches de cuatro bordes, coincidencia y mezcla. Cada borde compartido oñemedí G0, G1 térã G2 (hueco, ángulo, salto de curvatura) superficies exactas-pe, ha borde peor ndeipotáva aparece panel Problemas-pe con arreglo **Coincidir**. Rayas cebra ha colores de curvatura ojapo superficies exactas-gui. Archivos STEP ha IGES oñeikepa ha oike. Ehecha [Freeform surfaces (NURBS)](topic:nurbs-surfaces).

**Sitio y ambientes**

- **Foto de boceto sobre el suelo.** {{ui:Archivo}} › {{ui:Importar peteĩ foto de boceto…}} omoambue foto celular boceto mano-gui bordes suelo-pe escala ndeŕe: peteĩ grupo, etiqueta peteĩ color bolígrafo. Papel ojejuhu ha enderezado computadora-pe, ndaipóri oñemondo mboyve. Ehecha [Model on a site plan](topic:site-plan).
- **Amueblar un ambiente.** Eiporavo peteĩ piso ha ojapo {{ui:Organizar}} › {{ui:Amueblar peteĩ ambiente…}}. Mobiliario dormitorio, sala, comedor, cocina, baño o oficina oñemoĩ reglas rupi, pared-pe ha lejos puerta ha ventana, peteĩ grupo oñemboguejy peteĩ pasómpe. Ha'e diseño predeterminado ndehecha hag̃ua revisar, ndaha diseño. Ehecha [Starter library](topic:starter).

**Impresión 3D**

- **Cortes inclinados.** Dividir para impresión ikatu omboguejy cortes inclinados 60 grado peve, omoĩva piezas área pegado mboyve. Conectores oĩ cuadrado corte-pe. Ehecha [Split a model for printing](topic:print-split).
- **Revisión de impresión en Problemas.** Hallazgos de revisión de impresión 3D oñemboja panel Problemas-pe marcadores modelo-pe, ha Reparar oarreglaha upégui. Ehecha [Supports, wall thickness, hollowing and repair](topic:print-tools).

**En toda aplicación**

- **Idiomas.** Ayuda ha aplicaciones oñeñe'ẽ 54 idioma-pe. Diez ha'e pyahu: lituano, letón, bosnio, maratí, telugu, albanés, afrikáans, filipino, suajili ha uzbeko. Idiomas ndaha inglés ha'e borradores automáticos hasta peteĩ hablante nativo oleeha, ha ayuda temas ikatu oiko inglés-pe.
- **Dispositivos de entrada.** Touchpad, lápiz, mouse 3D, control de juego ha controles MIDI ikatu omanda aplicaciones, opa rupive térã peteĩ-pe.
- **Filas de barra de herramientas.** {{ui:Configuración}} › {{ui:General}} › Filas de barra de herramientas omoĩ Ajustar (ojeikohápe), 2 filas térã 1 fila. Barra ndojeheséva desplázase costadopegua dibujo espacio ndojejokóvo. Ajustar predeterminado oĩ.
- **Cuadrícula de propiedades.** Campos de lámpara ModelCraft ojeporu cuadrícula compartida: categorías plegables, columnas etiqueta y valor, densidad Compacta. Aritmética escrita `2*450` oñemoĩ ojapo.
- **Problemas.** Panel Problemas (botón advertencia barra aplicación-pe) oñeñangarekóva opa aplicaciones. ModelCraft-pe oguereko revisión de impresión ha avisos de continuidad superficie.
- **En vivo.** Sesión Live TeamWork omombe'u máva oĩ mávape. Ehecha [Model together with Live TeamWork](topic:work-live).
- **Complementos.** Complementos ikatu omoaggrega motores render, upeicha.
- **Conecta tu IA.** Contrato de herramientas ha revisiones de opa ocho aplicaciones oguereko 454 herramienta. Conexión de un clic dentro Studio-pe, conector alojado navegador asistentes-pe, tu clave propia Studio-pe ha paquete publicado ndaikotevẽi ojeprometéi. Aplicaciones ndoguerekói IA propia. Ehecha [Use ModelCraft with AI assistants](topic:use-with-ai-assistants).

### Oñemboty 0.8.1-pe

- **Sección de clases DWG.** Sección de clases archivo DWG ojehechakuaa tipo ndeipotáva, ikatu omboguebe archivo importación-pe. Ko'ẽrõ ojehecha porã, ModelCraft ha DWG oñemoaty ambue aplicaciones-pe.
- **Tabletas en vertical.** Altura cuadrícula sobrante omoĩ lienzo-pe, ha diseño hoja oñepyrũ 760 píxel guive ojapo menor. Hoja de estilos ModelCraft-pe avei oguereko ko cambio.
- **Idioma en Studio.** CadCraft Studio ha ediciones empaquetadas ikatu omoambue idioma oñemboja jave; upe rire inglés añoite. Ndojapói opa plataforma-pe; eme'ẽ roikuaa ndaoñemoambue idioma.

### Ndaipóri ko versión-pe

- **Sin firma de código.** Windows-pe SmartScreen ojehechauka: eiporavo {{ui:Más información}}, upéi {{ui:Ejecutar de todos modos}}. Mac-pe, clic derecho ha eiporavo {{ui:Abrir}}. Versiones tienda ojehai hagua; iPad ha iPhone build ndojejapóri 0.8.1-pe.
- Otro programa render ojapo sin complemento motor render, cámaras panorámicas o estéreo ha imagen cielo otro programa rupi, ha complemento abre escenario Unreal ndaipóri ko'ẽrõ. Archivos oñeikepa; complemento ndojejeporúi ha ndaikaru Unreal-pe.
- Superficies libres: G3 ha clase A ndojehai térã ndoñeha; recorte ha sólidos oúta.
- Imágenes otros programas ndaha píxel por píxel igual nuestras: cámara, sol, lámparas ha exposición ojekuaáva añoite.
- Corrección cambio idioma Studio-pe 0.8.1 ndojehechahaguéi opa plataforma-pe.

Ambue ojekuaa [Not built yet](topic:not-built-yet). Versión anterior rehe, ehecha [What's new in 0.7](topic:whats-new-0-7).
