---
title: Dibujar la imagen con otro programa
summary: Nuestro propio trazador de caminos dibuja la imagen de Renderizar; otro programa puede dibujarla solo mediante un complemento de motor de renderizado en CadCraft Studio. Qué se traslada y por qué algunos programas nunca se ofrecen.
keywords: renderizar, motor, programa externo, motor de complemento, studio, segundo plano, cola, usd, gltf, dibujado por, blender, gpl
from: 150f94f1
---

La imagen de {{ui:Renderizar una imagen…}} la dibujan **nuestros propios motores**: Rápido y el Trazador de caminos, en el navegador y en CadCraft Studio. Otro programa solo puede dibujarla cuando lo aporta un **complemento de motor de renderizado**: consulte [Añadir un motor de renderizado con un complemento](topic:render-engine-addons). Para llevar la escena a otro programa y seguir trabajando allí, use [Abrir la escena en otro programa](topic:render-open-in) o [Enviar la escena a un motor de videojuegos](topic:render-unreal).

## Dibujar una imagen con el motor de un complemento

1. Active el complemento en Configuración › Complementos. Su motor aparece en la lista Motor de {{ui:Renderizar una imagen…}}.
2. Elíjalo. Sus propios ajustes aparecen bajo la lista Motor.
3. Haga clic en {{ui:Renderizar}}. En Studio, la primera vez que un complemento ejecuta un programa, Studio le pregunta en su propio diálogo. El progreso se muestra mientras dibuja; {{ui:Detener}} lo termina. La imagen aparece marcada con el motor que la dibujó.

Un motor escrito en JavaScript también se ejecuta en el navegador. Un motor que ejecuta un programa en este ordenador solo se ejecuta en Studio; en el navegador aparece como un archivo que guardar.

## Qué se traslada

El motor recibe un **paquete**: el modelo como archivo USD (y un archivo glTF cuando lo pide), y un archivo de ajustes con los valores exactos de los materiales, el sol y el cielo, cada lámpara encendida con su potencia y su perfil de luz, la cámara y la exposición. Cada programa ilumina, da tono y muestrea a su manera, así que las imágenes son parecidas en cámara, sol, lámparas y exposición, pero no píxel a píxel.

## Programas que CadCraft nunca ejecuta

CadCraft nunca inicia un programa bajo la licencia GNU GPL, y nunca lo incluye como motor ni como destino de Abrir en. Blender es uno de ellos, así que no aparece en la lista Motor. Un archivo USD o glTF guardado desde {{ui:Renderizar una imagen…}} aún puede abrirse en él, como en cualquier programa que lea esos archivos.

:::note
Las cámaras panorámicas y estéreo, y una imagen de cielo (se usan en su lugar los colores del cielo), no se trasladan a otro programa. Nada de lo hecho en otro programa vuelve al modelo.
:::
