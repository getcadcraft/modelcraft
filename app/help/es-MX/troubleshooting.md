---
title: Solución de problemas
summary: Síntomas, causas y soluciones, desde una vista 3D en blanco hasta importaciones con tamaño incorrecto, con los mensajes que muestra ModelCraft.
keywords: problema, error, no funciona, en blanco, webgl, gráficos, lento, mensaje, importación fallida, tamaño incorrecto, no se puede seleccionar, táctil, teclas no funcionan, trabajo perdido
from: 6e7394be
---

## La vista 3D está en blanco

**Síntoma:** el centro de la pantalla queda vacío, o muestra solo el color de fondo, y hacer clic en las herramientas no hace nada.

**Causa:** ModelCraft dibuja con WebGL 2, los gráficos 3D del navegador. Falta cuando el navegador es antiguo, cuando la aceleración por hardware está desactivada o cuando el controlador gráfico está bloqueado.

**Solución:**

:::chromium
1. Abra la configuración del navegador y busque "aceleración de gráficos".
2. Active "Usar la aceleración de gráficos cuando esté disponible" y reinicie el navegador.
3. Si ya está activada, escriba `chrome://gpu` en la barra de direcciones (`edge://gpu` en Edge) y busque "WebGL2" en la lista. Si dice que está deshabilitado, actualice el controlador gráfico.
:::

:::firefox
1. Abra **Configuración**, luego **General**, y desplácese hasta "Rendimiento".
2. Desmarque "Usar la configuración de rendimiento recomendada", luego marque "Usar la aceleración por hardware cuando esté disponible". Reinicie Firefox.
3. Si sigue fallando, escriba `about:support` en la barra de direcciones y revise la sección "Gráficos" para WebGL 2.
:::

:::safari
Actualice macOS y Safari. Las versiones recientes de Safari siempre tienen WebGL 2 activado. Si cambió las funciones experimentales en **Safari**, luego **Configuración**, luego **Avanzado** (o **Funciones experimentales**), restablézcalas.
:::

En un equipo de trabajo, escritorio remoto o máquina virtual, los gráficos 3D pueden estar bloqueados por una política. Pruebe con otro equipo. Vea [Navegadores y equipos](common:browsers).

## Las teclas no hacen nada, o escriben en un cuadro

**Causa:** el foco del teclado está en un campo de un panel: la lista {{ui:Caras}} en {{ui:Estilo}}, un ajuste del sol, el campo {{ui:Nombre}} en {{ui:Información de entidad}}, o el selector de unidades. Las letras y las teclas de flecha van entonces a ese campo.

**Solución:** haga clic en la vista 3D y pulse la tecla de nuevo. Las teclas tampoco funcionan mientras hay un cuadro de diálogo abierto.

## Escribir un número no hace nada

- **Todavía no hay dirección.** Una longitud escrita va en la dirección en que apunta el puntero desde el primer clic. Mueva el puntero un poco en la dirección que quiera y luego escriba.
- **Momento equivocado.** La mayoría de las herramientas aceptan un valor escrito solo después del primer clic: haga clic en la primera esquina, en la cara o en el punto desde el que se desplaza primero. {{ui:Círculo}} y {{ui:Polígono}} aceptan un número de lados antes del primer clic.
- **"Escriba una longitud como 3m, 10'6" o 4m,3m."** ModelCraft no pudo leerla. Revise si hay una coma decimal (`2,5`): use un punto.

## Una forma empieza en el lugar equivocado en una pantalla táctil

**Síntoma:** con un dedo, el primer rectángulo está bien, pero el siguiente rectángulo, círculo o línea empieza donde terminó su toque anterior, en lugar de donde tocó.

**Causa:** un error de esta versión: en una pantalla táctil la herramienta recuerda el último punto de referencia del gesto anterior.

**Solución:** toque de nuevo el botón de la herramienta en la barra de herramientas antes de cada forma nueva. Eso reinicia la herramienta, y el primer punto cae donde toca.

## Al editar un grupo cambió otro

**Síntoma:** copió un grupo con {{ui:Desplazar}} y {{key:Ctrl}}, abrió una copia y la editó, y la otra copia también cambió. El {{ui:Esquema}} muestra ambas con el mismo nombre.

**Causa:** en esta versión, copiar un grupo crea una segunda colocación del mismo grupo, igual que con un componente. El botón {{ui:Hacer único}} de ModelCraft solo se ofrece para componentes.

**Solución:** seleccione la copia que quiera cambiar, haga clic en {{ui:Crear componente}} en {{ui:Información de entidad}} y luego en {{ui:Hacer único}}. Esa copia tendrá ahora su propio contenido. O bien, {{ui:Descomponer}} la copia.

## Empujar/tirar no hace lo que esperaba

- **"Empujar/tirar funciona sobre una cara. Haga clic en una cara."** Hizo clic en una arista o en un espacio vacío. Mueva el puntero hasta que la cara se resalte y luego haga clic.
- **La cara está dentro de un grupo.** Haga doble clic en el grupo para abrirlo primero.
- **Una ventana no atravesó el muro.** El rectángulo debe dibujarse sobre la cara del muro, no delante de ella, y el muro debe tener una cara trasera. Vea [Cortar una abertura en un muro](topic:openings#if-it-did-not-cut-through).
- **Dos cajas se superponen sin unirse.** Los sólidos empujados uno contra otro no se cortan ni se unen en esta versión.

## Una línea o forma no creó una cara

Una cara se rellena solo cuando las aristas cierran un bucle plano. Compruebe que el último punto se haya ajustado al primero ("Punto final") y que todas las aristas estén en un mismo plano. Un bucle ligeramente fuera de plano queda como líneas. Dibuje de nuevo una de sus aristas, ajustándola a las esquinas.

## No puedo seleccionar ni borrar una cara

- Con {{ui:Seleccionar}}, un clic cerca de una arista toma la arista. Haga clic más cerca del centro de la cara.
- El {{ui:Borrador}} no selecciona caras. Seleccione la cara y pulse {{key:Delete}}, o borre una de sus aristas.
- Si pertenece a un grupo o componente, el clic selecciona todo el conjunto. Haga doble clic para abrirlo.

## "Seleccione primero algo que mover, o haga clic en ello."

{{ui:Desplazar}}, {{ui:Girar}} y {{ui:Escalar}} necesitan algo sobre lo que trabajar: selecciónelo primero, o inicie la herramienta haciendo clic en el objeto mismo (no en un espacio vacío ni en una guía).

## "Seleccione primero algo de geometría (arrastre un recuadro, o haga triple clic para seleccionar todo lo conectado)."

{{key:G}} y {{key:Shift+G}} necesitan una selección. Las guías no se pueden agrupar.

## Las teclas de flecha orbitan en lugar de bloquear

Los bloqueos funcionan solo después del primer clic de una herramienta de dibujo o edición. {{ui:Empujar/tirar}} no tiene bloqueos, y en {{ui:Girar}} no cambian el giro. En otros momentos, las teclas de flecha orbitan la vista.

## Esc en pantalla completa

En pantalla completa, el navegador puede usar el primer {{key:Esc}} para salir de pantalla completa. Pulse {{key:Esc}} de nuevo para cancelar la herramienta.

## Sin botón central

Pulse {{key:O}} para {{ui:Órbita}} y arrastre, o use las teclas de flecha. Vea [Órbita, encuadre y zoom](topic:orbit-pan-zoom#without-a-middle-button).

## Importaciones

| Mensaje | Qué hacer |
|---|---|
| "ModelCraft importa SketchUp (.skp), Collada (.dae), OBJ, glTF (.glb/.gltf), FBX, PLY, STL, Alembic (.abc), DWG y DXF. … no es ninguno de estos." | Exporte el modelo desde el otro programa en uno de estos formatos |
| "Este archivo supera los 300 MB." | Simplifique o divida el modelo en el otro programa |
| "…demasiado grande para modelar aquí (más de 2 millones de vértices)." | Lo mismo |
| "Este archivo .gltf necesita "…"…" | Suelte el `.gltf` junto con sus archivos `.bin` y de texturas, o abra la versión `.glb` |
| "Este archivo glTF necesita la extensión …, que ModelCraft todavía no lee." | Vuelva a exportar desde el otro programa sin esa extensión (por ejemplo, las texturas KTX2) |
| Un OBJ se importa sin sus colores o texturas | Suelte el `.obj` junto con su `.mtl` y sus imágenes |
| "Este archivo Alembic usa el diseño antiguo HDF5…" | Guárdelo de nuevo desde el otro programa como archivo Ogawa Alembic |
| Un FBX se importa sin sus texturas | Suelte el `.fbx` junto con sus imágenes de textura, o incruste los medios al exportar |
| "Este archivo FBX es la versión …, que ModelCraft no lee" | Vuelva a exportar como FBX 2011 o posterior |
| Un STL o PLY se importa 1,000 veces más grande o más pequeño | El STL se lee en milímetros y el PLY en metros: escálelo (vea [Girar y escalar](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)) |
| "Este no es un archivo Collada (.dae)…" o "…no está bien formado como XML…" | El archivo está dañado o no es Collada. Expórtelo de nuevo |
| "Este archivo Collada no tiene geometría que ModelCraft pueda importar." | Solo contiene cámaras, luces o referencias a otros archivos |
| "Este es un DXF binario. Guárdelo como DXF ASCII e intente de nuevo." | Guárdelo de nuevo desde el programa CAD como ASCII |
| "Este no es un dibujo DWG…" | El archivo no es un DWG, o está dañado |
| "No se pudo leer este dibujo (…). Puede estar dañado, o guardado en una versión de DWG que el lector no maneja…" | Los paréntesis indican la causa. Guárdelo como DXF, o como DWG de AutoCAD 2000 a 2018, desde el programa CAD |
| "Este dibujo se extiende a más de 10,000 km de su origen…" | Mueva el dibujo cerca de 0,0 en el programa CAD |

### La importación tiene el tamaño incorrecto o está acostada

- **OBJ:** OBJ no tiene unidad; ModelCraft lee metros. Un modelo en milímetros se importa 1,000 veces más grande: [escálelo](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size) por `0.001`; un modelo en pulgadas, por `0.0254`.
- **OBJ acostado:** ModelCraft espera archivos OBJ con Y hacia arriba. Un archivo escrito con Z hacia arriba se importa acostado. Gírelo 90° alrededor del rojo: haga clic en el centro de {{ui:Girar}} sobre una cara que mire a lo largo del rojo, o abra el archivo en su programa y exporte con Y hacia arriba.
- **DWG o DXF:** elegió una unidad incorrecta en el cuadro "Unidades del dibujo". Deshaga y vuelva a importar.

## Abrir archivos

| Mensaje | Qué hacer |
|---|---|
| "Este archivo no es un modelo de ModelCraft (no es JSON)." | Use {{ui:Importar}} para otros formatos |
| "Este no es un archivo de ModelCraft que podamos abrir: …" | El archivo está dañado o fue modificado a mano |
| "Este modelo lo guardó una versión más nueva de ModelCraft…" | Ábralo en la versión más nueva |
| "Este archivo supera los 200 MB." | El modelo es demasiado grande para abrirlo aquí |

## Perdí trabajo

ModelCraft no guarda en un archivo por sí mismo. Cuando cierra o recarga una pestaña con cambios sin guardar, el navegador pregunta primero ("¿Salir del sitio?" o "¿Recargar el sitio?"); elija quedarse y guardar. Nuevo y Abrir también preguntan ("Cambios sin guardar"). Si el navegador o el equipo se bloquearon, vuelva a abrir ModelCraft en el mismo navegador: ofrece de nuevo el trabajo sin guardar ("¿Recuperar su trabajo?"; vea [Recuperar su trabajo](common:recover)). Guarde con frecuencia con {{key:Mod+S}}.

## Mi carpeta de descargas se llena de copias

Cada guardado es una nueva descarga, con nombres como `Untitled (1).modelcraft`, `Untitled (2).modelcraft` y así sucesivamente. Borre las antiguas, o configure el navegador para que pregunte dónde guardar cada archivo y sobrescriba el archivo anterior usted mismo. Vea [Abrir, guardar, importar y exportar](topic:files#save-a-model).

## Se vuelve lento

- Cada paso de deshacer guarda una copia del modelo (una [malla](topic:meshes) solo guarda lo que cambió), así que en una importación muy grande de geometría empujada/tirada cada edición tarda más. Descomponga o borre lo que no necesite, guarde y vuelva a abrir: al reabrir también se borra el historial de deshacer.
- Las sombras del sol son lo más costoso. Desactive {{ui:Sombras del sol}} mientras modela.

## No hay sombras

{{ui:Sombras del sol}} está desactivado, el sol está bajo el horizonte a la hora que eligió ("El sol está bajo el horizonte a esta hora."), o el estilo es {{ui:Estructura alámbrica}}, que no dibuja sombras.

## "Este navegador no permitió pantalla completa."

Algunos navegadores y algunas vistas integradas no permiten pantalla completa. Use en su lugar la pantalla completa del propio navegador ({{pick:mac=Control-Command-F|windows linux=F11}}).

## ModelCraft no abre sin conexión

ModelCraft abre sin conexión solo si se guardó para usar sin conexión en ese navegador: el botón de la barra de la aplicación debe decir {{ui:Lista sin conexión}}. Ábralo con conexión y haga clic en {{ui:Guardar para usar sin conexión}}. Si el botón dice {{ui:No se pudo guardar}}, haga clic de nuevo con una mejor conexión; {{ui:Sin conexión no disponible}} significa que esta ventana (una ventana privada o un equipo administrado) no puede guardar una copia. Vea [Trabajar sin conexión](common:offline).
