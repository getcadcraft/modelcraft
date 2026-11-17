---
title: Colocar objetos en la plataforma de impresión y enviarlos a una impresora
summary: Añada elementos de la Biblioteca o su propio modelo a la plataforma de su impresora, colóquelos, revise las capas laminadas y envíe la impresión por USB o red, o guarde el G-code, sin exportar antes un STL.
keywords: fase de impresión, impresión 3D, impresora, plataforma, enviar a impresora 3D, laminador, gcode, g-code, usb, klipper, moonraker, octoprint, prusalink, biblioteca, organizar, ajustar todo, vista previa de capas, relleno, soportes, filamento, pla, petg, complemento, complemento de impresión 3D
from: abcf5d7e
---

{{ui:Fase de impresión}} dispone los objetos en la plataforma de su impresora, los lamina y los envía a la impresora. No necesita exportar antes ningún archivo. Pertenece al complemento Impresión 3D, que está activado por defecto.

:::note
Todavía no se ha impreso nada en una impresora real con esto. El laminador es nuevo: observe las primeras capas de su primera impresión y use la vista previa de capas antes de enviar.
:::

## Qué hará

Coloque un modelo en la plataforma, compruebe que cabe, revise las capas laminadas y envíelo a una impresora o guarde el G-code.

## Pasos

1. Haga clic en {{ui:Fase de impresión}} en la barra de herramientas. Se abre una tarjeta sobre la vista y un contorno discontinuo muestra su plataforma.
2. En **Añadir desde la Biblioteca**, escriba un nombre en el cuadro de búsqueda, pulse {{ui:Buscar}} y pulse {{ui:Añadir}} en un resultado. El elemento se coloca en la plataforma a tamaño real o reducido para que quepa. Cualquier cosa que ya haya dibujado o importado y que vea en la vista también está en la plataforma.
3. En **En la plataforma**, compruebe el tamaño de cada elemento. Un elemento marcado como **Fuera de la plataforma** debe moverse. Mueva, gire y escale los objetos en la vista con las herramientas habituales.
4. Pulse {{ui:Organizar en la plataforma}} para repartir los elementos, o {{ui:Ajustar todo a la plataforma}} para reducirlos hasta que quepan.
5. En **Su impresora**, elija el tamaño de **Plataforma** o uno de los perfiles de impresora.
6. En **Ajustes de impresión**, elija el **Material**, la **Calidad** y el **Relleno %**, y marque **Añadir soportes bajo voladizos** si la forma los necesita.
7. Pulse {{ui:Vista previa de capas}} y mueva el deslizador **Capa** para revisar las capas laminadas. Si cambia después la fase o los ajustes, pulse {{ui:Vista previa de capas}} otra vez.
8. En **Conexión**, elija {{ui:Cable USB}}, {{ui:Klipper (Moonraker)}}, {{ui:OctoPrint}} o {{ui:PrusaLink}}. Para USB pulse {{ui:Conectar}}. Para una impresora de red escriba su **Dirección** (y la **clave API** si se le pide) y luego pulse {{ui:Probar la conexión}}.
9. Pulse {{ui:Enviar a la impresora 3D}}. La tarjeta pregunta si la plataforma está libre y el material correcto está cargado, y muestra el tiempo, el material y las temperaturas. Confirme para enviar.

Recibirá un mensaje de que la impresora está arrancando. {{ui:Detener la impresión}} apaga los calentadores, el ventilador y los motores. Si solo quiere un archivo, pulse {{ui:Guardar el G-code en su lugar}}.

## Notas

- USB necesita Chrome o Edge en un ordenador, y la página debe permanecer abierta hasta que termine la impresión. Al cerrarla se detiene el flujo.
- Una impresora de red debe permitir este sitio (en Moonraker añádalo a `cors_domains`; en OctoPrint active CORS y copie una clave API). Su navegador puede pedirle acceso a los dispositivos de su red.
- Nada se conecta ni envía sin su clic.
- La lista de laminadores está en **Laminador**. {{ui:CadCraft básico (incluido, el más rápido)}} viene integrado. Kiri:Moto, PrusaSlicer, OrcaSlicer y la Bambu Lab P2S son complementos propios que activa desde la tarjeta o en {{ui:Configuración}} › {{ui:Complementos}}. PrusaSlicer y OrcaSlicer usan su propia copia y funcionan desde CadCraft Studio en un ordenador.
- Las piezas que no son sólidos cerrados se excluyen, y la tarjeta le indica qué parte de la forma supone.
- Para impresoras de resina, consulte [Laminar para una impresora de resina](topic:resin-printing). Para revisar o reparar antes un modelo, consulte [Soportes, grosor de pared, vaciado y reparación](topic:print-tools).
