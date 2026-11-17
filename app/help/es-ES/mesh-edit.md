---
title: Editar una malla en el espacio de trabajo Malla
summary: Seleccione los vértices, aristas y caras de una malla, muévalos, y extrúyalos, insértelos, biselados, córtelos, fusiónelos, rellénelos y únalos con puentes, con cualquiera de los dos estilos de teclas.
keywords: malla, modo de edición, espacio de trabajo malla, vértice, vértices, arista, aristas, cara, caras, extruir, insertar, bisel, corte de bucle, cuchillo, bisecar, girar en pasos, fusionar, disolver, rellenar, relleno en cuadrícula, puente, subdividir, deslizar, edición proporcional, caída, espacio de trabajo
from: 92a372dd
---

El **espacio de trabajo {{ui:Malla}}** edita una [malla](topic:meshes) punto a punto: sus vértices, aristas y caras. La geometría de empujar/tirar se queda en el espacio de trabajo **Modelo**.

## Abrirlo

- Elija {{ui:Malla}} en la lista {{ui:Espacio de trabajo}}, a la izquierda de la barra de herramientas. Se abre para editar la malla seleccionada; un grupo o componente seleccionado se convierte antes en malla (un paso de deshacer).
- O haga doble clic en una malla, o, con las teclas del modelador, selecciónela y pulse {{key:Tab}}.
- Sin nada seleccionado, el panel ofrece mallas para añadir: plano, cuadrícula, cubo, círculo, cilindro, cono, esfera, icoesfera y toro. Una nueva aparece hacia donde mira la vista y se abre para editarla.

{{ui:Volver a Modelo}} (o la lista; {{key:Tab}} con las teclas del modelador; {{key:Esc}} sin nada seleccionado con las teclas de empujar/tirar) vuelve a Modelo con la malla seleccionada. Mientras el espacio de trabajo Malla está abierto, el resto del modelo se atenúa y las herramientas de dibujo de Modelo se guardan.

## Seleccionar

| Acción | Resultado |
| --- | --- |
| {{key:1}} {{key:2}} {{key:3}} | Seleccionar vértices, aristas o caras |
| Clic | Seleccionar uno; {{key:Shift}}+clic añade o quita |
| Arrastrar un recuadro | Selecciona lo que está dentro y es visible; {{key:Shift}} añade, {{key:Ctrl}} quita |
| {{key:Alt}}+clic en una arista, o doble clic en ella | Su bucle de aristas (un bucle de caras en modo cara; todo el borde, en una arista abierta) |
| {{key:Ctrl}}+{{key:Alt}}+clic en una arista | Su anillo de aristas |
| Triple clic | Todo lo unido a ella |

El grupo {{ui:Seleccionar}} también tiene {{ui:Todo}}, {{ui:Vinculados}}, {{ui:Bucle}}, {{ui:Anillo}}, {{ui:Más}} y {{ui:Menos}}.

## Mover, girar, escalar

{{ui:Desplazar}}, {{ui:Girar}} y {{ui:Escalar}} parten del puntero: muévalo y luego haga clic, o pulse {{key:Enter}} (Intro), para colocar la selección, o {{key:Esc}} para cancelar. {{key:X}}, {{key:Y}} o {{key:Z}} (o las teclas de flecha) bloquean un eje. Escriba una distancia, un ángulo o un factor para obtener un valor exacto: [los cálculos](topic:value-box#calculations) también funcionan.

**Edición proporcional** ({{ui:Proporcional}}, o el panel): los vértices cerca de la selección siguen un movimiento, menos cuanto más lejos estén, hasta el alcance que defina, con la caída que elija. Active {{ui:Solo a lo largo de la malla}} para medir a lo largo de las aristas en vez de en línea recta.

{{ui:Deslizar}} mueve un bucle de aristas seleccionado a lo largo de las aristas contiguas.

## Cambiar la forma

| Herramienta | Qué hace |
| --- | --- |
| {{ui:Extruir}} | Saca las caras seleccionadas a lo largo de su normal, con nuevas caras laterales (o crea caras a partir de aristas de borde abiertas). Escriba la distancia |
| {{ui:Insertar}} | Una franja dentro del contorno de las caras seleccionadas; pulse {{key:I}} de nuevo para cada cara por separado |
| {{ui:Bisel}} | Corta las aristas seleccionadas (o, con {{key:Ctrl}}+{{key:Shift}}+{{key:B}}, los vértices) con un ancho; la rueda o las teclas más y menos añaden segmentos para una arista redondeada |
| {{ui:Corte de bucle}} | Apunte a una arista: nuevos bucles a través del anillo de caras de cuatro lados; la rueda define cuántos; haga clic para cortar |
| {{ui:Cuchillo}} | Haga clic en puntos de aristas o esquinas; {{key:Enter}} (Intro) corta en línea recta por las caras entre ellos, tal como se ven |
| {{ui:Bisecar}} | Dibuje una línea en pantalla: las caras seleccionadas (o todas) se cortan por ella |
| {{ui:Girar en pasos}} | Gira las caras seleccionadas o las aristas abiertas alrededor del eje azul, en pasos (la rueda los define); una vuelta completa cierra |
| {{ui:Subdividir}} | Divide en dos las aristas seleccionadas; las caras completas se convierten en una cuadrícula |
| {{ui:Fusionar}} | Los vértices seleccionados se convierten en uno, en su centro |
| {{ui:Disolver}} | Quita la selección pero conserva la superficie: las caras se unen |
| {{ui:Rellenar}} | Una cara a través de un borde abierto seleccionado (o entre dos aristas abiertas) |
| {{ui:Relleno en cuadrícula}} | Rellena un borde abierto con un número par de aristas con una cuadrícula de cuadriláteros |
| {{ui:Puente}} | Une con caras dos bucles de aristas abiertas seleccionados |
| {{ui:Pliegue}} | Cuán afiladas se mantienen las aristas seleccionadas cuando la malla se suaviza con una superficie de subdivisión: aléjese del centro, use la rueda (pasos de 0.1) o escriba un valor de 0 a 1. El panel muestra el pliegue de las aristas seleccionadas y también admite un valor escrito. Las aristas con pliegue se dibujan en magenta |
| {{ui:Voltear}}, {{ui:Suavizar}}, {{ui:Eliminar}} | Dan la vuelta a las caras; suavizan los vértices hacia sus vecinos; eliminan según el modo de selección |

Cada una es un paso de deshacer. Las coordenadas de textura, los colores y los pesos pasan a las nuevas caras y vértices.

## Rehacer malla

{{ui:Rehacer malla}} vuelve a crear toda la malla como triángulos uniformes de un mismo tamaño, que se pide al pulsarlo (cuanto más pequeño, más fino y lento). Cierra agujeros, une piezas que se solapan y uniformiza una malla que la escultura ha estirado. Los bordes afilados salen ligeramente redondeados. Los UV, la pintura y los pliegues empiezan de nuevo. Es un solo paso de deshacer.

## Retopología

Para construir una malla nueva y más limpia sobre una detallada (una escultura, un escaneo), elija la detallada en {{ui:Retopología}} › **Construir sobre** en el panel, y después:

- **Ajustar los puntos movidos a ella:** los puntos que mueva y las aristas que extruya se colocan sobre su superficie.
- **Poner los puntos seleccionados sobre ella** mueve ahora los puntos seleccionados sobre su superficie (un paso de deshacer).
- **Mostrar las aristas de esta malla delante** dibuja la malla que está construyendo sobre la superficie, para que pueda verla.

## Ajustar la última operación

Tras {{ui:Insertar}}, {{ui:Bisel}}, {{ui:Corte de bucle}}, {{ui:Subdividir}}, {{ui:Suavizar}}, {{ui:Relleno en cuadrícula}} o {{ui:Girar en pasos}}, el panel muestra sus ajustes (ancho, segmentos, perfil, cortes…). Cambie uno y la operación se vuelve a realizar desde el principio, siempre como un solo paso de deshacer.

## Teclas

| | Teclas de empujar/tirar | Teclas del modelador |
| --- | --- | --- |
| Mover, girar, escalar | {{key:M}} {{key:Q}} {{key:S}} | {{key:G}} {{key:R}} {{key:S}} ({{key:G}} dos veces: deslizar) |
| Extruir, insertar | {{key:P}}, {{key:F}} | {{key:E}}, {{key:I}} |
| Eliminar | {{key:E}} o {{key:Delete}} | {{key:X}} o {{key:Delete}} |
| Pliegue | {{key:Shift+C}} | {{key:Shift+E}} |
| Seleccionar todo, nada, invertir | {{key:Ctrl+A}}, {{key:Esc}}, {{key:Ctrl+I}} | {{key:A}}, {{key:Alt+A}}, {{key:Ctrl+I}} |
| Ambos | {{key:Ctrl+B}} bisel, {{key:Ctrl+R}} corte de bucle, {{key:K}} cuchillo | lo mismo, y además {{key:F}} rellenar, {{key:M}} fusionar, {{key:Ctrl+X}} disolver, {{key:L}} / {{key:Ctrl+L}} vinculados, {{key:Alt+N}} voltear, {{key:O}} proporcional, {{key:Shift+V}} deslizar vértice |

Consulte también [Mallas](topic:meshes), [Modificadores en una malla](topic:modifiers) y [Todavía no disponible](topic:not-built-yet).
