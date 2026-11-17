---
title: Etiquetas: mostrar y ocultar conjuntos de elementos
summary: Asigne a grupos y componentes una etiqueta, como Mobiliario o Muros, y oculte o muestre de una vez todo lo que tenga esa etiqueta.
keywords: etiquetas, etiqueta, capas, capa, mostrar, ocultar, visibilidad, organizar, mobiliario, muros, sin etiqueta, renombrar etiqueta, eliminar etiqueta
from: c1a95a05
---

Una etiqueta es un nombre que asigna a grupos y componentes, como **Mobiliario**, **Muros** o **Emplazamiento**, para poder ocultar o mostrar de una vez todo lo que tenga esa etiqueta. Las etiquetas son lo que los programas CAD llaman capas. Para ocultar un elemento cada vez, vea [Ocultar, aislar y mostrar](topic:hide-isolate).

## Crear una etiqueta

1. En {{ui:Etiquetas}}, a la derecha, haga clic en {{ui:Añadir etiqueta}}.
2. Escriba su nombre y pulse {{key:Enter}}.

Para cambiar el nombre de una etiqueta, haga clic en su nombre en {{ui:Etiquetas}}, escriba el nuevo y pulse {{key:Enter}}. Dos etiquetas no pueden tener el mismo nombre.

## Asignar etiquetas a grupos y componentes

1. Seleccione uno o varios grupos o componentes.
2. En {{ui:Información de entidad}}, elija la etiqueta en {{ui:Asignar etiqueta}}. {{ui:Etiqueta nueva…}} crea una nueva y asigna esa etiqueta a la selección.

{{ui:Sin etiqueta}} quita la etiqueta. El número junto a cada etiqueta en {{ui:Etiquetas}} indica cuántos grupos y componentes la tienen.

Asigne etiquetas a grupos y componentes, no a caras y aristas sueltas: dibuje primero como grupos los elementos que quiera etiquetar (selecciónelos y pulse {{key:Shift+G}}).

## Ocultar y mostrar

Haga clic en el ojo junto a una etiqueta. Todo lo que tenga esa etiqueta deja de verse, esté donde esté en el modelo (también dentro de otros grupos), y los clics y los ajustes lo atraviesan. Haga clic de nuevo en el ojo para mostrarlo. Los elementos {{ui:Sin etiqueta}} siempre se muestran.

Si está editando dentro de un grupo cuya etiqueta oculta, el grupo se cierra.

## Eliminar una etiqueta

Haga clic en el icono de papelera junto a ella. Lo que tenía la etiqueta pasa a ser {{ui:Sin etiqueta}}, y se muestra.

## Cosas que conviene saber

- Las etiquetas, sus nombres y cuáles están ocultas se guardan en el archivo de ModelCraft. Al copiar un grupo etiquetado en otro modelo, la etiqueta se copia con él.
- Ocultar y mostrar una etiqueta, así como cualquier otro cambio en las etiquetas, es un único paso de deshacer.
- Las exportaciones incluyen todo, también las etiquetas ocultas, igual que ocurre con los elementos ocultos.
- Las capas de los planos de emplazamiento en DWG y DXF todavía no se importan como etiquetas: el dibujo completo se importa como un único grupo.
