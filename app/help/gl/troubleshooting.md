---
title: Solución de problemas
summary: Síntomas, causas e solucións, desde unha vista 3D en branco ata importacións co tamaño incorrecto, coas mensaxes que mostra ModelCraft.
keywords: problema, incidencia, erro, non funciona, en branco, webgl, gráficos, lento, mensaxe, importación fallida, tamaño incorrecto, non se pode seleccionar, tacto, teclas non funcionan, traballo perdido
from: 6e7394be
---

## A vista 3D está en branco

**Síntoma:** o centro da pantalla queda baleiro, ou só mostra a cor de fondo, e premer nas ferramentas non fai nada.

**Causa:** ModelCraft debuxa con WebGL 2, os gráficos 3D do navegador. Falta cando o navegador é antigo, cando a aceleración por hardware está desactivada ou cando o controlador gráfico está bloqueado.

**Solución:**

:::chromium
1. Abra a configuración do navegador e busque «aceleración gráfica».
2. Active «Usar aceleración gráfica cando estea dispoñible» e reinicie o navegador.
3. Se xa está activada, escriba `chrome://gpu` na barra de enderezos (`edge://gpu` en Edge) e busque «WebGL2» na lista. Se di que está desactivado, actualice o controlador gráfico.
:::

:::firefox
1. Abra **Configuración**, despois **Xeral**, e desprácese até «Rendemento».
2. Desmarque «Usar a configuración de rendemento recomendada», despois marque «Usar aceleración por hardware cando estea dispoñible». Reinicie Firefox.
3. Se aínda falla, escriba `about:support` na barra de enderezos e vexa a sección «Gráficos» para WebGL 2.
:::

:::safari
Actualice macOS e Safari. As versións recentes de Safari teñen sempre WebGL 2 activado. Se cambiou funcións experimentais en **Safari**, despois **Configuración**, despois **Avanzado** (ou **Indicadores de funcións**), restáureas.
:::

Nun ordenador do traballo, escritorio remoto ou máquina virtual, os gráficos 3D poden estar bloqueados por política. Probe outro ordenador. Véxase [Navegadores e ordenadores](common:browsers).

## O teclado non responde, ou escribe nunha caixa

**Causa:** o foco do teclado está nun campo do panel: a lista {{ui:Faces}} en {{ui:Style}}, un axuste do sol, o campo {{ui:Name}} en {{ui:Entity info}}, ou o selector de unidades. As letras e as teclas de frecha van entón a ese campo.

**Solución:** faga clic na vista 3D e prema a tecla de novo. As teclas tampouco responden mentres hai un diálogo aberto.

## Escribir un número non fai nada

- **Aínda non hai dirección.** Unha lonxitude escrita vai na dirección que sinala o punteiro desde o primeiro clic. Mova un pouco o punteiro na dirección que queira e logo escriba.
- **Momento equivocado.** A maioría das ferramentas aceptan un valor escrito só despois do primeiro clic: faga clic na primeira esquina, na cara ou no punto desde o que se move primeiro. {{ui:Circle}} e {{ui:Polygon}} aceptan un número de lados antes do primeiro clic.
- **«Escriba unha lonxitude, como 3m, 10'6 ou 4m,3m.»** ModelCraft non a puido ler. Comprobe se hai unha coma decimal (`2,5`): use un punto.

## Unha forma comeza no lugar equivocado nunha pantalla táctil

**Síntoma:** cun dedo, o primeiro rectángulo está ben, pero o seguinte rectángulo, círculo ou liña comeza onde rematou o toque anterior, en lugar de onde tocou.

**Causa:** un erro desta versión: nunha pantalla táctil, a ferramenta lembra o último punto de encaixe do xesto anterior.

**Solución:** toque de novo o botón da ferramenta na barra de ferramentas antes de cada nova forma. Iso inicia a ferramenta desde cero, e o primeiro punto cae onde toca.

## Editar un grupo cambiou outro

**Síntoma:** copiou un grupo con {{ui:Move}} e {{key:Ctrl}}, abriu unha copia e editouna, e a outra cambiou tamén. O {{ui:Outliner}} mostra as dúas co mesmo nome.

**Causa:** nesta versión, copiar un grupo crea unha segunda colocación do mesmo grupo, como ocorre cun compoñente. O botón {{ui:Make unique}} de ModelCraft só se ofrece para os compoñentes.

**Solución:** seleccione a copia que quere cambiar, prema en {{ui:Make component}} en {{ui:Entity info}} e logo en {{ui:Make unique}}. Esa copia pasa a ter contido propio. Ou desagrúpeo con {{ui:Explode}}.

## Empurrar/tirar non fai o que esperaba

- **«Empurrar/tirar actúa sobre unha cara. Faga clic nunha cara.»** Fixo clic nun bordo ou nun espazo baleiro. Pase o punteiro ata que a cara se resalte e logo faga clic.
- **A cara está dentro dun grupo.** Faga dobre clic no grupo para abrilo primeiro.
- **Unha xanela non atravesou o muro.** O rectángulo debe debuxarse na cara do muro, non diante dela, e o muro debe ter unha cara posterior. Véxase [Cortar unha abertura nun muro](topic:openings#if-it-did-not-cut-through).
- **Dous cubos solapados sen fusionarse.** Nesta versión, os sólidos empurrados un contra o outro non se cortan nin se unen entre si.

## Unha liña ou forma non creou unha cara

Unha cara énchese só cando os bordos pechan un bucle plano. Comprobe que o último punto encaixou no primeiro («Punto final»), e que todos os bordos están nun mesmo plano. Un bucle lixeiramente fóra do plano queda como liñas. Debuxe de novo un dos seus bordos, encaixando nas esquinas.

## Non se pode seleccionar ou borrar unha cara

- Con {{ui:Select}}, un clic preto dun bordo colle o bordo. Faga clic máis cerca do centro da cara.
- A {{ui:Eraser}} non escolle caras. Seleccione a cara e prema {{key:Delete}}, ou borre un dos seus bordos.
- Se pertence a un grupo ou compoñente, o clic selecciona todo o conxunto. Faga dobre clic para abrilo.

## «Seleccione algo para mover primeiro, ou faga clic nel.»

{{ui:Move}}, {{ui:Rotate}} e {{ui:Scale}} necesitan algo sobre o que traballar: selecciónello primeiro, ou inicie a ferramenta facendo clic no propio elemento (non nun espazo baleiro nin nunha guía).

## «Seleccione primeiro algunha xeometría (arrastre unha xanela, ou faga triplo clic para seleccionar todo o conectado).»

{{key:G}} e {{key:Shift+G}} necesitan unha selección. As guías non se poden agrupar.

## As teclas de frecha orbitan en lugar de bloquear

Os bloqueos só funcionan despois do primeiro clic dunha ferramenta de debuxo ou de edición. {{ui:Push/pull}} non ten bloqueos, e en {{ui:Rotate}} non cambian o xiro. En outros momentos, as teclas de frecha orbitan a vista.

## Esc en pantalla completa

En pantalla completa, o navegador pode usar o primeiro {{key:Esc}} para saír dela. Prema {{key:Esc}} de novo para cancelar a ferramenta.

## Sen botón central

Prema {{key:O}} para {{ui:Orbit}} e arrastre, ou use as teclas de frecha. Véxase [Orbitar, desprazar e facer zoom](topic:orbit-pan-zoom#without-a-middle-button).

## Importacións

| Mensaxe | Que facer |
|---|---|
| «ModelCraft importa SketchUp (.skp), Collada (.dae), OBJ, glTF (.glb/.gltf), FBX, PLY, STL, Alembic (.abc), DWG e DXF. … non é ningún deles.» | Exporte o modelo desde o outro programa nun destes formatos |
| «Este ficheiro supera os 300 MB.» | Simplifique ou divida o modelo no outro programa |
| «…demasiado grande para modelar aquí (máis de 2 millóns de vértices).» | O mesmo |
| «Este ficheiro .gltf precisa "…"…» | Solte o `.gltf` xunto cos seus ficheiros `.bin` e de texturas, ou abra a versión `.glb` |
| «Este ficheiro glTF precisa a extensión …, que ModelCraft aínda non le.» | Exporte de novo desde o outro programa sen esa extensión (texturas KTX2, por exemplo) |
| Un OBJ entra sen as súas cores ou texturas | Solte o `.obj` xunto co seu `.mtl` e as imaxes |
| «Este ficheiro Alembic usa o antigo deseño HDF5…» | Gárdeo de novo desde o outro programa como ficheiro Ogawa Alembic |
| Un FBX entra sen as súas texturas | Solte o `.fbx` xunto coas imaxes das texturas, ou incruste os medios ao exportar |
| «Este ficheiro FBX é a versión …, que ModelCraft non le» | Exporte de novo como FBX 2011 ou posterior |
| Un STL ou PLY entra 1 000 veces máis grande ou máis pequeno | O STL léese en milímetros e o PLY en metros: escáleo (véxase [Xirar e escalar](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)) |
| «Este non é un ficheiro Collada (.dae)…» ou «…non é XML ben formado…» | O ficheiro está danado ou non é Collada. Exórteo de novo |
| «Este ficheiro Collada non ten xeometría que ModelCraft poida importar.» | Só contén cámaras, luces ou referencias a outros ficheiros |
| «Este é un DXF binario. Gárdeo como DXF ASCII e probe de novo.» | Gárdeo de novo desde o programa CAD como ASCII |
| «Este non é un debuxo DWG…» | O ficheiro non é un DWG, ou está danado |
| «Non se puido ler este debuxo (…). Pode estar danado, ou gardado nunha versión de DWG que o lector non admite…» | Os parénteses indican o motivo. Gárdeo como DXF, ou como DWG de AutoCAD 2000 a 2018, desde o programa CAD |
| «Este debuxo chega a máis de 10 000 km da súa orixe…» | Mova o debuxo preto de 0,0 no programa CAD |

### O importado ten o tamaño incorrecto ou está tumbado

- **OBJ:** o OBJ non ten unidade; ModelCraft lée metros. Un modelo en milímetros entra 1 000 veces máis grande: [escáleo](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size) con `0.001`; un modelo en polgadas, con `0.0254`.
- **OBJ tumbado:** ModelCraft espera ficheiros OBJ con Y cara arriba. Un ficheiro escrito con Z cara arriba entra tumbado. Xíreo 90° arredor do eixe vermello: faga clic no centro de {{ui:Rotate}} sobre unha cara que mire ao longo do vermello, ou abra o ficheiro no seu programa e exporte con Y cara arriba.
- **DWG ou DXF:** escolleu a unidade incorrecta no diálogo «Unidades do debuxo». Desfaga e importe de novo.

## Abrir ficheiros

| Mensaxe | Que facer |
|---|---|
| «Este ficheiro non é un modelo de ModelCraft (non é JSON).» | Use {{ui:Import}} para outros formatos |
| «Este non é un ficheiro de ModelCraft que poidamos abrir: …» | O ficheiro está danado ou foi cambiado a man |
| «Este modelo foi gardado por un ModelCraft máis recente…» | Ábrao na versión máis recente |
| «Este ficheiro supera os 200 MB.» | O modelo é demasiado grande para abrilo aquí |

## Perdín traballo

ModelCraft non garda nun ficheiro por si mesmo. Cando pecha ou recarga unha pestana con cambios sen gardar, o navegador pregunta primeiro («Saír do sitio?» ou «Recargar o sitio?»); escolla quedarse e gardar. Novo e Abrir preguntan tamén («Cambios sen gardar»). Se o navegador ou o ordenador se bloquearon, abra ModelCraft de novo no mesmo navegador: ofrécelle o traballo sen gardar («Recuperar o seu traballo?»; véxase [Recuperar o seu traballo](common:recover)). Garde a miúdo con {{key:Mod+S}}.

## O meu cartafol de descargas énchese de copias

Cada gardado é unha nova descarga, con nome `Untitled (1).modelcraft`, `Untitled (2).modelcraft` e así sucesivamente. Borre as antigas, ou configure o navegador para preguntar onde gardar cada ficheiro e sobrescriba vostede mesmo o antigo. Véxase [Abrir, gardar, importar e exportar](topic:files#save-a-model).

## Vai lento

- Cada paso de desfacer garda unha copia do modelo (unha [malla](topic:meshes) garda só o que cambiou), así que nunha importación moi grande de xeometría empurrada/tirada cada edición tarda máis. Desagrupe ou borre o que non precise, garde e reabra: reabrir tamén borra o historial de desfacer.
- As sombras do sol son as que máis custan. Desmarque {{ui:Sun shadows}} mentres modela.

## Sen sombras

{{ui:Sun shadows}} está desactivado, o sol está baixo á hora que escolleu («O sol está baixo nesta hora.»), ou o estilo é {{ui:Wireframe}}, que non debuxa sombras.

## «Este navegador non permitiu a pantalla completa.»

Algúns navegadores e algunhas vistas incrustadas non admiten a pantalla completa. Use no seu lugar a pantalla completa do propio navegador ({{pick:mac=Control-Command-F|windows linux=F11}}).

## ModelCraft non se abre sen conexión

ModelCraft só se abre sen conexión se antes se gardou para usar sen conexión nese navegador: o botón da barra da aplicación debe dicir {{ui:Offline ready}}. Ábraa estando en liña e prema en {{ui:Save for offline}}. Se o botón di {{ui:Could not save}}, prémao de novo cunha conexión mellor. {{ui:Offline not available}} significa que esta ventá (unha ventá privada, ou un ordenador xestionado) non pode gardar unha copia. Véxase [Traballar sen conexión](common:offline).
