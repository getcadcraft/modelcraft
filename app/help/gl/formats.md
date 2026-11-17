---
title: Formatos de ficheiro en detalle
summary: Exactamente o que conserva, converte e deixa fóra cada formato que ModelCraft abre, importa e exporta.
keywords: formatos, tipos de ficheiro, modelcraft, json, 3dm, nurbs, skp, collada, dae, obj, mtl, gltf, glb, stl, step, stp, ap214, ap242, ply, alembic, abc, caché, fbx, 3mf, ifc, dwg, dxf, unidades, eixos, y cara arriba, z cara arriba, milímetros, límites
from: c47d2d28
---

O modelo de ModelCraft está en metros e con Z (azul) cara arriba. Cada formato indicado abaixo convértese a ou desde ese sistema.

## ModelCraft (.modelcraft)

| Que | Detalles |
|---|---|
| Abrir | {{ui:Open}} ({{key:Mod+O}}) ou solte sobre a vista. Tamén se aceptan os ficheiros que terminan en `.json` |
| Gardar | {{ui:Save}} ({{key:Mod+S}}), como descarga |
| Conserva | Todo: xeometría, caras e as súas cores, materiais e texturas importadas, lámpadas, arestas suaves, grupos, compoñentes, nomes, guías, escenas, as unidades e a última cámara e estilo |
| Deixa fóra | O historial de desfacer |
| Límite | 200 MB |

Recházase un ficheiro gardado cun ModelCraft máis novo que o seu: "Este modelo foi gardado cun ModelCraft máis novo (versión de ficheiro …). Actualice ModelCraft para abrilo." Un ficheiro que non é un modelo de ModelCraft di: "Este ficheiro non é un modelo de ModelCraft (non é JSON)." ou "Este non é un ficheiro de ModelCraft que poidamos abrir: …".

## USD (.usd, .usda, .usdc, .usdz)

Abrir, importar, e {{ui:Save as}} ou {{ui:Export}} › {{ui:USD (.usda, .usdc, .usdz)…}}. Un ficheiro USD que ModelCraft gardou ábrese de novo sen perda; os ficheiros USD doutros programas ábrense como mallas, grupos, compoñentes, lámpadas e cámaras. Consulte [Gardar, abrir e exportar USD](topic:usd).

## Collada (.dae)

Importación e exportación. O mellor formato para intercambiar modelos con outros modeladores 3D.

- **Exportación:** Collada 1.4.1, Z cara arriba, metros. Unha xeometría por definición de grupo ou compoñente; os compoñentes escríbense unha vez e colócanse por referencia, así que seguen compartidos. As caras con buratos ou contornos cóncavos divídense en triángulos. As cores pasan a ser materiais. As arestas soltas escríbense como liñas. Os nomes que non son válidos no formato axústanse, e o nome exacto consérvase xunto a el.
- **Importación:** triángulos, polígonos (con buratos), abanicos e tiras de triángulos pasan a ser caras; as liñas pasan a ser arestas. Aplícanse as transformacións dos nodos, o eixe vertical e a unidade do ficheiro. Un nodo colocado en varios sitios, ou unha xeometría usada por varios nodos, entra como compoñente; os demais nodos entran como grupos. As cores difusas do material pasan a ser cores das caras.
- **Non se importan:** texturas, pieles e morfos, cámaras, luces, algúns tipos de transformación (look-at e skew) e referencias a outros ficheiros. A barra de estado conta estes elementos.
- **Perdido na exportación:** cales arestas son suaves. **Na importación,** as superficies trianguladas seguen sendo triángulos, coas diagonais suavizadas para que as áreas planas sigan lendo como unha soa superficie.

## OBJ (.obj, .mtl)

Importación e exportación.

- **Importación:** solte o `.obj` xunto co seu `.mtl` e as imaxes de textura (ou importe só o `.obj`: entra sen materiais, e a barra de estado indica o `.mtl` que quería). Léese en metros, con Y cara arriba. Cada obxecto (`o`, ou `g` se non hai `o`) convértese nunha [malla](topic:meshes), conservando as caras tal como están (os cuadriláteros seguen sendo cuadriláteros). As coordenadas de textura, as normais e as cores por vértice consérvanse. A imaxe de cor dun material (`map_Kd`, PNG, JPEG ou WebP) entra como textura, coas súas opcións de escala e desprazamento; se non, usa a súa cor (`Kd`). As arestas onde as normais do ficheiro se rompen son duras; sen normais, deciden os grupos de suavizado do ficheiro. Os outros mapas (relieve, normal), puntos, liñas e curvas contanse e déixanse fóra. OBJ non ten unidade, así que un modelo feito en milímetros ou polgadas chega co tamaño errado: escálao despois da importación (consulte [Xirar e escalar](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)).
- **Exportación:** metros, Y cara arriba, coordenadas do mundo. Un obxecto por cada colocación de grupo; os compoñentes escríbense completos en cada colocación. As mallas conservan as súas caras, coordenadas de textura e normais; as caras unidas por [arestas suaves](topic:soften) reciben unha normal por esquina. Cando o modelo ten cores, descárgase un `.mtl` xunto ao `.obj`. Cando ten texturas importadas, o `.obj`, o `.mtl` e as imaxes descárganse xuntos nun `.zip`.
- **Límite:** 2 millóns de vértices ou caras; 64 MB de texto.

## glTF (.glb, .gltf)

Importación e exportación, glTF 2.0.

- **Importación:** un `.glb`, ou un `.gltf` xunto cos seus `.bin` e ficheiros de textura: solte todos sobre a vista ao mesmo tempo (ou escolla o `.glb`). Un `.gltf` dado só indica o ficheiro que precisa: "Este ficheiro .gltf necesita "…": abra a versión .glb, ou solte o .gltf xunto cos seus ficheiros."
  - **Mallas** entran como [mallas](topic:meshes), unha por malla do ficheiro, conservando as normais, coordenadas de textura e cores por vértice do ficheiro. As arestas onde as normais se rompen son duras; o resto son suaves. Unha malla usada en varios sitios queda compartida.
  - **Nodos** convértense en grupos, co nome que teñen no ficheiro. As mallas instanciadas (EXT_mesh_gpu_instancing) entran como unha malla colocada moitas veces.
  - **Materiais:** unha textura de cor base (PNG, JPEG ou WebP) entra como textura, colocada segundo as coordenadas de textura do ficheiro (con calquera transformación de textura), e consérvase ao gardar; se non, usa a cor base. Metal, rugosidade, mapas normais, vidro, capa transparente, brillo e as outras extensións de material léense pero aínda non se conservan: a barra de estado indícao.
  - **Luces** (KHR_lights_punctual): as luces puntuais e de foco convértense en [lámpadas](topic:lights). As luces direccionais contanse: o sol ilumina o modelo.
  - **Cámaras** convértense en [escenas](topic:scenes).
  - **Personaxes con esqueleto** entran de pé, na postura de reposo que lles dá o ficheiro; os seus osos e animacións, e os morph targets, contanse e aínda non se conservan.
  - **Ficheiros comprimidos** (Draco, meshopt) e datos cuantizados léense. Os decodificadores cárganse só para un ficheiro que os necesite.
  - Os puntos e as liñas contanse e déixanse fóra (unha malla contén caras). As texturas KTX2 déixanse fóra; as caras conservan a súa cor.
- **Exportación** (`.glb`): glTF 2.0 binario, metros, Y cara arriba. Unha malla por definición, así que os compoñentes seguen compartidos. As mallas conservan as súas normais, coordenadas de textura e cores por vértice; as caras unidas por [arestas suaves](topic:soften) levan normais suaves. As cores e os materiais pasan a ser materiais (un material como a súa cor); as texturas importadas escríbense como texturas. As lámpadas acesas convértense en luces puntuais e de foco (as lámpadas de área non teñen equivalente en glTF e déixanse fóra); as escenas convértense en cámaras. As arestas soltas déixanse fóra.
- **Límite:** ficheiros ata 300 MB; uns 130 millóns de números de xeometría.

## STL (.stl)

Importación e exportación.

- **Importación:** binario ou ASCII. STL non ten unidade: léese en **milímetros**, como o escriben as impresoras e a propia exportación de ModelCraft. Os vértices no mesmo punto únense, así que unha peza pechada entra como [malla](topic:meshes) pechada. As cores do ficheiro (as convencións VisCAM / SolidView e Materialise) pintan as caras.
- **Exportación,** para impresión 3D: STL binario, **milímetros**, Z cara arriba. Só triángulos: os grupos e as arestas soltas déixanse fóra. As caras pintadas levan a súa cor na convención VisCAM / SolidView, que outros programas ignoran se non a len. Exporte sólidos pechados para unha impresión limpa.

## STEP (.step, .stp)

Só importación. STEP é o que envían os modeladores de pezas e os provedores: ficheiros AP203, AP214 e AP242.

- **Importación:** ModelCraft le o ficheiro por si mesmo, na páxina, e convirte cada sólido nunha [malla](topic:meshes) pechada de triángulos: as caras planas seguen planas, as caras curvas (cilindros, conos, esferas, toros, superficies B-spline) convértense en moitas pequenas caras planas, coas arestas dentro dunha cara curva suaves e as arestas entre dúas caras vivas. Os ficheiros STEP indican a súa unidade; o modelo entra no seu tamaño real. Un conxunto entra con cada peza onde o ficheiro a coloca, cada peza como unha malla propia nun grupo co nome do ficheiro. As cores, os nomes das pezas da árbore do conxunto e as tolerancias (PMI) non se len.
- **Mensaxes:** o que se omitiu ou se debuxou máis groso engádese á liña de estado ("Notas: …"); un ficheiro sen sólidos, un ficheiro danado ou un que supera os límites indícao e non engade nada.
- **Límite:** ficheiros ata 300 MB; 400 000 caras e 8 millóns de triángulos.

## .3dm

Só importación. Os ficheiros `.3dm` conteñen modelos NURBS: polisuperficies, superficies, mallas, curvas e bloques.

- **Importación:** ModelCraft le o ficheiro por si mesmo, na páxina. As mallas entran tal como están; cada cara dunha polisuperficie ou extrusión sae da malla de renderizado gardada co ficheiro, ou se non, ModelCraft a tesela (planos, superficies NURBS, superficies de revolución, curvas extruídas, extrusións; recortadas polos seus bordos, e as polisuperficies pechadas como mallas pechadas). As curvas convértense en arestas, os bloques en compoñentes (os bloques dentro de bloques consérvanse), as capas en etiquetas (ocultas cando están apagadas), e a cor do obxecto (a súa propia, a da súa capa ou a do seu material) pinta as súas caras. O ficheiro indica a súa unidade; o modelo entra no seu tamaño real. Paso a paso: [Importar un modelo .3dm](topic:import-3dm-files).
- **Mensaxes:** a liña de estado indica cantas caras proceden de mallas gardadas e cantas se teselaron, e nomea o que se deixou fóra: puntos, nubes de puntos, texto, cotas, tramas, luces, obxectos SubD, caras en tipos de superficie aínda non lidos e bloques ligados.
- **Límite:** ficheiros ata 300 MB.

## PLY (.ply)

Importación e exportación, para mallas con cores (escaneos, impresión 3D en cor, outros modeladores).

- **Importación:** ASCII e binario. As caras convértense en [malla](topic:meshes) conservando as súas normais, coordenadas de textura e cores por vértice; cada cara é pintada coa máis próxima de 4 096 cores, así que se ven as cores de inmediato. PLY non ten unidade nin convención de eixes: as coordenadas entran tal como están (metros, Z cara arriba). Un PLY só con puntos é unha nube de puntos: ábrao en BimCraft ou CivilCraft.
- **Exportación:** PLY binario con posicións, normais e cores (e coordenadas de textura cando o modelo as ten), en metros, Z cara arriba.

## FBX (.fbx)

Só importación. Ficheiros FBX 7 (desde 2011), binarios ou ASCII, lidos polo lector propio de ModelCraft.

- As mallas entran como [mallas](topic:meshes) coas súas normais, coordenadas de textura (cada conxunto UV) e cores por vértice; unha malla que usan varios obxectos queda compartida. Os obxectos convértense en grupos coas súas transformacións (incluíndo pivotes, desprazamentos e pre-rotacións).
- Materiais: a textura difusa — incrustada no ficheiro, ou unha imaxe solta xunto ao `.fbx` — entra como textura (as imaxes TGA consérvanse como PNG); se non, a cor difusa. Os demais axustes de material agardan polo novo modelo de materiais.
- Aplícanse o eixe vertical e a unidade do ficheiro: todo entra con Z cara arriba, en metros.
- As luces puntuais e de foco convértense en [lámpadas](topic:lights) (unha intensidade FBX de 100 é a lámpada predeterminada de ModelCraft, 800 lúmenes: as intensidades FBX non teñen unidade). As cámaras convértense en [escenas](topic:scenes).
- Os personaxes con esqueleto entran en reposo; os osos e as animacións contanse e aínda non se conservan. As luces direccionais e de área, e a xeometría que non é malla (NURBS, curvas), contanse e déixanse fóra.
- Os ficheiros FBX 6 e anteriores recházanse: gárdeos de novo como FBX 2011 ou posterior.

## Alembic (.abc)

Só importación: cachés de xeometría de programas de animación e efectos.

- As mallas (de polígonos e de subdivisión) entran como [mallas](topic:meshes), coas súas coordenadas de textura e normais; as transformacións convértense en grupos. Alembic ten Y cara arriba e xírase a Z cara arriba; en metros.
- Unha caché con moitas mostras (unha animación) entra coa súa primeira mostra; a barra de estado indica cantas ten.
- Os puntos, curvas, superficies NURBS, cámaras e luces contanse e déixanse fóra. Os ficheiros no antigo formato HDF5 recházanse: gárdeos de novo como ficheiro Alembic Ogawa.

{{ui:Check for 3D printing (STL or 3MF)…}} comproba primeiro a forma e escribe a selección, ou todo o que se mostra. Consulte [Preparar un modelo para a impresión 3D](topic:print-3d).

## 3MF (.3mf)

Só exportación, desde {{ui:Check for 3D printing (STL or 3MF)…}}. Núcleo 3MF: unha malla en **milímetros**, Z cara arriba, coas súas cores como materiais. A maioría dos laminadores o len e, a diferenza de STL, indica a súa unidade. As cousas ocultas déixanse fóra. Consulte [Preparar un modelo para a impresión 3D](topic:print-3d).

## Exportación DWG e DXF (.dwg, .dxf)

Para programas CAD. O modelo escríbese na súa propia unidade: polgadas para modelos en pés e polgadas, en caso contrario milímetros, centímetros ou metros (a barra de estado a indica).

- **Caras** convértense en caras 3D (triángulos). As liñas dentro dunha cara e as arestas suaves escríbense invisibles, así que as caras parecen as de ModelCraft.
- **As arestas soltas** convértense en liñas.
- **Grupos e compoñentes** convértense en bloques: un compoñente escríbese unha vez e colócase tantas veces como se use, incluídas as copias xiradas e espelladas. Un grupo que se estirou despois de xirarse (así que está inclinado) escríbese no seu sitio.
- **Cores:** DWG conserva a cor de cada cara exactamente; DXF usa a máis próxima das 255 cores CAD estándar.
- **Versións:** DWG escríbese como AutoCAD 2004 (AC1018), que os programas CAD desde 2004 abren. DXF é R12 (AC1009), a versión que lee todo programa CAD; R12 non ten campo de unidade, así que diga ao programa CAD que unidade usar.
- **Non se escriben:** guías, cotas, escenas nin a cámara.

## IFC (.ifc)

Só exportación, para BimCraft e outros programas BIM. IFC4 cun proxecto, un emprazamento, un edificio e os seus pisos. Cada grupo ou compoñente de nivel superior convértese nun proxy de elemento de edificio co seu nome; os pechados escríbense como formas sólidas (breps facetados), os abertos como modelos de superficie; os buratos nas caras consérvanse. A xeometría solta de nivel superior convértese nun elemento chamado "Xeometría solta". Sen tipos, propiedades nin materiais.

**Pisos:** {{ui:Export}} › {{ui:IFC storeys…}} lístaos, cada un con nome e unha elevación ({{ui:Add storey}}, ou {{ui:Guess from the model}}, que crea un piso para cada altura sobre a que se levantan os seus grupos de nivel superior). Na exportación, cada grupo ou compoñente vai no piso situado no punto máis baixo do seu, ou por debaixo del, e conserva o seu lugar. Sen pisos, todo vai nun piso, "Level 1", a 0. Os pisos gárdanse no ficheiro ModelCraft.

## DWG (.dwg) e DXF (.dxf)

Importación como liñas no chan (tramas e caras 3D como caras); exportación como se describe enriba. Consulte [Modelar sobre un plano de situación](topic:site-plan).

- **Lectura:** liñas, polilíneas (con arcos), polilíneas 3D, círculos, arcos e referencias de bloque, incluídos os arrays, desde o espazo modelo. Os obxectos invisibles (como os estados ocultos dun bloque dinámico) déixanse fóra. As curvas convértense en 48 segmentos rectos por volta completa.
- **Lectura desde 0.4:** splines e elipses (como arestas), texto, texto multilínea e valores de atributo (como arestas nun trazado de letra de un só trazo), tramas (caras con buratos), caras 3D e áreas sólidas enchidas (caras), e cotas (debuxadas desde os propios bloques de cota do debuxo).
- **Lectura desde 0.7:** sólidos 3D, rexións e corpos (os seus datos ACIS, DWG e DXF de todas as versións), cada un como grupo propio, os pechados como sólidos. As caras sobre superficies que non son planos, cilindros, conos, esferas, toros nin superficies spline simples déixanse fóra e listanse.
- **Non se len:** puntos, táboas, multiliñas, imaxes e todo o que estea no espazo papel.
- **Unidades:** tómanse do debuxo cando as indica. Se non, ModelCraft pregunta.
- **DXF** debe ser ASCII. Recházase o DXF binario.
- **DWG** desde AutoCAD R13 ata o formato actual (AutoCAD 2018 e posteriores; AC1012 a AC1032) léese co lector DWG propio de ModelCraft, na páxina; forma parte de ModelCraft, así que funciona sen conexión sempre que funcione ModelCraft. As versións anteriores (R12 e máis antigas) e os ficheiros moi danados non se poden ler: gárdeos como DXF.
- **Límites:** as coordenadas a máis de 10 000 km da orixe, ou máis de 2 millóns de segmentos de liña, recházanse.

## Ficheiros SKP

{{ui:Import}} (ou solte o ficheiro sobre a vista) le ficheiros de SketchUp co lector propio de ModelCraft, na páxina: non se envía nada, e funciona sen conexión sempre que funcione ModelCraft. Probado con ficheiros de SketchUp 3, 6, 7, 2014, 2017, 2018, 2020, 2025 e 2026; outras versións deberían abrirse tamén, pero aínda non se probaron. O modelo entra como un grupo co nome do ficheiro. Un {{key:Mod+Z}} o retira de novo. Paso a paso: [Importar un modelo SKP](topic:import-sketchup-files).

- **Conservado:** caras con buratos, grupos (como grupos) e compoñentes (como compoñentes, compartidos), os seus nomes e colocacións, cores, etiquetas nos grupos e compoñentes, arestas que non forman parte dunha cara, e arestas suaves e lisas, así que as superficies curvas seguen lisas.
- **Cores:** o material propio dunha cara dalle a súa cor. Un material pintado sobre un grupo ou compoñente convértese na pintura desa colocación, así que as caras interiores sen cor propia a toman, como en SketchUp; un compoñente pintado en dúas cores segue sendo un único compoñente.
- **Etiquetas** nos grupos e compoñentes convértense en etiquetas de ModelCraft, mostradas ou ocultas como estaban. As etiquetas das caras e arestas soltas non se conservan (ModelCraft etiqueta só grupos e compoñentes); a barra de estado as conta.
- **Os elementos ocultos entran ocultos** (caras, arestas, grupos, compoñentes, e caras e arestas dunha etiqueta oculta), así que se ve o que mostraba SketchUp; {{ui:Unhide all}} mostra todo.
- **Texturas:** unha cara pintada cun material con textura conserva a súa textura, colocada como no ficheiro, e o ficheiro ModelCraft conserva a imaxe. Unha textura sobre un grupo ou compoñente completo, unha textura que falta no ficheiro, ou unha imaxe que os navegadores non poden mostrar (como un ficheiro de Photoshop) conserva só a cor do material.
- **Deixado fóra e contado na barra de estado:** imaxes colocadas no modelo. Non se len texto, cotas, guías, planos de sección, escenas nin estilos.
- **Unidades:** os ficheiros SketchUp están en polgadas por dentro; ModelCraft convérteos, así que os tamaños saen ben en calquera unidade.
- **Gardar `.skp`** aínda non está feito. Para levar un modelo de volta a SketchUp, exporte Collada (`.dae`).

## Non admitido

ModelCraft non pode abrir ficheiros 3DS ou IFC, e non pode gardar ficheiros 3DS, FBX, STEP, `.3dm` nin SketchUp (`.skp`).
