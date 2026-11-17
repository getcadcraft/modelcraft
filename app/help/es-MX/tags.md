---
title: Etiquetas: mostrar y ocultar conjuntos de elementos
summary: Asigne una etiqueta a grupos y componentes, como Mobiliario o Muros, y oculte o muestre todo lo que tenga esa etiqueta a la vez.
keywords: etiquetas, etiqueta, capas, capa, mostrar, ocultar, visibilidad, organizar, mobiliario, muros, sin etiqueta, renombrar etiqueta, eliminar etiqueta
from: c1a95a05
---

Una etiqueta es un nombre que asigna a grupos y componentes, como **Mobiliario**, **Muros** o **Sitio**, para ocultar o mostrar todo lo que la tenga a la vez. Las etiquetas son lo que los programas CAD llaman capas. Para ocultar una cosa a la vez, vea [Ocultar, aislar y volver a mostrar](topic:hide-isolate).

## Crear una etiqueta

1. En {{ui:Etiquetas}}, a la derecha, haga clic en {{ui:Agregar etiqueta}}.
2. Escriba su nombre y pulse {{key:Enter}}.

Para renombrar una etiqueta, haga clic en su nombre en {{ui:Etiquetas}}, escriba el nuevo y pulse {{key:Enter}}. Dos etiquetas no pueden tener el mismo nombre.

## Asignar etiquetas a grupos y componentes

1. Seleccione uno o más grupos o componentes.
2. En {{ui:Información de entidad}}, elija la etiqueta en {{ui:Asignar etiqueta}}. {{ui:Etiqueta nueva…}} crea una nueva y asigna esa etiqueta a la selección.

{{ui:Sin etiqueta}} quita la etiqueta. El número junto a cada etiqueta en {{ui:Etiquetas}} indica cuántos grupos y componentes la tienen.

Asigne etiquetas a grupos y componentes, no a caras y aristas sueltas: dibuje primero como grupos las cosas que quiera etiquetar (selecciónelas y pulse {{key:Shift+G}}).

## Ocultar y mostrar

Haga clic en el ojo junto a una etiqueta. Todo lo que tenga esa etiqueta deja de verse, esté donde esté en el modelo (también dentro de otros grupos), y los clics y las referencias lo pasan por alto. Haga clic de nuevo en el ojo para mostrarlo. Los elementos {{ui:Sin etiqueta}} siempre se muestran.

Si edita dentro de un grupo cuya etiqueta oculta, el grupo se cierra.

## Eliminar una etiqueta

Haga clic en la papelera junto a ella. Lo que tenía la etiqueta pasa a ser {{ui:Sin etiqueta}} y se muestra.

## Puntos a tener en cuenta

- Las etiquetas, sus nombres y cuáles están ocultas se guardan en el archivo de ModelCraft. Al copiar un grupo etiquetado en otro modelo, la etiqueta viaja con él.
- Ocultar o mostrar una etiqueta, y cualquier otro cambio en las etiquetas, es un solo paso de deshacer.
- Las exportaciones incluyen todo, incluidas las etiquetas ocultas, igual que con los elementos ocultos.
- Las capas de planos de sitio en DWG y DXF todavía no se importan como etiquetas: todo el dibujo se importa como un solo grupo.
