---
title: Ver el modelo en obra con un teléfono Android (RA)
summary: Levante un teléfono Android con Chrome y vea el modelo a tamaño real sobre la cámara, alineado con el edificio mediante dos puntos en los que se sitúa, con una lente de rayos X y una comprobación rápida en la siguiente visita. Para observar, no para replantear.
keywords: ra, realidad aumentada, teléfono, android, chrome, webxr, en obra, obra, cámara, tamaño real, rayos X, alinear, alineación, volver a comprobar, arcore
from: 0f43b50b
---

{{ui:Vista en obra (RA, teléfono)}} en el menú {{ui:Vistas}} muestra el modelo a su tamaño real sobre la cámara del teléfono. Funciona en un **teléfono Android con Chrome**, en una página segura (https), y donde el teléfono admita RA. En un iPhone o iPad, en un ordenador, o en una aplicación Android que solo muestra una página web, el elemento indica por qué no puede iniciarse; use allí la vista 3D, o abra esta página en Chrome en el teléfono.

**Un teléfono sirve para observar.** No mida, replantee ni corte nada a partir de lo que muestra la pantalla: el teléfono se desplaza mientras camina, y el error de señalización crece con la distancia a los dos puntos en los que se alineó (unos pocos centímetros cerca de ellos, más lejos). Nada de esto tiene precisión topográfica.

## Alinear el modelo

1. Abra el modelo en el teléfono y elija {{ui:Vista en obra (RA, teléfono)}}. Permita el acceso a la cámara.
2. El panel inferior nombra el primer punto (una esquina del modelo sobre el terreno). Sitúese allí, en la obra, apunte el anillo verde al suelo y pulse {{ui:Colocar punto}}.
3. Camine hasta el segundo punto, a al menos medio metro de distancia (cuanto más separados, mejor el ajuste) y repita lo mismo.
4. El modelo aparece a tamaño real, girado y desplazado para encajar en los dos lugares. El panel indica lo bien que coinciden los dos puntos.

{{ui:Empezar de nuevo}} borra los puntos. La alineación se guarda en el archivo del modelo, así que la próxima vez que lo abra en obra empezará alineado.

## Lente de rayos X

{{ui:Lente de rayos X}} muestra el modelo completo dentro de una caja delante del teléfono (de unos metro y medio de ancho y tres metros de profundidad) y solo un fantasma tenue en el resto, para que pueda ver lo que hay detrás de un muro sin perder de vista el muro real.

## La siguiente visita

Sitúese en el primer punto y pulse {{ui:Volver a comprobar}}, y luego {{ui:Colocar punto}}. Si el desfase es menor de 5 centímetros, la alineación se conserva. Si es de hasta medio metro, el modelo se desplaza la diferencia. Si es mayor, el panel le pide que señale de nuevo los dos lugares.

## Salir

{{ui:Salir de la RA}} termina la sesión. La imagen de la cámara se queda en el navegador: no se sube nada.
