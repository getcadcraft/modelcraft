---
title: Teclas y acciones del ratón
summary: Todos los atajos de teclado, acciones del ratón, gestos del panel táctil y gestos de pantalla táctil de ModelCraft, agrupados por lo que hacen.
keywords: teclado, atajos, teclas, ratón, panel táctil, táctil, gestos, chuleta, ctrl, comando, teclas de flecha
from: e2348957
---

Estas son las teclas de empujar/tirar, con las que empieza ModelCraft. Para el otro estilo, véase [Teclas de Modeler](topic:keyboard#modeler-keys) más abajo y [Configuración de ModelCraft](topic:settings).

Los atajos funcionan cuando la vista 3D o un botón de la barra de herramientas tiene el foco. Si acaba de escribir en un campo del panel o ha cambiado una lista en {{ui:Estilo}}, haga clic primero en la vista 3D; de lo contrario, las teclas irán a ese campo. Véase [Teclas, ratones y paneles táctiles](common:keys) para saber cómo se escriben las teclas en cada equipo.

## Herramientas

| Tecla | Herramienta |
|---|---|
| {{key:Space}} | {{ui:Seleccionar}} |
| {{key:L}} | {{ui:Línea}} |
| {{key:R}} | {{ui:Rectángulo}} |
| {{key:C}} | {{ui:Círculo}} |
| {{key:N}} | {{ui:Polígono}} |
| {{key:A}} | {{ui:Arco}} |
| {{key:F}} | {{ui:Desfase}} |
| {{key:B}} | {{ui:Pintar}} |
| {{key:P}} | {{ui:Empujar/tirar}} |
| {{key:M}} | {{ui:Desplazar}} |
| {{key:Q}} | {{ui:Girar}} |
| {{key:S}} | {{ui:Escalar}} |
| {{key:E}} | {{ui:Borrador}} |
| {{key:T}} | Medición con {{ui:Cinta}} |
| {{key:D}} | {{ui:Cota}} |
| {{key:O}} | {{ui:Órbita}} |
| {{key:H}} | {{ui:Encuadre}} |
| {{key:Z}} | {{ui:Zoom}} |

Las letras de herramienta funcionan solo sin teclas modificadoras: {{key:Shift}} con una letra no hace nada, salvo las dos de abajo.

## Modelo y archivo

| Tecla | Hace |
|---|---|
| {{key:G}} | Crea un componente con la selección |
| {{key:Shift+G}} | Crea un grupo con la selección |
| {{key:Shift+Z}} | Zoom de extensión (todo el modelo) |
| {{key:Mod+Z}} | Deshacer |
| {{key:Mod+Y}} o {{key:Mod+Shift+Z}} | Rehacer |
| {{key:Mod+S}} | Guardar (descarga el archivo `.modelcraft`) |
| {{key:Mod+O}} | Abrir un modelo |
| {{key:Mod+A}} | Seleccionar todo (en el grupo abierto, si hay uno abierto) |
| {{key:Mod+C}} | Copiar la selección |
| {{key:Mod+X}} | Cortar la selección |
| {{key:Mod+V}} | Pegar: la copia sigue al puntero; haga clic donde deba ir |
| {{key:Mod+Shift+V}} | Pegar en su sitio (donde se copió) |
| {{key:Mod+D}} | Duplicar: una copia se mueve con el puntero; haga clic para colocarla |
| {{key:Delete}} o {{key:Backspace}} | Borrar la selección |
| {{key:PageDown}} / {{key:PageUp}} | Escena siguiente / anterior |
| {{key:F1}} | Abrir o cerrar esta ayuda (también {{ui:Ayuda}} en la barra de aplicación; {{key:Esc}} dentro de la ayuda la cierra) |
| {{key:Ctrl+Shift+F}} | Modo de pantalla: pantalla completa, luego barras ocultas, luego normal (Control también en Mac) |

## Esc

{{key:Esc}} retrocede un nivel cada vez que se pulsa:

1. Cancela lo que la herramienta tiene en curso (una línea que se dibuja, un empujar/tirar, un desplazamiento). Todo vuelve a su estado.
2. Cambia a {{ui:Seleccionar}}.
3. Borra la selección.
4. Cierra el grupo que está editando.

También detiene la reproducción de escenas. En el cuadro de valor, {{key:Esc}} borra lo escrito y vuelve a la vista.

## Mientras una herramienta está en curso

| Tecla | Hace |
|---|---|
| Un dígito, o uno de `. , - ' " [ < * /` | Empieza a escribir en el cuadro de valor |
| {{key:Enter}} | Aplica lo escrito en el cuadro de valor |
| {{key:Right}} | Bloquea en el eje rojo (vuelva a pulsar para desbloquear) |
| {{key:Left}} | Bloquea en el eje verde |
| {{key:Up}} | Bloquea en el eje azul |
| {{key:Down}} | Bloquea en paralelo a la última arista que pasó por encima antes del primer clic |
| Mantener pulsado {{key:Shift}} | Mantiene la dirección a la que se ajusta, mientras se mantiene pulsada |
| {{key:Ctrl}}, {{key:Mod}} o {{key:Alt}} (Desplazar) | Alterna entre desplazar y copiar |

Los bloqueos con teclas de flecha funcionan en {{ui:Línea}}, {{ui:Rectángulo}}, {{ui:Círculo}}, {{ui:Polígono}}, {{ui:Desplazar}}, {{ui:Escalar}} y {{ui:Cinta}} (al medir desde un punto), después del primer clic. {{ui:Empujar/tirar}} siempre se mueve en la dirección de la cara y no tiene bloqueos. En {{ui:Girar}} las teclas de flecha muestran un mensaje "Bloqueado" tras el primer clic, pero no cambian el giro.

## Teclas de flecha en otros momentos

Cuando ninguna herramienta está en curso, las teclas de flecha mueven la cámara:

| Tecla | Hace |
|---|---|
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Órbita |
| {{key:Shift}} con una flecha | Encuadre |

## Ratón

| Acción | Hace |
|---|---|
| Clic | Usa la herramienta actual |
| Pulsar, arrastrar, soltar | Igual que dos clics (en herramientas de dibujo); una selección por recuadro (en {{ui:Seleccionar}}); borra por el camino (en {{ui:Borrador}}) |
| Doble clic | {{ui:Seleccionar}}: cara con sus aristas, arista con sus caras, abre un grupo; el espacio vacío cierra el grupo. {{ui:Empujar/tirar}}: repite la última distancia |
| Triple clic | {{ui:Seleccionar}}: todo lo conectado |
| {{key:Shift}} + clic | {{ui:Seleccionar}}: añade o quita de la selección |
| {{key:Mod}} + clic | {{ui:Seleccionar}}: añade a la selección |
| {{key:Shift}} + {{key:Mod}} + clic | {{ui:Seleccionar}}: quita de la selección |
| Arrastre con el botón central | Órbita, con cualquier herramienta |
| {{key:Shift}} + arrastre con el botón central | Encuadre, con cualquier herramienta |
| Arrastre con el botón derecho | Encuadre, con cualquier herramienta |
| Rueda | Zoom hacia el puntero |

No hay menú contextual con el botón derecho.

## Panel táctil

Lo que hace el deslizamiento con dos dedos depende de {{ui:Configuración}} › {{ui:ModelCraft}} › Desplazamiento:

| Gesto | Panel táctil (o calculado) | Rueda del ratón |
|---|---|---|
| Deslizar con dos dedos | Órbita | Zoom hacia el puntero |
| {{key:Shift}} + deslizar con dos dedos | Encuadre | Zoom |
| Pellizcar | Zoom hacia el puntero | Zoom hacia el puntero |
| Pulsar con dos dedos y arrastrar (clic secundario mantenido) | Encuadre | Encuadre |

Véase [Órbita, encuadre y zoom](topic:orbit-pan-zoom#on-a-trackpad) y [Configuración de ModelCraft](topic:settings#scrolling-mouse-wheel-or-trackpad).

## Teclas de Modeler

Con {{ui:Configuración}} › {{ui:ModelCraft}} › Controles en estilo Modeler:

| Tecla | Hace |
|---|---|
| {{key:W}} o {{key:Space}} | {{ui:Seleccionar}} |
| {{key:L}} / {{key:B}} / {{key:C}} / {{key:N}} | {{ui:Línea}} / {{ui:Rectángulo}} / {{ui:Círculo}} / {{ui:Polígono}} |
| {{key:E}} | {{ui:Empujar/tirar}} (extrusión) |
| {{key:T}} | Medición con {{ui:Cinta}} |
| {{key:D}} | {{ui:Cota}} |
| {{key:G}} | Desplaza la selección de inmediato, desde el puntero |
| {{key:R}} | Gira la selección alrededor de su centro (eje azul) |
| {{key:S}} | Escala la selección desde su centro |
| {{key:X}} / {{key:Y}} / {{key:Z}} mientras se desplaza o gira | Bloquea el eje rojo / verde / azul (vuelva a pulsar para desbloquear) |
| Clic o {{key:Enter}} | Lo coloca |
| {{key:Esc}} o clic derecho | Lo devuelve a su posición |
| {{key:Shift+D}} | Duplica y desplaza la copia |
| {{key:X}} o {{key:Delete}} | Borra la selección |
| {{key:A}} / {{key:Alt+A}} | Selecciona todo / no selecciona nada |
| {{key:Tab}} | Abre el grupo o componente seleccionado; vuelva a pulsar para cerrarlo |
| {{key:Mod+G}} / {{key:Mod+Shift+G}} | Crear grupo / crear componente |
| Teclado numérico {{key:1}} / {{key:3}} / {{key:7}} | Vista frontal / derecha / superior ({{key:Mod}} para posterior / izquierda / inferior) |
| Teclado numérico {{key:5}} | Perspectiva activada o desactivada |
| Teclado numérico {{key:.}} | Zoom a la selección |
| {{key:Home}} o {{key:Shift+C}} | Zoom de extensión |
| {{key:Shift+Tab}} | Ajuste activado o desactivado |
| Arrastre con botón central / con {{key:Shift}} / con {{key:Mod}} | Órbita / encuadre / zoom |
| Arrastre con {{key:Alt}} / arrastre con {{key:Alt+Shift}} | Órbita / encuadre (sin necesidad de botón central) |

Copiar, pegar, deshacer, guardar y abrir mantienen las teclas indicadas arriba. Los valores escritos, el cuadro de valor y {{ui:Empujar/tirar}} funcionan igual en ambos estilos.

## Pantalla táctil

| Gesto | Hace |
|---|---|
| Toque | Un clic con la herramienta actual |
| Doble toque | Un doble clic |
| Pulsar, arrastrar, levantar | Igual que pulsar, arrastrar y soltar con el ratón |
| Dos dedos: pellizcar | Zoom |
| Dos dedos: mover juntos | Encuadre ({{ui:Configuración}} › {{ui:ModelCraft}} › Pantalla táctil puede hacer que sea Órbita) |
| Tres dedos: mover juntos | Órbita (Encuadre cuando dos dedos orbitan) |
| Mantener un dedo quieto | Termina la herramienta, como {{key:Enter}}; sin nada en curso, luego arrastre para orbitar |
| Un segundo dedo durante una acción con un dedo | Cancela esa acción |
| Herramienta {{ui:Órbita}}, luego arrastre con un dedo | Órbita |

Para escribir un valor en una pantalla táctil, toque el cuadro de valor de abajo, escriba y pulse la tecla Intro (o Ir) del teclado.

## Dónde está Desplazar

{{ui:Desplazar}} está en la herramienta {{ui:Desplazar}}, tecla {{key:M}}: elija qué mover, haga clic en un punto base y después en un segundo punto o escriba una distancia. Véase [Desplazar, copiar y crear matrices](topic:move-copy).
