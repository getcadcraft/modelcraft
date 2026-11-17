---
title: Menús, teclas y ratón
summary: Elija un estilo de menú que coincida con el modelador que ya conoce, asigne su propia tecla a cualquier comando, mueva comandos entre menús y defina qué hacen la rueda y los botones central y derecho del ratón.
keywords: estilo de menú, menús, barra de menús, barra de herramientas, atajos de teclado, teclas de acceso rápido, teclas, estilo de teclas, mapa de teclas, personalizar, reasignar, ratón, rueda, invertir, dirección del zoom, botón central, botón derecho, órbita, encuadre, exportar, importar, cambiar, familiar, empujar tirar, modelador
from: e56fce3d
---

Las herramientas de ModelCraft son las mismas sin importar cómo llegue a ellas. Un **estilo de menú** decide dónde se ubican en pantalla, cómo se llaman allí y qué teclas las ejecutan. Elíjalo en {{ui:Settings}} ({{key:Mod+,}}) › {{ui:ModelCraft}} › {{ui:Menus, keys and mouse}}; el cambio es inmediato y este navegador lo recuerda.

## Los estilos

| Estilo | Qué obtiene |
|---|---|
| {{ui:ModelCraft}} | La barra de herramientas propia de ModelCraft (Archivo, Dibujar, Modificar, Organizar, Edición, Cámara) y sus teclas de una sola letra: {{key:L}} línea, {{key:R}} rectángulo, {{key:P}} empujar/tirar, {{key:M}} desplazar, {{key:Q}} girar, {{key:S}} escalar, {{key:E}} borrador, {{key:O}} órbita. El inicio. |
| {{ui:Push-pull}} | Una barra de menús (Archivo, Edición, Vista, Cámara, Dibujar, Herramientas, Ventana) sobre una fila de las herramientas principales, con las mismas teclas de una sola letra. |
| {{ui:Modeler}} | Un menú de encabezado (Archivo, Edición, Vista, Seleccionar, Añadir, Objeto, Malla) y las teclas de los modeladores de mallas: {{key:W}} seleccionar, {{key:G}} desplazar, {{key:R}} girar y {{key:S}} escalar la selección a la vez ({{key:X}}, {{key:Y}} o {{key:Z}} bloquea un eje mientras se mueve), {{key:E}} empujar/tirar, {{key:B}} rectángulo, {{key:X}} eliminar, {{key:A}} seleccionar todo, {{key:Alt+A}} nada, {{key:Shift+D}} duplicar, {{key:Mod+G}} grupo, {{key:H}} ocultar. El botón central orbita; {{key:Shift}} y el botón central encuadran, {{key:Mod}} y el botón central hacen zoom; el botón derecho cancela lo que esté haciendo una herramienta. |
| {{ui:Beginner}} | Una cinta cuya pestaña {{ui:Make}} tiene unos pocos botones grandes: formas para soltar, huecos, desplazar, girar y cambiar tamaño, alinear, {{ui:Group}} (los huecos se recortan en las formas) y la verificación para impresión 3D; todas las demás herramientas están en la pestaña {{ui:More tools}}. El botón derecho orbita, el botón central encuadra. Vea [El estilo Principiante](topic:beginner). |

La combinación de teclas que quizá conozca desde {{ui:Keys}}, en la esquina inferior derecha de la vista, y desde {{ui:Edit}} › {{ui:More}} es la misma elección: al elegir las teclas del modelador se elige el estilo {{ui:Modeler}}, y al elegir las teclas de empujar/tirar se pasa al estilo {{ui:ModelCraft}}. Si eligió las teclas del modelador en una versión anterior, ModelCraft se abre una vez en el estilo {{ui:Modeler}}, por sí solo.

:::tip
Una tecla que pertenece a las teclas de empujar/tirar, pero que su estilo asigna a otro comando, no hace nada, y la línea de estado indica adónde fue su comando ("En Modelador, Empujar/tirar es E"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} y las flechas siempre conservan su función, los números siempre van al cuadro de valor, y mientras una herramienta mueve algo, sus propias teclas tienen prioridad.
:::

## Hágalo suyo

1. Elija el estilo más cercano a lo que quiere y luego haga clic en {{ui:Customize…}}.
2. En {{ui:Keys and menus}}, busque un comando (el cuadro de búsqueda ayuda). Haga clic en {{ui:Add a key}} y presione la tecla. Haga clic en una tecla para quitarla.
3. Con una barra de menús, {{ui:Where it sits}} mueve el comando a otro menú, o a {{ui:Keys only}}.
4. En {{ui:Mouse}}, defina la rueda y qué hacen los botones en la vista 3D.
5. Póngale un nombre y haga clic en {{ui:Save}}.

Guardar un estilo integrado crea su propia copia ("Mi Modelador"); el integrado nunca cambia. Su copia lee las teclas como lo hace el estilo del que partió: una creada desde {{ui:Modeler}} mantiene funcionando a la vez las teclas de desplazar, girar y escalar.

## Ratón

- **Rueda del ratón**: {{ui:Scroll up zooms in}} (el inicio) o {{ui:Scroll up zooms out}}, y qué tan rápido. Un pellizco en el panel táctil siempre hace zoom según el movimiento de sus dedos.
- **Arrastrar en la vista 3D**: {{ui:Propio de cada vista}} mantiene los botones de ModelCraft (el botón central orbita; el botón derecho, o {{key:Shift}} con el botón central, encuadra). O configure los botones central y derecho para orbitar, encuadrar, hacer zoom o no hacer nada; {{key:Shift}} con el botón intercambia órbita y encuadre. El botón izquierdo siempre pertenece a la herramienta en uso.
- **Paneles táctiles**: {{ui:Settings}} › {{ui:ModelCraft}} › {{ui:Scrolling}} sigue decidiendo si dos dedos orbitan (panel táctil) o hacen zoom (ratón). Vea [Órbita, encuadre y zoom](topic:orbit-pan-zoom).

## Llévelo consigo

{{ui:Export}} guarda el estilo en uso como un pequeño archivo `.ccinput.json`; {{ui:Import…}} agrega uno, desde otra computadora o de un colega. Un archivo importado solo puede apuntar a los comandos propios de ModelCraft: lo demás se omite y se cuenta en la línea de estado. {{ui:Delete this style}} elimina uno de los suyos.

:::note
Estos ajustes se quedan en este navegador. {{ui:Use this style in every app}}, debajo de las tarjetas de estilo, hace que cada app se abra en su estilo equivalente: {{ui:Push-pull}} va con los estilos de barra de menús de las demás apps. {{ui:Modeler}} no tiene equivalente en las otras apps, así que sigue siendo una elección de ModelCraft.
:::

Relacionado: [Teclas y acciones del ratón](topic:keyboard) · [Configuración de ModelCraft](topic:settings) · [Viene de otros modeladores](topic:coming-from)
