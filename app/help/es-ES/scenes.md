---
title: Guardar vistas como escenas
summary: Guarde una cámara y un estilo como escena, actualícela y cámbiele el nombre, y avance por las escenas o reprodúzcalas para presentar un diseño.
keywords: escena, vista, vista guardada, cámara, presentación, animación, reproducir, diapositivas, re pág, av pág, pestañas, recorrido
from: 38680d6e
---

Una **escena** recuerda una posición de cámara, un estilo y lo que está oculto: desde dónde se mira, perspectiva o paralela, el estilo de caras, las aristas, los ajustes del sol, los grupos ocultos, las etiquetas desactivadas y el corte de sección. Las escenas se guardan en el archivo `.modelcraft`.

## Añadir una escena

1. Prepare la vista: oriente, acerque, elija un estilo, fije el sol.
2. En el panel {{ui:Escenas}} de la derecha, pulse {{ui:Añadir escena}}.

   La escena aparece en la lista, con el nombre "Escena 1", "Escena 2" y así sucesivamente, y como una pestaña en la parte superior de la vista 3D. La barra de estado indica "Escena 1 guardada: esta cámara, estilo y lo que está oculto."

## Ir a una escena

- Pulse su pestaña sobre la vista 3D, o su nombre en la lista {{ui:Escenas}}.
- O pulse {{key:PageDown}} para la siguiente escena y {{key:PageUp}} para la anterior. {{ui:Siguiente}} y {{ui:Anterior}} bajo la lista hacen lo mismo.

La cámara se desplaza hasta la escena en algo más de medio segundo. Si su equipo está configurado para reducir el movimiento, salta hasta ella.

## Cambiar, renombrar o eliminar una escena

Cada escena de la lista tiene tres pequeños botones tras su nombre:

- **Actualizar** (las flechas circulares): guarda la cámara, el estilo y lo que está oculto actuales en esa escena. "Escena 2 actualizada."
- **Renombrar** (el lápiz): abre un cuadro "Renombrar escena". Escriba el nuevo nombre y pulse {{ui:Guardar}}.
- **Eliminar** (la papelera): quita la escena. "Escena 2 eliminada. Ctrl+Z la restaura."

Añadir, actualizar, renombrar y eliminar escenas son pasos de deshacer, como los cambios en el modelo.

## Bloquear la cámara de una escena

Cuando renderice la misma vista una y otra vez a medida que cambia el diseño, bloquee la cámara de esa escena para que la vista nunca se mueva por accidente.

1. En la lista {{ui:Escenas}}, pulse el botón de **bloqueo** (el candado abierto) tras el nombre de la escena. Se cierra, y la pestaña de la escena sobre la vista 3D muestra un pequeño candado. La barra de estado indica "Escena 2: cámara bloqueada."
2. Vaya a la escena cada vez que quiera renderizar: la cámara vuelve exactamente a la vista guardada, así que las imágenes hechas desde ella coinciden con las anteriores.

Mientras la cámara está bloqueada, **Actualizar** sigue guardando el estilo y lo oculto en la escena, pero la cámara se queda donde estaba, aunque haya orbitado. Pulse de nuevo el candado para desbloquearla; entonces Actualizar vuelve a guardar la vista actual. Bloquear y desbloquear son pasos de deshacer, y el bloqueo se guarda en el archivo `.modelcraft`.

## Presentar

1. Añada dos o más escenas.
2. Pulse {{ui:Reproducir}} bajo la lista. ModelCraft pasa a la siguiente escena cada pocos segundos, y vuelve a la primera tras la última.
3. Pulse {{ui:Detener}} (el mismo botón) o {{key:Esc}} para parar.

Para un estudio solar, añada una escena por hora cambiando solo {{ui:Hora}}, y luego reprodúzcalas. Vea [Estilos y sombras de sol](topic:styles-shadows#a-sun-study).

Para presentar sin las barras, pulse {{key:Ctrl+Shift+F}} dos veces: pantalla completa, y luego pantalla completa con las barras ocultas. Las pestañas de escena se mantienen sobre la vista.

## Qué muestra una escena

Una escena recuerda lo que estaba oculto al guardarla: los grupos y componentes que ha [ocultado](topic:hide-isolate), las [etiquetas](topic:tags) que desactivó y qué [plano de sección](topic:sections) corta. Al ir a la escena, se ocultan y se muestran de nuevo. Así, una escena puede mostrar toda la casa, la siguiente la casa con la etiqueta del tejado desactivada, y la siguiente una sección a través de ella.

Las caras y aristas sueltas ocultas no forman parte de las escenas. Ir a una escena no crea un paso de deshacer. Las escenas guardadas por una versión anterior de ModelCraft dejan lo oculto como está; pulse Actualizar para guardarlo en ellas.

## Exportar una animación

{{ui:Exportar animación}}, bajo la lista, reproduce las escenas de la primera a la última, moviendo la cámara suavemente entre ellas, y guarda la película como un video **WebM** (dos segundos de movimiento y una breve pausa por escena). Registra la vista tal como la ve, a su tamaño en pantalla, en la [vista de presentación](topic:styles-shadows#presentation-view) (sin ejes, guías ni selección). Pulse {{key:Esc}} o el botón de nuevo para detener sin guardar. WebM se reproduce en navegadores y en VLC, y los editores de video lo convierten.

Para un recorrido renderizado (cielo, sol, sombras, materiales) a un tamaño que elija, use {{ui:Renderizar video…}} en su lugar: sin claves de animación, toma las escenas en orden como trayectoria de la cámara. Vea [Animar la cámara y los objetos](topic:animation).

## Puntos que debe conocer

- Si cambia el estilo o mueve la cámara después de ir a una escena, la escena no cambia hasta que pulse Actualizar.
- Las escenas no se exportan a Collada, OBJ, glTF, STL ni IFC.
