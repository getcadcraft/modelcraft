---
title: Aínda non dispoñible
summary: O que esta versión de ModelCraft aínda non fai e o que facer en troca hoxe.
keywords: falta, aínda non, limitacións, ruta de desenvolvemento, materiais, texturas, texto, capas, recortar, dividir, nube, escritorio
from: 179fa5e4
---

ModelCraft é unha versión temperá. Esta páxina lista o que aínda non fai, para que non o busque, e a vía máis próxima para facer o traballo hoxe.

## Ferramentas de debuxo

| Aínda non | En troca, hoxe |
|---|---|
| Debuxo a man alzada | Prema os puntos con {{ui:Curve}} |
| Cambiar o número de segmentos dun arco ou círculo despois de debuxalo | Borre e debúxeo de novo despois de escribir `24s` |
| Escoller un tipo de letra para o [texto 3D](topic:text3d), ou editar as súas palabras despois de colocalo | Borre e engada o texto de novo |
| Cambiar un ángulo escribindo nunha cota angular, ou o tamaño dun cilindro desde a cota do seu círculo | Xire os bordos con {{ui:Rotate}}; escale o cilindro con {{ui:Scale}} |
| Cotas en ficheiros de modelo exportados | As cotas aparecen en imaxes, impresións e PDF da vista; os ficheiros de modelo levan só xeometría |
| Recortar, Dividir e Casca exterior | Grupos pechados [Unir, Restar e Intersectar](topic:solids), ou [intersectar caras](topic:intersect) e borrar o que non precise |
| Escoller o eixe de xiro coas teclas de frecha | Prema o centro de {{ui:Rotate}} nunha cara que mire na dirección que debe ter o eixe |
| Bloqueos en máis dunha inferencia ao mesmo tempo | Bloquee unha dirección cunha tecla de frecha, logo axuste a un punto |
| Redimensionar ao longo dunha inclinación, ou desde un extremo de cota que non está nunha esquina | Coloque a cota en dúas esquinas, ao longo dun bordo, ou ao longo do vermello, verde ou azul |

## Animación

| Aínda non | En troca, hoxe |
|---|---|
| Animar caras, bordos, a hora do día do sol, o estilo ou o que está oculto | Faga da parte móbil un grupo ou compoñente; renderice un vídeo separado para outra hora do día |
| Unha cámara que segue unha traxectoria debuxada, ou que mira a un obxecto en movemento | Poña máis fotogramas clave da cámara ao longo do camiño ([Animar](topic:animation)) |
| Son nos vídeos, e vídeos de alta calidade (de trazado de camiño) sen WebGPU | Engada son nun editor de vídeo; sen WebGPU, renderice o vídeo co renderizador rápido ([Renderizar o vídeo](topic:animation#render-the-video)) |
| Lámpadas animadas (brillo, dispersión, cor) nun vídeo renderizado, un ángulo de obxectivo animado sen fotogramas clave da cámara nun vídeo, animar materiais ou axustes de renderizado | As lámpadas animan na vista; para un vídeo, poña tamén a cámara en fotogramas clave para un zoom; renderice vídeos separados para distintos axustes de lámpada ([Animar calquera propiedade](topic:animate)) |
| Espellar pesos ou ósos dun lado ao outro, envolventes de ósos visibles, mostrar os pesos sombreados punto por punto (móstranse por cara), ver a malla posada mentres pinta pesos | Pinte os dous lados, ou faga unha metade e use un modificador Mirror antes de engadir a armadura; alterne entre Pintar pesos e Pose para comprobar |
| Ósos lidos de ficheiros glTF, FBX ou USD como armadura, e armaduras escritas neses ficheiros | Os modelos con esqueleto entran en repouso cos pesos do ficheiro; engada os ósos na orde de articulacións do ficheiro, logo {{ui:Use the file's weights}} ([Animar](topic:animate)) |
| Mover un destino IK ou un polo arrastrándoo na vista, escoller o espazo dunha restrición (local ou mundo), estirar cadeas IK, IK ao longo dunha curva | Escriba o punto do destino, ou apunte a un obxecto e mova ese; manteña as cadeas nas súas lonxitudes |
| Tecido, fluídos, corpos brandos, unións e bisagras entre corpos ríxidos, colisión coa forma exacta dun obxecto (só caixas e bólas o rodean), unha simulación en directo mentres reproduce, unha velocidade ou xiro inicial (os corpos comezan en repouso) | Hornee os corpos ríxidos e reproduza os fotogramas clave; faga unha bisagra con fotogramas clave; divida unha forma rara en caixas (grupos) |
| Exportar a animación a glTF ou outros ficheiros de modelo | Renderice un vídeo; o ficheiro `.modelcraft`, e un [ficheiro USD](topic:usd) que ModelCraft gardou, quédanse para ModelCraft |
| Escribir un comentario ou un título nunha incidencia en VR, notas de voz, mover á man un plano de sección en VR | Coloque a incidencia en VR, logo engada as súas palabras nun programa BCF; estableza un plano de sección na vista antes de entrar: vexa [Revisar o modelo cun visor de VR](topic:vr-review) |
| Ver persoas á mesa en VR (só se ven as persoas en VR), gravar un paseo en VR | Pídalles que se unan en VR, ou faga unha [animación](topic:animation) do paseo |

## Mallas

| Aínda non | En troca, hoxe |
|---|---|
| Esculpir por niveis (multiresolución), e Detail quitando triángulos que quedaron minúsculos | [Esculpir](topic:sculpt) unha malla subdividida; {{ui:Remesh}} para igualala de novo |
| Remallar en caras de catro lados que seguen a forma | {{ui:Remesh}} (triángulos iguais), logo reconstrúa coa [Retopoloxía](topic:mesh-edit#retopology) |
| Pesos pintados nos vértices para modificadores (Displace, Smooth e Shrinkwrap traballan sobre toda a malla) | Aplique o modificador, logo esculpa ou edite as partes que o precisan |
| Copiar e pegar de vértices, bordos ou caras, un corte de coitela que termina dentro dunha cara, bordos de arame sen cara | Duplique a malla en Modelo; corte con coitela de bordo a bordo; [Extruír](topic:mesh-edit#change-the-shape) os bordos abertos en caras |

## Organizar e ver

| Aínda non | En troca, hoxe |
|---|---|
| Capas de planos de situación DWG e DXF como etiquetas | O plano de situación entra como un grupo: desagrúpeo e agrupe as partes que quere etiquetar |
| Varios cortes de sección á vez, unha caixa de sección, ou o contorno dunha sección exportado como debuxo | Un [plano de sección](topic:sections) corta de cada vez; exporte a vista como imaxe |
| Amosar bordos suaves con trazos, ou suavizar mentres arrastra un control deslizante | [Suavizar por ángulo](topic:soften) en {{ui:Entity info}}, e desfaga para probar outro ángulo |
| Unha biblioteca en liña de modelos para buscar, ou compoñentes con opcións para escoller (cor, estilo) | A [biblioteca inicial](topic:starter); importe modelos Collada, OBJ ou glTF; [estire](topic:stretch) unha copia ao tamaño |
| Colocar plantas desde a biblioteca de plantas | [Dispersar](topic:live-view#scatter-plants-rocks-and-people) plantas na vista en directo, ou coloque unha árbore da biblioteca inicial |
| Copias independentes dun grupo | Fágao compoñente, logo {{ui:Make unique}} (vexa [Solución de problemas](topic:troubleshooting#editing-one-group-changed-another)) |

## Renderizado

| Aínda non | En troca, hoxe |
|---|---|
| Renderizar na vista (o espazo de traballo {{ui:Render}}), a cola de renderizado, e as opcións de cámara, imaxe de ceo, néboa e mestura de luz sen WebGPU | {{ui:Render a picture…}} en {{ui:High quality}} usa alí o trazador de camiños WebGL, sen esas opcións ([Renderizar unha imaxe](topic:render#high-quality)) |
| Outro programa debuxando a imaxe de renderizado sen un complemento de motor de renderizado (CadCraft nunca executa un programa con licenza GNU GPL); cámaras panorámicas ou estereoscópicas e unha imaxe de ceo a través doutro programa; o complemento de Unreal Engine (os ficheiros escríbense, o complemento que os abre non se publicou) | Os nosos motores Fast e Path tracer; o motor dun complemento ([debuxar a imaxe con outro programa](topic:render-other-program)); un ficheiro de carpeta USD, glTF ou Unreal da lista de motores para levar a calquera programa |
| Plantas e rochas dispersas en {{ui:Render a picture…}} | Móstranse na [vista en directo](topic:live-view), nos seus panoramas, visor e vídeo |

## Materiais e cores

| Aínda non | En troca, hoxe |
|---|---|
| Entradas distintas da cor base, rugosidade, metalicidade, opacidade, normal e emisión que cambien ao longo dunha superficie en imaxes de alta calidade (usan a súa media) | [Crear materiais con nodos](topic:shading): conéctaos igual, a vista móstraos variando |
| Desprazamento en caras de empurrar/tirar | Converta o obxecto a malla para o desprazamento |
| Compartir os seus propios materiais coa biblioteca desde a aplicación, e mapas empaquetados (ARM/ORM) ou EXR nun conxunto de texturas importado | Gárdeos no ficheiro; importe os mapas separados como PNG ou JPEG |
| Materiais do ficheiro en sesións de Live TeamWork (quedan no ordenador que os fixo) | Garde o ficheiro e compártao |
| Calcomanías que se dobran ao redor de superficies curvas, calcomanías en Desfacer, ou pintar as texturas de varias caras a un tempo a través dunha xunta | Coloque calcomanías máis pequenas en cada parte; pinte cada lado dunha xunta por separado |
| Hornear en caras de empurrar/tirar, hornear varios obxectos nunha imaxe, unha gaiola que modele á man, ou iluminación cocida das lámpadas | Converta a malla e desdóbrea; hornee cada obxecto; aumente a distancia de busca; renderice unha imaxe para a luz das lámpadas |
| Pintar rugosidade, metalicidade ou altura, pintar con imaxes (selos) e pintar texturas maiores de 512 × 512 | Pinte aquí a cor base; faga os outros mapas nun editor de imaxes e impórtaos como conxunto de texturas |
| Texturas nas exportacións Collada, STL, PLY, 3MF, IFC, DWG e DXF, e os grafos de nodos dos materiais propios do ficheiro en modelos exportados | Eses formatos reciben a cor de cada material; glTF e OBJ levan as texturas importadas; exporte un material só como [MaterialX](topic:shading#materialx); [USD](topic:usd) conserva o modelo enteiro para ModelCraft |
| Texturas en ficheiros Collada | Contanse e quédanse fóra ao importar; as texturas en ficheiros `.skp` e `.glb` entran |

## Ficheiros

| Aínda non | En troca, hoxe |
|---|---|
| Gardar ficheiros SketchUp, e o seu texto e cotas | [Importar](topic:import-sketchup-files) conserva caras, cores e texturas; exporte Collada (`.dae`) para volver a SketchUp |
| Cotas e guías en exportacións DWG e DXF | Engádaas no programa CAD despois de exportar |
| Puntos, táboas e multiliñas de referencia de DWG e DXF | Contanse e quédanse fóra; o texto entra como letra de trazo sinxelo, non coa tipografía do debuxo |
| Superficies, mallas, táboas e multiliñas de referencia de DWG e DXF; caras de sólidos 3D sobre superficies barridas, lofted ou outras de forma libre | Tamén se contan e quédanse fóra (os sólidos 3D si entran). Exporte esas partes desde o programa CAD como OBJ ou Collada e impórteas |
| Tipos, propiedades ou materiais IFC | A exportación IFC ten [pisos](topic:formats#ifc-ifc) e elementos xenéricos; engada o resto nun programa BIM |
| Enviar un modelo directamente a BimCraft | Exporte {{ui:IFC for BimCraft (.ifc)}} e ábrao en BimCraft |
| Bordos soltos en glTF e STL | Use OBJ ou Collada para o trazado de liñas |
| Materiais glTF e FBX máis aló da cor base (metal, rugosidade, mapas normais, vidro, verniz claro, brillo…) | Lóense e listanse; ModelCraft conserva a cor base ou a textura. Reconstrúa o aspecto no [espazo de traballo de sombreado](topic:shading) |
| Ósos, animacións e morph targets de glTF | Os modelos con esqueleto entran en repouso; anime na [liña temporal](topic:animation) |
| Cores e nomes das pezas da montaxe en ficheiros STEP | As pezas entran como mallas no seu tamaño real; [pinte](topic:paint) e nomee despois de importar |
| Obxectos SubD, texto, cotas e luces de ficheiros `.3dm` | Vexa [o que se deixa fóra](topic:import-3dm-files#what-is-left-out-and-said); convirta SubD en mallas no programa que creou o ficheiro |
| Texturas KTX2 e variantes de materiais en glTF | Exporte con texturas PNG ou JPEG; úsase a variante predeterminada |
| Escribir instancias glTF (EXT_mesh_gpu_instancing) | Os compoñentes escríbense unha vez e colócanse moitas veces, o que todo visor le |
| Animación Alembic (cada mostra dunha caché), puntos e curvas Alembic, escribir Alembic | Entra a primeira mostra; anime na [liña temporal](topic:animation); escriba glTF, USD ou OBJ |
| Mapas de relevo e normais en materiais OBJ | Só entra a imaxe de cor (`map_Kd`) |
| Ósos e animación FBX, exportación FBX, ficheiros FBX 6 | Os modelos con esqueleto entran en repouso; exporte glTF; garde os ficheiros antigos como FBX 2011 ou posterior |
| Pieles, morfos, cámaras, luces, transformacións look-at e skew de Collada, referencias externas | Quédanse fóra ao importar e contanse na mensaxe |
| Ficheiros de copia de seguridade | {{ui:Save as}} ({{key:Mod+Shift+S}}) garda outra copia. Despois dun fallo, ModelCraft ofrece de novo o seu traballo sen gardar («Recuperar o traballo?») |
| Gardado na nube e sincronización entre ordenadores | Aínda non dispoñible. Garde os ficheiros no seu ordenador, e copiteos onde os precise |

## Impresión 3D

| Aínda non | En troca, hoxe |
|---|---|
| Soportes reais de slicer (interfaces, balsa, o patrón exacto de soporte) | A [vista previa de soportes](topic:print-tools#supports-preview) mostra onde e canto máis ou menos; a vista previa do seu slicer mostra os reais |
| Desenredar unha peza que atravesa a si mesma, ou bordos onde se xuntan tres ou máis caras | [Reparar](topic:print-tools#repair) lístaos con onde están; use [Intersectar caras](topic:intersect) e borre o que está dentro |
| Patróns de recheo e unha retícula dentro dun oco | [Ocar](topic:print-tools#hollow) déixao baleiro; o seu slicer engade recheo a unha peza sólida |
| Detalles demasiado pequenos para a súa boquilla (que non sexan muros) | [Grosor do muro](topic:print-tools#wall-thickness) atopa muros finos; a vista de capas do seu slicer mostra o resto |

## Rendemento

Desfacer garda unha copia do modelo para cada paso (unha [malla](topic:meshes) só conserva o que cambiou), así que as importacións moi grandes de xeometría de empurrar/tirar fan cada edición máis lenta. Manteña as importacións lixeiras, e garde e reabra para borrar o historial.

## Aplicacións e plataformas

- **Escritorio:** ModelCraft funciona no navegador en Mac, Windows e Linux, e en CadCraft Studio, a aplicación de escritorio coas oito aplicacións nunha soa instalación. En Android, CadCraft Studio instálase desde o seu APK en getcadcraft.com/download. Aínda non hai versión para iPad ou iPhone.
- **Tacto:** vexa [Orbitar, desprazar e facer zoom](topic:orbit-pan-zoom) para os xestos cos dedos. A presión dun lapis fixa o pincel en [Esculpir](topic:sculpt); noutros sitios non se usan a presión nin a inclinación do lapis.
- **Follas:** ModelCraft [imprime unha vista por páxina](topic:export-model#print-the-view-or-save-it-as-a-pdf); non hai disposicións de follas con varias vistas nin cartela. Exporte a DWG/DXF compatible con CadCraft para debuxos a escala.
