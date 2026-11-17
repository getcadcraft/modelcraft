---
title: Novidades da 0.9
summary: Etapa de impresión con fatiador propio e envío por USB, Klipper, OctoPrint e PrusaLink, fatiado para resina e complementos de ficheiros, fluxo de materiais, complementos de xemelgo dixital e de chan de fábrica, redondeos NURBS, engrosamento e axuste a escaneados, AR na obra e dez métodos de arco.
keywords: novidades, o que hai de novo, notas de versión, rexistro de cambios, 0.9, etapa de impresión, impresión 3D, enviar á impresora 3D, fatiador, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, resina, impresión en resina, goo, sl1, ctb, anycubic, proba de exposición, fluxo de materiais, xemelgo dixital, chan de fábrica, plc, transportador, nurbs, redondeo, engrosar, axuste a escaneado, ar, na obra, métodos de arco, unidades, cambios, 0.8, 0.8.1, versión, novas funcións, motor de render, motor, abrir en, usd, gltf, unreal, motor de complementos, superficies, loft, barrido, continuidade, g0, g1, g2, cebra, step, iges, dicir a escena, escena, tempo, hora do día, estación, asistente, material desde unha foto, foto, foto de esbozo, amoblar, amoblar unha habitación, inclinado, corte inclinado, dividir, comprobación de impresión, problemas, cuadrícula de propiedades, lámpadas, idiomas, dispositivos de entrada, filas da barra de ferramentas, dwg, en directo
from: 169048a2
---

Esta é a lista do que cambiou na ModelCraft 0.9, en comparación coa 0.8.1. ModelCraft agora chega á impresora e ao chan da planta: pode pór cousas nunha cama de impresión e enviálas sen exportar, fatiar para filamento ou resina, e dispor unha liña de manipulación de materiais. Esta é CadCraft Studio 0.9 e as súas oito aplicacións; a maioría das novas funcións de abaixo son complementos.

## Novo

### Impresión 3D

- **Etapa de impresión.** Prema {{ui:Etapa de impresión}} na barra de ferramentas. Engada elementos da Biblioteca á cama da impresora, dispóñaos, mire as capas fatiadas e prema {{ui:Enviar á impresora 3D}}, sen necesidade de exportar un STL. Pertence ao complemento Impresión 3D, que está activado por defecto e pode eliminarse como calquera complemento. Ver [Pór cousas na cama de impresión e envialas a unha impresora](topic:print-stage).
- **O noso propio fatiador de filamento.** {{ui:CadCraft basic (incluído, o máis rápido)}} é o fatiador da lista **Fatiador** da tarxeta: paredes, pelexas, recheo, soportes e unha saia, nun proceso en segundo plano para que a páxina siga utilizable. {{ui:Vista previa de capas}} co control deslizante **Capa** amosa as capas antes de enviar. Os perfís de impresora, como os estilos Ender-3 e Prusa MK4, traen o seu propio G-code de inicio.
- **Envío.** Por USB (Chrome ou Edge nun ordenador, coa páxina aberta), ou a Klipper (Moonraker), OctoPrint ou PrusaLink na súa rede. Nada se conecta nin envía sen un clic, e enviar pide confirmación antes.
- **Outros fatiadores.** Kiri:Moto, PrusaSlicer e OrcaSlicer son complementos propios, desactivados por defecto; engádaos desde a tarxeta ou desde {{ui:Configuración}} › {{ui:Complementos}}. PrusaSlicer e OrcaSlicer usan a súa copia instalada de CadCraft Studio. O complemento de impresoras Bambu Lab fatía coa súa OrcaSlicer e os seus preaxustes P2S, e necesita Studio nun ordenador.
- **Impresión en resina.** Os complementos de resina (desactivados por defecto) crean imaxes de capas para a pantalla da súa impresora, con ocado e buratos de ventilación, unha balsa e soportes, unha vista previa de capas, e tempo, resina e custo. Os complementos de ficheiros escriben Elegoo GOO, SL1, Chitubox (CBDDLP e CTB 2 a 5) e Anycubic (PWMX e PWS). Unha proba de exposición de resina fai unha escaleira de cinco exposicións. Ver [Fatiar para unha impresora de resina](topic:resin-printing).
- **Sen cambios.** {{ui:Exportar}} › {{ui:Comprobar a impresión 3D (STL ou 3MF)…}}, as ferramentas de impresión e Dividir para impresión funcionan como na 0.8. Ver [Preparar un modelo para a impresión 3D](topic:print-3d).

### Fluxo de materiais, xemelgo dixital e chan de fábrica

Estes tres son complementos, desactivados ata que os active en {{ui:Configuración}} › {{ui:Complementos}}, e cada un ten a súa propia axuda cando está activo.

- **Fluxo de materiais.** Un panel chamado Fluxo de materiais dispón transportadores, estacións, buffers e rutas de AGV na vista 3D, executa unha simulación con semente, reprodúcea, e amosa o rendemento, os prazos de entrega e as colas, con resultados gardados como CSV. Os pedidos poden vir dun ficheiro CSV. As células robotizadas pódense comprobar e exportar. A ligazón PLC ten un modo simulado e un modo real sobre Modbus TCP, que só funciona en CadCraft Studio.
- **Xemelgo dixital.** Le o deseño de Fluxo de materiais e executa sobre el un PLC simulado, con avarías que pode forzar, probas de existencias, unha comparación de deseños e unha lista de materiais.
- **Chan de fábrica.** Converte as estacións en máquinas e células, léas en directo ou desde un simulador, e mantén unha cola de traballos e un OEE simple. Só lee: esta versión non pode escribir nunha máquina nin nun PLC.

### Superficies, modelos e debuxo

- **Redondeos, engrosamento e booleanas en NURBS.** O panel {{ui:Superficies}} ten {{ui:Redondeo entre caras}}, {{ui:Redondear varias arestas}}, {{ui:Engrosar nun sólido}} e {{ui:Unir}}, {{ui:Restar}} e {{ui:Intersecar}}, cada un coa súa desviación medida. Ver [Superficies de forma libre (NURBS)](topic:nurbs-surfaces).
- **Axustar superficies a un escaneado.** Seleccione unha malla escaneada e use {{ui:Axustar superficies ao escaneado}} no grupo **Escaneado**, logo {{ui:Coser as superficies nun sólido}}. É un primeiro axuste, non un paquete completo de enxeñaría inversa.
- **Un vínculo en vivo desde un modelador .3dm.** En un só sentido, desde Rhino 8 ou Grasshopper, e necesita CadCraft Studio no mesmo ordenador. Ver [Manter un modelo .3dm en directo](topic:live-3dm-link).
- **Ver o modelo no lugar.** {{ui:Ver no lugar (AR, móbil)}} no menú {{ui:Vistas}} funciona nun teléfono Android con Chrome. Ver [Ver o modelo no lugar cun teléfono Android (AR)](topic:ar-on-site).
- **Métodos de arco.** A lista {{ui:Métodos de arco}} ofrece dez xeitos de debuxar un arco, incluídos {{ui:3 puntos}} e {{ui:Inicio, Centro, Fin}}.
- **Máis unidades.** Pesos (kg, lb, t, ton) e temperaturas (graos C, F, K e R) enténdense onde escribe valores con unidades.

## En todas as aplicacións

- **Información sobre ferramentas.** O texto ao pasar sobre botóns e as etiquetas cortadas é unha información sobre ferramentas de Bootstrap.
- **Consello de inicio que se pode pechar.** A tarxeta de consello na zona de debuxo baleira ten unha pequena x para pechar. Queda pechada, e a paleta de comandos pode amosala de novo.
- **Tiras de lapelas con desprazamento.** A tira de lapelas dun panel que non cabe despraza en vez de cortarse.
- **Títulos das lapelas.** Cun documento aberto, a pestana do navegador comeza co nome do documento, despois ModelCraft e CadCraft. Un punto aparece primeiro mentres non está gardado.
- **Disposición.** {{ui:Configuración}} › {{ui:General}} › Disposición mantén as disposicións nunha lista, cunha opción para usar unha disposición só nesta aplicación e un botón para restablecer a disposición.
- **Idiomas.** A lista de idiomas en Configuración segue os ficheiros de idioma que contén a compilación. Os idiomas distintos do inglés son borradores automáticos.
- **Live e Biblioteca.** Live TeamWork amosa cursores e nomes en directo, e as coleccións de Biblioteca dan a cada aplicación unha colección predeterminada.

## Corrixido

- {{ui:Reproducir}} convértese en {{ui:Pausar}} mentres unha animación se reproduce, e {{key:Space}} reproduce e pausa cando a liña de tempo está aberta.
- A imaxe fixa renderízase con WebGL cando a tarxeta gráfica non pode arrancar o trazador de camiños. A vista de renderizado en directo pode seguir amosando o erro; isto non se comprobou nun ordenador con Windows con ese controlador.
- A mestura real de Fluxo de materiais volve conectar despois de que unha ligazón terminara por respostas de excepción do PLC.

## Límites honestos

- Nada se imprimiu nunha impresora real: nin filamento, nin resina, nin mediante Bambu Connect. Os ficheiros de resina só foron lidos de volta polos lectores propios de CadCraft.
- O xemelgo dixital e o chan de fábrica probáronse só con simuladores e respostas coñecidas, sen PLC, liña ou protocolo reais. Son axudas para comprobar, non unha validación de seguridade. A física cobre só caixas, ata oito cargas.
- A ligazón con Rhino e Grasshopper nunca se executou nos programas reais.
- Os idiomas distintos do inglés son borradores automáticos.

## Anterior: 0.8 e 0.8.1

Esta é a lista do que cambiou na ModelCraft 0.8 (2026-11-01) e 0.8.1 (2026-11-02), en comparación coa 0.7. O diálogo {{ui:Renderizar unha imaxe…}} pode agora enviar a escena a outro programa, o panel de Superficies fai superficies de forma libre suaves, e un asistente que conecte pode fixar unha escena enteira cunha frase.

### Novo

**Renderizado**

- **Un selector de motor.** {{ui:Renderizar unha imaxe…}} ten unha lista **Motor** enriba de Modo. Os nosos dous motores, Rápido e o Trazador de camiños, son os predeterminados e funcionan en todas partes. As demais entradas gardan a escena como paquete (o modelo como ficheiro USD, máis un ficheiro de axustes cos valores exactos dos materiais, as lámpadas acesas, o sol, o ceo, a exposición e a cámara) para levalo a outro programa. Unha imaxe debuxada por outro programa indica que programa e que versión a fixeron. Ver [Escoller que programa debuxa a imaxe](topic:render-engines).
- **Abrir noutro programa.** A lista Motor pode gardar a escena como ficheiro USD, ficheiro glTF (`.glb`) ou cartafol de proxecto de Unreal (`.zip`), no navegador e en CadCraft Studio. En Studio tamén pode iniciar usdview ou o programa propio do ordenador para o ficheiro. Ver [Abrir a escena noutro programa](topic:render-open-in).
- **Enviar a un motor de xogos desde Studio.** Studio escribe a escena nun proxecto de Unreal Engine e mantena ao día en cada envío, só nun sentido. As súas edicións viven nunha capa que CadCraft nunca escribe. Ver [Enviar a escena a un motor de xogos](topic:render-unreal).
- **Motores de complementos.** Un complemento pode engadir un motor á lista. Un escrito en JavaScript debuxa no navegador e en Studio; un que executa un programa precisa o seu sí en Studio. Ver [Debuxar a imaxe con outro programa](topic:render-other-program) e [Engadir un motor de renderizado cun complemento](topic:render-engine-addons).
- **Dicir a escena.** Diga ao seu asistente conectado "crepúsculo, chuvia lixeira, árbores de outono, persoas na praza" e ModelCraft a configura nun paso: o sol move á data e hora para que as sombras sigan, o ceo cambia, aparecen superficies mollas, e as árbores e as persoas colócanse como obxectos reais en etiquetas que pode ocultar, mover ou borrar. A hora do día, a data ou a estación, e o tempo (despexado, nubrado, néboa, chuvia lixeira, chuvia, tormenta) tamén funcionan por separado, e unha petición posterior cambia a mesma escena. A néboa aparece na imaxe de alta calidade na tarxeta gráfica; os outros motores amosan o ceo, a luz e as superficies mollas. A chuvia non se debuxa como regueiros que caen.

**Materiais**

- **Un material a partir dunha foto.** Dea a ModelCraft unha foto dunha superficie (un muro, un chan, pedra) e fai un material en mosaico: a iluminación da foto aplánase, as arestas úneñse para que encaixen, e un mapa de cor, un mapa de rugosidade e un mapa de normais calcúlanse desde a imaxe. É un procesamento de imaxe simple sobre a súa propia foto, sen modelo adestrado. A rugosidade é unha estimación. Unha foto plana, cadrada e de fronte dá o mellor mosaico; un patrón forte, como ladrillos, pode mostrar un fantasma suave onde se mestura a unión.

**Superficies**

- **Superficies de forma libre.** O panel {{ui:Superficies}} fai curvas NURBS e superficies sen recortar: curvas por puntos, loft, reglado, extrusión, revolución, barridos ao longo dun ou dous carrís, superficies desde unha rede de curvas, parches desde catro arestas, axuste e mestura. Cada aresta compartida mídese como G0, G1 ou G2 (oco, ángulo, salto de curvatura) nas superficies exactas, e unha aresta peor do que pediu aparece no panel Problemas cunha corrección **Axustar**. As bandas de cebra e as cores de curvatura debúxanse desde as superficies exactas. Os ficheiros STEP e IGES exportanse e impórtanse. Ver [Superficies de forma libre (NURBS)](topic:nurbs-surfaces).

**Sitio e habitacións**

- **Unha foto de esbozo ao chan.** {{ui:Ficheiro}} › {{ui:Importar unha foto dun esbozo…}} convirte unha foto de teléfono dun esbozo a man en arestas no chan á escala que indique: un grupo, cunha etiqueta para cada cor de bolígrafo. O papel atópase e endereitase no seu ordenador, e non se envía nada a ningún lado. Ver [Modelar sobre un plano de situación](topic:site-plan).
- **Amoblar unha habitación.** Seleccione un piso e use {{ui:Organizar}} › {{ui:Amoblar unha habitación…}}. Mobles de dormitorio, sala de estar, comedor, cociña, baño ou oficina colócanse por regras, contra os muros e sen tocar portas nin xanelas, nun grupo que pode retirar dun paso. É unha disposición predeterminada para que a revise, non un deseño. Ver [Biblioteca inicial](topic:starter).

**Impresión 3D**

- **Cortes inclinados.** Dividir para impresión pode inclinar os seus cortes ata 60 graos, o que dá ás pezas máis superficie para pegar. Os conectores quedan perpendiculares ao corte. Ver [Dividir un modelo para imprimir](topic:print-split).
- **A comprobación de impresión en Problemas.** Os resultados da comprobación de impresión 3D amósanse no panel Problemas, con marcadores no modelo, e Reparar corríxeos desde alí. Ver [Soportes, grosor de muro, ocado e reparación](topic:print-tools).

**En todas as aplicacións**

- **Idiomas.** A axuda e as aplicacións están en 54 idiomas. Dez son novos: lituano, letón, bosníaco, marathi, telugu, albanés, afrikaans, filipino, swahili e uzbeko. Os idiomas distintos do inglés son borradores automáticos ata que unha persoa nativa os lea, e os temas de axuda poden seguir en inglés.
- **Dispositivos de entrada.** Un trackpad, unha pluma, un rato 3D, un mando de xogos e controis MIDI poden manexar as aplicacións, para todas ou para unha.
- **Filas da barra de ferramentas.** {{ui:Configuración}} › {{ui:General}} › Filas da barra de ferramentas define Envolver (como antes), 2 filas ou 1 fila. Unha barra que non cabe despraza lateralmente en vez de quitar espazo ao debuxo. Envolver segue sendo o predeterminado.
- **Cuadrícula de propiedades.** Os campos de lámpadas de ModelCraft usan a cuadrícula común: categorías plegables, columnas de etiqueta e valor, e densidade Compacta. A aritmética escrita, como `2*450`, segue funcionando.
- **Problemas.** O panel Problemas (o botón de aviso na barra da aplicación) é común a todas as aplicacións. En ModelCraft contén a comprobación de impresión e os avisos de continuidade das superficies.
- **En directo.** Unha sesión de Live TeamWork amosa quen está onde. Ver [Modelar xuntos con Live TeamWork](topic:work-live).
- **Complementos.** Os complementos poden engadir motores de render, como antes.
- **Conecte a súa IA.** O contrato de ferramentas e as comprobacións das oito aplicacións pasan, con 454 ferramentas en total. A conexión dun clic dentro de Studio, un conector aloxado para asistentes do navegador, a súa propia clave dentro de Studio e un paquete publicado aínda non se prometen. As aplicacións non teñen IA propia. Ver [Usar ModelCraft con asistentes de IA](topic:use-with-ai-assistants).

### Corrixido na 0.8.1

- **Sección de clases de DWG.** A sección de clases dun ficheiro DWG líase co tipo equivocado, o que podía romper o ficheiro ao importar. Agora lese ben, en ModelCraft e nas outras aplicacións que len DWG.
- **Tabletas en vertical.** O espazo sobrante da cuadrícula vai para o lenzo, e a disposición da folla comeza nos 760 píxeles de ancho ou menos. A folla de estilos de ModelCraft tamén ten o cambio.
- **Idioma en Studio.** CadCraft Studio e as edicións empaquetadas poden cambiar de idioma en execución; antes eran só en inglés. Isto aínda non se probou en todas as plataformas: díganos se o idioma non cambia.

### Non está nesta versión aínda

- **Sen sinatura de código.** Windows pode amosar SmartScreen: escolla {{ui:Máis información}}, e logo {{ui:Executar igualmente}}. Nun Mac, prema co botón dereito e escolla {{ui:Abrir}}. As versións para tendas están en espera, e a compilación para iPad e iPhone non se reconstruíu para a 0.8.1.
- Que outro programa debuxe a imaxe sen un complemento de motor de render, as cámaras panorámicas ou estéreo e unha imaxe do ceo a través doutro programa, e o complemento que abre o escenario de Unreal aínda non están. Os ficheiros escríbense; o complemento non se publicou e non se executou en Unreal.
- Superficies de forma libre: G3 e clase A non se miden nin se afirman, e os recortes e os sólidos chegarán máis tarde.
- As imaxes doutros programas non son píxel a píxel como as nosas: só coinciden a cámara, o sol, as lámpadas e a exposición.
- A corrección de 0.8.1 para o cambio de idioma en Studio non se probou en todas as plataformas.

Todo o demais está en [Aínda sen construír](topic:not-built-yet). Para a versión anterior, ver [Novidades da 0.7](topic:whats-new-0-7).
