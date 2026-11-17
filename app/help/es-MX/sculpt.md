---
title: Esculpir una malla
summary: Dé forma a una malla como arcilla con pinceles (dibujar, arcilla, suavizar, agarrar, inflar, pliegue, pellizcar, aplanar), proteja partes con una máscara, refleje en X y agregue detalle donde esculpe.
keywords: esculpir, escultura, pincel, pinceles, arcilla, dibujar, suavizar, agarrar, inflar, pliegue, pellizcar, aplanar, máscara, simetría, espejo, detalle, topología dinámica, lápiz, presión, tableta, lápiz óptico
from: 5477801a
---

El espacio de trabajo Esculpir da forma a una malla con pinceles, como con arcilla: al arrastrar sobre la superficie, esta sube, se hunde, se suaviza o sigue al puntero bajo un pincel redondo, con más fuerza en el centro y desvaneciéndose hasta nada en su borde.

## Inicio

Seleccione una malla y elija {{ui:Esculpir}} en la lista Espacio de trabajo. Un grupo o componente primero se convierte en malla, como en el espacio de trabajo Malla. Los pinceles actúan sobre los vértices de la malla, así que una malla con más vértices permite formas más finas: subdívidala primero (con {{ui:Subdividir}} en el espacio de trabajo Malla, o con un modificador de Superficie de subdivisión que aplique), o active {{ui:Detalle}}.

## Pinceles

| Pincel | Tecla | Qué hace |
| --- | --- | --- |
| {{ui:Dibujo}} | {{key:D}} | Levanta la superficie bajo el pincel |
| {{ui:Arcilla}} | {{key:C}} | Acumula capas planas, llenando primero las hendiduras |
| {{ui:Suavizar}} | {{key:S}} | Iguala las protuberancias; mantenga {{key:Shift}} para suavizar con cualquier pincel |
| {{ui:Agarrar}} | {{key:G}} | Jala la superficie junto con el puntero |
| {{ui:Inflar}} | {{key:I}} | Hincha la superficie hacia afuera, en su propia dirección |
| {{ui:Pliegue}} | {{key:Shift+C}} | Corta un surco afilado |
| {{ui:Pellizcar}} | {{key:P}} | Jala la superficie hacia el centro del pincel |
| {{ui:Aplanar}} | {{key:T}} | Presiona la superficie hacia su plano promedio |
| {{ui:Máscara}} | {{key:M}} | Pinta una máscara que protege la superficie de los demás pinceles |

Mantenga {{key:Ctrl}} mientras traza para trabajar al revés (bajar en lugar de subir, una cresta en lugar de un surco, quitar la máscara), o active {{ui:Quitar}}.

## Tamaño y fuerza

El tamaño del pincel se mide en píxeles de la pantalla, así que se siente igual sin importar el zoom: {{key:[}} y {{key:]}} lo hacen más pequeño y más grande, y {{key:Shift+[}} y {{key:Shift+]}} cambian su fuerza. El panel muestra ambos.

Con un lápiz sobre una tableta, al presionar más fuerte el pincel crece y se vuelve más fuerte; el panel desactiva cualquiera de los dos.

## Simetría, máscara y detalle

- {{ui:Espejo X}} ({{key:X}}) esculpe ambos lados a través del rojo a la vez, para caras y figuras.
- La máscara se ve más oscura mientras esculpe. {{ui:Quitar máscara}} ({{key:Alt+M}}) la quita, e {{ui:Invertir máscara}} ({{key:Ctrl+I}}) enmascara lo que estaba libre y libera lo que estaba enmascarado. La máscara se guarda con la malla.
- {{ui:Detalle}} agrega triángulos donde esculpe: las aristas más largas que el tamaño fijado en el panel (píxeles en pantalla) se dividen bajo el pincel. Necesita una malla de triángulos, y pide crear una primero.

Cada trazo es un paso de deshacer.

:::note
Detalle solo agrega triángulos; no quita los que se volvieron diminutos. Un Remallar (en el espacio de trabajo Malla) vuelve a igualar toda la malla.
:::

Vea también [Editar una malla](topic:mesh-edit), [Mallas](topic:meshes) y [Modificadores en una malla](topic:modifiers).
