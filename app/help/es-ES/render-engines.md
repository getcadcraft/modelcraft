---
title: Elegir qué programa dibuja la imagen
summary: La elección de Motor en el diálogo de Renderizar: nuestros dos motores, otros programas en CadCraft Studio y lo que hace la web en su lugar.
keywords: renderizar, motor, renderizador, motor de renderizado, complemento, plugin, studio, programa externo, dibujado por, cola, motor de complemento
from: be4b056a
---

{{ui:Renderizar una imagen…}} tiene una elección de **Motor** encima de Modo. Nuestros dos motores propios siempre están disponibles y funcionan en todas partes; los complementos pueden añadir más, y en CadCraft Studio la lista también incluye los programas que toman la escena.

| Motor | Qué hace | Dónde |
|---|---|---|
| Integrado: Rápido | La imagen fija rápida: luz diurna, sombras suaves, aspectos de cristal y metal, en segundos | El navegador y Studio |
| Integrado: Trazador de caminos | Luz que rebota entre superficies en su tarjeta gráfica o procesador, la cola de renderizado y los demás equipos de su red | El navegador y Studio |
| El motor de un complemento | Dibuja la imagen y la devuelve: consulte [Dibujar la imagen con otro programa](topic:render-other-program) | El navegador (un motor escrito en JavaScript) o Studio (un motor que ejecuta un programa) |
| Un programa que toma la escena | Studio coloca la escena en su carpeta y la mantiene sincronizada | Studio |
| Abrir en … | Guarda la escena y la abre en un programa; no vuelve nada: consulte [Abrir la escena en otro programa](topic:render-open-in) | La web guarda el archivo |

## Cómo funciona la elección

- Elegir Rápido o el Trazador de caminos cambia el Modo con él, y viceversa. Nada más del diálogo cambia para quienes nunca usan otro motor.
- Un motor que no está disponible permanece en la lista con el motivo («no encontrado», «necesita una versión más reciente»); no puede elegirlo. En el navegador, un motor que solo funciona en Studio muestra «guarda un archivo»: {{ui:Renderizar una imagen…}} entonces guarda la escena y sus ajustes en un archivo que lleva a ese programa.
- La elección se guarda con los ajustes de renderizado del archivo, y el último motor que eligió es el motor inicial para los archivos que no tienen una elección propia.
- Una imagen de otro programa indica qué programa la dibujó y su versión, en el diálogo y en la cola de renderizado. Las garantías de la página [Renderizar](topic:render) cubren solo **nuestros propios** motores: otro programa ilumina, da tono y muestrea a su manera, así que dos imágenes de una misma escena son parecidas en cámara, sol, lámparas y exposición, pero no píxel a píxel.

## Lo que recibe cada motor

La escena llega a otro programa como un **paquete**: el modelo como archivo USD (el mismo archivo que escribe [Guardar como USD](topic:usd)), y un archivo de ajustes que contiene lo que no puede confiarse a un importador de USD: los valores exactos de los materiales, las lámparas encendidas con su potencia y sus perfiles de luz, el sol, el cielo, la exposición y la cámara tal como la dibujaría el diálogo. No se sube nada a ningún sitio.

## La cola de renderizado

Una imagen o una animación para otro programa puede esperar en [la cola de renderizado](topic:render#the-render-queue) como las nuestras; su trabajo recuerda para qué motor es. Una animación se envía al programa en una sola ejecución.
