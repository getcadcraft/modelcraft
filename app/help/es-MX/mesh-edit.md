---
title: Editar una malla en el espacio de trabajo Malla
summary: Seleccione los vértices, aristas y caras de una malla, muévalos, y extruya, inserte, biselé, corte, fusione, rellene y una con puentes, usando cualquiera de los dos estilos de teclas.
keywords: malla, modo edición, espacio de trabajo de malla, vértice, vértices, arista, aristas, cara, caras, extruir, insertar, bisel, corte de bucle, cuchillo, bisecar, girar en pasos, fusionar, disolver, rellenar, relleno en cuadrícula, puente, subdividir, deslizar, edición proporcional, atenuación, espacio de trabajo
from: 92a372dd
---

El **espacio de trabajo Malla** edita una [malla](topic:meshes) punto por punto: sus vértices, aristas y caras. La geometría de empujar/tirar se mantiene en el espacio de trabajo **Modelo**.

## Abrirlo

- Elija {{ui:Mesh}} en la lista {{ui:Workspace}}, a la izquierda de la barra de herramientas. Se abre para editar la malla seleccionada; un grupo o componente seleccionado se convierte primero en malla (un paso de deshacer).
- O haga doble clic en una malla, o, con las teclas de modelador, selecciónela y presione {{key:Tab}}.
- Sin nada seleccionado, el panel ofrece mallas para agregar: plano, cuadrícula, cubo, círculo, cilindro, cono, esfera, esfera icosaédrica y toro. Una nueva se coloca hacia donde mira la vista y se abre para editarla.

{{ui:Back to Model}} (o la lista, {{key:Tab}} con las teclas de modelador, {{key:Esc}} sin nada seleccionado con las teclas de empujar/tirar) vuelve a Modelo con la malla seleccionada. Mientras el espacio de trabajo Malla está abierto, el resto del modelo se atenúa y las herramientas de dibujo de Modelo se ocultan.

## Seleccionar

| Haga | Para |
|---|---|
| {{key:1}} {{key:2}} {{key:3}} | Seleccionar vértices, aristas o caras |
| Clic | Seleccionar uno; {{key:Shift}}+clic agrega o quita |
| Arrastrar un recuadro | Seleccionar lo que está dentro y visible; {{key:Shift}} agrega, {{key:Ctrl}} quita |
| {{key:Alt}}+clic en una arista, o doble clic en ella | Su bucle de aristas (un bucle de caras en modo caras; todo el borde en una arista abierta) |
| {{key:Ctrl}}+{{key:Alt}}+clic en una arista | Su anillo de aristas |
| Triple clic | Todo lo unido a ella |

El grupo {{ui:Select}} también tiene {{ui:All}}, {{ui:Linked}}, {{ui:Loop}}, {{ui:Ring}}, {{ui:More}} y {{ui:Less}}.

## Mover, girar, escalar

{{ui:Move}}, {{ui:Rotate}} y {{ui:Scale}} comienzan desde el puntero: mueva, luego haga clic o presione {{key:Enter}} para colocar la selección, o {{key:Esc}} para cancelar. {{key:X}}, {{key:Y}} o {{key:Z}} (o las teclas de flecha) bloquean un eje. Escriba una distancia, un ángulo o un factor para obtener un valor exacto: los [cálculos](topic:value-box#calculations) también funcionan.

**Edición proporcional** ({{ui:Proportional}}, o el panel): los vértices cercanos a la selección siguen un desplazamiento; cuanto más lejos están, menos se mueven, hasta el alcance que defina, con la atenuación que elija. Active {{ui:Only along the mesh}} para medir a lo largo de las aristas en lugar de en línea recta.

{{ui:Slide}} mueve un bucle de aristas seleccionado a lo largo de las aristas junto a él.

## Cambiar la forma

| Herramienta | Hace |
|---|---|
| {{ui:Extrude}} | Saca las caras seleccionadas a lo largo de su normal, con nuevas caras laterales (o crea caras a partir de aristas de borde abiertas). Escriba la distancia |
| {{ui:Inset}} | Una banda dentro del contorno de las caras seleccionadas; presione {{key:I}} de nuevo para cada cara por separado |
| {{ui:Bevel}} | Corta las aristas seleccionadas (o, con {{key:Ctrl}}+{{key:Shift}}+{{key:B}}, los vértices) con un ancho; la rueda o las teclas más y menos agregan segmentos para una arista redondeada |
| {{ui:Loop cut}} | Apunte a una arista: nuevos bucles a través del anillo de caras de cuatro lados; la rueda define cuántos; haga clic para cortar |
| {{ui:Knife}} | Haga clic en puntos sobre aristas o esquinas; {{key:Enter}} corta en línea recta a través de las caras entre ellos, tal como se ven |
| {{ui:Bisect}} | Dibuje una línea en pantalla: las caras seleccionadas (o todas) se cortan a lo largo de ella |
| {{ui:Spin}} | Gira las caras seleccionadas o las aristas abiertas alrededor del eje azul, en pasos (la rueda los define); una vuelta completa cierra |
| {{ui:Subdivide}} | Corta las aristas seleccionadas en dos; las caras completas se convierten en una cuadrícula |
| {{ui:Merge}} | Los vértices seleccionados se convierten en uno, en su centro |
| {{ui:Dissolve}} | Quita la selección pero conserva la superficie: las caras se unen |
| {{ui:Fill}} | Una cara a través de un borde abierto seleccionado (o entre dos aristas abiertas) |
| {{ui:Grid fill}} | Rellena un borde abierto con un número par de aristas, con una cuadrícula de cuadriláteros |
| {{ui:Bridge}} | Une dos bucles de aristas abiertos seleccionados con caras |
| {{ui:Crease}} | Qué tan filosas se mantienen las aristas seleccionadas cuando la malla se suaviza con una superficie de subdivisión: aléjese del centro, use la rueda (pasos de 0.1) o escriba un valor de 0 a 1. El panel muestra el pliegue de las aristas seleccionadas y también acepta un valor escrito. Las aristas con pliegue se dibujan en magenta |
| {{ui:Flip}}, {{ui:Smooth}}, {{ui:Delete}} | Voltean caras; suavizan vértices hacia sus vecinos; eliminan según el modo de selección |

Cada una es un paso de deshacer. Las coordenadas de textura, los colores y los pesos pasan a las nuevas caras y vértices.

## Remallar

{{ui:Remesh}} rehace toda la malla como triángulos parejos de un mismo tamaño, que se piden al presionarlo (más pequeño es más fino y más lento). Cierra huecos, une piezas que se superponen y iguala una malla que el esculpido estiró. Las aristas filosas quedan ligeramente redondeadas. Las UV, la pintura y los pliegues empiezan de nuevo. Un solo paso de deshacer.

## Retopología

Para construir una malla nueva y más limpia sobre una detallada (un esculpido, un escaneo), elija la detallada en {{ui:Retopology}} › **Construir sobre** en el panel, y luego:

- **Ajustar los puntos movidos a ella:** los puntos que mueva y las aristas que extruya quedan sobre su superficie.
- **Colocar los puntos seleccionados sobre ella** los mueve ahora sobre su superficie (un paso de deshacer).
- **Mostrar las aristas de esta malla al frente** dibuja la malla que construye sobre la superficie, para que pueda verla.

## Ajustar la última operación

Después de {{ui:Inset}}, {{ui:Bevel}}, {{ui:Loop cut}}, {{ui:Subdivide}}, {{ui:Smooth}}, {{ui:Grid fill}} o {{ui:Spin}}, el panel muestra sus ajustes (ancho, segmentos, perfil, cortes…). Si cambia uno, la operación se vuelve a hacer desde el inicio, y sigue siendo un solo paso de deshacer.

## Teclas

| | Teclas de empujar/tirar | Teclas de modelador |
|---|---|---|
| Desplazar, girar, escalar | {{key:M}} {{key:Q}} {{key:S}} | {{key:G}} {{key:R}} {{key:S}} ({{key:G}} dos veces desliza) |
| Extruir, insertar | {{key:P}}, {{key:F}} | {{key:E}}, {{key:I}} |
| Eliminar | {{key:E}} o {{key:Delete}} | {{key:X}} o {{key:Delete}} |
| Pliegue | {{key:Shift+C}} | {{key:Shift+E}} |
| Seleccionar todo, nada, invertir | {{key:Ctrl+A}}, {{key:Esc}}, {{key:Ctrl+I}} | {{key:A}}, {{key:Alt+A}}, {{key:Ctrl+I}} |
| Ambos | {{key:Ctrl+B}} bisel, {{key:Ctrl+R}} corte de bucle, {{key:K}} cuchillo | lo mismo, y además {{key:F}} rellenar, {{key:M}} fusionar, {{key:Ctrl+X}} disolver, {{key:L}} / {{key:Ctrl+L}} conectado, {{key:Alt+N}} voltear, {{key:O}} proporcional, {{key:Shift+V}} deslizar vértice |

Vea también [Mallas](topic:meshes), [Modificadores en una malla](topic:modifiers) y [Aún no disponible](topic:not-built-yet).
