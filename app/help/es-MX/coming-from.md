---
title: Si viene de otros modeladores
summary: Cómo los hábitos de modelado con empujar/tirar se trasladan a ModelCraft, tecla por tecla, y las diferencias que sorprenden a la gente.
keywords: cambio, migrar, familiar, diferencias, modelador empujar tirar, skp, atajos, hábitos, comparar, cuadro de medidas, outliner, información de entidad
from: 74ffd4ac
---

Si ha modelado en SketchUp, ModelCraft le resultará familiar: la misma idea de caras y empujar/tirar, las mismas letras de herramientas, una caja de valores donde escribe sin hacer clic, la inferencia con los ejes rojo, verde y azul, grupos, componentes, un Outliner, {{ui:Información de entidad}} y escenas. Esta página enumera lo que se traslada directamente y, lo más importante, lo que no.

## Hábitos que se conservan

| Está acostumbrado a | En ModelCraft |
|---|---|
| Pulse Space para {{ui:Seleccionar}}, L para Línea, R para Rectángulo, C para Círculo | Lo mismo: {{key:Space}}, {{key:L}}, {{key:R}}, {{key:C}} |
| Pulse P {{ui:Empujar/tirar}}, M {{ui:Desplazar}}, Q {{ui:Girar}}, S {{ui:Escalar}}, E {{ui:Borrador}}, T Cinta métrica | Lo mismo: {{key:P}}, {{key:M}}, {{key:Q}}, {{key:S}}, {{key:E}}, {{key:T}} |
| Pulse O Órbita, H Encuadre, Z Zoom, Shift+Z Zoom a extensión | Lo mismo: {{key:O}}, {{key:H}}, {{key:Z}}, {{key:Shift+Z}} |
| Pulse G para crear un componente | Lo mismo: {{key:G}}. {{key:Shift+G}} crea un grupo |
| Escriba en el cuadro de Medidas sin hacer clic en él | Lo mismo, en la caja de valores de abajo. Pulse {{key:Enter}} |
| Escriba `4m,3m` para un rectángulo, `12s` para lados | Lo mismo |
| Escriba `3x` o `/3` después de una copia con {{ui:Desplazar}} | Lo mismo; `*3` también funciona |
| Escriba `[x,y,z]` o `<dx,dy,dz>` para un punto o un desfase | Lo mismo |
| Escriba un número sin unidad en un modelo en pulgadas arquitectónicas y obtenga pulgadas | Lo mismo |
| Arrastre con el botón central para orbitar, Shift+arrastre con el botón central para encuadrar, rueda para hacer zoom en el cursor | Lo mismo |
| Doble clic con {{ui:Empujar/tirar}} para repetir la distancia | Lo mismo |
| Teclas de flecha para bloquear rojo, verde, azul y paralelo | Lo mismo: {{key:Right}} rojo, {{key:Left}} verde, {{key:Up}} azul, {{key:Down}} paralelo |
| Mantenga Shift para bloquear una inferencia | Lo mismo |
| Ctrl (Option en Mac) para copiar mientras mueve | {{key:Ctrl}}, {{key:Mod}} o {{key:Alt}}, en cualquier computadora |
| Shift para alternar, Ctrl para agregar, Shift+Ctrl para quitar de la selección | Las mismas teclas; en un Mac use {{key:Mod}} donde dice Ctrl |
| Ventana de izquierda a derecha, captura de derecha a izquierda | Lo mismo |
| Una herramienta Cota para rotular longitudes | {{key:D}}, y más: escriba una nueva longitud en una cota y el modelo se redimensiona a ella. Vea [Acotar y cambiar tamaño](topic:dimensions) |
| Doble clic en una cara para cara más aristas; triple clic para todo lo conectado | Lo mismo |
| Doble clic en un grupo para editarlo; Esc para cerrar | Lo mismo |
| Dibuje una línea sobre una cara para dividirla; borre una arista entre caras coplanares para repararlas | Lo mismo |
| Empuje un rectángulo de ventana a través de un muro para cortarlo | Lo mismo |
| Caras posteriores en gris azulado; Invertir caras | El mismo color; {{ui:Invertir cara}} en {{ui:Información de entidad}} |
| Escenas como pestañas sobre la vista, Page Up y Page Down | Lo mismo, con {{ui:Reproducir}} en el panel {{ui:Escenas}} |
| Sombras según fecha, hora, latitud y longitud, con el norte en verde | Lo mismo, en el panel {{ui:Estilo}} |

## Diferencias que sorprenden

### Guardar es una descarga

No hay un {{ui:Guardar}} que sobrescriba el archivo que abrió, ni un cuadro de diálogo Guardar como con nombre, ni guardado automático ni archivo de respaldo. {{ui:Guardar}} ({{key:Mod+S}}) descarga un archivo `.modelcraft` nuevo cada vez, normalmente a su carpeta de descargas. Guarde con frecuencia, y cambie el nombre o mueva los archivos usted mismo. Vea [Abrir, guardar, importar y exportar](topic:files).

### Importa archivos .skp, pero no los guarda

{{ui:Importar}} lee archivos de SketchUp con el lector propio de ModelCraft, dentro de la página: grupos, componentes, colores, texturas en las caras, etiquetas y aristas suaves se transfieren. Vea [Formatos de archivo en detalle](topic:formats#skp-files). ModelCraft no puede guardar `.skp`: para regresar, exporte Collada desde ModelCraft e impórtelo en SketchUp.

### No hay menú de clic derecho

Arrastrar con el botón derecho encuadra; un clic derecho no hace nada. Los comandos que encontraría en el menú contextual están en {{ui:Información de entidad}} ({{ui:Invertir cara}}, {{ui:Edición}}, {{ui:Descomponer}}, {{ui:Hacer único}}, {{ui:Crear componente}}) y en el grupo {{ui:Organizar}} de la barra de herramientas.

### Las unidades están en la barra de estado

No hay Información del modelo ni elección de plantilla. El selector de unidades está abajo a la derecha. Un modelo nuevo empieza en pies y pulgadas en Estados Unidos y en milímetros en los demás países, según el idioma de su navegador. Los decimales siempre llevan punto: `2.5m`, nunca `2,5m`, porque la coma siempre separa valores.

### Pintar tiene sus propios materiales

{{ui:Pintar}} ({{key:B}}) pinta colores sólidos y los materiales de la sección {{ui:Materiales}}: ladrillo, revestimiento, techado, madera, piedra y más, dibujados por ModelCraft. Todavía no puede cargar su propia imagen como material; las texturas que llegan con archivos importados se conservan. Vea [Pintar con colores y materiales](topic:paint).

### Escalar es uniforme, sin pinzamientos

Escalar no muestra una caja con pinzamientos. Haga clic en el punto que se queda fijo, un punto de referencia, y luego en el nuevo tamaño o en un factor escrito. Siempre escala de forma uniforme en todas las direcciones. Para estirar en una sola dirección, empuje/tire o desplace una cara, vuelva a escribir el ancho, la profundidad o la altura de un grupo en {{ui:Información de entidad}}, o [cambie el tamaño con una cota](topic:dimensions).

### Girar elige su plano según dónde hace clic

No hay un transportador que se pegue a las caras mientras pasa el cursor con las teclas de flecha para elegir el plano. Haga clic en el centro sobre una cara para girar en el plano de esa cara, o sobre el suelo para girar alrededor de la vertical. Las teclas de flecha orbitan la vista antes del primer clic.

### Inferencia desde puntos sobre los que pasa

ModelCraft ajusta a las direcciones de los ejes desde **su punto de inicio**, y a puntos, aristas y caras bajo el puntero. No rastrea una dirección desde un punto sobre el que solo pasó (la inferencia punteada de «desde punto»). Para alinearse con una esquina lejana, bloquee el eje con una tecla de flecha y pase el cursor sobre esa esquina: el punto bloqueado se desliza para alinearse con ella. O coloque una [guía](topic:guides-measure).

### Paralelo usa la arista por la que pasó antes de empezar

La inferencia paralela y perpendicular usa la última arista que cruzó el puntero **antes del primer clic**, no las aristas sobre las que pasa mientras dibuja. Vea [Inferencia y referencias](topic:inference#parallel-and-perpendicular).

### Las copias de un grupo están vinculadas

Copiar un grupo con {{ui:Desplazar}} crea una segunda colocación del mismo grupo, así que al editar una se cambian ambas, como con los componentes. SketchUp hace independientes a los grupos. Vea [Solución de problemas](topic:troubleshooting#editing-one-group-changed-another).

### Space no encuadra

{{key:Space}} elige {{ui:Seleccionar}}, como en SketchUp. En algunas otras aplicaciones web, mantener Space encuadra; aquí no. En cambio, arrastre con el botón derecho para encuadrar.

### El desplazamiento con dos dedos hace zoom

En un trackpad, defina {{ui:Configuración}} › {{ui:ModelCraft}} › Desplazamiento en Trackpad: dos dedos orbitan, {{key:Shift}} y dos dedos encuadran, un pellizco hace zoom. Vea [Órbita, encuadre y zoom](topic:orbit-pan-zoom#on-a-trackpad).

Si sus manos conocen las teclas de Blender en lugar de las de SketchUp, elija el estilo de menú {{ui:Modelador}}: {{key:G}}, {{key:R}} y {{key:S}} actúan sobre la selección a la vez, {{key:E}} extruye (empujar/tirar), {{key:Shift+D}} duplica, y una barra de menú superior (Archivo, Edición, Vista, Seleccionar, Agregar, Objeto, Malla) reemplaza la barra de herramientas. Si viene de SketchUp, el estilo {{ui:Empujar/tirar}} ofrece una barra de menú propia sobre las mismas letras de herramientas. Vea [Menús, teclas y ratón](topic:menus-keys-and-mouse).

### Los sólidos empujados uno contra otro no se cortan

Empujar/tirar atraviesa la cara que está detrás en el mismo objeto, pero dos sólidos separados empujados uno contra otro no se intersecan. No hay Intersecar caras ni Herramientas de sólidos.

### Lo que falta

A mano alzada, Recortar, Dividir y Carcasa exterior, materiales de imagen propios, extensiones y una herramienta de presentación para hojas no están en esta versión. [Aún no construido](topic:not-built-yet) enumera qué hacer en su lugar.

## Atajos que conserva el navegador

ModelCraft funciona en un navegador, así que algunos atajos pertenecen al navegador, no a la aplicación. {{key:Mod+N}} abre una ventana del navegador (use {{ui:Nuevo}}), y {{key:Mod+W}} cierra la pestaña. Si tiene cambios sin guardar, el navegador pregunta antes de cerrar. Vea [Teclas, ratones y trackpads](common:keys#shortcuts-the-browser-keeps).
