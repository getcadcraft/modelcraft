---
title: Si viene de otros modeladores
summary: Cómo los hábitos de modelado por empujar y tirar se trasladan a ModelCraft, tecla por tecla, y las diferencias que sorprenden a la gente.
keywords: cambio, migrar, familiar, diferencias, modelador push pull, skp, atajos, hábitos, comparar, cuadro de medidas, organizador, información de entidad
from: 74ffd4ac
---

Si ha modelado en SketchUp, ModelCraft le resultará familiar: la misma idea de caras y de empujar/tirar, las mismas letras de herramientas, un cuadro de valores en el que escribe sin hacer clic, inferencia con los ejes rojo, verde y azul, grupos, componentes, un Organizador, Información de entidad y escenas. Esta página indica qué se traslada directamente y, más importante, qué no.

## Hábitos que se mantienen

| Está acostumbrado a | En ModelCraft |
|---|---|
| Pulse Espacio para Seleccionar, L Línea, R Rectángulo, C Círculo | Lo mismo: {{key:Space}}, {{key:L}}, {{key:R}}, {{key:C}} |
| Pulse P Empujar/tirar, M Desplazar, Q Girar, S Escalar, E Borrador, T Cinta métrica | Lo mismo: {{key:P}}, {{key:M}}, {{key:Q}}, {{key:S}}, {{key:E}}, {{key:T}} |
| Pulse O Orbitar, H Panorámica, Z Zoom, Mayús+Z Zoom extensión | Lo mismo: {{key:O}}, {{key:H}}, {{key:Z}}, {{key:Shift+Z}} |
| Pulse G para crear un componente | Lo mismo: {{key:G}}. {{key:Shift+G}} crea un grupo |
| Escribir en el cuadro de medidas sin hacer clic en él | Lo mismo, en el cuadro de valores de la parte inferior. Pulse {{key:Enter}} |
| Escribir `4m,3m` para un rectángulo, `12s` para lados | Lo mismo |
| Escribir `3x` o `/3` tras una copia con Desplazar | Lo mismo; `*3` también funciona |
| Escribir `[x,y,z]` o `<dx,dy,dz>` para un punto o un desplazamiento | Lo mismo |
| Escribir un número sin unidad en un modelo arquitectónico en pulgadas y obtener pulgadas | Lo mismo |
| Arrastrar con el botón central para orbitar, Mayús+arrastrar con el central para panorámica, rueda para zoom en el cursor | Lo mismo |
| Doble clic con Empujar/tirar para repetir la distancia | Lo mismo |
| Teclas de flecha para bloquear rojo, verde, azul y paralelo | Lo mismo: {{key:Right}} rojo, {{key:Left}} verde, {{key:Up}} azul, {{key:Down}} paralelo |
| Mantener Mayús para bloquear una inferencia | Lo mismo |
| Ctrl (Opción en un Mac) para copiar al mover | {{key:Ctrl}}, {{key:Mod}} o {{key:Alt}}, en cualquier equipo |
| Mayús para alternar, Ctrl para añadir, Mayús+Ctrl para quitar de la selección | Las mismas teclas; en un Mac use {{key:Mod}} donde dice Ctrl |
| Ventana de izquierda a derecha, cruce de derecha a izquierda | Lo mismo |
| Una herramienta Cota para acotar longitudes | {{key:D}}, y más: escriba una nueva longitud en una cota y el modelo se redimensiona a ella. Véase [Cota y redimensionar](topic:dimensions) |
| Doble clic en una cara para la cara más las aristas; triple clic para todo lo conectado | Lo mismo |
| Doble clic en un grupo para editarlo; Esc para cerrar | Lo mismo |
| Dibujar una línea sobre una cara para dividirla; borrar una arista entre caras coplanares para unirlas | Lo mismo |
| Empujar un rectángulo de ventana a través de un muro para recortarlo | Lo mismo |
| Caras posteriores en gris azulado; Invertir caras | El mismo color; {{ui:Invertir cara}} en {{ui:Información de entidad}} |
| Escenas como pestañas sobre la vista, Re Pág y Av Pág | Lo mismo, con {{ui:Reproducir}} en el panel {{ui:Escenas}} |
| Sombras según la fecha, la hora, la latitud y la longitud, con el norte en verde | Lo mismo, en el panel {{ui:Estilo}} |

## Diferencias que sorprenden

### Guardar es una descarga

No hay un Guardar que sobrescriba el archivo que abrió, ni un cuadro de diálogo Guardar como con un nombre, ni autoguardado, ni archivo de copia de seguridad. {{ui:Guardar}} ({{key:Mod+S}}) descarga cada vez un nuevo archivo `.modelcraft`, normalmente en su carpeta de descargas. Guarde con frecuencia, y renombre o mueva los archivos usted mismo. Véase [Abrir, guardar, importar y exportar](topic:files).

### Importa archivos .skp, pero no los guarda

{{ui:Importar}} lee archivos de SketchUp con el lector propio de ModelCraft, en la página: grupos, componentes, colores, texturas en las caras, etiquetas y aristas suaves se conservan. Véase [Formatos de archivo en detalle](topic:formats#skp-files). ModelCraft no puede guardar `.skp`: para volver atrás, exporte Collada desde ModelCraft e impórtelo en SketchUp.

### No hay menú contextual con clic derecho

Arrastrar con el botón derecho desplaza la vista; un clic derecho no hace nada. Los comandos que encontraría en el menú contextual están en {{ui:Información de entidad}} ({{ui:Invertir cara}}, {{ui:Edición}}, {{ui:Descomponer}}, {{ui:Hacer único}}, {{ui:Crear componente}}) y en el grupo {{ui:Organizar}} de la barra de herramientas.

### Las unidades están en la barra de estado

No hay Información del modelo ni selección de plantilla. El selector de unidades está en la parte inferior derecha. Un modelo nuevo empieza en pies y pulgadas en Estados Unidos y en milímetros en el resto, según el idioma de su navegador. Los decimales siempre llevan punto: `2.5m`, nunca `2,5m`, porque la coma siempre separa valores.

### La pintura tiene sus propios materiales

{{ui:Pintar}} ({{key:B}}) pinta colores sólidos y los materiales de la sección {{ui:Materiales}}: ladrillo, revestimiento, tejado, madera, piedra y más, dibujados por ModelCraft. Todavía no puede cargar su propia imagen como material; las texturas que llegan con archivos importados se conservan. Véase [Pintar con colores y materiales](topic:paint).

### La escala es uniforme, sin agarres

Escalar no muestra una caja con agarres. Haga clic en el punto que permanece fijo, un punto de referencia, y luego en el nuevo tamaño o en un factor escrito. Siempre escala por igual en todas las direcciones. Para estirar en una sola dirección, empuje/tire o desplace una cara, vuelva a escribir el ancho, la profundidad o la altura de un grupo en {{ui:Información de entidad}}, o [redimensione con una cota](topic:dimensions).

### Girar elige su plano según dónde hace clic

No hay un transportador que se pegue a las caras mientras pasa el cursor con las teclas de flecha para elegir el plano. Haga clic en el centro de una cara para girar en el plano de esa cara, o en el suelo para girar alrededor de la vertical. Las teclas de flecha orbitan la vista antes del primer clic.

### Inferencia desde puntos sobre los que pasa

ModelCraft se ajusta a las direcciones de los ejes desde **su punto de inicio**, y a los puntos, aristas y caras bajo el puntero. No sigue una dirección desde un punto sobre el que solo pasó (la inferencia de «punto de origen» punteada). Para alinearse con una esquina lejana, bloquee el eje con una tecla de flecha y pase el cursor sobre esa esquina: el punto bloqueado se desliza para alinearse con ella. O coloque una [guía](topic:guides-measure).

### El paralelo usa la arista que pasó antes de empezar

La inferencia de paralelo y perpendicular usa la última arista que cruzó el puntero **antes del primer clic**, no las aristas sobre las que pasa mientras dibuja. Véase [Inferencia y ajuste](topic:inference#parallel-and-perpendicular).

### Las copias de un grupo están vinculadas

Copiar un grupo con {{ui:Desplazar}} crea una segunda colocación del mismo grupo, así que al editar uno cambian ambos, como con los componentes. SketchUp hace que los grupos sean independientes. Véase [Solución de problemas](topic:troubleshooting#editing-one-group-changed-another).

### Espacio no desplaza la vista

{{key:Space}} elige {{ui:Seleccionar}}, como en SketchUp. En algunas otras aplicaciones web, mantener Espacio desplaza la vista; aquí no. Arrastre con el botón derecho para desplazar.

### El desplazamiento con dos dedos hace zoom

En un panel táctil, configure {{ui:Configuración}} › {{ui:ModelCraft}} › Desplazamiento en Panel táctil: dos dedos orbitan, {{key:Shift}} y dos dedos desplazan la vista, un pellizco hace zoom. Véase [Orbitar, desplazar y hacer zoom](topic:orbit-pan-zoom#on-a-trackpad).

Si sus manos conocen los atajos de Blender y no los de SketchUp, elija el estilo de menú {{ui:Modelador}}: {{key:G}}, {{key:R}} y {{key:S}} actúan sobre la selección a la vez, {{key:E}} extruye (empujar/tirar), {{key:Shift+D}} duplica, y una barra de menú superior (Archivo, Edición, Vista, Seleccionar, Añadir, Objeto, Malla) sustituye a la barra de herramientas. Si viene de SketchUp, el estilo {{ui:Empujar/tirar}} ofrece una barra de menú propia sobre las mismas letras de herramientas. Véase [Menús, teclas y ratón](topic:menus-keys-and-mouse).

### Los sólidos empujados uno contra otro no se recortan

Empujar/tirar corta a través de la cara que hay detrás en el mismo objeto, pero dos sólidos separados empujados uno contra otro no se cruzan. No hay Intersecar caras ni Herramientas de sólidos.

### Lo que falta

El dibujo a mano alzada, Recortar, Dividir y Cáscara exterior, sus propios materiales de imagen, las extensiones y una herramienta de presentaciones para hojas no están en esta versión. [Todavía no creado](topic:not-built-yet) indica qué hacer en su lugar.

## Atajos que conserva el navegador

ModelCraft funciona en un navegador, así que algunos atajos pertenecen al navegador y no a la aplicación. {{key:Mod+N}} abre una ventana del navegador (use {{ui:Nuevo}}), y {{key:Mod+W}} cierra la pestaña. Si tiene cambios sin guardar, el navegador pregunta antes de cerrar. Véase [Teclas, ratones y paneles táctiles](common:keys#shortcuts-the-browser-keeps).
