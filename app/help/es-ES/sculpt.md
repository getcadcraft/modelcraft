---
title: Esculpir una malla
summary: Dé forma a una malla como si fuera arcilla con pinceles —dibujar, arcilla, suavizar, agarrar, inflar, pliegue, pellizcar, aplanar—, proteja partes con una máscara, refleje a través de X y añada detalle donde esculpe.
keywords: esculpir, escultura, pincel, pinceles, arcilla, dibujar, suavizar, agarrar, inflar, pliegue, pellizcar, aplanar, máscara, simetría, reflejar, detalle, topología dinámica, lápiz, presión, tableta, lápiz óptico
from: 5477801a
---

El espacio de trabajo Esculpir da forma a una malla con pinceles, como con arcilla: arrastre sobre la superficie y esta sube, se hunde, se suaviza o sigue al puntero bajo un pincel redondo, con la mayor fuerza en el centro y desvaneciéndose hasta nada en su borde.

## Inicio

Seleccione una malla y elija {{ui:Esculpir}} en la lista de espacios de trabajo. Un grupo o componente se convierte primero en malla, como en el espacio de trabajo de malla. Los pinceles actúan sobre los vértices de la malla, así que una malla con más vértices admite formas más finas: subdivídala primero ({{ui:Subdividir}} del espacio de trabajo de malla, o un modificador Superficie de subdivisión que aplique), o active {{ui:Detalle}}.

## Pinceles

| Pincel | Tecla | Qué hace |
| --- | --- | --- |
| {{ui:Dibujo}} | {{key:D}} | Eleva la superficie bajo el pincel |
| {{ui:Arcilla}} | {{key:C}} | Acumula capas planas, rellenando primero las depresiones |
| {{ui:Suavizar}} | {{key:S}} | Iguala los abultamientos; mantenga {{key:Shift}} pulsado para suavizar con cualquier pincel |
| {{ui:Agarrar}} | {{key:G}} | Arrastra la superficie junto con el puntero |
| {{ui:Inflar}} | {{key:I}} | Hincha la superficie hacia fuera siguiendo su propia dirección |
| {{ui:Pliegue}} | {{key:Shift+C}} | Corta un surco afilado |
| {{ui:Pellizcar}} | {{key:P}} | Atrae la superficie hacia el centro del pincel |
| {{ui:Aplanar}} | {{key:T}} | Presiona la superficie hacia su plano medio |
| {{ui:Máscara}} | {{key:M}} | Pinta una máscara que protege la superficie de los demás pinceles |

Mantenga {{key:Ctrl}} pulsado mientras traza para trabajar al revés (bajar en vez de subir, una cresta en vez de un surco, quitar la máscara), o active {{ui:Quitar}}.

## Tamaño e intensidad

El tamaño del pincel se mide en píxeles de la pantalla, así que se siente igual con cualquier zoom: {{key:[}} y {{key:]}} lo hacen más pequeño y más grande, y {{key:Shift+[}} y {{key:Shift+]}} cambian su intensidad. El panel muestra ambos.

Con un lápiz en una tableta, presionar más fuerte hace el pincel más grande y más intenso; el panel desactiva cualquiera de las dos cosas.

## Simetría, máscara y detalle

- {{ui:Simetría X}} ({{key:X}}) esculpe ambos lados a través del rojo a la vez, para caras y figuras.
- La máscara se ve más oscura mientras esculpe. {{ui:Borrar máscara}} ({{key:Alt+M}}) la quita, e {{ui:Invertir máscara}} ({{key:Ctrl+I}}) enmascara lo que estaba libre y libera lo que estaba enmascarado. La máscara se guarda con la malla.
- {{ui:Detalle}} añade triángulos donde esculpe: las aristas más largas que el tamaño fijado en el panel (píxeles en pantalla) se dividen bajo el pincel. Necesita una malla de triángulos, y pide crear una antes.

Cada trazo es un paso de deshacer.

:::note
El detalle solo añade triángulos; no quita los que se volvieron diminutos. Remallar (espacio de trabajo de malla) iguala de nuevo toda la malla.
:::

Vea también [Editar una malla](topic:mesh-edit), [Mallas](topic:meshes) y [Modificadores en una malla](topic:modifiers).
