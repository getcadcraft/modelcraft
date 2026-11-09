---
title: Abrir, gardar, importar e exportar
summary: O ficheiro de ModelCraft, o que pode traer e enviar, onde van os ficheiros e o que cambia sen conexión e entre navegadores.
keywords: abrir, gardar, importar, exportar, ficheiro, 3dm, skp, recuperar, gardado automático, recentes, escritorio, abrir en 3D, transferencia, descarga, ficheiro modelcraft, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, formatos, sen conexión, gardar como
from: 0b4896d1
---

ModelCraft le e escribe ficheiros no seu ordenador. Non se envía nada: un ficheiro que abre lese dentro do seu navegador, e un ficheiro que garda é unha descarga. Consulte [Onde van os seus ficheiros](common:your-files).

## Formatos de un vistazo

| Formato | Abrir | Importar | Exportar | Para que serve |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | sí | non | {{ui:Gardar}} | O seu ficheiro de traballo. Conserva todo. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | sí | sí | {{ui:Gardar como}}, {{ui:Exportar}} | Programas de render e de montaxe de escenas. O USD propio de ModelCraft conserva todo. Consulte [Gardar, abrir e exportar USD](topic:usd). |
| SketchUp (`.skp`) | non | sí | non | Para importar modelos de SketchUp. Conserva grupos, compoñentes, cores, texturas nas caras, etiquetas e bordos suaves. Consulte [Importar un modelo SKP](topic:import-sketchup-files). |
| Collada (`.dae`) | non | sí | sí | Intercambio de modelos con outros modeladores 3D. Conserva grupos, compoñentes e cores. |
| OBJ (`.obj`) | non | sí | sí | Programas de render e visualización. |
| glTF (`.glb`, `.gltf`) | non | sí | só `.glb` | Visores web, motores de xogos, realidade aumentada. |
| STL (`.stl`) | non | sí | sí | Impresión 3D (en milímetros). |
| PLY (`.ply`) | non | sí | sí | Mallas con cores: escaneados, impresión en cor. |
| FBX (`.fbx`) | non | sí | non | Modelos de programas de animación e xogos (FBX 2011 e posteriores). |
| Alembic (`.abc`) | non | sí | non | Caché de xeometría, na súa primeira mostra. |
| STEP (`.step`, `.stp`) | non | sí | non | Pezas de modeladores de pezas e provedores, como mallas pechadas ao seu tamaño real. Consulte [Formatos de ficheiro](topic:formats). |
| `.3dm` | non | sí | non | Modelos NURBS: polisuperficies, mallas, curvas, bloques e capas, como mallas, bordos, compoñentes e etiquetas. Consulte [Importar un modelo .3dm](topic:import-3dm-files). |
| 3MF (`.3mf`) | non | non | sí | Impresión 3D, con cores (en milímetros). Desde {{ui:Comprobar a impresión 3D (STL ou 3MF)…}}: consulte [Preparar un modelo para a impresión 3D](topic:print-3d). |
| IFC (`.ifc`) | non | non | sí | Programas BIM e BimCraft. |
| DWG (`.dwg`) | non | sí | sí | Un plano de situación ou unha planta sobre a que modelar; enviar o modelo a un programa CAD. |
| DXF (`.dxf`) | non | sí | sí | O mesmo, para calquera programa CAD. |

[Formatos de ficheiro en detalle](topic:formats) indica exactamente o que conserva e deixa fóra cada formato.

## O ficheiro de ModelCraft

Un ficheiro `.modelcraft` conserva o modelo completo: xeometría, grupos, compoñentes, guías, escenas, as unidades, e a cámara e o estilo que usaba ao gardar. Non conserva o historial de desfacer.

### Abrir un modelo

1. Prema {{ui:Abrir}} no grupo {{ui:Ficheiro}}, ou prema {{key:Mod+O}}.
2. Se o modelo na pantalla ten cambios sen gardar, ModelCraft pregunta: «Este modelo ten cambios que non se gardaron. ¿Gardar primeiro unha copia?» Escolla {{ui:Gardar unha copia}}, {{ui:Descartar cambios}} ou {{ui:Cancelar}}.
3. Escolla o ficheiro `.modelcraft`.

O modelo ábrese coas unidades nas que se gardou, coa cámara coa que se gardou. Tamén pode soltar un ficheiro `.modelcraft` sobre a vista 3D, ou premer nun da lista de ficheiros recentes da tarxeta de inicio (navegadores que poden reabrir un ficheiro, e a aplicación de escritorio).

:::desktop
Na aplicación de escritorio, un dobre clic nun ficheiro `.modelcraft` ábreo en ModelCraft, e tamén o fai **Abrir con** nun ficheiro Collada, OBJ, glTF, DWG ou DXF (impórtase a un modelo novo).
:::

### Gardar un modelo

Prema {{ui:Gardar}} ou prema {{key:Mod+S}}. O navegador descarga `<name>.modelcraft`, onde o nome é o do ficheiro que abriu, ou «Untitled» para un modelo novo.

:::desktop
Na aplicación de escritorio, {{ui:Gardar}} escribe o ficheiro que abriu no mesmo sitio. Un modelo novo pregunta onde gardalo.
:::

- {{ui:Gardar como}} ({{key:Mod+Shift+S}}) garda unha copia como ficheiro `.modelcraft` ou como [USD](topic:usd); onde o navegador o permita, pregunta polo nome e o lugar. Se non, cambie o nome do ficheiro descargado: o seguinte gardado despois de abrir o ficheiro renomeado usa o novo nome.
- Cada gardado é unha nova descarga. Segundo a configuración do navegador, vai directamente ao cartafol de descargas ou pregunta onde gardar. Se xa hai un ficheiro con ese nome, a maioría dos navegadores engade un número, como `Untitled (1).modelcraft`.

:::chromium
Para escoller o cartafol cada vez, abra a configuración do navegador, busque «descargas» e active «Preguntar onde gardar cada ficheiro antes de descargalo».
:::

:::firefox
Para escoller o cartafol cada vez, abra **Configuración**, despois **Xeral**, e en «Descargas» escolla «Preguntar sempre onde gardar os ficheiros».
:::

:::safari
Para cambiar onde van as descargas, abra **Safari**, despois **Configuración**, despois **Xeral**, e estableza «Ubicación de descarga de ficheiros».
:::

### Iniciar un modelo novo

Prema {{ui:Novo}}. Se hai cambios sen gardar, ModelCraft pregunta antes. Un modelo novo comeza baleiro, na unidade da súa configuración rexional (pés e polgadas nos Estados Unidos, milímetros no resto), sen escenas.

### Se o navegador se pecha antes de gardar

ModelCraft conserva unha copia do traballo sen gardar no navegador uns segundos despois de cada cambio. Se a lapela ou o navegador se pechan antes de gardar, a seguinte vez que abra ModelCraft pregunta «¿Recuperar o seu traballo?». Ao recuperar, ábrese o modelo tal como estaba, aínda sen gardar nun ficheiro: gárdeo para conservalo. Consulte [Recuperar o seu traballo](common:recover).

### Desde CadCraft: Abrir en ModelCraft

Na aplicación de debuxo CadCraft, **Vista**, despois **Máis**, despois **Abrir en ModelCraft** pasa o debuxo aberto a ModelCraft nunha lapela nova, como DWG. Chega do mesmo xeito que un DWG importado: liñas sobre o chan, nun grupo, listas para modelar sobre elas. Non se envía nada; o ficheiro pasa polo almacenamento propio do navegador.

## Importar

Importar engade un ficheiro ao modelo que ten aberto; non o substitúe.

1. Prema {{ui:Importar}} no grupo {{ui:Ficheiro}}, ou solte o ficheiro na vista 3D.
2. Escolla un ficheiro SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG ou DXF.

   O ficheiro chega como **un só grupo**, seleccionado, e a vista fai zoom para amosalo. A barra de estado indica o que entrou e enumera o que non se puido importar, como «Non importado: 2 texturas».

3. Para traballar directamente sobre a súa xeometría, faga dobre clic no grupo para editar dentro del, ou prema {{ui:Desagrupar}}.

Algunhas cousas que hai que saber:

- **Tamaño e dirección cara arriba:** os ficheiros Collada indican a súa unidade e cal eixe é o vertical, e ModelCraft convérteos. glTF está sempre en metros. Os ficheiros OBJ non levan unidade: ModelCraft léos como metros, con Y cara arriba. Se un OBJ entra 1000 veces máis grande ou máis pequeno, use [Escalar](topic:rotate-scale) cun factor como `0.001` ou `1000`.
- **DWG e DXF** entran como liñas (bordos) sobre o chan, non como caras. Se o debuxo non indica a súa unidade, un diálogo titulado «Unidades do debuxo» pregunta cal é unha unidade do debuxo. Consulte [Modelar sobre un plano de situación](topic:site-plan).
- **Límites:** rexéitanse para importar os ficheiros de máis de 300 MB, e para abrir os de máis de 200 MB. Rexéitanse por demasiado grandes os ficheiros con máis de 2 millóns de vértices ou caras.

## Exportar

1. Prema {{ui:Exportar}} no grupo {{ui:Ficheiro}}.
2. Escolla un formato: {{ui:glTF binario (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL para impresión (.stl, milímetros)}}, {{ui:PLY con cores (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC para BimCraft (.ifc)}}, {{ui:DWG para CAD (.dwg, 2004)}} ou {{ui:DXF para CAD (.dxf, R12)}}.

O navegador descarga o ficheiro, co nome do modelo. Exporta todo o modelo, non só a selección. Un modelo baleiro non se exporta: «O modelo está baleiro: debuxe algo primeiro.» Consulte [Exportar un modelo para outros programas](topic:export-model).

## En liña e sen conexión

Todo en ModelCraft funciona no seu ordenador, así que modelar, abrir, gardar, importar e exportar funcionan todos sen conexión unha vez cargada a aplicación.

Para abrir ModelCraft sen conexión ningunha, gárdeo para usar sen conexión mentres está en liña:

1. Prema {{ui:Gardar para usar sen conexión}} na barra de aplicación superior.
2. O botón vai contando («Gardando 40 de 212») mentres garda. ModelCraft garda os seus propios ficheiros (entre eles o seu lector DWG), esta axuda e a biblioteca 3D, así que pode tardar un pouco.
3. Cando o botón diga {{ui:Listo sen conexión}}, ModelCraft ábrese desde o mesmo enderezo sen conexión, e a importación DWG tamén funciona sen conexión.

Prema despois {{ui:Listo sen conexión}} para {{ui:Gardar de novo (obter a versión máis recente)}} ou {{ui:Quitar a copia sen conexión}}. Se o botón indica {{ui:Non se puido gardar}}, algúns ficheiros non se descargaron: comprobe a conexión e prema de novo para tentalo. {{ui:Sen copia sen conexión}} significa que esta ventá do navegador non pode conservar unha copia (ventás privadas e algúns ordenadores xestionados). Consulte [Traballar sen conexión](common:offline).

O gardado na nube aínda non está dispoñible. Cada modelo está onde o garda.

:::offline
Está sen conexión. Pode seguir modelando e gardando. Salvo que a barra de aplicación mostre {{ui:Listo sen conexión}}, non recargue esta lapela ata que estea de novo en liña.
:::

## Aplicación de escritorio

:::desktop
Está usando ModelCraft en CadCraft Studio, a aplicación de escritorio con as oito aplicacións. Os ficheiros ábrense e gárdanse onde escolla.
:::

:::web
ModelCraft funciona no navegador en Mac, Windows e Linux, e en CadCraft Studio, a aplicación de escritorio con as oito aplicacións nunha soa instalación, desde getcadcraft.com/download.
:::
