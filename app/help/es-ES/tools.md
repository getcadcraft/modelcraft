---
title: Lista de herramientas
summary: Cada herramienta de ModelCraft con su tecla, lo que hace cada clic y lo que puede escribir en el cuadro de valor mientras trabaja.
keywords: herramientas, barra de herramientas, comandos, lista, línea, rectángulo, círculo, polígono, desfase, arco, curva, spline, sígueme, barrido, arco de 2 puntos, arco desde centro, seleccionar, empujar tirar, desplazar, girar, escalar, borrador, cinta, cota, órbita, encuadre, zoom, colocar componente
from: e08a274f
---

La sugerencia de la barra de estado indica siempre lo que la herramienta actual espera a continuación. {{key:Esc}} cancela lo que una herramienta está haciendo en ese momento.

## Herramientas de dibujo

| Herramienta | Tecla | Clics | Escriba en el cuadro de valor |
|---|---|---|---|
| {{ui:Línea}} | {{key:L}} | Inicio, y después cada punto siguiente. Se detiene cuando una cara se cierra, o con {{key:Esc}} | Una longitud hacia el puntero; `[x,y,z]` un punto; `<dx,dy,dz>` un desplazamiento ({{ui:Longitud}}) |
| {{ui:Rectángulo}} | {{key:R}} | Primera esquina (sobre el suelo o una cara), esquina opuesta | Ancho y profundidad: `4m,3m` ({{ui:Cotas}}) |
| {{ui:Círculo}} | {{key:C}} | Centro (sobre el suelo o una cara), un punto del borde | Antes del primer clic: lados, `24s` o `24` ({{ui:Lados}}). Después: el radio ({{ui:Radio}}) |
| {{ui:Polígono}} | {{key:N}} | Centro, una esquina | Igual que el Círculo; empieza con 6 lados |
| {{ui:Arco}} | {{key:A}} | Inicio, final, y después la flecha | La longitud de la cuerda después del inicio ({{ui:Longitud}}); la flecha después del final ({{ui:Flecha}}); `12s` para segmentos |
| {{ui:Transportador}} | — | Centro, punto de 0°, y después el ángulo | El ángulo en grados ({{ui:Ángulo}}) |
| {{ui:Sígueme}} | — | Seleccione una trayectoria y después haga clic en la cara (o haga clic en la cara y después en una arista de la trayectoria) | — |
| {{ui:Pintar}} | {{key:B}} | Una cara, grupo o componente | — ({{key:Ctrl}} conectado, {{key:Shift}} todo de ese color, {{key:Alt}} recoger un color) |
| {{ui:Desfase}} | {{key:F}} | Una cara (o seleccione antes una cara o aristas), y después el lado y la distancia | La distancia ({{ui:Distancia}}); hacia dentro de la cara es hacia el interior |
| {{ui:Curva}} | — | Puntos por los que pasa la curva; {{key:Enter}} o un doble clic la termina | Una longitud a lo largo del puntero, `[x,y,z]` o `<dx,dy,dz>` para el siguiente punto |
| {{ui:Arco por centro}} | — | Centro, inicio, y después el final | El radio después del centro; el ángulo en grados después del inicio; `12s` para segmentos |

## Herramientas de edición

| Herramienta | Tecla | Clics | Escriba en el cuadro de valor |
|---|---|---|---|
| {{ui:Seleccionar}} | {{key:Space}} | Clic, doble clic, triple clic, arrastre de un recuadro. Vea [Seleccionar elementos](topic:select) | Con una cota o una arista seleccionada: una nueva longitud, que redimensiona el modelo |
| {{ui:Empujar/tirar}} | {{key:P}} | La cara, y después la distancia. Haga doble clic en una cara para repetir la última distancia | Una distancia; un valor negativo va en sentido contrario ({{ui:Distancia}}) |
| {{ui:Desplazar}} | {{key:M}} | Desde un punto, hasta un punto. Mantenga {{key:Ctrl}} o {{key:Alt}} para copiar | Una distancia hacia el puntero, `<dx,dy,dz>` o `[x,y,z]` ({{ui:Distancia}}). Después de una copia: `3x` o `/3` |
| {{ui:Girar}} | {{key:Q}} | Centro (sobre una cara para girar en su plano), dirección de inicio, dirección final | El ángulo en grados ({{ui:Ángulo}}) |
| {{ui:Escalar}} | {{key:S}} | El punto que se mantiene, un punto de referencia, el nuevo tamaño | Un factor: `2`, `0.5` ({{ui:Escalar}}) |
| {{ui:Borrador}} | {{key:E}} | Clic o arrastre sobre aristas, grupos, guías y cotas | nada |
| {{ui:Cinta}} | {{key:T}} | Desde una arista: una línea guía paralela. Desde un punto: mide y deja un punto guía | El desfase ({{ui:Desfase}}) o la distancia ({{ui:Longitud}}) |
| {{ui:Cota}} | {{key:D}} | Dos esquinas (o una arista), y después dónde va la línea de cota. Vea [Acotar y redimensionar](topic:dimensions) | El desfase ({{ui:Desfase}}). Justo después: una nueva longitud, que redimensiona el modelo |

{{ui:Desplazar}}, {{ui:Girar}} y {{ui:Escalar}} actúan sobre la selección. Si no hay nada seleccionado, toman primero lo que haga clic (una cara trae sus aristas).

## Herramientas de cámara

| Herramienta | Tecla | Arrastre para |
|---|---|---|
| {{ui:Órbita}} | {{key:O}} | Girar alrededor de la parte del modelo bajo el puntero ({{key:Shift}} encuadra) |
| {{ui:Encuadre}} | {{key:H}} | Desplazar la vista |
| {{ui:Zoom}} | {{key:Z}} | Hacer zoom: hacia arriba acerca, hacia abajo aleja |
| {{ui:Extensión}} | {{key:Shift+Z}} | (un botón, no una herramienta) Ajustar todo el modelo a la vista |

Con ratón rara vez necesitará estas herramientas: arrastrar con el botón central orbita, arrastrar con el botón derecho encuadra, y la rueda hace zoom con cualquier herramienta. Vea [Órbita, encuadre y zoom](topic:orbit-pan-zoom).

## Organizar

| Botón | Tecla | Función |
|---|---|---|
| {{ui:Componente}} | {{key:G}} | Convierte la selección en un componente |
| {{ui:Grupo}} | {{key:Shift+G}} | Convierte la selección en un grupo |
| {{ui:Descomponer}} | ninguna | Devuelve los grupos y componentes seleccionados a geometría suelta |

## Colocar componente

No está en la barra de herramientas: haga clic en {{ui:Colocar}} junto a un componente en el panel {{ui:Componentes}}. Haga clic una vez donde irá el origen del componente; la herramienta vuelve entonces a {{ui:Seleccionar}}.
