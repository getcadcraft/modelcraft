---
title: Configuración de ModelCraft
summary: Elija el estilo de teclas que conoce, haga que el panel táctil oriente y encuadre sin los botones de la cámara, y active o desactive el ajuste y las colisiones de sólidos.
keywords: configuración, preferencias, controles, estilo de teclas, mapa de teclas, atajos, blender, panel táctil, trackpad, touchpad, desplazamiento, rueda, pellizco, ajuste, ajustar, colisión, solapamiento, intersecar, atravesar
from: caf77d5b
---

Abra {{ui:Configuración}} con el engranaje de la barra de la aplicación o con {{key:Mod+,}}. La primera pestaña, {{ui:ModelCraft}}, contiene los ajustes propios de esta aplicación; {{ui:General}} contiene los que comparten todas las aplicaciones de CadCraft (tema, barra de herramientas, paneles). Los ajustes de ModelCraft existen solo en la aplicación: aquí los cambia y este navegador los recuerda.

## Controles: qué teclas y botones del ratón

Hay dos estilos de teclas. Cámbielos aquí, con {{ui:Teclas: Empujar/tirar}} / {{ui:Teclas: Modelador}} en la parte inferior derecha de la vista, o al final del menú {{ui:Más}} de la barra de herramientas:

- **Estilo empujar/tirar** (el inicial; las letras de modeladores de empujar/tirar como SketchUp): una letra elige una herramienta: {{key:L}} línea, {{key:R}} rectángulo, {{key:P}} empujar/tirar, {{key:M}} desplazar, {{key:Q}} girar, {{key:S}} escalar, {{key:G}} crear componente. Véase [Teclas y acciones del ratón](topic:keyboard).
- **Estilo modelador** (las teclas de modeladores de mallas como Blender): primero seleccione y luego actúe sobre la selección de inmediato. {{key:G}} la desplaza, {{key:R}} la gira y {{key:S}} la escala desde donde esté el cursor, sin primer clic. Mientras se desplaza, {{key:X}}, {{key:Y}} o {{key:Z}} bloquea el eje rojo, verde o azul, un número escrito fija la distancia (o los grados, o el factor), y un clic o {{key:Enter}} la coloca; {{key:Esc}} o un clic derecho la devuelven a su sitio. Después vuelve a {{ui:Seleccionar}}.

El estilo de teclas es la misma elección que el estilo del menú: el estilo de teclas Modelador es el estilo de menú {{ui:Modelador}}, y elegir uno elige el otro. Véase [Menús, teclas y ratón](topic:menus-keys-and-mouse). La lista completa del Modelador está en [Teclas y acciones del ratón](topic:keyboard#modeler-keys). Las descripciones emergentes de la barra de herramientas y de la tarjeta de inicio siguen el estilo que elija.

## Desplazamiento: rueda del ratón o panel táctil

- **Detectar automáticamente** (el inicial): ModelCraft observa el desplazamiento. El desplazamiento lateral o de precisión, como el que envía un panel táctil, orbita; los pasos completos de la rueda hacen zoom.
- **Rueda del ratón**: el desplazamiento siempre hace zoom hacia el cursor.
- **Panel táctil**: deslice con dos dedos para orbitar, mantenga pulsada {{key:Shift}} y deslice para encuadrar, y pellizque para hacer zoom. Nunca necesita los botones {{ui:Órbita}}, {{ui:Encuadre}} o {{ui:Zoom}}.

Un pellizco hace zoom en todas las opciones. Si «Detectar automáticamente» se equivoca con su ratón o panel táctil, elija el que tiene.

:::tip
En el estilo Modelador también puede orbitar manteniendo pulsado {{key:Alt}} y arrastrando, y encuadrar con {{key:Alt+Shift}} y un arrastre: útil en un portátil sin botón central.
:::

## Ajuste

**Ajustar a puntos, aristas y ejes** (activo al inicio) atrae el cursor a extremos, puntos medios, aristas, guías y a los ejes rojo, verde y azul; véase [Inferencia](topic:inference). Desactívelo cuando quiera colocar algo libremente cerca de otra geometría sin que salte. Las caras, el suelo y los bloqueos de eje siguen funcionando con el ajuste desactivado.

El botón {{ui:Ajuste}} de la parte inferior derecha de la vista hace lo mismo para el trabajo de esta sesión (también se guarda). En el estilo Modelador, {{key:Shift+Tab}} lo cambia.

## Los sólidos se detienen al tocarse

**Detener los sólidos al tocarse** (activo al inicio) evita que un muro se arrastre a través de otro. Con {{ui:Desplazar}} (y con {{key:G}}, y pegar y luego desplazar con {{key:Mod+D}}), la selección se desliza hasta el otro sólido y se detiene al tocarlo; con {{ui:Empujar/tirar}}, una cara se detiene donde encuentra otro sólido. Apoyarse en algo y deslizarse a lo largo de ello está permitido: solo se impide entrar en el interior. Lo que ya se solapa al empezar aún puede separarse.

Para atravesar algo a propósito, haga clic en {{ui:Colisión}} en la parte inferior derecha (o desactive el ajuste), haga el desplazamiento y vuelva a hacer clic en él.

:::note
Las colisiones se comprueban en los desplazamientos y en empujar/tirar. {{ui:Girar}} y {{ui:Escalar}} aún no las comprueban, y la geometría suelta que se toca sigue uniéndose, como siempre: mantenga separadas las cosas independientes en [grupos](topic:groups-components) para que sigan separadas.
:::

## Mesa de la impresora 3D

El tamaño de la mesa de su impresora: {{ui:Sin definir}} (el inicial), 180 × 180 × 180, 220 × 220 × 250, 256 × 256 × 256 o 300 × 300 × 400 mm. Elija el tamaño más cercano al volumen de impresión de su impresora. [Comprobar para impresión 3D](topic:print-3d) indica entonces cuándo un modelo es mayor que la mesa; con {{ui:Sin definir}}, el tamaño no se comprueba.

## Orbitar y encuadrar

**Orbitar alrededor de lo que hay bajo el cursor** (activo al inicio): la órbita gira alrededor de la parte del modelo bajo el cursor, y el encuadre mantiene ese punto bajo el cursor; sobre un espacio vacío ambos usan el centro de la vista. Desactívelo para orbitar siempre alrededor del centro de la vista. **Velocidad de órbita** y **Velocidad de encuadre** van de 0.25× a 3× (1× es el inicial) y se aplican al ratón, al panel táctil, a la pantalla táctil y a las teclas de flecha. Véase [Órbita, encuadre y zoom](topic:orbit-pan-zoom).

## Indicador de esquina

Lo que aparece en la esquina de la vista 3D: **Cubo de vista** (el inicial; arriba a la derecha: haga clic en una cara, arista o vértice para mirar desde allí, arrástrelo para orbitar, y arrastre su anillo de brújula para girar el modelo), **Icono de ejes** (un pequeño marcador X, Y, Z abajo a la izquierda que gira con la vista: X rojo, Y verde, Z azul) o **Ninguno**. Véase [El cubo de vista](topic:view-cube).
