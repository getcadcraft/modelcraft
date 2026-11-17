---
title: Abrir, gardar, importar e exportar
summary: O ficheiro ModelCraft, o que podes traer e enviar, onde van os ficheiros e o que cambia sen conexión e entre navegadores.
keywords: abrir, gardar, importar, exportar, ficheiro, 3dm, skp, recuperar, gardado automático, recente, escritorio, abrir en 3D, entrega, descargar, ficheiro modelcraft, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, formatos, sen conexión, gardar como
from: 3f09ab72
---

ModelCraft le e escribe ficheiros no teu ordenador. Non se sube nada: un ficheiro que abres lese dentro do navegador, e un ficheiro que gardas é unha descarga. Consulta [Onde van os teus ficheiros](common:your-files).

## Formatos de un vistazo

| Formato | Abrir | Importar | Exportar | Para que serve |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | sí | non | {{ui:Gardar}} | O teu ficheiro de traballo. Consérvao todo. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | sí | sí | {{ui:Gardar como}}, {{ui:Exportar}} | Programas de renderizado e de montaxe de escenas. O USD propio de ModelCraft consérvao todo. Consulta [Gardar, abrir e exportar USD](topic:usd). |
| SketchUp (`.skp`) | non | sí | non | Para importar modelos de SketchUp. Conserva grupos, compoñentes, cores, texturas nas caras, etiquetas e bordos suaves. Consulta [Importar un modelo SKP](topic:import-sketchup-files). |
| Collada (`.dae`) | non | sí | sí | Para intercambiar modelos con outros modeladores 3D. Conserva grupos, compoñentes e cores. |
| OBJ (`.obj`) | non | sí | sí | Programas de renderizado e de visualización. |
| glTF (`.glb`, `.gltf`) | non | sí | só `.glb` | Visores web, motores de xogos, RA. |
| STL (`.stl`) | non | sí | sí | Impresión 3D (en milímetros). |
| PLY (`.ply`) | non | sí | sí | Mallas con cores: escaneados, impresión a cor. |
| FBX (`.fbx`) | non | sí | non | Modelos de programas de animación e de xogos (FBX 2011 e posteriores). |
| Alembic (`.abc`) | non | sí | non | Cachés de xeometría, na súa primeira mostra. |
| STEP (`.step`, `.stp`) | non | sí | non | Pezas de modeladores de pezas e de provedores, como mallas pechadas ao seu tamaño real. Consulta [Formatos de ficheiro](topic:formats). |
| `.3dm` | non | sí | non | Modelos NURBS: polisuperficies, mallas, curvas, bloques e capas, como mallas, bordos, compoñentes e etiquetas. Consulta [Importar un modelo .3dm](topic:import-3dm-files). |
| 3MF (`.3mf`) | non | non | sí | Impresión 3D, con cores (en milímetros). Desde {{ui:Comprobar a impresión 3D (STL ou 3MF)…}}: consulta [Preparar un modelo para impresión 3D](topic:print-3d). |
| IFC (`.ifc`) | non | non | sí | Programas BIM, e BimCraft. |
| DWG (`.dwg`) | non | sí | sí | Un plano de situación ou de planta sobre o que modelar; enviar o modelo a un programa CAD. |
| DXF (`.dxf`) | non | sí | sí | O mesmo, para calquera programa CAD. |

[Formatos de ficheiro en detalle](topic:formats) enumera exactamente o que conserva e o que deixa fóra cada formato.

## O ficheiro ModelCraft

Un ficheiro `.modelcraft` conserva o modelo completo: xeometría, grupos, compoñentes, guías, escenas, as unidades, e a cámara e o estilo que usabas ao gardar. Non conserva o historial de desfacer.

### Abrir un modelo

1. Fai clic en {{ui:Abrir}} no grupo {{ui:Ficheiro}}, ou prime {{key:Mod+O}}.
2. Se o modelo en pantalla ten cambios sen gardar, ModelCraft pregunta: « Este modelo ten cambios que non se gardaron. Gardar unha copia primeiro? » Escolle {{ui:Gardar unha copia}}, {{ui:Descartar cambios}} ou {{ui:Cancelar}}.
3. Escolle o ficheiro `.modelcraft`.

O modelo ábrese coas unidades coas que se gardou, e coa cámara coa que se gardou. Tamén podes soltar un ficheiro `.modelcraft` sobre a vista 3D, ou facer clic nun da lista de ficheiros recentes na tarxeta de inicio (navegadores que poden reabrir un ficheiro, e a aplicación de escritorio).

:::desktop
Na aplicación de escritorio, un dobre clic nun ficheiro `.modelcraft` ábreo en ModelCraft, e o mesmo ocorre con **Abrir con** nun ficheiro Collada, OBJ, glTF, DWG ou DXF (importase nun modelo novo).
:::

### Gardar un modelo

Fai clic en {{ui:Gardar}} ou prime {{key:Mod+S}}. O navegador descarga `<name>.modelcraft`, onde o nome é o do ficheiro que abriches, ou "Untitled" para un modelo novo.

:::desktop
Na aplicación de escritorio, {{ui:Gardar}} escribe o ficheiro que abriches no seu sitio. Un modelo novo pregunta onde gardalo.
:::

- {{ui:Gardar como}} ({{key:Mod+Shift+S}}) garda unha copia como ficheiro `.modelcraft` ou como [USD](topic:usd); onde o navegador o permite, pide o nome e o lugar. Se non, cambia o nome ao ficheiro descargado: o seguinte gardado, despois de abrir o ficheiro renomeado, usa o novo nome.
- Cada gardado é unha nova descarga. Segundo a configuración do navegador, vai directamente á cartafol de descargas ou pregunta onde gardalo. Se xa hai un ficheiro con ese nome, a maioría dos navegadores engaden un número, como `Untitled (1).modelcraft`.

:::chromium
Para escoller a cartafol cada vez, abre a configuración do navegador, busca "descargas" e activa "Preguntar onde gardar cada ficheiro antes de descargalo".
:::

:::firefox
Para escoller a cartafol cada vez, abre **Configuración**, despois **Xeral**, e en "Descargas" escolle "Preguntar sempre onde gardar os ficheiros".
:::

:::safari
Para cambiar onde van as descargas, abre **Safari**, despois **Configuración**, despois **Xeral**, e define "Ubicación de descarga de ficheiros".
:::

### Iniciar un modelo novo

Fai clic en {{ui:Novo}}. Se hai cambios sen gardar, ModelCraft pregunta antes. Un modelo novo comeza baleiro, na unidade da túa configuración rexional (pés e polgadas en Estados Unidos, milímetros no resto), sen escenas.

### Se o navegador se pecha antes de gardar

ModelCraft garda unha copia do traballo sen gardar no navegador uns segundos despois de cada cambio. A copia escríbese en segundo plano, para que un modelo grande non te faga esperar mentres se garda. Se a lapela ou o navegador se pechan antes de gardar, a próxima vez que abras ModelCraft pregunta « Recuperar o teu traballo? ». Ao recuperar, ábrese o modelo tal como estaba, aínda sen gardar nun ficheiro: gárdao para conservalo. Consulta [Recuperar o teu traballo](common:recover).

### Desde CadCraft: Abrir en ModelCraft

No programa de debuxo CadCraft, **Vista**, despois **Máis**, despois **Abrir en ModelCraft** pasa o debuxo aberto a ModelCraft nunha nova lapela, como DWG. Chega do mesmo xeito que un DWG importado: liñas sobre o chan, nun grupo, listo para modelar sobre el. Non se sube nada; o ficheiro pasa polo almacenamento propio do navegador.

## Importar

Importar engade un ficheiro ao modelo que tes aberto; non o substitúe.

1. Fai clic en {{ui:Importar}} no grupo {{ui:Ficheiro}}, ou solta o ficheiro sobre a vista 3D.
2. Escolle un ficheiro SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG ou DXF.

   O ficheiro chega como **un grupo**, seleccionado, e a vista achégase para mostralo. A barra de estado indica o que entrou e enumera o que non se puido importar, como « Non importado: 2 texturas ».

3. Para traballar directamente sobre a súa xeometría, fai dobre clic no grupo para editar dentro del, ou fai clic en {{ui:Desagrupar}}.

Algunhas cousas que debes saber:

- **Tamaño e dirección cara arriba:** os ficheiros Collada indican a súa unidade e cal é o eixe vertical, e ModelCraft convérteos. glTF está sempre en metros. Os ficheiros OBJ non levan unidade: ModelCraft lélos en metros, con Y cara arriba. Se un OBJ chega 1000 veces máis grande ou máis pequeno, usa [Escalar](topic:rotate-scale) cun factor como `0.001` ou `1000`.
- **DWG e DXF** chegan como liñas (bordos) sobre o chan, non como caras. Se o debuxo non indica a súa unidade, un diálogo titulado « Unidades do debuxo » pregunta cal é a unidade do debuxo. Consulta [Modelar sobre un plano de situación](topic:site-plan).
- **Límites:** os ficheiros de máis de 300 MB rexéitanse para importar, e os de máis de 200 MB para abrir. Os ficheiros con máis de 2 millóns de vértices ou caras rexéitanse por demasiado grandes. Un OBJ de máis de 64 MB rexéitase antes de ser lido. Os ficheiros de texto (Collada, OBJ, STL ASCII, USD en texto) léense por anacos de uns 4 MB, así que ningún bloque de texto contén o ficheiro completo; un OBJ de 16 MB usou uns 0,5 GB de memoria mentres se abría na nosa proba.

## Exportar

1. Fai clic en {{ui:Exportar}} no grupo {{ui:Ficheiro}}.
2. Escolle un formato: {{ui:glTF binario (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL para impresión (.stl, milímetros)}}, {{ui:PLY con cores (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC para BimCraft (.ifc)}}, {{ui:DWG para CAD (.dwg, 2004)}} ou {{ui:DXF para CAD (.dxf, R12)}}.

O navegador descarga o ficheiro, co nome do modelo. Exporta o modelo completo, non só a selección. Os ficheiros glTF, Collada e OBJ escríbense en segundo plano, así que ModelCraft segue funcionando mentres se exporta un modelo grande; a descarga comeza cando o ficheiro está listo. Un modelo baleiro non se exporta: « O modelo está baleiro: debuxa algo primeiro. » Consulta [Exportar un modelo para outros programas](topic:export-model).

## En liña e sen conexión

Todo en ModelCraft funciona no teu ordenador, así que modelar, abrir, gardar, importar e exportar funcionan sen conexión unha vez cargada a aplicación.

Para abrir ModelCraft sen conexión ningunha, gárdao para uso sen conexión mentres tes conexión:

1. Fai clic en {{ui:Gardar para usar sen conexión}} na barra de aplicación superior.
2. O botón vai contando (« Gardando 40 de 212 ») mentres garda. ModelCraft garda os seus propios ficheiros (entre eles o lector DWG), esta axuda e a biblioteca 3D, así que pode levar un tempo.
3. Cando o botón diga {{ui:Listo sen conexión}}, ModelCraft ábrese desde o mesmo enderezo sen conexión, e a importación DWG tamén funciona sen conexión.

Fai clic en {{ui:Listo sen conexión}} máis tarde para {{ui:Gardar de novo (obter a versión máis recente)}} ou {{ui:Quitar a copia sen conexión}}. Se o botón indica {{ui:Non se puido gardar}}, algúns ficheiros non se descargaron: comproba a conexión e fai clic de novo para intentalo. {{ui:Sen copia sen conexión}} significa que esta xanela do navegador non pode conservar unha copia (xanelas privadas e algúns ordenadores xestionados). Consulta [Traballar sen conexión](common:offline).

O gardado en nube aínda non está dispoñible. Cada modelo está onde o gardes.

:::offline
Estás sen conexión. Podes seguir modelando e gardando. A menos que a barra de aplicación mostre {{ui:Listo sen conexión}}, non recargues esta lapela ata que volvas ter conexión.
:::

## Aplicación de escritorio

:::desktop
Usas ModelCraft en CadCraft Studio, a aplicación de escritorio con as oito aplicacións. Os ficheiros ábrense e gárdanse onde ti escolles.
:::

:::web
ModelCraft funciona no navegador en Mac, Windows e Linux, e en CadCraft Studio, a aplicación de escritorio con as oito aplicacións nunha soa instalación, desde getcadcraft.com/download.
:::
