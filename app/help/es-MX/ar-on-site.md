---
title: Ver el modelo en sitio con un teléfono Android (RA)
summary: Levante un teléfono Android con Chrome y vea el modelo a tamaño real sobre la cámara, alineado con el edificio mediante dos puntos en los que se para, con una lente de rayos X y una comprobación rápida en la siguiente visita. Para observar, no para replantear.
keywords: ra, realidad aumentada, teléfono, android, chrome, webxr, en sitio, sitio, cámara, tamaño real, rayos x, alinear, alineación, volver a comprobar, arcore
from: 0f43b50b
---

{{ui:Ver en sitio (RA, teléfono)}} en el menú {{ui:Vistas}} muestra el modelo a su tamaño real sobre la cámara del teléfono. Funciona en un **teléfono Android con Chrome**, en una página segura (https), donde el teléfono admite RA. En un iPhone o iPad, una computadora, o una app de Android que solo muestra una página web, el elemento indica por qué no puede iniciar; use allí la vista 3D, o abra esta página en Chrome en el teléfono.

**Un teléfono sirve para observar.** No mida, replantee ni corte nada a partir de lo que muestra la pantalla: el teléfono se desvía al caminar, y el error de apuntado crece con la distancia a los dos puntos con los que se alineó (unos pocos centímetros cerca de ellos, más lejos). Nada de lo que aquí se muestra es de precisión topográfica.

## Alinear el modelo

1. Abra el modelo en el teléfono y elija {{ui:Ver en sitio (RA, teléfono)}}. Permita el acceso a la cámara.
2. El panel de abajo indica el primer punto (una esquina del modelo sobre el suelo). Colóquese allí en sitio, apunte el anillo verde al suelo y toque {{ui:Colocar punto}}.
3. Camine hasta el segundo punto, a por lo menos medio metro (cuanto más separados, mejor el ajuste), y haga lo mismo.
4. El modelo aparece a tamaño real, girado y desplazado para ajustarse a los dos lugares. El panel indica qué tan bien coinciden los dos puntos.

{{ui:Empezar de nuevo}} borra los puntos. La alineación se guarda en el archivo del modelo, así que la próxima vez que abra el modelo en sitio empezará alineado.

## Lente de rayos X

{{ui:Lente de rayos X}} muestra todo el modelo dentro de una caja frente al teléfono (de cerca de metro y medio de ancho y tres metros de profundidad) y solo un tenue fantasma en el resto, para que pueda ver lo que hay detrás de una pared sin perder la pared real.

## La siguiente visita

Colóquese en el primer punto y toque {{ui:Volver a comprobar}}, luego {{ui:Colocar punto}}. Si la diferencia es menor a 5 centímetros, se conserva la alineación. Si es de hasta medio metro, el modelo se desplaza según la diferencia. Si es mayor, el panel le pide que apunte de nuevo a los dos lugares.

## Salir

{{ui:Salir de la RA}} termina la sesión. La imagen de la cámara se queda en el navegador: no se sube nada.
