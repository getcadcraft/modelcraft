---
title: Órbita, encuadre y zoom
summary: Muévase alrededor del modelo con un ratón, un trackpad, una pantalla táctil o el teclado, y vaya a las vistas estándar.
keywords: órbita, encuadre, zoom, pulsación larga, tres dedos, dos dedos, toque, navegar, cámara, vista, girar vista, trackpad, táctil, pellizco, botón central, extensión de zoom, perspectiva, paralela, vista superior, iso
from: 10d4d33a
---

Puede mover la cámara en cualquier momento, incluso a mitad de un trazo o de un empuje: la herramienta espera donde estaba.

## Con un ratón de tres botones

| Para | Haga esto |
|---|---|
| Orbitar | Arrastre con el botón central (pulse la rueda) |
| Encuadrar | Arrastre con el botón derecho, o mantenga pulsada {{key:Shift}} y arrastre con el botón central. Pulsar o soltar {{key:Shift}} durante un arrastre alterna entre órbita y encuadre |
| Acercar | Gire la rueda. Acerca hacia la cara bajo el puntero, o hacia el punto que hay debajo a la profundidad del centro de la vista |
| Ver el modelo completo | {{key:Shift+Z}} o {{ui:Extensión}} |

Orbitar gira la vista alrededor de la parte del modelo bajo el puntero, de modo que ese punto permanece donde está mientras todo gira a su alrededor. Sobre un espacio vacío gira alrededor del centro de la vista. Encuadrar mantiene el punto que agarró bajo el puntero.

Para orbitar siempre alrededor del centro de la vista, o para hacer más rápidas o más lentas la órbita y el encuadre, abra {{ui:Configuración}} ({{key:Mod+,}}), pestaña {{ui:ModelCraft}}, **Órbita y encuadre**. Las velocidades se aplican al ratón, al trackpad, al tacto y a las teclas de flecha.

Un clic derecho sin arrastrar no hace nada; ModelCraft no tiene menú contextual con clic derecho.

## Sin botón central

Use las herramientas de cámara de la barra de herramientas, o el teclado:

1. Pulse {{key:O}} (o haga clic en {{ui:Órbita}}) y arrastre con el botón izquierdo para orbitar. Mantenga pulsada {{key:Shift}} durante el arrastre para encuadrar.
2. Pulse {{key:H}} (o haga clic en {{ui:Encuadre}}) y arrastre para encuadrar.
3. Pulse {{key:Z}} (o haga clic en {{ui:Zoom}}) y arrastre hacia arriba para acercar, o hacia abajo para alejar.
4. Pulse {{key:Space}} para volver a {{ui:Seleccionar}}, o pulse la tecla de la herramienta que quiera a continuación.

Las herramientas de cámara sustituyen a la herramienta que estaba usando. Para mirar alrededor a mitad de una operación sin perderla, use el teclado:

- Las teclas de flecha orbitan.
- {{key:Shift}} con las teclas de flecha encuadra.

Mientras una herramienta de dibujo está a mitad de una operación (tras su primer clic), las teclas de flecha bloquean direcciones en lugar de orbitar. Véase [Inferencia y ajuste](topic:inference#lock-a-direction).

## En un trackpad

La forma más sencilla: abra {{ui:Configuración}} ({{key:Mod+,}}), pestaña {{ui:ModelCraft}}, y ponga Desplazamiento en **Trackpad** (o déjelo en «Detectarlo automáticamente»). Después deslice con dos dedos para orbitar, mantenga pulsada {{key:Shift}} y deslice para encuadrar, y pellizque para acercar, sin botones de cámara. Véase [Ajustes de ModelCraft](topic:settings#scrolling-mouse-wheel-or-trackpad).

Con Desplazamiento en **Rueda de ratón**:

:::mac
- **Zoom:** desplace con dos dedos, o pellizque. Ambos acercan hacia el puntero.
- **Encuadre:** pulse con dos dedos (un clic secundario) y mantenga los dedos apoyados mientras arrastra. Active «Clic secundario» en **Ajustes del sistema** y después en **Trackpad**, si el clic con dos dedos no hace nada.
- **Órbita:** pulse {{key:O}} y arrastre con un dedo, o use las teclas de flecha.
- Mantener pulsada {{key:Ctrl}} mientras hace clic puede no contar como clic derecho en ModelCraft, según el navegador: puede actuar como un clic con {{key:Ctrl}} pulsada. Use la pulsación con dos dedos para encuadrar.
:::

:::windows linux
- **Zoom:** desplace con dos dedos. El pellizco también acerca donde el controlador del trackpad lo envíe como desplazamiento con {{key:Ctrl}}.
- **Encuadre:** arrastre con el botón derecho (en muchos trackpads, pulse la esquina inferior derecha y arrastre), o pulse {{key:H}} y arrastre.
- **Órbita:** pulse {{key:O}} y arrastre, o use las teclas de flecha.
:::

Con Rueda de ratón, el desplazamiento con dos dedos hace zoom; no encuadra. Es lo contrario de muchas páginas web, y así es como funciona la rueda del ratón en la mayoría de los modeladores 3D.

:::tip
{{key:Space}} elige la herramienta {{ui:Seleccionar}} en ModelCraft. Mantener pulsada {{key:Space}} y arrastrar no encuadra, como ocurre en algunas otras aplicaciones.
:::

## En una pantalla táctil

:::touch
- **Un dedo** usa la herramienta actual: **toque** para hacer clic, **pulse y arrastre** para dibujar o arrastrar.
- Mientras el dedo de una herramienta de dibujo está apoyado, una **lupa** encima muestra lo que hay bajo el dedo, para que vea el extremo, el punto medio o la arista a la que se ajusta antes de levantarlo.
- **Mantenga quieto** medio segundo para terminar lo que hace la herramienta, como lo hace {{key:Enter}}: una curva, una cadena de líneas. Sin nada en curso, mantener quieto y después arrastrar con el mismo dedo **orbita** hasta que lo levante.
- **Dos dedos** arrastrados juntos **encuadran**; **pellizque** para acercar. Ambos funcionan en un solo gesto.
- **Tres dedos** arrastrados juntos **orbitan**.
- Para intercambiarlos (dos dedos orbitan, tres encuadran), abra {{ui:Configuración}}, pestaña {{ui:ModelCraft}}, Pantalla táctil.
- Apoyar un segundo dedo **cancela** lo que empezó el primero (un rectángulo a medio dibujar, un empuje en curso). Levante los dedos y empiece de nuevo.
- Una pequeña barra en la parte inferior de la vista tiene **Listo** ({{key:Enter}}), **Cancelar** ({{key:Esc}}) y **Deshacer**, para cuando no hay teclado.
- Ajuste y selección llegan un poco más lejos que con el ratón, y los botones son más grandes, para que un dedo pueda acertar en ellos.
:::

:::mouse
En una pantalla táctil, un dedo usa la herramienta actual (toque para hacer clic, mantenga quieto para terminar, o mantenga quieto y arrastre para orbitar), dos dedos encuadran y pellizcan para acercar, tres dedos orbitan, y una pequeña barra ofrece Listo, Cancelar y Deshacer.
:::

## Vistas estándar

1. Haga clic en {{ui:Vistas}} al final derecho de la barra de herramientas.
2. Elija {{ui:Iso}}, {{ui:Superior}}, {{ui:Frontal}}, {{ui:Derecha}}, {{ui:Posterior}}, {{ui:Izquierda}} o {{ui:Inferior}}.

La vista gira hacia esa dirección y ajusta el modelo completo. {{ui:Frontal}} mira al norte, a lo largo del eje verde; {{ui:Superior}} mira directamente hacia abajo, con el norte arriba.

El cubo de vista en la esquina superior derecha de la vista hace lo mismo en un clic, además de aristas y esquinas, un anillo de brújula para girar el modelo y un botón de inicio. Véase [El cubo de vista](topic:view-cube).

## Perspectiva y proyección paralela

Elija {{ui:Vistas}} y después {{ui:Perspectiva}}. Una marca de verificación indica que la perspectiva está activa. Desactivada, la vista es una proyección paralela (ortográfica): las líneas paralelas del modelo siguen siendo paralelas en pantalla, que es lo que quiere para alzados desde {{ui:Frontal}} o {{ui:Derecha}}. La barra de estado indica «Perspectiva.» o «Proyección paralela.»

Cada escena recuerda si estaba en perspectiva. Véase [Guardar vistas como escenas](topic:scenes).
