---
title: Colocar cosas en la cama de impresión y enviarlas a una impresora
summary: Agregue elementos de la Biblioteca o su propio modelo a la cama de su impresora, acomódelos, revise las capas laminadas y envíe la impresión por USB o por red, o guarde el G-code, sin exportar antes un STL.
keywords: etapa de impresión, impresión 3d, impresora, cama, enviar a impresora 3d, laminador, gcode, g-code, usb, klipper, moonraker, octoprint, prusalink, biblioteca, acomodar, ajustar todo, vista previa de capas, relleno, soportes, filamento, pla, petg, complemento, complemento de impresión 3D
from: abcf5d7e
---

La {{ui:Etapa de impresión}} coloca las cosas en la cama de su impresora, las lamina y las envía a la impresora. No necesita exportar un archivo antes. Pertenece al complemento de impresión 3D, que viene activado de forma predeterminada.

:::note
Todavía no se ha impreso nada en una impresora real con esto. El laminador es nuevo: observe las primeras capas de su primera impresión y use la vista previa de capas antes de enviar.
:::

## Lo que hará

Coloque un modelo en la cama, verifique que quepa, revise las capas laminadas y envíelo a una impresora o guarde el G-code.

## Pasos

1. Haga clic en {{ui:Etapa de impresión}} en la barra de herramientas. Se abre una tarjeta sobre la vista y un contorno discontinuo muestra su cama.
2. Bajo **Agregar desde la Biblioteca**, escriba un nombre en el cuadro de búsqueda, pulse {{ui:Buscar}} y pulse {{ui:Agregar}} en un resultado. El elemento cae en la cama a tamaño completo, o reducido para caber. Todo lo que ya haya dibujado o importado y que pueda ver en la vista también está en la cama.
3. Bajo **En la cama**, revise el tamaño de cada elemento. Un elemento marcado **Fuera de la cama** debe moverse. Mueva, gire y escale las cosas en la vista con las herramientas habituales.
4. Pulse {{ui:Acomodar en la cama}} para separar los elementos, o {{ui:Ajustar todo a la cama}} para reducirlos hasta que quepan.
5. Bajo **Su impresora**, elija el tamaño de **Cama** o uno de los perfiles de impresora.
6. Bajo **Configuración de impresión**, elija el **Material**, la **Calidad** y el **Relleno %**, y marque **Agregar soportes bajo voladizos** si la forma los necesita.
7. Pulse {{ui:Vista previa de capas}} y mueva el control deslizante **Capa** para revisar las capas laminadas. Si después cambia la etapa o la configuración, pulse {{ui:Vista previa de capas}} otra vez.
8. Bajo **Conexión**, elija {{ui:Cable USB}}, {{ui:Klipper (Moonraker)}}, {{ui:OctoPrint}} o {{ui:PrusaLink}}. Para USB pulse {{ui:Conectar}}. Para una impresora de red escriba su **Dirección** (y la **Clave de API** si la pide) y pulse {{ui:Probar la conexión}}.
9. Pulse {{ui:Enviar a la impresora 3D}}. La tarjeta pregunta si la cama está libre y si el material correcto está cargado, y muestra el tiempo, el material y las temperaturas. Confirme para enviar.

Recibirá un mensaje de que la impresora está iniciando. {{ui:Detener la impresión}} apaga los calentadores, el ventilador y los motores. Si solo quiere un archivo, pulse {{ui:Guardar el G-code en su lugar}}.

## Notas

- USB necesita Chrome o Edge en una computadora, y la página debe permanecer abierta hasta que termine la impresión. Cerrarla detiene la transmisión.
- Una impresora de red debe permitir este sitio (en Moonraker agréguelo a `cors_domains`; en OctoPrint active CORS y copie una clave de API). Su navegador puede pedir permiso para acceder a dispositivos de su red.
- Nada se conecta ni envía sin su clic.
- La lista de laminadores está en **Laminador**. {{ui:CadCraft básico (incluido, el más rápido)}} viene integrado. Kiri:Moto, PrusaSlicer, OrcaSlicer y la Bambu Lab P2S son complementos propios que se activan desde la tarjeta o en {{ui:Configuración}} › {{ui:Complementos}}. PrusaSlicer y OrcaSlicer usan su propia copia y funcionan desde CadCraft Studio en una computadora.
- Las piezas que no son sólidos cerrados se dejan fuera, y la tarjeta le indica qué parte de la forma es.
- Para impresoras de resina, vea [Laminar para una impresora de resina](topic:resin-printing). Para revisar o reparar un modelo antes, vea [Soportes, grosor de pared, ahuecado y reparación](topic:print-tools).
