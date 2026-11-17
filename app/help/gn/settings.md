---
title: Configuración de ModelCraft
summary: Elegí el estilo de teclas que conocés, hacé que un trackpad oriente y desplace sin los botones de cámara, y activá o desactivá el ajuste y las colisiones de sólidos.
keywords: configuración, preferencias, controles, estilo de teclas, mapa de teclas, atajos, blender, trackpad, touchpad, desplazamiento, órbita, pellizco, ajustar, ajuste, colisión, superposición, intersecar, atravesar
from: caf77d5b
---

Abrí {{ui:Configuración}} con el engranaje de la barra de la aplicación o con {{key:Mod+,}}. La primera pestaña, {{ui:ModelCraft}}, tiene la configuración propia de esta aplicación; {{ui:General}} tiene la que comparten todas las aplicaciones de CadCraft (tema, barra de herramientas, paneles). La configuración de ModelCraft existe solo en la aplicación: la cambiás acá, y este navegador la recuerda.

## Controles: qué teclas y botones del mouse

Dos estilos de teclas. Cambialos acá, con {{ui:Teclas: Empujar/tirar}} / {{ui:Teclas: Modelador}} abajo a la derecha de la vista, o al final del menú {{ui:Más}} de la barra de herramientas:

- **Estilo empujar/tirar** (el inicial; las letras de modeladores de empujar/tirar como SketchUp): una letra elige una herramienta: {{key:L}} {{ui:Línea}}, {{key:R}} {{ui:Rectángulo}}, {{key:P}} {{ui:Empujar/tirar}}, {{key:M}} {{ui:Mover}}, {{key:Q}} {{ui:Rotar}}, {{key:S}} {{ui:Escalar}}, {{key:G}} crear componente. Ver [Teclas y acciones del mouse](topic:keyboard).
- **Estilo modelador** (las teclas de modeladores de malla como Blender): primero seleccionás, y después actuás directamente sobre la selección. {{key:G}} la mueve, {{key:R}} la rota y {{key:S}} la escala desde donde está el puntero, sin primer clic. Mientras se mueve, {{key:X}}, {{key:Y}} o {{key:Z}} bloquean el eje rojo, verde o azul, un número escrito fija la distancia (o los grados, o el factor), y un clic o {{key:Enter}} la suelta; {{key:Esc}} o un clic derecho la devuelven a su lugar. Después volvés a {{ui:Seleccionar}}.

El estilo de teclas es la misma elección que el estilo del menú: el estilo de teclas Modelador es el estilo de menú {{ui:Modelador}}, y elegir uno elige el otro. Ver [Menús, teclas y mouse](topic:menus-keys-and-mouse). La lista completa del Modelador está en [Teclas y acciones del mouse](topic:keyboard#modeler-keys). Los globos de ayuda de la barra de herramientas y de la tarjeta de inicio siguen el estilo que elegís.

## Desplazamiento: rueda del mouse o trackpad

- **Detectar automáticamente** (el inicial): ModelCraft observa el desplazamiento. El desplazamiento lateral o fino, como lo envía un trackpad, orbita; las muescas enteras de la rueda hacen zoom.
- **Rueda del mouse**: el desplazamiento siempre hace zoom hacia el puntero.
- **Trackpad**: deslizá con dos dedos para orbitar, mantené {{key:Shift}} y deslizá para desplazar, pellizcá para hacer zoom. Nunca necesitás los botones {{ui:Orbitar}}, {{ui:Desplazar}} o {{ui:Zoom}}.

Un pellizco hace zoom en todas las opciones. Si "Detectar automáticamente" adivina mal para tu mouse o trackpad, elegí el que tenés.

:::tip
En el estilo Modelador también podés orbitar manteniendo {{key:Alt}} y arrastrando, y desplazar con {{key:Alt+Shift}} y un arrastre: útil en una laptop sin botón central.
:::

## Ajuste

**Ajustar a puntos, bordes y ejes** (activado al inicio) atrae el puntero a extremos, puntos medios, bordes, guías y los ejes rojo, verde y azul; ver [Inferencia](topic:inference). Desactivalo cuando quieras colocar algo libremente cerca de otra geometría sin que salte. Las caras, el suelo y los bloqueos de eje siguen funcionando con el ajuste desactivado.

El botón {{ui:Ajustar}} abajo a la derecha de la vista hace lo mismo para el trabajo de esta sesión (también se guarda). En el estilo Modelador, {{key:Shift+Tab}} lo cambia.

## Los sólidos se detienen al tocarse

**Detener sólidos donde se tocan** (activado al inicio) evita que un muro se arrastre a través de otro muro. Con {{ui:Mover}} (y {{key:G}}, y pegar y luego mover con {{key:Mod+D}}) la selección se desliza hasta el otro sólido y se detiene al tocarlo; con {{ui:Empujar/tirar}} una cara se detiene donde encuentra otro sólido. Apoyarse sobre algo y deslizarse a lo largo de él está bien: solo se detiene el paso hacia adentro. Las cosas que ya se superponen al comenzar todavía pueden separarse.

Para atravesar algo a propósito, hacé clic en {{ui:Colisión}} abajo a la derecha (o desactivá la opción), hacé el movimiento, y volvé a hacer clic.

:::note
Las colisiones se verifican en movimientos y en empujar/tirar. {{ui:Rotar}} y {{ui:Escalar}} todavía no las verifican, y la geometría suelta que se toca se une igual que siempre: mantené las cosas separadas en [grupos](topic:groups-components) para que sigan separadas.
:::

## Cama de impresora 3D

El tamaño de la cama de tu impresora: {{ui:Sin definir}} (el inicial), 180 × 180 × 180, 220 × 220 × 250, 256 × 256 × 256 o 300 × 300 × 400 mm. Elegí el tamaño más cercano al volumen de impresión de tu impresora. [Verificar impresión 3D](topic:print-3d) entonces indica cuándo un modelo es más grande que la cama; con {{ui:Sin definir}}, el tamaño no se verifica.

## Orbitar y desplazar

**Orbitar alrededor de lo que está bajo el cursor** (activado al inicio): la órbita gira alrededor de la parte del modelo bajo el puntero, y desplazar mantiene ese punto bajo el puntero; sobre espacio vacío, ambas usan el centro de la vista. Desactivalo para orbitar siempre alrededor del centro de la vista. **Velocidad de órbita** y **Velocidad de desplazamiento** van de 0.25× a 3× (1× es el inicial) y se aplican al mouse, al trackpad, al táctil y a las teclas de flecha. Ver [Orbitar, desplazar y hacer zoom](topic:orbit-pan-zoom).

## Indicador de esquina

Qué se muestra en la esquina de la vista 3D: **Cubo de vista** (el inicial; arriba a la derecha: hacé clic en una cara, borde o esquina para mirar desde ahí, arrastralo para orbitar, arrastrá su anillo de brújula para girar el modelo), **Ícono de eje** (un marcador pequeño X, Y, Z abajo a la izquierda que gira con la vista: X rojo, Y verde, Z azul) o **Ninguno**. Ver [El cubo de vista](topic:view-cube).
