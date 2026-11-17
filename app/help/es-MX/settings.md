---
title: Configuración de ModelCraft
summary: Elija el estilo de teclas que conoce, haga que la órbita y el encuadre funcionen con trackpad sin los botones de cámara, y active o desactive el forzcursor y las colisiones de sólidos.
keywords: configuración, preferencias, controles, estilo de teclas, mapa de teclas, atajos, blender, trackpad, touchpad, desplazamiento, órbita, pellizco, forzcursor, colisión, superposición, intersecar, atravesar
from: caf77d5b
---

Abra {{ui:Configuración}} con el engrane de la barra de la aplicación o con {{key:Mod+,}}. La primera pestaña, {{ui:ModelCraft}}, contiene la configuración propia de esta aplicación; {{ui:General}} contiene la que comparten todas las aplicaciones de CadCraft (tema, barra de herramientas, paneles). La configuración de ModelCraft existe solo en la aplicación: aquí la cambia, y este navegador la recuerda.

## Controles: qué teclas y botones del mouse

Hay dos estilos de teclas. Cámbielos aquí, con {{ui:Teclas: Empujar/tirar}} / {{ui:Teclas: Modelador}} abajo a la derecha de la vista, o al final del menú {{ui:Más}} de la barra de herramientas:

- **Estilo Empujar/tirar** (el inicial; las letras de los modeladores de empujar/tirar, como SketchUp): una letra elige una herramienta: {{key:L}} línea, {{key:R}} rectángulo, {{key:P}} empujar/tirar, {{key:M}} desplazar, {{key:Q}} girar, {{key:S}} escalar, {{key:G}} crear componente. Vea [Teclas y acciones del mouse](topic:keyboard).
- **Estilo Modelador** (las teclas de los modeladores de malla, como Blender): seleccione primero y actúe enseguida sobre la selección. {{key:G}} la desplaza, {{key:R}} la gira y {{key:S}} la escala desde donde esté el puntero, sin primer clic. Mientras se desplaza, {{key:X}}, {{key:Y}} o {{key:Z}} bloquean el eje rojo, verde o azul; un número escrito fija la distancia (o los grados, o el factor), y un clic o {{key:Enter}} la colocan; {{key:Esc}} o un clic derecho la devuelven a su lugar. Después, vuelve a {{ui:Seleccionar}}.

El estilo de teclas es la misma elección que el estilo del menú: el estilo Modelador es el estilo de menú {{ui:Modelador}}, y elegir uno elige el otro. Vea [Menús, teclas y mouse](topic:menus-keys-and-mouse). La lista completa del Modelador está en [Teclas y acciones del mouse](topic:keyboard#modeler-keys). Las sugerencias de la barra de herramientas y de la tarjeta de inicio siguen el estilo que elija.

## Desplazamiento: rueda del mouse o trackpad

- **Detectar automáticamente** (el inicial): ModelCraft observa el desplazamiento. El desplazamiento lateral o fino, como el que envía un trackpad, orbita; las muescas completas de la rueda hacen zoom.
- **Rueda del mouse**: el desplazamiento siempre hace zoom hacia el puntero.
- **Trackpad**: deslice con dos dedos para orbitar, mantenga presionada {{key:Shift}} y deslice para encuadrar, pellizque para hacer zoom. Nunca necesita los botones {{ui:Órbita}}, {{ui:Encuadre}} o {{ui:Zoom}}.

Un pellizco hace zoom en todas las opciones. Si "Detectar automáticamente" no acierta con su mouse o trackpad, elija el que tiene.

:::tip
En el estilo Modelador también puede orbitar manteniendo {{key:Alt}} y arrastrando, y encuadrar con {{key:Alt+Shift}} y un arrastre: útil en una laptop sin botón central.
:::

## Forzcursor

**Forzar a puntos, aristas y ejes** (activado al inicio) atrae el puntero a puntos finales, puntos medios, aristas, guías y a los ejes rojo, verde y azul; vea [Inferencia](topic:inference). Desactívelo cuando quiera colocar algo libremente cerca de otra geometría sin que salte. Las caras, el suelo y los bloqueos de eje siguen funcionando con el forzcursor desactivado.

El botón {{ui:Forzcursor}} abajo a la derecha de la vista hace lo mismo para el trabajo de esta sesión (también se guarda). En el estilo Modelador, {{key:Shift+Tab}} lo alterna.

## Los sólidos se detienen al tocarse

**Detener sólidos al tocarse** (activado al inicio) evita que un muro se arrastre a través de otro. Con {{ui:Desplazar}} (y con {{key:G}}, y pegar y luego desplazar con {{key:Mod+D}}), la selección se desliza hasta el otro sólido y se detiene al tocarlo; con {{ui:Empujar/tirar}}, una cara se detiene donde se encuentra con otro sólido. Apoyarse sobre algo y deslizarse a lo largo de ello está permitido: solo se detiene el paso hacia el interior. Lo que ya se superpone al empezar aún puede separarse.

Para atravesar algo a propósito, haga clic en {{ui:Colisión}} abajo a la derecha (o desactive la opción), haga el desplazamiento y haga clic de nuevo.

:::note
Las colisiones se verifican en desplazamientos y en empujar/tirar. {{ui:Girar}} y {{ui:Escalar}} todavía no las verifican, y la geometría suelta que se toca se une, como siempre: mantenga los elementos separados en [grupos](topic:groups-components) para que sigan separados.
:::

## Cama de la impresora 3D

El tamaño de la cama de su impresora: {{ui:Sin definir}} (el inicial), 180 × 180 × 180, 220 × 220 × 250, 256 × 256 × 256 o 300 × 300 × 400 mm. Elija el tamaño más cercano al volumen de impresión de su impresora. [Revisar para impresión 3D](topic:print-3d) indica entonces cuándo un modelo es más grande que la cama; con {{ui:Sin definir}}, el tamaño no se revisa.

## Órbita y encuadre

**Orbitar alrededor de lo que está bajo el cursor** (activado al inicio): la órbita gira alrededor de la parte del modelo que está bajo el puntero, y el encuadre mantiene ese punto bajo el puntero; sobre un espacio vacío, ambos usan el centro de la vista. Desactívelo para orbitar siempre alrededor del centro de la vista. **Velocidad de órbita** y **Velocidad de encuadre** van de 0.25× a 3× (1× es el inicial) y se aplican al mouse, al trackpad, al tacto y a las teclas de flechas. Vea [Órbita, encuadre y zoom](topic:orbit-pan-zoom).

## Indicador de esquina

Lo que se muestra en la esquina de la vista 3D: **Cubo de vistas** (el inicial; arriba a la derecha: haga clic en una cara, arista o vértice para mirar desde allí, arrástrelo para orbitar, o arrastre su anillo de brújula para girar el modelo), **Icono de ejes** (un pequeño marcador X, Y, Z abajo a la izquierda que gira con la vista: X rojo, Y verde, Z azul) o **Ninguno**. Vea [El cubo de vistas](topic:view-cube).
