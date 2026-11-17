---
title: Agregar un motor de renderizado con un complemento
summary: Lo que un complemento puede agregar a la lista de Motor del diálogo de renderizado, el permiso que necesita para ejecutar un programa, y lo que Studio revisa y pregunta.
keywords: complemento, addon, motor, motor de renderizado, desarrollador, engine.run, permiso, programa, script, firmado, studio, api
from: cd7a39ba
---

Un complemento (Configuración › Complementos) puede agregar un motor a la lista Motor de {{ui:Renderizar una imagen…}}. El texto completo para autores de complementos es la sección 16 de la especificación de complementos; en resumen:

- El complemento registra un motor con un id que empieza con el suyo, un nombre, configuración opcional y **o** un programa que ejecutar **o** una función en JavaScript que dibuja la imagen.
- Un motor que ejecuta un programa necesita el permiso **`engine.run`**, que se muestra antes de instalar y en Configuración. Solo se ejecuta en Studio; en el navegador aparece como un archivo para guardar.
- El complemento indica el programa (un nombre de archivo sencillo, nunca un shell), un script que está **dentro del complemento firmado**, y argumentos hechos de marcadores y palabras sencillas. Studio encuentra el programa o le pide que lo señale una vez.
- La primera vez que un complemento ejecuta un programa, **Studio le pregunta en su propio diálogo**: qué complemento, qué programa, y que un script puede hacer cualquier cosa que pueda hacer el programa. Permítalo solo para un complemento en el que confíe. Su respuesta se recuerda para ese complemento y ese programa.
- El paquete (la escena como USD y un archivo de configuración, con el archivo glTF cuando el complemento lo pide) y el script del complemento se colocan en una carpeta temporal nueva; el programa se ejecuta allí, y la imagen regresa marcada con el nombre del motor del complemento.

:::note
Los complementos solo pueden agregar motores de renderizado desde la API de complementos 1.4. Un ejemplo trabajado de un renderizador de línea de comandos de código abierto está en su propio repositorio; todavía no se ha ejecutado en ese renderizador.
:::
