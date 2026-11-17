---
title: Animá la cámara y los objetos, y renderizá un video
summary: Marcá claves para la cámara y para grupos y componentes en una línea de tiempo, reprodúcelas en la vista, y renderizá la animación como video WebM con el cielo, el sol y los materiales del renderizador.
keywords: animación, animar, línea de tiempo, fotograma clave, claves, cuadro clave, recorrido de cámara, recorrido, vuelo, paseo, caminata, video, película, film, webm, renderizar video, cuadros, velocidad de cuadros, fps, cabezal, clave automática, suavizado, suavizar, mantener, escenas, secuencia PNG, movimiento
from: d3a58249
---

La **línea de tiempo** mueve la cámara y cualquier grupo o componente a lo largo del tiempo. Vos marcás las **claves** (dónde está algo en un momento dado); ModelCraft lo mueve suavemente de clave en clave. Reproducila en la vista, y después renderizala como video con el mismo cielo, sol, materiales y lámparas que [una imagen renderizada](topic:render).

## Abrir la línea de tiempo

Hacé clic en {{ui:Vistas}} en el grupo {{ui:Cámara}}, y después en {{ui:Línea de tiempo de animación}}. La línea de tiempo se abre debajo de la vista: los controles arriba, después una fila **Cámara** y una fila para cada grupo o componente que se mueve. Los rombos son claves; la línea roja es el **cabezal de reproducción**, el momento que se muestra en la vista.

:::touch
En un teléfono la línea de tiempo también se abre debajo de la vista. Sus controles están en una sola fila: deslizala de lado para llegar al resto; el botón que la cierra queda en su extremo.
:::

Arrastrá el deslizador (o hacé clic en una fila) para mover el cabezal. {{ui:Reproducir}} reproduce desde el cabezal y se convierte en {{ui:Pausa}} mientras suena; hacé clic de nuevo para parar donde esté. {{key:Space}} hace lo mismo mientras la línea de tiempo está abierta (con la línea cerrada, Space sigue siendo Seleccionar). {{ui:Clave anterior}} y {{ui:Clave siguiente}} saltan entre claves. Un estilo propio puede darle a reproducir y pausar otra tecla: {{ui:Configuración}}, después los menús, teclas y mouse, el comando *Reproducir o pausar la animación*.

## Mover la cámara

1. Llevá el cabezal a donde empieza la toma (0 s), armá la vista y hacé clic en {{ui:Clave de cámara}}.
2. Llevá el cabezal más adelante (digamos 4 s), orbitá, desplazá o caminá la vista hasta la siguiente posición, y hacé clic de nuevo en {{ui:Clave de cámara}}.
3. Agregá todas las claves que quieras, y después {{ui:Reproducir}}.

La cámara pasa suavemente por cada clave y empieza y termina en reposo.

:::tip
¿Ya tenés [escenas](topic:scenes)? {{ui:Desde escenas}} arma con ellas el recorrido de la cámara: se detiene en cada escena y después pasa a la siguiente. Si la línea de tiempo no tiene ninguna clave, {{ui:Renderizar video…}} lo hace solo, así que dos escenas o más alcanzan para un video de recorrido.
:::

## Mover un grupo o componente

1. Seleccioná el grupo o componente (solo se mueven grupos y componentes completos; [creá un grupo](topic:groups-components) antes).
2. En 0 s, hacé clic en {{ui:Clave seleccionada}}.
3. Llevá el cabezal más adelante, [mové, rotá o escalá](topic:move-copy) el grupo hasta donde debe estar, y hacé clic de nuevo en {{ui:Clave seleccionada}}.

Se desliza, gira y crece entre sus claves. Los giros toman el camino más corto.

**Clave automática** ahorra el clic del paso 3: mientras {{ui:Clave automática}} esté activada, un grupo o componente seleccionado que movés, rotás o escalás recibe una clave en el cabezal por sí solo (y, la primera vez, una clave en 0 s donde estaba).

:::note
Mover un grupo animado sin una clave dura solo hasta que el cabezal se mueve: la próxima vez que reproducís o arrastrás el cabezal, vuelve adonde lo ponen sus claves. La barra de estado lo avisa. Apretá {{ui:Clave seleccionada}} para mantenerlo.
:::

## Cambiar claves

- **Elegir una clave** haciendo clic en su rombo: el cabezal va hasta ella.
- **Mover una clave** arrastrando su rombo a lo largo de su fila, o con {{key:Left}} y {{key:Right}} (un cuadro; con {{key:Shift}}, diez).
- **Borrar** con {{ui:Eliminar clave}} (la clave elegida, o todas las claves del cabezal) o con {{key:Delete}} sobre un rombo elegido.
- **Cómo sigue hacia la siguiente**, para la clave elegida: {{ui:Suavizar}} (una curva que pasa por las claves de alrededor), {{ui:Constante}} (una línea recta a velocidad fija), {{ui:Lento al inicio y al final}} (queda en reposo en esta clave) o {{ui:Mantener}} (queda quieta hasta la siguiente clave).
- **Largo (s)** fija cuánto dura la animación; una clave puesta después del final la alarga. Para acortarla, primero movés o borrás las claves que pasan el nuevo final.
- La **×** en la fila de un grupo deja de animarlo.

La línea de tiempo tiene su propio {{ui:Deshacer}} y {{ui:Rehacer}}: el deshacer del modelo ({{key:Mod+Z}}) cambia el modelo, no las claves. La animación se guarda en el archivo `.modelcraft`. Al cerrar la línea de tiempo, los grupos que se movían vuelven a su primera pose.

## Renderizar el video

1. Hacé clic en {{ui:Renderizar video}} en la línea de tiempo (o {{ui:Exportar}} › {{ui:Renderizar video…}}).
2. Elegí el {{ui:Tamaño}}, la {{ui:Velocidad de cuadros}}, la {{ui:Calidad de cada cuadro}} y el {{ui:Archivo}}.
3. Hacé clic en {{ui:Renderizar video}}. Cada cuadro se muestra mientras se hace, con el tiempo que falta.
4. Cuando termine, hacé clic en {{ui:Guardar video}}.

{{ui:Pe'a}} (o {{key:Esc}}) termina antes; {{ui:Guardar video}} después guarda los cuadros ya hechos como un video más corto.

El cielo, el sol, los materiales, las lámparas y el brillo son los que se fijaron en {{ui:Render de una imagen…}}: fijalos ahí primero, revisando una imagen fija. Cada cuadro se renderiza en esta computadora; no se sube nada.

| Ajuste | Qué hace |
|---|---|
| {{ui:Tamaño}} | 480p, 720p HD, 1080p Full HD, o la forma propia de la vista (hasta 1920 píxeles de ancho) |
| {{ui:Velocidad de cuadros}} | 24, 25, 30 o 60 cuadros por segundo. El doble de cuadros tarda el doble |
| {{ui:Calidad de cada cuadro}} | {{ui:Rápido}} (4 pasadas), {{ui:Borrador}} (16) o {{ui:Bueno}} (64): más pasadas dan sombras y bordes más suaves |
| {{ui:Archivo}} | {{ui:Video WebM}}, {{ui:Video MP4 (H.264)}} donde el navegador lo puede escribir, o {{ui:Imágenes PNG, una por cuadro (ZIP)}} para editores de video (y para navegadores sin codificador de video) |

:::tip
Un video de 10 segundos a 30 cuadros por segundo tiene 301 cuadros. Probá primero {{ui:Rápido}} en 480p para revisar el movimiento, y después renderizá {{ui:Borrador}} o {{ui:Bueno}} en un tamaño más grande.
:::

WebM se reproduce en navegadores y en VLC, y los editores de video lo convierten. {{ui:Video MP4 (H.264)}} se ofrece donde el navegador puede escribirlo. {{ui:Renderizar video}} usa el renderizador rápido; para trazar trayectorias de luz en cada cuadro, elegí {{ui:Agregar esta animación a la cola}} en el mismo diálogo: los cuadros se renderizan en la [cola de renderizado](topic:render#the-render-queue), que necesita WebGPU.

:::firefox safari
Renderizar un video necesita un navegador que codifique video por sí mismo (WebCodecs): Chrome reciente, Edge, Firefox y Safari 17 lo hacen. Sin eso, elegí {{ui:Imágenes PNG, una por cuadro (ZIP)}}.
:::

## Cosas que conviene saber

- Solo se mueven grupos y componentes completos. Las caras, aristas, la hora del sol y el estilo todavía no cambian con el tiempo.
- {{ui:Exportar animación}} en [Escenas](topic:scenes) todavía graba la vista tal como está en pantalla, en tiempo real; {{ui:Renderizar video}} renderiza cada cuadro con cielo, sombras y materiales.
