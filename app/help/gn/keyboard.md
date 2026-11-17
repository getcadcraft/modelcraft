---
title: Teclas y acciones del ratón
summary: Cada atajo de teclado, acción del ratón, gesto del panel táctil y gesto de pantalla táctil de ModelCraft, agrupados según lo que hacen.
keywords: teclado, atajos, teclas, teclas de acceso rápido, ratón, panel táctil, pantalla táctil, gestos, chuleta, ctrl, comando, teclas de flecha
from: e2348957
---

Estas son las teclas de empujar/tirar, las que ModelCraft usa al inicio. Para el otro estilo, vea [Teclas de Modeler](topic:keyboard#modeler-keys) abajo y [Configuración de ModelCraft](topic:settings).

Los atajos funcionan cuando la vista 3D o un botón de la barra de herramientas tiene el foco. Si acaba de escribir en un campo de un panel o cambió una lista en {{ui:Estilo}}, haga clic primero en la vista 3D, o sus teclas irán a ese campo. Vea [Teclas, ratones y paneles táctiles](common:keys) para saber cómo se escriben las teclas en cada computadora.

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
| {{key:M}} | {{ui:Mover}} |
| {{key:Q}} | {{ui:Rotar}} |
| {{key:S}} | {{ui:Escalar}} |
| {{key:E}} | {{ui:Goma}} |
| {{key:T}} | Medición con {{ui:Cinta}} |
| {{key:D}} | {{ui:Cota}} |
| {{key:O}} | {{ui:Orbitar}} |
| {{key:H}} | {{ui:Desplazar}} |
| {{key:Z}} | {{ui:Zoom}} |

Las letras de herramienta funcionan solo sin teclas modificadoras: {{key:Shift}} con una letra no hace nada, salvo las dos de abajo.

## Modelo y archivo

| Tecla | Hace |
|---|---|
| {{key:G}} | Crear componente desde la selección |
| {{key:Shift+G}} | Crear grupo desde la selección |
| {{key:Shift+Z}} | Zoom a todo (todo el modelo) |
| {{key:Mod+Z}} | Deshacer |
| {{key:Mod+Y}} o {{key:Mod+Shift+Z}} | Rehacer |
| {{key:Mod+S}} | Guardar (descarga el archivo `.modelcraft`) |
| {{key:Mod+O}} | Abrir un modelo |
| {{key:Mod+A}} | Seleccionar todo (en el grupo abierto, si hay uno abierto) |
| {{key:Mod+C}} | Copiar la selección |
| {{key:Mod+X}} | Cortar la selección |
| {{key:Mod+V}} | Pegar: la copia sigue al puntero; haga clic donde debe ir |
| {{key:Mod+Shift+V}} | Pegar en el mismo lugar (de donde se copió) |
| {{key:Mod+D}} | Duplicar: una copia se mueve con el puntero; haga clic para dejarla |
| {{key:Delete}} o {{key:Backspace}} | Borrar la selección |
| {{key:PageDown}} / {{key:PageUp}} | Escena siguiente / anterior |
| {{key:F1}} | Abrir o cerrar esta ayuda (también {{ui:Ayuda}} en la barra de la aplicación; {{key:Esc}} dentro de la ayuda la cierra) |
| {{key:Ctrl+Shift+F}} | Modo de pantalla: pantalla completa, luego barras ocultas, luego normal (Control también en Mac) |

## Esc

{{key:Esc}} retrocede un nivel cada vez que lo pulsa:

1. Cancela lo que la herramienta está haciendo (una línea en dibujo, un empujar/tirar, un mover). Todo vuelve atrás.
2. Cambia a {{ui:Seleccionar}}.
3. Limpia la selección.
4. Cierra el grupo que está editando.

También detiene la reproducción de escenas. En el cuadro de valor, {{key:Esc}} borra lo que escribió y vuelve a la vista.

## Mientras una herramienta trabaja

| Tecla | Hace |
|---|---|
| Un dígito, o uno de `. , - ' " [ < * /` | Empieza a escribir en el cuadro de valor |
| {{key:Enter}} | Aplica lo que escribió en el cuadro de valor |
| {{key:Right}} | Bloquea al eje rojo (pulse otra vez para desbloquear) |
| {{key:Left}} | Bloquea al eje verde |
| {{key:Up}} | Bloquea al eje azul |
| {{key:Down}} | Bloquea en paralelo a la última arista que pasó antes del primer clic |
| Mantener {{key:Shift}} | Mantiene la dirección a la que está ajustado, mientras lo mantenga |
| {{key:Ctrl}}, {{key:Mod}} o {{key:Alt}} (Mover) | Alterna entre mover y copiar |

Los bloqueos con teclas de flecha funcionan en {{ui:Línea}}, {{ui:Rectángulo}}, {{ui:Círculo}}, {{ui:Polígono}}, {{ui:Mover}}, {{ui:Escalar}} y {{ui:Cinta}} (al medir desde un punto), después del primer clic. {{ui:Empujar/tirar}} siempre se mueve en la dirección de la cara y no tiene bloqueos. En {{ui:Rotar}} las teclas de flecha muestran un mensaje "Bloqueado" después del primer clic, pero no cambian el giro.

## Teclas de flecha en otros momentos

Cuando ninguna herramienta está en medio de algo, las teclas de flecha mueven la cámara:

| Tecla | Hace |
|---|---|
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Orbitar |
| {{key:Shift}} con una flecha | Desplazar |

## Ratón

| Acción | Hace |
|---|---|
| Clic | Usa la herramienta actual |
| Presionar, arrastrar, soltar | Igual que dos clics (para herramientas de dibujo); una selección con recuadro (para {{ui:Seleccionar}}); borra en el camino (para la {{ui:Goma}}) |
| Doble clic | {{ui:Seleccionar}}: cara con sus aristas, arista con sus caras, abre un grupo; espacio vacío cierra el grupo. {{ui:Empujar/tirar}}: repite la última distancia |
| Triple clic | {{ui:Seleccionar}}: todo lo conectado |
| {{key:Shift}} + clic | {{ui:Seleccionar}}: alterna dentro y fuera de la selección |
| {{key:Mod}} + clic | {{ui:Seleccionar}}: añade a la selección |
| {{key:Shift}} + {{key:Mod}} + clic | {{ui:Seleccionar}}: quita de la selección |
| Arrastre con botón central | Orbitar, con cualquier herramienta |
| {{key:Shift}} + arrastre con botón central | Desplazar, con cualquier herramienta |
| Arrastre con botón derecho | Desplazar, con cualquier herramienta |
| Rueda | Zoom hacia el puntero |

No hay menú de clic derecho.

## Panel táctil

Lo que hace un deslizamiento con dos dedos depende de {{ui:Configuración}} › {{ui:ModelCraft}} › Desplazamiento:

| Gesto | Panel táctil (o deducido) | Rueda del ratón |
|---|---|---|
| Deslizamiento con dos dedos | Orbitar | Zoom hacia el puntero |
| {{key:Shift}} + deslizamiento con dos dedos | Desplazar | Zoom |
| Pellizco | Zoom hacia el puntero | Zoom hacia el puntero |
| Presionar y arrastrar con dos dedos (clic secundario mantenido) | Desplazar | Desplazar |

Vea [Orbitar, desplazar y zoom](topic:orbit-pan-zoom#on-a-trackpad) y [Configuración de ModelCraft](topic:settings#scrolling-mouse-wheel-or-trackpad).

## Teclas de Modeler

Con {{ui:Configuración}} › {{ui:ModelCraft}} › Controles en estilo Modeler:

| Tecla | Hace |
|---|---|
| {{key:W}} o {{key:Space}} | {{ui:Seleccionar}} |
| {{key:L}} / {{key:B}} / {{key:C}} / {{key:N}} | {{ui:Línea}} / {{ui:Rectángulo}} / {{ui:Círculo}} / {{ui:Polígono}} |
| {{key:E}} | {{ui:Empujar/tirar}} (extruir) |
| {{key:T}} | Medición con {{ui:Cinta}} |
| {{key:D}} | {{ui:Cota}} |
| {{key:G}} | Mueve la selección de inmediato, desde el puntero |
| {{key:R}} | Rota la selección alrededor de su centro (eje azul) |
| {{key:S}} | Escala la selección alrededor de su centro |
| {{key:X}} / {{key:Y}} / {{key:Z}} al mover o rotar | Bloquea el eje rojo / verde / azul (otra vez para desbloquear) |
| Clic o {{key:Enter}} | Lo deja en su lugar |
| {{key:Esc}} o clic derecho | Lo devuelve a su sitio |
| {{key:Shift+D}} | Duplica y mueve la copia |
| {{key:X}} o {{key:Delete}} | Borra la selección |
| {{key:A}} / {{key:Alt+A}} | Selecciona todo / no selecciona nada |
| {{key:Tab}} | Abre el grupo o componente seleccionado; otra vez lo cierra |
| {{key:Mod+G}} / {{key:Mod+Shift+G}} | Crear grupo / crear componente |
| Teclado numérico {{key:1}} / {{key:3}} / {{key:7}} | Vista frontal / derecha / superior ({{key:Mod}} para posterior / izquierda / inferior) |
| Teclado numérico {{key:5}} | Perspectiva activada o desactivada |
| Teclado numérico {{key:.}} | Zoom a la selección |
| {{key:Home}} o {{key:Shift+C}} | Zoom a todo |
| {{key:Shift+Tab}} | Ajuste activado o desactivado |
| Arrastre con botón central / con {{key:Shift}} / con {{key:Mod}} | Orbitar / desplazar / zoom |
| {{key:Alt}} + arrastre / {{key:Alt+Shift}} + arrastre | Orbitar / desplazar (sin necesidad de botón central) |

Copiar, pegar, deshacer, guardar y abrir mantienen las teclas indicadas arriba. Los valores escritos, el cuadro de valor y {{ui:Empujar/tirar}} funcionan igual en ambos estilos.

## Pantalla táctil

| Gesto | Hace |
|---|---|
| Toque | Un clic con la herramienta actual |
| Doble toque | Un doble clic |
| Presionar, arrastrar, levantar | Igual que presionar, arrastrar, soltar con un ratón |
| Dos dedos: pellizco | Zoom |
| Dos dedos: mover juntos | Desplazar ({{ui:Configuración}} › {{ui:ModelCraft}} › Pantalla táctil puede hacerlo Orbitar) |
| Tres dedos: mover juntos | Orbitar (Desplazar cuando dos dedos orbitan) |
| Mantener un dedo quieto | Termina la herramienta, como {{key:Enter}}; sin nada en curso, luego arrastre para orbitar |
| Un segundo dedo durante una acción con un dedo | Cancela esa acción |
| Herramienta {{ui:Orbitar}}, luego arrastre con un dedo | Orbitar |

Para escribir un valor en una pantalla táctil, toque el cuadro de valor de abajo, escriba, y pulse la tecla Enter (o Ir) del teclado.

## Dónde está Mover

{{ui:Mover}} está en la herramienta {{ui:Mover}}, tecla {{key:M}}: elija qué mover, haga clic en un punto base, luego en un segundo punto o escriba una distancia. Vea [Mover, copiar y crear matrices](topic:move-copy).
