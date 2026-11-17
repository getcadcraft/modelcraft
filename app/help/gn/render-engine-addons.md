---
title: Agregar un motor de render con un complemento
summary: Qué puede agregar un complemento a la lista Motor del diálogo Render, el permiso que necesita para ejecutar un programa, y qué controla y pregunta Studio.
keywords: complemento, addon, motor, motor de render, desarrollador, engine.run, permiso, programa, script, firmado, studio, api
from: cd7a39ba
---

Un complemento (Configuración › Complementos) puede agregar un motor a la lista Motor de {{ui:Render de una imagen…}}. El texto completo para autores de complementos está en la sección 16 de la especificación del complemento; en resumen:

- El complemento registra un motor con un id que empieza con el suyo, un nombre, configuración opcional, y **o bien** un programa para ejecutar **o bien** una función en JavaScript que dibuja la imagen.
- Un motor que ejecuta un programa necesita el permiso **`engine.run`**, que se muestra antes de instalar y en Configuración. Solo se ejecuta en Studio; en el navegador aparece como un archivo para guardar.
- El complemento indica el programa (solo un nombre de archivo sencillo: nunca un shell), un script que está **dentro del complemento firmado**, y argumentos formados por marcadores y palabras simples. Studio encuentra el programa o te pide que lo señales una vez.
- La primera vez que un complemento ejecuta un programa, **Studio te pregunta en su propio diálogo**: qué complemento, qué programa, y que un script puede hacer cualquier cosa que el programa pueda hacer. Permitilo solo para un complemento en el que confíes. Tu respuesta queda recordada para ese complemento y ese programa.
- El paquete (la escena como USD y un archivo de configuración, con el archivo glTF cuando el complemento lo pide) y el script del complemento van a una carpeta temporal nueva, el programa se ejecuta allí, y la imagen vuelve marcada con el nombre del motor del complemento.

:::note
Los complementos solo pueden agregar motores de render desde la API de complementos 1.4. Un ejemplo trabajado para un renderizador de línea de comandos de código abierto está en su propio repositorio; todavía no se ejecutó en ese renderizador.
:::
