---
title: Etiquetas: mostrar e ocultar conxuntos de elementos
summary: Dar a grupos e compoñentes unha etiqueta, como Mobiliario ou Muros, e ocultar ou mostrar de golpe todo o que a teña.
keywords: etiquetas, etiqueta, capas, capa, mostrar, ocultar, visibilidade, organizar, mobiliario, muros, sen etiqueta, renomear etiqueta, eliminar etiqueta
from: c1a95a05
---

Unha etiqueta é un nome que se lle dá a grupos e compoñentes, como **Mobiliario**, **Muros** ou **Emprazamento**, para ocultar ou mostrar de golpe todo o que teña esa etiqueta. As etiquetas son o que os programas CAD chaman capas. Para ocultar un elemento de cada vez, véxase [Ocultar, illar e mostrar](topic:hide-isolate).

## Crear unha etiqueta

1. En {{ui:Tags}}, á dereita, prema en {{ui:Add tag}}.
2. Escriba o seu nome e prema {{key:Enter}}.

Para cambiar o nome dunha etiqueta, prema no seu nome en {{ui:Tags}}, escriba o novo e prema {{key:Enter}}. Dúas etiquetas non poden ter o mesmo nome.

## Etiquetar grupos e compoñentes

1. Seleccione un ou varios grupos ou compoñentes.
2. En {{ui:Entity info}}, escolla a etiqueta en {{ui:Tag}}. {{ui:New tag…}} crea unha nova etiqueta e etiqueta a selección con ela.

{{ui:Untagged}} quita a etiqueta. O número ao lado de cada etiqueta en {{ui:Tags}} indica cantos grupos e compoñentes a teñen.

Etiquete grupos e compoñentes, non caras nin bordos soltos: debuxe primeiro como grupos os elementos que quere etiquetar (selecciónos e prema {{key:Shift+G}}).

## Ocultar e mostrar

Prema no ollo ao lado dunha etiqueta. Todo o que teña esa etiqueta sae da vista, estea onde estea no modelo (tamén dentro doutros grupos), e os clics e os encaixes pasan por diante del. Prema de novo no ollo para mostralo. Os elementos {{ui:Untagged}} móstranse sempre.

Se está editando dentro dun grupo cuxa etiqueta oculta, o grupo péchase.

## Eliminar unha etiqueta

Prema na papeleira ao lado dela. O que tiña a etiqueta pasa a {{ui:Untagged}} e móstrase.

## Cousas que debe saber

- As etiquetas, os seus nomes e cales están ocultas gárdanse no ficheiro de ModelCraft. Ao copiar un grupo etiquetado a outro modelo, a etiqueta vai con el.
- Ocultar e mostrar unha etiqueta, e calquera outro cambio nas etiquetas, é un único paso de desfacer.
- As exportacións inclúen todo, incluídas as etiquetas ocultas, como sucede cos elementos ocultos.
- As capas dos planos de emprazamento en DWG e DXF aínda non se importan como etiquetas: todo o debuxo entra como un único grupo.
