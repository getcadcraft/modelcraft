---
title: Órbita, desplazamiento y zoom
summary: Movete alrededor del modelo con mouse, trackpad, pantalla táctil o teclado, y saltá a las vistas estándar.
keywords: órbita, desplazar, zoom, pulsación larga, tres dedos, dos dedos, toque, navegar, cámara, vista, girar vista, trackpad, táctil, pellizco, botón central, zoom a extensiones, perspectiva, paralela, vista superior, iso
from: 10d4d33a
---

Podés mover la cámara en cualquier momento, incluso en medio de dibujar una línea o empujar una cara: la herramienta espera donde estaba.

## Con un mouse de tres botones

| Para | Hacé esto |
|---|---|
| Orbitar | Arrastrá con el botón del medio (presioná la rueda) |
| Desplazar | Arrastrá con el botón derecho, o mantené {{key:Shift}} y arrastrá con el botón del medio. Presionar o soltar {{key:Shift}} durante un arrastre cambia entre orbitar y desplazar |
| Hacer zoom | Girá la rueda. Hace zoom hacia la cara bajo el puntero, o hacia el punto bajo él a la profundidad del centro de la vista |
| Ver el modelo entero | {{key:Shift+Z}} o {{ui:Extensiones}} |

Orbitar gira la vista alrededor de la parte del modelo que está bajo el puntero, así que ese punto queda donde está mientras todo gira a su alrededor. Sobre el espacio vacío gira alrededor del centro de la vista. Desplazar mantiene el punto que tomaste bajo el puntero.

Para orbitar siempre alrededor del centro de la vista, o para hacer más rápidas o más lentas la órbita y el desplazamiento, abrí {{ui:Configuración}} ({{key:Mod+,}}), pestaña {{ui:ModelCraft}}, **Órbita y desplazamiento**. Las velocidades se aplican al mouse, al trackpad, al táctil y a las teclas de flecha.

Un clic derecho sin arrastrar no hace nada; ModelCraft no tiene menú de clic derecho.

## Sin botón central

Usá las herramientas de cámara de la barra, o el teclado:

1. Apretá {{key:O}} (o clickeá {{ui:Orbitar}}) y arrastrá con el botón izquierdo para orbitar. Mantené {{key:Shift}} durante el arrastre para desplazar.
2. Apretá {{key:H}} (o clickeá {{ui:Desplazar}}) y arrastrá para desplazar.
3. Apretá {{key:Z}} (o clickeá {{ui:Zoom}}) y arrastrá hacia arriba para acercar, hacia abajo para alejar.
4. Apretá {{key:Space}} para volver a {{ui:Seleccionar}}, o apretá la tecla de la herramienta que querés usar a continuación.

Las herramientas de cámara reemplazan la herramienta que estabas usando. Para mirar alrededor en medio de una operación sin perderla, usá el teclado:

- Las teclas de flecha orbitan.
- {{key:Shift}} con las teclas de flecha desplaza.

Mientras una herramienta de dibujo está en medio de una operación (después de su primer clic), las teclas de flecha bloquean direcciones en vez de orbitar. Ver [Inferencia y ajuste](topic:inference#lock-a-direction).

## En trackpad

La forma más fácil: abrí {{ui:Configuración}} ({{key:Mod+,}}), pestaña {{ui:ModelCraft}}, y poné Desplazamiento en **Trackpad** (o dejalo en "Averiguar"). Después deslizá con dos dedos para orbitar, mantené {{key:Shift}} y deslizá para desplazar, y pellizcá para hacer zoom, sin botones de cámara. Ver [Configuración de ModelCraft](topic:settings#scrolling-mouse-wheel-or-trackpad).

Con Desplazamiento en **Rueda del mouse**:

:::mac
- **Zoom:** deslizá con dos dedos, o pellizcá. Ambos hacen zoom hacia el puntero.
- **Desplazar:** presioná con dos dedos (un clic secundario) y mantené los dedos apoyados mientras arrastrás. Activá "Clic secundario" en **Configuración del Sistema**, después **Trackpad**, si el clic con dos dedos no hace nada.
- **Orbitar:** apretá {{key:O}} y arrastrá con un dedo, o usá las teclas de flecha.
- Mantener {{key:Ctrl}} mientras clickeás puede no contar como clic derecho en ModelCraft, según el navegador: puede actuar como clic con {{key:Ctrl}} apretado. Usá la presión con dos dedos para desplazar.
:::

:::windows linux
- **Zoom:** deslizá con dos dedos. El pellizco también hace zoom donde el controlador del trackpad lo envía como desplazamiento con {{key:Ctrl}}.
- **Desplazar:** arrastrá con el botón derecho (en muchos trackpads, presioná la esquina inferior derecha y arrastrá), o apretá {{key:H}} y arrastrá.
- **Orbitar:** apretá {{key:O}} y arrastrá, o usá las teclas de flecha.
:::

Con Rueda del mouse, el desplazamiento con dos dedos hace zoom; no desplaza. Es lo contrario de muchas páginas web, y así se comporta la rueda del mouse en la mayoría de los modeladores 3D.

:::tip
{{key:Space}} elige la herramienta {{ui:Seleccionar}} en ModelCraft. Mantener {{key:Space}} y arrastrar no desplaza, como sí pasa en otras apps.
:::

## En pantalla táctil

:::touch
- **Un dedo** usa la herramienta actual: **toque** para clickear, **presioná y arrastrá** para dibujar o arrastrar.
- Mientras el dedo de una herramienta de dibujo está apoyado, una **lupa** encima muestra lo que hay bajo el dedo, así podés ver el extremo, el punto medio o el borde al que se ajusta antes de levantarlo.
- **Quedate quieto** medio segundo para terminar lo que hace la herramienta, igual que lo hace {{key:Enter}}: una curva, una cadena de líneas. Sin nada en curso, quedarte quieto y después arrastrar con el mismo dedo **orbita** hasta que lo levantes.
- **Dos dedos** arrastrados juntos **desplazan**; **pellizcá** para hacer zoom. Ambos funcionan en un mismo gesto.
- **Tres dedos** arrastrados juntos **orbitan**.
- Para intercambiarlos (dos dedos orbitan, tres desplazan), abrí {{ui:Configuración}}, pestaña {{ui:ModelCraft}}, Pantalla táctil.
- Apoyar un segundo dedo **cancela** lo que empezó el primero (un rectángulo a medio dibujar, un empujar/tirar en curso). Levantá los dedos y empezá otra vez.
- Una barra pequeña abajo de la vista tiene **Listo** ({{key:Enter}}), **Cancelar** ({{key:Esc}}) y **Deshacer**, para cuando no hay teclado.
- Ajustarse y elegir llegan un poco más lejos que con mouse, y los botones son más grandes, para que un dedo les pegue.
:::

:::mouse
En pantalla táctil, un dedo usa la herramienta actual (toque para clickear, quedarte quieto para terminar, o quedarte quieto y arrastrar para orbitar), dos dedos desplazan y pellizcar hace zoom, tres dedos orbitan, y una barra pequeña ofrece Listo, Cancelar y Deshacer.
:::

## Vistas estándar

1. Clickeá {{ui:Vistas}} en el extremo derecho de la barra.
2. Elegí {{ui:Iso}}, {{ui:Superior}}, {{ui:Frontal}}, {{ui:Derecha}}, {{ui:Posterior}}, {{ui:Izquierda}} o {{ui:Inferior}}.

La vista gira hacia esa dirección y ajusta todo el modelo. {{ui:Frontal}} mira hacia el norte, a lo largo del eje verde; {{ui:Superior}} mira directamente hacia abajo con el norte arriba.

El cubo de vista en la esquina superior derecha de la vista hace lo mismo con un clic, además de bordes y esquinas, un anillo de brújula para girar el modelo y un botón de inicio. Ver [El cubo de vista](topic:view-cube).

## Proyección en perspectiva y paralela

Elegí {{ui:Vistas}}, después {{ui:Perspectiva}}. Una marca de verificación indica que la perspectiva está activada. Desactivada, la vista es una proyección paralela (ortogonal): las líneas paralelas en el modelo siguen paralelas en pantalla, que es lo que querés para alzados desde {{ui:Frontal}} o {{ui:Derecha}}. La barra de estado dice "Perspectiva." o "Proyección paralela.".

Cada escena recuerda si estaba en perspectiva. Ver [Guardar vistas como escenas](topic:scenes).
