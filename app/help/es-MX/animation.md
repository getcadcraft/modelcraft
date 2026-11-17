---
title: Anime la cámara y los objetos, y renderice un video
summary: Cree claves para la cámara y para grupos y componentes en una línea de tiempo, reprodúzcalas en la vista y renderice la animación a un video WebM con el cielo, el sol y los materiales del renderizador.
keywords: animación, animar, línea de tiempo, fotograma clave, claves, cuadro clave, trayectoria de cámara, recorrido, recorrido por el modelo, video, película, webm, renderizar video, cuadros, cuadros por segundo, fps, cabezal de reproducción, clave automática, suavizado, mantener, escenas, secuencia png, movimiento
from: d3a58249
---

La **línea de tiempo** mueve la cámara y cualquier grupo o componente a lo largo del tiempo. Usted define **claves** (dónde está algo en un momento dado); ModelCraft lo mueve suavemente de clave en clave. Reprodúzcalo en la vista y luego renderícelo a un video con el mismo cielo, sol, materiales y lámparas que [una imagen renderizada](topic:render).

## Abrir la línea de tiempo

Haga clic en {{ui:Vistas}} en el grupo {{ui:Cámara}}, y luego en {{ui:Línea de tiempo de animación}}. La línea de tiempo se abre debajo de la vista: los controles arriba, luego una fila **Cámara** y una fila para cada grupo o componente que se mueve. Los rombos son claves; la línea roja es el **cabezal de reproducción**, el momento que se muestra en la vista.

:::touch
En un teléfono la línea de tiempo también se abre debajo de la vista. Sus controles están en una sola fila: deslícela hacia los lados para ver el resto; el botón que cierra la línea de tiempo se queda en su extremo.
:::

Arrastre el control deslizante (o haga clic en una fila) para mover el cabezal de reproducción. {{ui:Reproducir}} reproduce desde el cabezal de reproducción y se convierte en {{ui:Pausa}} mientras se reproduce; haga clic de nuevo para detenerse donde esté. {{key:Space}} hace lo mismo mientras la línea de tiempo está abierta (con la línea de tiempo cerrada, Space sigue siendo Seleccionar). {{ui:Clave anterior}} y {{ui:Clave siguiente}} saltan entre claves. Un estilo propio puede asignar otra tecla a reproducir y pausar: {{ui:Configuración}}, luego los menús, teclas y ratón, el comando *Reproducir o pausar la animación*.

## Mover la cámara

1. Mueva el cabezal de reproducción a donde empieza la toma (0 s), prepare la vista y haga clic en {{ui:Clave de cámara}}.
2. Mueva el cabezal de reproducción más adelante (por ejemplo, 4 s), oriente, encuadre o recorra la vista hasta la siguiente posición, y haga clic de nuevo en {{ui:Clave de cámara}}.
3. Agregue cuantas claves quiera y luego {{ui:Reproducir}}.

La cámara pasa suavemente por cada clave y empieza y termina en reposo.

:::tip
¿Ya tiene [escenas](topic:scenes)? {{ui:Desde escenas}} crea la trayectoria de la cámara a partir de ellas: se detiene en cada escena y luego pasa a la siguiente. Si la línea de tiempo no tiene claves, {{ui:Renderizar video…}} lo hace por sí solo, así que dos escenas o más bastan para un video de recorrido.
:::

## Mover un grupo o componente

1. Seleccione el grupo o componente (solo se mueven grupos y componentes completos; primero [cree un grupo](topic:groups-components)).
2. En 0 s, haga clic en {{ui:Clave de la selección}}.
3. Mueva el cabezal de reproducción más adelante, [desplace, gire o escale](topic:move-copy) el grupo hasta donde debe estar, y haga clic de nuevo en {{ui:Clave de la selección}}.

Se desliza, gira y crece entre sus claves. Los giros toman el camino más corto.

**Clave automática** ahorra el clic del paso 3: mientras {{ui:Clave automática}} está activada, un grupo o componente seleccionado que mueva, gire o escale recibe una clave en el cabezal de reproducción por sí solo (y, la primera vez, una clave en 0 s donde estaba).

:::note
Mover un grupo animado sin una clave solo dura hasta que se mueva el cabezal de reproducción: la próxima vez que reproduzca o arrastre el cabezal, volverá a donde lo colocan sus claves. La barra de estado lo indica. Pulse {{ui:Clave de la selección}} para conservarlo.
:::

## Cambiar claves

- **Elija una clave** haciendo clic en su rombo: el cabezal de reproducción va a ella.
- **Mueva una clave** arrastrando su rombo a lo largo de su fila, o con {{key:Left}} y {{key:Right}} (un cuadro; con {{key:Shift}}, diez).
- **Elimine** con {{ui:Eliminar clave}} (la clave elegida, o todas las claves en el cabezal de reproducción) o con {{key:Delete}} sobre un rombo elegido.
- **Cómo avanza**, para la clave elegida: {{ui:Suavizar}} (una curva que pasa por las claves cercanas), {{ui:Constante}} (una línea recta a una velocidad fija), {{ui:Entrada y salida lentas}} (se detiene en esta clave) o {{ui:Mantener}} (se queda quieto hasta la siguiente clave).
- **Duración (s)** define cuánto dura la animación; una clave colocada después del final la alarga. Para acortarla, primero mueva o elimine las claves que queden después del nuevo final.
- La **×** en la fila de un grupo deja de animarlo.

La línea de tiempo tiene su propio {{ui:Deshacer}} y {{ui:Rehacer}}: el deshacer del modelo ({{key:Mod+Z}}) cambia el modelo, no las claves. La animación se guarda en el archivo `.modelcraft`. Al cerrar la línea de tiempo, los grupos en movimiento vuelven a su primera pose.

## Renderizar el video

1. Haga clic en {{ui:Renderizar video}} en la línea de tiempo (o en {{ui:Exportar}} › {{ui:Renderizar video…}}).
2. Elija el {{ui:Tamaño}}, la {{ui:Cuadros por segundo}}, la {{ui:Calidad de cada cuadro}} y el {{ui:Archivo}}.
3. Haga clic en {{ui:Renderizar video}}. Cada cuadro se muestra al generarse, con el tiempo restante.
4. Cuando termine, haga clic en {{ui:Guardar video}}.

{{ui:Detener}} (o {{key:Esc}}) termina antes; {{ui:Guardar video}} conserva entonces los cuadros ya generados como un video más corto.

El cielo, el sol, los materiales, las lámparas y el brillo son los definidos en {{ui:Renderizar una imagen…}}: defínalos allí primero, revisando una imagen fija. Cada cuadro se renderiza en esta computadora; no se sube nada.

| Opción | Qué hace |
|---|---|
| {{ui:Tamaño}} | 480p, 720p HD, 1080p Full HD, o la forma propia de la vista (hasta 1920 píxeles de ancho) |
| {{ui:Cuadros por segundo}} | 24, 25, 30 o 60 cuadros por segundo. El doble de cuadros tarda el doble |
| {{ui:Calidad de cada cuadro}} | {{ui:Rápida}} (4 pasadas), {{ui:Preliminar}} (16) o {{ui:Buena}} (64): más pasadas dan sombras y bordes más suaves |
| {{ui:Archivo}} | {{ui:Video WebM}}, {{ui:Video MP4 (H.264)}} donde el navegador pueda escribirlo, o {{ui:Imágenes PNG, una por cuadro (ZIP)}} para editores de video (y para navegadores sin codificador de video) |

:::tip
Un video de 10 segundos a 30 cuadros por segundo tiene 301 cuadros. Pruebe primero {{ui:Rápida}} a 480p para revisar el movimiento, luego renderice {{ui:Preliminar}} o {{ui:Buena}} en un tamaño mayor.
:::

WebM se reproduce en navegadores y en VLC, y los editores de video lo convierten. {{ui:Video MP4 (H.264)}} se ofrece donde el navegador puede escribirlo. {{ui:Renderizar video}} usa el renderizador rápido; para trazado de trayectorias de luz en cada cuadro, elija {{ui:Añadir esta animación a la cola}} en el mismo cuadro de diálogo: los cuadros se renderizan en la [cola de renderizado](topic:render#the-render-queue), que necesita WebGPU.

:::firefox safari
Renderizar un video requiere un navegador que codifique el video por sí mismo (WebCodecs): Chrome, Edge, Firefox y Safari 17 recientes sí. Sin ello, elija {{ui:Imágenes PNG, una por cuadro (ZIP)}}.
:::

## Cosas que conviene saber

- Solo se mueven grupos y componentes completos. Las caras, las aristas, la hora del sol y el estilo todavía no cambian con el tiempo.
- {{ui:Exportar animación}} en [Escenas](topic:scenes) sigue grabando la vista tal como se ve en pantalla, en tiempo real; {{ui:Renderizar video}} renderiza cada cuadro con cielo, sombras y materiales.
