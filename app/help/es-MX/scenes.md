---
title: Guardar vistas como escenas
summary: Guarde una cámara y un estilo como escena, actualícela y cámbiele el nombre, y avance o reproduzca escenas para presentar un diseño.
keywords: escena, vista, vista guardada, cámara, presentación, animación, reproducir, diapositivas, página arriba, página abajo, pestañas, recorrido
from: 38680d6e
---

Una **escena** recuerda una posición de cámara, un estilo y lo que está oculto: desde dónde mira, perspectiva o paralela, el estilo de caras, las aristas, los ajustes del sol, los grupos ocultos, las etiquetas desactivadas y el corte de sección. Las escenas se guardan en el archivo `.modelcraft`.

## Agregar una escena

1. Prepare la vista: oriente, haga zoom, elija un estilo y fije el sol.
2. En el panel {{ui:Escenas}} a la derecha, haga clic en {{ui:Agregar escena}}.

   La escena aparece en la lista, con el nombre "Escena 1", "Escena 2" y así sucesivamente, y como una pestaña en la parte superior de la vista 3D. La barra de estado dice "Escena 1 guardada: esta cámara, estilo y lo que está oculto."

## Ir a una escena

- Haga clic en su pestaña sobre la vista 3D, o en su nombre en la lista {{ui:Escenas}}.
- O pulse {{key:PageDown}} para la siguiente escena y {{key:PageUp}} para la anterior. {{ui:Siguiente}} y {{ui:Anterior}} debajo de la lista hacen lo mismo.

La cámara se desliza hacia la escena en poco más de medio segundo. Si su computadora está configurada para reducir el movimiento, salta directamente allí.

## Cambiar, renombrar o eliminar una escena

Cada escena de la lista tiene tres botones pequeños después de su nombre:

- **Actualizar** (las flechas circulares): guarda la cámara, el estilo y lo que está oculto actuales en esa escena. "Escena 2 actualizada."
- **Renombrar** (el lápiz): abre el cuadro "Renombrar escena". Escriba el nuevo nombre y haga clic en {{ui:Guardar}}.
- **Eliminar** (el bote de basura): quita la escena. "Escena 2 eliminada. Ctrl+Z la restaura."

Agregar, actualizar, renombrar y eliminar escenas son pasos de deshacer, como los cambios al modelo.

## Bloquear la cámara de una escena

Cuando renderiza la misma vista una y otra vez mientras cambia el diseño, bloquee la cámara de esa escena para que la vista nunca se mueva por accidente.

1. En la lista {{ui:Escenas}}, haga clic en el botón de **bloqueo** (el candado abierto) después del nombre de la escena. Se cierra, y la pestaña de la escena sobre la vista 3D muestra un pequeño candado. La barra de estado dice "Escena 2: cámara bloqueada."
2. Vaya a la escena cuando quiera renderizar: la cámara regresa exactamente a la vista guardada, así las imágenes hechas desde ella coinciden con las anteriores.

Mientras la cámara está bloqueada, **Actualizar** sigue guardando el estilo y lo que está oculto en la escena, pero la cámara se queda donde estaba, aunque haya orbitado. Haga clic de nuevo en el candado para desbloquearla; entonces Actualizar vuelve a guardar la vista actual. Bloquear y desbloquear son pasos de deshacer, y el bloqueo se guarda en el archivo `.modelcraft`.

## Presentar

1. Agregue dos o más escenas.
2. Haga clic en {{ui:Reproducir}} debajo de la lista. ModelCraft pasa a la siguiente escena cada pocos segundos, y vuelve a la primera después de la última.
3. Haga clic en {{ui:Detener}} (el mismo botón) o pulse {{key:Esc}} para detener.

Para un estudio de sol, agregue una escena por hora cambiando solo la {{ui:Hora}}, y luego reprodúzcalas. Véase [Estilos y sombras del sol](topic:styles-shadows#a-sun-study).

Para presentar sin las barras, pulse {{key:Ctrl+Shift+F}} dos veces: pantalla completa, y luego pantalla completa con las barras ocultas. Las pestañas de escena se quedan sobre la vista.

## Lo que muestra una escena

Una escena recuerda lo que estaba oculto al guardarla: los grupos y componentes que [ocultó](topic:hide-isolate), las [etiquetas](topic:tags) que desactivó y qué [plano de sección](topic:sections) corta. Al ir a la escena, se vuelven a ocultar y mostrar. Así, una escena puede mostrar toda la casa, la siguiente la casa con la etiqueta del techo desactivada, y la siguiente una sección a través de ella.

Las caras y aristas sueltas que estén ocultas no forman parte de las escenas. Ir a una escena no crea un paso de deshacer. Las escenas guardadas por una versión anterior de ModelCraft dejan lo oculto como está; haga clic en Actualizar para guardarlo en ellas.

## Exportar una animación

{{ui:Exportar animación}}, debajo de la lista, reproduce las escenas de la primera a la última, moviendo la cámara suavemente entre ellas, y guarda la película como video **WebM** (dos segundos de movimiento y una pausa breve por escena). Registra la vista tal como la ve, a su tamaño en pantalla, en [vista de presentación](topic:styles-shadows#presentation-view) (sin ejes, guías ni selección). Pulse {{key:Esc}} o haga clic de nuevo en el botón para detener sin guardar. WebM se reproduce en navegadores y en VLC, y los editores de video lo convierten.

Para un recorrido renderizado (cielo, sol, sombras, materiales) con el tamaño que elija, use {{ui:Renderizar video…}} en su lugar: sin claves de animación, toma las escenas, en orden, como trayectoria de la cámara. Véase [Animar la cámara y los objetos](topic:animation).

## Cosas que debe saber

- Cambiar el estilo o mover la cámara después de ir a una escena no cambia la escena hasta que haga clic en Actualizar.
- Las escenas no se exportan a Collada, OBJ, glTF, STL ni IFC.
