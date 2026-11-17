---
title: Si venís de otros modeladores
summary: Cómo los hábitos de modelado con empujar/tirar se trasladan a ModelCraft, tecla por tecla, y las diferencias que sorprenden a la gente.
keywords: cambio, migrar, familiar, diferencias, modelador empujar tirar, skp, atajos, hábitos, comparar, caja de medidas, esquema, información de entidad
from: 74ffd4ac
---

Si modelaste en SketchUp, ModelCraft te va a resultar familiar: la misma idea de caras y de empujar/tirar, las mismas letras de herramientas, una caja de valores donde escribís sin hacer clic, inferencia con los ejes rojo, verde y azul, grupos, componentes, un esquema de objetos, información de entidad y escenas. Esta página lista lo que se traslada directamente y, más importante, lo que no.

## Hábitos que se mantienen

| Estás acostumbrado a | En ModelCraft |
|---|---|
| Apretar Space para Seleccionar, L Línea, R Rectángulo, C Círculo | Lo mismo: {{key:Space}}, {{key:L}}, {{key:R}}, {{key:C}} |
| Apretar P Empujar/tirar, M Mover, Q Rotar, S Escalar, E Goma, T Cinta métrica | Lo mismo: {{key:P}}, {{key:M}}, {{key:Q}}, {{key:S}}, {{key:E}}, {{key:T}} |
| Apretar O Orbitar, H Desplazar, Z Zoom, Shift+Z Zoom a todo | Lo mismo: {{key:O}}, {{key:H}}, {{key:Z}}, {{key:Shift+Z}} |
| Apretar G para hacer un componente | Lo mismo: {{key:G}}. {{key:Shift+G}} hace un grupo |
| Escribir en la caja de Medidas sin hacer clic en ella | Lo mismo, en la caja de valores abajo. Apretá {{key:Enter}} |
| Escribir `4m,3m` para un rectángulo, `12s` para lados | Lo mismo |
| Escribir `3x` o `/3` después de un Mover copia | Lo mismo; `*3` también funciona |
| Escribir `[x,y,z]` o `<dx,dy,dz>` para un punto o desplazamiento | Lo mismo |
| Escribir un número simple en un modelo en pulgadas arquitectónicas y obtener pulgadas | Lo mismo |
| Arrastrar con el botón del medio para orbitar, Shift + botón del medio para desplazar, rueda para hacer zoom en el cursor | Lo mismo |
| Doble clic con Empujar/tirar para repetir la distancia | Lo mismo |
| Teclas de flecha para fijar rojo, verde, azul y paralelo | Lo mismo: {{key:Right}} rojo, {{key:Left}} verde, {{key:Up}} azul, {{key:Down}} paralelo |
| Mantener Shift para fijar una inferencia | Lo mismo |
| Ctrl (Option en un Mac) para copiar mientras movés | {{key:Ctrl}}, {{key:Mod}} o {{key:Alt}}, en cualquier computadora |
| Shift para alternar, Ctrl para agregar, Shift+Ctrl para quitar de la selección | Las mismas teclas; en un Mac usá {{key:Mod}} donde dice Ctrl |
| Ventana de izquierda a derecha, cruce de derecha a izquierda | Lo mismo |
| Una herramienta de Cota para rotular longitudes | {{key:D}}, y más: escribí una longitud nueva en una cota y el modelo se redimensiona. Ver [Cota y redimensionar](topic:dimensions) |
| Doble clic en una cara para cara más aristas; triple clic para todo lo conectado | Lo mismo |
| Doble clic en un grupo para editarlo; Esc para cerrar | Lo mismo |
| Dibujar una línea sobre una cara para partirla; borrar una arista entre caras coplanares para unirlas | Lo mismo |
| Empujar un rectángulo de ventana a través de un muro para cortarlo | Lo mismo |
| Caras de atrás en gris azulado; Invertir caras | El mismo color; {{ui:Cara ojejapova'ekue}} en {{ui:Información de entidad}} |
| Escenas como pestañas sobre la vista, Page Up y Page Down | Lo mismo, con {{ui:Reproducir}} en el panel {{ui:Escenas}} |
| Sombras según fecha, hora, latitud y longitud, con el norte en verde | Lo mismo, en el panel {{ui:Estilo}} |

## Diferencias que sorprenden

### Guardar es una descarga

No hay un Guardar que sobrescriba el archivo que abriste, ni un diálogo de Guardar como con nombre, ni guardado automático, ni archivo de copia de seguridad. {{ui:Guardar}} ({{key:Mod+S}}) descarga un archivo `.modelcraft` nuevo cada vez, normalmente a tu carpeta de descargas. Guardá seguido, y renombrá o mové los archivos vos mismo. Ver [Abrir, guardar, importar y exportar](topic:files).

### Importa archivos .skp, pero no los guarda

{{ui:Importar}} lee archivos de SketchUp con el lector propio de ModelCraft, dentro de la página: los grupos, componentes, colores, texturas en caras, etiquetas y aristas suaves llegan bien. Ver [Formatos de archivo en detalle](topic:formats#skp-files). ModelCraft no puede guardar `.skp`: para volver, exportá Collada desde ModelCraft e importalo en SketchUp.

### No hay menú de clic derecho

Arrastrar con el botón derecho desplaza; un clic derecho no hace nada. Los comandos que buscarías en el menú contextual están en {{ui:Información de entidad}} ({{ui:Cara ojejapova'ekue}}, {{ui:Editar}}, {{ui:Descomponer}}, {{ui:Ojapo peteĩ}}, {{ui:Ojapo componente}}) y en el grupo {{ui:Organizar}} de la barra de herramientas.

### Las unidades están en la barra de estado

No hay Información del modelo ni elección de plantilla. El selector de unidades está abajo a la derecha. Un modelo nuevo empieza en pies y pulgadas en Estados Unidos y en milímetros en otros lugares, según el idioma de tu navegador. Los decimales siempre llevan punto: `2.5m`, nunca `2,5m`, porque la coma siempre separa valores.

### La pintura tiene sus propios materiales

{{ui:Pintar}} ({{key:B}}) pinta colores sólidos y los materiales de la sección {{ui:Materiales}}: ladrillo, revestimiento, techado, madera, piedra y más, dibujados por ModelCraft. Todavía no podés cargar tu propia imagen como material; las texturas que llegan con archivos importados se mantienen. Ver [Pintar con colores y materiales](topic:paint).

### Escalar es uniforme, sin agarres

Escalar no muestra una caja con agarres. Hacé clic en el punto que se queda quieto, un punto de referencia, y después en el nuevo tamaño o un factor escrito. Siempre escala parejo en todas las direcciones. Para estirar en una sola dirección, empujá/tirá o mové una cara, reescribí el ancho, profundidad o altura de un grupo en {{ui:Información de entidad}}, o [redimensioná con una cota](topic:dimensions).

### Rotar elige su plano según dónde hacés clic

No hay un transportador que se pegue a las caras mientras pasás el puntero con las teclas de flecha para elegir el plano. Hacé clic en el centro sobre una cara para girar en el plano de esa cara, o en el suelo para girar alrededor de la vertical. Las teclas de flecha orbitan la vista antes del primer clic.

### Inferencia desde puntos que pasás por encima

ModelCraft se ajusta a las direcciones de los ejes desde **tu punto de inicio**, y a los puntos, aristas y caras bajo el puntero. No sigue una dirección desde un punto por el que solo pasaste el puntero (la inferencia punteada de "desde punto"). Para alinearte con una esquina lejana, fijá el eje con una tecla de flecha y pasá el puntero por esa esquina: el punto fijado se desliza para alinearse con ella. O poné una [guía](topic:guides-measure).

### Paralelo usa la arista que pasaste antes de empezar

La inferencia paralela y perpendicular usa la última arista que cruzó el puntero **antes del primer clic**, no las aristas sobre las que pasás mientras dibujás. Ver [Inferencia y ajuste](topic:inference#parallel-and-perpendicular).

### Las copias de un grupo están vinculadas

Copiar un grupo con {{ui:Mover}} hace una segunda ubicación del mismo grupo, así que editar una cambia las dos, como con los componentes. SketchUp hace grupos independientes. Ver [Solución de problemas](topic:troubleshooting#editing-one-group-changed-another).

### Espacio no desplaza

{{key:Space}} elige {{ui:Seleccionar}}, como en SketchUp. En otras aplicaciones web, mantener Space desplaza; acá no. Arrastrar con el botón derecho desplaza en su lugar.

### El scroll de dos dedos hace zoom

En un trackpad, poné {{ui:Configuración}} › {{ui:ModelCraft}} › Desplazamiento en Trackpad: dos dedos orbitan, {{key:Shift}} y dos dedos desplazan, un pellizco hace zoom. Ver [Orbitar, desplazar y hacer zoom](topic:orbit-pan-zoom#on-a-trackpad).

Si tus manos conocen las teclas de Blender y no las de SketchUp, elegí el estilo de menú {{ui:Modelador}}: {{key:G}}, {{key:R}} y {{key:S}} actúan sobre la selección a la vez, {{key:E}} extruye (empujar/tirar), {{key:Shift+D}} duplica, y una barra de menú superior (Archivo, Editar, Vista, Seleccionar, Agregar, Objeto, Malla) reemplaza la barra de herramientas. Si venís de SketchUp, el estilo {{ui:Empujar-tirar}} da una barra de menú propia sobre las mismas letras de herramientas. Ver [Menús, teclas y mouse](topic:menus-keys-and-mouse).

### Los sólidos empujados uno contra otro no se cortan

Empujar/tirar corta a través de la cara que está detrás en el mismo objeto, pero dos sólidos separados empujados uno contra otro no se intersecan. No hay Intersecar caras ni Herramientas de sólidos.

### Lo que falta

El dibujo a mano alzada, Recortar, Dividir y Cáscara externa, tus propias imágenes como materiales, las extensiones y una herramienta de diseño para hojas no están en esta versión. [Todavía no hecho](topic:not-built-yet) lista qué hacer en su lugar.

## Atajos que conserva el navegador

ModelCraft corre en un navegador, así que algunos atajos pertenecen al navegador, no a la aplicación. {{key:Mod+N}} abre una ventana del navegador (usá {{ui:Nuevo}}), y {{key:Mod+W}} cierra la pestaña. Si tenés cambios sin guardar, el navegador pregunta antes de cerrar. Ver [Teclas, mouse y trackpads](common:keys#shortcuts-the-browser-keeps).
