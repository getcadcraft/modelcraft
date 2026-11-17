---
title: Añadir un motor de renderizado con un complemento
summary: Lo que un complemento puede añadir a la lista Motor del diálogo de Renderizar, el permiso que necesita para ejecutar un programa, y lo que Studio comprueba y pregunta.
keywords: complemento, addon, motor, motor de renderizado, desarrollador, engine.run, permiso, programa, script, firmado, studio, api
from: cd7a39ba
---

Un complemento (Configuración › Complementos) puede añadir un motor a la lista Motor de {{ui:Renderizar una imagen…}}. El texto completo para autores de complementos es la sección 16 de la especificación de complementos; en resumen:

- El complemento registra un motor con un identificador que empieza por el suyo, un nombre, ajustes opcionales y **o bien** un programa que ejecutar **o bien** una función en JavaScript que dibuja la imagen.
- Un motor que ejecuta un programa necesita el permiso **`engine.run`**, que se muestra antes de instalar y en Configuración. Solo se ejecuta en Studio; en el navegador aparece como un archivo que guardar.
- El complemento indica el programa (un nombre de archivo simple: nunca un intérprete de comandos), un script que está **dentro del complemento firmado** y argumentos formados por marcadores y palabras simples. Studio busca el programa o le pide que lo señale una vez.
- La primera vez que un complemento ejecuta un programa, **Studio le pregunta en su propio diálogo**: qué complemento, qué programa y que un script puede hacer cualquier cosa que pueda hacer el programa. Permítalo solo para un complemento de confianza. Su respuesta se recuerda para ese complemento y ese programa.
- El paquete (la escena como USD y un archivo de ajustes, con el archivo glTF cuando el complemento lo pide) y el script del complemento se guardan en una carpeta temporal nueva, el programa se ejecuta allí y la imagen vuelve marcada con el nombre del motor del complemento.

:::note
Los complementos solo pueden añadir motores de renderizado desde la API de complementos 1.4. Un ejemplo práctico para un renderizador de código abierto de línea de comandos está en su propio repositorio; todavía no se ha ejecutado en ese renderizador.
:::
