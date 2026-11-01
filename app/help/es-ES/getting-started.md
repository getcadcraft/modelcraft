---
title: Primeros pasos con ModelCraft
summary: Para qué sirve ModelCraft, cómo abrirlo y su primera caja, de un rectángulo a un modelo guardado.
keywords: inicio, primer modelo, empezar, tutorial, introducción, caja, volumetría, 3d, empujar y tirar, inicio rápido, guiado, guía, principiante, nuevo en 3d
from: d47ad719
---

ModelCraft es un modelador 3D para el diseño en fases iniciales: estudios de volumetría, distribuciones de estancias, formas rápidas de edificios y las sombras que proyectan. Usted dibuja formas planas, las empuja hasta convertirlas en sólidos y sigue trabajando en ellas dibujando sobre sus caras. Se ejecuta en su navegador web y sus modelos permanecen en su ordenador.

Si ha usado SketchUp, la mayor parte de lo que sabe sigue valiendo: las mismas letras de herramienta, empujar/tirar, un cuadro de valores para tamaños exactos, grupos y componentes. [Si viene de otros modeladores](topic:coming-from) enumera lo que es distinto.

## Abrir ModelCraft

1. Abra ModelCraft en una versión actual de Chrome, Edge, Firefox o Safari. Consulte [Navegadores y ordenadores](common:browsers).
2. Espere a que aparezca la vista 3D: una zona clara (u oscura) en el centro con una tarjeta titulada "Empiece a modelar".

La pantalla tiene una barra de herramientas arriba, el {{ui:Esquema}} y los {{ui:Componentes}} a la izquierda, la vista 3D en el centro, {{ui:Información de entidad}}, {{ui:Estilo}} y {{ui:Escenas}} a la derecha, y una barra de estado abajo con el cuadro de valores y las unidades. [La pantalla de ModelCraft](topic:workspace) explica cada parte.

:::note
ModelCraft necesita WebGL, la función de dibujo 3D de su navegador. Si el centro de la pantalla se queda vacío y las herramientas no hacen nada, consulte [Solución de problemas](topic:troubleshooting#the-3d-view-is-blank).
:::

## Compruebe primero las unidades

Mire la esquina inferior derecha. El selector de unidades muestra en qué se miden las longitudes.

- Un modelo nuevo empieza en **pies y pulgadas** cuando su navegador está configurado para Estados Unidos (también Liberia y Myanmar), y en **milímetros** en cualquier otro sitio.
- Para cambiarlo, elija otra unidad en el selector: {{ui:ft y in}}, {{ui:in}}, {{ui:m}}, {{ui:cm}} o {{ui:mm}}. El modelo en sí no cambia de tamaño; solo cambia cómo se muestran las longitudes y cómo se leen los números sin unidad.

Un número que escribe sin unidad usa la unidad del modelo. En un modelo en pies y pulgadas, un número sin unidad son **pulgadas**, así que `120` significa 10 pies.

## Deje que ModelCraft guíe su primer modelo

¿Es nuevo en el 3D? En la tarjeta {{ui:Empiece a modelar}}, pulse {{ui:Primer modelo guiado}} (también está en {{ui:Vistas}}). Una pequeña tarjeta le lleva por cuatro pasos, de un rectángulo plano a un modelo listo para una impresora 3D:

1. Dibuje un rectángulo en el suelo.
2. Empújelo hacia arriba hasta formar una caja.
3. Convierta la caja en un solo objeto (un grupo).
4. Revísela para impresión 3D y descargue un archivo 3MF o STL.

La tarjeta observa el modelo, no los botones: avanza cuando el paso está hecho, lo haya hecho como lo haya hecho, y retrocede un paso cuando usted deshace. {{ui:Elija la herramienta}} elige la herramienta por usted. Ciérrela en cualquier momento con la {{ui:×}}.

## Dibuje su primera caja

1. Pulse {{key:R}} para la herramienta {{ui:Rectángulo}}, o pulse {{ui:Rectángulo}} en el grupo {{ui:Dibujo}} de la barra de herramientas.
2. Haga clic una vez en el suelo, cerca del centro de la vista. Es la primera esquina.
3. Aleje el puntero. Un rectángulo lo sigue, y el cuadro de valores de abajo (rotulado {{ui:Dimensiones}}) muestra su tamaño.
4. Escriba el tamaño y pulse {{key:Enter}}: por ejemplo `4m,3m`, o `16',12'` en pies y pulgadas. No necesita hacer clic antes en el cuadro de valores; al escribir un número, este va allí.

   Obtiene un rectángulo plano en el suelo. Es una **cara**: una superficie con aristas alrededor.

5. Pulse {{key:P}} para {{ui:Empujar/tirar}}.
6. Haga clic en el rectángulo, mueva el puntero hacia arriba y haga clic de nuevo. O haga clic en el rectángulo y escriba una altura, como `3m` o `10'`, y pulse {{key:Enter}}.

   El rectángulo se convierte en una caja con una base, una cara superior y cuatro lados.

7. Pulse {{key:Space}} para volver a {{ui:Seleccionar}} y haga clic en la cara superior de la caja. {{ui:Información de entidad}}, a la derecha, muestra su área.

:::tip
También puede arrastrar en lugar de hacer clic dos veces: pulse en la primera esquina, arrastre y suelte en la segunda. Ambas formas valen para todas las herramientas de dibujo.
:::

## Mirar alrededor

- **Orbitar:** arrastre con el botón central del ratón (la rueda), o pulse {{key:O}} y arrastre con el botón izquierdo.
- **Desplazar la vista:** arrastre con el botón derecho, o con el botón central mientras mantiene pulsada {{key:Shift}}.
- **Zoom:** gire la rueda. Hace zoom hacia lo que haya bajo el puntero.
- **Verlo todo:** pulse {{key:Shift+Z}} o pulse {{ui:Extensión}}.

En un trackpad o en una pantalla táctil los gestos son distintos. Consulte [Orbitar, desplazar y hacer zoom](topic:orbit-pan-zoom).

## Deshacer

Pulse {{key:Mod+Z}} para deshacer y {{key:Mod+Y}} para rehacer, o use {{ui:Deshacer}} y {{ui:Rehacer}} en la barra de herramientas. ModelCraft recuerda los últimos 200 pasos mientras el modelo está abierto. El historial no se guarda en el archivo.

## Guardar su modelo

1. Pulse {{ui:Guardar}} en el grupo {{ui:Archivo}}, o pulse {{key:Mod+S}}.
2. El navegador descarga un archivo con el nombre de su modelo, como `Untitled.modelcraft`. La barra de estado indica adónde fue: "Se guardó Untitled.modelcraft en sus descargas."

**Guardar es una descarga.** Cada guardado crea una copia nueva en su carpeta de descargas; no sobrescribe el archivo que abrió. Para mantener ordenada una carpeta de proyecto, mueva o renombre usted mismo el archivo allí. [Abrir, guardar, importar y exportar](topic:files) explica el motivo y qué más puede hacer.

:::warning
ModelCraft no guarda por sí solo. Si cierra la pestaña con cambios sin guardar, el navegador pregunta antes ("¿Salir del sitio?"). Elija quedarse y después guarde.
:::

## Obtener ayuda

Pulse {{key:F1}} o {{ui:Ayuda}} en la barra de la aplicación para abrir esta ayuda junto al modelo. Funciona sin conexión. Pulse {{key:F1}} de nuevo, o {{key:Esc}} dentro de la ayuda, para cerrarla. Consulte [Uso de esta ayuda](common:help).

## Adónde ir después

- [Dibuje caras con líneas, rectángulos y círculos](topic:draw-faces)
- [Empuje y tire de las caras hasta formar sólidos](topic:push-pull)
- [Escriba tamaños exactos en el cuadro de valores](topic:value-box)
- [Todas las teclas y acciones del ratón](topic:keyboard)
