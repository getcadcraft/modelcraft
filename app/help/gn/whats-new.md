---
title: Mba'épa pyahu 0.9
summary: Impresión etapa ndive ñande rembe slicer ha USB, Klipper, OctoPrint ha PrusaLink-pe envío, resina slicing ha archivo add-on, material flujo, gemelo digital ha piso de fábrica add-on, NURBS redondeo, espesor ha escaneo ajuste, AR sitio-pe ha diez arco método.
keywords: pyahu, qué hay de nuevo, notas de versión, registro de cambios, 0.9, impresión etapa, impresión 3d, enviar a impresora 3d, slicer, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, resina, impresión en resina, goo, sl1, ctb, anycubic, prueba exposición, flujo de material, gemelo digital, piso de fábrica, plc, cinta transportadora, nurbs, redondeo, espesor, ajuste escaneo, ar, en sitio, métodos de arco, unidades, qué hay de nuevo, notas de versión, registro de cambios, cambios, 0.8, 0.8.1, versión, nuevas funciones, motor de render, motor, abrir en, usd, gltf, unreal, motor add-on, nurbs, superficies, loft, barrido, continuidad, g0, g1, g2, cebra, step, iges, decir escena, escena, clima, hora del día, estación, asistente, material de foto, foto, foto de boceto, amueblar, amueblar ambiente, inclinado, corte inclinado, dividir, chequeo impresión, problemas, cuadrícula propiedades, lámparas, idiomas, dispositivos de entrada, filas barra herramientas, dwg, live
from: 169048a2
---

Ko'ã ojeporavo ModelCraft 0.9, 0.8.1 rehe. ModelCraft pyahu impresora ha planta piso-pe: impresión cama-pe ojeʼe, exporta ndojapóiva envía, filamento térã resina slicing, ha material manejo línea diseño. CadCraft Studio 0.9 ha ocho app; opa pyahu mbaʼe add-on.

## Pyahu

### Impresión 3D

- **Impresión etapa.** Herramienta barra-pe {{ui:Print stage}} eheka. Biblioteca ítem impresora cama-pe emoĩ, ordená, slicing capa ehecha ha {{ui:Send to 3D printer}} eheka, STL exporta ndaipórirõ. 3D Print add-on-pe oĩ, por default ojeporavo, cualquier add-on ndo-ñongatúi. Ehecha [Put things on the print bed and send them to a printer](topic:print-stage).
- **Nuestro filamento slicer.** {{ui:CadCraft basic (included, fastest)}} tarjeta **Slicer** lista-pe: paredes, piel, relleno, soportes ha borde, trabajador-pe páginas ndojaiko. {{ui:Preview layers}} **Layer** deslizador ndive capa ehecha envía rire. Impresora perfil Ender-3 ha Prusa MK4 estilo ojeporavo, inicio G-code.
- **Envío.** USB rupi (Chrome térã Edge kompyutadór-pe, página ojeaguahẽ), térã Klipper (Moonraker), OctoPrint térã PrusaLink red-pe. Eheka ndoikói ni envía; envío ojepregunta.
- **Ambue slicer.** Kiri:Moto, PrusaSlicer ha OrcaSlicer peteĩ-peteĩ add-on, default ndaipóri; tarjeta térã {{ui:Settings}} › {{ui:Add-ons}}-pe emoĩ. PrusaSlicer ha OrcaSlicer CadCraft Studio-pe nde instalado kopia ojeporavo. Bambu Lab impresora add-on nde OrcaSlicer P2S preset ndive slicing, kompyutadór Studio oikotevẽ.
- **Resina impresión.** Resina add-on (default ndaipóri) impresora pantalla capa imagen ojapo: ahuecado ha agujero ventilación, balsa ha soporte, capa vista, tiempo, resina ha costo. Archivo-formato add-on Elegoo GOO, SL1, Chitubox (CBDDLP ha CTB 2 a 5) ha Anycubic (PWMX ha PWS) ojapo. Resina exposición prueba cinco exposición escalera ojapo. Ehecha [Slice for a resin printer](topic:resin-printing).
- **Ndojejapo'ỹva.** {{ui:Export}} › {{ui:Check for 3D printing (STL or 3MF)…}}, impresión herramienta ha Split for printing 0.8-pe ojapo rejoko. Ehecha [Get a model ready for 3D printing](topic:print-3d).

### Flujo de material, gemelo digital ha piso de fábrica

Ko'ã mbohapy add-on, {{ui:Settings}} › {{ui:Add-ons}}-pe ojeʼe jey ojeporavo; peteĩ-peteĩ ayuda oĩ ojeporavo rire.

- **Flujo de material.** Material flow panel: cinta transportadora, estación, buffer ha AGV ruta 3D vista-pe emoĩ, simulación ejecutá ha ohechauka, rendimiento, espera tiempo ha cola ohechauka; CSV resultado. Orden CSV archivo rupi ikatu. Robot celda ehecha ha exporta. PLC enlace Modbus TCP-pe ha modo real ha blando, CadCraft Studio-pe nomás ojapo.
- **Gemelo digital.** Material flow diseño ojeporavo, blando PLC ojapo, falla fuerza, stock prueba, diseño comparación ha materiales lista.
- **Piso de fábrica.** Estación máquina ha celda ojapo, simulador térã real-pe leer, trabajo cola ha simple OEE. Solo lee: esta versión máquina térã PLC-pe escribir ndaikatúi.

### Superficies, modelos ha dibujo

- **Redondeo, espesor ha booleano NURBS-pe.** {{ui:Surfaces}} panel: {{ui:Fillet between faces}}, {{ui:Fillet several edges}}, {{ui:Thicken into a solid}} ha Union, Subtract ha Intersect, peteĩ-peteĩ medida desviación ndive. Ehecha [Freeform surfaces (NURBS)](topic:nurbs-surfaces).
- **Escaneo superficie ajuste.** Escaneo malla eheka ha **Scan** grupo-pe {{ui:Fit surfaces to the scan}}, upéi {{ui:Stitch the surfaces to a solid}}. Primer ajuste, ingeniería inversa paquete completo ndaha'éi.
- **.3dm modelador vivo enlace.** Peteĩ dirección, Rhino 8 térã Grasshopper-gui, CadCraft Studio kompyutadór-pe oikotevẽ. Ehecha [Keep a .3dm model live](topic:live-3dm-link).
- **Modelo sitio-pe ehecha.** {{ui:Views}} menú-pe {{ui:View on site (AR, phone)}} Android teléfono Chrome ndive. Ehecha [See the model on site with an Android phone (AR)](topic:ar-on-site).
- **Arco método.** {{ui:Arc methods}} lista diez arco ojapo, {{ui:3-Point}} ha {{ui:Start, Center, End}} ndive.
- **Más unidades.** Peso (kg, lb, t, ton) ha temperatura (grados C, F, K ha R) entiende, valor unidad ndive emoĩ rehe.

## Opa app-pe

- **Ayuda globo.** Botón rehe mensaje ha corte etiqueta Bootstrap ayuda.
- **Cierre ojeʼe consejo.** Vacío dibujo área-pe consejo tarjeta peteĩ x cierre. Cerrado ohóva, comando paleta ohechauka ikatu.
- **Pestaña ojeʼe.** Pestaña lista ndojapóiva ojeʼe, ndojeporavo; ojeʼe.
- **Pestaña títulos.** Documento ojeporavo, navegador pestaña documento nombre, upéi ModelCraft ha CadCraft. Punto primero ohechauka documento ndojesalvavéi.
- **Diseño.** {{ui:Settings}} › {{ui:General}} › Layout diseño lista-pe, app-pe solo diseño ojeporavo ha diseño reset botón.
- **Idiomas.** Settings idioma lista build archivo ojeʼe. Inglés ndaha'éi ambue máquina borrador.
- **Live ha Library.** Live TeamWork cursor ha nombre ohechauka, Library colección app-pe ojeporavo default.

## Arreglado

- Animación ejecuta jave {{ui:Play}} {{ui:Pause}}-pe ojapo, {{key:Space}} línea de tiempo abierto jave ejecutá ha pausa.
- Imagen render WebGL ojeporavo tarjeta gráfica path tracer ndojapói jave. Render vista error ohechauka; Windows PC-pe ndaipóri driver ndojehecháiva.
- Material flujo modo real PLC excepción respuesta rire enlace de nuevo ojapo.

## Sincero límite

- Impresora real-pe ndojeporavói: filamento, resina ni Bambu Connect ndive. Resina archivo CadCraft lector-pe nomás leído.
- Gemelo digital ha piso de fábrica simulador ha respuesta conocida-pe probados, PLC, línea ni protocolo real ndive ndaipóri. Verificación ayuda, seguridad validación ndaha'éi. Física caja-pe nomás, ocho carga peve.
- Rhino ha Grasshopper enlace programa real-pe ndojapói.
- Ambue idioma ndaha'éi inglés máquina borrador.

## Anteriormente: 0.8 ha 0.8.1

ModelCraft 0.8 (2026-11-01) ha 0.8.1 (2026-11-02) ojeporavo, 0.7 rehe. **Renderizar una imagen…** diálogo escena ambue programa-pe envía ojapo; Superficies panel suave NURBS superficie ojapo; asistente conectado peteĩ oración-pe escena opa ojapo.

### Pyahu

**Render**

- **Motor elección.** {{ui:Render a picture…}} diálogo **Engine** lista Mode ári. Nuestros dos motor, Fast ha Path tracer, default ha opa tenda. Ambue entrada escena paquete (USD modelo, material valor, lámpara, sol, cielo, exposición, cámara) ambue programa-pe. Ambue programa imagen versión omombe'u. Ehecha [Choose which program draws the picture](topic:render-engines).
- **Ambue programa-pe abrir.** Engine lista USD, glTF (`.glb`) térã Unreal proyecto carpeta (`.zip`) ohupyty, navegador ha CadCraft Studio-pe. Studio-pe usdview térã kompyutadór programa ojepyrũ ikatu. Ehecha [Open the scene in another program](topic:render-open-in).
- **Juego motor-pe Studio rupi envía.** Studio escena Unreal Engine proyecto-pe ojapo, envío jey paso paso; nde edición capa ndojapói. Ehecha [Send the scene to a game engine](topic:render-unreal).
- **Add-on motor.** Add-on lista-pe motor emoĩ. JavaScript-pe ojapo navegador ha Studio-pe; programa ojapo Studio-pe nde ñe'ẽ oikotevẽ. Ehecha [Draw the picture with another program](topic:render-other-program) ha [Add a render engine with an add-on](topic:render-engine-addons).
- **Escena decí.** Asistente-pe "atardecer, lluvia leve, árboles otoño, gente plaza-pe" ohupyty; ModelCraft peteĩ paso-pe ojapo: sol fecha ha hora-pe, sombra ojeʼe, cielo ojekambia, mojado superficie, árbol ha persona objeto etiqueta-pe, ocultá, mover, eliminar. Hora, fecha, estación, clima (despejado, nublado, niebla, lluvia leve, lluvia, tormenta) ndive ojapo; pedido escena mismo ojekambia. Niebla alta calidad tarjeta-pe; ambue motor cielo, luz ha mojado ohechauka. Lluvia raya ndojehecha.

**Materiales**

- **Foto material.** Superficie foto (pared, piso, piedra) ModelCraft ome'ẽ, mosaico material ojapo: luz plano, borde unido, color mapa, rugosidad mapa ha normal mapa foto-gui. Nde kompyutadór imagen ha ndaipóri entrenado modelo. Rugosidad estimación. Plano, cuadrado, derecho foto mejor mosaico; ladrillo oñemoĩva fantasma ojehecha.

**Superficies**

- **Libre superficies.** {{ui:Surfaces}} panel NURBS curva ha superficie ojapo: puntos ojeʼe curva, loft, reglada, extrusión, revolución, barrido riel ha superficie red, parche cuatro borde, emparejar ha mezcla. Cada borde G0, G1 o G2 medida (espacio, ángulo, curvatura salto) exacto superficie-pe; peor borde Problemas panel-pe **Match** arreglo ndive. Cebra raya ha curvatura color exacto superficie-pe. STEP ha IGES archivo ojeʼe ha ingresa. Ehecha [Freeform surfaces (NURBS)](topic:nurbs-surfaces).

**Sitio ha habitación**

- **Boceto foto suelo-pe.** {{ui:File}} › {{ui:Import a sketch photo…}} teléfono foto mano boceto borde suelo-pe ojapo, nde escala ndive: grupo, bolígrafo color etiqueta-pe. Papel kompyutadór-pe ojekuaa ha enderezado; nada envía. Ehecha [Model on a site plan](topic:site-plan).
- **Habitación amueblar.** Piso eheka ha {{ui:Organize}} › {{ui:Furnish a room…}}. Dormitorio, sala, comedor, cocina, baño térã oficina mueble regla rupi, pared ári ha puerta ventana ndive ndojapo'ỹ; grupo peteĩ paso-pe ojeʼe. Default diseño revisar, diseño ndaha'éi. Ehecha [Starter library](topic:starter).

**Impresión 3D**

- **Inclinado corte.** Split for printing corte 60 grado inclinado ikatu, pieza ojeporavo pegado área. Conector corte rectángulo. Ehecha [Split a model for printing](topic:print-split).
- **Problemas impresión chequeo.** 3D impresión chequeo ohechauka Problemas panel, modelo marca ndive, Repair omoarreglá. Ehecha [Supports, wall thickness, hollowing and repair](topic:print-tools).

**Opa app-pe**

- **Idiomas.** Ayuda ha app 54 idioma. Diez pyahu: lituano, letón, bosnio, marathi, telugu, albanés, afrikáans, filipino, suajili ha uzbeko. Inglés ndaha'éi máquina borrador native hasy; ayuda tema inglés-pe.
- **Entrada dispositivo.** Trackpad, bolígrafo, 3D mouse, juego control ha MIDI app-pe ojeporavo, opa térã peteĩ-peteĩ.
- **Herramienta barra filas.** {{ui:Settings}} › {{ui:General}} › Toolbar rows Wrap (ojeʼe ramo), 2 filas térã 1 fila. Barra ndojapóiva lado-pe ojeʼe, dibujo espacio ndojeporavo.
- **Propiedades cuadrícula.** ModelCraft lámpara campo compartido cuadrícula ojeporavo: categoría plegable, etiqueta ha valor columna, Compact densidad. `2*450` aritmética ojeporavo.
- **Problemas.** Problemas panel (barra app-pe advertencia botón) opa app-pe compartido. ModelCraft-pe impresión chequeo ha superficie continuidad advertencia.
- **Live.** Live TeamWork sesión ohechauka ojeporavo nde. Ehecha [Model together with Live TeamWork](topic:work-live).
- **Add-on.** Add-on render motor ome'ẽ, peteĩ-peteĩ ojehecha.
- **Asistente ñe'ẽ.** Herramienta contrato ha ocho app chequeo ojapo, 454 tembipuru opa. Studio-pe un clic conexión, navegador asistente conector, Studio-pe nde clave ha paquete publicado ndoprometi. App-pe IA ndaipóri. Ehecha [Use ModelCraft with AI assistants](topic:use-with-ai-assistants).

### Arreglado 0.8.1

- **DWG clases sección.** DWG archivo clases sección tipo ojehai ojapo; importa archivo rompe. Ahora ojehai correcto, ModelCraft ha DWG leer ambue app-pe avei.
- **Tablet vertical.** Grilla altura espacio canvas-pe, hoja diseño 760 píxel ancho térã menos-pe ojapo. ModelCraft estilo hoja avei.
- **Studio idioma.** CadCraft Studio ha paquete edición ejecuta jave idioma ojekambia ikatu; antes inglés nomás. Opa plataforma ndojehai; idioma ndojekambia jave ohendu.

### Ndaipóri ko versión-pe

- **Código firma ndaipóri.** Windows SmartScreen ohechauka: {{ui:More info}}, upéi {{ui:Run anyway}}. Mac-pe, derecha clic {{ui:Open}}. Tienda build ko hora-pe ndojapóiva; iPad ha iPhone build 0.8.1-pe ndojapóiva.
- Panorámica estéreo cámara ha cielo imagen ambue programa-pe ndaipóri; Unreal etapa abrí complemento ndaipóri. Archivo ojapo; complemento ndojejapo ha Unreal-pe ndojapói.
- Freeform superficies: G3 ha clase A ndojehechái ni ndoñe'ẽ; recorte ha sólido pyahu.
- Ambue programa imagen ndaha'éi píxel por píxel ñande ndive: cámara, sol, lámpara ha exposición nomás emparejá.
- 0.8.1 Studio idioma arreglo opa plataforma-pe ndojehai.

Opa ambue [Not built yet](topic:not-built-yet). Ñeñongatu versión 0.7 rehe, ehecha [What's new in 0.7](topic:whats-new-0-7).
