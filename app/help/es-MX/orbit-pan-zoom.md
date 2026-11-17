---
title: Órbita, encuadre y zoom
summary: Muévase alrededor del modelo con un mouse, un trackpad, una pantalla táctil o el teclado, y vaya a las vistas estándar.
keywords: órbita, encuadre, zoom, pulsación larga, tres dedos, dos dedos, toque, navegar, cámara, vista, girar vista, trackpad, táctil, pellizcar, botón central, zoom a extensión, perspectiva, paralela, vista superior, iso
from: 10d4d33a
---

Puede mover la cámara en cualquier momento, incluso a mitad de una línea o de un empuje de cara: la herramienta espera donde estaba.

## Con un mouse de tres botones

| Para | Haga esto |
|---|---|
| Orbitar | Arrastre con el botón central (presione la rueda) |
| Encuadrar | Arrastre con el botón derecho, o mantenga presionada {{key:Shift}} y arrastre con el botón central. Presionar o soltar {{key:Shift}} durante un arrastre alterna entre órbita y encuadre |
| Hacer zoom | Gire la rueda. Acerca hacia la cara bajo el puntero, o hacia el punto bajo él a la profundidad del centro de la vista |
| Ver el modelo completo | {{key:Shift+Z}} o {{ui:Extents}} |

La órbita gira la vista alrededor de la parte del modelo que está bajo el puntero, de modo que ese punto se queda donde está mientras todo gira a su alrededor. Sobre un espacio vacío, gira alrededor del centro de la vista. Encuadrar mantiene bajo el puntero el punto que tomó.

Para orbitar siempre alrededor del centro de la vista, o para hacer más rápidas o más lentas la órbita y el encuadre, abra {{ui:Settings}} ({{key:Mod+,}}), pestaña {{ui:ModelCraft}}, **Órbita y encuadre**. Las velocidades se aplican al mouse, al trackpad, al tacto y a las teclas de flecha.

Un clic derecho sin arrastrar no hace nada; ModelCraft no tiene menú contextual con el clic derecho.

## Sin botón central

Use las herramientas de cámara de la barra de herramientas, o el teclado:

1. Pulse {{key:O}} (o haga clic en {{ui:Orbit}}) y arrastre con el botón izquierdo para orbitar. Mantenga {{key:Shift}} durante el arrastre para encuadrar.
2. Pulse {{key:H}} (o haga clic en {{ui:Pan}}) y arrastre para encuadrar.
3. Pulse {{key:Z}} (o haga clic en {{ui:Zoom}}) y arrastre hacia arriba para acercar, o hacia abajo para alejar.
4. Pulse {{key:Space}} para volver a {{ui:Select}}, o pulse la tecla de la herramienta que quiera usar después.

Las herramientas de cámara reemplazan la herramienta que estaba usando. Para mirar alrededor a mitad de una operación sin perderla, use el teclado:

- Las teclas de flecha orbitan.
- {{key:Shift}} con las teclas de flecha encuadra.

Mientras una herramienta de dibujo está a mitad de una operación (después de su primer clic), las teclas de flecha bloquean direcciones en lugar de orbitar. Vea [Inferencia y ajuste](topic:inference#lock-a-direction).

## En un trackpad

La forma más fácil: abra {{ui:Settings}} ({{key:Mod+,}}), pestaña {{ui:ModelCraft}}, y ponga Desplazamiento en **Trackpad** (o déjelo en "Detectar automáticamente"). Después deslice con dos dedos para orbitar, mantenga {{key:Shift}} y deslice para encuadrar, y pellizque para hacer zoom, sin botones de cámara. Vea [Configuración de ModelCraft](topic:settings#scrolling-mouse-wheel-or-trackpad).

Con Desplazamiento en **Rueda del mouse**:

:::mac
- **Zoom:** desplace con dos dedos, o pellizque. Ambos hacen zoom hacia el puntero.
- **Encuadre:** presione con dos dedos (un clic secundario) y mantenga los dedos abajo mientras arrastra. Active "Clic secundario" en **Configuración del sistema**, luego **Trackpad**, si el clic con dos dedos no hace nada.
- **Órbita:** pulse {{key:O}} y arrastre con un dedo, o use las teclas de flecha.
- Mantener presionada {{key:Ctrl}} mientras hace clic puede no contar como clic derecho en ModelCraft, según el navegador: puede actuar como un clic con {{key:Ctrl}} presionada. Use la presión con dos dedos para encuadrar.
:::

:::windows linux
- **Zoom:** desplace con dos dedos. El pellizco también hace zoom donde el controlador del trackpad lo envía como desplazamiento con {{key:Ctrl}}.
- **Encuadre:** arrastre con el botón derecho (en muchos trackpads, presione la esquina inferior derecha y arrastre), o pulse {{key:H}} y arrastre.
- **Órbita:** pulse {{key:O}} y arrastre, o use las teclas de flecha.
:::

Con la rueda del mouse, el desplazamiento con dos dedos hace zoom; no encuadra. Es lo contrario de muchas páginas web, y así se comporta la rueda del mouse en la mayoría de los modeladores 3D.

:::tip
{{key:Space}} elige la herramienta {{ui:Select}} en ModelCraft. Mantener presionada {{key:Space}} y arrastrar no encuadra, como sucede en algunas otras aplicaciones.
:::

## En una pantalla táctil

:::touch
- **Un dedo** usa la herramienta actual: **toque** para hacer clic, **presione y arrastre** para dibujar o arrastrar.
- Mientras el dedo de una herramienta de dibujo está abajo, una **lupa** sobre él muestra lo que hay bajo el dedo, para que vea el extremo, el punto medio o la arista a la que se ajusta antes de levantarlo.
- **Mantenga quieto** durante medio segundo para terminar lo que hace la herramienta, igual que lo hace {{key:Enter}}: una curva, una cadena de líneas. Sin nada en curso, mantener quieto y luego arrastrar el mismo dedo **orbita** hasta que lo levanta.
- **Dos dedos** arrastrados juntos **encuadran**; **pellizque** para hacer zoom. Ambos funcionan en un solo gesto.
- **Tres dedos** arrastrados juntos **orbitan**.
- Para intercambiarlos (dos dedos orbitan, tres encuadran), abra {{ui:Settings}}, pestaña {{ui:ModelCraft}}, Pantalla táctil.
- Poner un segundo dedo **cancela** lo que empezó el primero (un rectángulo a medio dibujar, un empuje en curso). Levante los dedos y empiece de nuevo.
- Una pequeña barra en la parte inferior de la vista tiene **Listo** ({{key:Enter}}), **Cancelar** ({{key:Esc}}) y **Deshacer**, para cuando no hay teclado.
- El ajuste a puntos y la designación llegan un poco más lejos que con el mouse, y los botones son más grandes, para que un dedo pueda tocarlos.
:::

:::mouse
En una pantalla táctil, un dedo usa la herramienta actual (toque para hacer clic, mantenga quieto para terminar, o mantenga quieto y arrastre para orbitar), dos dedos encuadran y pellizcan para hacer zoom, tres dedos orbitan, y una pequeña barra ofrece Listo, Cancelar y Deshacer.
:::

## Vistas estándar

1. Haga clic en {{ui:Views}} al extremo derecho de la barra de herramientas.
2. Elija {{ui:Iso}}, {{ui:Top}}, {{ui:Front}}, {{ui:Right}}, {{ui:Back}}, {{ui:Left}} o {{ui:Bottom}}.

La vista gira hacia esa dirección y encuadra el modelo completo. {{ui:Front}} mira hacia el norte, a lo largo del eje verde; {{ui:Top}} mira directamente hacia abajo con el norte arriba.

El cubo de vistas en la esquina superior derecha de la vista hace lo mismo con un solo clic, además de aristas y esquinas, un anillo de brújula para girar el modelo y un botón de inicio. Vea [El cubo de vistas](topic:view-cube).

## Perspectiva y proyección paralela

Elija {{ui:Views}}, y luego {{ui:Perspective}}. Una marca de verificación indica que la perspectiva está activada. Desactivada, la vista es una proyección paralela (ortográfica): las líneas paralelas en el modelo siguen paralelas en pantalla, lo que es lo que se quiere para alzados desde {{ui:Front}} o {{ui:Right}}. La barra de estado dice "Perspectiva." o "Proyección paralela.".

Cada escena recuerda si estaba en perspectiva. Vea [Guardar vistas como escenas](topic:scenes).
