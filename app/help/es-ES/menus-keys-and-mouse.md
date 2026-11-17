---
title: Menús, teclas y ratón
summary: Elija un estilo de menús que coincida con el modelador que ya conoce, asigne su propia tecla a cualquier comando, mueva comandos entre menús y defina qué hacen la rueda y los botones central y derecho del ratón.
keywords: estilo de menús, menús, barra de menús, barra de herramientas, atajos de teclado, teclas de acceso rápido, teclas, estilo de teclas, mapa de teclas, personalizar, reasignar, ratón, rueda, invertir, dirección del zoom, botón central, botón derecho, orbitar, desplazar, exportar, importar, cambio, familiar, empujar tirar, modelador
from: e56fce3d
---

Las herramientas de ModelCraft son las mismas por donde se acceda a ellas. Un **estilo de menús** decide dónde se colocan en pantalla, cómo se llaman allí y con qué teclas se ejecutan. Elíjalo en {{ui:Configuración}} ({{key:Mod+,}}) › {{ui:ModelCraft}} › {{ui:Menús, teclas y ratón}}; el cambio es inmediato, y este navegador lo recuerda.

## Los estilos

| Estilo | Qué obtiene |
| --- | --- |
| {{ui:ModelCraft}} | La barra de herramientas propia de ModelCraft (Archivo, Dibujar, Modificar, Organizar, Edición, Cámara) y sus teclas de una letra: {{key:L}} línea, {{key:R}} rectángulo, {{key:P}} empujar/tirar, {{key:M}} mover, {{key:Q}} girar, {{key:S}} escalar, {{key:E}} borrador, {{key:O}} orbitar. Es el de inicio. |
| {{ui:Empujar/tirar}} | Una barra de menús (Archivo, Edición, Ver, Cámara, Dibujar, Herramientas, Ventana) sobre una fila de las herramientas principales, con las mismas teclas de una letra. |
| {{ui:Modelador}} | Una barra de menús en cabecera (Archivo, Edición, Ver, Seleccionar, Añadir, Objeto, Malla) y las teclas de los modeladores de mallas: {{key:W}} seleccionar, {{key:G}} agarrar, {{key:R}} girar y {{key:S}} escalar la selección a la vez ({{key:X}}, {{key:Y}} o {{key:Z}} bloquea un eje mientras se mueve), {{key:E}} empujar/tirar, {{key:B}} rectángulo, {{key:X}} eliminar, {{key:A}} seleccionar todo, {{key:Alt+A}} ninguno, {{key:Shift+D}} duplicar, {{key:Mod+G}} agrupar, {{key:H}} ocultar. El botón central orbita; {{key:Shift}} y el botón central desplazan la vista, {{key:Mod}} y el botón central hacen zoom; el botón derecho cancela lo que esté haciendo una herramienta. |
| {{ui:Principiante}} | Una cinta cuya pestaña {{ui:Crear}} tiene unos pocos botones grandes: formas para colocar, huecos, mover, girar y cambiar el tamaño, alinear, {{ui:Grupo}} (los huecos se recortan en las formas) y la comprobación para impresión 3D; todas las demás herramientas están en la pestaña {{ui:Más herramientas}}. El botón derecho orbita, el central desplaza la vista. Vea [El estilo Principiante](topic:beginner). |

El estilo de teclas que puede conocer por {{ui:Claves}}, abajo a la derecha de la vista, y por {{ui:Edición}} › {{ui:Más}}, es la misma elección: elegir las teclas del modelador allí elige el estilo {{ui:Modelador}}, y elegir las teclas de empujar/tirar lo deja en el estilo {{ui:ModelCraft}}. Si eligió las teclas del modelador en una versión anterior, ModelCraft se abre una vez, por sí solo, en el estilo {{ui:Modelador}}.

:::tip
Una tecla que pertenece a las de empujar/tirar, pero que su estilo asigna a otro comando, no hace nada, y la línea de estado indica adónde fue su comando ("En Modelador, Empujar/tirar es E"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} y las flechas siempre conservan su significado; los números siempre van al cuadro de valor, y mientras una herramienta mueve algo, sus propias teclas tienen prioridad.
:::

## Hágalo suyo

1. Elija el estilo más parecido a lo que quiere y haga clic en {{ui:Personalizar…}}.
2. En {{ui:Teclas y menús}}, busque un comando (el cuadro de búsqueda ayuda). {{ui:Añadir una tecla}} y pulse la tecla. Haga clic en una tecla para quitarla.
3. Con una barra de menús, {{ui:Dónde está}} mueve el comando a otro menú, o a {{ui:Solo teclas}}.
4. En {{ui:Ratón}}, defina la rueda y lo que hacen los botones en la vista 3D.
5. Póngale un nombre y haga clic en {{ui:Guardar}}.

Guardar un estilo integrado crea su propia copia ("My Modeler"); el integrado nunca cambia. Su copia lee las teclas igual que el estilo del que partió: una creada a partir de {{ui:Modelador}} mantiene funcionando a la vez las teclas de agarrar, girar y escalar.

## Ratón

- **Rueda del ratón**: {{ui:Girar hacia arriba acerca}} (el de inicio) o {{ui:Girar hacia arriba aleja}}, y la velocidad. Un pellizco en el panel táctil siempre hace zoom en la dirección en que se mueven los dedos.
- **Arrastrar en la vista 3D**: {{ui:Propio de cada vista}} mantiene los botones de ModelCraft (el botón central orbita; el derecho, o {{key:Shift}} con el central, desplaza la vista). O bien ponga los botones central y derecho a orbitar, desplazar, hacer zoom o nada; {{key:Shift}} con el botón cambia orbitar por desplazar. El botón izquierdo siempre pertenece a la herramienta en uso.
- **Paneles táctiles**: {{ui:Configuración}} › {{ui:ModelCraft}} › {{ui:Desplazamiento}} sigue decidiendo si dos dedos orbitan (panel táctil) o hacen zoom (ratón). Vea [Orbitar, desplazar y hacer zoom](topic:orbit-pan-zoom).

## Llévelo consigo

{{ui:Exportar}} guarda el estilo en uso como un pequeño archivo `.ccinput.json`; {{ui:Importar…}} añade uno, desde otro equipo o de un compañero. Un archivo importado solo puede apuntar a los comandos propios de ModelCraft: lo demás se omite y se cuenta en la línea de estado. {{ui:Borrar este estilo}} elimina uno de los suyos.

:::note
Estos ajustes se quedan en este navegador. {{ui:Usar este estilo en todas las aplicaciones}}, bajo las tarjetas de estilo, hace que cada aplicación se abra con su estilo correspondiente: {{ui:Empujar/tirar}} va con los estilos de barra de menús de las otras aplicaciones. {{ui:Modelador}} no tiene equivalente en las otras aplicaciones, así que sigue siendo una elección de ModelCraft.
:::

Relacionado: [Teclas y acciones del ratón](topic:keyboard) · [Configuración de ModelCraft](topic:settings) · [Cómo venir de otros modeladores](topic:coming-from)
