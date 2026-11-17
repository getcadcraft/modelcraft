---
title: Encara no implementat
summary: Què no fa encara aquesta versió de ModelCraft, i què fer en lloc d'això avui.
keywords: que falta, encara no, limitacions, full de ruta, materials, textures, text, capes, retalla, divideix, núvol, escriptori
from: 179fa5e4
---

ModelCraft és una versió inicial. Aquesta pàgina llista el que encara no fa, perquè no hi busqueu en va, i la manera més propera de fer la feina avui.

## Eines de dibuix

| Encara no | Alternativa, avui |
|---|---|
| Dibuix a mà alçada | Feu clic als punts amb {{ui:Corba}} |
| Canviar el nombre de segments d'un arc o cercle després de dibuixar-lo | Esborreu-lo i dibuixeu-lo de nou després d'escriure `24s` |
| Triar un tipus de lletra per al [text 3D](topic:text3d), o editar-ne les paraules després de col·locar-lo | Suprimiu-lo i afegiu el text de nou |
| Canviar un angle escrivint a una cota angular, o la mida d'un cilindre des de la cota del seu cercle | Gireu les arestes amb {{ui:Gira}}; escaleu el cilindre amb {{ui:Escala}} |
| Cotes als fitxers de model exportats | Les cotes es mostren a les imatges, les impressions i els PDF de la vista; els fitxers de model només porten geometria |
| Retalla, Divideix i Closca exterior | [Unió, Resta i Interseca](topic:solids) de grups tancats, o [interseca cares](topic:intersect) i esborra el que no necessitis |
| Triar l'eix de rotació amb les tecles de fletxa | Feu clic al centre de {{ui:Gira}} en una cara que mira en la direcció que ha de tenir l'eix |
| Bloquejos en més d'una inferència alhora | Bloquegeu una direcció amb una tecla de fletxa i després ajusteu-ho a un punt |
| Redimensionar al llarg d'una inclinació, o des d'un extrem de cota que no és en una cantonada | Col·loqueu la cota en dues cantonades, al llarg d'una aresta o al llarg del vermell, el verd o el blau |

## Animació

| Encara no | Alternativa, avui |
|---|---|
| Animar cares, arestes, l'hora del dia del sol, l'estil o el que està amagat | Feu que la part que es mou sigui un grup o component; renderitzeu un vídeo a part per a una altra hora del dia |
| Una càmera que segueix un camí dibuixat, o que mira un objecte en moviment | Poseu més claus de càmera pel camí ([Anima](topic:animation)) |
| So als vídeos, i vídeos d'alta qualitat (traçat de camí) sense WebGPU | Afegiu so en un editor de vídeo; sense WebGPU, renderitzeu el vídeo amb el renderitzador ràpid ([Renderitza el vídeo](topic:animation#render-the-video)) |
| Llums animades (brillantor, dispersió, color) en un vídeo renderitzat, un angle d'objectiu animat sense claus de càmera en un vídeo, animar materials o opcions de renderitzat | Les llums s'animen a la vista; per a un vídeo, animeu també la càmera per fer un zoom; renderitzeu vídeos separats per a diferents configuracions de llum ([Anima qualsevol propietat](topic:animate)) |
| Reflectir pesos o ossos d'un costat a l'altre, envolupants d'ossos visibles, mostrar pesos ombrejats punt per punt (es mostren per cara), veure la malla posada mentre es pinten pesos | Pinteu els dos costats, o feu-ne una meitat i useu un modificador Mirall abans d'afegir l'armadura; canvieu entre Pinta pesos i Posa per comprovar-ho |
| Ossos llegits de fitxers glTF, FBX o USD com a armadura, i armadures escrites en aquests fitxers | Els models amb esquelet entren en repòs amb els pesos del fitxer; afegiu els ossos en l'ordre d'articulacions del fitxer, i després {{ui:Usa els pesos del fitxer}} ([Anima](topic:animate)) |
| Moure un objectiu IK o un pol arrossegant-lo a la vista, triar l'espai d'una restricció (local o mundial), estirar cadenes IK, IK al llarg d'una corba | Escriviu el punt de l'objectiu, o apunteu a un objecte i mogueu-lo; manteniu les cadenes a les seves longituds |
| Teixit, fluids, cossos tous, articulacions i frontisses entre cossos rígids, col·lisió amb la forma exacta d'un objecte (només caixes i boles al voltant), una simulació en directe mentre reprodueu, una velocitat o gir inicial (els cossos comencen en repòs) | Cuiteu els cossos rígids i reproduïu les claus; construïu una frontissa amb claus; partiu una forma estranya en caixes (grups) |
| Exportar l'animació a glTF o altres fitxers de model | Renderitzeu un vídeo; el fitxer `.modelcraft`, i un [fitxer USD](topic:usd) que ModelCraft ha desat, es queden per a ModelCraft |
| Escriure un comentari o un títol en una incidència en VR, notes de veu, moure un pla de secció a mà en VR | Col·loqueu la incidència en VR i després afegiu-hi les paraules en un programa BCF; definiu un pla de secció a la vista abans d'entrar: vegeu [Reviseu el model amb un casc de VR](topic:vr-review) |
| Veure persones a la taula en VR (només es mostren les persones que són en VR), gravar un recorregut en VR | Demaneu-los que s'uneixin en VR, o feu una [animació](topic:animation) del recorregut |

## Malles

| Encara no | Alternativa, avui |
|---|---|
| Esculpir per nivells (multiresolució), i Detall que treu triangles que s'han fet petits | [Esculpiu](topic:sculpt) una malla subdividida; {{ui:Remalla}} per tornar-la a igualar |
| Remallar en cares de quatre costats que segueixen la forma | {{ui:Remalla}} (triangles uniformes), i després reconstruïu-la amb [Retopologia](topic:mesh-edit#retopology) |
| Pesos pintats als vèrtexs per a modificadors (Desplaça, Suavitza i Embolcall funcionen sobre tota la malla) | Apliqueu el modificador, i després esculpiu o editeu les parts que ho necessiten |
| Copiar i enganxar vèrtexs, arestes o cares, un tall de ganivet que acaba dins d'una cara, arestes de filferro sense cara | Dupliqueu la malla a Model; talleu amb ganivet d'aresta a aresta; [extrudeix](topic:mesh-edit#change-the-shape) les arestes obertes en cares |

## Organització i visualització

| Encara no | Alternativa, avui |
|---|---|
| Capes de plànols de situació DWG i DXF com a etiquetes | El plànol de situació arriba com un sol grup: descomponeu-lo i agrupeu les parts que vulgueu etiquetar |
| Diverses seccions alhora, una caixa de secció, o el contorn d'una secció exportat com a plànol | Un [pla de secció](topic:sections) talla cada vegada; exporteu la vista com a imatge |
| Mostrar les arestes suaus discontínues, o suavitzar mentre arrossegueu un control lliscant | [Suavitza per angle](topic:soften) a {{ui:Informació de l'entitat}}, i desfeu per provar un altre angle |
| Una biblioteca en línia de models per cercar, o components amb opcions per triar (color, estil) | La [biblioteca inicial](topic:starter); importeu models Collada, OBJ o glTF; [estireu](topic:stretch) una còpia per donar-li mida |
| Col·locar plantes de la biblioteca de plantes | [Escampeu](topic:live-view#scatter-plants-rocks-and-people) plantes a la vista en directe, o col·loqueu un arbre de la biblioteca inicial |
| Còpies independents d'un grup | Feu-lo un component, i després {{ui:Fes-lo únic}} (vegeu [Resolució de problemes](topic:troubleshooting#editing-one-group-changed-another)) |

## Renderitzat

| Encara no | Alternativa, avui |
|---|---|
| Renderitzat a la vista (l'espai de treball {{ui:Renderitza}}), la cua de renderitzat, i les opcions de càmera, imatge de cel, boira i barreja de llums sense WebGPU | {{ui:Renderitza una imatge…}} en {{ui:Alta qualitat}} fa servir el traçador de camí de WebGL, sense aquestes opcions ([Renderitza una imatge](topic:render#high-quality)) |
| Un altre programa que dibuixa la imatge renderitzada sense un complement de motor de renderitzat (CadCraft mai no executa un programa amb llicència GNU GPL); càmeres panoràmiques o estèreo, i una imatge de cel a través d'un altre programa; el complement d'Unreal Engine (els fitxers s'escriuen, però el complement que els obre no s'ha publicat) | Els nostres motors Fast i Path tracer; el motor d'un complement ([dibuixeu la imatge amb un altre programa](topic:render-other-program)); un fitxer de carpeta USD, glTF o Unreal de la llista Motor per emportar a qualsevol programa |
| Escampar plantes i roques a {{ui:Renderitza una imatge…}} | Es mostren a la [vista en directe](topic:live-view), als seus panorames, al visor i al vídeo |

## Materials i colors

| Encara no | Alternativa, avui |
|---|---|
| Entrades diferents del color base, rugositat, metall, opacitat, normal i emissió que canvien al llarg d'una superfície en imatges d'alta qualitat (fan servir la seva mitjana) | [Feu materials amb nodes](topic:shading): enllaceu-los igualment, la vista els mostra variant |
| Desplaçament a les cares de prem i estira | Convertiu l'objecte en malla per al desplaçament |
| Compartir els vostres propis materials a la Biblioteca des de l'app, i mapes empaquetats (ARM/ORM) o EXR en un conjunt de textures importat | Guardeu-los al fitxer; importeu els mapes separats com a PNG o JPEG |
| Materials del fitxer en sessions de Live TeamWork (es queden a l'ordinador que els va fer) | Deseu el fitxer i compartiu-lo |
| Decals que es doblen al voltant de superfícies corbes, decals al Desfés, o pintar les textures de diverses cares alhora a través d'una costura | Col·loqueu decals més petits a cada part; pinteu cada costat d'una costura per separat |
| Coure sobre cares de prem i estira, coure diversos objectes en una sola imatge, una gàbia que modeleu a mà, o llum cuita de llums | Convertiu a malla i desplegueu-la; cuiteu cada objecte; augmenteu la distància de cerca; renderitzeu una imatge per a la llum d'una llum |
| Pintar rugositat, metall o alçada, pintar amb imatges (segells) i pintar textures de més de 512 × 512 | Pinteu aquí el color base; feu els altres mapes en un editor d'imatges i importeu-los com a conjunt de textures |
| Textures en exportacions Collada, STL, PLY, 3MF, IFC, DWG i DXF, i els grafs de nodes dels materials propis del fitxer en models exportats | Aquests formats reben el color de cada material; glTF i OBJ porten les textures importades; exporteu un material sol com a [MaterialX](topic:shading#materialx); [USD](topic:usd) conserva tot el model per a ModelCraft |
| Textures en fitxers Collada | Es compten i es deixen fora en importar; les textures de fitxers `.skp` i `.glb` sí que entren |

## Fitxers

| Encara no | Alternativa, avui |
|---|---|
| Desar fitxers de SketchUp, i el text i les cotes d'aquests | [Importa](topic:import-sketchup-files) conserva les cares, els colors i les textures; exporteu Collada (`.dae`) per tornar a SketchUp |
| Cotes i guies en exportacions DWG i DXF | Afegiu-les al programa CAD després d'exportar |
| Punts, taules i multilínies de DWG i DXF | Es compten i es deixen fora; el text arriba com a escriptura de traç simple, no amb el tipus de lletra del plànol |
| Superfícies, malles, taules i multilínies de DWG i DXF; cares de sòlids 3D en superfícies de forma lliure escombrades, extruïdes o de loft | També es compten i es deixen fora (els sòlids 3D sí que entren). Exporteu aquestes parts des del programa CAD com a OBJ o Collada i importeu-ho |
| Tipus, propietats o materials d'IFC | L'exportació IFC té [plantes](topic:formats#ifc-ifc) i elements genèrics; afegiu la resta en un programa BIM |
| Enviar un model directament a BimCraft | Exporteu {{ui:IFC per a BimCraft (.ifc)}} i obriu-lo a BimCraft |
| Arestes soltes en glTF i STL | Useu OBJ o Collada per al treball de línia |
| Materials de glTF i FBX més enllà del color base (metall, rugositat, mapes normals, vidre, capa transparent, vellut…) | Es llegeixen i es llisten; ModelCraft conserva el color base o la textura. Reconstruïu l'aspecte a l'[espai de treball d'ombrejat](topic:shading) |
| Ossos, animacions i objectius de morfing de glTF | Els models amb esquelet entren aturats com estan en repòs; animeu-los a la [línia de temps](topic:animation) |
| Colors i noms de les peces del conjunt de fitxers STEP | Les peces entren com a malles a la seva mida real; [pinteu](topic:paint) i anomeneu-les després d'importar |
| Objectes SubD, text, cotes i llums de fitxers `.3dm` | Vegeu [què es deixa fora](topic:import-3dm-files#what-is-left-out-and-said); convertiu SubD en malles al programa que va fer el fitxer |
| Textures KTX2 i variants de material en glTF | Exporteu amb textures PNG o JPEG; s'usa la variant per defecte |
| Escriure instància de glTF (EXT_mesh_gpu_instancing) | Els components s'escriuen una vegada i es col·loquen moltes vegades, cosa que tots els visors llegeixen |
| Animació d'Alembic (cada mostra d'una memòria cau), punts i corbes d'Alembic, escriure Alembic | Entra la primera mostra; animeu a la [línia de temps](topic:animation); escriviu glTF, USD o OBJ |
| Mapes de relleu i normals en materials OBJ | Només entra la imatge de color (`map_Kd`) |
| Ossos i animació de FBX, exportació FBX, fitxers FBX 6 | Els models amb esquelet entren en repòs; exporteu glTF; deseu els fitxers antics com a FBX 2011 o més nous |
| Pells, morfings, càmeres, llums, transformacions look-at i skew de Collada, referències externes | Es deixen fora en importar i es compten al missatge |
| Fitxers de còpia de seguretat | {{ui:Desa com a}} ({{key:Mod+Shift+S}}) desa una altra còpia. Després d'un bloqueig, ModelCraft us ofereix el vostre treball no desat ("Voleu recuperar el treball?") |
| Desat al núvol i sincronització entre ordinadors | Encara no disponible. Deseu els fitxers al vostre ordinador i copieu-los on els necessiteu |

## Impressió 3D

| Encara no | Alternativa, avui |
|---|---|
| Suports reals del laminador (interfícies, base de suport, el patró exacte de suports) | La [vista prèvia dels suports](topic:print-tools#supports-preview) mostra on van i quants n'hi ha, aproximadament; la vista prèvia del vostre laminador mostra els reals |
| Desfer una peça que es travessa a si mateixa, o vores on es troben tres o més cares | [Repara](topic:print-tools#repair) les llista amb la seva ubicació; useu [Interseca cares](topic:intersect) i esborreu el que hi ha a dins |
| Patrons de farciment i una gelosia dins d'una part buida | [Buida](topic:print-tools#hollow) la deixa buida; el vostre laminador afegeix farciment a una peça sòlida |
| Detalls massa petits per a la vostra broquera (excepte les parets) | [Gruix de paret](topic:print-tools#wall-thickness) troba parets primes; la vista de capes del vostre laminador mostra la resta |

## Rendiment

El Desfés guarda una còpia del model per a cada pas (una [malla](topic:meshes) només guarda el que ha canviat), de manera que les importacions molt grans de geometria de prem i estira fan que cada edició sigui més lenta. Mantingueu les importacions lleugeres, i deseu i torneu a obrir per buidar l'historial.

## Aplicacions i plataformes

- **Escriptori:** ModelCraft s'executa al navegador a Mac, Windows i Linux, i a CadCraft Studio, l'aplicació d'escriptori amb les vuit aplicacions en una sola instal·lació. A Android, CadCraft Studio s'instal·la des del seu APK a getcadcraft.com/download. Encara no hi ha versió per a iPad ni iPhone.
- **Tàctil:** vegeu [Òrbita, desplaçament i zoom](topic:orbit-pan-zoom) per als gestos amb els dits. La pressió d'un llapis defineix el pinzell a [Esculpeix](topic:sculpt); en altres llocs no s'usen ni la pressió ni la inclinació del llapis.
- **Fulls:** ModelCraft [imprimeix una vista per pàgina](topic:export-model#print-the-view-or-save-it-as-a-pdf); no hi ha fulls amb diverses vistes ni caixetí. Exporteu a DWG/DXF compatibles amb CadCraft per als plànols a escala.
