---
title: Elegir qué programa dibuja la imagen
summary: La opción Motor del diálogo Render: nuestros dos motores, otros programas en CadCraft Studio, y lo que hace la web en su lugar.
keywords: render, motor, renderizador, motor de render, complemento, plugin, studio, programa externo, dibujado por, cola, motor de complemento
from: be4b056a
---

{{ui:Render de una imagen…}} tiene una opción **Motor** arriba de Modo. Nuestros dos motores siempre están y funcionan en todas partes; los complementos pueden agregar más, y en CadCraft Studio la lista también incluye los programas que toman la escena.

| Motor | Qué hace | Dónde |
|---|---|---|
| Integrado: Rápido | La imagen fija rápida: luz de día, sombras suaves, looks de vidrio y metal, en segundos | El navegador y Studio |
| Integrado: Trazador de caminos | Luz rebotando entre superficies en tu placa gráfica o procesador, la cola de render y las otras computadoras de tu red | El navegador y Studio |
| Motor de un complemento | Dibuja y devuelve la imagen: ver [Dibujar la imagen con otro programa](topic:render-other-program) | El navegador (un motor escrito en JavaScript) o Studio (un motor que ejecuta un programa) |
| Un programa que toma la escena | Studio pone la escena en su carpeta y la mantiene al día | Studio |
| Abrir en … | Guarda la escena y la abre en un programa; no vuelve nada: ver [Abrir la escena en otro programa](topic:render-open-in) | La web guarda el archivo |

## Cómo se comporta la elección

- Elegir Rápido o Trazador de caminos cambia el Modo también, y al revés. Nada más del diálogo cambia para quienes nunca usan otro motor.
- Un motor que no está disponible queda en la lista con el motivo ("no encontrado", "necesita una versión más nueva"); no lo podés elegir. En el navegador, un motor que solo corre en Studio muestra "guarda un archivo": {{ui:Render de una imagen…}} entonces guarda la escena y su configuración en un archivo que llevás a ese programa.
- La elección se guarda con la configuración de render del archivo, y el último motor que elegiste es el motor inicial para archivos que no tienen elección propia.
- Una imagen de otro programa dice qué programa la dibujó y su versión, en el diálogo y en la cola de render. Las promesas de la página [Render](topic:render) cubren solo **nuestros** motores: otro programa ilumina, ajusta tonos y muestrea a su manera, así que dos imágenes de una misma escena se parecen en cámara, sol, lámparas y exposición, no píxel por píxel.

## Lo que recibe cada motor

La escena va a otro programa como **paquete**: el modelo como archivo USD (el mismo archivo que escribe [Guardar como USD](topic:usd)), y un archivo de configuración que guarda lo que un importador de USD no puede manejar con confianza: los valores exactos de material, las lámparas encendidas con su potencia y perfiles de luz, el sol, el cielo, la exposición y la cámara tal como la dibuja el diálogo. Nada se sube a ningún lado.

## La cola de render

Una imagen o una animación para otro programa puede esperar en [la cola de render](topic:render#the-render-queue) igual que las nuestras; su trabajo recuerda para qué motor es. Una animación va al programa en una sola ejecución.
