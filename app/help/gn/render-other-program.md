---
title: Dibujar la imagen con otro programa
summary: Nuestro propio trazador de caminos dibuja la imagen de Render; otro programa puede dibujarla solo mediante un complemento de motor de render en CadCraft Studio. Qué se traslada, y por qué algunos programas nunca se ofrecen.
keywords: render, motor, programa externo, motor de complemento, studio, segundo plano, cola, usd, gltf, dibujado por, blender, gpl
from: 150f94f1
---

La imagen de {{ui:Render de una imagen…}} la dibujan **nuestros motores**: Rápido y el Trazador de caminos, en el navegador y en CadCraft Studio. Otro programa puede dibujarla solo cuando un **complemento de motor de render** lo trae: ver [Agregar un motor de render con un complemento](topic:render-engine-addons). Para llevar la escena a otro programa y seguir trabajando allí, usá [Abrir la escena en otro programa](topic:render-open-in) o [Enviar la escena a un motor de juego](topic:render-unreal).

## Dibujar una imagen con el motor de un complemento

1. Activá el complemento en Configuración › Complementos. Su motor aparece en la lista Motor de {{ui:Render de una imagen…}}.
2. Elegilo. Su propia configuración aparece debajo de la lista Motor.
3. Hacé clic en {{ui:Render}}. En Studio, la primera vez que un complemento ejecuta un programa, Studio te pregunta en su propio diálogo. El progreso se muestra mientras dibuja; {{ui:Detener}} lo termina. La imagen aparece marcada con el motor que la dibujó.

Un motor escrito en JavaScript también funciona en el navegador. Un motor que ejecuta un programa en esta computadora solo funciona en Studio; en el navegador aparece como un archivo para guardar.

## Qué se traslada

El motor recibe un **paquete**: el modelo como archivo USD (y un archivo glTF cuando lo pide), y un archivo de configuración con los valores exactos de material, el sol y el cielo, cada lámpara encendida con su potencia y perfil de luz, la cámara y la exposición. Cada programa ilumina, ajusta tonos y muestrea a su manera, así que las imágenes se parecen en cámara, sol, lámparas y exposición, no píxel por píxel.

## Programas que CadCraft nunca ejecuta

CadCraft nunca arranca un programa bajo la licencia GNU GPL, y nunca lo lista como motor ni como destino de Abrir en. Blender es uno de ellos, así que no está en la lista Motor. Un archivo USD o glTF guardado desde {{ui:Render de una imagen…}} igual se abre en él, como en cualquier programa que lee esos archivos.

:::note
Las cámaras panorámicas y estéreo y una imagen de cielo (se usan los colores del cielo) no se trasladan a otro programa. Nada hecho en otro programa vuelve al modelo.
:::
