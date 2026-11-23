---
title: Novidades da 0.9 (anteriores)
summary: Etapa de impresión co noso propio slicer e envío por USB, Klipper, OctoPrint e PrusaLink, corte para resina e complementos de ficheiros, fluxo de material, complementos de xemelgo dixital e chan de fábrica, redondeos NURBS, engrosamento e axuste a escaneados, AR no lugar e dez métodos de arco.
keywords: novidades 0.9, versión anterior, novidades, notas de publicación, rexistro de cambios, 0.9, etapa de impresión, impresión 3d, enviar á impresora 3d, slicer, cadcraft basic, gcode, usb, klipper, moonraker, octoprint, prusalink, kiri moto, prusaslicer, orcaslicer, bambu, resina, impresión en resina, goo, sl1, ctb, anycubic, proba de exposición, fluxo de material, xemelgo dixital, chan de fábrica, plc, transportador, nurbs, redondeo, engrosar, axuste ao escaneado, ar, no lugar, métodos de arco, unidades, cambios, 0.8, 0.8.1, versión, novas funcionalidades, motor de render, motor, abrir en, usd, gltf, unreal, motor de complementos, superficies, loft, barrido, continuidade, g0, g1, g2, cebra, step, iges, dicir a escena, escena, tempo, hora do día, estación, asistente, material a partir dunha foto, foto, foto dun esbozo, amoblar, amoblar unha habitación, corte inclinado, dividir, comprobación de impresión, problemas, cuadrícula de propiedades, lámpadas, idiomas, dispositivos de entrada, filas da barra de ferramentas, dwg, en directo
from: 2717d1b1
---

Isto é o que cambiou en ModelCraft 0.9, comparado coa 0.8.1. ModelCraft chega agora á impresora e ao chan da planta: pode colocar cousas na mesa de impresión e envialas sen exportar, cortar para filamento ou resina, e deseñar unha liña de manipulación de materiais. Esta é CadCraft Studio 0.9 e as súas oito aplicacións; a maioría das novidades seguintes son complementos.

## Novo

### Impresión 3D

- **Etapa de impresión.** Prema {{ui:Etapa de impresión}} na barra de ferramentas. Engada elementos da Biblioteca á mesa da impresora, ordénos, revise as capas cortadas e prema {{ui:Enviar á impresora 3D}}, sen necesidade de exportar un STL. Pertence ao complemento Impresión 3D, que está activado por defecto e pódese eliminar como calquera complemento. Consulte [Coloque cousas na mesa de impresión e envíeas a unha impresora](topic:print-stage).
- **O noso propio slicer de filamento.** {{ui:CadCraft basic (incluído, o máis rápido)}} é o slicer da lista **Slicer** da tarxeta: paredes, peles, recheo, soportes e saia, nun proceso en segundo plano para que a páxina siga usable. {{ui:Vista previa das capas}} co control **Capa** mostra as capas antes de enviar. Os perfís de impresora, como os estilos Ender-3 e Prusa MK4, levan o seu propio G-code de inicio.
- **Envío.** Por USB (Chrome ou Edge nun ordenador, coa páxina aberta), ou a Klipper (Moonraker), OctoPrint ou PrusaLink na súa rede. Nada se conecta nin envía sen un clic, e o envío pregunta antes.
- **Outros slicers.** Kiri:Moto, PrusaSlicer e OrcaSlicer son complementos propios, desactivados por defecto; engádaos desde a tarxeta ou desde {{ui:Configuración}} › {{ui:Complementos}}. PrusaSlicer e OrcaSlicer usan a copia instalada por vostede desde CadCraft Studio. O complemento de impresoras Bambu Lab corta co seu OrcaSlicer e os seus perfís P2S e necesita Studio nun ordenador.
- **Impresión en resina.** Os complementos de resina (desactivados por defecto) fan imaxes de capas para a pantalla da súa impresora, con ocado e orificios de ventilación, balsa e soportes, unha vista previa das capas e tempo, resina e custo. Os complementos de formato de ficheiro escriben Elegoo GOO, SL1, Chitubox (CBDDLP e CTB 2 a 5) e Anycubic (PWMX e PWS). Unha proba de exposición en resina fai unha escaleira de cinco exposicións. Consulte [Corte para unha impresora de resina](topic:resin-printing).
- **Sen cambios.** {{ui:Exportar}} › {{ui:Comprobar a impresión 3D (STL ou 3MF)…}}, as ferramentas de impresión e Dividir para impresión funcionan como na 0.8. Consulte [Prepare un modelo para a impresión 3D](topic:print-3d).

### Fluxo de material, xemelgo dixital e chan de fábrica

Estes tres son complementos, desactivados ata que os active en {{ui:Configuración}} › {{ui:Complementos}}, e cada un ten a súa propia axuda cando está activo.

- **Fluxo de material.** Un panel chamado Fluxo de material dispón transportadores, estacións, almacenamentos intermedios e rutas AGV na vista 3D, executa unha simulación con semente, reprodúcea e mostra o rendemento, os tempos de entrega e as filas, con resultados gardados como CSV. As ordes poden vir dun ficheiro CSV. As celas robotizadas pódense comprobar e exportar. A ligazón PLC ten un modo suave e un modo real sobre Modbus TCP, que só funciona en CadCraft Studio.
- **Xemelgo dixital.** Le a disposición do Fluxo de material e executa un PLC suave sobre ela, con avarías que pode forzar, probas de existencias, unha comparación de disposicións e unha lista de materiais.
- **Chan de fábrica.** Converte as estacións en máquinas e celas, lee os datos en directo ou desde un simulador, e mantén unha cola de traballos e un OEE simple. Só lee: esta versión non pode escribir nunha máquina nin nun PLC.

### Superficies, modelos e debuxo

- **Redondeos, engrosamento e booleanas en NURBS.** O panel {{ui:Superficies}} ten {{ui:Redondeo entre caras}}, {{ui:Redondear varias arestas}}, {{ui:Engrosar nun sólido}} e Unión, Restar e Interseccionar, cada un co seu desvío medido. Consulte [Superficies de forma libre (NURBS)](topic:nurbs-surfaces).
- **Axustar superficies a un escaneado.** Seleccione unha malla escaneada e use {{ui:Axustar superficies ao escaneado}} no grupo **Escaneo**, e logo {{ui:Coser as superficies nun sólido}}. É un primeiro axuste, non un paquete completo de enxeñaría inversa.
- **Unha ligazón en directo desde un modelador .3dm.** Dun só sentido, desde Rhino 8 ou Grasshopper, e necesita CadCraft Studio no mesmo ordenador. Consulte [Mantenha un modelo .3dm en directo](topic:live-3dm-link).
- **Vexa o modelo no lugar.** {{ui:Ver no lugar (AR, móbil)}} no menú {{ui:Vistas}} funciona nun teléfono Android con Chrome. Consulte [Vexa o modelo no lugar cun teléfono Android (AR)](topic:ar-on-site).
- **Métodos de arco.** O despregable {{ui:Métodos de arco}} ofrece dez xeitos de debuxar un arco, incluídos {{ui:3 puntos}} e {{ui:Inicio, Centro, Fin}}.
- **Máis unidades.** Os pesos (kg, lb, t, ton) e as temperaturas (graos C, F, K e R) enténdense onde escribe valores con unidades.

## En todas as aplicacións

- **Información emerxente.** O texto ao pasar o cursor sobre os botóns e as etiquetas cortadas é unha información emerxente de Bootstrap.
- **Suxestión inicial pechable.** A tarxeta de suxestión na zona de debuxo baleira ten unha pequena x de pechar. Queda pechada, e a paleta de comandos pode mostrala de novo.
- **Pestanas con desprazamento.** A franxa de pestanas dun panel que non cabe despraza en vez de cortarse.
- **Títulos das pestanas.** Cun documento aberto, a pestana do navegador comeza co nome do documento, e logo ModelCraft e CadCraft. Un punto aparece primeiro mentres non está gardado.
- **Disposición.** {{ui:Configuración}} › {{ui:Xeral}} › Disposición garda as disposicións nun despregable, cunha opción para usar unha disposición só nesta aplicación e un botón para restablecer a disposición.
- **Idiomas.** A lista de idiomas en Configuración segue os ficheiros de idioma que contén a compilación. Os idiomas distintos do inglés son borradores automáticos.
- **En directo e Biblioteca.** TeamWork en directo mostra cursores e nomes en tempo real, e as coleccións da Biblioteca dan a cada aplicación unha colección predeterminada.

## Corrixido

- {{ui:Reproducir}} cambia a {{ui:Pausar}} mentres unha animación se reproduce, e {{key:Space}} reproduce e pausa cando a liña de tempo está aberta.
- A renderización fixa volve a WebGL cando a tarxeta gráfica non pode arrincar o trazador de camiños. A vista de render en directo pode seguir mostrando o erro; isto non se comprobou nun ordenador Windows con ese controlador.
- O modo real de Fluxo de material volve conectar despois de que unha ligazón terminara por respostas de excepción do PLC.

## Límites honestos

- Nada se imprimiu nunha impresora real: nin filamento, nin resina, nin a través de Bambu Connect. Os ficheiros de resina foron lidos só polos lectores propios de CadCraft.
- O xemelgo dixital e o chan de fábrica probáronse só contra simuladores e respostas coñecidas, sen PLC, liña ou protocolo reais. Son axudas para comprobar, non unha validación de seguridade. A física cobre só caixas, ata oito cargas.
- A ligazón con Rhino e Grasshopper nunca se executou nos programas reais.
- Os idiomas distintos do inglés son borradores automáticos.

## Anteriores: 0.8 e 0.8.1

Isto é o que cambiou en ModelCraft 0.8 (2026-11-01) e 0.8.1 (2026-11-02), comparado coa 0.7. O diálogo {{ui:Renderizar unha imaxe…}} pode agora enviar a escena a outro programa, o panel Superficies fai superficies de forma libre suaves, e un asistente que conecte pode definir unha escena completa cunha frase.

### Novo

**Renderización**

- **Unha opción de motor.** {{ui:Renderizar unha imaxe…}} ten unha lista **Motor** enriba de Modo. Os nosos dous motores, Rápido e o Trazador de camiños, son os predeterminados e funcionan en todas partes. Outras entradas gardan a escena como paquete (o modelo como ficheiro USD, máis un ficheiro de configuración cos valores exactos dos materiais, as lámpadas acesas, o sol, o ceo, a exposición e a cámara) para levar a outro programa. Unha imaxe debuxada por outro programa indica que programa e versión a fixeron. Consulte [Escolla que programa debuxa a imaxe](topic:render-engines).
- **Abrir noutro programa.** A lista Motor pode gardar a escena como ficheiro USD, ficheiro glTF (`.glb`) ou cartafol de proxecto Unreal (`.zip`), no navegador e en CadCraft Studio. En Studio tamén pode iniciar usdview ou o programa do ordenador para o ficheiro. Consulte [Abra a escena noutro programa](topic:render-open-in).
- **Enviar a un motor de xogos desde Studio.** Studio escribe a escena nun proxecto de Unreal Engine e mantena sincronizada en cada envío, só dun sentido. As súas edicións viven nunha capa que CadCraft nunca escribe. Consulte [Envíe a escena a un motor de xogos](topic:render-unreal).
- **Motores dos complementos.** Un complemento pode engadir un motor á lista. Un escrito en JavaScript debuxa no navegador e en Studio; un que executa un programa necesita o seu sí en Studio. Consulte [Debuxe a imaxe con outro programa](topic:render-other-program) e [Engada un motor de render cun complemento](topic:render-engine-addons).
- **Dicir a escena.** Diga ao seu asistente conectado "anoitecer, chuvia lixeira, outono con árbores, xente na praza" e ModelCraft a prepara nun só paso: o sol móvese á data e hora para que as sombras sigan, o ceo cambia, aparecen superficies molladas, e as árbores e a xente colócanse como obxectos reais con etiquetas que pode ocultar, mover ou eliminar. A hora do día, a data ou a estación, e o tempo (despexado, nubrado, néboa, chuvia lixeira, chuvia, tormenta) funcionan tamén por separado, e unha petición posterior cambia a mesma escena. A néboa aparece na imaxe de alta calidade feita pola tarxeta gráfica; os outros motores mostran o ceo, a luz e as superficies molladas. A chuvia non se debuxa como regueiros que caen.

**Materiais**

- **Un material a partir dunha foto.** Dé ao ModelCraft unha foto dunha superficie (unha parede, un chan, pedra) e fai un material en mosaico: a iluminación da foto aplánase, as beiras únense, e un mapa de cor, un mapa de rugosidade e un mapa normal calcúlanse a partir da imaxe. É un simple procesamento de imaxe da súa propia foto, sen modelo adestrado. A rugosidade é unha estimación. Unha foto simple, cadrada e de frente dá o mellor mosaico; un patrón forte, como ladrillos, pode mostrar un fantasma suave onde se mestura a unión.

**Superficies**

- **Superficies de forma libre.** O panel {{ui:Superficies}} fai curvas NURBS e superficies sen recortar: curvas por puntos, loft, reglada, extrusión, revolución, barridos ao longo de un ou dous carrís, superficies dunha rede de curvas, parches a partir de catro arestas, axuste e mestura. Cada aresta compartida mídese como G0, G1 ou G2 (oco, ángulo, salto de curvatura) nas superficies exactas, e unha aresta peor do que pediu aparece no panel Problemas cunha corrección **Axustar**. As liñas cebra e as cores de curvatura debúxanse a partir das superficies exactas. Os ficheiros STEP e IGES saen e entran. Consulte [Superficies de forma libre (NURBS)](topic:nurbs-surfaces).

**Sitio e habitacións**

- **Un esbozo en fotografía sobre o chan.** {{ui:Ficheiro}} › {{ui:Importar unha foto dun esbozo…}} convirte unha foto de teléfono dun esbozo a man en aristas no chan á escala que indique: un grupo, cunha etiqueta para cada cor de bolígrafo. O papel atópase e endereitase no seu ordenador e non se envía nada a ningures. Consulte [Modelar sobre un plano do sitio](topic:site-plan).
- **Amoblar unha habitación.** Seleccione un chan e use {{ui:Organizar}} › {{ui:Amoblar unha habitación…}}. Mobiliario de dormitorio, salón, comedor, cociña, baño ou despacho colócase por regras, contra as paredes e libre de portas e xanelas, nun grupo que pode retirar dun paso. É unha disposición predeterminada para que a revise, non un deseño. Consulte [Biblioteca inicial](topic:starter).

**Impresión 3D**

- **Cortes inclinados.** Dividir para impresión pode inclinar os seus cortes ata 60 graos, o que dá ás pezas máis superficie de unión. Os conectores quedan perpendiculares ao corte. Consulte [Dividir un modelo para imprimir](topic:print-split).
- **A comprobación de impresión en Problemas.** Os resultados da comprobación de impresión 3D aparecen no panel Problemas con marcadores no modelo, e Reparar corrixeos desde alí. Consulte [Soportes, grosor de parede, ocado e reparación](topic:print-tools).

**En todas as aplicacións**

- **Idiomas.** A axuda e as aplicacións chegan en 54 idiomas. Dez son novos: lituano, letón, bosnio, marathi, telugu, albanés, afrikaans, filipino, suahili e uzbeko. Os idiomas distintos do inglés son borradores automáticos ata que un falante nativo os revise, e os temas de axuda poden seguir en inglés.
- **Dispositivos de entrada.** Un trackpad, unha pluma, un rato 3D, un mando de xogos e controis MIDI poden manexar as aplicacións, para todas ou para unha.
- **Filas da barra de ferramentas.** {{ui:Configuración}} › {{ui:Xeral}} › Filas da barra de ferramentas define Axustar (como antes), 2 filas ou 1 fila. Unha barra que non cabe despraza lateralmente en vez de quitar espazo ao debuxo. Axustar segue sendo o predeterminado.
- **Cuadrícula de propiedades.** Os campos de lámpadas de ModelCraft usan a cuadrícula compartida: categorías plegables, columnas de etiqueta e valor, e densidade Compacta. A aritmética escrita, como `2*450`, segue funcionando.
- **Problemas.** O panel Problemas (o botón de aviso na barra da aplicación) é compartido por todas as aplicacións. En ModelCraft contén a comprobación de impresión e os avisos de continuidade das superficies.
- **En directo.** Unha sesión de TeamWork en directo mostra quen está onde. Consulte [Modele xuntos con TeamWork en directo](topic:work-live).
- **Complementos.** Os complementos poden engadir motores de render, como antes.
- **Conecte a súa IA.** O contrato de ferramentas e as comprobacións das oito aplicacións pasan, con 454 ferramentas en total. Non se prometen aínda a conexión dun clic dentro de Studio, un conector aloxado para asistentes do navegador, a súa propia clave dentro de Studio e un paquete publicado. As aplicacións non teñen IA propia. Consulte [Use ModelCraft con asistentes de IA](topic:use-with-ai-assistants).

### Corrixido na 0.8.1

- **Sección de clases DWG.** A sección de clases dun ficheiro DWG líase como o tipo incorrecto, o que podía romper o ficheiro ao importar. Agora lese ben, en ModelCraft e nas outras aplicacións que len DWG.
- **Tabletas en vertical.** O espazo de rexilla sobrante vai ao lenzo, e a disposición da folla comeza en 760 píxeles de ancho ou menos. A folla de estilos de ModelCraft tamén ten o cambio.
- **Idioma en Studio.** CadCraft Studio e as edicións empaquetadas poden cambiar de idioma mentres se executan; antes eran só en inglés. Isto aínda non se probou en todas as plataformas: díganos se o idioma non cambia.

### Non está nesta versión aínda

- **Sen sinatura de código.** Windows pode mostrar SmartScreen: escolla {{ui:Máis información}}, e logo {{ui:Executar igualmente}}. Nun Mac, prema co botón dereito e escolla {{ui:Abrir}}. As compilacións para tendas están en espera, e a compilación para iPad e iPhone non se refixo para a 0.8.1.
- Outro programa debuxando a imaxe sen un complemento de motor de render, cámaras panorámicas ou estéreo e unha imaxe do ceo a través doutro programa, e o complemento que abre a escena de Unreal aínda non están. Os ficheiros escríbense; o complemento non está publicado e non se executou en Unreal.
- Superficies de forma libre: G3 e clase A non se miden nin se afirman, e o recorte e os sólidos chegarán despois.
- As imaxes doutros programas non son píxel a píxel como as nosas: só coinciden a cámara, o sol, as lámpadas e a exposición.
- A corrección de 0.8.1 para o cambio de idioma en Studio non está probada en todas as plataformas.

Todo o demais está en [Non construído aínda](topic:not-built-yet). Para a versión anterior, consulte [Novidades da 0.7](topic:whats-new-0-7).
