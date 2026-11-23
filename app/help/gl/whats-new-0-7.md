---
title: Novidades da 0.7 (anterior)
summary: Mallas con modificadores, esculpido, UV e obxectos de curva, trazado de camiños na tarxeta gráfica e un espazo de traballo Renderizar, vista en directo en tempo real con dispersión e panorámicas, materiais con nodos, un espazo de traballo Animar con ósos e física, ficheiros USD, FBX, STEP e .3dm, e ferramentas de impresión cun estilo Principiante.
keywords: novidades 0.7, versión anterior, notas de versión, rexistro de cambios, cambios, 0.7, versión, novas funcións, malla, mallas, espazo de traballo malla, modificadores, subdivisión, pregar, uv, desdobrar, costuras, curvas, obxectos de curva, nurbs, bezier, esculpir, remallar, retopoloxía, dividir, cálculo, trazado de camiños, webgpu, espazo de traballo renderizar, cola de render, mp4, exr, eliminación de ruído, ceo físico, hdri, ies, profundidade de campo, mestura de luces, néboa, cáusticas, vista en directo, tempo real, percorrer, dispersión, panorama, percorrido, visor, sombreado, nodos, materiais con nodos, biblioteca de materiais, materialx, calcomanías, pintura de texturas, cocer, animar, editor de curvas, clips, chaves de forma, controladores, esqueleto, ósos, deformación, restricións, física, usd, usdz, gltf, fbx, step, 3dm, alembic, ply, acis, sólidos 3D, soportes, grosor de muro, ocar, reparar, principiante, asistentes, o seu ordenador, unidades, portugués
from: 16d52810
---

Esta é a lista do que cambiou na ModelCraft 0.7, en comparación coa 0.6. ModelCraft agora modela mallas ademais de xeometría de empurrar/tirar, renderiza na tarxeta gráfica, e ten un espazo de traballo para cada tipo de traballo: escóllao na lista {{ui:Espazo de traballo}} á esquerda da barra de ferramentas.

## Novo

### Mallas

- **Mallas.** Seleccione un grupo ou compoñente e prema {{ui:Converter en malla}} en {{ui:Información da entidade}}: convértese nunha malla, con caras de calquera número de esquinas que poden levar coordenadas de textura, normais, cores e pesos. {{ui:Converter en xeometría}} volve convertela. Desfacer nunha malla conserva só o que cambiou cada paso. Un ficheiro que contén unha malla precisa ModelCraft 0.7 para abrirse. Ver [Mallas](topic:meshes).
- **O espazo de traballo Malla.** Faga dobre clic nunha malla, ou escolla {{ui:Malla}} na lista {{ui:Espazo de traballo}}, para editar os seus vértices, arestas e caras: bucles e aneis, edición proporcional, extruír, inserir, biselar, corte en bucle, coitelo, bisecar, xirar, unir, disolver, encher, encher en cuadrícula, ponte e esvarar, e os axustes da última operación modificados despois no panel. Comece desde un plano, un cubo, unha esfera, un toro e máis. Funcionan tanto as teclas de empurrar/tirar como as do modelador. Ver [Editar unha malla no espazo de traballo Malla](topic:mesh-edit).
- **Modificadores.** Espello, matriz, superficie de subdivisión, bisel, solidificar, booleana, desprazar, soldar, diezmar, suavizar, rede, deformación por curva e envolvente cambian o que amosa unha malla sen cambiala. Apílos, actívaos ou desactívaos para a vista e para os renderizados, e {{ui:Aplicar}} un cando o queira de xeito definitivo. Ver [Modificadores nunha malla](topic:modifiers).
- **Subdivisión con pregas.** {{ui:Pregar}} no espazo de traballo Malla mantén vivas as arestas escollidas baixo unha superficie de subdivisión. Os renderizados poden usar máis niveis que a vista, e nunha malla grande a vista amosa un nivel máis baixo e di que o fai. Ver [Superficie de subdivisión](topic:modifiers#subdivision-surface).
- **Obxectos de curva.** Curvas de Bézier, NURBS e de segmentos rectos que fan un tubo, unha banda, un afinamento ou unha placa cheia, e texto como curva. Edite os seus puntos no espazo de traballo {{ui:Curva}}; {{ui:A malla}} cando a forma estea ben. Ver [Obxectos de curva](topic:curves).
- **O espazo de traballo UV.** Marque costuras (ou deixe que ModelCraft as marque nas arestas vivas), {{ui:Desdobrar}} e {{ui:Empaquetar}}, ou proxecte por caixa, cilindro, esfera ou vista. Un editor UV xunto á vista 3D move, xira e escala as pezas, e un cadriculado e as cores de estiramento amosan o resultado. Ver [Dispor as UV dunha malla](topic:uv).
- **Esculpido.** O espazo de traballo {{ui:Esculpir}} ten pinceis de debuxar, arxila, suavizar, agarrar, inflar, pregar, pinzar, aplanar e máscara, espello a través do eixo X, e {{ui:Detalle}} que engade triángulos onde esculpe. A presión dunha pluma fixa o tamaño e a forza do pincel. Cada trazo é un paso de desfacer. Ver [Esculpir unha malla](topic:sculpt).
- **Remallado e retopoloxía.** {{ui:Remallar}} fai de novo unha malla completa como triángulos uniformes, pechando buratos e unindo pezas que se solapan. Para construír unha malla limpa sobre unha detallada, escóllaa en {{ui:Retopoloxía}}: os puntos que move caen sobre a súa superficie. Ver [Remallar](topic:mesh-edit#remesh).

### Debuxo

- **Dividir unha aresta ou curva.** A ferramenta {{ui:Dividir}} marca os cortes segundo move por unha aresta e divide cun clic ou cun número escrito; con unha aresta, arco ou círculo seleccionado, escriba `/5`; {{ui:Información da entidade}} › {{ui:Dividir…}} pide o número, para tabletas. Un arco ou círculo divídese por ángulos iguais sobre o arco real. Ver [Dividir unha aresta ou curva en partes iguais](topic:divide).
- **Cálculos na caixa de valores.** Escriba `2.5/3`, `12'6"+3/4"`, `(24'-0")/3` ou `2*450mm` para calquera lonxitude, e `90/2` para un ángulo. Un cálculo que non se pode facer di que está mal e onde. Ver [Cálculos](topic:value-box#calculations).

### Renderizado

- **Trazado de camiños na tarxeta gráfica.** {{ui:Renderizar unha imaxe…}} › {{ui:Alta calidade (trazado de camiños)}} executa o trazador de camiños propio de CadCraft na tarxeta gráfica onde o navegador ten WebGPU; a liña baixo a imaxe di que motor a fixo. {{ui:Parar}} conserva a imaxe e {{ui:Reanudar}} continúa desde alí. Sen WebGPU a imaxe trázase con WebGL, como antes. Ver [Alta calidade](topic:render#high-quality).
- **Renderizar na vista.** O espazo de traballo {{ui:Renderizar}} traza o camiño da propia vista e volve empezar cando orbita ou edita: renderice unha {{ui:Rexión}}, prema para fixar o {{ui:Enfoque}}, axuste o {{ui:Detalle}}. Precisa WebGPU. Ver [Renderizar na vista](topic:render#render-in-the-view).
- **Materiais, luces e ceos.** As imaxes de alta calidade sombrean cada superficie co modelo de materiais OpenPBR (capas, pelusa, películas finas, vidro de cor, brillo). Con WebGPU tamén hai un {{ui:Ceo físico}} con {{ui:Bruma}}, unha {{ui:Imaxe do ceo (HDRI)}}, e perfís de luz IES dos fabricantes para as lámpadas. Ver [Ceos e perfís de luz](topic:render#skies-and-light-profiles-on-the-graphics-card).
- **Unha cámara como a dunha fotografía.** Exposición a partir de número f, obturador e ISO en todos os modos; con WebGPU tamén profundidade de campo, perspectiva de dous puntos, balance de brancos, panorámicas de 360° (tamén en estéreo) e mapas cúbicos. Ver [A cámara](topic:render#the-camera).
- **Rematar a imaxe despois do renderizado.** Corrixa a cor da imaxe ({{ui:ACES filmic}}, {{ui:AgX}}, {{ui:Filmic}} ou {{ui:Estándar}}, contraste, resplandor, destello, viñeteado, unha táboa de cores `.cube`), mestura o ceo, o sol e cada grupo de lámpadas, e mire os elementos de render un a un, todo sen renderizar de novo. O ruído que queda elimínao un eliminador de ruído no seu propio ordenador. Ver [Rematar a imaxe](topic:render#finish-the-picture) e [Mesturar as luces despois do renderizado](topic:render#mix-the-lights-after-the-render).
- **Máis xeitos de gardar un render.** PNG de 16 bits, un EXR de varias capas con cada elemento de render e grupo de luces, e un ficheiro de render (`.ccrender`) que se abre de novo coa súa mestura e corrección. Ver [Gardar a imaxe](topic:render#save-the-picture).
- **Néboa, fume e cáusticas.** Néboa e bruma iluminadas polo sol e as lámpadas, con feixes de luz; unha columna ou nube de fume; cáusticas baixo vidro e espellos; mostraxe adaptativa que se detén nos píxeles xa limpos. Só na tarxeta gráfica. Ver [Néboa, fume, ruído e cáusticas](topic:render#fog-smoke-noise-and-caustics).
- **Cola de render e MP4.** Engada imaxes de alta calidade e animacións completas á {{ui:Cola de render}}; renderízanse unha tras outra, e a cola sobrevive ao peche da páxina. Precisa WebGPU. Os vídeos tamén se poden gardar como MP4 onde o navegador o poida escribir. Ver [A cola de render](topic:render#the-render-queue) e [Renderizar o vídeo](topic:animation#render-the-video).

### Vista en directo e presentacións

- **Vista en directo.** {{ui:Exportar}} › {{ui:Vista en directo}} amosa o modelo cun aspecto en tempo real xunto á vista, seguindo cada edición e a cámara: sombras do sol, materiais, lámpadas e luz que rebota nos muros. {{ui:Camiñar}} por ela, arrastre {{ui:Hora}} e {{ui:Mes}} para mover o sol, ou lévea a unha {{ui:Xanela nova}}. Usa WebGPU onde o navegador o ten, e se non WebGL 2. Ver [A vista en directo](topic:live-view).
- **Dispersión.** Espalle herba, flores, rochas, árbores e persoas sobre caras ou cun pincel, desde sete novos elementos de ambientación e o resto da biblioteca; os conxuntos gárdanse no ficheiro. Ver [Dispersar plantas, rochas e persoas](topic:live-view#scatter-plants-rocks-and-people).
- **Compartir.** Unha panorámica de 360°, un percorrido de panorámicas con frechas entre puntos, un visor independente (unha páxina web que se abre sen conexión e non carga nada de internet) e un vídeo do camiño da cámara, todo co aspecto en tempo real. Ver [Compartir](topic:live-view#share-panoramas-tours-a-viewer-a-video).
- **VR co aspecto en tempo real.** {{ui:Revisar en VR}} amosa o modelo cos seus materiais, ceo, sombra do sol, lámpadas, elementos dispersos e luz que rebota. Ver [Como se ve](topic:vr-review#what-it-looks-like).

### Materiais

- **Materiais feitos con nodos.** O espazo de traballo {{ui:Sombreado}} constrúe os materiais propios do ficheiro como grafos de nodos: imaxes, ruído e cadriculados, células de Voronoi, ondas, ladrillos, azulexos, madeira, mármore, degradados, sucidade e desgaste das arestas, traballo de cor, operacións matemáticas, mapas de relevo e de normais, ata o material OpenPBR completo. A vista amosa cada cambio ao momento. Ver [Facer materiais con nodos](topic:shading).
- **Unha biblioteca de materiais e as súas propias series de texturas.** O panel de Sombreado lista os materiais da Biblioteca: dezaseis conxuntos de texturas CC0, cada un con crédito. Prema nun para usalo, ou arrástreo a unha cara. {{ui:Imaxes ou un zip…}} ou {{ui:Un cartafol…}} fai un material cos seus propios mapas, atopados polos seus nomes de ficheiro. Ver [Materiais da biblioteca](topic:shading#materials-from-the-library).
- **MaterialX de entrada e saída.** Exporte un material como MaterialX (OpenPBR Surface ou Standard Surface, texturas como PNG), e importe ficheiros MaterialX coas súas imaxes. Ver [MaterialX](topic:shading#materialx).
- **Calcomanías e pintura de texturas.** Coloque unha imaxe sobre unha superficie como calcomanía cun material propio, e pinte sobre a imaxe dun material cun pincel redondo. Ver [Calcomanías](topic:shading#decals) e [Pintar na textura](topic:shading#paint-on-the-texture).
- **Cocción de texturas.** Coza a oclusión ambiental, a curvatura, a iluminación e as normais dun obxecto detallado en imaxes ao longo das UV dunha malla, nos núcleos do procesador do ordenador. Ver [Cocer texturas](topic:shading#bake-textures).

### Animación

- **O espazo de traballo Animar.** Cree chaves da posición, do xiro e do tamaño dun obxecto, do brillo, da dispersión e da cor de cada lámpada, e do ángulo da lente, directamente no panel. A liña de tempo gaña unha vista de {{ui:Curvas}} (manexadores de Bézier, repeticións) e unha vista de {{ui:Clips}} que garda as chaves como accións para colocar e mesturar de novo; as chaves de varias filas pódense mover, estirar, copiar e pegar. Ver [Animar calquera propiedade](topic:animate).
- **Chaves de forma e controladores.** Unha malla contén outras formas de si mesma, mesturadas con control deslizantes que se poden crear chaves, ou fixar a partir doutros valores por unha pequena expresión. Ver [Chaves de forma](topic:animate#shape-keys-morphs) e [Controladores](topic:animate#drivers).
- **Esqueletos.** Poña ósos nunha malla, deixe que {{ui:Pesos automáticos}} reparta os puntos entre eles ou pinte os pesos, e poña en pose e cree chaves dos ósos; recubrimento (skinning) lineal ou por cuaternión dual. Ver [Esqueletos](topic:animate#armatures-bones-that-bend-a-mesh).
- **IK e restricións.** Alcance (IK) cun polo, mirar a, copiar transformacións, límites, fillo de e seguir camiño, para ósos e obxectos. Ver [IK e restricións](topic:animate#ik-and-constraints).
- **Física.** Grupos e compoñentes caen, apílanse e chócanse como caixas ou bólas, e {{ui:Calcular física}} garda o resultado como chaves. Ver [Física: caer, apilar e chocar](topic:animate#physics-drop-stack-and-collide).

### Ficheiros

- **USD.** {{ui:Gardar como}} ({{key:Mod+Shift+S}}) garda o modelo como `.usda`, `.usdc` ou `.usdz`, e un ficheiro USD que ModelCraft gardou ábrese de novo sen perder nada. Os USD doutros programas ábrense ou impórtanse como mallas, grupos, compoñentes, lámpadas e cámaras. {{ui:Gardar}} segue escribindo `.modelcraft`. Ver [Gardar, abrir e exportar USD](topic:usd).
- **glTF, completo.** Os ficheiros glTF entran como mallas editables cos seus normais, UV, cores de vértice e texturas; os nodos como grupos, as luces como lámpadas e as cámaras como escenas, incluídos os ficheiros Draco e meshopt; un `.gltf` ábrese ao soltalo xunto cos seus ficheiros. A exportación escribe mallas, texturas, lámpadas e cámaras. Ver [glTF](topic:formats#gltf-glb-gltf).
- **Importacións de FBX, PLY, STL e Alembic.** FBX 2011 e posteriores (mallas, conxuntos de UV, materiais, texturas incrustadas, luces, cámaras), PLY e STL coas súas cores, e cachés Alembic na súa primeira mostra. OBJ entra co seu `.mtl` e as imaxes cando as solta xuntas. Ver [Formatos de ficheiro en detalle](topic:formats).
- **Máis exportacións.** PLY coas cores, STL coas cores das caras pintadas, e OBJ coas súas texturas nun zip. Ver [Formatos de ficheiro en detalle](topic:formats).
- **Ficheiros STEP.** {{ui:Importar}} lee pezas e conxuntos STEP (AP203, AP214, AP242) como mallas pechadas ao seu tamaño real, cada peza onde o ficheiro a coloca. Ver [STEP](topic:formats#step-step-stp).
- **Ficheiros .3dm.** {{ui:Importar}} lee modelos `.3dm`: mallas, polisuperficies e extrusións (das mallas gardadas no ficheiro, se non, teseladas por ModelCraft), curvas como arestas, bloques como compoñentes e capas como etiquetas. Ver [Traer un modelo .3dm](topic:import-3dm-files).
- **Sólidos 3D de DWG e DXF.** Importar un debuxo agora trae tamén os seus sólidos 3D, rexións e corpos, cada un como o seu propio grupo, os pechados como sólidos. Ver [Modelar sobre un plano de situación](topic:site-plan#what-comes-in).

### Impresión 3D

- **Ferramentas de impresión.** {{ui:Comprobar a impresión 3D (STL ou 3MF)…}} › **Ferramentas de impresión** ten unha {{ui:Vista previa de soportes}} (voos, columnas ou soportes en árbore, aproximadamente canto material), {{ui:Grosor do muro}} (muros demasiado finos para imprimir, listados con {{ui:Mostrar}}), {{ui:Ocar}} (muros do grosor que dea, con buratos de drenaxe) e {{ui:Reparar}} (cada corrección listada; as pezas que se solapan únense só cando o pida). Ocar e Reparar dan un grupo cuxas caras planas son caras únicas, ou unha malla cando o resultado non se pecha ou ten demasiadas caras; a liña de estado di cal. Ver [Soportes, grosor de muro, ocado e reparación](topic:print-tools).
- **O estilo Principiante.** {{ui:Configuración}} › {{ui:ModelCraft}} › {{ui:Menús, teclas e rato}} › {{ui:Principiante}}: botóns grandes para soltar formas e buratos, mover, aliñar e {{ui:Grupo}} para que os buratos cortan, e logo comprobar o modelo para impresión. Ver [O estilo Principiante](topic:beginner).

### Asistentes e o seu ordenador

- **Máis para asistentes de IA.** Un asistente agora pode listar caras e materiais, empurrar/tirar, pintar, crear grupos, engadir e amosar escenas, engadir mallas, editar pilas de modificadores, exportar USD, renderizar unha imaxe e encher a cola de render. Ver [Usar ModelCraft con asistentes de IA](topic:use-with-ai-assistants).
- **O seu ordenador.** {{ui:Configuración}} › {{ui:ModelCraft}} › {{ui:Renderizado}} › {{ui:O seu ordenador}} amosa a tarxeta gráfica, os núcleos do procesador e a memoria que este navegador deixa usar á aplicación, e o nivel que fixa onde empeza a vista en directo. Ver [Con que renderiza o seu equipo](topic:your-machine).

## Corrixido

- {{ui:Sólidos}} › {{ui:Unir}}, {{ui:Restar}} e {{ui:Intersecar}} podían devolver un grupo que non estaba pechado, a calquera tamaño. Agora péchanse.
- {{ui:Sólidos}} › {{ui:Restar}} estaba en gris sen nada seleccionado, aínda que elixe as dúas pezas por quenda despois de escollelo.
- Dentro da liña de tempo da animación, as teclas escritas non chegaban a ningún lado, e {{key:Mod+S}} tampouco. {{key:Mod+Z}} e {{key:Mod+Y}} alí son desfacer e refacer propios da liña de tempo; as outras teclas {{key:Mod}} chegan á aplicación.

## En todas as aplicacións

- **Unidades.** {{ui:Configuración}} › {{ui:General}} › {{ui:Unidades}} ten unha lista para lonxitude, superficie, volume, ángulo e pendente, cos tamaños exactos que dan as definicións das unidades (o pé de topografía dos EUA é unha unidade propia). Desactive as unidades que nunca usa e saen das listas; marque unha con estrela e o novo traballo comeza nela. Un ficheiro sempre conserva a súa propia unidade. En ModelCraft a lista de unidades xunto á caixa de valores segue os interruptores (a propia unidade do modelo sempre queda), a estrela fixa a unidade dun modelo novo (cando ModelCraft a ten), e unha lonxitude escrita con calquera marca de unidade lese nesa unidade. Ver [Unidades, valores escritos e listas de unidades](common:unit-lists).
- **Un deseño máis denso e paneis que se recollen.** {{ui:Configuración}} › {{ui:General}} › {{ui:Densidade da disposición}} › {{ui:Compacta}} cabe máis na pantalla (as pantallas táctiles e os teléfonos conservan os seus botóns grandes). Cada panel lateral ten unha barra de título delgada: arrástreo para encaixalo ou flotalo, solte sobre a barra doutro panel para compartir un marco como lapelas, fíxeo para que se desprace ata o bordo, ou ocúltello e recupérello desde o bordo. Ver [Dispoñer os paneis](common:arrange-panels#make-the-layout-denser).
- **Os diálogos móvense.** Arrastre un diálogo pola barra de título para sacalo do camiño do debuxo; volve onde o deixou. Faga dobre clic na barra de título para centralo de novo. Ver [Mover un diálogo](common:arrange-panels#move-a-dialog).
- **Receitas para asistentes de IA.** Dez peticións traballadas para o seu propio asistente (ordenar un debuxo, trazar un conxunto, comprobar debuxos, facer preguntas a un modelo, totalizar unha medición, probar unha variante de peza…), cada unha coas ferramentas que chama e os permisos que precisa, e cada unha repetida polas nosas probas. As aplicacións non conteñen IA. Ver [Receitas para asistentes de IA](common:assistants-recipes).
- **Idiomas.** **Português (Portugal)** é novo en {{ui:Configuración}} › {{ui:General}} › {{ui:Idioma}}. Este, **Português (Brasil)**, **Español (México)** e **Bahasa Indonesia** teñen agora todas as palabras das aplicacións, como borradores aínda non revisados por unha persoa nativa. Os temas de axuda están en inglés.
- **CadCraft Studio** di por que fallou unha comprobación de actualización (aínda non hai ficheiro para o seu sistema, sen rede, unha sinatura incorrecta) en vez de só "Feito", e deixa de devolver unha tarxeta de Novidades que pechou ata que haxa unha versión máis nova.

## Non está nesta versión aínda

- **0.7 non ten sinatura de código.** A sinatura e o paquete da Microsoft Store pasaron á 0.8 porque a validación do certificado aínda non chegou. Comprobe o SHA-256 xunto a cada ficheiro en getcadcraft.com/download. En Windows, se SmartScreen para o instalador, escolla {{ui:Máis información}} e logo {{ui:Executar igualmente}}. Nun Mac, a primeira vez, prema co botón dereito en CadCraft Studio e escolla {{ui:Abrir}}. CadCraft Studio aínda non está nunha tenda de aplicacións, e aínda non hai versión para iPad ou iPhone.
- As listas de ángulo e pendente de {{ui:Unidades}} gárdanse, pero aínda non as lee ningunha caixa.
- A renderización na tarxeta gráfica (WebGPU) probouse aquí só cun substituto de software, aínda non en tarxetas gráficas reais; renderice algo pequeno no seu ordenador primeiro. Igual pasa coa vista en directo, e VR aínda se probou só cun emulador de visor.
- Sen WebGPU non hai espazo de traballo Renderizar nin cola de render, e as imaxes de alta calidade non teñen profundidade de campo, ceo físico, imaxe do ceo, néboa, fume, cáusticas nin mestura de luces.
- {{ui:Renderizar unha imaxe…}} aínda non debuxa elementos dispersos; amósanse na vista en directo, nas súas panorámicas, no visor e no vídeo.
- As lámpadas animan na vista, pero un vídeo renderizado usa as lámpadas tal como están cando comeza.
- Os ósos e a animación non se len nin se escriben en ficheiros glTF, FBX ou USD aínda (os modelos con pel entran en repouso, cos seus pesos), e os materiais de glTF e FBX alén da cor base ou da textura aínda non se conservan.
- As cores de STEP e os nomes das pezas do conxunto aínda non se len. A importación de `.3dm` probouse con ficheiros escritos coa ferramenta do formato, aínda non con ficheiros do propio programa de modelado; quedan fóra as superficies SubD, o texto e as cotas.
- A biblioteca de plantas de CivilCraft está en ModelCraft, pero colocar plantas desde ela aínda non está feito.
- Pintar unha textura en caras de empurrar/tirar repítese co mosaico do material; para pintar só unha cara, convértaa en malla e desdóbrea.

Todo o demais está en [Aínda sen construír](topic:not-built-yet).
