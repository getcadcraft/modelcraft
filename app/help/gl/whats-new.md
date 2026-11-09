---
title: Novidades da 0.8 e da 0.8.1
summary: Unha opción de motor de render con ficheiros para outros programas, superficies NURBS de forma libre con continuidade medida, unha escena descrita ao seu asistente, un material feito a partir dunha foto, unha foto de esbozo sobre o chan, habitacións amobladas, cortes inclinados para a impresión 3D e a comprobación de impresión no panel de Problemas.
keywords: novidades, o que hai de novo, notas de versión, rexistro de cambios, cambios, 0.8, 0.8.1, versión, novas funcións, motor de render, motor, abrir en, usd, gltf, unreal, motor de complemento, nurbs, superficies, loft, barrido, continuidade, g0, g1, g2, cebra, step, iges, describir a escena, escena, tempo, hora do día, estación, asistente, material a partir dunha foto, foto, foto de esbozo, amoblar, amoblar unha habitación, inclinado, corte inclinado, dividir, comprobación de impresión, problemas, cuadrícula de propiedades, lámpadas, idiomas, dispositivos de entrada, filas da barra de ferramentas, dwg, en directo
from: e4989b17
---

Isto é o que cambiou en ModelCraft 0.8 (2026-11-01) e 0.8.1 (2026-11-02), en comparación coa 0.7. O cadro de diálogo {{ui:Renderizar unha imaxe…}} xa pode enviar a escena a outro programa, o panel {{ui:Superficies}} crea superficies de forma libre suaves, e un asistente que conecte pode definir unha escena completa cunha soa frase.

## Novo

### Render

- **Unha opción de motor.** {{ui:Renderizar unha imaxe…}} ten unha lista **Motor** enriba de Modo. Os nosos dous motores, Rápido e o trazador de camiño, son os predeterminados e funcionan en todas partes. As outras entradas gardan a escena como paquete (o modelo como ficheiro USD, máis un ficheiro de axustes cos valores exactos dos materiais, as lámpadas acesas, o sol, o ceo, a exposición e a cámara) para levar a outro programa. Unha imaxe debuxada por outro programa indica cal programa e que versión a fixo. Consulte [Escoller que programa debuxa a imaxe](topic:render-engines).
- **Abrir noutro programa.** A lista Motor pode gardar a escena como ficheiro USD, ficheiro glTF (`.glb`) ou proxecto Unreal (`.zip`), no navegador e en CadCraft Studio. En Studio tamén pode iniciar usdview ou o programa propio do ordenador para o ficheiro. Consulte [Abrir a escena noutro programa](topic:render-open-in).
- **Enviar a un motor de xogos desde Studio.** Studio escribe a escena nun proxecto de Unreal Engine e mantena sincronizada en cada envío, só nun sentido. As súas propias edicións viven nunha capa que CadCraft nunca escribe. Consulte [Enviar a escena a un motor de xogos](topic:render-unreal).
- **Motores de complementos.** Un complemento pode engadir un motor á lista. Un escrito en JavaScript debuxa no navegador e en Studio; un que executa un programa precisa o seu sí en Studio. Consulte [Debuxar a imaxe con outro programa](topic:render-other-program) e [Engadir un motor de render cun complemento](topic:render-engine-addons).
- **Describir a escena.** Diga ao seu asistente conectado «atardecer, chuvia lixeira, árbores de outono, xente na praza» e ModelCraft prepáraa nun só paso: o sol móvese á data e hora para que as sombras sigan, o ceo cambia, aparecen superficies molladas, e as árbores e as persoas colócanse como obxectos reais en etiquetas que pode ocultar, mover ou eliminar. A hora do día, a data ou a estación, e o tempo (despexado, nubrado, néboa, chuvia lixeira, chuvia, tormenta) tamén funcionan por si mesmos, e unha petición posterior cambia a mesma escena. A néboa vese na imaxe de alta calidade na tarxeta gráfica; os outros motores amosan o ceo, a luz e as superficies molladas. A chuvia non se debuxa como regueiros que caen.

### Materiais

- **Un material a partir dunha foto.** Dé a ModelCraft unha foto dunha superficie (un muro, un chan, pedra) e crea un material en mosaico: a iluminación da foto alísase, os bordos únense, e a partir da imaxe calcúlanse un mapa de cor, un mapa de rugosidade e un mapa normal. É un procesamento de imaxe simple sobre a súa propia foto, sen ningún modelo adestrado. A rugosidade é unha estimación. Unha foto plana, cadrada e de fronte dá o mellor mosaico; un padrón forte, como os ladrillos, pode mostrar un fantasma suave onde se mestura a unión.

### Superficies

- **Superficies de forma libre.** O panel {{ui:Superficies}} crea curvas NURBS e superficies sen recortar: curvas por puntos, loft, reglada, extrusión, revolución, barridos ao longo dun ou dous carrís, superficies a partir dunha rede de curvas, parches a partir de catro bordos, igualar e mesturar. Cada bordo compartido mídese como G0, G1 ou G2 (separación, ángulo, salto de curvatura) sobre as superficies exactas, e un bordo peor do que pediu aparece no panel Problemas cunha corrección **Igualar**. As franxas cebra e as cores de curvatura debúxanse a partir das superficies exactas. Os ficheiros STEP e IGES saen e entran. Consulte [Superficies de forma libre (NURBS)](topic:nurbs-surfaces).

### Parcela e habitacións

- **Unha foto de esbozo sobre o chan.** {{ui:Ficheiro}} › {{ui:Importar unha foto dun esbozo…}} converte unha foto dun esbozo feito a man, tirada cun teléfono, en bordos sobre o chan á escala que indique: un grupo, cunha etiqueta para cada cor de bolígrafo. O papel atópase e endereítase no seu ordenador e non se envía nada a ningún lado. Consulte [Modelar sobre un plano de situación](topic:site-plan).
- **Amoblar unha habitación.** Seleccione un chan e use {{ui:Organizar}} › {{ui:Amoblar unha habitación…}}. O mobiliario de dormitorio, salón, comedor, cociña, baño ou despacho colócase por regras, contra as paredes e libre de portas e xanelas, nun grupo que pode retirar dun só paso. É unha disposición predeterminada para que a revise, non un deseño. Consulte [Biblioteca inicial](topic:starter).

### Impresión 3D

- **Cortes inclinados.** Dividir para imprimir pode inclinar os cortes ata 60 graos, o que dá ás pezas máis superficie de encolado. Os conectores quedan en ángulo recto co corte. Consulte [Dividir un modelo para imprimir](topic:print-split).
- **A comprobación de impresión en Problemas.** Os resultados da comprobación de impresión 3D aparecen no panel Problemas con marcas no modelo, e Reparar corríxeos desde alí. Consulte [Soportes, grosor de parede, baleirado e reparación](topic:print-tools).

### En todas as aplicacións

- **Idiomas.** A axuda e as aplicacións chegan en 54 idiomas. Dez son novos: lituano, letón, bosníaco, maratí, telugu, albanés, afrikáans, filipino, suahili e uzbeko. Os idiomas distintos do inglés son borradores automáticos ata que un falante nativo os revise, e os temas de axuda poden seguir en inglés.
- **Dispositivos de entrada.** Un trackpad, unha pluma, un rato 3D, un mando de xogo e controis MIDI poden manexar as aplicacións, para todas ou para unha soa.
- **Filas da barra de ferramentas.** {{ui:Configuración}} › {{ui:Xeral}} › Filas da barra de ferramentas define Envolver (como antes), 2 filas ou 1 fila. A barra que non cabe desprázase lateralmente en vez de quitar espazo ao debuxo. Envolver segue sendo o predeterminado.
- **Cuadrícula de propiedades.** Os campos de lámpadas de ModelCraft usan a cuadrícula común: categorías plegables, columnas de etiqueta e valor, e densidade Compacta. A aritmética escrita como `2*450` segue funcionando.
- **Problemas.** O panel Problemas (o botón de aviso da barra de aplicación) é común a todas as aplicacións. En ModelCraft contén a comprobación de impresión e os avisos de continuidade das superficies.
- **En directo.** Unha sesión de Live TeamWork amosa quen está onde. Consulte [Modelar xuntos con Live TeamWork](topic:work-live).
- **Complementos.** Os complementos poden engadir motores de render, como se indicou antes.
- **Conecte a súa IA.** O contrato de ferramentas e as comprobacións das oito aplicacións pasan, con 454 ferramentas en total. A conexión dun clic dentro de Studio, un conector aloxado para asistentes do navegador, a súa propia clave dentro de Studio e un paquete publicado aínda non están prometidos. As aplicacións non conteñen IA propia. Consulte [Usar ModelCraft con asistentes de IA](topic:use-with-ai-assistants).

## Corrixido na 0.8.1

- **Sección de clases DWG.** A sección de clases dun ficheiro DWG líase co tipo equivocado, o que podía romper o ficheiro ao importalo. Agora lese correctamente, en ModelCraft e nas outras aplicacións que len DWG.
- **Tabletas en vertical.** O espazo libre da cuadrícula vai ao lenzo, e a disposición en folla comeza en 760 píxeles de ancho ou menos. A folla de estilo de ModelCraft tamén ten o cambio.
- **Idioma en Studio.** CadCraft Studio e as edicións empaquetadas poden cambiar de idioma mentres se executan; antes só estaban en inglés. Aínda non se probou en todas as plataformas: díganos se o idioma non cambia.

## Aínda non dispoñible nesta versión

- **Sen firma de código.** Windows pode amosar SmartScreen: escolla {{ui:Máis información}} e despois {{ui:Executar igualmente}}. Nun Mac, prema co botón dereito e escolla {{ui:Abrir}}. As versións para tendas están en espera, e a versión para iPad e iPhone non se reconstruíu para a 0.8.1.
- Outro programa que debuxe a imaxe sen un complemento de motor de render, cámaras panorámicas ou estereoscópicas, e unha imaxe do ceo a través doutro programa, e o complemento que abre a escena de Unreal, aínda non están. Os ficheiros xa se escriben; o complemento non está publicado e non se executou en Unreal.
- Superficies de forma libre: G3 e clase A non se miden nin se afirman, e o recorte e os sólidos chegarán despois.
- As imaxes doutros programas non son píxel a píxel como as nosas: só coinciden a cámara, o sol, as lámpadas e a exposición.
- A corrección de 0.8.1 para o cambio de idioma en Studio non se probou en todas as plataformas.

Todo o demais está en [Non construído aínda](topic:not-built-yet). Para a versión anterior, consulte [Novidades da 0.7](topic:whats-new-0-7).
